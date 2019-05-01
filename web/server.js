const app = require("./app/app");

/* Disabilitar headers etag e x-powered-by */
app.disable("etag").disable("etag");

app.listen(3000, () => {
  console.log("Rodando");
  console.log("--------------------------");
});
