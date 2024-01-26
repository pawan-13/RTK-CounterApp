import React, { useState } from 'react';
const Index = () => {
    const[country, setCountry] = useState([]);
    const countries = [
        {
            name: 'India', value: 'IN', cities: [
                'Delhi',
                'Mumbai'
            ]
        },
        {
            name: 'Pak', value: 'PK', cities: [
                'Lohore',
                'karachi'
            ]
        },
        {
            name: 'Bangladesh', value: 'BG', cities: [
                'Dhaka',
                'Chittagong'
            ]
        },
    ];
    return (
        <>
            <div>
                <h2>This is select box for country</h2>
                <select value={country} onChange={(e) => {
                    console.log(e.target.value);
                    setCountry(e.target.value);
                }}>
                    {countries.map((item,index) => {
                        return (
                            <option value={index}>{item.name}</option>
                        )
                    })}
                </select>&nbsp;&nbsp;
                <select value={country}>
                    {countries[country] && countries[country].cities.map((item, index) => {
                        return (
                            <option value={index}>{item}</option>
                        )
                    })}
                </select>
            </div>
        </>
    )
}
export default Index;