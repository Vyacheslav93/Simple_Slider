(function($){
   $.fn.imageSlider=function(option){
	 
		var setting=['https://res.cloudinary.com/lmru/image/upload/f_auto,q_auto,w_500,h_500,c_pad,b_white,d_photoiscoming.png/LMCode/15632748.jpg',
					 'https://res.cloudinary.com/lmru/image/upload/f_auto,q_auto,w_500,h_500,c_pad,b_white,d_photoiscoming.png/LMCode/15632756.jpg',
					 'https://res.cloudinary.com/lmru/image/upload/f_auto,q_auto,w_500,h_500,c_pad,b_white,d_photoiscoming.png/LMCode/15632764.jpg'
					];
			  
	    if (option){
				$.extend(setting,option);
			}
		i=0;
		$(this).click(function(){ 	
			i++; 
			if(i==setting.length){
				i=0;
			}
			$(this).find("img").attr('src', setting[i]);
			console.log(i);
		});
		     
   }

})(jQuery)