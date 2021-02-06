import { createParallax } from './parallax'
import { createTerminal } from './terminal'
import { forEachElement } from './utils'

setupElements('terminal', createTerminal)
setupElements('parallax', createParallax)

function setupElements(className: string, callback: (el: HTMLElement) => void) {
  const elements = document.getElementsByClassName(className)
  forEachElement(elements, callback)
}
