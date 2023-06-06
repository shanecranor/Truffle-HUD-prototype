import WindowManager from "./window-system/window-manager.tsx"
import { CreatorInfo, EmbedInfo } from "./types.ts"
import TruffleSidebar from "./sidebar/sidebar.tsx"
function App({ embedList, creatorList }: { embedList: EmbedInfo[], creatorList: CreatorInfo[]}) {
  return <>
    <TruffleSidebar embedList={embedList} creatorList={creatorList} currentCreator={creatorList[0]}/>
    <WindowManager embedList={embedList}/>
  </>
}

export default App
