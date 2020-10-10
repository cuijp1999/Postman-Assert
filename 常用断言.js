
pm.test("断言状态码", function () {
    pm.response.to.have.status(200);
});


pm.test("响应体包含字符串", function () {
    pm.expect(pm.response.text()).to.include("string_you_want_to_search");
});

pm.test("json串取值断言", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.value).to.eql(100);
});



// 类型断言
pm.test("Your test name", function () {
    var jsonData = pm.response.json();
    pm.expect(typeof jsonData.items[0].key_word).to.eql('string');
});



// 长度断言
pm.test("等于长度", function () {
    pm.expect(pm.response.json().name).to.have.lengthOf(4);
});

pm.test("长度大于", function () {
    pm.expect(pm.response.json().name).to.have.lengthOf.above(3);
});

pm.test("长度小于", function () {
    pm.expect(pm.response.json().name).to.have.lengthOf.below(5);
});

pm.test("长度区间", function () {
    pm.expect(pm.response.json().name).to.have.lengthOf.within(3,5);
});

/*
js常用类型判断

表达式						返回值
typeof undefined			'undefined'
typeof null					'object'
typeof true					'boolean'
typeof 123					'number'
typeof "abc"				'string'
typeof function() {}		'function'
typeof {}					'object'
typeof []					'object'
typeof unknownVariable		'undefined'
*/