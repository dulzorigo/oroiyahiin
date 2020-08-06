var activities = [
    'random text 1',
    'random text 2',
    'random text 3',
    'random text 4',
    'random text 5',
    'random text 6',
    'random text 7',
    'random text 8',
    'random text 9',
    'random text 10',
    
]



function newActivity() {
    var randomNumber = Math.floor(Math.random() * (activities.length));
    document.getElementById('activityDisplay').innerHTML = activities[randomNumber];
}