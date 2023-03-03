const email = "n.bobiev@innopolis.university";

fetch("https://fwd.innopolis.app/api/hw2?" + new URLSearchParams({email}))
.then((response)=>response.text())
.then(getXKCD)


function getXKCD(num){
    fetch("https://getxkcd.vercel.app/api/comic?" + new URLSearchParams({num}))
    .then(r=>r.json())
    .then(displayXKCD);
}


function displayXKCD(data){
    const date = new Date(Date.UTC(data['year'], data['month'], data['day'], 0, 0, 0));
    console.log(data);

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    const trash = document.getElementById("trash");
    
    const title = document.createElement("h2");
    title.textContent = data["title"];
    
    const dateSpan = document.createElement("p");
    dateSpan.textContent = date.toLocaleDateString("en-RU", options);
    // dateSpan.classList.add("badge");

    const img = document.createElement("img");
    img.setAttribute("src", data["img"]);
    img.setAttribute("alt", data["alt"]);


    trash.appendChild(title);
    trash.appendChild(dateSpan);
    trash.appendChild(img);

}