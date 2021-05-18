import { Selector } from 'testcafe'; // first import testcafe selectors

const addElementBtn = Selector('button')
const manuallyAddedButton = Selector('button.added-manually')

fixture `First Fixture`
    .page `https://the-internet.herokuapp.com/add_remove_elements/`;

test('First Test', async t => {
    await t
        .expect(addElementBtn.textContent).eql('Add Element','button should say Add Element')
        .click(addElementBtn)
        .expect(manuallyAddedButton.textContent).eql('Delete','button should say Delete')
        .click(manuallyAddedButton);
});