import {isAlphaNumeric} from "../utils/isAlphaNumeric";

describe("test", () => {
    test('Input value must be alphanumeric', () => {
        expect(isAlphaNumeric("This is a string")).toBe(true);
    });
});
