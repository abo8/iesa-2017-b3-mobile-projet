angular.module('starter.controllers', ['ionic'])

.controller('DashCtrl', function($scope) {

  $scope.images = [
    'img/adam.jpg',
    'img/ben.png',
    'img/mike.png'
  ]
/*
  window.localStorage.setItem("img", $scope.images);
*/
  document.addEventListener("deviceready", onDeviceReady, false);
  function onDeviceReady() {
    var num1 = 110;

    console.log(navigator.compass);

    function onSuccess(heading) {
      var element = document.getElementById('item-nul');
      element.innerHTML = 'Heading: ' + heading.magneticHeading;
      if (heading.magneticHeading - num1 >= 40){
        alert('UN INDICE !');
      }
      num1 = heading.magneticHeading;
    };

    function onError(compassError) {
      alert('Compass error: ' + compassError.code);
    };

    var options = {
      frequency: 500
    }; // Update every 3 seconds

      navigator.compass.watchHeading(onSuccess, onError, options);

  }

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

  $scope.save = function () {
    window.localStorage.setItem("img", $scope.image);
/*    alert('Image enregsitrée !');
    alert($scope.images);*/
    $scope.images.push($scope.image);
/*
    alert($scope.images);
*/
    $scope.test = window.localStorage.getItem("img");
  };
  $scope.test = window.localStorage.getItem("img");
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

.controller('GuildeCtrl', function($scope, $cordovaContacts, $ionicPlatform) {
  $scope.joueurs = ['HardBeca', 'Manon', 'Remi', 'Romain CK'];

  $scope.getAllContacts = function() {
    var opts = {
      multiple: true,
      fields: ['displayName', 'name'],
    };
    $cordovaContacts.find(opts).then(function (contactsFound) {
      $scope.contacts = contactsFound;
    })
  }
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});



