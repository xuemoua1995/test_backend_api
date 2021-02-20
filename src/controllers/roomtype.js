const { SUCCESSFULLY } = require('../constants/constants');
const RoomType = require('../models/roomtype');

//Create New
exports.addRoomType = async (req, res) => {
    const roomtypeObj = {
        name: req.body.name
    }
    const roomT = await new RoomType(roomtypeObj);

    roomT.save((error, result) => {
        if (error) return res.status(400).json({ error });
        if (result) {
            res.status(201).json({
                message: SUCCESSFULLY
            });
        }
    });
}

//Get all
exports.getAllRoomType = (req, res) => {
    RoomType.find()
        .exec((error, roomTypes) => {
            if (error) return res.status(400).json({ error });
            if (roomTypes) {
                return res.status(200).json({ roomTypes });
            }
        });
}

// Get by Id Or One
exports.getOneRoomType = (req, res) => {
    RoomType.findOne({ _id: req.params.roomTypeId })
        .select('-__v -_id')
        .exec((error, result) => {
            if (error) return res.status(400).json({ error });
            if (result) {
                return res.status(200).json({ result });
            }
        });
}

//Update 
exports.updateRoomType = (req, res) => {
    const roomType = new RoomType({
        _id: req.params.roomTypeId,
        name: req.body.name
    });

    RoomType.update({_id: req.params.roomTypeId}, roomType)
    .then(()=>{
        res.status(201).json({
            message: SUCCESSFULLY
        })
    })
}

//Delete
exports.deleteRoomType = (req, res) => {
    RoomType.findByIdAndRemove({ _id: req.params.roomTypeId })
    .exec((error, result)=>{
        if (error) return res.status(400).json({ error });
        if (result) {
            return res.status(200).json({ message: SUCCESSFULLY });
        }
    });
}