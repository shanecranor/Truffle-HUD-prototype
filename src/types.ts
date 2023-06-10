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
	embedWindow: {
		initialDimensions: Vector,
	}
	isResizeable: boolean,
	resizeBounds?: ResizeBounds,
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

export interface EmbedWindowState {
	embedId: string;
	isOpen: boolean;
	zIndex: number;
}

export interface SidebarConfig {
	isTwoStep: boolean;
	twoStepActivationMode: "hover" | "click";
	screenSide: "left" | "right";
	activationZoneWidth: number;
	sidebarTimeout: number;
	sidebarWidth: number;
	largeWidthRatio: number;
	smallWidthRatio: number;

}

export type SidebarItemInfo = {
	className: string,
	iconUrl: string,
	altText: string,
	sizeRatio: number
	imgClassName?: string,
}