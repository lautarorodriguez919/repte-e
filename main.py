#Repte 6
while True:
    valor_actual=input.temperature()
    valor_maxim=50
    led.plot_bar_graph(valor_actual, valor_maxim)

#Repte 7
x=2
y=2
while True:
    led.plot(x, y)
    basic.pause(50)
    basic.clear_screen()
    accX=input.acceleration(Dimension.X)
    accY=input.acceleration(Dimension.Y)
    if accX<=150 and x>0:
        x-=1
    if accX>=150 and x<4:
        x+=1
    if accY<=150 and y>0:
        y-=1
    if accY>=150 and y<4:
        y+=1
        