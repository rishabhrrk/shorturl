# URL Shortener

### Functionality
Enter a big URL of format `http://...` or `https://...` and get a short URL.
You can copy the short URL with `COPY` button.
To visit the original URL, click on the short URL.

### Assumptions
The program currently uses only a JavaScript object to store URLs.
If the URL has been previously shortened then a new short URL is not provided.
This is done to save memory.
The program does not use any database but when number of requests grow and so
does size of JavaScript object then an inmemory database like Redis can be
helpful.

### Inputs
URL of format `http://...` or `https://...` 

### Output
A short URL

### Steps to run the program
1. Clone the repository.
2. Install npm
3. Change PORT and port number in .env file
4. navigate to folder shorturl and run the following command.
`npm install && cd shorturlui && npm install && cd .. && npm run dev`
5. The UI will start on port 3000 and backend on 9000. This is hardcoded for now.
But can be changed. To change the PORT of backend simply change PORT in .env files
in root directory and shorturlui directory.
