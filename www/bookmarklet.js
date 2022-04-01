javascript: (() => {
    let delay = ms => new Promise(res => setTimeout(res, ms)); let button = document.querySelectorAll('button')[2];
    button.addEventListener('click', async (event) => {
        let done = await delay(5000);
        let key = document.querySelectorAll('input')[0].value;
        let secret = document.querySelectorAll('input')[1].value;
        var credentials = btoa(key + ':' + secret);
        // let credentials = new Buffer.from(key + ':' + secret).toString('base64');
        fetch('https://session.voxeet.com/v1/oauth2/token', { 
            method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': 'Basic ' + credentials }, body: JSON.stringify({ grant_type: 'client_credentials', expires_in: 3600 }) }).then(response => response.json()).then(data => { console.log('Success:', data, data['access_token']); alert(data['access_token']); }).catch((error) => { console.error('Error:', error); alert('Error:', error); });
    });
    button.click();
})();

const key = document.querySelectorAll('input')[0].value;
const secret = document.querySelectorAll('input')[1].value;
alert(key);
alert(secret);

