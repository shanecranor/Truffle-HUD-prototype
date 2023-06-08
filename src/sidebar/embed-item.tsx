import { EmbedInfo } from '../types';
import {
  moveEmbedWindowToTop,
  setEmbedWindowVisibility,
} from '../state';
export default function EmbedItem({ embedInfo }: { embedInfo: EmbedInfo }) {
  return (
    <>
      <button
        className="sidebar-item embed-item"
        onClick={() => {
          // move embed to the top
					moveEmbedWindowToTop(embedInfo.id);
					setEmbedWindowVisibility(embedInfo.id, true);
        }}
      >
        <img className="icon" src={embedInfo.iconSrc} alt={embedInfo.title} />
				<span className="tooltip">{embedInfo.title}</span>
      </button>
    </>
  );
}
