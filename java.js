    var sites = [
        'oroiyaah/sekstsagaanbogd/activity1.html',
        'oroiyaah/zu/activity2.html',
        'oroiyaah/kidult/activity3.html',
    ];

    function randomSite() {
        var i = parseInt(Math.random() * sites.length);
        location.href = sites[i];
    }