Exercise :: Freezing and Sealing Objects
========================================

## The Problem

JavaScript objects are not protected by default. We can add and modify the properties and functions of an object, thereby introducing side effects and mutation, which can be very hard to debug.

JavaScript has built in features that help to address this: [Object.freeze](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze), [Object.seal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal), and [Object.preventExtensions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions). These features help us achieve a certain amount of control, and even immutability, if used correctly. However, none of them meet the Open/Closed Principle. Below is a table that describes how each of these function affects the properties of an object:

| function                 | CREATE | READ | UPDATE | DELETE |
|--------------------------|--------|------|--------|--------|
| Object.freeze	           |   ✗    |  ✓   |   ✗    |   ✗    |
| Object.seal	           |   ✗    |  ✓   |   ✓    |   ✗    |
| Object.preventExtensions |   ✗    |  ✓   |   ✓    |   ✓    |

Below is an example that freezes an anonymous object:
```JavaScript
Object.freeze({
    name: 'hello world!'
});
```

#### After completing this exercise, you should be able to:

* Use `freeze` to render an object closed for extension, and _mostly_ closed for modification (freeze doesn't achieve complete immutability, which we'll cover in other exercises)
* Use `seal` to render an object open for modification, but closed for extension (_NOTE that's the opposite of OCP_)
* Use `preventExtensions` to prevent new properties from being added to an object, closing it for extension (_also not in keeping with OCP_)


## The Exercise

> NOTE this exercise is less about writing code, and more about comprehending the functions described above. I recommend running the exercise before, and after each step, and analyzing the tests, and different outcomes.

1. Refactor `FrozenRepo.js` following the `TODO` comments inside it
2. Refactor `Sealed.js` following the `TODO` comments inside it
3. Refactor `PreventExtensions.js` following the `TODO` comments inside it

#### Testing Your Work

1. Run `node exercise` before, and after each step. What test outcomes changed? How did they change, and why?

> Executing this exercise requires NodeJS to be installed
