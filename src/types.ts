export interface Vector {
  x: number;
  y: number;
}

export interface DragInfo {
  current: Vector;
  start: Vector;
  pressed: boolean;
  draggable: boolean;
}

export interface ResizeBounds {
  minWidth: number;
  maxWidth: number;
  minHeight: number;
  maxHeight: number;
}

export interface EmbedInfo {
  id: string;
  title: string;
  iconSrc: string;
  iframeSrc: string;
  tooltipDescription: string;
  embedWindow: {
    initialDimensions: Vector;
  };
  isResizeable: boolean;
  resizeBounds?: ResizeBounds;
}

export enum Platform {
  twitch = 'twitch',
  youtube = 'youtube',
}

export interface CreatorInfo {
  id: string;
  name: string;
  iconSrc: string;
  isLive: boolean;
  platform: Platform;
  order: number;
}

export interface EmbedWindowState {
  embedId: string;
  isOpen: boolean;
  zIndex: number;
}

export interface SidebarConfig {
  isTwoStep: boolean;
  twoStepActivationMode: 'hover' | 'click';
  screenSide: 'left' | 'right';
  activationZoneWidth: number;
  primaryColor: string;
  secondaryColor: string;
  secondaryOpacity: number;
  sidebarTimeout: number;
  sidebarWidth: number;
  largeWidthRatio: number;
  smallWidthRatio: number;
  xSmallWidthRatio: number;
  folderWidthRatio: number;
}
