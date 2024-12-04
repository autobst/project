//MongoDb
const mongo = require('mongoose');

async function connect() {
    // mongo.connect(`mongodb+srv://${process.env.userName}:${process.env.userPwd}@web4ua.966wc.mongodb.net/${process.env.dbName}?retryWrites=true&w=majority`, {
    mongo.connect(`mongodb+srv://superadmin_01:Rassa_1001@web4ua.966wc.mongodb.net/web4ua?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}

const UsersSchema = new mongo.Schema({
    userName: {
        type: String,
        required: true,
    },
    userPwd: {
        type: String,
        required: true,
    },
    keyword: {
        type: String,
    },
    isAdmin: {
        type: Boolean
    }
});

const SectionsSchema = new mongo.Schema({
    Html: {
        type: Array,
    },
    Css: {
        type: Array,
    },
    JavaScript: {
        type: Array,
    }
});

const PostSchema = new mongo.Schema({
    section: {
        type: String,
        required: true,
    },
    subSection: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    chrome: {
        type: String,
        required: true,
    },
    opera: {
        type: String,
        required: true,
    },
    firefox: {
        type: String,
        required: true,
    },
    safari: {
        type: String,
        required: true,
    },
    edge: {
        type: String,
        required: true,
    },
    explorer: {
        type: String,
        required: true,
    },
    chromeOwn: {
        type: String,
    },
    operaOwn: {
        type: String,
    },
    firefoxOwn: {
        type: String,
    },
    safariOwn: {
        type: String,
    },
    edgeOwn: {
        type: String,
    },
    explorerOwn: {
        type: String,
    },
    author: {
        type: String,
    },
    content: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        required: true,
    },
    created: {
        type: String,
        required: true,
    },
});


const Users = mongo.model('users', UsersSchema);
const Sections = mongo.model('sections', SectionsSchema);
const Posts = mongo.model('posts', PostSchema);


module.exports.connect = connect;
module.exports.Users = Users;
module.exports.Sections = Sections;
module.exports.Posts = Posts;
