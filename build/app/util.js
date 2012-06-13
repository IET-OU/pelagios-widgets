/**
 * Pelagios utility functions
 * @license GPL v3(see LICENSE.txt)
 */

define([],function(){function createID(dataset){var id=dataset.replace(/ /g,"");return id=id.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,""),id}function includesGoogleMaps2(){return typeof GMap2!="undefined"}function getAPIData(url,success,error,timeout,cors){var settings={type:"POST",dataType:"json",timeout:timeout,success:success,error:error};error||(settings.error=function(jqXHR,textStatus,errorThrown){console.log("ERROR: Call to "+url+" failed: "+textStatus),console.log(jqXHR)});if(!cors)$.ajax(url,settings);else{try{var xhr=new XMLHttpRequest}catch(error){var xhr={}}if("withCredentials"in xhr)$.ajax(url,settings);else if(typeof XDomainRequest!="undefined"){var xdr=new XDomainRequest;xdr.timeout=timeout,xdr.open("get",url),xdr.onload=function(){success($.parseJSON(xdr.responseText),"",xdr)},xdr.onerror=error,xdr.send()}}}return{createID:createID,includesGoogleMaps2:includesGoogleMaps2,getAPIData:getAPIData}})