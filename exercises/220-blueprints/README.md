Exercise :: Writing and Leveraging Blueprints
=============================================

## The Problem
In programming, we often need a way to define the expectations of an object's properties, to validate a given state of an object, and to provide feedback as to that validity.

There are many solutions to this problem. In this exercise, we will use [Blueprints](https://github.com/losandes/polyn/wiki/Blueprint) to define and validate object schemas.


## Exercise 1: Guarding Against Invalid Arguments
Sometimes it's important for us to validate the arguments that are passed to to a function or method. We often refer to these as guard clauses, and they can make our code hard to read, and introduce unnecessary responsibilities.

In this exercise, we have a Blueprint, and a function that uses that blueprint to defend it's expectations of the argument. To get the test to pass:

1. Refactor the constructor below the "TODO" comment until the test passes

#### Testing Your Work

1. Perform the work for this exercise in the `exercise-1/exercise.js` file, in this directory.
2. To test your work, with a terminal prompt in that directory, run: `node exercise`

## Exercise 2: Guard Clauses
In exercise 2, I noted that guard clauses can make our code hard to read, and introduce unnecessary responsibilities. In this exercise, we have a function that accepts several primitive arguments, and validates them explicitly. There are so many problems with this approach:

* Our function has too many responsibilities. It needs to know what properties and features it has and needs to expose. It also needs to know how to validate different properties. The latter responsibility is cumbersome, unique, and should be performed by code whose responsibility is solely to validate.
* The more, custom logic we add to each function makes it harder to refactor when things change... and they WILL change.
* When many primitive arguments are expected, it's easy to transpose the order, which can lead to erroneous data that passes validation!
* When many primitive arguments are expected, we have to pass in values for properties that aren't required (i.e. we pass in null arguments)
* When many primitive arguments are expected, we're more likely to write unnecessary overloads for our functions. Polymorphism can be very useful, but it also challenges our capacity to understand a given domain. More often than not, it adds unnecessary complexity.
* When many primitive arguments are expected, the code that calls the function is less expressive

```javascript
// Can you tell which is the first name, and which is the last name?
// Is there any clue as to what `null` represents?
// What would happen if the `Person` constructor arguments changed?
var notExpressive = new Person('Randolph', null, 'Richard');

var expressive = new Person({
    firstName: 'Randolph',
    middleName: null,   // note that we can omit this property, as well
    lastName: 'Richard'
});
```

Let's avoid these problems, and refactor our function to use a Blueprint instead:

1. Write a Blueprint that defines the same expectations as the guard clauses in the existing function
2. Replace the primitive arguments, with a single object argument
3. Replace the explicit guard clauses with Blueprint validation that returns an Error if the argument is not valid

#### Testing Your Work

1. Perform the work for this exercise in the `exercise-2/exercise.js` file, in this directory.
2. To test your work, with a terminal prompt in that directory, run: `node exercise`
