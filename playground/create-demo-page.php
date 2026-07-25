<?php
/**
 * Creates the CDN Error Mockups Playground demo page.
 *
 * @package CDN_Error_Mockups
 */

$cdn_error_mockups_content = <<<'HTML'
<!-- wp:cdn-error-mockups/cloudflare -->
<div class="wp-block-cdn-error-mockups-cloudflare">
	<div id="cf-wrapper">
		<div id="cf-error-details" class="p-0">
			<header class="mx-auto pt-10 lg:pt-6 lg:px-8 w-240 lg:w-full mb-8">
				<h1 class="inline-block sm:block sm:mb-2 font-light text-60 lg:text-4xl text-black-dark leading-tight mr-2">
					<span class="inline-block">Internal server error</span>
					<span class="code-label">Error code 500</span>
				</h1>
				<div>Visit <a href="https://www.cloudflare.com/" target="_blank" rel="noopener noreferrer">cloudflare.com</a> for more information.</div>
				<div class="mt-3 cf-timestamp">2024-01-15 10:30:45</div>
			</header>
			<div class="my-8 bg-gradient-gray">
				<div class="w-240 lg:w-full mx-auto">
					<div class="clearfix md:px-8">
						<div id="cf-browser-status" class="relative w-1/3 md:w-full py-15 md:p-0 md:py-8 md:text-left md:border-solid md:border-0 md:border-b md:border-gray-400 overflow-hidden float-left md:float-none text-center">
							<div class="relative mb-10 md:m-0">
								<span class="cf-icon-browser block md:hidden h-20 bg-center bg-no-repeat"></span>
								<span class="cf-icon-ok w-12 h-12 absolute left-1/2 md:left-auto md:right-0 md:top-0 -ml-6 -bottom-4"></span>
							</div>
							<span class="md:block w-full truncate">You</span>
							<h3 class="md:inline-block mt-3 md:mt-0 text-2xl text-gray-600 font-light leading-1.3">Browser</h3>
							<span class="leading-1.3 text-2xl color-working">Working</span>
						</div>
						<div id="cf-cloudflare-status" class="cf-error-source relative w-1/3 md:w-full py-15 md:p-0 md:py-8 md:text-left md:border-solid md:border-0 md:border-b md:border-gray-400 overflow-hidden float-left md:float-none text-center">
							<div class="relative mb-10 md:m-0">
								<span class="cf-icon-cloud block md:hidden h-20 bg-center bg-no-repeat"></span>
								<span class="cf-icon-error w-12 h-12 absolute left-1/2 md:left-auto md:right-0 md:top-0 -ml-6 -bottom-4"></span>
							</div>
							<span class="md:block w-full truncate">San Francisco</span>
							<h3 class="md:inline-block mt-3 md:mt-0 text-2xl font-light leading-1.3 color-cloudflare">Cloudflare</h3>
							<span class="leading-1.3 text-2xl color-error">Error</span>
						</div>
						<div id="cf-host-status" class="relative w-1/3 md:w-full py-15 md:p-0 md:py-8 md:text-left md:border-solid md:border-0 md:border-b md:border-gray-400 overflow-hidden float-left md:float-none text-center">
							<div class="relative mb-10 md:m-0">
								<span class="cf-icon-server block md:hidden h-20 bg-center bg-no-repeat"></span>
								<span class="cf-icon-ok w-12 h-12 absolute left-1/2 md:left-auto md:right-0 md:top-0 -ml-6 -bottom-4"></span>
							</div>
							<span class="md:block w-full truncate">Website</span>
							<h3 class="md:inline-block mt-3 md:mt-0 text-2xl text-gray-600 font-light leading-1.3">Host</h3>
							<span class="leading-1.3 text-2xl color-working">Working</span>
						</div>
					</div>
				</div>
			</div>
			<div class="w-240 lg:w-full mx-auto mb-8 lg:px-8">
				<div class="clearfix">
					<div class="w-1/2 md:w-full float-left pr-6 md:pb-10 md:pr-0 leading-relaxed">
						<h2 class="text-3xl font-normal leading-1.3 mb-4">What happened?</h2>
						There is an internal server error on Cloudflare's network.
					</div>
					<div class="w-1/2 md:w-full float-left leading-relaxed">
						<h2 class="text-3xl font-normal leading-1.3 mb-4">What can I do?</h2>
						Please try again in a few minutes.
					</div>
				</div>
			</div>
			<div class="cf-error-footer cf-wrapper w-240 lg:w-full py-10 sm:py-4 sm:px-8 mx-auto text-center sm:text-left border-solid border-0 border-t border-gray-300">
				<p class="text-13">
					<span class="cf-footer-item sm:block sm:mb-1">Ray ID: <strong class="font-semibold">abcdefghijklmnop</strong></span>
					<span class="cf-footer-separator sm:hidden"> • </span>
					<span class="cf-footer-item sm:block sm:mb-1">Your IP: <button type="button" class="cf-footer-ip-reveal-btn">Click to reveal</button><span class="hidden cf-footer-ip"></span><span class="cf-footer-separator sm:hidden"> • </span></span>
					<span class="cf-footer-item sm:block sm:mb-1"><span>Performance &amp; security by</span> <a rel="noopener noreferrer" href="https://www.cloudflare.com/" id="brand_link" target="_blank">Cloudflare</a></span>
				</p>
			</div>
		</div>
	</div>
</div>
<!-- /wp:cdn-error-mockups/cloudflare -->
HTML;

$cdn_error_mockups_page      = get_page_by_path( 'cdn-error-demo', OBJECT, 'page' );
$cdn_error_mockups_page_data = array(
	'post_title'   => 'CDN Error Mockups Demo',
	'post_name'    => 'cdn-error-demo',
	'post_content' => wp_slash( $cdn_error_mockups_content ),
	'post_status'  => 'publish',
	'post_type'    => 'page',
);

if ( $cdn_error_mockups_page instanceof WP_Post ) {
	$cdn_error_mockups_page_data['ID'] = $cdn_error_mockups_page->ID;
	$cdn_error_mockups_page_id         = wp_update_post( $cdn_error_mockups_page_data, true );
} else {
	$cdn_error_mockups_page_id = wp_insert_post( $cdn_error_mockups_page_data, true );
}

if ( ! is_wp_error( $cdn_error_mockups_page_id ) ) {
	update_option( 'show_on_front', 'page' );
	update_option( 'page_on_front', $cdn_error_mockups_page_id );
}
