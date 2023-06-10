import { config$ } from '../sidebar-config-state';

export default function SeparatorItem() {
  const { sidebarWidth, xSmallWidthRatio } = config$.get()  
  return (
    <div className="separator-item"
    style={{
      width: `${sidebarWidth * xSmallWidthRatio}px`,
    }}/>
  );
}
