import { createParallax } from './parallax'
import { createTerminal } from './terminal'
import { createModal } from './modal'
import { forEachElement } from './utils'

setupElements('terminal', createTerminal)
setupElements('parallax', createParallax)
setupElements('modal', createModal)

function setupElements(className: string, callback: (el: HTMLElement) => void) {
  const elements = document.getElementsByClassName(className)
  forEachElement(elements, callback)
}
