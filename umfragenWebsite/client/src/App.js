import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './App.css';

import landingPage from './pages/landingPage';
import schuelerumfrage from './pages/schuelerumfrage';
import allgemeineUmfrage from './pages/allgemeineUmfrage';

import axios from 'axios';
import Particles from 'react-particles-js';
import { BrowserView } from 'react-device-detect';

axios.defaults.baseURL = 'https://europe-west1-semi-umfrage.cloudfunctions.net/api'; // LLERZEICHEN!

export default () => {
  const [ anim, setAnim ] = useState(1);

  return (
    <div className="App">
      <div  style={{ "position": "absolute", "height": "100%", "width": "100%", "zIndex": "-10", "left": "-3px", "top": "-97.7px"}}>
        <div style={{ "position": "fixed", "height": "120vh", "width": "calc(120vh*2.2)", "zIndex": "-10"}}>
          <BrowserView>
            <div style={{ "position": "fixed", "top": "10px", "left": "10px"}}>
              <Button variant="contained" color="primary" onClick={() => setAnim(1)}>
                  Animation 1
              </Button>
                <div style={{ "width": "100vw", "height": "10px"}}/>
              <Button variant="contained" color="primary" onClick={() => setAnim(2)}>
                  Animation 2
              </Button>
            </div>

            { anim === 1 && <Particles 
              params={{
                fpsLimit: 60,
                particles: {
                  number: {
                    value: 40,
                    density: {
                      enable: true,
                      value_area: 800
                    }
                  },
                  color: {
                    value: "#000000",
                    animation: {
                      enable: true,
                      speed: 20,
                      sync: true
                    }
                  },
                  shape: {
                    type: "circle",
                    stroke: {
                      width: 0,
                      color: "#ffffff"
                    },
                    polygon: {
                      nb_sides: 5
                    },
                    image: {
                      src: "https://cdn.matteobruni.it/images/particles/github.svg",
                      width: 100,
                      height: 100
                    }
                  },
                  opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                      enable: false,
                      speed: 3,
                      opacity_min: 0.1,
                      sync: false
                    }
                  },
                  size: {
                    value: 3,
                    random: true,
                    anim: {
                      enable: false,
                      speed: 20,
                      size_min: 0.1,
                      sync: false
                    }
                  },
                  line_linked: {
                    enable: true,
                    distance: 100,
                    color: "random",
                    opacity: 0.4,
                    width: 1,
                    triangles: {
                      enable: true,
                      color: "#000000",
                      opacity: 0.1
                    }
                  },
                  move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    attract: {
                      enable: false,
                      rotateX: 600,
                      rotateY: 1200
                    }
                  }
                },
                interactivity: {
                  detect_on: "canvas",
                  events: {
                    onhover: {
                      enable: true,
                      mode: "repulse"
                    },
                    onclick: {
                      enable: true,
                      mode: "push"
                    },
                    resize: true
                  },
                  modes: {
                    grab: {
                      distance: 400,
                      line_linked: {
                        opacity: 1
                      }
                    },
                    bubble: {
                      distance: 400,
                      size: 40,
                      duration: 2,
                      opacity: 0.8,
                      speed: 3
                    },
                    repulse: {
                      distance: 200
                    },
                    push: {
                      particles_nb: 4
                    },
                    remove: {
                      particles_nb: 2
                    }
                  }
                },
                retina_detect: true,
                background: {
                  color: "#f0f0f5",
                  image: "",
                  position: "50% 50%",
                  repeat: "no-repeat",
                  size: "cover"
                }
                }}>    
            </Particles>}
            { anim === 2 &&<Particles 
              params={{
                fpsLimit: 60,
                particles: {
                  number: {
                    value: 0,
                    density: {
                      enable: true,
                      value_area: 800
                    }
                  },
                  color: {
                    value: "#ff0000",
                    animation: {
                      enable: true,
                      speed: 180,
                      sync: true
                    }
                  },
                  shape: {
                    type: "circle",
                    stroke: {
                      width: 0,
                      color: "#000000"
                    },
                    polygon: {
                      nb_sides: 5
                    },
                    image: {
                      src: "https://cdn.matteobruni.it/images/particles/github.svg",
                      width: 100,
                      height: 100
                    }
                  },
                  opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                      enable: false,
                      speed: 3,
                      opacity_min: 0.1,
                      sync: false
                    }
                  },
                  size: {
                    value: 15,
                    random: {
                      enable: true,
                      minimumValue: 5
                    },
                    animation: {
                      enable: true,
                      speed: 5,
                      minimumValue: 5,
                      sync: true,
                      startValue: "min",
                      destroy: "max"
                    }
                  },
                  links: {
                    enable: false
                  },
                  move: {
                    enable: true,
                    speed: 15,
                    direction: "none",
                    random: false,
                    straight: false,
                    outMode: "destroy",
                    attract: {
                      enable: false,
                      rotateX: 600,
                      rotateY: 1200
                    }
                  }
                },
                interactivity: {
                  detectsOn: "window",
                  events: {
                    onhover: {
                      enable: true,
                      mode: "trail"
                    },
                    onclick: {
                      enable: true,
                      mode: "push"
                    },
                    resize: true
                  },
                  modes: {
                    grab: {
                      distance: 400,
                      line_linked: {
                        opacity: 1
                      }
                    },
                    bubble: {
                      distance: 400,
                      size: 40,
                      duration: 2,
                      opacity: 0.8,
                      speed: 3
                    },
                    repulse: {
                      distance: 200
                    },
                    push: {
                      particles_nb: 4
                    },
                    remove: {
                      particles_nb: 2
                    },
                    trail: {
                      delay: 0.005,
                      quantity: 5
                    }
                  }
                },
                retina_detect: true,
                background: {
                  color: "#ffffff",
                  image: "",
                  position: "50% 50%",
                  repeat: "no-repeat",
                  size: "cover"
                }
              }}>    
            </Particles>}
          </BrowserView>
        </div>
      </div>


      <div style={{ "margin": "3%", "bottom": "0" }}>
      <Router>
        <Switch>
          <Route exact path="/" component={landingPage}/>
          <Route exact path="/schuelerumfrage" component={schuelerumfrage}/>
          <Route exact path="/allgemeineUmfrage" component={allgemeineUmfrage}/>
        </Switch>
      </Router>
      </div>

    </div>
  );
};
