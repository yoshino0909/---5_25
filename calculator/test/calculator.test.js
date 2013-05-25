test('コンストラクタのテスト',function(){

	var c=new Calculator();
	ok(c instanceof Calculator,'new演算子をつけてコンストラクタを呼び出す');

	 c=Calculator();
	ok(c instanceof Calculator,'new演算子をつけないでコンストラクタを呼び出す');

});

test('getExpressionのテスト',function(){
	var c=new Calculator();
	equal(c.getExpression(),'','getExpressionの初期値が空文字');
});

test('appendのテスト',function(){
	var c=new Calculator();
	c.append(1);
	equal(c.getExpression(),'1','appendで1文字追加');
	c.append(2);
	equal(c.getExpression(),'12','appendで2文字追加');

});

test('clearEntryのテスト',function(){
	var c=new Calculator();
	c.append(1);
	c.clearEntry();
	equal(c.getExpression(),'','clearEntryで1文字削除');
	c.append(23);
	equal(c.getExpression(),'23','cppend(23)追加');

	c.clearEntry();
	equal(c.getExpression(),'2','clearEntryで2文字目削除');
});


test('clearのテスト',function(){
	var c=new Calculator();
	c.append(123);
	equal(c.getExpression(),'123','appendで123');
	c.clear();
	equal(c.getExpression(),'','clearでから');
});

test('calculateの加減テスト',function(){
	var c=new Calculator();
	c.append("12+3");
	equal(c.getExpression(),'12+3','appendで12+3');
	c.calculate();
	equal(c.getExpression(),'15','12+3=15');
	
	c.append(-5);
	c.calculate();
	equal(c.getExpression(),'10','15-5=10');


});

test('calculateの乗除テスト',function(){
	var c=new Calculator();
	c.append('15');
	c.append('÷');
	equal(c.getExpression(),'15/','÷を／へ変換');
	c.append("3");
	c.calculate();
	equal(c.getExpression(),'5','15/3=5');
	c.append("×");
	equal(c.getExpression(),'5*','×を*へ変換');

	c.append(5);
	c.calculate();
	equal(c.getExpression(),'25','15*5=25');


});


