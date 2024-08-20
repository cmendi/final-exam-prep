import express from "express";

import db from "../../db";

const booksRouter = express.Router();

booksRouter.get("/", async (req, res) => {
	try {
		const books = await db.books.getAll();
		res.json(books);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Error could not get all books" });
	}
});

export default booksRouter;
