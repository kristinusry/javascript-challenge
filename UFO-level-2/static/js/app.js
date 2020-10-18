// from data.js
var tableData = data;

// Select the table body
var tbody = d3.select("tbody");

data.forEach(function(UFO){
    // Create a new row for every line of data and assign it as a variable
    var row = tbody.append("tr");
    
    // In each line of data, loop through the key value pairs
    Object.entries(UFO).forEach(function([x,y]){
        
        // In each row of the line of data, build a table cell
        row.append("td").text(y);
    })
});



// Select the button
var button = d3.select("#filter-btn");

// Event for button click
button.on("click", function() {

    // Clear current table data
    tbody.html("");

    // Prevent page from refreshing on 'Enter'
    d3.event.preventDefault();

    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.select("#selDataset");
  
    // Assign the value of the dropdown menu option to a variable
    var datatype = dropdownMenu.node().value;
    
    // Assign the value of the input field to a variable
    var input = d3.select("#input").property("value");

    // Initialize dropdown select string
    var dropdownData = " ";

    switch(datatype) {
        case "datetime":
            dropdownData = "datetime";
            break;

        case "city":
            dropdownData = "city";
            break;
        
        case "state":
            dropdownData = "state";
            break;
        
        case "country":
            dropdownData = "country";
            break;   

        case "shape":
            dropdownData = "shape";
            break; 

        default:
            dropdownData = "datetime";
    }

    // Filter to input value
    var filteredData = tableData.filter(search => search[dropdownData] === input);

    filteredData.forEach(function(UFOsearch){
        // Create a new row for every line of data and assign it as a variable
        var row = tbody.append("tr");
        
        // In each line of data, loop through the key value pairs
        Object.entries(UFOsearch).forEach(function([x,y]){
            
            // In each row of the line of data, build a table cell
            row.append("td").text(y);
        })
    });
});