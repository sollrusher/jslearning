"use strict";

let numberOfFilms;
numberOfFilms=prompt("Сколько фильмов вы посмотрели? ","");

let personalMovieDB= {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres:[],
    privat: false
};

let fw1=prompt(`Фильм?`,``),
    oc1=prompt(`Оценка`,``),
    fw2=prompt(`Фильм?`,``),
    oc2=prompt(`Оценка`,``);

personalMovieDB.movies[fw1]=oc1;
personalMovieDB.movies[fw2]=oc2;

console.log(personalMovieDB);