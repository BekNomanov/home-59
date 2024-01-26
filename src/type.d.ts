export interface Movie {
  id: number;
  title: string;
}

export interface MovieItemProps {
  id: number;
  title: string;
  onEdit: (id: number, newTitle: string) => void;
  onDelete: (id: number) => void;
}

export interface MovieListProps {
  movies: Movie[];
  onEdit: (id: number, newTitle: string) => void;
  onDelete: (id: number) => void;
}