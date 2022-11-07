import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../../features/movies/movies-slice";
import "react-toastify/dist/ReactToastify.css";
//navigate from code / imperative navigation
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
import "./MovieItem .css";
// import imgForItems from "./imgForItems";
import star from "../nav/star.svg";

const MovieItem = ({ movie }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const iconStyles = { color: "#FF008A", fontSize: "35px" };
  return (
    <div className="cardItem">
      <div
        onClick={() => {
          navigate(`/movie/${movie.id}`);
        }}
        className="btn border-0 d-flex flex-column  align-items-center container cardItemHover"
      >
        {/* <h2>{movie.title}</h2> */}
        {/* <imgForItems /> */}
        <img
          className="image_Card"
          src={movie.poster_path ?? ''}
          alt="movie poster"
        />

        <button
          className="btn border-0 favorite"
          onClick={(e) => {
            e.stopPropagation();
            if (!movie.isFavorite) {
              toast.success("Added", {
                position: "top-center",
                style: { textAlign: "center" },
              });
            } else {
              toast.error("Removed", {
                position: "top-center",
                style: { textAlign: "center" },
              });
            }

            dispatch(toggleFavorite(movie.id));
          }}
        >
          {movie.isFavorite && <FaHeart style={iconStyles} />}
          {!movie.isFavorite && <FaRegHeart style={iconStyles} />}
        </button>
        <div className="movie_item__stars">
          {movie.vote_average >= 0 && <img src={star} alt="" />}
          {movie.vote_average >= 2 && <img src={star} alt="" />}
          {movie.vote_average >= 4 && <img src={star} alt="" />}
          {movie.vote_average >= 6 && <img src={star} alt="" />}
          {movie.vote_average >= 8 && <img src={star} alt="" />}
        </div>
       
        {/* <p className="movie_card__description" maxLength="20">
          {movie.overview}
        </p> */}
      </div>
    </div>
  );
};

export default MovieItem;
