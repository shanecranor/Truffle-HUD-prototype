import EmbedWindow from './embed-window';
import { useStyleSheet } from '../deps/styles';
import styleSheet from './window-system.scss.js';
import {
  embedList,
  embedWindowStates,
  moveEmbedWindowEmbedToTop,
} from '../state';
import { observer, useComputed } from '@legendapp/state/react';

function WindowManager() {
  useStyleSheet(styleSheet);

  const numEmbeds$ = useComputed(() => embedList.get().length);

  return (
    <>
      {embedList.map((embed$) => {
        const embed = embed$.peek();
        const windowState$ = embedWindowStates[embed.id];

        return (
          <div
            key={embed.id}
            className="addon-window-container"
            onMouseDown={() => moveEmbedWindowEmbedToTop(embed.id)}
            style={{
              zIndex: windowState$.zIndex.get(),
              visibility: windowState$.isOpen.get() ? 'visible' : 'hidden',
            }}
          >
            <EmbedWindow
              embedInfo={embed}
              isFocused={windowState$.zIndex.get() === numEmbeds$.get() - 1}
            />
          </div>
        );
      })}
    </>
  );
}

export default observer(WindowManager);
