var fs = require('fs');

function insertNewPost(name, license, car, time, date, start, end, isDriver) {
  var postHTML = Handlebars.templates.postTemplate({
    name: name,
    license: license,
    car: car,
    time: time,
    date: date,
    start: start,
    end: end,
    isDriver: isDriver
  });
  console.log(" ==postHTML", postHTML);

  var postsContainer = document.getElementById('posts-container');
  postsContainer.insertAdjacentHTML('beforeend', postHTML);
  // return postHTML;
  addPostToJSON(name, license, car, time, date, start, end, isDriver);
  }

function addPostToJSON(name, license, car, time, date, start, end, isDriver){
  var post = {"name": name, "license": license, "car": car, "time": time, "date": date, "start": start, "end": end, "isDriver": isDriver};
  fs.appendFile("postData.json", post, function (err) {
  if (err) throw err;
  console.log('Updated!');
});
}
