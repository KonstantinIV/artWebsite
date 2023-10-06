import React from 'react';



export default function InfoArticle(
    {
        article
    }
) {
    return (


        <div dangerouslySetInnerHTML={{ __html: article }} />


    )
}

