
var booksJSON =  require('./sportBooks.json');

//holds all the sport books in JSON
function sportBooks(){
	booksJSON
}

//return JSON with all the sport book & prints to console
//if not found will return null & print to console 
sportBooks.prototype.getAll = function(){

	console.log("Funcion - getAll - was called");

	if(booksJSON.sportBooks.length==0){
		console.log("No sport books exist");
		return 0;
	}

	console.log("Sport Book:");
	for ( var i = 0, l = booksJSON.sportBooks.length; i < l; i++ ) {
	
		console.log("-------------------------------------");
		console.log("	ID: "+ booksJSON.sportBooks[i].ID);
		console.log("	Name: "+ booksJSON.sportBooks[i].Name);
		console.log("	Author: "+ booksJSON.sportBooks[i].Author);
		console.log("	Price: "+ booksJSON.sportBooks[i].Price);
		console.log("-------------------------------------");	
	}
	return booksJSON;

}

//return JSON with the  specific book id that has been searched & prints to console
//if not found will return null & print to console 
sportBooks.prototype.getByID = function(bookId){

	console.log("Funcion - getByID - was called");
 
	if (isNaN(bookId)){
		console.log("-------------------------------------");
		console.log("wrong value type was sent, you need to send int");
		console.log("-------------------------------------");
		return null;
	}

	for ( var i = 0, l = booksJSON.sportBooks.length; i < l; i++ ) {

		if(booksJSON.sportBooks[i].ID==bookId){

			console.log("Book with ID:" + bookId +", Details:");
			console.log("-------------------------------------");		
			console.log("	ID: "+ booksJSON.sportBooks[i].ID);
			console.log("	Name: "+ booksJSON.sportBooks[i].Name);
			console.log("	Author: "+ booksJSON.sportBooks[i].Author);
			console.log("	Price: "+ booksJSON.sportBooks[i].Price);
			console.log("-------------------------------------");

			return booksJSON.sportBooks[i];				
		}
	}

	if(i==booksJSON.sportBooks.length){
			console.log("Book not found, No such ID as: " + bookId);
			return null;
	}

}

//return JSON with all book in the range that comes from the query string (from,to) & prints to console
//if not found will return null & print to console 
sportBooks.prototype.howManybooksBetweenPrices = function(from , to){

	console.log("Funcion - howManybooksBetweenPrices - was called");

	if (isNaN(from) || isNaN(to)){			
		console.log("-------------------------------------");
		console.log("wrong value type was sent, you need to send ints");
		console.log("-------------------------------------");
		return null;
	}

	var rb = {
	    sportBooks: []
	};

	console.log("Books in range:" + from + "-" + to);

	for ( var i = 0, l = booksJSON.sportBooks.length; i < l; i++ ) {

		if((booksJSON.sportBooks[i].Price > from) && (booksJSON.sportBooks[i].Price < to)){

			console.log("-------------------------------------");
			console.log("	ID: "+ booksJSON.sportBooks[i].ID);
			console.log("	Name: "+ booksJSON.sportBooks[i].Name);
			console.log("	Author: "+ booksJSON.sportBooks[i].Author);
			console.log("	Price: "+ booksJSON.sportBooks[i].Price);
			console.log("-------------------------------------");

			rb.sportBooks.push({ 
				"ID"	:booksJSON.sportBooks[i].ID,
        		"Name" 	: booksJSON.sportBooks[i].Name,
        		"Author" : booksJSON.sportBooks[i].Author,
        		"Price"  : booksJSON.sportBooks[i].Price
  			});
		}
	}
	if(rb.sportBooks.length==0){
		console.log("not found");
		return 0;
	}
	return  rb;
}


//exporting the module for outside use
module.exports = sportBooks;