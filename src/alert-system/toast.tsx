//react function component boilerplate
import closeIcon from '../assets/close.svg';
import { useStyleSheet } from '../deps/web-component';
import styleSheet from './toast.scss.js';
import { InternalToastProps } from './types';

export default function Toast(toastProps: InternalToastProps) {
  useStyleSheet(styleSheet);
  const { header, message, iconUrl, close, onClick } = toastProps;
  return (
    <div className="c-toast" onClick={onClick}>
      <img className="icon" src={iconUrl} />
      <div className="text-container">
        <div className="header">{header}</div>
        <div className="message">{message}</div>
      </div>
      <button
        className="close-button"
        onClick={(e: React.MouseEvent) => {
          e.stopPropagation();
          close();
        }}
      >
        <img src={closeIcon} />
      </button>
    </div>
  );
}
