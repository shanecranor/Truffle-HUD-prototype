import { isSettingsOpen$ } from "./sidebar-state"
export default function TruffleButton() {
	return <div className="sidebar-item profile-item">
		<div className="item-container round"
			onClick={() => isSettingsOpen$.set((old) => !old)}>
			<img
				className="icon"
				src={"https://cdn.bio/assets/images/branding/logomark.svg"}
				alt="Truffle Logo"
			/>
		</div>
	</div>
}