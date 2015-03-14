var frisby = require('../../node_modules/frisby/lib/frisby');
// Jasmine 1.3 is accessable from this file

var URL = 'http://localhost:3000/api/';

var customMatchers = {

};

beforeEach(function() {
  this.addMatchers(customMatchers);
});

frisby.create('GET todo model')
.get(URL + 'todos')
.expectStatus(200)
.toss();

var newTodo = {
  isDone: false,
  order: 999,
  points: 1,
  title: 'This is a test todo that should not appear in production'
};

frisby.create('POST todo model')
.post(URL + 'todos', newTodo)
.expectStatus(200)
// key:values in newTodo must be in response
.expectJSON(newTodo)
.afterJSON(function(postResponseTodo) {
  // console.log(postResponseTodo);
  var todoId = postResponseTodo._id,
  // test failure b/c of actual failure in api!
      putChanges = {
        isDone: true,
        order: 998,
        points: 2,
        title: 'This is a test todo that should not appear in production'
      };

  frisby.create('PUT todo model')
  .put(URL + 'todos/' + todoId, putChanges)
  .expectStatus(200)
  .expectJSON(putChanges)
  .afterJSON(function(putResponseTodo) {
    var patchChanges = {order: 997};

    frisby.create('PATCH todo model')
    .patch(URL + 'todos/' + todoId, patchChanges)
    .expectStatus(200)
    .expectJSON(patchChanges)
    .afterJSON(function(patchResponseTodo) {

      frisby.create('DELETE todo model')
      .delete(URL + 'todos/' + todoId)
      .expectStatus(200)
      .toss();
    })
    .toss();
  })
  .toss();
})
.toss();

// dat sexy callback hell