import express from "express";

import db from "../../db";
import { IBaseBook } from "../../types";

const booksRouter = express.Router();

// Get all books
booksRouter.get("/", async (req, res) => {
	try {
		const books = await db.books.getAll();

		if (!books.length) {
			return res.status(400).json({ message: "Error could not get all Authors." });
		}

		res.json(books);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Error could not get all books" });
	}
});

//Get one book by id
booksRouter.get("/:id", async (req, res) => {
	const id = parseInt(req.params.id);

	try {
		// const [books] = await db.books.getOne(id);
		const books = await db.books.getOne(id);
		const book = books[0];

		if (!book) {
			return res.status(400).json({ message: `Error could not get that book with the id of ${id}.` });
		}

		res.json(book);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Error could not get all books" });
	}
});

//Create book
booksRouter.post("/", async (req, res) => {
	const { title, author, price, category_id } = req.body;

	if (!title || typeof title !== "string" || title.length > 150) {
		return res.status(400).json({ message: "Title must be a string and no longer than 150 characters" });
	}

	if (!author || typeof author !== "string" || author.length > 150) {
		return res.status(400).json({ message: "Author must be a string and no longer than 150 characters" });
	}

	if (!price || typeof price !== "number") {
		return res.status(400).json({ message: "Price must be a number" });
	}
	if (!category_id || typeof category_id !== "number") {
		return res.status(400).json({ message: "Category ID must be a number" });
	}

	try {
		const newBook: IBaseBook = {
			title,
			author,
			price,
			category_id,
		};

		const book = await db.books.create(newBook);
		const book_id = book.insertId;
		res.status(200).json({ message: `Successfully created book with id of ${book_id}` });
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Could not add that book to the database" });
	}
});

export default booksRouter;
