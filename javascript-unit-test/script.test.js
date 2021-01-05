/**
 * @fileoverview unit test 
 */
const { search } = require("./script");

describe("unit test", () => {

  const dbMock = [
    "disney.com",
    "abcpictures.com",
    "walker.com",
    "walker123.com",
    "walkerpictures.com",
  ];

  test("should be defined", () => {
    expect(search).toBeDefined();
  });

  test("should be able to do simple test", () => {
    expect("hello").toBe("hello");
  });

  test("should be able to search", () => {
    expect(search("test", dbMock)).toEqual([]);
  });

  test("should be able to search", () => {
    expect(search("walker", dbMock)).toEqual([
      "walker.com",
      "walker123.com",
      "walkerpictures.com",
    ]);
  });

  test("should be able to search", () => {
    expect(search("pic", dbMock)).toEqual([
      "abcpictures.com",
      "walkerpictures.com",
    ]);
  });

  test("should work with undefined", () => {
    expect(search(undefined, dbMock)).toEqual([]);
  });

  test("should work with an null input", () => {
    expect(search(null, dbMock)).toEqual([]);
  });

  test("should not return more than 3 matches", () => {
    expect(search(".com", dbMock).length).toEqual(3);
  });
});
