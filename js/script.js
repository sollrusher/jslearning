"use strict";

let numberOfFilms;
numberOfFilms=+prompt("Сколько фильмов вы посмотрели? ","");

let personalMovieDB= {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres:[],
    privat: false
};

if(personalMovieDB.count <10)
{
    alert("Просмотрено довольно мало фильмов");
}
else if(personalMovieDB.count >10 && personalMovieDB.count <30)
{
    alert("Вы классический зритель");
}
else if(personalMovieDB.count>30)
{
    alert("Вы киноман");
}
else{alert("Произошла ошибка");}
   

for (let i=0; i<2; i++)
{

    let fw1=prompt(`Фильм?`,``),
        oc1=prompt(`Оценка`,``);

        if(fw1!=null && oc1!=null && fw1.length!="" && oc1.length!="" && fw1.length<50 && oc1.length <50){
        
        personalMovieDB.movies[fw1]=oc1;
        }
else{i--;}

}

console.log(personalMovieDB);  



