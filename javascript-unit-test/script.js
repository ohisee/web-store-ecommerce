/**
 * @fileoverview for showing how to do unit test  
 */

/** @type {string[]} */
const siteDatabase = [
  "cats.com",
  "souprecipes.com",
  "flowers.com",
  "animals.com",
  "catpictures.com",
  "myfavoritecats.com",
  "myfavoritecats123.com",
];

/**
 * @param {string} searchInput 
 * @param {string[]} db inject this into the search function 
 */
const search = (searchInput, db) => {
  const matches = db.filter(website => {
    return website.includes(searchInput);
  });
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

console.log(search("soup", siteDatabase));

module.exports = {
  search
};
