const express = require('express');
const app = express();

app.use( require('../controller/registerController') );
app.use( require('../controller/organizationController') );
app.use( require('../controller/loginController') );
app.use( require('../controller/teacherController') );
app.use( require('../controller/courseController') );