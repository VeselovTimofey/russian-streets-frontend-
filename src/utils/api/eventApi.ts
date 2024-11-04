import api from './api';

async function getLastEvents() {
  return api({
    method: 'GET',
    endPath: '/events',
    headers: new Headers({ 'Content-Type': 'application/json' }),
  });
}

async function getDailyEvents(date: string) {
  return api({
    method: 'GET',
    endPath: '/events?date=' + date,
    headers: new Headers({ 'Content-Type': 'application/json' }),
  });
}

async function getEvent(id: string) {
  return api({
    method: 'GET',
    endPath: '/event?id=' + id,
    headers: new Headers({ 'Content-Type': 'application/json' }),
  });
}

async function signUpEvent(id: string) {
  return api({
    method: 'POST',
    endPath: '/event/' + id + '/sign-up',
    headers: new Headers({ 'Content-Type': 'application/json'}),
  });
}

export { getLastEvents, getDailyEvents, getEvent, signUpEvent };