import http from './axios-common';


export function saveUser(user){
  return http.post("/user", user)
}
