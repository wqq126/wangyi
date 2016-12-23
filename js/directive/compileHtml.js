angular.module('myApp').directive('compileHtml', function ($compile) {
  return {
    restrict: 'A',
    replace: true,
    link: function (scope, ele, attrs) {
      scope.$watch(function () {return scope.$eval(attrs.ngBindHtml);},
          function(html) {
            ele.html(html);
            $compile(ele.contents())(scope);
          });
    }
  };
});