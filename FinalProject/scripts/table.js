
async function generateTable() {  
    try {  
        const response = await fetch('https://men21049.github.io/wdd230/FinalProject/data/pricing.json');  
        const data = await response.json();  
        let table = '<table>';  
        table += '<tr><th>Rental Type</th><th>Max Person</th><th>Reservation Half Day</th><th>Reservation Full Day</th><th>Walk in Half Day</th><th>Walk in Full Day</th></tr>';  
        console.log(data.rentals);

        data.rentals.forEach(item => {  
            table += `<tr><td>${item.rental_type}</td><td>${item.max_person}</td><td>${item.reservation_half_day}</td><td>${item.reservation_half_day}</td><td>${item.walk_in_half_day}</td><td>${item.walk_in_full_day}</td></tr>`;  
        });  

        table += '</table>';  
        const tableContainer = document.getElementById('table-container');  
        tableContainer.innerHTML = table;
    } 
    catch (error) {  
        console.error(error);  
    }  
}  
      
generateTable();  