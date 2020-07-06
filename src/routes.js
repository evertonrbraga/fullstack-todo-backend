const express = require("express");
const routes = express.Router();

const TodoController = require("./controllers/TodoController");

routes.post("/todos", TodoController.store);
routes.get("/todos", TodoController.index);
routes.get("/todos/:id", TodoController.show);
routes.put("/todos/:id", TodoController.update);
routes.delete("/todos/:id", TodoController.destroy);

module.exports = routes;
