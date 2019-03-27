	// 以下为分页,当前只显示样式,具体提供方法可参考http://www.jq22.com/yanshi5697
	function allcheck() {
	 var nn = $("#allboxs").is(":checked"); //判断th中的checkbox是否被选中，如果被选中则nn为true，反之为false
	     if(nn == true) {
	         var namebox = $("input[name^='boxs']");  //获取name值为boxs的所有input
	         for(i = 0; i < namebox.length; i++) {
	             namebox[i].checked=true;    //js操作选中checkbox
	         }
	     }
	     if(nn == false) {
	         var namebox = $("input[name^='boxs']");
	         for(i = 0; i < namebox.length; i++) {
	             namebox[i].checked=false;
	         }
	     }
	 }
	 
	 $(function(){
		
	
// 		 var html_Id=$('.nav-link-pading').attr('data-htmlId')
// 		 console.log(html_Id)
// 		 switch (Number(html_Id)){
// 		 	case 1:
// 			console.log(1)
// 		 	$('.atv1').addClass("new_active")
// 		 	break;
// 		 	case 2:
// 			// alert(2)
// 		 	$('.atv2').addClass("new_active")
// 			console.log(2)
// 		 		break;
// 		 	case 3:
// 			// alert(3)
// 			console.log(3)
// 			$('.atv3').addClass("new_active")
// 		break;
// 
// 		 	default:
// 		 	console.log(22)
// 		 		break;
// 		 }
		 			
	 })
$(document).ready(function () {
	
		// <input type="hidden" id="html_Id" value="1">
// 		console.log()
			
				
  
// 		if($('#html_Id').val()==1){
// 				
// 				$('#html_Id').parent().parent().css({
// 				"color":"red"
// 			})
// 		}
// 	
		
		
		console.log()
		$('.nav-bottmBoxx .nav-bttomBtn a').on('click',function(){
		
			$(this).css({
				"color":"#ffffff",
				"font-weight":700
			}).parent().siblings().children().css({
				"color":"#f5f5f5",
				"font-weight":400
			})
		})

		
// 		$('.nav-link-title').on('click',function(){
// 			$(this).attr('data-href',$(this).attr('href'))
// 		})
    /**
     * Sidebar Dropdown
     */
    $('.nav-dropdown-toggle').on('click', function (e) {
        e.preventDefault();
        $(this).parent().toggleClass('open');
    });

    // open sub-menu when an item is active.
    $('ul.nav').find('a.active').parent().parent().parent().addClass('open');

    /**
     * Sidebar Toggle
     */
    $('.sidebar-toggle').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('sidebar-hidden');
    });

    /**
     * Mobile Sidebar Toggle
     */
    $('.sidebar-mobile-toggle').on('click', function () {
        $('body').toggleClass('sidebar-mobile-show');
    });
});
