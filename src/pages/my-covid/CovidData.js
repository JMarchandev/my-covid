import React, { useEffect, useState } from 'react';
import MixedGraph from './MixedGraph';

const CovidData = (datas) => {
    const [isLoading, setIsLoading] = useState()
    const [graphData, setGraphData] = useState()

    useEffect(() => {
        setIsLoading(true)
        if (Object.values(datas)[0].AFG) {
            let countryDatas = Object.values(datas)[0].ALB
            let data = countryDatas.data
            let graphLabels = [];
            let graphTestData = [];
            let graphCaseData = [];

            for (let i = 0; i < data.length; i++) {
                if (data[i].new_tests) {
                    graphLabels.push(data[i].date)
                    graphTestData.push(data[i].new_tests)
                    graphCaseData.push(data[i].new_cases)
                }
            }
            setGraphData({graphLabels, graphTestData, graphCaseData})
            setIsLoading(false)
        }
    }, [datas])

    return <>
        {isLoading === true ?
            <p>Loading ...</p>
            : <MixedGraph graphData={graphData ? graphData : {}} />
        }
    </>
}

export default CovidData;