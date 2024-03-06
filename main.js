//Javascript doesn't use objects conventionally like Java or Ruby. It's described as being "Syntactic sugar" for prototypes and constructors

//basically, since I already have a decent understanding of constructors, I don't need to worry as much about classes. They both will be doing the same thing, it's just a matter of choosing what style I'd prefer

//So, there are two types of object properties. The first kind are data properties, and the second kind are accessor properties

//accessor properties are values that execute on getting and setting a value, but look like regular properties to external code

let obj = {
    get propName(){
        //this is a getter, the code is executed on getting obj.propName
    },

    set propName(value){
        //setter, the code is eected on setting obj.propName = value
    }
}

// Going into more detail with using the "class" syntax

// https://javascript.info/class

//The basic class syntax is as follows

class myClass{
    constructor(){}
    method1(){}
    method2(){}
    method3(){}
    //... and so on and so forth
}

//Then use the "new" keyowrd to create a new object with the listed methods

//the constructor() method is called on automatically by new so initialize the object there


//for example

class User {

    constructor(name) {
      this.name = name;
    }
  
    sayHi() {
      console.log(this.name);
    }  // notice comma. within a class, no commas are required
  
  }
  
  // Usage:
  let user = new User("John");
  user.sayHi(); //logs "John"... it's supposed to and yet doesnt'''


// the class User {} construc is creating a function named user, and the reuslt of it becomes the class declaration. 

// the function code is taken from the constructor and all class methods such as sayHi, are stored wthin User.prototype

//calling upon new User, an object is made and when a method is called from it, it's taken from the prototype. So the object has access to the class methods

//There are other things that I can do with this (classes) which it goes into a LOT of detail but honestly, don't really care to go that into detail with it

//it's possible to extend classes apparently, which may come in handy within the framework react

//So i know that I'm going to have to do a deeper dive into composition vs inheritance cause i don't have a full understanding

