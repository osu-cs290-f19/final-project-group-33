

allPosts = [];



function generatePosts(){
  console.log("hello");
  var nameData = document.getElementsByClassName('Name');
  var licenseData = document.getElementsByClassName('License');
  var carData = document.getElementsByClassName('Car');
  var timeData = document.getElementsByClassName('Time');
  var dateData = document.getElementsByClassName('Date');
  var startData = document.getElementsByClassName('Start Location');
  var endData = document.getElementsByClassName('Destination Location');

  for (i=0; i < nameData.length; i++){
    allPosts.push({
      name: nameData[i].dataset.n,
      license: licenseData[i].dataset.l,
      car: carData[i].dataset.c,
      time: timeData[i].dataset.t,
      date: dateData[i].dataset.d,
      start: startData[i].dataset.s,
      end: endData[i].dataset.e
    });

  }
  console.log(allPosts);
}
generatePosts();

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
        var postRequest = new XMLHttpRequest();
        var requestURL = '/driver/addPost';
        postRequest.open('POST', requestURL);

        var requestBody = JSON.stringify({
          name: name,
          license: license,
          car: car,
          phone: phone,
          time: time,
          date: date,
          start: start,
          end: end
        });
        console.log("hello");
        console.log("== requestBody:", requestBody);
        postRequest.setRequestHeader('Content-Type', 'application/json');

        postRequest.addEventListener('load', function (event) {
          if (event.target.status !== 200) {
            var responseBody = event.target.response;
            alert("Error saving post on server side: " + responseBody);
          } else {
            var postHTML = Handlebars.templates.postTemplate({
              name: name,
              license: license,
              car: car,
              time: time,
              date: date,
              start: start,
              end: end
            });
            console.log(" ==postHTML", postHTML);

            allPosts.push({
              name: name,
              license: license,
              car: car,
              time: time,
              date: date,
              start: start,
              end: end
            })

            var postsContainer = document.getElementById('posts-container');
            postsContainer.insertAdjacentHTML('beforeend', postHTML);
          }
        });
        postRequest.send(requestBody);
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
      end: end
    });
    console.log(" ==postHTML", postHTML);

    var postsContainer = document.getElementById('posts-container');
    postsContainer.insertAdjacentHTML('beforeend', postHTML);

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
  var postContainer = document.getElementById('posts-container');
  while(postContainer.lastChild) {
    postContainer.removeChild(postContainer.lastChild);
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

  var deleteButton = document.getElementsByClassName('delete-button');
  for (i=0; i<deleteButton.length; i++){
    deleteButton[i].addEventListener('click', function(e){
      e.currentTarget.parentNode.parentNode.remove();
    });
  }
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
    if (postEnd.indexOf(filterEnd) === -1) {
      console.log("false");

      return false;
    }
  }

  if (filters.date) {
    var postDate = post.date.toLowerCase();
    var filterDate = filters.date.toLowerCase();
    if (postDate.indexOf(filterDate) === -1) {
      console.log("false");

      return false;
    }
  }
  console.log("true");
  return true;

}

var deleteButton = document.getElementsByClassName('delete-button');
for (i=0; i<deleteButton.length; i++){
  deleteButton[i].addEventListener('click', function(e){
    v = e.currentTarget.parentNode.parentNode;
    console.log(allPosts);
    for (j=0; j<allPosts.length; j++){
      console.log(allPosts[j].license);
      if (v.getElementsByClassName("License")[0].dataset.l == allPosts[j].license){
        console.log("DASD");
        allPosts.splice(j, 1);
        var postRequest = new XMLHttpRequest();
        var requestURL = '/driver/deletePost';
        postRequest.open('POST', requestURL);
        var z = j.toString()
        var requestBody = JSON.stringify({
          index: z
        });
        console.log(requestBody);
        postRequest.setRequestHeader('Content-Type', 'application/json');
        postRequest.send(requestBody);


        deleteButton = document.getElementsByClassName('delete-button');
      }
    }
    console.log(allPosts);
    v.remove();
  });
}

var createButton = document.getElementById('create');
if (createButton){
  createButton.addEventListener('click', insertNewPost);
}

var filterButton = document.getElementById('filter-update-button');
if (filterButton){
  filterButton.addEventListener('click', filter);
}
