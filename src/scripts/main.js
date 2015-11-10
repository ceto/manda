'use strict';


$(document).ready(function() {



  var bestPictures = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    prefetch: './assets/data/oscar.json',
    // remote: {
    //   url: './assets/data/queries/%QUERY.json',
    //   wildcard: '%QUERY'
    // }
  });

  $('.typeahead').typeahead({
    minLength: 1
  },
  {
    name: 'best-pictures',
    display: 'value',
    source: bestPictures
  });


  $('#go').click( function(e) {
    if ( $('.header-search-input').val()==='') {
      e.preventDefault();
      $('.header-search').toggleClass('is_open');
    }

    if ( $('.header-search').hasClass('is_open')) {
      $('.header-search-input').focus();
    }

  });


  $( '.datepicker' ).datepicker({
    altField: "#actualDate"
  });

});




