# Wild Horizons

## Description

A dataset of the planet's most interesting places. This project provides an API to explore and discover unique destinations around the world.

## Key Features

*   **Detailed Information:** Access fun facts and descriptions for each location.
*   **Filtering:** Filter destinations by continent, country, and accessibility.
*   **API Endpoints:**
    *   `/api`: Retrieve all destinations or filter by query parameters.
    *   `/api/continent/<continent>`: Retrieve destinations by continent.
    *   `/api/country/<country>`: Retrieve destinations by country.

## Technologies Used

*   Node.js
*   Express (can be added for more robust routing)

## Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/0xYurii/Node.git
    cd Node
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

## Usage

1.  Start the server:

    ```bash
    npm start
    ```

2.  Access the API endpoints to retrieve data.  For example: `http://localhost:8000/api?continent=Asia&country=Japan`

## API Endpoints

*   **GET /api**

    *   Optional query parameters:
        *   `continent`: Filter by continent.
        *   `country`: Filter by country.
        *   `is_open_to_public`: Filter by accessibility (true/false).

    *   Example:
        `http://localhost:8000/api?continent=Africa&is_open_to_public=true`

*   **GET /api/continent/{continent}**
    *   Example: `http://localhost:8000/api/continent/Europe`

*   **GET /api/country/{country}**
    *   Example: `http://localhost:8000/api/country/USA`

## Data Source

The data is stored in `data/data.js`.

## Contact

*   [GitHub](https://github.com/0xYurii/Node)
*   [Bug reports](https://github.com/0xYurii/Node/issues)
