JavaScript objects are not protected by default. We can add and modify the properties and functions of an object, thereby introducing side effects and mutation, which can be very hard to debug. The built-in features that help to address this do not meet the Open/Closed Principle (i.e. Object.freeze, Object.seal, and Object.preventExtensions).

This exercise demonstrates a method of achieving the Open/Closed Principle in JavaScript. It also warns against the complexity of doing this, and presents us with a case for exceptions from the rule.

Principles are meant to guide our decisions, and it's important that we understand that meeting principles at all costs can lead us down the wrong path.

#### After completing this exercise, you should be able to:

* Enforce the Open/Closed Principle with code
* Demonstrate a case where meeting a principle results in potential anti-patterns

----------------------------

[Try meeting the Open/Closed Principle in JavaScript](https://github.com/losandes/heinz-95729-materials-2017/tree/master/week-3/02-02-open-closed)