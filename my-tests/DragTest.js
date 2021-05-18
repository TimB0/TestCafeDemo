import { Selector } from 'testcafe';

// Drag an element to a specified offset.

const triedCheckbox = Selector("label").withText("I have tried TestCafe");

fixture("TestCafe Example")
.page("https://devexpress.github.io/testcafe/example/");

test('Drag test', async t => {
 
    await t
        .click(triedCheckbox)
        .setTestSpeed(0.1)
        .drag("#slider",360,0,{offsetX:10,offsetX:10});
});
