/*global HealthTracker, Backbone, JST*/

HealthTracker.Views = HealthTracker.Views || {};

(function () {
  'use strict';

  HealthTracker.Views.ItemView = Backbone.View.extend({

    template: JST['app/scripts/templates/itemView.ejs'],

    tagName: 'li',

    events: {
      'click .addButton': 'addToStore'
    },

    initialize: function () {
      this.listenTo(this.model, 'change', this.render);
      this.render();
    },

    render: function () {
      this.$el.html(this.template({
	item: this.model
      }));
    },

    addToStore: function () {
      let quantity = this.el.querySelector('.qtyInput').value;
      quantity ? this.model.set({ quantity: quantity  }) : this.model.set({ quantity: 1  });
      this.collection.addItem(this.model);
      HealthTracker.Collections.searchCollection.reset();
      HealthTracker.Collections.searchCollection.trigger('change');
    }

  });

})();
