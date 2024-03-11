import React, { useState } from 'react'
import AddData from './AddData'

const Table = () => {
    const [show, setShow] = useState(false)
    return (
        <div className='TableCon'>
            <div className="firstTable">
                <div className="tableName">DUDZCHAMCHOI INVENTORY</div>
                <div className="date">Date: </div>
                <div className="user">user: </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>RICE NAME</th>
                        <th>PRICE PER KILO</th>
                        <th>PRODUCT SOLD</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>MALAGKIT</td>
                        <td>60</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td>MALAGKIT</td>
                        <td>60</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td>MALAGKIT</td>
                        <td>60</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td>MALAGKIT</td>
                        <td>60</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td>TOTAL SALES</td>
                        <td>200</td>
                        <td>200</td>
                    </tr>
                </tbody>
            </table>
            <table className='secTable'>
                <tbody>
                    <tr>
                        <td>expences</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>Total sales today</td>
                        <td>0</td>
                    </tr>
                </tbody>
            </table>
            <div className="addDataButton" onClick={() => {setShow(!show)}}>
                <button>Add Data</button>
            </div>
            {show ? <AddData /> : <></>}
        </div>
    )
}

export default Table