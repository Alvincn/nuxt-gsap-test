import { defineNuxtPlugin } from '#app'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import TextPlugin from 'gsap/TextPlugin'
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(TextPlugin)

export default defineNuxtPlugin(() => {
  return {
    provide: {
      gsap,
      ScrollTrigger,
      TextPlugin
    }
  }
})
