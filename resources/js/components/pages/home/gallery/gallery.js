import React from "react";

import GalleryNavigation from "./galleryNavigation";
import GalleryImages from "./galleryImages";
import GalleryBackgroundCSS from "./galleryBackgroundCSS";



export default class Gallery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {



/*      version 1
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


            },*/

            imageFiles: {
                digital: {
                    all: [],
                    paintings: [],
                    drawings: []


                },
                traditional: {
                    all: [],
                    paintings: [],
                    drawings: []


                }


            },

            clickedMediumType: "digital",
            clickedArtType: "all",

            clickedViewType: "small",

            isImageClicked: false,
            imageFileName: ""





        };

        this.artMediums = ["digital", "traditional"];
        /*ver 1
        this.artTypes =
        {
            digital: ["works", "commissions", "animation"],
            traditional: ["paintings", "commissions", "drawings"]
        };
*/
this.artTypes =
{
    digital: ["all", "paintings", "drawings"],
    traditional: ["all", "paintings", "drawings"]
};
        this.viewTypes = ["small", "large"];



        //Navigation
        this.handleSetArtMedium = this.handleSetArtMedium.bind(this);
        this.handleSetArtType = this.handleSetArtType.bind(this);
        this.handleSetViewType = this.handleSetViewType.bind(this);


        //ImageGallery
        this.handleEnlargeImage = this.handleEnlargeImage.bind(this);

    }


    handleSetArtMedium(buttonName) {
        this.setState({
            clickedMediumType: buttonName,
            clickedArtType: this.artTypes[buttonName][0]
        });
    }


    handleSetArtType(buttonName) {
        this.setState({ clickedArtType: buttonName });
    }

    handleSetViewType(buttonName) {
        this.setState({ clickedViewType: buttonName });
    }

    handleEnlargeImage(fileName) {
        this.setState({
            isImageClicked: !this.state.isImageClicked,
            imageFileName: fileName
        });

    }
    getImageFileNames() {

    }



    componentDidMount() {

        // To retrieve the data from sessionStorage
        const storedData = sessionStorage.getItem('kostaImageFileNames');

        if (storedData) {
            const parsedData =  JSON.parse(storedData);

           this.setState({ imageFiles: parsedData })

        }else{
            fetch('/api/imagefiles')
            .then((response) => response.json())
            .then((data) => {
                this.setState({ imageFiles: data })

                const stringifiedData = JSON.stringify(data);

                // Store the stringified data in the sessionStorage
                sessionStorage.setItem('kostaImageFileNames', stringifiedData);

            }

            );
        }



       





    }


    render() {



        return (


            <div class="galleryNavAndGalleryContainer">
                <h1 class="galleryHeader">
                    Gallery
                </h1>

                <GalleryBackgroundCSS/>
                <GalleryNavigation

                    handleSetArtMedium={this.handleSetArtMedium}
                    handleSetArtType={this.handleSetArtType}
                    handleSetViewType={this.handleSetViewType}

                    artMediums={this.artMediums}
                    artTypes={this.artTypes[this.state.clickedMediumType]}
                    viewTypes={this.viewTypes}


                    clickedMediumType={this.state.clickedMediumType}
                    clickedArtType={this.state.clickedArtType}
                    clickedViewType={this.state.clickedViewType}

                    isImageClicked={this.state.isImageClicked}

                />

                <GalleryImages
                    handleEnlargeImage={this.handleEnlargeImage}

                    imageFiles={this.state.imageFiles}

                    clickedMediumType={this.state.clickedMediumType}
                    clickedArtType={this.state.clickedArtType}
                    clickedViewType={this.state.clickedViewType}

                    isImageClicked={this.state.isImageClicked}
                    imageFileName={this.state.imageFileName}


                />




            </div>







        )
    }
}

