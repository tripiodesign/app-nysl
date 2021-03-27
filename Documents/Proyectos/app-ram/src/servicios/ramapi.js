class RaMservice {
  ramApi;
  ramPj;
  ramLocat;
  ramEpi;
  
  constructor() {
    this.ramApi = "https://rickandmortyapi.com/api";
    this.ramPj = "https://rickandmortyapi.com/api/character";
    this.ramLocat = "https://rickandmortyapi.com/api/location";
    this.ramEpi = "https://rickandmortyapi.com/api/episode";
  }
  getData(){
    return fetch(this.ramApi);
  }
  getPj(){
    return fetch(this.ramPj);
  }
  getLocat(){
    return fetch(this.ramLocat);
  }
}

export default RaMservice;
