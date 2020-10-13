let leftneirong = document.getElementsByClassName("left-neirong")[0];

function quanbu(e, i) {
	let div = document.createElement("div");

	div.innerHTML = `
  <img src='../${car[i].img}'></img>
  <p>${car[i].name}</p>
  <p>${car[i].price}</p>
`;
	e.appendChild(div);
}
for (var i = 0; i < car.length; i++) {
	(function (i) {
		quanbu(leftneirong, i);
	})(i);
}

//条件筛选
function tjsx() {
	let uls = document.querySelectorAll(".tj-left>ul");
	uls.forEach((val, index) => {
		let lis = [];
		//过滤掉li第一个
		[...val.querySelectorAll("li")].map((val, key) => {
			if (key != 0) {
				return lis.push(val);
			}
		});

		lis.forEach((v, key) => {
			v.addEventListener("click", function () {
        
				//添加样式
				for (let i = 0; i < lis.length; i++) {
					if (i != key) {
						lis[i].classList.remove("tiaojian");
					} else {
						this.classList.add("tiaojian");
					}
        }
        
        //只有index等于1的时候才执行  获取价格的值
        let max;
        let min;
				if (index == 1 && key != 0) {
					min = this.innerHTML.substr(0, 2) * 1;
					if (key != 1 && key != 6) {
						max = this.innerHTML.split("-")[1].substr(0, 2)*1;
					}
					// console.log(max);
					console.log(min);
					console.log();
				}
				//功能实现
				leftneirong.innerHTML = "";
				for (let i = 0; i < car.length; i++) {
          //判断类型
          if (car[i].car == this.innerHTML || car[i].country == this.innerHTML) {
              quanbu(leftneirong,i);
           }
           
          //价格
          if(Math.round(car[i].price.split("-")[0]) < max && Math.round(car[i].price.split("-")[0]) > min && key != 1 && key !=6){
            quanbu(leftneirong,i);
          }else if(Math.round(car[i].price.split("-")[0]) < min && key == 1){
            quanbu(leftneirong,i);
          }else if(Math.round(car[i].price.split("-")[0]) > min && key == 6){
            quanbu(leftneirong,i);
          }else if(key == 0){
            quanbu(leftneirong,i);
          }
        }
        nr();
      });
     
		});
	});
}
tjsx();


function nr(){
  let div = document.querySelectorAll('.left-neirong>div');
  let p ;
  div.forEach((val)=>{
    val.addEventListener('click',function(){
      p = this.children[1];
      window.location.href = 'shangpin.html' + '?' + p.innerHTML;
    })
  })
}
nr();
