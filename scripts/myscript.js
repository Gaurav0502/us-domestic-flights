const url = "https://raw.githubusercontent.com/Gaurav0502/us-domestic-flights/refs/heads/gaurav/data/interactive/delayfactors.csv"

// Load and process the CSV data
d3.csv(url).then(function(data) {
  var idx = d3.randomInt(data.length)();
  console.log(idx);
  row = data[idx];
  
  var val_name = ["arr_delay"]
  var val = [row.arr_delay]
  
  var param_names = Object.keys(row).filter(function(key){ return key !== "arr_delay" && key !== "";});
  var params = param_names.map(key => row[key]);
  const y = 55;
  
  var svg = d3.select("div#plot")
        .append("svg")
        .attr("width", 500)  // Set the width of the SVG
        .attr("height", 250); // Set the height of the SVG
    
    var margin = 200,
        width = svg.attr("width") - margin,
        height = svg.attr("height") - margin;
    
    svg.selectAll(".delayfactors")
     .data(params)
     .enter().append("rect")
     .attr("class", "delayfactors")
     .attr("x", function(d, i) { return 10 + i*100; })
     .attr("y", y)
     .attr("width", 50)
     .attr("height", 50);
     
    svg.selectAll(".param_value")
      .data(params)
      .enter().append("text")
      .attr("class", "param_value")
      .attr("x", function(d, i) { return 10 + i * 100 + 25; })
      .attr("y", y + 28) // Centered vertically
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "central")
      .attr("font-family", "Arial")
      .attr("font-size", 16)
      .attr("fill", "white")
      .text(function(d) { return d; });
     
    svg.selectAll(".param_name")
      .data(param_names)
      .enter().append("text")
      .attr("class", "param_name")
      .attr("x", function(d, i) { return 10 + i * 100 + 25; }) 
      .attr("y", y - 10) 
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "baseline")
      .attr("font-family", "Arial")
      .attr("font-size", 12)
      .attr("fill", "black")
      .text(function(d) { return d; });
     
    svg.selectAll(".delay")
     .data(val)
     .enter().append("rect")
     .attr("class", "delay")
     .attr("x", function(d, i) { return 200 + 10; })
     .attr("y", y + 100)
     .attr("width", 50)
     .attr("height", 50)
     .attr("visibility", "hidden");
    
    svg.selectAll(".delay_value")
      .data(val)
      .enter().append("text")
      .attr("class", "delay_value")
      .attr("x", function(d, i) { return 210 + 25; })
      .attr("y", y + 100 + 28)
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "central")
      .attr("font-family", "Arial")
      .attr("font-size", 16)
      .attr("fill", "white")
      .attr("visibility", "hidden")
      .text(function(d) { return d; });
    
    svg.selectAll(".value_name")
      .data(val_name)
      .enter().append("text")
      .attr("class", "value_name")
      .attr("x", function(d, i) { return 210 + 25; })
      .attr("y", y + 90)
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "baseline")
      .attr("font-family", "Arial")
      .attr("font-size", 12)
      .attr("fill", "black")
      .attr("visibility", "hidden")
      .text(function(d) { return d; });
      
    const dropdown = document.getElementById("estimate");
    
    dropdown.addEventListener("input", function() {
       if(dropdown.value){
           svg.selectAll(".delay").attr("visibility", "visible")
           svg.selectAll(".delay_value").attr("visibility", "visible")
           svg.selectAll(".value_name").attr("visibility", "visible")
           span = document.getElementById("result")
           if(dropdown.value == val[0]){
              span.innerHTML = "correct!"
              span.style.color = "green"
           }else{
              span.innerHTML = "incorrect!"
              span.style.color = "red"
           }
       }
    });
    
    const btn = document.getElementById("tryAnotherBtn")
    btn.addEventListener("click", function() {
            location.reload(); 
    });
});

