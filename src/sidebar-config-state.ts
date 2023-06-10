import { SidebarConfig } from "./types";
import { observable } from "@legendapp/state"

export const defaultConfig: SidebarConfig = {
	isTwoStep: true,
	twoStepActivationMode: "hover",
	screenSide: "left",
	activationZoneWidth: 14,
	sidebarTimeout: 1000,
	sidebarWidth: 72,
	largeWidthRatio: 48 / 72,
	smallWidthRatio: 40 / 72,
}
export const config$ = observable<SidebarConfig>(defaultConfig)