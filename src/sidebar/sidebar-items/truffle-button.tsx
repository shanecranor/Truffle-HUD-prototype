import { config$ } from '../../sidebar-config-state';
export default function TruffleButton({ color }) {
  const sidebarWidth = config$.sidebarWidth.get();
  const xxSmall = config$.sizeRatios.xxSmall.get();
  const large = config$.sizeRatios.large.get();
  return (
    <div className="sidebar-item profile-item">
      <div
        className="item-container round"
        style={{
          width: `${large * sidebarWidth}px`,
          height: `${large * sidebarWidth}px`,
          background: color,
        }}
      >
        <img
          style={{
            width: `${xxSmall * sidebarWidth}px`,
            height: `${xxSmall * sidebarWidth}px`,
          }}
          className="icon"
          src={'https://cdn.bio/assets/images/branding/logomark.svg'}
          alt="Truffle Logo"
        />
      </div>
    </div>
  );
}
