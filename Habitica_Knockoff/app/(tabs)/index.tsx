import { useState } from 'react';
import { Button, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {

  function calculateXP(level:number) {
    return 100 * level; 
  }
  const addxp = (amount:number) => {setxp(xp + amount); };
  
  const gainGold = (amount:number) => {
    return player.gold + amount;
  };
  const earnGold = () => {
    setGold(gold + 10);  // Increases gold by 10
  };
  
  const loseHP = () => {
    if (hp > 0) {
      setHp(hp - 5);
    }
  };

  const levelUp = () => {
    if (gold >= 100 && xp >= nextLevelXP) {
      setLevel(level + 1);
      setGold(gold - 100);
      setHp(50); // Restore HP on level up
      setNextLevelXP(calculateXP(level + 1)); // Update XP needed for next level
    }
  };

  const playerName = "Hero";
  const [xp,setxp] = useState(0);
  const [gold, setGold] = useState(100);  // [currentValue, functionToUpdate]
  const [hp, setHp] = useState(50);
  const [level, setLevel] = useState(1);
  
  const tasks = ["Go to gym", "Study DSA", "Attend lecture"];
  const [task_no, set_task] = useState(0);
  const xprewards = [5, 10, -1]; // going lectures bad lol!
  const player = {
    name: "Krish Garg",
    level: 1,
    hp: 50,
    gold: 100,
  };

  const [nextLevelXP, setNextLevelXP] = useState(100);
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24}}>⚔️ Task Quest RPG</Text>
      <Text>Player: {playerName}</Text>
      <text>XP: {xp}</text>
      <Text>❤️ HP: {hp}/50</Text>      
      <Text>Level: {level}</Text>
      <Text>XP Needed: {nextLevelXP}</Text>
      <Text>💰 Gold: {gold}</Text>
      <Text>Next Task: {tasks[task_no]}</Text>
      <Button title={`Complete Task (+10 Gold and +${xprewards[task_no]} XP)`} 
        onPress={() => {
          earnGold(); 
          addxp(xprewards[task_no]);
          set_task((task_no + 1) % tasks.length);  // Move to next task, loop back to first after last 
          }
        } />
      <Button title="Miss Daily (-5 HP)" onPress={loseHP} color="red" />
      <Button title="Level Up (100 Gold)" 
        onPress={levelUp} 
        color="green" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});