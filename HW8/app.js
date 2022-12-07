let arr = [5,4,1,20,0, -4, -8, 100,4,-74,-5,0,0,1,2,7]


// В каждом задании данные в массивах можете вставлять свои.
// 1. Дан массив из чисел: [5,4,1,20,0, -4, -8, 100,4,-74,-5,0,0,1,2,7].
// Задания к нему:

// * map: умножьте каждое число из массива на 5
let double = arr.map((num) => num * 5)

console.log(double);

// filter: оставьте в массиве только положительные числа (ноль тоже исключить)

let plusNumbers = arr.filter((num) => num >= 1)

console.log(plusNumbers);

// reduce: найдите максимальное число в массиве

let maxValue = arr.reduce(() => Math.max(...arr))

console.log(maxValue);   //  100

// * reduce: найдите минимальное число в массиве

let minValue = arr.reduce(() => Math.min(...arr))

console.log(minValue); // -74




// 2. Дан массив строк (имена людей): 
// ["алиса","ЖЕНЯ","артем","ПАВЕЛ","ЖАКШЫЛЫК","антон","айсулуу", "канаим"]

let names = ["алиса","ЖЕНЯ","артем","ПАВЕЛ","ЖАКШЫЛЫК","антон","айсулуу", "канаим"]

// * map: использовать функцию capitalize из прошлой домашки, чтобы все имена выглядели как надо: артем -> Артем.

let capitalize = names.map((name) => name[0].toUpperCase() + name.slice(1).toLowerCase() )

console.log(capitalize);

// * map: все имена написать на латинице (тоже использовать функцию из домашки) 

// function rus_to_latin ( str ) {
//     var ru = {
//         'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 
//         'е': 'e', 'ё': 'e', 'ж': 'j', 'з': 'z', 'и': 'i', 
//         'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 
//         'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 
//         'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch', 'ш': 'sh', 
//         'щ': 'shch', 'ы': 'y', 'э': 'e', 'ю': 'u', 'я': 'ya',
//     'ъ': 'ie', 'ь': '', 'й': 'i'
//     }, n_str = [];
        
//     for ( var i = 0; i < str.length; ++i ) {
//        n_str.push(
//               ru[ str[i] ]
//            || ru[ str[i].toLowerCase() ] == undefined && str[i]
//            || ru[ str[i].toLowerCase() ].replace(/^(.)/, function ( match ) { return match.toUpperCase() })
//        );
//     }
    
//     return n_str.join('');
// }
// const str = 'Лупа и пупа пошли за зарплатой, лупа, получил за пупу, а пупа...';
// console.log(rus_to_latin(str));.

// * filter: вывести имена начинающиеся с буквы "А"

let filteredName = names.filter((item) => item[0] === 'а' )

console.log(filteredName);

// * reduce: получить имя в котором само много букв

// let longestName = names.reduce( (item) => item.length >= item )

// console.log(longestName);



// 3. Дан массив объектов (модели машин). 
// Создать класс модели машины: 
// Бренд(строка), Модель(строка), Страна(строка), год выпуска(число), объем двигателя(число).

let cars = [
    CarModel = {
        Brand: 'Mercedes',
        Model: 'CLS-500',
        Country: 'Germany',
        Year: 2016,
        EngVolume: 5.5
    },
    CarModel = {
        Brand: 'Lexus',
        Model: 'ES-300h',
        Country: 'Japan',
        Year: 2015,
        EngVolume: 2.5
    },
    CarModel = {
        Brand: 'Toyota',
        Model: 'Семидесятка',
        Country: 'Japan',
        Year: 2017,
        EngVolume: 3.5
    },
    CarModel = {
        Brand: 'Daewoo',
        Model: 'Matiz',
        Country: 'Uzbekistan',
        Year: 2007,
        EngVolume: 0.8
    },
    CarModel = {
        Brand: 'Nissan',
        Model: 'SkyLine',
        Country: 'Japan',
        Year: 1998,
        EngVolume: 2.0
    }
]

// map: вывести название машины в виде: "Volkswagen Golf IV 2.0L (2002)"

// let carInfo = cars.map((item) => item(item.Brand, item.Model, item.Country, item.Year, item.EngVolume))

// console.log(carInfo);


// filter: вывести японские машины с объемом двигателя больше 3 литров

let bigEngVolumeCar = cars.filter((item) => item.EngVolume >= 3)

console.log(bigEngVolumeCar );

// reduce: вывести самую старую машину(у которой год выпуска минимальный)

let olderCar = cars.reduce( (item) => item.Math.min([...item.Year])  )  

console.log(olderCar);