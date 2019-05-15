/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';
import fetchMock from 'fetch-mock';

describe('Fetching Data', () => {

  it('should fetch first person item from server', async () => {
    // Good practice to check number of assertions made with
    // async code
    expect.assertions(1);

    // Setup
    const wrapper  = shallow(<App/>);
    const instance = wrapper.instance();

    // Mocking
    const url = 'https://www.swapi.co/api/people/';
    const mockResponse = {
      count: 999,
      results: [
        {
          "name": "Luke",
          "height": "999",
          "mass": "999"
        },
        {
          "name": "Vader",
          "height": "888",
          "mass": "888"
        },
      ]
    };

    // Use fetchMock here to mock the same response every time this url is called
    // This way we are implicitly mocking the fetch API.
    fetchMock.get(url, mockResponse);

    // Call method
    const person1 = await instance.getPersonData();

    // Assertions
    expect(person1).toEqual("Luke");
  });
});
