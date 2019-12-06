# Student-Calendar
The website aims to organize the student's life by informing him about the deadlines and the events happening.
A professor updates the deadlines to his course.
Once a student sign in, all the courses' deadlines, he's enrolled in, are displayed.

To run the application through node we have to run the server and the client.
Run server command:

         cd server
         node server
   
Run client command:

         cd client
         cd calendar
         npm start
   
The server runs on port 5000.
The client runs on port 3000.

To run the application docker node:

         docker-compose up
         
The dependencies used are found in package.json file.
While running the application with node, the dependencies can be installed in both client and server using the command:

         npm i
         
when running the application with docker, the dependencies are automatically installed.
