export default class SerieModel {
  id: number
  title: string
  originalTitle: string
  backdropPath: string
  voteAverage: number

  constructor(data: any) {
    this.id = data.id
    this.title = data.name || 'Sem Nome'
    this.originalTitle = data.original_name || 'Sem Nome'
    this.backdropPath = data.backdrop_path || ''
    this.voteAverage = data.vote_average || 0
  }
}
