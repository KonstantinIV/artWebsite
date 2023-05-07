import * as React from "react";

export default class ImageGallery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {


            imageFiles: {
                digital: {
                    paintings: [],
                    commission: [],
                    animation: []


                },
                traditional: {
                    paintings: [],
                    commission: [],
                    drawings: []


                }


            },

            clickedFirstRowButtonName: "digital",
            clickedSecondRowButtonName: "paintings"




        };

        this.galleryFirstRowButtons = ["digital", "traditional"];
        this.gallerySecondRowButtons =
        {
            digital: ["paintings", "commission", "animation"],

            traditional: ["paintings", "commission", "drawings"]
        }
            ;

    }


    handleSetFirstRowActiveButton(buttonName) {
        this.setState({ clickedFirstRowButtonName: buttonName });
    }


    handleSetSecondRowActiveButton(buttonName) {
        this.setState({ clickedSecondRowButtonName: buttonName });
    }


    componentDidMount() {
        fetch('/api/test')
            .then((response) => response.json())
            .then(console.log(response));
    }

    componentDidMount() {
        fetch('/api/imagefiles')
            .then((response) => response.json())
            .then((data) => this.setState({ imageFiles: data }));
    }


    render() {

        console.log(this.gallerySecondRowButtons[this.state.clickedFirstRowButtonName]);

        var clickedButtonClassName = "galleryClickedButton";

        return (


            <div class="galleryNavAndGalleryContainer">

                <div class="galleryNavContainer">
                    <div class="galleryNavContainerFirstRow">

                        {this.galleryFirstRowButtons.map((galleryFirstRowButtonName, ID) => (

                            <div key={ID} class={(this.state.clickedFirstRowButtonName == galleryFirstRowButtonName ? ("galleryNavItem " + clickedButtonClassName) : "galleryNavItem")} onClick={() => this.handleSetFirstRowActiveButton(galleryFirstRowButtonName)}>
                                {galleryFirstRowButtonName}

                            </div>
                        ))}



                    </div>
                    <div class="galleryNavContainerSecondRow">




                        {this.gallerySecondRowButtons[this.state.clickedFirstRowButtonName].map((gallerySecondRowButtonName, ID) => (

                            <div key={ID} class={(this.state.clickedSecondRowButtonName == gallerySecondRowButtonName ? ("galleryNavItem " + clickedButtonClassName) : "galleryNavItem")} onClick={() => this.handleSetSecondRowActiveButton(gallerySecondRowButtonName)}>
                                {gallerySecondRowButtonName}

                            </div>
                        ))}




                    </div>
                </div>





                <div class="galleryContainer">
                    <div class="gallery">

                        {


                            this.state.imageFiles[this.state.clickedFirstRowButtonName][this.state.clickedSecondRowButtonName] &&
                            this.state.imageFiles[this.state.clickedFirstRowButtonName][this.state.clickedSecondRowButtonName]
                                .map((file, index) => (



                                    <div class="galleryImageContainer">
                                        <img key={index} src={"img/gallery/" + this.state.clickedFirstRowButtonName + "/" + this.state.clickedSecondRowButtonName + "/" + file} class=" galleryImage" alt="..." />

                                    </div>
                                ))


/*
                            <div class="galleryImageContainer">
                                <img key={index} src={"img/" + file} class=" galleryImage" alt="..." />

                            </div>
                        ))*/}




                    </div>
                </div>




            </div>







        )
    }
}

