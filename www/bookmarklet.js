javascript: (() => {
    let delay = ms => new Promise(res => setTimeout(res, ms)); let button = document.querySelectorAll('button')[2];
    button.addEventListener('click', async (event) => {
        let done = await delay(3000);
        let key = document.querySelectorAll('input')[0].value;
        let secret = document.querySelectorAll('input')[1].value;
        var credentials = btoa(key + ':' + secret);
        let expiry = (3600 * 24 * 2);
        fetch('https://session.voxeet.com/v1/oauth2/token', {
            method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': 'Basic ' + credentials }, body: JSON.stringify({ grant_type: 'client_credentials', expires_in: expiry })
        }).then(response => response.json()).then(data => {
            console.log('Success:', data, data['access_token']);
            navigator.clipboard.writeText(data['access_token']).then(() => { console.log("Text copied to clipboard..."); alert(`${ data['access_token'] } was written to the clipboard`);}).catch(err => { console.log('Something went wrong', err);})
        }).catch((error) => { console.error('Error:', error); alert('Error:', error); });
    });
    button.click();
})();