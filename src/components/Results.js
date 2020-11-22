import React from 'react'

function Results(props) {
    return (
      <table style={{width: "100%" }}>
        <thead style= {{border: "2px solid black", backgroundColor: "PaleVioletRed"}}>
        <tr>
          <th style={{border: "2px solid black", textAlign: "center"}}><button className='btn' style={{backgroundColor: "PaleVioletRed"}} onClick={props.sortFirstName} >First Name</button></th>
          <th style={{border: "2px solid black", textAlign: "center"}}><button className='btn' style={{backgroundColor: "PaleVioletRed"}} onClick={props.sortLastName}>Last Name</button></th>
          <th style={{border: "2px solid black", textAlign: "center"}}>Email</th>
          <th style={{border: "2px solid black", textAlign: "center"}}>City</th>
          <th style={{border: "2px solid black", textAlign: "center"}}>Country</th>
          </tr>
        </thead>
        <tbody style={{backgroundColor: "lightpink", color: "palevioletred", fontWeight: "bolder"}}>
            {props.list.map(user => 
                <tr style={{border: "2px solid PaleVioletRed"}}>
            <td style={{borderRight: "2px solid PaleVioletRed", textAlign: "center"}}>{user.name.first}</td>
            <td style={{borderRight: "2px solid PaleVioletRed", textAlign: "center"}}>{user.name.last}</td>
            <td style={{borderRight: "2px solid PaleVioletRed", textAlign: "center"}}>{user.email}</td>
            <td style={{borderRight: "2px solid PaleVioletRed", textAlign: "center"}}>{user.location.city}</td>
            <td style={{textAlign: "center"}}>{user.location.country}</td>            
            </tr>
            )}
      </tbody>
      </table>
    );
  }

export default Results