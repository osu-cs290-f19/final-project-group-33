
function insertNewPost(name, license, car, time, date, start, end, isDriver) {
  console.log("create new post");


  var name = document.getElementById('question-name').value.trim();
  var license = document.getElementById('question-license').value.trim();
  var car = document.getElementById('question-car').value.trim();
  var phone = document.getElementById('question-phone').value.trim();
  var time = document.getElementById('question-time').value.trim();
  var date = document.getElementById('question-date').value.trim();
  var start = document.getElementById('question-start').value.trim();
  var end = document.getElementById('question-end').value.trim();

  if (!name || !license || !car || !phone || !time || !date || !start || !end) {
    alert("You must fill in all of the fields!");
  } else {

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

  }
  // return postHTML;
}

function filter(){
  console.log("filtering");
}

var createButton = document.getElementById('create');
if (createButton){
  createButton.addEventListener('click', insertNewPost);
}


var filterButton = document.getElementById('filter-update-button');
if (filterButton){
  filterButton.addEventListener('click', filter);
}
function addPostToJSON(name, license, car, time, date, start, end, isDriver){
  var post = {"name": name, "license": license, "car":car, "time":time, "date":date, "start":start, "end":end, "isDriver":isDriver};
  fs.appendFile("./postData.json", post, function (err) {
  if (err) throw err;
  console.log('Updated!');
});
};
