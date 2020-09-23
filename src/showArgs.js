let reverse = process.argv.reverse()
//console.log(reverse)

const showArgs = () => {
    for (let i=0; i <= reverse.length - 3; i += 1){
        console.log(reverse[i])
    }
}

showArgs()

