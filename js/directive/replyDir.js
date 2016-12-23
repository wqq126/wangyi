
angular.module('myApp')
    .directive('commentList',function () {
        return{
        	restrict:'EC',
            controller:function ($stateParams,commentService,$scope,$state) {
                var replyId = $stateParams.id;
				
                commentService.getcomment(replyId).then(function (data) {
                    $scope.commentIds = data.data.commentIds;
                    $scope.comments = data.data.comments;
                    $scope.data = data.data;
                });
                $scope.loadMore=function () {
                	var promise = commentService.getNext(replyId);
                	if(promise){ 
						promise.then(function(res){
						var commentIds = res.data.commentIds;
                    	var comments = res.data.comments;
                    	var data = res.data;
						$scope.commentIds = commentIds;
						$scope.comments = comments;
						$scope.data = data;
						})
                	}
                    $scope.$broadcast('scroll.infiniteScrollComplete');
                    commentService.setReqState(false);
                }
            },
            link:function(scope,ele,attr){
            	ele.on('scroll',function(){
				var bheight = $(ele).height();
				console.log(bheight);
//				获取滚动条的高度
				var sheight =$(ele)[0].scrollHeight;
				//滚动条距离顶部的距离
				var stop = $(ele).scrollTop();
				if(stop>=sheight - bheight-10){
					console.log('到底');
					scope.loadMore();	
				}
			})
            }
        }
    })
    .directive('comment',function () {
        return {
            scope:{
                data:'='
            },
            transclude:'element',
            compile:function () {
                return{
                    post:function ($scope,$element,$attr,ctr,$transclude) {
                        var ids = $scope.data.split(',');

                        var lastEle;

                        angular.forEach(ids,function (val,indx) {
                            $transclude(function (clone,scope) {
                                scope.id=val;

                                if(indx==0){
                                    $element.after(clone);
                                    lastEle = clone;


                                }
                                else{
                                    scope.comments[val]&& lastEle.append(clone);
                                    lastEle = clone;
                                }
                            })
                        })

                    }
                }
            }
        }
    });
