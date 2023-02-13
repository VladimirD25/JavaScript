//Напишите валидационный скрипт используя функции

let email = 'test.doberV1@gmail.com';

//Скрипт должен на вход принимать строку.
//После проверки строки выводить в консоль сообщение где будет конкретно написано, что не так в ведённой строке.
//Минимум 5 символов в строке
//Максимум 64 символа в строке

function input_length(string) {
  let isValid = string.length > 4 && email.length < 65;
  !isValid ? console.log('В поле ввести от 5 до 64 символов') : null;
  return isValid;
}

//В строке должны быть буквы

function words_small(string) {
  let isValid = /[a-zA-Z]/g.test(string);
  !isValid ? console.log('В поле необходимо ввести латинские символы') : null;
  return isValid;
}

//Должна быть хотя бы одна буква в верхнем регистре

function words_big(string) {
  let isValid = /[A-Z]/g.test(string);
  !isValid ? console.log('В поле необходимо ввести одну большую букву') : null;
  return isValid;
}

//Должна быть хотя бы одна цифра

function numbers(string) {
  let isValid = /\d/g.test(string);
  !isValid ? console.log('В поле необходимо ввести одну цифру') : null;
  return isValid;
}

//Должна быть хотя бы одна @

function symbol(string) {
  let isValid = /@/g.test(string);
  !isValid ? console.log('В поле необходимо ввести символ - @ ') : null;
  return isValid;
}

//Строка не должна быть пустой

function isEmpty(string) {
  let isValid = string.length !== 0;
  !isValid ? console.log('Строка не должна быть пустой!') : null;
  return isValid;
}

function validation(string) {
  let valid_results = [];

  valid_results.push(input_length(string));
  valid_results.push(words_small(string));
  valid_results.push(words_big(string));
  valid_results.push(numbers(string));
  valid_results.push(symbol(string));
  valid_results.push(isEmpty(string));

  valid_results.includes(false)
    ? console.log('-- Исправьте строку --')
    : console.log('OK');
}

validation(email);
