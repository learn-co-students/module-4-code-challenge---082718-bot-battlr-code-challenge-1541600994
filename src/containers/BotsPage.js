import React from "react";
import BotCollection from './BotCollection.js'
import YourBotArmy from './YourBotArmy.js'

class BotsPage extends React.Component {
  state = {
    bots: [],
    armyBots: []
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(resp => resp.json())
      .then(data => this.setState({
        bots: data
      }))
  }

  addBotToArmy = (bot) => {
    let botId = bot.id
    if (this.state.armyBots.includes(bot)){
      let newArray = this.state.armyBots.filter(bot => bot.id !== botId)
      this.setState({
        armyBots: newArray
      })
    } else {
      let newArray = [...this.state.armyBots, bot]
        this.setState({
          armyBots: newArray
        })
      }
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.armyBots} />
        <BotCollection bots={this.state.bots} addBotToArmy={this.addBotToArmy}/>
      </div>
    );
  }
}
export default BotsPage;
