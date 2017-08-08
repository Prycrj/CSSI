def convertFahrenheitToKelvins(Fahrenheit):
    return (5* Fahrenheit + 2297) / 9.0

i=float (raw_input("Enter temperature in Fahrenheit"))


K= convertFahrenheitToKelvins(i)
print "temperature in Kelvins " , K



def convertKelvinsToCelsius(Kelvins):
    return Kelvins - 273

i=float (raw_input("Enter temperature in Kelvins"))

C= convertKelvinsToCelsius (i)
print "temperature in Celsius " , C
