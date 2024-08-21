import express from "express";
import booksRouter from "./books";
import usersRouter from "./users";
import categoriesRouter from "./catergories";

const apiRouter = express.Router();

apiRouter.use("/books", booksRouter);
apiRouter.use("/users", usersRouter);
apiRouter.use("/categories", categoriesRouter);

export default apiRouter;
