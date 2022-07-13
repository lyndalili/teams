import React from 'react'
import './App.css';
import teams from './teams.json'
import TeamInfo from './component/TeamInfo'
import Counter from './component/Counter'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 10,
     
    }
  }

  handleMinusClick = () => {
    if (this.state.count > 1) {
      this.setState({
        count: this.state.count - 1
      })
    }
  }

  handlePlusClick = () => {
  if (this.state.count<teams.length) {
    this.setState({
          count: this.state.count + 1
        })
       }
        
      }
    
      
      
      render() {
      return (
      <div>
       
        <Counter
          count={this.state.count}
          increment={this.handlePlusClick}
          substract={this.handleMinusClick}
        />


        <section className="row gap-3 justify-content-center">
        <h1 className="mt-3 mb-3">The teams</h1>
          
          {teams.filter((team, i) => i < this.state.count).map(team =>  {

            return (
              
              <TeamInfo
                key={team.email}
                crestUrle={team.crestUrl}
                shortName={team.shortName}
                venue={team.venue}
                address={team.address}
                phone={team.phone}
                founded={team.founded}
          

                
              /> 
            )
          })}

          
        </section>
      </div>
    )
  }
}

export default App 
