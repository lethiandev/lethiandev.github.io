import { delay } from './utils'

interface Terminal {
  root: HTMLElement;
  body: HTMLElement;
}

interface TerminalLine {
  element: HTMLElement;
  value: string;
}

export async function createTerminal(root: HTMLElement) {
  const body = root.querySelector('.terminal-body')
  if (body instanceof HTMLElement) {
    const terminal: Terminal = { root, body }
    const lines = fetchTerminalLines(terminal)
    await executeTerminal(terminal, lines)
  }

  // Smooth scroll on continue click
  const link = root.querySelector('.terminal-continue')
  if (link instanceof HTMLAnchorElement) {
    link.addEventListener('click', ev => {
      const href = link.getAttribute('href') || ''
      const target = document.querySelector(href)
      if (target instanceof HTMLElement) {
        target.scrollIntoView({ behavior: 'smooth' })
        ev.preventDefault()
      }
    })
  }
}

async function executeTerminal(terminal: Terminal, lines: TerminalLine[]) {
  const root = terminal.root
  root.classList.add('terminal--animating')

  while (lines.length > 0) {
    const line = lines.shift() as TerminalLine
    await executeTerminalLine(terminal, line)
  }

  await delay(600)
  root.classList.remove('terminal--animating')
}

async function executeTerminalLine(terminal: Terminal, line: TerminalLine) {
  const { root, body } = terminal

  body.append(line.element)

  if (line.element.dataset['delay']) {
    const delayTime = Number(line.element.dataset['delay'])
    await delay(delayTime)
  }

  root.classList.add('terminal--typing')

  const sequence = line.value.split('')
  while (sequence.length > 0) {
    const seq = sequence.shift() || ''
    line.element.textContent += seq
    await delay(80)
  }

  await delay(200)
  root.classList.remove('terminal--typing')
}

function fetchTerminalLines(terminal: Terminal): TerminalLine[] {
  return terminal.body ? parseTerminalBody(terminal.body) : []
}

function parseTerminalBody(body: HTMLElement): TerminalLine[] {
  return Array.from(body.children)
    .filter(el => el instanceof HTMLParagraphElement)
    .map(el => transformTerminalElement(el as HTMLElement))
}

function transformTerminalElement(element: HTMLElement): TerminalLine {
  const value = element.textContent || '';
  element.innerHTML = ''
  element.remove()

  return { element, value }
}
