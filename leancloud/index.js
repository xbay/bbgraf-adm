var AV = require('leancloud-storage');
var APP_ID = 'CD9BaC3u0JICfL7BD1BXlv0W-gzGzoHsz';
var APP_KEY = 'MTWPisBa6i4ruPU49hcT4hcx';
AV.init({
	appId: APP_ID,
	appKey: APP_KEY
});


var TestObject = AV.Object.extend('TestObject');
var testObject = new TestObject();
testObject.save({
	  testabc: 'abc123'
}).then(function() {
	  console.log('LeanCloud works!');
}).catch(function(err) {
	  console.log('error:' + err);
});
