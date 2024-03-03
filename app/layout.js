import './globals.css'
import "next/font/google"
import { Inter } from 'next/font/google'

export const metadata = {
  title: 'OpenAI Sora: All Sora Videos and prompts',
  description: 'Discover Openai Sora: A showcase with how to use Sora for engaging content. Features Sora API, Sora prompts for creators\' rapid video creation.',
  keywords:
  "sora,sora vid, sora videos, sora video, soravid,sora ai,openai sora,video ai,ai video,sora video,ai video generator,text to video,sora ai video,sora ai video generator,sora webui,sora showcase,sora ai showcases",
}
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
