import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from '../components/BotSpecs.js'

class BotCollection extends React.Component {
  state = {
    showPage: false,
    botShown: {}
  }

  clickForBotSpecs = (bot) => {
    this.setState({
      showPage: !this.state.showPage,
      botShown: bot
    })
  }

  goBack = () => {
    this.setState({
      showPage: false
    })
  }

  render(){
    console.log(this.props)
    let botCards = this.props.bots.map(bot => <BotCard key={bot.id} bot={bot} addBotToArmy={this.props.addBotToArmy} clickForBotSpecs={this.clickForBotSpecs}/>)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
        { this.state.showPage === true ? <BotSpecs bot={this.state.botShown} addBotToArmy={this.props.addBotToArmy} goBack={this.goBack} armyBots={this.props.armyBots}/> : botCards }
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
