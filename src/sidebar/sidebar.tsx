// import './sidebar.scss'

import { CreatorInfo, EmbedInfo } from '../types';
import { creatorList$, embedList$ } from '../state.js';
import EmbedItem from './sidebar-items/embed-item';
import CreatorItem from './sidebar-items/creator-item';
import TruffleButton from './sidebar-items/truffle-button';
import Settings from './settings-panel';
import { useStyleSheet } from '../deps/styles';
import styleSheet from './sidebar.scss.js';
import { useObservable, observer } from '@legendapp/state/react';
import truffleLogo from '../assets/truffle-logo.svg';
import { config$ } from '../sidebar-config-state';
import React, { useEffect } from 'react';
import SeparatorItem from './sidebar-items/separator-item';

function distanceToEdge(e: React.MouseEvent | MouseEvent) {
  if (config$.get().screenSide === 'left') return e.clientX;
  return window.innerWidth - e.clientX;
}
function directionToSidebar() {
  if (config$.get().screenSide === 'left') return -1;
  return 1;
}

function TruffleSidebar() {
  const currentCreator: CreatorInfo = creatorList$.get()[0]; //TODO set current creator in state instead of hardcoding
  useStyleSheet(styleSheet);
  // const lastMouseEvent$ = useObservable<MouseEvent | null>(null);
  const isMouseInSidebar$ = useObservable<boolean>(false);
  const timeoutTimer$ = useObservable<number>(0);
  const isOpen$ = useObservable<boolean>(false);
  const isGateKept$ = useObservable<boolean>(true);
  const {
    screenSide,
    activationZoneWidth,
    sidebarWidth,
    isTwoStep,
    twoStepActivationMode,
    largeWidthRatio,
    folderWidthRatio,
    primaryColor,
    secondaryColor,
    secondaryOpacity,
  } = config$.get();

  const secondaryColorString = `${secondaryColor}${Math.round(
    secondaryOpacity * 255
  ).toString(16)}`;
  function closeSidebar() {
    //cancel any pending timeout before setting a new one
    if (timeoutTimer$.get()) {
      window.clearTimeout(timeoutTimer$.get());
    }
    //create a new timeout and store id in state
    timeoutTimer$.set(
      window.setTimeout(() => {
        if (!isMouseInSidebar$.get()) {
          isOpen$.set(false);
          isGateKept$.set(true);
        }
        timeoutTimer$.set(0);
      }, config$.sidebarTimeout.get())
    );
  }
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      isMouseInSidebar$.set(false);
      const inQuarter: boolean = distanceToEdge(e) < window.innerWidth / 4;
      const movingTowardsSidebar: boolean =
        e.movementX > activationZoneWidth * directionToSidebar();
      if (inQuarter && movingTowardsSidebar) {
        isOpen$.set(true);
      }

      closeSidebar();
    };
    const handleMouseEnter = (e: MouseEvent) => {
      if (distanceToEdge(e) < sidebarWidth) {
        isMouseInSidebar$.set(true);
      }
    };
    const handleMouseMove = () => {
      // lastMouseEvent$.set(e)
    };
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.documentElement.removeEventListener(
        'mouseleave',
        handleMouseLeave
      );
      document.documentElement.removeEventListener(
        'mouseenter',
        handleMouseEnter
      );
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <>
      <div
        className={`truffle-sidebar-mouse-leave-detector ${
          isOpen$.get() ? 'is-open' : ''
        } config-${screenSide}`}
        style={{ width: `calc(100% - ${sidebarWidth}px)` }}
        onMouseEnter={() => {
          isMouseInSidebar$.set(false);
          closeSidebar();
        }}
      />
      <div
        className={`truffle-sidebar-mouse-enter-detector config-${screenSide} ${
          isMouseInSidebar$.get() ? 'inSidebar' : 'NOTinSidebar'
        }`}
        style={{ width: `${activationZoneWidth}px` }}
        onMouseEnter={() => {
          isMouseInSidebar$.set(true);
          isOpen$.set(true);
        }}
      />
      <div
        className={`truffle-sidebar-gatekeeper config-${screenSide} ${
          isTwoStep ? 'enabled' : 'disabled'
        }`}
        style={{
          [screenSide]: isOpen$.get() ? '0px' : `-${sidebarWidth}px`,
          width: `${sidebarWidth}px`,
        }}
        onMouseLeave={(e: React.MouseEvent) => {
          if (distanceToEdge(e) > activationZoneWidth && isGateKept$.get()) {
            isMouseInSidebar$.set(false);
            closeSidebar();
          }
        }}
      >
        <img
          className="truffle-logo"
          src={truffleLogo}
          alt={'truffle logo'}
          style={{
            width: `${sidebarWidth * largeWidthRatio}px`,
            height: `${sidebarWidth * largeWidthRatio}px`,
          }}
          onMouseEnter={() => {
            if (twoStepActivationMode === 'click') return;
            isGateKept$.set(false);
            isOpen$.set(true);
          }}
          onClick={() => {
            if (twoStepActivationMode === 'hover') return;
            isGateKept$.set(false);
            isOpen$.set(true);
          }}
        />
      </div>
      <div
        className={`truffle-sidebar config-${screenSide}`}
        style={{
          [screenSide]:
            isOpen$.get() && (!isGateKept$.get() || !isTwoStep)
              ? '0px'
              : `-${sidebarWidth}px`,
          width: `${sidebarWidth}px`,
          background: primaryColor,
        }}
        onMouseEnter={() => {
          isMouseInSidebar$.set(true);
        }}
        onMouseLeave={(e: React.MouseEvent) => {
          if (distanceToEdge(e) > activationZoneWidth) {
            isMouseInSidebar$.set(false);
            closeSidebar();
          }
        }}
      >
        <TruffleButton color={secondaryColorString} />
        <SeparatorItem color={secondaryColorString} />
        {/* display the current creator on top, even if they aren't in the user's creator list */}
        <div
          className="current-creator-embed-folder"
          style={{
            width: `${folderWidthRatio * sidebarWidth}px`,
            background: secondaryColorString,
          }}
        >
          <CreatorItem creatorInfo={currentCreator} />
          {embedList$.get().map((embedInfo: EmbedInfo) => {
            return <EmbedItem key={embedInfo.id} embedInfo={embedInfo} />;
          })}
        </div>
        <SeparatorItem color={secondaryColorString} />
        {creatorList$
          .get()
          .filter(
            //don't display the current creator in the list
            (creatorInfo: CreatorInfo) => creatorInfo.id !== currentCreator.id
          )
          .sort((a, b) => a.order - b.order) //sort by user defined order
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
