<?php
// This file is generated. Do not modify it manually.
return array(
	'cloudflare' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'cdn-error-mockups/cloudflare',
		'version' => '1.2.0',
		'title' => 'CDN Error Mockup - Cloudflare',
		'description' => 'Adds a block that mimics the Cloudflare downtime error screen.',
		'category' => 'theme',
		'attributes' => array(
			'title' => array(
				'type' => 'string',
				'default' => 'Internal server error'
			),
			'errorCode' => array(
				'type' => 'string',
				'default' => '500'
			),
			'whatHappened' => array(
				'type' => 'string',
				'default' => 'There is an internal server error on Cloudflare\'s network.'
			),
			'whatCanIDo' => array(
				'type' => 'string',
				'default' => 'Please try again in a few minutes.'
			),
			'browserStatus' => array(
				'type' => 'string',
				'default' => 'Working'
			),
			'browserLocation' => array(
				'type' => 'string',
				'default' => 'You'
			),
			'browserName' => array(
				'type' => 'string',
				'default' => 'Browser'
			),
			'browserStatusText' => array(
				'type' => 'string',
				'default' => 'Working'
			),
			'cloudflareStatus' => array(
				'type' => 'string',
				'default' => 'Error'
			),
			'cloudflareLocation' => array(
				'type' => 'string',
				'default' => 'San Francisco'
			),
			'cloudflareName' => array(
				'type' => 'string',
				'default' => 'Cloudflare'
			),
			'cloudflareStatusText' => array(
				'type' => 'string',
				'default' => 'Error'
			),
			'hostStatus' => array(
				'type' => 'string',
				'default' => 'Working'
			),
			'hostLocation' => array(
				'type' => 'string',
				'default' => 'Website'
			),
			'hostName' => array(
				'type' => 'string',
				'default' => 'Host'
			),
			'hostStatusText' => array(
				'type' => 'string',
				'default' => 'Working'
			),
			'errorSource' => array(
				'type' => 'string',
				'default' => 'cloudflare'
			)
		),
		'example' => array(
			'attributes' => array(
				'title' => 'Internal server error',
				'errorCode' => '500',
				'whatHappened' => 'There is an internal server error on Cloudflare\'s network.',
				'whatCanIDo' => 'Please try again in a few minutes.'
			)
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'cdn-error-mockups',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
