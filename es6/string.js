
let text = "hello1 hello2 hello3";
let parttern = /hello\d\s?/;
let result = parttern.exec(text); 
    console.log(parttern.lastIndex)  //此时parttern.lastIndex为0；
    parttern.lastIndex = 1; //修改lastIndex为1，parttern会忽略；
    result = parttern.exec(text); 
    console.log(parttern.lastIndex) //为0
    console.log(result[0]) //parttern会忽略，所以返回还是"hello1 "

let globalPattern = /hello\d\s?/g;
let globalResult = globalPattern.exec(text); 
    console.log(globalPattern.lastIndex) //此时globalPattern的lastIndex为7；
    globalPattern.lastIndex = 1;  //修改lastIndex为1，globalPattern不会忽略，而是更改为1；
    globalResult = globalPattern.exec(text); //从字母e开始匹配，往后找到"hello2 "匹配成功
    console.log(globalPattern.lastIndex) //此时为14；
    console.log(globalResult[0]) //"hello2 "

let stickyPattern = /hello\d\s?/y;
let stickyResult = stickyPattern.exec(text);
    console.log(stickyPattern.lastIndex) //此时stickyPattern的lastIndex为7；
    stickyPattern.lastIndex = 1; //修改lastIndex为1，stickyPattern不会忽略，而是更改为1；
    stickyResult = stickyPattern.exec(text) //从字母e开始匹配，没有匹配到，返回null,如果上一步lastIndex不做修改，则此时lastIndex为14；
    console.log(stickyPattern.lastIndex); //此时为0
    console.log(stickyResult) //为null
    