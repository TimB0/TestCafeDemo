fixture("Skip Fixture")
    .page("http://devexpress.github.io/testcafe/");

test.skip.page("https://devexpress.github.io/testcafe/example/")
("1st Skip Test", async t =>{
    await t
        .typeText("#developer-name","TAU")
        .click("#macos")
        .click("#submit-button");
});

test.page("https://devexpress.github.io/testcafe/example/")
("2nd Skip Test", async t =>{
    await t
        .typeText("#developer-name","TAU")
        .click("#macos")
        .click("#submit-button");
});
