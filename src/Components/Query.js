import React, { useState, useEffect } from 'react';  // Always have
import { _serializeObjectsFromPinName } from 'parse/lib/browser/LocalDatastore';

const Query = ({ objectId }) => {
    const [score, setScore] = useState()
    const [playerName, setPlayerName] = useState()

    const Parse = require('parse/node');
    //  const Parse = require('parse');
    //  Parse.initialize("f2lvxhmXFKXuxOGxLrpDheyGI5r1tGW6nDphushD");
    //  Parse.serverURL = 'http://localhost:1337/parse'
      Parse.initialize("APPLICATION_ID","","CDD_MASTER_KEY")
//      Parse.serverURL = 'http://193.122.128.128:1337/parse'
      Parse.serverURL = 'http://localhost:1337/parse'
    
      const GameScore = Parse.Object.extend("GameScore");
      const query = new Parse.Query(GameScore);
      // console.log(query)
    
      useEffect(() => {
        console.log('hit from UE')
    /*    query.find().then((results) => {
          console.log(results)
        }).catch((error) =>  {
          console.log("ERROR = %s",error)
        });*/
     //   query.find({"objectId":"iPXxXjpJSg"} /*{ useMasterKey: true }*/)
        query.get(objectId,{ useMasterKey: true })
        .then((gameScore) => {
          setPlayerName(gameScore.get("playerName"))
          setScore(gameScore.get("score"))
        } , (error) => {console.log(error)});
      }, [])

      const handleSubmit = (e) => {
        query.get(objectId,{ useMasterKey: true })
        .then((gameScore) => {
          setPlayerName(gameScore.get("playerName"))
          setScore(gameScore.get("score"))
        } , (error) => {console.log(error)});
      }

      if (score !== undefined) {
        return (
          <div className="App">
            <header className="App-header">
              <p>
              Player {playerName} has a score of {score}.
              </p>
              <br></br>
              <button type="submit" value="Submit" onClick={handleSubmit}>Submit</button>
            </header>
          </div>
        );
      } else {
        return(
          <div>
              <button type="submit" value="Submit" onClick={handleSubmit}>Submit</button>
            Loading
          </div>
        )
      }
}

export default Query;