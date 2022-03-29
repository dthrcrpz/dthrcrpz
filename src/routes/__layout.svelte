<Navbar theme={theme}/>
<div class="pt-[64px]">
  <slot></slot>
</div>

<script>
  import '../styles/app.css'
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