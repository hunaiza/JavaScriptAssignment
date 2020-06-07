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
//Check file Alert6.html which is available in folder Chp01 in my git repository
//Task 7(a)
//Check file Alert7(1).html which is available in folder Chp01 in my git repository
//Task 7(b)
//Check file Alert7(2).html which is available in folder Chp01 in my git repository
//Task 7(c)
//Check file Alert7(3).html which is available in folder Chp01 in my git repository
//Task 7(d)
//Check file Alert7(4).html which is available in folder Chp01 in my git repository

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
//Check file Third.html in folder Chp04 which is available in my git repository


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