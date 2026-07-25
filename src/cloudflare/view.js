/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* eslint-env browser */
/* global globalThis */

import { __ } from '@wordpress/i18n';

// Check if we're in the WordPress block editor
function isBlockEditor() {
	return (
		// eslint-disable-next-line no-undef
		globalThis.wp?.blockEditor ||
		document.body.classList.contains('block-editor-page') ||
		document.querySelector('.block-editor-writing-flow')
	);
}

// Generate a random Ray ID and replace on page load
function initRayId() {
	// The Ray ID is the only strong element directly inside a footer item.
	// Selecting by structure keeps this working when the visible label is translated.
	document
		.querySelectorAll(
			'.wp-block-cdn-error-mockups-cloudflare .cf-error-footer .cf-footer-item > strong'
		)
		.forEach((element) => {
			const values = new Uint8Array(8);
			globalThis.crypto.getRandomValues(values);
			element.textContent = Array.from(values, (value) =>
				value.toString(16).padStart(2, '0')
			).join('');
		});
}

// Update timestamp to current time on page load
function initTimestamp() {
	const now = new Date();
	const formatter = new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		hour12: false,
	});
	const parts = formatter.formatToParts(now);
	const timestamp = `${parts.find((p) => p.type === 'year').value}-${parts.find((p) => p.type === 'month').value}-${parts.find((p) => p.type === 'day').value} ${parts.find((p) => p.type === 'hour').value}:${parts.find((p) => p.type === 'minute').value}:${parts.find((p) => p.type === 'second').value}`;

	// Find all timestamp elements (handle multiple blocks on same page)
	document.querySelectorAll('.cf-timestamp').forEach((el) => {
		el.textContent = timestamp;
	});
}

// Front-end behavior: reveal client IP when the "Click to reveal" button is pressed.
function initIpReveal() {
	// Don't run in the block editor
	if (isBlockEditor()) {
		return;
	}

	document.querySelectorAll('.cf-footer-ip-reveal-btn').forEach((button) => {
		const ipSpan = findIpSpan(button);
		button.setAttribute('aria-expanded', 'false');
		if (ipSpan) {
			ipSpan.setAttribute('aria-live', 'polite');
			ipSpan.setAttribute('aria-atomic', 'true');
		}
	});

	function findIpSpan(button) {
		// try to find a nearby element with class 'cf-footer-ip'
		const el = button.closest('.cf-footer-item');
		if (el) {
			const span = el.querySelector('.cf-footer-ip');
			if (span) {
				return span;
			}
		}
		// fallback: next sibling
		if (
			button.nextElementSibling &&
			button.nextElementSibling.classList.contains('cf-footer-ip')
		) {
			return button.nextElementSibling;
		}
		return null;
	}

	async function fetchIp() {
		try {
			const apiRoot =
				globalThis?.wpApiSettings?.root ||
				`${globalThis.location.origin}/wp-json/`;
			const endpoint = new URL(
				'cdn-error-mockups/v1/client-ip',
				apiRoot
			).toString();
			const res = await fetch(endpoint, {
				credentials: 'same-origin',
				cache: 'no-store',
			});
			if (!res.ok) {
				return __('Unavailable', 'cdn-error-mockups');
			}
			const data = await res.json();
			return data.ip || __('Unavailable', 'cdn-error-mockups');
		} catch (_e) {
			return __('Unavailable', 'cdn-error-mockups');
		}
	}

	document.addEventListener('click', async (e) => {
		const btn = e.target.closest('.cf-footer-ip-reveal-btn');
		if (!btn) {
			return;
		}
		const ipSpan = findIpSpan(btn);
		if (!ipSpan) {
			return;
		}

		const isExpanded = btn.getAttribute('aria-expanded') === 'true';
		if (!isExpanded) {
			ipSpan.classList.remove('hidden');
			btn.setAttribute('aria-expanded', 'true');
			btn.textContent = __('Hide', 'cdn-error-mockups');
			// Initial state: reveal IP. Fetch only if not loaded.
			if (!ipSpan.textContent.trim()) {
				const ip = await fetchIp();
				ipSpan.textContent = ip;
			}
		} else {
			ipSpan.classList.add('hidden');
			btn.setAttribute('aria-expanded', 'false');
			btn.textContent = __('Click to reveal', 'cdn-error-mockups');
		}
	});
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', () => {
		initRayId();
		initTimestamp();
		initIpReveal();
	});
} else {
	initRayId();
	initTimestamp();
	initIpReveal();
}
