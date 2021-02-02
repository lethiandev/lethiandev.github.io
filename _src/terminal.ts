import { delay } from "./utils"

enum TerminalSectionType {
  TYPE_CARRIAGE = "carriage",
  TYPE_CHARACTER = "character",
  TYPE_DELAY = "delay",
}

interface TerminalSection {
  type: TerminalSectionType
  value?: string|number|null
}

export async function createTerminal(el: HTMLElement) {
  const sections = buildTerminalSections(el.children)
  await executeTerminalSections(el, sections)
}

async function executeTerminalSections(el: HTMLElement, sections: TerminalSection[]) {
  let spanElement: HTMLSpanElement | null = null
  el.innerHTML = ""

  while (sections.length > 0) {
    const section = sections.shift()
    if (section?.type === TerminalSectionType.TYPE_CARRIAGE) {
      el.append(document.createElement("br"))
      spanElement = document.createElement("span")
      el.append(spanElement)
    }
    else if (section?.type === TerminalSectionType.TYPE_CHARACTER) {
      if (spanElement == null) {
        spanElement = document.createElement("span")
        el.append(spanElement)
      }
      if (spanElement) {
        spanElement.append(document.createTextNode(section.value as string))
      }
      await delay(70)
    }
    else if (section?.type === TerminalSectionType.TYPE_DELAY) {
      await delay(section.value as number)
    }
  }
}

function buildTerminalSections(elements: HTMLCollectionOf<Element>): TerminalSection[] {
  let sections: TerminalSection[] = []

  for (let i = 0, len = elements.length; i < len; i++) {
    const element = elements.item(i)
    if (element instanceof HTMLSpanElement) {
      sections.push(...buildComplexSections(element))
    }
  }

  return sections
}

function buildComplexSections(element: HTMLElement): TerminalSection[] {
  let sections: TerminalSection[] = []

  sections.push({ type: TerminalSectionType.TYPE_CARRIAGE })

  if (element.dataset["delay"]) {
    let value = Number(element.dataset["delay"])
    sections.push({ type: TerminalSectionType.TYPE_DELAY, value })
  }

  if (element.textContent) {
    let sequence = element.textContent.trim()
    for (let value of sequence.split('')) {
      sections.push({ type: TerminalSectionType.TYPE_CHARACTER, value })
    }
  }

  return sections
}
