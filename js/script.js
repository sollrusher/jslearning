'use strict';








let personalMovieDB = {

    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start(){
    this.count=+prompt("Сколько фильмов вы посмотрели? ","");

    while(this.count == '' || this.count == null || isNaN(this.count)){
    
        this.count=+prompt("Сколько фильмов вы посмотрели? ","");
        
    }

},
    
    level() {

        if (personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }

    },

    
    writeYouGenres() {

        for (let i = 1; i <= 3; i++) {

            let a;
            a = prompt(`Ваш любимый жанр под номером- ${i}`, "");

            while (a == '' || a == null) {

                a = prompt(`Ваш любимый жанр под номером- ${i}`, "");
            }
             personalMovieDB.genres[i-1] = a;
        }

        personalMovieDB.genres.forEach(function(genre, a){
            console.log(`Любимый жанр #${a+1}- это ${genre}`);
        });

    },

    showMyDB (hidden) {
    if (!hidden)
    {
        console.log(personalMovieDB); 
    }
},

    qA() {

    for (let i = 0; i < 2; i++) {

        let fw1 = prompt(`Фильм?`, ``),
            oc1 = prompt(`Оценка`, ``);

        if (fw1 != null && oc1 != null && fw1 != "" && oc1 != "" && fw1.length < 50 && oc1.length < 50) {

            personalMovieDB.movies[fw1] = oc1;
        } else {
            i--;
        }
    }

},

    toggleVisibleMyDB() {

        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }


    }

};


personalMovieDB.start();
personalMovieDB.level();
personalMovieDB.qA(); 
personalMovieDB.writeYouGenres();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat); 
