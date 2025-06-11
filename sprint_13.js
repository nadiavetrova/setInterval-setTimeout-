// iTGid.info - курс JS24/2


// Task 01
// Напишите функцию, которая с помощью timeout выводит в .out-1 строку 'done'. Время  - 10 секунд. 

function t01() {
  const out1 = document.querySelector('.out-1');
  setTimeout(() => {
    out1.textContent = 'done';
  }, 10000);
}

document.querySelector('.b-1').addEventListener('click', t01);

// Task 02
// Напишите функцию, которая выводит в .out-21 время в секундах (unixtime), затем запускает timeout (5 секунд), который выводит в .out-22 время в unixtime (секундах).


function t02() {
  const unixtime = Math.round(Date.now() / 1000);
  document.querySelector('.out-21').textContent = unixtime;
  setTimeout(() => {
    const unixtime_02 = Math.round(Date.now() / 1000);
    document.querySelector('.out-22').textContent = unixtime_02;
  }, 5000);
}

document.querySelector('.b-2').addEventListener('click', t02);


// Task 03
// Напишите функцию, которая запускает timeout и через 3 секунды присваивает ul.ul-3 класс hide.

function t03() {
  const ul3 = document.querySelector('ul.ul-3');

  setTimeout(() => {
    ul3.classList.add('hide');
  }, 3000);
}

document.querySelector('.b-3').addEventListener('click', t03);

// Task 04
// Изучите принцип работы функции ниже. Очень важно разобраться в ее работе!!! Если сложности - то задайте вопрос в чате!!

let index_4 = 0;
let timeout_4;

const arr4 = [1, 0, 0, 0];

function t04() {
  document.querySelector('.out-4').textContent = arr4.join('__');
  arr4[index_4] = 0;
  (index_4 + 1 >= arr4.length) ? index_4 = 0 : index_4++;
  arr4[index_4] = 1;
  timeout_4 = setTimeout(t04, 1000);
}

document.querySelector('.b-4').addEventListener('click', t04);


// Task 05
// Напишите функцию, которая делает clearTimeout timeout_4.


function t05() {
  clearTimeout(timeout_4);
}

document.querySelector('.b-5').addEventListener('click', t05);



// Task 06
// Напишите функцию, которая работает по принципу таск 4, и с помощью таймера присваивает по очереди изображению в блоке .out-6 класс bordered (каждые 2 секунды). Для лучшего понимания - посмотрите видео на сайте. 


let index = 0;
let timer;

function t06() {
  const out6 = document.querySelector('.out-6');
  const childrenArr = Array.from(out6.children);

  // Удаляем класс у всех
  childrenArr.forEach(el => el.classList.remove('bordered'));

  // Добавляем класс к текущему
  childrenArr[index].classList.add('bordered');

  // Увеличиваем индекс
  index = (index + 1) % childrenArr.length;

  // Запускаем следующий шаг
  timer = setTimeout(t06, 2000);
}

document.querySelector('.b-6').addEventListener('click', t06);




// Task 07
// Напишите функцию, которая останавливает таймаут из задачи 6.

function t07() {
  clearTimeout(timer)
}

document.querySelector('.b-7').addEventListener('click', t07);


// Task 08
// Напишите функцию, которая делает для изображений в .out-8 анимацию аналогичную той, что в задаче 6. Помимо этого, текущее изображение выводится в .out-8-max. Для большего понимания - смотрите видео на сайте. 


let index08 = 0;
let timer08;

function t08() {
  const out8 = document.querySelector('.out-8');
  const childrenArr = Array.from(out8.children);
  const out8Max = document.querySelector('.out-8-max');

  // Удаляем класс у всех изображений
  childrenArr.forEach(el => el.classList.remove('bordered'));

  // Берём текущий элемент
  const currentImage = childrenArr[index08];
  currentImage.classList.add('bordered');

  // Очищаем .out-8-max и добавляем копию текущего изображения
  out8Max.innerHTML = ''; // очищаем блок
  const clone = currentImage.cloneNode(true); // создаём копию
  out8Max.appendChild(clone);

  // Увеличиваем индекс
  index08 = (index08 + 1) % childrenArr.length;

  // Запускаем таймер
  timer08 = setTimeout(t08, 2000);
}

document.querySelector('.b-8').addEventListener('click', t08);



// Task 09
// Напишите функцию, которая останавливает таймаут из задачи 8.

function t09() {
}

document.querySelector('.b-9').addEventListener('click', t09);



// Task 10
// Напишите функцию, которая выполняется при клике на изображении внутри .out-8 вначале останавливает timeout для задачи 8. Затем получает src изображения на котором кликнули (добавляет bordered) и присваивает его в src изображения внутри .out-8-max. И, затем, обновляет index-8 (у вас переменная счетчик может называться иначе) до актуального состояния. Таким образом, при нажатии кнопки b-8 анимация начнется с актуального места. Для лушшего понимания - смотрите видео на сайте. Подсказка - изображение, на которое клинкули можно получить через this.

function t10() {

}

document.querySelectorAll('.out-8 img').forEach(item => item.addEventListener('click', t10));


// Task 11
// Напишите функцию, с интервалом (setInterval) 2 секунды выводит в .out-11 числа 10, 20, 30 и т.д. После вывода числа 50 интервал нужно очищать. Числа дожны затирать предыдущие выводы.

function t11() {
}

document.querySelector('.b-11').addEventListener('click', t11);


// Task 12
// Напишите функцию, которая с интевалом 1 секунда выводит в .out-12 текущее время в формате минуты:секунды. Т.е. например 04:35. И минуты и секунды выводятся с текущим нулем.

function t12() {
}

document.querySelector('.b-12').addEventListener('click', t12);



// Task 13
// Напишите функцию, которая с интервалом 1 секунда выводит в .out-13 количество минут и секунд до конца часа. Формат вывода - как в предыдущей задаче. Т.е. если время 12:18 то вывестись должно 48:42 затем 48:41 и так далее.


function t13() {
}

document.querySelector('.b-13').addEventListener('click', t13);


// Task 14
// Напишите функцию, которая с интервалом одна секунда выводит строку в .out-14 вида '100000' затем '010000' затем '001000' и так далее. Перемещение 1 циклично.

function t14() {

}

document.querySelector('.b-14').addEventListener('click', t14);


// Task 15
// Напишите функцию, которая с интервалом в 1.5 секунды меняет src изображения в .out-15. Изображение dog заменяется на leaf, затем на spaceship, затем на witch и по кругу.
const arr_15 = ['dog', 'leaf', 'spaceship', 'witch'];

function t15() {
}

document.querySelector('.b-15').addEventListener('click', t15);


