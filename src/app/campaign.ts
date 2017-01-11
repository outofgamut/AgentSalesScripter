export class Campaign {
	id: number;
	name: string;
	phoneNumber: number;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
