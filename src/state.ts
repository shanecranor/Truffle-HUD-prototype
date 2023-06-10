import { EmbedInfo, CreatorInfo, Platform, EmbedWindowState } from "./types";
import { observable, observe, batch } from "@legendapp/state"
import pigtionaryIcon from "./assets/temporary-addon-icons/pigtionary-icon.svg";
import pokeIcon from "./assets/temporary-addon-icons/poke-icon.svg";
export const embedList = observable<EmbedInfo[]>(
  [
    {
      id: "A",
      iframeSrc: "https://pigtionary-embed.netlify.app/streamer.html",
      iconSrc: pigtionaryIcon,
      title: "🐷 Pigtionary Addon",
      tooltipDescription: "A pictionary game for Truffle",
      embedWindow: {

        initialDimensions: { x: 900, y: 400 },
      },
      isResizeable: true,
    },
    {
      id: "B",
      iframeSrc: "https://twitframe.com/show?url=https%3A%2F%2Ftwitter.com%2Fjack%2Fstatus%2F20",
      title: "Cringe Twitter Addon",
      iconSrc: "https://cdn.bio/assets/images/branding/logomark.svg",
      tooltipDescription: "A tweet from the founder of Twitter",
      embedWindow: {

        initialDimensions: { x: 550, y: 220 },
      },
      isResizeable: true,
      resizeBounds: { minWidth: 320, maxWidth: 550, minHeight: 280, maxHeight: 280 },
    },
    {
      id: "C",
      iframeSrc: "https://codepen.io/Thisisntme/embed/Qxqgvv?default-tab=html%2Cresult&theme-id=dark&editable=true",
      title: "Random Codepen",
      iconSrc: pokeIcon,
      tooltipDescription: "A cool random codepen",
      embedWindow: {

        initialDimensions: { x: 850, y: 420 },
      },
      isResizeable: true,
    },
  ]
)

// use this to keep track of the window state for each embed
export const embedWindowStates = observable<Record<string, EmbedWindowState>>({})

// whenever the embedList changes, reset the embedWindowStates
observe(() => {
  // passing `true` to `get` will do a shallow listen,
  // so this will only run when the whole list of embeds changes.
  // https://legendapp.com/open-source/state/tracking/#shallow-modifier
  const newEmbedList = embedList.get(true)
  embedWindowStates.set(
    Object.fromEntries(
      newEmbedList.map((embed, idx) => [
        embed.id,
        {
          embedId: embed.id,
          isOpen: false,
          zIndex: idx
        }
      ])
    )
  )
})

export function toggleEmbedWindowVisibility(embedId: string) {
  const embedState = embedWindowStates[embedId];
  embedState.isOpen.set((isOpen) => !isOpen);
}

export function setEmbedWindowVisibility(embedId: string, isOpen: boolean) {
  embedWindowStates[embedId].isOpen.set(isOpen);
}

export function moveEmbedWindowToTop(embedId: string) {
  // use batch to only fire listeners once even though we call set multiple times
  // https://legendapp.com/open-source/state/batching/
  batch(() => {
    const highestZ = embedList.peek().length - 1;
    const embedToMove$ = embedWindowStates[embedId];
    const lastZ = embedToMove$.zIndex.peek();

    // decrement the zIndex of all embeds that are above the embed we're moving
    Object.values(embedWindowStates.peek()).forEach(({ zIndex, embedId }) => {
      if (zIndex > lastZ) {
        embedWindowStates[embedId].zIndex.set(zIndex - 1);
      }
    })

    // move the embed to the to the top by
    // setting its zIndex to the highest value
    embedToMove$.zIndex.set(highestZ);
  })
}

export const creatorList = observable<CreatorInfo[]>(
  [
    {
      id: "1",
      name: "Ludwig",
      iconSrc: "https://yt3.googleusercontent.com/ytc/AGIKgqPzDF0P9mISeSG4jx6bKj7TdWDp22qjsfuo5wb97w=s176-c-k-c0x00ffffff-no-rj",
      isLive: true,
      platform: Platform.youtube
    },
    {
      id: "2",
      name: "Stanz",
      iconSrc: "https://static-cdn.jtvnw.net/jtv_user_pictures/42edd801-5b7e-470d-9bdc-47eca00ae114-profile_image-70x70.png",
      isLive: true,
      platform: Platform.twitch
    },
    {
      id: "3",
      name: "Pointcrow",
      iconSrc: "https://yt3.googleusercontent.com/5_U6jez7mSDtw4Rn9rEQGBxLvQu0_gHgmOuRJUqZ2bRqdnzP1KccEcUk2MS9OAZzWDUh7fDF=s176-c-k-c0x00ffffff-no-rj",
      isLive: false,
      platform: Platform.youtube
    },
    {
      id: "4",
      name: "Mogswamp",
      iconSrc: "https://yt3.googleusercontent.com/kWLeyU-QhRyHB_RL0-AxJV3V4wUTdJBsWxhv0GbHELbd52qUPWRHUc68NfruC3KnzD2991VVAw=s176-c-k-c0x00ffffff-no-rj",
      isLive: false,
      platform: Platform.youtube
    }
  ]
)