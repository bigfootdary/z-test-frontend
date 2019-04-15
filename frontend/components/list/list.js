console.log('list inited');

import 'whatwg-fetch';
import $ from 'jquery';
import Handlebars from 'handlebars';

const createList = (data, updateList = false) => {
  if(data.news.length !== 0){
    const newsTemplate = $('#news-template').html();
    const template = Handlebars.compile(newsTemplate);
    const newsList = template(data);
    updateList ? $('#news-list').html(newsList) : $('#news-list').append(newsList);
  } else {
    showError();
  }
}

const showError = () => {
  $('#error-popup').show();
  hideForwardBtn();
}

const hideForwardBtn = () => $('#btn-forward').hide();

const getData = (url, updateList) => {
  fetch(url)
    .then((response) => {
      return response.json()
    }).then((data) => {
      console.log('parsed json', data);
      const totalPages = data.page.total;
      let currentPage = data.page.current;
      if(currentPage !== totalPages) {
        createList(data, updateList);
      } else if (currentPage == totalPages) {
        createList(data, updateList);
        hideForwardBtn();
      }
    }).catch((err) => {
      throw new Error('Ошибка при загрузке данных', err)
    })
}

$('document').ready(function() {
  if($('#news-list').length) {
    getData('https://api.myjson.com/bins/m4a6k');
  }
});

$('#btn-forward').click((e) => {
  e.preventDefault();
  getData('https://api.myjson.com/bins/12o4ss');
});

// Заменить на кроссбраузерное событие
$('#search').on('search', () => getData('https://api.myjson.com/bins/jsox8', true));
