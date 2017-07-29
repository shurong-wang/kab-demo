function foo() {
	 return '函数声明-不留空格';
}

const foo = function bar() {
	return '函数表达式【具名】-- 不留空格';
};

const foo = function () {
	return '函数表达式【匿名】-- 要留空格';
};

const foo = () => {
	const isUseBabel = '使用 Babel';
	const isRightThis = 'this 正确';
	if (isUseBabel && isRightThis) {
		return '用箭头函数代替匿名函数';
	}
}

// isEnterKey 属函数表达式【匿名】
// 左右括弧外都应留空格，与规范文档不冲突

// 原始格式：
const isEnterKey = function(key){
                return key === 13 || key === 10;
        };

// 可修改为：
const isEnterKey = key => (key === 13 || key === 10);