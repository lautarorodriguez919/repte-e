let valor_actual: number;
let valor_maxim: number;
let accX: number;
let accY: number;
// Repte 6
while (true) {
    valor_actual = input.temperature()
    valor_maxim = 50
    led.plotBarGraph(valor_actual, valor_maxim)
}
// Repte 7
let x = 2
let y = 2
while (true) {
    led.plot(x, y)
    basic.pause(50)
    basic.clearScreen()
    accX = input.acceleration(Dimension.X)
    accY = input.acceleration(Dimension.Y)
    if (accX <= 150 && x > 0) {
        x -= 1
    }
    
    if (accX >= 150 && x < 4) {
        x += 1
    }
    
    if (accY <= 150 && y > 0) {
        y -= 1
    }
    
    if (accY >= 150 && y < 4) {
        y += 1
    }
    
}
