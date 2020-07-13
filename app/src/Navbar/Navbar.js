import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
<div className="topbar">
        <div className="container-fluid hc">
            <div className="row hc">
                <div className="col-4 hc">
                    <p className="name1">Matthew McAllister</p>
                </div>
                <div className="col-7 hc">
                    <div className="container-fluid hc">
                        <div className="row hc">
                            <div className="col-4 hc">
                                <a href="https://au.linkedin.com/in/matthew-mcallister-88338b151?trk=people-guest_people_search-card"
                                target="_blank">
                                    <p className="text1">Linked in:
                                    </p>
                                    <svg xmlns="http://www.w3.org/2000/svg" focusable="false" className="lisvg">
                                        <g className="glisvg" fill="none" fill-rule="evenodd" index>
                                        <rect className="bug-text-color" fill="#FFF" x="1" y="1" width="46" height="46" rx="4"></rect>
                                        <path d="M0 4.01A4.01 4.01 0 014.01 0h39.98A4.01 4.01 0 0148 4.01v39.98A4.01 4.01 0 0143.99 48H4.01A4.01 4.01 0 010 43.99V4.01zM19 18.3h6.5v3.266C26.437 19.688 28.838 18 32.445 18 39.359 18 41 21.738 41 28.597V41.3h-7V30.159c0-3.906-.937-6.109-3.32-6.109-3.305 0-4.68 2.375-4.68 6.109V41.3h-7v-23zM7 41h7V18H7v23zm8-30.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" className="background" fill="#0077B5"></path>
                                        </g>
                                    </svg>
                                </a>
                            </div>
                            <div className="col-4 hc">
                                <a href="https://www.canva.com/tools/resume-maker-v1/?utm_source=google_sem&utm_medium=cpc&utm_campaign=REV_AU_EN_CanvaPro_Resume_EM&utm_term=REV_AU_EN_CanvaPro_Best_Resume_EM&gclsrc=aw.ds&&gclid=Cj0KCQjwyur0BRDcARIsAEt86IBO_2hmeoFI3rl2bRU68WasDU6zCr4_ZORZBSaiTvEk6KxP9lKsJ_EaAhFiEALw_wcB&gclsrc=aw.ds"
                                target="_blank">
                                    <p className="text1">Resume:
                                    </p>
                                    <img className="glipng1" src="https://img.icons8.com/plasticine/100/000000/resume.png"/>
                                </a>
                            </div>
                            <div className="col-4 hc">
                                <a href="https://github.com/Macca473"
                                target="_blank">
                                    <p className="text1">GitHub:
                                    </p>
                                    <img className="glipng2" src="https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/github-512.png"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Navbar;
