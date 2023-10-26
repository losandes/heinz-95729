To explore the topics in this course, you will apply what you are learning in either a team, or solo project.

## Objectives

-   Gather requirements from the client (professor)
-   Present the requirements to the client in User Story format
-   Plan your approach: Design through Planning Poker
-   Agree on a branching strategy
-   Work together as a team to implement the design
-   Use Pull-Requests and Code Reviews to merge new code
-   Present your solution to the class
-   Submit peer evaluations

## The Ask (examples)

There are project starter kits for some of the examples below in https://github.com/losandes/heinz-95729-project.


### Generate AI: Large Language Models (e.g. ChatGPT)

-   Multi-Agent System Development: Combining Goal-Based Dialog Agents with LLMs
    -   Combine Goal-Based Dialog Agents with Large Language Models (LLMs) to develop a multi-agent system capable of addressing user requests and intentions. The agent should integrate with a 3rd party API to achieve this result. For instance, the agent might interact with a payment gateway or a delivery service to complete a purchase of some kind.

-   Composite AI, Security & Privacy Enhancement: Using RAG to enable secure conversations
    -   Enhance an LLM using Retrieval-Augmented Generation (RAG) to enable private and secure conversations about sensitive topics (e.g. confidential enterprise data, personal coaching).

### CUI In Slack, With Alexa, etc.

-   Speech and Text Processing: Converting language into intent and actionable steps
    -   Build a bot for Slack, or skills for Alexa to support an interactive shopping experience using the [data that was open-sourced by Instacart](https://tech.instacart.com/3-million-instacart-orders-open-sourced-d40d29ead6f2) or [another public dataset for recommender systems](https://github.com/caserec/Datasets-for-Recommender-Systems). A working app should let me add and remove items from a shopping cart. It should also let me check the prices of items, and checkout to make a purchase (checkout using Stripe integration with the terminal may or may not be required depending on team size).

### Machine Learning

-   Behavioral Analysis and Recommendations: Utilizing ML for pattern recognition and personalized recommendations
    -   Using [data that was open-sourced by Instacart](https://tech.instacart.com/3-million-instacart-orders-open-sourced-d40d29ead6f2) or [another public dataset for recommender systems](https://github.com/caserec/Datasets-for-Recommender-Systems) prepare the data so it can be used to suggest, or upsell other products to consumers. Demonstrate the efficacy of at least 3 algorithms, selecting from Content-Based Filtering (Classification), Collaborative Filtering (Nearest Neighbor, Matrix Factorization, Restricted Boltzmann Machines), and/or Association Analysis (Apriori, FP Growth). How do different techniques effect the user experience? How might we balance different consumer desires, such as unfiltered exploration, and filtered suggestions? If you explore FP-Growth, how should we determine the thresholds to tune the FP-Growth algorithm? You may suggest other algorithms, or other ways to explore ML when negotiating the scope of your project.

### Multi-page E-Commerce Site (Platform App Development)

-   Multi-Page Applications (MPAs): Achieving a 100 Lighthouse performance score for an E-Commerce app
    -   Using either Astro (NodeJS) or Fresh (Deno), build a complete, Multi-Page E-Commerce App that sells goods by integrating with Shopify. Top scores require that your app achieves a 100 [Lighthouse performance score](https://developer.chrome.com/en/docs/lighthouse/performance/performance-scoring/).

### Real-World Integration (Custom App Development)

-   Integrating AI solutions with real-world platforms
    -   Our book store has no shopping cart! We need a way for people to buy books, and we also want to persist a person’s cart beyond the current session. Add shopping cart functionality to the app.
    -   We have no way to checkout, and make purchases. Integrate with [Stripe](https://stripe.com/docs/api#intro) to facilitate checkout.
    -   We have no way for user's to see their previous orders. Add order history to the app.


### Causal AI (Research)

-   Algorithm Comparison: Evaluating the strengths and weaknesses of different algorithms; Technical Proof of Concept: Validating hypotheses through technical proofs of concept
    -   Discover data and algorithms to predict the likelihood of disease in a population

### Your Idea Here

-   You may present alternative project or paper ideas when its time to start the course project. Not all ideas will be accepted. Ideas must be challenging, and align with the course objectives.

## Deliverables

**Objectives**: Your Objectives & Key Results (OKRs) are due the day after our requirements gathering session.

**Design**: We’ll spend the following class designing to the OKRs. A high-level design document must be submitted by the following class, following our design session. The document must communicate your data design strategy, necessary UI components and server-side controllers and logic that will meet the client’s needs.

**Implementation**: Your code must be merged into a shared branch, and the location of that code must be submitted for review for grading. It must have unit or developer tests to prove that it’s working.

**Presentation**: Each team will briefly present their approach and a working prototype.

**Peer Evaluations**: Inner-team peer evaluations, based on the provided rubric, will be submitted after the presentation, and will be used as part of grading.

## Negotiation

Each team has one opportunity to re-negotiate your terms. There is no guarantee that I will accept your negotiation, and failure to succeed in your negotiation does not earn you a second chance to negotiate.

## Rubrics

The following tables describe the criteria that will be used to grade the team project. The final rubric, for peer reviews, will be used by each of you to review your fellow team members at the end of the team project.

### Objectives & Key Results

| Points | Criteria for OKRs |
|:-------|:--------------------------|
|3 | OKRs represent the clients needs and follow the provided pattern |
|1 | OKRs were incomplete and did not follow the provided pattern |
|0 | No OKRs were presented |

### Design

| Points | Criteria for Design |
|:-------|:--------------------|
| 2 | Design document addresses all OKRs |
| 1 | Design document was incomplete or did not address the OKRs |
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
| 22 | • All OKRs were implemented • All implementations work • Client-side and Server-side Unit Tests are complete • All team members participated in the implementation • Agreed upon principles, patterns, and practices were implemented |
| 20 | • All OKRs were implemented • All implementations work • All team members participated in the implementation • Agreed upon principles, patterns, and practices were implemented |
| 17 | All OKRs were implemented • Most implementations work • Client-side and Server-side Unit Tests are incomplete • All team members participated in the implementation • Agreed upon principles, patterns, and practices were implemented |
|14 | All OKRs were implemented •  Many implementations do not work • Client-side and Server-side Unit Tests missing or near missing • All team members participated in the implementation • Agreed upon principles, patterns, and practices were implemented |
|10 | • Some stories were implemented • Many implementations do not work • Client-side and Server-side Unit Tests missing or near missing • Some team members participated in the implementation • Agreed upon principles, patterns, and practices were not implemented |
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
