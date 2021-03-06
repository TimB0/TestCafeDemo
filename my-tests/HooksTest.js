fixture("Hooks Fixture")
    .page("http://devexpress.github.io/testcafe/")
    .beforeEach(async t =>{
        await t
            .setTestSpeed(0.1)
            .setPageLoadTimeout(0);
    });

test
.page("https://devexpress.github.io/testcafe/example/")
("First Hooks Test", async t =>{
    await t
        .typeText("#developer-name","TAU")
        .click("#macos")
        .click("#submit-button");
});

test
.page("https://devexpress.github.io/testcafe/example/")
("Second Hooks Test", async t =>{
    await t
        .typeText("#developer-name","TAU")
        .click("#macos")
        .click("#submit-button");
});

test
.page("https://devexpress.github.io/testcafe/example/")
("Third Hooks Test", async t =>{
    await t
        .typeText("#developer-name","TAU")
        .click("#macos")
        .click("#submit-button");
});