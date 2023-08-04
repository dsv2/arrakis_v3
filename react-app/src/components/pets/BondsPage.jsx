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
    <div>
      <h1>Security Table</h1>
      <table>
        <thead>

          <tr>
            <th>ID</th>
            <th>ISIN</th>
            <th>CUSIP</th>
            <th>issuer_name</th>
            <th>maturity_date</th>
            <th>coupon</th>
            <th>type</th>
            <th>face_value</th>
            <th>currency</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {bonds.map(bond=>(
            <tr key={bond.id}>
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
    </div>


</Row>
    
  )
}

export default BondsPage
