/**
 * @fileoverview for showing how to do unit test
 */
const fetch = require("node-fetch").default;

/**
 * @param {fetch} fetch 
 * @returns {Promise<{count: number, results: object[]}>}
 */
function getPeoplePromise(fetch) {
  return fetch("https://swapi.py4e.com/api/people")
    .then(response => response.json())
    .then(data => {
      return {
        count: data.count,
        results: data.results,
      }
    });
}

/**
 * @param {fetch} fetch 
 * @returns {Promise<{count: number, results: object[]}>}
 */
async function getPeople(fetch) {
  const getRequest = await fetch("https://swapi.py4e.com/api/people");
  const data = await getRequest.json();
  return {
    count: data.count,
    results: data.results,
  };
}

module.exports = {
  getPeoplePromise,
  getPeople
};
