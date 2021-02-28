export function createSmoothScroll(anchor: HTMLElement) {
  if (anchor instanceof HTMLAnchorElement) {
    bindClickEvent(anchor)
  }
}

function bindClickEvent(anchor: HTMLAnchorElement) {
  anchor.addEventListener('click', ev => handleClickEvent(anchor, ev))
}

function handleClickEvent(anchor: HTMLAnchorElement, ev: Event) {
  const href = anchor.getAttribute('href') || ''
  const target = document.querySelector(href)

  if (target instanceof HTMLElement) {
    target.scrollIntoView({ behavior: 'smooth' })
    ev.preventDefault()
  }
}
