#Example of Creating A Box

def customBox(width,height):
 box =""
 for i in range(width): #range(0,width)
  box = box + "# "


 for i in range(height):
    print(box)

customBox(8,10)

#------------------------------------------------------------------------------------------------------------------------------
# Example of Modification with Inner Empty

tbborder= "########"
lrborder= "##    ##"

for i in range(0,8):
     if i in [2,3,4,5]:
      print lrborder
     else:
      print tbborder

print

'''
for i in range(2):
  print tbborder
for i in range(4):
  print lrborder
for i in range(2):
  print tbborder
'''
#------------------------------------------------------------------------------------------------------------------------------
#Example of Modification with change in width and height
def customBox3(width,height):

  tbborder= "#"* width
  lrborder= '##'+' '*(width-4)+ '##'

  for i in range(2):
    print tbborder
  for i in range(height-4):
    print lrborder
  for i in range(2):
    print tbborder
customBox3(80,30)

#------------------------------------------------------------------------------------------------------------------------------
#Example of Modication with numbers and letters on outside and empty middle

def customBox4 (width,height):
    tbborder= "#########"
    lrborder="#         #"
print('  123456  ')
print(tbborder)
for i in range(8):
  print (chr(65+i)+ lrborder)
print (tbborder)
#-------------------------------------------------------------------------------------------------------------------------------
#Rayona's Attempt at customBox4

def customBox4():

 tbborder="#######################"
 letters=('A1 A2 A3 A4 A5 A6 A7 A8')
 letters2=('B1 B2 B3 B4 B5 B6 B7 B8')


 print(tbborder)
 print(letters)
 print(letters2)
customBox4()

#-------------------------------------------------------------------------------
#Example of Modification with numbers and letters inside box
info = ""

info= ("#" * 27) + '\n'
for j in range (8):
  info=info +"# "
  for i in range(1,9):
   info=info + chr(65+j) +str(i)
   info = info + " "
   #if i!=8:
  info=info + "#\n"
info= info + ("#" * 27)

print(info)















'''
print "{0} and {1} {2} up the {3}".format ("jack", "jill", "ran","hill")
'''
