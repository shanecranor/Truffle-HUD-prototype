import { EmbedInfo } from '../types.ts'
import { embedList } from '../state.ts'
export default function EmbedItem ({ embedInfo }: { embedInfo: EmbedInfo }) {
	return <>
	<div 
	className="sidebar-item embed-item"
	onClick={() => {
		embedList.set((oldList: EmbedInfo[]) => {
			console.log("oldList", oldList)
			const targetEmbedId = embedInfo.id;
			const targetIdx: number = oldList.findIndex((embed) => embed.id === targetEmbedId)
			const targetItem = oldList[targetIdx];
			return [...oldList.filter((_, i) => i !== targetIdx), {...targetItem, isOpen: !targetItem.isOpen}]
		})
	}}>
		<img 
		className="icon"
		src={embedInfo.iconSrc} 
		alt={embedInfo.title}
		/>
	</div>
	</>
}