import { IUser, ILoginCredentials } from '../interface/userInterface';
import api from "./api";

async function signUpApi(user: IUser) {
  return api({
    method: 'POST',
    endPath: '/user',
    headers: new Headers({ 'Content-Type': 'application/json'}),
    body: JSON.stringify(user),
  });
}

async function signInApi(loginCredentials: ILoginCredentials) {
  return api({
    method: 'GET',
    endPath: '/user',
    headers: new Headers({ 'Content-Type': 'application/json'}),
    body: JSON.stringify(loginCredentials),
  });
}

export { signUpApi, signInApi };