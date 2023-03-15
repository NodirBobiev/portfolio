<script lang="ts">
  import NavBar from "./NavBar.svelte";
  import Comic from "./lib/Comic.svelte";
  import About from "./About.svelte";
  import TelegramIcon from "./lib/TelegramIcon.svelte";
  import EmailIcon from "./lib/EmailIcon.svelte";

</script>

<NavBar/>
<Comic/>
<main>
  <About/>
</main>

<div style="margin-top: 100px">
  <h4 style="line-height:0;">Contacts:</h4>
  <div>
    <TelegramIcon iconSize={50}/>
    <EmailIcon iconSize={50}/>
  </div>
</div>