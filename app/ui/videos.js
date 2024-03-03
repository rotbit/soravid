import { fetchVideos } from "@/app/lib/data";
import GridItem from "@/app/ui/griditem";
import React from "react";

export default async function Videos() {
    const videos = await fetchVideos();
    return (
        <section className="relative">
            <div className="container mx-auto shadow-2xl pt-5 rounded-lg p-2 mb-5 bg-white max-w-7xl">
                <div className="px-3 gap-5 [column-count:1] md:mb-12 md:[column-count:2] lg:mb-16 lg:[column-count:3]">
                        {Array.isArray(videos) && videos.map((video, index) => (
                            <GridItem key={index} item={video} />
                        ))}
                    </div>
            </div>

            <div className="container mx-auto shadow-2xl pt-5 rounded-lg p-2 pb-8 mb-5 bg-white max-w-7xl">
                <h1 className="text-blue-500 text-center text-2xl">What is Sora?</h1>
                <hr className="divide-x-0 border mt-2"/>
                <div className="px-20 font-mono pt-5">
                    <p>OpenAI's Sora model is an advanced AI designed to convert text into video.</p>
                    <br/>
                    <p>It generates realistic and imaginative scenes based on text descriptions, creating multiple characters and accurately simulating specific motions and scene details. </p>
                    <br/>
                    <p>Impressive in language understanding and video production, Sora offers creative professionals a new tool for innovation. </p>
                    <br/>
                    <p>For more detailed information, visit OpenAI's official website <a className="text-blue-500" href="https://openai.com/sora">https://openai.com/sora.</a></p>
                </div>
            </div>

            <div className="container mx-auto shadow-2xl pt-5 rounded-lg pb-8 p-2 mb-5 bg-white max-w-7xl">
                <h1 className="text-blue-500 text-center text-2xl">How to access Sora?</h1>
                <hr className="divide-x-0 border mt-2"/>
                <div className="px-20 font-mono pt-5">
                <p>Currently, OpenAI's Sora model is not publicly accessible.</p>
                <br></br>
                <p>However, you can interact with it by posting a video prompt (text description) in the comments on Sam Altman's Twitter account.</p>
                <br></br>           
                <p>Sam Altman, the CEO of OpenAI, may use the Sora model to create a video based on your prompt and share it.</p>
                <br></br>
                <p>This is a unique way to see Sora in action, even though it's not yet available for general use.</p>
                <br></br>
                <p>For updates and more information, you can follow Sam Altman on Twitter.</p>
                </div>
            </div>
        </section>
    );
}