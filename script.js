var allWorksLink = document.getElementById('all-works-link');
var allWorksLinkFake = document.getElementById('all-works-link-fake');

allWorksLink.addEventListener('mouseover', function() {
  // allWorksLinkFake.classList.remove('back');
  allWorksLinkFake.classList.add('effect');
});

allWorksLink.addEventListener('mouseout', function() {
  // allWorksLinkFake.classList.remove('effect');
  // allWorksLinkFake.classList.add('back');
})
