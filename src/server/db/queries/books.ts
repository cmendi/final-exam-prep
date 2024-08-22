import { Query } from "../connections";
import { IBaseBook, Book } from "../../types";

const getAll = () => Query<Book[]>("SELECT * FROM Books");
const getOne = (id: number) => Query<Book[]>("SELECT * FROM Books WHERE id=?", [id]);
const create = (newBook: IBaseBook) => Query("INSERT INTO Books SET ?", [newBook]);
const update = (updatedBook: IBaseBook, id: number) => Query("UPDATE Books SET ? WHERE id=?", [updatedBook, id]);
const destroy = (id: number) => Query("DELETE FROM Books WHERE id=?", [id]);

export default {
	destroy,
	update,
	getAll,
	getOne,
	create,
};
