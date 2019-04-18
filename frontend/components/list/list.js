console.log('list inited');

import 'whatwg-fetch'; // был в сборке!)
import $ from 'jquery';
import Handlebars from 'handlebars';

/**
 * Паттерн модуль для скрытия внутренней логики работы скрипта
 */
const newsModule = (function() {
  /**
   * Вывод содержимого полученных данных в DOM
   * @param {Object} data
   * @param {Boolean} updateList 
   */
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

  /**
   * Вывод ошибки при остуствии данных в массиве
   */
  const showError = () => {
    $('#error-popup').show();
    hideForwardBtn();
  }

  /**
   * Скрытие кноки показа слдующей порции новостей по их окончанию
   */
  const hideForwardBtn = () => $('#btn-forward').hide();

  return {
    /**
     * Загрузка данных с сервера
     * @param {String} url 
     * @param {Boolean} updateList
     */
    getData: (url, updateList) => {
      fetch(url)
        .then((response) => {
          return response.json()
        }).then((data) => {
          // console.log('parsed json', data);
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
  }
})();

/**
 * При зазгрузке DOM
 */
$('document').ready(function() {
  if($('#news-list').length) {
    newsModule.getData('https://api.myjson.com/bins/m4a6k');
  }
});

/**
 * При клике для примера возвратим последний элемент новостей
 */
$('#btn-forward').click((e) => {
  e.preventDefault();
  newsModule.getData('https://api.myjson.com/bins/12o4ss');
});

/**
 * При поиске обращаемся к другому url
 */

$('.search__btn').on('change', () => newsModule.getData('https://api.myjson.com/bins/jsox8', true));
