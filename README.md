***Almost there, minor polish to come out soon !***

# Vue.js authentication gate
This repository contains `Vue.js` template acting like authentication gate for your system. It is based on several Vue dependencies listed below. Feel free to use and customise this template on your own.

❤️ Enjoy it !

## Authentication logic
There isn't much of a nuclear science behind. Protected resources area accessed using JWT based `accessToken`. To get the token, perform `Basic HTTP auth` POST on `/login`. Then, use the token to access *protected* resources by glueing it to the URL itself.  
More secure authentication methods are intentionally omitted to lower the complexity of this example. For your PRODUCTION needs - *DON'T USE THIS APPROACH* - and better come up with more secure solution (use `OAuth` or similar techniques).

## Tech stack description
Template utilises following frameworks:
- `Vue` - well you know it...
- `vue-router` - for managing routes
- `Vuex` - for state handling
- `axios` - for customising HTTP requests
- `vee-validate` - for form validation
- `bootstrap4` and other visual goodies (`fontawesome` etc...)
- custom built [HTTP companion server](https://github.com/vexy/flask-auth-template) in Python (yeah ⭐️ would be nice !)
  - you can further customise 👆 server to serve your needs 😉

Rest of the template is good ol' `JS` in it's purest form.

### Installation and setup
Before all, make sure you have `Vue CLI` installed.  
Use `-g` option to install it into global package scope, like this:

```bash
npm install -g @vue/cli @vue/cli-service-global
```

Then, proceed with installing following dependencies:
```bash
npm install vue-router@latest vuex@latest
npm install vee-validate@latest
npm install axios@latest
npm install bootstrap@latest jquery@latest popper.js@latest
npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/vue-fontawesome
```

**TLDR**;  
You can just `npm install` if you're feeling a bit lazy today.

### Companion server
For the template to work properly, it needs some sort of HTTP server processing the requests.
I've used custom built HTTP server written in Python. Check out the repo here: https://github.com/vexy/flask-auth-template (oh dear it's [vexy](https://github.com/vexy/) again 😑)

To run the server after installation and setup, just:  
(*make sure to checkout the docs for server installation and setup*)
```bash
# run the server in this fancy way
$ . start.sh
```

If you're having problems with installation or setup, google the stuff first, then if you feel desperate - fire an [issue](https://github.com/vexy/flask-auth-template/issues) here.

### Running template locally
First, make sure your HTTP server is up and running.
Then, run `npm run serve`.  
(*by default just point your browser to `http://localhost:8000` or `:8080`*)

### Production ready build
To create production ready source, run `npm run build`. Optimised output will be stored in `dist/` folder.


#### Inspiration
This example was inspired by: https://github.com/websanova/vue-auth

----

Copyright © **2020** Veljko Tekelerović  
MIT Licence
