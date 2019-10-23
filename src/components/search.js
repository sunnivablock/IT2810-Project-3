import React from 'react';
import TextField from '@material-ui/core/TextField';
import '../App.css'

import getSearch from '../reducers/reducer'
import { connect } from 'react-redux';




    export default function TextFields() {
        //const classes = useStyles();
        const [values, setValues] = React.useState({
            Rating: '',
            Fornavn: '',
            Etternavn: '',
            Født: '',

        });
      
        const handleChange = navn => event => {
          setValues({ ...values, [navn]: event.target.value });
          console.log(event.target.value)
          console.log("Rating:",values.Rating)
          console.log("Fornavn:",values.Fornavn)
          //sendData()
        };

        const mapStateToProps = state => {
            return {
              values: getSearch(state.values)
            }
          }

          const mapDispatchToProps = dispatch => {
            return {
              values: values
            }
          }

     /* const sendData = () => {
            this.props.parentCallback(values);
       }
*/


    const Search = connect(
        mapStateToProps,
        mapDispatchToProps
    )(Search)

    return(
        console.log(values),
        
        <div>
            
            <div className="search">
            
                <TextField
                id="Rating"
                label="Rating"
                value={values.Rating}
                className="searchField"
                onChange={handleChange('Rating')}
                margin="normal"
                />
                <TextField
                id="Fornavn"
                label="Fornavn"
                value={values.Fornavn}
                className="searchField"
                onChange={handleChange('Fornavn')}
                margin="normal"
                />
                <TextField
                id="Etternavn"
                label="Etternavn"
                value={values.Etternavn}
                className="searchField"
                onChange={handleChange('Etternavn')}
                margin="normal"
                />
                <TextField
                id="Født"
                label="Født"
                value={values.Født}
                className="searchField"
                onChange={handleChange('name')}
                margin="normal"/>
            </div>
        </div>
    )
}

