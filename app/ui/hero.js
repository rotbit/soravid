import SearchBar from "@/app/ui/searchbar"


export default function Hero () {

    return (
        <div className="mx-auto mt-4 max-w-full sm:mt-4 sm:px-0 lg:px-0">
        <div className="relative isolate overflow-hidden px-6 py-12 shadow-2xl sm:rounded-3xl sm:px-24 xl:pt-24">
          <h1 className="font-serif mx-auto max-w-7xl text-center text-8xl text-orange-400	font-bold tracking-tight text-primary sm:text-6xl">
            Create Video From Text
          </h1>
          <h2 className="font-serif mx-auto mt-6 max-w-7xl text-center text-xl leading-8 text-orange-400">
            Discover OpenAI Sora Videos and Generate Video From Text.
          </h2>
          <h2 className="font-serif text-center text-sm text-orange-400 uppercase tracking-widest mt-3">Updated daily.</h2>
        
          <div className="mx-auto flex justify-center">
            <button className="mt-6 border-2 bg-green-500 px-7 border-green-500 rounded-lg p-2 text-white hover:border-2 hover:border-green-800">Generate Video</button>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient
                id="759c1415-0410-454c-8f7c-9a820de03641"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(512 512) rotate(90) scale(512)"
              >
              
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    )
}