// const fetchBtn = document.getElementById('fetchData');

window.onload = (response) => {
    fetch('https://api.covid19api.com/summary')
    .then(response => response.json())
    .then(data => {
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
        );
    // console.log('This Button works!');
};