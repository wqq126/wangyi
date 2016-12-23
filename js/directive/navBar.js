angular.module('myApp').directive('navBar',['topicService','$state',function(topicService,$state){
	var data = '';
	return {
		restrict:'EA',
		templateUrl:'views/navBar.html',
		link:function(scope,ele,attr){
			topicService.getTopic().then(function(data){
				scope.headerList = data.data.tList;
			
			});
			ele.on('click touch','.item-bar a',function(e){
				var a = e.target;
				$(this).parent().parent().find('a').removeClass('checked');
				angular.element(a).addClass('checked');
				var rect = a.getBoundingClientRect();
				var navBar = $(ele).find('.navBar');
				var left = navBar[0].offsetLeft - 1 * (rect.left - window.innerWidth / 2);
				if(left>0){
					left = 0;
					
				}
				navBar.css({left:left+'px'});
//				$ctrl.say(e.target);
			})
			
		},
		controller:['$http',function($http){
			
		}]
		
	}
}])