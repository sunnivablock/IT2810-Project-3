import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import '../App.css';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

function createData(Digghetsbarometer, firstName, lastName, year) {
  return { Digghetsbarometer, firstName, lastName, year };
}

const rows = [
  createData(10, "Chris", "Hemsworth", 1987),
  createData(9, "Brad", "Pitt", 1972),
  createData(8, "Channing", "Tatum", 1985),
  createData(8.5, "David", "Beckham", 1979),
  createData(7, "Johnny", "Depp", 1974),
  createData(10, "Chris", "Hemsworth", 1987),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow className="row">
            <TableCell>Digghet</TableCell>
            <TableCell align="left">Fornavn</TableCell>
            <TableCell align="left">Etternavn</TableCell>
            <TableCell align="left">Født</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="subRow">
          {rows.map(row => (
            <TableRow key={row.Digghetsbarometer}>
              <TableCell component="th" scope="row">
                {row.Digghetsbarometer}
              </TableCell>
              <TableCell align="left">{row.firstName}</TableCell>
              <TableCell align="left">{row.lastName}</TableCell>
              <TableCell align="left">{row.year}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}