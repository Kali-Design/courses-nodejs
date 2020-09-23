const showStars = (n) => {
    for (let i = n; i <= n; i -= 1) {
        console.log('*'.repeat(i))
    }
}

if (process.argv.length != 3) {
    console.log(`Error: Put only 1 number`)
    process.exit(1)
}

console.log(process.argv[2])

console.log(showStars(process.argv[2]))