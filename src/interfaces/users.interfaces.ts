export interface iUser {
	name: string;
	email: string;
	password: string;
	age: number;
}

export interface iUserResponse {
    id: string;
	name: string;
	email: string;
	password: string;
	age: number;
	created_at: Date;
	updated_at: Date;
}
