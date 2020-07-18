"use strict";

let numberOfFilms;


function start(){
    numberOfFilms=+prompt("Сколько фильмов вы посмотрели? ","");

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
    
        numberOfFilms=+prompt("Сколько фильмов вы посмотрели? ","");
        
    }

}
start();


let personalMovieDB= {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres:[],
    privat: false
};

function level (){

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
}

level();


function qA(){
for (let i=0; i<2; i++)
{

    let fw1=prompt(`Фильм?`,``),
        oc1=prompt(`Оценка`,``);

        if(fw1!=null && oc1!=null && fw1!="" && oc1!="" && fw1.length<50 && oc1.length <50){
        
        personalMovieDB.movies[fw1]=oc1;
        }
else{i--;}
}
}
 qA();

function showMyDB (hidden)
{
    if (!hidden)
    {
        console.log(personalMovieDB); 
    }
}


function writeYouGenres (){

    for(let i=1;i<=3;i++){
personalMovieDB.genres[i-1]= prompt(`Ваш любимый жанр под номером- ${i}`, "");

    }
}
writeYouGenres();
showMyDB(personalMovieDB.privat);