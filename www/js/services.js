angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Critical Level',
    lastText: 'This is a Critical alert.',
    face: 'img/critical.png'
  }, {
    id: 1,
    name: 'Error Level',
    lastText: 'This is a Error alert.',
    face: 'img/error.png'
  }, {
    id: 2,
    name: 'Information Level',
    lastText: 'This is a Normal alert.',
    face: 'img/informational.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
