export function createModal(modal: HTMLElement) {
  const backdrop = modal.getElementsByClassName('modal-backdrop').item(0)
  const toggler = modal.previousElementSibling

  if (backdrop instanceof HTMLElement && toggler instanceof HTMLInputElement) {
    backdrop.addEventListener('click', ev => {
      if (ev.target === backdrop) {
        toggler.checked = false
      }
    })

    // Disable wheel scroll on modal
    backdrop.addEventListener('wheel', ev => {
      ev.preventDefault()
    })
  }

  // Also handle modal galleries
  createModalGallery(modal)
}

function createModalGallery(modal: HTMLElement) {
  const gallery = modal.getElementsByClassName('gallery').item(0)
  const toggler = modal.previousElementSibling

  if (gallery instanceof HTMLElement && toggler instanceof HTMLInputElement) {
    toggler.addEventListener('change', ev => {
      if (toggler.checked) {
        updateGalleryImages(gallery)
      }
    })
  }
}

function updateGalleryImages(gallery: HTMLElement) {
  const images = gallery.getElementsByClassName('gallery-image')

  // Calculate max content height
  // TODO: Add paddings calculation based on elements
  const height = window.innerHeight - 80

  for(const image of Array.from(images)) {
    const imgElement = image.children.item(0)
    if (imgElement instanceof HTMLImageElement) {
      imgElement.style.maxHeight = `${height}px`
    }
  }
}
