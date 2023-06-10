import { isSettingsOpen$ } from "./sidebar-state";
import { config$ } from "../sidebar-config-state";
import { observer } from "@legendapp/state/react";
import { useStyleSheet } from '../deps/styles';
import styleSheet from './settings-panel.scss.js';
function Settings() {
	useStyleSheet(styleSheet);
	const isEnabled = isSettingsOpen$.get();
	return (
		<div className={`sidebar-drawer settings-drawer ${isEnabled ? "enabled" : "disabled"}`}>
			<div className="settings-panel">
				<input type="checkbox"
					onChange={(e) => config$.isTwoStep.set(e.target.checked)}
					checked={config$.isTwoStep.get()} /> add secondary step to open menu
				<br></br>
				left side <input type="range" min="0" max="1"
					onChange={(e) => config$.screenSide.set(e.target.value === "0" ? "left" : "right")}
					value={config$.screenSide.get() === "left" ? 0 : 1} /> right side
				<br></br>
				activation zone width:
				<br></br>
				<input type="range" min="1" max="140"
					onChange={(e) => config$.activationZoneWidth.set(Number(e.target.value))}
					value={config$.activationZoneWidth.get()} />
				{`${config$.activationZoneWidth.get()}px `}
				<br></br>
				sidebar timeout
				<br></br>
				<input type="range" min="0" max="10" step="0.1"
					onChange={(e) => config$.sidebarTimeout.set(Number(e.target.value) * 1000)}
					value={config$.sidebarTimeout.get() / 1000.0} />
				<br></br>
				{`${config$.sidebarTimeout.get() / 1000.0} seconds`}
				<br></br>
				sidebar width
				<br></br>
				<input type="range" min="40" max="96" step="8"
					onChange={(e) => config$.sidebarWidth.set(Number(e.target.value))}
					value={config$.sidebarWidth.get()} />
				<br></br>
				{`${config$.sidebarWidth.get()} px`}
			</div>
		</div>
	);
}

export default observer(Settings);