---
title: "Wizards"
---

<div class="pl-pattern">
<h3>Wizards</h3>

#### Purpose
Users need guidance filling out a complex form.

#### Description
Splitting a complex form into multiple steps accomplishes a few things:

- Reduces cognitive overhead by organizing and presenting related input fields
- Facilitates a potentially linear or evolving process
- Can provide improved contextual or evolving help 

#### Basic functionality
A wizard is usually composed of:

- A list of steps, either horizontally or vertically
- A collection of form controls and help text organized into steps
- Buttons for navigation
- Validation

&nbsp;

</div>

<div class="pl-pattern">
### Steps

In many cases it's beneficial to show the list of steps a wizard will have. Depending on the number of steps and space available, steps can be listed vertically or horizontally.

#### Validation
- Indicate a step's validity
  - Show a check icon when valid (only if the user has left/submitted the form with valid input)
  - Show a warning icon when invalid (only if the user has left/submitted the form with errors)

#### Navigation
- Allow for navigating to previous steps when possible
- In some cases, skipping ahead is applicable
- Navigation may evolve depending on previous steps

#### Vertical steps
Use vertical steps when there are 5 or more steps, when there are nested steps, or when steps are categorized.


{::nomarkdown}
<div class="pl-preview">
<div class="">
    <div class="" style="max-width: 700px;">
        <div class="" style="display: inline-block; width: 100%;">
            <div style="width: 200px; min-height: 400px; float: left;">
                <div class="panel-body">
                    <h4>New alert</h4>
                    <p>Add and configure new alerts for an environment.</p>
                </div>
                <ul class="nav nav-stacked nav-tree" role="tab-list">
                    <li role="presentation"><a role="tab" href="#"><span style="margin-left: -10px;" class="alert-icon-success"></span> Criteria</a></li>
                    <li class="active" role="presentation"><a role="tab" href="#"><i style="margin-left: -10px;" class="alert-icon-danger"></i> Recipients</a>
                    </li>
                    <li class="disabled" role="presentation"><a role="tab"><i style="margin-left: -10px; position: relative; top: 1px; width: 14px; display: inline-block;"></i> Configure</a>
                        <ul class="nav nav-stacked nav-tree" role="tab-list">
                            <li class="disabled" role="presentation"><a href=""><i style="margin-left: -10px; position: relative; top: 1px; width: 14px; display: inline-block;"></i>Instances</a></li>
                            <li class="disabled" role="presentation"><a href=""><i style="margin-left: -10px; position: relative; top: 1px; width: 14px; display: inline-block;"></i>Monitoring</a></li>
                        </ul>
                    </li>
                    <li class="disabled" role="presentation"><a role="tab"><i style="margin-left: -10px; position: relative; top: 1px; width: 14px; display: inline-block;"></i> Review</a></li>
                </ul>
            </div>
            <div class="panel panel-default" style="margin-left: 200px; height: 450px; max-height: 450px; overflow: auto; position: relative;">
                <div class="panel-body">
                    <h4>Recipients <span class="pull-right" style="font-size: 13px;"><span class="text-primary">Step 2 of 6</span></span></h4>
                    <p>When the alert criteria is met, each recipient will receive an email notification.</p>
                    <hr>
                    <div class="alert alert-danger"><i class="alert-icon alert-icon-danger"></i>Fix the 1 error below.</div> 
                    <div class="form-group" style="">
                        <label for="txt-email1">Email 1</label>
                        <div class="input-group">
                            <input id="txt-email1" type="text" class="form-control" value="jsmith@corp.com">
                            <div class="input-group-btn"><button class="btn btn-default"><i class="icon icon-times"></i></button></div>
                        </div>
                    </div>
                    <div class="form-group has-error" style="">
                        <label for="txt-email2">Email 2</label>
                        <div class="input-group">
                            <input id="txt-email2" type="text" class="form-control" value="aharrison@corp">
                            <div class="input-group-btn"><button class="btn btn-default"><i class="icon icon-times"></i></button></div>
                        </div>
                        <p class="help-block">Invalid email address.</p>
                    </div>
                    <div class="form-group" style="">
                        <label for="txt-email3">Email 3</label>
                        <div class="input-group">
                            <input id="txt-email3" type="text" class="form-control" placeholder="Enter an email address">
                            <div class="input-group-btn"><button class="btn btn-default">Add</button></div>
                        </div>
                    </div>
                        <div class="text-right" style="position: absolute; padding: 15px; bottom: 0; right: 0; left: 0;">
                        <button class="btn btn-default pull-left">Back</button>
                        <button class="btn btn-primary">Continue</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
{:/nomarkdown}

&nbsp;

#### Horizontal steps
Use horizontal steps when there are 4 or less steps.


{::nomarkdown}
<div class="pl-preview">
<div class="">
    <div class="" style="max-width: 700px; margin-auto;">
        <div style="padding: 50px; overflow: auto; position: relative;">
            <ol class="nav-steps" aria-label="Application steps">
                <li style="width:33.3%">
                    <a href="#void">Applicant information <span class="sr-only">step 1 of 3 is complete.</span></a>
                </li>
                <li class="active" style="width:33.3%">
                    <a href="#void">Mark information <span class="sr-only">step 2 of 3 is the current step</span></a>
                </li>
                <li class="" style="width:33.3%">
                    <span>Goods and services <span class="sr-only">step 3 of 3 is incomplete</span></span>
                </li>
            </ol>
            <h2 style="margin: 36px 0;" class="text-center">So far so good. Now, let's talk about your mark.</h2>
            <div style="margin: 18px 0;">
                <form class="" role="form">
                    <div class="form-group">
                        <fieldset>
                            <legend class="h4" style="border-bottom: none">First, what type of mark is this?</legend>
                            <div class="radio">
                                <label><input type="radio" name="optionsRadios" id="optionsRadios1" checked value="option1">Standard characters <div class="text-muted">Use this option to register a mark that is comprised of word(s), letter(s), number(s), or any combination thereof with no design element or stylization. <a href="#">Learn more.</a></div></label>
                            </div>
                            <div class="radio">
                                <label><input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">Special form <div class="text-muted">Use this option if you wish to register a mark that is comprised of stylized word(s), letter(s), and/or number(s), and/or a design element. <a href="#">Learn more.</a></div></label>
                            </div>
                            <div class="radio">
                                <label><input type="radio" name="optionsRadios" id="optionsRadios3" value="option3">Sound mark <div class="text-muted">A non-visual mark may be a sound, a scent, or otherwise non-visual mark. <a href="#">Learn more.</a></div></label>
                            </div>
                        </fieldset>
                    </div>
                </form>
                <div class="text-right" style="margin-top: 24px;">
                    <button class="btn btn-default pull-left">Back</button>
                    <button class="btn btn-primary">Continue</button>
                </div>
            </div>
<!--             <div style="display: inline-block; width: 100%; text-align: center; padding: 15px; margin-bottom: 10px;">
                <button class="btn btn-default pull-left"><div class="pull-left" style="background: #ccc; padding: 6px; color: #fff; text-align: center;margin-top: 2px;margin-right: 8px; margin-left: -4px; "><i class="icon icon-arrow-left "></i></div><div style="margin-left: 4px; float: left;text-align: left;"><div class="text-muted small">PREVIOUS</div>Account</div></button>
                <button class="btn btn-default pull-right"><div class="pull-right" style="background: #004c97; padding: 6px; color: #fff; text-align: center;margin-top: 2px;margin-left: 8px; margin-right: -2;"><i class="icon icon-arrow-right "></i></div><div style="margin-right: 4px; float: right;text-align: right;"><div class="text-muted small">NEXT</div>Customize</div></button>
            </div>
 -->        </div>
    </div>
</div>
</div>
{:/nomarkdown}

</div>

<div class="pl-pattern">
### Buttons
Buttons for a wizard can vary depending on the need. The primary actions should be on the right, the secondary actions should be on the left.

{::nomarkdown}
<div class="pl-preview">
<div style="max-width: 450px; display: inline-block; width: 100%;">
    <div class="btn-toolbar">
        <button class="btn btn-primary pull-right">Continue</button>
    </div>
    <hr>
    <div class="btn-toolbar">
        <button class="btn btn-default">Back</button>
        <button class="btn btn-primary pull-right">Continue</button>
    </div>
    <hr>
    <div class="btn-toolbar">
        <button class="btn btn-default">Back</button><button class="btn btn-default">Cancel</button>
        <button class="btn btn-primary pull-right">Continue</button>
    </div>
    <hr>
    <div class="btn-toolbar">
        <button class="btn btn-default">Back</button><button class="btn btn-default">Cancel</button>
        <button class="btn btn-primary pull-right">Continue</button>
        <button class="btn btn-default pull-right">Save</button>
    </div>
    <p style="margin-top: 10px;" class="pull-right text-muted"> Last saved 09/19/14 10:45 AM</p>
</div>
</div>
{:/nomarkdown}
</div>
