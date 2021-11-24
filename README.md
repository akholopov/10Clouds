# 10 Clouds e2e tests

### Running tests locally

* `open pzaz-tv-wdio-tests`
* `nvm use`
* `yarn install`
* run:

```bash
yarn test:e2e --browser chrome --device desktop --suite regression
```

#### Required parameters:

   - ```--device``` - this parameter allows to change device to chrome emulator, possibilities are:
     - ```desktop``` - set as default one, loads all capabilities available for desktop versions
     - ```mobileAndroid``` - loads capability for mobile Android
  
   - ```--browser``` this parameter allows to change browser locally
     Possibilities are: 
     - ```chrome``` - default one, when browser is not specified then chrome will be open as default

## Test suite (optional parameter)
You can start chosen test suite using ``suite`` parameter, e.g. ``--suite regression``
 
 - ``regression`` - regression pack

If you want to run all tests, you can skip suite parameter.

###

```bash
yarn test:e2e --browser chrome --device desktop
```
