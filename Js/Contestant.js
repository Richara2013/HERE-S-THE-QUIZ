class Contestant{
    constructor(){
        this.name=null;
        this.index=null;
        this.distance=0;
    }

    getCount()
    {
        var contestantCountRef=database.ref('contestantCount');
        contestantCountRef.on("value",(data)=>{
            contestantCount=data.val();

        })
    }
    updateCount(count){
        database.ref('/').update({
            contestantCount:count
        });
    }

    update(name){
        var contestantIndex="contestants/contestants"+ this.index;
        database.ref(contestantIndex).set({
        name:this.name,
        distance:this.distance
        });
    }
    static getContestantInfo()
    {
    var contestantInforef= database.ref("contestants");
    contestantInforef.on("value",(data)=>{
    allContestants=data.val()
    })
    }
}