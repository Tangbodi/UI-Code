var json = [{"first_name": "John", 
"last_name": "Doe", 
"age": 23, "Description": "John Doe is a good singer"},
{"first_name": "Steve", 
"last_name": "Tailor",
 "age": 27, "Description": "Steve Tailor is a cameraman"},
 {"first_name": "Mark", 
 "last_name": "Doe",
  "age": 21, "Description": "Mark Doe is a nice artist"},
{"first_name": "Philip", 
"last_name": "Bloom", 
"age": 43, 
"Description": "Philip Bloom is a Famous Cinematographers"}];
buildTable(json)

	function buildTable(data){
		var table = document.getElementById('myTable')

		for (var i = 0; i < data.length; i++){
			var row = `<tr>
							<td>${data[i].first_name}</td>
							<td>${data[i].last_name}</td>
                            <td>${data[i].age}</td>
							<td>${data[i].Description}</td>
					  </tr>`
			table.innerHTML += row
		}
	}
