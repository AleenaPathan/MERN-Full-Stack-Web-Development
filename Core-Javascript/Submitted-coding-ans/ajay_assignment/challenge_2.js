// Print the odd numbers less than 100

for (i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}