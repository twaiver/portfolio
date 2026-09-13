
import { useEffect, useState } from 'react';
import './App.css'
import Logo from './image/5675706.jpg';
import Prof from './image/prof.jpg';
import CV from './image/CV.pdf';
import { useLocation, useNavigate, } from 'react-router-dom';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { PiBackpackThin, PiBooksThin, PiCodeLight, PiDatabaseThin, PiDetectiveThin, PiHammerThin, PiHeadCircuitThin, PiLineSegmentsThin, PiMagnifyingGlassMinusThin, PiPaintBrushHouseholdThin } from 'react-icons/pi';
import { BiMenuAltRight } from 'react-icons/bi';
import { LiaTimesSolid } from 'react-icons/lia';
import { FcServices } from 'react-icons/fc';
import { VscDeveloperTools } from 'react-icons/vsc';
import { MdOutlineConnectWithoutContact } from 'react-icons/md';
import { TbBrandGithub, TbMail } from 'react-icons/tb';
import { FaLinkedinIn } from 'react-icons/fa';
import { LuCopyright } from 'react-icons/lu';

function App() {

  const [hashVal, setHash] = useState(0);
  const [more, setMore] = useState(false);

  const navigate = useNavigate();
  const activeName = useLocation().pathname;


  useEffect(() => {
    if (activeName == '/about') {
      setHash(6);
    } else if (activeName == '/service') {
      setHash(7);
    } else if (activeName == '/tool') {
      setHash(8);
    } else if (activeName == '/contacts') {
      setHash(9);
    } else if (activeName == '/' && hashVal != 0) {
      setHash(0);
    }
  }, []);



  useEffect(() => {
    let startY = 0;

    let hasTriggered = false;

    const handlePointerDown = (e: PointerEvent) => {
      if (e.pointerType === "touch" || e.pointerType === "pen") {
        startY = e.clientY;
        hasTriggered = false;
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (
        (e.pointerType !== "touch" && e.pointerType !== "pen") ||
        hasTriggered
      ) {
        return;
      }

      const deltaY = startY - e.clientY;

      if (Math.abs(deltaY) < 90) return;

      hasTriggered = true;
      setHash((value) => value + (deltaY > 0 ? 1 : -1));
    };

    const handleWheel = (e: WheelEvent) => {
      if (hasTriggered) return;

      hasTriggered = true;

      setHash((value) => value + (e.deltaY > 0 ? 1 : -1));

      setTimeout(() => {
        hasTriggered = false;
      }, 800);
    };

    const handlePointerUp = (e: PointerEvent) => {
      if (e.pointerType === "touch" || e.pointerType === "pen") {
        setTimeout(() => {
          hasTriggered = false;
        }, 800);
      }
    };

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);




  return (
    <div className='mainDiv'>
      <div className='logoDiv'>
        <img className='image' src={Logo} />
      </div>
      <div className='headerDiv'>

        <div className='titleDiv true' onClick={() => {
          navigate("/");
          setHash(0);
        }}>BIZIMANA</div>

        <div className='minDiv'>
          <p className={`bot ${activeName == '/' && 'active'}`} onClick={() => {
            navigate("/");
            setHash(0);
          }}>Work</p>
          <p className={`bot ${activeName == '/about' && 'active'}`} onClick={() => {
            navigate("/about");
            setHash(6);
          }}>About</p>
          <p className={`bot ${activeName == '/service' && 'active'}`} onClick={() => {
            navigate("/service");
            setHash(7);
          }}>Service</p>
          <p className={`bot ${activeName == '/tool' && 'active'}`} onClick={() => {
            navigate("/tool");
            setHash(8);
          }}>Tool</p>
        </div>
        <div className='true cont' onClick={() => {
          navigate("/contacts");
          setHash(9);
        }}>
          <p>Contacts</p>
        </div>

        <BiMenuAltRight size={35} onClick={() => setMore(true)} className='menu' />
      </div>

      <div className='section'>

        {hashVal == 0 ?

          <div className='section-dec'>
            <p className='sec-title'>We plan and you hire us.</p>
            <div className='sec'>
              <p className='theCodec'>PLANNING.</p>
            </div>
          </div>

          :

          hashVal == 1 ?
            <div className='section-dec'>
              <p className='sec-title'>We analyse and you hire us.</p>
              <div className='sec'>
                <p className='theCodec'>ANALYZE.</p>
              </div>
            </div>

            :

            hashVal == 2 ?

              <div className='section-dec'>
                <p className='sec-title'>We code and you hire us.</p>
                <div className='sec'>
                  <p className='theCodec'>CODING.</p>
                </div>
              </div>

              :

              hashVal == 3 ?

                <div className='section-dec'>
                  <p className='sec-title'>We test and you hire us.</p>
                  <div className='sec'>
                    <p className='theCodec'>TESTING.</p>
                  </div>
                </div>
                :

                hashVal == 4 ?

                  <div className='section-dec'>
                    <p className='sec-title'>We maintain and you hire us.</p>
                    <div className='sec'>
                      <p className='theCodec'>MAINTAIN.</p>
                    </div>
                  </div>

                  :

                  hashVal == 5 ?

                    <div className='section-dec'>
                      <p className='sec-title'>We deploy and you hire us.</p>
                      <div className='sec'>
                        <p className='theCodec'>DEPLOY.</p>
                      </div>
                    </div>

                    :


                    hashVal == 6 ?
                      <div className='section-dec'>
                        <p className='sec-title got'>About us</p>
                        <div className='sec forImage'>
                          <div className='imageDi'>
                            <img src={Prof} className='image' />
                          </div>

                          <div className='bio'>
                            <p>My name is BIZIMANA Olivier, i'm software engineer student at Adventist University of Central Africa (AUCA), where i develop, analyse, manage and test any kind of software. And help for also project management for specific tasks to ensure the project are managed, and analyzed well.</p>
                            <p className='cv'>
                              <a href={CV} download className='cva'>View CV</a>
                            </p>
                          </div>
                        </div>
                      </div>

                      :

                      hashVal == 7 ?
                        <div className='section-dec'>
                          <p className='sec-title got'>Service</p>
                          <div className='sec forImage'>
                            <div className='imageDi'>
                              <FcServices size={230} />
                            </div>

                            <div className='bio'>
                              <div className='lists'>
                                <PiCodeLight size={30} />
                                <p>System Development</p>
                              </div>
                              <div className='lists'>
                                <PiDetectiveThin size={30} />
                                <p>System Analysis and Testing</p>
                              </div>
                              <div className='lists'>
                                <PiHammerThin size={30} />
                                <p>Project Planning and Management</p>
                              </div>

                              <div className='lists'>
                                <PiPaintBrushHouseholdThin size={30} />
                                <p>System Design</p>
                              </div>

                              <div className='lists'>
                                <PiMagnifyingGlassMinusThin size={30} />
                                <p>Risk Analysing and Management</p>
                              </div>

                            </div>
                          </div>
                        </div>


                        :
                        hashVal == 8 ?
                          <div className='section-dec'>
                            <p className='sec-title got'>Tools</p>
                            <div className='sec forImage'>
                              <div className='imageDi'>
                                <VscDeveloperTools size={240} />
                              </div>

                              <div className='bio'>
                                <div className='lists'>
                                  <PiBooksThin size={30} />
                                  <div className='metadata'>
                                    <p className='title'>Front-End</p>
                                    <p className='details'>React, HTML 5, CSS, Tailwind</p>
                                  </div>
                                </div>
                                <div className='lists'>
                                  <PiHeadCircuitThin size={30} />
                                  <div className='metadata'>
                                    <p className='title'>Back-End</p>
                                    <p className='details'>Express.js, Django, Flask, Springbot</p>
                                  </div>
                                </div>
                                <div className='lists'>
                                  <PiDatabaseThin size={30} />
                                  <div className='metadata'>
                                    <p className='title'>Database</p>
                                    <p className='details'>Postgres, MySQL, Cassandra, Redis, MangoDB</p>
                                  </div>
                                </div>

                                <div className='lists'>
                                  <PiLineSegmentsThin size={30} />
                                  <div className='metadata'>
                                    <p className='title'>Microservices</p>
                                    <p className='details'>Springbot</p>
                                  </div>
                                </div>

                                <div className='lists'>
                                  <PiBackpackThin size={30} />
                                  <div className='metadata'>
                                    <p className='title'>Others</p>
                                    <p className='details'>C, C++, C#, Java, Javascript, nginx, envoy, grpc, Kafka.</p>
                                  </div>
                                </div>

                              </div>
                            </div>
                          </div>

                          :

                          <div className='section-dec'>
                            <p className='sec-title got'>Contacts</p>
                            <div className='sec forImage'>
                              <div className='imageDi'>
                                <MdOutlineConnectWithoutContact size={240} />
                              </div>

                              <div className='contacts'>
                                <div className='con'>
                                  <a href="mailto:twaiverbeatz@gmail.com" className='contr'><TbMail size={33} /> <span>twaiverbeatz@gmail.com</span></a>
                                  <a href="https://github.com/twaiver" target='blank' className='contr'><TbBrandGithub size={33} /> <span>twaiver</span></a>
                                  <a href="https://www.linkedin.com/in/bizimana-olivier-390031410/" target='blank' className='contr'><FaLinkedinIn size={33} /> <span>BIZIMANA Oliver</span></a>
                                </div>
                                <p className='copyright'>All right reserved <LuCopyright /> 2026, BIZIMANA</p>
                              </div>
                            </div>
                          </div>

        }

        <div className='swipe'>
          <BsChevronLeft className='icon' onClick={() => {
            if (hashVal > 0 && hashVal <= 9) {
              setHash((e) => e - 1);
            }
          }} />
          <BsChevronRight className='icon' onClick={() => {
            if (hashVal >= 0 && hashVal <= 8) {
              setHash((e) => e + 1);
            }
          }} />
        </div>

      </div>

      {more &&
        <div className='backbro'>
          <div className='cont'>
            <LiaTimesSolid size={30} onClick={() => setMore(false)} className='close' />
            <div className='fot'>
              <p className={`bot ${activeName == '/' && 'active'}`} onClick={() => {
                navigate("/");
                setHash(0);
                setMore(false);
              }}>Work</p>
              <p className={`bot ${activeName == '/about' && 'active'}`} onClick={() => {
                navigate("/about");
                setHash(6);
                setMore(false);
              }}>About</p>
              <p className={`bot ${activeName == '/service' && 'active'}`} onClick={() => {
                navigate("/service");
                setHash(7);
                setMore(false);
              }}>Service</p>
              <p className={`bot ${activeName == '/tool' && 'active'}`} onClick={() => {
                navigate("/tool");
                setHash(8);
                setMore(false);
              }}>Tool</p>
              <p className={`bot ${activeName == '/contacts' && 'active'}`} onClick={() => {
                navigate("/contacts");
                setHash(9);
                setMore(false);
              }}>Contacts</p>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default App
