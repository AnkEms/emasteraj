import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { Add, SearchOutlined } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { Notes } from "../../../data/cardList";
import Cards from "../../components/Cards";
import CustomDialog from "../custom/CustomDialog";

const SearchPage = ({ open, handleClose, handleClickOpen }) => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);




  // effect to put data into our array
  // console.log(search.length)
  useEffect(() => {
    setData(Notes);
  }, []);

  
  // by the title we are filtering data
const excludedItems = ["id"]

  // input text handling
  const handleChange = (value) => {
    setSearch(value);
    filterData(value)
  };


//filter records by search text
const filterData = (value)=>{
  const lowereCasedValue = value.toLowerCase().trim()
  if(lowereCasedValue==="") setData(Notes);
  else{
    const filteredData = Notes.filter(note=>{
      return Object.keys(note).some(key=>
        excludedItems.includes(key)?false:note[key].toString().toLowerCase().includes(lowereCasedValue)
        )
    })

    setData(filteredData) //filtered data set again in data state
  }

}

  return (
    <div>
      {/* text field input for searching particular data */}

      <div style={{ display: "flex", marginTop: "20px" }}>
        <SearchOutlined style={{ fontSize: "2rem", margin: "10px" }} />
        <TextField 
        value={search} 
        type="text" 
        placeholder="search something..."
        fullWidth 
        onChange={(e)=>{handleChange(e.target.value)}} />
      </div>

      {/* if search is empty it shows us only suggestions */}
      {search.length ===0 ? 
        <span
          style={{ display: "flex", flexDirection: "column", margin: "65px" }}
        >
          <Typography variant="h5">Like “Uber”</Typography>

          <Typography variant="h5">Like “Facebook”</Typography>

          <Typography variant="h5">Like “Asana”</Typography>
        </span>
       : 
        // if search matches with data  it shows us data grid

        (data.length!==0?<div style={{ marginTop: "5vh" }}>  
        <span style={{marginBottom:"40px"}}>Search Results for {`"${search}"`}   
       <Button onClick={() => setSearch("")}>clear search</Button>
       </span>
      
            <Grid container spacing={3}>
              {/* logic for filtering data from Notes list  */}

              {data               
                .map((note) => (         
                    <Grid item xs={12} md={6} lg={4} key={note.id}>                
                    <Cards note={note} />
                    </Grid>
                    ))
                }
            </Grid>
    

      

          <span>you can choose only maximum 3 templates</span> 
        </div>: 
        // THIS WILL WORK IF NO MATCHES IS FOUND
        <span>
       We searched far and wide and couldn’t find any template matching your
       search
       <Button onClick={() => setSearch("")}>clear search</Button>
       <br />
       <br />
       <Button
         endIcon={<Add />}
         variant="outlined"
         color="primary"
         type="submit"
         onClick={handleClickOpen}
       >
         custom template
       </Button>
       <CustomDialog open={open} handleClose={handleClose} />
     </span>)
        
      }


    </div>
  );
};

export default SearchPage;

