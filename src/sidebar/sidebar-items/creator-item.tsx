import { config$ } from '../../sidebar-config-state';
import { CreatorInfo } from '../../types';
import SidebarItem from './sidebar-item';
import { handleDrag, handleDragOver, handleDrop } from './drag-drop-logic';

export default function CreatorItem({
  creatorInfo,
}: {
  creatorInfo: CreatorInfo;
}) {
  const { id, name, platform, isLive, iconSrc } = creatorInfo;
  const SidebarProps = {
    buttonProps: {
      className: `creator-item ${
        isLive ? 'creator-is-live' : ''
      } platform-${platform}`,
      onClick: () => {
        alert("TODO: open creator's page");
        //TODO open creator in new tab, or open sidebar drawer
      },
    },

    imageProps: {
      iconUrl: iconSrc,
      altText: name,
      sizeRatio: config$.sizeRatios.large.get(),
      imgClassName: `round ${
        creatorInfo.isLive ? 'creator-is-live' : ''
      } platform-${platform}`,
    },
  };

  return (
    <div
      id={id}
      className="drag-drop-container"
      draggable={true}
      onDragOver={handleDragOver}
      onDragStart={handleDrag}
      onDrop={handleDrop}
    >
      <SidebarItem {...SidebarProps} />
    </div>
  );
}
