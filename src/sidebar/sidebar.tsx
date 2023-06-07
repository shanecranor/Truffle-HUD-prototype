// import './sidebar.scss'

import { CreatorInfo, EmbedInfo } from '../types';
import { creatorList, embedList } from '../state.js';
import EmbedItem from './embed-item';
import CreatorItem from './creator-item';
import TruffleProfileItem from './truffle-profile-item';
import { useStyleSheet } from '../deps/styles';
import styleSheet from './sidebar.scss.js';
import { useObservable, observer } from '@legendapp/state/react';
import truffleLogo from '../assets/truffle-logo.svg';

const MOUSEOVER_DETECTOR_WIDTH: number = 8;

function TruffleSidebar() {
  const currentCreator: CreatorInfo = creatorList.get()[0]; //TODO set current creator in state instead of hardcoding
  useStyleSheet(styleSheet);
  const isOpen = useObservable<boolean>(false);
  const isGateKept = useObservable<boolean>(true);
  return (
    <>
      <div
        className="truffle-sidebar-mouse-leave-detector"
        style={{ width: `calc(100% - ${MOUSEOVER_DETECTOR_WIDTH}px)` }}
        onMouseLeave={(e: React.MouseEvent) => {
          //only open the sidebar if the mouse is on the left side of the screen
          if (e.clientX <= MOUSEOVER_DETECTOR_WIDTH)
            isOpen.set(true)
        }}
      />
      <div
        className="truffle-sidebar-mouse-enter-detector"
        style={{ width: `${MOUSEOVER_DETECTOR_WIDTH}px` }}
        onMouseEnter={() => {
          isOpen.set(true)
        }}
      />
      <div
        className="truffle-sidebar-gatekeeper"
        style={{ left: isOpen.get() ? '0px' : '-72px' }}
        onMouseLeave={(e: React.MouseEvent) => {
          if (e.clientX > MOUSEOVER_DETECTOR_WIDTH && isGateKept.get()) {
            isOpen.set(false)
          }
        }}
      >
        <img className="truffle-logo" src={truffleLogo} alt={"truffle logo"}
          onMouseEnter={() => { isGateKept.set(false); isOpen.set(true) }} />
      </div>
      <div
        className="truffle-sidebar"
        style={{ left: isOpen.get() && !isGateKept.get() ? '0px' : '-72px' }}
        onMouseLeave={(e: React.MouseEvent) => {
          if (e.clientX > MOUSEOVER_DETECTOR_WIDTH) {
            isOpen.set(false)
            isGateKept.set(true)
          }
        }}
      >
        <TruffleProfileItem />
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
    </>
  );
}

export default observer(TruffleSidebar);
