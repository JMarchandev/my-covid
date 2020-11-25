import React from 'react';
import { Bar } from 'react-chartjs-2'

const MixedGraph = (graphData) => {
    const datas = {
        labels: graphData.graphData.graphLabels || '',
        datasets: [
            {
                label: 'Test',
                type: 'bar',
                fill: false,
                borderColor: '#d9534f',
                backgroundColor: '#d9534f',
                pointBorderColor: '#d9534f',
                pointBackgroundColor: '#d9534f',
                pointHoverBackgroundColor: '#d9534f',
                pointHoverBorderColor: '#d9534f',
                yAxisID: 'y-axis-2',
                data: graphData.graphData.graphTestData || ''
            },
            {
                label: 'Case',
                type: 'bar',
                fill: false,
                backgroundColor: '#0275d8',
                borderColor: '#0275d8',
                hoverBackgroundColor: '#0275d8',
                hoverBorderColor: '#0275d8',
                yAxisID: 'y-axis-1',
                data: graphData.graphData.graphCaseData || ''
            }
        ]
    }

    const options = {
        responsive: true,
        tooltips: {
            mode: 'label'
        },
        elements: {
            line: {
                fill: false
            }
        },
        scales: {
            xAxes: [
                {
                    display: true,
                    gridLines: {
                      display: false
                    },
                
                    labels: graphData.graphData.graphLabels || '',
                  }
            ],
            yAxes: [
                {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                    gridLines: {
                        display: false
                    },
                    labels: {
                        show: true
                    }
                },
                {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    id: 'y-axis-2',
                    gridLines: {
                        display: false
                    },
                    labels: {
                        show: true
                    }
                }
            ]
        }
    };




    return (
        <>
            <Bar
                data={datas}
                options={options}
            />
        </>
    )
}

export default MixedGraph;