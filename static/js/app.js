// from data.js
var tableData = data;

// Creating variables
var button = d3.select("#filter-btn");
var inputValue = d3.select("#datetime");
var tbody = d3.select("tbody");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

var populate = (dataInput) => {

    dataInput.forEach(ufo_sightings => {
        var row = tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufo_sightings[column])
        )
    });
}

//Populate table
populate(data);


// Adding Date Filter
button.on("click", () => {
    d3.event.preventDefault();
    var inputDate = inputValue.property("value").trim();
    // Filter by input
  
    var filterData = data.filter(data => data.datetime === inputDate);
    console.log(filterData)

    // Adding filtered data to table
    tbody.html("");

    let response = filterData

    if (response.filterData.length !== 0) {
        populate(filterData);
    }
    else {
        tbody.append("tr").append("td").text("No results found!");
    }
})


