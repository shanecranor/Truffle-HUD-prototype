export interface Vector {
	x: number;
	y: number;
}

export interface DragInfo {
	current: Vector;
	start: Vector;
	pressed: boolean;
	draggable: boolean;
}

export interface ResizeBounds {
	minWidth: number;
	maxWidth: number;
	minHeight: number;
	maxHeight: number;
}

export interface EmbedInfo {
	id: string,
	title: string,
	iconSrc: string,
	iframeSrc: string,
	tooltipDescription: string,
	dimensions: Vector,
	isResizeable: boolean,
	resizeBounds?: ResizeBounds,
	isOpen: boolean
}

export enum Platform {
	twitch = "twitch",
	youtube = "youtube",
}

export interface CreatorInfo {
	id: string,
	name: string,
	iconSrc: string,
	isLive: boolean,
	platform: Platform
}