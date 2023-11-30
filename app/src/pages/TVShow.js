import React, { useEffect, useState } from "react";

import Navbar from "../component/Navbar";
import CardSlider from "../component/CardSlider";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../util/firebase-config";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies, getGenres } from "../store";
import Genre from "../component/Genre";
import Slider from "../component/Slider";
import styled from "styled-components";

function TVShow(){
    const [isScrolled, setIsScrolled] = useState(false);
  const movies = useSelector((state) => state.flexxit.movies);
  const genres = useSelector((state) => state.flexxit.genres);
  const genresLoaded = useSelector((state) => state.flexxit.genresLoaded);
  const dataLoading = useSelector((state) => state.flexxit.dataLoading);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
        if (!genres.length) dispatch(getGenres());
      }, []);
    
      useEffect(() => {
        if (genresLoaded) {
          dispatch(fetchMovies({ genres, type: "tv" }));
        }
      }, [genresLoaded]);
    
      const [user, setUser] = useState(undefined);
    
      onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) setUser(currentUser.uid);
        else navigate("/login");
      });
    
      window.onscroll = () => {
        setIsScrolled(window.scrollY === 0 ? false : true);
        return () => (window.onscroll = null);
      };
      return (
        <Container>
          <Navbar isScrolled={isScrolled} />
          <div className="data">
            <Genre genres={genres} type="tv" />
            {movies.length ? (
              <>
                <Slider movies={movies} />
              </>
            ) : (
              <h1 className="not-available">
                No TV Shows avaialble for the selected genre. Please select a
                different genre.
              </h1>
            )}
          </div>
        </Container>
      );
    }
    
    const Container = styled.div`
      .data {
        margin-top: 8rem;
        .not-available {
          text-align: center;
          margin-top: 4rem;
        }
      }
    `;
export default TVShow;





