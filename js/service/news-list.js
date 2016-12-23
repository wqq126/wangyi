function DataService($http){
	var offset = 0;
	var size = 20;
	var id;
	var isRequesting = false;
	this.getLists = function(){
				
		var url = 'http://c.m.163.com/nc/article/headline/T1348647853363/'+offset+'-'+size+'.html';
//		var url = 'http://c.m.163.com/nc/article/headline/T1348647853363/0-10.html';
     	return $http.get(url);
	}
	this.getNext = function(){
		if(!isRequesting){
			isRequesting = true;
			offset=offset+10;
			return this.getLists();
		}
	}
	this.setReqState = function(state){
		isRequesting = false;
	}
	
	this.getNewDetail = function(id){

		var detailUrl = 'http://c.m.163.com/nc/article/'+id+'/full.html';
		return $http.get(detailUrl);
	}
	//获得跟帖
	this.getComment = function(id){
		var url = 'http://comment.api.163.com/api/v1/products/a2869674571f77b5a0867c3d71db5856/threads/'+id+'/app/comments/newList?format=building&headLimit=3&ibc=newsappios&limit='
		+size+'&offset='+offset+'&showLevelThreshold=5&tailLimit=2';
		return $http.get(url);
	}
}
angular.module('myApp')
.service('listService',DataService) 

