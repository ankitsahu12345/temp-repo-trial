const {readFile, writeFile} = require('fs')

// readFile('./content/first.txt','utf8',(err, result) => {
//     if(err) {
//         console.log("Error = " + err + "\n")
//         return
//     }

//     console.log('result = ' + result + '\n')
// })


readFile('./content/first.txt','utf8',(err, result) => {
    if(err) {
        console.log("Error = " + err + "\n")
        return
    }

    const first = result //it will return the string present inside the first file

    readFile('./content/second.txt','utf8',(err, result) => {
        if(err) {
            console.log("Error = " + err + "\n")
            return
        }
    
        const second = result //it will return the string present inside the second file

        writeFile(
            './content/result-async.txt', //it will create a file named as result-async.txt and store the given data
            'Here is the result of the two files\n' + first + '\n' + second + '\n'
        , (err, result) => {
            if(err) {
                console.log(err)
                return
            }
            console.log(result)
        })
        
    })
})