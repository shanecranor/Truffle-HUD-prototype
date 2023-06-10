import { config$ } from '../sidebar-config-state';
import { CreatorInfo } from '../types'
import SidebarItem from './sidebar-item';
export default function CreatorItem ({ creatorInfo }: { creatorInfo: CreatorInfo }) {
	const itemInfo = {
    className: `creator-item ${creatorInfo.isLive ? 'creator-is-live' : ''} platform-${creatorInfo.platform}`,
    iconUrl: creatorInfo.iconSrc,
    altText: creatorInfo.name,
    sizeRatio: config$.largeWidthRatio.get(),
		imgClassName: `round ${creatorInfo.isLive ? 'creator-is-live' : ''} platform-${creatorInfo.platform}`,
  }
	return <SidebarItem itemInfo={itemInfo}/>
}