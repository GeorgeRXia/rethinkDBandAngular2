"use strict";
var rethinkdb = require('rethinkdb');
var _db = require('./db');
var async = require('async');
var db = new _db();
console.log(db.connectToDb)

class goals {
  addNewGoals(goalData,callback) {
    async.waterfall([
      function(callback) {
        console.log(db.connectToDb)
        db.connectToDb(function(err,connection) {
          if(err) {
            return callback(true,"Error connecting to database");
          }
          callback(null,connection);
        });
      },
      function(connection,callback) {
        var fatigue;
        (goalData.fatigue == " " ) ? fatigue = "false" : fatigue = goalData.fatigue;
        rethinkdb.table('goal').insert({'blog': goalData.blog, 'description': goalData.description, 'category': goalData.category, 'date': goalData.date, 'sleep': goalData.sleep, 'fatigue': fatigue, 'exercise': goalData.exercise, 'meal': goalData.meal}
        ).run(connection,function(err,result) {
          connection.close();
          if(err) {
            return callback(true,"Error happens while adding new goals");
          }
          callback(null,result);
        });
      }
    ],function(err,data) {
      callback(err === null ? false : true,data);
    });

  }
  voteGoalOption(goalData,callback) {
   async.waterfall([
     function(callback) {

       db.connectToDb(function(err,connection) {
         if(err) {
           return callback(true,"Error connecting to database");
         }
         callback(null,connection);
       });
     },
     function(connection,callback) {
       rethinkdb.table('goal').get(goalData.id).run(connection,function(err,result) {
         if(err) {
           return callback(true,"Error fetching goals to database");
         }
         for(var pollCounter = 0; pollCounter < result.polls.length; pollCounter++) {
           if(result.polls[pollCounter].option === pollData.option) {
             result.polls[pollCounter].vote += 1;
             break;
           }
         }
         rethinkdb.table('polls').get(pollData.id).update(result).run(connection,function(err,result) {
           connection.close();
           if(err) {
             return callback(true,"Error updating the vote");
           }
           callback(null,result);
         });
       });
     }
   ],function(err,data) {
     callback(err === null ? false : true,data);
   });
 }
 getAllGoals(callback) {
    async.waterfall([
      function(callback) {

        db.connectToDb(function(err,connection) {
          if(err) {
            return callback(true,"Error connecting to database");
          }
          callback(null,connection);
        });
      },
      function(connection,callback) {
        rethinkdb.table('goal').run(connection,function(err,cursor) {
          connection.close();
          if(err) {
            return callback(true,"Error fetching polls to database");
          }
          cursor.toArray(function(err, result) {
            if(err) {
              return callback(true,"Error reading cursor");
            }
            callback(null,result);
          });
        });
      }
    ],function(err,data) {
      callback(err === null ? false : true,data);
    });
  }
}

module.exports = goals;
