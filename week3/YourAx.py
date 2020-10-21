import random

axs = ['wood','iron','silver','gold','diamond']
YourAx = random.choice(axs)

for i in range(3):
    print ('RiverGod: There are {} axs I found in the river.'.format(axs))
    guess = input('Which one is yours:')
    if guess != YourAx:
        print('RiverGod: Seem you lied, {} is not your ax!'.format(guess))
    else:
        break

if guess == YourAx:
    print('I am glad you are an honest person. Now, these four axs are yours! :)')
else:
    print('Unfortunatly, you lied too many times. So you lost your ax forever. :(')
