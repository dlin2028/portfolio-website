import React, { FC, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { AnimatorGeneralProvider, Animator } from '@arwes/animation';
import { BleepsProvider } from '@arwes/sounds';
import { ArwesThemeProvider, StylesBaseline, Text, Figure, FrameCorners, Button, Card } from '@arwes/core';
import { Frame } from '@arwes/core/lib/utils/Frame';
// For the font-family to work, you would have to setup the Google Fonts link:
// <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600&display=swap" />
const SOUND_ASSEMBLE_URL = '/assets/sounds/assemble.mp3';

const animatorGeneral = { duration: { enter: 200, exit: 200 } };
const audioSettings = { common: { volume: 0.25 } };
const playersSettings = { assemble: { src: [SOUND_ASSEMBLE_URL], loop: true } };
const bleepsSettings = { assemble: { player: 'assemble' } };

const duration = { enter: 1000, exit: 1000 };

const App: FC = () => {
  const [activate, setActivate] = React.useState(true);
  return (
    <ArwesThemeProvider>
      <BleepsProvider
        audioSettings={audioSettings}
        playersSettings={playersSettings}
        bleepsSettings={bleepsSettings}
      >
        <StylesBaseline />
        <AnimatorGeneralProvider animator={animatorGeneral}>
          <div style={{ width: 800, height: 100, margin: "0 auto" }}>
            <Text style={{ fontSize: 57 }} animator={{ duration, activate }}>For Hire: David Lin
            </Text>
            <br />
            <Text style={{ fontSize: 20 }} animator={{ duration, activate }}>Software Developer / Computer Engineer
            </Text>
          </div>

          <div style={{ width: 800, height: 100, margin: "0 auto" }}>
            <Animator animator={{ animate: true }}>
              <a href="/resume.pdf">
              <Button palette='primary'>
                <Text>Resume</Text>
              </Button>
              </a>
              <a href="https://github.com/dlin2028">
              <Button palette='primary'>
                <Text>GitHub</Text>
              </Button>
              </a>
              <a href="https://www.linkedin.com/in/davidzl2">
              <Button palette='primary'>
                <Text>LinkedIn</Text>
              </Button>
              </a>
            </Animator>
          </div>

          <div style={{ width: 800, height: 200, margin: "0 auto" }}>
            <FrameCorners>
              <Text style={{ fontSize: 50 }} animator={{ duration, activate }}>Profile
              </Text>
              <Text style={{ fontSize: 15 }} animator={{ duration, activate }}>Computer Engineering student interested in Software Development. Strongest languages are C#/C++, but has demonstrated proficiency in other languages. Strong focus on code readability. Grew up in Los Angeles, California, and is willing to locate for job opportunities. Sometimes spotted enjoying Tennis and Mountain Biking.
              </Text>
              <br />
            </FrameCorners>
          </div>

          <div style={{ width: 800, height: 250, margin: "0 auto" }}>
            <FrameCorners>
              <Text style={{ fontSize: 50 }} animator={{ duration, activate }}>Education
              </Text>
              <br />
              <Text style={{ fontSize: 30 }} animator={{ duration, activate }}>University of Illinois Urbana-Champaign
              </Text>
              <br />
              <Text style={{ fontSize: 20 }} animator={{ duration, activate }}>Bachelor of Science in Computer Engineering
              </Text>
              <br />
              <Text style={{ fontSize: 15 }} animator={{ duration, activate }}>Relevant Courses: Introduction to Data Structures and Algorithms with C++, Analog Signal Processing, Digital
                Signal Processing, Probability with Engineering Applications, Physics Mechanics, E&M, Quantum, Thermo
              </Text>
              <br />
            </FrameCorners>
          </div>
          <div style={{ width: 800, height: 390, margin: "0 auto" }}>
            <FrameCorners>
              <Text style={{ fontSize: 50 }} animator={{ duration, activate }}>Last Seen
              </Text>
              <br />
              <Text style={{ fontSize: 30 }} animator={{ duration, activate }}> <b>Potions and Pixels</b>
              </Text>
              <br />
              <Text style={{ fontSize: 25 }} animator={{ duration, activate }}>Unity AR Internship
              </Text>
              <br />
              <Text style={{ fontSize: 20 }} animator={{ duration, activate }}>• Developed a cross-platform Unity Engine app in C# using ARFoundation from start to finish <br />
                • Allows a user in a pre-defined location such as a street corner to view AR (Augmented Reality) recreations of
                objects such as historical buildings with accurate positioning and scale in the real world <br />
                • This application was used to successfully land a contract for further development <br />
              </Text>
              <br />
            </FrameCorners>
          </div>
          <div style={{ width: 800, height: 730, margin: "0 auto" }}>
            <FrameCorners>
              <Text style={{ fontSize: 50 }} animator={{ duration, activate }}>Recent Activity
              </Text>
              <br />
              <Text style={{ fontSize: 30 }} animator={{ duration, activate }}> Illinois Motorsports FSAE and Supermileage
              </Text>
              <br />
              <Text style={{ fontSize: 20 }} animator={{ duration, activate }}> • Designed front-end circuits for measuring the current draw on a battery, using hall effect and shunt resistors <br />
                • Worked in small teams of 2-3 to design and CAD model the clutch lever and steering wheel electronics enclosure
              </Text>
              <br />
              <br />
              <Text style={{ fontSize: 30 }} animator={{ duration, activate }}> Univ. of California, San Diego COSMOS Program
              </Text>
              <br />
              <Text style={{ fontSize: 20 }} animator={{ duration, activate }}>• Used CAD Software, 3D printer, and laser cutting to design components to retrofit 1/10 scale RC cars with the
                necessary hardware to drive autonomously <br />
                • Programmed it to run a racetrack autonomously using OpenCV and Tensorflow using a camera and a RaspPi <br />
                • Reconfigured algorithm from the UCSD supercomputer to run without a library file <br />
              </Text>

              <br />
              <br />
              <Text style={{ fontSize: 30 }} animator={{ duration, activate }}> CyberPatriot Cybersecurity Team
              </Text>
              <br />
              <Text style={{ fontSize: 20 }} animator={{ duration, activate }}>• Participated in national cybersecurity competition offered by the US Air Force Association <br />
                • Secured Linux, Windows, and Cisco operating systems by detecting and removing vulnerabilities <br />
                • Co-founder of student team at Taft High School, Qualified for silver semi-finals in both years <br />
              </Text>

            </FrameCorners>
          </div>
          <div style={{ width: 800, height: 1300, margin: "0 auto" }}>
            <FrameCorners>
              <Text style={{ fontSize: 50 }} animator={{ duration, activate }}>Notable Projects
              </Text>

              <Card
                animator={{ animate: false }}
                title='84PlusPlus '
                options={
                  <Button palette='secondary'>
                    <Text><a href="https://github.com/dlin2028/84plusplus">GitHub</a></Text>
                  </Button>
                }
              >
                <Text>
                  • Developed a c-style language which compiles to Ti-Basic, which can run on the Ti-84 family of calculators. <br />
                  • Features include a LL1 Parser, a tokenizer, and a code generato
                </Text>
              </Card>
              <Card
                animator={{ animate: false }}
                title='ChannelAdder'
                options={
                  <Button palette='secondary'>
                    <Text><a href="https://github.com/dlin2028/ChannelAdder">GitHub</a></Text>
                  </Button>
                }
              >
                <Text>
                  • A project which attempts to upmix stereo sound into 5.1 surround sound using a Fast Fourier Transform then a
                  Convolutional Neural Net
                </Text>
              </Card>
              <Card
                animator={{ animate: false }}
                title='Neural Net'
                options={
                  <Button palette='secondary'>
                    <Text><a href="https://github.com/dlin2028?tab=repositories&q=smartybird+OR+neural&type=&language=&sort=">GitHub</a></Text>
                  </Button>
                }
              >
                <Text>
                  • My made-from-scratch neural net used for the following AI projects <br />
                  • Smartybird: Used a genetic learning algorithm to play a recreation of the popular game ’flappy bird’ <br />
                  • Sinewave: Used a back-propagation learning algorithms to find missing points in a sine wave (or any other function) <br />
                </Text>
              </Card>
              <Card
                animator={{ animate: false }}
                title='Chopsticks'
                options={
                  <Button palette='secondary'>
                    <Text><a href="https://github.com/dlin2028/Chopsticks">GitHub</a></Text>
                  </Button>
                }
              >
                <Text>
                  • Developed a Monte Carlo AI which plays the street game Chopsticks, with different difficulty levels <br />
                  • Includes a Windows Forms GUI to play the game
                </Text>
              </Card>


            </FrameCorners>
          </div>
        </AnimatorGeneralProvider>
      </BleepsProvider>
    </ArwesThemeProvider>
  );
};
// Assuming there is a HTML element with id "root".
ReactDOM.render(<App />, document.querySelector('#root'));