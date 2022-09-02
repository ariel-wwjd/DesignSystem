import { Spacing, FontSize } from '@design-system/foundation';
import { Color, Text, Margin, Select } from '@design-system/react-components';
import '@design-system/scss/lib/Utilities.css';
import '@design-system/scss/lib/Text.css';
import '@design-system/scss/lib/Margin.css';
import '@design-system/scss/lib/Select.css'; 

function App() {
  const options = [
    {
      label: 'Strict Black',
      value: 'strict-blsck',
    },
    {
      label: 'Heavenly Green',
      value: 'heavenly-green',
    },
    {
      label: 'Sweet Pink',
      value: 'sweet-pink',
    },
  ];

  return (
    <div className="App">
      {/* <Color hexCode="#000" width={Spacing.lg} height={Spacing.lg} /> */}
      {/* <Margin side="left" >
        <Text size={FontSize.sm}>Test Text Component</Text>
      </Margin> */}
      <Select options={options} />
    </div>
  );
}

export default App;
