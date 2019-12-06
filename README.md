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

To run the application docker node we have to either run the server and the client independantly using docker run or run them both using docker-compose.
Run server command:

         docker run -p 5000:5000 backEnd
         
Run client command:

         docker run -p 3000:3000 frontEnd

Run both command:

         docker-compose up
         
The dependencies used are found in package.json file.
While running the application with node, the dependencies can be installed in both client and server using the command:

         npm i
         
When running the application with docker, the dependencies are automatically installed.

At local development, we use keys_dev. At production, the website uses environment variable defined at heroku.

The website live version link:

         https://guc-calendar.netlify.com/
