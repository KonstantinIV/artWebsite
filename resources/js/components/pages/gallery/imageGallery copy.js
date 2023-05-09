import * as React from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
  
const data = [
    {
        link: 
'img/profile.jpg',
    },
    {
        link: 
'img/oldman.png',
    },
    {
        link: 
'https://media.geeksforgeeks.org/wp-content/uploads/20220221132017/download.png',
    },
    {
        link: 
'https://media.geeksforgeeks.org/wp-content/uploads/20220221132017/download.png',
    },
    {
        link: 
'https://media.geeksforgeeks.org/wp-content/uploads/20220221132017/download.png',
    },
    {
        link: 
'https://media.geeksforgeeks.org/wp-content/uploads/20220221132017/download.png',
    },
    {
        link: 
'https://media.geeksforgeeks.org/wp-content/uploads/20220221132017/download.png',
    },
    {
        link: 
'https://media.geeksforgeeks.org/wp-content/uploads/20220221132017/download.png',
    },
    {
        link: 
'https://media.geeksforgeeks.org/wp-content/uploads/20220221132017/download.png',
    },
  
]
  
function App() {
    return (
        <center>
                              <div class="galleryImageContainer">
</div>
            <div>
                <h1 style={{ color: "green" }}>GeeksforGeeks</h1>
                <h2>React MUI Image list</h2>
            </div>
            <div>
                <ImageList sx={{ width: 900, height: 900 }} 
                    cols={3} rowHeight={170}>
                    {data.map((idx) => (
                        <ImageListItem key={idx.link} >
                            <img
                                src={`${idx.link}?w=
                                164&h=164&fit=crop&auto=format`}
                                srcSet={`${idx.link}?w=
                                164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
        </center>
    );
}
  
export default App;