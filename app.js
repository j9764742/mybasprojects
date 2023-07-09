const readline=require('readline');


//using repl concepts read line
//lecture 4 concepts
/*
************************************************************
rl.question("Please enter your name ",()=>{
    console.log("You enetered"+ name);
    rl.close();
});
rl.on('close',()=>{
    console.log("Interface closed");
    process.exit(0);
})
***********************************************************************
*/

//Lecture 5 concepts reading and writing to a file using synchronous method

/***************************************************************** 
const fs=require('fs');
let line=fs.readileSync('./files/input.txt','utf8');
console.log(line);

let content='Data read from input.txt: '+line+'.\nDate created '+new Date()

fs.writeFileSync('./files/output.txt',content);

*/

//Lecture 7 Concepts of asynchronous methods file reading 
const fs=require('fs');

fs.readFile('./files/start.txt','utf-8',(error,data1)=>{

    console.log(data1);
    fs.readFile(`./files/${data1}.txt`,'utf-8',(error1,data2)=>{
    console.log(data2);
    fs.readFile('./files/append.txt','utf-8',(error2,data3)=>{{
        console.log(data3);
        fs.writeFile('./files/output.txt',`${data2}\n\n${data3}\n\nDate created ${new Date()}`,()=>{
            console.log('File written successfully');
        });
    }});
})

});
console.log("Reading file ");

