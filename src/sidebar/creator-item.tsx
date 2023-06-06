import { CreatorInfo } from '../types'
export default function CreatorIcon ({ creatorInfo }: { creatorInfo: CreatorInfo }) {
	return <div className="sidebar-item creator-item">
		<img 
		className="icon round"
		src={creatorInfo.iconSrc} 
		alt={creatorInfo.name}
		/>
	</div>
}