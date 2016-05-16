/*global health-tracker, $*/

window.HealthTracker = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function () {
    'use strict';
    var calStoreView = new HealthTracker.Views.CaloreStore();
    var searchView = new HealthTracker.Views.SearchResults();
  }
};

$(document).ready(function () {
  'use strict';
  HealthTracker.init();
  });
