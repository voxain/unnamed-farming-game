var runde=1,weatherdummy=1000;
function checkfields() {
	var i=1;
	if (daytime=="Tag") {
			nachtmachen()
		}else if (daytime=="Nacht") {
			tagmachen()
		}
	money+=pro_runde
	for (i==1;i<36;i++) {
		//Für Weizen
		if (felderinbesitz[i][4]==true&&felderinbesitz[i][0]==true&&felderinbesitz[i][1]!=6&&felderinbesitz[i][3]==false&&felderinbesitz[i][9]==false&&felderinbesitz[i][5]==true&&felderinbesitz[i][6]==false) {
			var hik=Math.random()
			hik*=200
			hik=Math.ceil(hik)
			var c=felderinbesitz[i][1]
			c+=1
			felderinbesitz[i][1]=c
			document.getElementById("feld"+i).src="data/images/felder/foliage_wheat_distance"+c+"_diffuse.png"
			if (hik==4) {
				confirm ("Oh nein!  Feld "+i+" ist einer Insektenplage zum Opfer gefallen!Am besten so schnell wie möglich grubbern und dann spritzen!")
				felderinbesitz[i][9]=true
				document.getElementById("feld"+i).src="data/images/felder/buginvasion.gif"
			}
		}
		//Für Mais
		if (felderinbesitz[i][4]==true&&felderinbesitz[i][0]==true&&felderinbesitz[i][1]!=6&&felderinbesitz[i][3]==false&&felderinbesitz[i][9]==false&&felderinbesitz[i][6]==true&&felderinbesitz[i][5]==false) {
			var hik=Math.random()
			hik*=100
			hik=Math.ceil(hik)
			var c=felderinbesitz[i][1]
			c+=1
			felderinbesitz[i][1]=c
			document.getElementById("feld"+i).src="data/images/felder/foliage_maize_distance"+c+"_diffuse.png"
			if (hik==4) {
				confirm ("Oh nein!  Feld "+i+" ist einer Insektenplage zum Opfer gefallen!Am besten so schnell wie möglich grubbern und dann spritzen!")
				felderinbesitz[i][9]=true
				document.getElementById("feld"+i).src="data/images/felder/buginvasion.gif"
			}
		}
	}
	runde+=1
	if (mehrfelder==true&&runde>5) {
	var l=Math.random()
	l*=1000
		if (l>0&&l<50) {
			document.getElementById("rathaus").style.background="url('Stadthausexcl.png')"
			rathaus="mehrfelder"
			confirm("Rathaus:Komm doch mal vorbei! Wir möchten etwas mit dir besprechen.")
			mehrfelder=false
		}
	}
	var rain=Math.random();
	rain*=weatherdummy
	if (rain>0&&rain<100) {
		document.getElementById("clouds").style.animation="clouds 2s linear infinite"
		document.getElementById("clouds").style.background='url("data/images/env/rain.png")'
		if(sFx==true)document.getElementById("regen").play()
		document.getElementById("regen").volume=0.10
		document.getElementById("env").src='data/images/env/icons/rain.png'
	}
	else {
		document.getElementById("clouds").style.animation="clouds 50s linear infinite"
		document.getElementById("clouds").style.background='url("data/images/env/clouds.png")'
		document.getElementById("regen").pause()
		document.getElementById("env").src='data/images/env/icons/sun.png'
	}
	curcheckachs()
}
document.addEventListener("keydown", testi);
function testi(event) {
if (event.which==19) confirm ("Spiel pausiert")
}
function regen() {
		document.getElementById("clouds").style.animation="clouds 2s linear infinite"
		document.getElementById("clouds").style.background='url("data/images/env/rain.png")'
		if(sFx==true)document.getElementById("regen").play()
		document.getElementById("regen").volume=0.10
		document.getElementById("env").src='data/images/env/icons/rain.png'
	}
function clean() {
		document.getElementById("clouds").style.animation="clouds 50s linear infinite"
		document.getElementById("clouds").style.background='url("data/images/env/clouds.png")'
		document.getElementById("regen").pause()
		document.getElementById("env").src='data/images/env/icons/sun.png'
	}
	var anzahlbesfeld=2
	function curcheckachs() {
		if (anzahlbesfeld>=5&&erfolge[0]==false) {alert("Erfolg erzielt","Du hast den Erfolg '5 Felder' Freigeschaltet! Zur Belohnung erhälst du $100.");money+=100;document.getElementById("5feld").style.opacity="1";erfolge[0]=true;document.getElementById("erfolg").play()}
		if (anzahlbesfeld>=15&&erfolge[1]==false) {alert("Erfolg erzielt","Du hast den Erfolg '15 Felder' Freigeschaltet! Zur Belohnung erhälst du $300.");money+=300;document.getElementById("15feld").style.opacity="1";erfolge[1]=true;document.getElementById("erfolg").play()}
		if (anzahlbesfeld>=25&&erfolge[2]==false) {alert("Erfolg erzielt","Du hast den Erfolg '25 Felder' Freigeschaltet! Zur Belohnung erhälst du $500.");money+=500;document.getElementById("25feld").style.opacity="1";erfolge[2]=true;document.getElementById("erfolg").play()}
		if (anzahlbesfeld>=35&&erfolge[3]==false) {alert("Erfolg erzielt","Du hast den Erfolg '35 Felder' Freigeschaltet! Zur Belohnung erhälst du $1000. Außerdem wird das Gebäude 'Coffeeshop' freigechaltet!");money+=1000;document.getElementById("35feld").style.opacity="1";document.getElementById("coffeehopbutton").innerHTML="Kaufen($2000)";erfolge[3]=true;document.getElementById("erfolg").play();coffeeshop_able=true}
		if (money>=10000&&erfolge[4]==false) {alert("Erfolg erzielt","Herzlichen Glückwunsch zu 10000$!Du hast den Erfolg 'Neureich' Freigeschaltet!");document.getElementById("neureich").style.opacity="1";erfolge[4]=true;document.getElementById("erfolg").play()}
		if (money>=50000&&erfolge[5]==false) {alert("Erfolg erzielt","Herzlichen Glückwunsch zu 50000$!Du hast den Erfolg 'Eine Menge Zaster' Freigeschaltet!");document.getElementById("zaster").style.opacity="1";erfolge[5]=true;document.getElementById("erfolg").play()}
		if (money>=100000&&erfolge[6]==false) {alert("Erfolg erzielt","Herzlichen Glückwunsch zu 100000$!Du hast den Erfolg 'Minenarbeiter' Freigeschaltet!");document.getElementById("arbeiter").style.opacity="1";erfolge[6]=true;document.getElementById("erfolg").play()}
		if (money>=1000000&&erfolge[7]==false) {alert("Erfolg erzielt","Herzlichen Glückwunsch zu 1000000$!Du hast den Erfolg 'Die erste Millionen' Freigeschaltet!");document.getElementById("millionen").style.opacity="1";erfolge[7]=true;document.getElementById("erfolg").play()}
		if (runde==10&&erfolge[8]==false) {alert("Erfolg erzielt","Du hast den Erfolg '10 Runden' Freigeschaltet! Zur Belohnung erhälst du $100.");money+=100;document.getElementById("10rund").style.opacity="1";erfolge[8]=true;document.getElementById("erfolg").play()}
		if (runde==50&&erfolge[9]==false) {alert("Erfolg erzielt","Du hast den Erfolg '50 Runden' Freigeschaltet! Zur Belohnung erhälst du $500.");money+=500;document.getElementById("50rund").style.opacity="1";erfolge[9]=true;document.getElementById("erfolg").play()}
		if (runde==100&&erfolge[10]==false) {alert("Erfolg erzielt","Du hast den Erfolg '100 Runden' Freigeschaltet! Zur Belohnung erhälst du $3000.");money+=3000;document.getElementById("100rund").style.opacity="1";erfolge[10]=true;document.getElementById("erfolg").play()}
		if (runde==1000&&erfolge[11]==false) {alert("Erfolg erzielt","Du hast den Erfolg 'PRO-Gamer' Freigeschaltet! Zur Belohnung erhälst du $10000.");money+=10000;document.getElementById("1000rund").style.opacity="1";erfolge[11]=true;document.getElementById("erfolg").play()}
	}