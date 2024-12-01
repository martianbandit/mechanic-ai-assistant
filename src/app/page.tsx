import SearchInterface from '@/components/SearchInterface'
import { Suspense } from 'react'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full space-y-8">
        <h1 className="text-4xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-mechanical-600">
          Mécanique AI Assistant
        </h1>
        <Suspense fallback={<div>Chargement...</div>}>
          <SearchInterface />
        </Suspense>
      </div>
    </main>
  )
}
