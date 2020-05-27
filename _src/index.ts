import { sayHello } from './hello';

window.addEventListener('popstate', ev => {
  console.log('onpopstate', document.location, JSON.stringify(ev.state))
  ev.preventDefault()
})

const hrefs = document.getElementsByTagName('a')
for (let i = 0; i < hrefs.length; i++) {
  const href = hrefs.item(i) as HTMLAnchorElement

  href.addEventListener('click', ev => {
    console.log('push state', href.href)
    history.pushState({}, 'Project', href.href)
    ev.preventDefault()
  })
}
