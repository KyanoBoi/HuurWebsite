// Fetch the JSON data
fetch('../data/data.json')
    .then(response => response.json())
    .then(data => {
        // Access the second house object
        const house = data.houses[1];

        // Create HTML elements to display the house information
        const houseDiv = document.createElement('div');
        const idHeading = document.createElement('h2');
        const sizeParagraph = document.createElement('p');
        const priceParagraph = document.createElement('p');
        const monthlyPriceParagraph = document.createElement('p');
        const waterParagraph = document.createElement('p');
        const energyParagraph = document.createElement('p');
        const poolParagraph = document.createElement('p');
        const poolSizeParagraph = document.createElement('p');
        const maxPeopleParagraph = document.createElement('p');
        const detailsParagraph = document.createElement('p');
        const imageContainer = document.createElement('div');

        // Set the content of the HTML elements
        idHeading.textContent = '' + house.name;
        sizeParagraph.textContent = 'Size: ' + house.size;
        priceParagraph.textContent = 'Wekelijkse Prijs: ' + house.weeklyPrice;
        monthlyPriceParagraph.textContent = 'Maandelijkse Prijs: ' + house.monthlyPrice;
        poolParagraph.textContent = 'Zwembad: ' + house.pool;
        maxPeopleParagraph.textContent = 'Max Aantal Personen: ' + house.maxOccupancy;
        detailsParagraph.textContent = 'Details: ' + house.otherDetails;


        // Append the HTML elements to the houseDiv
        houseDiv.appendChild(priceParagraph);
        houseDiv.appendChild(monthlyPriceParagraph);
        houseDiv.appendChild(poolParagraph);
        houseDiv.appendChild(poolSizeParagraph);
        houseDiv.appendChild(maxPeopleParagraph);
        houseDiv.appendChild(detailsParagraph);

        // Append the houseDiv to the specified div with id "houseData"
        const targetDiv = document.getElementById('houseData');
        targetDiv.appendChild(houseDiv);
    })
    .catch(error => console.error('Error:', error));