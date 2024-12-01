import { Crew } from 'crewai'
import { MechanicExpert } from '../agents/mechanicExpert'
import { ResearchAgent } from '../agents/researchAgent'
import { TechnicalWriter } from '../agents/technicalWriter'
import { Task } from 'crewai'

export class MechanicCrew {
  private crew: Crew
  private mechanicExpert: MechanicExpert
  private researchAgent: ResearchAgent
  private technicalWriter: TechnicalWriter

  constructor() {
    this.mechanicExpert = new MechanicExpert()
    this.researchAgent = new ResearchAgent()
    this.technicalWriter = new TechnicalWriter()

    this.crew = new Crew({
      agents: [this.mechanicExpert, this.researchAgent, this.technicalWriter],
      tasks: [],
      verbose: true
    })
  }

  async processQuery(query: string) {
    const tasks = [
      new Task({
        description: `Rechercher des informations pertinentes sur: ${query}`,
        agent: this.researchAgent
      }),
      new Task({
        description: `Analyser le problème et proposer des solutions: ${query}`,
        agent: this.mechanicExpert
      }),
      new Task({
        description: 'Rédiger une réponse claire et détaillée',
        agent: this.technicalWriter
      })
    ]

    this.crew.tasks = tasks
    return await this.crew.kickoff()
  }
}
