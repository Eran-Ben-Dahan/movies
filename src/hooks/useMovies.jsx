import {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../features/movies/movies-slice';

const useMovies = ({genre}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies({genre}));
  }, [dispatch,genre]);
}

export default useMovies