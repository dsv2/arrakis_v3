import http from './axios-common';


export function getAllBonds(){
  return http.get("/securities")
}

export function saveUser(user){
  return http.post("/users", user)
}

export function saveDate(date) {
  return http.get("/securities")
}

export function getAllTrades(){
  return http.get("/trades")
}
