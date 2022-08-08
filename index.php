<?php
/**
 * Plugin Name: Stichingvacinatieveiligheid editor blocks
 */
function registerCustumGutenbergBlocks()
{
    register_block_type(__DIR__);
}
add_action('init', 'registerCustumGutenbergBlocks');
