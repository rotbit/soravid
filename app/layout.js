import './globals.css'

export const metadata = {
  title: 'OpenAI Sora: All Sora Videos and prompts',
  description: 'Discover Openai Sora: A showcase with how to use Sora for engaging content. Features Sora API, Sora prompts for creators\' rapid video creation.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
