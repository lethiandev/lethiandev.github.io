import { delay } from './utils'

type TerminalSection = string|number

export async function createTerminal(el: HTMLElement) {
  const sections = buildTerminalSections(el.children)
  await executeTerminalSections(el, sections)
}

async function executeTerminalSections(el: HTMLElement, sections: TerminalSection[]) {
  el.innerHTML = ''

  let spanElement = null
  while (sections.length > 0) {
    const section = sections.shift()
    if (typeof section === 'undefined') {
      continue
    }
    else if (typeof section === 'number') {
      await delay(section)
    }
    else if (section === '\n') {
      if (spanElement) {
        el.append(document.createElement('br'))
      }
      spanElement = document.createElement('span')
      el.classList.remove('typing')
      el.append(spanElement)
    }
    else if (spanElement) {
      spanElement.textContent += section
      el.classList.add('typing')
      await delay(80)
    }
  }

  el.classList.remove('typing')
}

function buildTerminalSections(elements: HTMLCollectionOf<Element>): TerminalSection[] {
  const transform = (acc: TerminalSection[], el: Element) => [...acc, ...prepareSection(el)]
  return Array.from(elements).reduce(transform, [])
}

function prepareSection(element: Element): TerminalSection[] {
  if (element instanceof HTMLSpanElement) {
    return prepareComplexSection(element)
  }

  return []
}

function prepareComplexSection(element: HTMLElement): TerminalSection[] {
  const text = (element.textContent || '').trim().split('')
  const sections: TerminalSection[] = ['\n', ...text]

  if (element.dataset['delay']) {
    const delay = Number(element.dataset['delay'])
    sections.splice(1, 0, delay)
  }

  return sections
}
