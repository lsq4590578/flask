function getStyle(obj,attr) {
  return window.getComputedStyle(obj)[attr];
}
function move(obj,attr,target,speed,callback)
{
    // debugger
	//在每次开启定时器之前，关闭掉之前的定时器。
	clearInterval(obj.timer);
	//获取当前的left值
	var current = parseInt(getStyle(obj,attr));
	/*
		判断速度的正负，如果是从0->800移动，speed为正；
		如果是从800->0移动，speed为负。
	*/
	if(current > target)
	{
		speed = -speed;
	}
	//开启一个定时器，用来执行动画效果
	//向执行动画的对象中添加一个timer属性，用来保存它自己的定时器的标识。
	obj.timer = setInterval(function()
	{
		//获取box1的原来的left值
		var oldvalue = parseInt(getStyle(obj,attr));
		//在oldvalue的基础上增加。
		var newvalue = oldvalue + speed;
		//向左移动时，需要判断newvalue是否小于target
		//向右移动时，需要判断newvalue是否大于target
		if((speed<0 && newvalue < target) || (speed>0 && newvalue > target))
		{
			newvalue = target;
		}
		//attr为变量，需要用[]的形式而不能是.的形式
		obj.style[attr] = newvalue + "px";
		//当元素移动到800px时停止执行动画
		if(newvalue == target)
		{
			clearInterval(obj.timer);
			//动画执行完毕，调用回调函数；
			callback && callback();
		}
	},30);
}