//地区
let region = new Vue({
	el: ".header",
	data: {
		dq: [
			'北京', '上海', '广州', '深圳', '成都', '杭州', '佛山', '苏州', '西安', '天津', '重庆',
			'武汉', '南京', '大连', '沈阳', '长沙', '郑州', '青岛', '无锡', '济南', '宁波', '佛山',
			'南通', '哈尔滨', '东莞', '福州', '长春', '石家庄', '烟台', '合肥', '唐山', '常州',
			'昆明', '南昌', '泉州', '温州', '绍兴', '嘉兴', '厦门', '贵阳', '徐州', '南宁', '扬州',
			'金华', '台州', '镇江', '中山', '珠海', '保定', '兰州', '鞍山', '台州', '江门', '太原',
		],
	}

});

function dq() {
	let arr = [];
	let reg = document.querySelector('.region');
	let li = reg.parentElement;
	let dps = reg.childNodes[0].childNodes[1];
	let lis = reg.children[1].children;
	//鼠标移上显示
	li.addEventListener('mouseenter', () => {
		reg.classList.remove('hid');
		li.children[1].innerHTML = '<';
	})
	li.addEventListener('mouseleave', () => {
		reg.classList.add('hid');
		li.children[1].innerHTML = '>';
	})
	//把lis里面的li往arr里面添加
	for (const key in lis) {
		arr.push(lis[key]);
	}
	//遍历arr添加点击事件
	arr.forEach((val, key) => {
		val.onclick = function () {
			li.children[0].innerHTML = val.innerHTML;
			reg.classList.add('hid');
			dps.innerHTML = val.innerHTML;
		}

	})
}
dq();

//搜索框功能
(function () {
	let sousuo = document.getElementsByClassName('sousuo')[0];
	//搜索框
	let inp = sousuo.childNodes[0].childNodes[0];
	//text
	let text = document.getElementsByClassName('sousuo-s')[0];
	let te = [];

	inp.addEventListener('keyup', function (v) {

		let va = inp.value;
		te = [];
		text.innerHTML = '';
		for (const val of car) {
			let e = val.name;
			if (e.includes(va)) {
				te.push(e);
			}
		}
		if (te != []) {
			let ul = document.createElement('ul');
			for (let i = 0; i < te.length; i++) {
				ul.innerHTML += `<li onclick='cli(this)'>${te[i]}</li>`;
			}
			text.appendChild(ul)
			text.classList.add('sousuo-hidden')
		}
	})
	inp.addEventListener('blur',()=>{
		//设置一个定时器，不然点击li身上的点击事件找不到这个值
		setTimeout(()=>{
			text.classList.remove('sousuo-hidden')
		},100)
	})

	//搜索跳转
	let button = document.querySelector('.sousuo button');
	button.addEventListener('click',function(){
    if(window.location.href.match(/cxk\//)){
      window.location.href = 'shangpin.html' + '?' + inp.value;
    }else{
      window.location.href = 'cxk/shangpin.html' + '?' + inp.value;
    }
	})

})();

//搜索框获取值
function cli(e){
	let inp = e.parentElement.parentElement.parentElement.childNodes[0].childNodes[0];
	inp.value = e.innerText;
}