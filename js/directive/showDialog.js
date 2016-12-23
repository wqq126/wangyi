angular.module('myApp')
.directive('showDialog',[function(){
	return {
		restrict:'C',
		link:function(scope,ele,attr){
			$(ele).on('click',function(){
				return false;
			})
		}
	}
}])
