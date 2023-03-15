<script lang="ts">
    import Icon from "./Icon.svelte";
    
    let email = "n.bobiev@innopolis.university";
    export let iconSize = 40;
    const pkg = {
        imgSrc: '/assets/email.png',
        alt: 'Email',  
    };

</script>

<a id="email" href="mailto:{email}"><Icon {...pkg} iconSize={iconSize}/></a>
