import React from 'react';
import Plot from 'react-plotly.js';

class Stats extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            chartDates: [],
            chartOpen: [],
            chartHigh: [],
            chartLow: [],
            chartClose: [],
            chartBBandsDates: [],
            chartBBandsMA: [],
            chartBBandsHigh: [],
            chartBBandsLow: [],
            chartRSIdates: [],
            chartRSIvalues: [],
            chartMAdates: [],
            chartMAvalues: [],
            maPeriod:60,
            symbol: "",
            title:"",
            bbandscounter:0,
            macounter:0
        }
    }

    componentDidMount() {
        this.fetchDataHandler();
        this.fetchRSI();
    }

    clickHandler=(e)=>{
        e.preventDefault()
        console.log("fetching...")
        this.fetchData()
        this.setState({title: this.state.symbol})
        // this.setState({symbol:""})
    }
    clickBbandsHandler=(e)=>{
        e.preventDefault()
        this.fetchBBands()
    }
    clickMAHandler=(e)=>{
        e.preventDefault()
        this.fetchMA()
    }
    fetchDataHandler=()=>{
        console.log("fetching...")
        this.fetchData()
    }

    handleChange=(value) =>{
        this.setState({symbol: value})
    }
    mavalueHandler = (value) =>{
        this.setState({maPeriod: value})
        this.fetchMA()
        console.log(this.state.maPeriod)
    }

    fetchMA = async() => {
        const api_key = 'VW5H23Y88OWOGQAR';
        let symbol = this.state.symbol;
        let counter = this.state.macounter;
        let period = this.state.maPeriod;
        let api_call = `https://www.alphavantage.co/query?function=SMA&symbol=${symbol}&interval=daily&time_period=${period}&series_type=open&apikey=${api_key}`
        let dates = [];
        let ma = [];
        if (counter % 2 ===0){
            await fetch(api_call).then(
                (res) => {
                    return res.json();
                }
            ).then(
                (data)=> {
                    console.log(data)
                    for (let key in data['Technical Analysis: SMA']){
                        dates.push(key);
                        ma.push(data['Technical Analysis: SMA'][key]['SMA'])
                    }
                    this.setState({
                        chartMAdates: dates,
                        chartMAvalues: ma
                    })
                    this.state.macounter ++; 
                }
            ).catch((err)=>{
                console.log(err)
                }    
            )   
        }
        else{
            this.setState({
                chartMAdates: [],
                chartMAvalues: [],
            })
            this.state.macounter ++; 
        }
        
    }

    fetchRSI = async() =>{
        const api_key = 'VW5H23Y88OWOGQAR';
        let symbol = this.state.symbol
        let api_call = `https://www.alphavantage.co/query?function=RSI&symbol=${symbol}&interval=daily&time_period=14&series_type=open&apikey=${api_key}`
        let dates = [];
        let rsi = [];
        await fetch(api_call).then(
            (res) => {
                return res.json();
            }
        ).then(
            (data)=> {
                console.log(data)
                for (let key in data['Technical Analysis: RSI']){
                    dates.push(key);
                    rsi.push(data['Technical Analysis: RSI'][key]['RSI'])
                }
                this.setState({
                    chartRSIdates: dates,
                    chartRSIvalues: rsi
                })
            }
        ).catch((err)=>{
            console.log(err)
            }    
        )
    }

    fetchData = async() => {
        const api_key = 'VW5H23Y88OWOGQAR';
        let symbol = this.state.symbol
        let api_call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&outputsize=full&apikey=${api_key}`
        let dates = [];
        let high = [];
        let low = [];
        let close = [];
        let open = []
        await fetch(api_call).then(
            (res) => {
                return res.json();
            }
        ).then(
            (data)=> {
                console.log(data)
                for (let key in data['Time Series (Daily)']){
                    dates.push(key);
                    open.push(data['Time Series (Daily)'][key]['1. open'])
                    high.push(data['Time Series (Daily)'][key]['2. high'])
                    low.push(data['Time Series (Daily)'][key]['3. low'])
                    close.push(data['Time Series (Daily)'][key]['4. close']);

                }
                this.setState({
                    chartDates: dates,
                    chartClose: close,
                    chartHigh: high,
                    chartLow: low,
                    chartOpen: open
                })
            }
        ).catch((err)=>{
            console.log(err)
            alert("Not a valid ticker symbol")
            }    
        )
        this.fetchRSI()
    }
    fetchBBands = async() => {
        const api_key = 'VW5H23Y88OWOGQAR';
        let symbol = this.state.symbol;
        let counter = this.state.bbandscounter
        let api_call = `https://www.alphavantage.co/query?function=BBANDS&symbol=${symbol}&interval=daily&time_period=20&series_type=close&nbdevup=2&nbdevdn=2&apikey=${api_key}`
        let bbandsdates = [];
        let bbandslow = [];
        let bbandshigh = [];
        let bbandsMA = [];

        if (counter % 2 ===0){
            await fetch(api_call).then(
                (res) => {
                    return res.json();
                }
            ).then(
                (data)=> {
                    console.log(data)
                    for (let key in data['Technical Analysis: BBANDS']){
                        bbandsdates.push(key);
                        bbandslow.push(data['Technical Analysis: BBANDS'][key]['Real Lower Band'])
                        bbandshigh.push(data['Technical Analysis: BBANDS'][key]['Real Upper Band'])
                        bbandsMA.push(data['Technical Analysis: BBANDS'][key]['Real Middle Band'])
                    }
                    
                    this.setState({
                        chartBBandsDates: bbandsdates,
                        chartBBandsLow: bbandslow,
                        chartBBandsMA: bbandsMA,
                        chartBBandsHigh: bbandshigh
                    })
                    this.state.bbandscounter ++;  
                }
            ).catch((err)=>{
                console.log(err)
                }    
            )
        }
        else{
            this.setState({
                chartBBandsDates: [],
                chartBBandsLow: [],
                chartBBandsMA: [],
                chartBBandsHigh: []
            })
            this.state.bbandscounter ++;  
        }
        
        

    }

  

    render() {
        let today = new Date()
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        
        return(
            <div>
                <form>
                    <input type="text" id="add-item" value={this.state.symbol} onChange={e => this.handleChange(e.target.value)} placeholder="Ticker Symbol"/>
                    <button id="submit" onClick={this.clickHandler}>Search</button>
                </form>
                <div id="options">
                    <button id="bbands" onClick={this.clickBbandsHandler}>Bollinger Bands</button>
                    <button id="ma" onClick={this.clickMAHandler}>Moving Average</button>
                    <label id="periodlabel" htmlFor="period">N:</label>
                    <input type="number" id="period" name="period" min="1" max="300" value={this.state.maPeriod} onChange={e => this.mavalueHandler(e.target.value)}/>

                </div>
                
                <Plot
                    data={[
                    {
                        x: this.state.chartDates,
                        close: this.state.chartClose,
                        decreasing: {line: {color: '#FF0000'}}, 

                        high:this.state.chartHigh,
                        increasing: {line: {color: '#008000'}}, 

                        low:this.state.chartLow,
                        open: this.state.chartOpen,
                        type: 'candlestick',
                        xaxis: 'x', 
                        yaxis: 'y',
                        name: "OHLC"
                        
                    },
                    {
                        type:'scatter', mode:'lines', x:this.state.chartBBandsDates,
                        y:this.state.chartBBandsHigh, name:"BBand Upper", marker:{color:'grey'}
                    },
                    {
                        type:'scatter', mode:'lines', x:this.state.chartBBandsDates,
                        y:this.state.chartBBandsLow, name:"BBand Lower", marker:{color:'grey'}
                    },
                    {
                        type:'scatter', mode:'lines', x:this.state.chartBBandsDates,
                        y:this.state.chartBBandsMA, name:"20 Day Moving Average", marker:{color:'pink'}
                    },
                    {
                        type:'scatter', mode:'lines', x:this.state.chartMAdates,
                        y:this.state.chartMAvalues, name: `${this.state.maPeriod} Day Moving Average`, marker:{color:'lightblue'}
                    }
                    ]}
                    layout={ {width: 820, height: 540, title: `${this.state.title.toLocaleUpperCase()}`,plot_bgcolor:"#000000", yaxis:{title:"Price (USD)"}, xaxis: { 
                        range: ['2020-01-01', date],
                        rangeslider:{},
                        rangeselector: {
                            x: 0,
                            y: 1.2,
                            xanchor: 'left',
                            font: {size:8},
                            buttons: [{
                                step: 'month',
                                stepmode: 'backward',
                                count: 1,
                                label: '1 month'
                            }, {
                                step: 'month',
                                stepmode: 'backward',
                                count: 6,
                                label: '6 months'
                            }, {
                                step: 'all',
                                label: 'All dates'
                            }]
                          }
                      }} }
                />
                <Plot
                    data={[
                    {
                        x: this.state.chartRSIdates,
                        y: this.state.chartRSIvalues,
                        
                        type: 'scatter',
                        mode:"lines",
                        xaxis: 'x', 
                        yaxis: 'y',
                        name: "RSI"
                        
                    },
                    
                    ]}
                    layout={ {width: 820, height: 440, title: `${this.state.title.toLocaleUpperCase()} Relative Strength Index`,plot_bgcolor:"#000000", yaxis:{title:"RSI Value"}, xaxis: { 
                        range: ['2020-01-01', date],
                        rangeslider:{},},
                        
                        shapes: [
                            {
                                type: 'line',
                                xref: 'paper',
                                x0: 0,
                                y0: 70,
                                x1: 1,
                                y1: 70,
                                line:{
                                    color: 'red',
                                    width: 2,
                                    dash:'dot'
                                },
                            },
                            {
                                type: 'line',
                                xref: 'paper',
                                x0: 0,
                                y0: 30,
                                x1: 1,
                                y1: 30,
                                line:{
                                    color: 'red',
                                    width: 2,
                                    dash:'dot'
                                }
                            }

                        ]
                    }
                } 
                />
            </div>
        )
    }
}
export default Stats;

