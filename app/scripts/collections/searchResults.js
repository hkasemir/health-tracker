/*global HealthTracker, Backbone*/

HealthTracker.Collections = HealthTracker.Collections || {};

(function () {
  'use strict';

  HealthTracker.Collections.SearchResults = Backbone.Collection.extend({

    
    fetchNutritionix: function(query) {

      let urlBase = 'https://api.nutritionix.com/v1_1/search/';
      let apiOptions = {
	results: '0:5',
	fields: 'item_name,brand_name,nf_calories,nf_serving_size_qty,nf_serving_size_unit',
	appId: '14e205da',
        appKey: '19b4fdb6d50cacf129595e048adcbb5f'
      }
    
      let fetchUrl = urlBase + query + '?' + $.param(apiOptions);
      fetch(fetchUrl).then (result => {
	result.json().then(json => {
	  this.addResults(json.hits);
	  this.trigger('change');
	})
      })
    },

    addResults: function (foodArray) {
      // empty old search results
      this.reset();
      // add a new model for each search result
      foodArray.forEach(item => {
	let f = item.fields
	this.add({
	  foodName: f.item_name,
	  brand: f.brand_name, 
	  servingQty: f.nf_serving_size_qty,
	  servingSize: f.nf_serving_size_unit,
	  calories: f.nf_calories
	});
      });
    },

    clearResults: function () {
      this.reset();
    }
  });
  
  
})();

