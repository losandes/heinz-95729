JavaScript objects are mutable, and therefore not protected from side-effects by default. The language does have built in features that help address this, that help us achieve a certain amount of control, and even immutability, if used correctly. However, none of them meet the Open/Closed Principle.

#### After completing this exercise, you should be able to:

* Use `freeze` to render an object closed for extension, and mostly closed for modification (freeze doesn't achieve complete immutability, which we'll cover in other exercises)
* Use `seal` to render an object open for modification, but closed for extension _(NOTE that's the opposite of OCP)_
* Use `preventExtensions` to prevent new properties from being added to an object, closing it for extension _(also not in keeping with OCP)_

----------------------------------

[Tryout JavaScript's mutability controls](../exercises/310-freezing-and-sealing)