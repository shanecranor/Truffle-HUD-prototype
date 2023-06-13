import { config$ } from '../sidebar-config-state';
import { observer } from '@legendapp/state/react';
import { useStyleSheet } from '../deps/styles';
import styleSheet from './settings-panel.scss.js';
function Settings() {
  useStyleSheet(styleSheet);
  const isEnabled = true;
  const {
    isTwoStep,
    twoStepActivationMode,
    screenSide,
    activationZoneWidth,
    sidebarTimeout,
    sidebarWidth,
    primaryColor,
    secondaryColor,
    secondaryOpacity,
  } = config$.get();
  return (
    <div
      className={`sidebar-drawer settings-drawer ${
        isEnabled ? 'enabled' : 'disabled'
      }`}
    >
      <div className="settings-panel">
        <input
          type="checkbox"
          onChange={(e) => config$.isTwoStep.set(e.target.checked)}
          checked={isTwoStep}
        />{' '}
        add secondary step to open menu
        <br></br>
        <input
          type="checkbox"
          onChange={(e) =>
            config$.twoStepActivationMode.set(
              e.target.checked ? 'click' : 'hover'
            )
          }
          checked={twoStepActivationMode === 'click'}
        />{' '}
        secondary step is a click instead of hover
        <br></br>
        left side{' '}
        <input
          type="range"
          min="0"
          max="1"
          onChange={(e) =>
            config$.screenSide.set(e.target.value === '0' ? 'left' : 'right')
          }
          value={screenSide === 'left' ? 0 : 1}
        />{' '}
        right side
        <br></br>
        activation zone width:
        <br></br>
        <input
          type="range"
          min="1"
          max="140"
          onChange={(e) =>
            config$.activationZoneWidth.set(Number(e.target.value))
          }
          value={activationZoneWidth}
        />
        {`${activationZoneWidth}px `}
        <br></br>
        sidebar timeout
        <br></br>
        <input
          type="range"
          min="0"
          max="10"
          step="0.1"
          onChange={(e) =>
            config$.sidebarTimeout.set(Number(e.target.value) * 1000)
          }
          value={sidebarTimeout / 1000.0}
        />
        <br></br>
        {`${sidebarTimeout / 1000.0} seconds`}
        <br></br>
        sidebar width
        <br></br>
        <input
          type="range"
          min="40"
          max="96"
          step="8"
          onChange={(e) => config$.sidebarWidth.set(Number(e.target.value))}
          value={sidebarWidth}
        />
        <br></br>
        {`${sidebarWidth} px`}
        <br></br>
        Sidebar Primary Color
        <br />
        <input
          type="color"
          value={primaryColor}
          onChange={(e) => config$.primaryColor.set(e.target.value)}
        />
        <br />
        Folder / Divider Color
        <br />
        <input
          type="color"
          value={secondaryColor}
          onChange={(e) => config$.secondaryColor.set(e.target.value)}
        />
        <br />
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          onChange={(e) => config$.secondaryOpacity.set(Number(e.target.value))}
          value={secondaryOpacity}
        />
        <br />
        {`${Math.round(secondaryOpacity * 100)}% opacity`}
      </div>
    </div>
  );
}

export default observer(Settings);
