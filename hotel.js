
let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("search-input");
searchBtn.addEventListener("click", ()=> {
    let countryName = countryInp.value ;
   const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '23c3877b72msh7fbd8995e46cbedp155a90jsn9f6f2ac20b08',
            'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
        }
    };
    if (countryName == ""){
        alert(`Enter a country name...`)
    }
    else{
    
    fetch(`https://hotels4.p.rapidapi.com/locations/v2/search?query=${countryName}&locale=en_US&currency=USD`, options)
        .then(response => response.json())
        // .then(response => console.log(response))
        // .catch(err => console.error(err));
        
        // checking data
        .then(data => {
            // console.log(typeof data)
            const hotelList = document.querySelector('.hotel-list')
            // extract all entities in the suggested array
            const allSuggestedEntities = data.suggestions.map( item => item.entities)

            // concatinate it
            // using array method flat, please do well to read up on flat 
            let concatinatedArray = allSuggestedEntities.flat()

            // use this to display numbers of hotel found
            document.getElementById("count").innerText = `${concatinatedArray.length} + Hotels found `

            // container to hold up the list of hotel
            let div = ''
            // loop throught the concatinated array and add it up using the div variable created obeve
            concatinatedArray.forEach( entity => {
                // add to the list of hotel
                div += `
                    <div class="hotel1">
                        <img id="hotel1" src="main/images/Blog Img 1.png">
                        <h3>${entity.caption}</h3>
                        <h4> ${entity.name}</h4>
                        <p> ${entity.type}</p>
                        <p> ${entity.destinationId}</p>
                    </div>`
            })
            
            document.getElementById("hotel-list").innerHTML = div
            
        })
    }
    });

    // toggle-------------
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', () =>{
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    document.querySelectorAll('.nav-link').forEach(n =>
        n.addEventListener("click", () =>{
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));


    