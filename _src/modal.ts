export function createModal(modal: HTMLElement) {
  const backdrop = modal.getElementsByClassName('modal-backdrop').item(0)
  const toggler = modal.previousElementSibling

  if (toggler instanceof HTMLInputElement) {
    toggler.addEventListener('change', ev => {
      if (toggler.checked) {
        selectFirstGallerySlide(modal)
      }
    })
  }

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
}

function selectFirstGallerySlide(modal: HTMLElement) {
  const gallery = modal.getElementsByClassName('gallery').item(0)
  if (gallery instanceof HTMLElement) {
    const firstInput = gallery.getElementsByTagName('input').item(0)
    if (firstInput instanceof HTMLInputElement) {
      firstInput.checked = true
    }
  }
}
