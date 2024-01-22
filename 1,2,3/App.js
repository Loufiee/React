import React, { Component } from 'react';
import './App.css';
import Media from './Components/Media';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <div className='title'> PANCASILA</div>
          <div className='head-text'>
            <div className='text-on-image'>
              <strong>Sila Pertama</strong>
              <br></br>
              <Media image="silapertama.png"></Media>
              Ketuhanan Yang Maha Esa
            </div>
          </div>

          <div className='head-text'>
            <div className='text-on-image'>
              <strong>Sila Kedua</strong>
              <br></br>
              <Media image="silakedua.png"></Media>
              Kemanusiaan Yang Adil dan Beradab
            </div>
          </div>

          <div className='head-text'>
            <div className='text-on-image'>
              <strong>Sila Ketiga</strong>
              <br></br>
              <Media image="silaketiga.png"></Media>
              Persatuan Indonesia
            </div>
          </div>

          <div className='head-text'>
            <div className='text-on-image'>
              <strong>Sila Keempat</strong>
              <br></br>
              <Media image="silakeempat.jpeg"></Media>
              Kerakyatan yang dipimpin oleh hikmat dalam kebijaksanaan permusyawaratan perwakilan
            </div>
          </div>

          <div className='head-text'>
            <div className='text-on-image'>
              <strong>Sila Kelima</strong>
              <br></br>
              <Media image="silakelima.jpg"></Media>
              Keadilan sosial bagi seluruh rakyat Indonesia
            </div>
          </div>
        </header>
        
      </div>
    )
  }
}

export default App;
