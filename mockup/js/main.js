var HabitVPS = {};
HabitVPS.Models = {};
HabitVPS.Collections = {};
HabitVPS.Views = {};

HabitVPS.Models.TodoItem = Backbone.Model.extend({
  defaults: function() {
    return {
      title: 'Add new todo item',
      order: Todos.nextOrder(),
      isDone: false,
      points: 1
    };
  }
});

HabitVPS.Collections.TodoList = Backbone.Collection.extend({

  model: HabitVPS.Models.TodoItem,
  localStorage: new Backbone.LocalStorage('todolist'),

  nextOrder: function() {
    if (!this.length) return 1;
    return this.last().get('order') + 1;
  },

  comparator: 'order'
});

var todoList = new HabitVPS.Collections.TodoList();

// Stores general information about the user
HabitVPS.Models.UserData = Backbone.Model.extend({
  defaults: function() {
    return {
      username: '',
      // List of strings for now
      items: [],
      points: 0
    };
  }
});

HabitVPS.Models.Pet = Backbone.Model.extend({
  defaults: function() {
    return {
      name: '',
      species: 'MurderCrow',
      maxEnergy: 5,
      currentEnergy: 3,
      // Amount of energy to decrement each day
      energyDecrement: 1
    };
  }
});

// Where should I store flavor text data? Is that its own model? Part of the view?