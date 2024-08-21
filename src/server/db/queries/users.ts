import { Query } from "../connections";
import { MysqlResponse, User } from "../../types";

const getOne = (id: number) => Query<User[]>("SELECT * FROM Users WHERE id=?", [id]);
const find = (column: string, email: string) => Query<User[]>("SELECT * FROM Users WHERE ?? = ?", [column, email]);
const insert = (newUser: { email: string; password: string }) => Query<MysqlResponse>("INSERT INTO Users SET ?", [newUser]);

export default {
	getOne,
	insert,
	find,
};
