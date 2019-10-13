/* global $, mermaid */
$(document).ready(function() {
    var GLOBAL = window;
    const xhr = new XMLHttpRequest()
    xhr.open("GET", "https://api.github.com/repos/jacebenson/workflow/contents/public/mmd", true, null, null)
    xhr.send()
    xhr.onload = function() {
        //       console.log(this.response);
        var responseObj = JSON.parse(this.response);
        console.log(responseObj);
        responseObj.forEach(function(graph) {
            var element = new Option(graph.name, graph.path.split('public/')[1]);
            $("#type").append(element);
        });
    }
    GLOBAL.cb = function(svgGraph) {
        $('#chart').append('<div class="mermaid"></div>');
        $('.mermaid').html(svgGraph);
    };
    mermaid.ganttConfig = {
        axisFormatter: [
            ['%-m/%-d', function(d) {
                return d.getDay() === 1;
            }]
        ]
    };
    GLOBAL.renderLive = function() {
        if ($('#live').val() === 'yes') {
            GLOBAL.render();
        }
    };
    GLOBAL.render = function() {
        $('#chart').html('');
        GLOBAL.mermaidSyntax = $('#mermaid-syntax').val().replace(/(\s)+\n/gm, `\n`);
        var matches = GLOBAL.mermaidSyntax.match(/\n/g);
        var breaks = matches ? matches.length : 2;
        $('#mermaid-syntax').attr('rows', breaks + 2);
        if (mermaid.parse(GLOBAL.mermaidSyntax)) {
            $('#info').text('');
            mermaid.render('mermaid', GLOBAL.mermaidSyntax, GLOBAL.cb);
        }
    };
    mermaid.parseError = function(err, hash) {
        var error = err.replace(/\n/g, '<br/>').split('^')[0] + '^';
        $('#info').html(error);
    };

    // onkeyup rerender
    $('#mermaid-syntax').keyup(function() {
        GLOBAL.renderLive();
    });

    $('#type').change(function() {
        var flow = $('#type').val().split('/')[1].split('.mmd')[0];
        console.log(flow);
        window.history.pushState('page2', 'Title', GLOBAL.replaceQueryParam('flow', flow, window.location.search));
        $.get($('#type').val(), function(data) {
            $('#mermaid-syntax').val(data + '\n');
            GLOBAL.render();
        });
        // $('#mermaid-syntax').val(example[$('#type').val()]);
    });

    // force update
    $('#update').click(function() {
        GLOBAL.render();
    });

    // resize
    $('#resize').click(function() {
        $('#left').toggleClass('col-6');
        $('#left').toggleClass('d-none');
        $('#right').toggleClass('col-6');
        $('#right').toggleClass('col-12');
        GLOBAL.render();
    });
    GLOBAL.getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1));
        var sURLVariables = sPageURL.split('&');
        var sParameterName;

        for (var i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    };
    GLOBAL.replaceQueryParam = function(param, newval, search) {
        var regex = new RegExp('([?;&])' + param + '[^&;]*[;&]?');
        var query = search.replace(regex, '$1').replace(/&$/, '');

        return (query.length > 2 ? query + '&' : '?') + (newval ? param + '=' + newval : '');
    };
    if (GLOBAL.getUrlParameter('flow')) {
        $('#type').val('mmd/' + GLOBAL.getUrlParameter('flow') + '.mmd');
        $.get('mmd/' + GLOBAL.getUrlParameter('flow') + '.mmd', function(data) {
            $('#mermaid-syntax').val(data + '\n');
            GLOBAL.render();
        });
    }

});