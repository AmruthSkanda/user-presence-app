# user-presence-app

Demo: https://user-presense-app.herokuapp.com/

---
Presence service app, similar to that in google docs, which shows people that are
currently viewing a particular doc.


## Running Locally
Make sure you have [Node.js](http://nodejs.org/) and [MongoDB](https://docs.mongodb.com/manual/installation/) and the [Heroku Cli](https://devcenter.heroku.com/articles/heroku-cli) installed.

```sh
git clone https://github.com/AmruthSkanda/user-presence-app.git # or clone your own fork
cd user-presence-app
npm install
npm run dev
```

Your app should now be running on [localhost:8989](http://localhost:8989/).


## Deploying to Heroku
```
heroku create
git push heroku master
heroku open
```
Alternatively, you can deploy your own copy of the app using the web-based flow
Follow instructions from official docs below

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://devcenter.heroku.com/categories/deployment)

---

Cheers!
