export function forEachElement<T extends Element, E extends T>(elements: HTMLCollectionOf<T>, fn: (el: E) => void) {
  for (let i = 0, len = elements.length; i < len; i++) {
    var element = elements.item(i)
    if (element != null) {
      fn.call(null, element as E)
    }
  }
}

export function forEachNode<T extends Node>(nodes: NodeListOf<T>, fn: (el: T) => void) {
  nodes.forEach(value => value && fn.call(null, value));
}

export async function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
