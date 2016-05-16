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
//      this.listenTo(this.model, 'change', this.render);
      this.render();
    },

    render: function () {
      $('#calore-container').html(this.$el);
      this.$el.html(this.template());
    }

  });

})();
