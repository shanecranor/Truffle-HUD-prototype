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
import React, { useEffect } from 'react';
import { time } from 'console';

function distanceToEdge(e: React.MouseEvent | MouseEvent) {
  if (config$.get().screenSide === "left")
    return e.clientX
  return window.innerWidth - e.clientX
}
function directionToSidebar() {
  if (config$.get().screenSide === "left")
    return -1
  return 1
}

function TruffleSidebar() {
  const currentCreator: CreatorInfo = creatorList.get()[0]; //TODO set current creator in state instead of hardcoding
  useStyleSheet(styleSheet);
  // const lastMouseEvent$ = useObservable<MouseEvent | null>(null);
  const isMouseInWindow$ = useObservable<boolean>(false);
  const timeoutTimer$ = useObservable<number>(0);
  const isOpen$ = useObservable<boolean>(false);
  const isGateKept$ = useObservable<boolean>(true);
  const screenSide = config$.get().screenSide;
  const activationZoneWidth = config$.get().activationZoneWidth;
  const isTwoStep = config$.get().isTwoStep;
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      isMouseInWindow$.set(false)
      const inQuarter: boolean = distanceToEdge(e) < window.innerWidth / 4
      const movingTowardsSidebar: boolean = e.movementX > activationZoneWidth * directionToSidebar()
      if (inQuarter && movingTowardsSidebar) {
        isOpen$.set(true)
      }
      //cancel any pending timeout before setting a new one
      if (timeoutTimer$.get()) {
        window.clearTimeout(timeoutTimer$.get())
      }
      //create a new timeout and store id in state
      timeoutTimer$.set(
        window.setTimeout(() => {
          if (!isMouseInWindow$.get()) {
            isOpen$.set(false)
          }
          timeoutTimer$.set(0)
        }, config$.sidebarTimeout.get())
      )
    };
    const handleMouseEnter = () => {
      isMouseInWindow$.set(true)
    };
    const handleMouseMove = () => {
      // lastMouseEvent$.set(e)
    }
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave)
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousemove', handleMouseMove)
    };
  }, []);
  return (
    <>
      <div
        className={`truffle-sidebar-mouse-leave-detector ${isOpen$.get() ? "is-open" : ""} config-${screenSide}`}
        style={{ width: `calc(100% - ${72}px)` }} //TODO: make this 72px a CSS variable
        onMouseEnter={() => {
          isOpen$.set(false)
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
          if (/*e.clientX > activationZoneWidth && */isGateKept$.get()) {
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
          if (distanceToEdge(e) > activationZoneWidth) {
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
