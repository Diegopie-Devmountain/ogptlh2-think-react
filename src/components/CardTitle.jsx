export default function CardTitle(props) {
  
  const { title, setTitle } = props.titleState

  return (
    <>
      {
        props.isEditable ?
          <input
            value={title}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
          :
          <h4>{title} {props.id}</h4>
      }
    </>
  )
}