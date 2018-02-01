var elixir = require('laravel-elixir');
var paths = {
	node:'./node_modules'
} 
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

var scriptsVendor = [
	paths.node+'/jquery/dist/jquery.js',
 	//paths.node+'/bootstrap/dist/js/bootstrap.js',
    paths.node+'/materialize-css/dist/js/materialize.js',
    paths.node+'/socket.io-client/socket.io.js',
];

var stylesVendor = [
	paths.node+'/font-awesome/css/font-awesome.css',
    paths.node+'/materialize-css/dist/css/materialize.css',
];

var fonts = [
	paths.node+'/font-awesome/fonts',
    paths.node+'/materialize-css/fonts'
];

elixir(function(mix) {
    mix.sass([
    	'app.scss',
    ],'public/css/app.css');


    mix.sass(stylesVendor,'public/css/vendor.css');
    mix.scripts(scriptsVendor,'public/js/vendor.js');
    mix.copy(fonts, './public/fonts');


});
