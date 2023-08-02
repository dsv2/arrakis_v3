//import { hostNameUrl } from "../config/api";
//import axios from "axios";
import http from './axios-common';


export function saveUser(user){
  return http.post("/user", user)
}


// export const findPets = () => {
//   const pets = axios.get(`${hostNameUrl}/dogs`);
//   return pets;
// };

// import http from './axios-common';

// export function getAllHeroes(){
//     return http.get("/heroes");
// }

// export function saveHero(hero){
//     return http.post("/heroes", hero)
// }
