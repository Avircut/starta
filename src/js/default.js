import 'bootstrap-icons/font/bootstrap-icons.scss';
import 'phosphor-icons/src/css/icons.css';

// Инициализация бургера. Перенос всех элементов меню в него
const $list = $('.nav__menu-item');
$list.each((index, el) => {
  const $clone = $(el).clone(true);
  $clone
    .removeClass('nav__menu-item')
    .addClass('burger__menu-item');
  $clone    
    .children('a')
    .addClass('burger__menu-link')
    .removeClass('nav__menu-link');
  $('.burger__menu').append($clone);
});
// Перенос кнопок и поиска в бургер
let $btns = $('.top-line__btn-group');
$btns = $btns.clone(true);
$btns = $btns.removeClass().addClass('burger__btn-group');
$('.burger__features').append($btns);
$('.burger__features').find('.top-line__burger').remove();
// Добавление событий на сокрытие и раскрытие меню
$('.top-line__burger').on('click', (e) => {
  e.stopPropagation();
  $('.burger__wrapper').toggleClass('burger__wrapper_opened');
});
$('.burger__closeBtn').on('click', (e) => {
  e.stopPropagation();
  $('.burger__wrapper').toggleClass('burger__wrapper_opened');
})
// Закрытие по клику вне формы в бургере
$(document).on('click', (e) => {
  let $target = $(e.target);
  if(!$target.closest('.burger__wrapper_opened').length)
    $('.burger__wrapper').removeClass('burger__wrapper_opened');
});