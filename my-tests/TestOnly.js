fixture("Test Only Fixture")
    .page("http://devexpress.github.io/testcafe/");

test.page("https://devexpress.github.io/testcafe/example/")
("1st Test Only", async t =>{
    await t
        .typeText("#developer-name","TAU")
        .click("#macos")
        .click("#submit-button");
});

test.page("https://devexpress.github.io/testcafe/example/")
//test.only.page("https://devexpress.github.io/testcafe/example/")
("2nd Test Only", async t =>{
    await t
        .typeText("#developer-name","TAU")
        .click("#macos")
        .click("#submit-button");
});
