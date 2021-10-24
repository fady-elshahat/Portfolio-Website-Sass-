// Light Box
const lightbox = GLightbox( {
     'href': 'https://youtu.be/f8fGUmgnQEQ',
     'type': 'video',
     'source': 'youtube', //vimeo, youtube or local
     'width': 900,
     autoplayVideos: true
} );

$( '.navbar-nav>li>a' ).on( 'click', function () {
     $( '.navbar-collapse' ).collapse( 'hide' );
} );;
