export interface User {
	id: number;
	email: string;
	password: string;
	created_at: Date;
}

export interface Category {
	id: number;
	name: string;
}

export interface Book extends IBaseBook {
	id: number;
	created_at: Date;
}

export interface IBaseBook {
	title: string;
	author: string;
	price: number;
	category_id: Category["id"];
}

export interface Payload {
	id: User["id"];
	email: User["email"];
}

export interface MysqlResponse {
	affectedRows: number;
	insertId: number;
}

declare global {
	namespace Express {
		export interface Request {
			user: Payload;
		}
	}
}
