class MovieModel {
  id: number
  title: string
  name?: string
  poster_path: string
  vote_average: number
  overview?: string

  constructor(
    id: number,
    title: string,
    name: string,
    poster_path: string,
    vote_average: number,
    overview: string,
  ) {
    this.id = id
    this.title = title
    this.name = name
    this.poster_path = poster_path
    this.vote_average = vote_average
    this.overview = overview
  }
}

export default MovieModel
