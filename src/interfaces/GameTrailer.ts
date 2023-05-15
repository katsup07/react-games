export interface Results {
	id: number;
	name: string;
	preview: string;
	data: { 480: string; max: string };
}

export default interface GameTrailer {
	count: number;
	results: Results[];
}
