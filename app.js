// **************************Q:1******************************


var ciytName = prompt("Enter the city name");

if( ciytName === 'karachi'){
    console.log("Welocome to Karachi")

}

// **************************Q:2******************************

var Gander = prompt("Enter Your Gander ");
if(Gander === 'male'){
    alert("Good Morning Sir...")
}
else if(Gander === "female"){
    alert("Good Morning Ma'am...")

}
else{
    alert("Please Enter Your Gander")
}


// **************************Q:3******************************

var trafficSignal = prompt('Eneter the traffic Signal light color ')

if(trafficSignal === 'red'){
    alert("Must Stop")
}

if(trafficSignal === 'yellow'){
    alert("Ready to move")
}

if(trafficSignal === 'green'){
    alert(" Move now")
}

// **************************Q:4******************************

// a.

var a =   prompt("Enter the  firstNumber")

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}


// b.

var b =   prompt("Enter the SecondNumber")
 

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

// C.




var c =   prompt("Enter the Third01Number")


var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
var c =   prompt("Enter the Third02Number")


if (c === 13){
    alert("condition 2 is true");
    }

    var c =   prompt("Enter the Third03Number")

    if (++c < 14){
        alert("condition 3 is true");
        }

var c =   prompt("Enter the Third04Number")

        if(c === 14){
            alert("condition 4 is true");
            }    



//  D.

var materialCost = +prompt('Enter the Material Cost ');

var laborCost = +prompt('Enter the Labor Cost ');
var totalCost = materialCost + laborCost;

if (totalCost === 20000){
alert("The cost equals");
}


// E.


 if (true){
alert("True");
}

if (false){
alert("False");
}

// F.


if("car" < "cat"){
alert("car is smaller than cat");
}


// **************************Q:6******************************



var sub1 =+prompt('Enter First Subject Number');
var sub2 =+prompt('Enter Second Subject Number');
var sub3 =+prompt('Enter Third Subject Number');

var totalMarks = +prompt("Enter The Total Marks");

var obtMarks = sub1 + sub2 + sub3;

var percnatage = obtMarks/totalMarks*100;

if (percnatage  >= 80 && percnatage  <=100){
    document.write("Total Marks:"+totalMarks+"<br>"+"Marks Obtain:"+obtMarks+"<br>"+"Percentage:"+percnatage+"%"+ "<br>"+ "Grade:A-one"+"<br>"+"Remarks:Ecellennt")
}

else if (percnatage  >= 70 && percnatage  <=80){
    document.write("Total Marks:"+totalMarks+"<br>"+"Marks Obtain:"+obtMarks+"<br>"+"Percentage:"+percnatage+ "%"+ "<br>"+ "Grade:A"+"<br>"+"Remarks:Good")
}



else if (percnatage   >= 60 && percnatage  <=70){
    document.write("Total Marks:"+totalMarks+"<br>"+"Marks Obtain:"+obtMarks+"<br>"+"Percentage:"+percnatage+ "%"+  "<br>"+ "Grade:B"+"<br>"+"Remarks:You Need To Improve")
}


if (percnatage   <60){
    document.write("Total Marks:"+totalMarks+"<br>"+"Marks Obtain:"+obtMarks+"<br>"+"Percentage:"+percnatage+ "%"+ "<br>"+ "Grade:Fail"+"<br>"+"Remarks:Sorry")
}







// **************************Q:7******************************


var sectertNum = prompt("To guess the secret number. ");




if (sectertNum  >0 && sectertNum  < 11  ) {
    alert("Bingo! Correct answer")
}




if (sectertNum >= 11){
    alert("Close enough to the correct answer")
}


// **************************Q:8******************************

var evenorodd = prompt("Enetr the Number");

var res =  evenorodd % 2

if(res===0){
    alert("This Number Is Even")
}

else{
    alert("This Number Is Odd")
}



// **************************Q:9******************************


var temp = prompt("Enter the  temperature")

if(temp  >40 ){
    alert("It is too hot outside")
}

if(temp  >30 && temp  <=40 ){
    alert("The Weather today is Normal")
}


if(temp  >20 && temp  <=30 ){
    alert("Today’s Weather is cool.")
}

if(temp  >10 && temp  <=20 ){
    alert(" OMG! Today’s weather is so Cool.")
}

// **************************Q:10******************************

var FistNumber = +prompt("Insert The First Number")

var operator = prompt("Insert The Operator")

var secndNumber = +prompt("Insert The Second Number")




if(operator === "+" ){
    alert( FistNumber + secndNumber )

}

if(operator === "-" ){
    alert(FistNumber - secndNumber)

}



if(operator === "*" ){
    alert(FistNumber * secndNumber)

}


if(operator === "/" ){
    alert(FistNumber / secndNumber)

}




if(operator === "%" ){
    alert(FistNumber % secndNumber)

}


















