import React from 'react'
import { Col, Button, Row} from "react-bootstrap";
import { getAllTrades, saveDate } from '../../services/BondsServices';
import { getAllBonds } from '../../services/BondsServices';

import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const BondsPage = () => {
  const [bonds, setBonds] = useState([]);
  const [date, setDate] = useState('');

  

  useEffect(() => {
    getBondsFromAPI();
    }, []
    );

  const getBondsFromAPI = () => {
      getAllBonds()
          .then(res => {
              setBonds(res.data);
              console.log(res.data);
          })
          
          .catch(err => {
              setBonds([]);
              console.log(err);
          })
        }

    const handleDate = (props) => {
      let date = {};
      date.setDate = date;
      console.log(date);
  
      saveDate(date)
      .then(res => {
        setDate('');
        })
      .catch(err=>{
          console.log(err);
        })
    }

  return (

  <Row >

    <h1>Security Table</h1>
    

    <label for="datepicker">Maturity date:</label>

    <input type="date" id="datepicker" name="bond-date" value={date}onChange={(e) => setDate(e.target.value)} min="2010-01-01" max="2023-12-31" />
    {/* <input type="date" id="datepicker" name="bond-date" value={date} min="2010-01-01" max="2023-12-31" onClick={handleDate}  /> */}
    <Button className="bondsbutton" variant="primary" type="submit" onClick={handleDate}>
        Submit
    </Button>
    <table class ='table'>
      <thead>

        <tr>
          <th scope = "col">ID</th>
          <th scope = "col">ISIN</th>
          <th scope = "col">CUSIP</th>
          <th scope = "col">issuer_name</th>
          <th scope = "col">maturity_date</th>
          <th scope = "col">coupon</th>
          <th scope = "col">type</th>
          <th scope = "col">face_value</th>
          <th scope = "col">currency</th>
          <th scope = "col">status</th>
        </tr>
      </thead>
      <tbody>
        {bonds.map(bond=>(
          <tr key={bond.id} scope = "row">
            <td>{bond.id}</td>
            <td>{bond.ISIN}</td>
            <td>{bond.CUSIP}</td>
            <td>{bond.issuer_name}</td>
            <td>{bond.maturity_date}</td>
            <td>{bond.coupon}</td>
            <td>{bond.type}</td>
            <td>{bond.face_value}</td>
            <td>{bond.currency}</td>
            <td>{bond.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </Row>
      
  )
}




export default BondsPage
