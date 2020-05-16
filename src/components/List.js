import React, { Component } from 'react'
import Listitem from './Listitem.js'
import movieData from '../data/movies.json'

export default class List extends Component {

  constructor() {
    super();

    this.state = {
      movies: movieData
    }
  }


  render() {

    const moviesMap = this.state.movies.map(movie => {
      return <Listitem key={movie.id} movie={movie} />   //what is fucking happening...
    })

    return (

      <div>{moviesMap}</div>

    )

  }
}