var
    url = "https://stats.oecd.org/SDMX-JSON/data/LFS_SEXAGE_I_R/AUS+AUT+BEL+CAN+CHL+CZE+DNK+EST+FIN+FRA+DEU+GRC+HUN+ISL+IRL+ISR+ITA+JPN+KOR+LUX+MEX+NLD+NZL+NOR+POL+PRT+SVK+SVN+ESP+SWE+CHE+TUR+GBR+USA.MW.900000.UR.A/all?startTime=2006&dimensionAtObservation=allDimensions",
    width = 800,
    height = 280,
    margin = 1,
    lis = ""
    ;

d3.json(url, function(error, json) {
    if (error) {
        return window.alert("An error has occurred while connecting to OECD!");
    }

    var
        ds = JSONstat(JSONstatUtils.fromSDMX(json)),
        geo = ds.Dimension("COUNTRY"),
        year = ds.Dimension("TIME_PERIOD").id,
        start = String(year[year.length - 1]-11),
        atable = ds.toTable(
            {type: 'arrobj', content: 'id'},
            function(d){
                if (d.TIME_PERIOD >= start){
                    return {area: d.COUNTRY, year: d.TIME_PERIOD, value: d.value};
                }
            }
        ),
        max = atable.filter(function(d){return d.year===start;})
        .sort(function(a,b) {
            return b.value-a.value;
        })
        .map(function(d) {
            return d.area;
        })
    ;

    atable.sort(function(a,b) {
        return max.indexOf(a.area)-max.indexOf(b.area);
    });

    for (var i=year.indexOf(start), len=year.length; i<len; i++) {
        var sel = (year[i] !== start) ? "" : ' class="selected"';
        lis += "<li"+sel+">"+year[i]+"</li>";
    }

    d3.select("#years").html(lis);

    var
        vScale = d3.scale.linear().domain([0,36]).range([10,width-100]).clamp(true),
        hScale = d3.scale.linear().domain([0,50]).range([0,400]).clamp(true),
        svg = d3.select("#bars").append("svg").attr("width", width).attr("height", height),
        li = d3.selectAll("#years li")
    ;

    li.on("click", function (d,i) {
        li.classed("selected",false);
        var sel = d3.select(this);
        sel.classed("selected",true);
        Bars(atable, sel.text());
    });

    Bars(atable, start);

    function descr(d) {
        return geo.Category(d.area).label+" "+Math.round(d.value*10)/10+"%";
    }

    function Bars(data,y) {
        var arr=[], j=0;
        for(var i=0; i<data.length;i++){
            if(data[i].year==y){
                arr.push({area: data[i].area, value: data[i].value, i: j++});
            }
        }
        var rect = svg.selectAll("rect").data(arr);
        
        rect.enter().append("rect")
            .attr("x", function(d,i){return vScale(i);})
            .attr("y", function(d,i){return height-25 -  hScale(d.value);})
            .attr("width",function(d,i){return ((width-2*margin)/arr.length)/2;})
            .attr("height",function(d,i){return hScale(d.value);})
            .attr("class","bar")
            .on("mouseover", function(d,i){d3.select(this).classed("over", true);})
            .on("mouseout", function(d,i){d3.select(this).classed("over",false);})
            .on("click", function(d,i){
                var sel=d3.select(this);
                sel.classed("selected",!sel.classed("selected"));
            })
            .append("title").text(function(d,i){return descr(d);})
            ;

        rect.transition().duration(2000)
            .attr("height",function(d,i){return hScale(d.value);})
            .attr("y", function(d,i){return height-25 -  hScale(d.value);})
            ;

        var titles=svg.selectAll("rect title").data(arr);
        titles.text(function(d,i){
            return descr(d);
        });

        arr.sort(function(a,b){return b.value-a.value});

        var labels=svg.selectAll("text").data(max);
        labels.enter().append("text")
            .attr("class",function(d,i){
                return (arr[0].i!==i)? "text" : "text max";
            })
            .attr("x", function(d,i){return vScale(i)+6;})
            .attr("y", 270)
            .attr("text-anchor","middle")
            .text(function(d,i){return d;})
            ;
        labels.transition().duration(0)
            .attr("class",function(d,i){
                return (arr[0].i!==i)? "text" : "text max";
            })
            ;
    }

});