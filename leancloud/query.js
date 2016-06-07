/**
 * Created by mac on 7/6/2016.
 */
var AV = require('leancloud-storage');
var APP_ID = 'CD9BaC3u0JICfL7BD1BXlv0W-gzGzoHsz';
var APP_KEY = 'MTWPisBa6i4ruPU49hcT4hcx';
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});



var query = new AV.Query('TestObject');
query.notEqualTo('key','');
query.find().then(function(results){
  console.log(results);
});