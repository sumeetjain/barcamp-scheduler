## Dev Installation

Clone repo `git clone git@github.com:omahacodeschool/barcamp-scheduler.git`

### Back-end
#### Installation
1. Create `.env` file in rails project root directory (`bc-back`) and add `REACT_URL = localhost:8080`
2. `bundle install`
3. Create database with `rake db:create`
4. Seed database with `rake db:seed`
4. Start the server with `rails s`

### Front-end
#### Requirements
You'll need to have `npm` installed. On Mac with Homebrew `brew install node`

#### Installation
1. In the react project root directory (`bc-front`), run `npm install`
2. Create `app.config.js` in react root directory and add ```module.exports = {
    api_url: 'http://localhost:3000'
};```
3. Start the server with `npm start`
4. In browser navigate to `localhost:8080`