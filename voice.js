 function startRecognizer()
      {
          var rec= new webkitSpeechRecognition();
          rec.lang='uk';
          
          rec.onresult = function(e)
          {
              var rez= e.results[e.resultIndex];
              var str= rez[0].transcript;
              console.log ('рез' +str);
        
		if ((str.indexOf('головна')>=0) || (str.indexOf('головна')>=0)) div_show("головна")
              if ((str.indexOf('Instagram')>=0) || (str.indexOf('Instagram')>=0)) div_show("Instagram") 
              if ((str.indexOf('Google')>=0) || (str.indexOf('Google')>=0)) div_show("Google")
              if ((str.indexOf('новинки')>=0) || (str.indexOf('новинки')>=0)) div_show("новинки")
              if ((str.indexOf('нові')>=0) || (str.indexOf('нові')>=0)) div_show("нові")
               if ((str.indexOf('танцювальні')>=0) || (str.indexOf('танцювальні')>=0)) div_show("танцювальні")
               if ((str.indexOf('Dance')>=0) || (str.indexOf('Dance')>=0)) div_show("Dance")
              if ((str.indexOf('танцювальна')>=0) || (str.indexOf('танцювальна')>=0)) div_show("танцювальна")
              if ((str.indexOf('денс')>=0) || (str.indexOf('денс')>=0)) div_show("денс")
              if ((str.indexOf('танцювальная')>=0) || (str.indexOf('танювальная')>=0)) div_show("танювальная")
               if ((str.indexOf('клубняк')>=0) || (str.indexOf('клубняк')>=0)) div_show("клубняк")
               if ((str.indexOf('клубна')>=0) || (str.indexOf('клубна')>=0)) div_show("клубна")
               if ((str.indexOf('клубная')>=0) || (str.indexOf('клубная')>=0)) div_show("клубная")
               if ((str.indexOf('Club')>=0) || (str.indexOf('Club')>=0)) div_show("Club")
               if ((str.indexOf('хіти 90-х')>=0) || (str.indexOf('хіти 90-х')>=0)) div_show("хіти 90-х")
               if ((str.indexOf('90')>=0) || (str.indexOf('90')>=0)) div_show("90")
               if ((str.indexOf('хіти')>=0) || (str.indexOf('хіти')>=0)) div_show("хіти")
               if ((str.indexOf('90-х')>=0) || (str.indexOf('90-х')>=0)) div_show("90-х")
              if ((str.indexOf('про мене')>=0) || (str.indexOf('про мене')>=0)) div_show("про мене")
              if ((str.indexOf('мене')>=0) || (str.indexOf('мене')>=0)) div_show("мене")
              if ((str.indexOf('створив')>=0) || (str.indexOf('створив')>=0)) div_show("створив")
              if ((str.indexOf('хто')>=0) || (str.indexOf('хто')>=0)) div_show("хто")
              if ((str.indexOf('хто створив')>=0) || (str.indexOf('хто створив')>=0)) div_show("хто створив")
              if ((str.indexOf('Yandex')>=0) || (str.indexOf('Yandex')>=0)) div_show("Yandex")
              if ((str.indexOf('Яндекс')>=0) || (str.indexOf('Яндекс')>=0)) div_show("Яндекс")
              if ((str.indexOf('zk fm')>=0) || (str.indexOf('zk fm')>=0)) div_show("zk fm")
              if ((str.indexOf('zk')>=0) || (str.indexOf('zk')>=0)) div_show("zk")
              if ((str.indexOf('ззк')>=0) || (str.indexOf('зк')>=0)) div_show("ззк")
              if ((str.indexOf('зк')>=0) || (str.indexOf('зк')>=0)) div_show("зк")
              if ((str.indexOf('fm')>=0) || (str.indexOf('fm')>=0)) div_show("fm")
              if ((str.indexOf('zk.fm')>=0) || (str.indexOf('zk.fm')>=0)) div_show("zk.fm")
              if ((str.indexOf('FM')>=0) || (str.indexOf('FM')>=0)) div_show("FM")
              if ((str.indexOf('dj')>=0) || (str.indexOf('dj')>=0)) div_show("dj")
              if ((str.indexOf('DJ')>=0) || (str.indexOf('DJ')>=0)) div_show("DJ")
              if ((str.indexOf('DJ ru')>=0) || (str.indexOf('DJ ru')>=0)) div_show("DJ ru")
              if ((str.indexOf('сифон')>=0) || (str.indexOf('сифон')>=0)) div_show("сифон")
              if ((str.indexOf('сефон')>=0) || (str.indexOf('сефон')>=0)) div_show("сефон")
              if ((str.indexOf('сифон me')>=0) || (str.indexOf('сифон me')>=0)) div_show("сифон me")
              if ((str.indexOf('сефон me')>=0) || (str.indexOf('сефон me')>=0)) div_show("сефон me")
              
      }
          
          rec.onend = function()
          {
              startRecognizer();
          }
          rec.start();
      }
      startRecognizer();
      
      function div_show(num)
      {
          $("#div1").css('display');
  
      switch (num)
          {
                 case "головна": 
                  location.href ="index.html"
                break;  
		case "Instagram": 
                  location.href ="https://www.instagram.com/__alex__z__/"
                break;
                  case "Google": 
                 location.href ="https://www.google.com/"
                break;
                   case "Dance": 
                 location.href ="dance.html"
                break;
                   case "новинки": 
                 location.href ="news.html"
                break;
                   case "нові": 
                 location.href ="news.html"
                break;
                   case "танцювальні": 
                 location.href ="dance.html"
                break;
                   case "танцювальна": 
                 location.href ="dance.html"
                break;
                   case "танцювальная": 
                 location.href ="dance.html"
                break;
                   case "денс": 
                 location.href ="dance.html"
                break;
                  case "клубна": 
                 location.href ="club.html"
                break;
                  case "клубняк": 
                 location.href ="club.html"
                break;
                  case "клубная": 
                 location.href ="club.html"
                break;
                  case "хіти 90-х": 
                 location.href ="music90.html"
                break;
                  case "хіти": 
                 location.href ="music90.html"
                break;
                  case "90": 
                 location.href ="music90.html"
                break;
                  case "90-х": 
                 location.href ="music90.html"
                break;
                  case "про мене": 
                 location.href ="aboutme.html"
                break;
                  case "про": 
                 location.href ="aboutme.html"
                break;
                  case "мене": 
                 location.href ="aboutme.html"
                break;
                  case "створив": 
                 location.href ="aboutme.html"
                break;
                  case "хто": 
                 location.href ="aboutme.html"
                break;
                  case "хто створив": 
                 location.href ="aboutme.html"
                break;
                   case "Yandex": 
                 location.href ="https://yandex.ua/"
                break;
                   case "Яндекс": 
                 location.href ="https://yandex.ua/"
                break;
                   case "zk fm": 
                 location.href ="https://z1.fm/"
                break;
                   case "zk": 
                 location.href ="https://z1.fm/"
                break;
                   case "fm": 
                 location.href ="https://z1.fm/"
                break;
                   case "zk.fm": 
                 location.href ="https://z1.fm/"
                break;
                   case "FM": 
                 location.href ="https://z1.fm/"
                break;
                  case "ззк": 
                 location.href ="https://z1.fm/"
                break;
                  case "зк": 
                 location.href ="https://z1.fm/"
                break;
                   case "DJ": 
                 location.href ="https://dj.ru/music"
                break;
                  case "DJ ru": 
                 location.href ="https://dj.ru/music"
                break;
                  case "dj": 
                 location.href ="https://dj.ru/music"
                break;
                   case "сифон me": 
                 location.href ="https://sefon.me/"
                break;
                   case "сефон me": 
                 location.href ="https://sefon.me/"
                break;
                   case "сифон": 
                 location.href ="https://sefon.me/"
                break;
                   case "сефон": 
                 location.href ="https://sefon.me/"
                break;

                  
          }
      }