import { SidebarConfig } from './types';
import { observable } from '@legendapp/state';

export const defaultConfig: SidebarConfig = {
  sidebarWidth: 72,
  activationSettings: {
    isTwoStep: true,
    twoStepMode: 'hover',
    screenSide: 'left',
    activationZoneWidth: 14,
    sidebarTimeout: 1000,
  },
  colors: {
    primaryColor: '#1f1f1f',
    secondaryColor: '#ffffff',
    secondaryOpacity: 0.08,
  },
  sizeRatios: {
    folderWidth: 56 / 72,
    large: 48 / 72,
    small: 40 / 72,
    xSmall: 32 / 72,
    xxSmall: 28 / 72,
  },
};
export const config$ = observable<SidebarConfig>(defaultConfig);
