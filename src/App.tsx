import React, { useState } from 'react';
import MovieList from './components/MovieList';
import { Movie} from './type';
import './App.css';

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [newMovie, setNewMovie] = useState('');

  const addMovie = () => {
    if (newMovie !== '') {
      const newMovieObj: Movie = {
        id: Math.random(),
        title: newMovie,
      };
      setMovies((prevMovies) => [...prevMovies, newMovieObj]);
      setNewMovie('');
    }
  };

  const editMovie = (id: number, newTitle: string) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? { ...movie, title: newTitle } : movie
      )
    );
  };

  const deleteMovie = (id: number) => {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
  };

  return (
    <>
      <div className='movie'>
        <h3 className='h4'>Отслеживание кинофильмов</h3>
        <div className="box-input">
          <input className='input'
            type="text"
            placeholder="Введите новый фильм"
            value={newMovie}
            onChange={(e) => setNewMovie(e.target.value)}
          />
          <button className='addBtn' onClick={addMovie}>Добавить</button>
        </div>
        <hr className='hr'/>
        <MovieList movies={movies} onEdit={editMovie} onDelete={deleteMovie}/>
      </div>

    </>
  );
};

export default App;