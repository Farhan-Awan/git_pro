$(document).ready(function(){
$(function(){
	
	$("#pro_select").change(function(){
		var change_product=$("$#pro_select option:selected").value();
		var pagename = $(location).attr('href');
       if (change_product== "Pink Grapefruit")
			
         {
			 window.location="https://play-farhan.myshopify.com/products/pink-grapefruit";
		 }
		 if (change_product=="Strawberry Rose")
		{
			 window.location="https://play-farhan.myshopify.com/products/copy-of-pear-lime-1";
		}
		 else
		 {
			 alert("i am sorry");
		 }
	})
})

})