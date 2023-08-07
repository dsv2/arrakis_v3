import http from './axios-common';


export function getAllBonds(){
  return http.get("/securities")
}

export function saveUser(user){
  return http.get("/securities")
}

export function saveDate(date) {
  return http.get("/securities")
}

