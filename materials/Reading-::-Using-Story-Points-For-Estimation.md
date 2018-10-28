Many teams use _story points_ as a way of estimating the size, complexity or weight of a task. Story points are relative measurements, so the story points that we assign to a given task are relative to the other tasks we are estimating. Story points can be used in place of time estimates when the business supports it.

As a tool to measure capacity, and velocity, we must first record a baseline for a team that uses story points. We do this by assigning story points, and measuring a team's progress towards accomplishing the associated tasks over time. Once we have a baseline, story points can be used to qualify time estimates, and can even be translated into time estimates.

Regardless of how we use story points, it's important that teams come to a shared understanding of what the points represent. This article shares some approaches to achieving such continuity.

## Glossary
Following are some terms that are used in this article:

* **card**: The unit of measurement for defining work. Examples include: a card in Trello, an issue in Github, a task, story, sub-task, etc. in Jira.
* **pervasive**: spreading widely throughout an area; or simply spread throughout

## As a Conversation Tool
Teams can estimate story points together using a process called, _planning poker_. This activity enhances the estimation conversation and helps us gain a more comprehensive understanding of the problems we are solving. This presents a benefit to most projects, even when the story points are not recorded or measured over time.

When _planning poker_, we describe the task and let everyone ask questions. Then, all at the same time, we vote on the number of story points. If we vote the same - we have our answer. If not, we negotiate. What happens is usually: (a) the person who threw less points has a simpler solution or (b) the person who threw higher points understands a complexity in greater detail.

It's usually easier to avoid granularity, when our goal is to promote critical thinking, and conversation. Following is an example that avoids granularity, which makes it easy to achieve continuity.

```
1 - simple, non-pervasive task
2 - simple, pervasive task
3 - complex, non-pervasive task
5 - complex, pervasive task
8 - epic - break it into smaller tasks
```

## As Estimates
If we're using story points as estimates, then we _might_ benefit from more granularity than what is appropriate for the [conversation approach](#as-a-conversation-tool).

We can still use the 1-8 point system, described in the [conversation approach](#as-a-conversation-tool), if we commit to card-explosion: the act of breaking every task (i.e. each item in a check-list) into separate cards. With card-explosion, the granularity is in the card, rather than in the point system.

If that requires too much overhead, a more detailed point system _might_ help. This system allows us to estimate at a higher level, and compensates for measurements that span check-lists of tasks or issues that may belong to a single card.
```
0.5 - trivial (i.e. text change)
  1 - simple, non-pervasive task
  2 - simple, pervasive task
  3 - complex, non-pervasive task || multiple simple, non-pervasive tasks
  5 - complex, pervasive task || multiple simple, pervasive tasks
  8 - multiple complex, non-pervasive tasks
 13 - multiple complex, pervasive tasks
 21 - epic - break it into smaller tasks
```

### Estimate accuracy
Teams often use card estimation as a means to track velocity. A teams velocity is a measurement of how much the team gets done in an iteration. On it's own, velocity tells us how much, on average, a team can accomplish in a given span of time. This requires continuity; that members do not change, which is not always realistic.

A deeper understanding of performance comes when we also track the inputs that impact a teams' velocity. Understanding impacts helps us optimize our environment and culture toward high-performance. Some teams capture this information in retrospectives, however the accuracy and completeness of a retrospective diminishes the longer an iteration/sprint is. It's usually better to track impacts as they occur.

For example, I've consistently seen team productivity drop to near-zero when key members leave the team, when employees are engaged in acquisition matters, and when organizational changes, such as layoffs occur. I've witnessed morale problems arise from members feeling like they aren't part of the planning process or goal setting, and when they aren't given enough responsibility.

On the flip side, I've seen teams produce at consistently high levels when they believe in their leaders, when they feel that their work positively impacts society, and when vision and goals are transparent. I've seen them excel when the development lifecycle is curated as one, holstic lifecycle, when cross-functional members collaborate directly with each other, and when a sole, unicorn/architect/guru or small team of which owns the lifecycle, drives consistency, and provides tooling.

In any event, the more granular an estimate for building software is, the less accurate it will be. How could that be? If we break the tasks into small pieces, shouldn't they be easier to estimate? We don't know what we don't know, and unknowns often impact the time it takes for us to write software. While the estimates for a single task may be wildy inaccurate, when grouped together over long enough time spans, the inaccuracies often even out.

Granular estimates also tend to suffer from our natural tendency towards focus. When we ask developers to estimate a task, many will provide an estimate for the time it will take to write code that solves the problem. A true estimate, will also include the time it takes to analyze the problem, to collaborate with other analysts, developers, end users and managers, to write tests for the solution, to manually test it, for others to review it, to address merge conflicts, and to release it to multiple environments. Does that shake you up a bit? It's ok, it should.

This leads many teams to only perform card-level estimates using story-points, and to reserve time estimates for activities that are measured in months.

## Pervasive vs. Non-Pervasive
What does it mean, for a task to be pervasive?

> pervasive
> /per-vey-siv/
> spreading widely throughout an area; or simply spread throughout
>
> -- [google](https://www.google.com/search?client=safari&rls=en&q=define:pervasive&ie=UTF-8&oe=UTF-8)

Changes to, or new code that requires other code or systems to be refactored _is_ pervasive. Changes to, or new code that _doesn't_ require other code or systems to be refactored, is _not_ pervasive.

> Sometimes, we estimate pervasive tasks as non-pervasive tasks when the affect on other code or systems is negligent.

For example, let's say we have a model called `Order`, in an existing, production application:

```JSON
{
    "id": "order.id",
    "items": "order.items",
    "customerId": "order.customerId"
}
```

Then one day, we decide we should be tracking when orders were placed and delivered. We need to add `timeOrderPlaced` and `timeOrderDelivered` properties.

To do this, we need to:

* Refactor the server-side models
* Add validation that: (a) requires `timeOrderPlaced` and (b) ensures the dates are valid

One might argue that this is already pervasive, because it affects not only the `Order` model, but also our API endpoints for `Order`. At this point, though, that pervasiveness is probably negligent.

However, in all likelihood, other systems are affected, like any apps that integrate with our APIs, such as our UX (our mobile and web app(s)). At a minimum, we probably also need to:

* Refactor the client-side models
* Add validation that: (a) requires `timeOrderPlaced` and (b) ensures the dates are valid
* Display recent orders
* Display recently delivered orders

Now we recognize this change as being pervasive. And as you might notice, the difference is less of a fine-line, and more of a grey-area.

## Risk
When estimating, it is sometimes desirable to capture risk along with the estimate. This can help us understand how confident we are with our estimates. Our confidence level can help us choose the right amount of contingency. Some forms of estimation are driven by this confidence, such as the [Monte Carlo method](https://en.wikipedia.org/wiki/Monte_Carlo_method).

Here is an example structure for describing risk:

* **None**: Exceeding the estimate by anything meaningful would be shocking.
* **Low**: I'm _confident_ that the estimate _is accurate_, but it’s not guaranteed
* **Medium**: I'm _not confident_ that the estimate is accurate
* **High**: I'm _confident_ that the estimate is _not accurate_
* **Very High**: I asked my Magic 8 Ball from childhood if my estimate was accurate 3 times. It replied: (1) Reply hazy try again, (2) Ask again later, (3) Outlook not so good
