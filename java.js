 var sites = [
        'oroiyaah/sekstsagaanbogd/activity1.html',
        'oroiyaah/zu/activity2.html',
        'oroiyaah/kidult/activity3.html',
        // 'Add other template/activity directory here'
];

function randomSite() {
        var i = parseInt(Math.random() * sites.length);
        location.href = sites[i];
}

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}
