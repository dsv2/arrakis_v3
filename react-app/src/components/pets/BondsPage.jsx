import React from 'react'
import Row from 'react-bootstrap/Row'



const BondsPage = () => {

  const Security = [
    {"id":1,"ISIN":"Bruce Wayne","CUSIP":"Batman","issuer_name":"Martial Arts","maturity_date":1/1/22,"coupon":20,"type":government},
    {"id":2,"ISIN":"Clark Kent","CUSIP":"Superman","issuer_name":"Flight","maturity_date":1/1/23,"coupon":20,"type":SOV},
    {"id":3,"ISIN":"Jay Garrick","CUSIP":"The Flash","issuer_name":"Super-speed","maturity_date":2,"coupon":20,"type":government},
    {"id":4,"ISIN":"Alan Scott","CUSIP":"Green Lantern","issuer_name":"Ring Creation","maturity_date":2,"coupon":20,"type":CORP},
    {"id":5,"ISIN":"Helena Bertenelli","CUSIP":"The Huntress","issuer_name":"Crossbow Archery","maturity_date":3,"coupon":20,"type":government},
    {"id":6,"ISIN":"Dr. Harleen Quinzel","CUSIP":"Harley Quinn","issuer_name":"Hammer-fighting","maturity_date":3,"coupon":20,"type":SOV},
    {"id":7,"ISIN":"Floyd Lawton","CUSIP":"Deadshot","issuer_name":"Marksmaship","maturity_date":4,"coupon":20,"type":CORP},
    
  ]

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
      </table>
    </div>


</Row>
    
  )
}

export default BondsPage
