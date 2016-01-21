var gallery = [

['agathaghost',
 'ILS DGA LAB',
'',
4],


['animegirl',
 'ILS DGA CRD',
'',
1],


['artemiskt',
 'SKT CPT',
'',
3],





['backface',
 'DSG ITF PRN',
'',
5],


['bcm',
 'DSG VID',
'',
1],


['bear',
 'CLB ILS CRD ADR DGP DGA',
'',
5],


//['Calil',
// 'LGO DSG',
//''],


['card1',
 'DSG ITF ELY PRN ADR',
'',
5],


['card2',
 'DSG ITF ELY PRN ADR',
'',
5],


['card3',
 'DSG ITF ELY PRN ADR',
'',
3],


['chair',
 'PDD DSG',
'',
3],


['dragon',
 'ADR ILS CRD CLB DGA',
'',
5],


['elfs',
 'ADR ILS CRD CLB DGA',
'',
4],


['etotoky',
 'CRD CLB DGP FNA ILS DGA',
'',
5],


['fabsaur',
 'PRN ILS DSG DGA',
'',
2],


['fus',
 'CPT ILS DGA SKT',
'',
5],


['godot',
 'TRD FNA SKT',
'',
2],


['heidi',
 'ILS CPT TRD SKT',
'',
3],


['hero',
 'ILS DGP CPT DGA',
'',
4],


['infograp',
 'DSG ELY',
'',
3],


['landpaint',
 'SKT DGP DGA',
'',
5],


['lara',
 'ILS DGA DGP',
'',
3],


['fada',
 'ILS DGA DGP',
'',
5],


//['LF site', 'WEB DSG',''],


['lich',
 'ADR ILS CRD CLB DGP DGA',
'',
4],


['lith2k',
 'DGP DGA ILS CPT',
'',
3],


['mazhoren',
 'CPT ILS TRD',
'',
3],


['midna',
 'TRD SKT FNA',
'',
3],


['mythoslogo',
 'VID LGO DSG DGA CLB',
'',
4],


['molib',
 'DGP ABS ILS DGA',
'',
4],


['morigan',
 'HBD CRD ILS FNA TRD',
'',
3],


//['mythosfont', 'DSG TYP CLB',''],


['nattrad',
 'SKT TRD CPT ILS',
'',
3],


['nipes',
 'TCI ILS DSG ELY PRN ITF DGA ADR',
'',
 4],


//['novas', 'DSG VID TYP LGO',''],


//['Nssite', 'WEB DSG',''],


['oilocean',
 'DGA ILS DGP FNA',
'',
3],


['pandora',
 'TRD SKT FNA',
'',
4],


['photomanind',
 'PHM DGP',
'',
5],


['pixfuq',
 'PXA',
'',
3],


['pxayou',
 'PXA ILS',
'',
3],


['pixelnat',
 'PXA ILS',
'',
3],


['ameplant',
 'DSG TCI PRN CRD',
'',
5],


['prime1',
 'DSG VID MKP',
'',
5],


['prime2',
 'DSG VID MKP',
'',
5],


['primelog',
 'DSG VID LGO',
'',
4],


['reoli',
 'DSG VID LGO',
'',
5],


//['REOsite', 'WEB DSG',''],


['vkps',
 'SKT DGT ILS',
'',
4],
	
['vkps2',
 'SKT TRD ILS',
'',
3],

['self',
 'PHM DGP',
'',2],


['silentun',
 'CPT SKT',
'',
 3],


['silenytelog',
 'TYP VID LGO DSG',
'',
4],


['sktgirl',
 'SKT TRD',
'',
3],


/*['steamcd',
 'ELY DSG PRN',
'',
1],*/


['stud1',
 'SKT',
'',
1],


['sykes',
 'TRD SKT',
'',
3],


['tavpix',
 'PXA',
'',
3],


/*['tavernando',
 'ELY DSG ADR',
'',
2],*/


['tharbalesh',
 'CPT SKT ILS TCI DGA',
'',
5],


['tharma2k',
 'DGP DGA ILS CPT',
'',
2],


['train',
 'CPT ILS DGA DGP',
'',
3],


['turtle',
 'ADR ILS CRD CLB DGP DGA',
'',
5],


['vibrava',
 'ILS DGP DGA',
'',
3],



['zant',
 'TRA FNA',
'',
4],

	
	
	
];


function newPic(category,path,imgname,rank,optName,i,projName){

optName=optName|| "Picture";
path=path ||'assets/' || 'portf/'; //"files/theme/gallery/";
category=category || "Misc";
projName = projName || "Untitled";


return " \
 \
 \
<div 	id='feed-imageContainer"+ i +"' style='float:center;position: absolute; left: 0px; top: 0px; transform: translate(0px, 0px) scale(0.001); opacity: 1;' \
class=' \
blockelement \
element \
" + category + " \
isotope-item \
isotope-item' \
>  <div style='position:absolute;z-index:0;width:100%;margin-top:25px;text-align:center;'>"+''+"</div>\
<div 	class='blockcontent'> \
<div 	class='elements'> \
<div> \
<div 	class='wsite-image'> \
 \
<a class='w-fancybox' rel='lightbox[galleryfeed]' title='"+ optName +"' \
href='./" + path + imgname + ".png' \
onclick='if (!lightboxLoaded) return false'> \
<img 													src='./" + path + imgname + ".png' \
 alt='" + optName + "' style='width:100%;max-width:800px'> \
</a> \
 \
</div></div></div></div></div> \
 \
"



};
function printProj(name,category,displayPic,icon,describ,role,link){
name = name			 	|| "Nome do Projeto"
category = category		|| "Categoria"
displayPic =displayPic	|| "placeholder.png"
icon = icon				|| "favicon.png"
describ = describ		|| "Lorem ipsum dolor sit amet consectetur adipiscing elit."
role = role				|| "Role"
link = link				|| "link"

		var caption = "See More"
		var href = ""
		var state = "disabled"

		if (link.match("http")){
			href = link;
			state = "enabled";
			
			} else { 
			caption = link;
			state = "disabled";
			};


return `<table  class="tg" style="table-layout: margin-bottom: 10px; fixed;"> 
	<colgroup>
		<col style="width: 50px"><col style="width: 150px">
	</colgroup>
	<tr>
	<!-- CREST ICON -->
		<th class="crest">
			<img class="crestpic" title="`+ category + `" src="images/icons/`+ icon +`">
		</th>
	<!-- NAME -->
		<th align="left" class="name" colspan="3">`+ name.toUpperCase() +`</th> <!-- Espacinho -->
	<!-- TIER -->
		<th align="left" class="tiername"><span class="tierlevel">` + category + `</th>
	</tr>
	
	<tr>
		<!-- PROFILE PIC -->
		<td align="center" class="profilepic" colspan="2" rowspan="5"><a target="_blank" ><img class="profile" src="images/project/` + displayPic + `"></a></td><tr><td class="blankline"  colspan="3" ></td></tr>

	</tr>
	<tr>
		<!-- DESCRIB -->
		<td class="badges" colspan="4">	 `+ describ  +`<br><span class="role"><i> (`+ role  +`) </i></span></td>
	</tr>
	<tr>
		<td colspan="2" class="tabfooter"></td>
		
			<td colspan="1"  class="badges2 `+state+`"> <a href="`+href+`">`+caption+` </a></td>
		
	</tr>
</table>`
			
}


function feed(){
	

	console.log('Loopstart >>>')
for (var i in gallery){
	
	console.log('loop #'+i)
	
	
	var seq = seq || [];
	
	function randomFeed(u){
			var out = seq[u];
					if (Math.round(Math.random()*100) % 3 > 0){
					//document.getElementById("feed-gallery").innerHTML 
					seq[u] += newPic(gallery[i][1],'',gallery[i][0],gallery[i][2],i,gallery[i][4]);
					console.log(u+' ODD')
					}
					else{		
					//document.getElementById("feed-gallery").innerHTML 
					seq[u] = newPic(gallery[i][1],'',gallery[i][0],gallery[i][2],i,gallery[i][4]);
					//document.getElementById("feed-gallery").innerHTML 
					seq[u] += out;
					console.log(u+' EVEN')
				}
};
	
gallery[i][3] = gallery[i][3] || 5;
	
randomFeed(gallery[i][3]);

				

	
};
	
console.log(seq)
	
	document.getElementById("feed-gallery").innerHTML += seq[5];
	document.getElementById("feed-gallery").innerHTML += seq[4];
	document.getElementById("feed-gallery").innerHTML += seq[3];
	document.getElementById("feed-gallery").innerHTML += seq[2];
	document.getElementById("feed-gallery").innerHTML += seq[1];
	
	document.getElementById("feed-galleryB").innerHTML += seq[5];
	document.getElementById("feed-galleryB").innerHTML += seq[4];
	document.getElementById("feed-galleryB").innerHTML += seq[3];
	document.getElementById("feed-galleryB").innerHTML += seq[2];
	document.getElementById("feed-galleryB").innerHTML += seq[1];
};

feed();







/*

	'<h2>GIANT TURTLE <i style="font-size:10;">(Art Direction / Rendering)</i></h2><p>\
	<b>PROJECT: </b>#### Card Game<br>\
	<b>ASSISTANT(S): </b>Pamela Grether <i>(Sketch)<i><br>\
	</p>'],



*/

var projects =	[

					[
						"Toren", 
						"Music",
						"toren.png",
						"audio",
						"describ",
						"Soundtrack",
						"http://toren-game.com"
						
					],
					[
						"Silenyte",
						"Personal",
						"slnt.jpg",
						"icon",
						"describ",
						"Worldbuilding/Illustration",
						"Undisclosed"
					],
					[
						"Steam Travel",
						"Music",
						"steam.jpg",
						"icon",
						"describ",
						"Soundtrack",
						"http://vgmdb.net/album/38576"
					],
					[
						"TE-3D",
						"Academic",
						"te3d.jpg",
						"icon",
						"describ",
						"Soundtrack",
						"http://pt.slideshare.net/CnthiaKulpa/jogo-digital-pedaggico-te-3-d-tetris"
					],
					[
						"Thuat",
						"Music",
						"thuat.jpg",
						"icon",
						"describ",
						"Soundtrack",
						"https://www.facebook.com/Drickenin"
					],
					[
						"Tavernando",
						"Design",
						"tav.jpg",
						"icon",
						"describ",
						"Art Direction / Layout / Illustration",
						"Down"
					],
					[
						'"FUQUEST"',
						"Game",
						"fuq.jpg",
						"icon",
						"describ",
						"Art, Game Design, Sound Design",
						"TBA"
					],
			
					


				]

for (var i in projects){


document.getElementById('dumproj').innerHTML += printProj(projects[i][0],projects[i][1],projects[i][2],projects[i][3],projects[i][4],projects[i][5],projects[i][6]);

};
