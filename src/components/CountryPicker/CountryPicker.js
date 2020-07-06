import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl} from '@material-ui/core';

import { fetchCountries } from './../../API/api';



const Countries = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);

  return (
    <div className="d-flex justify-content-center p-2">
      
    <FormControl >
      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">Global</option>
        {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>

    
    </div>
  );
};

export default Countries;