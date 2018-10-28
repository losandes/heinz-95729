In the _Poor Man's DI_ exercise, we learned how to compose our dependency graph by hand. This is ideal for small applications, but what if we have a large dependency graph? Composing more than 20 modules can become difficult and hard to maintain.

To ease the pain, we can use an Inversion of Control Container, or IOC Container. Many exist, but for this exercise, we're going to use hilary, which I designed for simplicity and for teaching the Dependency Inversion Principle.

#### After completing this exercise, you should be able to:

* Compose the dependency graph for an application, using an IOC Container

-------------------------------

[Try using an Inversion of Control Container](https://github.com/losandes/heinz-95729-materials-2017/tree/master/week-3/05-03-ioc-containers)