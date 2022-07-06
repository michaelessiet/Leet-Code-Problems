//get data from an api
import fetch from "node-fetch";

var http1 = "https://api.goprogram.ai/inspiration";
var http2 = "http://api.icndb.com/jokes/random/10";
var quotes = [];

async function retrievedata(url,url2) {
  const response = await Promise.all([fetch(url), fetch(url2)]);
  const json = await Promise.all(response.map((r) => r.json()));
  const data = await json[1].value;
  console.table(data);
  return data;
}

retrievedata(http1,http2);
