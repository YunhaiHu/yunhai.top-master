import type {
  ExpressiveCodeConfig,
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Yunhai',
  subtitle: '人生旅途拾忆与思考。',
  lang: 'zh_CN',
  themeColor: {
    hue: 210,
    fixed: true,
  },
  banner: {
    enable: true,
    src: '/banner-new.jpg',
    position: 'top',
    credit: {
      enable: false,
      text: '',
      url: '',
    },
  },
  toc: {
    enable: true,
    depth: 2,
  },
  favicon: [],
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.Shelf,
    LinkPreset.Graph,
    LinkPreset.About,
    LinkPreset.Friends,
    LinkPreset.Memo,
    {
      name: 'GitHub',
      url: 'https://github.com/YunhaiHu',
      external: true,
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: '/avatar.jpg',
  name: 'yunhai',
  bio: '他日北寒仙界会，一声道友尽沧桑。',
  links: [
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/YunhaiHu',
    },
    {
      name: 'RSS',
      icon: 'fa6-solid:rss',
      url: 'https://yunhai.site/rss.xml',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}

export const expressiveCodeConfig: ExpressiveCodeConfig = {
  // Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
  // Please select a dark theme, as this blog theme currently only supports dark background color
  theme: 'github-dark',
}
