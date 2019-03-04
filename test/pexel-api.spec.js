const PexelsApi  = require('../src/pexelsApiWrapper');
const chai = require('chai');
const expect = require('chai').expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised).should();

describe('should have initated PexelsApi constructor', () => {
  const pexelApi = new PexelsApi(require('../config').API_KEY);
  it ('should not throw error', () => {
    expect(pexelApi).to.instanceOf(PexelsApi);
  });

  it ('should fetch getPhotosById', () => {
    pexelApi.getPhotoById(1484253).should.eventually.be.true;
  });

  it ('should fetch getTrendingPhotos', () => {
    pexelApi.getTrendingPhotos(1, 5).should.eventually.be.keys(['page', 'per_page', 'photos']);
  });
});

describe('Throw error PexelsApi constructor', () => {
  it ('should have throw an api key missing error', () => {
    expect(() => {
      return new PexelsApi('');
    }).to.throw('Pexels API key is missing');
  })
});
 
