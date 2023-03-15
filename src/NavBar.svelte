<script lang="ts">
    import TelegramIcon from "./lib/TelegramIcon.svelte";
    import EmailIcon from "./lib/EmailIcon.svelte";
    import GithubIcon from "./lib/GithubIcon.svelte";
</script>

<header>
    <nav class="nav-bar">
        <div class="nav-links">
            <a class="nav-link" href="./about.html">About Me</a>
            <a class="nav-link" href="./photos.html">Photos</a>
            <a class="nav-link" href="./portfolio.html">Portfolio</a>
            <a class="nav-link" href="./contact.html">Contact Me</a>
        </div>
        <div class="nav-links" style="width:140px;">
            <TelegramIcon/>
            <EmailIcon/>
            <GithubIcon/>
        </div>
    </nav>
</header>


<style>
    .nav-link{
        display: block;
        padding: 0.5rem 1rem;
        margin: auto 0.5rem;
        text-decoration: none;
        color: rgb(25, 76, 169);
        border-radius: 5px;
        background-color: rgb(255, 255, 255);
        font-weight: bold;
        border: 1px solid rgb(192, 192, 192);
    }
    .nav-links{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    .nav-bar{
        display: flex;
        flex-direction: row;
        height: 70px;
        align-items: center;
        justify-content: space-between;

    }
</style>