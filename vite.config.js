import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { viteSingleFile } from "vite-plugin-singlefile"

import Unocss from 'unocss/vite'
import { transformerDirectives, presetIcons, presetUno, extractorSplit } from 'unocss'
import extractorPug from '@unocss/extractor-pug'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteSingleFile(),
    Unocss({
      transformers: [
        transformerDirectives(),
      ],
      presets: [
        presetIcons({
          scale: 1.2,
          extraProperties: {
            'vertical-align': 'middle'
          }
        }),
        presetUno(),
      ],
      extractors: [
        extractorSplit,
        extractorPug()
      ]
    }),
  ],
  base: './',
  build: {
    outDir: "dist",
    target: "esnext",
  }
})
