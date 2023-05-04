import * as React from "react";

export default class ImageGallery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clickedFirstRowButtonID: 0,
            clickedSecondRowButtonID: 0


        };


    }


    handleSetFirstRowActiveButton(ID) {
        this.setState({ clickedFirstRowButtonID: ID });
    }


    handleSetSecondRowActiveButton(ID) {
        this.setState({ clickedSecondRowButtonID: ID });
    }


    render() {

        const galleryFirstRowButtons = ["Digital", "Traditional"];
        const gallerySecondRowButtons =
            [["paintings", "clients Work", "animation"],
            ["paintings", "clients Work", "drawings"]
            ]

            ;


        var clickedButtonClassName = "galleryClickedButton";

        return (


            <div class="galleryNavAndGalleryContainer">

                <div class="galleryNavContainer">
                    <div class="galleryNavContainerFirstRow">

                        {galleryFirstRowButtons.map((galleryFirstRowButtonName, ID) => (

                            <div class={(this.state.clickedFirstRowButtonID == ID ? ("galleryNavItem " + clickedButtonClassName) : "galleryNavItem")} onClick={() => this.handleSetFirstRowActiveButton(ID)}>
                                {galleryFirstRowButtonName}

                            </div>
                        ))}



                    </div>
                    <div class="galleryNavContainerSecondRow">




                        {gallerySecondRowButtons[this.state.clickedFirstRowButtonID].map((gallerySecondRowButtonName, ID) => (

                            <div class={(this.state.clickedSecondRowButtonID == ID ? ("galleryNavItem " + clickedButtonClassName) : "galleryNavItem")} onClick={() => this.handleSetSecondRowActiveButton(ID)}>
                                {gallerySecondRowButtonName}

                            </div>
                        ))}




                    </div>
                </div>





                <div class="galleryContainer">
                    <div class="gallery">



                        <div class="galleryImageContainer">
                            <img src="img/profile.jpg" class=" galleryImage" alt="..." />

                        </div>


                        <div class="galleryImageContainer">
                            <img src="img/yas.jpeg" class=" galleryImage" alt="..." />

                        </div>

                        <div class="galleryImageContainer">
                            <img src="img/oldman.png" class=" galleryImage" alt="..." />

                        </div>





                    </div>
                </div>




            </div>







        )
    }
}

