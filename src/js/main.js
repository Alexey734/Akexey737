

function onClickButton() {
	// document - index.html
	// getElementById - обратится к элементу страницы по ID элемента (например 'test')
	var element = document.getElementById('test');
	var a = '19a';
	var b = 5;
	var sum = a + b;
	var array = [5,'jj',sum,6];
	var first = Math.random();
	var second = Math.random();


	var str = first + ':' + second;
    var str2 = '2025-12-31';

	var test = str2.split('-'); // [2025,12,31]
	
	var itog='';

	for (var n = 0; n < test.length; n++) {
//		itog =  itog + test[n]+ '/'; 

		if(n === (test.length-1)) {
			itog=itog+test[n];
		} else {
			itog =  itog + test[n]+ '/'; 
		}
	}

	element.textContent = itog;
	// i++ = i + 1

	// вставляет текст в элемент
	// element.textContent =first + ' ' + second;

}
// onClickButton();

