let about_btn = document.getElementById('about')
about_btn.addEventListener('click', function() {
    swal({
        html: '<html>   <h2 style=" font-family: Verdana, Geneva, Tahoma, sans-serif; margin-top: -10px;">Біз</h2><br> <p style="margin-top: -10px; text-align: justify; font-family: Verdana, Geneva, Tahoma, sans-serif; padding: 15px; margin-top: -20px;">Біздің <strong>Rich House</strong> жылжымайтын мүлікті жалға беру тобы. Қарағанды қаласында пәтерлерді тәуліктік жалға беру нарығында жұмыс істейді.<br> Біздің басты міндетіміз-көптеген жылдар бойы біздің тұрақты қонақтарымызға айналатын қанағаттанарлық клиенттер. Біз қызметтердің сапасын қадағалаймыз. Жаңа киімдерді ауыстырумен жалпы тазалау әр қонақтан кейін міндетті түрде жүзеге асырылады және сапаны тазалау менеджері жеке бақылайды. Біз өз беделімізді, пәтерлеріміздің сапасын және көршілеріміздің тыныштығын бағалаймыз, сондықтан азаматтардың белгілі бір топтарын жалға беруден жиі бас тартамыз. Кәмелетке толмағандар, туған күнін және басқа корпорацияларды тойлағысы келетіндер сияқты.</p></html>'
      })
})

let about_btn2 = document.getElementById('aboutses')
about_btn2.addEventListener('click', function() {
    swal({
        html: '<html>   <h2 style=" font-family: Verdana, Geneva, Tahoma, sans-serif; margin-top: -10px;">Біз</h2><br> <p style="margin-top: -10px; text-align: justify; font-family: Verdana, Geneva, Tahoma, sans-serif; padding: 15px; margin-top: -20px;">Біздің <strong>Rich House</strong> жылжымайтын мүлікті жалға беру тобы. Қарағанды қаласында пәтерлерді тәуліктік жалға беру нарығында жұмыс істейді.<br> Біздің басты міндетіміз-көптеген жылдар бойы біздің тұрақты қонақтарымызға айналатын қанағаттанарлық клиенттер. Біз қызметтердің сапасын қадағалаймыз. Жаңа киімдерді ауыстырумен жалпы тазалау әр қонақтан кейін міндетті түрде жүзеге асырылады және сапаны тазалау менеджері жеке бақылайды. Біз өз беделімізді, пәтерлеріміздің сапасын және көршілеріміздің тыныштығын бағалаймыз, сондықтан азаматтардың белгілі бір топтарын жалға беруден жиі бас тартамыз. Кәмелетке толмағандар, туған күнін және басқа корпорацияларды тойлағысы келетіндер сияқты.</p></html>'
      })
})

let wifi_btn = document.getElementById('wifibtn')
wifi_btn.addEventListener('click',function() {
  swal({
    width: 300,
    html: '<h3>Имя : Rich.krg</h3><h3 style="margin-top:-12px;">Пароль : rich7788</h3>',
  })
})


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
