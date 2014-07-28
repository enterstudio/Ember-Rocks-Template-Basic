import Ember from 'ember';

// ensure we don't share routes between all Router instances
var Router = Ember.Router.extend({
  // Create a clean URL, without the #/
  // 'history', 'auto'
  location: 'auto'
});

Router.map(function() {

});

export default Router;
