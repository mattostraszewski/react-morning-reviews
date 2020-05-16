import React from 'react'

export default function Listitem(props) {

  return <div className='List-Item'>

    <img className='movie-poster' src={props.movie.posterImg} />

    <div className='movie-info'>

      <p>{props.movie.title}</p>

      <p>{props.movie.year}</p>


    </div>

  </div>

}