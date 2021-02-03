import { createTerminal } from './terminal'
import { forEachElement } from './utils'

const terminalElements = document.getElementsByClassName('terminal')
forEachElement(terminalElements, startTerminal)

async function startTerminal(el: HTMLElement) {
  await createTerminal(el)
  console.log("Terminal done!")
}
