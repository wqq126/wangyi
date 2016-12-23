angular.module('myApp')
.directive('scroll',['listService',function(listService){
	return {
		restrict:'A',
		link:function(scope,ele,attr){
			ele.on('scroll',function(){
				var bheight = $(ele).height();
//				获取滚动条的高度
				var sheight =$(ele)[0].scrollHeight;
				//滚动条距离顶部的距离
				var stop = $(ele).scrollTop();
				if(stop>=sheight - bheight-10){
					var promise = listService.getNext();
						if(promise) {
							promise.then(function(data) {
								var items = data.data.T1348647853363;
								scope.items = scope.items.concat(items);
                				listService.setReqState(false);
							})
						}
				}
			})
		}
	}
}])
