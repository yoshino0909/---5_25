function Calculator(){
	if (!(this instanceof Calculator)){
		return new Calculator();
	}
	this.expression='';
	
	this.getExpression = function(){
		return this.expression;
	};

	this.append = function(ch){
	if (ch==='×')  ch='*';
	if (ch==='÷') 	ch='/';
	 this.expression += ch;
	};

	this.clearEntry = function(){
		 this.expression = this.expression.substring(0,this.expression.length-1);
	};

	this.clear = function(){
		 this.expression = '';
	};
	
	this.calculate = function(){
		 return this.expression= eval(this.expression);
	};

}