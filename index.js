module.exports = {
    loadRequest: {
        context: (req, res, next) =>{ 
            if(!req.ctx) req.ctx = {}
            next()
         },
    },

    loadHeaders: {
        accessToken: (key) => (req, res, next) =>{
            let bearerToken = req.headers[key]
            if(bearerToken) {
                if(!req.ctx.headers) req.ctx.headers = {}
                req.ctx.headers.accessToken = bearerToken.replace('Bearer ', '')
            }
            next()
        },
        refreshToken: (key) => (req, res, next) =>{
            let bearerToken = req.headers[key]
            if(bearerToken) {
                if(!req.ctx.headers) req.ctx.headers = {}
                req.ctx.headers.refreshToken = bearerToken.replace('Bearer ', '')
            }
            next()
        },
        verificationToken: (key) => (req, res, next) =>{
            let token = req.headers[key]
            if(token) {
                if(!req.ctx.headers) req.ctx.headers = {}
                req.ctx.headers.verificationToken = token
            }
            next()
        },
        apiKey: (key) => (req, res, next) =>{
            let apiKey = req.headers[key]
            if(apiKey) {
                if(!req.ctx.headers) req.ctx.headers = {}
                req.ctx.headers.apiKey = apiKey
            }
            next()
        },
    },
    loadBody: {
        accessToken: (key) => (req, res, next) =>{
            let bearerToken = req.body[key]
            if(bearerToken) {
                if(!req.ctx.body) req.ctx.body = {}
                req.ctx.body.accessToken = bearerToken
            }
            next()
        },
        refreshToken: (key) => (req, res, next) =>{
            let token = req.body[key]
            if(token) {
                if(!req.ctx.body) req.ctx.body = {}
                req.ctx.body.refreshToken = token
            }
            next()
        },
        verificationToken: (key) => (req, res, next) =>{
            let token = req.body[key]
            if(token) {
                if(!req.ctx.body) req.ctx.body = {}
                req.ctx.body.verificationToken = token
            }
            next()
        },
        apiKey: (key) => (req, res, next) =>{
            let apiKey = req.body[key]
            if(apiKey) {
                if(!req.ctx.body) req.ctx.body = {}
                req.ctx.body.apiKey = apiKey
            }
            next()
        },
    },
    loadParam: {
        accessToken: (key) => (req, res, next) =>{
            let token = req.query[key]
            if(token) {
                if(!req.ctx.param) req.ctx.param = {}
                req.ctx.param.accessToken = token
            }
            next()
        },
        refreshToken: (key) => (req, res, next) =>{
            let token = req.query[key]
            if(token) {
                if(!req.ctx.param) req.ctx.param = {}
                req.ctx.param.refreshToken = token
            }
            next()
        },
        verificationToken: (key) => (req, res, next) =>{
            let token = req.query[key]
            if(token) {
                if(!req.ctx.param) req.ctx.param = {}
                req.ctx.param.verificationToken = token
            }
            next()
        },
        apiKey: (key) => (req, res, next) =>{
            let apiKey = req.param[key]
            if(apiKey) {
                if(!req.ctx.param) req.ctx.param = {}
                req.ctx.param.apiKey = apiKey
            }
            next()
        },

        objectById: (Model) => async (req, res, next, id) =>{
            let key = Model.name.toLowerCase()
            const object = await Model.getById(id)
            if(!object) {
                return next({message:'invalid_object_id', data:{key}})
            }else{
                if(!req.ctx.param) req.ctx.param = {}
                req.ctx.param[key] = object
            }
            next()
        },
    },    
}