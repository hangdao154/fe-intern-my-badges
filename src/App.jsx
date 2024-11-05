import { useState } from 'react'
import MyBadges from './components/MyBadges'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header></Header>

        <section className="middle">

            <section className="welcome">
            <h1>Welcome, 0xE74...b6e3!</h1>
            <button>
              <img src="public/link-icon.png"/>
              <p>View Referal Link</p>
            </button>
            </section>

            <section className="container top">
              <div className="profile-main">
                  <div className="left">
                      <img src="public/level-badge.png"/>
                      <h2>29</h2>
                  </div>

                  <div className="right">
                      <div>
                          <h3>0X97c4...F469</h3>
                          <img className="sm-icon" src="public/copy-icon.png"/>
                      </div>

                      <div className="points">
                          <img className="sm-icon" src="public/points-icon.png"/>
                          <p>1,000,000</p>
                      </div>
                  </div>
              </div>

              <hr/>

              <div className="slider">
                <div className="profile-info">
                    <div className='box level'>
                        <div className="outline-box">Level 29</div>
                        <div className="progress-description">
                            Let's earn <img className='sm-icon' src='points-icon.png'/> 3,000 more to level up!
                        </div>
                        <div className="outline-box">Level 30</div>

                        <div className="progress-bar"><span>40%</span></div>
                    </div>

                    <div className="box badge-collection">
                        <div className="collection-item">
                            <img src='public/badge/badge3.png'/>
                        </div>
                        <div className="collection-item">
                            <img src='public/badge/badge4.png'/>
                        </div>
                        <div className="collection-item">
                            <img src='public/badge/add-badge.png'/>
                        </div>
                    </div>
                </div>

                <div className="box profile-details">
                    <div className="item">
                        <h4>Joined date</h4>
                        <p>2024/07.30 10:00:00</p>
                    </div>
                    <div className="item">
                        <img className="md-icon" src="public/x-logo-icon.png"/>
                        <div>
                            <p>@vuthithanh1994</p>
                            <img  className="sm-icon" src="public/extend-icon.png"/>
                        </div>
                    </div>
                    <div className="item">
                        <h4>Referer</h4>
                        <div>
                            <p>0xE74...b6e3</p>
                            <img className="sm-icon" src="public/copy-icon.png"/>
                            <img className="sm-icon" src="public/extend-icon.png"/>
                        </div>
                    </div>
                    <div className="item">
                        <img className="md-icon" src="public/discord-logo-icon.png"/>
                        <p>Not connected</p>
                    </div>

                </div>
              </div>
            </section>

            <section className="container tasks">
              <nav>
                  <ul>
                      <li>My Badges<img className="sm-icon" src="public/question-icon.png"/></li>
                      <li>Friend List</li>
                      <li>Point History</li>
                  </ul>
              </nav>

              <MyBadges></MyBadges>
            </section>
        </section>

        <Footer></Footer>
    </>
  )
}

export default App
