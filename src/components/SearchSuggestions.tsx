'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const suggestions = [
  "Comment diagnostiquer un problème de freins qui grincent ?",
  "Quelle est la cause d'une surchauffe moteur ?",
  "Comment identifier un problème de transmission ?",
  "Quels sont les signes d'une batterie défectueuse ?",
]

export default function SearchSuggestions() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-400 hover:text-primary-400 transition-colors"
      >
        <QuestionMarkCircleIcon className="h-6 w-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute right-0 mt-2 w-72 bg-gray-800 rounded-xl shadow-xl border border-gray-700 p-4 z-50"
          >
            <h3 className="text-sm font-medium text-gray-300 mb-2">
              Questions suggérées
            </h3>
            <ul className="space-y-2">
              {suggestions.map((suggestion, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-sm text-gray-400 hover:text-primary-400 cursor-pointer transition-colors"
                  onClick={() => {
                    // Implémenter la logique pour utiliser la suggestion
                    setIsOpen(false)
                  }}
                >
                  {suggestion}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
