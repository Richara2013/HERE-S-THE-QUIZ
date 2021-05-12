class Question{
    constructor()
    {
        this.input=createInput("Name");
        this.button=createButton('play');
        this.greeting=createElement('Good Luck');
        this.button=createButton("Sumbit");
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }

display(){
    var title=createElement('h2');
    this.title.html("Here's Quiz Game");
    this.title.position(500,100);

    this.input1.position(500,180);
    this.button.position(600,300);

    this.button.mousePressed(()=>{
        this.title.hide();
       this.input1.hide();
       this.button.hide();
       contestant.name = this.input1.value();
       contestantCount+=1;
       contestant.index = contestantCount;
       contestant.update();
       contestant.updateCount(contestantCount);
})
   
     this.question.html("If anything is possible, is it possible for anything to be impossible?");
     this.question.position(150,80);
     this.option1.html("NO");
     this.option1.position(150,100);
     this.option2.html("YES");
     this.option2.position(150,230);


}}