
import './App.css'

function App() {
  

  return (
    <div className='page-container'>
      <div className='card-container'>
        <div className='img-container'>
          <img className='img-style' src="./img/illustration-article.svg" alt="" />
        </div>

        <div className='text-container'>
          <button className='btn-style'>
            Learning
          </button>
          <p className='subtitle'>Published 21 Dec 2023</p>
          <h2 className='title'>HTML & CSS foundations</h2>
          <p className='info'>These languages are the backbone of every website, 
            defining structure, content and presentation. 
          </p>
        </div>

        <div className='footer-card-container'>
          <div className='little-img-cont'>
            <img className='little-img' src="./img/image-avatar.webp" alt="" />
          </div>
          <h3 className='name'>Greg Hooper</h3>
        </div>

      </div>

    </div>
  )
}

export default App
