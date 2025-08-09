import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Dental Implant Center Costa Rica',
  description: 'Learn about our dental implant services and expertise in Costa Rica.',
}

export default function AboutPage() {
  return (
    <div className="flex flex-row h-[96vh] justify-center items-center bg-white">
        <div className='flex flex-col w-1/2'>
        <span className='text-black text-8xl'>
            Ocreamer
        </span>
        <span className='text-black text-8xl'>
            Studio
        </span>
        </div>

      <div className="flex flex-col w-1/5 justify-center items-center">  
        {/* Unicorn Studio Project */}
        <div className="flex flex-col justify-center items-center">
          <div 
            data-us-project="tHqnrGh8TBjZwREVCdcR" 
            style={{width: '400px', height: '1000px'}}
          />
        </div>
        
        <script 
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              !function(){
                if(!window.UnicornStudio){
                  window.UnicornStudio={isInitialized:!1};
                  var i=document.createElement("script");
                  i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",
                  i.onload=function(){
                    window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)
                  },
                  (document.head || document.body).appendChild(i)
                }
              }();
            `
          }}
        />

      </div>
    </div>
  )
}
