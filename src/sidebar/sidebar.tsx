// import './sidebar.scss'

import { CreatorInfo, EmbedInfo } from '../types.js'
import { creatorList, embedList } from '../state.js'
import EmbedItem from './embed-item.js'
import CreatorItem from './creator-item.js'
import TruffleProfileItem from './truffle-profile-item.js'
import { useStyleSheet } from '../deps/styles.js'
import styleSheet from './sidebar.scss.js'
// import useObservable from '@legendapp/state/react'
// import { observable} from '@legendapp/state'
import { useObservable, observer} from '@legendapp/state/react'
const MOUSEOVER_DETECTOR_WIDTH: number = 8;
function TruffleSidebar () {
	const currentCreator: CreatorInfo = creatorList.get()[0] //TODO set current creator in state instead of hardcoding
	useStyleSheet(styleSheet)
	const isHovering= useObservable<boolean>(false)
	console.log("isHovering", isHovering.get())
	return <>
	<div className="truffle-sidebar-mouseover-detector"
		style={{width: `${MOUSEOVER_DETECTOR_WIDTH}px`}}
		onMouseEnter={ ()=> isHovering.set(true)}>

	</div>
	<div className="truffle-sidebar" style={{left: isHovering.get() ? "0px" : "-72px"}}
	onMouseLeave={(e: React.MouseEvent)=> {
		if(e.clientX > 0) isHovering.set(false) //TODO: fix this hack
		}}>
		<TruffleProfileItem/>
		{/* display the current creator on top, even if they aren't in the user's creator list */}
		<CreatorItem creatorInfo={currentCreator}/>
		{
		embedList.get().map((embedInfo: EmbedInfo) => {
			return <EmbedItem embedInfo={embedInfo}/>
		})
		}

		{
		creatorList.get().filter((creatorInfo: CreatorInfo) => creatorInfo.id !== currentCreator.id)
			.map((creatorInfo: CreatorInfo) => {
				return <CreatorItem creatorInfo={creatorInfo}/>
		})
		}

	</div>
	</>
}

export default observer(TruffleSidebar)