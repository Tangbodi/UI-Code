let text = document.getElementById("text");
//declaring json list with four objects
let json = [{ "first_name":"John",
            "last_name":"Doe",
            "age":23,
            "Description":"John Doe is a good singer"},
            {"first_name":"Steve",
            "last_name":"Tailor",
            "age":27,
            "Description":"Steve Tailor is a cameraman"},   
            {"first_name":"Mark",
            "last_name":"Doe",
            "age":21,
            "Description":"Mark Doe is a famous artist"},
            {"first_name":"Philip",
            "last_name":"Bloom",
            "age":43,
            "Description":"Philip Bloom is a Famous Cinematographers"}];
//converting json list to string using stringify method   
let list = JSON.stringify(json);
//call function is called when get button is clicked
function call(){
//getting the text entered in textarea
    let textEntered = text.value;
//the text entered is of type string
let parsedText = JSON.parse(textEntered);
let lis = JSON.parse(list);
//adding the parsedText at second index
lis.splice(1,0,parsedText);
//displaying the details in tabular form
let tab = document.getElementById("tab");
for(let item of lis){
//creating row element
    let row = document.createElement("tr");
//creating column elements
    let col1 = document.createElement("th");
    col1.textContent = item.first_name;
    row.appendChild(col1);
    let col2 = document.createElement("th");
    col2.textContent = item.last_name;
    row.appendChild(col2);
    let col3 = document.createElement("th");
    col3.textContent = item.age;
    row.appendChild(col3);
    let col4 = document.createElement("th");
    col4.textContent = item.Description;
    row.appendChild(col4);
//appending the row to the table element
    tab.appendChild(row);
}

}