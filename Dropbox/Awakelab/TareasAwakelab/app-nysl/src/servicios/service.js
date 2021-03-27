class Servicedb {
  initKey;
  apiSoccer;
  constructor() {
    this.apiSoccer =
      "https://live-score-api.p.rapidapi.com/scores/history.json";
    this.initKey = {
      methods: "GET",
      headers: new Headers({
        "x-rapidapi-key": "bf02875828msh08304f58d782afcp178c0cjsn5517ae4aa95c"
      })
    };
  }
  getDB() {
    return fetch(this.apiSoccer, this.initKey);
  }
}

export default Servicedb;
