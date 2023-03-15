<script lang="ts">
    import Icon from "./Icon.svelte";
    
    let telegram = "https://t.me/nodir_bobiev";
    export let iconSize = 40;
    const pkg = {
        imgSrc: '/assets/telegram.png',
        alt: 'Telegram',
    };

</script>

<a id="tg-link" href={telegram}><Icon {...pkg} iconSize={iconSize}/></a>
