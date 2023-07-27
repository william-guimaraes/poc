const express = require("express")
const jwt = require("jsonwebtoken") 

const { APP_API_KEY_ID, APP_API_KEY_SECRET } = process.env;

const router = express.Router()

router.get('/', (req, res) => {
    const token = jwt.sign(
        { 
            scope: 'user', 
            external_id: 'user@test.com' 
        },
        APP_API_KEY_SECRET, 
        { 
            header: { 
                alg: 'HS256', 
                typ: 'JWT', 
                kid: APP_API_KEY_ID 
            }
        }
    )

    res.status(200).send(token)
});

exports.router = router