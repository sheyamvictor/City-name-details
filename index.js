const button = document.querySelector('button')

let resultdiv=document.createElement('div')
resultdiv.id='res'
document.getElementById('main').appendChild(resultdiv)

button.addEventListener('click', displayStats)
function displayStats() {

    const inbox = document.getElementById("inbox")

    const city = inbox.options[inbox.selectedIndex].value

    let population = 0, literacyRate = 0, language = ''
    switch (city) {
        case 'SELECT':
            alert("Select the city") 
          break 

        case 'Banglore':
            population = 8443675
            literacyRate = 88.71
            language = 'Kannada'
            break
        case 'Chennai':
            population = 4646732
            literacyRate = 90.20
            language = 'Tamil'
            break
        case 'Mumbai':
            population = 12442373
            literacyRate = 89.73
            language = 'Marathi'
            break
        case 'Delhi':
            population = 16787941
            literacyRate = 86.20
            language = 'Hindi'
            break

        
    }

    let text = `The indian city of ${city} has a population is ${population} they speakes ${language} and literacy rate is ${literacyRate}`
   
    


document.getElementById('res').innerHTML =text

}





