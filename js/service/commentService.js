angular.module('myApp')
.service('commentService',['$http',function($http){
	var offset = 0;
	var size = 10;
	var isRequesting = false;
	this.getcomment = function(id){
		var url = 'http://comment.api.163.com/api/v1/products/a2869674571f77b5a0867c3d71db5856/threads/'+id+'/app/comments/newList?format=building&headLimit=3&ibc=newsappios&limit='
		+size+'&offset='+offset+'&showLevelThreshold=5&tailLimit=2';
		
		return $http.get(url);
	}
	this.getNext = function(id){
		if(!isRequesting){
			
			isRequesting = true;
			offset = offset +10;
			
			return this.getcomment(id);
		}
	}
	this.setReqState = function(state){
		isRequesting = state;
	}
}])