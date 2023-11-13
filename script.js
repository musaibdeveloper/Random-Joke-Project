let getBtn = document.getElementById("button");

async function myjoke() {
    let collecting = await fetch("https://icanhazdadjoke.com", {
        headers: {
            accept: "application/json"
        }
    })

    let getJoke = await collecting.json();
    let finalJoke = getJoke.joke;

    // console.log(finalJoke);

    getBtn.innerHTML = finalJoke;
    

}

myjoke()