import logo from "@/app/logo.png"
import Image from "next/image";

export default function Navbar() {
  return (
    <section>
      <div className="h-auto w-screen"> 
        <nav className="font-inter mx-auto h-auto w-full max-w-[1500px] lg:relative lg:top-0" x-data="{isOpen: false, menuOne:false}"> 
          <div className="flex flex-col px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-4 xl:px-20">
            <a href="#">
              <Image
                src={logo}
                width={200}
                alt={`OpenAI Sora Video and Prompts`}
              />
            </a> 
            <div className="mt-14 flex flex-col space-y-8 lg:mt-0 lg:flex lg:flex-row lg:space-x-1 lg:space-y-0">
              <a href="/" className="font-inter rounded-lg lg:px-6 lg:py-4 text-white">Home</a>
              <a href="#" className="font-inter rounded-lg lg:px-6 lg:py-4 text-white">Generate Video</a>
              <a href="/feeds" className="font-inter rounded-lg pb-8 lg:px-6 lg:py-4 text-white">Videos</a>
              <a href="#" className="font-inter rounded-lg pb-8 lg:px-6 lg:py-4 text-white">Blog</a>
              <a href="#faqs" className="font-inter rounded-lg pb-8 lg:px-6 lg:py-4 text-white">FAQs</a>
            </div> 
            <a href="#" className="absolute right-5 lg:hidden" >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.75 12H20.25" stroke="#160042" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3.75 6H20.25" stroke="#160042" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3.75 18H20.25" stroke="#160042" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </section>
  )
}
