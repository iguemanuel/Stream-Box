import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/',
})

const endPoints = {
  series: '3/discover/tv',
  movies: '3/discover/movie',
  popular: '3/movie/popular',
}

const apiKey = '212e8883e663280ace84f6021868265c'

export { api, endPoints, apiKey }
