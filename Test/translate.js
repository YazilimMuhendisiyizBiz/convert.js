$(function(){
		$("#tr").click(function() {
			$(".en").hide();
			$(".tr").show();
			translate("tr");
		});

		$("#en").click(function() {
			$(".tr").hide();
			$(".en").show();
			translate("en");
		});

		var tr ={
			"slogan":"Basit dönüştürme kütüphanesi",
			"metric":"Metrik",
			"data":"Çevirmek istediğiniz değer",
			"source":"Kaynak",
			"target":"Hedef",
			"convert":"Dönüştür",
			"time":"Zaman",
			"temperature":"Sıcaklık",
			"dataunit":"Veri Birimi",
			"angle":"Açı",
			"astronomical":"Astronomik",
			"speed":"Hız",
			"periodic":"Periyodik"
		};

		var en={
			"slogan":"This is a simple conversion library",
			"metric":"Metric",
			"data":"The value you want to convert",
			"source":"Source",
			"target":"Target",
			"convert":"Convert",
			"time":"Time",
			"temperature":"Temperature",
			"dataunit":"Data Unit",
			"angle":"Angle",
			"astronomical":"Astronomical",
			"speed":"Speed",
			"periodic":"Periodic"
		};

		function translate(lang)
		{	
			$("[tkey]").each(function (index)
			{
				var str;
				if(lang == "tr")
					str = tr[$(this).attr('tkey')];
				else if(lang == "en")
					str = en[$(this).attr('tkey')];
	    		$(this).html(str);
			});
		}

	})