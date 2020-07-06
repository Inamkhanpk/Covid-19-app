import React from 'react';

import Card from './components/Card/Card';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Chart from './components/Chart/Chart';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { fetchData } from './API/api.js';

import './App.css'
//import image from './images/image.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div >
        {/* <img className={styles.image} src={image} alt="COVID-19" /> */}
        <Header/>
        <div className="bg-image">
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Card data={data} />
        <Chart data={data} country={country} />
        </div> 
        <Footer/>
      </div>
    );
  }
}

export default App;