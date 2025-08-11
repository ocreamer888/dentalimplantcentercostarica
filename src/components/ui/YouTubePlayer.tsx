"use client";

import { useState, useEffect, useRef } from 'react';

interface YouTubePlayerProps {
  videoUrl?: string; // YouTube URL (full URL or just videoId)
  videoId?: string;  // Direct video ID (fallback)
  width?: string | number;
  height?: string | number;
  className?: string;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  startTime?: number; // Start time in seconds
  endTime?: number;   // End time in seconds
  onReady?: () => void;
  onPlay?: () => void;
  onPause?: () => void;
  onEnd?: () => void;
}

// YouTube API types
interface YTPlayerVars {
  autoplay?: 0 | 1;
  controls?: 0 | 1;
  disablekb?: 0 | 1;
  fs?: 0 | 1;
  iv_load_policy?: 1 | 3;
  modestbranding?: 0 | 1;
  playsinline?: 0 | 1;
  rel?: 0 | 1;
  showinfo?: 0 | 1;
  loop?: 0 | 1;
  mute?: 0 | 1;
  enablejsapi?: 0 | 1;
  origin?: string;
  start?: number;
  end?: number;
  playlist?: string;
}

interface YTPlayer {
  playVideo: () => void;
  pauseVideo: () => void;
  unMute: () => void;
}

interface YTPlayerEvent {
  target: YTPlayer;
  data: number;
}

enum YTPlayerState {
  UNSTARTED = -1,
  ENDED = 0,
  PLAYING = 1,
  PAUSED = 2,
  BUFFERING = 3,
  CUED = 5
}

declare global {
  interface Window {
    YT: {
      Player: new (element: HTMLElement, config: {
        height: string | number;
        width: string | number;
        videoId: string;
        playerVars: YTPlayerVars;
        events: {
          onReady: (event: YTPlayerEvent) => void;
          onStateChange: (event: YTPlayerEvent) => void;
          onError?: (event: YTPlayerEvent) => void;
        };
      }) => YTPlayer;
      PlayerState: typeof YTPlayerState;
    };
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function YouTubePlayer({
  videoUrl,
  videoId,
  width = "100%",
  height = "100%",
  className = "",
  autoplay = true,
  muted = true,
  loop = false,
  startTime,
  endTime,
  onReady,
  onPlay,
  onPause,
  onEnd
}: YouTubePlayerProps) {
  const [player, setPlayer] = useState<YTPlayer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [apiReady, setApiReady] = useState(false);
  const playerRef = useRef<HTMLDivElement>(null);
  const playerInstanceRef = useRef<YTPlayer | null>(null);

  // Extract video ID from URL or use provided videoId
  const extractedVideoId = (() => {
    if (videoId) return videoId;
    if (!videoUrl) return null;

    try {
      // Handle various YouTube URL formats
      const patterns = [
        /(?:youtube\.com\/watch\?.*v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/)([a-zA-Z0-9_-]{11})/,
        /youtube\.com\/watch\?.*[?&]v=([a-zA-Z0-9_-]{11})/
      ];

      for (const pattern of patterns) {
        const match = videoUrl.match(pattern);
        if (match && match[1]) {
          console.log('Extracted video ID:', match[1]);
          return match[1];
        }
      }

      // If it's already just an ID (11 characters, alphanumeric + - and _)
      if (/^[a-zA-Z0-9_-]{11}$/.test(videoUrl.trim())) {
        return videoUrl.trim();
      }

      console.error('Could not extract video ID from URL:', videoUrl);
      return null;
    } catch (error) {
      console.error('Error extracting video ID:', error);
      return null;
    }
  })();

  // Load YouTube API
  useEffect(() => {
    if (window.YT && window.YT.Player) {
      console.log('YouTube API already loaded');
      setApiReady(true);
      return;
    }

    console.log('Loading YouTube API...');
    
    // Load the YouTube API script
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    tag.async = true;
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // Set up the callback
    window.onYouTubeIframeAPIReady = () => {
      console.log('YouTube API ready');
      setApiReady(true);
    };

    // Fallback timeout
    const timeout = setTimeout(() => {
      console.error('YouTube API failed to load within 10 seconds');
    }, 10000);

    return () => clearTimeout(timeout);
  }, []);

  // Initialize player when API is ready
  useEffect(() => {
    if (!apiReady || !playerRef.current || playerInstanceRef.current || !extractedVideoId) {
      console.log('Player initialization blocked:', {
        apiReady,
        hasPlayerRef: !!playerRef.current,
        hasExistingPlayer: !!playerInstanceRef.current,
        hasVideoId: !!extractedVideoId
      });
      return;
    }

    console.log('Initializing YouTube player with video ID:', extractedVideoId);

    // Build player vars dynamically
    const playerVars: YTPlayerVars = {
      autoplay: autoplay ? 1 : 0,
      controls: 0,
      disablekb: 1,
      fs: 0,
      iv_load_policy: 3,
      modestbranding: 1,
      playsinline: 1,
      rel: 0,
      showinfo: 0,
      loop: loop ? 1 : 0,
      mute: muted ? 1 : 0,
      enablejsapi: 1,
      origin: window.location.origin
    };

    // Add start time if provided
    if (startTime !== undefined) {
      playerVars.start = startTime;
    }

    // Add end time if provided  
    if (endTime !== undefined) {
      playerVars.end = endTime;
    }

    // If loop is enabled, need to set playlist to the same video
    if (loop) {
      playerVars.playlist = extractedVideoId;
    }

    console.log('Player vars:', playerVars);

    try {
      new window.YT.Player(playerRef.current, {
        height: typeof height === 'number' ? height : height.replace('px', ''),
        width: typeof width === 'number' ? width : width.replace('px', ''),
        videoId: extractedVideoId,
        playerVars,
        events: {
          onReady: (event: YTPlayerEvent) => {
            console.log('Player ready');
            playerInstanceRef.current = event.target;
            setPlayer(event.target);
            
            // If autoplay and muted, unmute after a delay (if desired)
            if (autoplay && muted) {
              setTimeout(() => {
                console.log('Unmuting player');
                event.target.unMute();
              }, 1000);
            }
            
            onReady?.();
          },
          onStateChange: (event: YTPlayerEvent) => {
            const states: Record<number, string> = {
              '-1': 'unstarted',
              '0': 'ended',
              '1': 'playing',
              '2': 'paused',
              '3': 'buffering',
              '5': 'cued'
            };
            console.log('Player state changed to:', states[event.data] || event.data);
            
            const isCurrentlyPlaying = event.data === YTPlayerState.PLAYING;
            setIsPlaying(isCurrentlyPlaying);
            
            if (isCurrentlyPlaying) {
              onPlay?.();
            } else if (event.data === YTPlayerState.PAUSED) {
              onPause?.();
            } else if (event.data === YTPlayerState.ENDED) {
              onEnd?.();
            }
          },
          onError: (event: YTPlayerEvent) => {
            const errors: Record<number, string> = {
              2: 'Invalid video ID',
              5: 'HTML5 player error',
              100: 'Video not found or private',
              101: 'Embedding not allowed by video owner',
              150: 'Embedding not allowed by video owner'
            };
            console.error('YouTube player error:', errors[event.data] || `Error code: ${event.data}`);
          }
        }
      });
    } catch (error) {
      console.error('Failed to create YouTube player:', error);
    }
  }, [apiReady, extractedVideoId, width, height, autoplay, muted, loop, startTime, endTime, onReady, onPlay, onPause, onEnd]);

  // Handle click to play/pause
  const handleClick = () => {
    if (!player) return;

    if (isPlaying) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
  };

  // Show error if no valid video ID found
  if (!extractedVideoId) {
    return (
      <div 
        className={`flex items-center justify-center bg-gray-800 text-white ${className}`}
        style={{ 
          width: typeof width === 'number' ? `${width}px` : width,
          height: typeof height === 'number' ? `${height}px` : height
        }}
      >
        <div className="text-center">
          <div className="text-lg font-semibold mb-2">Invalid Video</div>
          <div className="text-sm opacity-75">Please provide a valid YouTube URL or video ID</div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`relative cursor-pointer ${className}`}
      style={{ 
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height
      }}
      onClick={handleClick}
    >
      {/* YouTube Player Container */}
      <div 
        ref={playerRef}
        className="w-full h-full"
      />
      
      {/* Invisible overlay to capture clicks */}
      <div 
        className="absolute inset-0 z-10 bg-transparent"
        onClick={handleClick}
      />
      
      {/* Optional: Custom play/pause indicator (hidden by default) */}
      <div 
        className={`
          absolute inset-0 flex items-center justify-center
          bg-black bg-opacity-0 transition-all duration-300 pointer-events-none
          hover:bg-opacity-20
        `}
      >
        <div 
          className={`
            w-16 h-16 rounded-full bg-white bg-opacity-0 flex items-center justify-center
            transition-all duration-300 transform scale-0
            group-hover:bg-opacity-90 group-hover:scale-100
          `}
        >
          {isPlaying ? (
            // Pause icon
            <div className="flex gap-1">
              <div className="w-1.5 h-6 bg-black"></div>
              <div className="w-1.5 h-6 bg-black"></div>
            </div>
          ) : (
            // Play icon
            <div 
              className="w-0 h-0 ml-1"
              style={{
                borderLeft: '8px solid black',
                borderTop: '6px solid transparent',
                borderBottom: '6px solid transparent'
              }}
            />
          )}
        </div>
      </div>
      
      {/* Loading state */}
      {!player && (
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
          <div className="text-white text-lg">Loading...</div>
        </div>
      )}
    </div>
  );
}