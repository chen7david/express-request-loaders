module.exports = {
    loadRequest: {
        context: (req, res, next) =>{ if(!req.ctx) req.ctx = {} },
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
        accessToken: (key) => (req, res, next) =>{},
        refreshToken: (key) => (req, res, next) =>{},
        verificationToken: (key) => (req, res, next) =>{},
        apiKey: (key) => (req, res, next) =>{},
    },
    loadParam: {
        accessToken: (key) => (req, res, next) =>{},
        refreshToken: (key) => (req, res, next) =>{},
        verificationToken: (key) => (req, res, next) =>{},
        apiKey: (key) => (req, res, next) =>{},
    },
    loadToken: {
        user: (key) => (req, res, next) =>{},
        community: (key) => (req, res, next) =>{},
    },
    
}