angular.module('myApp')
.controller('headerCtr',['topicService','$scope',function(topicService,$scope){
//	topicService.getTopic.then(function(res){
//		console.log()
//	})
}])
//.controller('news',['listService', '$scope', function(listService, $scope){
//	listService.getLists().then(function(res) {
//		$scope.items = res.data.T1348647853363;
//		$scope.index=true;
//		listService.setReqState(false);
//		$scope.deleshow = function(item,$event){
//								$event.preventDefault();
//								$scope.index =$scope.items.indexOf(item);
//								$($event).parent().parent().addClass('delclass');
//								$('.delDialog').show();
//								return false;
//							}
//	})
//}])
