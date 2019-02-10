$(() => {
  // fetch templates to display on page
  $("#app-about").load('templates/about.html');
  $("#app-tech").load('templates/tech.html');
  $("#app-projects").load('templates/projects.html');
  $("#app-more").load('templates/more.html');

  $(document).ready(() => resizeSections());
  $(window).resize(() => resizeSections());
});

let resizeSections = () => $('#app-container').css('height', window.innerHeight + 'px');

let scrollToTop = (id) => {
  //50 to account for extra margin on top section
  $(window).scrollTop($(id).position().top - 50);
};

$('#aboutme').on('click', () => scrollToTop('#top-section'));
$('#projects').on('click', () => scrollToTop('#middle-section'));
$('#tech').on('click', () => scrollToTop('#tech-section'));
$('#more').on('click', () => scrollToTop('#bottom-section'));