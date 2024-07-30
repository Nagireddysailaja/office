function luck(name) {
    console.log(`Hey, ${name}!`);
}

luck("anusha");


// Asynchronous with callback
function fetchData(callback) {
    setTimeout(() => {
        const data = { name: "anusha", age: 25 };
        callback(data);
    }, 2000);
}

fetchData((data) => {
    console.log("Received:", data);
});