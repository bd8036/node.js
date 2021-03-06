/**
 * Created by ss on 2017-07-11.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    contents: String,
    author: String,
    comment_date: {type: Date, default: Date.now()}
});

var boardSchema = new Schema({
    title: String,
    contents: String,
    author: String,
    views: {type:Number, default: 0},
    board_date: {type: Date, default: Date.now()},
    comments: [commentSchema],
    updatedAt:{type:Date},},{toObject:{virtuals:true}
});

module.exports = mongoose.model('board', boardSchema);