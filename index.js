let express = require("express");
let app = express();


app.use('/', express.static(__dirname));
app.listen(process.env.PORT || 3000, () => { 
	console.log('listening')
});