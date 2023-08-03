import React, { useState } from 'react';
import images from '../index';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Col'

const BondsDetail = (props) => {

  return (
    <Table>
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
        {Security.map(bond=>(
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
    </Table>
  )
}

export default BondsDetail 