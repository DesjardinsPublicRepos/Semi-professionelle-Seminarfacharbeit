import React, { Component } from 'react'

import Particles from 'react-particles-js';
export default () => {
    return(<div>
        
        <h1 style={{
            width: "100%",
            textAlign: "center",
            fontFamily: "sans-serif",
            position: "relative",
            color: "black",
            margin: "0",
            padding: "0",
            overflow: "hidden",
            background: "white",
            filter: "blur(10px)",
          }}>asdlfalsfdöjlöasdjflkösda</h1>
    <Particles height="100%" width="100%" params={{
    background: {
      color: "#000",
      image: "url('https://cdn.matteobruni.it/images/particles/background3.jpg')"
    },
    backgroundMask: {
      enable: true,
      cover: {
        color: "#000"
      }
    },
    fpsLimit: 60,
    interactivity: {
      detectsOn: "window",
      events: {
        resize: true,
        onHover: {
          enable: true,
          mode: "bubble"
        }
      },
      modes: {
        bubble: {
          distance: 200,
          opacity: 0.8,
          size: 50
        }
      }
    },
    particles: {
      color: {
        value: "#000",
        animation: {
          enable: false,
          speed: 20,
          sync: false
        }
      },
      links: {
        color: "#000",
        distance: 150,
        enable: false,
        opacity: 0.4,
        width: 1
      },
      collisions: {
        enable: false
      },
      move: {
        direction: "none",
        enable: true,
        outMode: "out",
        random: false,
        speed: 2,
        straight: false
      },
      number: {
        density: {
          enable: true,
          value_area: 800
        },
        value: 800
      },
      opacity: {
        animation: {
          enable: false,
          minimumValue: 0.1,
          speed: 1,
          sync: false
        },
        random: {
          enable: true,
          minimumValue: 0.2
        },
        value: 0.8
      },
      shape: {
        type: "circle"
      },
      stroke: {
        color: "#ff0000",
        width: 0
      },
      size: {
        animation: {
          enable: false,
          minimumValue: 0.1,
          speed: 40,
          sync: false
        },
        random: {
          enable: true,
          minimumValue: 10
        },
        value: 20
      }
    },
    detectRetina: true
  }}/>
    </div>)
}