var inputData = [
    {
        "FirstName": "vaibhav", "LastName": "gupta", "Email": "vaibhavgupta@gmail.com",
        "Id": 101, "PhoneNumber": 8218200895, "Designation": "Software Engineer", "DOB": "19-01-1996"
    },
    {
        "FirstName": "Shubham", "LastName": "saxena", "Email": "shubhamsaxena@gmail.com",
        "Id": 102, "PhoneNumber": 9452898824, "Designation": "Tester", "DOB": "20-10-1995"
    },
    {
        "FirstName": "Ravi", "LastName": "Garg", "Email": "ravi.garg@gmail.com",
        "Id": 103, "PhoneNumber": 7417498322, "Designation": "Software engineer", "DOB": "28-07-1996"
    },
    {
        "FirstName": "Harsh", "LastName": "Aggarwal", "Email": "harshaggarwal@gmail.com",
        "Id": 104, "PhoneNumber": 7551899456, "Designation": "Software engineer", "DOB": "2-03-1995"
    },
    {
        "FirstName": "Aditya", "LastName": "jain", "Email": "jainaditya@gmail.com",
        "Id": 105, "PhoneNumber": 9754594289, "Designation": "Software engineer", "DOB": "7-2-1994"
    },
    {
        "FirstName": "Gaurav", "LastName": "Gupta", "Email": "gauravgg@gmail.com",
        "Id": 115, "PhoneNumber": 9854849784, "Designation": "Intern", "DOB": "31-08-1997"
    }

]
var keys;
var values;

function tab() {

    keys = Object.keys(inputData[1])


    values = inputData.map((element, index) => {
        return Object.values(inputData[index])

    })


    var td = [];
    var text = [];
    var table = document.createElement('table');
    table.border = "1";
    var thead = document.createElement('thead');

    table.appendChild(thead);

    for (var i = 0; i < keys.length; i++) {
        thead.appendChild(document.createElement("th")).
            appendChild(document.createTextNode(keys[i]));
    }

    for (var i = 0; i < values.length; i++) {
        var tr = document.createElement('tr');
        for (let j = 0; j < keys.length; j++) {
            td[j] = document.createElement('td');
            text[j] = document.createTextNode(values[i][j]);
            td[j].appendChild(text[j]);
            tr.appendChild(td[j])

        }
       
        table.appendChild(tr);
    }
    document.body.appendChild(table);

}
function sorting()
{
    document.addEventListener("click", function(){
        document.getElementById("demo").innerHTML = "Hello World!";
      });
}