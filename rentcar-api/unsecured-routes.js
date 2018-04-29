module.exports = function(router){

    router.get('/', (req, res) =>{ 
        res.json({ message: 'Welcome to the rentcar API.' });
    });

    router.route('/brands').get((req, res) =>{ 
        res.json({ value: 'BMW' });
    });
}