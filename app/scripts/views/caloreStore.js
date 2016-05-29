/*global HealthTracker, Backbone, JST*/

HealthTracker.Views = HealthTracker.Views || {};

(function () {
  'use strict';

  HealthTracker.Views.CaloreStore = Backbone.View.extend({

    template: JST['app/scripts/templates/caloreStore.ejs'],

    tagName: 'div',

    id: 'calore-store',

    className: '',

    events: {},

    initialize: function () {
      this.listenTo(this.model, 'change', this.render);
      this.render();
    },

    render: function () {
      $('#calore-container').html(this.$el);
      this.$el.html(this.template());
      this.model.each(this.renderItem);
    },

    renderItem: function (model) {
      let itemView = new HealthTracker.Views.StoreItemView({ model: model,
                                                        collection: HealthTracker.Collections.calCollection });
      itemView.render();
      $('#store').append(itemView.$el);
 
    }

  });

})();
