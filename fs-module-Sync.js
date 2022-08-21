const {readFileSync, writeFileSync} = require('fs'); //SIMILAR TO 'CONST FS = REQUIRE('fs)'


//USED TO READ THE FILES
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first + '\n' + second)


//Creating a new file
writeFileSync(
    './content/propertyuse.txt', 'here is the result of the both files\n' + first + '\n' + second,
    {flag : 'a'}
)

