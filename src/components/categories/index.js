import React from "react";
import "./style.css";



function Categories() {

    return (
        // <div className="container" id="categoriesContainer">
        <div className="row" id="rowCategories">
            <div className="col s6">
                <img src="https://media.gcflearnfree.org/content/55e0730c7dd48174331f5164_01_17_2014/whatisacomputer_mac.jpg" id="halfImage"></img>
            </div>
            <div className="col s6">
                <div className="row">
                    <div className="col s6">
                        <img src="https://s3.amazonaws.com/cms.ipressroom.com/84/files/20189/5bbb9b642cfac268dcf48840_New-Xerox-ConnectKey-Apps/New-Xerox-ConnectKey-Apps_mid.jpg" className="quarterImage"></img>
                    </div>
                    <div className="col s6">
                        <img src="https://www.fastmetrics.com/blog/wp-content/uploads/2014/10/cloud-computing-service-types-including-IoT-1024x706.png" className="quarterImage"></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col s6">
                        <img src="https://base.imgix.net/files/base/ebm/ehstoday/image/2020/04/cybersecurity_at_home.5ea74d2ce033f.png?auto=format&fit=crop&h=432&w=768" className="quarterImage"></img>
                    </div>
                    <div className="col s6">
                        <img src="http://www.letsbegamechangers.com/wp-content/uploads/2019/08/tech_support_1000_579_85.jpg" className="quarterImage"></img>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    )

}


export default Categories