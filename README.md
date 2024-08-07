# Dentist Patient Records API

This project is a RESTful API for managing patient records in a dental clinic. The API allows for the creation, retrieval, updating, and deletion of patient records, including detailed information about their teeth health.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete patient records.
- **Patient Data**: Store and manage detailed information about each patient's dental health.
- **Search**: Find patient records by various criteria.

## Getting Started

### Installation

```bash
    git clone [https://github.com/yourusername/dentist-patient-records-api.git](https://github.com/jimenezvic/SBA_318_API.git)
    cd dentist-patient-records-api
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in the root of the project and add any necessary environment variables, such as the port number:

    ```
    PORT=5000
    ```

4. Start the server:

    ```bash
    npm start
    ```

The API will be running on `http://localhost:5000`.

## API Endpoints

### Patients

- **Create a patient record**

    ```http
    POST /patients
    ```


- **Delete a patient record**

    ```http
    DELETE /patients/:id
    ```
