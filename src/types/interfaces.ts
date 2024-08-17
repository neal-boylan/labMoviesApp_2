export interface BaseMovieProps {
	title: string;
	budget: number;
	homepage: string | undefined;
	id: number;
	imdb_id: string;
	original_language: string;
	overview: string;
	release_date: string;
	vote_average: number;
	popularity: number;
	poster_path?: string;
	tagline: string;
	runtime: number;
	revenue: number;
	vote_count: number;
	favourite?: boolean;
	must_watch?: boolean;
	genre_ids?: number[];
}

export interface BaseSeriesProps {
	name: string;
	origin_country: string[];
	homepage?: string | undefined;
	id: number;
	in_production: boolean;
	original_language: string;
	overview: string;
	tagline: string;
	first_air_date: string;
	last_air_date: string;
	number_of_seasons: number;
	number_of_episodes: number;
	vote_average: number;
	popularity: number;
	poster_path?: string;
	vote_count: number;
	favourite?: boolean;
	must_watch?: boolean;
	genre_ids?: number[];
	seasons: SeriesSeasonProps[];
}

export interface SeriesSeasonProps {
	air_date: string;
	episode_count: number;
	id: number;
	name: string;
	overview: string;
	poster_path: string,
	season_number: number,
	vote_average: number
}

export interface BaseMovieListProps { 
	movies: BaseMovieProps[];
	action: (m: BaseMovieProps) => React.ReactNode;
}

export interface BaseSeriesListProps { 
	series: BaseSeriesProps[];
	action: (s: BaseSeriesProps) => React.ReactNode;
}   

export interface MovieDetailsProps extends BaseMovieProps {
	genres: {
		id: number;
		name: string;
	}[];
	production_companies: {
		id: number;
		logo_path: string;
		name: string;
		origin_country: string;
	}[];
}

export interface SeriesDetailsProps extends BaseSeriesProps {
	genres: {
		id: number;
		name: string;
	}[];
}

export interface MovieImage {
  file_path: string;
  aspect_ratio?: number;
  height?: number;
  iso_639_1?: string;
  vote_average?: number;
  vote_count?: number;
  width?: number;
}

export interface MoviePageProps {
  movie: MovieDetailsProps;
  images: MovieImage[];
}

export interface SeriesImage {
  file_path: string;
  aspect_ratio?: number;
  height?: number;
  iso_639_1?: string;
  vote_average?: number;
  vote_count?: number;
  width?: number;
}

export interface SeriesPageProps {
  series: SeriesDetailsProps;
  images: SeriesImage[];
}

export type FilterOption = "title" | "name" | "genre" | "year";

export interface MovieListPageTemplateProps extends BaseMovieListProps {
  title: string;
  path?: string;
}

export interface SeriesListPageTemplateProps extends BaseSeriesListProps {
  title: string;
  path?: string;
}

export interface GenreData {
  genres: {
    id: string;
    name: string
  }[];
}

export interface DiscoverMovies {
  page: number;	
  total_pages: number;
  total_results: number;
  results: BaseMovieProps[];
}

export interface DiscoverSeries {
  page: number;	
  total_pages: number;
  total_results: number;
  results: BaseSeriesProps[];
}

export interface Review {
	author: string,
	content: string,
	agree: boolean,
	rating: number,
	movieId: number,
}

export interface CreateMovieProps {
	title: string;
	overview: string;
	release_date: string;
	runtime: number;
	genres: string;
	production_companies: string;
}