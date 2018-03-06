var express = require('express');
var request = require('request');
var cheerio = require('cheerio');

var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

router.get('/I/want/title/', function(req, res){
  // Let's scrape Anchorman 2
  //url = 'http://www.imdb.com/title/tt1229340/';


  var url = req.query.address;

  urlz = [];
  for (let abc of req.query.address) {
  	/*Do some logic here*/
  	if(abc.length>1)
  			urlz.push(abc);
  }
  	    	console.log(urlz.length);

       // urli[] = url
    res.render('index', { title: 'Express', urlz:url, size: urlz.length });


  // request(url, function(error, response, html){
  //   if(!error){
  //     var $ = cheerio.load(html);

  //     var title, release, rating;
  //     var json = { title : "", release : "", rating : ""};

  //     $('.title_wrapper').filter(function(){
  //       var data = $(this);
  //       title = data.children().first().text().trim();
  //       release = data.children().last().children().last().text().trim();

  //       json.title = title;
  //       json.release = release;
  //     })

  //     $('.ratingValue').filter(function(){
  //       var data = $(this);
  //       rating = data.text().trim();

  //       json.rating = rating;
  //     })


  //      console.log($(this));
  //   res.send(json);
  //   }


  // })
})
module.exports = router;
