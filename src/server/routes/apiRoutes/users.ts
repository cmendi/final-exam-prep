import express from "express";
import db from "../../db";

const usersRouter = express.Router();

usersRouter.get("/:id", async (req, res) => {
	const id = parseInt(req.params.id);

	try {
		const users = await db.users.getOne(id);
		const user = users[0];

		if (!user) {
			return res.status(400).json({ message: `Could not get user with id of ${id}` });
		}

		res.json(user);
	} catch (error) {
		res.status(500).json({ message: "Could not get users at this time =( " });
	}
});

export default usersRouter;
