// 1.Count, 2.CountDown, 3.CountReset, 4.ShowHideText, 5.ChangeButtonTextV1
// 6.WriteYouName, 7.CountCharacters, 8.ChooseColor, 9.ShoppingList, 10.Checklist 

import { useEffect, useState } from 'react'
// Opgave løsninger
import Count from './components/count/count'
import CountDown from './components/countDown/CountDown'
import CountReset from './components/countReset/CountReset'
import ShowHideText from "./components/showHideText/ShowHideText"
import ChangeButtonTextV1 from "./components/changeButtonText/ChangeButtonText"
import WriteYouName from './components/writeYouName/WriteYouName'
import CountCharacters from './components/countCharacters/CountCharacters'
import ChooseColor from './components/chooseColor/ChooseColor'
import ShoppingList from './components/shopping/shopping'
import Checklist from './components/checklist/Checklist'

function App() {

  return (
    <div className='wrapper'>
      <Count />
    </div>
  )
}

export default App
