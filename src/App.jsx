import { useState } from 'react'
import Button from './components/Button'
import SchedulerWithSundayHighlight from './components/CustomScheduleMeeting'

function App() {
  const [counter, setCounter] = useState(10)
  const [color, setColor] = useState('olive')

  const addValue = () => {
    if (counter !== 20) {
      setCounter(counter + 1)
      console.log('added value is called...', counter)
    }
  }

  const removeValue = () => {
    if (counter !== 0) {
      setCounter(counter - 1)
      console.log('remove value is called.', counter)
    }
  }

  const rendrColor = (clr) => {
    setColor(clr)
  }

  return (
    <div className='w-screen h-screen duration-200' style={{ backgroundColor: color }}>
      <SchedulerWithSundayHighlight />
      <div className='justify-center'>
        <h1 className='text-black text-center'>Hello Counter!</h1>
        <h2 className='text-center text-white'>Counter Value: {counter}</h2>
        <div className='justify-center gap-2 flex'>
          <button onClick={removeValue}>- Value</button>
          <button onClick={addValue}>+ Value</button>
        </div>
      </div>
      <div className='flex fixed flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-xl'>
          <Button text={'Red'} onClick={() => rendrColor('red')} bgColor={'red'} />
          <Button text={'Green'} onClick={() => rendrColor('green')} bgColor={'green'} />
          <Button text={'Pink'} onClick={() => rendrColor('pink')} bgColor={'pink'} />
          <Button text={'Blue'} onClick={() => rendrColor('blue')} bgColor={'blue'} />
          <Button text={'Gray'} onClick={() => rendrColor('gray')} bgColor={'gray'} />
          <Button text={'White'} onClick={() => rendrColor('white')} bgColor={'white'} />
          <Button text={'Purple'} onClick={() => rendrColor('purple')} bgColor={'purple'} />
          <Button text={'Yellow'} onClick={() => rendrColor('yellow')} bgColor={'yellow'} />
        </div>
      </div>
    </div>
  )
}

export default App
