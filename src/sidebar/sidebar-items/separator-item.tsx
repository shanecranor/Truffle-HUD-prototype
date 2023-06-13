import { config$ } from '../../sidebar-config-state';

export default function SeparatorItem({ color }: { color: string }) {
  const { sidebarWidth, xSmallWidthRatio } = config$.get();
  return (
    <div
      className="separator-item"
      style={{
        width: `${sidebarWidth * xSmallWidthRatio}px`,
        background: color,
      }}
    />
  );
}
