import { EmbedInfo } from '../../types';
import { moveEmbedWindowToTop, setEmbedWindowVisibility } from '../../state';
import { config$ } from '../../sidebar-config-state';
import SidebarItem from './sidebar-item';

export default function EmbedItem({ embedInfo }: { embedInfo: EmbedInfo }) {
  const sidebarProps = {
    buttonProps: {
      className: 'embed-item',
      onClick: () => {
        moveEmbedWindowToTop(embedInfo.id);
        setEmbedWindowVisibility(embedInfo.id, true);
      },
    },
    imageProps: {
      iconUrl: embedInfo.iconSrc,
      altText: embedInfo.title,
      sizeRatio: config$.sizeRatios.small.get(),
    },
  };
  return (
    <SidebarItem {...sidebarProps}>
      <span className="tooltip">{embedInfo.title}</span>
    </SidebarItem>
  );
}
