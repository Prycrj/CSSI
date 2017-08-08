class Box:
  def __init__ (self, width, height, border):
    self.width= width
    self.height= height
    self.border= border


  def getWidth(self):
    return (self.width)

  def getHeight(self):
    return (self.height)

  def getBorder(self):
    return (self.border)

  def FillBox(self):
   box =""
   for i in range(self.width): #range(0,width)
      box = box + "# "


   for i in range(self.height):

        print(box)


  def BorderBox(self):

     box = ""
     tbborder = ("#"*self.width)

     box_middle = "#" * self.border + " "*(self.width - 2*(self.border)) + "#"*self.border

     for i in range(self.height):
       if(i < self.border):
        print(tbborder)


     b = (box_middle + "\n")*(self.height-(self.border*2)-1) + box_middle
     print b
     print(tbborder+"\n")*self.border




Box1= Box(13,21,2)
Box1.FillBox()
Box2=Box(15,15,5)
print("\n")
Box2.BorderBox()
