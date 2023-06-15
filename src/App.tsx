import WindowManager from './window-system/window-manager';
import TruffleSidebar from './sidebar/sidebar';
import AlertManager from './alert-system/alert-manager';
import { embedList$ } from './state';
import { observer } from '@legendapp/state/react';

function App() {
  // if (embedList$.get().length === 0) return <></>;
  return (
    <>
      <TruffleSidebar />
      <WindowManager />
      <AlertManager />
    </>
  );
}

export default observer(App);
