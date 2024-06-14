let request = require("request");
let iconv  = require('iconv-lite');


let content = document.getElementsByClassName('view')[0];
let charDia = document.querySelector('.charDia');
let nonDia = document.querySelector('.nonDia');
const input = () => {
	try {
		const url = document.getElementsByClassName('url')[0].value;
		if (url.length <= 0) {
			nonDia.showModal();

		}

		let requestOptions = {
			method: "GET"
			, uri: url
			, headers: {"User-Agent": "Mozilla/5.0"}
			, encoding: null
		};


// request 모듈을 이용하여 html 요청
		request(requestOptions, function (error, response, body) {
			let charsetEuc = document.getElementsByClassName('charset')[0].value;
			let strContents = new Buffer(body);
			if (charsetEuc.includes('euc')) {
				// 전달받은 결과를 EUC-KR로 디코딩하여 출력한다.
				content.innerText = iconv.decode(strContents, 'EUC-KR').toString();
			} else {
				content.innerText = iconv.decode(strContents, 'UTF-8');
			}

			if ((content.textContent).includes('euc-kr') && charsetEuc.includes('euc') === false) {
				charDia.showModal();
			}
		});
	}catch (error) {
		console.log(error.message);
	}
}

let close = document.querySelector('.close');
close.addEventListener('click', (e) => {
	charDia.close()
})

let close2 = document.querySelector('.close2');

close2.addEventListener('click', (e) => {
	nonDia.close()
})

const inputMath = () => {
	const mathe_Reg = document.getElementsByClassName('match')[0].value;
	document.getElementsByClassName('viewMath')[0].innerText = RegExp(mathe_Reg).exec(content.textContent)[0];
}

const inputMath2 = () => {
let regView = document.getElementsByClassName('viewMath')[0].defaultValue;
	const mathExp = document.getElementsByClassName('match2')[0].value
	let newExp = new RegExp(mathExp, "gi");
	let inputEXP = regView.replace(newExp,'');
	document.getElementsByClassName('viewMath2')[0].innerText += inputEXP;
}
