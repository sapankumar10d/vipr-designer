/**
 * Created by kumars92 on 12/19/2016.
 */
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var ObjectID = mongodb.ObjectID;

var DESIGNS_COLLECTION = "viprDesigns";
var ESSM_COLLECTION = "supportMatrix";

var app = express();
app.use(express.static(__dirname + '/../client'));
app.use(express.static(__dirname + '/../'));
app.use(bodyParser.json());

var db;
// Connect to the database before starting the application server.
mongodb.MongoClient.connect('mongodb://localhost:27017/viprDesigner', function (err, database) {
    if (err) {
        console.log(err);
        process.exit(1);
    }

    // Save database object from the callback for reuse.
    db = database;
    console.log("Mongodb database connection ready");

    // Initialize the app.
    var PORT = 8888;
    app.listen(PORT, function(){
        console.log( "Server app listening on " + PORT );

    });
});


function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({"error": message});
}




app.get("/designs", function(req, res) {
    db.collection(DESIGNS_COLLECTION).find({}).toArray(function(err, docs) {
        if (err) {
            handleError(res, err.message, "Failed to get designs!");
        } else {
            res.status(200).json(docs);
        }
    });
});

app.post("/designs", function(req, res) {
    var newDesign = req.body;
    newDesign.createDate = new Date();

    if (!(req.body.customer.accnt || req.body.customer.email)) {
        handleError(res, "Invalid user input", "Must provide Customer Account Name or email!", 400);
    }
    db.collection(DESIGNS_COLLECTION).insertOne(newDesign, function(err, doc) {
        if (err) {
            handleError(res, err.message, "Failed to create new design!");
        } else {
            res.status(201).json(doc.ops[0]);
        }
    });
});

app.get("/designs/:id", function(req, res) {
    db.collection(DESIGNS_COLLECTION).findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
        if (err) {
            handleError(res, err.message, "Failed to get design !");
        } else {
            res.status(200).json(doc);
        }
    });
});

app.put("/designs/:id", function(req, res) {
    var updateDoc = req.body;
    delete updateDoc._id;

    db.collection(DESIGNS_COLLECTION).updateOne({_id: new ObjectID(req.params.id)}, updateDoc, function(err, doc) {
        if (err) {
            handleError(res, err.message, "Failed to update design");
        } else {
            res.status(204).end();
        }
    });
});

app.delete("/designs/:id", function(req, res) {
    db.collection(DESIGNS_COLLECTION).deleteOne({_id: new ObjectID(req.params.id)}, function(err, result) {
        if (err) {
            handleError(res, err.message, "Failed to delete design");
        } else {
            res.status(204).end();
        }
    });
});

app.get("/essm", function(req, res) {
    db.collection(ESSM_COLLECTION).findOne({}, function(err, doc) {
        if (err) {
            handleError(res, err.message, "Failed to get Support Matrix !");
        } else {
            res.status(200).json(doc);
        }
    });
});