module.exports = function(){
	return function forcePagination(req, res, next){
		// if the request is a get request 
		// and it has no page parameters, 
		// automatically add page paramerter for pagination 
		if(req.method==="GET" && req.query.page === undefined)
		{
			req.query.page = 1
		}
		next()
	}
}