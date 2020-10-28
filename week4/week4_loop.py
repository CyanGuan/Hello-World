from turtle import *
import random

pencolor('white')
goto(0,200)
colors = [(1, 0.38, 0.27), (1, 0.71, 0.75), (1, 1, 0.5), (0.68, 0.93, 0.93), (0.88, 0.88, 0.88)]
pensize(0)

angel = 60
distance = 50

for i in range(10):
    for i in range(10):
        for i in range(3):
            fill = random.choice(colors)
            fillcolor(fill)
            pencolor((1, 0.85, 0.7))
            begin_fill()
            forward(50)
            left(60)
            forward(50)
            left(60)
            forward(50)
            left(60)
            forward(50)
            right(60)
            end_fill()

        forward(50)
        right(60)
        forward(50)

    forward(50)
    right(angel + 60)
    forward(distance + 50)
