import './styles/_reset.scss'
import './styles/_global.scss'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app')!,
})

export default app
