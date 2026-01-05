export const planets = [
  { id: "coruscant", name: "Coruscant", x: 0, y: 0, owner: "Republic", oversector: "Core" },
  { id: "kashyyyk", name: "Kashyyyk", x: 30, y: -20, owner: "Republic", oversector: "Mid Rim" },
  { id: "tatooine", name: "Tatooine", x: -50, y: 40, owner: "Hutt Cartel", oversector: "Outer Rim" }
];

export const oversectors = [
  { name: "Core", color: "#3b82f6", points: [[-20,-20],[20,-20],[20,20],[-20,20]] },
  { name: "Mid Rim", color: "#22c55e", points: [[20,-40],[80,-40],[80,20],[20,20]] },
  { name: "Outer Rim", color: "#eab308", points: [[-100,20],[100,20],[100,100],[-100,100]] }
];
