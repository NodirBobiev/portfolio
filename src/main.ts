const email : string = "n.bobiev@innopolis.university";

type Joke = { 
    title: string, 
    date: Date, 
    img: string, 
    alt: string
}

interface RawJoke{
    month: number;
    year: number;
    day: number;
    num: number;
    link?: string;
    news?: string;
    transcript: string;
    safe_title: string;
    alt: string;
    img: string;
    title: string;
}

fetch("https://fwd.innopolis.app/api/hw2?" + new URLSearchParams({email}))
.then((response)=>response.text())
.then(getXKCD)


async function getXKCD(num: string){
    const response = await fetch("https://getxkcd.vercel.app/api/comic?" + new URLSearchParams({num}))
    
    const data : RawJoke = await response.json();
    const joke : Joke = {
        title : data.title,
        img : data.img,
        alt : data.alt,
        date : new Date(Date.UTC(data.year, data.month, data.day, 0, 0, 0)),
    }
    displayXKCD(joke);
}
    


function displayXKCD(data: Joke){
    console.log(data);

    const trash = document.getElementById("trash") as HTMLDivElement;
    
    const title = document.createElement("h2") as HTMLHeadElement;
    title.textContent = data["title"];
    
    const dateSpan = document.createElement("p") as HTMLParagraphElement;
    dateSpan.textContent = data.date.toLocaleDateString("en-RU");

    const img = document.createElement("img") as HTMLImageElement;
    img.setAttribute("src", data["img"]);
    img.setAttribute("alt", data["alt"]);


    trash.appendChild(title);
    trash.appendChild(dateSpan);
    trash.appendChild(img);

}