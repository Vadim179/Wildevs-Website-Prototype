import { IGame } from '../types'
import { requestAPI } from '../Utilities'

export function getGames(): Promise<IGame[]> {
  return requestAPI('/games')
}

export function getGameById(gameId: string): Promise<IGame> {
  return requestAPI('/games/' + gameId)
}
