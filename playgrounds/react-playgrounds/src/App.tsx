import { Spacing, FontSize, FontWeight } from '@design-system/foundation';
import { Button, Color, Margin, Text, Select, Counter, ButtonA, ButtonB } from '@design-system/components';
import '@design-system/scss/lib/Utilities.css';
import '@design-system/scss/lib/Text.css';
import '@design-system/scss/lib/Margin.css';
import '@design-system/scss/lib/Select.css'; 
import '@design-system/scss/lib/Button.css';
import '@design-system/scss/lib/ButtonA.css';
import '@design-system/scss/lib/ButtonB.css';
import './App-custom-classes.css';

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
      <ButtonA
        title='SAVE'
        state='primary'
        onClick={() => (alert('test first Button A'))}
        overrideProps={{style: { backgroundColor: '#70a062' }}}
      />
      <br />
      <br />
      <ButtonA
        title='SAVE'
        state='secondary'
        onClick={() => (alert('test second Button A'))}
      />
      <br />
      <br />
      <ButtonA
        title='SAVE'
        state='secondary'
        onClick={() => (alert('test second Button A'))}
        overrideProps={{ className: 'custom-button' }}
      />
      <br />
      <br />
      <ButtonB
        title='DELETE'
        state='primary'
        onClick={() => { window.alert('Test')}}
        style={{backgroundColor: '#70a062' }}
        />
      <br />
      <br />
      <ButtonB
        title='DELETE'
        state='secondary'
        onClick={() => (alert('Test second ButtonB'))}
      />
      <br />
      <br />
      <ButtonB
        title='DELETE'
        state='secondary'
        onClick={() => (alert('Test second ButtonB'))}
        className='custom-button'
      />
      <br />
      <br />
      <Button
        // backgroundColor='black'
        // color='white'
        // style={{ padding: '30px' }}
        onClick={() => {window.alert('Test button')}}
      >
        New Button
      </Button>

      <Margin>
        <Color hexCode="#6273a0" width={Spacing.lg} height={Spacing.lg} />
      </Margin>
      <br />
      <Color
        hexCode="#5637aa"
        width={Spacing.xl}
        height={Spacing.xxl}
        overrideProps={{ style: { width: '200px' }}}
      />
      <br />
      <Color
        hexCode="#1fca28"
        width={Spacing.md}
        height={Spacing.md}
        overrideProps={{ style: { backgroundColor: '#70a062' }}}
      />



      <br />
       <Margin size="xxxl">
        <Text size={FontSize.sm}>Test Margin Component</Text>
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
      <Text
        textColor='#d864e7'
      >
        Test TTTTTTTTTTTTTTTTTTTTTTTTTTT
      </Text>
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



      <Select options={options} renderOption={(
        { option, getOptionRecommendedProps }:
        {option: {label: string}, getOptionRecommendedProps: any}
      ) => (
        <p {...getOptionRecommendedProps({})}>{option.label}</p>
      )} />
      <br />
      <br />
      <Select options={options} renderOption={(
        { option, getOptionRecommendedProps}:
        {option: {label: string}, getOptionRecommendedProps: any}
        ) => {
          return <li data-testid="test" {...getOptionRecommendedProps()}>{option.label}</li>
        }}
      />
      <br />
      <br />

      <Counter 
        label='Test Counter'
        phase={2}
      />

    </div>
  );
}

export default App;
