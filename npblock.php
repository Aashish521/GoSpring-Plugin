<?php 
/**
 * Plugin Name:       GoSpring
 * Description:       This is a Plugin for embeding GoSpring quiz on wordpress website, Just go to https://gospring.ai/ and create or choose the quiz you want to embed
 * 					  copy the Quiz Link and paste in GoSpring block.
 * Plugin URI: 		  https://gospring.ai/
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:            0.1.0
 * Author:            Curosity Road
 * Author URI: 		  https://gospring.ai/projects/mycontent
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       GoSpring
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */


class CBNPBINIT{
	function __construct(){
		add_action( 'init', array($this,'create_block_npblock_block_init') );
	}

	function create_block_npblock_block_init() {
			register_block_type( __DIR__ . '/build' );
		 }

}

$CreateBlock =new  CBNPBINIT();
