import '../css/index.scss';
import 'slick-carousel/slick/slick';
import 'slick-carousel/slick/slick.scss';
import './default';

// Slider Init
$('.banner__slider').slick({
  focusOnSelect: true,
  arrows:true,
  appendArrows:'.banner__arrows',
  autoplay:true
});
$('.news-banner__slider').slick({
  focusOnSelect: true,
  arrows:false,
  dots:true,
  autoplay: true
});
