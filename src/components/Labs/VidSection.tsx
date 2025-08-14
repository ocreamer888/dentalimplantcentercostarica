import YouTubePlayer from "@/components/ui/YouTubePlayer";


export default function VidSection() {
    return (
        
        <div className="relative flex flex-col justify-center items-center gap-4 p-20 h-screen bg-white z-20">
            <div className="relative flex flex-col justify-center items-center w-full h-full text-white rounded-3xl flex-1 overflow-hidden bg-gradient-to-tr from-purple-500/70 via-purple-500/80 to-purple-600/80 backdrop-blur-2xl">
            <YouTubePlayer 
  videoUrl="https://www.youtube.com/watch?v=gbnqgZF_3OI&t=1s"
  width="100%" 
  height="100%"
  autoplay={true}
/>
       
            </div>
            </div>
      
    )
}