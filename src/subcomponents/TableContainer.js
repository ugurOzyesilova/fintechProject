import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import {MdOutlineSearch} from "react-icons/md"

const TableContainer = ({ data, setData }) => {
    const [searchWithCapitalTerm, setSearchWithCapitalTerm] = useState(""); //For search functionality
    const [searchTerm, setSearchTerm] = useState("");

    //console.log(data)

    let searchResult = [...data];
    if (searchWithCapitalTerm.length > 2) {
        searchResult = data.filter((value) => value.hasOwnProperty("capital") && value.capital.toLowerCase().includes(searchWithCapitalTerm.toLowerCase()) ? value : null);
    }
    else if (searchTerm.length > 2) {
        searchResult = data.filter((value) =>
            (
                (value.hasOwnProperty("capital") && value.capital.toLowerCase().includes(searchTerm.toLowerCase())) ||
                (value.hasOwnProperty("name") && value.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
                (value.hasOwnProperty("region") && value.region.toLowerCase().includes(searchTerm.toLowerCase())) ||
                (value.hasOwnProperty("nativeName") && value.nativeName.toLowerCase().includes(searchTerm.toLowerCase()))
            )
                ? value : null);
    }

    return (

        <div className="tablecontainer">
            <div className="search">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    placeholder="#searcheverything" />
                <MdOutlineSearch className="search__icon"/>
            </div>

            <Table striped hover variant="dark">
            
                <thead>
                    <tr className="same-col-widths">
                        <th className="name">Name</th>
                        <th className="capital">
                            <span>Capital</span>
                            <div className="capital__search">
                                <input
                                    type="text"
                                    value={searchWithCapitalTerm}
                                    onChange={e => setSearchWithCapitalTerm(e.target.value)}
                                    placeholder="#filtercapitals" />
                            </div>
                        </th>
                        <th className="region">Region</th>
                        <th className="flag">Flag</th>
                    </tr>
                </thead>
           

                <tbody style={{ borderTop: "none" }}>
                    {searchResult.map((val) => (
                        <tr >
                            <td>{val.name}</td>
                            <td >{val.capital}</td>
                            <td>{val.region}</td>
                            <td>
                                <img src={val.flag} alt="" />
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
            </Table>
        </div>

    )
}

export default TableContainer



/*


                <div className="nav__search">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        placeholder="Search..." />
                </div>


*/