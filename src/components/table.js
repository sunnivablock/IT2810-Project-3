import React from 'react';
import '../App.css'
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';


function createData(digghet, fornavn, etternavn, fodt) {
  return { digghet, fornavn, etternavn, fodt};
}

const rows = [
  createData(10, "Chris", "Hemsworth", 1987),
  createData(9, "Brad", "Pitt", 1972),
  createData(8, "Channing", "Tatum", 1985),
  createData(11, "David", "Beckham", 1979),
  createData(7, "Johnny", "Depp", 1974),
  createData(1, "Chris", "Hemsworth", 1987),
  createData(2, "Brad", "Pitt", 1972),
  createData(3, "Channing", "Tatum", 1985),
  createData(12, "David", "Beckham", 1979),
  createData(5, "Johnny", "Depp", 1974),
  createData(13, "Chris", "Hemsworth", 1987),
  createData(14, "Brad", "Pitt", 1972),
  createData(15, "Channing", "Tatum", 1985),
  createData(16, "David", "Beckham", 1979),
  createData(17, "Johnny", "Depp", 1974),
];


function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const headCells = [
  { id: 'digghet', numeric: true,  label: 'Digghetsfaktor'},
  { id: 'fornavn', numeric: false,  label: 'Fornavn'},
  { id: 'etternavn', numeric: false, label: 'Etternavn'},
  { id: 'fodt', numeric: true,  label: 'Født'},
  
];

function HeadOfTable(props) {
  const {order, orderBy, onRequestSort } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map(headCell => (
          <TableCell>
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={order}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className="visuallyHidden">
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}


HeadOfTable.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
};


export default function EnhancedTable() {
  const [order, setOrder] = React.useState('desc');
  const [orderBy, setOrderBy] = React.useState('digghet');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  

  const handleRequestSort = (event, property) => {
    const isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };



  return (
    <div className="main">
      <Paper className="paper">
        <div className="tableWrapper">
          <Table
            className="table"
            
          >
            <HeadOfTable
              //classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />

            <TableBody>
              {stableSort(rows, getSorting(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return(
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                        <TableCell align="left">{row.digghet} </TableCell>
                        <TableCell align="left">{row.fornavn}</TableCell>
                        <TableCell align="left">{row.etternavn}</TableCell>
                        <TableCell align="left">{row.fodt}</TableCell>
                    </TableRow>
                    );
                  })}
              
            </TableBody>
          </Table>
        </div>
          <TablePagination
          rowsPerPageOptions={[5, 10, 50]}
          count={rows.length}
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
