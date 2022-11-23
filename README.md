# NodeJS_Training_1
Exercise 1 - write, read file with/without stream.
launch "node writeFile" or "node writeFileWithStream"

writeFile : simple asynchronous fs.writeFile() and fs.readFile() training with callback and timer.
(for memorize : fs.copyFile())

writeFileWithStream : asynchronous write file with stream for manage 
>512Mo request  (time execution : longer *3), fs.createWriteStream() 

Exercise 2 - detect file change with fs.watch()

Exercise 3 - 2 asynchronous operations with one stream. 
Using callback and event for manage this 2 asynchronous.
Using fs.stat() for (time) measure of progress in %, fs.createReadStream().