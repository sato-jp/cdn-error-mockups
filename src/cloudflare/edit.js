import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	TextareaControl,
	SelectControl,
} from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useState } from '@wordpress/element';
import { __, _x } from '@wordpress/i18n';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the className name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object}   root0               - The function parameters.
 * @param {Object}   root0.attributes    - The block attributes.
 * @param {Function} root0.setAttributes - Function to update block attributes.
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const {
		title = 'Internal server error',
		errorCode = '500',
		whatHappened = "There is an internal server error on Cloudflare's network.",
		whatCanIDo = 'Please try again in a few minutes.',
		browserStatus = 'Working',
		browserLocation = 'You',
		browserName = 'Browser',
		browserStatusText = 'Working',
		cloudflareStatus = 'Error',
		cloudflareLocation = 'San Francisco',
		cloudflareName = 'Cloudflare',
		cloudflareStatusText = 'Error',
		hostStatus = 'Working',
		hostLocation = 'Website',
		hostName = 'Host',
		hostStatusText = 'Working',
		errorSource = 'cloudflare',
	} = attributes;
	const [ip, setIp] = useState(null);
	const [showIp, setShowIp] = useState(false);

	async function toggleIp() {
		if (!showIp && !ip) {
			try {
				const data = await apiFetch({
					path: '/cdn-error-mockups/v1/client-ip',
					parse: true,
				});
				setIp(data?.ip || __('Unavailable', 'cdn-error-mockups'));
			} catch (_e) {
				setIp(__('Unavailable', 'cdn-error-mockups'));
			}
		}
		setShowIp(!showIp);
	}
	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody title={__('Settings', 'cdn-error-mockups')}>
					<TextControl
						label={__('Title', 'cdn-error-mockups')}
						value={title}
						onChange={(value) => setAttributes({ title: value })}
						__next40pxDefaultSize={true}
						__nextHasNoMarginBottom={true}
					/>
					<TextControl
						label={_x(
							'Error code',
							'Inspector control label for editing HTTP error code',
							'cdn-error-mockups'
						)}
						value={errorCode}
						onChange={(value) =>
							setAttributes({ errorCode: value })
						}
						__next40pxDefaultSize={true}
						__nextHasNoMarginBottom={true}
					/>
					<TextareaControl
						label={__('What happened?', 'cdn-error-mockups')}
						value={whatHappened}
						onChange={(value) =>
							setAttributes({ whatHappened: value })
						}
						rows={3}
						__nextHasNoMarginBottom={true}
					/>
					<TextareaControl
						label={__('What can I do?', 'cdn-error-mockups')}
						value={whatCanIDo}
						onChange={(value) =>
							setAttributes({ whatCanIDo: value })
						}
						rows={3}
						__nextHasNoMarginBottom={true}
					/>
					<SelectControl
						label={__('Error Source', 'cdn-error-mockups')}
						value={errorSource}
						options={[
							{
								label: __('Browser', 'cdn-error-mockups'),
								value: 'browser',
							},
							{
								label: __('Cloudflare', 'cdn-error-mockups'),
								value: 'cloudflare',
							},
							{
								label: __('Host', 'cdn-error-mockups'),
								value: 'host',
							},
						]}
						onChange={(value) =>
							setAttributes({ errorSource: value })
						}
						__next40pxDefaultSize={true}
						__nextHasNoMarginBottom={true}
					/>
				</PanelBody>
				<PanelBody
					title={__('Browser', 'cdn-error-mockups')}
					initialOpen={false}
				>
					<SelectControl
						label={__('Status', 'cdn-error-mockups')}
						value={browserStatus}
						options={[
							{
								label: __('Working', 'cdn-error-mockups'),
								value: 'Working',
							},
							{
								label: __('Error', 'cdn-error-mockups'),
								value: 'Error',
							},
						]}
						onChange={(value) =>
							setAttributes({ browserStatus: value })
						}
						__next40pxDefaultSize={true}
						__nextHasNoMarginBottom={true}
					/>
					<TextControl
						label={__('Location', 'cdn-error-mockups')}
						value={browserLocation}
						onChange={(value) =>
							setAttributes({ browserLocation: value })
						}
						__next40pxDefaultSize={true}
						__nextHasNoMarginBottom={true}
					/>
					<TextControl
						label={__('Name', 'cdn-error-mockups')}
						value={browserName}
						onChange={(value) =>
							setAttributes({ browserName: value })
						}
						__next40pxDefaultSize={true}
						__nextHasNoMarginBottom={true}
					/>
					<TextControl
						label={__('Status Text', 'cdn-error-mockups')}
						value={browserStatusText}
						onChange={(value) =>
							setAttributes({ browserStatusText: value })
						}
						__next40pxDefaultSize={true}
						__nextHasNoMarginBottom={true}
					/>
				</PanelBody>
				<PanelBody
					title={__('Cloudflare', 'cdn-error-mockups')}
					initialOpen={false}
				>
					<SelectControl
						label={__('Status', 'cdn-error-mockups')}
						value={cloudflareStatus}
						options={[
							{
								label: __('Working', 'cdn-error-mockups'),
								value: 'Working',
							},
							{
								label: __('Error', 'cdn-error-mockups'),
								value: 'Error',
							},
						]}
						onChange={(value) =>
							setAttributes({ cloudflareStatus: value })
						}
						__next40pxDefaultSize={true}
						__nextHasNoMarginBottom={true}
					/>
					<TextControl
						label={__('Location', 'cdn-error-mockups')}
						value={cloudflareLocation}
						onChange={(value) =>
							setAttributes({ cloudflareLocation: value })
						}
						__next40pxDefaultSize={true}
						__nextHasNoMarginBottom={true}
					/>
					<TextControl
						label={__('Name', 'cdn-error-mockups')}
						value={cloudflareName}
						onChange={(value) =>
							setAttributes({ cloudflareName: value })
						}
						__next40pxDefaultSize={true}
						__nextHasNoMarginBottom={true}
					/>
					<TextControl
						label={__('Status Text', 'cdn-error-mockups')}
						value={cloudflareStatusText}
						onChange={(value) =>
							setAttributes({ cloudflareStatusText: value })
						}
						__next40pxDefaultSize={true}
						__nextHasNoMarginBottom={true}
					/>
				</PanelBody>
				<PanelBody
					title={__('Host', 'cdn-error-mockups')}
					initialOpen={false}
				>
					<SelectControl
						label={__('Status', 'cdn-error-mockups')}
						value={hostStatus}
						options={[
							{
								label: __('Working', 'cdn-error-mockups'),
								value: 'Working',
							},
							{
								label: __('Error', 'cdn-error-mockups'),
								value: 'Error',
							},
						]}
						onChange={(value) =>
							setAttributes({ hostStatus: value })
						}
						__next40pxDefaultSize={true}
						__nextHasNoMarginBottom={true}
					/>
					<TextControl
						label={__('Location', 'cdn-error-mockups')}
						value={hostLocation}
						onChange={(value) =>
							setAttributes({ hostLocation: value })
						}
						__next40pxDefaultSize={true}
						__nextHasNoMarginBottom={true}
					/>
					<TextControl
						label={__('Name', 'cdn-error-mockups')}
						value={hostName}
						onChange={(value) => setAttributes({ hostName: value })}
						__next40pxDefaultSize={true}
						__nextHasNoMarginBottom={true}
					/>
					<TextControl
						label={__('Status Text', 'cdn-error-mockups')}
						value={hostStatusText}
						onChange={(value) =>
							setAttributes({ hostStatusText: value })
						}
						__next40pxDefaultSize={true}
						__nextHasNoMarginBottom={true}
					/>
				</PanelBody>
			</InspectorControls>
			<div id="cf-wrapper">
				<div id="cf-error-details" className="p-0">
					<header className="mx-auto pt-10 lg:pt-6 lg:px-8 w-240 lg:w-full mb-8">
						<h1 className="inline-block sm:block sm:mb-2 font-light text-60 lg:text-4xl text-black-dark leading-tight mr-2">
							<span className="inline-block">{title}</span>{' '}
							<span className="code-label">
								{_x(
									'Error code',
									'Inline label shown in the block mockup header',
									'cdn-error-mockups'
								)}{' '}
								{errorCode}
							</span>
						</h1>
						<div>
							{__('Visit', 'cdn-error-mockups')}{' '}
							<a
								href="https://www.cloudflare.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								cloudflare.com
							</a>{' '}
							{__('for more information.', 'cdn-error-mockups')}
						</div>
						<div className="mt-3 cf-timestamp">
							{(() => {
								const now = new Date();
								const formatter = new Intl.DateTimeFormat(
									'en-US',
									{
										year: 'numeric',
										month: '2-digit',
										day: '2-digit',
										hour: '2-digit',
										minute: '2-digit',
										second: '2-digit',
										hour12: false,
									}
								);
								const parts = formatter.formatToParts(now);
								return `${parts.find((p) => p.type === 'year').value}-${parts.find((p) => p.type === 'month').value}-${parts.find((p) => p.type === 'day').value} ${parts.find((p) => p.type === 'hour').value}:${parts.find((p) => p.type === 'minute').value}:${parts.find((p) => p.type === 'second').value}`;
							})()}
						</div>
					</header>
					<div className="my-8 bg-gradient-gray">
						<div className="w-240 lg:w-full mx-auto">
							<div className="clearfix md:px-8">
								<div
									id="cf-browser-status"
									className={`${errorSource === 'browser' ? 'cf-error-source ' : ''}relative w-1/3 md:w-full py-15 md:p-0 md:py-8 md:text-left md:border-solid md:border-0 md:border-b md:border-gray-400 overflow-hidden float-left md:float-none text-center`}
								>
									<div className="relative mb-10 md:m-0">
										<span className="cf-icon-browser block md:hidden h-20 bg-center bg-no-repeat"></span>
										<span
											className={`${browserStatus === 'Error' ? 'cf-icon-error' : 'cf-icon-ok'} w-12 h-12 absolute left-1/2 md:left-auto md:right-0 md:top-0 -ml-6 -bottom-4`}
										></span>
									</div>
									<span className="md:block w-full truncate">
										{browserLocation}
									</span>
									<h3 className="md:inline-block mt-3 md:mt-0 text-2xl text-gray-600 font-light leading-1.3">
										{browserName}
									</h3>{' '}
									<span
										className={`leading-1.3 text-2xl ${browserStatus === 'Error' ? 'color-error' : 'color-working'}`}
									>
										{browserStatusText}
									</span>
								</div>
								<div
									id="cf-cloudflare-status"
									className={`${errorSource === 'cloudflare' ? 'cf-error-source ' : ''}relative w-1/3 md:w-full py-15 md:p-0 md:py-8 md:text-left md:border-solid md:border-0 md:border-b md:border-gray-400 overflow-hidden float-left md:float-none text-center`}
								>
									<div className="relative mb-10 md:m-0">
										<span className="cf-icon-cloud block md:hidden h-20 bg-center bg-no-repeat"></span>
										<span
											className={`${cloudflareStatus === 'Error' ? 'cf-icon-error' : 'cf-icon-ok'} w-12 h-12 absolute left-1/2 md:left-auto md:right-0 md:top-0 -ml-6 -bottom-4`}
										></span>
									</div>
									<span className="md:block w-full truncate">
										{cloudflareLocation}
									</span>
									<h3 className="md:inline-block mt-3 md:mt-0 text-2xl font-light leading-1.3 color-cloudflare">
										{cloudflareName}
									</h3>{' '}
									<span
										className={`leading-1.3 text-2xl ${cloudflareStatus === 'Error' ? 'color-error' : 'color-working'}`}
									>
										{cloudflareStatusText}
									</span>
								</div>
								<div
									id="cf-host-status"
									className={`${errorSource === 'host' ? 'cf-error-source ' : ''}relative w-1/3 md:w-full py-15 md:p-0 md:py-8 md:text-left md:border-solid md:border-0 md:border-b md:border-gray-400 overflow-hidden float-left md:float-none text-center`}
								>
									<div className="relative mb-10 md:m-0">
										<span className="cf-icon-server block md:hidden h-20 bg-center bg-no-repeat"></span>
										<span
											className={`${hostStatus === 'Error' ? 'cf-icon-error' : 'cf-icon-ok'} w-12 h-12 absolute left-1/2 md:left-auto md:right-0 md:top-0 -ml-6 -bottom-4`}
										></span>
									</div>
									<span className="md:block w-full truncate">
										{hostLocation}
									</span>
									<h3 className="md:inline-block mt-3 md:mt-0 text-2xl text-gray-600 font-light leading-1.3">
										{hostName}
									</h3>{' '}
									<span
										className={`leading-1.3 text-2xl ${hostStatus === 'Error' ? 'color-error' : 'color-working'}`}
									>
										{hostStatusText}
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="w-240 lg:w-full mx-auto mb-8 lg:px-8">
						<div className="clearfix">
							<div className="w-1/2 md:w-full float-left pr-6 md:pb-10 md:pr-0 leading-relaxed">
								<h2 className="text-3xl font-normal leading-1.3 mb-4">
									{__('What happened?', 'cdn-error-mockups')}
								</h2>
								{whatHappened}
							</div>
							<div className="w-1/2 md:w-full float-left leading-relaxed">
								<h2 className="text-3xl font-normal leading-1.3 mb-4">
									{__('What can I do?', 'cdn-error-mockups')}
								</h2>
								{whatCanIDo}
							</div>
						</div>
					</div>

					<div className="cf-error-footer cf-wrapper w-240 lg:w-full py-10 sm:py-4 sm:px-8 mx-auto text-center sm:text-left border-solid border-0 border-t border-gray-300">
						<p className="text-13">
							<span className="cf-footer-item sm:block sm:mb-1">
								{__('Ray ID:', 'cdn-error-mockups')}{' '}
								<strong className="font-semibold">
									abcdefghijklmnop
								</strong>
							</span>
							<span className="cf-footer-separator sm:hidden">
								{' '}
								•{' '}
							</span>
							<span
								id="cf-footer-item-ip"
								className="cf-footer-item sm:block sm:mb-1"
							>
								{__('Your IP:', 'cdn-error-mockups')}{' '}
								<button
									type="button"
									className="cf-footer-ip-reveal-btn"
									onClick={toggleIp}
									aria-expanded={showIp}
								>
									{showIp
										? __('Hide', 'cdn-error-mockups')
										: __(
												'Click to reveal',
												'cdn-error-mockups'
											)}
								</button>
								<span
									className={`cf-footer-ip ${showIp ? '' : 'hidden'}`}
									aria-live="polite"
									aria-atomic="true"
								>
									{showIp
										? (ip ??
											__(
												'Unavailable',
												'cdn-error-mockups'
											))
										: ''}
								</span>
								<span className="cf-footer-separator sm:hidden">
									{' '}
									•{' '}
								</span>
							</span>

							<span className="cf-footer-item sm:block sm:mb-1">
								<span>
									{__(
										'Performance & security by',
										'cdn-error-mockups'
									)}
								</span>{' '}
								<a
									rel="noopener noreferrer"
									href="https://www.cloudflare.com/"
									id="brand_link"
									target="_blank"
								>
									Cloudflare
								</a>
							</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
