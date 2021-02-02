import { createTerminal } from './terminal'
import { forEachElement } from './utils'

const terminalElements = document.getElementsByClassName('terminal')
forEachElement(terminalElements, createTerminal)
