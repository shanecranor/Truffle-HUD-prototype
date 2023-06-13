import { config$ } from '../../sidebar-config-state';
export default function TruffleButton({ color }) {
  const sizeRatio = (48.0 / 72.0) * config$.sidebarWidth.get();
  const sizeRatioSmall = (28.0 / 72.0) * config$.sidebarWidth.get();

  return (
    <div className="sidebar-item profile-item">
      <div
        className="item-container round"
        style={{
          width: `${sizeRatio}px`,
          height: `${sizeRatio}px`,
          background: color,
        }}
      >
        <img
          style={{
            width: `${sizeRatioSmall}px`,
            height: `${sizeRatioSmall}px`,
          }}
          className="icon"
          src={'https://cdn.bio/assets/images/branding/logomark.svg'}
          alt="Truffle Logo"
        />
      </div>
    </div>
  );
}