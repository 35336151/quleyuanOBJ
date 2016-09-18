define([],function(){
	function paradisepage(){
		$.get('http://duif.applinzi.com/leyuan/leyuan_data.php?address=%E5%85%A8%E5%9F%8E',function(res){
			var res = JSON.parse(res);
			var arrData = res.data;
			setData(arrData);
		})
		function setData(arr){
			for(var i = 0 ; i < arr.length ;i++){
				var liObj = $('<li><a href="###"><img /><div class="descript"><p></p><p></p></div><div class="address"><img /><p></p></div></a></li>');
				liObj.find('img').eq(0).attr('src',arr[i].img);
				liObj.find('.descript').find('p').eq(0).text(arr[i].name);
				liObj.find('.descript').find('p').eq(1).text(arr[i].address);
				liObj.find('.address').find('p').text(arr[i].dist);
				liObj.find('.address').find('img').attr('src','../img/address.png');
				liObj.find('.address').find('img').css({
					width:'30px',
					height:'30px',
				});
				$('.list2').append(liObj);
			}
		}
	}
	return {
		'paradisepage':paradisepage
	}
});