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


	var test = str.split(':'); // [434,343]


	if(test[0]>test[1]){
		element.textContent = test[0];
	} else {
	 	element.textContent = test[1];
	}
	// вставляет текст в элемент
	// element.textContent =first + ' ' + second;

}
