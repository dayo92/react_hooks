import React, {useState} from 'react';
import './App.css';


const App = () => {
  //called my state movies and whenever i want to change my state I will use my setMovies/setState method

  
   const [movies, setMovies] = useState(
     [
       {
       name:"lord of the rings",
       mainActor:"Stryder",
       YearOfRelease:2001
   },
   {
       name:"Rambo",
       mainActor:"Sly",
       YearOfRelease: 1985
   }
     ]
   );
   const changeMovie = () => {
     let newState = [...movies];
     newState[0].name = "Terminator 3"
     setMovies(newState)
   }

   
   return (
     <div className="App">
     { movies.map((movie) =>{
     return <h1>film: {movie.name}, Actor: {movie.mainActor}</h1>
     })}
     <button onClick={changeMovie}> Change Movie </button>
     </div>
   )
  }




  export default App


 