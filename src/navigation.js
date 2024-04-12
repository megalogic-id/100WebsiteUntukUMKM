import { getPermalink, getBlogPermalink, getAsset } from "./utils/permalinks";

export const headerData = {
  links: [],
  actions: [{ text: "Daftar Disini", href: "https://s.id/DaftarWebsiteUMKM", target: "_blank" }],
};

export const footerData = {
  socialLinks: [
    { ariaLabel: "Instagram", icon: "tabler:brand-instagram", href: "https://instagram.com/100websiteuntukumkm" },
    { ariaLabel: "RSS", icon: "tabler:rss", href: getAsset("/rss.xml") },
  ],
};
