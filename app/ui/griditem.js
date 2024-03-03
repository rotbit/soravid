'use client';
import Link from "next/link";
export default function GridItem({ item }) {
  return (
      <div className="mb-4 gap-6 overflow-hidden rounded-lg border border-solid border-gray-700 hover:shadow-xl">
        <div className="mb-4 p-2 flex flex-row">
          <video src={item.video_url} autoPlay muted loop controls/>
        </div>
        <div>
          <span className="px-4 font-sans font-semibold text-white">Prompt</span>
          <p className="p-4 mb-4 font-sans text-sm text-white">
            {item.prompt}</p>
        </div>
      </div>
  )
}