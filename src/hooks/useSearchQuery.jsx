
import { useState,useEffect } from 'react'
import { useDispatch,  } from 'react-redux'
import { filterMovies,imageUrl } from '../features/movies/movies-slice'
// לשים את QUERY כ STATE 

export const useSearchQuery = () => {
    const [query, setQuery] = useState('')
    const dispatch = useDispatch()
    useEffect(()=>{
            if(!query)  {
                dispatch(filterMovies([]))
                return
            }
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=b3b1492d3e91e9f9403a2989f3031b0c&query=${query}`)
            .then((response) => response.json())
            .then((json) => json.results)
            .then((movies) =>
               movies.map((m) => ({
                ...m,
                poster_path: imageUrl(m.poster_path),
                backdrop_path: imageUrl(m.backdrop_path),
                isFavorite: false,
              }))
            ).then((results) => {
                dispatch(filterMovies(results))
                console.log(results)
            });
       
    }, [query, dispatch])

  return setQuery
}

