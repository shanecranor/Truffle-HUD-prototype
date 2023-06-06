import './sidebar.scss'
import { CreatorInfo, EmbedInfo } from '../types'
import EmbedIcon from './embed-item'
import CreatorIcon from './creator-item'
export default function TruffleSidebar (
	{ embedList, creatorList, currentCreator }:
	{ embedList: EmbedInfo[], creatorList: CreatorInfo[], currentCreator: CreatorInfo }) {
	return <div className="truffle-sidebar">
		{/* display the current creator on top, even if they aren't in the user's creator list */}
		<CreatorIcon creatorInfo={currentCreator}/>
		{
		embedList.map((embedInfo: EmbedInfo) => {
			return <EmbedIcon embedInfo={embedInfo}/>
		})
		}

		{
		creatorList.filter((creatorInfo: CreatorInfo) => creatorInfo.id !== currentCreator.id)
			.map((creatorInfo: CreatorInfo) => {
				return <CreatorIcon creatorInfo={creatorInfo}/>
		})
		}

	</div>
}