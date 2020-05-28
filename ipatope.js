
// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.phoneme-item',
  // layoutMode: 'fitRows',

  layoutMode: 'packery',
  packery: {
    gutter: 2
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
                $('.phoneme-item[class~="voiced"]').css('outline', '2.5px dashed #444');
                $(this).css('outline', '1px dashed #444');
            }, function(e) {
                $('.phoneme-item[class~="voiced"]').css('outline', '');
                $(this).css('outline', '');
            });
        
            $('.button[data-filter~=".voiced,.vowel"]').hover(function(e) {
                $('.phoneme-item[class~="vowel"]').css('outline', '2.5px dashed #444');
                $(this).css('outline', '1px dashed #444');
            }, function(e) {
                $('.phoneme-item[class~="vowel"]').css('outline', '');
                $(this).css('outline', '');
            });
        
    
        
            $('.button[data-filter~=".voiceless"]').hover(function(e) {
                $('.phoneme-item[class~="voiceless"]').css('outline', '2.5px dashed #444');
                $(this).css('outline', '1px dashed #444');
            }, function(e) {
                $('.phoneme-item[class~="voiceless"]').css('outline', '');
                $(this).css('outline', '');
            });
        
    

    
        
            $('.button[data-filter~=".glottal"]').hover(function(e) {
                $('.phoneme-item[class~="glottal"]').css('outline', '2.5px dashed #444');
                $(this).css('outline', '1px dashed #444');
            }, function(e) {
                $('.phoneme-item[class~="glottal"]').css('outline', '');
                $(this).css('outline', '');
            });
        
    
        
            $('.button[data-filter~=".velar"]').hover(function(e) {
                $('.phoneme-item[class~="velar"]').css('outline', '2.5px dashed #444');
                $(this).css('outline', '1px dashed #444');
            }, function(e) {
                $('.phoneme-item[class~="velar"]').css('outline', '');
                $(this).css('outline', '');
            });
        
    
        
            $('.button[data-filter~=".uvular"]').hover(function(e) {
                $('.phoneme-item[class~="uvular"]').css('outline', '2.5px dashed #444');
                $(this).css('outline', '1px dashed #444');
            }, function(e) {
                $('.phoneme-item[class~="uvular"]').css('outline', '');
                $(this).css('outline', '');
            });
        
    
        
            $('.button[data-filter~=".alveolar,.postalveolar,.alveolo-palatal,.palato-alveolar"]').hover(function(e) {
                $('.phoneme-item[class~="alveolar"]').css('outline', '2.5px dashed #444');
                $(this).css('outline', '1px dashed #444');
            }, function(e) {
                $('.phoneme-item[class~="alveolar"]').css('outline', '');
                $(this).css('outline', '');
            });
        
            $('.button[data-filter~=".alveolar,.postalveolar,.alveolo-palatal,.palato-alveolar"]').hover(function(e) {
                $('.phoneme-item[class~="postalveolar"]').css('outline', '2.5px dashed #444');
                $(this).css('outline', '1px dashed #444');
            }, function(e) {
                $('.phoneme-item[class~="postalveolar"]').css('outline', '');
                $(this).css('outline', '');
            });
        
            $('.button[data-filter~=".alveolar,.postalveolar,.alveolo-palatal,.palato-alveolar"]').hover(function(e) {
                $('.phoneme-item[class~="alveolo-palatal"]').css('outline', '2.5px dashed #444');
                $(this).css('outline', '1px dashed #444');
            }, function(e) {
                $('.phoneme-item[class~="alveolo-palatal"]').css('outline', '');
                $(this).css('outline', '');
            });
        
            $('.button[data-filter~=".alveolar,.postalveolar,.alveolo-palatal,.palato-alveolar"]').hover(function(e) {
                $('.phoneme-item[class~="palato-alveolar"]').css('outline', '2.5px dashed #444');
                $(this).css('outline', '1px dashed #444');
            }, function(e) {
                $('.phoneme-item[class~="palato-alveolar"]').css('outline', '');
                $(this).css('outline', '');
            });
        
    
        
            $('.button[data-filter~=".palatal,.palato-alveolar,.alveolo-palatar,.palatalised,.labial-palatal"]').hover(function(e) {
                $('.phoneme-item[class~="palatal"]').css('outline', '2.5px dashed #444');
                $(this).css('outline', '1px dashed #444');
            }, function(e) {
                $('.phoneme-item[class~="palatal"]').css('outline', '');
                $(this).css('outline', '');
            });
        
            $('.button[data-filter~=".palatal,.palato-alveolar,.alveolo-palatar,.palatalised,.labial-palatal"]').hover(function(e) {
                $('.phoneme-item[class~="palato-alveolar"]').css('outline', '2.5px dashed #444');
                $(this).css('outline', '1px dashed #444');
            }, function(e) {
                $('.phoneme-item[class~="palato-alveolar"]').css('outline', '');
                $(this).css('outline', '');
            });
        
            $('.button[data-filter~=".palatal,.palato-alveolar,.alveolo-palatar,.palatalised,.labial-palatal"]').hover(function(e) {
                $('.phoneme-item[class~="alveolo-palatar"]').css('outline', '2.5px dashed #444');
                $(this).css('outline', '1px dashed #444');
            }, function(e) {
                $('.phoneme-item[class~="alveolo-palatar"]').css('outline', '');
                $(this).css('outline', '');
            });
        
            $('.button[data-filter~=".palatal,.palato-alveolar,.alveolo-palatar,.palatalised,.labial-palatal"]').hover(function(e) {
                $('.phoneme-item[class~="palatalised"]').css('outline', '2.5px dashed #444');
                $(this).css('outline', '1px dashed #444');
            }, function(e) {
                $('.phoneme-item[class~="palatalised"]').css('outline', '');
                $(this).css('outline', '');
            });
        
            $('.button[data-filter~=".palatal,.palato-alveolar,.alveolo-palatar,.palatalised,.labial-palatal"]').hover(function(e) {
                $('.phoneme-item[class~="labial-palatal"]').css('outline', '2.5px dashed #444');
                $(this).css('outline', '1px dashed #444');
            }, function(e) {
                $('.phoneme-item[class~="labial-palatal"]').css('outline', '');
                $(this).css('outline', '');
            });
        
    
        
            $('.button[data-filter~=".labial,.bilabial,.labiodental,.labiovelar,.labial-palatal"]').hover(function(e) {
                $('.phoneme-item[class~="labial"]').css('outline', '2.5px dashed #444');
                $(this).css('outline', '1px dashed #444');
            }, function(e) {
                $('.phoneme-item[class~="labial"]').css('outline', '');
                $(this).css('outline', '');
            });
        
            $('.button[data-filter~=".labial,.bilabial,.labiodental,.labiovelar,.labial-palatal"]').hover(function(e) {
                $('.phoneme-item[class~="bilabial"]').css('outline', '2.5px dashed #444');
                $(this).css('outline', '1px dashed #444');
            }, function(e) {
                $('.phoneme-item[class~="bilabial"]').css('outline', '');
                $(this).css('outline', '');
            });
        
            $('.button[data-filter~=".labial,.bilabial,.labiodental,.labiovelar,.labial-palatal"]').hover(function(e) {
                $('.phoneme-item[class~="labiodental"]').css('outline', '2.5px dashed #444');
                $(this).css('outline', '1px dashed #444');
            }, function(e) {
                $('.phoneme-item[class~="labiodental"]').css('outline', '');
                $(this).css('outline', '');
            });
        
            $('.button[data-filter~=".labial,.bilabial,.labiodental,.labiovelar,.labial-palatal"]').hover(function(e) {
                $('.phoneme-item[class~="labiovelar"]').css('outline', '2.5px dashed #444');
                $(this).css('outline', '1px dashed #444');
            }, function(e) {
                $('.phoneme-item[class~="labiovelar"]').css('outline', '');
                $(this).css('outline', '');
            });
        
            $('.button[data-filter~=".labial,.bilabial,.labiodental,.labiovelar,.labial-palatal"]').hover(function(e) {
                $('.phoneme-item[class~="labial-palatal"]').css('outline', '2.5px dashed #444');
                $(this).css('outline', '1px dashed #444');
            }, function(e) {
                $('.phoneme-item[class~="labial-palatal"]').css('outline', '');
                $(this).css('outline', '');
            });
        
    
        
            $('.button[data-filter~=".dental,.labiodental"]').hover(function(e) {
                $('.phoneme-item[class~="dental"]').css('outline', '2.5px dashed #444');
                $(this).css('outline', '1px dashed #444');
            }, function(e) {
                $('.phoneme-item[class~="dental"]').css('outline', '');
                $(this).css('outline', '');
            });
        
            $('.button[data-filter~=".dental,.labiodental"]').hover(function(e) {
                $('.phoneme-item[class~="labiodental"]').css('outline', '2.5px dashed #444');
                $(this).css('outline', '1px dashed #444');
            }, function(e) {
                $('.phoneme-item[class~="labiodental"]').css('outline', '');
                $(this).css('outline', '');
            });
        
    
        
            $('.button[data-filter~=".nasal"]').hover(function(e) {
                $('.phoneme-item[class~="nasal"]').css('outline', '2.5px dashed #444');
                $(this).css('outline', '1px dashed #444');
            }, function(e) {
                $('.phoneme-item[class~="nasal"]').css('outline', '');
                $(this).css('outline', '');
            });
        
    

    
        
            $('.button[data-filter~=".stop,.plosive"]').hover(function(e) {
                $('.phoneme-item[class~="stop"]').css('outline', '2.5px dashed #444');
                $(this).css('outline', '1px dashed #444');
            }, function(e) {
                $('.phoneme-item[class~="stop"]').css('outline', '');
                $(this).css('outline', '');
            });
        
            $('.button[data-filter~=".stop,.plosive"]').hover(function(e) {
                $('.phoneme-item[class~="plosive"]').css('outline', '2.5px dashed #444');
                $(this).css('outline', '1px dashed #444');
            }, function(e) {
                $('.phoneme-item[class~="plosive"]').css('outline', '');
                $(this).css('outline', '');
            });
        
    
        
            $('.button[data-filter~=".trill"]').hover(function(e) {
                $('.phoneme-item[class~="trill"]').css('outline', '2.5px dashed #444');
                $(this).css('outline', '1px dashed #444');
            }, function(e) {
                $('.phoneme-item[class~="trill"]').css('outline', '');
                $(this).css('outline', '');
            });
        
    
        
            $('.button[data-filter~=".tap,.flap"]').hover(function(e) {
                $('.phoneme-item[class~="tap"]').css('outline', '2.5px dashed #444');
                $(this).css('outline', '1px dashed #444');
            }, function(e) {
                $('.phoneme-item[class~="tap"]').css('outline', '');
                $(this).css('outline', '');
            });
        
            $('.button[data-filter~=".tap,.flap"]').hover(function(e) {
                $('.phoneme-item[class~="flap"]').css('outline', '2.5px dashed #444');
                $(this).css('outline', '1px dashed #444');
            }, function(e) {
                $('.phoneme-item[class~="flap"]').css('outline', '');
                $(this).css('outline', '');
            });
        
    
        
            $('.button[data-filter~=".lateral"]').hover(function(e) {
                $('.phoneme-item[class~="lateral"]').css('outline', '2.5px dashed #444');
                $(this).css('outline', '1px dashed #444');
            }, function(e) {
                $('.phoneme-item[class~="lateral"]').css('outline', '');
                $(this).css('outline', '');
            });
        
    
        
            $('.button[data-filter~=".fricative"]').hover(function(e) {
                $('.phoneme-item[class~="fricative"]').css('outline', '2.5px dashed #444');
                $(this).css('outline', '1px dashed #444');
            }, function(e) {
                $('.phoneme-item[class~="fricative"]').css('outline', '');
                $(this).css('outline', '');
            });
        
    
        
            $('.button[data-filter~=".affricate"]').hover(function(e) {
                $('.phoneme-item[class~="affricate"]').css('outline', '2.5px dashed #444');
                $(this).css('outline', '1px dashed #444');
            }, function(e) {
                $('.phoneme-item[class~="affricate"]').css('outline', '');
                $(this).css('outline', '');
            });
        
    
        
            $('.button[data-filter~=".sibilant"]').hover(function(e) {
                $('.phoneme-item[class~="sibilant"]').css('outline', '2.5px dashed #444');
                $(this).css('outline', '1px dashed #444');
            }, function(e) {
                $('.phoneme-item[class~="sibilant"]').css('outline', '');
                $(this).css('outline', '');
            });
        
    
        
            $('.button[data-filter~=".approximant"]').hover(function(e) {
                $('.phoneme-item[class~="approximant"]').css('outline', '2.5px dashed #444');
                $(this).css('outline', '1px dashed #444');
            }, function(e) {
                $('.phoneme-item[class~="approximant"]').css('outline', '');
                $(this).css('outline', '');
            });
        
    
        
            $('.button[data-filter~=".vowel"]').hover(function(e) {
                $('.phoneme-item[class~="vowel"]').css('outline', '2.5px dashed #444');
                $(this).css('outline', '1px dashed #444');
            }, function(e) {
                $('.phoneme-item[class~="vowel"]').css('outline', '');
                $(this).css('outline', '');
            });
        
    

    
        
            $('.button[data-filter~="sonGreaterThan5"]').hover(function(e) {
                $('.phoneme-item[class~="onGreaterThan5"]').css('outline', '2.5px dashed #444');
                $(this).css('outline', '1px dashed #444');
            }, function(e) {
                $('.phoneme-item[class~="onGreaterThan5"]').css('outline', '');
                $(this).css('outline', '');
            });
        
    




// packery --------------------

$('.ui-group').packery({
  itemSelector: '.ui-group-item',
  gutter: 1,
  percentPosition: true
})

// collection of Draggabillies
var draggies = [];
var isDrag = false;

// make all grid-items draggable
$grid.find('.phoneme-item').each(function(i, gridItem) {
  var draggie = new Draggabilly(gridItem);
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