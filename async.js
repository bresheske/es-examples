let promise = new Promise((resolve, reject) => {
    resolve(true);
});

(async () => {
    let result = await promise;
    console.log(result);
})();