import {
    RiFacebookFill,
	RiMailFill,
	RiTelegram2Fill,
} from "react-icons/ri";
import type { SocialLink } from "./types";

export const socialLinks: SocialLink[] = [
	{
		url: "#",
		icon: RiFacebookFill,
		label: "Facebook",
	},
	{
		url: "#",
		icon: RiTelegram2Fill,
		label: "Telegram",
	},
	{
		url: "mailto:indiecodermm@gmail.com",
		icon: RiMailFill,
		label: "Email",
	},
];
