allPosts = [{name:"dd", license: "sdd", car: "sdd", time: "sd", date: "5", start: "corvallis", end: "portland"}];
function insertNewPost(name, license, car, time, date, start, end) {
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
    });
    console.log(" ==postHTML", postHTML);

    allPosts.push({
      name: name,
      license: license,
      car: car,
      time: time,
      date: date,
      start: start,
      end: end,
    })

    var postsContainer = document.getElementById('posts-container');
    postsContainer.insertAdjacentHTML('beforeend', postHTML);

  }
  // return postHTML;
}

function insertNewPost2(name, license, car, time, date, start, end) {
  console.log("create new post");

    var postHTML = Handlebars.templates.postTemplate({
      name: name,
      license: license,
      car: car,
      time: time,
      date: date,
      start: start,
      end: end,
    });
    console.log(" ==postHTML", postHTML);

    var postsContainer = document.getElementById('posts-container');
    postsContainer.insertAdjacentHTML('beforeend', postHTML);


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
   console.log("filtering")
  var filters = {
    start: document.getElementById('filter-start').value,
    end: document.getElementById('filter-end').value,
    date: document.getElementById('filter-date').value,
  }

  console.log(filters);

  /*
   * Remove all "post" elements from the DOM.
   */
  console.log(allPosts);
  var postContainer = document.getElementsByClassName('post-container');
  while(postContainer[0].lastChild) {
    postContainer[0].removeChild(postContainer[0].lastChild);
    console.log("removing");
  }

  /*
   * Loop through the collection of all "post" elements and re-insert ones
   * that meet the current filtering criteria.
   */
  allPosts.forEach(function (post) {
    if (passFilter(post, filters)) {
      insertNewPost2(post.name, post.license, post.car, post.time, post.date, post.start, post.end);
    }
  });
}

function passFilter(post, filters){
  if (filters.start) {
    var postStart = post.start.toLowerCase();
    var filterStart = filters.start.toLowerCase();
    if (postStart.indexOf(filterStart) === -1) {
      console.log("false start");
      console.log(postStart, filterStart);

      return false;
    }
  }

  if (filters.end) {
    var postEnd= post.end.toLowerCase();
    var filterEnd = filters.end.toLowerCase();
    if (postStart.indexOf(filterEnd) === -1) {
      console.log("false");

      return false;
    }
  }

  if (filters.date) {
    var postDate = Number(post.date);
    var filterDate = Number(filters.date);
    if (postDate != filterDate) {
      console.log("false");

      return false;
    }
  }
  console.log("true");
  return true;

}


var createButton = document.getElementById('create');
if (createButton){
  createButton.addEventListener('click', insertNewPost);
}


var filterButton = document.getElementById('filter-update-button');
if (filterButton){
  filterButton.addEventListener('click', filter);
}
