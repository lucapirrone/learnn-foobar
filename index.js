// For each number from 1 to 100
for (let i = 1; i <= 100; i++) {
    // If it is multiple of 3 and 5 print FooBar
    if (i%3 === 0 && i%5 === 0) console.log("FooBar");
    // If it is multiple of 3 print Foo
    else if (i%3 === 0) console.log("Foo");
    // If it is multiple of 5 print Bar
    else if (i%5 === 0) console.log("Bar");
    // Else print number
    else console.log(i);
}
