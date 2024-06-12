import './App.css'
import { useState } from 'react';
import Header from './components/Header.jsx';
import { AddIcon } from './components/Icons.jsx';
import Carousel from './components/Carousel.jsx';
import dummyData from './data/workshops.js'
import generateId from './utils/generateIds.js';


function App() {

  const [cardData, setCardData] = useState(dummyData);

  const deleteCard = (id) => {
    const newData = { ...cardData};
    const index = newData.categoryData.findIndex((card) => {
      return card.id === id
    });

    newData.categoryData.splice(index, 1);
    setCardData(newData)
  }

  const addCard = () => {
    const newCardData= {...cardData};

    const newId = generateId(newCardData.categoryData);
    console.log(newId);
 

    newCardData.categoryData.push(
      {
        id: newId,
        workshopName: "New Card",
        workshopDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        workshopShortDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        workshopImage: "https://picsum.photos/id/237/300/200?blur",
      },
    )

    setCardData(newCardData)
  }

  const editCard = (index, newText) => {
   
    const newCardData = {...cardData};

    const newCardItemData = Object.assign(newCardData.categoryData[index], newText)
    console.log(newCardItemData);

    newCardData.categoryData[index] = newCardItemData;
    setCardData(newCardData);
  }




  return (
    <section>
      <Header />
      <section className='App-Glider-Container'>
        <header>
          <h3>{cardData.categoryName}</h3>
          <button onClick={addCard}>
            <AddIcon width='1rem' />
          </button>
        </header>
        <Carousel 
          cardData={cardData.categoryData}
          deleteCard={deleteCard}
          editCard={editCard}
          />
      </section>
    </section>
  )
}

export default App
