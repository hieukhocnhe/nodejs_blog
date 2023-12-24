const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/hieu_blog_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log('Connect successfully !');
    } catch (error) {
        console.log('Connect failure !!!');
    }
}

module.exports = { connect };
