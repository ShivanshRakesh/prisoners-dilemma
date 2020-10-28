axios.get("/response/getResponses")
    .then(res => {
        populateCharts(res['data']);
    })
    .catch(err => { alert('Some error occurred. Please try again. \nRefer to console logs for details.'); console.log(err); });

function populateCharts(resp) {

    let totalCoopWhenIntel = 0;
    let totalBetrayWhenIntel = 0;
    let totalCoopWhenNotIntel = 0;
    let totalBetrayWhenNotIntel = 0;

    resp.forEach(e => {
        totalCoopWhenIntel += e['coopWhenIntel'];
        totalBetrayWhenIntel += e['betrayWhenIntel'];
        totalCoopWhenNotIntel += e['coopWhenNotIntel'];
        totalBetrayWhenNotIntel += e['betrayWhenNotIntel'];
    });

    // CHART-1 : ASSUMPTION THAT THE OTHER IS INTELLIGENT
    new Chart(document.getElementById('chart1').getContext('2d'), {
        type: 'bar',
        data: {
            labels: ['Total Cooperations', 'Total Betrayals'],
            datasets: [{
                barPercentage: 0.5,
                label: '',
                data: [totalCoopWhenIntel, totalBetrayWhenIntel],
                backgroundColor: [
                    'rgba(20, 20, 20, 0.9)',
                    'rgba(160, 160, 160, 0.9)',
                ],
                borderColor: [
                    'rgba(20, 20, 20, 1)',
                    'rgba(160, 160, 160, 1)',
                ],
                borderWidth: 1,
            }]
        },
        options: {
            title: {
                display: true,
                text: 'When other person is assumed to be INTELLIGENT'
            },
            legend: {
                display: false,
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        suggestedMax: 460
                    }
                }]
            }
        }
    });

    // CHART-2 : ASSUMPTION THAT THE OTHER IS NOT INTELLIGENT
    new Chart(document.getElementById('chart2').getContext('2d'), {
        type: 'bar',
        data: {
            labels: ['Total Cooperations', 'Total Betrayals'],
            datasets: [{
                barPercentage: 0.5,
                label: '',
                data: [totalCoopWhenNotIntel, totalBetrayWhenNotIntel],
                backgroundColor: [
                    'rgba(20, 20, 20, 0.9)',
                    'rgba(160, 160, 160, 0.9)',
                ],
                borderColor: [
                    'rgba(20, 20, 20, 1)',
                    'rgba(160, 160, 160, 1)',
                ],
                borderWidth: 1,
            }]
        },
        options: {
            title: {
                display: true,
                text: 'When other person is assumed to be NOT INTELLIGENT'
            },
            legend: {
                display: false,
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        suggestedMax: 460
                    }
                }]
            }
        }
    });

    // CHART-3 : ORIGINAL CASE - INTELLIGENT
    new Chart(document.getElementById('chart3').getContext('2d'), {
        type: 'bar',
        data: {
            labels: ['Cooperations', 'Betrayals'],
            datasets: [{
                barPercentage: 0.5,
                label: '',
                data: [resp[0]['coopWhenIntel'], resp[0]['betrayWhenIntel']],
                backgroundColor: [
                    'rgba(20, 20, 20, 0.9)',
                    'rgba(160, 160, 160, 0.9)',
                ],
                borderColor: [
                    'rgba(20, 20, 20, 1)',
                    'rgba(160, 160, 160, 1)',
                ],
                borderWidth: 1,
            }]
        },
        options: {
            title: {
                display: true,
                text: 'When other person is assumed to be INTELLIGENT'
            },
            legend: {
                display: false,
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        suggestedMax: 140
                    }
                }]
            }
        }
    });

    // CHART-4 : ORIGINAL CASE - NOT INTELLIGENT
    new Chart(document.getElementById('chart4').getContext('2d'), {
        type: 'bar',
        data: {
            labels: ['Cooperations', 'Betrayals'],
            datasets: [{
                barPercentage: 0.5,
                label: '',
                data: [resp[0]['coopWhenNotIntel'], resp[0]['betrayWhenNotIntel']],
                backgroundColor: [
                    'rgba(20, 20, 20, 0.9)',
                    'rgba(160, 160, 160, 0.9)',
                ],
                borderColor: [
                    'rgba(20, 20, 20, 1)',
                    'rgba(160, 160, 160, 1)',
                ],
                borderWidth: 1,
            }]
        },
        options: {
            title: {
                display: true,
                text: 'When other person is assumed to be NOT INTELLIGENT'
            },
            legend: {
                display: false,
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        suggestedMax: 140
                    }
                }]
            }
        }
    });

    // CHART-5 : REDUCED PENALTY - INTELLIGENT
    new Chart(document.getElementById('chart5').getContext('2d'), {
        type: 'bar',
        data: {
            labels: ['Cooperations', 'Betrayals'],
            datasets: [{
                barPercentage: 0.5,
                label: '',
                data: [resp[1]['coopWhenIntel'], resp[1]['betrayWhenIntel']],
                backgroundColor: [
                    'rgba(20, 20, 20, 0.9)',
                    'rgba(160, 160, 160, 0.9)',
                ],
                borderColor: [
                    'rgba(20, 20, 20, 1)',
                    'rgba(160, 160, 160, 1)',
                ],
                borderWidth: 1,
            }]
        },
        options: {
            title: {
                display: true,
                text: 'When other person is assumed to be INTELLIGENT'
            },
            legend: {
                display: false,
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        suggestedMax: 140
                    }
                }]
            }
        }
    });

    // CHART-6 : REDUCED PENALTY - NOT INTELLIGENT
    new Chart(document.getElementById('chart6').getContext('2d'), {
        type: 'bar',
        data: {
            labels: ['Cooperations', 'Betrayals'],
            datasets: [{
                barPercentage: 0.5,
                label: '',
                data: [resp[1]['coopWhenNotIntel'], resp[1]['betrayWhenNotIntel']],
                backgroundColor: [
                    'rgba(20, 20, 20, 0.9)',
                    'rgba(160, 160, 160, 0.9)',
                ],
                borderColor: [
                    'rgba(20, 20, 20, 1)',
                    'rgba(160, 160, 160, 1)',
                ],
                borderWidth: 1,
            }]
        },
        options: {
            title: {
                display: true,
                text: 'When other person is assumed to be NOT INTELLIGENT'
            },
            legend: {
                display: false,
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        suggestedMax: 140
                    }
                }]
            }
        }
    });

    // CHART-7 : COOP FAVORED - INTELLIGENT
    new Chart(document.getElementById('chart7').getContext('2d'), {
        type: 'bar',
        data: {
            labels: ['Cooperations', 'Betrayals'],
            datasets: [{
                barPercentage: 0.5,
                label: '',
                data: [resp[2]['coopWhenIntel'], resp[2]['betrayWhenIntel']],
                backgroundColor: [
                    'rgba(20, 20, 20, 0.9)',
                    'rgba(160, 160, 160, 0.9)',
                ],
                borderColor: [
                    'rgba(20, 20, 20, 1)',
                    'rgba(160, 160, 160, 1)',
                ],
                borderWidth: 1,
            }]
        },
        options: {
            title: {
                display: true,
                text: 'When other person is assumed to be INTELLIGENT'
            },
            legend: {
                display: false,
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        suggestedMax: 140
                    }
                }]
            }
        }
    });

    // CHART-8 : COOP FAVORED - NOT INTELLIGENT
    new Chart(document.getElementById('chart8').getContext('2d'), {
        type: 'bar',
        data: {
            labels: ['Cooperations', 'Betrayals'],
            datasets: [{
                barPercentage: 0.5,
                label: '',
                data: [resp[2]['coopWhenNotIntel'], resp[2]['betrayWhenNotIntel']],
                backgroundColor: [
                    'rgba(20, 20, 20, 0.9)',
                    'rgba(160, 160, 160, 0.9)',
                ],
                borderColor: [
                    'rgba(20, 20, 20, 1)',
                    'rgba(160, 160, 160, 1)',
                ],
                borderWidth: 1,
            }]
        },
        options: {
            title: {
                display: true,
                text: 'When other person is assumed to be NOT INTELLIGENT'
            },
            legend: {
                display: false,
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        suggestedMax: 140
                    }
                }]
            }
        }
    });

    // CHART-9 : UNKNOWN PUNISHMENT - INTELLIGENT
    new Chart(document.getElementById('chart9').getContext('2d'), {
        type: 'bar',
        data: {
            labels: ['Cooperations', 'Betrayals'],
            datasets: [{
                barPercentage: 0.5,
                label: '',
                data: [resp[3]['coopWhenIntel'], resp[3]['betrayWhenIntel']],
                backgroundColor: [
                    'rgba(20, 20, 20, 0.9)',
                    'rgba(160, 160, 160, 0.9)',
                ],
                borderColor: [
                    'rgba(20, 20, 20, 1)',
                    'rgba(160, 160, 160, 1)',
                ],
                borderWidth: 1,
            }]
        },
        options: {
            title: {
                display: true,
                text: 'When other person is assumed to be INTELLIGENT'
            },
            legend: {
                display: false,
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        suggestedMax: 140
                    }
                }]
            }
        }
    });

    // CHART-10 : UNKNOWN PUNISHMENT - NOT INTELLIGENT
    new Chart(document.getElementById('chart10').getContext('2d'), {
        type: 'bar',
        data: {
            labels: ['Cooperations', 'Betrayals'],
            datasets: [{
                barPercentage: 0.5,
                label: '',
                data: [resp[3]['coopWhenNotIntel'], resp[3]['betrayWhenNotIntel']],
                backgroundColor: [
                    'rgba(20, 20, 20, 0.9)',
                    'rgba(160, 160, 160, 0.9)',
                ],
                borderColor: [
                    'rgba(20, 20, 20, 1)',
                    'rgba(160, 160, 160, 1)',
                ],
                borderWidth: 1,
            }]
        },
        options: {
            title: {
                display: true,
                text: 'When other person is assumed to be NOT INTELLIGENT'
            },
            legend: {
                display: false,
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        suggestedMax: 140
                    }
                }]
            }
        }
    });

}