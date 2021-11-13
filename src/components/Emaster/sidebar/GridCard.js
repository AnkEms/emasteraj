import { Container, Grid } from '@material-ui/core'
import React from 'react'
import NoteCard from '../card/NoteCard'
import { Note } from './db'

const GridCard = () => {
  return (
    <Container>
     <Grid container spacing={3}>
       {Note.map((note)=>(
          <Grid key={note.id} item xs={12} sm={6} md={4}>
          <NoteCard note={note}/>
   
        </Grid>

       ))}
       </Grid>

     </Container>
  )
}

export default GridCard
