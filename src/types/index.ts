export interface QueryOptions {
  keyword: string;
  location: string;
  dateSincePosted: string;
  jobType: string;
  remoteFilter: string;
  salary: string;
  experienceLevel: string;
  limit: string;
  page: string;
}

export interface Job {
  title: string;
  company: string;
  location: string;
  datePosted: string;
  salary: string;
  experienceLevel: string;
  jobType: string;
  remote: boolean;
  description: string;
  link: string;
}

export interface JobResponse {
  jobs: Job[];
  total: number;
}