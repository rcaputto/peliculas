
export  async function TvSeriesGetAll (){
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTVmYmQ5YWNjZjI0MzkyN2NkMTQ4MzQ5NDczZWE4NCIsInN1YiI6IjY0ODc3MDcyYzAzNDhiMDBlNWYzMjcyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sM2KFuclQ-HeU8m3nRzi6u9NJzYQp7vjNL9kPiejAiA'
      }
    };
    
    return fetch('https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1', options)
      .then(response => response.json())
      
  }