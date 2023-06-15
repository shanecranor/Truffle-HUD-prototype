import { config$ } from '../../sidebar-config-state';

export default function SeparatorItem({ color }: { color: string }) {
  const sidebarWidth = config$.sidebarWidth.get();
  const xSmall = config$.sizeRatios.xSmall.get();
  return (
    <div
      className="separator-item"
      style={{
        width: `${sidebarWidth * xSmall}px`,
        background: color,
      }}
    />
  );
}
