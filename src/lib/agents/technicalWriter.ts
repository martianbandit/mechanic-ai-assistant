import { Agent } from 'crewai'
import { ChatOpenAI } from 'langchain/chat_models/openai'
import { Tool } from 'langchain/tools'

export class TechnicalWriter extends Agent {
  constructor() {
    super({
      name: 'Rédacteur Technique',
      goal: 'Rédiger des explications techniques claires et détaillées',
      backstory: `Je suis un rédacteur technique spécialisé dans la vulgarisation 
                 et l'explication de concepts mécaniques complexes.`,
      llm: new ChatOpenAI({
        modelName: 'gpt-4',
        temperature: 0.6,
        streaming: true
      }),
      tools: [
        new Tool({
          name: 'formatting_tool',
          description: 'Outil de mise en forme des explications techniques',
          func: async (input: string) => {
            // Logique de formatage
            return `Texte formaté: ${input}`
          }
        }),
        new Tool({
          name: 'illustration_tool',
          description: 'Outil de génération de schémas et illustrations',
          func: async (input: string) => {
            // Logique d'illustration
            return `Illustration générée pour: ${input}`
          }
        })
      ],
      verbose: true
    })
  }
}
