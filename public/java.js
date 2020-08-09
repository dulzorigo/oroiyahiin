 var sites = [
        'oroiyaah/lilthuge/lilthuge.html',
        //'oroiyaah/kidult/kidult.html',
        'oroiyaah/zu-01/zu-01.html',
        'oroiyaah/husliin-zaluu/husliin-zaluu.html',
        'oroiyaah/kanshifu/kanshifu.html',
        'oroiyaah/ursuldugch-01/ursuldugch-01.html',
        'oroiyaah/odoobolioo/odoo-bolioo.html',
        'oroiyaah/nomiinsan/nomiin-san.html',
        'oroiyaah/hippocards/hippo.html'
        // ^^^ Add other template/activity directory here ^^^
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

setTimeout(function() {
        $('#mydiv').hide();
    }, 3000);
