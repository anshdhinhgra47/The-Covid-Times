const inputVal = document.getElementById('country');
const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', (e) => {
    console.log(inputVal.value);
    fetch(`https://api.covid19api.com/total/country/${inputVal.value}/status/confirmed`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    }
        /* {
        let output = '<h2>Covid Stats</h2>';
        output += '<ul>';
        output += `
            <li>Total Confirmed: ${data.Global.TotalConfirmed}</li>
            <li>Total Recovered: ${data.Global.TotalRecovered}</li>
        `;
        output += '</ul>';
        document.getElementById('response').innerHTML = output;
        // console.log(data.Global.TotalConfirmed);
        console.log(data.Global);
    }
    */
        );
    e.preventDefault();
    inputVal.value = '';
});