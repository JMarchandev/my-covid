import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CovidData from './CovidData';

const MyCovid = () => {
    const [datas, setDatas] = useState([])

    useEffect(() => {
        axios.get('https://covid.ourworldindata.org/data/owid-covid-data.json')
            .then(res => { setDatas(res.data) })
            .catch(err => { console.log(err) })
    }, [])

    return <CovidData
        datas={datas}
    />
}
export default MyCovid;