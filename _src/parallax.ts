import { forEachElement } from "./utils"

export function createParallax(target: HTMLElement) {
  const layers = target.children
  window.addEventListener('scroll', ev => {
    forEachElement(layers, updateLayer)
  }, { passive: true })
}

function updateLayer(layer: HTMLElement) {
  const scale = Number(layer.dataset['scrollScale'])
  const travel = window.scrollY / scale
  layer.style.transform = `translateY(-${travel}px)`;
}
