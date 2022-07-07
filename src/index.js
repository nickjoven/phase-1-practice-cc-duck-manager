// write your code here!
// fetch ducks
// display each duck in duck nav

const navDuck = document.getElementById('duck-nav') // we'll append imgs here
const baseUrl = 'http://localhost:3000/ducks'
const duckName = document.getElementById('duck-display-name')
const duckImage = document.getElementById('duck-display-image')
const duckLikes = document.getElementById('duck-display-likes')

duckImage.src = 'https://i.ebayimg.com/images/g/nw0AAOSw8NxhmVyc/s-l500.jpg' 

// need to get duck source image
// image in db is a URL that is a property of an object
// objects are in an array
// image: url will be the src for img tags

// function to fetch
const fetchDucks = () => {
    fetch('http://localhost:3000/ducks') // make req to server, get json string
    .then(req => req.json()) // turn req into JS object (array of obj)
    .then(result => {
        result.forEach(element => {
            console.log(element)
            img = document.createElement('img')
            img.src = element["img_url"]
            navDuck.append(img)
            img.addEventListener('click', (e)=> {
                duckName.textContent = element.name
                duckImage.src = element["img_url"]
                duckLikes.textContent = (element.likes == 1) ? `${element.likes} like` : `${element.likes} likes` 
            })
        });
    })
}

fetchDucks()

// duckName.textContent = 

// 2
// event listen for img click show duck name, image, like button and # of likes
// populate elements in duck nav with information polled from the database
// add event listener to img




// 3 
// increment like count on click -->

// 4
// Listen to form. Honestly, just POST as to not f everything up. POST
// unpopulate div
// repopulate div

// ya done.

