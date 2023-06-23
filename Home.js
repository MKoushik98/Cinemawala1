import { useEffect, useState } from "react";
import MegaSearchBar from "../MegaScarchBar/MegaScarchBar";
import MovieCaraousel from "../MovieCaraousel/MovieCaraousel";
import axios from "axios";
import Details from "../DetailsPage/Details";

const Home = () => {
   const options = {
      method: 'GET',
      headers: {
         accept: 'application/json',
         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjkzNzJmMDE4NDhlZWU0MThhNmQ0ZGNlMDNlYTgwMCIsInN1YiI6IjY0OGFlM2Y3NTU5ZDIyMDBmZjBmMzNiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CinLgz3pLT780jQphl7NABf06cUYgwOISQuJPWWXriA'
      }
   };

   const [trendingMovies, setTrendingMovies] = useState([]);
   const [popularMovies, setPopularMovies] = useState([]);
   const [freeMovies, setFreeMovies] = useState([]);


   useEffect(() => {
      const popularMoviesUrl = 'https://api.themoviedb.org/3/tv/popular';
      const topRatedMoviesUrl = 'https://api.themoviedb.org/3/tv/top_rated';
      const freeMovieUrl = 'https://api.themoviedb.org/3/tv/airing_today';

      // Popular movies
      fetch(popularMoviesUrl, options)
         .then(res => res.json())
         .then(json => {
            setPopularMovies(json.results.filter(x => x.overview).slice(0, 5))
            console.log(popularMovies)
         })
         .catch(err => console.error('error:' + err));

      // Trendig movies
      fetch(topRatedMoviesUrl, options)
         .then(res => res.json())
         .then(json => {
            setTrendingMovies(json.results.filter(x => x.overview).slice(0, 5))
            console.log(trendingMovies)
         })
         .catch(err => console.error('error:' + err));

      // Trendig movies
      fetch(freeMovieUrl, options)
         .then(res => res.json())
         .then(json => {
            setFreeMovies(json.results.filter(x => x.overview).slice(0, 5))
            console.log(freeMovies)
         })
         .catch(err => console.error('error:' + err));
   }, []);

   
//    useEffect(()=>{
//       axios.get('https://api.themoviedb.org/3/tv/popular')
//       .then((res)=>{
//         setPopularMovies(res.data.results.filter(x=>x.overview).slice(0,5))
    
       

//       })
//       .catch((err)=>{
//          console.log(err)
//       })
//       axios.get('https://api.themoviedb.org/3/tv/top_rated')
//       .then((res)=>{
//           setTrendingMovies(res.data.results.filter(x=>x.name).slice(10,15))
       
         
//       })
//       .catch((err)=>{
//          console.log(err)
//       })

//       axios.get('https://api.themoviedb.org/3/tv/airing_today')
//       .then((res)=>{
//        setFreeMovies(res.data.results.filter(x=>x.name).slice(10,15))
         
//       })

//    },[])

   return (<>

      <MegaSearchBar />
      <MovieCaraousel heading='Trending' movies={trendingMovies} />
      <MovieCaraousel heading='Whats popular' movies={popularMovies} />
      <MovieCaraousel heading='Free to watch' movies={freeMovies} />
     
   </>);
}

export default Home;