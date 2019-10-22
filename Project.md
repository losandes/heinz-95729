To explore the topics in this course, you will apply what you are learning in either a team, or solo project.


## Objectives

* Gather requirements from the client (professor)
* Present the requirements to the client in User Story format
* Plan your approach: Design through Planning Poker
* Agree on a branching strategy
* Work together as a team to implement the design
* Use Pull-Requests and Code Reviews to merge new code
* Test your code
* Present your solution to the class
* Submit peer evaluations

## The Ask (examples)

### APIs, Web UX, and Integration

* Our book store has no shopping cart! We need a way for people to buy books, and we also want to persist a person’s cart beyond the current session. Add shopping cart functionality to the app.
* We have no way to checkout, and make purchases. Integrate with [Stripe](https://stripe.com/docs/api#intro) to facilitate checkout.
* We have no way for user's to see their previous orders. Add order history to the app.

### CUI In the App

* Refactor the search bar in the application to support an interactive conversational user interface (CUI). Add the ability to put books in a shopping cart, and to navigate the site, using Natural Language Processing (NLP).

### CUI In the Terminal

* Using the [data that was open-sourced by Instacart](https://tech.instacart.com/3-million-instacart-orders-open-sourced-d40d29ead6f2), prepare the data so it can be used in a CUI. A working app should let me add and remove items from a shopping cart. It should also let me check the prices of items, and pseudo-checkout to make a purchase (psuedo meaning Stripe integration with the terminal is not necessary).

### CUI In Slack, With Alexa, etc.

* Build a bot for Slack, or skills for Alexa to support an interactive shopping experience (See #cui-in-the-terminal for more details)

### Machine Learning

* Using the [data that was open-sourced by Instacart](https://tech.instacart.com/3-million-instacart-orders-open-sourced-d40d29ead6f2), prepare the data so it can be used to suggest, or upsell other products based on what a person has in their cart. Suggested algorithms are Apriori and FP-Growth.

### Machine Learning Paper

* Compare algorithms for suggesting, or upselling products based on what a person puts in their cart. How should we determine the thresholds to tune the FP-Growth algorithm?

### Your Idea Here

* You may present alternative project or paper ideas when its time to start the course project. Not all ideas will be accepted. Ideas must be challenging, and align with the course content.

## Deliverables

**UserStories**: Your user stories are due the day after our requirements gathering session.

**Design**: We’ll spend the following class designing to the user stories. A high-level design document must be submitted by the following class, following our design session. The document must communicate your data design strategy, necessary UI components and server-side controllers and logic that will meet the client’s needs.

**Implementation**: Your code must be merged into a shared branch, and the location of that code must be submitted for review for grading. It must have unit or developer tests to prove that it’s working.

**Presentation**: Each team will briefly present their approach and a working prototype.

**Peer Evaluations**: Inner-team peer evaluations, based on the provided rubric, will be submitted after the presentation, and will be used as part of grading.

## Negotiation
Each team has one opportunity to re-negotiate your terms. There is no guarantee that I will accept your negotiation, and failure to succeed in your negotiation does not earn you a second chance to negotiate.

## Rubrics
The following tables describe the criteria that will be used to grade the team project. The final rubric, for peer reviews, will be used by each of you to review your fellow team members at the end of the team project.

### User Stories
| Points | Criteria for User Stories |
|:-------|:--------------------------|
|3 | User stories represent the clients needs and follow the provided pattern |
|1 | User stories were incomplete and did not follow the provided pattern |
|0 | No user stories were presented |

### Design
| Points | Criteria for Design |
|:-------|:--------------------|
| 2 | Design document addresses all user stories |
| 1 | Design document was incomplete or did not address the user stories |
| 0 | No design document was presented |

### Team Work
| Points | Criteria for Team Work |
|:-------|:-----------------------|
| 10 | • All team members commited code • The branching and merging strategies are abundantly clear because all team members took part in the same workflow |
| 5 | • Multiple team members commited code • Branching and merging strategies are at least somewhat apparent |
| 2 | • Multiple team members commited code • Branching and merging strategies were not followed |
| 0 | • Indications are that one team member performed the work |

### Implementation
| Points | Criteria for Implementation |
|:-------|:----------------------------|
| 20 | • All user stories were implemented • All implementations work • Client-side and Server-side Unit Tests are complete • All team members participated in the implementation • SOLID principles and relevant design patterns were implemented |
| 17 | All user stories were implemented • Most implementations work • Client-side and Server-side Unit Tests are incomplete • All team members participated in the implementation • SOLID principles and relevant design patterns were implemented |
|14 | All user stories were implemented •  Many implementations do not work • Client-side and Server-side Unit Tests missing or near missing • All team members participated in the implementation • SOLID principles and relevant design patterns were implemented |
|10 | • Some stories were implemented • Many implementations do not work • Client-side and Server-side Unit Tests missing or near missing • Some team members participated in the implementation • SOLID principles and relevant design patterns were not implemented |
|0 | Team project was not performed |

### Presentation
| Points | Criteria for Presentation |
|:-------|:--------------------------|
| 20 | • All team members took part in presentation • The team effectively communicates their design • The team illustrates where and how they followed SOLID principles and other design patterns |
| 17 | • All team members took part in presentation • The team struggles to communicate their design • The team struggles to illustrate where and how they followed SOLID principles and other design patterns |
| 15 | • Some team members took part in presentation • The team struggles to communicate their design • The team struggles to illustrate where and how they followed SOLID principles and other design patterns |
| 0 | No presentation was offered |

### Peer Reviews
| Points | Criteria for Peer Reviews |
|:-------|:--------------------------|
| 10 | • The team member led aspects of the project • The team member participated in each stage of the project • The team member worked well with others on the team • The team member followed the agreed upon workflow
| 9 | • The team member participated in each stage of the project • The team member worked well with others on the team • The team member followed the agreed upon workflow |
| 7 | • The team member did not participate in each stage of the project • The team member worked well with others on the team • The team member struggled with the workflow |
| 4 | • The team member did not participate in each stage of the project • The team member did not work well with others on the team • The team member struggled with or did not participate in the workflow |
| 0 | The team member did not participate in the project |
