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

    // Select the input field value
    var input = d3.select("#datetime").property("value");

    // Filter to input value
    var filteredData = tableData.filter(search => search.datetime === input);

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