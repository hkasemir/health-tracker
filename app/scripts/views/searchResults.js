/*global HealthTracker, Backbone, JST*/

HealthTracker.Views = HealthTracker.Views || {};

(function () {
  'use strict';

  HealthTracker.Views.SearchResults = Backbone.View.extend({

    el: $('#search-container'),

    template: JST['app/scripts/templates/searchResults.ejs'],

    className: '',

    events: {
      'click #searchButton' : 'fetchNutritionix',
      'keydown #search' : 'autocomplete',
    },

    initialize: function () {
      this.listenTo(this.model, 'change', this.render);
      this.render();
    },

    render: function () {
      this.$el.html(this.template({
	items: this.model.models
      }));
    },

    autocomplete: function(evt) {
      let self = this;
      let search = $('#search');
      if(evt.keyCode === 13) {
	this.model.fetchNutritionix(search.val());
      };
      let apiOptions = {
	q: search.val(),
	appId: '14e205da',
        appKey: '19b4fdb6d50cacf129595e048adcbb5f'
      };

      let baseUrl = 'https://api.nutritionix.com/v2/autocomplete?'
      if(apiOptions.q){
	fetch(baseUrl + $.param(apiOptions)).then(response => {
	  response.json().then(json => {
	    let options = json.map(function(item){
	      return item.text;
	    });
	    search.autocomplete({
	      source: options
	    });
	  })
	});
      }
    }

  });

})();
