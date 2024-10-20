//document.body.style.background = "pink"
let share = document.getElementById('share');
let tooltip = document.getElementById('tooltip');
let shareSvg = document.getElementById('share-svg');
share.onclick = function() {
 tooltip.classList.toggle('visible')
 share.classList.toggle('btn-clicked')
 shareSvg.classList.toggle('svg-clicked')
} 