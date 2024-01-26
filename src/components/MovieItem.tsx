import React from 'react';
import {MovieItemProps} from '../type';

const MovieItem: React.FC<MovieItemProps> = ({ id, title, onEdit, onDelete }) => {
  return (
    <div className='movie-item'>
      <input className='input-item'
        type="text"
        value={title}
        onChange={(e) => onEdit(id, e.target.value)}
      />
      <button className='delete-btn' onClick={() => onDelete(id)}>Удалить</button>
    </div>
  );
};

export default MovieItem;