//Chp 01
//Task 1
window.alert('Hey New Customer!"Happy Shopping"');
//Task 2
window.alert('Error! Please enter a valid password');
//Task 3
alert('Welcome to JS Land...\nHappy Coding!');  
//Task 4
window.alert('Welcome to JS Land...');
window.alert('Happy Coding');
//Task 5
//Right click then click on console and write 'alert("Hello...I can run JS through my web browser's control")' then enter
//Task 6
//Check file Alert6.html which is available in my git repository
//Task 7(a)
//Check file Alert7(1).html which is available in my git repository
//Task 7(b)
//Check file Alert7(2).html which is available in my git repository
//Task 7(c)
//Check file Alert7(3).html which is available in my git repository
//Task 7(d)
//Check file Alert7(4).html which is available in my git repository

//Chp 02
//Task 1
var username = "Hunaiza";
document.write(username);
//Task 2
var myName;
myName = "Hunaiza M.Riaz";
document.write(myName);
//Task 3
var message;
message = "Hello World";
alert(message);
//Task 4
var name = "Johne Doe";
alert(name);
var age = "15 years old";
alert(age);
var Field = "Certified Mobile Application Development";
alert(Field);
//Task 5

//Task 6
var email = "hunaizamriaz@gmail.com";
alert("My email address is" + " " + email);
//Task 7
var book = "A smarter way to learn Javascript";
alert("I am trying to learn from the Book" + " " + book);
// Task 8
document.getElementById("heading").innerHTML= "Yeah i can write Html content through JS";
// Task 9
var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(design);


//Chp 03
//Task 1
var age = "19";
alert("My age is" + " " + age);
//Task 2
//Task 3
var birthYear = "2001";
document.write(birthYear);
//Task 4
var name = "John Doe";
var product = "5 T-shirt(s)";
var store = "on XYZ Clothing store";
document.write(name + " " + product + " " + store);


//Chp 04 
//Task 1
var click,myname,mobile;
//Task 2
//Legal
var hunaiza;
var androidMobile;
var mobile1;
var mobile2;
var _hunaiza;
//Illegal
var 0name;
var 9Hunaiza;
var %_Laptop;
var 12Name;
var &age;
//Task 3
//Check file Third.html which is available in my git repository


//Chp 05
//Task 1
var x = 3;
var y = 5;
var z= x + y;
document.write("Sum is:" + z);
//Task 2
var x = 3;
var y = 5;
var z= x - y;
document.write("Ans is:" + z);
document.write("<br>");
var x = 3;
var y = 5;
var z= x * y;
document.write("Ans is:" + z);
document.write("<br>");
var x = 3;
var y = 5;
var z= x / y;
document.write("Ans is:" + z);
document.write("<br>");
var x = 3;
var y = 5;
var z= x % y;
document.write("Ans is:" + z);
//Task 3
var value = "Value after variable declaration is: ??";
document.write(value);
document.write("<br>");
var number = 5 ;
document.write("Initial value:" + number);
document.write("<br>");
number++;
document.write("Value after increment is:" + number);
document.write("<br>");
var z = number + 7;
document.write("Value after Addition is:" + z)
document.write("<br>");
z--;
document.write("Value after decrement is:" + z);
document.write("<br>");
var a = z%3;
document.write("The remainder is:" + a);
document.write("<br>");
//Task 4
var ticket = 600;
var totalCost = 600 * 5;
document.write("Total cost to buy 5 tickets to a movie is" + " " + totalCost + "PKR");
//Task 5
var i;
for(i=1; i<=10; i++){
document.write(i*2);
document.write("<br>");
}
//Task 6
function convert(degree) {
    var x;
    if (degree == "C") {
      x = document.getElementById("c").value * 9 / 5 + 32;
      document.getElementById("f").value = Math.round(x);
    } else {
      x = (document.getElementById("f").value -32) * 5 / 9;
      document.getElementById("c").value = Math.round(x);
    }
  }
//Task 7
    var x=650;
    document.write("Price of item 1:" + x);
    document.write("<br>");
    var y=3;
    document.write("Quantity of item 1:" + y);
    document.write("<br>");
    var z=100;
    document.write("Price of item 2:" + z);
    document.write("<br>");
    var a=7;
    document.write("Quantity of item 2:" + a);
    document.write("<br>");
    var c = 100;
    document.write("Shipping Charges" + c);
    document.write("<br>");
    var b = x*3 + 100*7 + c;
    document.write("Total Cost of your order is:" + b);
    document.write("<br>");
//Task 8
    var number = 1000;
    document.write("Total marks:" + number);
    document.write("<br>");
    var obtained = 780;
    document.write("Obtained marks:" + obtained);
    document.write("<br>");
    var percentage = obtained/number *100;
    document.write(percentage + "%");
//Task 9
    var dollars = 10 * 104.80;
    var riyals = 25 * 28;
    var total = dollars + riyals;
    document.write("Total Currency in PKR:" + " " + total);
//Task 10
    var number = 5;
    document.write("Number is:" + number);
    document.write("<br>"); 
    var number1 = number + 5;
    var multiply = number1 * 10;
    var divide = multiply / 2;
    document.write("By adding:" + number1 + " " + "By multiplying:" + multiply + " " + "With division:" + divide);
//Task 11
 var year = 2020;
 var birth = 2001;
 var result = year-birth;
 document.write("Age is:" + result);
//Task 12
var radius = 30;
document.write("Radius of a circle is:" + radius);
document.write("<br>");
var circum = 2 * 3.142 * radius;
document.write("The circumference is:" + circum);
document.write("<br>");
var area = 3.142 * Math.pow(radius, 2);
document.write("Area is:" + area);
//Task 13
var snack = "Maggie";
document.write("Favourite snack:" + snack);
document.write("<br>");
var age = 19;
document.write("Current age:" + age);
document.write("<br>");
var max = 70;
document.write("Estimated maximum age:" + max);
document.write("<br>");
var amount = 2;
document.write("Amount of snacks per day:" + amount);
document.write("<br>");
var total = (max - age) * amount;
document.write("You will need" + " " + total + " " + snack + " " + "to last you until ripe old age of" + " " + max);
//chp 06-09
//Task 01
    var num = 10;
    document.write("The value of a is:" + num);
    document.write("<br><br>..................................");
    var increment = ++num;
    document.write("<br><br>The value of ++a is:" + increment);
    document.write("<br>Now the value of a is:" +increment);
    var increment1 = num++;
    document.write("<br><br><br>The value of a++ is:" + increment1);
    var a = num;
    document.write("<br>Now the value of a is:" +a);
    var decrement = --num;
    document.write("<br><br><br>The value of --a is:" + decrement);
    document.write("<br>Now the value of a is:" +decrement);
    var decrement1 = num--;
    document.write("<br><br><br>The value of a-- is:" + decrement1);
    var b = num;
    document.write("<br>Now the value of a is:" +b);
//Task 02
  var a=2,b=1;
  document.write("Value of a:" +a);
  document.write("<br>");
  document.write("Value of b:" +b);
  document.write("<br>");
  var result = --a - --b + ++b + b--;
  document.write("Result:" +result);
//Task 03
   var name = window. prompt("Enter your name: "); 
   document.write("Welcome" + " " + name  + " " + "Happy Shopping");
//Task 04
var table = prompt('Write a NUMBER that table you want:')
table = Number(table)

        
if(isNaN(table)){
    table = 5 
  for (let i = 1; i <11 ; i++) {
       document.write(table+"x"+i+": "+(table*i)+"<br>")
        
    } 

} else {
  for (let i = 1; i <11 ; i++) {
       document.write(table+"x"+i+": "+(table*i)+"<br>")
        
    } 
}

//Task 5
var s1 = prompt('Write name of 1st subject')
  var s2 = prompt('Write name of 2nd subject')
  var s3 = prompt('Write name of 3rd subject')
  var TMarks = 100
  var AllTmarks = TMarks*3
  var s1Marks = Number(prompt(`Write marks obtained in ${s1}`))
  var s2Marks = Number(prompt(`Write marks obtained in ${s2}`))
  var s3Marks = Number(prompt(`Write marks obtained in ${s3}`))
  var TobtMarks = s1Marks+s2Marks+s3Marks
  var s1Perc = (s1Marks/TMarks)*100
  var s2Perc = (s2Marks/TMarks)*100
  var s3Perc = (s3Marks/TMarks)*100

  document.write(`<table><tr>
    <th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th>
  </tr>
  <tr>
    <td>${s1}</td><td>${TMarks}</td><td>${s1Marks}</td><td>${s1Perc}%</td>
  </tr>
  <tr>
    <td>${s2}</td><td>${TMarks}</td><td>${s2Marks}</td><td>${s2Perc}%</td>
  </tr>
  <tr>
    <td>${s3}</td><td>${TMarks}</td><td>${s3Marks}</td><td>${s3Perc}%</td>
  </tr>
  <tr>
    <th></th><th>${AllTmarks}</th><th>${TobtMarks}</th><th>${(TobtMarks/AllTmarks)*100}%</th>
  </tr>
  </table>`)


//Chp 09-11
//Task 01
//Before script tag put <p id="demo"></p>
  var city = prompt("Enter any city name of Pakistan?")
  var name;
  if (city == "Karachi") {
    name = "Welcome to the City of lights";
  } else if (city == "Islamabad"){
    name = "Capital of Pakistan";
  }
  else if (city == "Lahore"){
    name = "Welcome to the City of Gardens";
  }
  else if (city == "Faislabad"){
    name = "Welcome to the Biggest textile city of Pakistan";
  }
  else if (city == "Rawalpindi"){
    name = "Welcome to the Good hotels city of Pakistan";
  }
  else if (city == "Peshawar"){
    name = "Welcome to the Tasty Food city of Pakistan";
  }
  else if (city == "Multan"){
    name = "Welcome to the best crops are growing city of Pakistan";
  }
  else if (city == "Quetta"){
    name = "Welcome to the Fruit Basket of Pakistan";
  }
  document.getElementById("demo").innerHTML = name;
//Task 02
//Before script tag put <p id="demo"></p>
  var gender = prompt("Enter Your gender?")
  var show;
  if (gender == "Male") {
    show = "Good Morning Sir";
  } 
  else if (gender == "male"){
    show = "Good Morning Sir";
  }
  else if (gender == "Female"){
    show = "Good Morning Ma'am";
  }
  else if (gender == "female"){
    show = "Good Morning Ma'am";
  }
  document.getElementById("demo").innerHTML = show;
//Task 03
var signal = prompt("Enter signal color:");
var show;
if (signal == "red"){
  show = "Must stop";
}
else if (signal == "Red") {
  show = "Must stop";
}
else if (signal == "yellow"){
  show = "Ready to move";
}
else if (signal == "green") {
  show = "Move now";
}
else if (signal == "Yellow"){
  show = "Ready to move";
}
else if (signal == "Green") {
  show = "Move now";
}
document.write(show);
//Task 04
//Before script tag put <p id="demo"></p>
var fuel = prompt("Enter your remaining fuel?")
  var show;
  if (fuel > 0.25) {
    show = "Please refill the fuel in your car";
  } 
  else {
    show = "No need to refill the fuel";
  }
  document.getElementById("demo").innerHTML = show;
//Task 05
//a. Yes alert displayed
//b. Not displaying
//c. Yes displaying
//d. Yes displaying
//e. Yes displaying
//e. Yes displaying
//Task 06
var subject = Number(prompt("Enter Marks of Eng name:"));
var subject1 = Number(prompt("Enter Marks of Maths name:"));
var subject2 = Number(prompt("Enter Marks of Computer name:"));
var result = subject + subject1 + subject2;
document.write("Total Marks:300<br>");
document.write("Marks Obtained:" + result);
document.write("<br>");
var percentage = (result/300) *100;
document.write("Percentage:" + percentage + "%");
document.write("<br>");
  var show,remarks;
  if (percentage < 60) {
    show = "Fail"  ;
    remarks = "Sorry";
  } 
  else if (percentage >= 60){
    show = "B";
    remarks = "You need to improve";
  }
  else if (percentage >= 70){
    show = "B";
    remarks = "Good";
  }
  else if (percentage >= 80){
    show = "B";
    remarks = "Excellent";
  }
  document.write("Grade:" +show);
  document.write("<br>");
  document.write("Remarks:" + remarks);
//Task 07
var number = 4;
var guess = prompt("Guess the number from range 1-10?");
var show;
  if (guess == number) {
    show = "Bingo!Correct answer."
  } 
  else if (guess == number+1 || guess == number-1){
    show = "Very close";
  }
  else if (number != guess){
    show = "Wrong answer";
  }
  document.write(show);
//Task 08
var i =prompt("Enter Number:");;
if (i % 3 == 0) {
 alert("divisible by 3");
} else {
    alert("divisible not by 3");
} 
//Task 09
var i =prompt("Enter Number:");;
if (i % 2 == 0) {
 alert("No is even");
} else {
    alert("No is odd");
} 
//Task 10
var temp = prompt("Enter Temperature:");
var show;
if (temp >40){
  show = "It is too hot outside."
}
else if (temp >30){
  show = "The Weather today is Normal.”"
}
else if (temp >20){
  show = "Today's weather is cool."
}
else if (temp >10){
  show = "OMG! Today’s weather is so Cool.";
}
document.write(show);
//Task 11
var fno = Number(prompt("Enter Firstnumber:"));
var sno = Number(prompt("Enter Second number:"));
var operation = prompt("Enter Operation you want to perform?");
if ( operation == "+"){
  var result = fno + sno;
}
else if (operation == "-"){
  var result = fno - sno;
}
else if (operation == "*"){
  var result = fno * sno;
}
else if (operation == "/"){
  var result = fno / sno;
}
else if (operation == "%"){
  var result = fno % sno;
}
document.write(result);

//chp 12-13
//Task 01
//Task 02
var integer = prompt("Enter 1st integer?");
    var integer1 = prompt("Enter 2nd integer?");
    var result; 
    if (integer > integer1){
      result = "1st integer is bigger";
    }
    else if (integer <integer1){
      result = "2nd integer is bigger";
    }
    else {
      result = "Both are equal";
    }
    document.write(result);
//Task 03
var no = prompt("Enter Number?");
    var result; 
    if (no >0){
      result = "Number is positive";
    }
    else if (no <0){
      result = "Number is negative";
    }
    else {
      result = "Number is zero";
    }
    document.write(result);
//Task 04
var vowel = prompt("Enter one Alphabet:");
    var result; 
    if (vowel == "a" || vowel == "e" || vowel == "i" || vowel == "o" || vowel == "u" ){
      result = "True, This is vowel";
    }
    else if (vowel == "A" || vowel == "E" || vowel == "I" || vowel == "O" || vowel == "U" ){
      result = "True, This is vowel";
    }
    else {
      result = "False, Not a vowel";
    }
    document.write(result);
//Task 05
var password = "Hunaiza123";
    var user = prompt("Enter Your Password");
    if (user == password){
      var show =  "Correct! The password you entered matches the original password.";
    }
    else if (user == ""){
      var show = "Please enter your password.";
    }
    else {
      var show = "Incorrect Password.";
    }
    document.write(show);
//Task 06
var greeting; 
    var hour = 13; 
    if (hour < 18) { 
      greeting = "Good day";
    } else {
    greeting = "Good evening"; 
  } 
  document.write(greeting);
//Task 07
var time = prompt("Enter time in format e.g.1900 between 0000 to 2359:");
    if (time >= 0000 && time < 1200){
      var show = "Good Morning";
    }
    else if (time >= 1200 && time < 1700){
      var show = "Good Afternoon";
    }
    else if (time >= 1700 && time < 2100){
      var show = "Good Evening";
    }
    else if (time >= 2100 && time <= 2359){
      var show = "Good Night";
    }
    document.write(show);

//Chp 14-16
//Task 01
var students = [];
//Task 02
var students = {};
var students1 = new studentname ();
//Task 03
var x = new Array("H","A");
//Task 04
var x = new Array(1,2);
//Task 05
var x = [];
var no = 5;
for (var i = 0; i < no; i++){
  x.push(false);
}
//Task 06
var biodata = ["Hunaiza","Solanki",19];
//Task 07
var education = ["SSC" + "<br>" +"HSC" + "<br>" + "BCS" + "<br>" + "BS" + "<br>" + "BCOM" + "<br>" + "MS" + "<br>" + "M.Phil" + "<br>" + "PhD"];
    document.write(education);
//Task 08
var student = ["Hunaiza","Ahmed","Ayesha"];
    var score = [320,480,340];
    var marks = 500;
    var percentage = (score[0]/marks) * 100;
    var percentage1 = (score[1]/marks) * 100;
    var percentage2 = (score[2]/marks) * 100;
    document.write("Score of" + " "+student[0]+ " " + "is" + " " + score[0] + "." + "Percentage:" + " " + percentage);
    document.write("<br><br>Score of" + " "+student[1]+ " " + "is" + " " + score[1] + "." + "Percentage:" + " " + percentage1);
    document.write("<br><br>Score of" + " "+student[2]+ " " + "is" + " " + score[2] + "." + "Percentage:" + " " + percentage2);
//Task 09
var colr = ['white','blue','green']
        alert(colr)
        colr.unshift(prompt('Write a color to add in beginning'))
        alert(colr)
        colr.push(prompt('Write a color to add in end'))
        alert(colr)
        colr.unshift(prompt('Write a color to add in beginning'))
        alert(colr)
        colr.unshift(prompt('Again write a color to add in beginning'))
        alert(colr)
        colr.shift()
        alert("1st color deleted\n"+colr)
        colr.pop()
        alert("Last color deleted\n"+colr)
        var ind = prompt(`In which index you want to add lenght 0 - ${colr.length - 1}`)
        colr[ind] = prompt('Which color?')
        alert(colr)
        ind = Number(prompt(`In which index you want to delete lenght 0 - ${colr.length - 1}`))
        ind1= Number(prompt(`How many color you want to remove from desired index`))
        colr.splice(ind,ind1)
        alert(colr)

//Task 10
var Student = [380, 500, 311, 150, 250, 310];
    document.write("Score of Students:" +Student);

  Student.sort(function(a, b){return a - b});
  document.write("<br>Order Score of Students:"+Student);
//Task 11
document.write("CITIES:<br>");
    var Cities = ["Karachi" , "Lahore" ,"Islamabad" ,"Multan"];
    document.write(Cities);
    var Cities1 = Cities.slice(0,2);
    document.write("<br>Selected Citites List:" + "<br>" +Cities1);
//Task 12
var animal = ["This","is","my","Cat"];
    document.write("Array:<br>" +animal);
    var animal1 = animal.join(" ");
    document.write("<br>String:<br>" +animal1 );
//Task 13
var values = ["Keyboard", "Mouse","Printer","Monitor"];
for (var i=0;i<values.length;i++){
  document.write("out<br>"+values[i]+'<br>')
}
//Task 14
var values = ["Keyboard", "Mouse","Printer","Monitor"];
var values1 = values.reverse();
for (var i=0;i<values1.length;i++){
  document.write("out<br>"+values1[i]+'<br>');
}
//Task 15
var phone = new Array ("Apple","Samsung", "Motorola", "Nokia", "Sony" , "Haier")
        document.write("<select>")
        for (let i = 0; i < phone.length; i++) {
        document.write(`<option>${phone[i]}</option>`)
        }
        document.write("</select>")


//Chp 17-20
//Task 01
var data=new hunaiza[[],[]];
//Task 02
var hu = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
for (var i=0;i<hu.length;i++){
  document.write(hu[i].join(' ') + "<br>");
}
//Task 03
for (var input = 1; input <= 10; input++) {
  document.write(input + "<br>");
 }
//Task 04
var table = Number(prompt("Enter Table(2-5):"));
var length = prompt("Enter length(10-12):");
if (table == 2 && length == 10){
  for(i=1; i<=10; i++){
    document.write("2*" + i + "="+i*2);
document.write("<br>");
}
}
else if (table == 3 && length == 10){
  for(i=1; i<=10; i++){
    document.write("3*" + i + "="+i*3);
document.write("<br>");
}
}
else if (table == 4 && length == 10){
  for(i=1; i<=10; i++){
    document.write("4*" + i + "="+i*4);
document.write("<br>");
}
}
else if (table == 5 && length == 10){
  for(i=1; i<=10; i++){
    document.write("5*" + i + "="+i*5);
document.write("<br>");
}
}
else if (table == 2 && length == 11){
  for(i=1; i<=11; i++){
    document.write("2*" + i + "="+i*2);
document.write("<br>");
}
}
else if (table == 3 && length == 11){
  for(i=1; i<=11; i++){
    document.write("3*" + i + "="+i*3);
document.write("<br>");
}
}
else if (table == 4 && length == 11){
  for(i=1; i<=11; i++){
    document.write("4*" + i + "="+i*4);
document.write("<br>");
}
}
else if (table == 5 && length == 11){
  for(i=1; i<=11; i++){
document.write("5*" + i + "="+i*5);
document.write("<br>");
}
}
else if (table == 2 && length == 12){
  for(i=1; i<=12; i++){
    document.write("2*" + i + "="+i*2);
document.write("<br>");
}
}
else if (table == 3 && length == 12){
  for(i=1; i<=12; i++){
    document.write("3*" + i + "="+i*3);
document.write("<br>");
}
}
else if (table == 4 && length == 12){
  for(i=1; i<=12; i++){
    document.write("4*" + i + "="+i*4);
document.write("<br>");
}
}
else if (table == 5 && length == 12){
  for(i=1; i<=12; i++){
    document.write("5*" + i + "="+i*5);
document.write("<br>");
}
}
//Task 05
var fruits = ["apple", "banana", "mango", "orange", "strawberry"]; 
document.write(fruits.join("<br>"));
document.write("<br>")
document.write("<br>Element at index[0] is" +" " + fruits[0]);
document.write("<br>Element at index[1] is" +" " + fruits[1]);
document.write("<br>Element at index[2] is" +" " + fruits[2]);
document.write("<br>Element at index[3] is" +" " + fruits[3]);
document.write("<br>Element at index[4] is" +" " + fruits[4]);
//Task 06
document.write("Counting:<br>");
for (var i=1;i<16;i++){
  document.write(i + ",");
}
document.write("<br><br>Reverse Counting:<br>");
var counting = [1,2,3,4,5,6,7,8,9,10];

for (var i = counting.length - 1; i >= 0; i--) {
	document.write(counting[i] + ",");
}
document.write("<br><br>Even Counting:<br>");
for (var i=1; i<20; i++) {
    if(i % 2==0) {
      document.write(i + " ");
    }
  }
document.write("<br><br>Odd Counting:<br>");
for (var i=1; i<20; i++) {
    if(i % 2 != 0) {
      document.write(i + " ");
    }
  }
//Task 07
var A = ["Cake", "Apple pie", "Cookie", "Chips", "Patties"] ;
var customer = prompt("Welcome to ABC Bakery.What do you want to order Sir/Ma'am?");
if (customer == A[0]) {
  document.write(A[0] + " "+"is available at index 0 in our bakery");
}
else if (customer == A[1]) {
  document.write(A[1] + " "+"is available at index 1 in our bakery");
}
else if (customer == A[2]) {
  document.write(A[2] + " "+"is available at index 2 in our bakery");
}
else if (customer == A[3]) {
  document.write(A[3] + " "+"is available at index 3 in our bakery");
}
else if (customer == A[4]) {
  document.write(A[4] + " "+"is available at index 4 in our bakery");
}
else {
  document.write("Your item is not available here");
}
//Task 08
var hu = Math.max(24, 53, 78, 91, 12);
document.write("Largest number is " + " " + hu);
//Task 09
var hu = Math.min(24, 53, 78, 91, 12);
document.write("Smallest number is " + " " + hu);
//Task 10
for(let i = 1; i <= 100; i++){
  if(i%5==0){
  document.writeln(i);
  }
  }


