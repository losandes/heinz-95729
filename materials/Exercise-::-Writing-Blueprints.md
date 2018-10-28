In programming, we often need a way to define the expectations of an object's properties, to validate a given state of an object, and to provide feedback as to that validity.

In strongly typed languages, type validation is inherent. In weakly typed languages, such as JavaScript, type exists, but is not enforced by the language. Many languages have interfaces, which help us enforce signature expectations, across objects. JavaScript does not. In any case, we often need to validate much more than type. Is the property required? Does it have boundaries (i.e. minimum or maximum values)?

There are many solutions to these problems, in each language. For JavaScript, I wrote [Blueprint](https://github.com/losandes/polyn/wiki/Blueprint), to provide concise schema / model validation, and to bring some of the benefits of _interfaces_ to JavaScript.

#### Building on the Hilary Module that we wrote in the last exercise, you should be able to:

* Write modules that conform to a programmatic specification
* Use Blueprint to validate arguments

#### Why should I do this?

* The Node.js app is built on Hilary, and uses Blueprints - both the server and the client
* These exercises foreshadow some of the principles we are going to learn next week
* If you have a Java background, these exercises introduce extremely valuable language features that are common in many languages, but unavailable Java.

-----------------------------
[Try Writing Some Blueprints](../exercises/220-blueprints).
