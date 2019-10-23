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

//this.fetchPersonDetails = this.fetchPersonDetails.bind(this);

const headCells = [
  { id: 'rating', numeric: true,  label: 'Rating'},
  { id: 'fornavn', numeric: false,  label: 'Fornavn'},
  { id: 'etternavn', numeric: false, label: 'Etternavn'},
  { id: 'fodt', numeric: true,  label: 'Født'},
  
];

function HeadOfTable() {

  return (
    <TableHead>
      <TableRow>
        {headCells.map(headCell => (
          <TableCell>
              {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function EnhancedTable() {
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
    console.log("It works!")
    console.log(row.fornavn, row.etternavn, row.digghet)
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
                        <TableCell align="left" >{row.digghet} </TableCell>
                        <TableCell className='rowInTable' align="left" onClick={() => explorePerson(row)} on>{row.fornavn}</TableCell>
                        <TableCell className='rowInTable' align="left" onClick={() => explorePerson(row)}>{row.etternavn}</TableCell>
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

