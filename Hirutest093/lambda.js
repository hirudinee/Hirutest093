let AWS = require('aws-sdk');
const s3 = new AWS.S3();
exports.handler = function (event, context, callback) {

	s3.getBucketLocation({
		'Bucket': "test.sample.ohio"
	}).promise()
		.then(data => {
			console.log(data);
			console.log('Get bucket location was success');           // successful response
			/*
			data = {
				LocationConstraint: "us-west-2"
			}
			*/
		})
		.catch(err => {
			console.log('an error occured');
			console.log(err, err.stack);
			 // an error occurred
		});

	s3.deleteObject({
		'Bucket': "test.sample.ohio",
		'Key': "sample"
	}).promise()
		.then(data => {
			console.log('Delete object was successfull');
			console.log(data); 
			          // successful response
			/*
				data = {}
			*/
		})
		.catch(err => {
			console.log('An error occured');
			console.log(err, err.stack); // an error occurred
		});


	//callback(null, 'Successfully executed');
}