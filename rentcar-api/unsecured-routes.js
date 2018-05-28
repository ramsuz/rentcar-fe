
var fs = require('fs');

module.exports = function(router){

    router.get('/', (req, res) =>{ 
        res.json({ message: 'Welcome to the rentcar API.' });
    });

    router.route('/brands').get((req, res) =>{ 
        res.json({ value: 'BMW' });
    });

    router.route("/book/:book_id").get((req, res) => {
    	var obj;
    	fs.readFile('file.json', 'utf8', function (err, data) {
    	  if (err) throw err;
    	  obj = JSON.parse(data);
    	});
    	res.json(obj);
    })
}