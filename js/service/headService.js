function getHead($http){
	var offset = 0;
	var size = 10;
	var isRequesting = false;
	this.getLists = function(id){
		var url = 'http://c.3g.163.com/nc/article/list/'+id+'/'+offset+'-'+size+'.html';
		return $http.get(url);
	}
//	this.getNext = function(id){
//		if(!isRequesting){
//			isRequesting = true;
//			offset=offset+10;
//			return this.getLists(id);
//		}	
//	}
//	this.setReqState = function(state){
//		isRequesting = false;
//	}
}
angular.module('myApp')
.service('headService',getHead)

