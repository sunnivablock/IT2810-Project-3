import React from 'react';
import '../App.css'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import getActors from './data';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    width: '80%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    margin: -10
  },
}));

const headCells = [
  { id: 'rating', numeric: true,  label: 'Rating'},
  { id: 'fornavn', numeric: false,  label: 'First Name'},
  { id: 'etternavn', numeric: false, label: 'Last Name'},
  { id: 'fodt', numeric: true,  label: 'Birth year'},
];

function HeadOfTable() {
 function generateKey(){
   var rndmKey = Math.random();
   return rndmKey
 }
  return (
    <TableHead>
      <TableRow>
        {headCells.map(headCell => (
          <TableCell style={{ fontWeight: 'bold', width: '10%'} } key={generateKey()}>
              {headCell.label.toUpperCase()}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
export default function EnhancedTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setPage(0);
    setRowsPerPage(+event.target.value);
  };
 
  function evaluateRating(rating){
    console.log("Personen har denne ratingen:"+rating);
    if(rating<30){
        return("This person is rated as below average");
    }
    else if(29<rating<70){
        return("This person is rated as average");
    }
    else if(69<rating<90){
        return("This person is rated as pretty good looking");
    }
    else{
        return("This person is rated as really damn hot");
    }
  }

  return (
    <div className="main">
      <Paper className="paper">
        <div className="tableWrapper">
          <Table className="table">
            <HeadOfTable/>
            <TableBody>
              { getActors().slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                return(
                <TableRow key={index}>
                  <TableCell align="left">{row.digghet} </TableCell>
                  <TableCell align="left">
                    <ExpansionPanel>
                      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                        <Typography className={classes.heading}>{row.fornavn}</Typography>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <Typography>
                        Mr. {row.etternavn} was born in {row.fodt}. He has chosen the profession of {row.yrke.toLowerCase()}. {evaluateRating(row.digghet)}.
                        </Typography>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  </TableCell>
                  <TableCell align="left">{row.etternavn}</TableCell>
                  <TableCell align="left" >{row.fodt}</TableCell>  
                </TableRow>
                    );
                  })}
            </TableBody>
          </Table>
        </div>
          <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          count={getActors().length}
          component="div"
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'previous page',
          }}
          nextIconButtonProps={{
            'aria-label': 'next page',
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}

// {row.fornavn} is a/an {row.profession}.
//<TableCell className='rowInTable' align="left" onClick={() => explorePerson(row)} on>{row.fornavn}</TableCell>
//<TableCell className='rowInTable' align="left" onClick={() => explorePerson(row)}>{row.etternavn}</TableCell>

//Utkommentert funksjon som skal legges inn: 
//.