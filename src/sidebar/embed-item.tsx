import { EmbedInfo } from '../types'
export default function EmbedIcon ({ embedInfo }: { embedInfo: EmbedInfo }) {
	return <div className="sidebar-item embed-item">
		<img 
		className="icon"
		src={embedInfo.iconSrc} 
		alt={embedInfo.title}
		/>
	</div>
}