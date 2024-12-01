import { Agent } from 'crewai'
import { ChatOpenAI } from 'langchain/chat_models/openai'
import { Tool } from 'langchain/tools'

export class ResearchAgent extends Agent {
  constructor() {
    super({
      name: 'Agent de Recherche',
      goal: 'Rechercher et compiler des informations techniques pertinentes',
      backstory: `Je suis un agent spécialisé dans la recherche et l'analyse 
                 d'informations techniques en mécanique.`,
      llm: new ChatOpenAI({
        modelName: 'gpt-4',
        temperature: 0.5,
        streaming: true
      }),
      tools: [
        new Tool({
          name: 'search_tool',
          description: 'Outil de recherche dans la base de connaissances mécanique',
          func: async (input: string) => {
            // Logique de recherche
            return `Résultats de recherche pour: ${input}`
          }
        }),
        new Tool({
          name: 'validation_tool',
          description: 'Outil de validation des informations techniques',
          func: async (input: string) => {
            // Logique de validation
            return `Validation des informations: ${input}`
          }
        })
      ],
      verbose: true
    })
  }
}
