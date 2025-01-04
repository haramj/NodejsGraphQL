import movies from '../database/movie';

const resolvers = {
  Query: {
    movies: () => {
      return movies;
    },
    movie: (_: any, { id }: any) => {
      return movies.filter(movie => movie.id === id)[0];
    }
  },
  Mutation: {
    addMovie: (_: any, { name, rating }: any) => {
      if (movies.find(movie => movie.name === name)) return null;
      
      const newMovie = {
        id: movies.length + 1,
        name,
        rating
      };
      movies.push(newMovie);
      return newMovie;
    }
  }
};

export default resolvers;