

const platitudes = [
'It’ll all be OK',
'This is life',
'Such is life',
'You’ll be OK',
'You’ll be fine',
'Time will tell',
'It’s God’s will',
'It is what it is',
'It’s in the past',
'I feel your pain',
'Live and let live',
'Just be yourself',
'Just give it time',
'You’ll get over it',
'Don’t dwell on it',
'It could be worse',
'I share your pain',
'It was meant to be',
'It can’t be that bad',
'Just think positive',
'Patience is a virtue',
'This too shall pass',
'You’ll get used to it',
'Perception is reality',
'You’ll get through it',
'Your time will come',
'Own it and move on',
'You’ll get better at it',
'You have to move on',
'Keep a stiff upper lip',
'What’s done is done',
'Don’t let it eat at you',
'Get on with your life',
'It wasn’t meant to be',
'My heart goes out to you',
'You can’t judge a book by it’s cover',
'Don’t let it bother you',
'Gossip is the devil’s radio',
'Time heals all wounds',
'Things will get easier',
'Just follow your heart',
'Nothing is impossible',
'We all have problems',
'Rome wasn’t built in a day',
'It’s the darkest just before dawn',
'Happiness is a choice',
'It’s not rocket science',
'It’s for your own good',
'You’re better than this',
'Time heals all wounds',
'Something will turn up',
'After the storm the sun will shine',
'People regret the things they didn’t do',
'Look on the bright side',
'What goes around comes around',
'It doesn’t matter if you win or lose, only that you try',
'Just don’t think about it',
'Tomorrow will be better',
'Just let it roll off your back',
'Don’t linger on the past',
'Don’t let it get you down',
'Tomorrow’s another day',
'Just try harder next time',
'Take it one day at a time',
'You’ll be better off for this',
'Success is the ability to go from one failure to another with no loss of enthusiasm',
'Don’t let life get you down',
'Just try to get some sleep',
'You did the best you could',
'You can do so much better',
'You just need to let it go',
'It all comes out in the wash',
'Everything’s going to be OK',
'At least you’re not homeless',
'It will all be worth it in the end',
'This is just a bump in the road',
'You gotta do what you gotta do',
'No good deed goes unpunished',
'Everything happens for a reason',
'You just have to try a little harder',
'You have to know your limitations',
'Maybe your heart just isn’t into it',
'The only thing to fear is fear itself',
'It wasnt right for you anyway',
'Your negativity is your only hurdle',
'I understand this is difficult for you',
'You’re paddling against the current',
'You just need to believe in yourself',
'One day you’ll see things differently',
'You can be anything you want to be',
'My thoughts go out to you',
'There is always someone worse off than you',
'Good things come to those who wait',
'You have your whole life ahead of you',
'Other people go through this every day',
'If life gives you lemons, make lemonade',
'You just haven’t met the right person yet',
'If at first you don’t succeed, try, try again',
'What doesn’t kill you makes you stronger',
'There’s somebody out there for everyone',
'The best revenge is to have a fulfilling life',
'You don’t need people like that in your life',
'You’re making a mountain out of a molehill',
'We all have to do things we don’t want to do',
'Life doesn’t give you things you can’t handle',
'You’ll be back in the game before you know it',
'No matter what you do, it’s always something',
'If you knew what I knew, you’d think differently',
'Things get better if you try to sstay positive',
]


    

    

    const el = document.querySelector('#output');
    

    let interval;

    document.getElementById('btn').addEventListener(
      "click", function() {
        clearInterval(interval);
        el.classList.remove('visible');
        const randomNumber = Math.floor(Math.random() * platitudes.length);
        el.innerHTML = platitudes[randomNumber];
        el.classList.add('visible');
        interval = setInterval(function() {
            el.classList.remove('visible');
        }, 4000);
      }
    );


    ///////////////// TEST ///////////////////////////////////////

    // const randomNumber = Math.floor(Math.random() * platitudes.length);

    // const randomPlatitude = platitudes[randomNumber];

    // let el = document.querySelector('#output');
    // el.innerHTML = randomPlatitude;

    // var output = document.getElementById("output")

    // let hideOutput = setInterval(function() {output.classList.remove('visible')}, 4000)

    // document.getElementById('btn').addEventListener(
    //   "click", function() {
    //     output.classList.add('visible');
    //     hideOutput;
    //   }
    // );

    // document.getElementById('btn').addEventListener(
    //     "click", function() {
    //      clearInterval(hideOutput)
    //       hideOutput;
    //     }
    //   );
































//////////////////////////////////////////////////
