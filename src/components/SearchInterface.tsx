'use client'

import { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'

export default function SearchInterface() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSearch = async () => {
    if (!query.trim()) return

    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      })

      if (!response.ok) {
        throw new Error('Failed to process query')
      }

      const data = await response.json()
      setResults([data.response])
    } catch (err) {
      setError('Une erreur est survenue lors de la recherche')
      console.error('Search error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full space-y-6">
      <div className="relative">
        <input 
          type="text" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Posez votre question mécanique..."
          className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 
                     text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 
                     transition-all duration-300 ease-in-out"
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSearch}
          disabled={isLoading}
          className="absolute right-2 top-1/2 -translate-y-1/2 
                     bg-primary-600 hover:bg-primary-500 disabled:bg-gray-600
                     p-2 rounded-full transition-colors"
        >
          {isLoading ? (
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-transparent" />
          ) : (
            <MagnifyingGlassIcon className="h-6 w-6 text-white" />
          )}
        </motion.button>
      </div>
      
      {error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-red-400">
          {error}
        </div>
      )}
      
      {results.length > 0 && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800/50 rounded-xl p-6 space-y-4"
        >
          {results.map((result, index) => (
            <div key={index} className="prose prose-invert max-w-none">
              <div className="text-gray-300 whitespace-pre-wrap">{result}</div>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  )
}
