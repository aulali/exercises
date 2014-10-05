me = {
  "name": "Autumn",
  "age": 32
};

console.log("My name is " + me.name + " and I am " + me.age + " years old.");

ageMe = function(years){
  me.age += years;
}

ageMe(1);

console.log("New age = " + me.age);

me.introduce = function(){
  console.log("My name is " + this.name + "and I'm " + this.age);
}

me.introduce();

var favoriteBooks = [
  {
    "title": "Huckleberry Finn",
    "author": "Mark Twain"
  },
  {
    "title": "Gone With The Wind",
    "author": "Margaret Mitchell"
  }];

  console.table(favoriteBooks);