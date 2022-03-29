<Navbar theme={theme}/>
<div class="pt-[64px]">
  <slot></slot>
</div>

<script>
  /* css files */
  import '../styles/app.css'
  import '../styles/buttons.css'
  import '../styles/forms.css'
  
  import Navbar from "../components/global/Navbar.svelte"
  import { theme } from '../stores/global'
  import { onMount } from 'svelte'

  /* methods */
  function setSiteTheme() {
    if (localStorage.dcTheme === 'light' || localStorage.dcTheme == undefined) {
      theme.setTheme('light')
    } else {
      theme.setTheme('dark')
    }
  }

  /* lifecycle */
  onMount(() => {
    setSiteTheme()
  })
</script>