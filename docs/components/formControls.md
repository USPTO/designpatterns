---
title: "Form controls"
---


<div class="pl-pattern">
### Text box

#### Purpose
Users need to input a simple text value.

#### Description
Text boxes allow the user to input a simple text value. A text box only allows for a single line of input. 


{::nomarkdown}
<div class="pl-preview">
<div class="container-fluid" style="max-width: 400px; margin: 0;">
    <div class="row">
        <form role="form" class="col-sm-12 form-horizontal">
            <div class="form-group">
                <label for="tb12" class="col-sm-3 control-label">Normal</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" id="tb12">
                </div>
            </div>
            <div class="form-group">
                <label for="tb13" class="col-sm-3 control-label">Disabled</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" id="tb13" disabled>
                </div>
            </div>
        </form>
    </div>
</div>
</div>
{:/nomarkdown}

{% highlight html %}
<input type="text" class="form-control">
<input type="text" class="form-control" disabled>
{% endhighlight %}

#### Input masks

Input masks ensure that the user understands the input format required, in addition to making input less error-prone by potentially restricting the number or types of characters that can be entered.

<span class="text-muted">Example uses https://github.com/RobinHerbots/jquery.inputmask for demo purposes.</span>

{::nomarkdown}
<div class="pl-preview">
<div class="container-fluid" style="max-width: 400px; margin: 0;">
    <div class="row">
        <form class="form-horizontal col-sm-12" role="form">
          <div class="form-group">
              <label for="im1" class="col-sm-3 control-label">SSN</label>
              <div class="col-sm-9">
                  <input type="text" class="form-control" id="im1" data-inputmask="'mask': '999-99-9999', 'placeholder': 'ˍ'">
              </div>
          </div>
          <div class="form-group">
              <label for="im2" class="col-sm-3 control-label">Routing #</label>
              <div class="col-sm-9">
                  <input type="text" class="form-control" placeholder="PCT/" id="im2" data-inputmask="'mask': '\\PCT/99,999,999', 'placeholder': 'ˍ'">
              </div>
          </div>
          <div class="form-group">
              <label for="im3" class="col-sm-3 control-label">Start date</label>
              <div class="col-sm-9">
                  <input type="text" class="form-control" id="im3" data-inputmask="'mask': 'm/d/y', 'placeholder': 'mm/dd/yyyy'">
              </div>
          </div>
        </form>
    </div>
</div>
</div>
{:/nomarkdown}

{% highlight html %}
<input type="text" class="form-control" id="im1" data-inputmask="'mask': '999-99-9999'">
<input type="text" class="form-control" id="im1" data-inputmask="'mask': 'PCT/99,999,999'">
<input type="text" class="form-control" id="im1" data-inputmask="'alias': 'date'">
{% endhighlight %}


</div>

<div class="pl-pattern">
### Text area

#### Purpose
Users need to input an extended, potentially multi-line text value.

#### Description
Text areas allow the user to input extended, multi-line text values.

#### Sizing and resizing

Text areas can either

- have a fixed, static height
- automatically grow/shrink based on the input, from a minimum number of lines (e.g., 3) to a maxmimum number of lines (e.g., 10) to ensure that space is optimally used
- have a resize handle, allowing for manual vertical and/or horizontal resizing


{::nomarkdown}
<div class="pl-preview">
<div class="container-fluid" style="max-width: 400px; margin: 0;">
    <div class="row">
        <form role="form" class="col-sm-12 form-horizontal">
            <div class="form-group">
                <label for="ta12" class="col-sm-3 control-label">Normal</label>
                <div class="col-sm-9">
                    <textarea class="form-control" id="ta12" rows="2"></textarea>
                </div>
            </div>
            <div class="form-group">
                <label for="ta13" class="col-sm-3 control-label">Disabled</label>
                <div class="col-sm-9">
                    <textarea class="form-control" id="ta13" rows="2" disabled></textarea>
                </div>
            </div>
        </form>
    </div>
</div>
</div>
{:/nomarkdown}


{% highlight html %}
<textarea class="form-control" rows="2"></textarea>
{% endhighlight %}

</div>

<div class="pl-pattern">
### Radio buttons

#### Purpose
Users must choose between two or more mutually exclusive options.

#### Description
- Radio buttons come in a group of two or more mutually exclusive options
- A radio button is either checked or unchecked
- There can only be one radio button checked in a group
- Radio button labels should use sentence casing
- Use concise labels
- Provide an initially checked option when the field is not required and/or there is a sane default
- Align vertically when possible
- Align in shorter columns if there are many options
- Ensure there is adequate spacing between adjacent fields and radio/checkbox groups

#### Accessibility
- Wrap groups of radio buttons in a <code>fieldset</code> and use a <code>legend</code> to provide a description for the grouping. 
- Radio buttons (such as male/female for gender) that make sense from their labels alone do not require fieldset and legend.

#### Vertical

{::nomarkdown}
<div class="pl-preview">
  <fieldset style="width: 300px;">
    <legend>Radio button states</legend>
    <div class="radio">
        <label><input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>Checked</label>
    </div>
    <div class="radio">
        <label><input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">Normal</label>
    </div>
    <div class="radio">
        <label><input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" disabled>Disabled</label>
    </div>
    <div class="radio">
      <label><input type="radio" name="optionsRadios" id="optionsRadios4" value="option4">Extended <span class="help-block">This option has some useful help text associated with it that elaborates on the state or purpose.</span></label>
    </div>
  </fieldset>
</div>
{:/nomarkdown}

{% highlight html %}
<fieldset>
  <legend>Radio button states</legend>
  <div class="radio">
      <label><input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>Checked</label>
  </div>
  <div class="radio">
      <label><input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">Normal</label>
  </div>
  <div class="radio">
      <label><input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" disabled>Disabled</label>
  </div>
  <div class="radio">
    <label><input type="radio" name="optionsRadios" id="optionsRadios4" value="option4">Extended <span class="help-block">This option has some useful help text associated with it that elaborates on the state or purpose.</span></label>
  </div>
</fieldset>
{% endhighlight %}

#### Inline

{::nomarkdown}
<div class="pl-preview">
  <fieldset>
    <legend class="sr-only">Inline radio buttons example</legend>
    <label class="radio-inline">
      <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked> Checked
    </label>
    <label class="radio-inline">
      <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"> Normal
    </label>
    <label class="radio-inline">
      <input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled> Disabled
    </label>
  </fieldset>
</div>
{:/nomarkdown}


{% highlight html %}
<fieldset>
  <legend>Inline radio buttons example</legend>
  <label class="radio-inline">
    <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked> Checked
  </label>
  <label class="radio-inline">
    <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"> Normal
  </label>
</fieldset>
{% endhighlight %}

</div>

<div class="pl-pattern">
### Checkboxes

#### Purpose
Users need to specify which option(s) from a set are applicable/valid/true based on a label. 

#### Description
- A set of checkboxes are used when a user is able to select none, one, or multiple options
- A single checkbox is used when a user is able to select or not select an option
- When clicked, a checkbox's state toggles between unchecked and checked
- Checkboxes can have an indeterminate state that is set based on external interactions (e.g., indicating that some but not all items in a collection are selected)
- Checkbox labels should use sentence casing
- Use concise labels
- Align vertically when possible
- Align in shorter columns if there are many options
- The selected state of a checkbox should ideally indicate something 'positive' and may require the rephrasing of the label (e.g., `Send me weekly reminders`, vs. `Do not send me weekly reminders`)
- Ensure there is adequate spacing between adjacent fields and radio/checkbox groups

#### Accessibility
- Wrap groups of checkboxes in a <code>fieldset</code> and use a <code>legend</code> to provide a description for the grouping. 
- Single checkboxes that make sense from their labels alone do not require fieldset and legend.


#### Vertical

{::nomarkdown}
<div class="pl-preview">
  <fieldset style="width: 300px;">
    <legend>Checkbox states</legend>
    <div class="checkbox">
      <label><input type="checkbox" name="optionsCheckboxes" id="optionsCheckboxes1" value="option1" checked>Checked</label>
    </div>
    <div class="checkbox">
      <label><input type="checkbox" name="optionsCheckboxes" id="optionsCheckboxes2" value="option2">Normal</label>
    </div>
    <div class="checkbox">
      <label><input type="checkbox" name="optionsCheckboxes" id="optionsCheckboxes3" value="option3" disabled>Disabled</label>
    </div>
    <div class="checkbox">
      <label><input type="checkbox" name="optionsCheckboxes" id="optionsCheckboxes4" value="option4">Extended <span class="help-block">This option has some useful help text associated with it that elaborates on the state or purpose.</span></label>
    </div>
  </fieldset>
</div>
{:/nomarkdown}

{% highlight html %}
<fieldset>
  <legend>Checkbox states</legend>
  <div class="checkbox">
    <label><input type="checkbox" name="optionsCheckboxes" id="optionsCheckboxes1" value="option1" checked>Checked</label>
  </div>
  <div class="checkbox">
    <label><input type="checkbox" name="optionsCheckboxes" id="optionsCheckboxes2" value="option2">Normal</label>
  </div>
  <div class="checkbox">
    <label><input type="checkbox" name="optionsCheckboxes" id="optionsCheckboxes3" value="option3" disabled>Disabled</label>
  </div>
  <div class="checkbox">
    <label><input type="checkbox" name="optionsCheckboxes" id="optionsCheckboxes4" value="option4">Extended <span class="help-block">This option has some useful help text associated with it that elaborates on the state or purpose.</span></label>
  </div>
</fieldset>
{% endhighlight %}

#### Inline

{::nomarkdown}
<div class="pl-preview">
  <fieldset>
    <legend class="sr-only">Inline checkboxes example</legend>
    <label class="checkbox-inline">
      <input type="checkbox" id="inlineCheckbox1" value="option1" checked> Checked
    </label> <label class="checkbox-inline">
      <input type="checkbox" id="inlineCheckbox2" value="option2"> Normal
    </label> <label class="checkbox-inline">
      <input type="checkbox" id="inlineCheckbox3" value="option3" disabled> Disabled
    </label>
  </fieldset>
</div>

{:/nomarkdown}


{% highlight html %}
<fieldset>
  <legend>Inline checkboxes example</legend>
  <label class="checkbox-inline">
    <input type="checkbox" id="inlineCheckbox1" value="option1" checked> Checked
  </label> 
  <label class="checkbox-inline">
    <input type="checkbox" id="inlineCheckbox2" value="option2"> Normal
  </label>
</fieldset>
{% endhighlight %}

</div>

<div class="pl-pattern">
### Toggle switches

#### Purpose
Users need to toggle an option between on/off or yes/no. 

#### Description
Use a toggle switch for a binary option where the change occurs _immediately_. Use a checkbox instead if the user has to perform other actions for the change to be effective (e.g., pressing Save or Submit).


{::nomarkdown}
<div class="pl-preview">
<div class="form-group">
    <div class="switch">
        <input type="checkbox" id="t1">
        <label for="t1" data-on="ON" data-off="OFF">Access</label>
    </div>
</div>
<div class="form-group">
    <div class="switch">
        <input type="checkbox" id="t2" checked>
        <label for="t2" data-on="ON" data-off="OFF">Access</label>
    </div>
</div>
<hr>
<div class="form-group">
    <div class="switch">
        <input type="checkbox" id="t4">
        <label for="t4" data-on="YES" data-off="NO">Send alerts</label>
    </div>
</div>
<div class="form-group">
    <div class="switch">
        <input type="checkbox" id="t5" checked>
        <label for="t5" data-on="YES" data-off="NO">Send alerts</label>
    </div>
</div>
<hr>
<div class="form-group">
    <div class="switch">
        <input type="checkbox" id="t6" checked disabled>
        <label for="t6" data-on="ON" data-off="OFF">Disabled on</label>
    </div>
</div>
<div class="form-group">
    <div class="switch">
        <input type="checkbox" id="t7" disabled>
        <label for="t7" data-on="ON" data-off="OFF">Disabled off</label>
    </div>
</div>
</div>
{:/nomarkdown}


{% highlight html %}
<div class="switch">
    <input type="checkbox" id="t1">
    <label for="t1" data-on="ON" data-off="OFF">Access</label>
</div>
{% endhighlight %}

</div>


<div class="pl-pattern">
### Select

#### Purpose
The user needs to choose an option from a predefined set.

#### Description
- A select, sometimes referred to as a combo box, provides functionality for choosing an option from a set
- It is similar to dropdown button but facilitates item selection, filtering, and reflects the currently selected value
- When clicked, the user is shown all available options and can make a selection
- When a selection is made, the dropdown closes and the select control updates to reflect the current selection
- If there are 5 or more options, the list should allow for filtering via a text field
- For empty selects, use a placeholder in the format of `Select a [type]...` or `Select...`

<span class="text-muted">Example uses https://github.com/ivaynberg/select2 for demo purposes.</span>

{::nomarkdown}
<div class="pl-preview">
<div class="container-fluid" style="max-width: 400px; margin: 0;">
    <div class="row">
        <form role="form" class="col-sm-12 form-horizontal">
            <div class="form-group">
                <label for="se17" class="col-sm-3 control-label">Normal</label>
                <div class="col-sm-9">
                    <select id="se17" class="form-control select2">
                        <option value="A">Option A</option>
                        <option value="B">Option B</option>
                        <option value="C">Option C</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label for="se18" class="col-sm-3 control-label">Filterable</label>
                <div class="col-sm-9">
                    <select id="se18" class="form-control select2">
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AS">American Samoa</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FM">Federated States Of Micronesia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="GU">Guam</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MH">Marshall Islands</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="MP">Northern Mariana Islands</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PW">Palau</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="PR">Puerto Rico</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VI">Virgin Islands</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label for="sel175"  class="col-sm-3 control-label">Placeholder</label>
                <div class="col-sm-9">
                    <select id="sel175" data-placeholder="Select a database..." class="form-control select2">
                        <option></option>
                        <option value="A">mongodb</option>
                        <option value="B">mysql</option>
                        <option value="C">leveldb</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label for="se19" class="col-sm-3 control-label">Disabled</label>
                <div class="col-sm-9">
                    <select id="se19" disabled class="form-control select2">
                        <option value="A">Option A</option>
                        <option value="B">Option B</option>
                        <option value="C">Option C</option>
                    </select>
                </div>
            </div>
        </form>
    </div>
</div>
</div>
{:/nomarkdown}


{% highlight html %}
<div class="form-group">
    <label for="se17" class="col-sm-3 control-label">Normal</label>
    <div class="col-sm-9">
        <select id="se17" class="form-control select2">
            <option value="A">Option A</option>
            <option value="B">Option B</option>
            <option value="C">Option C</option>
        </select>
    </div>
</div>
{% endhighlight %}

</div>

<div class="pl-pattern">
### Multi-select

This is the native browser multi-select. `ctrl+click` (or `cmd+click`) toggles selection on an item. `shift+click` performs a range selection. A single `click` sets the selection to only that item.


{::nomarkdown}
<div class="pl-preview">
<div class="container-fluid" style="max-width: 400px; margin: 0;">
    <div class="row">
        <form role="form" class="col-sm-12 form-horizontal">
            <div class="form-group">
                <label for="se15" class="col-sm-3 control-label">Normal</label>
                <div class="col-sm-9">
                    <select multiple id="se15" class="form-control">
                        <option value="A">Option A</option>
                        <option value="B">Option B</option>
                        <option value="C">Option C</option>
                        <option value="D">Option D</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label for="se16" class="col-sm-3 control-label">Disabled</label>
                <div class="col-sm-9">
                    <select multiple id="se16" disabled class="form-control">
                        <option value="A">Option A</option>
                        <option value="B">Option B</option>
                        <option value="C">Option C</option>
                        <option value="D">Option D</option>
                    </select>
                </div>
            </div>
        </form>
    </div>
</div>
</div>
{:/nomarkdown}


{% highlight html %}
<div class="form-group">
    <label for="se16" class="col-sm-3 control-label">Disabled</label>
    <div class="col-sm-9">
        <select multiple id="se16" disabled class="form-control">
            <option value="A">Option A</option>
            <option value="B">Option B</option>
            <option value="C">Option C</option>
            <option value="D">Option D</option>
        </select>
    </div>
</div>
{% endhighlight %}

</div>
<div class="pl-pattern">
### Date picker

Depending on the JS library used for the date picker, functionality may vary.

Date pickers can provide:

- Navigating years and months via previous/next arrows and/or other dropdowns
- Multi-calendar views
- Range highlighting
- Min and max allowable dates
- Highlighting/disabling of days/rows/columns (e.g., disable weekends or highlight bi-week)
- Ability to type date as well as use a calendar dropdown

<span class="text-muted">Example uses jQuery UI for demo purposes.</span>

{::nomarkdown}
<div class="pl-preview">
<div class="container-fluid" style="max-width: 400px; margin: 0;">
    <div class="row">
        <form role="form" class="col-sm-12 form-horizontal">
            <div class="form-group">
                <label for="dp1" class="col-sm-3 control-label">Date</label>
                <div class="col-sm-9">
                    <span class="input-icon icon icon-calendar-o"></span>
                    <input id="dp1" data-inputmask="'mask': 'm/d/y', 'placeholder': 'mm/dd/yyyy'" type="text" class="datepicker form-control" >
                </div>
            </div>
            <div class="form-group">
                <span class="col-sm-3 control-label" style="font-weight: 600;">Range</span>
                <div class="col-sm-9">
                    <div class="row">
                        <div class="col-sm-6">
                            <label for="txt-fromDate" class="sr-only">From</label>
                            <span class="input-icon icon icon-calendar-o"></span>
                            <input id="txt-fromDate" placeholder="From" data-inputmask="'mask': 'm/d/y', 'placeholder': 'mm/dd/yyyy'" type="text" class="datepicker form-control">
                        </div>
                        <div class="col-sm-6">
                            <label for="txt-toDate" class="sr-only">To</label>
                            <span class="input-icon icon icon-calendar-o"></span>
                            <input id="txt-toDate" placeholder="To" data-inputmask="'mask': 'm/d/y', 'placeholder': 'mm/dd/yyyy'" type="text" class="datepicker form-control">
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>

</div>
{:/nomarkdown}


{% highlight html %}
<div class="form-group">
    <label for="dp1" class="col-sm-3 control-label">Date</label>
    <div class="col-sm-9">
        <span class="input-icon icon icon-calendar-o"></span>
        <input id="dp1" data-inputmask="'mask': 'm/d/y', 'placeholder': 'mm/dd/yyyy'" type="text" class="datepicker form-control" >
    </div>
</div>
<div class="form-group">
    <label for="dp2" class="col-sm-3 control-label">Range</label>
    <div class="col-sm-9">
        <div class="row">
            <div class="col-sm-6">
                <span class="input-icon icon icon-calendar-o"></span>
                <input id="dp2" placeholder="From" data-inputmask="'mask': 'm/d/y', 'placeholder': 'mm/dd/yyyy'" type="text" class="datepicker form-control" >
            </div>
            <div class="col-sm-6">
                <span class="input-icon icon icon-calendar-o"></span>
                <input id="dp3" placeholder="To" data-inputmask="'mask': 'm/d/y', 'placeholder': 'mm/dd/yyyy'" type="text" class="datepicker form-control" >
            </div>
        </div>
    </div>
</div>
{% endhighlight %}
</div>


<div class="pl-pattern">
### Slider

Depending on the JS library used for the slider, functionality may vary.

Sliders can provide:

- Min and max allowable values
- Visible ticks (or pips)
- Step increments
- Multi-handle range

<span class="text-muted">Example uses https://github.com/leongersen/noUiSlider for demo purposes.</span>

{::nomarkdown}
<div class="pl-preview">
<div class="container-fluid" style="max-width: 400px; margin: 0;">
    <div class="row">
        <form role="form" class="col-sm-12 form-horizontal">
            <div class="form-group">
                <span class="col-sm-3 control-label">Basic</span>
                <div class="col-sm-9">
                    <div id="sl1" data-nouislider data-min="0" data-max="50" data-step="10" data-start="10"></div>
                </div>
            </div>
            <div class="form-group">
                <span class="col-sm-3 control-label">Ticks</span>
                <div class="col-sm-9">
                    <div id="sl2" data-nouislider data-pips="true" data-min="0" data-max="50" data-step="10" data-start="20"></div>
                </div>
            </div>
            <div class="form-group">
                <span class="col-sm-3 control-label">Range</span>
                <div class="col-sm-9">
                    <div id="sl3" data-nouislider data-pips="true" data-min="0" data-max="50" data-step="10" data-start="0" data-start-b="30"></div>
                </div>
            </div>
            <div class="form-group">
                <span class="col-sm-3 control-label">Value</span>
                <div class="col-sm-9">
                    <strong style="display: block; margin-bottom: -5px; margin-top: 7px;" id="sl5-lower"></strong>
                    <div id="sl5" data-nouislider data-link-lower="#sl5-lower" data-min="0" data-max="50" data-step="10" data-start="50"></div>
                </div>
            </div>
            <div class="form-group">
                <span class="col-sm-3 control-label">Values</span>
                <div class="col-sm-9">
                    <div class="clearfix" style="margin-bottom: -5px; margin-top: 7px;">
                      <strong style="" id="sl6-lower"></strong> to <strong style="" id="sl6-upper"></strong>
                    </div>
                    <div id="sl6" data-nouislider data-link-lower="#sl6-lower" data-link-upper="#sl6-upper" data-min="0" data-max="50" data-step="10" data-start="10" data-start-b="40"></div>
                </div>
            </div>
            <div class="form-group">
                <span class="col-sm-3 control-label">Disabled</span>
                <div class="col-sm-9">
                    <div id="sl7" data-nouislider disabled data-min="0" data-max="50" data-step="10" data-start="30"></div>
                </div>
            </div>
        </form>
    </div>
</div>
</div>
{:/nomarkdown}


{% highlight html %}
<div class="form-group">
    <label for="se15" class="col-sm-3 control-label">Normal</label>
    <div class="col-sm-9">
        <input class="slider" type="number">
    </div>
</div>
{% endhighlight %}

</div>

<div class="pl-pattern">
### Rich text editor
The rich text editor allows for text input with additional formatting and inline images/links. Only include the functionality/buttons/tools necessary for the specific purpose.

{::nomarkdown}
<div class="pl-preview">
<div style="max-width: 425px; margin: 0;">
    <div style="background: #f9f9f9; border: 1px solid #ccc; border-bottom:0;" class="btn-toolbar btn-toolbar-hover">
        <div class="btn-group">
            <button type="button" class="btn btn-default btn-hover dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                Arial <span class="caret"></span>
            </button>
            <ul class="dropdown-menu" role="menu">
                <li class="active"><a href="#">Arial</a></li>
                <li><a href="#">Georgia</a></li>
                <li><a href="#">Courier</a></li>
            </ul>
        </div>
        <div class="btn-group">
            <button type="button" data-toggle="tooltip" data-placement="top" title="Bold" class="btn btn-hover btn-icon-only"><i class="icon icon-bold"></i><span class="sr-only">Bold</span></button>
            <button type="button" data-toggle="tooltip" data-placement="top" title="Italicize" class="btn btn-hover active btn-icon-only"><i class="icon icon-italic"></i><span class="sr-only">Italicize</span></button>
            <button type="button" data-toggle="tooltip" data-placement="top" title="Underline" class="btn btn-hover btn-icon-only"><i class="icon icon-underline"></i><span class="sr-only">Underline</span></button>
        </div>
        <div class="btn-group">
            <button type="button" data-toggle="tooltip" data-placement="top" title="Ordered list" class="btn btn-hover btn-icon-only"><i class="icon icon-list-ol"></i><span class="sr-only">Ordered list</span></button>
            <button type="button" data-toggle="tooltip" data-placement="top" title="Unordered list" class="btn btn-hover btn-icon-only"><i class="icon icon-list-ul"></i><span class="sr-only">Unordered list</span></button>
        </div>
        <div class="btn-group">
            <button type="button" data-toggle="tooltip" data-placement="top" title="Indent" class="btn btn-hover btn-icon-only"><i class="icon icon-indent"></i><span class="sr-only">Indent</span></button>
            <button type="button" data-toggle="tooltip" data-placement="top" title="Outdent" class="btn btn-hover btn-icon-only"><i class="icon icon-dedent"></i><span class="sr-only">Outdent</span></button>
        </div>
        <div class="btn-group">
            <button type="button" data-toggle="tooltip" data-placement="top" title="Insert link" class="btn btn-hover btn-icon-only"><i class="icon icon-chain"></i><span class="sr-only">Insert link</span></button>
            <button type="button" data-toggle="tooltip" data-placement="top" title="Insert image" class="btn btn-hover btn-icon-only"><i class="icon icon-image"></i><span class="sr-only">Insert image</span></button>
        </div>
    </div>
    <label for="txt-note">Note</label>
    <textarea id="txt-note" cols="30" rows="10" class="form-control" style="border-top-left-radius: 0; border-top-right-radius: 0;" placeholder="Enter note here..."></textarea>
</div>
</div>
{:/nomarkdown}

{% highlight html %}
<div style="max-width: 425px; margin: 0;">
    <div style="background: #f9f9f9; border: 1px solid #ccc; border-bottom:0;" class="btn-toolbar btn-toolbar-hover">
        <div class="btn-group">
            <button type="button" class="btn btn-default btn-hover dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                Arial <span class="caret"></span>
            </button>
            <ul class="dropdown-menu" role="menu">
                <li class="active"><a href="#">Arial</a></li>
                <li><a href="#">Georgia</a></li>
                <li><a href="#">Courier</a></li>
            </ul>
        </div>
        <div class="btn-group">
            <button type="button" data-toggle="tooltip" data-placement="top" title="Bold" class="btn btn-hover btn-icon-only"><i class="icon icon-bold"></i><span class="sr-only">Bold</span></button>
            <button type="button" data-toggle="tooltip" data-placement="top" title="Italicize" class="btn btn-hover active btn-icon-only"><i class="icon icon-italic"></i><span class="sr-only">Italicize</span></button>
            <button type="button" data-toggle="tooltip" data-placement="top" title="Underline" class="btn btn-hover btn-icon-only"><i class="icon icon-underline"></i><span class="sr-only">Underline</span></button>
        </div>
        <div class="btn-group">
            <button type="button" data-toggle="tooltip" data-placement="top" title="Ordered list" class="btn btn-hover btn-icon-only"><i class="icon icon-list-ol"></i><span class="sr-only">Ordered list</span></button>
            <button type="button" data-toggle="tooltip" data-placement="top" title="Unordered list" class="btn btn-hover btn-icon-only"><i class="icon icon-list-ul"></i><span class="sr-only">Unordered list</span></button>
        </div>
        <div class="btn-group">
            <button type="button" data-toggle="tooltip" data-placement="top" title="Indent" class="btn btn-hover btn-icon-only"><i class="icon icon-indent"></i><span class="sr-only">Indent</span></button>
            <button type="button" data-toggle="tooltip" data-placement="top" title="Outdent" class="btn btn-hover btn-icon-only"><i class="icon icon-dedent"></i><span class="sr-only">Outdent</span></button>
        </div>
        <div class="btn-group">
            <button type="button" data-toggle="tooltip" data-placement="top" title="Insert link" class="btn btn-hover btn-icon-only"><i class="icon icon-chain"></i><span class="sr-only">Insert link</span></button>
            <button type="button" data-toggle="tooltip" data-placement="top" title="Insert image" class="btn btn-hover btn-icon-only"><i class="icon icon-image"></i><span class="sr-only">Insert image</span></button>
        </div>
    </div>
    <textarea id="" cols="30" rows="10" class="form-control" style="border-top-left-radius: 0; border-top-right-radius: 0;" placeholder="Enter note here..."></textarea>
</div>
{% endhighlight %}
</div>

