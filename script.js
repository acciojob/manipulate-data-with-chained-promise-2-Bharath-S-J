let arr = [1, 2, 3, 4];
let divv = document.getElementById("output");

function initialdelay() {
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(arr)
		},3000)
	})
	
}

function filternum(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data.filter(n => n % 2 === 0));
    }, 1000);
  });
}

function mulnum(arr) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(arr.map(n => n * 2));
    }, 2000);
  });
}

initialdelay()
	.then((data)=>{
	return filternum(data);
	})
  .then((data) => {
    divv.innerText = data;
    return mulnum(data);
  })
  .then((data) => {
    divv.innerText = data;
  });
