var initialCats = [{
    clickCount: 0,
    name: 'Tabby',
    imgSrc: 'img/434164568_fea0ad4013_z.jpg',
    imgAttribution: 'https://www.flickr.com/photos/bigtallguy/434164568',
    nickNames: ['Tabtab', 'T-Bone', 'Mr. T', 'Tabitha Tab Tabby Catty Cat']
}, {
    clickCount: 0,
    name: 'Tiger',
    imgSrc: 'img/4154543904_6e2428c421_z.jpg',
    imgAttribution: 'https://www.flickr.com/photos/xshamx/4154543904',
    nickNames: ['Tigger']
}, {
    clickCount: 0,
    name: 'Scaredy',
    imgSrc: 'img/22252709_010df3379e_z.jpg',
    imgAttribution: 'https://www.flickr.com/photos/kpjas/22252709',
    nickNames: ['Casper']
}, {
    clickCount: 0,
    name: 'Shadow',
    imgSrc: 'img/1413379559_412a540d29_z.jpg',
    imgAttribution: 'https://www.flickr.com/photos/malfet/1413379559',
    nickNames: ['Shooby']
}, {
    clickCount: 0,
    name: 'Sleepy',
    imgSrc: 'img/9648464288_2516b35537_z.jpg',
    imgAttribution: 'https://www.flickr.com/photos/onesharp/9648464288',
    nickNames: ['Zzzzz']
}];

var Cat = function(data){
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.catLevel = ko.observable("New Born");
  this.imgSrc = ko.observable(data.imgSrc);
  this.imgAttribution = ko.observable(data.imgAttribution);
  this.nickNames = ko.observableArray(data.nickNames);




    this.catLevel = ko.computed( function(){
      var title;
      var clicks = this.clickCount();
      if ( clicks < 10){
        title = "New Born";
      } else if (clicks < 50){
        title = "Infant";
      } else if (clicks < 100){
        title = "Child";
      } else if (clicks < 200){
        title = "Teen";
      } else if (clicks < 500){
        title = "Adult";
      } else {
        title = "Ninja";
      }
       return title;



      if(this.clickCount() > 10){
        return this.catLevel( 'Old Guy');
      }


      },this );


}

var Viewmodel = function() {

  var self = this;

  this.catList = ko.observableArray([]);

  initialCats.forEach(function(catItem){
    self.catList.push ( new Cat(catItem));
  });
      this.currentCat = ko.observable(this.catList()[0]);

      this.incrementCounter = function() {
      self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };

this.setCat = function(clickedCat){

  self.currentCat(clickedCat)
};


};

ko.applyBindings(new Viewmodel());
