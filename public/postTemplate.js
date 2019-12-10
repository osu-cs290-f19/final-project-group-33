(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['postTemplate'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class = \"post-container\">\n  <div class = \"Name\">\n    "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":3,"column":12}}}) : helper)))
    + "\n  </div>\n\n\n  <div class = \"License\">\n    "
    + alias4(((helper = (helper = helpers.license || (depth0 != null ? depth0.license : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"license","hash":{},"data":data,"loc":{"start":{"line":8,"column":4},"end":{"line":8,"column":15}}}) : helper)))
    + "\n  </div>\n  <div class = \"Car\">\n    "
    + alias4(((helper = (helper = helpers.car || (depth0 != null ? depth0.car : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"car","hash":{},"data":data,"loc":{"start":{"line":11,"column":4},"end":{"line":11,"column":11}}}) : helper)))
    + "\n  </div>\n\n\n  <div class = \"Time\">\n    "
    + alias4(((helper = (helper = helpers.time || (depth0 != null ? depth0.time : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time","hash":{},"data":data,"loc":{"start":{"line":16,"column":4},"end":{"line":16,"column":12}}}) : helper)))
    + "\n  </div>\n\n  <div class = \"Date\">\n    "
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data,"loc":{"start":{"line":20,"column":4},"end":{"line":20,"column":12}}}) : helper)))
    + "\n  </div>\n\n  <div class = \"Start Location\">\n    "
    + alias4(((helper = (helper = helpers.start || (depth0 != null ? depth0.start : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"start","hash":{},"data":data,"loc":{"start":{"line":24,"column":4},"end":{"line":24,"column":13}}}) : helper)))
    + "\n  </div>\n\n  <div class = \"Destination Location\">\n    "
    + alias4(((helper = (helper = helpers.end || (depth0 != null ? depth0.end : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"end","hash":{},"data":data,"loc":{"start":{"line":28,"column":4},"end":{"line":28,"column":11}}}) : helper)))
    + "\n  </div>\n\n\n</div>\n";
},"useData":true});
})();