/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
        return personalMovieDB.count;
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
                  b = prompt('На сколько оцените его?', '').trim();
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (30 >= personalMovieDB.count && personalMovieDB.count >= 10) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        personalMovieDB.privat = !personalMovieDB.privat;
    },
    writeYourGenres: () => {
        for (let i = 1; i < 2; i++) {
            const genres = prompt(`Введите Ваши любимые жанры через запятую:`);
            if (genres === '' || genres === null) {
                alert(`Вы ввели некорректные данные или нажали \"Отмена\". Повторите ввод.`);
                i--;
            } else {
                personalMovieDB.genres = genres.split(',');
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            alert(`Любимый жанр #${i+1} - это ${item}`);
        });
    }

    // This is the first version of writeYourGenres method
    // 
    // writeYourGenres: function () {
    //     for(let i = 1; i <= 3; i++) {
    //         const genre = prompt(`Ваш любимый жанр под номером ${i}`);
    //         if (genre === '' || genre === null) {
    //             console.log('Вы ввели некорректные данные');
    //             i--;
    //         } else {
    //             personalMovieDB.genres[i - 1] = genre;
    //         }
    //     }
    //     personalMovieDB.genres.forEach((item, i) => {
    //         console.log(`Любимый жанр #${i+1} - это ${item}`);
    //     });
    // },
};












