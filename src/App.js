import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './Modal/Modal'

function App() {

    const [object, set] = useState({
        hideModal: true,
        triggeredOnce: false
    });

    function scrollTarget() {
        let scrollY = window.pageYOffset;
        console.log(object);
        console.log(!object.triggeredOnce);
        console.log("y: ", scrollY);
        if (scrollY > 900 && !object.triggeredOnce) {
            set({
                hideModal: false,
                triggeredOnce: true
            })
        }
    }

    useEffect( () => {
        window.addEventListener("scroll", scrollTarget);
        return () => window.removeEventListener("scroll", scrollTarget);
    });

    function closeModal() {
        set({
            hideModal: true,
            triggeredOnce: true
        })
    }

  return (
    <div className="App">
        <Modal hideModal={object.hideModal}>
            <p><strong>Due to the Covid-19 situation</strong></p>
            <p>During video shoots, we will be wearing a face shield, mask and doing our best to adhere to the 6ft social distancing protocol</p>
            <p>So close-up shots will be recorded carefully</p>
            <button onClick={closeModal}>Ok</button>
        </Modal>
        <div className={"banner"}>
            <strong>This is an experimental service offering an incredible deal for video content that you will not find anywhere else</strong>
        </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className={"Hero-text"}>
            <h1>Quick, Polished, Video Content, all On a Smartphone</h1>
            <h1>$5 an hour</h1>
            <h3>Anywhere in California Central Valley</h3>
        </div>
        <div className="Overlay"></div>
      </header>
        <h2 className={"Pro-offer"}>We come equipped with a professional video production kit to make smartphone videos look amazing!</h2>
        <div className={"Pro-kit"}>
            <div>
                <p><strong>Gimbal</strong></p>
                <div className={"Equipment Gimbal"}></div>
                <p>for stable looking footage</p>
            </div>
            <div>
                <p><strong>LED Video Light</strong></p>
                <div className={"Equipment LED"}></div>
                <p>for even lighting</p>
            </div>
            <div>
                <p><strong>Shotgun Mic</strong></p>
                <div className={"Equipment Shotgun"}></div>
                <p>for directional audio</p>
            </div>
        </div>
        <section className={"Gray"}>
        <h2 className={"How"}>How does it work?</h2>
        <ul className={"Works"}>
            <li>
                <p><strong>Call, text or email</strong></p>
                <div className={"Icons Contact"}></div>
                <p>
                    <a href={"tel:559-899-7377"}>559-899-7377</a><br/>
                    <a href={"mailto:patchkientz@gmail.com"}>patchkientz@gmail.com</a>
                </p>
            </li>
            <li>
                <p><strong>Tell us when you want to film </strong></p>
                <div className={"Icons Calendar"}></div>
                <p>
                    <div>It could be right after the call!</div>
                    <div>or scheduled later</div>
                </p>
            </li>
            <li>
                <p><strong>Tell us where to film</strong></p>
                <div className={"Icons Location"}></div>
                <p><
                    div>Also, so we are prepared,</div>
                    <div>give us an idea of what we are filming</div>
                </p>
            </li>
        </ul>
        </section>
        <h2 className={"Availability"}>
            <div>Check this weeks availability below,</div>
            <div>We could possibly film right after the call</div>
            <div>Or schedule later</div>
        </h2>

        <div className={"Key"}>
            <div></div>
            <div></div>
        </div>
        <div id={"fireModal"}></div>
        <table className={"Weekly"}>
            <tr>
                <th></th>
                <th>12AM-12PM</th>
                <th>12PM-3PM</th>
                <th>3PM-12AM</th>
            </tr>
            <tr>
                <td>Monday</td>
                <td className={"yes"}></td>
                <td className={"yes"}></td>
                <td className={"no"}></td>
            </tr>
            <tr>
                <td>Tuesday</td>
                <td className={"yes"}></td>
                <td className={"yes"}></td>
                <td className={"yes"}></td>
            </tr>
            <tr>
                <td>Wednesday</td>
                <td className={"yes"}></td>
                <td className={"yes"}></td>
                <td className={"yes"}></td>
            </tr>
            <tr>
                <td>Thursday</td>
                <td className={"yes"}></td>
                <td className={"yes"}></td>
                <td className={"no"}></td>
            </tr>
            <tr>
                <td>Friday</td>
                <td className={"yes"}></td>
                <td className={"yes"}></td>
                <td className={"yes"}></td>
            </tr>
            <tr>
                <td>Saturday</td>
                <td className={"yes"}></td>
                <td className={"yes"}></td>
                <td className={"yes"}></td>
            </tr>
            <tr>
                <td>Sunday</td>
                <td className={"yes"}></td>
                <td className={"yes"}></td>
                <td className={"yes"}></td>
            </tr>
        </table>

        <h2 className={"Options"}>
            <div>If you want to broadcast live to your social media, we can shoot on your smartphone.</div>
            <div>If not, we will provide video footage on the spot via cloud storage from our phones</div>
        </h2>

        <div className={"Footer"}>
            <div className={"Astonishing"}></div>
            <h2>What astonishing things may come!?</h2>
        </div>
    </div>
  );
}

export default App;
