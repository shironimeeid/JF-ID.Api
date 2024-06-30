# Rest API JfestChart
<img src="https://telegra.ph/file/6c780c5a6cb2f6002af31.jpg" alt="API Icon" width="100">
<img src="http://readme-typing-svg.herokuapp.com?color=00FF00&center=true&vCenter=true&multiline=false&lines=Welcome+to+Rest+API" alt="Rest API JfestChart">

## Description

Rest API JfestChart is a Flask application designed to fetch, filter, and display event data from a Google Sheets URL. This project aims to provide a simple interface for users to search and view event information.

## Features

- **Fetch Events:** Retrieve event data from the provided API.
- **Search Functionality:** Search events based on specific columns (C, D, and E).
- **Responsive Design:** Styled using CSS for a modern and user-friendly interface.
- **Admin Panel:** Manage comments and user interactions.

## Getting Started

### Prerequisites

- Python 3.8+
- Flask
- Requests

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/RestAPI-JfestChart.git
    ```
2. Navigate to the project directory:
    ```bash
    cd RestAPI-JfestChart
    ```
3. Install the required packages:
    ```bash
    pip install -r requirements.txt
    ```

### Running the Application

1. Set the Flask application environment:
    ```bash
    export FLASK_APP=app.py
    ```
2. Run the Flask application:
    ```bash
    flask run
    ```
3. Open your web browser and navigate to `http://127.0.0.1:5000/`.

## Usage

The root endpoint serves the `index.html` page which includes a search bar to filter events.

## File Structure

