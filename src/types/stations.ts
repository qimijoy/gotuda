export interface APIresponse {
	id: string;
	lines: Line[];
	name: string;
}

export interface Line {
	hex_color: string;
	id: string;
	name: string;
	stations: Station[];
}

export interface Station {
	id: string;
	name: string;
	lat: number;
	lng: number;
	line: Line;
	order: number;
}

export interface StationNormalized {
	id: string;
	name: string;
	latitude: number;
	longitude: number;
	line: string;
	lineColor: string;
}
