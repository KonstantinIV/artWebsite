import React from 'react';



export default function InfoArticle(
{
article
}
) {
console.log(article);
    return (
        

<div  dangerouslySetInnerHTML={{ __html: article.toString() }} />
 

    )
}

