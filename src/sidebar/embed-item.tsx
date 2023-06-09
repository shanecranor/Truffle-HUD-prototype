import { EmbedInfo } from '../types';
import {
  moveEmbedWindowToTop,
  setEmbedWindowVisibility,
} from '../state';
import { config$ } from '../sidebar-config-state';
import SidebarItem from './sidebar-item';
export default function EmbedItem({ embedInfo }: { embedInfo: EmbedInfo }) {
  const itemInfo = {
    className: "embed-item",
    iconUrl: embedInfo.iconSrc,
    altText: embedInfo.title,
    sizeRatio: config$.smallWidthRatio.get(),
  }
  return (
    <SidebarItem itemInfo={itemInfo}
    onClick={() => {
      moveEmbedWindowToTop(embedInfo.id);
      setEmbedWindowVisibility(embedInfo.id, true);
    }}
    >
      <span className="tooltip">{embedInfo.title}</span>
    </SidebarItem>
  );
}
