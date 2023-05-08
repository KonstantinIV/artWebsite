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
            clickedSecondRowButtonName: "paintings",

            clickedViewTypeName: "small",

            isImageClicked: false,
            imageFileName: ""





        };

        this.galleryFirstRowButtons = ["digital", "traditional"];
        this.gallerySecondRowButtons =
        {
            digital: ["paintings", "commission", "animation"],
            traditional: ["paintings", "commission", "drawings"]
        };

        this.galleryViewType = ["small", "large"];


    }


    handleSetFirstRowActiveButton(buttonName) {
        this.setState({
            clickedFirstRowButtonName: buttonName,
            clickedSecondRowButtonName: "paintings"
        });
    }


    handleSetSecondRowActiveButton(buttonName) {
        this.setState({ clickedSecondRowButtonName: buttonName });
    }

    handleSetViewType(buttonName) {
        this.setState({ clickedViewTypeName: buttonName });
    }

    handleSetEnlargeImage(fileName) {
        this.setState({
            isImageClicked: !this.state.isImageClicked,
            imageFileName: fileName
        });

    }



    componentDidMount() {
        fetch('/api/imagefiles')
            .then((response) => response.json())
            .then((data) => this.setState({ imageFiles: data }));
    }


    render() {


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


                    <div class="galleryNavContainerThirdRow">

                        {this.galleryViewType.map((galleryViewTypeName, ID) => (

                            <div key={ID} class={(this.state.clickedViewTypeName == galleryViewTypeName ? ("galleryNavItem " + clickedButtonClassName) : "galleryNavItem")} onClick={() => this.handleSetViewType(galleryViewTypeName)}>
                                {galleryViewTypeName == "small" ? (
                                    <div className="gallerySmallViewIcon">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>

                                ) :
                                    (<div className="galleryLargeViewIcon">
                                        <div></div>
                                    </div>)

                                }

                            </div>
                        ))}



                    </div>
                </div>







                <div class="galleryContainer">
                    <div class={(this.state.clickedViewTypeName == "small" ? "gallerySmallView" : "galleryLargeView")}>
                        {
                            this.state.imageFiles[this.state.clickedFirstRowButtonName][this.state.clickedSecondRowButtonName] &&
                            this.state.imageFiles[this.state.clickedFirstRowButtonName][this.state.clickedSecondRowButtonName]
                                .map((file, index) => (



                                    <div class={(this.state.clickedViewTypeName == "small" ? "galleryImageContainerSmallView" : "galleryImageContainerLargeView")}>

                                        <img
                                            key={index}
                                            onClick={() => this.handleSetEnlargeImage(file)}
                                            src={"img/gallery/" + this.state.clickedFirstRowButtonName + "/" + this.state.clickedSecondRowButtonName + "/" + file}
                                            class={(this.state.clickedViewTypeName == "small" ? " galleryImageSmall" : " galleryImageLarge")}
                                            alt="..." />

                                    </div>
                                ))
                        }

                        {//On click enlarge specidfic image
                            (this.state.isImageClicked ?
                                <div class="galleryEnlargeImageContainer"
                                    onClick={() => this.handleSetEnlargeImage("")}
                                >

                                    <img className="galleryEnlargeImageCloseButton"
                                        onClick={() => this.handleSetEnlargeImage("")}
                                        src={"img/closeButton.png"}
                                        alt="..." />

                                    <img className="galleryEnlargeImage"
                                        onClick={() => this.handleSetEnlargeImage("")}
                                        src={"img/gallery/" + this.state.clickedFirstRowButtonName + "/" + this.state.clickedSecondRowButtonName + "/" + this.state.imageFileName}
                                        alt="..." />
                                </div>
                                : ""
                            )
                        }









                    </div>
                </div>




            </div>







        )
    }
}

