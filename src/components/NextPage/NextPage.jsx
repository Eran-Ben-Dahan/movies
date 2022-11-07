import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../../features/movies/movies-slice';
import './NextPage.css'
export default React.memo(function Pages({genre}) {
  console.log(genre)
  const dispatch = useDispatch()

  const [page,setPage] = useState(0)
  const nextPage =  () => {
    setPage(p => Math.max(p+1,2))
}

const backPage = () => {
    if (page < 2) {
      return
    }
    setPage(p => p-1)
}

useEffect(() => {
  if(page === 0) return
  dispatch(fetchMovies({genre,page}));
}, [page, genre, dispatch])

return (
  <div className='next_page'>
          <button className='btn_next btn btn-info' onClick={()=>{
         backPage()
      }}>Back</button>
      <label>{Math.max(1, page)}</label>
      <button className='btn_next btn btn-info' onClick={()=>{
        nextPage()
      }}>Next</button>
  </div>
)})