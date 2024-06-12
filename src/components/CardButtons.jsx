import { DeleteIcon, EditIcon, SaveIcon } from "./Icons.jsx";

export default function CardButtons(props) {
  

  const { isEditable, setIsEditable } = props.isEditableState

  return (
    <div>
      {isEditable ?
        <button className='App-Icons' onClick={() => {
          props.editCard(props.index, props.textData);
          setIsEditable(false);
        }}>
          <SaveIcon width='1.2rem' />
        </button>
        :
        <button className='App-Icons' onClick={() => {
          setIsEditable(true)
        }}>
          <EditIcon width='1.2rem' />
        </button>
      }

      <button className='App-Icons' onClick={() => props.deleteCard(props.id)}>
        <DeleteIcon width='1.2rem' />
      </button>
    </div>
  )
}