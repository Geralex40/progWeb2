class perro:
    __colorP="sin color"
    __dormir=True
    __peso:0

    def __init__(self, colorP, dormir, peso):
        self.__colorP=colorP
        self.__dormir=dormir
        self.__peso=peso

    def ladrar(self):
        self.__dormir=False
        print("El perro esta ladrando")

    def correr(self):
        self.__dormir=False
        self.__peso-=1
        print("El perro esta corriendo")

    def descansar(self):
        self.__dormir=True
        print("El perro esta durmiendo")

    def get_color(self):
        print(self.__colorP)
        return self.__colorP
    
    def get_dormir(self):
        print(self.__dormir)
        return self.__dormir
    
    def get_peso(self):
        print(self.__peso)
        return self.__peso

primerPerro= perro("blanquito",False,30)
primerPerro.get_color()
primerPerro.get_dormir()
primerPerro.get_peso()