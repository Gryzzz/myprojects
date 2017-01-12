define([], function () {
  'use strict';


	  var data;
	  var character; 
	  
	  function Score() {
		  character = {name: "Robin", value: 15}; 
		}
		
	  Score.prototype.npcData = function(){
		  return data;
		};
		
	  Score.prototype.setNpcData = function(newData){
		  data = newData;
		};

	  Score.prototype.mainCharacterValue = function(){ 
		   return character.value;
	};
	
	  Score.prototype.addMainCharacterValue = function(bonus){ 
		   return character.value += bonus;
	};


 
  return Score;
});
