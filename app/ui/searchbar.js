export default function Searchbar() {
    return (
        <div className="p-2 mx-auto max-w-4xl">
          <div className="flex justify-center">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <a href="#">
                  <svg className="h-5 w-5 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M11 4a7 7 0 00-7 7 7 7 0 007 7 7 7 0 007-7 7 7 0 00-7-7z"></path>
                    <path d="M21 21l-4.35-4.35"></path>
                  </svg>
                </a>
              </div>
              <input id= "search" type="search" className="font-serif w-full bg-white border-1 text-black border-gray-900 rounded-lg py-2 pl-10 pr-4 leading-tight focus:outline-none focus:border-gray-600" placeholder="Search Videos" />
            </div>
        </div>
      </div>
    )
}