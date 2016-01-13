var gallery = [

	['agathaghost',
 'ILS DGA LAB',
''],


['animegirl',
 'ILS DGA CRD',
''],


['artemiskt',
 'SKT CPT',
''],


['ayana',
 'CRD CLB SKT',
''],


['backface',
 'DSG ITF PRN',
''],


['bcm',
 'DSG VID',
''],


['bear',
 'CLB ILS CRD ADR DGP DGA',
''],


//['Calil',
// 'LGO DSG',
//''],


['card1',
 'DSG ITF ELY PRN ADR',
''],


['card2',
 'DSG ITF ELY PRN ADR',
''],


['card3',
 'DSG ITF ELY PRN ADR',
''],


['chair',
 'PDD DSG',
''],


['dragon',
 'ADR ILS CRD CLB DGA',
''],


['elfs',
 'ADR ILS CRD CLB DGA',
''],


['etotoky',
 'CRD CLB DGP FNA ILS DGA',
''],


['fabsaur',
 'PRN ILS DSG DGA',
''],


['fus',
 'CPT ILS DGA SKT',
''],


['godot',
 'TRD FNA SKT',
''],


['heidi',
 'ILS CPT TRD SKT',
''],


['hero',
 'ILS DGP CPT DGA',
''],


['infograp',
 'DSG ELY',
''],


['landpaint',
 'SKT DGP DGA',
''],


['lara',
 'ILS DGA DGP',
''],


['fada',
 'ILS DGA DGP',
''],


//['LF site', 'WEB DSG',''],


['lich',
 'ADR ILS CRD CLB DGP DGA',
''],


['lith2k',
 'DGP DGA ILS CPT',
''],


['mazhoren',
 'CPT ILS TRD',
''],


['midna',
 'TRD SKT FNA',
''],


['mythoslogo',
 'VID LGO DSG DGA CLB',
''],


['molib',
 'DGP ABS ILS DGA',
''],


['morigan',
 'HBD CRD ILS FNA TRD',
''],


//['mythosfont', 'DSG TYP CLB',''],


['nattrad',
 'SKT TRD CPT ILS',
''],


['nipes',
 'TCI ILS DSG ELY PRN ITF DGA ADR',
''],


//['novas', 'DSG VID TYP LGO',''],


//['Nssite', 'WEB DSG',''],


['oilocean',
 'DGA ILS DGP FNA',
''],


['pandora',
 'TRD SKT FNA',
''],


['photomanind',
 'PHM DGP',
''],


['pixfuq',
 'PXA',
''],


['pxayou',
 'PXA ILS',
''],


['pixelnat',
 'PXA ILS',
''],


['ameplant',
 'DSG TCI PRN CRD',
''],


['prime1',
 'DSG VID MKP',
''],


['prime2',
 'DSG VID MKP',
''],


['primelog',
 'DSG VID LGO',
''],


['reoli',
 'DSG VID LGO',
''],


//['REOsite', 'WEB DSG',''],


['vkps',
 'SKT TRD ILS',
''],

['self',
 'PHM DGP',
''],


['silentun',
 'CPT SKT',
''],


['silenytelog',
 'TYP VID LGO DSG',
''],


['sktgirl',
 'SKT TRD',
''],


['steamcd',
 'ELY DSG PRN',
''],


['stud1',
 'SKT',
''],


['sykes',
 'TRD SKT',
''],


['tavpix',
 'PXA',
''],


['tavernando',
 'ELY DSG ADR',
''],


['tharbalesh',
 'CPT SKT ILS TCI DGA',
''],


['tharma2k',
 'DGP DGA ILS CPT',
''],


['train',
 'CPT ILS DGA DGP',
''],


['turtle',
 'ADR ILS CRD CLB DGP DGA',
''],


['vibrava',
 'ILS DGP LGO DGA',
''],



['zant',
 'TRA FNA',
''],

	
	
	
];


function newPic(category,path,imgname,optName,i,projName){

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


function assort(){
	
	// V = var AUX = income I = step	
	
	
	
};


function feed(){
	
		
	
for (var i in gallery){
	
	var out = document.getElementById("feed-gallery").innerHTML;
	
	if (Math.round(Math.random()*100) % 3 > 0){
		document.getElementById("feed-gallery").innerHTML += newPic(gallery[i][1],'',gallery[i][0],gallery[i][2],i,gallery[i][3]);
		console.log('ODD')
	}
	else{		
		document.getElementById("feed-gallery").innerHTML = newPic(gallery[i][1],'',gallery[i][0],gallery[i][2],i,gallery[i][3]);
		document.getElementById("feed-gallery").innerHTML += out;
		console.log('EVEN')
	};
};
	
};

feed();




/*

	'<h2>GIANT TURTLE <i style="font-size:10;">(Art Direction / Rendering)</i></h2><p>\
	<b>PROJECT: </b>#### Card Game<br>\
	<b>ASSISTANT(S): </b>Pamela Grether <i>(Sketch)<i><br>\
	</p>'],



*/



