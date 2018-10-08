<?php

if ( !isset( $content_width ) )

	$content_width = 620;



if ( !function_exists( 'dw_minion_setup' ) ) {

	function dw_minion_setup() {

		load_theme_textdomain( 'dw-minion', get_template_directory() . '/languages' );

		add_theme_support( 'automatic-feed-links' );

		add_theme_support( 'post-formats', array( 'gallery', 'video', 'quote', 'link' ) );

		add_theme_support( 'post-thumbnails' );

		add_editor_style();

	}

}

add_action( 'after_setup_theme', 'dw_minion_setup' );



function dw_minion_widgets_init() {

	register_sidebar( array(

		'name'          => __( 'Main Sidebar', 'dw-minion' ),

		'id'            => 'sidebar-1',

		'before_widget' => '<aside id="%1$s" class="widget %2$s">',

		'after_widget'  => '</aside>',

		'before_title'  => '<h3 class="widget-title">',

		'after_title'   => '</h3>',

	) );

	register_sidebar( array(

		'name'          => __( 'Secondary Sidebar', 'dw-minion' ),

		'id'            => 'sidebar-2',

		'before_widget' => '<aside id="%1$s" class="widget %2$s">',

		'after_widget'  => '</aside>',

		'before_title'  => '<h3 class="widget-title">',

		'after_title'   => '</h3>',

	) );

	register_sidebar( array(

        'name' => __( 'Top Sidebar', 'dw-minion' ),

        'id' => 'top-sidebar',

        'before_widget' => '<aside id="%1$s" class="widget %2$s">',

        'after_widget' => '</aside>',

        'before_title' => '<h3 class="widget-title">',

        'after_title' => '</h3>',

    ) );

}

add_action( 'widgets_init', 'dw_minion_widgets_init' );



function dw_minion_scripts() {

	wp_enqueue_style('dw-minion-main', get_template_directory_uri() . '/assets/css/main.css' ); // green

	wp_enqueue_style( 'dw-minion-style', get_stylesheet_uri() );

	wp_enqueue_script( 'modernizr', get_template_directory_uri() . '/assets/js/modernizr-2.6.2.min.js' );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {

		wp_enqueue_script( 'comment-reply' );

	}

	wp_enqueue_script( 'jquery' );

	wp_enqueue_script( 'dw-minion-main-script', get_template_directory_uri() . '/assets/js/main.js', array('jquery'), false, true );

	wp_enqueue_script( 'bootstrap-transition', get_template_directory_uri() . '/assets/js/bootstrap-transition.js', array('jquery'), false, true );

	wp_enqueue_script( 'bootstrap-carousel', get_template_directory_uri() . '/assets/js/bootstrap-carousel.js', array('jquery'), false, true );

	wp_enqueue_script( 'bootstrap-collapse', get_template_directory_uri() . '/assets/js/bootstrap-collapse.js', array('jquery'), false, true );

	wp_enqueue_script( 'bootstrap-tab', get_template_directory_uri() . '/assets/js/bootstrap-tab.js', array('jquery'), false, true );

}

add_action( 'wp_enqueue_scripts', 'dw_minion_scripts' );



require get_template_directory() . '/inc/template-tags.php';

require get_template_directory() . '/inc/extras.php';

require get_template_directory() . '/inc/widgets.php';

require get_template_directory() . '/inc/customizer.php';



// features image on social share

add_action('wp_head', 'minion_features_image_as_og_image');

function minion_features_image_as_og_image() {

	global $post;

	$thumb = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'medium'); 

	?><meta property="og:image" content="<?php echo $thumb[0] ?>" /><?php

}



// load style for dw qa plugin

if( !function_exists('dwqa_minion_scripts') ){

	function dwqa_minion_scripts(){

	    wp_enqueue_style( 'dw-minion-qa', get_stylesheet_directory_uri() . '/dwqa-templates/style.css' );

	}

	add_action( 'wp_enqueue_scripts', 'dwqa_minion_scripts' );

}



// Top sidebar

add_action( 'dw_minion_top_sidebar', 'dw_minion_top_sidebar' );

function dw_minion_top_sidebar() {

    ?><div class="top-sidebar"><?php dynamic_sidebar( 'top-sidebar' ); ?></div><?php

}



// TGM plugin activation

require_once get_template_directory() . '/inc/class-tgm-plugin-activation.php';

function alx_plugins() {

	$plugins = array(

		array(

			'name' 				=> 'DW Question & Answer',

			'slug' 				=> 'dw-question-answer',

			'source'			=> false,

			'required'			=> false,

			'force_activation' 	=> false,

			'force_deactivation'=> false,

		),

		array(

			'name' 				=> 'Contact Form 7',

			'slug' 				=> 'contact-form-7',

			'required'			=> false,

			'force_activation' 	=> false,

			'force_deactivation'=> false,

		)

	);	

	tgmpa( $plugins );

}

add_action( 'tgmpa_register', 'alx_plugins' );









/************************************************

*********** MY EDITS ****************************

************************************************/



/**

 * Redirect event category requests to list view.

 *

 * @param $query

 */

function use_list_view_for_categories( $query ) {

	// Disregard anything except a main archive query

	if ( is_admin() || ! $query->is_main_query() || ! is_archive() ) return;



	// We only want to catch *event* category requests being issued

	// against something other than list view

	if ( ! $query->get( 'tribe_events_cat' ) ) return;

	if ( tribe_is_list_view() ) return;



	// Get the term object

	$term = get_term_by( 'slug', $query->get( 'tribe_events_cat' ), TribeEvents::TAXONOMY );



	// If it's invalid don't go any further

	if ( ! $term ) return;



	// Get the list-view taxonomy link and redirect to it

	header( 'Location: ' . tribe_get_listview_link( $term->term_id ) );

	exit();

}



// Use list view for category requests by hooking into pre_get_posts for event queries

add_action( 'tribe_events_pre_get_posts', 'use_list_view_for_categories' );





/* Tthumbnail size */

set_post_thumbnail_size( 50, 50 );





/* register menu */

function register_my_menu() {

 register_nav_menus(

    array(

      'sidebar-menu' => __( 'Sidebar Menu' ),

      'sidebar-menu-2' => __( 'Sidebar Menu Below' ),

      'top-menu-1' => __( 'Top Menu 1 Home' ),

      'top-menu-2' => __( 'Top Menu 2 Home' ),

      'top-menu-3' => __( 'Top Menu 3 Home' )

    )

  );

}



add_action( 'init', 'register_my_menu' );







/* Custom language switcher */



function my_custom_language_switcher() {


$default_lang = apply_filters('wpml_default_language', NULL );

    $languages = apply_filters( 'wpml_active_languages', NULL, array( 'skip_missing' => 0, 'link_empty_to' => $languages[$default_lang]['url']) );

    if( !empty( $languages ) ) {

        foreach( $languages as $language ){

            $native_name = $language['language_code'];


            if( !$language['active'] ) echo '<a href="' . ( $language['missing'] ? $languages[$default_lang]['url'].'#googtrans(es|'. $language['language_code'] .')' : $language['url']).'"' . ( $language['missing'] ? ' onclick="location.reload();"' : '' ) .'>';

            echo $native_name . ' ';

            if( !$language['active'] ) echo '</a>';

            echo ' | ';

        }

        echo '<a href="' . $languages[$default_lang]['url'] . '#googtrans(es|ca)" onclick="location.reload();">ca</a>';

    }

}

// Remove jQuery Migrate Script from header and Load jQuery from Google API
function crunchify_stop_loading_wp_embed_and_jquery() {
	if (!is_admin()) {
		wp_deregister_script('wp-embed');
	}
}
add_action('init', 'crunchify_stop_loading_wp_embed_and_jquery');



/* RSS start */



// Add Events to RSS Feed
function add_events_to_rss_feed( $args ) {
  if ( isset( $args['feed'] ) && !isset( $args['post_type'] ) )
    $args['post_type'] = array('post', 'tribe_events');
  return $args;
}
 
add_filter( 'request', 'add_events_to_rss_feed' );


/* image in RSS */

function featuredtoRSS($content) {
global $post;
if ( has_post_thumbnail( $post->ID ) ){
$content = '<div>' . get_the_post_thumbnail( $post->ID, 'medium', array( 'style' => 'margin-bottom: 15px;' ) ) . '</div> <div class="rss-event-dates">' . tribe_get_start_date() . ' - ' . tribe_get_end_date() . '</div> <span class="rss-separator">/</span> <div class="rss-event-location">' . tribe_get_venue() . '</div> <span class="rss-separator">///</span> ' . $content;
}
return $content;
}
 
add_filter('the_excerpt_rss', 'featuredtoRSS');
add_filter('the_content_feed', 'featuredtoRSS');


/* add utm source to rss links */

function utm_for_feed($link) {
	$url = explode('?', $link);

	$utm_query_str = "utm_source=rssfeed";
	if (count($url) > 1)
		$url_query = "${url[1]}&amp;{$utm_query_str}";
	else
    $url_query = $utm_query_str;

	$tracking_link = "${url[0]}?{$url_query}";

  return $tracking_link;
}

add_filter('the_permalink_rss', 'utm_for_feed', 100);

/* RSS end */



/* order of +info link vs. sharing buttons */

function event_link_after_content($content) {
global $post;
    if ($post->post_type == 'tribe_events') {
    $content .= '<a href="' . tribe_get_event_website_url() . '" target="_blank" class="event-content-more-info">+info</a>'; 
    $content.='
	<!-- SHOP AD -->
	<a href="https://www.artssspot.com/barcelona/en/experinence-art-in-barcelona-first-hand-visit-a-local-artists-studio/" class="artssspot-ad clearfix" id="ad-banner" data-sourcepage="event-single"><!-- enlace a donde lleva el anuncio -->
		<div class="shop-ad-wrapper">
			<div class="shop-ad"><!-- contenedor -->
				<div class="h1-background"><!-- contenedor -->
					<div class="img--top">
						<img src="' . get_template_directory_uri() . '/assets/img/publicidad/studios/artists.png" width="231" height="46"/>
						<img src="' . get_template_directory_uri() . '/assets/img/publicidad/studios/studio.png" width="287" height="46"/>
					</div>
					<img src="' . get_template_directory_uri() . '/assets/img/publicidad/studios/experience.png" class="img--bottom" width="339" height="23" />
					<div class="img--btn">
						<img src="' . get_template_directory_uri() . '/assets/img/publicidad/studios/book.png"  width="97" height="18" />
					</div>
				</div>
			</div>
		</div>
	</a>
	<!-- /SHOP AD -->';
    }
    return $content;
    }

add_filter('the_content', 'event_link_after_content');
add_filter('the_excerpt', 'event_link_after_content');




// * STOP HEARTBEAT *//
add_action( 'init', 'my_deregister_heartbeat', 1 );
function my_deregister_heartbeat() {
	global $pagenow;

	if ( 'post.php' != $pagenow && 'post-new.php' != $pagenow )
		wp_deregister_script('heartbeat');
}




//* CUSTOM ADMIN STYLES *//

add_action('admin_head', 'my_custom_fonts');

function my_custom_fonts() {
  echo '<style>
    /* ADMIN AREA */

.categorydiv .tabs-panel ul.categorychecklist {
	margin-left: 10px;
}

.categorydiv .tabs-panel .categorychecklist a.show {
    margin-left: -20px;
}

.categorydiv .tabs-panel .categorychecklist a.collapse {
    margin-left: -17px;
}

.categorydiv .tabs-panel .categorychecklist .children {
    margin-left: 17px;
}

.categorydiv .tabs-panel .children a.show {
    margin-left: -20px;
}

.categorydiv .tabs-panel .children a.collapse {
    margin-left: -17px;
}
  </style>';
}





/* CUSTOM API ENDPOINTS */


function shorten_text($text, $max_length = 350, $cut_off = '...', $keep_word = true)
{
    if(strlen($text) <= $max_length) {
        return $text;
    }

    if(strlen($text) > $max_length) {
        if($keep_word) {
            $text = substr($text, 0, $max_length + 1);

            if($last_space = strrpos($text, ' ')) {
                $text = substr($text, 0, $last_space);
                $text = rtrim($text);
                $text .=  $cut_off;
            }
        } else {
            $text = substr($text, 0, $max_length);
            $text = rtrim($text);
            $text .=  $cut_off;
        }
    }

    return $text;
}

function tribe_api_query( $query ) {

$args = array(
  'post_status'=>'publish',
  'post_type'=>array(TribeEvents::POSTTYPE),
  'posts_per_page'=>-1,
  //order by startdate from newest to oldest
  'meta_key'=>'_EventStartDate',
  'orderby'=>'_EventStartDate',
  'order'=>'DESC',
  //required in 3.x
  'eventDisplay'=>'custom',
  'meta_query' => array(
        array(
			'key'     => '_EventStartDate',
			'value'   => $query['end_date'],
			'compare' => '<='
		),
        array(
			'key'     => '_EventEndDate',
			'value'   => $query['start_date'],
			'compare' => '>='
		),

    )
);


if (isset($query['category'])) {
  //query events by category

	if ($query['category'] == 'sss-home') {

		$args['meta_key'] = '_EventEndDate';
		$args['orderby'] = '_EventEndDate';
		$args['order'] = 'ASC';

		$args['tax_query'] = array(
			array(
				'taxonomy' => 'tribe_events_cat',
				'field' => 'slug',
				'terms' => 'home-1',
				'operator' => 'IN'
			),
	    );
		$events1 = new WP_Query( $args );

		$args['tax_query'] = array(
			array(
				'taxonomy' => 'tribe_events_cat',
				'field' => 'slug',
				'terms' => 'home-2',
				'operator' => 'IN'
			),
	    );
		$events2 = new WP_Query( $args );

		$args['tax_query'] = array(
			array(
				'taxonomy' => 'tribe_events_cat',
				'field' => 'slug',
				'terms' => 'home-3',
				'operator' => 'IN'
			),
	    );
		$events3 = new WP_Query( $args );
		$events->post_count = 21;
		$events->found_posts = $events1->found_posts + $events2->found_posts + $events3->found_posts;
		$events->is_404 = $events1->is_404 || $events2->is_404 || $events3->is_404;
		$events->request = 'custom: merge from cats home-1, home-2 and home-3....';
		$events->posts = array_merge(array_slice($events1->posts, 0, 6), array_slice($events2->posts, 0, 9), array_slice($events3->posts, 0, 6));
	} else {
		if ($query['category'] !== 'all') {
			$args['tax_query'] = array(
				array(
					'taxonomy' => 'tribe_events_cat',
					'field' => 'slug',
					'terms' => $query['category'],
					'operator' => 'IN'
				),
		    );
		}
	    $events = new WP_Query( $args );
	}
} else {
	$events = new WP_Query( $args );
}

	

	unset( $events->query );
	unset( $events->query_vars );
	unset( $events->tax_query );
	unset( $events->meta_query );
	unset( $events->date_query );
	unset( $events->current_post );
	unset( $events->in_the_loop );
	unset( $events->comment_count );
	unset( $events->current_comment );
	unset( $events->max_num_pages );
	unset( $events->max_num_comment_pages );
	unset( $events->is_single );
	unset( $events->is_preview );
	unset( $events->is_page );
	unset( $events->is_archive );
	unset( $events->is_date );
	unset( $events->is_year );
	unset( $events->is_month );
	unset( $events->is_day );
	unset( $events->is_time );
	unset( $events->is_author );
	unset( $events->is_category );
	unset( $events->is_tag );
	unset( $events->is_tax );
	unset( $events->is_search );
	unset( $events->is_feed );
	unset( $events->is_comment_feed );
	unset( $events->is_trackback );
	unset( $events->is_home );
	unset( $events->is_embed );
	unset( $events->is_paged );
	unset( $events->is_admin );
	unset( $events->is_attachment );
	unset( $events->is_singular );
	unset( $events->is_robots );
	unset( $events->is_posts_page );
	unset( $events->is_post_type_archive );
	unset( $events->thumbnails_cached );
	unset( $events->tribe_is_event );
	unset( $events->tribe_is_multi_posttype );
	unset( $events->tribe_is_event_category );
	unset( $events->tribe_is_event_venue );
	unset( $events->tribe_is_event_organizer );
	unset( $events->tribe_is_event_query );
	unset( $events->tribe_is_past );
	unset( $events->post );

	foreach ( $events->posts as $ep) {
		$postId = $ep->ID;
		$ep->eventSource = tribe_get_event_meta( $postId, '_EventURL', true );
		$ep->eventLink = get_permalink(( $postId ));
		$ep->eventImage = get_the_post_thumbnail_url( $postId, 'medium_large' );
		$ep->eventExcerpt = shorten_text( strip_tags( $ep->post_content ) );
		$ep->eventTitle =  strip_tags(get_the_title( $postId ));
		$ep->eventVenueID = tribe_get_venue_id( $postId );
		$ep->eventVenueName = tribe_get_venue($postId);
		$ep->eventVenueAddress = tribe_get_address($postId);
		$ecats1 = tribe_get_event_cat_ids( $postId);
		$ecats2 = [];
		foreach ( $ecats1 as $ec) {
			$object = new stdClass();
			$object->id =  $ec;
			$object->posts = $postId;
			array_push($ecats2, $object);
		}
		$ep->eventCategories = $ecats2;
		$ep->open = false;
		$ep->id = $postId;
		if ( class_exists( 'Tribe__Events__Pro__Geo_Loc' ) ) {
	        $ep->eventVenueLat = get_post_meta( $postId, Tribe__Events__Pro__Geo_Loc::LAT, true );
	        $ep->eventVenueLng = get_post_meta( $postId, Tribe__Events__Pro__Geo_Loc::LNG, true );
	    } 
	    unset( $ep->ID );
	    unset( $ep->post_author );
	    unset( $ep->post_date );
	    unset( $ep->post_date_gmt );
	    unset( $ep->post_content );
	    unset( $ep->post_title );
	    unset( $ep->post_excerpt );
	    unset( $ep->post_status );
	    unset( $ep->comment_status );
	    unset( $ep->ping_status );
	    unset( $ep->post_password );
	    unset( $ep->post_name );
	    unset( $ep->to_ping );
	    unset( $ep->pinged );
	    unset( $ep->post_modified );
	    unset( $ep->post_modified_gmt );
	    unset( $ep->post_content_filtered );
	    unset( $ep->post_parent );
	    unset( $ep->guid );
	    unset( $ep->menu_order );
	    unset( $ep->post_type );
	    unset( $ep->post_mime_type );
	    unset( $ep->comment_count );
	    unset( $ep->filter );
	}


    if ( empty( $events ) ) {
        return null;
    }
    return $events;
}

add_action( 'rest_api_init', function () {

    register_rest_route( 'tribe_events/v2', '/sss_events/(?P<start_date>[a-z0-9\-]+)/(?P<end_date>[a-z0-9\-]+)/(?P<category>[a-z\-]+)', array(
        'methods' => 'GET',
        'callback' => 'tribe_api_query',
    ) );

    register_rest_route( 'tribe_events/v2', '/sss_events/(?P<start_date>[a-z0-9\-]+)/(?P<end_date>[a-z0-9\-]+)', array(
        'methods' => 'GET',
        'callback' => 'tribe_api_query',
    ) );
} );