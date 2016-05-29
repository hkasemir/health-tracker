/*global HealthTracker, Backbone, JST*/

HealthTracker.Views = HealthTracker.Views || {};

(function () {
  'use strict';

  HealthTracker.Views.StoreItemView = Backbone.View.extend({

    template: JST['app/scripts/templates/storeItemView.ejs'],

    tagName: 'li',

    id: '',

    className: '',

    events: {
      'click .delButton': 'delFromStore'
    },

    initialize: function () {
      this.listenTo(this.model, 'change', this.render);
    },

    render: function () {
      this.$el.html(this.template({
	item: this.model
      }));

    },

    delFromStore: function() {
      this.collection.remove(this.model);
      this.collection.trigger('change');
    }

  });

})();
