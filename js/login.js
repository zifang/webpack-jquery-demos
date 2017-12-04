import '../statics/css/work.css';

import  $ from '../statics/js/jquery.min.js';

// var $ = require('../statics/js/jquery.min.js')
// require('../statics/js/customInput.js');

$(function(){
	$('.login-ul input').focus(function(){
		$(this).addClass('cur');
	});
	$('.login-ul input').blur(function(){
		$(this).removeClass('cur');
	})
	
})
