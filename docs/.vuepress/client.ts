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
 * @LastEditTime: 2025-08-27 14:00:48
 * @Description: 
 * Copyright (c) 2025 by XAUT NEXT-E/ziyu, All Rights Reserved. 
 */
import { defineClientConfig } from 'vuepress/client'
// import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
// import NpmBadge from 'vuepress-theme-plume/features/NpmBadge.vue'
// import NpmBadgeGroup from 'vuepress-theme-plume/features/NpmBadgeGroup.vue'
// import Swiper from 'vuepress-theme-plume/features/Swiper.vue'

// import CustomComponent from './theme/components/Custom.vue'

// import './theme/styles/custom.css'

import './styles/index.css'

export default defineClientConfig({
  enhance({ app }) {
    // built-in components
    // app.component('RepoCard', RepoCard)
    // app.component('NpmBadge', NpmBadge)
    // app.component('NpmBadgeGroup', NpmBadgeGroup)
    // app.component('Swiper', Swiper) // you should install `swiper`

    // your custom components
    // app.component('CustomComponent', CustomComponent)
  },
})
