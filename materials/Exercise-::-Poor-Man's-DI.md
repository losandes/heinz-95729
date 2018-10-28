In following the Dependency Inversion Principle, we eventually find ourselves at an edge. Where do we construct our modules, if everything expects dependencies to be passed in?

Enter the composition root. The composition root is a place in our application, ideally near the entry-point, where we compose our dependency graph. There are tools to simplify this available in most languages, and often referred to as, Inversion of Control Containers. These obfuscate the complexity of defining a dependency graph, which can be a huge help, but it can also be hard to understand what's happening.

In this exercise, we're going to compose our dependency graph by hand. This if often referred to as poor man's DI, however it's the ideal way to compose dependency graphs of small applications. Why? It's easier to understand, sometimes it's faster, and it's one less dependency that our application has.

#### After completing this exercise, you should be able to:

* Use constructor injection to depend on abstractions
* Compose the dependency graph for an application by hand

---------------------------

[Try composing an application by hand](../exercises/321-poor-mans-di)