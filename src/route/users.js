let express = require('express');
let router = express.Router();

router.post('/test',function(req, res, next) {
	return res.status(200).json({states: "test success!"});
})

module.exports = router;