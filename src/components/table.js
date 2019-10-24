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
  { id: 'fodt', numeric: true,  label: 'Year'},
  
];

function HeadOfTable() {
  return (
    <TableHead>
      <TableRow>
        {headCells.map(headCell => (
          <TableCell style={{ fontWeight: 'bold', align: 'center'}}>
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
  //onClick={console.log("Person clicked")}

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function explorePerson(row) {
    console.log("Person clicked! Info below.")
    const personList = []
    personList.push(row)
    console.log(personList)
  }

  return (
    <div className="main">
          
      <Paper className="paper">
        <div className="tableWrapper">
          <Table className="table">
            <HeadOfTable/>
            <TableBody>
              {getActors().slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                return(
                <TableRow>
                  <TableCell align="left">{row.digghet} </TableCell>
                  <div className={classes.root}>
                  <TableCell align="left">
                    <ExpansionPanel>
                      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                        <Typography className={classes.heading} align="left">{row.fornavn}</Typography>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <Typography>
                        {row.fornavn} ble født i {row.fodt}.
                        </Typography>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  </TableCell>
                  </div>
                  <TableCell className='rowInTable' align="left">{row.etternavn}</TableCell>
                  <TableCell align="left" >{row.fodt}</TableCell>  
                </TableRow>
                    );
                  })}
            </TableBody>
          </Table>
        </div>
          <TablePagination
          rowsPerPageOptions={[5, 10, 50]}
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

//<TableCell className='rowInTable' align="left" onClick={() => explorePerson(row)} on>{row.fornavn}</TableCell>
//<TableCell className='rowInTable' align="left" onClick={() => explorePerson(row)}>{row.etternavn}</TableCell>