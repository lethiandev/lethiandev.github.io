import { delay, forEachElement } from "./utils"

export function createForm(form: HTMLElement) {
  if (form instanceof HTMLFormElement) {
    handleFormSubmit(form)
  }
}

function handleFormSubmit(form: HTMLFormElement) {
  form.addEventListener('submit', ev => {
    ev.preventDefault()
    processFormSend(form)
  })
}

async function processFormSend(form: HTMLFormElement) {
  form.classList.add('form--sending')
  form.classList.remove('form--error')
  setFormDisabled(form, true)

  try {
    await sendFormData(form)
    form.classList.add('form--success')
  }
  catch (err) {
    form.classList.add('form--error')
    setFormDisabled(form, false)
  }
  finally {
    form.classList.remove('form--sending')
  }
}

async function sendFormData(form: HTMLFormElement) {
  const formData = new FormData(form)
  const result = await fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      'Accept': 'application/json',
    },
  })

  if (result.status !== 200) {
    throw new Error(result.statusText)
  }
}

function setFormDisabled(form: HTMLFormElement, disabled: boolean) {
  for (const element of Array.from(form.elements)) {
    if (element instanceof HTMLInputElement) {
      element.readOnly = disabled
    }
    if (element instanceof HTMLTextAreaElement) {
      element.readOnly = disabled
    }
    if (element instanceof HTMLButtonElement) {
      element.disabled = disabled
      element.blur()
    }
  }
}
