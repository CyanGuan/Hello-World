print ("Welcome to Beauty and the Beast!")
print ("Answer the questions below to play.")
print ("-----------------------------------")

adjective1 = raw_input("Enter an adjective: ")
yourJob = raw_input("Enter your job name: ")
num1 = raw_input("Enter a random number: ")
num2 = raw_input("Enter a random number again: ")
num3 = raw_input("Enter one more number: ")
subject = raw_input("Enter a subject you dislike: ")
adjective2 = raw_input("Enter an adjective: ")
yourNickname = raw_input("Enter your nickname: ")
adjective3 = raw_input("Enter an adjective again: ")
feeling = raw_input("Enter your feeling right now: ")

story = "There was once a very " + adjective1\ + yourJob ", who had " + num1 + " children, " + num2 + " sons, and " + num3 + \
"daughters; being a man of sense, he spared no cost for their " + subject + ", but gave them all kinds of masters. His daughters were extremely"\
+ adjective2 + ", especially the youngest. When she was little everybody admired her, and called her"\
+ yourNickname + "; so that, as she grew up, she still went by the name of " + adjective3 + ", which made her sisters very " + feeling + "."

print (story)
