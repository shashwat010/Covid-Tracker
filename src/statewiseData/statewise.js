import React, { useEffect, useState } from 'react'

const Statewise = () => {
    const [data, setData] = useState([]);
    const getCovidData = async () => {
        const res = await fetch('https://api.covid19india.org/data.json');
        const actualData = await res.json();
        setData(actualData.statewise);
    }
    useEffect(() => {
        getCovidData();
    }, [])
    const myStyle={
        overflow: "scroll",
        height:"400px",
        width:"1200px"
    }
    return (
        <>
            <div className="container-fluid mt-5">
                <h1 className="mb-5 text-center"><span className="font-weight-bold">INDIA</span > COVID-19 Dashboard</h1>
            </div>
            <div className="mx-5" style={myStyle}>
                <table className="table table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>State</th>
                            <th>Confirmed</th>
                            <th>Recovered</th>
                            <th>Deaths</th>
                            <th>Active</th>
                            <th>Updated</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((elem, idx) => {
                                return (
                                    <tr key={idx}>
                                        <th>{elem.state}</th>
                                        <td>{elem.confirmed}</td>
                                        <td>{elem.recovered}</td>
                                        <td>{elem.deaths}</td>
                                        <td>{elem.active}</td>
                                        <td>{elem.lastupdatedtime}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Statewise;

