define(function(require,exports,module){
	require("/c/TZT.js");
	var clock;
	var app = navigator.appVersion.toLocaleLowerCase();
	init();
	function init(){
        loadHtml();
        lazyRender("img[data-src]");
        addEvent();
	}
	function addEvent(){
		//滑动页面
        $(window).on('scroll',function () {
	        if (clock) { 
	            clearTimeout(clock);
	        }
	        clock = setTimeout(function () {
	            lazyRender();
	        })
	    });
	   //点击按钮跳转到下载页面
	    $(".img07").on('click',function(){		    	
	    	var url=encodeURIComponent("https://itunes.apple.com/cn/app/id1101673632?mt=8")
		    if(app.indexOf("iphone")>0){
		    	T.fn.changeurl("http://action:10073/?appurl="+url);
		    }else if(app.indexOf("android")>0){
		    	T.fn.changeurl('http://browseropen:http://a.app.qq.com/o/simple.jsp?pkgname=com.zxscnew');
		    }
	    })
        
	}
	function loadHtml(){
		var _data=getData();
		var data={
			data:_data
		}
		var headHtml = template('innerContent',data);
        document.getElementById('contentWrap').innerHTML = headHtml;
	}
	function lazyRender (img) {
        $(img).each(function () {
            if (checkShow($(this)) && !isLoaded($(this)) ){
                loadImg($(this));
            }
        })
    }
	function getData(){
		var table=[
		    {
		    	"imgUrl":"../img/lead1.png",
		    	"order":"01"
		    },
		    {
		    	"imgUrl":"../img/lead2.png",
		    	"order":"02"
		    },
		    {
		    	"imgUrl":"../img/lead3.png",
		    	"order":"03"
		    },
		    {
		    	"imgUrl":"../img/lead4.png",
		    	"order":"04"
		    },
		    {
		    	"imgUrl":"../img/lead5.png",
		    	"order":"05"
		    },
		    {
		    	"imgUrl":"../img/lead6.png",
		    	"order":"06"
		    },
		    {
		    	"imgUrl":"../img/lead7.png",
		    	"order":"07"
		    },
		    {
		    	"imgUrl":"../img/lead8.png",
		    	"order":"08"
		    }
        ]
        return table;
	}
	function checkShow($img) { 
        var scrollTop = $(window).scrollTop();  //即页面向上滚动的距离
        var windowHeight = $(window).height(); // 浏览器自身的高度
        var offsetTop = $img.offset().top;  //目标标签img相对于document顶部的位置
        if (offsetTop < (scrollTop + windowHeight) && offsetTop >= scrollTop) { //在2个临界状态之间的就为出现在视野中的
            return true;
        }
        return false;
    }
    function isLoaded ($img) {
        return $img.attr('data-src') === $img.attr('src'); //如果data-src和src相等那么就是已经加载过了
    }
    function loadImg ($img) {
        $img.attr('src',$img.attr('data-src')); // 加载就是把自定义属性中存放的真实的src地址赋给src属性
    }    
	module.exports={
		init:init,
		addEvent:addEvent
	}
})