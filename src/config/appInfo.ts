import type { AppLogo, StoreLinks } from "./types";

export const appInfo = {
  title: "Badee",
  description: "A mindfulness app for Buddhism with Koenawin tracking, recitation counter, and a meditation timer.",
  logo: {
    type: "image" as AppLogo["type"],
    src: "icon.png",
  },
  storeLinks: {
    apkPure: "https://apkpure.com/p/com.indiecoder.badee",
    direct: "/download/badee-v104(11).apk",
  } as StoreLinks,
};
