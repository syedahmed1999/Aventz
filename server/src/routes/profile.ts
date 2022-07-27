import { Router } from 'express';
import {
  validateGetProfile,
} from '../validations/profile-validation'
import { validate } from '../middlewares/validate';
import {
  createProfile,
  listProfiles,
  getProfile
} from '../controllers/profile-controller';

const router: Router = Router();

router
  .route('/')
  .get(listProfiles)
  .post(createProfile);

router
  .route('/:id')
  .get(validate(validateGetProfile), getProfile)
  .post(validate(validateGetProfile), createProfile);  

export default router;
