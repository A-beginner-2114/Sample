function DisplayMenu(){
    var n=1
    document.write("Displaying the combinations");
    products = ["Espresso","Cappucino","Latte"];
    Addons = ["Milk","Cream","Latte"];
    for(var i=0;i<3;i++){
        for(var j=0;j<3;j++){
            document.write("<br>");
            document.write(n,") ",products[i]," with ",Addons[j]);
            n++;
            
        }
    }
}
DisplayMenu();

var cafe =[];
var items = [];
var Add =[];
var n = 0;

function getInputCoffee(){
    var coffee = document.getElementsByName("Coffee")[0].value;
    cafe.push(coffee);
    console.log(cafe);
    getInputAddOn();
}
    

function getInputAddOn(){
    var Addon = prompt("Enter your preferred Add-On\n('Milk' or 'Cream' or 'Latte')");
    Add.push(Addon);
    next();
    console.log(Add);
}


function next(){
    var item = cafe[n] + " with " + Add[n];
    item.push(item);
    var choice = prompt("You ordered "+ items +"\n You want another Coffee?(Yes/No)");
    if (choice==="Yes"){
        alert("Use the same input box");
    }
    else if(choice==="No"){
        confirm();
    }
    n++;
}


function confirm(){
    var choice = prompt("Are you sure to buy these?\n"+ items +"(Yes/No)");
    if (choice==="Yes"){
        DisplayBill();
        alert("Order Confirmed! Thank you")
    }
}

