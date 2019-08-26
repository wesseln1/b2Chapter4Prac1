for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    // Divide the current number by 2, and check if the remainder is 0
    if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
        console.log("ChickenMonkey") // ChickenMonkey will appear every number divisable by 5 and 7
    } else if (currentNumber % 5 === 0) {
        console.log("Chicken") // Chicken will appear every 5th 
    } else if (currentNumber % 7 === 0) {
        console.log("Monkey") // Monkey will appear on every 7th
    } else {
        console.log(currentNumber);
    }
}