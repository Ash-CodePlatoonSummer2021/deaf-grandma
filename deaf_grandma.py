def deaf_grandma():
    print("HEY KID!");
    goodbye=0;
    while(goodbye<2):
        inp = input("")
        if(inp!=inp.upper()):
            print("SPEAK UP, KID!")
        elif(inp==""):
            print("WHAT?!")
        elif(inp=="GOODBYE!"):
            if(goodbye):
                goodbye+=1
                print("LATER, SKATER!")
            print("LEAVING SO SOON?")
            goodbye+=1
        else:
            print("NO, NOT SINCE 1946!")

deaf_grandma()
