import { useState } from "react";
import CardButtons from "./CardButtons.jsx";
import CardText from "./CardText.jsx";
import CardTitle from "./CardTitle.jsx";

export default function Card(props) {

  const {id, workshopImage, workshopName, workshopShortDescription, index } = props.cardData;


  const [isEditable, setIsEditable] = useState(false);
  const [title, setTitle] = useState(workshopName);
  const [text, setText] = useState(workshopShortDescription);
 
  

  return (
    <article className='App-Card-Wrapper'>
      <div className='App-Card-Body'>
        <img src={workshopImage} />
        <CardTitle 
          workshopName={workshopName} 
          titleState={{title, setTitle}}
          id={id} 
          isEditable={isEditable}
        />
        <CardText 
          workshopShortDescription={workshopShortDescription} 
          isEditable={isEditable}
          textState={{text, setText}}
        />
      </div>
      <CardButtons 
        isEditableState={{ isEditable, setIsEditable }}
        deleteCard={props.deleteCard}
        editCard={props.editCard}
        textData={{workshopName: title, workshopShortDescription: text}}
        index={index}
        id={id}
      />
    </article>
  )
}