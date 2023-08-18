import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "D:/blog/my-docs/node_modules/.pnpm/vuepress-shared@2.0.0-beta.235_vuepress@2.0.0-beta.66/node_modules/vuepress-shared/lib/client/index.js";
import { h } from "vue";

import { useStyleTag } from "D:/blog/my-docs/node_modules/.pnpm/@vueuse+core@10.3.0_vue@3.3.4/node_modules/@vueuse/core/index.mjs";
import Badge from "D:/blog/my-docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.235_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "D:/blog/my-docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.235_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import BackToTop from "D:/blog/my-docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.235_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";

import "D:/blog/my-docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.235_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
      useStyleTag(`\
  @import url("https://at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css");
  `);
  },
  rootComponents: [
    () => h(BackToTop, {}),
  ],
});
