const resultsContainer = document.querySelector("#results")

document.querySelector("#saveEntry").addEventListener("click", event => {
    const personFavThing = document.querySelector(".favThing").value
    const personLocation = document.querySelector(".location").value

    resultsContainer.innerHTML += `
        <section>
            <h3>I can purchase ${personFavThing} at ${personLocation}</h3>`
})

