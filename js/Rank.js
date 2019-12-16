$( document ).ready(function() {

    btns = document.querySelectorAll(".btn");
    rank("../data/real_rank1.json", "#left_bars", "#left_years")
    rank("../data/rank1.json", "#bars", "#years")
    match()


    btns.forEach(function(ele, i) {
        ele.onclick = function(e) {
            activate(i)
            $("#bars svg").remove()
            $("#left_bars svg").remove()
            rank("../data/real_rank" + (i+1) + ".json", "#left_bars", "#left_years")
            rank("../data/rank" + (i+1) + ".json", "#bars", "#years")
            match()
        }
    })

    function activate(index) {
        btns.forEach(function(ele, i) {
            if (i == index)
                ele.classList.add("active")
            else
                ele.classList.remove("active")
        })
    }

    function activate_match(arr) {
        arr.forEach(function(ele) {
            ele.add
        })
    }

    function match() {
        let all = Array.from(document.querySelectorAll("#rank .bar"))
        console.log(all)
        for (let i = 0; i < 20; i++) {
            let matches = all.filter(function(ele) {
                return ele.classList.contains("rank" + i)
            })
            matches.forEach(function(ele) {
                ele.addEventListener("mouseover", function(e) {
                    matches[0].classList.add("active");
                    matches[1].classList.add("active");
                })
            })
        }
    }

})




function rank(data_url, where, where_year) {
    var
        url = data_url,
        width = 900,
        height = 720,
        margin = 1,
        lis = ""
        ;

    d3.json(url, function(error, json) {
        if (error) {
            return window.alert("데이터 로딩 실패");
        }

        var
            ds = JSONstat(JSONstatUtils.fromSDMX(json)),
            geo = ds.Dimension("CANDIDATE"),
            year = ds.Dimension("TIME_PERIOD").id,
            start = String(year[0]),
            atable = ds.toTable(
                {
                    type: 'arrobj', 
                    content: 'id'
                },
                function(d) {
                    if (d.TIME_PERIOD >= start){
                        return {
                            area: d.CANDIDATE, 
                            year: d.TIME_PERIOD, 
                            value: d.value
                        };
                    }
                }
            ),
            max = atable
                .filter(function(d){
                    return d.year === start;
                })
                .sort(function(a,b) {
                    return b.value - a.value;
                })
                .map(function(d) {
                    return d.area;
                })
        ;

        atable.sort(function(a,b) {
            return max.indexOf(a.area) - max.indexOf(b.area);
        });

        for (var i = year.indexOf(start); i < year.length; i++) {
            var sel = (year[i] !== start) ? "" : ' class = "selected"';
            lis += "<li" + sel + ">" + year[i] + "</li>";
        }

        d3.select(where_year).html(lis);

        var
            vScale = d3.scale.linear().domain([0, 24]).range([10, height - 100]).clamp(true),
            hScale = d3.scale.linear().domain([0, 120]).range([0, 960]).clamp(true),
            svg = d3.select(where).append("svg").attr("width", width).attr("height", height),
            li = d3.selectAll(where_year + " li")
        ;

        li.on("click", function (d, i) {
            li.classed("selected", false);
            var sel = d3.select(this);
            sel.classed("selected", true);
            Bars(atable, sel.text());
        });

        Bars(atable, start);

        function descr(d) {
            return geo.Category(d.area).label + " " + Math.round(d.value * 10) / 10 + "%";
        }

        function Bars(data, y) {
            var arr = [], j = 0;
            for(var i = 0; i < data.length; i++) {
                if (data[i].year == y) {
                    arr.push({
                        area: data[i].area, 
                        value: data[i].value, 
                        i: j++
                    });
                }
            }

            arr.sort(function(a, b) {
                return b.value - a.value
            });

            // names
            var labels = svg.selectAll("text").data(arr);

            labels.enter().append("text")
                .attr("class", function(d, i) {
                    return "text"; // (arr[0].i !== i)? "text" : "text max";
                })
                .attr("x", 25)
                .attr("y", function(d, i) {
                    return vScale(i) + 13
                }) // 270
                .attr("text-anchor", "middle")
                .text(function(d, i) {
                    return d.area;
                });

            labels.transition().duration(500)
                .text(function(d, i) {
                    return d.area;
                })
                .attr("class", function(d, i) {
                    return "text"; // (arr[0].i !== i)? "text" : "text max";
                });
                
            // values
            var rect = svg.selectAll("rect").data(arr);
            
            rect.enter().append("rect")
                .attr("x", function(d, i) {
                    return 50; // vScale(i);
                })
                .attr("y", function(d, i) {
                    return vScale(i); // height - 25 - hScale(d.value);
                })
                .attr("width", function(d, i) {
                    return hScale(d.value);
                })
                .attr("height", function(d, i) {
                    return ((height - 2 * margin) / arr.length) / 2;
                })
                .attr("class", function(d, i) {
                    return "bar rank" + i
                })
                .attr("val", function(d, i) {
                    return d.value * 100000
                })
                .on("mouseover", function(d, i) {
                    d3.select(this).classed("over", true);
                })
                .on("mouseout", function(d, i) {
                    d3.select(this).classed("over", false);
                })
                .on("click", function(d, i) {
                    var sel = d3.select(this);
                    sel.classed("selected", !sel.classed("selected"));
                })
                .append("title").text(function(d, i){
                    return descr(d);
                })
                ;

            rect.transition().duration(500)
                .attr("width",function(d, i) {
                    return hScale(d.value);
                })
                .attr("x", function(d, i) {
                    return 50 // height - 25 - hScale(d.value);
                });

            var titles = svg.selectAll("rect title").data(arr);
            titles.text(function(d, i) {
                return descr(d);
            });
            
        }

    });
}