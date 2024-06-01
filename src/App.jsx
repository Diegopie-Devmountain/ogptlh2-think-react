import './App.css'
import Glider from 'react-glider';

function App() {

  return (
    <section>
      <header className='App-Category-Header'>
        <article>
          <h2>Workshop Title</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores repellendus neque rem, magni aspernatur cupiditate dolorem quos sapiente magnam alias sunt asperiores omnis odit dignissimos, culpa porro enim veniam tempore explicabo facere deserunt corporis! Velit aliquid magni quia eos aut!</p>
        </article>
        <img src='https://picsum.photos/seed/picsum/300/300?grayscale' />
      </header>
      <section className='App-Glider-Container'>
        <h3>Category</h3>
        <Glider
          draggable
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
          <article className='App-Card-Wrapper'>
            <div className='App-Card-Body'>
              <img src="https://picsum.photos/id/237/300/200?grayscale" />
              <h4>Lorem ipsum.</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum velit voluptatem laborum minima numquam cupiditate. Nemo suscipit sunt asperiores!.</p>
            </div>
            <button className='App-Icons'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width:'1.5rem', height: '1.5rem'}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>

            </button>
            <button className='App-Icons'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width:'1.5rem', height: '1.5rem'}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>

            </button>
          </article>
          <article className='App-Card-Wrapper'>
            <div className='App-Card-Body'>
              <img src="https://picsum.photos/id/237/300/200?grayscale" />
              <h4>Lorem ipsum.</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum velit voluptatem laborum minima numquam cupiditate. Nemo suscipit sunt asperiores!.</p>
            </div>
            <button className='App-Icons'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width:'1.5rem', height: '1.5rem'}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>

            </button>
            <button className='App-Icons'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width:'1.5rem', height: '1.5rem'}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>

            </button>
          </article>
          <article className='App-Card-Wrapper'>
            <div className='App-Card-Body'>
              <img src="https://picsum.photos/id/237/300/200?grayscale" />
              <h4>Lorem ipsum.</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum velit voluptatem laborum minima numquam cupiditate. Nemo suscipit sunt asperiores!.</p>
            </div>
            <button className='App-Icons'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width:'1.5rem', height: '1.5rem'}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>

            </button>
            <button className='App-Icons'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width:'1.5rem', height: '1.5rem'}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>

            </button>
          </article>
          <article className='App-Card-Wrapper'>
            <div className='App-Card-Body'>
              <img src="https://picsum.photos/id/237/300/200?grayscale" />
              <h4>Lorem ipsum.</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum velit voluptatem laborum minima numquam cupiditate. Nemo suscipit sunt asperiores!.</p>
            </div>
            <button className='App-Icons'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width:'1.5rem', height: '1.5rem'}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>

            </button>
            <button className='App-Icons'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width:'1.5rem', height: '1.5rem'}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>

            </button>
          </article>
          <article className='App-Card-Wrapper'>
            <div className='App-Card-Body'>
              <img src="https://picsum.photos/id/237/300/200?grayscale" />
              <h4>Lorem ipsum.</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum velit voluptatem laborum minima numquam cupiditate. Nemo suscipit sunt asperiores!.</p>
            </div>
            <button className='App-Icons'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width:'1.5rem', height: '1.5rem'}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>

            </button>
            <button className='App-Icons'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width:'1.5rem', height: '1.5rem'}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>

            </button>
          </article>
          <article className='App-Card-Wrapper'>
            <div className='App-Card-Body'>
              <img src="https://picsum.photos/id/237/300/200?grayscale" />
              <h4>Lorem ipsum.</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum velit voluptatem laborum minima numquam cupiditate. Nemo suscipit sunt asperiores!.</p>
            </div>
            <button className='App-Icons'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width:'1.5rem', height: '1.5rem'}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>

            </button>
            <button className='App-Icons'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width:'1.5rem', height: '1.5rem'}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>

            </button>
          </article>
          <article className='App-Card-Wrapper'>
            <div className='App-Card-Body'>
              <img src="https://picsum.photos/id/237/300/200?grayscale" />
              <h4>Lorem ipsum.</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum velit voluptatem laborum minima numquam cupiditate. Nemo suscipit sunt asperiores!.</p>
            </div>
            <button className='App-Icons'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width:'1.5rem', height: '1.5rem'}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>

            </button>
            <button className='App-Icons'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width:'1.5rem', height: '1.5rem'}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>

            </button>
          </article>
          <article className='App-Card-Wrapper'>
            <div className='App-Card-Body'>
              <img src="https://picsum.photos/id/237/300/200?grayscale" />
              <h4>Lorem ipsum.</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum velit voluptatem laborum minima numquam cupiditate. Nemo suscipit sunt asperiores!.</p>
            </div>
            <button className='App-Icons'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width:'1.5rem', height: '1.5rem'}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>

            </button>
            <button className='App-Icons'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width:'1.5rem', height: '1.5rem'}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>

            </button>
          </article>
          <article className='App-Card-Wrapper'>
            <div className='App-Card-Body'>
              <img src="https://picsum.photos/id/237/300/200?grayscale" />
              <h4>Lorem ipsum.</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum velit voluptatem laborum minima numquam cupiditate. Nemo suscipit sunt asperiores!.</p>
            </div>
            <button className='App-Icons'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width:'1.5rem', height: '1.5rem'}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>

            </button>
            <button className='App-Icons'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width:'1.5rem', height: '1.5rem'}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>

            </button>
          </article>
          <article className='App-Card-Wrapper'>
            <div className='App-Card-Body'>
              <img src="https://picsum.photos/id/237/300/200?grayscale" />
              <h4>Lorem ipsum.</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum velit voluptatem laborum minima numquam cupiditate. Nemo suscipit sunt asperiores!.</p>
            </div>
            <button className='App-Icons'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width:'1.5rem', height: '1.5rem'}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>

            </button>
            <button className='App-Icons'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width:'1.5rem', height: '1.5rem'}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>

            </button>
          </article>
          <article className='App-Card-Wrapper'>
            <div className='App-Card-Body'>
              <img src="https://picsum.photos/id/237/300/200?grayscale" />
              <h4>Lorem ipsum.</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum velit voluptatem laborum minima numquam cupiditate. Nemo suscipit sunt asperiores!.</p>
            </div>
            <button className='App-Icons'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width:'1.5rem', height: '1.5rem'}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>

            </button>
            <button className='App-Icons'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width:'1.5rem', height: '1.5rem'}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>

            </button>
          </article>


        </Glider>
      </section>
    </section>
  )
}

export default App
