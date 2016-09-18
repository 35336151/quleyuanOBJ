define(['backbone'],function(backbone){
	var Router = backbone.Router.extend({
		routes:{
			'home':'homefunc',
			'paradise':'paradisefunc',
			'card':'carfunc',
			'me':'mefunc'
		},
		homefunc:function(){
			require(['text!../html/home.html','css!../html/home.css','html/home.js'],function(content,css,home){
				home.homepage();
				$('#main').html(content);
			});
		},
		paradisefunc:function(){
			require(['text!../html/paradise.html','css!../html/paradise.css','html/paradise.js'],function(content,css,paradise){
				paradise.paradisepage();
				$('#main').html(content);
			});
		},
		carfunc:function(){
			require(['text!../html/funcard.html','css!../html/funcard.css'],function(content,css){
				$('#main').html(content);
			});
		},
		mefunc:function(){
			require(['text!../html/me.html','css!../html/me.css'],function(content,css){
				$('#main').html(content);
			});
		}

	});
	var router = new Router();
});