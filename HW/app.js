


                                    //Задание №1
// *  Создать объект банковской карты со следующими полями:
//  Номер карты(строка), 
//  Дата окончания(строка), 
//  Имя владельца(строка), 
//  Тип карты(строка), 
//  CVC(число). 

let CustomerBankingCard = {
    CardNumber: '4169 5853 5555 1234', //Пробелы проставлены исключительно для удобства, если критично то их не будет:)
    ValidThrough: '29-09-2024',
    CardHolderName : 'Kalandarov Sharif',
    CardType : 'Debit',
    CvcNumber : 123,

}

                                    //Задание №2
// * Создать объект банковского филиала: 
// Код(число), 
// Название(строка), 
// График работы (строка), 
// Работает ли точка вечером (логический), 
// Адрес филиала (объект) со следующими полями: 
//     Город (строка), 
//     улица (строка), 
//     дом(строка)

let BankingBranch = {
    SwiftCode: 22,
    BankingName: 'OptimaBank',
    Schedule: 'ПН-ПТ, 8:00 - 17:00',
    EveningWork: false,
    Address:{
        City: 'Bishkek',
        Street: 'Yunusaliev st',
        home: '100'
    }
}

                                    //Задание №3
// * У нас имеется 4 системы быстрых денежных переводов:
//  Unistream, RIA, Contact, MoneyGram. 
//  По аналогии с карточными процессингами (писали на уроке) реализовать логику отправки денег 
//  (можно просто писать в консоли что деньги отправлены определенной системой)

// let BankingSystem = 'Unistream' || 'RIA' || 'Contact' || 'MoneyGram'

// let BankingTransferSystem = prompt('Выберите Систему денежного перевода: \nUnistream, Ria, Contact, MoneyGram')
// let TransferAmount = prompt('Выберите сумму для перевода')

// switch (BankingTransferSystem) {
//     case 'Unistream':
//         console.log(TransferAmount, 'Было отправлено через Unistream');
//         break;
//     case 'RIA':
//         console.log(TransferAmount, 'Было отправлено через RIA');
//         break;
//     case 'Contact':
//         console.log(TransferAmount, 'Было отправлено через Contact');
//         break;
//     case 'MoneyGram':
//         console.log(TransferAmount, 'Было отправлено через MoneyGram');
//         break;
//     default:
//         console.warn('Данной системы денежного перевода не существует, либо указана неверная сумма');
//         break
// }



                                    //Задание №4
// * Написать программу конвертер арабских чисел (от 1 до 9) в римские.
//  Например: пользователь вводит 4 -> IV, 9 -> IX  и т.д.

// let ArabicNumerals = prompt('Введите число от 1 до 9')

// switch (ArabicNumerals){
//     case '1':
//         console.log('В греческой нумерации это I');
//         break;
//     case '2':
//         console.log('В греческой нумерации это II');
//         break;
//     case '3':
//         console.log('В греческой нумерации это III');
//         break;
//     case '4':
//         console.log('В греческой нумерации это IV');
//         break;
//     case '5':
//         console.log('В греческой нумерации это V');
//         break;
//     case '6':
//         console.log('В греческой нумерации это VI');
//         break;
//     case '7':
//         console.log('В греческой нумерации это VII');
//         break;
//     case '8':
//         console.log('В греческой нумерации это VIII');
//         break;
//     case '9':
//         console.log('В греческой нумерации это IX');
//         break;
//     default :
//         console.warn('Введите число от 1 до 9');
//         break;
// }

                                    //Задание №5
// * Создайте переменную customerType. В нее положите либо 1, либо 2.
//  Тип клиента: 1 - физическое лицо, 2 - юридическое лицо.
//   Попрактикуйтесь с тернарным оператором, выводить вместо числа текст. 
//   Например: customerType = 1 -> Физ. лицо        

let customerType = true

let typeAsText = (customerType ? 'Физическое' : "Юридическое")

console.log('Ваш вид лица в гр. праве это: ' + typeAsText);
