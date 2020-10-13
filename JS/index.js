







// 轮播图
function lbt() {
	let arr = [
		"carImg/index/lunbo2.jpg",
		"carImg/index/lunbo1.jpg",
		"carImg/index/lunbo3.jpg",
		"carImg/index/lunbo4.jpg",
		"carImg/index/lunbo5.jpg",
		"carImg/index/lunbo6.jpg",
		"carImg/index/lunbo7.jpg",
	];
	let div = document.querySelector(".img").children[0];
	let i = 0;
	let id = setInterval(() => {
		i++;
		if (i < arr.length) {
			div.src = arr[i];
		} else {
			i = 0;
		}
	}, 3000);
	// div.addEventListener('mouseleave',id);
	// div.addEventListener('mouseenter',()=>{
	//   clearInterval(id);
	// })

	//实现按钮功能
	let lr = hiddenL();
	lr.forEach((val, index) => {
		val.addEventListener("click", () => {
			num = 1;
			if (index == 0) {
				if (i != 0) {
					i = i - 1;
					div.src = arr[i];
				} else {
					i = arr.length - 1;
					div.src = arr[i];
				}
			} else {
				if (i != arr.length - 1) {
					i = i + 1;
					div.src = arr[i];
				} else {
					i = 0;
					div.src = arr[i];
				}
			}
		});
	});
}
lbt();
//大图轮播按钮显示与隐藏
function hiddenL() {
	let anniu = document.querySelector(".img");
	let lr = [...anniu.children].filter((val, index) => index != 0);
	anniu.addEventListener("mouseover", function () {
		lr.forEach((val) => {
			val.removeAttribute("hidden");
		});
	});
	anniu.addEventListener("mouseout", () => {
		lr.forEach((val) => {
			val.setAttribute("hidden", "hidden");
		});
	});

	return lr;
}
hiddenL();

//今日要闻
function jryw(jryw, text, b) {
	let bb = b ? true : false;
	let div = document.createElement("div");
	let p = document.createElement("p");
	if (bb) {
		p.innerHTML = `<b>${b}</b> | ` + text;
	} else {
		p.innerText = text;
	}
	div.appendChild(p);
	jryw.appendChild(div);
}
let jryw3 = document.querySelector(".jryw-3");
jryw(jryw3, "售价78.88万元起 全新奔驰GLE轿跑SUV上市", "新车");
jryw(jryw3, "#懂车车轮战 车圈运动会#长安蓝鲸双冠夺魁，精彩集锦视频报道");
jryw(jryw3, "能文能武无所畏惧 试驾福特F-150 LTD");
jryw(jryw3, "北漂舞者的自白：这些年我是这样度过的，幸亏有了大众凌渡");
jryw(jryw3, "月均销量只能5000+？我好像发现了领克03增量的一个秘密");
jryw(jryw3, "全新换代的次世代马自达3，值得买吗？");
jryw(jryw3, "双离合的车买来不能干的5件事，你对号入座了吗");
jryw(jryw3, "为什么有些人月薪3000也敢买车？难道不是打肿脸充胖子吗？");
jryw(jryw3, "卖掉雷凌双擎换电动车后悔过吗？我们找了个真实滴滴司机采访");
jryw(jryw3, "20万左右预算，奔驰A级、本田雅阁、宝马1系你会怎么选？");

//热门车型  （从car.js里边获取数据）
function rmcx(e, src, name, price) {
	let div = document.createElement("div");

	div.innerHTML = `
  <img src='${src}'>
  <div>
    <span>${name}</span>
    <span>${price}</span>
  </div>
 `;
	e.appendChild(div);
}
console.log(car);
let rmcx2 = document.querySelector(".rmcx-2");
for (let i = 0; i < 9; i++) {
	rmcx(rmcx2, car[i].img, car[i].name, car[i].price);
}

function jingxuan() {
	let i = 0;
	let kuang = document.querySelectorAll('.kuang1');
	let [kuang1, kuang2, kuang3] = [...kuang];
	setInterval(() => {
		i++;
		if (i >= kuang.length) i = 0;
		switch (i) {
			case 0:
				kuang3.classList.remove('kuang-2');
				kuang2.classList.add('kuang-2');
				break;
			case 1:
				kuang1.classList.remove('kuang-2');
				kuang3.classList.add('kuang-2');
				break;
			default:
				kuang2.classList.remove('kuang-2');
				kuang1.classList.add('kuang-2');
				break;
		}
	}, 4000);
}
jingxuan()