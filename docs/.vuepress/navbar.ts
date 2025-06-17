/*
 *  _   _  _______   _______   _____  
 * | \ | ||  ___\ \ / /_   _| |  ___| 
 * |  \| || |__  \ V /  | |   | |__   
 * | . ` ||  __| /   \  | |   |  __|  
 * | |\  || |___/ /^\ \ | |   | |___  
 * \_| \_/\____/\/   \/ \_/   \____/  
 * 
 * @Author: ziyu (Chen Zhaoyu)
 * @Date: 2025-06-14 00:16:00
 * @LastEditors: ziyu (Chen Zhaoyu)
 * @LastEditTime: 2025-06-17 13:00:45
 * @Description: 
 * Copyright (c) 2025 by XAUT NEXT-E/ziyu, All Rights Reserved. 
 */
/*
 *  _   _  _______   _______   _____  
 * | \ | ||  ___\ \ / /_   _| |  ___| 
 * |  \| || |__  \ V /  | |   | |__   
 * | . ` ||  __| /   \  | |   |  __|  
 * | |\  || |___/ /^\ \ | |   | |___  
 * \_| \_/\____/\/   \/ \_/   \____/  
 * 
 * @Author: ziyu (Chen Zhaoyu)
 * @Date: 2025-06-14 00:16:00
 * @LastEditors: ziyu (Chen Zhaoyu)
 * @LastEditTime: 2025-06-17 12:58:48
 * @Description: 
 * Copyright (c) 2025 by XAUT NEXT-E/ziyu, All Rights Reserved. 
 */

/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '博客', link: '/blog/' },
  {
    text: '培训',
    items: [
      { text: '算法组', link: '/docs/train/algorithm_group/' },
      { text: '电控组', link: '/docs/train/control-group/' },
    ]
  },
  {
    text: '文档',
    items: [
      { text: '算法组', link: '/docs/docs/algorithm_group/' },
      { text: '电控组', link: '/docs/docs/control-group/' },
    ]
  },
  { text: '关于NEXT-E', link: '/about/' },
])
