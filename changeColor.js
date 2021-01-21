let input = document.querySelector('input');
let body = document.querySelector('body');
let container = document.querySelector('.container');
let statsSummaryCard = document.querySelectorAll('.stats-summary-card');
let statsTodayCard = document.querySelectorAll('.stats-today-card');
let todayStats = document.querySelectorAll('.today-stats');
let totalFollowers = document.querySelectorAll('.total-followers');
let instagramCard = document.querySelector('#instagram-card');

function changePageColor() {
  if (input.value === 'checked') {
    changeToWhite();
  }

  if (input.value === 'unchecked') {
    changeToBlack();
  }

  resetColor();
}

function changeToWhite() {
  body.style.background = 'white';

  container.style.color = 'black';

  for (let i = 0; i < statsSummaryCard.length; i++) {
    statsSummaryCard[i].style.background = '#f5f7ff';
  }

  for (let i = 0; i < statsTodayCard.length; i++) {
    statsTodayCard[i].style.background = '#f5f7ff';
  }

  for (let i = 0; i < todayStats.length; i++) {
    todayStats[i].style.color = '#1e202a';
  }

  for (let i = 0; i < totalFollowers.length; i++) {
    totalFollowers[i].style.color = '#1e202a';
  }

  instagramCard.style['background'] =
    'linear-gradient(rgb(245, 247, 255), rgb(245, 247, 255)), linear-gradient(60deg, hsl(37, 97%, 70%), hsl(329, 49%, 64%))';
  instagramCard.style['background-clip'] = 'padding-box, border-box';
  instagramCard.style['background-origin'] = 'padding-box, border-box';
}

function changeToBlack() {
  body.style.background = '#1c2022';

  container.style.color = 'white';

  for (let i = 0; i < statsSummaryCard.length; i++) {
    statsSummaryCard[i].style.background = '#252b43';
  }

  for (let i = 0; i < statsTodayCard.length; i++) {
    statsTodayCard[i].style.background = '#252b43';
  }

  for (let i = 0; i < todayStats.length; i++) {
    todayStats[i].style.color = 'white';
  }

  for (let i = 0; i < totalFollowers.length; i++) {
    totalFollowers[i].style.color = 'white';
  }

  instagramCard.style['background'] =
    'linear-gradient(rgb(37 43 67), rgb(37 43 67)), linear-gradient(60deg, hsl(37, 97%, 70%), hsl(329, 49%, 64%))';
  instagramCard.style['background-clip'] = 'padding-box, border-box';
  instagramCard.style['background-origin'] = 'padding-box, border-box';
}

function resetColor() {
  input.value === 'checked'
    ? (input.value = 'unchecked')
    : (input.value = 'checked');
}
