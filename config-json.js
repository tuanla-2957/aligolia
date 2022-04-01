const jsonServer = require('json-server')
const querystring = require('query-string')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
    res.jsonp(req.query)
})

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
    if (req.method === 'POST') {
        req.body.createdAt = Date.now()
    }
    // Continue to JSON Server router
    next()
})

router.render = (req, res) => {
    //check GEY with pagination
    //if yes custom out put
    //otherwise 
    const headers = res.getHeaders();
    const totalCountHeader = headers['x-total-count']
    if (req.method === 'GET' && totalCountHeader) {
        const queryParams = querystring.parse(req._parsedUrl.query);
        const result = {
            data: res.locals.data,
            pagination: {
                _page: Number.parseInt(queryParams._page) || 1,
                _limit: Number.parseInt(queryParams._limit) || 10,
                _totalRows: Number.parseInt(totalCountHeader),
            }
        }

        return res.jsonp(result)
    }

    res.jsonp({
        data: res.locals.data
    })
}

// Use default router
server.use(router)
server.listen(4000, () => {
    console.log('JSON Server is running')
})
