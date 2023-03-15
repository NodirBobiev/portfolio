<script lang="ts">
    import Icon from "./Icon.svelte";
    
    let github = "https://github.com/NodirBobiev";
    export let iconSize = 40;
    const pkg = {
        imgSrc: '/assets/github.png',
        alt: 'Github',  
    };

</script>

<a id="gh-link" href={github}><Icon {...pkg} iconSize={iconSize}/></a>
