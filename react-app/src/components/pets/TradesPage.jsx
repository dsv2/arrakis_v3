import React from 'react'
import { Col, Button, Row} from "react-bootstrap";
import { getAllTrades, saveDate } from '../../services/BondsServices';
import { getAllBonds } from '../../services/BondsServices';

import { useState } from 'react';
import { useEffect } from 'react';

export const TradesPage = () => {
    const [trades, setTrades] = useState([]);
    
  
    useEffect(() => {
      getTradesFromAPI();
      }, []
      );
  
  const getTradesFromAPI = () => {
      getAllTrades()
          .then(res => {
              setTrades(res.data);
              console.log(res.data);
          })
          
          .catch(err => {
              setTrades([]);
              console.log(err);
          })
        }
  
    return (
  
  <Row >
      
      <h1>Trades Table</h1>

{/* <label for="datepicker">Maturity date:</label> */}

{/* <input type="date" id="datepicker" name="bond-date" value={date}onChange={(e) => setDate(e.target.value)} min="2010-01-01" max="2023-12-31" /> */}
{/* <input type="date" id="datepicker" name="bond-date" value={date} min="2010-01-01" max="2023-12-31" onClick={handleDate}  /> */}
{/* <Button className="bondsbutton" variant="primary" type="submit" onClick={handleDate}>
    Submit
</Button> */}
<table class ='table'>
  <thead>

    <tr>
      <th scope = "col">ID</th>
      <th scope = "col">BOOK_ID</th>
      <th scope = "col">SECURITY_ID</th>
      <th scope = "col">COUNTERPARTY_ID</th>
      <th scope = "col">CURRENCY</th>
      <th scope = "col">STATUS</th>
      <th scope = "col">QUANTITY</th>
      <th scope = "col">UNIT_PRICE</th>
      <th scope = "col">BUY_SELL</th>
      <th scope = "col">TRADE_DATE</th>
      <th scope = "col">SETTLEMENT_DATE</th>
    </tr>
  </thead>
  <tbody>
    {trades.map(trade=>(
      <tr key={trade.id} scope = "row">
        <td>{trade.id}</td>
        <td>{trade.book_id}</td>
        <td>{trade.security_id}</td>
        <td>{trade.counterparty_id}</td>
        <td>{trade.currency}</td>
        <td>{trade.status}</td>
        <td>{trade.quantity}</td>
        <td>{trade.unit_price}</td>
        <td>{trade.buy_price}</td>
        <td>{trade.trade_date}</td>
        <td>{trade.settlement_date}</td>
      </tr>
    ))}
  </tbody>
</table>

  </Row>
      
    )
  }