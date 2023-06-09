import { config$ } from '../sidebar-config-state';
import { CreatorInfo } from '../types'
import SidebarItem from './sidebar-item';
export default function CreatorItem ({ creatorInfo }: { creatorInfo: CreatorInfo }) {
	const itemInfo = {
    className: "creator-item",
    iconUrl: creatorInfo.iconSrc,
    altText: creatorInfo.name,
    sizeRatio: config$.largeWidthRatio.get(),
		imgClassName: "round",
  }
	return <SidebarItem itemInfo={itemInfo}/>
}