/**
 * Created by konstantin on 9/20/16.
 */


$(function () {
    var availableTags = [
        "Arthas",
        "Thorgunner",
        "Ovi"
    ];
    $("#tags").autocomplete({
        source: availableTags,
        minLength: 2
    });
});

$(document).ready(function () {

    createHTML = function () {
        var data = [{
            Character: "D.Va",
            Change: " Defense Matrix After being activated, Defense Matrix will begin regenerating following a 1-second delay (formerly .5 seconds) Developer Comments: Defense Matrix was too efficient when tapped repeatedly, instead of being held. Now, the recovery delay matches the ability cooldown."
        }, {
            Character: "Hanzo",
            Change: "Hanzo will now experience a 30% decrease in speed while aiming (formerly 40%) Maximum projectile speed has been increased by 30%"
        }];
        var result = "<ul id ='patch'>";
        for (var i = 0; i < data.length; i++) {
            result += "<li>" + data[i].Character + "<br>" + data[i].Change + "</li>";
        }
        result += "</ul>";
        return result;
    };
    patchnotes = function () {
        var result = createHTML();
        $('#tracer').css('background-image', 'none');
        $('#hide').hide();
        $('.menu').hide();
        $('body').css({"background-color": "#ccf5ff"});
        $('body').append("<h2 id='requirement' title='Patchnotes'>hello</h2>");
        var title=document.getElementById('requirement');
        $('#requirement').text(title.getAttribute('title'));
        $('body').append(result);
        console.log(result);
    };
    search = function () {
        $('#tracer').css('background-image', 'url(killdeath.jpg)');
        $('#hide').hide();
        $('.menu').hide();
        $('body').append('<div id = success><h1><font size="48" color="red">Success!</font></h1>');
    };
    tracer = function () {
        $('#tracer').show();
        $('#tracer').css('background-image', 'url(tracer.jpg)');
        $('#table1').remove();
        $('#header').remove();
        $('#hide').show();
        $('.menu').show();
        $('#success').remove();
        $('body').css({"background-color": "black"});
        $('#patch').remove();
        $('#requirement').remove();
    };
    stats = function () {
        $('.menu').hide();
        $('#hide').hide();
        $('#tracer').css('background-image', 'url(killdeath.jpg)');
        $('body').append('<img id="header" src="killdeathtext.png" height="250" width="1000" >');
        $('body').append("<table id = table1><tr> <th>Top players:</th> <th>K/D ratio</th>" +
            "<th>Country</th> </tr> <tr> <td>Abrafo</td> <td>101/0</td> <td>Germany</td>" +
            " </tr> <tr> <td>Vehiron</td> <td>99/5</td> <td>Korea</td> </tr> <tr> <td>Dalek</td>" +
            " <td>99/7</td> <td>United States</td> </tr> <tr> <td>Alyameldir</td> <td>86/5</td> " +
            "<td>Korea</td> </tr> <tr> <td>Magne</td> <td>85/5</td> <td>Russia</td> </tr> <tr> <td>Alix</td> " +
            "<td>80/9</td> <td>United States</td> </tr> </table>");
        $('#table1').css({
            "font-family": "arial",
            "font-family": "sans-serif",
            "border-collapse": "collapse",
            "width": "100%",
            "background-color": "black",
            "color": "lime",
            "positive": "absolute",
            "top": "50%",

            "positive": "relative"
        });
        $('td').css({
            "border": "1px solid #dddddd",
            "text-align": "left",
            "padding": "8px"
        });
        $('th').css({
            "border": "1px solid #dddddd",
            "text-align": "left",
            "padding": "8px"
        });
    };
    history.pushState(
        //data
        //title
        //url
        'main',
        'My Page Title',
        'index.html'
    );
    window.addEventListener('popstate', function (e) {
        console.log(e);
        if (e.state === "main") {
            tracer();
        }
        if (e.state === "stats") {
            stats();
        }
        if (e.state === "search") {
            search();
        }
        if (e.state === "patchnotes") {
            patchnotes();
        }
    });

});


$(document).ready(function () {
    $("form").submit(function () {

        $(this).children('#in-between').remove();

    });
    $('#stats').click(function () {
        stats();
        history.pushState(
            //data
            //title
            //url
            'stats',
            'My Page Title',
            'page'
        );
    });
    $('#search').click(function () {
        search();
        history.pushState(
            //data
            //title
            //url
            'search',
            'My Page Title',
            'search'
        );

    });
    $('#patchnotes').click(function () {
        patchnotes();
        history.pushState(
            //data
            //title
            //url
            'patchnotes',
            'My Page Title',
            'patchnotes'
        );

    });

})
