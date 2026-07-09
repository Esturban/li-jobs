import express from 'express';
import { jobSearch } from '@atharvh01/linkedin-jobs-api';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    // Extract search query from request
    const query = req.query.query as string;
    
    if (!query) {
      return res.status(400).json({ error: 'Search query is required' });
    }
    
    // Call the jobSearch function with the query
    const results = await jobSearch(query);
    
    return res.json(results);
  } catch (error) {
    console.error('Search error:', error);
    return res.status(500).json({ error: 'Failed to search jobs' });
  }
});

export default router;