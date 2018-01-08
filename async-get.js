const https = require("https");
let promise = new Promise((resolve, reject) => {
    const url = "https://maps.googleapis.com/maps/api/geocode/json?address=Madison";
    https.get(url, res => {
        res.setEncoding("utf8");
        let body = "";
        res.on("data", data => {
            body += data;
        });
        res.on("end", () => {
            body = JSON.parse(body);
            resolve({
                city: body.results[0].formatted_address,
                lat: body.results[0].geometry.location.lat,
                long: body.results[0].geometry.location.lng
            });
        });
    });
});

(async () => {
    let location = await promise;
    console.dir(location);
})();