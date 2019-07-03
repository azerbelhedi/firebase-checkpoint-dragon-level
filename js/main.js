document.querySelector("#web-button").addEventListener("click" , function(e){
    setTitle("Web Development")
    getDataAndFilter("web development")
})

document.querySelector("#data-science-button").addEventListener("click" , function(e){
    setTitle("Data Science")
    getDataAndFilter("data science")
})

document.querySelector("#game-button").addEventListener("click" , function(e){
    setTitle("Game Development")
    getDataAndFilter("game development")
})

document.querySelector("#mobile-button").addEventListener("click" , function(e){
    setTitle("Mobile Development")
    getDataAndFilter("mobile development")
})

document.querySelector("#all-button").addEventListener("click" , function(e){
    setTitle("All Tracks")
    getDataAndFilter("all tracks")
})



function setTitle(title){
    document.querySelector("#track-title").innerHTML = title 
    // add filter here
}