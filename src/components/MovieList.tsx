import React from 'react';
import MovieItem from './MovieItem';
import { MovieListProps} from '../type';

const MovieList: React.FC<MovieListProps> = ({ movies, onEdit, onDelete }) => {
  return (
    <div>
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          id={movie.id}
          title={movie.title}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default MovieList;