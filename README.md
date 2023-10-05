# Voting App

## Overview
This is a simple voting application where users can cast their votes and view the results in real-time. The backend is built with FastAPI and the frontend is built with React.

## Features
- Real-time vote count updates using WebSockets.
- Users can cast their votes for either 'Yes' or 'No'.
- Users can view all the votes.
- Users can view the count of 'Yes' and 'No' votes.

## Getting Started

### Prerequisites
- Make sure you have Node.js installed.
- Make sure you have Python installed.

### Installation
1. Clone the repository:

```git clone <repository-url>```

2. Navigate to the project directory:

```cd <project-directory>```

3. Install the required Python packages:

```pip install -r requirements.txt```

4. Install the required Node packages:

```
cd frontend
npm install
```

### Running the Application
1. Start the backend server:

```uvicorn main:vote_app --reload```

2. Start the frontend server:

```
cd frontend
npm start
```

3. Now you can access the application at http://localhost:3000.

### Usage
- To cast a vote:

1. Navigate to the 'Vote' page.
2. Select either 'Yes' or 'No' from the dropdown.
3. Click the 'Submit' button to cast your vote.

- To view votes:

1. Navigate to the 'View Votes' page.
2. Click the 'Fetch Votes' button to get the latest votes.

- To view the vote count:

1. Navigate to the 'Vote' page.
2. The count of 'Yes' and 'No' votes will be updated in real-time.

### Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

### License
MIT