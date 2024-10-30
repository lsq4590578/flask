 document.addEventListener("DOMContentLoaded", () => {
        const tabs = document.querySelectorAll(".tab");
        tabs.forEach((tab) => {
            tab.addEventListener("click", () => {
                // 移除所有高亮
                tabs.forEach((t) => t.classList.remove("active"));
                // 添加当前点击的高亮
                tab.classList.add("active");
            });
        });
    });


    window.onload = function()
		{
			//设置imgList的宽度
			var imgList = document.getElementById("imgList");
			var imgArr = document.getElementsByTagName("img");
			imgList.style.width = 720*imgArr.length+"px";

			//设置导航按钮居中
			var imgDiv = document.getElementById("navDiv");
			var outer = document.getElementById("outer");
			navDiv.style.left=(outer.offsetWidth - navDiv.offsetWidth)/2+"px";

			var index = 0;//设置图片的索引 默认第一张
			// var allA = document.getElementsByTagName("a");
            var allA=imgDiv.children
			allA[index].style.backgroundColor = "black";

			for(var i = 0; i<allA.length;i++)
			{
				//为每一个超链接都添加一个num属性,记录下点击第几张图片。
				allA[i].num = i;
				allA[i].onclick=function()
				{
					//当“点击切换图片时”，关闭“轮播功能”
					clearInterval(timer)
					index = this.num;
					//根据index设置偏移量，可以让可见框中显示图片。
					// imgList.style.left = -520*index+"px"
					setA();
					//使用move函数切换图片
					move(imgList,"left",-720*index,30,function(){
						//当切换图片成功后，再次开启自动切换。
						autoChange();
					})
				}
			}
			//自动切换图片
			autoChange()

			//创建一个方法用来设置选中的a
			function setA(){
				if(index>=imgArr.length - 1)
				{
					index=0;
					//实现一瞬间从最后一张照片跳回第一张照片
					imgList.style.left=0;
				}
				//遍历全部的导航块，让其变红
				for(var i = 0; i<allA.length; i++)
				{
					allA[i].style.backgroundColor="";
					//不能直接设置为红色，因为内联样式优先级太高，会使hover失效。
				}
				//将选中的导航块变黑
				allA[index].style.backgroundColor="black";
			}
			var timer;
			//创建一个函数，用来开启自动切换图片
			function autoChange()
			{
				//开启定时器，用于定时去切换图片
				timer = setInterval(function(){
					index++;
					index=index%imgArr.length;
					//执行动画，切换图片
					move(imgList,"left",-680*index,30,function(){
						setA();
					})
				},3000);
			}
		}
