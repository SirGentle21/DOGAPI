let main = document.createElement("div")

document.body.appendChild(main)
async function start() {
  const response = await fetch("https://dog.ceo/api/breeds/list/all")

  const data = await response.json()

  createBreedList(data.message)

 }

 start()

 function createBreedList(breedList) {
document.getElementById('main-div').innerHTML = `
<select onchange="loadByBreed(this.value)">
<label>Different Breeds</label>
<option>choose a dog breed</option>
${Object.keys(breedList).map(function (breed){
  return `<option>${breed}</option>`
  }).join('')}
  </select>
  `
}
 async function loadByBreed(breed) {
 if(breed != "choose a dog breed") {

  const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)

  const data = await response.json()

  hotDog(data.message)
}
 }

 function hotDog(image) {

main.innerHTML = `<img src =${image[0]}>`
  image.style.height = '15v';

 }