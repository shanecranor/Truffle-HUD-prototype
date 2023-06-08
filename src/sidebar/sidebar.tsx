// import './sidebar.scss'

import { CreatorInfo, EmbedInfo } from '../types';
import { creatorList, embedList } from '../state.js';
import EmbedItem from './embed-item';
import CreatorItem from './creator-item';
import TruffleButton from './truffle-button';
import Settings from './settings-panel';
import { useStyleSheet } from '../deps/styles';
import styleSheet from './sidebar.scss.js';
import { useObservable, observer } from '@legendapp/state/react';
import truffleLogo from '../assets/truffle-logo.svg';
import { config$ } from '../sidebar-config-state';


function TruffleSidebar() {
  const currentCreator: CreatorInfo = creatorList.get()[0]; //TODO set current creator in state instead of hardcoding
  useStyleSheet(styleSheet);
  const isOpen$ = useObservable<boolean>(false);
  const isGateKept$ = useObservable<boolean>(true);
  const screenSide = config$.get().screenSide;
  const activationZoneWidth = config$.get().activationZoneWidth;
  const isTwoStep = config$.get().isTwoStep;
  return (
    <>
      <div
        className={`truffle-sidebar-mouse-leave-detector ${isOpen$.get() ? "is-open" : ""} config-${screenSide}`}
        style={{ width: `calc(100% - ${activationZoneWidth}px)` }}
        onMouseLeave={(e: React.MouseEvent) => {
          //only open the sidebar if the mouse is on the left side of the screen
          if (e.clientX <= activationZoneWidth)
            isOpen$.set(true)
        }}
      />
      <div
        className={`truffle-sidebar-mouse-enter-detector config-${screenSide}`}
        style={{ width: `${activationZoneWidth}px` }}
        onMouseEnter={() => {
          isOpen$.set(true)
        }}
      />
      <div
        className={`truffle-sidebar-gatekeeper config-${screenSide} ${isTwoStep ? "enabled" : "disabled"}`}
        style={{ [screenSide]: isOpen$.get() ? '0px' : '-72px' }}
        onMouseLeave={(e: React.MouseEvent) => {
          if (e.clientX > activationZoneWidth && isGateKept$.get()) {
            isOpen$.set(false)
          }
        }}
      >
        <img className="truffle-logo" src={truffleLogo} alt={"truffle logo"}
          onMouseEnter={() => { isGateKept$.set(false); isOpen$.set(true) }} />
      </div>
      <div
        className={`truffle-sidebar config-${screenSide}`}
        style={{ [screenSide]: isOpen$.get() && (!isGateKept$.get() || !isTwoStep) ? '0px' : '-72px' }}
        onMouseLeave={(e: React.MouseEvent) => {
          if (e.clientX > activationZoneWidth) {
            isOpen$.set(false)
            isGateKept$.set(true)
          }
        }}
      >
        <TruffleButton />
        {/* display the current creator on top, even if they aren't in the user's creator list */}
        <CreatorItem creatorInfo={currentCreator} />
        {embedList.get().map((embedInfo: EmbedInfo) => {
          return <EmbedItem key={embedInfo.id} embedInfo={embedInfo} />;
        })}

        {creatorList
          .get()
          .filter(
            (creatorInfo: CreatorInfo) => creatorInfo.id !== currentCreator.id
          )
          .map((creatorInfo: CreatorInfo) => {
            return (
              <CreatorItem key={creatorInfo.id} creatorInfo={creatorInfo} />
            );
          })}
      </div>
      <Settings /> {/* replace with modular drawer system */}
    </>
  );
}

export default observer(TruffleSidebar);
