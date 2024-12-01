import { Agent } from 'crewai'
import { ChatOpenAI } from 'langchain/chat_models/openai'
import { Tool } from 'langchain/tools'

export class MechanicExpert extends Agent {
  constructor() {
    super({
      name: 'Expert Mécanicien',
      goal: 'Analyser les problèmes mécaniques et fournir des solutions techniques précises',
      backstory: `Je suis un expert en mécanique avec plus de 20 ans d'expérience. 
                 Je suis spécialisé dans le diagnostic et la résolution de problèmes mécaniques complexes.`,
      llm: new ChatOpenAI({
        modelName: 'gpt-4',
        temperature: 0.7,
        streaming: true
      }),
      tools: [
        new Tool({
          name: 'diagnostic_tool',
          description: 'Outil pour analyser les symptômes et diagnostiquer les problèmes mécaniques',
          func: async (input: string) => {
            // Logique de diagnostic
            return `Analyse du problème: ${input}`
          }
        }),
        new Tool({
          name: 'solution_tool',
          description: 'Outil pour proposer des solutions techniques détaillées',
          func: async (input: string) => {
            // Logique de solution
            return `Solution proposée: ${input}`
          }
        })
      ],
      verbose: true
    })
  }
}
