import React,{Component} from 'react';
import  './App.css';
import Cards from './Components/Cards/Cards';
import CountryPicker from './Components/CountryPicker/CountryPicker';
import Charts from './Components/Charts/Charts';
import covidImg from './covid-19a.jpg';



const url="https://covid19.mathdro.id/api";
var apiResult={};

class App extends Component {


  constructor(props) {
    super(props)
      this.state={
            resultApi:{},
            recovered:'',
            confirmed:'',
            deaths:'',
            lastUpdate:'',
            countries:[],
            dailyData:[],
            countrySelected:'',
        }

        this.selectedCountry=this.selectedCountry.bind(this);
  }

 componentDidMount(){
   fetch(url).then(res=>
    res.json()).then(result=>
     {
      
       this.setState({resultApi:result,
                       recovered:result.recovered.value,
                      confirmed:result.confirmed.value,
                      deaths:result.deaths.value,
                      lastUpdate:result.lastUpdate.value,
                       });
     // console.log(this.state.resultApi)
       }
 );

    fetch(`${url}/countries`).then(res=>
      res.json()).then(result=>{
      //console.log(result);
      this.setState({countries:result.countries});
     //console.log(this.state.countries);
      
    })

    fetch(`${url}/daily`).then(res=>
      res.json()).then(result=>{
       this.setState({dailyData:result});
      // console.log(this.state.dailyData);
        
      })

   
     } 
 

 selectedCountry=(country)=>{
  {
  this.setState({
                countrySelected:country
  })
  console.log(this.state.countrySelected);
}
}

         

render(){
  return (
    <div className="app">
      <div className="image">
      <img src={covidImg} style={{height:"150px", width:"400px",margin:"20px"}}/>
      </div>
      <div className="cards">
        <div className="cardInfected">
            <Cards recovered={this.state.confirmed} title="Confirmed" date={this.state.lastUpdate} text="Number of active cases of covid-19" 
                    color="rgba(0,0,255,0.6)"/>
        </div>
        <div className="cardInfected">
            <Cards recovered={this.state.recovered} title="Recovered" date={this.state.lastUpdate} text="Number of recovered cases of covid-19" 
                    color="rgba(0,255,0,0.6)"/>
         </div>
         <div className="cardInfected">
            <Cards recovered={this.state.deaths} title="Deaths" date={this.state.lastUpdate} text="Number of death cases of covid-19" 
                      color="rgba(255,0,0.6)"/>
         </div>
     </div>
     
     <div className="countryPicker">
          <CountryPicker countries={this.state.countries} selectedCountry={this.selectedCountry} />
     </div>

     <div className="charts">    
      <Charts dailyData={this.state.dailyData} countryPicked={this.state.countrySelected}/>
      
       </div>
    </div>
  );
}
}

export default App;
