# To-Do List Application📝

Welcome to the To-Do List application! This project is designed to help you stay organized and boost productivity by allowing you to create and track your tasks.

## Tech Stack

- **Frontend**: React.js, HTML5, CSS3
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **Version Control**: Git, GitHub

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

Make sure you have the following software installed on your system:

- Node.js
- npm (Node Package Manager)
- PostgreSQL

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/To-Do-List.git
   cd To-Do-List
2. **Install dependencies:**


   ```bash
   npm install

3.**Set up the database:**

Ensure PostgreSQL is running on your local machine. 

3.**Create the database:**

Open the PostgreSQL shell.Then, run the following commands to create a new database and user (adjust as necessary):


   ```bash
   CREATE DATABASE todo_list;
CREATE USER yourusername WITH ENCRYPTED PASSWORD 'yourpassword';
GRANT ALL PRIVILEGES ON DATABASE todo_list TO yourusername;

   ```

4.**Install nodemon globally (if not already installed):**

Run database migrations (if any):
 ```bash
npm install -g nodemon
   ```
Ensure any required migrations are applied.

5.**Starting the server:**
Modify the index.js before starting
 ```bash
nodemon index.js
   ```
The application should now be running on http://localhost:3000.

---


**Usage**

Open your browser and navigate to http://localhost:3000.





