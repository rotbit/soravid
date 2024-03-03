'use client';
import Link from "next/link";
export default function GridItem({ item }) {
  return (
      <div className="mb-4 gap-6 overflow-hidden rounded-lg border border-solid border-[#7e7e7e] bg-white hover:shadow-xl">
        <div className="mb-4 p-2 flex flex-row">
          <video src={item.video_url} autoPlay muted loop controls/>
        </div>
        <div>
          <h6 className="px-2 font-semibold text-gray-700">Prompt</h6>
          <p className="p-4 mb-4 text-sm text-[#636262]">
            {item.prompt}</p>
        </div>
      </div>
  )
}