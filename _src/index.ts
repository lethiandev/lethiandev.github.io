import { createTerminal } from './terminal'
import { forEachElement } from './utils'

const terminalElements = document.getElementsByClassName('terminal')
forEachElement(terminalElements, initTerminal)

async function initTerminal(el: HTMLElement) {
  await createTerminal(el)
  console.log("Terminal done!")
}
