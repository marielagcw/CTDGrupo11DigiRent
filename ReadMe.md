Enlaces externos:

[Planillas de Testing](https://docs.google.com/spreadsheets/d/1k1AiAqmZi4FrJQk3QOmqf_eKD9FvFtVPtt3BwrkxRGQ/edit#gid=1167556197)


Pasos para el deploy con Docker
Crear la imagen de Docker
1. Realizar un Package con Maven
2. Ejecutar en la terminal donde se ubica el package 
docker build -t repositorioDockerHub/Imagen . 
3. Subir la imagen a DockerHub 
 docker push repositorioDockerHub/Imagen
4. Probamos primero de manera local si funciona el .jar
 docker run -p 8080:8080 -e "SPRING_PROFILES_ACTIVE=prod" repositorioDockerHub/Imagen

 SPRING_PROFILES_ACTIVE es una variable de entorno que indica con cuál perfil de Spring queremos levantar el sistema.

 Una vez que funciona vamos a la EC2:

Pasos para el deploy en AWS
1. Conectarse a la instancia a través de las claves y SSH
2. Tenemos que tener instalado Docker en la EC2 y posicionarnos en la carpeta donde vamos a llamar a la imagen para ejecutarla. También necesitamos tener instalado Java.
3. Ejecutamos el comando
sudo docker pull repositorioDockerHub/Imagen
4. Ejecutamos el comando siguiente para hacer correr el código
sudo docker run -p 8080:8080 -e "SPRING_PROFILES_ACTIVE=prod" repositorioDockerHub/Imagen