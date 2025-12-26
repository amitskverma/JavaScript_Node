let inputs = [];

console.log("Enter your Name");

process.stdin.on("data", (data) => {
    inputs.push(data.toString().trim());
    if (inputs.length === 3) {
        const [name, age, counrty] = inputs;
        console.log("Your Name is ", name);
        console.log("Your age is", age);
        console.log("your country", counrty);
        process.exit();
    } else if (inputs.length === 1) {
        console.log("Enter age");
    } else if (inputs.length === 2) {
        console.log("Enter country");
    }
})  