import express from "express";
import db from "../../db";

const categoriesRouter = express.Router();

categoriesRouter.get("/", async (req, res) => {
	try {
		const categories = await db.categories.getAll();
		if (!categories.length) {
			return res.status(400).json({ message: "Error could not get all categories." });
		}

		res.json(categories);
	} catch (error) {
		res.status(500).json({ message: "Could not get catergories at this time." });
	}
});

export default categoriesRouter;
