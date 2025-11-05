export function fakeStock(){
    return {
        name:"QuantumLeap",
        sym:"QAUL",
        price:(Math.random()*3).toFixed(2),
        time:new Date().toLocaleTimeString()
    }
} 