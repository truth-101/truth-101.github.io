var diff_data = [
    `time	네이버TV 조회수	네이버TV 좋아요	DC 멘션	DC 추천	실제순위
    0	18	16	14	14	-2	
    1	17	16	13	16	-3	
    2	17	16	8	10	6	
    3	9	9	6	9	10	`,
    `time	네이버TV 조회수	네이버TV 좋아요	DC 멘션	DC 추천	실제순위
    0	12	11	9	8	11	
    1	16	9	4	2	15	
    2	15	10	7	8	5	
    3	17	11	2	4	7	`,
    `time	네이버TV 조회수	네이버TV 좋아요	DC 멘션	DC 추천	실제순위
    0	17	14	17	18	3	
    1	9	7	18	19	1	
    2	13	9	15	17	10	
    3	12	8	10	15	6	`,
    `time	네이버TV 조회수	네이버TV 좋아요	DC 멘션	DC 추천	실제순위
    0	9	7	3	4	18	
    1	12	14	3	8	10	
    2	14	14	3	4	15	
    3	10	17	3	6	3	`,
    `time	네이버TV 조회수	네이버TV 좋아요	DC 멘션	DC 추천	실제순위
    0	1	1	1	1	19	
    1	2	3	6	3	17	
    2	2	2	5	6	19	
    3	1	2	11	7	19	`,
    `time	네이버TV 조회수	네이버TV 좋아요	DC 멘션	DC 추천	실제순위
    0	2	2	2	2	16	
    1	1	1	1	1	19	
    2	1	1	1	1	18	
    3	2	1	4	1	18	`,
    `time	네이버TV 조회수	네이버TV 좋아요	DC 멘션	DC 추천	실제순위
    0	3	5	5	5	14	
    1	3	13	8	4	13	
    2	4	11	6	3	13	
    3	3	12	7	3	12	`,
    `time	네이버TV 조회수	네이버TV 좋아요	DC 멘션	DC 추천	실제순위
    0	7	8	8	10	13	
    1	4	4	10	9	9	
    2	8	13	16	16	8	
    3	16	14	17	18	14	`,
    `time	네이버TV 조회수	네이버TV 좋아요	DC 멘션	DC 추천	실제순위
    0	13	19	11	16	12	
    1	19	18	12	18	8	
    2	20	20	14	18	3	
    3	8	15	14	19	4	`,
    `time	네이버TV 조회수	네이버TV 좋아요	DC 멘션	DC 추천	실제순위
    0	10	4	4	3	17	
    1	5	5	5	5	16	
    2	3	8	10	7	12	
    3	13	10	13	10	16	`,
    `time	네이버TV 조회수	네이버TV 좋아요	DC 멘션	DC 추천	실제순위
    0	19	20	19	19	7	
    1	20	20	20	20	-1	
    2	12	19	20	20	0	
    3	20	20	20	20	2	`,
    `time	네이버TV 조회수	네이버TV 좋아요	DC 멘션	DC 추천	실제순위
    0	6	3	7	7	15	
    1	10	11	7	7	14	
    2	10	7	4	2	11	
    3	15	7	5	5	9	`,
    `time	네이버TV 조회수	네이버TV 좋아요	DC 멘션	DC 추천	실제순위
    0	4	6	18	9	-5	
    1	7	2	9	12	18	
    2	5	4	12	12	17	
    3	11	4	8	8	8	`,
    `time	네이버TV 조회수	네이버TV 좋아요	DC 멘션	DC 추천	실제순위
    0	11	15	12	15	-1	
    1	11	12	16	11	5	
    2	16	12	18	15	4	
    3	18	16	18	12	13	`,
    `time	네이버TV 조회수	네이버TV 좋아요	DC 멘션	DC 추천	실제순위
    0	5	9	6	6	-8	
    1	8	8	2	6	3	
    2	7	5	2	5	14	
    3	5	5	1	2	15	`,
    `time	네이버TV 조회수	네이버TV 좋아요	DC 멘션	DC 추천	실제순위
    0	15	13	10	11	9	
    1	13	15	14	15	7	
    2	6	15	13	13	9	
    3	7	13	15	16	11	`,
    `time	네이버TV 조회수	네이버TV 좋아요	DC 멘션	DC 추천	실제순위
    0	20	18	15	13	0	
    1	18	19	19	17	-7	
    2	18	18	17	14	1	
    3	14	19	16	14	0	`,
    `time	네이버TV 조회수	네이버TV 좋아요	DC 멘션	DC 추천	실제순위
    0	8	10	20	20	-10	
    1	14	10	11	10	11	
    2	9	3	9	9	16	
    3	4	3	9	11	17	`,
    `time	네이버TV 조회수	네이버TV 좋아요	DC 멘션	DC 추천	실제순위
    0	16	17	13	12	10	
    1	15	17	17	14	6	
    2	19	17	19	19	2	
    3	19	18	19	17	1	`,
    `time	네이버TV 조회수	네이버TV 좋아요	DC 멘션	DC 추천	실제순위
    0	14	12	16	17	5	
    1	6	6	15	13	2	
    2	11	6	11	11	7	
    3	6	6	12	13	5	`,
]

var dict = [
    "강민희",
    "구정모",
    "금동현",
    "김민규",
    "김요한",
    "김우석",
    "남도현",
    "손동표",
    "송유빈",
    "송형준",
    "이세진",
    "이은상",
    "이진혁",
    "이한결",
    "조승연",
    "차준호",
    "토니",
    "한승우",
    "함원진",
    "황윤성"
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

    var btns = Array.from(document.querySelectorAll("#members .btn"))
    btns.forEach(function(btn, i) {
        btn.onclick = function(e) {
            $("#diff svg").remove()
            activate(i);
            diff(i);
        }
    })
    diff(0)


    function activate(index) {
        btns.forEach(function(ele, i) {
            if (i == index)
                ele.classList.add("active")
            else
                ele.classList.remove("active")
        })
    }
})



function diff(i) {
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
      .interpolate("basis")
      .x(function(d) {
        return x(d.time);
      })
      .y(function(d) {
        return y(d.temperature);
      });

    var svg = d3.select("#lines").append("svg")
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