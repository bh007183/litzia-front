import React from "react";
import "./style.css";



function Categories() {

    return (
        // <div className="container" id="categoriesContainer">
        <div className="row" id="rowCategories">
            <div className="col s6" id="one">
                <div className="row">
                    <a href="/computer">
                        <img src="https://media.gcflearnfree.org/content/55e0730c7dd48174331f5164_01_17_2014/whatisacomputer_mac.jpg" id="halfImage"></img>

                    </a>
                </div>
                <div className="row">
                    <a href="/computer">
                        <h5 className="categoryTag" id="computerTag">Computers</h5>
                    </a>
                </div>
            </div>
            <div className="col s6" id="secondColumn">
                <div className="row" id="topRow">
                    <div className="col s6">
                        <a href="/xerox">
                            <img src="https://thumbs.dreamstime.com/b/closeup-hand-press-button-to-using-photocopier-xerox-machine-office-work-tool-printer-equipment-copy-room-192332840.jpg" className="quarterImage"></img>
                        </a>
                    </div>
                    <div className="col s6">
                        <a href="/software">
                            <img src="https://www.fastmetrics.com/blog/wp-content/uploads/2014/10/cloud-computing-service-types-including-IoT-1024x706.png" className="quarterImage"></img>
                        </a>
                    </div>
                </div>
                <div className="row" id="middleRow">
                    <div className="col s6">
                        <a href="/xerox">
                            <h5 className="categoryTag">Xerox</h5>
                        </a>
                    </div>
                    <div className="col s6">
                        <a href="/software">
                            <h5 className="categoryTag">Software</h5>
                        </a>
                    </div>
                </div>
                <div className="row" id="bottomRow">
                    <div className="col s6">
                        <a href="/security">
                            <img src="https://base.imgix.net/files/base/ebm/ehstoday/image/2020/04/cybersecurity_at_home.5ea74d2ce033f.png?auto=format&fit=crop&h=432&w=768" className="quarterImage"></img>
                        </a>
                    </div>
                    <div className="col s6">
                        <a href="/services">
                            <img src="http://www.letsbegamechangers.com/wp-content/uploads/2019/08/tech_support_1000_579_85.jpg" className="quarterImage"></img>
                        </a>
                    </div>
                </div>
                <div className="row" id="lastRow">
                    <div className="col s6">
                        <a href="/security">
                            <h5 className="bottomTag">Security</h5>
                        </a>
                    </div>
                    <div className="col s6">
                        <a href="/services">
                            <h5 className="bottomTag">Services</h5>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    )

}


export default Categories