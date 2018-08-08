/* global $, mermaid */
$(document).ready(function () {
  var GLOBAL = window;
  GLOBAL.cb = function (svgGraph) {
    $('#chart').append('<div class="mermaid"></div>');
    $('.mermaid').html(svgGraph);
  };
  mermaid.ganttConfig = {
    axisFormatter: [
      ['%-m/%-d', function (d) {
        return d.getDay() === 1;
      }]
    ]
  };
  GLOBAL.render = function () {
    $('#chart').html('');
    GLOBAL.mermaidSyntax = $('#mermaid-syntax').val();
    // GLOBAL.mermaidSyntax =
    var matches = GLOBAL.mermaidSyntax.match(/\n/g);
    var breaks = matches ? matches.length : 2;
    $('#mermaid-syntax').attr('rows', breaks + 2);
    if (mermaid.parse(GLOBAL.mermaidSyntax)) {
      $('#info').text('');
      mermaid.render('mermaid', GLOBAL.mermaidSyntax, GLOBAL.cb);
    }
  };
  mermaid.parseError = function (err, hash) {
    var error = err.replace(/\n/g, '<br/>').split('^')[0] + '^';
    $('#info').html(error);
  };

  // onkeyup rerender
  $('#mermaid-syntax').keyup(function () {
    GLOBAL.render();
  });

  $('#type').change(function () {
    $.get($('#type').val(), function (data) {
      $('#mermaid-syntax').val(data + '\n');
      GLOBAL.render();
    });
    // $('#mermaid-syntax').val(example[$('#type').val()]);
  });

  // resize
  $('#resize').click(function () {
    $('#left').toggleClass('col-6');
    $('#left').toggleClass('d-none');
    $('#right').toggleClass('col-6');
    $('#right').toggleClass('col-12');
  });
});
