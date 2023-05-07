import React from 'react';
import ReactDOM from 'react-dom';




export default class WebsiteLogo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};


    }


    render() {


        return (

            <div>
                <div class="kostaLogo">Kosta</div>
                <div class="kostaLogoTextContainer">
                    <div class="kostaLogoText">ARTIST</div>
                    <div class="kostaLogoLine"></div>
                </div>

            </div>






        )
    }
}

//ReactDOM.render(<Header />, document.getElementById('header'));
