import './sidebar.scss'
import { CreatorInfo, EmbedInfo } from '../types'
import EmbedItem from './embed-item'
import CreatorItem from './creator-item'
import TruffleProfileItem from './truffle-profile-item'
export default function TruffleSidebar (
	{ embedList, creatorList, currentCreator }:
	{ embedList: EmbedInfo[], creatorList: CreatorInfo[], currentCreator: CreatorInfo }) {
	return <div className="truffle-sidebar">
		<TruffleProfileItem/>
		{/* display the current creator on top, even if they aren't in the user's creator list */}
		<CreatorItem creatorInfo={currentCreator}/>
		{
		embedList.map((embedInfo: EmbedInfo) => {
			return <EmbedItem embedInfo={embedInfo}/>
		})
		}

		{
		creatorList.filter((creatorInfo: CreatorInfo) => creatorInfo.id !== currentCreator.id)
			.map((creatorInfo: CreatorInfo) => {
				return <CreatorItem creatorInfo={creatorInfo}/>
		})
		}

	</div>
}