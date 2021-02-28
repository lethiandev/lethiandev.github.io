import { createParallax } from './parallax'
import { createTerminal } from './terminal'
import { createModal } from './modal'
import { createForm } from './form'
import { createSmoothScroll } from './smscroll'
import { forEachElement } from './utils'

setupElements('terminal', createTerminal)
setupElements('parallax', createParallax)
setupElements('modal', createModal)
setupElements('form', createForm)

document.querySelectorAll('a[href^="#"]').forEach(
  el => el instanceof HTMLElement && createSmoothScroll(el)
)

function setupElements(className: string, callback: (el: HTMLElement) => void) {
  const elements = document.getElementsByClassName(className)
  forEachElement(elements, callback)
}
