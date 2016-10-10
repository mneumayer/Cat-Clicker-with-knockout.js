var Cat = function(){
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.catLevel = ko.observable("New Born");
  this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
  this.imgAttribution = ko.observable('https:///www.flickr.com/photos/big cats');
  this.nickName = ko.observableArray([
    {name: 'LittleGuy'},
    {name: 'FuzzBall'},
    {name: 'Kitty'}
  ]);




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

      this.currentCat = ko.observable(new Cat() );

      this.incrementCounter = function() {
        this.currentCat().clickCount(this.currentCat().clickCount() + 1);
  };

};

ko.applyBindings(new Viewmodel());
