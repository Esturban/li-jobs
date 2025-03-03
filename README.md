# LinkedIn Jobs API

This project is a simple API that allows users to query job listings using the LinkedIn Jobs API. It is built with TypeScript and Express, and can be easily hosted in a Docker container.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Examples](#examples)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/Esturban/li-jobs.git
   cd li-jobs
   ```

2. Install dependencies:
   ```bash
   # Install dependencies with npm
   npm install
   #or
   pnpm install
   #or
   bun install
   ```

3. Build the TypeScript files:
   ```
   npm run build
   ```

4. (Optional) Build and run the Docker container:
   ```
   docker build -t lij .
   docker run -p 3000:3000 lij
   ```

## Usage

Start the server:
```
npm start
```
The API will be available at `http://localhost:3000`.


## Project Directory

Below are the contents of the repository for updating, editing or making changes to different components:

```bash
li-jobs/
├── Dockerfile # Dockerfile for deployment
├── README.md #Documentation
├── bun.lockb #Bun lock file
├── deploy.sh #Deployment script to GCP
├── package.json #App definition
├── src #Source files for the API
│   ├── app.ts
│   ├── controllers
│   │   └── jobController.ts
│   ├── routes
│   │   └── jobRoutes.ts
│   └── types
│       └── index.ts
└── tsconfig.json #Configuration
```



## API Endpoints

### Query Jobs

- **Endpoint:** `GET /api/jobs`
- **Description:** Fetch job listings based on query options.
- **Query Parameters:**
  - `keyword`: The job keyword (e.g., "data").
  - `location`: The job location (e.g., "Canada").
  - `dateSincePosted`: The time frame for job postings (e.g., "24hr").
  - `jobType`: Type of job (e.g., "full time").
  - `remoteFilter`: Filters for remote jobs (e.g., "remote,contract,temporary").
  - `salary`: Minimum salary (e.g., "50000").
  - `experienceLevel`: Required experience level (e.g., "entry level,senior,associate").
  - `limit`: Number of results to return (e.g., "20").
  - `page`: Page number for pagination (e.g., "0").

## Examples

To query jobs, you can use the following curl command:

```bash
curl -X POST http://localhost:3000/api/jobs/query -H "Content-Type: application/json" -d '{"keyword": "data"}'
```      

## License

This project is licensed under the MIT License.