import Glider from 'react-glider'
import Card from './Card.jsx'

export default function Carousel (props) {

  return (
    <Glider
          // draggable
          hasArrows
          hasDots
          slidesToShow={2}
          slidesToScroll={1}
          responsive={[
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 5
              }
            },
          ]}
        >
          {props.cardData.map((workshop, index) => {
            return (
              <Card 
                key={workshop.id}
                cardData={{...workshop, index}}
                deleteCard={props.deleteCard}
                editCard={props.editCard}
              />
            )
          })}
        </Glider>
  )
}