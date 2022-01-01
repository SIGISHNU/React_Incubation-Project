const express = require('express');
const { registerUser, LoginUser, userSubmitForm, findUserForm, deleteForm, getAllData, collectingFormData, getAcceptedData ,rejectData, getAllPendingData, slotBooking, getDefaultSLot, bookSlot } = require("../Controllers/userController");
const router = express.Router();


router.route("/").post(registerUser);
router.route('/login').post(LoginUser);
router.route("/form").post(userSubmitForm);
router.route('/getdata/:userId').get(findUserForm);
router.route("/deleteForm/:id").get(deleteForm);
router.route('/alldata').get(getAllData);
router.route('/collectingdata/:id').get(collectingFormData);
router.route("/acceptingform/:acceptingID").get(getAcceptedData);
// router.route('/pendingdata').get(getAllPendingData);
router.route('/rejectform/:rejectID').get(rejectData);
router.route('/approveddata').get(getAllPendingData);
router.route('/slotadding').post(slotBooking);
router.route('/fetchslotdata').get(getDefaultSLot);
router.route('/slotbook').patch(bookSlot);



module.exports = router;