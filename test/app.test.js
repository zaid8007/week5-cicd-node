const { add } = require("../app");

test("2 + 3 should equal 5", () => {
    if (add(2, 3) !== 5) {
        throw new Error("Test failed");
    }
});