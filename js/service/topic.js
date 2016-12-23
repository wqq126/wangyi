angular.module('myApp')
.factory('topicService',['$http',function($http){
	var service = {
		getTopic:function(){
		var url = 'http://c.m.163.com/nc/topicset/ios/subscribe/manage/listspecial.html';
		
		return $http.get(url);
	}
	}
	return service;
}])