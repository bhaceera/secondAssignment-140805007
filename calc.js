var look ="";

function show(x){
	look += x;
  	document.getElementById("display").value+=x;
}

function cos(input){
	input.value =  Math.cos(display.value);
}

function sin(input){
	input.value =  Math.sin(display.value);
}

function tan(input){
	input.value =  Math.tan(display.value);
}

function log(input){
	input.value =  Math.log(display.value);
}

function sqr(input){
	input.value *= (display.value);
}



function addition(input,char){
	if (input.value== null|| input.value=="0") {
		input.value = char;
	}
	else{
		input.value+= char;
	}
}

function pi(){
	display.value += 3.1415926535897932384626433832795;
}
	

function sub(){
	look+="-";
	document.getElementById("display").value += "-";
}

function mult(input,char){
		input.value+= char;
}
function div(input,char){
	input.value+= char;
}

function sqrt(input){
	input.value =  Math.sqrt(display.value);
}
function backspace(input){
 	input.value = input.value.substring(0, input.value.length-1);
}
	

 infixtopostfix =function(expression){
    var infixStack = new Array();
    var pfixString = "";
    var precedence = function(operator){
   switch(operator){
       case "^":
           return 3;
       case "+":
       case "-":
            return 1;
       case "*":
       case "/":
            return 2;
      default:
            return 0;
      }
   } 
   for (var i=0; i<expression.length; i++){
     var c = expression.charAt(i);
   if(!isNaN(parseInt(c))){
         pfixString += c;
        if (i+1 >= expression.length || (isNaN(parseInt(expression.charAt(i+1))) && c !=="." )){
                   pfixString += " ";
              }
        } else if(c==="+"||c==="-"||c==="*"||c==="/"||c==="^"){
            while(c!= "^" && infixStack.length !== 0 && (precedence(c) <= precedence(infixStack[infixStack.length -1]))){
                   pfixString += infixStack.pop();
                   pfixString +=" ";
              }
           infixStack.push(c);
         } 
        
    }
        
   while(infixStack.length !== 0){
         pfixString +=infixStack.pop();
         pfixString +=" ";
   } this. getPostfix = function(){
    return pfixString;
   }
 }

 function equals(expression){
      var postfix = expression.split(" ");
      var postfixStack = new Array();
      var result;
      var firstNum;
      var secNum;
    for (var i = 0; i < postfix.length; i++) {
        if ((postfix[i] != "^") && (postfix[i] != "+") && (postfix[i] != "-") && (postfix[i] != "*") && (postfix[i] != "/") && (postfix[i] !== "") ) {
            postfixStack.push(postfix[i]);
        }else if(postfix[i] === "^" || postfix[i] === "+" || postfix[i] === "-"|| postfix[i] === "*"|| postfix[i] === "/" || postfix === "cos") {
          
          if (postfix[i] === '+') {
                firstNum = postfixStack.pop();
                secNum = postfixStack.pop();
                result = parseFloat(secNum) + parseFloat (firstNum);
                postfixStack .push(result);
            }
            else if (postfix[i] === '*') {
                firstNum = postfixStack.pop();
                secNum = postfixStack
                result = (secNum) * (firstNum);
                postfixStack.push(result);
            }
            else if (postfix[i] === '/') {
                firstNum = postfixStack.pop();
                secNum = postfixStack.pop();
                result = ((secNum) / (firstNum));
                postfixStack .push(result);
        }

            else if (postfix[i] === '-') {
                firstNum = postfixStack.pop();
                secNum = postfixStack.pop();
                result = (secNum) - (firstNum);
                postfixStack.push(result);
            }
            else if (postfix[i] === '^') {
                firstNum = postfixStack.pop();
                secNum = postfixStack.pop();
                result = Math.pow((secNum),(firstNum));
                postfixStack.push(result);
            }
      } 
    
  }

   var finalRes = postfixStack.pop();
  return finalRes;

}	



























