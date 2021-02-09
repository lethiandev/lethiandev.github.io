export function createModal(modal: HTMLElement) {
  const backdrop = modal.getElementsByClassName('modal-backdrop').item(0)
  const toggler = modal.previousElementSibling

  if (backdrop instanceof HTMLElement && toggler instanceof HTMLInputElement) {
    backdrop.addEventListener('click', ev => {
      if (ev.target === backdrop) {
        toggler.checked = false
      }
    })
  }
}
