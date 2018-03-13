var config=require('./config.json');
    //import styles from './Greeter.css';
module.exports=function(){
    var greeter=document.createElement('div');
    //greeter.className=styles.root;
    greeter.textContent=config.greetText;
    return greeter;
}