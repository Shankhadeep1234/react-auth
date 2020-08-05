module.exports = function (app) {
  app.get("/", (req, res, next) => {
    res.send(["water", "fire", "earth", "air"]);
  });
};
