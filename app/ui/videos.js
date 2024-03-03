import { fetchVideos } from "@/app/lib/data";
import GridItem from "@/app/ui/griditem";
import React from "react";

export default async function Videos() {
    const videos = await fetchVideos();
    return (
        <section className="relative">
            <div className="container mx-auto shadow-2xl pt-5 rounded-lg p-2 mb-5 max-w-7xl">
                <div className="px-3 gap-5 [column-count:1] md:mb-12 md:[column-count:2] lg:mb-16 lg:[column-count:3]">
                        {Array.isArray(videos) && videos.map((video, index) => (
                            <GridItem key={index} item={video} />
                        ))}
                    </div>
            </div>

            <div className="container mx-auto shadow-2xl pt-5 rounded-lg p-2 pb-8 mb-5 max-w-7xl">
                <h1 className="text-green-500 text-center text-2xl">What is Sora,Text to Video Generator?</h1>
                <div className="leading-loose px-4 font-sans pt-5 text-white">
                Sora, an AI-driven technology, specializes in generating realistic and imaginative scenes directly from text instructions, showcasing its capabilities without any modifications. Explore our technical report for an in-depth understanding. Discover the unaltered, high-quality videos created solely by Sora on this page, illustrating the model&apos;s advanced content generation prowess.
                </div>
            </div>

            <div className="container mx-auto shadow-2xl pt-5 rounded-lg pb-8 p-2 mb-5 max-w-7xl">
                <h1 className="text-green-500 text-center text-2xl">How to access Sora?</h1>
                <div className="leading-loose px-4 pt-5 font-sans text-white">
                Sora is an AI model that can create realistic and imaginative scenes from text instructions. Sora can generate videos up to a minute long while maintaining visual quality and adherence to the user’s prompt.

Sora is becoming available to red teamers to assess critical areas for harms or risks. OpenAI are also granting access to a number of visual artists, designers, and filmmakers to gain feedback on how to advance the model to be most helpful for creative professionals.

OpenAI will sharing their research progress early to start working with and getting feedback from people outside of OpenAI and to give the public a sense of what AI capabilities are on the horizon.

 
At this time, they don’t have a timeline or additional details to share on Sora’s broader public availability. They will be taking several important safety steps, including engaging policymakers, educators and artists around the world to understand their concerns and to identify positive use cases for this new technology. Please stay tuned to their Twitter and website for more updates.

 

For more information, please refer to <a className="text-blue-500" href="https://openai.com/sora">https://openai.com/sora</a>


                </div>
            </div>

            <div className="container mx-auto shadow-2xl pt-5 rounded-lg pb-8 p-2 mb-5 max-w-7xl">
                <h1 className="text-green-500 text-center text-2xl">How Sora AI Works?</h1>
                <div className="leading-loose px-4 pt-5 font-sans text-white">
                Sora combines features of text and image generating tools in what is called a “diffusion transformer model”.

Transformers are a type of neural network first introduced by Google in 2017. They are best known for their use in large language models such as ChatGPT and Google Gemini.

Diffusion models, on the other hand, are the foundation of many AI image generators. They work by starting with random noise and iterating towards a “clean” image that fits an input prompt.

A series of images showing a picture of a castle emerging from static.
Diffusion models (in this case Stable Diffusion) generate images from noise over many iterations. Stable Diffusion / Benlisquare / Wikimedia, CC BY-SA
A video can be made from a sequence of such images. However, in a video, coherence and consistency between frames are essential.

Sora uses the transformer architecture to handle how frames relate to one another. While transformers were initially designed to find patterns in tokens representing text, Sora instead uses tokens representing small patches of space and time.                </div>
            </div>

            <div className="container mx-auto shadow-2xl pt-5 rounded-lg pb-8 p-2 mb-5 max-w-7xl">
                <h1 className="text-green-500 text-center text-2xl">OpenAI Sora Detailed Tutorial and Usage Guide</h1>
                <div className="leading-loose px-4 pt-5 font-sans text-white">
                OpenAI Sora is a new AI large model capable of generating realistic and imaginative 60-second videos based on simple text prompts.
                <ul>
                    <li>1、Log in to your OpenAI account and locate the Sora interface.</li>
                    <li>2、Enter your text description in the designated area, which can be a story outline, scene description, or specific action instructions.</li>
                    <li>3、Click the generate button, and OpenAI Sora will create a 60-second video based on the entered text prompts.</li>
                </ul>
                </div>
            </div>
            <div className="container mx-auto shadow-2xl pt-5 rounded-lg pb-8 p-2 mb-5 max-w-7xl">
                <h1 className="text-green-500 text-center text-2xl">What can OpenAI Sora be used for?</h1>
                <div className="leading-loose px-4 pt-5 font-sans text-white">
                The applications of OpenAI Sora are incredibly diverse. Here are some usage examples:
                <ul>
                    <li>1、Film and Video Production: Sora can significantly improve the efficiency of video production, saving on labor and time costs. Producers only need to provide a text description to generate exquisite 60-second videos, eliminating the cumbersome shooting and post-production process.</li>
                    <li>2、Advertising and Marketing: Advertisers can use Sora to quickly generate a variety of advertising videos, attracting consumer attention, enhancing brand image, and boosting sales.</li>
                    <li>3、Education and Training: Teachers can utilize Sora to create engaging and interesting educational videos, increasing student interest and participation.</li>
                    <li>4、Virtual Reality: Combining Sora with virtual reality technology can create a more realistic and immersive virtual world.</li>
                </ul>
                </div>
            </div>
        </section>
    );
}