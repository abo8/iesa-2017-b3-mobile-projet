angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {


  var callback = function(buttonIndex) {
    var sourceType = navigator.camera.PictureSourceType.PHOTOLIBRARY;
    if(buttonIndex == 2) {
      sourceType = navigator.camera.PictureSourceType.CAMERA;
    }

    var cameraOptions = {
      quality: 50,
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: sourceType
    };

    var cameraSuccess = function(imageURI) {
      $scope.$apply(function () {
        $scope.image = imageURI;
      });
    };

    navigator.camera.getPicture(cameraSuccess, null, cameraOptions);
  };

  $scope.sheet  = function() {
    var options = {
      // 'androidTheme': window.plugins.actionsheet.ANDROID_THEMES.THEME_HOLO_LIGHT,
      'buttonLabels': ['Library', 'Camera'],
      'androidEnableCancelButton' : true, // default false
      'winphoneEnableCancelButton' : true, // default false
      'addCancelButtonWithLabel': 'Cancel',
      'position': [20, 40] // for iPad pass in the [x, y] position of the popover
    };
    window.plugins.actionsheet.show(options, callback);
  };
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
