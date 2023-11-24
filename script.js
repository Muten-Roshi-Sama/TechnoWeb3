/******************************************************************/
var planetNumber = 1;

async function fetchData(){
    const myLink = "https://laboweb.ecam.be/planet/" + planetNumber;
    try {
        let response = await fetch(myLink);
        let data = await response.json();
      //See contents
        console.table(data);
      //Access elem by ID
        const planetName = document.getElementById("planetName");
        const planetDistance = document.getElementById("distance");
        const image = document.getElementById("image");
      //Update
        planetName.textContent = `Planet ${data.name}`;
        planetDistance.textContent = `Distance : ${data.distance}`;
        image.src = "https://dummyimage.com/600x400/000/232761.jpg&text="+ data.name; //data.image has an obsolete link...
                    //URL + specify to API which planet image is needed
        document.getElementById("planetDiameter").textContent = ("diameter :" + data.diameter);
        document.getElementById("planetDistance").textContent = ("distance :" + data.distance);
        document.getElementById("planetStar").textContent = ("star :" + data.star);
        document.getElementById("planetMoons").textContent = ("moons :" + data.moons);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        planetNumber = planetNumber + 1;
}

var nextPlanetButton = document.getElementById('button');
// nextPlanetButton.textContent = "Planet";
nextPlanetButton.addEventListener("click", fetchData);

//---------------------------------------------
// var planetNumber = 1;

// function logPlanet(){
//     const myLink = "https://laboweb.ecam.be/planet/" + planetNumber
//     fetch(myLink)
//         .then(response => response.json())
//         .then(data => {
//       //See contents
//         console.table(data);
//       //Access elem by ID
//         const planetName = document.getElementById("planetName");
//         const planetDistance = document.getElementById("distance");
//         const image = document.getElementById("image");
//       //Update
//         planetName.textContent = `Planet ${data.name}`;
//         planetDistance.textContent = `Distance : ${data.distance}`;
//         image.src = "https://dummyimage.com/600x400/000/232761.jpg&text="+ data.name; //data.image has an obsolete link...
//                     //URL + specify to API which planet image is needed
//         document.getElementById("planetDiameter").textContent = ("diameter :" + data.diameter);
//         document.getElementById("planetDistance").textContent = ("distance :" + data.distance);
//         document.getElementById("planetStar").textContent = ("star :" + data.star);
//         document.getElementById("planetMoons").textContent = ("moons :" + data.moons);
//         })
//         .catch(error => console.error("Fetch error: " + error));
        
//     planetNumber = planetNumber + 1;
//     }

// var nextPlanetButton = document.getElementById('button');
// // nextPlanetButton.textContent = "Planet";
// nextPlanetButton.addEventListener("click", logPlanet);
//=============================================










