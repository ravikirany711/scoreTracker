var express=require('express')
var app=express()
var bodyParser=require('body-parser')

//telling express to use the body parser
app.use(bodyParser.urlencoded({extended:true}))


//telling express that we are using ejs as template engine
app.set('view engine','ejs')

//just to make sure every route has access to this array
var dogs=['rusty','rocky','simba','timon','pumba']



//Home route
app.get('/',function(req,res){
	res.render('home')
})

app.get('/dogs',function(req,res){

	res.render('dogs',{dogs:dogs})
})

//Finally testing a post request using postman
app.post('/adddogs',function(req,res){
	var pals=req.body.newDog
	dogs.push(pals)
	res.redirect('/dogs')
})


app.listen(process.env.PORT|| 3000,function(req,res){
	console.log('The server is up and running at port 3000')
})