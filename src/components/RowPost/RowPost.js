import React from 'react'
import YouTube from 'react-youtube'
import { useState,useEffect } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../constants/constants'
import './RowPost.css'

function RowPost(props) {

  const [movies,setMovies] = useState([])
  const [urlId,setUrlId] = useState('')

        
  useEffect(() => {
    axios.get(props.url).then((responce) => {
      console.log(responce.data)
      
      setMovies(responce.data.results)
    }).catch(err => {
      // alert('Network Error')
    })
  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  
  
  const handleMovie = (id) => {
    console.log(id)
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((responce) => {
      console.log(responce.data)
      if(responce.data.results.length !== 0){
        
        setUrlId(responce.data.results[0])
      }
    })
  }

  return (
    <div className='row'>
        <h1>{props.title}</h1>
        <div className="posters">
          {movies.map((obj) => 
            <img onClick={()=>handleMovie(obj.id)} className={ props.isSmall ? 'smallPoster' : 'poster' }src={`${imageUrl+obj.poster_path}`} alt="poster" />
          )}
        </div>
        { urlId &&  <RiCloseCircleLine  className='delete-icon' onClick={()=> {
          setUrlId('')
        }}/>}
        { urlId && <YouTube opts={opts} videoId={urlId.key} onEnd={() => {
          setUrlId(null)
        }} />}
    </div>
  )
}

export default RowPost
