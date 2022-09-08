let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementsByClassName("search");
searchBtn.addEventListener("click", ()=> {
    let countryName = countryInp.value;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '23c3877b72msh7fbd8995e46cbedp155a90jsn9f6f2ac20b08',
            'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
        }
    };
    
    fetch('https://hotels4.p.rapidapi.com/properties/get-hotel-photos?id=1178275040', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
   
    // .then(data =>{
    //     console.log(data)
    //     const hotelList = document.querySelector('.hotelList')

    //     let suggestions = data.suggestions
    //     suggestions.forEach(suggestion => {
    //         var z = document.createElement('p');
    //         z.innerHTML = suggestion.group;
    //         hotelList.appendChild(z)
         
    //     });
    // })
    })


    