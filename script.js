'use strict';
let lang = prompt("Введите язые раскладки: ");

//a
if (lang == 'ru') {
    alert("Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье");
}else if (lang == 'en') {
    alert("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
}else {
    console.log("Ошибка")
}

//b
(lang == 'ru') ? alert("Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье") :  alert("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");


//с
let lang1 = prompt("Введите язые раскладки: ");
const lang_array = [];
lang_array['ru'] = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
lang_array['en'] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
console.log(lang_array[lang1]);

let namePerson = 'Артём';
(namePerson == 'Артём') ? console.log("директор") : 
    (namePerson == 'Александр') ? console.log("преподаватель") :
    console.log("студент")