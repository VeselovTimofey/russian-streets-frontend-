import api from './api';

async function getDisciplinesNames() {
  return api({
    method: 'GET',
    endPath: '/disciplines',
    headers: new Headers({ 'Content-Type': 'application/json' }),
  });
}

async function getFullContentofDiscipline(name: string) {
  return api({
    method: 'GET',
    endPath: '/full-discipline?name=' + name,
    headers: new Headers({ 'Content-Type': 'application/json' }),
  });
}

export { getDisciplinesNames, getFullContentofDiscipline };