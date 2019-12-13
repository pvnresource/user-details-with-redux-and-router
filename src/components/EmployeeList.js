import React from 'react'

const DashBaord = (data) => {
    const { location: { state } } = data; return <div>
        <p>Welcome To Dashboard</p>
        <table className="table_data">
            <tbody>
            <tr className="table_heading">
                <th>ID</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Email</th>
                <th>Phone</th>
            </tr>
            {state.map((obj, key) => {
                return <tr key={key}>
                    <td>{obj.id}</td>
                    <td>{obj.name}</td>
                    <td>{obj.gender}</td>
                    <td>{obj.age}</td>
                    <td>{obj.email}</td>
                    <td>{obj.phoneNo}</td>
                </tr>
            })}
            </tbody>
        </table>
    </div>
}

export default DashBaord;