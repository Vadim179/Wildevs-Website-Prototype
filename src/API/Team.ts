import { ITeamMember } from '../types'
import { requestAPI } from '../Utilities'

export function getTeamMembers(): Promise<ITeamMember[]> {
  return requestAPI('/users')
}

export function getTeamMemberById(teamMemberId: string): Promise<ITeamMember> {
  return requestAPI('/users/' + teamMemberId)
}
