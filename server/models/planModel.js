const mongoose = require("mongoose");

// // Exercise schema
// const exerciseSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     type: {
//         type: String,
//         enum: ['Cardio', 'Strength', 'Flexibility', 'Balance'],
//         required: true
//     },
//     duration: {
//         type: Number,
//         required: true
//     },
// }, { _id: false });

// Food schema
const foodSchema = new mongoose.Schema({
    breakfast: {
        type: [String]
    }, 
    lunch: {
        type: [String]
    }, 
    snacks: {
        type: [String]
    }, 
    dinner: {
        type: [String]
    }, 
}, { "strict": "throw" });
// }, { _id: false });

// Plan schema
const planSchema = new mongoose.Schema({
    id:{
        type: Number
    },
    calories: {
        type: Number,
        required: true
    }, 
    veg: {
        type: foodSchema
    }, 
    nonveg: {
        type: foodSchema
    }
    // userId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'user',
    //     required: true
    // },
    // title: {
    //     type: String,
    //     required: true
    // },
    // description: String,
    // type: {
    //     type: String,
    //     enum: ['meal', 'workout', 'combined'],
    //     required: true
    // },
    // duration: {
    //     type: Number,
    //     required: true
    // },
    // goals: {
    //     type: [String],
    //     required: true
    // },
    // steps: {
    //     type: [String]
    // },
    // exercises: {
    //     type: [exerciseSchema]
    // },
    // foods: {
    //     type: [foodSchema]
    // },
    // createdAt: {
    //     type: Date,
    //     default: Date.now
    // }
}, { "strict": "throw" });

const Plan = mongoose.model('plan', planSchema);

module.exports = Plan;
