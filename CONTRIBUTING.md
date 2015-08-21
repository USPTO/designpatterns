# Guidance on how to contribute

> By submitting a pull request, or filing a bug, issue, or 
> feature-request you are agreeing to comply with our [TERMS](TERMS.md) and [LICENCE](LICENSE).

There are two primary ways to help: 
 - Using the issue tracker, and 
 - Changing the code-base.


#### Table of contents
- [Contributing OVERVIEW](#contributing-overview)
    - [Creating an managing issues](#creating-and-managing-issues)
    - [Making changes](#making-changes-to-the-repository)
    - [Releasing](#releasing)
- [Code architecture OVERVIEW](#code-architecture-overview)
    - [Guides](#guide-architecture)
    - [LESS/CSS/JS/Images](#lesscssjsimage-architecture)
    - [Versioning](#versioning-overview)
- [Adding and modifying patterns and guides](#adding-and-modifying-patterns-and-guides)
    - [Modifying a guide](#modifying-a-guide)
    - [Adding a new guide](#adding-a-new-guide)
- [Adding and modifying the LESS files](#adding-and-modifying-the-less-files)
- [Adding and modifying the icons](#adding-and-modifying-the-icons)
- [Performing a versioned release](#performing-a-versioned-release)


## Contributing overview

##### Creating and managing issues
- Is there a Github issue for the work you’re doing, going to do, or want someone else to do? Create one if not. [Learn how](https://help.github.com/articles/creating-an-issue/).
  - Github issues should be created for each feature, fix, improvement, and question.
  - Improvements or bugs received via email or elsewhere should be transferred to a Github issue.
  - Collaborators should add appropriate labels to issues [Learn how](https://help.github.com/articles/creating-and-editing-labels-for-issues-and-pull-requests/).
    - Add ‘browser’ labels for issues that are specific to a certain browser
    - Add ‘needs’ labels for issues that need detail, feedback, or work
    - Add ‘type’ labels to categorize issues by defects, improvements, or questions
    - Add ‘state’ labels to indicate whether it is ready to be worked on or in progress. State labels are synced with [waffle.io](https://waffle.io/USPTO/designpatterns), which can _optionally_ be used to manage and view issues. 
    - Update the 'needs' and 'state' labels for an issue as a state progresses through opened/in-progress/closed.
- Assign an issue or pull request to a user if desired. [Learn how](https://help.github.com/articles/assigning-issues-and-pull-requests-to-other-github-users/).


##### Making changes to the repository
- All changes and contributions should be done in a fork. [Learn how](https://guides.github.com/activities/forking/#fork).
- Create a pull request for changes that you want merged.  [Learn how](https://help.github.com/articles/using-pull-requests/#initiating-the-pull-request).
- Core repository owners/writers (select few) will review, discuss, approve, and merge pull requests. Depending on the size of the changes, additional review via meetings/emails may be necessary. Learn how [here](https://help.github.com/articles/merging-a-pull-request/ and) or [here](https://help.github.com/articles/using-pull-requests/#managing-pull-requests).
- If decisions are made in meetings/emails, details/decisions should be added to the relevant github issue as comments when possible to ensure that the decisions/changes/reasons are tracked and documented.


##### Releasing
- A core repository owner is elected to handle releasing new versions
- A github tag/release should be created for each version. [Learn how](https://help.github.com/articles/creating-releases/).
- The changelog should be updated (`/docs/changelog.md`) with the changes included in the release. 
- Follow [semver](http://semver.org/) (major-minor-patch) for versioning: 
  - major: Major or 'breaking' changes (e.g., drastically changing one or more patterns, layouts, or design styles)
  - minor: Additions and minor improvements (new patterns or adding additional sections to existing patterns)
  - patch: Small tweaks/changes/fixes/typos/clarifications


## Code architecture overview
##### Guide architecture
- The design library is built/ran using [Jekyll](https://help.github.com/articles/using-jekyll-with-pages/)
- Jekyll is configured via `/_config.yml`
- Side navigation categories and other variables are stored in `/_config.yml` under `doctypes`
- Guides are located in the `/docs` folder, and are organized into sub-folders (e.g., foundation, components, patterns, examples). Those sub folders correspond to the `doctypes` variable in `/_config.yml`, which drives the side navigation
- Each guide is a [markdown](https://guides.github.com/features/mastering-markdown/) file that includes the descriptions, examples, and source code.
- Each markdown file has YAML metadata at the top. [Learn more](http://jekyllrb.com/docs/frontmatter/).
  - `title: Buttons` : The title of the guide
  - `hidden: true` : Whether the guide should be hidden from the navigation (if it’s a work in progress or if it should just be excluded for some reason)

##### LESS/CSS/JS/Image architecture
- LESS files for the 'usptostrap' Bootstrap theme are in `/usptostrap/less`
- LESS files, JS, and vendor libraries specific for the design library are in `/front`
- When possible, vendor dependencies are managed via [Bower](http://bower.io/)
- Assets are compiled using [Node](https://nodejs.org/) and [Grunt](http://gruntjs.com/), and are placed in the `/generated` folder
- Compiled assets are also placed and zipped for distribution via Grunt into the `/downloads` folder

##### Versioning overview
- Versions are compiled to static files, then the static files are placed in a versioned folder (e.g., `/1.x`)
- Versions are referenced in `/_config.yml` , which is used to list versions/links on the landing page
- By default, all committed changes to guides are automatically compiled by Github/Jekyll and served as the 'future' version

## Adding and modifying patterns and guides

##### Modifying a guide
- Find the `.md` file you'd like to edit
- Make your changes
- Commit your changes. [Learn how](https://help.github.com/articles/making-changes/)

##### Adding a new guide
- Add a new `.md` file in the appropriate category folder in `/docs` (e.g., `/docs/components/buttons.md`)
- Contents inside of the guides are a combination of [markdown](https://guides.github.com/features/mastering-markdown/) and HTML.
- Use the following template to get started, or copy an existing guide

```
  ---
  title: Buttons
  hidden: false
  ---

  <div class="pl-pattern">

  ### Buttons

  #### Button styles

  There are 5 button styles

  {::nomarkdown}
  <div class="pl-preview">
      // INSERT HTML FOR EXAMPLE
  </div>
  {:/nomarkdown}

  {% highlight html %}
      // INSERT HTML FOR SOURCE CODE
  {% endhighlight %}

  </div>
```
- The markup necessary for creating a guide is:
  - The YAML metadata at the top
  - `<div class="pl-pattern> ... </div>` 
    - indicates the start and end of a section within the guide. There can be multiple of these within a single guide.
  - `{::nomarkdown} <div class="pl-preview"> ... </div> {:/nomarkdown}`
    - indicates the start and end of a live example. These go _inside_ the `.pl-pattern` divs.
  - `{% highlight html %} ... {% endhighlight %}`
    - indicates the start and end of the source code for the above example. These should be placed directly below an example.
- Heading 3s (`###` or `h3` elements) show up as subsections in the left navigation
- Commit your changes. [Learn how](https://help.github.com/articles/making-changes/)

## Adding and modifying the LESS files
- Organize less files into modular components
- `/uspotstrap/less/usptostrap.less` imports all the individual components
- Custom components that are not in Bootstrap are placed in `/usptostrap/less/custom/`
- Ensure that all changes are consistent with the style and practices used elsewhere in the code
- Run `grunt build` to build the LESS files
- Commit your changes, including the `/generated` folder (which is where compiled assets go). [Learn how](https://help.github.com/articles/making-changes/).

## Adding and modifying the icons
- Since the method for serving icons is often dependent on the target audience, the design library provides a set of individual `.svg` files in `/usptostrap/images/icons/` that users can consume and modify to meet their needs.
- If an icon is added or modified, use [icomoon.io](https://icomoon.io/) to compile the individual icons into black and white sprite sheets. You will need to update `/usptostrap/less/_icons.less` with the generated css. 

## Performing a versioned release
- Update changelog.md with your latest changes
- Update the `version` property in `/package.json` to your new version
- Update the `version` property in `/_config.yml` to your new version
- Update the `baseurl` property in `/_config.yml` to `/designpatterns/1.x` (for a major bump, it would be `/designpatterns/2.x`)
- Update the `versions` property in `/_config.yml` to include your new version
- Update the `includePreviews` property in `/_config.yml` to be `false`
- Run `grunt build` to build all the LESS/JS files
- Run `jekyll build` from the cmd line to build the documentation
- Delete the nested version folders under `/_site`
- Rename the newly created `/_site` folder to your new version (e.g., `/1.x` or `/2.x`)
- Revert the `baseurl` property in `/_config.yml` back to `/designpatterns`
- Revert the `includePreviews` property in `/_config.yml` back to `true`
- Commit your changes.
- Add the release to https://github.com/USPTO/designpatterns/releases
