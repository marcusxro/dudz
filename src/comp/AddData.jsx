import React from 'react'

const AddData = () => {
    return (
        <div className='addDataCon'>
            <div className="firstTable">
                <div className="tableName">DUDZCHAMCHOI INVENTORY</div>
                <div className="date">Date: <input type="date" /></div>
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
                        <td>MAALSA</td>
                        <td>60</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td>COCO PANDAN</td>
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
            <button>Add data</button>
        </div>
    )
}

export default AddData