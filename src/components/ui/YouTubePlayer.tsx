"use client";

import { useState, useEffect, useRef } from 'react';

interface YouTubePlayerProps {
  videoUrl?: string;
  videoId?: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  startTime?: number;
  endTime?: number;
  onReady?: () => void;
  onPlay?: () => void;
  onPause?: () => void;
  onEnd?: () => void;
}

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
  mute: () => void;
  setVolume: (volume: number) => void;
  getPlayerState: () => number;
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
  videoUrl = "dQw4w9WgXcQ",
  videoId,
  width = "100%",
  height = 315,
  className = "",
  autoplay = false,
  muted = true,
  loop = true,
  startTime,
  endTime,
  onReady,
  onPlay,
  onPause,
  onEnd
}: YouTubePlayerProps) {
  const [apiReady, setApiReady] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  const playerInstanceRef = useRef<YTPlayer | null>(null);
  const initAttempted = useRef(false);

  // Extract video ID from URL or use provided videoId
  const extractedVideoId = (() => {
    if (videoId) return videoId;
    if (!videoUrl) return "dQw4w9WgXcQ";

    try {
      const patterns = [
        /(?:youtube\.com\/watch\?.*v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/)([a-zA-Z0-9_-]{11})/,
        /youtube\.com\/watch\?.*[?&]v=([a-zA-Z0-9_-]{11})/
      ];

      for (const pattern of patterns) {
        const match = videoUrl.match(pattern);
        if (match && match[1]) {
          return match[1];
        }
      }

      if (/^[a-zA-Z0-9_-]{11}$/.test(videoUrl.trim())) {
        return videoUrl.trim();
      }

      return "dQw4w9WgXcQ";
    } catch {
      return "dQw4w9WgXcQ";
    }
  })();

  // Load YouTube API
  useEffect(() => {
    if (window.YT?.Player) {
      setApiReady(true);
      return;
    }

    if (document.querySelector('script[src*="youtube.com/iframe_api"]')) {
      const checkInterval = setInterval(() => {
        if (window.YT?.Player) {
          setApiReady(true);
          clearInterval(checkInterval);
        }
      }, 100);

      const timeout = setTimeout(() => {
        clearInterval(checkInterval);
        if (!window.YT?.Player) {
          setError('YouTube API failed to load');
        }
      }, 10000);

      return () => {
        clearInterval(checkInterval);
        clearTimeout(timeout);
      };
    }

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    tag.async = true;
    
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      setApiReady(true);
    };

    const timeout = setTimeout(() => {
      if (!window.YT?.Player) {
        setError('YouTube API failed to load');
      }
    }, 10000);

    return () => clearTimeout(timeout);
  }, []);

  // Initialize player when API is ready
  useEffect(() => {
    if (!apiReady || !playerRef.current || playerInstanceRef.current || initAttempted.current) {
      return;
    }

    initAttempted.current = true;

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
      enablejsapi: 1,
      origin: typeof window !== 'undefined' ? window.location.origin : undefined
    };

    if (muted) playerVars.mute = 1;
    if (loop) {
      playerVars.loop = 1;
      playerVars.playlist = extractedVideoId;
    }
    if (startTime !== undefined) playerVars.start = startTime;
    if (endTime !== undefined) playerVars.end = endTime;

    try {
      new window.YT.Player(playerRef.current, {
        height: typeof height === 'number' ? height : parseInt(height.toString()),
        width: typeof width === 'number' ? width : '100%',
        videoId: extractedVideoId,
        playerVars,
        events: {
          onReady: (event: YTPlayerEvent) => {
            playerInstanceRef.current = event.target;
            setError(null);
            
            if (muted) {
              event.target.mute();
            }
            
            onReady?.();
          },
          onStateChange: (event: YTPlayerEvent) => {
            if (event.data === YTPlayerState.PLAYING) {
              onPlay?.();
            } else if (event.data === YTPlayerState.PAUSED) {
              onPause?.();
            } else if (event.data === YTPlayerState.ENDED) {
              // Force restart the video for infinite loop
              if (playerInstanceRef.current) {
                playerInstanceRef.current.playVideo();
              }
              onEnd?.();
            }
          },
          onError: (event: YTPlayerEvent) => {
            const errorMessages: Record<number, string> = {
              2: 'Invalid video ID',
              5: 'HTML5 player error',
              100: 'Video not found or private',
              101: 'Embedding disabled by video owner',
              150: 'Embedding disabled by video owner'
            };
            const errorMsg = errorMessages[event.data] || `YouTube error: ${event.data}`;
            setError(errorMsg);
          }
        }
      });
    } catch {
      setError('Failed to initialize player');
    }
  }, [apiReady, extractedVideoId, width, height, autoplay, muted, loop, startTime, endTime, onReady, onPlay, onPause, onEnd]);

  // Show nothing during loading or error states
  if (error || !apiReady) {
    return (
      <div 
        className={className}
        style={{ 
          width: typeof width === 'number' ? `${width}px` : width,
          height: typeof height === 'number' ? `${height}px` : height
        }}
      />
    );
  }

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{ 
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height
      }}
    >
      {/* YouTube Player Container - scaled up and cropped to hide UI */}
      <div 
        ref={playerRef}
        className="pointer-events-none"
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: '0%',
          left: '0%',
          transform: 'scale(1)',
        }}
      />
      
      {/* Global CSS to hide all YouTube UI elements */}
      <style dangerouslySetInnerHTML={{
        __html: `
          iframe {
            pointer-events: none !important;
          }
          
          /* Hide all YouTube UI elements */
          .ytp-chrome-top,
          .ytp-chrome-bottom,
          .ytp-gradient-top,
          .ytp-gradient-bottom,
          .ytp-title,
          .ytp-chrome-controls,
          .ytp-watermark,
          .ytp-pause-overlay,
          .ytp-title-text,
          .ytp-title-link,
          .ytp-show-cards-title,
          .ytp-card-add-to-playlist,
          .ytp-cards-teaser,
          .ytp-ce-video,
          .ytp-ce-playlist,
          .ytp-ce-channel,
          .ytp-spinner,
          .ytp-bezel,
          .ytp-big-mode .ytp-bezel,
          .html5-endscreen,
          .html5-player-chrome,
          .ytp-impression-link,
          .ytp-click-to-subscribe-button,
          .ytp-videowall-still,
          .ytp-scroll-min,
          .ytp-contextmenu {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
            z-index: -9999 !important;
          }
          
          /* Hide the video info overlay that appears on start */
          .ytp-gradient-top,
          .ytp-chrome-top-buttons {
            display: none !important;
          }
          
          /* Remove any padding or margins that might show UI */
          .html5-video-container {
            padding: 0 !important;
            margin: 0 !important;
          }
        `
      }} />
      
      {/* Invisible overlay to block all user interactions */}
      <div className="absolute inset-0 bg-transparent pointer-events-auto cursor-default" />
    </div>
  );
}