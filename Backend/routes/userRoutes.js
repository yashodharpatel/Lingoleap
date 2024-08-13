const express = require('express');
const router = express.Router();
const {
  authenticateUser
} = require('../middleware/authentication');
const {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
} = require('../controllers/user');

router
  .route('/leaderboard')
  .get(getAllUsers);

router.route('/showMe').get(authenticateUser, showCurrentUser);
router.route('/updateUser').patch(authenticateUser, updateUser);
router.route('/updateUserPassword').patch(authenticateUser, updateUserPassword);

router.route('/profile/:id').get(authenticateUser, getSingleUser);

module.exports = router;
