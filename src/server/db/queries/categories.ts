import { Query } from "../connections";
import { Category } from "../../types";

const getAll = () => Query<Category[]>("SELECT * FROM categories");

export default {
	getAll,
};
