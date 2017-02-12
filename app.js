let links = document.querySelectorAll('link[rel="import"]');
links.forEach((link) => {
  let template = link.import.querySelector('template');
  let clone = document.importNode(template.content, true);
  document.querySelector('#app-container').appendChild(clone);
});
console.log(links);
$(document).ready(() => resizeSections());
$(window).resize(() => resizeSections());

let resizeSections = () => $('#app-container').css('height', window.innerHeight + 'px');

let scrollToTop = (id) => {
  //50 to account for extra margin on top section
  $('body').scrollTop($(id).position().top - 50);
};

$('#aboutme').on('click', () => scrollToTop('#top-section'));
$('#projects').on('click', () => scrollToTop('#middle-section'));
$('#tech').on('click', () => scrollToTop('#tech-section'));
$('#more').on('click', () => scrollToTop('#bottom-section'));