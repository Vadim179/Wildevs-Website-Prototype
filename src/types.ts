export interface IGame {
  title: string
  description: string
  imageURL: string
  status: 'DEVELOPMENT' | 'PRODUCTION'
  platforms: Array<{ platform: string; url: string }>
  backgroundColor: string
}

export interface ITeamMember {
  name: string
  roles: Array<string>
}
