const express = require('express')

const router = express.Router()

function notes(req, res) {
    res.send('About this wiki');
  }

router.get('/',function (req, res) {
    res.send('About this wiki');
  })

module.exports =router;