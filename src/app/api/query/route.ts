import { NextRequest, NextResponse } from 'next/server'
import { MechanicCrew } from '@/lib/crew/mechanicCrew'

export async function POST(req: NextRequest) {
  try {
    const { query } = await req.json()

    if (!query) {
      return NextResponse.json(
        { error: 'Query is required' },
        { status: 400 }
      )
    }

    const crew = new MechanicCrew()
    const response = await crew.processQuery(query)

    return NextResponse.json({ response })
  } catch (error) {
    console.error('Error processing query:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
