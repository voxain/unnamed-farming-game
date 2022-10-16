// Marcel und Renes Spiel ohne Namen
// ©2015-2016 Marcel(Grafiker) und Rene(Coder)
// ES Mges 9


document.addEventListener("keydown",keyfunc)
function keyfunc(event) {
	if (event.which==49)setaction(1)
	if (event.which==51)setaction(2)
	if (event.which==50)setaction(3)
	if (event.which==52)setaction(4)
	if (event.which==53)setaction(6)
	if (event.which==69)showachs()
	if (event.which==32)changestil("none")
	if (event.which==19||event.which==80)confirm("Spiel pausiert")
}
function musicpause() {
	var ie=document.getElementsByTagName("audio")
	ie[0].pause()
	ie[1].pause()
	ie[2].pause()
	ie[3].pause()
	ie[4].pause()
	ie[5].pause()
	ie[6].pause()
	ie[7].pause()
	ie[8].pause()
	ie[9].pause()
	ie[10].pause()
	ie[11].pause()
	ie[12].pause()
	ie[13].pause()
	ie[14].pause()
	ie[15].pause()
	ie[16].pause()
	ie[17].pause()
	ie[18].pause()
	ie[19].pause()
	ie[20].pause()
	ie[21].pause()
	ie[22].pause()
	ie[23].pause()

}
function changestil(newstyle){

	if(newstyle=="none"){
		musicpause()
		sFx=false
	}
	else if(newstyle=="default"){
		musicpause()
		sFx=true
		document.getElementById("dogblu").play()
	}
	else if(newstyle=="ambient"){
		musicpause()
		sFx=true
		document.getElementById("ambient").play()
	}
	else if(newstyle=="rock"){
		musicpause()
		sFx=true
		document.getElementById("rock1").play()
	}
	else if(newstyle=="electro"){
		musicpause()
		sFx=true
		document.getElementById("electro1").play()
	}
}
function tutorial(){document.open("tutorial.html");window.document.writeln('<a href="tutorial.html">Hier klicken</a>')}
var erfolge=new Array(false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false)
//5felder,15felder,25felder,35felder,$10000,$50000,$100000,$1000000,10runden,50runden,100runden,1000runden,shopper
var idle=false,sFx=true,stil="default";
var daytime="Tag"
var money=500,wheat=10,maize=10,wheat_price=50,maize_price=50,rathaus="nichts",mehrfelder=true;
var rundenzeit=50,shop_page=1,saat="wheat";
var grubber=new Array("Koeckerling Trio 300 M"),pro_runde=0,treibhaus=new Array("Tomaten"),maehdresch=new Array("New Holland TC5 90"),maehwerk=1,saemasch=new Array("Poettinger Vitasem 302 Add"),spritze=new Array("Amazone UF 1801"),saatgut=new Array("Weizen"),duenger=0,guellefass=new Array("Marshall ST 1800"),traktor=new Array("Huerlimann H488"),haenger=new Array("Brantner E8014","Krampe Big Body 900s","Gesamtkapazität");
var fluid=new Array("bugKiller","Wasser"),gebäude=new Array("coffeeshop","trockenfarm");
var action=1 //1=Grubbern 2=Ernten 3=Säen 4=Spritzen 5=Düngen
grubber[0]=new Array("1"/*Im Besitz*/,"0"/*Im Einsatz*/) 
maehdresch[0]=new Array("1"/*Im Besitz*/,"0"/*Im Einsatz*/)
saemasch[0]=new Array("1"/*Im Besitz*/,"0"/*Im  Einsatz*/)
spritze[0]=new Array("0"/*Im Besitz*/,"0"/*Im  Einsatz*/)
traktor[0]=new Array("1"/*Im Besitz*/,"0"/*Im  Einsatz*/)
traktor[1]=new Array("0"/*Im Besitz*/,"0"/*Im  Einsatz*/)
haenger[0]=new Array("1"/*Im Besitz*/,"0"/*Im  Einsatz*/,20/*Kapazität*/)
haenger[1]=new Array("0"/*Im Besitz*/,"0"/*Im  Einsatz*/,50/*Kapazität*/)
treibhaus[0]=new Array("0"/*Im Besitz*/,"0"/*Pro Runde*/)
gebäude[0]=new Array("0"/*Im Besitz*/,"30"/*Pro Runde*/)
gebäude[1]=new Array("0"/*Im Besitz*/,"0"/*Pro Runde*/)
haenger[2]=20
saatgut[0]=new Array("10"/*Anzahl*/,"fail")
fluid[0]=new Array("0")
fluid[1]=new Array("0")
var felderinbesitz=new Array("fail",true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false)
felderinbesitz[1]=new Array (false/*besät*/,2/*Wachstumsstufe*/,false/*geerntet*/,false/*gedüngt*/,true /*In Besitz*/,false/*Weizen?*/,false/*Mais?*/,false/*Treibhaus*/,false/*Farmland?*/,false/*Insektenplage*/)
felderinbesitz[2]=new Array (false/*besät*/,2/*Wachstumsstufe*/,false/*geerntet*/,false/*gedüngt*/,true /*In Besitz*/,false/*Weizen?*/,false/*Mais?*/,false/*Treibhaus*/,false/*Farmland?*/,false/*Insektenplage*/)
felderinbesitz[3]=new Array (false/*besät*/,2/*Wachstumsstufe*/,false/*geerntet*/,false/*gedüngt*/,false/*In Besitz*/,false/*Weizen?*/,false/*Mais?*/,false/*Treibhaus*/,false/*Farmland?*/,false/*Insektenplage*/)
felderinbesitz[4]=new Array (false/*besät*/,2/*Wachstumsstufe*/,false/*geerntet*/,false/*gedüngt*/,false/*In Besitz*/,false/*Weizen?*/,false/*Mais?*/,false/*Treibhaus*/,false/*Farmland?*/,false/*Insektenplage*/)
felderinbesitz[5]=new Array (false/*besät*/,2/*Wachstumsstufe*/,false/*geerntet*/,false/*gedüngt*/,false/*In Besitz*/,false/*Weizen?*/,false/*Mais?*/,false/*Treibhaus*/,false/*Farmland?*/,false/*Insektenplage*/)
felderinbesitz[6]=new Array (false/*besät*/,2/*Wachstumsstufe*/,false/*geerntet*/,false/*gedüngt*/,false/*In Besitz*/,false/*Weizen?*/,false/*Mais?*/,false/*Treibhaus*/,false/*Farmland?*/,false/*Insektenplage*/)
felderinbesitz[7]=new Array (false/*besät*/,2/*Wachstumsstufe*/,false/*geerntet*/,false/*gedüngt*/,false/*In Besitz*/,false/*Weizen?*/,false/*Mais?*/,false/*Treibhaus*/,false/*Farmland?*/,false/*Insektenplage*/)
felderinbesitz[8]=new Array (false/*besät*/,2/*Wachstumsstufe*/,false/*geerntet*/,false/*gedüngt*/,false/*In Besitz*/,false/*Weizen?*/,false/*Mais?*/,false/*Treibhaus*/,false/*Farmland?*/,false/*Insektenplage*/)
felderinbesitz[9]=new Array (false/*besät*/,2/*Wachstumsstufe*/,false/*geerntet*/,false/*gedüngt*/,false/*In Besitz*/,false/*Weizen?*/,false/*Mais?*/,false/*Treibhaus*/,false/*Farmland?*/,false/*Insektenplage*/)
felderinbesitz[10]=new Array(false/*besät*/,2/*Wachstumsstufe*/,false/*geerntet*/,false/*gedüngt*/,false/*In Besitz*/,false/*Weizen?*/,false/*Mais?*/,false/*Treibhaus*/,false/*Farmland?*/,false/*Insektenplage*/)
felderinbesitz[11]=new Array(false/*besät*/,2/*Wachstumsstufe*/,false/*geerntet*/,false/*gedüngt*/,false/*In Besitz*/,false/*Weizen?*/,false/*Mais?*/,false/*Treibhaus*/,false/*Farmland?*/,false/*Insektenplage*/)
felderinbesitz[12]=new Array(false/*besät*/,2/*Wachstumsstufe*/,false/*geerntet*/,false/*gedüngt*/,false/*In Besitz*/,false/*Weizen?*/,false/*Mais?*/,false/*Treibhaus*/,false/*Farmland?*/,false/*Insektenplage*/)
felderinbesitz[13]=new Array(false/*besät*/,2/*Wachstumsstufe*/,false/*geerntet*/,false/*gedüngt*/,false/*In Besitz*/,false/*Weizen?*/,false/*Mais?*/,false/*Treibhaus*/,false/*Farmland?*/,false/*Insektenplage*/)
felderinbesitz[14]=new Array(false/*besät*/,2/*Wachstumsstufe*/,false/*geerntet*/,false/*gedüngt*/,false/*In Besitz*/,false/*Weizen?*/,false/*Mais?*/,false/*Treibhaus*/,false/*Farmland?*/,false/*Insektenplage*/)
felderinbesitz[15]=new Array(false/*besät*/,2/*Wachstumsstufe*/,false/*geerntet*/,false/*gedüngt*/,false/*In Besitz*/,false/*Weizen?*/,false/*Mais?*/,false/*Treibhaus*/,false/*Farmland?*/,false/*Insektenplage*/)
felderinbesitz[16]=new Array(false/*besät*/,2/*Wachstumsstufe*/,false/*geerntet*/,false/*gedüngt*/,false/*In Besitz*/,false/*Weizen?*/,false/*Mais?*/,false/*Treibhaus*/,false/*Farmland?*/,false/*Insektenplage*/)
felderinbesitz[17]=new Array(false/*besät*/,2/*Wachstumsstufe*/,false/*geerntet*/,false/*gedüngt*/,false/*In Besitz*/,false/*Weizen?*/,false/*Mais?*/,false/*Treibhaus*/,false/*Farmland?*/,false/*Insektenplage*/)
felderinbesitz[18]=new Array(false/*besät*/,2/*Wachstumsstufe*/,false/*geerntet*/,false/*gedüngt*/,false/*In Besitz*/,false/*Weizen?*/,false/*Mais?*/,false/*Treibhaus*/,false/*Farmland?*/,false/*Insektenplage*/)
felderinbesitz[19]=new Array(false/*besät*/,2/*Wachstumsstufe*/,false/*geerntet*/,false/*gedüngt*/,false/*In Besitz*/,false/*Weizen?*/,false/*Mais?*/,false/*Treibhaus*/,false/*Farmland?*/,false/*Insektenplage*/)
felderinbesitz[20]=new Array(false/*besät*/,2/*Wachstumsstufe*/,false/*geerntet*/,false/*gedüngt*/,false/*In Besitz*/,false/*Weizen?*/,false/*Mais?*/,false/*Treibhaus*/,false/*Farmland?*/,false/*Insektenplage*/)
felderinbesitz[21]=new Array(false/*besät*/,2/*Wachstumsstufe*/,false/*geerntet*/,false/*gedüngt*/,false/*In Besitz*/,false/*Weizen?*/,false/*Mais?*/,false/*Treibhaus*/,false/*Farmland?*/,false/*Insektenplage*/)
felderinbesitz[22]=new Array(false/*besät*/,2/*Wachstumsstufe*/,false/*geerntet*/,false/*gedüngt*/,false/*In Besitz*/,false/*Weizen?*/,false/*Mais?*/,false/*Treibhaus*/,false/*Farmland?*/,false/*Insektenplage*/)
felderinbesitz[23]=new Array(false/*besät*/,2/*Wachstumsstufe*/,false/*geerntet*/,false/*gedüngt*/,false/*In Besitz*/,false/*Weizen?*/,false/*Mais?*/,false/*Treibhaus*/,false/*Farmland?*/,false/*Insektenplage*/)
felderinbesitz[24]=new Array(false/*besät*/,2/*Wachstumsstufe*/,false/*geerntet*/,false/*gedüngt*/,false/*In Besitz*/,false/*Weizen?*/,false/*Mais?*/,false/*Treibhaus*/,false/*Farmland?*/,false/*Insektenplage*/)
felderinbesitz[25]=new Array(false/*besät*/,2/*Wachstumsstufe*/,false/*geerntet*/,false/*gedüngt*/,false/*In Besitz*/,false/*Weizen?*/,false/*Mais?*/,false/*Treibhaus*/,false/*Farmland?*/,false/*Insektenplage*/)
felderinbesitz[26]=new Array(false/*besät*/,2/*Wachstumsstufe*/,false/*geerntet*/,false/*gedüngt*/,true/*In Besitz*/,false/*Weizen?*/,false/*Mais?*/,false/*Treibhaus*/,false/*Farmland?*/,false/*Insektenplage*/)
felderinbesitz[27]=new Array(false/*besät*/,2/*Wachstumsstufe*/,false/*geerntet*/,false/*gedüngt*/,true/*In Besitz*/,false/*Weizen?*/,false/*Mais?*/,false/*Treibhaus*/,false/*Farmland?*/,false/*Insektenplage*/)
felderinbesitz[28]=new Array(false/*besät*/,2/*Wachstumsstufe*/,false/*geerntet*/,false/*gedüngt*/,true/*In Besitz*/,false/*Weizen?*/,false/*Mais?*/,false/*Treibhaus*/,false/*Farmland?*/,false/*Insektenplage*/)
felderinbesitz[29]=new Array(false/*besät*/,2/*Wachstumsstufe*/,false/*geerntet*/,false/*gedüngt*/,true/*In Besitz*/,false/*Weizen?*/,false/*Mais?*/,false/*Treibhaus*/,false/*Farmland?*/,false/*Insektenplage*/)
felderinbesitz[30]=new Array(false/*besät*/,2/*Wachstumsstufe*/,false/*geerntet*/,false/*gedüngt*/,false/*In Besitz*/,false/*Weizen?*/,false/*Mais?*/,false/*Treibhaus*/,false/*Farmland?*/,false/*Insektenplage*/)
felderinbesitz[31]=new Array(false/*besät*/,2/*Wachstumsstufe*/,false/*geerntet*/,false/*gedüngt*/,false/*In Besitz*/,false/*Weizen?*/,false/*Mais?*/,false/*Treibhaus*/,false/*Farmland?*/,false/*Insektenplage*/)
felderinbesitz[32]=new Array(false/*besät*/,2/*Wachstumsstufe*/,false/*geerntet*/,false/*gedüngt*/,false/*In Besitz*/,false/*Weizen?*/,false/*Mais?*/,false/*Treibhaus*/,false/*Farmland?*/,false/*Insektenplage*/)
felderinbesitz[33]=new Array(false/*besät*/,2/*Wachstumsstufe*/,false/*geerntet*/,false/*gedüngt*/,false/*In Besitz*/,false/*Weizen?*/,false/*Mais?*/,false/*Treibhaus*/,false/*Farmland?*/,false/*Insektenplage*/)
felderinbesitz[34]=new Array(false/*besät*/,2/*Wachstumsstufe*/,false/*geerntet*/,false/*gedüngt*/,false/*In Besitz*/,false/*Weizen?*/,false/*Mais?*/,false/*Treibhaus*/,false/*Farmland?*/,false/*Insektenplage*/)
felderinbesitz[35]=new Array(false/*besät*/,2/*Wachstumsstufe*/,false/*geerntet*/,false/*gedüngt*/,false/*In Besitz*/,false/*Weizen?*/,false/*Mais?*/,false/*Treibhaus*/,false/*Farmland?*/,false/*Insektenplage*/)
var time=new Date()
var month=time.getMonth()+1
var day=time.getDate(); 
var xmas=false
function laden() {
var tipnum=Math.random()
tipnum*=5
tipnum=Math.round(tipnum)
document.getElementById("tip").value=tips[tipnum]
	if ((day>=20&&day<=26)&&month=="12") {
		document.getElementById("clouds").style.background='url("data/images/env/snow.png")'
		document.getElementById("dogblu").src="data/music/xmas_music.mp3"
		xmas=true
	}
	//document.getElementById("body").background="11357wide.jpg"
	document.getElementById("intro").play()
	document.getElementById("body").style.cursor="none"
	var id=setTimeout("willkommen()",5000);
}
function tipalert() {
	alert("Tips","<input type='button' class=display id=altip></input></br><button onclick='tipshuffle()'>Nächster</button>",{width:800})
	document.getElementById("altip").value=tips[1]
}
function tipshuffle() {
	var tipnum=Math.random()
	tipnum*=4
	tipnum=Math.round(tipnum)
	document.getElementById("altip").value=tips[tipnum]
}
//application Cache
//Chachestorage
//varName.charAt(2)
//varName.length()
//varName.endsWith()
//varName.startsWith()
//ignoreKeys = true;
function willkommen() {
	document.getElementById("load").pause()
var jar=navigator.javaEnabled();
ignoreKeys = true;
document.getElementById("body").style.cursor="default"
document.getElementById("clouds").style.display="block"
var nm=navigator.appName
var nmt=navigator.appCodeName
	if (nm != "Netscape"||nmt!="Mozilla") {
      alert('ERROR','Du brauchst Google Chrome für dieses Spiel!')
document.getElementById("loading_screen").style.display="none"
	}
else{
	if (xmas==true) {
		document.getElementById("dogblu").play()
	}
	else {
		document.getElementById("catbri").play()
	}
	document.getElementById("ambient").pause()
	//document.getElementById("body").style.background="grass.png"
	document.getElementById("loading_screen").style.display="none"
	document.getElementById("menue").style.display="block"
}
}
function showshop(pag) {
	shop_page=pag
	document.getElementById("shop_menu_1").style.display="none"
	document.getElementById("shop_menu_2").style.display="none"
	document.getElementById("shop_menu_3").style.display="none"
	document.getElementById("shop_menu_"+pag).style.display="block"
}
function freestyle() {
	money=Infinity;
	saatgut[0][0]=Infinity;
	wheat=15;
	document.getElementById('nacht').style.display='block';
	document.getElementById('tag').style.display='block';
	document.getElementById('SONNE').style.display='block';
	document.getElementById('regen_but').style.display='block';
	document.getElementById('timebutton').style.display='block';
	erfolge[4]=true
	erfolge[5]=true
	erfolge[6]=true
	erfolge[7]=true
	//Die dazwischen hab ich nicht reingemacht, weil man die Runden- und Felder-Erfolge ja trotzdem machen kann!Nur die mit dem Geld nicht.
	erfolge[12]=true
	erfolge[13]=true
	document.getElementById("neureich").style.opacity="1";
	document.getElementById("zaster").style.opacity="1";
	document.getElementById("arbeiter").style.opacity="1";
	document.getElementById("millionen").style.opacity="1";
	spielfeldshow(800)
}
function savegame_state1() {
	document.getElementById("loading_screen").style.display="block"
	document.getElementById("menue").style.display="none"
	felderinbesitz=window.localStorage.getItem("felderinbesitz")
	money=window.localStorage.getItem("money")
	wheat=window.localStorage.getItem("wheat")
	spielfeldshow(6000)
}
function tract() {
	if (idle==false) {
		if (sFx==true)document.getElementById('start').play()
		idle=true
		var io=setTimeout('document.getElementById("tregga").style.animation="treggadrive 20s linear infinite"',2631)
		
	}
	else {
		
		document.getElementById('run').pause()
		if (sFx==true)document.getElementById('stop').play()
		document.getElementById("tregga").style.animation="treggadrive 5s linear"
		idle=false
	}
}
function savegame_state1_save() {
	alert ("Speichern...","Bitte die Webseite nicht schließen und den PC nicht ausschalten.",{button_title:"Fertig"})
	document.getElementById("alertbutton").style.display="none"
	felderinbesitz=window.localStorage.setItem("felderinbesitz",felderinbesitz)
	money=window.localStorage.setItem("money",money)
	wheat=window.localStorage.setItem("wheat",wheat)
	var id=setTimeout('document.getElementById("alertbutton").style.display="block"',2000)
}
function spielfeldshow(timegll) {
	document.getElementById("loading_screen").style.display="block"
	var htog="grass.png"
document.getElementById("catbri").pause()
if (xmas!=true) { 
document.getElementById("dogblu").play()
}
	document.getElementById("loading_screen").style.display="none"
	var id=setTimeout('document.getElementById("body").style.background="url('+htog+')";document.getElementById("spielfeld").style.display="block";document.getElementById("menue").style.display="none"',timegll)
	update()
}
var help=false
function setaction(setzen) {
	action=setzen
	document.getElementById(1).style.background="gray"
	document.getElementById(2).style.background="gray"
	document.getElementById(3).style.background="gray"
	document.getElementById(4).style.background="gray"
	document.getElementById(6).style.background="gray"
	document.getElementById(404).style.background="gray"
	document.getElementById("saat").style.background="gray"
	document.getElementById("flussigkeit").style.background="gray"
	document.getElementById(action).style.background="green"
	if(action==3) {
		document.getElementById("saat").style.background="green"
	}
	if(action==4) {
		document.getElementById("flussigkeit").style.background="green"
	}
	if(action==404) {
		alert ("Hilfe","Klicke auf das Objekt,bei dem du Hilfe benötigst.")
	}
	else{help=false}
}
//Kernpunkt des Spiels
function update() {
	treibhaus[0][0]*=1
	pro_runde=treibhaus[0][0]*30
	pro_runde+=gebäude[0][0]*gebäude[0][1]
	document.getElementById("geld").value=money
	document.getElementById("feld1").style.cursor="default"
	document.getElementById("feld2").style.cursor="default"
	document.getElementById("feld26").style.cursor="default"
	document.getElementById("feld27").style.cursor="default"
	document.getElementById("feld28").style.cursor="default"
	document.getElementById("feld29").style.cursor="default"
	document.getElementById("time").value=rundenzeit
	document.getElementById("wheat").value=wheat
	document.getElementById("maize").value=maize
	document.getElementById("bugKiller").value=fluid[0][0]
	document.getElementById("bugKillerShop").value=fluid[0][0]
	document.getElementById("kockt300az").value=grubber[0][0]
	document.getElementById("nhtc590").value=maehdresch[0][0]
	document.getElementById("poetvi302").value=saemasch[0][0]
	document.getElementById("amaui1801").value=spritze[0][0]
	document.getElementById("huerlh488").value=traktor[0][0]
	document.getElementById("brante8041").value=haenger[0][0]
	document.getElementById("krampe900s").value=haenger[1][0]
	document.getElementById("wheatseeds").value=saatgut[0][0]
	document.getElementById("seeds").value=saatgut[0][0]
	document.getElementById("tomatentreibhaus").value=treibhaus[0][0]
	haenger[2]=(haenger[0][2]*haenger[0][0])+(haenger[1][2]*haenger[1][0])
	document.getElementById(1).style.background="gray"
	document.getElementById(2).style.background="gray"
	document.getElementById(3).style.background="gray"
	document.getElementById(4).style.background="gray"
	document.getElementById(6).style.background="gray"
	document.getElementById(action).style.background="green"
	rundenzeit-=1
	if (rundenzeit==-1) {
		rundenzeit=100
		var saatplus=gebäude[1][0]*1
		saatgut=saatgut+saatplus
		checkfields()
	}
	curcheckachs()
	var id=setTimeout("update()",1000)
}
function rathausex() {
	if(action==404) {
		alert ("Das ist das Rathaus.","Hierhin wirst du gerufen, wenn es etwas zu besprechen gibt.")
	}
	else if(rathaus=="nichts") {
		alert ("Nichts neues","Wir melden uns, wenn es etwas neues gibt!")
	}
	if (rathaus=="mehrfelder") {
		confirm ("Der Stadtrat hat beschlossen, dass der Anteil der Felder in der Stadt zu klein ist.Deswegen stellen wir Ihnen 10 Felder mehr zur verfügung und geben Ihnen vier davon zum weiteren Gebrauch frei.")
		document.getElementById("rathaus").style.background="url('Stadthauskamin.png')"
		document.getElementById("zusatzfelder").style.display="block"
		if (sFx==true)document.getElementById("ach").play()
		anzahlbesfeld+=4
		rathaus="nichts"
	}
}
function toggleachsave() {
	var ch=document.getElementById("check").checked
	if (ch==true) {
		window.localStorage.setItem("saveachs",true)
	}
	else {
		window.localStorage.setItem("saveachs",false)
	}
}
function settings() {
	document.getElementById("settings").style.display="block"
}
function changeobj() {
	saat=document.getElementById("saat").value
}
function minimize() {
	document.getElementById("actionlist").style.display="none"
	document.getElementById("minilist").style.display="block"
}
function maximize() {
	document.getElementById("minilist").style.display="none"
	document.getElementById("actionlist").style.display="block"
}
function sellwheat() {
	if (action==404) {
		alert ("Das ist der Marktplatz.","Hier kannst du deinen erwirtschafteten Weizen und den Mais verkaufen.")
	}
	else alert ("Marktplatz","Weizen verkaufen</br>Aktueller Preis:$"+wheat_price+" pro Einheit</br><input value=1 type=number id=anzahlwheat style='width:30px;border-width:0px;background:#eeeeee'></input><button onclick=sell('wheat',10)>Verkaufen</button></br></br>Mais verkaufen</br>Aktueller Preis:˅$"+maize_price+" pro Einheit</br><input value=1 type=number id=anzahlmaize style='width:30px;border-width:0px;background:#eeeeee'></input><button onclick=sell('maize',10)>Verkaufen</button></br></br><!--Tomaten verkaufen</br>Aktueller Preis:>$"+maize_price+" pro Einheit</br><input value=1 type=number id=anzahltomato style='width:30px;border-width:0px;background:#eeeeee'></input><button onclick=sell('tomato',10)>Verkaufen</button>-->",{button_title:"Fertig <img src='icons/tick.png'>"})
}
function sell(objekt,preis) {
	if (objekt=="wheat") {
		var anzahl=document.getElementById("anzahlwheat").value
		if (anzahl>wheat) {
			confirm ("So viel Weizen hast du nicht!")
		}
		else {
			statusleiste(anzahl+" Weizen verkauft")
			wheat-=anzahl
			anzahl*=wheat_price
			money+=anzahl
			if (sFx==true)document.getElementById("cash").play()
		}
	}
	if (objekt=="maize") {
		var anzahl=document.getElementById("anzahlmaize").value
		if (anzahl>maize) {
			confirm ("So viel Mais hast du nicht!")
		}
		else {
			statusleiste(anzahl+" Mais verkauft")
			maize-=anzahl
			anzahl*=maize_price
			money+=anzahl
			if (sFx==true)document.getElementById("cash").play()
		}
	}
}
function statusleiste(nachricht) {
	document.getElementById("statusleiste").innerHTML=nachricht
}
function treibhausbuy() {
	statusleiste("Treibhaus kaufen")
	var pf=confirm ("Du musst dazu eines deiner Felder pflügen (löschen) und durch das Treibhaus ersetzen!")
	if (pf==true) {
		alert ("Info","Nun wähle bitte das Feld aus, auf das du dein Treibhaus setzen möchtest.")
		document.getElementById("shop_menu_"+shop_page).style.display="none"
		setaction(200)
	}
}
function buydryfarm() {
	statusleiste("Gebäude kaufen")
	var pf=confirm ("Du musst dazu eines deiner Felder pflügen (löschen) und durch das Gebäude ersetzen!")
	if (pf==true) {
		alert ("Info","Nun wähle bitte das Feld aus, auf das du dein Gebäude setzen möchtest.")
		document.getElementById("shop_menu_"+shop_page).style.display="none"
		setaction(202)
	}
}
var coffeeshop_able=false;
function buycoffeeshop() {
	if (coffeeshop_able==false) {
	alert("Noch nicht freigeschaltet!","Schalte dieses Gebäude frei indem du den Erfolg 'Alle Felder' Freispielst!")
}
	else {
	statusleiste("Gebäude kaufen")
	var pf=confirm ("Du musst dazu eines deiner Felder pflügen (löschen) und durch das Gebäude ersetzen!")
	if (pf==true) {
		alert ("Info","Nun wähle bitte das Feld aus, auf das du dein Gebäude setzen möchtest.")
		document.getElementById("shop_menu_"+shop_page).style.display="none"
		setaction(201)
	}
	}
}
function saewheat(feldid){
	traktor[0][1]=traktor[0][1]-1
	saatgut[0][0]-=1
	statusleiste("Feld "+feldid+" mit Weizen besät")
	document.getElementById("feld"+feldid).style.cursor="default"
	saemasch[0][1]-=1
	document.getElementById("feld"+feldid).src="data/images/felder/foliage_wheat_distance2_diffuse.png"
	felderinbesitz[feldid][1]=2
	if (felderinbesitz[feldid][3]==true) {
		felderinbesitz[feldid][1]=3
		document.getElementById("feld"+feldid).src="data/images/felder/foliage_wheat_distance3_diffuse.png"
	}
	felderinbesitz[feldid][6]=false
	felderinbesitz[feldid][5]=true
	felderinbesitz[feldid][0]=true
}
function saemaize(feldid) {
	traktor[0][1]-=1
	document.getElementById("feld"+feldid).src="data/images/felder/foliage_maize_distance2_diffuse.png"
	saatgut[0][0]-=1
	saemasch[0][1]-=1
	felderinbesitz[feldid][1]=2
	if (felderinbesitz[feldid][3]==true) {
		felderinbesitz[feldid][1]=3
		document.getElementById("feld"+feldid).src="data/images/felder/foliage_maize_distance3_diffuse.png"
	}
	document.getElementById("feld"+feldid).style.cursor="default"
	felderinbesitz[feldid][6]=true
	felderinbesitz[feldid][5]=false
	felderinbesitz[feldid][0]=true
}
function grubbere(feldid) {
	grubber[0][1]-=1;
	traktor[0][1]-=1;
	document.getElementById("feld"+feldid).src="data/images/felder/acre_distance_diffuse.png";
	felderinbesitz[feldid][1]=2;
	document.getElementById("feld"+feldid).style.cursor="default"
	felderinbesitz[feldid][2]=false;
	felderinbesitz[feldid][5]=false;
	felderinbesitz[feldid][6]=false;
	felderinbesitz[feldid][8]=true;
	felderinbesitz[feldid][0]=false;
	felderinbesitz[feldid][7]=false;
	felderinbesitz[feldid][3]=false;
}
function ernte_maize(feldid) {
	maehdresch[0][1]-=1
	document.getElementById("maize").value=maize
	document.getElementById("feld"+feldid).src="data/images/felder/foliage_maize_distance7_diffuse.png"
	felderinbesitz[feldid][1]=7
	document.getElementById("feld"+feldid).style.cursor="default"
	felderinbesitz[feldid][0]=false
	felderinbesitz[feldid][2]=false
	felderinbesitz[feldid][3]=true
}
function ernte_wheat(feldid) {
	maehdresch[0][1]-=1
	document.getElementById("wheat").value=wheat
	document.getElementById("feld"+feldid).src="data/images/felder/foliage_wheat_distance7_diffuse.png"					
	felderinbesitz[feldid][1]=7
	document.getElementById("feld"+feldid).style.cursor="default"
	felderinbesitz[feldid][0]=false
	felderinbesitz[feldid][2]=false
	felderinbesitz[feldid][3]=true
}
function feldaction(feldid) {
	feldid*=1
	document.getElementById("bodyd").style.cusror="wait"
	var field=document.getElementById("feld"+feldid).src
	if (felderinbesitz[feldid][4]!=true) {
		var con=confirm ("Dieses Grundstück gehört dir nicht! Du kannst es aber für $500 kaufen.")
		if (con==true) {
			if (money>=500) {
				document.getElementById("feld"+feldid).src="data/images/felder/land.png"
				felderinbesitz[feldid][4]=true
				money-=500
				//alert ("Kauf abgeschlossen!","Das Grundstück "+feldid+" gehört nun dir.",{button_title:"Danke!"})
				document.getElementById("feld"+feldid).style.cursor="default"
				anzahlbesfeld+=1
				curcheckachs()
			}
			else{
				alert ("WARNUNG","Das kannst du dir nicht leisten!")
				document.getElementById("feld"+feldid).style.cursor="default"
			}
		}
	}
	else{
		if (action==1) {
		grubber[0][1]*=1
		grubber[0][0]*=1
		grubber[0][1]+=1
		traktor[0][0]*=1
		traktor[0][1]*=1
		traktor[0][1]+=1
		if (felderinbesitz[feldid][9]==true) {
			alert ("Igitt!","Dieses Feld wurde von Insekten heimgesucht! Da muss ertmal etwas Insektenvernichter drauf.",{button_title:"Verstanden!"})
			traktor[0][1]-=1
			grubber[0][1]-=1
		}
		else if (grubber[0][0]==0) {
			alert ("WARNUNG","Du hast keinen Grubber!")
			traktor[0][1]-=1
			grubber[0][1]-=1
		}
		else if (grubber[0][1]>grubber[0][0]) {
			alert ("WARNUNG","Alle deine Grubber sind gerade im Einsatz!")
			traktor[0][1]-=1
			grubber[0][1]-=1
		}
		else if (felderinbesitz[feldid][7]==true) {
			alert ("WARNUNG","Hier steht ein Treibhaus! Wähle 'Gebäude Abreißen', um es zu entfernen!")
			traktor[0][1]-=1
		}
		else if (traktor[0][1]>traktor[0][0]) {
			alert ("WARNUNG","Alle deine Schlepper sind im Einsatz!")
			traktor[0][1]-=1
			grubber[0][1]-=1
		}
		else {
			statusleiste("Grubbere Feld "+feldid+"...")
			document.getElementById("feld"+feldid).style.cursor="wait"
			document.getElementById("feld"+feldid).src="data/images/felder/grubbern.gif"
			if (sFx==true)document.getElementById("grubber").play()
			var id=setTimeout('grubbere('+feldid+')',10902);
		}
	}
	else if (action==2) {
		maehdresch[0][0]*=1
		maehdresch[0][1]*=1
		maehdresch[0][1]+=1
		if (maehdresch[0][0]<maehdresch[0][1]) {
			maehdresch[0][1]-=1
			alert ("WARNUNG","Alle deine Mähdrescher sind im Einsatz!")
		}
		else if (felderinbesitz[feldid][1]==6) {
			alert ("WARNUNG","Dieses Feld ist verdorrt!Grubbern und neu besäen!",{button_title:"Tut mir leid,Feld."})
			maehdresch[0][1]-=1
		}
		else if(felderinbesitz[feldid][9]==true) {
			alert ("Igitt!","Dieses Feld ist von Insekten besetzt! Das willst du doch so nicht ernten?")
			maehdresch[0][1]-=1
		}
		else if (felderinbesitz[feldid][1]!=5) {
			alert ("WARNUNG","Dieses Feld ist noch nicht erntereif!",{button_title:"Ok,komme später wieder."})
			maehdresch[0][1]-=1
		}
		else {
			//Für Weizen
			
			if (felderinbesitz[feldid][5]==true&&felderinbesitz[feldid][6]==false) {
				wheat+=1
				if (haenger[2]<wheat) {
					alert ("WARNUNG","Alle deine Kipper sind voll! Entlade sie zuerst!")
					wheat-=1
					maehdresch[0][1]-=1
				}
				else {
					statusleiste("Ernte Feld "+feldid+"...")
					document.getElementById("feld"+feldid).style.cursor="wait"
					document.getElementById("feld"+feldid).src="data/images/felder/ernten_weizen.gif"
					if (sFx==true)document.getElementById("ernte").play() 
					var id=setTimeout("ernte_wheat("+feldid+")",3783)
				}
			}
			//Für Mais
			
			if (felderinbesitz[feldid][6]==true&&felderinbesitz[feldid][5]==false) {
				maize+=1
				if (haenger[2]<maize) {
					alert ("WARNUNG","Alle deine Kipper sind voll! Entlade sie zuerst!")
					maehdresch[0][1]-=1
					maize-=1
				}
				else {
					statusleiste("Ernte Feld "+feldid+"...")
					document.getElementById("feld"+feldid).style.cursor="wait"
					document.getElementById("feld"+feldid).src="data/images/felder/ernten_mais.gif"
					if (sFx==true)document.getElementById("ernte").play() 
					var id=setTimeout("ernte_maize("+feldid+")",3783)
				}
			}
		}
	}
	else if (action==3) {
		var ggfdl=document.getElementById("saat").value
		saatgut[0][0]*=1
		saemasch[0][1]*=1
		saemasch[0][0]*=1
		saemasch[0][1]+=1
		traktor[0][1]*=1
		traktor[0][0]*=1
		traktor[0][1]+=1
		if (saemasch[0][1]>saemasch[0][0]) {
			saemasch[0][1]-=1
			alert ("WARNUNG","Alle deine Sämaschinen sind im Einsatz!")
			traktor[0][1]-=1
		}
		else if (traktor[0][1]>traktor[0][0]) {
			alert ("WARNUNG","Alle deine Schlepper sind im Einsatz!")
			traktor[0][1]-=1
			saemasch[0][1]-=1
		}
		//Für Weizen
		else if (ggfdl=="wheat") {
			if (felderinbesitz[feldid][0]==true||felderinbesitz[feldid][3]==true||felderinbesitz[feldid][8]==false||felderinbesitz[feldid][2]==true) {
				alert ("WARNUNG","Zuerst das Feld Grubbern!",{button_title:"Alles klar!"})
				traktor[0][1]-=1
				saemasch[0][1]-=1
			}
			else if (felderinbesitz[feldid][7]==true) {
				alert ("WARNUNG","Hier steht ein Treibhaus! Wähle 'Gebäude abreißen',um es zu entfernen.")
				traktor[0][1]-=1
				saemasch[0][1]-=1
			}
			else if (saatgut[0][0]==0){
				alert ("WARNUNG","Du hast kein Saatgut mehr!",{button_title:"Ok, muss ich kaufen."})
				traktor[0][1]-=1
				saemasch[0][1]-=1
			}
			else {
				statusleiste("Säe Feld "+feldid+"...")
				document.getElementById("feld"+feldid).style.cursor="wait"
				document.getElementById("feld"+feldid).src="data/images/felder/saen.gif"
				if (sFx==true)document.getElementById("sae").play()       
				var id=setTimeout("saewheat("+feldid+")",5901)
			}
		}
		//Für Mais
		else if (ggfdl=="maize") {
			if (felderinbesitz[feldid][0]==true||felderinbesitz[feldid][3]==true||felderinbesitz[feldid][8]==false||felderinbesitz[feldid][2]==true) {
				alert ("WARNUNG","Zuerst das Feld Grubbern!",{button_title:"Alles klar!"})
				traktor[0][1]-=1
				saemasch[0][1]-=1
			}
			else if (felderinbesitz[feldid][7]==true) {
				alert ("WARNUNG","Hier steht ein Treibhaus! Wähle 'Gebäude abreißen',um es zu entfernen.")
				traktor[0][1]-=1
				saemasch[0][1]-=1
			}
			else if (saatgut[0][0]==0){
				alert ("WARNUNG","Du hast kein Saatgut mehr!",{button_title:"Ok, muss ich kaufen."})
				traktor[0][1]-=1
				saemasch[0][1]-=1
			}
			else {//Ja,ja ich weiß, hier hab ich mir unnötig arbeit gemacht.
				statusleiste("Säe Feld "+feldid+"...")//Aber wozu gibts copy-paste? :D
				if (sFx==true)document.getElementById("sae").play()   
				document.getElementById("feld"+feldid).style.cursor="wait"	
document.getElementById("feld"+feldid).src="data/images/felder/saen.gif"				
				var id=setTimeout("saemaize("+feldid+")",5901)
			}
		}
	}
	else if (action==4) {
		traktor[0][1]*=1
		traktor[0][1]+=1
		spritze[0][0]*=1
		spritze[0][1]*=1
		spritze[0][1]+=1
		var abcdefg=document.getElementById("flussigkeit").value
		if (spritze[0][0]==0) {
			alert ("HINWEIS","Du besitzt keine Spritze!",{button_title:"Haben will!"})
			spritze[0][1]-=1
		}
		else if (abcdefg=="insektenvern") {
			if (felderinbesitz[feldid][7]==true) {
				alert (":)","Tomaten kannst du (noch) nicht spritzen")
				traktor[0][1]-=1
				spritze[0][1]-=1
			}
			else if (traktor[0][1]>traktor[0][0]) {
				alert ("WARNUNG","All deine Schlepper sind im Einsatz!")
				traktor[0][1]-=1
				spritze[0][1]-=1
			}
			else if (felderinbesitz[feldid][3]==true) {
				traktor[0][1]-=1
				spritze[0][1]-=1
				alert ("Hinweis","Dieses Feld wurde bereits geerntet! Das würde sich nicht lohnen!")
			}
			else if (felderinbesitz[feldid][8]==false){
				traktor[0][1]-=1
				spritze[0][1]-=1
				alert ("WARNUNG","Auf diesem Grundstück befindet sich nichts, was du spritzen könntest!")
			}
			else if (fluid[0][0]==0) {
				traktor[0][1]-=1
				spritze[0][1]-=1
				alert ("WARNUNG","Du hast keinen Insektenvernichter mehr!",{button_title:"Muss ich kaufen!"})
			}
			else if (felderinbesitz[feldid][9]==false) {
				traktor[0][1]-=1
				spritze[0][1]-=1
				alert ("Hinweis","Auf diesem Feld befinden sich keine Insekten!")
			}
			else if (felderinbesitz[feldid][9]==true) {
				var rnd=Math.random()
				rnd*=3
				rnd=Math.ceil(rnd)
				fluid[0][0]-=1
				traktor[0][1]-=1
				spritze[0][1]-=1
				if (rnd!=3){
					statusleiste("Spritze Feld "+feldid+"...")
					document.getElementById("feld"+feldid).src="data/images/felder/foliage_dryGrass_distance_diffuse.png"
					felderinbesitz[feldid][9]=false
					felderinbesitz[feldid][0]=false
					felderinbesitz[feldid][2]=true
					felderinbesitz[feldid][3]=false
					felderinbesitz[feldid][8]=true
					statusleiste("Feld "+feldid+" von Insekten befreit")
				}
				else {
					statusleiste("Fehlgeschlagen!")
					alert ("Mist!","Dein Versuch, die Insekten zu verjagen, ist fehlgeschlagen!")
				}
			}
		}
	}
	else if (action==6) {
		if (money<20) {
			alert ("WARNUNG","Das kannst du dir nicht leisten!")
		}
		else if (felderinbesitz[feldid][7]==false) {
			alert ("WARNUNG","Hier steht kein Gebäude!")
		}
		else {
			money-=20
			document.getElementById("feld"+feldid).src="data/images/felder/land.png"
			felderinbesitz[feldid][7]=false
			felderinbesitz[feldid][8]=false
		}
	}
	else if (action==200) {
		var uli=confirm ("Dieses Feld durch ein Treibhaus (Tomaten) ersetzen?")
		if (uli==true) {
			if (money<500) {
				alert ("WARNUNG","Das kannst du dir nicht leisten!")
			}
			else {
			felderinbesitz[feldid][7]=true
			felderinbesitz[feldid][0]=false
			felderinbesitz[feldid][1]=2
			treibhaus[0][0]+=1
			money-=500
			document.getElementById("feld"+feldid).src="data/images/felder/treibhausgroß.png"
			}
		}
	}
	else if (action==201) {
		var uli=confirm ("Dieses Feld durch einen Coffeshop ersetzen?")
		if (uli==true) {
			if (money<2000) {
				alert ("WARNUNG","Das kannst du dir nicht leisten!")
			}
			else {
			felderinbesitz[feldid][7]=true
			felderinbesitz[feldid][0]=false
			felderinbesitz[feldid][1]=2
			gebäude[0][0]+=1
			money-=2000
			document.getElementById("feld"+feldid).src="data/images/felder/cantine.png"
			}
		}
	}
	else if (action==202) {
		var uli=confirm ("Dieses Feld durch das Gebäude ersetzen?")
		if (uli==true) {
			if (money<1700) {
				alert ("WARNUNG","Das kannst du dir nicht leisten!")
			}
			else {
			felderinbesitz[feldid][7]=true
			felderinbesitz[feldid][0]=false
			felderinbesitz[feldid][1]=2
			gebäude[1][0]+=1
			money-=1700
			document.getElementById("feld"+feldid).src="data/images/felder/farmarea.png"
			}
		}
	}
	}
	if(action==404) {
		alert("Hilfe","Das ist Feld "+feldid+". Status dieses Feldes:</br></br>Besät:"+felderinbesitz[feldid][0]+"</br>Wachstumsstufe:"+felderinbesitz[feldid][1]+"</br>Geerntet:"+felderinbesitz[feldid][2]+"</br>Gedüngt:"+felderinbesitz[feldid][3]+"</br>In Besitz:"+felderinbesitz[feldid][4]+"</br>Weizen gesät:"+felderinbesitz[feldid][5]+"</br>Mais gesät:"+felderinbesitz[feldid][6]+"</br>Treibhaus:"+felderinbesitz[feldid][7]+"</br>Aktionsbereit/Gegrubbert:"+felderinbesitz[feldid][8]+"</br>Insektenplage:"+felderinbesitz[feldid][9])
	}
}
function shop() {
	 document.getElementById("shop_menu_"+shop_page).style.display="block"
}
var firstshop=true
function kaufen(objekt,kosten) {
	if (money<kosten) {
		alert ("WARNUNG","Das kannst du dir nicht leisten!",{button_title:"Muss sparen!"})
	}
	else {
		objekt[0]*=1
		objekt[0]+=1
		money-=kosten
		document.getElementById("geld").value=money
		//alert ("Kauf abgeschlossen","Danke für Ihren Einkauf!",{button_title:"Kein Ding!"})
		if (firstshop==true) {alert("Erfolg erzielt","Du hast den Erfolg 'Shopping Queen' Freigeschaltet!");document.getElementById("shopper").style.opacity="1";erfolge[12]=true;if (sFx==true)document.getElementById("erfolg").play();firstshop=false}
}}
function tagmachen() {
	daytime="Tag"
	document.getElementById("body").style.animation="tag 3s linear"
	document.getElementById("sun").style.display="block"
	var ir=setTimeout("document.getElementById('body').style.opacity='1';document.getElementById('sun').style.display='none'",3000)
}
function nachtmachen() {
	daytime="Nacht"
	document.getElementById("body").style.animation="nacht 3s linear"
	document.getElementById('body').style.background='#000004'
	document.getElementById("moon").style.display="block"
	var ir=setTimeout("document.getElementById('body').style.opacity='0.5';document.getElementById('moon').style.display='none'",3000)
}
function showachs() {
	document.getElementById("achs").style.display="block"
}