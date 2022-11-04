import FontSize from '../FontSize';

test('smapshot of font sizes ', () => {
  expect(FontSize).toMatchSnapshot();
});
