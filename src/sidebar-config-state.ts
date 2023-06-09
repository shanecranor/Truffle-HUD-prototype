import { SidebarConfig } from "./types";
import { observable } from "@legendapp/state"

export const defaultConfig: SidebarConfig = {
	isTwoStep: false,
	screenSide: "left",
	activationZoneWidth: 8,
	sidebarTimeout: 2000,
}
export const config$ = observable<SidebarConfig>(defaultConfig)