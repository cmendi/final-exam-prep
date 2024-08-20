import { Query } from "../connections";
import { Book } from "../../types";

const getAll = () => Query<Book[]>("SELECT * FROM Books");

export default {
	getAll,
};
