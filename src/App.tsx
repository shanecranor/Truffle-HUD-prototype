import WindowManager from "./window-system/window-manager.tsx"
// import { CreatorInfo, EmbedInfo } from "./types.ts"
import TruffleSidebar from "./sidebar/sidebar.tsx"
function App() {
  return <>
    <TruffleSidebar/>
    <WindowManager/>
  </>
}

export default App
