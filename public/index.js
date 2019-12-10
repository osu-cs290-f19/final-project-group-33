
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

// function filter(event){
//   console.log("filtering");
//   var startFilter = document.getElementById('filter-start').value.toLowerCase();
//   var endFilter = document.getElementById('filter-end').value.toLowerCase();
//   var dateFilter = document.getElementById('filter-date').value;
//
//   console.log(startFilter, endFilter, dateFilter);
//
//
//   // var posts = document.getElementsByClassName('post-container');
//   var postStart = document.getElementsByClassName('Start Location');
//   var postEnd = document.getElementsByClassName('Destination Location');
//   var postDate = document.getElementsByClassName('Date');
//   // var postsData = posts.getElementsByClassName('post');
//
//   // console.log(posts);
//   console.log(postStart[0].dataset.start);
//
// }

function filter() {

  /*
   * Grab values of filters from user inputs.
   */
  var filters = {
    start: document.getElementById('filter-start').value,
    end: document.getElementById('filter-end').value,
    date: document.getElementById('filter-date').value,
  }

  var filterConditionCheckedInputs = document.querySelectorAll("#filter-condition input:checked");
  for (var i = 0; i < filterConditionCheckedInputs.length; i++) {
    filters.conditions.push(filterConditionCheckedInputs[i].value);
  }

  /*
   * Remove all "post" elements from the DOM.
   */
  var postContainer = document.getElementsByClassName('post-container');
  while(postContainer.lastChild) {
    postContainer.removeChild(postContainer.lastChild);
  }

  /*
   * Loop through the collection of all "post" elements and re-insert ones
   * that meet the current filtering criteria.
   */
  allPosts.forEach(function (post) {
    if (postPassesFilters(post, filters)) {
      insertNewPost(post.description, post.photoURL, post.price, post.city, post.condition);
    }
  });

}

function passFilter(post, filters)


var createButton = document.getElementById('create');
if (createButton){
  createButton.addEventListener('click', insertNewPost);
}


var filterButton = document.getElementById('filter-update-button');
if (filterButton){
  filterButton.addEventListener('click', filter);
}
