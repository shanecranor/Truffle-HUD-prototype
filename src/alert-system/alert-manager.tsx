import { observable } from '@legendapp/state';
import Toast from '../alert-system/toast';
import { ExternalToastProps, InternalToastProps } from './types';
import { useStyleSheet } from '../deps/styles';
import styleSheet from './alert-manager.scss.js';
import { observer } from '@legendapp/state/react';
import truffleLogo from '../assets/truffle-logo.svg';
const toastList$ = observable<InternalToastProps[]>([]);
const exampleToast = () => {
  return {
    id: crypto.randomUUID(),
    header: 'Test app' + Math.random(),
    message: 'This is a test message',
    iconUrl: truffleLogo,
    onClick: () => {
      alert('clicked');
    },
  };
};

const AlertManager = observer(() => {
  useStyleSheet(styleSheet);
  return (
    <div className="c-alert-manager">
      <button onClick={() => makeToast(exampleToast(), 15)}>
        create new toast
      </button>
      {toastList$.get().map((toastProps, index) => {
        return <Toast key={`toast-${index}`} {...toastProps} />;
      })}
    </div>
  );
});
const makeToast = (
  externalToastProps: ExternalToastProps,
  duration: number
) => {
  const { header, message, iconUrl, onClick } = externalToastProps;
  const id = crypto.randomUUID();
  const toastProps = {
    id,
    header,
    message,
    iconUrl,
    close: () => closeToast(id),
    onClick,
  };
  toastList$.push(toastProps);
  //kill the toast after duration seconds
  setTimeout(() => {
    closeToast(id);
  }, duration * 1000);
};
const closeToast = (id: string) => {
  toastList$.set((old) => old.filter((toast) => toast.id !== id));
};
export default AlertManager;
