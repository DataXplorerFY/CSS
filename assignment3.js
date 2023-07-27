//  Declare and Initialize an array and store available education
// qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M.
//     Phil., PhD). Show the listed qualifications in your browser like

// var Pakistan=["SSC","HSC","BCS","BS","BCOM","MS","M.PHIL","PHD"];

// document.write("Qualifications<br>");

// for(i=0; i<Pakistan.length; i++){

//     document.write("<br>",i+1,") " , Pakistan[i]);
// }


// Write a program to store 3 student names in an array.Take another
// array to store score of these three students. Assume that total marks
// are 500 for each student, display the scores & percentages of
// students like:


// var stu_name=["Farhan","javeria","Arooj"];
// var marks=[350,400,450];

// for(i=0; i<stu_name.length; i++){
//     var per= ((marks[i]/500)*100);
//     document.write("<br>","Marks of ",stu_name[i]," is ",marks[i]," Percentage: ", per)
// }

var color_names=[];
var userInput=prompt("Enter the color that you want in this array");
var updated_1=color_names.unshift(userInput);
// document.write("Updated Array is ", color_names);

var userInput2=prompt("Enter the color that you want in this array");
var updated_2=color_names.push(userInput2);
// document.write("<br>Updated Array is ", color_names);



var c=["Blue","Brown"];
color_names.unshift(c);
// document.write("<br>updated array is ", color_names);
// var userInput3=prompt("Enter the color that you want in this array");

color_names.shift(color_names);
document.write("<br>updated array is ", color_names);

