//este contenedor lleva todo el drum machine

import React, {Component} from 'react';

const drumSounds = [{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'bass-drum',
    url: 'https://www.fesliyanstudios.com/play-mp3/6661'
  }, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'floor-tom',
    url: 'https://www.fesliyanstudios.com/play-mp3/6696'
  }, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'snare-drum',
    url: 'https://www.fesliyanstudios.com/play-mp3/6772'
  }, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'tom-tom',
    url: 'https://www.fesliyanstudios.com/play-mp3/6761'
  }, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'hit-hat',
    url: 'https://www.fesliyanstudios.com/play-mp3/6707'
  }, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'crash-cymbal',
    url: 'https://www.fesliyanstudios.com/play-mp3/6675'
  }, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "ride-cymbal",
    url: 'https://www.fesliyanstudios.com/play-mp3/6732'
  }, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'splash-cymbal',
    url: 'https://www.fesliyanstudios.com/play-mp3/6778'
  }, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'china-cymbal',
    url: 'https://www.fesliyanstudios.com/play-mp3/6666'
  },
];

class DrumMachine extends Component {
    constructor(props) {
        super(props); 
        this.state ={
              sonidos: drumSounds
        }
    }
    
    handleKeyPress =(e) => { 
        drumSounds.map((i)=>{
            
            if (e.key.toUpperCase() === i.keyTrigger) {
                let prueba = document.getElementById(i.id);
                
                prueba.children[0].play() 
                console.dir(prueba) 
              } 
       })
        
      }
      render(){
        document.addEventListener('keydown', this.handleKeyPress);
        return (
            <div id="drum-machine">
               
                <button className="drum-pad"  id="bass-drum" event={this.handleKeyPress} onClick={this.playSound}> 
                    <audio src={this.state.sonidos[0].url} 
                    id="Q" className="clip">                    
                    </audio>
                    Q</button>
                <button className="drum-pad"  id="floor-tom" event={this.handleKeyPress} onClick={this.playSound}>
                <audio src={this.state.sonidos[1].url} id="W" className="clip">                    
                    </audio>
                    W</button>
                <button className="drum-pad"  id="snare-drum" event={this.handleKeyPress} onClick={this.playSound}>
                <audio src={this.state.sonidos[2].url} id="E" className="clip">                    
                    </audio>
                    E</button>
                <button className="drum-pad"  id="tom-tom" event={this.handleKeyPress} onClick={this.playSound}>
                <audio src={this.state.sonidos[3].url} id="A" className="clip">                    
                    </audio>
                    A</button>
                <button className="drum-pad"  id="hit-hat" event={this.handleKeyPress} onClick={this.playSound}>
                <audio src={this.state.sonidos[4].url} id="S" className="clip">                    
                    </audio>
                    S</button>
                <button className="drum-pad"  id="crash-cymbal" event={this.handleKeyPress} onClick={this.playSound}>
                <audio src={this.state.sonidos[5].url} id="D" className="clip">                    
                    </audio>
                    D</button>
                <button className="drum-pad"  id="ride-cymbal" event={this.handleKeyPress} onClick={this.playSound}>
                <audio src={this.state.sonidos[6].url} id="Z" className="clip">                    
                    </audio>
                    Z</button>
                <button className="drum-pad"  id="splash-cymbal" event={this.handleKeyPress} onClick={this.playSound}>
                <audio src={this.state.sonidos[7].url} id="X" className="clip">                    
                    </audio>
                    X</button>
                <button className="drum-pad"  id="china-cymbal" event={this.handleKeyPress} onClick={this.playSound}>
                <audio src={this.state.sonidos[8].url} id="C" className="clip">                    
                    </audio>
                    C</button>

                    <diV id="display">
                        <h4>DRUM MACHINE</h4>
                    </diV>
            </div>
       )
      }
   
}

export default DrumMachine 