/**
 * @fileoverview unit test
 */
const fetch = require("node-fetch").default;
const { getPeoplePromise, getPeople } = require("./script-for-async");

describe("unit test fetch data async", () => {

  test("should call swapi to get data using done", (done) => {
    expect.assertions(1); // always use expect.assertions 
    getPeople(fetch).then(data => {
      expect(data.count).toEqual(87);
      done();
    });
  });

  test("should call swapi to get data using return", () => {
    expect.assertions(1); // always use expect.assertions 
    return getPeople(fetch).then(data => {
      expect(data.count).toEqual(87);
    });
  });

  test("should call swapi to get data with promise", () => {
    expect.assertions(2); // always use expect.assertions 
    return getPeoplePromise(fetch).then(data => {
      expect(data.count).toEqual(87);
      expect(data.results.length).toBeGreaterThan(5);
    });
  });

  test("should return count and results using mock fetch", () => {
    // using jest to mock fetch function 
    const mockFetch = jest.fn().mockReturnValue(
      Promise.resolve({
        json: () => Promise.resolve({
          count: 89,
          results: [0, 1, 2, 3, 4, 5, 6, 7]
        })
      }));

    expect.assertions(4);
    return getPeoplePromise(mockFetch).then(data => {
      expect(mockFetch.mock.calls.length).toBe(1);
      expect(mockFetch).toBeCalledWith("https://swapi.py4e.com/api/people");
      expect(data.count).toEqual(89);
      expect(data.results.length).toBeGreaterThan(5);
    });
  });
});
