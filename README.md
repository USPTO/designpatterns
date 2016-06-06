USPTO UI Design Library
==============

- [View the UI Design Library](https://uspto.github.io/designpatterns/)
- [Contributing](CONTRIBUTING.md)
- [How-to: Using the UI Design Library in your project](howto.md)
- [Terms](TERMS.md)
- [License](LICENSE)

Have feedback or questions about the UI Design Library? [Create an issue!](https://github.com/USPTO/designpatterns/issues)

#### About this repository

This is the source code repository for the [USPTO UI Design Library](https://uspto.github.io/designpatterns/). The site is powered by [Jekyll](http://jekyllrb.com/), a static site generator that plays well with [Github Pages](https://help.github.com/articles/using-jekyll-with-pages/). 

#### Want to contribute?
See our [CONTRIBUTING.md](CONTRIBUTING.md) file for contribution guidelines.

---

### Building & running locally

##### Using Vagrant

With [Vagrant](https://www.vagrantup.com/) and [Virtualbox](https://www.virtualbox.org/) installed, do:
```
vagrant up
```
Once that's done, which will take a while the first time through, do:
```
vagrant ssh
cd /vagrant
```

Now, skip ahead to [Running the documentation](#running-the-documentation).



##### Not using Vagrant
You will need to [install Jekyll](http://jekyllrb.com/docs/installation/). You will also need to [install Node.js](http://nodejs.org/download/). Node.js powers the front-end build and dependency management tools [Grunt](http://gruntjs.com/) and [Bower](http://bower.io/).

Once Jekyll and Node.js are installed, ensure you have Grunt and Bower installed globally with:
```
npm install grunt-cli -g
npm install bower -g
```

Then install the project's dependencies with:
```
npm install
bower install
```
---
#### Running the documentation
Build the front-end assets (SASS/CSS/JS) with:
```
grunt build
```
Run the project with Jekyll:
```
jekyll serve
```
This starts Jekyll, which compiles the markdown files into static html files, starts a server for you to view the documentation at, as well as watches for changes and recompiles. 


##### Distribution Builds
After running `grunt build` and `jekyll build`, you will have a `_site` folder that contains the entire static site and resources. 


## License

Software code created by U.S. Government employees is not subject to copyright in the United States (17 U.S.C. §105). The United States/Department of Commerce reserve all rights to seek and obtain copyright protection in countries other than the United States for Software authored in its entirety by the Department of Commerce.  To this end, the Department of Commerce hereby grants to Recipient a royalty-free, nonexclusive license to use, copy, and create derivative works of the Software outside of the United States.

## Disclaimer

The United States Department of Commerce (DOC) GitHub project code is provided on an ‘as is’ basis and the user assumes responsibility for its use. DOC has relinquished control of the information and no longer has responsibility to protect the integrity, confidentiality, or availability of the information. Any claims against the Department of Commerce stemming from the use of its GitHub project will be governed by all applicable Federal law. Any reference to specific commercial products, processes, or services by service mark, trademark, manufacturer, or otherwise, does not constitute or imply their endorsement, recommendation or favoring by the Department of Commerce. The Department of Commerce seal and logo, or the seal and logo of a DOC bureau, shall not be used in any manner to imply endorsement of any commercial product or activity by DOC or the United States Government.
