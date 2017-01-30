$(document).ready(() => resizeSections());

$(window).resize(() => resizeSections());

let resizeSections = () => $('#app-container').css('height', window.innerHeight + 'px');

let scrollToTop = (id) => {
  $('body').scrollTop($(id).position().top);
  console.log(id);
};

$('#aboutme').on('click', () => scrollToTop('#top-section'));
$('#projects').on('click', () => scrollToTop('#middle-section'));
$('#more').on('click', () => scrollToTop('#bottom-section'));