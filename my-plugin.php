<?php

/*
*Plugin Name: my plugin
*description: This is the test plugin
*Version:1.0
*Author: Pritesh
*/
//  to prevent direct access to plugin files
if (!defined('ABSPATH')) {
    header("Location: /");
    die();
}

// Main Hooks Plugin activate or deactivate
function my_plugin_activation(){
    //function run after plugin activates
}
function my_plugin_deactivation(){
    //function run to  deactivate plugin
    
}
// __FILE__ this defines the path upto my-plugin folder
register_activation_hook(__FILE__,'my_plugin_activation');
register_deactivation_hook(__FILE__,'my_plugin_deactivation');

//short code to embed dynamic content or functionality into posts
function my_sc_fun(){
    return'my short code';
}
add_shortcode('my-sc','my_sc_fun');

function my_custom_scripts(){
// Define the path to your JavaScript file
$path = plugins_url('js/main.js', __FILE__);
$pathStyle =plugins_url('css/main.css', __FILE__);

// Specify script dependencies
$dependencies = array('jquery');
// $styleDependencies = null;

// Get the script version for cache-busting
$ver = filemtime(plugin_dir_path(__FILE__).'js/main.js');
$verStyle = filemtime(plugin_dir_path(__FILE__).'css/main.css');

// Enqueue the script
wp_enqueue_script('my-custom-file', $path, $dependencies, $ver, true);
wp_enqueue_style('my-custom-file-style', $pathStyle,'', $verStyle, true);
}
add_action('wp_enqueue_scripts','my_custom_scripts');
// it add script to dashboard/login 
add_action('admin_enqueue_scripts','my_custom_scripts');
?>