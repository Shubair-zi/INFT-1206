/*
Name: Shubair Azizi
File: main.js
Date: 17 April 2026
JavaScript to show and hide the comments section.
*/

var showHide = document.querySelector('.show-hide');
var commentWrapper = document.querySelector('.comment-wrapper');

showHide.onclick = function() {
  var showHideText = showHide.textContent;
  if(showHideText === 'Show comments') {
    showHide.textContent = 'Hide comments';
    commentWrapper.style.display = 'block';
  } else {
    showHide.textContent = 'Show comments';
    commentWrapper.style.display = 'none';
  }
};