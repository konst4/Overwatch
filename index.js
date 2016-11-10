var express = require('express');
var gcloud = require('google-cloud');
var firebase = require('firebase');
var multer = require("multer");
var uploader = multer({ storage: multer.memoryStorage({}) });
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
const privekey={
  "type": "service_account",
  "project_id": "swe432-14fcb",
  "private_key_id": "66ed854972c1cbb347848e2f7514d446fd6542df",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDYarOCVoHuB8Dt\nydLg3frIz9Miv+BTpqylroXzaPkYgeuzU19NAgWEQFuz84bX1R4M11sVf8uWOzjq\nW1b7mh/n9Z+/oj0Pr7qcgYg6t9Q6Lkf/ztzep5Q89E0XXkVRMo/hN4QOkZrFlR2K\nYb5yykCvM5MUaJ1//UdfilfSsJsi8IoWwu0VblMVMCP2GsRj6O1IMQb/ga5VdKF5\npu/v0oj1xCL0wZyCUskDXByrAwK1ZeSqIspG8ZPRFgs06PIEOhtA0a7p9uw+yROZ\nryXQS/O0zHeS0n3tqKFvi3iC4Jbf96ygfrEqSh2aHjRzFiLXK+/EDQuuEuNmMID8\nPAMBzVgbAgMBAAECggEAYqCF/HFGN19LOlMPCrG/N8MWurBtIFJGPh+CJkMBunyD\nGS92sBaqwvG9mQ3ztusGDd4bQXoDIw0MTCmiQ3mi7shOrDvYzgxM5ERX/EKIspci\n8t6oY8RFV14SwAKTXoTHc2EkiqsquL7TPpx6+b9YqT+82MEwfgLEgzL+ASPBH7Ne\n0DuhRD26WleoPf6VjbUwkWUu0EuPr99MQx8EGYuWuIW1NG1yywkgVB8FwU07UY8F\nLd1FcVS3rAjIn9DY4/Ll/Ci4VxngzGOfXFnAYkVrurWZy2Mr7g84yS01Y7YQ/VWS\nqqje0Crnk7Aj63DNTbgyD8ZcmoDrI/gza8QKdu1XGQKBgQD1hGhgRi8J19qQV9la\nV6bqkwOcI8ynz9ftCQ+AvPKtkVgkixCSZc//BmUexMbYfi/xgVoB+3PiKZvBo2+u\nC1AzD+FBlLRymJCdPRwXil/f1UuQCAB/Bwht9QQvNYucRC400EcY0OUcymFYXcwZ\nsYAaU7zsmbbMkR3Fs3cb9BbAxwKBgQDhqDcjOG0T37WjnYLlAEtin98H4YYbLNSU\niKG6BYsXwlwoBFapVj1Qs6AfVVY1NuhoQNcV19hevL0/4tZaSzeqrJmuUFivM2DT\nr7/rnnlrPVKQQq8q69gsWAdlrrT6/aZO86nhl0X+iPVFYIN7pamkMCclrjyD9HVd\n/E8UO7wCDQKBgAenUAWoSnEZHIQhaPIrB1YKrTMh3pBgp0+JV8VgnoQQotnIyAR4\nTgqaLW7PHY/EJ0R1DtQ+/XbQaz2XFbUsPxzIYvJDa3ijDucH76dANgrpQEjGJxXO\np1GeMLo0Bh0h9vrIf17jrDDAklZJ3kHyyZaIg7wwcoVgBLiUBqOFcWwjAoGBAMI8\n5ZkvjNS6j8NSZcVwx3MRYg2KlsD1idaA9ZUGCIBfEKxxb5c7YHQC6iWOczJDHTH/\n/iQTM2/4zn4bZ585d6U2BOMCzhOhCgutEGpkcudYVaVPgTBU6jLhYxynkakqhOkY\n3HYOnHVItrcNKKBaLPfjaw8IN5bt6ckI0Zj9AgxRAoGACoL4FXuQc4PDvHM8g8Lq\nPGBMgidCZFdNYp9Evc5t7aEPnpGAbsJ8aqj/UogMHHTV4jD1KVBOoeYQXDNkhdBA\nSiHA0t3Cip+EMVtJI+WctN39j0wSQH+VkpMP6tfpB4QQ2HJ1nbZo+3nNftUnjEUM\ntcktTFKB/YptQiD9DM0Beqs=\n-----END PRIVATE KEY-----\n",
  "client_email": "swe432-14fcb@appspot.gserviceaccount.com",
  "client_id": "110481753287787256307",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://accounts.google.com/o/oauth2/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/swe432-14fcb%40appspot.gserviceaccount.com"
};

 var config = {
    apiKey: "AIzaSyAdurrdOMvJYm72h96FCv4oqPgbZLPmppQ",
    authDomain: "swe432-14fcb.firebaseapp.com",
    databaseURL: "https://swe432-14fcb.firebaseio.com",
    storageBucket: "swe432-14fcb.appspot.com",
    messagingSenderId: "1089613773942"
  };

app.set('port', (process.env.PORT || 5000));

firebase.initializeApp(config);
// firebase.initializeApp({
//      serviceAccount: privekey,
//     databaseURL: "https://swe432lecture12.firebaseio.com"
//  });

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/Overwatch/', function(request, response) {
  response.render('pages/index');
});



//firebase
var fireRef = firebase.database().ref('users');

app.post('/uploadf', function (req, res){
console.log("Uploading to Firebase");
fireRef.once('value', function (snapshot) {
        var data = snapshot.val();
        var profile = snapshot.child().exists();
        if (profile) {
        }else{
        	fireRef.child().set(
                {
                    ProfileName: req.body.profileName,
                    
                });
        }
}).catch(function(){
        res.status(403);
        res.send();
});
response.writeHead(200,{"Content-Type":"text/plain"});
	response.write("Firebase succesful");
	response.end();
});





app.post('/login',function(request,response){
	console.log('loggin in');
	const auth=firebase.auth();
	// response.writeHead(200,{"Content-Type":"text/plain"});
	// response.write(request.body.user);
	// response.end();
	//response.json(request.body);
	// console.log(request);
	console.log(request.body);
	// console.log(request.body.pass);
	// console.log(request.body.user);
	const user=request.body.user;
	const pass=request.body.pass;
	const promise=auth.signInWithEmailAndPassword(user,pass);
	function rest(e){
		
		
		response.end();
		
	};
	promise.catch(e=>rest(e));

	firebase.auth().onAuthStateChanged(firebaseUser=>{
		if(firebaseUser){
			console.log(firebaseUser);
			response.json(firebaseUser);
			response.end();
			auth.signOut();
			
			
		}else{
			console.log('not logged in');
			
		
		}
	});
	
	
});











// google cloud
var CLOUD_BUCKET="staging.swe432-14fcb.appspot.com"; //From storage console, list of buckets
var gcs = gcloud.storage({
    projectId: '1089613773942', //from storage console, then click settings, then "x-goog-project-id"
    keyFilename: privekey //the key we already set up at the top
});

function getPublicUrl (filename) {
    return 'https://storage.googleapis.com/' + CLOUD_BUCKET + '/' + filename;
}

var bucket = gcs.bucket(CLOUD_BUCKET);


//From https://cloud.google.com/nodejs/getting-started/using-cloud-storage
function sendUploadToGCS (req, res, next) {
    if (!req.file) {
        return next();
    }

    var gcsname = Date.now() + req.file.originalname;
    var file = bucket.file(gcsname);


    var stream = file.createWriteStream({
        metadata: {
            contentType: req.file.mimetype
        }
    });

    stream.on('error', function (err) {
        req.file.cloudStorageError = err;
        next(err);
    });

    stream.on('finish', function () {
        req.file.cloudStorageObject = gcsname;
        req.file.cloudStoragePublicUrl = getPublicUrl(gcsname);
        var options = {
            entity: 'allUsers',
            role: gcs.acl.READER_ROLE
        };
        file.acl.add(options, function(a,e){next();});//Make file world-readable; this is async so need to wait to return OK until its done
    });

    stream.end(req.file.buffer);
}

var fireRef = firebase.database().ref('playerName');


//Make a new one
app.post('/upload', uploader.single("img"), sendUploadToGCS, function (req, res, next) {
    var data = {"text" : req.body.file};
    if(req.file)
        data.img = getPublicUrl(req.file.cloudStorageObject);
    fireRef.push(data, function () {
        res.send("OK!");
    }).catch(function(){
        res.status(403);
        res.send();
    });
    response.writeHead(200,{"Content-Type":"text/plain"});
	response.write("Firebase succesful");
	response.end();
});






app.use(express.static(__dirname + '/public'));

 app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


