import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  render(){
    console.log(this.props)
    let botCards = this.props.bots.map(bot => <BotCard key={bot.id} bot={bot} addBotToArmy={this.props.addBotToArmy} />)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
        {botCards}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
