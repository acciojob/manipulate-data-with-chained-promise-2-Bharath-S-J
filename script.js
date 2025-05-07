let arr = [1, 2, 3, 4];
let divv = document.getElementById("output");

function filternum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(arr.filter(n => n % 2 === 0));
    }, 1000);
  });
}

function mulnum(arr) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(arr.map(n => n * 2));
    }, 3000);
  });
}

filternum()
  .then((data) => {
    divv.innerText = data;
    return mulnum(data);
  })
  .then((data) => {
    divv.innerText = data`;
  });
