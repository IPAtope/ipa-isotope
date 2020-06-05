
// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.phoneme-item',
  // layoutMode: 'fitRows',

  layoutMode: 'packery',
  packery: {
    gutter: 8
  },
  stamp: '.stamp',

  getSortData: {
    name: '[name]',
    symbol: '.symbol',
    number: '.number parseInt',
    sonority: '.sonority parseFloat',
    category: '[data-category]',
    weight: function(itemElem) {
      var weight = $(itemElem).find('.weight').text();
      return parseFloat(weight.replace(/[\(\)]/g, ''));
    }
  }
});

// filter functions
var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
        var number = $(this).find('.number').text();
        return parseInt(number, 10) > 50;
    },
    // show if sonority is greater than 3
    sonGreaterThan5: function() {
        var number = $(this).find('.sonority').text();
        return parseFloat(number, 10) > 5;
    },
    // show if name ends with -ium
    ium: function() {
        var name = $(this).find('.name').text();
        return name.match(/ium$/);
    }
};

filters = {}
// bind filter button click
$('.filters').on('click', '.button', function(event) {
    // $checkbox = $(event.currentTarget);
    // $button = $checkbox.parent('.button');
    $button = $(event.currentTarget);
    // get group key
    var $buttonGroup = $button.parents('.button-group');
    var filterGroup = $buttonGroup.attr('data-filter-group');
    // set filter for group
    var filterValue = filters[filterGroup] = $button.attr('data-filter');
    // try to match function
    filters[filterGroup] = filterFns[filterValue] || filters[filterGroup];
    // combine filters
    if (filterValue in filterFns) {
        console.log(filterFns, filterValue);
        $grid.isotope({
            filter: filterFns[filterValue]
        });
    } else {
        $grid.isotope({
            filter: concatValues(filters)
        });
    }
    // set filter for Isotope

});

// change is-checked class on buttons
$('.button-group').each(function(i, buttonGroup) {
  var $buttonGroup = $(buttonGroup);
  $buttonGroup.on('click', '.button', function(event) {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    var $button = $(event.currentTarget);
    $button.addClass('is-checked');
  });
});

// bind sort button click
$('.sorters').on('click', '.button', function() {
  var sortByValue = $(this).attr('data-sort-by');
  $grid.isotope({
    sortBy: sortByValue
  });
});




    
        
            $('.button[data-filter~=".voiced,.vowel"]').hover(function(e) {
                $('.phoneme-item[class~="voiced"]').css('background', '#d1b2dc');
                $('.phoneme-item[class~="voiced"]').css('outline', '3px dashed #723c86');
                $('.phoneme-item[class~="voiced"]').css('text-shadow', '#eee 0px 0px 2px');
            }, function(e) {
                $('.phoneme-item[class~="voiced"]').css('background', 'hsla(244,30%,80%,0.1)');
                $('.phoneme-item[class~="voiced"]:not(.glass)').css('background', '');
                $('.phoneme-item[class~="voiced"]').css('outline', '');
                $('.phoneme-item[class~="voiced"]').css('text-shadow', '');
            });
        
            $('.button[data-filter~=".voiced,.vowel"]').hover(function(e) {
                $('.phoneme-item[class~="vowel"]').css('background', '#d1b2dc');
                $('.phoneme-item[class~="vowel"]').css('outline', '3px dashed #723c86');
                $('.phoneme-item[class~="vowel"]').css('text-shadow', '#eee 0px 0px 2px');
            }, function(e) {
                $('.phoneme-item[class~="vowel"]').css('background', 'hsla(244,30%,80%,0.1)');
                $('.phoneme-item[class~="vowel"]:not(.glass)').css('background', '');
                $('.phoneme-item[class~="vowel"]').css('outline', '');
                $('.phoneme-item[class~="vowel"]').css('text-shadow', '');
            });
        
    
        
            $('.button[data-filter~=".voiceless"]').hover(function(e) {
                $('.phoneme-item[class~="voiceless"]').css('background', '#d1b2dc');
                $('.phoneme-item[class~="voiceless"]').css('outline', '3px dashed #723c86');
                $('.phoneme-item[class~="voiceless"]').css('text-shadow', '#eee 0px 0px 2px');
            }, function(e) {
                $('.phoneme-item[class~="voiceless"]').css('background', 'hsla(244,30%,80%,0.1)');
                $('.phoneme-item[class~="voiceless"]:not(.glass)').css('background', '');
                $('.phoneme-item[class~="voiceless"]').css('outline', '');
                $('.phoneme-item[class~="voiceless"]').css('text-shadow', '');
            });
        
    

    
        
            $('.button[data-filter~=".glottal"]').hover(function(e) {
                $('.phoneme-item[class~="glottal"]').css('background', '#d1b2dc');
                $('.phoneme-item[class~="glottal"]').css('outline', '3px dashed #723c86');
                $('.phoneme-item[class~="glottal"]').css('text-shadow', '#eee 0px 0px 2px');
            }, function(e) {
                $('.phoneme-item[class~="glottal"]').css('background', 'hsla(244,30%,80%,0.1)');
                $('.phoneme-item[class~="glottal"]:not(.glass)').css('background', '');
                $('.phoneme-item[class~="glottal"]').css('outline', '');
                $('.phoneme-item[class~="glottal"]').css('text-shadow', '');
            });
        
    
        
            $('.button[data-filter~=".velar"]').hover(function(e) {
                $('.phoneme-item[class~="velar"]').css('background', '#d1b2dc');
                $('.phoneme-item[class~="velar"]').css('outline', '3px dashed #723c86');
                $('.phoneme-item[class~="velar"]').css('text-shadow', '#eee 0px 0px 2px');
            }, function(e) {
                $('.phoneme-item[class~="velar"]').css('background', 'hsla(244,30%,80%,0.1)');
                $('.phoneme-item[class~="velar"]:not(.glass)').css('background', '');
                $('.phoneme-item[class~="velar"]').css('outline', '');
                $('.phoneme-item[class~="velar"]').css('text-shadow', '');
            });
        
    
        
            $('.button[data-filter~=".uvular"]').hover(function(e) {
                $('.phoneme-item[class~="uvular"]').css('background', '#d1b2dc');
                $('.phoneme-item[class~="uvular"]').css('outline', '3px dashed #723c86');
                $('.phoneme-item[class~="uvular"]').css('text-shadow', '#eee 0px 0px 2px');
            }, function(e) {
                $('.phoneme-item[class~="uvular"]').css('background', 'hsla(244,30%,80%,0.1)');
                $('.phoneme-item[class~="uvular"]:not(.glass)').css('background', '');
                $('.phoneme-item[class~="uvular"]').css('outline', '');
                $('.phoneme-item[class~="uvular"]').css('text-shadow', '');
            });
        
    
        
            $('.button[data-filter~=".alveolar,.postalveolar,.alveolo-palatal,.palato-alveolar"]').hover(function(e) {
                $('.phoneme-item[class~="alveolar"]').css('background', '#d1b2dc');
                $('.phoneme-item[class~="alveolar"]').css('outline', '3px dashed #723c86');
                $('.phoneme-item[class~="alveolar"]').css('text-shadow', '#eee 0px 0px 2px');
            }, function(e) {
                $('.phoneme-item[class~="alveolar"]').css('background', 'hsla(244,30%,80%,0.1)');
                $('.phoneme-item[class~="alveolar"]:not(.glass)').css('background', '');
                $('.phoneme-item[class~="alveolar"]').css('outline', '');
                $('.phoneme-item[class~="alveolar"]').css('text-shadow', '');
            });
        
            $('.button[data-filter~=".alveolar,.postalveolar,.alveolo-palatal,.palato-alveolar"]').hover(function(e) {
                $('.phoneme-item[class~="postalveolar"]').css('background', '#d1b2dc');
                $('.phoneme-item[class~="postalveolar"]').css('outline', '3px dashed #723c86');
                $('.phoneme-item[class~="postalveolar"]').css('text-shadow', '#eee 0px 0px 2px');
            }, function(e) {
                $('.phoneme-item[class~="postalveolar"]').css('background', 'hsla(244,30%,80%,0.1)');
                $('.phoneme-item[class~="postalveolar"]:not(.glass)').css('background', '');
                $('.phoneme-item[class~="postalveolar"]').css('outline', '');
                $('.phoneme-item[class~="postalveolar"]').css('text-shadow', '');
            });
        
            $('.button[data-filter~=".alveolar,.postalveolar,.alveolo-palatal,.palato-alveolar"]').hover(function(e) {
                $('.phoneme-item[class~="alveolo-palatal"]').css('background', '#d1b2dc');
                $('.phoneme-item[class~="alveolo-palatal"]').css('outline', '3px dashed #723c86');
                $('.phoneme-item[class~="alveolo-palatal"]').css('text-shadow', '#eee 0px 0px 2px');
            }, function(e) {
                $('.phoneme-item[class~="alveolo-palatal"]').css('background', 'hsla(244,30%,80%,0.1)');
                $('.phoneme-item[class~="alveolo-palatal"]:not(.glass)').css('background', '');
                $('.phoneme-item[class~="alveolo-palatal"]').css('outline', '');
                $('.phoneme-item[class~="alveolo-palatal"]').css('text-shadow', '');
            });
        
            $('.button[data-filter~=".alveolar,.postalveolar,.alveolo-palatal,.palato-alveolar"]').hover(function(e) {
                $('.phoneme-item[class~="palato-alveolar"]').css('background', '#d1b2dc');
                $('.phoneme-item[class~="palato-alveolar"]').css('outline', '3px dashed #723c86');
                $('.phoneme-item[class~="palato-alveolar"]').css('text-shadow', '#eee 0px 0px 2px');
            }, function(e) {
                $('.phoneme-item[class~="palato-alveolar"]').css('background', 'hsla(244,30%,80%,0.1)');
                $('.phoneme-item[class~="palato-alveolar"]:not(.glass)').css('background', '');
                $('.phoneme-item[class~="palato-alveolar"]').css('outline', '');
                $('.phoneme-item[class~="palato-alveolar"]').css('text-shadow', '');
            });
        
    
        
            $('.button[data-filter~=".palatal,.palato-alveolar,.alveolo-palatar,.palatalised,.labial-palatal"]').hover(function(e) {
                $('.phoneme-item[class~="palatal"]').css('background', '#d1b2dc');
                $('.phoneme-item[class~="palatal"]').css('outline', '3px dashed #723c86');
                $('.phoneme-item[class~="palatal"]').css('text-shadow', '#eee 0px 0px 2px');
            }, function(e) {
                $('.phoneme-item[class~="palatal"]').css('background', 'hsla(244,30%,80%,0.1)');
                $('.phoneme-item[class~="palatal"]:not(.glass)').css('background', '');
                $('.phoneme-item[class~="palatal"]').css('outline', '');
                $('.phoneme-item[class~="palatal"]').css('text-shadow', '');
            });
        
            $('.button[data-filter~=".palatal,.palato-alveolar,.alveolo-palatar,.palatalised,.labial-palatal"]').hover(function(e) {
                $('.phoneme-item[class~="palato-alveolar"]').css('background', '#d1b2dc');
                $('.phoneme-item[class~="palato-alveolar"]').css('outline', '3px dashed #723c86');
                $('.phoneme-item[class~="palato-alveolar"]').css('text-shadow', '#eee 0px 0px 2px');
            }, function(e) {
                $('.phoneme-item[class~="palato-alveolar"]').css('background', 'hsla(244,30%,80%,0.1)');
                $('.phoneme-item[class~="palato-alveolar"]:not(.glass)').css('background', '');
                $('.phoneme-item[class~="palato-alveolar"]').css('outline', '');
                $('.phoneme-item[class~="palato-alveolar"]').css('text-shadow', '');
            });
        
            $('.button[data-filter~=".palatal,.palato-alveolar,.alveolo-palatar,.palatalised,.labial-palatal"]').hover(function(e) {
                $('.phoneme-item[class~="alveolo-palatar"]').css('background', '#d1b2dc');
                $('.phoneme-item[class~="alveolo-palatar"]').css('outline', '3px dashed #723c86');
                $('.phoneme-item[class~="alveolo-palatar"]').css('text-shadow', '#eee 0px 0px 2px');
            }, function(e) {
                $('.phoneme-item[class~="alveolo-palatar"]').css('background', 'hsla(244,30%,80%,0.1)');
                $('.phoneme-item[class~="alveolo-palatar"]:not(.glass)').css('background', '');
                $('.phoneme-item[class~="alveolo-palatar"]').css('outline', '');
                $('.phoneme-item[class~="alveolo-palatar"]').css('text-shadow', '');
            });
        
            $('.button[data-filter~=".palatal,.palato-alveolar,.alveolo-palatar,.palatalised,.labial-palatal"]').hover(function(e) {
                $('.phoneme-item[class~="palatalised"]').css('background', '#d1b2dc');
                $('.phoneme-item[class~="palatalised"]').css('outline', '3px dashed #723c86');
                $('.phoneme-item[class~="palatalised"]').css('text-shadow', '#eee 0px 0px 2px');
            }, function(e) {
                $('.phoneme-item[class~="palatalised"]').css('background', 'hsla(244,30%,80%,0.1)');
                $('.phoneme-item[class~="palatalised"]:not(.glass)').css('background', '');
                $('.phoneme-item[class~="palatalised"]').css('outline', '');
                $('.phoneme-item[class~="palatalised"]').css('text-shadow', '');
            });
        
            $('.button[data-filter~=".palatal,.palato-alveolar,.alveolo-palatar,.palatalised,.labial-palatal"]').hover(function(e) {
                $('.phoneme-item[class~="labial-palatal"]').css('background', '#d1b2dc');
                $('.phoneme-item[class~="labial-palatal"]').css('outline', '3px dashed #723c86');
                $('.phoneme-item[class~="labial-palatal"]').css('text-shadow', '#eee 0px 0px 2px');
            }, function(e) {
                $('.phoneme-item[class~="labial-palatal"]').css('background', 'hsla(244,30%,80%,0.1)');
                $('.phoneme-item[class~="labial-palatal"]:not(.glass)').css('background', '');
                $('.phoneme-item[class~="labial-palatal"]').css('outline', '');
                $('.phoneme-item[class~="labial-palatal"]').css('text-shadow', '');
            });
        
    
        
            $('.button[data-filter~=".labial,.bilabial,.labiodental,.labiovelar,.labial-palatal"]').hover(function(e) {
                $('.phoneme-item[class~="labial"]').css('background', '#d1b2dc');
                $('.phoneme-item[class~="labial"]').css('outline', '3px dashed #723c86');
                $('.phoneme-item[class~="labial"]').css('text-shadow', '#eee 0px 0px 2px');
            }, function(e) {
                $('.phoneme-item[class~="labial"]').css('background', 'hsla(244,30%,80%,0.1)');
                $('.phoneme-item[class~="labial"]:not(.glass)').css('background', '');
                $('.phoneme-item[class~="labial"]').css('outline', '');
                $('.phoneme-item[class~="labial"]').css('text-shadow', '');
            });
        
            $('.button[data-filter~=".labial,.bilabial,.labiodental,.labiovelar,.labial-palatal"]').hover(function(e) {
                $('.phoneme-item[class~="bilabial"]').css('background', '#d1b2dc');
                $('.phoneme-item[class~="bilabial"]').css('outline', '3px dashed #723c86');
                $('.phoneme-item[class~="bilabial"]').css('text-shadow', '#eee 0px 0px 2px');
            }, function(e) {
                $('.phoneme-item[class~="bilabial"]').css('background', 'hsla(244,30%,80%,0.1)');
                $('.phoneme-item[class~="bilabial"]:not(.glass)').css('background', '');
                $('.phoneme-item[class~="bilabial"]').css('outline', '');
                $('.phoneme-item[class~="bilabial"]').css('text-shadow', '');
            });
        
            $('.button[data-filter~=".labial,.bilabial,.labiodental,.labiovelar,.labial-palatal"]').hover(function(e) {
                $('.phoneme-item[class~="labiodental"]').css('background', '#d1b2dc');
                $('.phoneme-item[class~="labiodental"]').css('outline', '3px dashed #723c86');
                $('.phoneme-item[class~="labiodental"]').css('text-shadow', '#eee 0px 0px 2px');
            }, function(e) {
                $('.phoneme-item[class~="labiodental"]').css('background', 'hsla(244,30%,80%,0.1)');
                $('.phoneme-item[class~="labiodental"]:not(.glass)').css('background', '');
                $('.phoneme-item[class~="labiodental"]').css('outline', '');
                $('.phoneme-item[class~="labiodental"]').css('text-shadow', '');
            });
        
            $('.button[data-filter~=".labial,.bilabial,.labiodental,.labiovelar,.labial-palatal"]').hover(function(e) {
                $('.phoneme-item[class~="labiovelar"]').css('background', '#d1b2dc');
                $('.phoneme-item[class~="labiovelar"]').css('outline', '3px dashed #723c86');
                $('.phoneme-item[class~="labiovelar"]').css('text-shadow', '#eee 0px 0px 2px');
            }, function(e) {
                $('.phoneme-item[class~="labiovelar"]').css('background', 'hsla(244,30%,80%,0.1)');
                $('.phoneme-item[class~="labiovelar"]:not(.glass)').css('background', '');
                $('.phoneme-item[class~="labiovelar"]').css('outline', '');
                $('.phoneme-item[class~="labiovelar"]').css('text-shadow', '');
            });
        
            $('.button[data-filter~=".labial,.bilabial,.labiodental,.labiovelar,.labial-palatal"]').hover(function(e) {
                $('.phoneme-item[class~="labial-palatal"]').css('background', '#d1b2dc');
                $('.phoneme-item[class~="labial-palatal"]').css('outline', '3px dashed #723c86');
                $('.phoneme-item[class~="labial-palatal"]').css('text-shadow', '#eee 0px 0px 2px');
            }, function(e) {
                $('.phoneme-item[class~="labial-palatal"]').css('background', 'hsla(244,30%,80%,0.1)');
                $('.phoneme-item[class~="labial-palatal"]:not(.glass)').css('background', '');
                $('.phoneme-item[class~="labial-palatal"]').css('outline', '');
                $('.phoneme-item[class~="labial-palatal"]').css('text-shadow', '');
            });
        
    
        
            $('.button[data-filter~=".dental,.labiodental"]').hover(function(e) {
                $('.phoneme-item[class~="dental"]').css('background', '#d1b2dc');
                $('.phoneme-item[class~="dental"]').css('outline', '3px dashed #723c86');
                $('.phoneme-item[class~="dental"]').css('text-shadow', '#eee 0px 0px 2px');
            }, function(e) {
                $('.phoneme-item[class~="dental"]').css('background', 'hsla(244,30%,80%,0.1)');
                $('.phoneme-item[class~="dental"]:not(.glass)').css('background', '');
                $('.phoneme-item[class~="dental"]').css('outline', '');
                $('.phoneme-item[class~="dental"]').css('text-shadow', '');
            });
        
            $('.button[data-filter~=".dental,.labiodental"]').hover(function(e) {
                $('.phoneme-item[class~="labiodental"]').css('background', '#d1b2dc');
                $('.phoneme-item[class~="labiodental"]').css('outline', '3px dashed #723c86');
                $('.phoneme-item[class~="labiodental"]').css('text-shadow', '#eee 0px 0px 2px');
            }, function(e) {
                $('.phoneme-item[class~="labiodental"]').css('background', 'hsla(244,30%,80%,0.1)');
                $('.phoneme-item[class~="labiodental"]:not(.glass)').css('background', '');
                $('.phoneme-item[class~="labiodental"]').css('outline', '');
                $('.phoneme-item[class~="labiodental"]').css('text-shadow', '');
            });
        
    
        
            $('.button[data-filter~=".nasal"]').hover(function(e) {
                $('.phoneme-item[class~="nasal"]').css('background', '#d1b2dc');
                $('.phoneme-item[class~="nasal"]').css('outline', '3px dashed #723c86');
                $('.phoneme-item[class~="nasal"]').css('text-shadow', '#eee 0px 0px 2px');
            }, function(e) {
                $('.phoneme-item[class~="nasal"]').css('background', 'hsla(244,30%,80%,0.1)');
                $('.phoneme-item[class~="nasal"]:not(.glass)').css('background', '');
                $('.phoneme-item[class~="nasal"]').css('outline', '');
                $('.phoneme-item[class~="nasal"]').css('text-shadow', '');
            });
        
    

    
        
            $('.button[data-filter~=".stop,.plosive"]').hover(function(e) {
                $('.phoneme-item[class~="stop"]').css('background', '#d1b2dc');
                $('.phoneme-item[class~="stop"]').css('outline', '3px dashed #723c86');
                $('.phoneme-item[class~="stop"]').css('text-shadow', '#eee 0px 0px 2px');
            }, function(e) {
                $('.phoneme-item[class~="stop"]').css('background', 'hsla(244,30%,80%,0.1)');
                $('.phoneme-item[class~="stop"]:not(.glass)').css('background', '');
                $('.phoneme-item[class~="stop"]').css('outline', '');
                $('.phoneme-item[class~="stop"]').css('text-shadow', '');
            });
        
            $('.button[data-filter~=".stop,.plosive"]').hover(function(e) {
                $('.phoneme-item[class~="plosive"]').css('background', '#d1b2dc');
                $('.phoneme-item[class~="plosive"]').css('outline', '3px dashed #723c86');
                $('.phoneme-item[class~="plosive"]').css('text-shadow', '#eee 0px 0px 2px');
            }, function(e) {
                $('.phoneme-item[class~="plosive"]').css('background', 'hsla(244,30%,80%,0.1)');
                $('.phoneme-item[class~="plosive"]:not(.glass)').css('background', '');
                $('.phoneme-item[class~="plosive"]').css('outline', '');
                $('.phoneme-item[class~="plosive"]').css('text-shadow', '');
            });
        
    
        
            $('.button[data-filter~=".trill"]').hover(function(e) {
                $('.phoneme-item[class~="trill"]').css('background', '#d1b2dc');
                $('.phoneme-item[class~="trill"]').css('outline', '3px dashed #723c86');
                $('.phoneme-item[class~="trill"]').css('text-shadow', '#eee 0px 0px 2px');
            }, function(e) {
                $('.phoneme-item[class~="trill"]').css('background', 'hsla(244,30%,80%,0.1)');
                $('.phoneme-item[class~="trill"]:not(.glass)').css('background', '');
                $('.phoneme-item[class~="trill"]').css('outline', '');
                $('.phoneme-item[class~="trill"]').css('text-shadow', '');
            });
        
    
        
            $('.button[data-filter~=".tap,.flap"]').hover(function(e) {
                $('.phoneme-item[class~="tap"]').css('background', '#d1b2dc');
                $('.phoneme-item[class~="tap"]').css('outline', '3px dashed #723c86');
                $('.phoneme-item[class~="tap"]').css('text-shadow', '#eee 0px 0px 2px');
            }, function(e) {
                $('.phoneme-item[class~="tap"]').css('background', 'hsla(244,30%,80%,0.1)');
                $('.phoneme-item[class~="tap"]:not(.glass)').css('background', '');
                $('.phoneme-item[class~="tap"]').css('outline', '');
                $('.phoneme-item[class~="tap"]').css('text-shadow', '');
            });
        
            $('.button[data-filter~=".tap,.flap"]').hover(function(e) {
                $('.phoneme-item[class~="flap"]').css('background', '#d1b2dc');
                $('.phoneme-item[class~="flap"]').css('outline', '3px dashed #723c86');
                $('.phoneme-item[class~="flap"]').css('text-shadow', '#eee 0px 0px 2px');
            }, function(e) {
                $('.phoneme-item[class~="flap"]').css('background', 'hsla(244,30%,80%,0.1)');
                $('.phoneme-item[class~="flap"]:not(.glass)').css('background', '');
                $('.phoneme-item[class~="flap"]').css('outline', '');
                $('.phoneme-item[class~="flap"]').css('text-shadow', '');
            });
        
    
        
            $('.button[data-filter~=".lateral"]').hover(function(e) {
                $('.phoneme-item[class~="lateral"]').css('background', '#d1b2dc');
                $('.phoneme-item[class~="lateral"]').css('outline', '3px dashed #723c86');
                $('.phoneme-item[class~="lateral"]').css('text-shadow', '#eee 0px 0px 2px');
            }, function(e) {
                $('.phoneme-item[class~="lateral"]').css('background', 'hsla(244,30%,80%,0.1)');
                $('.phoneme-item[class~="lateral"]:not(.glass)').css('background', '');
                $('.phoneme-item[class~="lateral"]').css('outline', '');
                $('.phoneme-item[class~="lateral"]').css('text-shadow', '');
            });
        
    
        
            $('.button[data-filter~=".fricative"]').hover(function(e) {
                $('.phoneme-item[class~="fricative"]').css('background', '#d1b2dc');
                $('.phoneme-item[class~="fricative"]').css('outline', '3px dashed #723c86');
                $('.phoneme-item[class~="fricative"]').css('text-shadow', '#eee 0px 0px 2px');
            }, function(e) {
                $('.phoneme-item[class~="fricative"]').css('background', 'hsla(244,30%,80%,0.1)');
                $('.phoneme-item[class~="fricative"]:not(.glass)').css('background', '');
                $('.phoneme-item[class~="fricative"]').css('outline', '');
                $('.phoneme-item[class~="fricative"]').css('text-shadow', '');
            });
        
    
        
            $('.button[data-filter~=".affricate"]').hover(function(e) {
                $('.phoneme-item[class~="affricate"]').css('background', '#d1b2dc');
                $('.phoneme-item[class~="affricate"]').css('outline', '3px dashed #723c86');
                $('.phoneme-item[class~="affricate"]').css('text-shadow', '#eee 0px 0px 2px');
            }, function(e) {
                $('.phoneme-item[class~="affricate"]').css('background', 'hsla(244,30%,80%,0.1)');
                $('.phoneme-item[class~="affricate"]:not(.glass)').css('background', '');
                $('.phoneme-item[class~="affricate"]').css('outline', '');
                $('.phoneme-item[class~="affricate"]').css('text-shadow', '');
            });
        
    
        
            $('.button[data-filter~=".sibilant"]').hover(function(e) {
                $('.phoneme-item[class~="sibilant"]').css('background', '#d1b2dc');
                $('.phoneme-item[class~="sibilant"]').css('outline', '3px dashed #723c86');
                $('.phoneme-item[class~="sibilant"]').css('text-shadow', '#eee 0px 0px 2px');
            }, function(e) {
                $('.phoneme-item[class~="sibilant"]').css('background', 'hsla(244,30%,80%,0.1)');
                $('.phoneme-item[class~="sibilant"]:not(.glass)').css('background', '');
                $('.phoneme-item[class~="sibilant"]').css('outline', '');
                $('.phoneme-item[class~="sibilant"]').css('text-shadow', '');
            });
        
    
        
            $('.button[data-filter~=".approximant"]').hover(function(e) {
                $('.phoneme-item[class~="approximant"]').css('background', '#d1b2dc');
                $('.phoneme-item[class~="approximant"]').css('outline', '3px dashed #723c86');
                $('.phoneme-item[class~="approximant"]').css('text-shadow', '#eee 0px 0px 2px');
            }, function(e) {
                $('.phoneme-item[class~="approximant"]').css('background', 'hsla(244,30%,80%,0.1)');
                $('.phoneme-item[class~="approximant"]:not(.glass)').css('background', '');
                $('.phoneme-item[class~="approximant"]').css('outline', '');
                $('.phoneme-item[class~="approximant"]').css('text-shadow', '');
            });
        
    
        
            $('.button[data-filter~=".vowel"]').hover(function(e) {
                $('.phoneme-item[class~="vowel"]').css('background', '#d1b2dc');
                $('.phoneme-item[class~="vowel"]').css('outline', '3px dashed #723c86');
                $('.phoneme-item[class~="vowel"]').css('text-shadow', '#eee 0px 0px 2px');
            }, function(e) {
                $('.phoneme-item[class~="vowel"]').css('background', 'hsla(244,30%,80%,0.1)');
                $('.phoneme-item[class~="vowel"]:not(.glass)').css('background', '');
                $('.phoneme-item[class~="vowel"]').css('outline', '');
                $('.phoneme-item[class~="vowel"]').css('text-shadow', '');
            });
        
    

    
        
            $('.button[data-filter~="sonGreaterThan5"]').hover(function(e) {
                $('.phoneme-item[class~="onGreaterThan5"]').css('background', '#d1b2dc');
                $('.phoneme-item[class~="onGreaterThan5"]').css('outline', '3px dashed #723c86');
                $('.phoneme-item[class~="onGreaterThan5"]').css('text-shadow', '#eee 0px 0px 2px');
            }, function(e) {
                $('.phoneme-item[class~="onGreaterThan5"]').css('background', 'hsla(244,30%,80%,0.1)');
                $('.phoneme-item[class~="onGreaterThan5"]:not(.glass)').css('background', '');
                $('.phoneme-item[class~="onGreaterThan5"]').css('outline', '');
                $('.phoneme-item[class~="onGreaterThan5"]').css('text-shadow', '');
            });
        
    



$('.play').on('click', function(e) {
    var symb = $(this).parent('.phoneme-item').find('.symbol').text();
	console.log('attempting to play', symb);
    process(symb);
})


// packery --------------------

$('.ui-group').packery({
  itemSelector: '.ui-group-item',
  gutter: 1,
  percentPosition: true
});


// collection of Draggabillies
var draggies = [];
var isDrag = false;

// make all grid-items draggable
$grid.find('.phoneme-item').each(function(i, gridItem) {
  var draggie = new Draggabilly(gridItem, {handle: '.handle'});
  draggies.push(draggie);
  // bind drag events to Packery
  // $grid.packery( 'bindDraggabillyEvents', draggie );
});


// utils ----------------

let f = (a, b) => [].concat(...a.map(a => b.map(b => [].concat(a, b))));
let cartesian = (a, b, ...c) => b ? cartesian(f(a, b), ...c) : a;


// flatten object by concatting values, making sure to apply demorgans laws ','
function concatValues(obj) {

  value = "";
  for (var prop in obj) {
    var parts = obj[prop].split(",");
    var vals = value.split(",");
    var newvals = cartesian(parts, vals);

    value = newvals.map(x => concatArr(x)).join(',');
  }

  return value;
}

// flatten object by concatting values
function concatArr(arr) {
  var value = '';
  for (var v in arr) {
    value += arr[v];
  }
  return value;
}


$('.tip').delay(5000).fadeOut('slow');

// --------------- URL __hash__
// function getHashFilter() {
//   var hash = location.hash;
//   // get filter=filterName
//   var matches = location.hash.match( /filter=([^&]+)/i );
//   var hashFilter = matches && matches[1];
//   return hashFilter && decodeURIComponent( hashFilter );
// }
//
// $( function() {
//
//   var $grid = $('.isotope');
//
//   // bind filter button click
//   var $filters = $('.filters').on( 'click', '.button', function() {
//     var filterAttr = $( this ).attr('data-filter');
//     // set filter in hash
//     location.hash = 'filter=' + encodeURIComponent( filterAttr );
//   });
//
//   var isIsotopeInit = false;
//
//   function onHashchange() {
//     var hashFilter = getHashFilter();
//     if ( !hashFilter && isIsotopeInit ) {
//       return;
//     }
//     isIsotopeInit = true;
//     // filter isotope
//     $grid.isotope({
//       itemSelector: '.phoneme-item',
//       filter: hashFilter
//     });
//     // set selected class on button
//     if ( hashFilter ) {
//       $filters.find('.is-checked').removeClass('is-checked');
//       $filters.find('[data-filter="' + hashFilter + '"]').addClass('is-checked');
//     }
//   }
//
//   $(window).on( 'hashchange', onHashchange );
//   // trigger event handler to init Isotope
//   onHashchange();
// });