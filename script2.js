  

for (let i = 0; i <= 6; i++) {
    document.writeln(`<h${i}> head er${i}  </h${i}>`);
}
  
  
  
   var number = prompt("Enter a number:");  

if (number % 3 === 0 && number % 5 === 0) {
    alert("fizz buzz");
} else if (number % 3 === 0) {
    alert("fizz");
} else if (number % 5 === 0) {
    alert("buzz");
} else {
    alert("none");
}
    

    var fly = confirm("Do you fly?");

if (fly) {
    var wild1 = confirm("Are You Wild?");
    if (wild1) {
        alert("Eagle");
    } else {
        alert("Parrot");
    }
} else {
    var undersea = confirm("Do you live undersea?");
    if (undersea) {
        var wild2 = confirm("Are You Wild?");
        if (wild2) {
            alert("Shark");
        } else {
            alert("Dolphin");
        }
    } else {
        var wild3 = confirm("Are You Wild?");
        if (wild3) {
            alert("Lion");
        } else {
            alert("Cat");
        }
    }
}
   



var sum =0;
var num;

do {
    num = prompt("Enter a number:");
    if (!isNaN(num) && num !== null && num !== "") {
        num = Number(num);
        sum += num;
    } else if (num !== "0" && num !== null) {
        alert("Please enter a valid numeric value.");
    }
} while (num != 0 && sum <= 100);

alert("The total sum is: " + sum);
