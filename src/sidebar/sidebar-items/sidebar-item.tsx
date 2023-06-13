import { config$ } from '../../sidebar-config-state';
type SidebarItemProps = {
  buttonProps: {
    className: string;
    onClick: (event?: React.MouseEvent) => void;
  };
  imageProps: {
    iconUrl: string;
    altText: string;
    sizeRatio: number;
    imgClassName?: string;
  };
  children?: React.ReactNode;
};

export default function SidebarItem({
  buttonProps: { className, onClick },
  imageProps,
  children,
}: SidebarItemProps) {
  const sidebarWidth = config$.sidebarWidth.get();
  const buttonClassName = `sidebar-item ${className}`;
  const imageClassName = `icon ${imageProps.imgClassName}`;
  const { iconUrl, altText, sizeRatio } = imageProps;
  return (
    <button className={buttonClassName} onClick={onClick}>
      <img
        draggable={false}
        className={imageClassName}
        src={iconUrl}
        alt={altText}
        style={{
          width: `${sizeRatio * sidebarWidth}px`,
          height: `${sizeRatio * sidebarWidth}px`,
        }}
      />
      {children}
    </button>
  );
}
