

export default async function GetAll (){
  const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTVmYmQ5YWNjZjI0MzkyN2NkMTQ4MzQ5NDczZWE4NCIsInN1YiI6IjY0ODc3MDcyYzAzNDhiMDBlNWYzMjcyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sM2KFuclQ-HeU8m3nRzi6u9NJzYQp7vjNL9kPiejAiA'
      }
    };
    return fetch('https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=1', options) 
        .then  (response => response.json())
}  
export  async function TvSeriesGetAll (){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTVmYmQ5YWNjZjI0MzkyN2NkMTQ4MzQ5NDczZWE4NCIsInN1YiI6IjY0ODc3MDcyYzAzNDhiMDBlNWYzMjcyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sM2KFuclQ-HeU8m3nRzi6u9NJzYQp7vjNL9kPiejAiA'
    }
  };
  
  return fetch('https://api.themoviedb.org/3/tv/popular?language=es-ES&page=1', options)
    .then(response => response.json())
    .then(response => console.log('TV',response))
}

export async function GetById (id){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTVmYmQ5YWNjZjI0MzkyN2NkMTQ4MzQ5NDczZWE4NCIsInN1YiI6IjY0ODc3MDcyYzAzNDhiMDBlNWYzMjcyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sM2KFuclQ-HeU8m3nRzi6u9NJzYQp7vjNL9kPiejAiA'
    }
  };
  return fetch(`https://api.themoviedb.org/3/movie/${id}?language=es-ES`, options)
    .then(response => response.json())
}

export async function GetImagesById (id){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTVmYmQ5YWNjZjI0MzkyN2NkMTQ4MzQ5NDczZWE4NCIsInN1YiI6IjY0ODc3MDcyYzAzNDhiMDBlNWYzMjcyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sM2KFuclQ-HeU8m3nRzi6u9NJzYQp7vjNL9kPiejAiA'
    }
  };
    return fetch (`https://api.themoviedb.org/3/movie/${id}/images`, options)
    .then (res => res.json())
}

export async function GetCreditById (id){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTVmYmQ5YWNjZjI0MzkyN2NkMTQ4MzQ5NDczZWE4NCIsInN1YiI6IjY0ODc3MDcyYzAzNDhiMDBlNWYzMjcyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sM2KFuclQ-HeU8m3nRzi6u9NJzYQp7vjNL9kPiejAiA'
    }
  };
    return fetch (`https://api.themoviedb.org/3/movie/${id}/credits?language=es-ES`, options)
    .then (response =>  response.json())
    
}



