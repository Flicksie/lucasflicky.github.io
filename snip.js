var Gallery = [
 	//['filename','Cat', 'optname'],
 	['1','ilus dsg',
	'<span style="font-size:12">GIANT TURTLE <i style="font-size:10;">(Art Direction / Rendering)</i></span><span style="position:float; margin-top:-10px;font-size:8; float:right; text-align:right;">\
	<b>PROJECT: </b>#### Card Game<br>\
	<b>ASSISTANT(S): </b>Pamela Grether <i>(Sketch)<i><br>\
	</span>', '#### Card Game'],
	
	
 	['2','dsg',
	''],
	
	
 		['3','ilus',
	'<span style="font-size:12">THE BEAR <i style="font-size:10;">(Art Direction / Rendering)</i></span><span style="position:float; margin-top:-10px;font-size:8; float:right; text-align:right;">\
	<b>PROJECT: </b>#### Card Game<br>\
	<b>ASSISTANT(S): </b>Pamela Grether <i>(Sketch)<i><br>\
	</span>'],
	
	
 		['4','ilus',
	'<span style="font-size:12">MOUNTAIN DRAGON <i style="font-size:10;">(Art Direction / Rendering)</i></span><span style="position:float; margin-top:-10px;font-size:8; float:right; text-align:right;">\
	<b>PROJECT: </b>#### Card Game<br>\
	<b>ASSISTANT(S): </b>Pamela Grether <i>(Sketch & Cleanup)<i><br>\
	</span>'],
	
	
 		['6','ilus',
		'<span style="font-size:12">MISCHIEVOUS FAIRY <i style="font-size:10;">(Illustration / Rendering)</i></span><span style="position:float; margin-top:-10px;font-size:8; float:right; text-align:right;">\
		<b>PROJECT: </b>#### Card Game<br>\
		</span>'],
	
	
 	['5','paint',
	''],
	
	
 		['7','ilus',
	'<span style="font-size:12">URBAN ELVES <i style="font-size:10;">(Art Direction / Rendering)</i></span><span style="position:float; margin-top:-10px;font-size:8; float:right; text-align:right;">\
	<b>PROJECT: </b>#### Card Game<br>\
	<b>ASSISTANT(S): </b>Yomiell <i>(Sketch)<i> & Gorsal <i>(Refine & Cleanup)<i><br>\
	</span>'],
	
	
 	['8','skt',
	''],
	
	
		['9','paint',
	'<span style="font-size:12">ETO - TOKYO GHOUL <i style="font-size:10;">(Collab / Rendering)</i></span><span style="position:float; margin-top:-10px;font-size:8; float:right; text-align:right;">\
	<b>PROJECT: </b>Personal<br>\
	<b>ASSISTANT(S): </b>Bianca Oak <i>(Pencil)<i><br>\
	</span>','Collab'],
	
	
 		['10','skt',
	'<span style="font-size:12">PHUSE <i style="font-size:10;">(Character Design / Illustration)</i></span><span style="position:float; margin-top:-10px;font-size:8; float:right; text-align:right;">\
	<b>PROJECT: </b>Silenyte<br>\
	</span>','Silenyte'],
	
	
	
 		['11','ilus',
	'<span style="font-size:12">LICH <i style="font-size:10;">(Art Direction / Rendering)</i></span><span style="position:float; margin-top:-10px;font-size:8; float:right; text-align:right;">\
	<b>PROJECT: </b>#### Card Game<br>\
	<b>ASSISTANT(S): </b>Yomiell <i>(Sketch)<i><br>\
	</span>'],
	
	
	
 	['12','paint',
	''],
	
	
];


function newPic(category,path,imgname,optName,i,projName){

if (!optName || optName === undefined) optName = "Picture";
if (!path || path === undefined) path = 'assets/'; //"files/theme/gallery/";
if (!category || category === undefined) category = "Misc";
if (!projName || projName === undefined) projName = "Untitled";


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


	
function feed(){
	
	for (var i in Gallery){
	
	document.getElementById("feed-gallery").innerHTML += newPic(Gallery[i][1],'',Gallery[i][0],Gallery[i][2],i,Gallery[i][3]);
	console.log('feeding item #' + i + ' named: '+Gallery[i][0]+'.png... into #feed')

};
	
};

feed();





/*

	'<h2>GIANT TURTLE <i style="font-size:10;">(Art Direction / Rendering)</i></h2><p>\
	<b>PROJECT: </b>#### Card Game<br>\
	<b>ASSISTANT(S): </b>Pamela Grether <i>(Sketch)<i><br>\
	</p>'],



*/



