import { EmbedInfo } from '../types';
import {
  embedList,
  moveEmbedWindowEmbedToTop,
  toggleEmbedWindowVisibility,
} from '../state';
export default function EmbedItem({ embedInfo }: { embedInfo: EmbedInfo }) {
  return (
    <>
      <div
        className="sidebar-item embed-item"
        // clicking the embed icon should show/hide it
        onClick={() => {
          // if we're about to open the embed, make sure it's on top
          const isOpen = embedList[embedInfo.id].isOpen.peek();
          if (!isOpen) moveEmbedWindowEmbedToTop(embedInfo.id);

          toggleEmbedWindowVisibility(embedInfo.id);
        }}
      >
        <img className="icon" src={embedInfo.iconSrc} alt={embedInfo.title} />
      </div>
    </>
  );
}
