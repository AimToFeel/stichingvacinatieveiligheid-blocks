<?php
/**
 * Plugin name: Stichtingvacinatieveiligheid Editor Blocks
 * Description: Adds some custom blocks to be used on pages.
 * Version: 1.1.0
 * Author: AimToFeel
 * Author URI: https://aimtofeel.com
 * License: GPLv2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 */
function registerCustumGutenbergBlocks()
{
    add_filter('block_categories_all', function ($categories) {
        $categories[] = [
            'slug' => 'aimtofeel',
            'title' => 'AimToFeel',
        ];

        return $categories;
    });

    register_block_type(__DIR__ . '/accordion/block.json');
    register_block_type(__DIR__ . '/stepper/block.json');
    register_block_type(__DIR__ . '/claim-cta/block.json');
    register_block_type(__DIR__ . '/side-effects/block.json');
}
add_action('init', 'registerCustumGutenbergBlocks');
