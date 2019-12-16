var diff_data = [
  `time	네이버TV 조회수	네이버TV 좋아요	DC 멘션	DC 추천	실제순위
  0	2	4	6	6	-2	
  1	3	4	7	4	-3	
  2	3	4	12	10	6	
  3	11	11	14	11	10	`,
  `time	네이버TV 조회수	네이버TV 좋아요	DC 멘션	DC 추천	실제순위
  0	8	9	11	12	11	
  1	4	11	16	18	15	
  2	5	10	13	12	5	
  3	3	9	18	16	7	`,
  `time	네이버TV 조회수	네이버TV 좋아요	DC 멘션	DC 추천	실제순위
  0	3	6	3	2	3	
  1	11	13	2	1	1	
  2	7	11	5	3	10	
  3	8	12	10	5	6	`,
  `time	네이버TV 조회수	네이버TV 좋아요	DC 멘션	DC 추천	실제순위
  0	11	13	17	16	18	
  1	8	6	17	12	10	
  2	6	6	17	16	15	
  3	10	3	17	14	3	`,
  `time	네이버TV 조회수	네이버TV 좋아요	DC 멘션	DC 추천	실제순위
  0	19	19	19	19	19	
  1	18	17	14	17	17	
  2	18	18	15	14	19	
  3	19	18	9	13	19	`,
  `time	네이버TV 조회수	네이버TV 좋아요	DC 멘션	DC 추천	실제순위
  0	18	18	18	18	16	
  1	19	19	19	19	19	
  2	19	19	19	19	18	
  3	18	19	16	19	18	`,
  `time	네이버TV 조회수	네이버TV 좋아요	DC 멘션	DC 추천	실제순위
  0	17	15	15	15	14	
  1	17	7	12	16	13	
  2	16	9	14	17	13	
  3	17	8	13	17	12	`,
  `time	네이버TV 조회수	네이버TV 좋아요	DC 멘션	DC 추천	실제순위
  0	13	12	12	10	13	
  1	16	16	10	11	9	
  2	12	7	4	4	8	
  3	4	6	3	2	14	`,
  `time	네이버TV 조회수	네이버TV 좋아요	DC 멘션	DC 추천	실제순위
  0	7	1	9	4	12	
  1	1	2	8	2	8	
  2	0	0	6	2	3	
  3	12	5	6	1	4	`,
  `time	네이버TV 조회수	네이버TV 좋아요	DC 멘션	DC 추천	실제순위
  0	10	16	16	17	17	
  1	15	15	15	15	16	
  2	17	12	10	13	12	
  3	7	10	7	10	16	`,
  `time	네이버TV 조회수	네이버TV 좋아요	DC 멘션	DC 추천	실제순위
  0	1	0	1	1	7	
  1	0	0	0	0	-1	
  2	8	1	0	0	0	
  3	0	0	0	0	2	`,
  `time	네이버TV 조회수	네이버TV 좋아요	DC 멘션	DC 추천	실제순위
  0	14	17	13	13	15	
  1	10	9	13	13	14	
  2	10	13	16	18	11	
  3	5	13	15	15	9	`,
  `time	네이버TV 조회수	네이버TV 좋아요	DC 멘션	DC 추천	실제순위
  0	16	14	2	11	-5	
  1	13	18	11	8	18	
  2	15	16	8	8	17	
  3	9	16	12	12	8	`,
  `time	네이버TV 조회수	네이버TV 좋아요	DC 멘션	DC 추천	실제순위
  0	9	5	8	5	-1	
  1	9	8	4	9	5	
  2	4	8	2	5	4	
  3	2	4	2	8	13	`,
  `time	네이버TV 조회수	네이버TV 좋아요	DC 멘션	DC 추천	실제순위
  0	15	11	14	14	-8	
  1	12	12	18	14	3	
  2	13	15	18	15	14	
  3	15	15	19	18	15	`,
  `time	네이버TV 조회수	네이버TV 좋아요	DC 멘션	DC 추천	실제순위
  0	5	7	10	9	9	
  1	7	5	6	5	7	
  2	14	5	7	7	9	
  3	13	7	5	4	11	`,
  `time	네이버TV 조회수	네이버TV 좋아요	DC 멘션	DC 추천	실제순위
  0	0	2	5	7	0	
  1	2	1	1	3	-7	
  2	2	2	3	6	1	
  3	6	1	4	6	0	`,
  `time	네이버TV 조회수	네이버TV 좋아요	DC 멘션	DC 추천	실제순위
  0	12	10	0	0	-10	
  1	6	10	9	10	11	
  2	11	17	11	11	16	
  3	16	17	11	9	17	`,
  `time	네이버TV 조회수	네이버TV 좋아요	DC 멘션	DC 추천	실제순위
  0	4	3	7	8	10	
  1	5	3	3	6	6	
  2	1	3	1	1	2	
  3	1	2	1	3	1	`,
  `time	네이버TV 조회수	네이버TV 좋아요	DC 멘션	DC 추천	실제순위
  0	6	8	4	3	5	
  1	14	14	5	7	2	
  2	9	14	9	9	7	
  3	14	14	8	7	5	`,
]


$( document ).ready(function() {
    var members = document.getElementById("members")
    dict.forEach(function(ele, i) {
        className = "btn"
        if (i == 0)
            className += " active"
        if (i == 3 || i == 7 || i == 9 || i == 12)
            className += " featured"
        members.innerHTML += "<a class='" + className + "'>" + ele + "</a>"
    })

    diff(9, "#chart1");
    diff(12, "#chart2");
    diff(9, "#chart3");
    diff(3, "#chart4");

    var btns = Array.from(document.querySelectorAll("#members .btn"))
    btns.forEach(function(btn, i) {
        btn.onclick = function(e) {
            $("#diff svg").remove()
            activate(i);
            diff(i, "#lines");
        }
    })
    diff(0, "#lines")


    function activate(index) {
        btns.forEach(function(ele, i) {
            if (i == index)
                ele.classList.add("active")
            else
                ele.classList.remove("active")
        })
    }
})



function diff(i, where) {
    var margin = {
        top: 20,
        right: 210,
        bottom: 30,
        left: 50
      },
      width = 900 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

    // var parseDate = d3.time.format("%Y%m%d").parse;

    var x = d3.scale.linear()
      .range([0, width]);

    var y = d3.scale.linear()
      .range([height, 0]);

    var color = d3.scale.category10();

    var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom")
        .tickFormat(function(e){
            if (Math.floor(e) != e) {
                return;
            }
            label = "" + (e + 1) + "차 발표식"
            return label;
        });


    var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left");

    var line = d3.svg.line()
      .x(function(d) {
        return x(d.time);
      })
      .y(function(d) {
        return y(d.temperature);
      });

    var svg = d3.select(where).append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var data = d3.tsv.parse(diff_data[i]);
    console.log(data)

    color.domain(d3.keys(data[0]).filter(function(key) {
      return key !== "time";
    }));

    // data.forEach(function(d) {
    //   d.time = parseDate(d.time);
    // });

    var cities = color.domain().map(function(name) {
        
      return {
        name: name,
        values: data.map(function(d) {
          return {
            time: d.time,
            temperature: +d[name] // 1000
          };
        })
      };
    });

    x.domain(d3.extent(data, function(d) {
        return d.time;
    }));

    y.domain([
      d3.min(cities, function(c) {
        return d3.min(c.values, function(v) {
          return v.temperature;
        });
      }),
      d3.max(cities, function(c) {
        return d3.max(c.values, function(v) {
          return v.temperature;
        });
      })
    ]);

    var legend = svg.selectAll('g')
      .data(cities)
      .enter()
      .append('g')
      .attr('class', 'legend');

    legend.append('rect')
      .attr('x', width + 101)
      .attr('y', function(d, i) {
        return i * 20;
      })
      .attr('width', 10)
      .attr('height', 10)
      .style('fill', function(d) {
        return color(d.name);
      });

    legend.append('text')
      .attr('x', width + 115)
      .attr('y', function(d, i) {
        return (i * 20) + 9;
      })
      .text(function(d) {
        return d.name;
      });

    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

    svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", -43)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("순위(Inversed)");

    var city = svg.selectAll(".city")
      .data(cities)
      .enter().append("g")
      .attr("class", function(d, i) {
          return "city c" + i
      });

    city.append("path")
      .attr("class", "line")
      .attr("d", function(d) {
        return line(d.values);
      })
      .style("stroke", function(d) {
        return color(d.name);
      });

    city.append("text")
      .datum(function(d) {
        return {
          name: d.name,
          value: d.values[d.values.length - 1]
        };
      })
      .attr("transform", function(d) {
        return "translate(" + x(d.value.time) + "," + y(d.value.temperature) + ")";
      })
      .attr("x", 3)
      .attr("dy", ".35em")
      .text(function(d) {
        return d.name;
      });

    var mouseG = svg.append("g")
      .attr("class", "mouse-over-effects");

    mouseG.append("path") // this is the black vertical line to follow mouse
      .attr("class", "mouse-line")
      .style("stroke", "black")
      .style("stroke-width", "1px")
      .style("opacity", "0");
      
    var lines = document.getElementsByClassName('line');

    var mousePerLine = mouseG.selectAll('.mouse-per-line')
      .data(cities)
      .enter()
      .append("g")
      .attr("class", "mouse-per-line");

    mousePerLine.append("circle")
      .attr("r", 7)
      .style("stroke", function(d) {
        return color(d.name);
      })
      .style("fill", "none")
      .style("stroke-width", "1px")
      .style("opacity", "0");

    mousePerLine.append("text")
      .attr("transform", "translate(10,3)");

    mouseG.append('svg:rect') // append a rect to catch mouse movements on canvas
      .attr('width', width) // can't catch mouse events on a g element
      .attr('height', height)
      .attr('fill', 'none')
      .attr('pointer-events', 'all')
      .on('mouseout', function() { // on mouse out hide line, circles and text
        d3.select(".mouse-line")
          .style("opacity", "0");
        d3.selectAll(".mouse-per-line circle")
          .style("opacity", "0");
        d3.selectAll(".mouse-per-line text")
          .style("opacity", "0");
      })
      .on('mouseover', function() { // on mouse in show line, circles and text
        d3.select(".mouse-line")
          .style("opacity", "1");
        d3.selectAll(".mouse-per-line circle")
          .style("opacity", "1");
        d3.selectAll(".mouse-per-line text")
          .style("opacity", "1");
      })
      .on('mousemove', function() { // mouse moving over canvas
        var mouse = d3.mouse(this);
        d3.select(".mouse-line")
          .attr("d", function() {
            var d = "M" + mouse[0] + "," + height;
            d += " " + mouse[0] + "," + 0;
            return d;
          });

        d3.selectAll(".mouse-per-line")
          .attr("transform", function(d, i) {
            // console.log(width/mouse[0])
            // var xDate = x.invert(mouse[0]),
                // bisect = d3.bisector(function(d) { return d.time; }).right;
                // idx = bisect(d.values, xDate);
            
            var beginning = 0,
                end = lines[i].getTotalLength(),
                target = null;

            while (true){
              target = Math.floor((beginning + end) / 2);
              pos = lines[i].getPointAtLength(target);
              if ((target === end || target === beginning) && pos.x !== mouse[0]) {
                  break;
              }
              if (pos.x > mouse[0])      end = target;
              else if (pos.x < mouse[0]) beginning = target;
              else break; //position found
            }
            
            d3.select(this).select('text')
              .text(y.invert(pos.y).toFixed(2));
              
            return "translate(" + mouse[0] + "," + pos.y +")";
          });
      });
}