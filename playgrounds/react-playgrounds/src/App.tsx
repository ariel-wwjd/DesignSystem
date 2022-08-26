import { Spacing, FontSize } from '@design-system/foundation';
import { Color, Text, Margin } from '@design-system/react-components';
import '@design-system/scss/lib/Utilities.css';
import '@design-system/scss/lib/Text.css';
import '@design-system/scss/lib/Margin.css';

function App() {
  return (
    <div className="App">
      {/* <Color hexCode="#000" width={Spacing.lg} height={Spacing.lg} /> */}
      <Margin side="left" >
        <Text size={FontSize.sm}>Test Text Component</Text>
      </Margin>
    </div>
  );
}

export default App;
