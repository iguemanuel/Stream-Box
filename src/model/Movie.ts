class MovieModel {
  id: number
  title: string
  name?: string
  poster_path: string
  vote_average: number

  constructor(id: number, title: string, name: string, poster_path: string, vote_average: number) {
    this.id = id
    this.title = title
    this.name = name
    this.poster_path = poster_path
    this.vote_average = vote_average
  }
}

export default MovieModel
