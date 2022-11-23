//const userController = require('./controllers/user');

function initRouter(app) {
    try{
        
        //throw new Error ('Fake Error for Jest detection');
    
        app.get('/', (req, res) => {
        res.writeHead(200, '', {'Content-Type': 'text/plain'});
        res.end('bonjour.');
    })
    app.get('/users', ()=>{ return 'userController'});
    return app;
} catch(error){
    console.error(error);
    return false
}
}

exports.initRouter = initRouter;