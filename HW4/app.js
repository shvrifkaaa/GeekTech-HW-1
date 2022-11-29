// * Написать функцию переворота строки 
// (стандартную функцию reverse НЕ ИСПОЛЬЗОВАТЬ). 
// Например: "привет" -> "тевирп" и т.д.

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    console.log(newString)
}
reverseString('шытрёвереп акортС');


// * Написать функцию которая вычисляет строку палиндром (палиндром - это строка читающаяся в обе стороны одинаково). 
// Например: "потоп" -> true, "qwerty" -> false, "madam" -> true и т.д.

function palindrome(str) {
    let palinWord = '';
    for (let i = str.length - 1; i >= 0; --i) {
      palinWord += str[i];
    }
    return str == palinWord;
  }
  
  console.log(palindrome('aboba'));
  console.log(palindrome('boba'));
  console.log(palindrome('2552'));
  console.log(palindrome('1222'));

// * Написать функцию которая принимает неограниченное количество аргументов
//  и возвращает их среднее арифметическое. 
//  Например: func(1,2,3,4) -> 2.5, func(1,2,3,4,5,6,7,8,9,10) -> 5.5

let numbers = [1, 3, 5, 7, 9, 11]  // 36 

function getAverage(numbers){
    let sum = 0;

    for (let i = 0; i<numbers.length; i+=1){
        sum += numbers[i]
    }
    return sum/numbers.length
}

console.log(getAverage(numbers) + ' Является среднеарифметическим');


// * Написать функцию транслитерации строки с кириллицы на латиницу 
// (транслитерация- это процесс по замене букв одного алфавита на другой). 
// Например: "Евгений" -> "Evgeniy", "Киселев" -> "Kiselev", 
// "Евгений Киселев" -> "Evgeniy Kiselev". 
// Обратите внимание что символы которые на входят в алфавит надо сохранить как есть.

function rus_to_latin ( str ) {
    var ru = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 
        'е': 'e', 'ё': 'e', 'ж': 'j', 'з': 'z', 'и': 'i', 
        'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 
        'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 
        'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch', 'ш': 'sh', 
        'щ': 'shch', 'ы': 'y', 'э': 'e', 'ю': 'u', 'я': 'ya',
    'ъ': 'ie', 'ь': '', 'й': 'i'
    }, n_str = [];
        
    for ( var i = 0; i < str.length; ++i ) {
       n_str.push(
              ru[ str[i] ]
           || ru[ str[i].toLowerCase() ] == undefined && str[i]
           || ru[ str[i].toLowerCase() ].replace(/^(.)/, function ( match ) { return match.toUpperCase() })
       );
    }
    
    return n_str.join('');
}
const str = 'Лупа и пупа пошли за зарплатой, лупа, получил за пупу, а пупа...';
console.log(rus_to_latin(str));
