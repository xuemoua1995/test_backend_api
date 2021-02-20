const express = require('express');
const { addRoomType, getAllRoomType, getOneRoomType, deleteRoomType, updateRoomType } = require('../controllers/roomtype');
const { adminMiddleware, requireSignin } = require('../middleware');
const router = express.Router();

//Create new Room Type
router.post('/', addRoomType);

//Get all
router.get('/', getAllRoomType);

//Get one
router.get('/:roomTypeId', getOneRoomType);

//Update
router.put('/:roomTypeId',  updateRoomType)

//Delete
router.delete('/:roomTypeId',  deleteRoomType);

module.exports = router;