import { Spacing, FontSize, FontWeight } from '@design-system/foundation';
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
      <Color hexCode="#6273a0" width={Spacing.lg} height={Spacing.lg} />
      <br />
      <Color
        hexCode="#d8ee5c"
        width={Spacing.lg}
        height={Spacing.lg}
        overrideProps={{ style: { width: '200px' }}}
      />
      <br />
      <Color 
        width={Spacing.md}
        height={Spacing.md}
        overrideProps={{ style: { backgroundColor: '#70a062' }}}
      />
      <br />
       <Margin size="lg">
        <Text size={FontSize.lg}>Test Margin Component</Text>
      </Margin>
      <br />
      <Margin side="left" size="lg">
        <Text size={FontSize.lg}>Test Margin Left Component</Text>
      </Margin>
      <br />
       <Margin size="lg" overrideProps={{ style: { backgroundColor: '#70a062', margin: '2px' } }}>
        <Text size={FontSize.lg}>Test Margin Component</Text>
      </Margin>
      <br />
      <br />
      <Select  options={options} />
      <br />
      <br />
      <Select options={options} renderOption={(
          { option, getOptionRecommendedProps }: 
          {option: {label: string}, getOptionRecommendedProps: any}
        ) => (
          <p {...getOptionRecommendedProps({
              className: 'custom' // this is a way to pass a custom css class 
            })}>{option.label}
          </p>
        )
      } />
      {/* <Select options={options} renderOption={(
        { option, getOptionRecommendedProps }:
        {option: {label: string}, getOptionRecommendedProps: any}
      ) => (
        <p {...getOptionRecommendedProps({})}>{option.label}</p>
      )} /> */}
      <br />
      <br />
      {/* <Select options={options} renderOption={(
        { option, getOptionRecommendedProps}:
        {option: {label: string}, getOptionRecommendedProps: any}
        ) => {
          return <li data-testid="test" {...getOptionRecommendedProps()}>{option.label}</li>
        }}
      /> */}
      <br />
      <br />
      <Text
        size={FontSize.sm}
        overrideProps={{ style: { color: '#70a062', fontWeight: '900' }}}
      >Test Text Component</Text>
      <br />
      <Text
        size={FontSize.xl}
        weight={FontWeight.bold}
        textColor='#d864e7'
        overrideProps={{ style: { color: '#1fb1b1' }}}
      >Test Text Component</Text>
    </div>
  );
}

export default App;
