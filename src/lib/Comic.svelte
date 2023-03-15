<script lang="ts">
    const email : string = "n.bobiev@innopolis.university";

    type Joke = { 
        title: string, 
        date: Date, 
        img: string, 
        alt: string
    }

    interface RawJoke{
        month: string;
        year: string;
        day: string;
        num: number;
        link?: string;
        news?: string;
        transcript: string;
        safe_title: string;
        alt: string;
        img: string;
        title: string;
    }

    const promise : Promise<Joke> = fetch("https://fwd.innopolis.app/api/hw2?" + new URLSearchParams({email}))
    .then((response)=>response.text())
    .then(getXKCD)


    async function getXKCD(num: string){
        const response = await fetch("https://getxkcd.vercel.app/api/comic?" + new URLSearchParams({num}))
        
        const data : RawJoke = await response.json();
        const joke : Joke = {
            title : data.title,
            img : data.img,
            alt : data.alt,
            date : new Date(parseInt(data.year), parseInt(data.month), parseInt(data.day), 0, 0, 0),
        }
        return joke;
    }

</script>

{#await promise}
    <p>Waiting for joke ....</p>
{:then joke} 
    <div >
        <h2>{joke.title}</h2>
        <p>{joke.date.toLocaleDateString("en-RU")}</p>
        <img src={joke.img} alt={joke.alt}/>
    </div>
{:catch error}
    <p style="color:red">ERROR: {error.message}</p>
{/await}

