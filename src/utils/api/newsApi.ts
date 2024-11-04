import api from './api';

async function getLastNews() {
  return api({
    method: 'GET',
    endPath: '/news',
    headers: new Headers({ 'Content-Type': 'application/json' }),
  });
}

async function getPageNews(page: number) {
  return api({
    method: 'GET',
    endPath: '/news?page=' + page,
    headers: new Headers({ 'Content-Type': 'application/json'}),
  });
}

async function getNews(id: string) {
  return api({
    method: 'GET',
    endPath: '/news?id=' + id,
    headers: new Headers({ 'Content-Type': 'application/json'}),
  });
}

export { getLastNews, getPageNews, getNews };