import express from "express";
import booksRouter from "./books";
import categoriesRouter from "./catergories";

const apiRouter = express.Router();

apiRouter.use("/books", booksRouter);
apiRouter.use("/categories", categoriesRouter);

export default apiRouter;
