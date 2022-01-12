# Node.js ile Web Sunucusu Ayağa Kaldırma


[Kaynak kodlara buradan ulaşabilirsiniz.](./nodejs-web-server.js)

---
En başta *http* modülünü yüklüyoruz.

```
const http = require('http');
```

Ardından *port* tanımlaması yapıyoruz.

```
const port = 3000;
```
Sunucu konfigürasyonunu yapıyoruz. Bunun için ilk önce *createServer* ile sunucumuzu oluşturup *request* ve *response* larımızı isimlendiriyoruz. Ardından herhangi bir istek geldiğinde *console* kısmına *log* girilmesini istiyoruz.

İstek gönderildiğinde *client* tarafında görünebilmesi amacıyla bir başlık yazdırıyoruz.

Son olarak *response'un* tamamlandığını belirterek konfigürasyonumuzu tamamlıyoruz.

```
const server = http.createServer((req, res) => {
    console.log("Request sent.");
    res.write("<h1>Welcome to the server</h1>");
    res.end();
});
```
Sunucumuzu belirttiğimiz *porttan* dinlemeye başlıyoruz.
```
server.listen(port, () => { 
    console.log(`Server running on port ${port}`);
});
```