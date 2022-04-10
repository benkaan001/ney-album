/*
fire the load event whent the page has been loaded with static files

getElementById is slightly faster than querySelector
*/
window.addEventListener('load', function () {
  const canvas = this.document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  canvas.width = 600;
  canvas.height = 600;
});
