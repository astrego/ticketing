import express from 'express';

import { currentUser } from '@astrego-courses/common';

const router = express.Router();

router.get('/api/users/currentuser', currentUser, (req, res) => {
  res.send({ currentuser: req.currentUser || null });
});

export { router as currentUserRouter };
