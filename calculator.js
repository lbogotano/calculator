var user = 'paper';
var computer = Math.random();
if (computer<0.34){
    computer = "rock";
}else if(computer <=0.67){
    computer = "paper";
}
else{
    computer = "scissors";
}
var compare = function(option1,option2){
    if(option1===option2){
        return "The result is a tie!";
    }
    if(option1==="rock"){
        if(option2==="scissors"){
            return "rock wins";
        }
        else{
            return "paper wins";
        }
    }
    if(option1==="paper"){
        if(option2==="rock"){
            return "paper wins";
        }
        else{
            return "scissors wins";
        }
    }
    if(option1==="scissors"){
        if(option2==="rock"){
            return "rock wins";
        }
        else{
            return "scissors wins";
        }
    }
};
compare(user,computer);