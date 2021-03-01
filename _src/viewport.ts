export function createViewportEnter(target: HTMLElement) {
  if (target && target.dataset["viewport"]) {
    const className = target.dataset["viewport"]
    bindViewportEnter(target, className)
  }
}

function bindViewportEnter(target: HTMLElement, className: string) {
  window.addEventListener('scroll', handleWindowScroll)
  handleWindowScroll();

  function handleWindowScroll() {
    const rect = target.getBoundingClientRect()
    const yoffset = rect.y - window.innerHeight

    if (yoffset < 0.0) {
      target.classList.add(className)

      // Handle scroll event only when needed
      window.removeEventListener('scroll', handleWindowScroll)
    }
  }
}
