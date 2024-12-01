import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mécanique AI Assistant',
  description: 'Assistant intelligent pour la recherche et la résolution de problèmes mécaniques',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="dark">
      <body className={cn(
        inter.className, 
        'bg-gray-950 text-gray-50 antialiased',
        'selection:bg-primary-500 selection:text-white'
      )}>
        {children}
      </body>
    </html>
  )
}
