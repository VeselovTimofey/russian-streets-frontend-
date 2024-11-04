import api from './api';

async function getAboutUsInfo() {
  return api({
    method: 'GET',
    endPath: '/about-us',
    headers: new Headers({ 'Content-Type': 'application/json' }),
  });
}

export { getAboutUsInfo };