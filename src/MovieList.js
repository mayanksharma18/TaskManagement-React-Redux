import React from 'react';
import axios from 'axios'

class MovieList extends React.Component{
    state={
        movies:[]
    }

async componentDidMount(){
  const res=await axios.get('https://tv-v2.api-fetch.website/movies/3?sort=trending&order=1&genre=documentary');
  console.log(res)
  this.setState({
      movies:res.data
  })
}
render(){
    return(
    <h1>Hello</h1>
    )
}
}

export default MovieList;
