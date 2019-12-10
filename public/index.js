var fs = require('fs');

function insertNewPost(name, license, car, time, date, start, end, isDriver) {
  console.log("create new post");
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
<<<<<<< HEAD
}

var createButton = document.getElementById('create');
createButton.addEventListener('click', insertNewPost);
=======
  addPostToJSON(name, license, car, time, date, start, end, isDriver);
  }

function addPostToJSON(name, license, car, time, date, start, end, isDriver){
  var post = {"name": name, "license": license, "car": car, "time": time, "date": date, "start": start, "end": end, "isDriver": isDriver};
  fs.appendFile("postData.json", post, function (err) {
  if (err) throw err;
  console.log('Updated!');
});
}
>>>>>>> d23bc5dcb4d2250a624f5f397b2b4a4bb1e04fa7
