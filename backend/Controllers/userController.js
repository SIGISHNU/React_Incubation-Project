const asyncHandler = require("express-async-handler");
const User = require("../models/userModels");
const userForm = require("../models/HomePageForm");
const slot = require("../models/slotbooking");
const generateTocken = require("../utils/generateTocken");
const ObjectId = require("mongoose").Types.ObjectId;
const res = require("express/lib/response");


const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, mobile } = req.body;

  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400).json({
      message: "User alredy exists...",
    });
  }

  const createUser = await User.create({
    name,
    email,
    mobile,
    password,
  });

  if (createUser) {
    res.status(201).json({
      _id: createUser._id,
      name: createUser.name,
      email: createUser.email,
      isAdmin: createUser.isAdmin,
      mobile: createUser.mobile,
      token: generateTocken(createUser._id),
    });
  } else {
    res.status(400).json({
      message: "User data creation failed",
    });
  }
});

const LoginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      email: user.email,
      isAdmin: user.isAdmin,
      mobile: user.mobile,
      token: generateTocken(user._id),
    });
  } else {
    res.status(400).json({
      message: "invalid Email and Password",
    });
  }
});

const userSubmitForm = asyncHandler(async (req, res) => {
  const {
    name,
    address,
    city,
    state,
    email,
    mobile,
    companyName,
    logo,
    descriptionOne,
    descriptionTwo,
    descriptionThree,
    descriptionFour,
    descriptionFive,
    descriptionSix,
    descriptionSeven,
    descriptionEight,
    descriptionNine,
    incubationType,
    descriptionTen,
    userId,
  } = req.body;

  const createForm = await userForm.create({
    name,
    address,
    city,
    state,
    email,
    mobile,
    companyName,
    logo,
    descriptionOne,
    descriptionTwo,
    descriptionThree,
    descriptionFour,
    descriptionFive,
    descriptionSix,
    descriptionSeven,
    descriptionEight,
    descriptionNine,
    incubationType,
    descriptionTen,
    userId,
  });

  if (createForm) {
    res.status(201).json({
      _id: createForm._id,
      name: createForm.name,
      address: createForm.address,
      city: createForm.city,
      state: createForm.state,
      email: createForm.email,
      mobile: createForm.mobile,
      companyName: createForm.companyName,
      logo:createForm.logo,
      descriptionOne: createForm.descriptionOne,
      descriptionTwo: createForm.descriptionTwo,
      descriptionThre: createForm.descriptionThree,
      descriptionFour: createForm.descriptionFour,
      descriptionFive: createForm.descriptionFive,
      descriptionSix: createForm.descriptionSix,
      descriptionSeven: createForm.descriptionSeven,
      descriptionEight: createForm.descriptionEight,
      descriptionNine: createForm.descriptionNine,
      incubationType: createForm.incubationType,
      descriptionTen: createForm.descriptionTen,
      userId: createForm.userId,
      token: generateTocken(createForm._id),
    });
  } else {
    res.status(400).json({
      message: "Form creation failed!",
    });
  }
});

const findUserForm = asyncHandler(async (req, res) => {
  var userId = req.params.userId;
  const findForm = await userForm.find({ userId: userId });
  if (findForm) {
    res.status(201);
    res.json(findForm);
  } else {
    res.status(400).json({
      message: "Cannot find your data ..!",
    });
  }
});

const deleteForm = asyncHandler(async (req, res) => {
  var id = req.params.id;
  const deletingForm = await userForm.deleteOne({ _id: ObjectId(id) });
  if (deletingForm) {
    res.status(201);
    res.json({
      message: "Item deleted !",
    });
  } else {
    res.status(400).json({
      message: "Deleting failed !",
    });
  }
});

const getAllData = asyncHandler(async (req, res) => {
  const alldata = await userForm.find();
  if (alldata) {
    res.status(201);
    res.json(alldata);
  } else {
    res.status(400).json({
      message: "Unable to get your data",
    });
  }
});

const collectingFormData = asyncHandler(async (req, res) => {
  var id = req.params.id;
  const getData = await userForm.findOne({ _id: ObjectId(id) });
  if (getData) {
    res.status(201);
    res.json(getData);
  } else {
    res.status(400).json({
      message: "No data Found",
    });
  }
});

const getAcceptedData = asyncHandler(async(req,res)=>{

  const id = req.params.acceptingID;
  console.log(id);
  const FIndData = await userForm.updateOne({_id:ObjectId(id)} , {$set:{status:"Pending"}})
  console.log(FIndData);
  if (FIndData) {
    
    res.status(201);
    res.json(FIndData);
  }else{
    res.status(400).json({

      message:"Cannot find or update data!"
    })
  }

})

const getAllPendingData = asyncHandler (async(req,res)=>{
  
  const getPendingData = await userForm.find({status:"Pending"})

  if (getPendingData) {
    
    res.status(201);
    res.json(getPendingData);
  }else{
    res.status(400).json({

      message:"Not getting Pending Data!"
    })
  }
})

const rejectData = asyncHandler (async(req,res)=>{

  const id = req.params.rejectID;
  const updateRejectStatus = await userForm.updateOne({_id:ObjectId(id)},{$set:{status:"Rejected"}})
  if (updateRejectStatus) {
    res.status(201);
    res.json(updateRejectStatus);
  }else{
    res.status(400).json({
      message:"Application rejection failed!"
    })
  }
})

const slotBooking = asyncHandler(async (req, res) => {

  const {applicationID , seatNO , isActive}= req.body ;

  const createSlot = await slot.create({

    applicationID,
    seatNO,
    isActive,
  });

  if (createSlot) {
    res.status(201).json({
      applicationID:createSlot.applicationID,
      seatNO:createSlot.seatNO,
      isActive:createSlot.isActive,
      token: generateTocken(createSlot._id),
    });
  } else {
    res.status(400).json({
      message: "Slot creation failed !",
    });
  }
});

const getDefaultSLot = asyncHandler(async(req,res)=>{

  const getAllSlot = await slot.find()
  if (getAllSlot) {
    
    res.status(201);
    res.json(getAllSlot);
  }else{

    res.status(400).json({
      message:"unable find slot!"
    })
  }
})

const bookSlot = asyncHandler(async(req,res)=>{

  const applicationID = req.body.id
  const slotButtonId  = req.body.slotButtonId.id
  const seatNo = req.body.slotButtonId.seatNO

  const updateRejectStatus = await userForm.updateOne({_id:ObjectId(applicationID)},{$set:{status:"Approved" , SlotNO:seatNo}})
  if (updateRejectStatus) {
    const updateSlot = await slot.updateOne({_id:ObjectId(slotButtonId)},{$set:{applicationId:applicationID , seatNo:seatNo , isActive:true}})
    res.status(201);
    res.json(updateSlot);
  }else{
    res.status(400).json({
      message:"Unable to update data!"
    })
  }

})

module.exports = {
  registerUser,
  LoginUser,
  userSubmitForm,
  findUserForm,
  deleteForm,
  getAllData,
  collectingFormData,
  getAcceptedData,
  getAllPendingData,
  rejectData,
  slotBooking,
  getDefaultSLot,
  bookSlot,
};
    