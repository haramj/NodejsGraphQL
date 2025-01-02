"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const movie_1 = __importDefault(require("../database/movie"));
const resolvers = {
    Query: {
        movies: () => movie_1.default,
        movie: (_, { id }) => {
            return movie_1.default.filter(movie => movie.id === id)[0];
        }
    },
    Mutation: {
        addMovie: (_, { name, rating }) => {
            // 영화 제목 중복 검사
            if (movie_1.default.find(movie => movie.name === name))
                return null;
            // 데이터베이스에 추가
            const newMovie = {
                id: movie_1.default.length + 1,
                name,
                rating
            };
            movie_1.default.push(newMovie);
            return newMovie;
        }
    }
};
exports.default = resolvers;
