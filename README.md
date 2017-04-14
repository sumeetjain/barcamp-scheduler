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

### Testing on LAN
If you need to test multi-computer interactions 

1. Figure out your computer's local IP (for this example we'll use `192.168.1.1`)
2. Edit `/bc-back/env` to read `REACT_URL = 192.168.1.1:8080` (substitute your local IP)
3. Edit `/bc-front/app.config.js` to read `module.exports = { api_url: 'http://192.168.1.1:3000' };` (substitute your local IP)
4. Stop your rails server and restart it with `rails s -b 0.0.0.0` it's now open to connections from your local network
5. Stop your react server, edit `/bc-front/package.json`. In the `"scripts"` section, change `"start:"` from `"webpack-dev-server"` to `"webpack-dev-server --host 0.0.0.0"`
6. Run `npm start` and your webpack/react server is now open to local connections
7. Anyone on your local network can access the application at `192.168.1.1:8080` in a browser (substitute your local IP)