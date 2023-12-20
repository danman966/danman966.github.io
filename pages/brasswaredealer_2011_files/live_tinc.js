var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var ResizeIframe = {   
  wrapperId : "tinc_content",
                
  /**
   * Resizes an iframe sId including oDoc to oDoc's content size.
   * Can be called top-down, i.e. from the including iframe (or it's parents) or bottom-up, i.e. from the included document.
   * In the latter case the iframe element is retrieved programmatically.
   * 
   * @param oDoc  Included page's document object
   * @param sId   ID of including iframe
   */               
  resize : function ( oDoc, sId ) 
  {
    try
    {
      if ( typeof oDoc == "undefined" ) return;
  
      if ( typeof sId != "undefined" ) 
      {
        var iframe = oDoc.getElementById( sId );
        var iframeDoc = iframe.contentWindow.document;
      } else {
        var iframeDoc = oDoc;
        var iframeWindow = iframeDoc.parentWindow || iframeDoc.defaultView;
        var iframe = iframeWindow.frameElement;
      }
      var wrapper = iframeDoc.getElementById( this.wrapperId );

      // make sure we only resize once
      if ( iframeDoc.isIntegrated == true ) { return; }
      
      // switch on transparency for iframe
      iframeDoc.body.style.backgroundColor = "transparent";
      iframe.allowTransparency = "true";
            
      iframeDoc.body.style.padding = "0px";
      iframeDoc.body.style.border = "none";
      
      var tabs = iframeDoc.getElementsByTagName( "table" )
      if ( tabs[0] && tabs[0].className == "dborder" )
     	{		
      	wrapper.setAttribute( "wfx:overridewidth", "true" );
      } else if ( iframeDoc.forms[0] && iframeDoc.forms[0].elements["formname"] ) 
      {
      	wrapper.setAttribute( "wfx:overridewidth", "true" );
      } 
      
      if ( window.addEventListener )
      {   
      	var gcs = iframeDoc.defaultView.getComputedStyle( iframeDoc.body, null);
        var v_margin = parseInt( gcs.getPropertyValue( "margin-top" ) ) + parseInt( gcs.getPropertyValue( "margin-bottom" ) );
        var h_margin = parseInt( gcs.getPropertyValue( "margin-left" ) ) + parseInt( gcs.getPropertyValue( "margin-right" ) );
        var wrapper_width = wrapper.offsetWidth;
        
        var flex = wrapper.getAttribute( "wfx:overridewidth" );
        if ( flex == "true" )
        {
        	wrapper.style.width = "100%";
        } else {
        	iframe.style.width = wrapper_width + h_margin + "px";
        }
        
        // Setting the top padding of the wrapper avoids wrong calculation of the height due to collapsing margins behavior
        wrapper.style.paddingTop = "1px";
        
        height = wrapper.offsetHeight + v_margin ;
      } 
      else if ( window.attachEvent ) 
      {        
        iframeDoc.body.style.margin = "0px";
        var wrapper_width = wrapper.offsetWidth;
        
        var flex = wrapper.getAttribute( "wfx:overridewidth" );
        if ( flex == "true" )
        {
        	wrapper.style.width = "100%";
        } else {
        	// We need to add this extra 20 pixel for some modules. Otherwise the width would not be big enough and we would get scrollbars.
            // REMARK: In the script which is used for resizing the modules inside the editor we don't need this!
            // Currently I don't know the reason for this difference!?
        	iframe.style.width = wrapper_width + 20 + "px";
        }
        
        height = wrapper.offsetHeight;
      }

      if ( iframe.scrolling != "yes" ) { height += 20; }
      
      iframe.style.height = height + "px";
      iframeDoc.isIntegrated = true; 
    } catch ( ex )
    {
      return; 
    }
    
    WfxExtrasProcessor.process( oDoc, sId );
  }
}

var WfxExtrasProcessor = {
  process : function ( oDoc, sId)
  {    
    if ( typeof oDoc == "undefined" ) return;
  
    if ( typeof sId != "undefined" ) 
    {
      var iframe = oDoc.getElementById( sId );
      var iframeDoc = iframe.contentWindow.document;
    } else {
      var iframeDoc = oDoc;
      var iframeWindow = iframeDoc.parentWindow || iframeDoc.defaultView;
      var iframe = iframeWindow.frameElement;
    }
    
    // let non-tinc links load in the parent document. this might need some adjustment
    var links = iframeDoc.getElementsByTagName( "a" );
    for ( var i = 0; i < links.length; i++ )
    {
      if ( links[i].href.indexOf( "/tinc" ) == -1 ) links[i].target = "_parent";
    }
    
    // Special case: WebElements forms might do redirection to another page after submission. That's indicated by a non-empty
    // 'redirectionEnabled' attribute of a submit button. 
    var inputs = iframeDoc.getElementsByTagName( "input" );
    for ( var i = 0; i < inputs.length; i++ )
    {
      var input = inputs[i];
      if ( input.getAttribute("redirection") != null && input.getAttribute("redirection") != '' ) 
        input.form.target = "_parent";
    }
  }
}
    
    


}
/*
     FILE ARCHIVED ON 21:25:43 Feb 07, 2011 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:45:22 Dec 14, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 82.514
  exclusion.robots: 0.226
  exclusion.robots.policy: 0.205
  cdx.remote: 0.135
  esindex: 0.019
  LoadShardBlock: 44.507 (3)
  PetaboxLoader3.datanode: 53.44 (4)
  load_resource: 50.459
  PetaboxLoader3.resolve: 18.986
*/