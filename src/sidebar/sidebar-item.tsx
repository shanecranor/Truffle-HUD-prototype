import { config$ } from '../sidebar-config-state';
import { SidebarItemInfo } from '../types';

export default function SidebarItem(
	{onClick, itemInfo, children } :
	{onClick?: React.MouseEventHandler, itemInfo: SidebarItemInfo, children?: React.ReactNode}) {
  const sidebarWidth = config$.sidebarWidth.get();
	const {className, iconUrl, altText, sizeRatio, imgClassName} = itemInfo;
  return (
    <>
      <button
        className={`sidebar-item ${className}`}
        onClick={(e:React.MouseEvent) => onClick && onClick(e)} //probably a better way to pass this through but idk
      >
        <img className={`icon ${imgClassName}`} src={iconUrl} alt={altText}
        style={{
          width: `${sizeRatio*sidebarWidth}px`,
          height: `${sizeRatio*sidebarWidth}px`,
        }} />
				{children}
      </button>
    </>
  );
}
