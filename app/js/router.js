define([
  'backbone',
  'views/index'
], function (Backbone, IndexView) {
  return Backbone.Router.extend({
    routes: {
      "(?:params)": "index"
    },

    index: function() {
      var indexView = new IndexView();
      indexView.render();
    }
  });
});