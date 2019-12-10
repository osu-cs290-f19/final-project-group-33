(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['postTemplate'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class = \"post-container\">\n  <div class = \"Name\", data-n=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":2,"column":31},"end":{"line":2,"column":39}}}) : helper)))
    + "\">\n    <span class=\"tag\">Driver:</span>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":3,"column":36},"end":{"line":3,"column":44}}}) : helper)))
    + "\n  </div>\n\n\n  <div class = \"License\", data-l=\""
    + alias4(((helper = (helper = helpers.license || (depth0 != null ? depth0.license : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"license","hash":{},"data":data,"loc":{"start":{"line":7,"column":34},"end":{"line":7,"column":45}}}) : helper)))
    + "\">\n    <span class=\"tag\">Plate Number:</span>"
    + alias4(((helper = (helper = helpers.license || (depth0 != null ? depth0.license : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"license","hash":{},"data":data,"loc":{"start":{"line":8,"column":42},"end":{"line":8,"column":53}}}) : helper)))
    + "\n  </div>\n  <div class = \"Car\", data-c=\""
    + alias4(((helper = (helper = helpers.car || (depth0 != null ? depth0.car : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"car","hash":{},"data":data,"loc":{"start":{"line":10,"column":30},"end":{"line":10,"column":37}}}) : helper)))
    + "\">\n    <span class=\"tag\">Car Type:</span>"
    + alias4(((helper = (helper = helpers.car || (depth0 != null ? depth0.car : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"car","hash":{},"data":data,"loc":{"start":{"line":11,"column":38},"end":{"line":11,"column":45}}}) : helper)))
    + "\n  </div>\n\n\n  <div class = \"Time\", data-t=\""
    + alias4(((helper = (helper = helpers.time || (depth0 != null ? depth0.time : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time","hash":{},"data":data,"loc":{"start":{"line":15,"column":31},"end":{"line":15,"column":39}}}) : helper)))
    + "\">\n    <span class=\"tag\">Departure Time:</span>"
    + alias4(((helper = (helper = helpers.time || (depth0 != null ? depth0.time : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time","hash":{},"data":data,"loc":{"start":{"line":16,"column":44},"end":{"line":16,"column":52}}}) : helper)))
    + "\n  </div>\n\n  <div class = \"Date\", data-d=\""
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data,"loc":{"start":{"line":19,"column":31},"end":{"line":19,"column":39}}}) : helper)))
    + "\">\n    <span class=\"tag\">Departure Date:</span>"
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data,"loc":{"start":{"line":20,"column":44},"end":{"line":20,"column":52}}}) : helper)))
    + "\n  </div>\n\n  <div class = \"Start Location\", data-s=\""
    + alias4(((helper = (helper = helpers.start || (depth0 != null ? depth0.start : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"start","hash":{},"data":data,"loc":{"start":{"line":23,"column":41},"end":{"line":23,"column":50}}}) : helper)))
    + "\">\n    <span class=\"tag\">Departure Location:</span>"
    + alias4(((helper = (helper = helpers.start || (depth0 != null ? depth0.start : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"start","hash":{},"data":data,"loc":{"start":{"line":24,"column":48},"end":{"line":24,"column":57}}}) : helper)))
    + "\n  </div>\n\n  <div class = \"Destination Location\", data-e=\""
    + alias4(((helper = (helper = helpers.end || (depth0 != null ? depth0.end : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"end","hash":{},"data":data,"loc":{"start":{"line":27,"column":47},"end":{"line":27,"column":54}}}) : helper)))
    + "\">\n    <span class=\"tag\">Destination:</span>"
    + alias4(((helper = (helper = helpers.end || (depth0 != null ? depth0.end : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"end","hash":{},"data":data,"loc":{"start":{"line":28,"column":41},"end":{"line":28,"column":48}}}) : helper)))
    + "\n  </div>\n\n  <div class=\"delete\">\n    <button type=\"button\" id=\"delete-this\" class=\"delete-button\">Delete Post</button>\n  </div>\n\n</div>\n";
},"useData":true});
})();