$(function(){
  var map;
var LocsA = [
    {
        lat: 12.2267,
        lon: 79.6504,
        title: 'Tindivanam',
        html: 'DMI St.Joseph Global School(Tindivanam)<br><br><p><a href="https://dmisjgscbse.edu.in/" target="_blank" style="color:blue; fontweight:bold;"</a>View Website</p>',
        zoom: 4,
        icon: './img/location-icon/1.png',
        // link: 'https://codepen.io/invincibleking77/pen/vEyXxo',
        animation: google.maps.Animation.DROP
    },
    {
        lat: 26.1584,
        lon: 94.5624,
        title: 'Nagland',
        html: 'DMI St.Joseph Global School(Nagland)<br><br><p><a href="https://dmisjgs.org/" target="_blank" style="color:blue; fontweight:bold;"</a>View Website</p>',
        zoom: 4,
        icon: './img/location-icon/2.png',
        animation:google.maps.Animation.DROP
    },
    {
        lat: 18.5204,
        lon: 73.8567,
        title: 'Pune',
        html: 'St.Joseph English Medium School(Pune)<br><br><p><a href="https://stjosephpune.in/" target="_blank" style="color:blue; fontweight:bold;"</a>View Website</p>',
        zoom: 4,
        icon: './img/location-icon/3.png',
      animation:google.maps.Animation.DROP
    },
    {
        lat: 10.3833,
        lon: 78.8001,
        title: 'Pudukottai',
        html: 'DMI St.Joseph Global School(Pudukottai)<br><br><p><a href="https://stjosephpudukottai.org/" target="_blank" style="color:blue; fontweight:bold;"</a>View Website</p>',
        zoom: 4,
        icon: './img/location-icon/4.png',
      animation:google.maps.Animation.DROP
    },
    {
        lat: 9.4515,
        lon: 77.5543,
        title: 'Rajapalayam',
        html: 'St.Joseph International School(Rajapalayam)<br><br><p><a href="https://sjisrjp.in/" target="_blank" style="color:blue; fontweight:bold;"</a>View Website</p>',
        zoom: 4,
        icon: './img/location-icon/5.png',
      animation:google.maps.Animation.DROP
    },
    {
        lat: 11.2342,
        lon: 78.8807,
        title: 'Perambalur',
        html: 'St.Joseph Global School(Perambalur)<br><br><p><a href="http://sjgs.co.in/" target="_blank" style="color:blue; fontweight:bold;"</a>View Website</p>',
        zoom: 4,
        icon: './img/location-icon/6.png',
      animation:google.maps.Animation.DROP
    },
    {
        lat: 13.0598,
        lon: 79.9109,
        title: 'Polivakkam',
        html: 'DMI St.Joseph Global School(Polivakkam)<br><br><p><a href="http://dmisjgspvm.in/" target="_blank" style="color:blue; fontweight:bold;"</a>View Website</p>',
        zoom: 4,
        icon: './img/location-icon/7.png',
      animation:google.maps.Animation.DROP
    },
    {
        lat: 8.9672,
        lon: 77.6370,
        title: 'Deverkulam',
        html: 'St.Joseph Global School(Deverkulam)<br><br><p><a href="http://stjosephssschool.in/" target="_blank" style="color:blue; fontweight:bold;"</a>View Website</p>',
        zoom: 4,
        icon: './img/location-icon/8.png',
      animation:google.maps.Animation.DROP
    },
    {
        lat: 9.8945,
        lon: 78.8467,
        title: 'Sriperambatur',
        html: 'St.Joseph Residential School(Sriperambatur)<br><br><p><a href="#" target="_blank" style="color:blue; fontweight:bold;"</a>View Website</p>',
        zoom: 4,
        icon: './img/location-icon/9.png',
      animation:google.maps.Animation.DROP
    },
    {
        lat: 8.2509,
        lon: 77.5227,
        title: 'Kodikottai',
        html: 'St.Joseph International School(Kodikottai)<br><br><p><a href="http://sjiskkt.in/" target="_blank" style="color:blue; fontweight:bold;"</a>View Website</p>',
        zoom: 4,
        icon: './img/location-icon/10.png',
      animation:google.maps.Animation.DROP
    },
    {
        lat: 11.6643,
        lon: 78.1460,
        title: 'Aralvaimozhi',
        html: 'St.Joseph International School(Aralvaimozhi)<br><br><p><a href="http://sjiskk.in/" target="_blank" style="color:blue; fontweight:bold;"</a>View Website</p>',
        zoom: 4,
        icon: './img/location-icon/1.png',
      animation:google.maps.Animation.DROP
    },
    {
        lat: 10.4258,
        lon: 78.4468,
        title: 'Selam',
        html: 'DMI St.Joseph International School(Selam)<br><br><p><a href="http://sjiskmd.in/" target="_blank" style="color:blue; fontweight:bold;"</a>View Website</p>',
        zoom: 4,
        icon: './img/location-icon/2.png',
      animation:google.maps.Animation.DROP
    },
    {
        lat: 8.9564,
        lon: 77.3152,
        title: 'Yagapuram',
        html: 'DMI St.Joseph Global School(Yagapuram)<br><br><p><a href="http://dmisjgsyp.in/" target="_blank" style="color:blue; fontweight:bold;"</a>View Website</p>',
        zoom: 4,
        icon: './img/location-icon/3.png',
      animation:google.maps.Animation.DROP
    },
    {
        lat: 10.9254,
        lon: 79.8380,
        title: 'Tenkasi',
        html: 'DMI St.Joseph Global School(Tenkasi)<br><br><p><a href="http://dmisjgstks.in/" target="_blank" style="color:blue; fontweight:bold;"</a>View Website</p>',
        zoom: 4,
        icon: './img/location-icon/4.png',
      animation:google.maps.Animation.DROP
    },
     {
        lat: 12.5519,
        lon: 79.5519,
        title: 'Karaikkal',
        html: 'DMI St.Joseph Global School(Karaikkal)<br><br><p><a href="http://stjosephkkl.in/" target="_blank" style="color:blue; fontweight:bold;"</a>View Website</p>',
        zoom: 4,
        icon: './img/location-icon/5.png',
      animation:google.maps.Animation.DROP
    },
    {
        lat: 13.0473,
        lon: 80.0945,
        title: 'Palanchur',
        html: 'Loyola International Residential School(Palanchur)<br><br><p><a href="http://loyolacbse.com/" target="_blank" style="color:blue; fontweight:bold;"</a>View Website</p>',
        zoom: 4,
        icon: './img/location-icon/6.png',
      animation:google.maps.Animation.DROP
    },
    {
        lat:  13.050000,
        lon: 80.089996,
        title: 'Poonamalle',
        html: 'Joseph Vidhya Kshetra(Poonamalle)<br><br><p><a href="https://josephvidyalaya.in/" target="_blank" style="color:blue; fontweight:bold;"</a>View Website</p>',
        zoom: 4,
        icon: './img/location-icon/6.png',
      animation:google.maps.Animation.DROP
    },
    // ------------------------Matriculation---------------------------------
    {
        lat:  13.0403,
        lon: 79.8171,
        title: 'Perambakkam',
        html: 'St.Marys Matriculation Hr.Sec.School(Perambakkam)<br><br><p><a href="https://smmspbk.in/" target="_blank" style="color:blue; fontweight:bold;"</a>View Website</p>',
        zoom: 4,
        icon: './img/location-icon/7.png',
      animation:google.maps.Animation.DROP
    },
    {
        lat:  10.7905,
        lon: 78.7047,
        title: 'Trichy',
        html: 'Shrine Vailankanni Matric Hr.Sec.School(Trichy)<br><br><p><a href="http://svmhsschool.in/" target="_blank" style="color:blue; fontweight:bold;"</a>View Website</p>',
        zoom: 4,
        icon: './img/location-icon/8.png',
      animation:google.maps.Animation.DROP
    },
    {
        lat:  13.3366,
        lon: 79.4408,
        title: 'Pallipat',
        html: 'St.Marys Matriculation Hr.Sec.School(Pallipat)<br><br><p><a href="https://smmsplt.in/" target="_blank" style="color:blue; fontweight:bold;"</a>View Website</p>',
        zoom: 4,
        icon: './img/location-icon/9.png',
      animation:google.maps.Animation.DROP
    },
    {
        lat:  12.0263,
        lon: 79.7330,
        title: 'Vannur',
        html: 'DMI St.Joseph Matric High School(Vannur)<br><br><p><a href="https://stjosephschool.ac.in/" target="_blank" style="color:blue; fontweight:bold;"</a>View Website</p>',
        zoom: 4,
        icon: './img/location-icon/10.png',
      animation:google.maps.Animation.DROP
    },
    {
        lat:  11.0168,
        lon: 76.9558,
        title: 'Coimbatore',
        html: 'Christ The King Matric Hr.Sec.School(Coimbatore)<br><br><p><a href="https://ckmhss.in/" target="_blank" style="color:blue; fontweight:bold;"</a>View Website</p>',
        zoom: 4,
        icon: './img/location-icon/1.png',
      animation:google.maps.Animation.DROP
    },
    {
        lat:  13.0473,
        lon: 80.0945,
        title: 'Poonamalle',
        html: 'St.joseph Matriculation Hr.Sec.School(Poonamalle)<br><br><p><a href="https://sjmhsschool.ac.in/" target="_blank" style="color:blue; fontweight:bold;"</a>View Website</p>',
        zoom: 4,
        icon: './img/location-icon/2.png',
      animation:google.maps.Animation.DROP
    },
    {
        lat:  12.9749,
        lon: 80.1328,
        title: 'Pammal',
        html: 'Annai Vailankanni Matriculation Hr.sce.School(Pammal)<br><br><p><a href="http://avmhss.in/" target="_blank" style="color:blue; fontweight:bold;"</a>View Website</p>',
        zoom: 4,
        icon: './img/location-icon/3.png',
      animation:google.maps.Animation.DROP
    },
    {
        lat:  12.9249,
        lon: 80.1000,
        title: 'Tambaram',
        html: 'Loyola Academy Matric School(Tambaram)<br><br><p><a href="http://loyolaacademy.in/" target="_blank" style="color:blue; fontweight:bold;"</a>View Website</p>',
        zoom: 4,
        icon: './img/location-icon/4.png',
      animation:google.maps.Animation.DROP
    },
    {
        lat:  8.7199,
        lon: 77.7344,
        title: 'Palayamkottai',
        html: 'Don Bosco Matric Hr.Sec.School (Palayamkottai)<br><br><p><a href="http://donboscomhss.in/" target="_blank" style="color:blue; fontweight:bold;"</a>View Website</p>',
        zoom: 4,
        icon: './img/location-icon/5.png',
      animation:google.maps.Animation.DROP
    },

];
  
 map = new Maplace({
    locations: LocsA,
    map_div: '#gmap',
    generate_controls: false,
    start: 0,
  }).Load();
  

$(".loc_link").hover(function(){
  var loc = $(this).data('loc');
  map.ViewOnMap(loc);  
},function(){
  map.ViewOnMap(0);
});

  
});