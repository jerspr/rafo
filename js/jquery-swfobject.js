(function(F,C){var D=function(H){var G,I=[];for(G in H){if(/string|number/.test(typeof H[G])&&H[G]!==""){I.push(G+'="'+H[G]+'"')}}return I[A]("")},E=function(I){var G,K,J=[],H;if(typeof I=="object"){for(G in I){if(typeof I[G]=="object"){H=[];for(K in I[G]){H.push([K,"=",encodeURIComponent(I[G][K])][A](""))}I[G]=H[A]("&amp;")}if(I[G]){J.push(['<param name="',G,'" value="',I[G],'" />'][A](""))}}I=J[A]("")}return I},B=false,A="join";F[C]=(function(){try{var G="0,0,0",H=navigator.plugins["Shockwave Flash"]||ActiveXObject;G=H.description||(function(){try{return(new H("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version")}catch(J){}}())}catch(I){}G=G.match(/^[A-Za-z\s]*?(\d+)[\.|,](\d+)(?:\s+[d|r]|,)(\d+)/);return{available:G[1]>0,activeX:H&&!H.name,version:{major:G[1]*1,minor:G[2]*1,release:G[3]*1},hasVersion:function(K){var N=this.version,L="major",M="minor",J="release";K=(/string|number/.test(typeof K))?K.toString().split("."):K||[0,0,0];K=[K[L]||K[0]||N[L],K[M]||K[1]||N[M],K[J]||K[2]||N[J]];return(K[0]<N[L])||(K[0]==N[L]&&K[1]<N[M])||(K[0]==N[L]&&K[1]==N[M]&&K[2]<=N[J])},expressInstall:"expressInstall.swf",create:function(J){if(!F[C].available||B||!typeof J=="object"||!J.swf){return false}if(J.hasVersion&&!F[C].hasVersion(J.hasVersion)){J={swf:J.expressInstall||F[C].expressInstall,attrs:{id:J.id||"SWFObjectExprInst",name:J.name,height:Math.max(J.height||137),width:Math.max(J.width||214)},params:{flashvars:{MMredirectURL:location.href,MMplayerType:(F[C].activeX)?"ActiveX":"PlugIn",MMdoctitle:document.title.slice(0,47)+" - Flash Player Installation"}}};B=true}else{J=F.extend(true,{attrs:{id:J.id,name:J.name,height:J.height||180,width:J.width||320},params:{wmode:J.wmode||"opaque",flashvars:J.flashvars}},J)}if(F[C].activeX){J.attrs.classid=J.attrs.classid||"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";J.params.movie=J.params.movie||J.swf}else{J.attrs.type=J.attrs.classid||"application/x-shockwave-flash";J.attrs.data=J.attrs.data||J.swf}return["<object ",D(J.attrs),">",E(J.params),"</object>"][A]("")}}}());F.fn[C]=function(G){if(typeof G=="object"){this.each(function(){var I=document.createElement(C);var H=F[C].create(G);if(H){I.innerHTML=H;if(I.childNodes[0]){this.appendChild(I.childNodes[0])}}})}else{if(typeof G=="function"){this.find("object").andSelf().filter("object").each(function(){var I=this,H="jsInteractionTimeoutMs";I[H]=I[H]||0;if(I[H]<660){if(I.clientWidth||I.clientHeight){G.call(this)}else{setTimeout(function(){F(I)[C](G)},I[H]+66)}}})}}return this}}(jQuery,"flash"));

/* scroll to */
$(document).ready(function(){
//index
$("a#enlace-claves").click(function(){
	var top = $('#titulo-claves').offset().top ;
	var x = top - 45 ;
	$('html, body').animate({scrollTop:x}, 'slow');
	return false;
});

$("#menu-principal .claves").click(function(){
	var top = $('#titulo-claves').offset().top ;
	var x = top - 45 ;
	$('html, body').animate({scrollTop:x}, 'slow');
	return false;
});
//discografia
$("#disco1").click(function(){
	var top = $('#disco-1').offset().top ;
	var x = top - 5 ;
	$('html, body').animate({scrollTop:x}, 'slow');
	return false;
});
$("#disco2").click(function(){
	var top = $('#disco-2').offset().top ;
	var x = top - 5 ;
	$('html, body').animate({scrollTop:x}, 'slow');
	return false;
});
$("#disco3").click(function(){
	var top = $('#disco-3').offset().top ;
	var x = top - 5 ;
	$('html, body').animate({scrollTop:x}, 'slow');
	return false;
});
$("#disco4").click(function(){
	var top = $('#disco-4').offset().top ;
	var x = top - 5 ;
	$('html, body').animate({scrollTop:x}, 'slow');
	return false;
});
$("#disco5").click(function(){
	var top = $('#disco-5').offset().top ;
	var x = top - 5 ;
	$('html, body').animate({scrollTop:x}, 'slow');
	return false;
});
$("#disco6").click(function(){
	var top = $('#disco-6').offset().top ;
	var x = top - 5 ;
	$('html, body').animate({scrollTop:x}, 'slow');
	return false;
});
$("#disco7").click(function(){
	var top = $('#disco-7').offset().top ;
	var x = top - 5 ;
	$('html, body').animate({scrollTop:x}, 'slow');
	return false;
});
$("#disco8").click(function(){
	var top = $('#disco-8').offset().top ;
	var x = top - 5 ;
	$('html, body').animate({scrollTop:x}, 'slow');
	return false;
});
//shows
$("#show-tipo").click(function(){
	var top = $('#show-tipo-n').offset().top ;
	var x = top - 5 ;
	$('html, body').animate({scrollTop:x}, 'slow');
	return false;
});
$("#disco-tema").click(function(){
	var top = $('#disco-tema-n').offset().top ;
	var x = top - 5 ;
	$('html, body').animate({scrollTop:x}, 'slow');
	return false;
});
$("#unipersonal").click(function(){
	var top = $('#unipersonal-n').offset().top ;
	var x = top - 5 ;
	$('html, body').animate({scrollTop:x}, 'slow');
	return false;
});
$("#subir-top").click(function(){
	$('html, body').animate({scrollTop:0}, 'slow');
	return false;
});
$("a#claves-bajo").click(function(){
	var top = $('#titulo-claves').offset().top ;
	var x = top - 45 ;
	$('html, body').animate({scrollTop:x}, 'slow');
	return false;
});

});
