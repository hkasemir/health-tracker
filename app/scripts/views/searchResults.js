/*global HealthTracker, Backbone, JST*/

HealthTracker.Views = HealthTracker.Views || {};

(function () {
  'use strict';

  HealthTracker.Views.SearchResults = Backbone.View.extend({

    template: JST['app/scripts/templates/searchResults.ejs'],

    tagName: 'div',

    id: 'search-results',

    className: '',

    events: {},

    initialize: function () {
      this.render();
    },

    render: function () {
      $('#search-container').html(this.$el);
      this.$el.html(this.template());
    }

  });

})();
