---
title: "Forms"
---

<div class="pl-pattern">
### Overview

__Do__

- Properly mark fields as required
- Add help blocks with inputs when necessary, especially when users may not fully understand the purpose of the input
- Place constructive action buttons on the right, and deconstructive action buttons on the left of the form
- If necessary, place short, related inputs on the same line (e.g., `City` and `State`, `Start` and `End`, `Min` and `Max`)
- Ensure that unsaved changes are not easily lost

__Don't__

- Use placeholders as the only label
- Place unrelated inputs on the same line

&nbsp;

</div>

<div class="pl-pattern">

### Field widths

Field widths should communicate the expected or max length of content. Use consistent, non-arbitrary widths to help with alignment. These widths apply to similar controls like selects, date inputs, dropdowns, and sliders. These widths may not be appropriate in some situations or layouts.

{::nomarkdown}
<div class="pl-preview">
<form role="form" class="form-horizontal" style="max-width: 600px;">
  <div class="form-group">
    <label class="col-sm-3 control-label" for="fw1">Extra small</label>
    <div class="col-sm-9">
        <input type="text" class="form-control-width-xs form-control" value="75px" id="fw1">
    </div>
  </div>
  <div class="form-group">
    <label class="col-sm-3 control-label" for="fw2">Small</label>
    <div class="col-sm-9">
        <input type="text" class="form-control-width-sm form-control" value="150px" id="fw2" >
    </div>
  </div>
  <div class="form-group">
    <label class="col-sm-3 control-label" for="fw3">Medium (default)</label>
    <div class="col-sm-9">
        <input type="text" class="form-control-width-md form-control" id="fw3" value="250px" >
    </div>
  </div>
  <div class="form-group">
    <label class="col-sm-3 control-label" for="fw4">Large</label>
    <div class="col-sm-9">
        <input type="text" class="form-control-width-lg form-control" value="350px" id="fw4" >
    </div>
  </div>
  <div class="form-group">
    <label class="col-sm-3 control-label" for="fw5">Fill</label>
    <div class="col-sm-9">
        <input type="text" class="form-control-width-fill form-control" value="100%" id="fw5" >
    </div>
  </div>
</form>
</div>
{:/nomarkdown}

{% highlight html %}
<input type="text" class="form-control-width-xs form-control" value="75px">
<input type="text" class="form-control-width-sm form-control" value="150px" >
<input type="text" class="form-control-width-sm form-control" value="150px" >
<input type="text" class="form-control-width-md form-control" value="250px" >
<input type="text" class="form-control-width-lg form-control" value="350px" >
<input type="text" class="form-control-width-fill form-control" value="100%" >
{% endhighlight %}

</div>

<div class="pl-pattern">
### Labels

Form labels can either go above or beside the input, depending on the space constraints. If you are horizontally constrained, place the labels above the input, otherwise, place the labels beside the input. In a responsive design, labels should automatically reposition themselves depending on the space available.

__Do__

- Ensure that clicking on a label focuses the corresponding input
- Use sentence capitalization for labels
- Use concise labels name
- Use the user's language for labels
- Be consistent with label positioning (above/beside)
- Be consistent with questions or statements labels

__Don't__

- Use colons after labels

#### Vertically aligned labels

Labels are placed above the inputs, left aligned.


{::nomarkdown}
<div class="pl-preview">
<form role="form" class="" style="max-width: 450px;">
    <div class="form-group col-sm-offset-3">
        <label class="control-label" for="emailInput">Email</label>
        <input type="email" class="form-control form-control-width-md" id="emailInput">
    </div>
    <div class="form-group col-sm-offset-3">
        <label class="control-label" for="passwordInput">Password</label>
        <input type="password" class="form-control form-control-width-md" id="passwordInput" >
    </div>
</form>
</div>
{:/nomarkdown}


{% highlight html %}
<form role="form">
  <div class="form-group col-sm-offset-3">
    <label class="control-label" for="emailInput">Email</label>
    <input type="email" class="form-control form-control-width-md" id="emailInput">
  </div>
  <div class="form-group col-sm-offset-3">
    <label class="control-label" for="passwordInput">Password</label>
    <input type="password" class="form-control form-control-width-md" id="passwordInput" >
  </div>
</form>
{% endhighlight %}


#### Horizontally aligned labels

Labels are to the left of the input, right aligned. 


{::nomarkdown}
<div class="pl-preview">
<form class="form-horizontal" style="max-width: 450px;" role="form">
    <div class="form-group">
      <label for="emailInput2" class="col-sm-3 control-label">Email</label>
      <div class="col-sm-9">
        <input type="email" class="form-control form-control-width-md" id="emailInput2">
      </div>
    </div>
    <div class="form-group">
      <label for="passwordInput2" class="col-sm-3 control-label">Password</label>
      <div class="col-sm-9">
        <input type="password" class="form-control form-control-width-md" id="passwordInput2" >
      </div>
    </div>
</form>
</div>
{:/nomarkdown}

{% highlight html %}
<form class="form-horizontal" role="form">
  <div class="form-group">
    <label for="emailInput2" class="col-sm-3 control-label">Email</label>
    <div class="col-sm-9">
      <input type="email" class="form-control form-control-width-md" id="emailInput2">
    </div>
  </div>
  <div class="form-group">
    <label for="passwordInput2" class="col-sm-3 control-label">Password</label>
    <div class="col-sm-9">
      <input type="password" class="form-control form-control-width-md" id="passwordInput2" >
    </div>
  </div>
</form>
{% endhighlight %}


</div>
<div class="pl-pattern">
### Required fields
Required fields are generally marked with an asterisk. For external, public facing forms, put a `* indicates required` message. For internal applications containing many forms or targeting power users, the `* indicates required` may not be necessary. Ensure that required fields are [validated](#form-validation) with appropriate feedback.

If the majority of the fields are required, consider adding `(optional)` to the optional fields instead of asterisks on the required field. 

#### Vertically aligned labels
When labels are vertically aligned, the asterisk is placed on the right.

{::nomarkdown}
<div class="pl-preview">
<form class="" style="max-width: 450px;" role="form">
    <div class="form-group col-sm-offset-3">
        <span class="help-block form-control-width-md text-right">* indicates required</span>
    </div>
    <div class="form-group col-sm-offset-3">
      <label for="nameInput3" class="control-label required">Name</label>
      <input type="text" class="form-control form-control-width-md" id="nameInput3" required aria-required="true">
    </div>
    <div class="form-group col-sm-offset-3">
      <label for="emailInput3" class="control-label">Email</label>
      <input type="email" class="form-control form-control-width-md" id="emailInput3">
    </div>
</form>
</div>
{:/nomarkdown}


{% highlight html %}
<form class="form-horizontal" role="form">
  <div class="form-group">
    <label for="nameInput5" class="col-sm-3 control-label required">Name</label>
    <div class="col-sm-9">
      <input type="text" class="form-control form-control-width-md" id="nameInput5" required aria-required="true">
    </div>
  </div>
  <div class="form-group">
    <label for="emailInput5" class="col-sm-3 control-label">Email</label>
    <div class="col-sm-9">
      <input type="email" class="form-control form-control-width-md" id="emailInput5">
    </div>
  </div>
</form>
{% endhighlight %}


#### Horizontally aligned labels
When the labels are horizontally aligned, the asterisk is placed to the left.


{::nomarkdown}
<div class="pl-preview">
<form class="form-horizontal" style="max-width: 450px;" role="form">
    <div class="form-group">
      <label for="nm7" class="col-sm-3 control-label required">Name</label>
      <div class="col-sm-9">
        <input type="text" class="form-control form-control-width-md" id="nm7" required aria-required="true">
      </div>
    </div>
    <div class="form-group">
      <label for="em7" class="col-sm-3 control-label">Email</label>
      <div class="col-sm-9">
        <input type="email" class="form-control form-control-width-md" id="em7">
      </div>
    </div>
</form>
</div>
{:/nomarkdown}


{% highlight html %}
<form class="form-horizontal" role="form">
  <div class="form-group">
    <label for="em7" class="col-sm-3 control-label required">Email</label>
    <div class="col-sm-9">
      <input type="email" class="form-control form-control-width-md" id="em7" required aria-required="true">
    </div>
  </div>
  <div class="form-group">
    <label for="pw7" class="col-sm-3 control-label">Password</label>
    <div class="col-sm-9">
      <input type="password" class="form-control form-control-width-md" id="pw7">
    </div>
  </div>
</form>
{% endhighlight %}

</div>

<div class="pl-pattern">
### Form validation

There are two main types of form validation, often used together.

- __Field level__: Validation errors appear directly below the field with errors (e.g., `This field is required.`)
- __Form level__: Validation errors appear at the top or bottom of the form (e.g., `The email or password you entered is incorrect.`, and `Please fix the 3 errors.`)

For input fields that are cramped, you may need to resort to using a popover error message.

__Do__

- Scroll to and focus the first field with an error when the submit button is pressed.
- Provide validation feedback as soon as possible, either 500ms after a key is pressed, when the field loses focus, or (if all else fails) when the form is submitted.
- Provide field level validation for fields that are known to be invalid
- Provide form level validation for large forms, or when the system doesn't know exactly which field is invalid
- Describe _why_ an error occurred (e.g., `Email is already in use` rather than `There was an error`)
- Describe/imply what the user should do to fix the error

__Don't__

- Cause the form to 'bounce' as validation errors show/hide while the user is typing
- Include technical jargon in errors


{::nomarkdown}
<div class="pl-preview">
<form class="form-horizontal" style="max-width: 450px;" role="form">
    <div class="form-group has-error">
      <label for="em9" class="col-sm-3 control-label required">Invalid</label>
      <div class="col-sm-9">
        <input type="email" class="form-control form-control-width-md" id="em9" value="john.smith@gmail" required aria-required="true" aria-invalid="true">
        <span class="help-block">This email address is not valid.</span>
      </div>
    </div>
    <div class="form-group has-error">
      <label for="pw9" class="col-sm-3 control-label required">Required</label>
      <div class="col-sm-9">
        <input type="text" class="form-control form-control-width-md" required aria-required="true" id="pw9" aria-invalid="true">
        <span class="help-block">This field is required.</span>
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-offset-3 col-sm-9">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </div>
</form>
</div>
{:/nomarkdown}


{% highlight html %}
<form class="form-horizontal" role="form">
    <div class="form-group has-error">
      <label for="em9" class="col-sm-3 control-label required">Invalid</label>
      <div class="col-sm-9">
        <input type="email" class="form-control form-control-width-md" id="em9" value="john.smith@gmail" required aria-required="true" aria-invalid="true">
        <span class="help-block">This email address is not valid.</span>
      </div>
    </div>
    <div class="form-group has-error">
      <label for="pw9" class="col-sm-3 control-label required">Required</label>
      <div class="col-sm-9">
        <input type="text" class="form-control form-control-width-md" required aria-required="true" id="pw9" aria-invalid="true">
        <span class="help-block">This field is required.</span>
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-offset-3 col-sm-9">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </div>
</form>
{% endhighlight %}


{::nomarkdown}
<div class="pl-preview">
<form class="form-horizontal" style="max-width: 450px;" role="form">
    <div class="form-group">
        <div class="col-sm-offset-3 col-sm-9">
            <div class="alert alert-danger" style="margin: 0;">
                <i class="alert-icon alert-icon-danger"></i> The email or password you entered is incorrect.
            </div>
        </div>
    </div>
    <div class="form-group">
      <label for="em10" class="col-sm-3 control-label required">Email</label>
      <div class="col-sm-9">
        <input type="email" class="form-control" id="em10" value="john.smith@gmail.com" required aria-required="true">
      </div>
    </div>
    <div class="form-group">
      <label for="pw10" class="col-sm-3 control-label required">Password</label>
      <div class="col-sm-9">
        <input type="password" class="form-control" id="pw10" required aria-required="true">
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-offset-3 col-sm-9">
        <button type="submit" class="btn btn-primary">Sign in</button>
      </div>
    </div>
</form>
</div>
{:/nomarkdown}


{% highlight html %}
<form class="form-horizontal" role="form">
  <div class="form-group has-error">
    <label for="em10" class="col-sm-2 control-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control form-control-width-md" id="em10">
      <span class="help-block">Email is not valid.</span>
    </div>
  </div>
  <div class="form-group">
    <label for="pw10" class="col-sm-2 control-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control form-control-width-md" id="pw10" >
    </div>
  </div>
  <div class="form-group has-error">
    <label for="passwordInput4" class="col-sm-2 control-label">Confirm password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control form-control-width-md" id="passwordInput4">
      <span class="help-block">Passwords do not match.</span>
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">Sign in</button>
    </div>
  </div>
</form>
{% endhighlight %}
</div>

<div class="pl-pattern">
### Help text

Help text can be placed at the top of the form, under the heading of a form group, under an individual form field, or as a popover when the field is focused.

- Place help text at the top of the form to give information that relates to the entire form
- Place help text under the heading of a form group to give information that relates to that form group alone
- Place help text beside or under an individual form field that relates to that field alone
- Use a popover on an input field (text box, text area, or select) for help text that is lengthy, complex, non-critical, or when screen real estate is limited. Too much help text can make a form look and feel busy and difficult. 


{::nomarkdown}
<div class="pl-preview">
<form class="form-horizontal" style="max-width: 450px;" role="form">
    <div class="form-group">
        <div class="col-sm-12">
            <div class="form-group-heading">
                <h4>Public profile</h4>
                <p class="help-block">This information will appear on your public profile.</p>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="ht3" class="col-sm-3 control-label">Full name</label>
        <div class="col-sm-9">
            <input class="form-control form-control-width-md" type="text" id="ht3">
        </div>
    </div>
    <div class="form-group">
        <label for="ht4" class="col-sm-3 control-label">Email</label>
        <div class="col-sm-9">
            <input class="form-control form-control-width-md" type="text" id="ht4">
            <p class="help-block">This is how people will contact you.</p>
        </div>
    </div>
    <div class="form-group">
        <label for="po1" class="col-sm-3 control-label">Popover</label>
        <div class="col-sm-9">
            <input class="form-control form-control-width-md" type="password" id="po1" data-html="true" data-toggle="popover" data-container="body" data-trigger="focus" data-content="Use at least 8 characters. Don’t use a password from another site, or something too obvious like your pet’s name. <a href=''>Why?</a>">
        </div>
    </div>
</form>
</div>
{:/nomarkdown}


{% highlight html %}
<form class="form-horizontal" role="form">
    <div class="form-group">
        <div class="col-sm-9 col-sm-offset-3">
            <h4>Public profile</h4>
            <span class="help-block">This information will be visible from your public profile page.</span>
        </div>
    </div>
    <div class="form-group">
        <label for="ht3" class="col-sm-3 control-label">Full name</label>
        <div class="col-sm-9">
            <input class="form-control form-control-width-md" type="text" id="ht3">
        </div>
    </div>
    <div class="form-group">
        <label for="ht4" class="col-sm-3 control-label">Email</label>
        <div class="col-sm-9">
            <input class="form-control form-control-width-md" type="text" id="ht4">
            <span class="help-block">This will be public</span>
        </div>
    </div>
    <div class="form-group">
        <label for="ht1" class="col-sm-3 control-label">Email</label>
        <div class="col-sm-9">
            <input class="form-control form-control-width-md" type="text" id="ht1">
        </div>
    </div>
</form>
{% endhighlight %}

</div>

<div class="pl-pattern">
### Form groups
If you have many fields, consider organizing related fields into groups. Groups can have a title.


{::nomarkdown}
<div class="pl-preview">
<form class="form-horizontal" style="max-width: 450px;" role="form">
    <div class="form-group">
        <div class="col-sm-12">
            <div class="form-group-heading">
                <h4>Personal information</h4>
                <p class="help-block">Some other help text and information.</p>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="fg1" class="col-sm-3 control-label required">Email</label>
        <div class="col-sm-9">
          <input type="email" class="form-control form-control-width-md" id="fg1" required aria-required="true">
        </div>
    </div>
    <div class="form-group">
        <label for="fg2" class="col-sm-3 control-label required">Full name</label>
        <div class="col-sm-9">
          <input type="text" class="form-control-width-md form-control" id="fg2" required aria-required="true">
        </div>
    </div>
    <div class="form-group">
        <div class="col-sm-12">
            <div class="form-group-heading">
                <h4>Shipping details</h4>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="fg3" class="col-sm-3 control-label required">Address line 1</label>
        <div class="col-sm-9">
          <input type="text" class="form-control form-control-width-md" id="fg3" required aria-required="true">
        </div>
    </div>
</form>
</div>
{:/nomarkdown}

{% highlight html %}
<form class="form-horizontal" role="form">
    <div class="form-group">
        <div class="col-sm-9 col-sm-offset-3">
            <h4>Personal Information</h4>
        </div>
    </div>
    <div class="form-group">
        <label for="fg1" class="col-sm-3 control-label required">Email</label>
        <div class="col-sm-9">
          <input type="email" class="form-control form-control-width-md" id="fg1" required aria-required="true">
        </div>
    </div>
    <div class="form-group">
        <label for="fg2" class="col-sm-3 control-label required">Full name</label>
        <div class="col-sm-9">
          <input type="text" class="form-control form-control-width-md" id="fg2" required aria-required="true">
        </div>
    </div>
    <div class="form-group">
        <div class="col-sm-9 col-sm-offset-3">
            <h4>Shipping Details</h4>
        </div>
    </div>
    <div class="form-group">
        <label for="fg3" class="col-sm-3 control-label required">Address line 1</label>
        <div class="col-sm-9">
          <input type="text" class="form-control form-control-width-md" id="fg3" required aria-required="true">
        </div>
    </div>
</form>
{% endhighlight %}

</div>

<div class="pl-pattern">

### Input character limits

Most input fields have technical character limits. The system should handle this gracefully in all scenarios. 

__Text box__

- In most cases, simply ignore key presses that exceed the limit

__Text area__

- If the limit is low or the expected input size is unknown, include a limit indicator
- Update the limit indicator on each key press
- Allow the user to keep typing past the indicator, but provide obvious indications that the limit has been exceeded.


{::nomarkdown}
<div class="pl-preview">
<form class="form-horizontal" style="max-width: 450px;" role="form">
    <div class="form-group has-error">
        <label for="ta1" class="col-sm-3 control-label">Description</label>
        <div class="col-sm-9">
            <textarea id="ta1" rows="3" class="form-control form-control-width-fill">This textfield has exceed the character limit by 10 characters. The user can still continue to type after reaching the limit, but the field is invalid.</textarea>
            <span class="help-block pull-right"><strong>150/140</strong> character limit</span>
        </div>
    </div>
    <div class="form-group">
        <label for="ta2" class="col-sm-3 control-label">Description</label>
        <div class="col-sm-9">
            <textarea id="ta2" rows="3" class="form-control form-control-width-fill"></textarea>
            <span class="help-block pull-right">0/140 character limit</span>
        </div>
    </div>
    <div class="form-group">
        <label for="ml1" class="col-sm-3 control-label">Max 25</label>
        <div class="col-sm-9">
            <input id="ml1" type="text" class="form-control form-control-width-md" maxlength="25">
        </div>
    </div>
</form>
</div>
{:/nomarkdown}


{% highlight html %}
<form class="form-horizontal" role="form">
    <div class="form-group has-error">
        <label for="ta1" class="col-sm-3 control-label">Description</label>
        <div class="col-sm-9">
            <textarea id="ta1" rows="3" class="form-control form-control-width-fill">This textfield has exceed the character limit by 10 characters. The user can still continue to type after reaching the limit, but the field is invalid.</textarea>
            <span class="help-block pull-right"><strong>150/140</strong> character limit</span>
        </div>
    </div>
    <div class="form-group">
        <label for="ta2" class="col-sm-3 control-label">Description</label>
        <div class="col-sm-9">
            <textarea id="ta2" rows="3" class="form-control form-control-width-fill"></textarea>
            <span class="help-block pull-right">0/140 character limit</span>
        </div>
    </div>
    <div class="form-group">
        <label for="ml1" class="col-sm-3 control-label">Limit 25</label>
        <div class="col-sm-9">
            <input id="ml1" type="text" class="form-control form-control-width-fill" maxlength="25">
        </div>
    </div>
</form>
{% endhighlight %}

</div>

<div class="pl-pattern">
### Examples

These examples show various form configurations.


#### Various form elements


{::nomarkdown}
<div class="pl-preview">
<form class="form-horizontal" style="max-width: 450px;" role="form">
  <div class="form-group">
    <label for="em12" class="col-sm-3 control-label required">Email</label>
    <div class="col-sm-9">
      <input type="email" class="form-control form-control-width-md" id="em12" required aria-required="true">
      <span class="help-block">Your email will be used to log in.</span>
    </div>
  </div>
  <div class="form-group">
    <label for="n12" class="col-sm-3 control-label required">Name</label>
    <div class="col-sm-9">
      <input type="text" class="form-control-width-md form-control" id="n12" required aria-required="true">
    </div>
  </div>
  <div class="form-group">
    <label for="ci12" class="col-sm-3 control-label required">City</label>
    <div class="col-sm-9">
      <input type="text" class="form-control-width-md form-control" id="ci12" required aria-required="true">
    </div>
   </div>
   <div class="form-group">
    <label for="si12" class="col-sm-3 control-label required">State</label>
    <div class="col-sm-9">
        <select id="si12" required aria-required="true" class="form-control-width-sm select2 form-control">
          <option value="" disabled selected hidden>Select</option>
          <option>AL</option>
          <option>AK</option>
          <option>AZ</option>
          <option>AR</option>
          <option>CA</option>
          <option>WA</option>
        </select>
    </div>
  </div>
  <div class="form-group">
    <span class="col-sm-3 control-label">Shipping</span>
    <div class="col-sm-9">
      <div class="radio">
        <label><input type="radio" name="opr2" id="opr21" value="option1" checked>UPS</label>
      </div>
      <div class="radio">
        <label><input type="radio" name="opr2" id="opr22" value="option2">FedEx</label>
      </div>
      <div class="radio">
        <label><input type="radio" name="opr2" id="opr23" value="option3">USPS</label>
      </div>
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-3 col-sm-9">
      <button type="submit" class="btn btn-primary">Send</button>
    </div>
  </div>
</form>
</div>
{:/nomarkdown}


{% highlight html %}
<form class="form-horizontal" role="form">
  <div class="form-group">
    <label for="em13" class="col-sm-3 control-label">Email</label>
    <div class="col-sm-9">
      <input type="email" class="form-control form-control-width-md" id="em13">
      <span class="help-block">Your email will be used to log in.</span>
    </div>
  </div>
  <div class="form-group">
    <label for="n12" class="col-sm-3 control-label required">Name</label>
    <div class="col-sm-9">
      <input required aria-required="true" type="text" class="form-control form-control-width-md" id="n12">
    </div>
  </div>
  <div class="form-group">
    <label for="ci12" class="col-sm-3 control-label required">City</label>
    <div class="col-sm-9">
      <input required aria-required="true" type="email" class="form-control form-control-width-md" id="ci12">
    </div>
</div>
<div class="form-group">
    <label for="si12" class="col-sm-3 control-label required">State</label>
    <div class="col-sm-9">
        <select required aria-required="true" id="si12" class="form-control form-control-width-md">
          <option value="" disabled selected hidden>Select</option>
          <option>AL</option>
          <option>AK</option>
          <option>AZ</option>
          <option>AR</option>
          <option>CA</option>
        </select>
    </div>
  </div>
  <div class="form-group">
    <span class="col-sm-3 control-label">Shipping</span>
    <div class="col-sm-9">
      <div class="radio">
        <label><input type="radio" name="opr2" id="opr21" value="option1" checked>UPS</label>
      </div>
      <div class="radio">
        <label><input type="radio" name="opr2" id="opr22" value="option2">FedEx</label>
      </div>
      <div class="radio">
        <label><input type="radio" name="opr2" id="opr23" value="option3">USPS</label>
      </div>
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-3 col-sm-9">
        <div class="checkbox">
          <label>
            <input type="checkbox"> Send me notifications via email
          </label>
        </div>
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-3 col-sm-9">
      <button type="submit" class="btn btn-default">Back</button>
      <button type="submit" class="btn btn-primary pull-right ">Submit</button>
    </div>
  </div>
</form>
{% endhighlight %}


{::nomarkdown}
<div class="pl-preview">
<div class="" style="max-width: 450px;">
    <form role="form" class="col-sm-offset-3" style="max-width: 350px;">
      <div class="form-group">
        <div class="alert alert-danger" role="alert">
          <i class="alert-icon alert-icon-danger"></i>Please fix the 3 errors.
        </div>
      </div>
      <div class="form-group has-error">
        <label class="control-label required" for="em14">USPTO email address</label>
        <input type="email" class="form-control" id="em14" value="john.smith@gmail.com" required aria-required="true" aria-invalid="true">
        <span class="help-block">Email must end with uspto.gov.</span>
      </div>
      <div class="form-group has-error" >
        <label class="control-label required" for="eid12">Employee ID</label> <a href="#" class="pull-right">Find my Employee ID</a>
        <input type="text" class="form-control" id="eid12" value="238942a" required aria-required="true" aria-invalid="true">
        <span class="help-block">Employee ID must be numeric.</span>
      </div>
      <div class="form-group">
        <label class="control-label required" for="t12">Title</label>
        <div>
            <select class="select2 form-control-width-sm form-control" id="t12" required aria-required="true">
              <option value="" disabled selected hidden>Select</option>
              <option value="Mr.">Mr.</option>
              <option value="Mrs.">Mrs.</option>
              <option value="Miss">Miss</option>
            </select>
        </div>
      </div>
      <div class="form-group">
        <label class="control-label required" for="fn12">First name</label>
        <input type="text" class="form-control" id="fn12" value="John" required aria-required="true">
      </div>
      <div class="form-group has-error">
        <label class="control-label required" for="mn12">Middle name</label>
        <input type="text" class="form-control" id="mn12" required aria-required="true" aria-invalid="true">
        <span class="help-block">This field is required.</span>
      </div>
      <div class="form-group">
        <label class="control-label required" for="ln12">Last name</label>
        <input type="text" class="form-control" id="ln12" value="Smith" required aria-required="true">
      </div>
      <div class="form-group">
        <label class="control-label required" for="phone12">Telephone number</label>
        <input type="text" class="form-control" id="phone12" required aria-required="true">
      </div>
      <div class="form-group">
        <div class="form-group-heading">
          <h4>Address</h4>
        </div>
      </div>
      <div class="form-group">
        <label class="control-label required" for="country12">Country</label>
        <select class="select2 form-control" id="country12" required aria-required="true">
          <option value="" disabled selected hidden>Select</option>
          <option value="Mr.">United States</option>
        </select>
      </div>
      <div class="form-group">
        <label class="control-label required" for="adline1">Address line 1</label>
        <input type="text" class="form-control" id="adline1" required aria-required="true">
      </div>
      <div class="form-group">
        <label class="control-label required" for="adline2">Address line 2</label>
        <input type="text" class="form-control" id="adline2" required aria-required="true">
      </div>
      <div class="form-group">
        <label class="control-label required" for="city12">City</label>
        <input type="text" class="form-control" id="city12" required aria-required="true">
      </div>
      <div class="row">
        <div class="col-sm-6">
          <div class="form-group">
            <label class="control-label required" for="state12">State</label>
            <input type="text" class="form-control" id="state12" required aria-required="true">
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-group">
            <label class="control-label required" for="zipcode12">Zip code</label>
            <input type="text" class="form-control" id="zipcode12" required aria-required="true">
          </div>
        </div>
      </div>
      <button type="button" class="btn btn-default">Cancel</button>
      <button type="submit" disabled class="btn btn-primary pull-right">Next</button>
    </form>
</div>
</div>
{:/nomarkdown}

{% highlight html %}
<form role="form">
  <div class="form-group">
    <div class="alert alert-danger">
      <i class="alert-icon alert-icon-danger"></i>Please fix the 3 errors.
    </div>
  </div>
  <div class="form-group has-error">
    <label class="control-label required" for="em15">USPTO email address</label>
    <input type="email" class="form-control" id="em15" value="john.smith@gmail.com" required aria-required="true">
    <span class="help-block">Email must end with uspto.gov.</span>
  </div>
  <div class="form-group has-error" >
    <label class="control-label required" for="eid12">Employee ID</label> <a href="#" class="pull-right">Find my Employee ID</a>
    <input type="text" class="form-control" id="eid12" value="238942a" required aria-required="true">
    <span class="help-block">Employee ID must be numeric.</span>
  </div>
  <div class="form-group">
    <label class="control-label required" for="t12">Title</label>
    <select class="form-control" id="t12" required aria-required="true">
      <option value="" disabled selected hidden>Select</option>
      <option value="Mr.">Mr.</option>
      <option value="Mrs.">Mrs.</option>
      <option value="Miss">Miss</option>
    </select>
  </div>
  <div class="form-group">
    <label class="control-label required" for="fn12">First name</label>
    <input type="text" class="form-control" id="fn12" value="John" required aria-required="true">
  </div>
  <div class="form-group has-error">
    <label class="control-label required" for="mn12">Middle name</label>
    <input type="text" class="form-control" id="mn12" required aria-required="true">
    <span class="help-block">This field is required.</span>
  </div>
  <div class="form-group">
    <label class="control-label required" for="ln12">Last name</label>
    <input type="text" class="form-control" id="ln12" value="Smith" required aria-required="true">
  </div>
  <div class="form-group">
    <label class="control-label required" for="phone12">Telephone number</label>
    <input type="text" class="form-control" id="phone12" required aria-required="true">
  </div>
  <div class="form-group">
    <div class="form-group-heading">
        <h4>Address</h4>
    </div>
  </div>
  <div class="form-group">
    <label class="control-label required" for="country12">Country</label>
    <select class="form-control" id="country12" required aria-required="true">
      <option value="" disabled selected hidden>Select</option>
      <option value="Mr.">United States</option>
    </select>
  </div>
  <div class="form-group">
    <label class="control-label required" for="adline1">Address line 1</label>
    <input type="text" class="form-control" id="adline1" required aria-required="true">
  </div>
  <div class="form-group">
    <label class="control-label required" for="adline2">Address line 2</label>
    <input type="text" class="form-control" id="adline2" required aria-required="true">
  </div>
  <div class="form-group">
    <label class="control-label required" for="city12">City</label>
    <input type="text" class="form-control" id="city12" required aria-required="true">
  </div>
  <div class="row">
    <div class="col-sm-6">
      <div class="form-group">
        <label class="control-label required" for="state12">State</label>
        <input type="text" class="form-control" id="state12" required aria-required="true">
      </div>
    </div>
    <div class="col-sm-6">
      <div class="form-group">
        <label class="control-label required" for="zipcode12">Zip code</label>
        <input type="text" class="form-control" id="zipcode12" required aria-required="true">
      </div>
    </div>
  </div>
  <button type="button" class="btn btn-default">Cancel</button>
  <button type="submit" disabled class="btn btn-primary pull-right">Next</button>
</form>
{% endhighlight %}

</div>
