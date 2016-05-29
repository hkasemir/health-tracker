/*global HealthTracker, Backbone, JST*/

HealthTracker.Views = HealthTracker.Views || {};

(function () {
  'use strict';

  HealthTracker.Views.ItemView = Backbone.View.extend({

    template: JST['app/scripts/templates/itemView.ejs'],

    tagName: 'li',

    events: {
      'click .tile': 'addToBank'
    },

    initialize: function () {
      this.listenTo(this.model, 'change', this.render);
    },

    render: function () {
      this.$el.html(this.template({
	item: this.model
      }));
    },

    addToBank: function () {
      console.log(this.model)
    }

  });

})();
