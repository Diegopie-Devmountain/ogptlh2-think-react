export default function CardText(props) {

  const {text, setText} = props.textState

  return (
    <>
      {
        props.isEditable ?
          <input 
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          :
          <p>{text}</p>
      }
    </>

  )
}