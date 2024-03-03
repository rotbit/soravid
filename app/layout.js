import './globals.css'
import "next/font/google"
import { Inter } from 'next/font/google'

export const metadata = {
  title: 'OpenAI Sora: All Sora Videos and prompts',
  description: 'Discover Openai Sora: A showcase with how to use Sora for engaging content. Features Sora API, Sora prompts for creators\' rapid video creation.'
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
