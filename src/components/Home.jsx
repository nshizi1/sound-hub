import React from 'react';
import Carousel from './Carousel';
import { products } from './Data';
import "../style/Home.css"

function Home() {
  return (
    <main>
        <section id='carousel'>
          {/* Carousel */}
          <Carousel images={products}/>
        </section>
        <section id='companies'>
          <div className='qualities'>
            <div className='cards'>
              <div className='card'>
                <i class="fa-solid fa-truck-fast"></i>
                <p>free delivery</p>
              </div>

              <div className='card'>
                <i class="fa-regular fa-credit-card"></i>
                <p>secure payment</p>
              </div>

              <div className='card'>
                <i class="fa-solid fa-headphones"></i>
                <p>genuine products</p>
              </div>

              <div className='card'>
                <i class="fa-solid fa-pencil"></i>
                <p>Product personalize</p>
              </div>

              <div className='card'>
                <i class="fa-solid fa-clock"></i>
                <p>24/7 support</p>
              </div>
            </div>
          </div>
          <div className='companies'>
            <div className='cards'>
              <div className='card'>
                <img src={require('../images/companyOne.png')} alt='CompanyImage'/>
              </div>

              <div className='card'>
                <img src={require('../images/companyTwo.png')} alt='CompanyImage'/>
              </div>

              <div className='card'>
                <img src={require('../images/companyThree.png')} alt='CompanyImage'/>
              </div>

              <div className='card'>
                <img src={require('../images/companyFour.png')} alt='CompanyImage'/>
              </div>

              <div className='card'>
                <img src={require('../images/companyFive.png')} alt='CompanyImage'/>
              </div>
            </div>
          </div>
        </section>
        <section id='categories'>
          <div className='title'>
            <h2>popular categories</h2>
            <div className='shape'>
              <div className='line'></div>
              <div className='square'></div>
              <div className='line'></div>
            </div>
          </div>
          <div className='content'>
            <div className='card'>
              <a href='Shop'>
                <img src={require('../images/productMainOne.png')} alt='MainProductImage' />
                <p>Speakers</p>
              </a>
            </div>
            <div className='card'>
              <a href='Shop'>
                <img src={require('../images/productMainTwo.png')} alt='MainProductImage' />
                <p>Party speakers</p>
              </a>
            </div>
            <div className='card'>
              <a href='Shop'>
                <img src={require('../images/productMainThree.png')} alt='MainProductImage' />
                <p>earbuds</p>
              </a>
            </div>
            <div className='card'>
              <a href='Shop'>
                <img src={require('../images/productMainFour.png')} alt='MainProductImage' />
                <p>sound bars</p>
              </a>
            </div>
            <div className='card'>
              <a href='Shop'>
                <img src={require('../images/productMainFive.png')} alt='MainProductImage' />
                <p>headphones</p>
              </a>
            </div>
            <div className='card'>
              <a href='Shop'>
                <img src={require('../images/productMainSix.png')} alt='MainProductImage' />
                <p>Personalized</p>
              </a>
            </div>
          </div>
        </section>
        <section id='sellers'>
          <div className='card'>
            <div className='text'>
              <h2>best sellers</h2>
              <a href='Shop'>shop now</a>
            </div>
          </div>
          <div className='card image'>
            <img src={require('../images/sellerOne.jpg')} alt='sellerOne' />
            <p>jbl party-box</p>
          </div>
          <div className='card image'>
            <img src={require('../images/sellerTwo.jpg')} alt='sellerOne' />
            <p>jbl vibe beam</p>
          </div>
          <div className='card image'>
            <img src={require('../images/sellerThree.jpg')} alt='sellerOne' />
            <p>jbl pulse 5</p>
          </div>
        </section>
        <section></section>
    </main>
  )
}

export default Home;
