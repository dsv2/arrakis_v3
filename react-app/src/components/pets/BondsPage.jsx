import React from 'react'
import Row from 'react-bootstrap/Row'
import { getAllBonds } from '../../services/BondsServices';
import { useState } from 'react';
import { useEffect } from 'react';


const BondsPage = () => {
  const [bonds, setBonds] = useState([]);
  

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

  return (

<Row >

      <h1>Security Table</h1>
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
