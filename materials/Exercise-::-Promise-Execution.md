In applications, we often need to control the flow of operations, to achieve series and parallel execution. JavaScript runs on an event loop, and to gain the most performance out of it, we need to avoid writing code that blocks the process. To do that, we execute our code asynchronously / concurrently. JavaScript Promises offer a way to control the flow, when we let the event loop manage when our code actually executes.

#### After completing this exercise, you should be able to:

* Get an glimpse of how Promises can be used to control flow synchronously and asynchronously
* Avoid a common pitfall when writing Promises: unexpected results
* Demonstrate how to implement a Builder Pattern

#### Why should I do this?

* Promises are uses throughout many programming communities, not just JavaScript
* Promises are built in functionality we can use to control flow
* Promises often astonish us (not good), so exploring common pitfalls helps us avoid future time sinks
* The Builder Pattern is common throughout many programming communities
* Promises are an alternative to using callbacks, which you'll be exposed to in the MongoDB exercises

-----------------------------
[Start Learning About Promises](/losandes/heinz-95729-materials-2017/tree/master/week-2/30-promise-execution).
