import { EmbedInfo, CreatorInfo, Platform } from "./types";
import { observable } from "@legendapp/state"
export const embedList = observable<EmbedInfo[]>(
	[
		{
			id: "A",
			iframeSrc: "https://pigtionary-embed.netlify.app/streamer.html",
			iconSrc: "https://cdn.bio/assets/images/branding/logomark.svg",
			title: "🐷 Pigtionary Addon",
			tooltipDescription: "A pictionary game for Truffle",
			dimensions: { x: 900, y: 400 },
			isResizeable: true,
			isOpen: true,
		},
		{
			id: "B",
			iframeSrc: "https://twitframe.com/show?url=https%3A%2F%2Ftwitter.com%2Fjack%2Fstatus%2F20",
			title: "Cringe Twitter Addon",
			iconSrc: "https://cdn.bio/assets/images/branding/logomark.svg",
			tooltipDescription: "A tweet from the founder of Twitter",
			dimensions: { x: 550, y: 220 },
			isResizeable: true,
			resizeBounds: { minWidth: 320, maxWidth: 550, minHeight: 280, maxHeight: 280 },
			isOpen: false,
		},
		{
			id: "C",
			iframeSrc: "https://codepen.io/Thisisntme/embed/Qxqgvv?default-tab=html%2Cresult&theme-id=dark&editable=true",
			title: "Random Codepen",
			iconSrc: "https://cdn.bio/assets/images/branding/logomark.svg",
			tooltipDescription: "A cool random codepen",
			dimensions: { x: 850, y: 420 },
			isResizeable: true,
			isOpen: false,
		},
	]
)

export const creatorList = observable<CreatorInfo[]>(
	[
		{
			id: "1",
			name: "Ludwin",
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