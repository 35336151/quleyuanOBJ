define(['lazy'],function(lazy){
	function homepage(){
		$.get('http://duif.applinzi.com/leyuan/home_data.php',function(res){
			var res = JSON.parse(res);
			$('.swiper-slide').attr('src',res.slider[0].img);
			$('#banner1').attr('src',res.arealist[0].img);
			$('#banner2').attr('src',res.arealist[1].img);
			var arr = res.reclist;
			for(var i = 0 ; i < arr.length ;i++){
				var liObj = $('<li><img /></li>');
				liObj.find('img').attr('data-original',arr[i].img);
				liObj.find('img').addClass('lazy img-responsive');
				$('.list').append(liObj);
			}
			$(".lazy").lazyload({
	        	effect : "fadeIn",
	        	effectspeed:1000
			});
			var mySwiper = new Swiper('.swiper-container', {
			    loop: true,
			    autoplay:1000
		  	});
		});
	}
	return{
		'homepage':homepage
	};
});
