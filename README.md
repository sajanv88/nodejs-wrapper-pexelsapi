# nodejs-wrapper-pexelsapi
A wrapper for accessing pexels api service through Nodejs [Pexels API](https://www.pexels.com/api/). Please refer to the API docs to understand the inputs and expected results.

### Installation

Install the package
```
$ npm install --save nodejs-wrapper-pexelsapi
```

### Usage

```js
//In your NodeJS App

//Require nodejs-wrapper-pexelsapi Library
const PexelsApi = require('nodejs-wrapper-pexelsapi');

//Create Client instance by passing in API key
var pexelsClient = new PexelsApi("<API_KEY>");

const response = (res) => {
  console.log(res)
};

const error = (err) => {
  console.error(err);
}

//Search Photos API
pexelsClient.searchPhotos("food")
  .then(response)
  .catch(error);

//Search Videos API
pexelsClient.searchVideos("people")
  .then(response)
  .catch(error);

//Get Trending Photos
pexelsClient.getCuratedPhotos(1, 5)
  .then(response)
  .catch(error);

//Get Random Photos
pexelsClient.getRandomPhotos(5)
  .then(response)
  .catch(error);

//Get Photo by ID
pexelsClient.getPhotoById(1710795)
  .then(response)
  .catch(error);

//Get Popular Videos
pexelsClient.getPopularVideos()
  .then(response)
  .catch(error);
```


### API

#### Search Photos
Search photos in Pexels API

| Param | Type | Description |
| ----- | ---- | ----------- |
| **query** | *string* | The search term to query the API with
| **page** | *number* | The page number to return (Defaults to 1)
| **perPage** | *number* | The number of items to return per page (Defaults to 10)

```js
PexelsAPIInstance.searchPhotos(query, page, perPage);
```

#### Random photo
Get Random photos from Pexels API

| Param | Type | Description |
| ----- | ---- | ----------- |
| **perPage** | *number* | The number of items to return per page (Defaults to 10)

```js
PexelsAPIInstance.getRandomPhotos(perPage);
```

#### Photo
Request a specific photo by ID and it returns a promise.

| Param | Type | Description |
| ----- | ---- | ----------- |
| **id** | *number* | The ID of the photo

```js
PexelsAPIInstance.getPhotoById(id);
```

#### Trending
Trending photos from Pexels API

| Param | Type | Description |
| ----- | ---- | ----------- |
| **page** | *number* | The page number to return (Defaults to 1)
| **per_page** | *number* | The number of items to return per page (Defaults to 10)

```js
PexelsAPIInstance.getTrendingPhotos(page, perPage);
```

#### Search Videos
Search videos in Pexels Videos API

| Param | Type | Description |
| ----- | ---- | ----------- |
| **query** | *string* | The search term to query the API with
| **page** | *number* | The page number to return (Defaults to 1)
| **perPage** | *number* | The number of results to return per page (Defaults to 10)

```js
PexelsAPIInstance.searchVideos(query, page, perPage);
```

#### Popular Videos
Get Pexels Popular Videos API

| Param | Type | Description |
| ----- | ---- | ----------- |
| **page** | *number* | The page number to return (Defaults to 1)
| **per_page** | *number* | The number of results to return per page (Defaults to 10)

```js
PexelsAPIInstance.getPopularVideos(page, perPage);
```
#### API Version
Get Pexels API version

```js
PexelsAPIInstance.getPexelsApiVerison();
```

### Development
git clone [nodejs-wrapper-pexelsapi](https://github.com/sajanv88/nodejs-wrapper-pexelsapi.git)
### Test
add your pexels API in ```config.js``` file
```js
const config = require('../config');
console.log(config.API_KEY);
```
run command: ```npm run test```

### Acknowledgements
Thanks, [Pexels](http://pexels.com) for creating a great platform for great images.
I'd like to thank all the folks who have been using this library!

