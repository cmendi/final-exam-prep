import { Query } from "../connections";
import { IBaseBook, Book } from "../../types";

const getAll = () => Query<Book[]>("SELECT * FROM Books");
const getOne = (id: number) => Query<Book[]>("SELECT * FROM Books WHERE id=?", [id]);
const create = (newBook: IBaseBook) => Query("INSERT INTO Books SET ?", [newBook]);

export default {
	getAll,
	getOne,
	create,
};
