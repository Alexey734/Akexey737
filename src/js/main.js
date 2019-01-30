function onClickButton() {
	// document - index.html
	// getElementById - обратится к элементу страницы по ID элемента (например 'test')
	var element = document.getElementById('test');
	var a = 5;
	// вставляет текст в элемент
	element.textContent = 'сумма ' + a;
}