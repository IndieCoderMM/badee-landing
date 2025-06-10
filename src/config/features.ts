import { FiBell, FiBox, FiCalendar, FiCheckCircle, FiClock, FiStar, FiZap } from "react-icons/fi";
import type { Feature } from "./types";
import { AiFillAudio } from "react-icons/ai";
import { RiLineChartFill, RiMusicFill } from "react-icons/ri";

export const features: Feature[] = [
	{
		title: "Koenawin Calendar",
		description: "Build a daily Koenawin ritual with streaks, progress tracking, and a visual calendar.",
		icon: FiCalendar,
	},
	{
		title: "Recitation Counter",
		description: "A distraction-free counter built for Koenawin and other recitations.",
		icon: FiCheckCircle,
	},
	{
		title: "Meditation Timer",
		description: "Minimalist timer to support your meditation sessions.",
		icon: FiClock,
	},
  {
    title: "Dhamma Audio",
    description: "Stream or download Dhamma from respected Venerable Sayadaws.",
    icon: RiMusicFill,
  },
  {
    title: "Daily Progress",
    description: "View your practice grow over time with streaks, stats, and simple visuals",
    icon: RiLineChartFill
  },
  {
    title: "Mindful Reminders",
    description: "Get daily reminders to be mindful and present.",
    icon: FiBell
  }
];
