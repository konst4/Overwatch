$(document).ready(function () {
    var x= {
        supportResponsive: true,
        //container: => use @default
        size: 600,
        //viewBoxSize: => use @default
        innerRadius: 600 / 3.5,
        //outerRadius: => use @default
        radiusMin: 50,

        //radiusMax: use @default
        //intersectDelta: use @default
        //intersectInc: use @default
        //circleColor: use @default

        data: {
            items: [

            ],
            eval: function (item) {


                    return item.count;

            },
            classed: function (item) {
                console.log(item.text);

                    return item.text.split(" ").join("");

            }
        },

        plugins: [
            {
                name: "central-click",
                options: {
                    text: "(See more detail)",
                    style: {
                        "font-size": "12px",
                        "font-style": "italic",
                        "font-family": "Source Sans Pro, sans-serif",
                        //"font-weight": "700",
                        "text-anchor": "middle",
                        "fill": "white"
                    },
                    attr: {dy: "65px"},
                    centralClick: function () {
                        alert("Here is more details!!");
                    }
                }
            },
            {
                name: "lines",
                options: {
                    format: [
                        {// Line #0
                            textField: "count",
                            classed: {count: true},
                            style: {
                                "font-size": "28px",
                                "font-family": "Source Sans Pro, sans-serif",
                                "text-anchor": "middle",
                                fill: "white"
                            },
                            attr: {
                                dy: "0px",
                                x: function (d) {
                                    return d.cx;
                                },
                                y: function (d) {
                                    return d.cy;
                                }
                            }
                        },
                        {// Line #1
                            textField: "text",
                            classed: {text: true},
                            style: {
                                "font-size": "14px",
                                "font-family": "Source Sans Pro, sans-serif",
                                "text-anchor": "middle",
                                fill: "white"
                            },
                            attr: {
                                dy: "20px",
                                x: function (d) {
                                    return d.cx;
                                },
                                y: function (d) {
                                    return d.cy;
                                }
                            }
                        }
                    ],
                    centralFormat: [
                        {// Line #0
                            style: {"font-size": "50px"},
                            attr: {}
                        },
                        {// Line #1
                            style: {"font-size": "30px"},
                            attr: {dy: "40px"}
                        }
                    ]
                }
            }]
    };


    function ajaxCallBack(retString) {
        var items = [];
        retString = JSON.parse(retString);
        console.log(retString);
        for (var i = 0; i < retString.length/3; i++) {
            retString[i].name;
            first = retString[i].playtime;
            second = first.split(" ");
            third = second[0].split("hours");

           items.push({

                count: third[0],
                text: retString[i].name
            })

        }

        x.data.items=items;
        console.log(x);
    }

    function ajax1() {
        return $.ajax({
            url: 'https://api.lootbox.eu/pc/us/Arthas-11308/quickplay/heroes',
            success: function (result) {
                ajaxCallBack(result);

            }

        });
    }

    console.log(x);
    $.when(ajax1()).done(function () {
        $('h1').html("Hours Played on Different champions");

        var bubbleChart = new d3.svg.BubbleChart(x);
});
});

