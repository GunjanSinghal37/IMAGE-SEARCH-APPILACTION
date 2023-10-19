const accesskey = "u09FRRj3zaoq16YI3tDvjPVLqk6ZdxOygPF6stJz4rA";

const formEl = document.querySelector("form");
 const inputEl = document.getElementById("search-input");
 const SearchResults = document.querySelector(".search-results");
 const showmore = document.getElementById("show-more-button");

 let inputdata = "";
 let page = 1;

 async function searchimages() {
    inputdata = inputEl.value;
    const url = "https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${accesskey}";
    

    const response = await fetch(url);  
    const data = await response.json();
    const results = data.results;


    if (page === 1){

        SearchResults.innerHTML = "";

    }

    results.map((result) =>{
        const imagewrapper = document.createElement("div");
        imagewrapper.classList.add("search-result");
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imagelink = document.createElement("a");
        imagelink.href = result.link.html;
        imagelink.target = "_blank";
        imagelink.textcontent = result.alt_description;

        imagewrapper.appendChild(image);
        imagewrapper.appendChild(imagelink);
        imagewrapper.appendChild(imagewrapper);




    });

    page++;
    if (page > 1){
        showmore.style.display = "block";
    }


 


 }

formE1.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
    searchimages();

});

showmore.addEventListener("click", () => {
    searchimages();

});





