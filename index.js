const request = require("request");
const express = require("express");

const clientSecret = process.env.CLIENT_SECRET;
const hostname = process.env.HOSTNAME;

const app = express();

app.all("*", proxy);

const proxy = (req, res, next) => {
  const { path, method, query } = req;

  const url = "https://" + hostname + path;

  if (query.hasOwnProperty("client_secret")) {
    query.client_secret = clientSecret;
  }

  request(
    url,
    {
      method,
      qs: query
    },
    (error, resApi, data) => {
      if (error) {
        next(error);
      } else {
        res.status(resApi.statusCode);
        res.set("Content-Type", resApi.headers["content-type"]);
        res.send(data);
      }
    }
  );
};

app.listen(5000);
