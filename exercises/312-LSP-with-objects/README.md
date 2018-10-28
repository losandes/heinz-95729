Exercise :: LSP With Objects
============================

## The Problem

In [SOLID: Part 3 - Liskov Substitution & Interface Segregation Principles](https://code.tutsplus.com/tutorials/solid-part-3-liskov-substitution-interface-segregation-principles--net-36710), the author provides a classic example that breaks Liskov's Substitution Principle. However, he doesn't provide an example solution. I've ported the example to JavaScript, using Objects.

What do we need to change, in order for this to meet Liskov's Substitution Principle?

#### After completing this exercise, you should be able to:

* Demonstrate a failure to meet Liskov's Substitution Principle
* Refactor code, so that it meets Liskov's Substitution Principle

## The Exercise

1. Refactor Square so that it's exactly the same as Rectangle
2. Now, remove either the height or width property from Square
3. Rename the remaining property to `size`
4. Now refactor the `when` of the square test, so it uses _size_ instead of _height_ and _width_. When it's done, it should look like this:

```JavaScript
var size = 6, square = new Square();

square.size = size;

return resolve({
    expected: size * size,
    actual: square.area()
});
```

#### Testing Your Work

1. Run `node exercise` before, and after each step. What test outcomes changed? How did they change, and why?

> Executing this exercise requires NodeJS to be installed
