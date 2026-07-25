=== CDN Error Mockups ===
Contributors: hiroshisato, pixelium
Donate link: https://github.com/sponsors/sato-jp
Tags: block, cloudflare, error page, 404
Requires at least: 6.9
Tested up to: 6.9
Stable tag: 1.1.1
Requires PHP: 8.0
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Create customizable Cloudflare-style error page mockups with a WordPress block.

== Description ==

CDN Error Mockups provides a block for creating realistic Cloudflare-style
error screens.
Use it in error page templates, maintenance pages, design previews, and
lighthearted site experiences.

The block is independently developed and is not affiliated with, endorsed by,
or connected to Cloudflare, Inc.

= Features =

* Customize the error title, HTTP error code, and explanatory messages.
* Configure Browser, Cloudflare, and Host labels and statuses independently.
* Choose which service is presented as the source of the error.
* Reveal the visitor's IP address without calling an external service.
* Generate a new mock Ray ID and timestamp when the page loads.
* Preserve keyboard focus and announce the revealed IP to assistive technology.
* Adapt the three service statuses for desktop and narrow screens.
* Keep the block's CSS isolated from the surrounding WordPress theme.

== Installation ==

= Install from WordPress =

1. Open **Plugins > Add New Plugin** in WordPress.
1. Search for **CDN Error Mockups**.
1. Select **Install Now**, and then activate the plugin.

= Install a ZIP file =

1. Download the plugin ZIP from the
   [WordPress Plugin Directory][wordpress-plugin].
1. Open **Plugins > Add New Plugin > Upload Plugin**.
1. Select the ZIP file and choose **Install Now**.
1. Activate the plugin.

== Usage ==

1. Open a post, page, or template in the block editor.
1. Add the **CDN Error Mockup - Cloudflare** block.
1. Use the block settings sidebar to configure:
   * The title and error code.
   * The "What happened?" and "What can I do?" messages.
   * Browser, Cloudflare, and Host names, locations, and status text.
   * The service that should appear as the source of the error.
1. Publish or preview the page.

The block works well in:

* 404 and other error templates.
* Maintenance and temporary outage pages.
* Theme and page-builder previews.
* Demo, educational, and humorous content.

== IP address display and privacy ==

The IP address is requested only after a visitor selects **Click to reveal**.
The request is sent to this plugin's REST API endpoint on the same WordPress
site.
No external IP lookup service is contacted.

The endpoint checks `CF-Connecting-IP`, `X-Forwarded-For`, and `REMOTE_ADDR`.
Sites behind a CDN or reverse proxy should configure that proxy correctly,
because forwarded headers can otherwise be inaccurate or spoofed.
The displayed value is informational and should not be used for authentication
or authorization.

== Frequently Asked Questions ==

= Is this an official Cloudflare plugin? =

No.
This is an independent project for educational and entertainment purposes.
It is not affiliated with, endorsed by, or connected to Cloudflare, Inc.

= Can every part of the mock error be customized? =

The title, error code, explanatory messages, error source, and the labels and
statuses for Browser, Cloudflare, and Host can be configured in the block
settings sidebar.

= Does the plugin send visitor data to an external service? =

No.
The optional IP reveal feature uses a same-site WordPress REST API request and
server request headers.

= Can the block be used more than once? =

Yes.
It can be added to multiple posts, pages, and templates.

= What versions are required? =

The plugin requires WordPress 6.9 or newer and PHP 8.0 or newer.

== Source code ==

Human-readable JavaScript and SCSS source is available in the
[`src` directory][source].
Compiled assets distributed with the plugin are stored in `build`.

== Screenshots ==

1. Block placed in a 404 page template.
2. Error code, messages, source, and service statuses in the block settings.
3. The published error mockup on the front end.

== Changelog ==

= Unreleased =

* Isolate block styles from the active theme.
* Improve keyboard focus and the accessible IP reveal interaction.
* Generate Ray IDs without depending on translated labels.
* Add WordPress Coding Standards checks through Composer.
* Add a reproducible WordPress Playground 404-template demo Blueprint.

= 1.1.1 =

* Add contextual translations for "Error code" in the inspector and mockup.

= 1.1.0 =

* Add configurable Browser, Cloudflare, and Host statuses.
* Add the same-site IP address reveal feature.

= 1.0.0 =

* Initial release.



== Credits ==

The project is based on ideas and code from
[cloudflare-error-page][cloudflare-error-page] by donlon, licensed under the
MIT License.
See [THIRD_PARTY_LICENSES.md][third-party-licenses] for details.

[cloudflare-error-page]: https://github.com/donlon/cloudflare-error-page
[composer]: https://getcomposer.org/
[deno]: https://deno.com/
[github-repository]: https://github.com/hiroshisatoy/cdn-error-mockups
[source]: https://github.com/hiroshisatoy/cdn-error-mockups/tree/main/src
[third-party-licenses]: https://github.com/hiroshisatoy/cdn-error-mockups/blob/main/THIRD_PARTY_LICENSES.md
[wordpress-plugin]: https://wordpress.org/plugins/cdn-error-mockups/
