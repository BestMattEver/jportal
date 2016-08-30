import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

var fakeCTeams = ["dusty Jorgens", "stinging bunnies", "lightning ducks", "fire ferrets", "the wow doggos"];
var fakeFTeams = ["soupy poops", "blathering beetles", "slappy dappers", "im a team", "us guys"];
var fakeATeams = ["flap jaspers", "jumping beans", "best hunters", "good at scavenging", "flippin blips"];

var fakeQuestions =[
  {questionNumber: 1, questionText: "why do you do it?", shortAnswer: "i guess just because.", hasItem: true, ptsAwarded: 100, isAnswered: true, picURL: "this is the picture url"},
  {questionNumber: 2, questionText: "what is your quest?", shortAnswer: "my quest is to live!.", hasItem: false, ptsAwarded: 200, isAnswered: true, picURL: "this is the picture url 2"},
  {questionNumber: 3, questionText: "where do you live?", shortAnswer: "in the big house forever.", hasItem: true, ptsAwarded: 300, isAnswered: false, picURL: "this is the picture url 3"},
  {questionNumber: 4, questionText: "when will you be off?", shortAnswer: "at 8 pm, cutie pie.", hasItem: true, ptsAwarded: 100, isAnswered: true, picURL: "this is the picture url 4"},
  {questionNumber: 5, questionText: "why do you do it?", shortAnswer: "i guess just because.", hasItem: true, ptsAwarded: 100, isAnswered: true, picURL: "this is the picture url"},
  {questionNumber: 6, questionText: "what is your quest?", shortAnswer: "my quest is to live!.", hasItem: false, ptsAwarded: 200, isAnswered: true, picURL: "this is the picture url 2"},
  {questionNumber: 7, questionText: "where do you live?", shortAnswer: "in the big house forever.", hasItem: true, ptsAwarded: 300, isAnswered: false, picURL: "this is the picture url 3"},
  {questionNumber: 8, questionText: "when will you be off?", shortAnswer: "at 8 pm, cutie pie.", hasItem: true, ptsAwarded: 100, isAnswered: true, picURL: "this is the picture url 4"},
  {questionNumber: 9, questionText: "why do you do it?", shortAnswer: "i guess just because.", hasItem: true, ptsAwarded: 100, isAnswered: true, picURL: "this is the picture url"},
  {questionNumber: 10, questionText: "what is your quest?", shortAnswer: "my quest is to live!.", hasItem: false, ptsAwarded: 200, isAnswered: true, picURL: "this is the picture url 2"},
  {questionNumber: 11, questionText: "where do you live?", shortAnswer: "in the big house forever.", hasItem: true, ptsAwarded: 300, isAnswered: false, picURL: "this is the picture url 3"},
  {questionNumber: 12, questionText: "when will you be off?", shortAnswer: "at 8 pm, cutie pie.", hasItem: true, ptsAwarded: 100, isAnswered: true, picURL: "this is the picture url 4"},
  {questionNumber: 13, questionText: "why do you do it?", shortAnswer: "i guess just because.", hasItem: true, ptsAwarded: 100, isAnswered: true, picURL: "this is the picture url"},
  {questionNumber: 14, questionText: "what is your quest?", shortAnswer: "my quest is to live!.", hasItem: false, ptsAwarded: 200, isAnswered: true, picURL: "this is the picture url 2"},
  {questionNumber: 15, questionText: "where do you live?", shortAnswer: "in the big house forever.", hasItem: true, ptsAwarded: 300, isAnswered: false, picURL: "this is the picture url 3"},
  {questionNumber: 16, questionText: "when will you be off?", shortAnswer: "at 8 pm, cutie pie.", hasItem: true, ptsAwarded: 100, isAnswered: true, picURL: "this is the picture url 4"}
]
//isSA, isGPS, isItem, isPic, picUrl, hasItem, questionText, shortAnswer, isAnswered, answerTime, ptsAwarded, groupName, questionNumber)
var questionSelected = false;

var fakeScore = 0;

if (Meteor.isClient) {
  //console.log(Meteor.getThing());
  Meteor.methods({
      'getThing': function(){
        //var question = questionsList.find({isPic:true});
        //console.log(question)
        console.log("get thing is called");
        //return question;
        return "sup brah";
      }
  });
//--------------------LOGINview EVENTS------------------------

Template.loginView.events({

  'click .loginBtn': function() {
    FlowRouter.go('teamsPg');
  }

});//end loginview events

//----------------------teamsPg events ---------------------------

Template.teamsPg.events({

  'click .teamLink': function() {
    FlowRouter.go('verifyPg');
  },

  'click .backToLogin': function () {
    FlowRouter.go("loginView");
  }

});

//--------------------TEAMLISTCONTAINER HELPERS----------------------
  Template.teamListContainer.helpers({

  'teams': function (type) {
    // return ["dusty Jorgens", "stinging bunnies", "lightning ducks", "fire ferrets", "the wow doggos"];
    if(type === 3)
    {
      return fakeCTeams;
    }
    else if(type === 2)
    {
      return fakeATeams;
    }
    else if(type === 1)
    {
      return fakeFTeams;
    }
  }//end teams function

  });//end teamlist helpers

//---------------------verifyPg helpers----------------------

Template.verifyPg.helpers({

  'questions': function () {
    return fakeQuestions;
  },//end questions function

  'questionSelected': function () {
      return questionSelected;
  }//end questions function

  }); //end helpers

//------------------------verify pg events-----------------------

Template.verifyPg.events({

  'click .oneQuestion': function (e) {
      var qNum = $(e.target).attr("id");

      questionSelected = true;
      $(".oneQuestion").removeClass("selected");
      $(e.target).addClass("selected");
      $(".qNum").text(qNum);
      $(".questionText").text(fakeQuestions[qNum-1].questionText);
      $(".SA").text(fakeQuestions[qNum-1].shortAnswer);

      if(fakeQuestions[qNum-1].hasItem)
      {
        $(".item").text("yes they do, ask to see it.");
      }
      else
      {
        $(".item").text("no they dont.");
      }

      $(".URL").text(fakeQuestions[qNum-1].picURL);
      $(".URL > img").attr("src", fakeQuestions[qNum-1].picURL);

    },//end questions function

    'click .backToTeams': function () {
      FlowRouter.go("teamsPg");
    },

    'click .yep': function (e) {
      console.log("this question counts!");
      //fakeScore = fakeScore + this.
    },

    'click .nope': function (e) {
      console.log("this question doesnt count!");
    }

  });//end verifypg events

}//end is client
