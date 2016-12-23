var myApp = angular.module('myApp', ['ui.router', 'ngSanitize']);
myApp.controller('myCtrl', function($scope, $location) {
	$scope.jump = function() {
		$location.url('pageTab');
	}
});
myApp.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.when('', 'news');
	$urlRouterProvider.otherwise('news');
	$stateProvider
	//	.state("news",{
	//          //对应之前的$location.url("pageTab");进行路由选择
	//          url:"/news",
	//          //该路由将加载的页面
	//          templateUrl:"views/news.html",
	//          
	//      }) 
		.state("news", {
			url: "/news",
			views: {
				'@': {

					templateUrl: "views/news.html",
					controller: function(listService, $scope, data) {
						$scope.index;
						$scope.items = data;
						listService.setReqState(false);
						
						$scope.deleshow = function(item,$event){
							$event.preventDefault; 
							console.log($event);
							$('.news-list').preventDefault;
							$scope.index =$scope.items.indexOf(item);
							console.log($scope.index)
							$($event).parent().parent().parent().addClass('delclass');
							$('.delDialog').show();
							return false;
						}
						$scope.delok = function($event){
							$scope.items.splice($scope.index,1);
							$('.delDialog').hide();
							
						}
						$scope.delcancle = function(){
							$('.delDialog').hide();
						}
					},
					
					resolve: {
						data: function(listService) {
							return listService.getLists().then(function(res) {
								return res.data.T1348647853363;
							})
						}
					}

				}
			}
		})
		.state('news.headline',{
			url:'/headline/:id',
			views:{
				'@':{
					templateUrl: "views/news.html",
					controller:function(headService,$scope,$stateParams,data){
						var id = $stateParams.id;
						$scope.items = data[id];
						$scope.deleshow = function(item,$event){
							$event.preventDefault; 
							console.log($event);
							$('.news-list').preventDefault;
							$scope.index =$scope.items.indexOf(item);
							console.log($scope.index)
							$($event).parent().parent().parent().addClass('delclass');
							$('.delDialog').show();
							return false;
						}
						$scope.delok = function($event){
							$scope.items.splice($scope.index,1);
							$('.delDialog').hide();
							
						}
						$scope.delcancle = function(){
							$('.delDialog').hide();
						}
						
					},
					resolve:{
						data:function(headService,$stateParams){
							var id = $stateParams.id;
							return headService.getLists(id).then(function(res){
								return res.data;
							})
						}
					}
				}
			}
		})
		.state('news.comment',{
			url:'/comment/:id',
			views:{
				'@': {
					templateUrl:'views/comment-list.html'
				}
			}
		})
		.state('news.detail', {
			url: "/detail/:id",
			views: {
				'@': {
					templateUrl: 'views/news-detail.html',
					controller: function(listService, $stateParams, $scope) {
						var id = $stateParams.id;
						$scope.id = $stateParams.id;
						$scope.next = function() {
							console.log('scroll');
						}
						listService.getNewDetail(id).then(function(res) {
							$scope.news = res.data[id];
							var REG_img = '<!--IMG#(.*?)?-->';
							var regExpression = new RegExp(REG_img, 'mg');
							if($scope.news) {
								$scope.body = res.data[id].body.replace(regExpression, function(a, b) {
									for(var i = 0; i < res.data[id].img.length; i++) {
										if(i == b) {
											b = res.data[id].img[i].src;
										}
									}
									return '<img src=' + b + '>';
								})
							}
						});
						listService.getComment(id).then(function(res) {
							$scope.preThree = [];
							$scope.replys = res.data;

							var commentIds = res.data.commentIds;
							var comments = res.data.comments;
							if(commentIds && commentIds.length > 3) {
								var three = commentIds.slice(0, 3);

								three.forEach(function(tar) {
									var result = tar.split(',').pop();

									$scope.preThree.push(comments[result])
								})
							}

						})

					}
				}
			}
			//      	
		})
		.state("live", {
			url: "/live",
			views:{
				'@':{
					templateUrl: "views/page2.html"		
				}
			}
			
		})
		.state("home.page3", {
			url: "/page3",
			templateUrl: "views/page3.html"
		});
})