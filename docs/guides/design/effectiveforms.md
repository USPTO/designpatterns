---
title: "Effective forms"
---

<div class="pl-pattern">   
<h3>Effective forms</h3>

Web forms provide an incredible advantage over paper forms in their potential for accessibility, usability, and operational efficiency, but when designed without users in mind they can lose many of these benefits. In this guide, we’ve outlined several ways to ensure the best possible user experience.

####Choosing a form structure

The structure of your form should fit with the ways in which your users will want to use it.

Ask yourself:

- Will your users want to move through the form in a fixed order, or one of their choosing?
- Will they be able to complete the form in a single go?
- Will their answers affect other parts of the form?
- Will they want to go back and review or change answers to previous questions?
- Will they need to add or remove items from a list, or change the order of things?
- How many parties are involved in the form?
- Do any parts of the form take place offline?
- At what point is the form regarded as complete?

How you answer these questions will help you decide how to structure the form. It can help to think in terms of levels: sections, subsections, groups, etc. Try not to worry about how those levels should be represented in the interface until you have a broader understanding of the overall structure.

For example, on a website, you might choose to have one section per page, or multiple sections per page. It depends on what's going to work best for your users.
<br><br>
</div>

<div class="pl-pattern">   
### Option 1: Single page

All sections are positioned on a single page.

<div class="row">

<div class="col-sm-4">
![Diagram showing all sections on a page](../guides/images/EffectiveForms1@2x.png)
</div>

<div class="col-sm-4">
#### The good

* There's only one submit button to press
* A single URL gives access to all form fields
* It doesn't force a fixed order of completion
* You benefit from context of neighboring sections
* Progress is self-evident
</div>

<div class="col-sm-4">
#### The bad

* Long forms can be overwhelming and off-putting
* It's less well suited to branching or non-linear flow
* How do you save partial progress?
* Can be harder to track analytics like drop-off rates
</div> 

</div>


<br><br>
</div>


<div class="pl-pattern">   
### Option 2: Wizard

Each section goes on its own page.

![Diagram showing each section on its own page](../guides/images/EffectiveForms2@2x.png)

<div class="row">

<div class="col-sm-6">
#### The good

* It's easier to handle branching and dependencies between sections
* It's easier to let the user save progress
* A long form can feel more manageable
* Easier to guide a user through an unfamiliar process
* Easier to capture analytics like drop-off rates for each section

</div>

<div class="col-sm-6">
#### The bad

* Can be harder for users to see where they are within the form
* It can slow users down as they have to click and load each section
* You lose the contextual information from neighboring sections
* Harder for users to review and edit previous sections
* There's no single place for users to go back and edit their data
* Not a natural fit for non-linear processes like looping, adding and removing

</div>
</div>
<br><br>
</div>

<div class="pl-pattern">   
### Option 3: Accordion form

All sections on a single page, but each new section only appears once the previous section has been completed. Done well, option 3 is a hybrid of the other two that has benefits of both the other options. Within this hybrid option there are still some important design decisions to make, for example:

* Will future questions be shown in any way or will you only see the questions you've answered?
* What happens if you go back and edit a previous question?
    * Does the current question stay open or closed?
    * How do you get back to the current question once you've edited a previous one?
    * Do you lose all your answers to questions that follow the one you go back to edit?

![Diagram showing an accordion form](../guides/images/EffectiveForms3@2x.png)

<div class="row">

<div class="col-sm-6">

#### The good

* Can handle branching and dependencies between sections
* Can easily review and edit previous questions
* Can help guide a user through an unfamiliar process
* User still benefits from some surrounding context
* Progress is clear

</div>

<div class="col-sm-6">

#### The bad

* Implementation and interface is more complex

</div>

</div>

<br><br>
</div>

<div class="pl-pattern">   
### Option 4: Hybrid

For more complicated forms, some combination of the other options might be your best bet.

Done well, this can give you the benefits of both the single page and wizard approaches. It also allows you to create a sense of rhythm to the overall flow, which can help users understand when they have moved into a different part of the form, and break up the monotony of filling in forms.

As always, these design decisions must have a strong, user-centred rationale behind them.

![Diagram showing a hybrid form](../guides/images/EffectiveForms4@2x.png)

<br><br>

</div>

<div class="pl-pattern">
### Best practices

#### Helping users

You should be aiming for a service that's so intuitive people don't need any help in using it. If you find yourself explaining the interface within the interface it's a sign that something has gone wrong. 

Sometimes though, people are going to need extra help. Many government forms involve concepts and terminology that people will be unfamiliar with. Some of this stuff takes a lot of explaining, so we need a way of providing contextual help of varying degrees of detail throughout a form.

##### Methods for providing extra help:

###### Inline help
Short, snappy text, positioned near the part of the interface it refers to. If it's something that everyone needs to know, make it permanently visible.

###### Progressive disclosure
A fancy phrase for hiding stuff until it's clicked on. Used carefully this is a good way of keeping the interface free from potentially confusing clutter. Only use this for help that's intended for a small subset of your audience (say, less than 10%).

###### Field masking
When a specific data entry format is required, as for phone numbers, dates, and social security numbers, provide an example of the required format (e.g., XXX-XX-XXXX).

###### Rich contextual help
Sometimes you need to give users access to supporting content, in case they're unfamiliar with the terminology or concepts involved in the form. This kind of content should probably exist as a page outside of the form, and then be repurposed in some way within the form.
  
#### Communicating errors

Despite providing the best possible helper text and contextual help, you should still plan for when users make errors when filling out your forms.

##### Tips for communicating errors:

###### Indicate optional and/or required fields
If most of the fields are required, leave them alone and just mark the optional fields as optional. If most of the fields are optional, leave them alone and just mark the required fields as required. If it’s close to a tie, go with whichever choice might be better for your users.

###### Combine field-level error text with a page-level error message
This is particularly important for accessibility. If someone is using a screenreader to navigate the page, a digest of errors at the top of the page will help them understand which fields need fixing. Including anchor links to the invalid fields will allow them to find and fix the error without re-navigating the entire form. 

###### Be descriptive with error text
Tell the user what caused the error and how to correct it.

###### Validate fields before the user submits
Check for errors as the user fills out the form (e.g., using javascript) and provide inline messaging with instructions for how to correct the error.

Also consider including affirmative inline validation (such as green checkmarks) for required text fields, especially those that require specific formats or character counts, such as Zip Codes and passwords.

#### Saving progress

If the average time to complete a form is more than you can reasonably expect your users to spend in a single session, then you need to provide a way for them to save their progress.

The same goes if the session is likely to be interrupted for some reason. For example, if the user is suddenly asked for information which they might not have immediately on hand (a way to mitigate this is to warn users if they're going to be asked for that kind of information). Another example is that the user might start a form on their mobile device and want to continue filling it out on their desktop computer.

#### Setting expectations

The further in to a form someone gets, the more time they have invested in it and the greater their annoyance if they have to abandon it for some reason.

Be honest about what you're offering users, and what you're not offering them. In particular, people need to know up front about any:

* Costs involved
* Waiting periods or delays
* Uncommon or hard-to-find infomation they'll need to provide
* Constraints on who can complete the form (age, nationality etc)
* Equipment that will be required (e.g., a printer)
* Non-digital parts of the form

Use common sense, though. Don't try to make everyone read a page of terms and conditions before they start (they won't).

The best approach is to meet (or exceed) people's expectations. For example, if your delivery times are typical and you accept all the usual payment methods then you won't need to warn everyone about them up front.

#### Keeping it simple

Every request for information from the user:


* Requires additional physical and cognitive effort 
* Creates another opportunity for them to get something 'wrong'
* Increases the time it takes to complete the form
* Increases the perception that the service is invasive
* Increases the risk that users will give up or fail to submit your form

Asking for information because 'it might be useful' or 'it helps with our record keeping' should be considered against all of these factors.

<br><br>
</div>

<div class="pl-pattern">   
#### Attribution
This guide on effective forms has been adapted from the guide [Effective forms](https://cfpb.github.io/design-manual/guides/effective-forms.html) in the [CFPB Design Manual](https://cfpb.github.io/design-manual/) which is itself adapted from the guide [Designing transactions](https://www.gov.uk/service-manual/user-centred-design/designing-transactions.html) in the [GOV.UK Government Service Design Manual](https://www.gov.uk/service-manual), which is licensed under the [Open Government License v2.0](http://www.nationalarchives.gov.uk/doc/open-government-licence/version/2/).
<br><br>
</div>
