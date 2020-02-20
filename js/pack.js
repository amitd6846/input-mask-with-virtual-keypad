var packpanelcount = 1;
var brand;
var lob;
var mobnumber;
var circle;
var amountVal;
var circleId;
var historyTraversal;
var vodaCircleNameAnalytics;
var vodaCircleName;
var brandAnalytics;
var error;
var validationMessage="";
var buybuttonclick;
var knowMoreClick="";
var categoryAnalytics="";
var packmap = {
    'categories': []
};
var analyticPageName="";

function handleSpecialChars(encryptedNumber)
{
	return encryptedNumber.replace(/[+]/g, "%2B");
}
var encryptVars = function(mobNumber)
{	
	var salt = CryptoJS.lib.WordArray.random(128/8);
	var iv = CryptoJS.lib.WordArray.random(128/8);
	var secretPassPhrase = CryptoJS.lib.WordArray.random(128/8);
	var key128Bits = CryptoJS.PBKDF2(secretPassPhrase.toString(), salt, { keySize: 128/32 }); 
	var key128Bits100Iterations = CryptoJS.PBKDF2(secretPassPhrase.toString(), salt, { keySize: 128/32, iterations: 100 });
	var encryptedNumber = CryptoJS.AES.encrypt(mobNumber, key128Bits100Iterations, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7  });
	return {
		salt:salt,
		iv:iv,
		secretPassPhrase:secretPassPhrase,
		encryptedNumber:handleSpecialChars(encryptedNumber.toString())
	};
}

$(document).ready(function() {

	$(".packsMaincat").on("click",function(event){
		categoryAnalytics=$(this).text();
        utag.link({'Custom_Links' : analyticPageName+": "+categoryAnalytics});
        utag.link({'Custom_Links' : analyticPageName+": Tab Click"});
    });
	$(".change-circle").on("click",function(event){
		utag.link({'Custom_Links' : analyticPageName+': Change Circle'});
    });
	var vodaCircleNameAnltcs = $("#vodaCircleNamecookie").val();
	var mobilnoCookieAnltcs = $("#msisdncookie").val();
	if(vodaCircleNameAnltcs != undefined && vodaCircleNameAnltcs != null && vodaCircleNameAnltcs !="" && vodaCircleNameAnltcs !="NA"){
		vodaCircleName = vodaCircleNameAnltcs;
	}else {
		vodaCircleName = "Mumbai";
	}
    if((document.location.href.indexOf('recharge/Unlimited-packs') > -1) || (document.location.href.indexOf('/prepaid/unlimited-calls-and-data-plans') > -1)){
	var server_name =window.location.hostname;
	window.utag_cfg_ovrd = window.utag_cfg_ovrd || {};
	window.utag_cfg_ovrd.noview=false;
     analyticPageName="Prepaid: Unlimited Packs";
    utag_data = {
            page_name: "Prepaid: Unlimited Packs", //pagename
            page_channel: "Prepaid", //channel
            page_server: server_name, //server
            page_type: "Transactional", //prop5
            visitor_language: "EN", //prop6
            visitor_login_status: "Not Logged In", //prop7
            visitor_type: "consumer", //prop8
            page_master_tab: "Home", //prop20
            page_site_section_lvl_2: "Home:Prepaid", //prop21
            page_site_section_lvl_3: "Home:Prepaid:Unlimited Packs", //prop22
            service_application_name: "Recharge Online", //eVar18
            customer_journey: "Prepaid: Unlimited Packs", //eVar28
            journey_event: "start", //event7
            visitor_visit_number : vodaCircleName	
    
        }
    }else if((document.location.href.indexOf('recharge/talktime-packs') > -1) || (document.location.href.indexOf('/prepaid/recharge-talktime-top-up-plans') > -1)){
	var server_name =window.location.hostname;
	window.utag_cfg_ovrd = window.utag_cfg_ovrd || {};
	window.utag_cfg_ovrd.noview=false;
     analyticPageName="Prepaid: Talktime Packs";
    utag_data = {
            page_name: "Prepaid: Talktime Packs", //pagename
            page_channel: "Prepaid", //channel
            page_server: server_name, //server
            page_type: "Transactional", //prop5
            visitor_language: "EN", //prop6
            visitor_login_status: "Not Logged In", //prop7
            visitor_type: "consumer", //prop8
            page_master_tab: "Home", //prop20
            page_site_section_lvl_2: "Home:Prepaid", //prop21
            page_site_section_lvl_3: "Home:Prepaid:Talktime Packs", //prop22
            service_application_name: "Recharge Online", //eVar18
            customer_journey: "Prepaid: Talktime Packs", //eVar28
            journey_event: "start", //event7
            visitor_visit_number : vodaCircleName	    
        }
    }else if((document.location.href.indexOf('recharge/data-packs') > -1) || (document.location.href.indexOf('/prepaid/4g-3g-mobile-data-plans') > -1)){
	var server_name =window.location.hostname;
	window.utag_cfg_ovrd = window.utag_cfg_ovrd || {};
	window.utag_cfg_ovrd.noview=false;
     analyticPageName="Prepaid: Data Packs";
    utag_data = {
            page_name: "Prepaid: Data Packs", //pagename
            page_channel: "Prepaid", //channel
            page_server: server_name, //server
            page_type: "Transactional", //prop5
            visitor_language: "EN", //prop6
            visitor_login_status: "Not Logged In", //prop7
            visitor_type: "consumer", //prop8
            page_master_tab: "Home", //prop20
            page_site_section_lvl_2: "Home:Prepaid", //prop21
            page_site_section_lvl_3: "Home:Prepaid:Data Packs", //prop22
            service_application_name: "Recharge Online", //eVar18
            customer_journey: "Prepaid: Data Packs", //eVar28
            journey_event: "start", //event7
            visitor_visit_number : vodaCircleName	    
        }
    }else if((document.location.href.indexOf('recharge/servicevalidity-packs') > -1) || (document.location.href.indexOf('/prepaid/service-validity-recharge-plans') > -1)){
	var server_name =window.location.hostname;
	window.utag_cfg_ovrd = window.utag_cfg_ovrd || {};
	window.utag_cfg_ovrd.noview=false;
     analyticPageName="Prepaid: Service Validity Packs";
    utag_data = {
            page_name: "Prepaid: Service Validity Packs", //pagename
            page_channel: "Prepaid", //channel
            page_server: server_name, //server
            page_type: "Transactional", //prop5
            visitor_language: "EN", //prop6
            visitor_login_status: "Not Logged In", //prop7
            visitor_type: "consumer", //prop8
            page_master_tab: "Home", //prop20
            page_site_section_lvl_2: "Home:Prepaid", //prop21
            page_site_section_lvl_3: "Home:Prepaid:Service Validity Packs", //prop22
            service_application_name: "Recharge Online", //eVar18
            customer_journey: "Prepaid: Service Validity Packs", //eVar28
            journey_event: "start", //event7
            visitor_visit_number : vodaCircleName	    
        }
    }

    window.addEventListener("pageshow", function (event) {
        historyTraversal = event.persisted || 
                             ( (typeof window.performance != "undefined" && 
                                  window.performance.navigation.type === 2 ) || (typeof window.performance != "undefined" && 
                                          window.performance.navigation.type === 1 ));
      if (historyTraversal) {

          var lobCookie = $("#lobcookie").val();
            var msisdncookie = $("#msisdncookie").val();


            if(lobCookie!=undefined && lobCookie!="" && lobCookie!=null && lobCookie == "PREPAID"){
                var mobnoCookie = $("#msisdncookie").val();
                 if(mobnoCookie.length === 10){ 
                     
                        $("#mobile").val(mobnoCookie);
						placeholderLabel();
                    setTimeout(function(){
						$("#mobile").focus().val("").val(mobnoCookie);

						$('.input-label').show();
                      	$('.reset-input').css('display', 'inline'); 
                     }, 1000);


                   validNumber();

                    }
            }

      }
    });
	  validationMessage = $.parseJSON($("#authoredError #error").val());
    $("#mobile").on("blur", function() {
        if (this.value.length == 10 && $(this).hasClass("correctscenario")) {
          $('.mobile-input-group').addClass('validBorder').removeClass('invalidBorder');
        }else if (this.value.length == 10 && !$(this).hasClass("correctscenario")) {
        	$('.mobile-input-group').removeClass('validBorder').addClass('invalidBorder');
        } 
        else if(this.value.length == 0){
        	$('.mobile-input-group').addClass('validBorder').removeClass('invalidBorder');
            $(".confirm-btn").addClass("disabled");
            $('.confirm-btn').prop('disabled', 'disabled');
            $('.input-label, .invalid-feedback').hide();
        }else {
         //   var jsonObject = $("#error").val();
          //  var errorJsonMsg = $.parseJSON(jsonObject);
            $('.mobile-input-group').removeClass('validBorder').addClass('invalidBorder');
            $(".invalid-feedback").show().html(validationMessage['mobileNumber']['tendigit']);

        }

    });

     $(document).keyup(function(e) {
         if (e.keyCode === 27) {
             $('.close').click();
         }
     });

    if ($(window).width() <= 768) {
        $(".modalKnowmore").removeClass("modal-dialog-centered");
        //$(".circle-selection .modal-dialog").addClass("modal-dialog-centered");
    } else {
        $(".modalKnowmore").addClass("modal-dialog-centered");
        //$(".circle-selection .modal-dialog").removeClass("modal-dialog-centered");
    }

    $(".circle-selection .close").on("click", function() {
        $("#locationSelect").removeClass("show");
    });

    $('.circl-name').keydown(function(e) {
        if (e.which == 40) {
            $("li.circle-selected").next().addClass("circle-selected");
            $("li.circle-selected").prev().removeClass("circle-selected");
            var topPos = $('.circle-selected').position().top;
            $('#locationSelect').animate({
                scrollTop: topPos,
            });
        } else if (e.which == 38) {
            $("li.circle-selected").prev().addClass("circle-selected");
            $("li.circle-selected").next().removeClass("circle-selected");
            var topPos = $('.circle-selected').position().top;
            $('#locationSelect').animate({
                scrollTop: topPos,
            });
        } else if (e.which == 13) {
            var tempVal = $("li.circle-selected p").text();
            $(".circl-name").text(tempVal);
        }
    });

    /*pack number start*/
    var packnodesktop = $("#packnodesktop").val();
    var packnomob = $("#packnomob").val();
    var mobcheckagent = navigator.userAgent;
    if (mobcheckagent.indexOf("Mobile") > -1) {
        packpanelcount = parseInt(packnomob);
    } else {
        packpanelcount = parseInt(packnodesktop);
    }

    /*pack number End*/
    $(".packsMaincat").each(function() {
        var packtemp = $(this).attr('data-packname');
        packmap.categories.push(packtemp);
    });
    //Mobile Number Validation Starts
    $('.reset-input').on('click', function() {
        $('#mobile').val('');
        var jsonObject = $("#error").val();
        var errorJsonMsg = $.parseJSON(jsonObject);
        $(".invalid-feedback").text(errorJsonMsg.mobileNumber.tendigit).show();
        $('.mobile-input-group').addClass('validBorder').removeClass('invalidBorder');
        
        $(".confirm-btn").addClass("disabled");
        $(".confirm-btn").prop("disabled","disabled");
        $('.input-label, .invalid-feedback').hide();
        $(this).hide();
        $('#mobile').focus();
        hideCouponDetails();
    });


    $("#mobile").on("keyup input", function(event) {

        var reg = /^[01234]+/gi;
        if (this.value.match(reg)) {
            this.value = this.value.replace(reg, '');
        }
        var regex = /^0+/gi;
        if (this.value.match(reg)) {
            this.value = this.value.replace(regex, '');
        }
        this.value = this.value.replace(/[^0-9]/g, '');

        var tempVal = $(this).val();

        if (tempVal.length == 10 && (!isNaN(tempVal)) && event.type === "input") {
            $(this).parent().siblings(".invalid-feedback").hide();
            $(this).parent().addClass("validBorder");
            $('.reset-input').css("display", "inline");            
            validNumber();
        } else if (tempVal.length > 10) {

        } else if (tempVal.length > 0 && tempVal.length < 10 && (event.keyCode == 8 || event.keyCode == 46)) {
         //   var jsonObject = $("#error").val();
          //  var errorJsonMsg = $.parseJSON(jsonObject);
            $(".invalid-feedback").show().html(validationMessage['mobileNumber']['tendigit']);
            $('#mobile').show();
            $(this).parent().siblings(".invalid-feedback").show();
            $(".confirm-btn").addClass("disabled");
            $(".confirm-btn").prop("disabled","disabled");
            $('.mobile-input-group').removeClass('validBorder').addClass('invalidBorder');
            hideCouponDetails();
        } else if ((tempVal.length > 0) && (tempVal.length < 10) && (event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105)) {
            $(this).siblings(".invalid-feedback").hide();
            $(".confirm-btn").addClass("disabled");
            $(".confirm-btn").prop("disabled","disabled");
            $('.reset-input').css("display", "inline");
            $('.mobile-input-group').removeClass('invalidBorder').addClass('validBorder');
            $(this).parent().siblings(".invalid-feedback").hide();
            hideCouponDetails();
        }
        if (tempVal.length == 0) {
            $(this).parent().siblings(".invalid-feedback").hide();
            $(this).parent().removeClass("invalidBorder validBorder");
            $(".confirm-btn").addClass("disabled");
            $(".confirm-btn").prop("disabled","disabled");
            $('.reset-input').hide();
            hideCouponDetails();
        }
    });

    //Mobile Number Validation Ends
    placeholderLabel();
    $("#mobile").on("change", function() {
        if (this.value.length == 10) {
          $('.mobile-input-group').addClass('validBorder').removeClass('invalidBorder');
          //validNumber();
        } else if(this.value.length == 0){
        	$('.mobile-input-group').addClass('validBorder').removeClass('invalidBorder');
            $(".confirm-btn").addClass("disabled");
            $('.confirm-btn').prop('disabled', 'disabled');
            $('.input-label, .invalid-feedback').hide();            
            //hideCouponDetails();
        } else {
         //   var jsonObject = $("#error").val();
          //  var errorJsonMsg = $.parseJSON(jsonObject);
            $('.mobile-input-group').removeClass('validBorder').addClass('invalidBorder');
            $(".invalid-feedback").show().html(validationMessage['mobileNumber']['tendigit']);
            //hideCouponDetails();
            
        }

    });

    $(document).on('click', '.confirm-btn', function(e) {
    	var lobAnalytics = $("#lobcookie").val();
    	

    	var mobilenoanalytics=$('#mobile').val();
    	vodafoneMobileEncryptionConfirm(mobilenoanalytics,vodaCircleNameAnalytics,lobAnalytics,"Vodafone","No Error");
    	//console.log("confirm clicked");
        $(".sendDataToPG").submit();
    });


    function vodafoneMobileEncryptionConfirm(mobilenoanalytics,vodaCircleNameAnalytics,lobAnalytics,brandAnalytics,error){

   	 var object = {};
	    object["mobNumber"] =mobilenoanalytics;
	   		$.ajax({
				type : "POST",
				url : "/bin/vodafoneideadigital/VFINMSISDNHashServlet",
				data: 'EncryptedVal=' + JSON.stringify(object),
				success : function(data) {
					var jsonObjHash = $.parseJSON(data);
					var  hash = jsonObjHash.hashGenerated;
					enctyptedanalyticsNumber= hash;
	                //console.log('enctyptedanalyticsNumber:: '+enctyptedanalyticsNumber);
 	                
 	               lobAnalytics = lobAnalytics.toLowerCase().replace(/\b[a-z]/g, function(letter) {
 	                  return letter.toUpperCase();
 	              });	
 	               
 	              
 	              if(lobAnalytics == "Prepaid" && brandAnalytics== "Vodafone"){
 	            	 if(error!="Error_Present"){
	                utag.link({
					'Custom_Links' : analyticPageName+': Confirm',
 	           		'subscriber_type' : "Vodafone Number",
 	           		'visitor_visit_number':vodaCircleNameAnalytics,
 	           		'visitor_subscription_type':lobAnalytics,
 	           		'Un_Authenticated_Visitor_ID':enctyptedanalyticsNumber,
 	           		'prepaid' : "start_checkout",
 	           		'checkout_event' : "start",
 	           	     'coupon_value' : "No Coupon"
 	           	});
 	            	 }
 	            	 else {
 	            		utag.link({
						'Custom_Links' : analyticPageName+': Confirm',
 	    	           		'subscriber_type' : "Vodafone Number",
 	    	           		'visitor_visit_number':vodaCircleNameAnalytics,
 	    	           		'visitor_subscription_type':lobAnalytics,
 	    	           		'Un_Authenticated_Visitor_ID':enctyptedanalyticsNumber,
 	    	           		'error_message': "You have entered a number that belongs to different circle.Please change circle or enter correct number.",
 	    	           		'error_event' : "error_number",
 	    	           		'page_error_type' : analyticPageName+"- Number Entry"
 	    	           	});
  	            	 }
 	              }	                
 	              else if(lobAnalytics == "Postpaid" && brandAnalytics== "Vodafone"){
                	 utag.link({
						'Custom_Links' : analyticPageName+': Confirm',
      	           		'subscriber_type' : "Vodafone Number",      	           	
      	           		'visitor_visit_number':vodaCircleNameAnalytics,
      	           		'visitor_subscription_type':lobAnalytics,
      	           		'Un_Authenticated_Visitor_ID':enctyptedanalyticsNumber,
      	           	    'error_message': "You have entered postpaid number.Please enter Valid Prepaid number",
      	           	    'error_event' : "error_number",
      	           	    'page_error_type' : analyticPageName+" - Number Entry"
      	           	});
                	 }
 	              else {
 	            	 utag.link({
						'Custom_Links' : analyticPageName+': Confirm',
       	           		'Non_Vodafone_Visitor_ID' : enctyptedanalyticsNumber,      	           	
       	           		'visitor_subscription_type':"Non Vodafone",
       	           	    'error_message': "Seems like you have entered an invalid number.Please enter valid Prepaid number",
       	           	    'error_event' : "error_number",
       	           	    'page_error_type' : analyticPageName+" - Number Entry"
       	           	});
 	            	  
 	              }
 	                	                
 	              }
 			});
 		}
    
    
    function hideCouponDetails() {
    	$(".selected-pack-wrapper .plan-amount").text($("#actualPackAmount").val());
        $(".scratchAmt").addClass("d-none").removeClass("d-flex");
		$(".scratchRupSymbol").addClass("d-none").removeClass("d-flex");
		$("#couponappliedtopack").addClass("d-none").removeClass("d-flex");
		if($(".selected-pack-wrapper .plan-coupon").text() != ""){
			$(".selected-pack-wrapper .coupon-star").show();
			$(".selected-pack-wrapper .plan-coupon").show();
		}
    }
    //Floating Lebel starts
    function placeholderLabel() {
        $(".input-label").hide();
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");
        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) // If Internet Explorer, return version number
        {
            $(".form-control").focus(function(event) {
                $(this).siblings(".input-label").show();
            });
            $(".form-control").on("blur", function(event) {
                if (this.value.length == 0) {
                    $(this).siblings(".input-label").hide();
                }
            });
        } else // If another browser, return 0
        {
            $(".form-control").on("keyup input", function(event) {
                $(this).siblings(".input-label").show();
                var tempVal = $(this).val();
                if (tempVal.length <= 0) {
                    $(this).siblings(".input-label").hide();
                }
            });
        }
        return false;
    }
    //Floating Lebel ends

    $('#selectCircle').on('$change', function() {
        var optionVal = $('#selectCircle option:selected').text();
        $(".packsMaincat").show();
        $('.selected-circle').html(optionVal+".");
    });
    $('#selectCircl li p').on('click', function() {
        $(".packsMaincat").show();
        $(this).parent().addClass('circle-selected');
        $(this).parent().siblings().removeClass('circle-selected');
        var circle = $(this).html();
        $('.card-header .circl-name').html(circle);
        $('.selected-circle').html(circle +".")
        $('#locationSelect').collapse('hide');
        var crcle = $(this).parent().attr('data-val');
        changeCircle(crcle);
        $("#circleSelection").modal('hide');
        utag.link({"visitor_visit_number": circle});

    });
    $("#locationSelect").on("shown.bs.collapse", function(e) {
        var topPos = $('.circle-selected').position().top;
        $('#locationSelect').animate({
            scrollTop: topPos,
        }, "slow");
    });

    var jsonNonTelco = {};
    if ($("#inputnonTelcoBenefitId").val() != "" && $("#inputnonTelcoBenefitId").val() != "null" && $("#inputnonTelcoBenefitId").val() != null) {
        var jsonNonTelco = $("#inputnonTelcoBenefitId").val();
        jsonNonTelco = JSON.parse(jsonNonTelco);
    } else {
        jsonNonTelco = {
            "benefits_1": {
                "valuexist": true,
                "icon": "",
                "title": "",
                "description": "",
                "freetext": "",
                "freemrp": ""
            },
            "benefits_2": {
                "valuexist": true,
                "icon": "",
                "title": "",
                "description": "",
                "freetext": "",
                "freemrp": ""
            },
            "benefits_3": {
                "valuexist": false,
                "icon": "",
                "title": "",
                "description": "",
                "freetext": "",
                "freemrp": ""
            },
            "benefits_4": {
                "valuexist": false,
                "icon": "",
                "title": "",
                "description": "",
                "freetext": "",
                "freemrp": ""
            },
            "benefits_5": {
                "valuexist": false,
                "icon": "",
                "title": "",
                "description": "",
                "freetext": "",
                "freemrp": ""
            },
            "benefits_6": {
                "valuexist": false,
                "icon": "",
                "title": "",
                "description": "",
                "freetext": "",
                "freemrp": ""
            },
            "benefits_7": {
                "valuexist": false,
                "icon": "",
                "title": "",
                "description": "",
                "freetext": "",
                "freemrp": ""
            },
            "benefits_8": {
                "valuexist": false,
                "icon": "",
                "title": "",
                "description": "",
                "freetext": "",
                "freemrp": ""
            },
            "benefits_9": {
                "valuexist": false,
                "icon": "",
                "title": "",
                "description": "",
                "freetext": "",
                "freemrp": ""
            },
            "benefits_10": {
                "valuexist": false,
                "icon": "",
                "title": "",
                "description": "",
                "freetext": "",
                "freemrp": ""
            }
        };
    }



    var circlecookie="";
    circlecookie = $("#circlecookie").val();
	var counterCircl = 0;
    if(circlecookie!="" && $("#circlecookie").val()!= "NA")
    {
		$('#selectCircl li').each(function(){
			
			if($(this).data('val') == circlecookie){
				//console.log($(this).data('val')+" --- "+ circlecookie);
				$(this).addClass('circle-selected');
				$(this).siblings().removeClass('circle-selected');
				//console.log('>>>>>>>>>.1');
				$('.circl-name').text($(this).find('p').text());
				$('.selected-circle').text($(this).find('p').text()+'.');
				counterCircl++;
				changeCircle(circlecookie);
			}
		else{
			
				counterCircl++;
				if(counterCircl <=1){
					//console.log("else cond");
					//changeCircle("MUM");
				}
				
			}
			
	});}else{
		if($("#circleIdcookie").val()!= "" && $("#circleIdcookie").val()!= "NA"){
					changeCircle($("#circleIdcookie").val());
		}else{
		changeCircle("MUM");
		}
	}



    function changeCircle1(circle) {




        $(".packcontainer").find(".packs").remove();
        $.ajax({
            type: "Get",
            url: "/content/dam/VIL/HARMONIZED/PREPAID/PACK/" + circle,
            dataType: "json",
			beforeSend: function() {
                $("#divLoading").addClass('show');    
            },
            success: function(data) {
                var json_obj = data;
                $.each(json_obj.DATA, function(i, val) {
                    var categoryname = val.category_name;
                    if ($.inArray(categoryname, packmap.categories) == -1) {
                        //console.log("Not Present Category in Dialog Box " + categoryname);
                        $(".tabs a[data-packname= '" + categoryname + "']").hide();
                    } else {
                        //console.log("Present " + categoryname);
                        var hasSubsubcategory = val.hasSubsubcategory;
                        if (hasSubsubcategory == "false") {
                            var subcategorylist = val.subcategorylist;
                            if (subcategorylist == "") {
                                $(".tabs a[data-packname= '" + categoryname + "']").hide();
                            } else {
                                var hreftabcontentid = $(".tabs a[data-packname= '" + categoryname + "']").attr("href");
                                var tabcontentid = hreftabcontentid.split("#")[1];
                                //console.log(tabcontentid);
                                $.each(subcategorylist, function(j, itemData) {
                                    var $inputClone = $("#modelpack").children().clone();
                                    $inputClone.find('.plan-amount').html(itemData.UnitCost);

                                    if (itemData.PROMOTION_TITLE != "null" && itemData.PROMOTION_TITLE != "" && itemData.PROMOTION_TITLE != null) {
                                        $inputClone.find('.plan-coupon').html(itemData.PROMOTION_TITLE);

                                    } else {
                                        $inputClone.find('.plan-coupon').html(itemData.PROMOTION_TITLE);
                                        $inputClone.find(".coupon-star").hide();
                                    }

                                    //Changing this code to get sync with ORC flow
                                    if(categoryname === 'Talktime')
                                    {
                                    	//console.log("Talktime");
                                    	 if (itemData.TALKTIME_LINE_1 != "" && itemData.TALKTIME_LINE_1 != "null" && itemData.TALKTIME_LINE_1 != null) {
 	                                        $inputClone.find('.talktime').html(itemData.TALKTIME_LINE_1);
 	                                    } 
	                                    else if (itemData.VOICE_LINE_1 != "" && itemData.VOICE_LINE_1 != "null" && itemData.VOICE_LINE_1 != null) {
	                                        $inputClone.find('.talktime').html(itemData.VOICE_LINE_1);
	                                    }
	                                    else {
	                                        $inputClone.find('.talktime').parent().hide();
	                                       // $inputClone.find('.talktime').parent().next().addClass("removeLeftBorder");
	                                    }	                                                                    	
                                    }
                                    else {
                                    	if (itemData.VOICE_LINE_1 != "" && itemData.VOICE_LINE_1 != "null" && itemData.VOICE_LINE_1 != null) {
	                                        $inputClone.find('.talktime').html(itemData.VOICE_LINE_1);
	                                    } 
	                                    else if (itemData.TALKTIME_LINE_1 != "" && itemData.TALKTIME_LINE_1 != "null" && itemData.TALKTIME_LINE_1 != null) {
	                                        $inputClone.find('.talktime').html(itemData.TALKTIME_LINE_1);
	                                    }
	                                    else {
	                                        $inputClone.find('.talktime').parent().hide();
	                                        //$inputClone.find('.talktime').parent().next().addClass("removeLeftBorder");
	                                    }
                                    }
                                    
                                    if (itemData.DATA_LINE_1 != "" && itemData.DATA_LINE_1 != "null" && itemData.DATA_LINE_1 != null) {
                                        $inputClone.find('.data').html(itemData.DATA_LINE_1);
                                    } else {
                                        $inputClone.find('.data').parent().hide();
                                        if (itemData.TALKTIME_LINE_1 == "" || itemData.TALKTIME_LINE_1 == "null" || itemData.TALKTIME_LINE_1 == null) {
                                           // $inputClone.find('.data').parent().next().addClass("removeLeftBorder");
                                        }
                                    }
                                    if (itemData.SMS_LINE_1 != "" && itemData.SMS_LINE_1 != "null" && itemData.SMS_LINE_1 != null && tabcontentid == "SMS") {
                        				$inputClone.find('.SMS').html(itemData.SMS_LINE_1);
                        			} else {
                        				$inputClone.find('.SMS').parent().hide();
                        			}
                                    
                                    if (itemData.UCS_VALIDITY != "" && itemData.UCS_VALIDITY != "null" && itemData.UCS_VALIDITY != null) {
                                        $inputClone.find('.validity').html(itemData.UCS_VALIDITY);
                                    } else {
                                        $inputClone.find('.validity').parent().hide();
                                    }
                                    /*Non Telco start*/
                                    $inputClone.find('.non-teleco-feature').empty();
                                    if (categoryname != "") {
                                        var counterCheck = 0;
                                        for (var i = 1; i <= 10; i++) {
                                            var test = "BENEFITS_" + i;
                                            var benefits = itemData[test];
                                            if (benefits) {
                                                var benefitslower = test.toLowerCase();
                                                var jsonNonTelcotemp = jsonNonTelco[benefitslower];
                                                if (jsonNonTelcotemp.valuexist && counterCheck < 2) {
                                                    var colCloneofNonTelco = $('#nontelcomodel').children().clone();
                                                    var iconsrc = jsonNonTelcotemp.icon;
                                                    var title = jsonNonTelcotemp.title;
                                                    var description = jsonNonTelcotemp.description;
                                                    var freetext = jsonNonTelcotemp.freetext;
                                                    var freemrp = jsonNonTelcotemp.freemrp;
                                                    colCloneofNonTelco.find(".nontelcoimg").attr("src", iconsrc);
                                                    colCloneofNonTelco.find(".nontelcoimg").attr("alt", title);
                                                    colCloneofNonTelco.find(".non-teleco-benefith4").text(title);
                                                    colCloneofNonTelco.find(".nontelcodesc").val(description);
                                                    colCloneofNonTelco.find(".nontelcofreetext").val(freetext);
                                                    colCloneofNonTelco.find(".nontelcofreemrp").val(freemrp);
                                                    $inputClone.find('.non-teleco-feature').append(colCloneofNonTelco);
                                                    counterCheck = counterCheck + 1;
                                                } else {
                                                    //console.log("NotAuthored");
                                                }
                                            }
                                        }
                                    } else {
                                        $inputClone.find('.validity').parent().addClass("removeRightBorder");
                                    }
                                    /*Non Telco end*/

                                    $inputClone.find('.knowmore').attr("data-itemdata", JSON.stringify(itemData));
                                    $("#" + tabcontentid + " .datapacks").append($inputClone);
                                });
                            }
                        } else {
                            //console.log("hasSubsubcategory value is wrong or wrong data has been provided as per promised there will not be any subcategory " + hasSubsubcategory);
                        }
                    }
                });
                /*Remove tab if data not available*/

                /*Packs hide and show start*/
				$(".packsMaincat").removeClass("hiddenpack");
				$(".datapacks").children(".packs").removeClass("packshow");
                $(".datapacks").each(function() {
                    if ($(this).children().length == 0) {
                        var tempId = $(this).parent().attr("id");
                        $(".packsMaincat[href='#" + tempId + "']").hide();
						$(".packsMaincat[href='#" + tempId + "']").addClass("hiddenpack");

                    }
                    for (var j = 0; j < packpanelcount; j++) {
                        $(this).children().eq(j).show();
                        $(this).children().eq(j).addClass("packshow");
                    }
                });

				$(".packsMaincat").removeClass("active");
				$(".packcomponent .tab-pane").removeClass("active");	

				$('.packsMaincat:not(.hiddenpack):first').addClass("active");
				var href = $('.packsMaincat:not(.hiddenpack):first').attr("href");
				if(href != undefined){
					var hreftemp = href.split("#")[1];
					$("#"+hreftemp).addClass("active show");
                }

                showpanels();
                /*Packs hide and show end*/
            },
			complete: function () { 
                $("#divLoading").removeClass('show'); 
                } 

        });
    }
    /*Know more functionality start*/

    $(document).on('click', '.anchorknowmore', function(e) {
        e.preventDefault();
        var jsondata = JSON.parse($(this).parent().attr("data-itemdata"));
        var knowmoreclone = $("#Know-more");
        knowmoreclone.find(".modalBenifit").parents(".modal-coupan").show();

        knowmoreclone.find(".knowMoreAmt").text(jsondata.UnitCost);
        //knowmoreclone.find(".modalValidity").text(jsondata["UCS_VALIDITY"] +" Validity");
        //knowmoreclone.find(".productmodalValidity").text(jsondata["SERVICEVALIDITY_ATTR"] +" Service Validity");
        knowMoreClick = $(this).parents(".packcontainer").siblings(".circle-filter").find(".nav-item.active").text();
        if(jsondata["SERVICEVALIDITY_ATTR"]!= "" && jsondata["SERVICEVALIDITY_ATTR"]!=undefined && jsondata["SERVICEVALIDITY_ATTR"]!='undefined' && jsondata["SERVICEVALIDITY_ATTR"]!='0'){
            $('#pvalidity').text(jsondata["SERVICEVALIDITY_ATTR"] + " Service Validity");
                 $('#pvalidity').show();
            }else{
            	 $('#pvalidity').hide();	
            }
        

        /*Strike Through start*/
        knowmoreclone.find(".strikethoughknowmore").hide();
        /*Strike Through end*/

        /*Model Coupon start*/
        if (jsondata.PROMOTION_TITLE != "" && jsondata.PROMOTION_TITLE != null && jsondata.PROMOTION_TITLE != undefined) {
        	utag.link({
            	'Custom_Links' : analyticPageName+": Know More",	//prop28
                'Product_Type': "Prepaid: " + jsondata['PRODUCT-CATEGORY'],	//evar76
                'prepaid_pack_mrp' : "Prepaid: "+ jsondata.UnitCost + " Pack: "+jsondata.PROMOTION_TITLE, //evar81
                'product_event' : "view" ,     //Product Views
                //'plan_type' : "Prepaid: "+ jsondata['PRODUCT-CATEGORY']+": "+jsondata.UnitCost+" pack",
                'sales_products' : jsondata['PRODUCT-CATEGORY']+";"+jsondata['ItemID']+";1;"+jsondata.UnitCost//Products
    	        
            });
        	//utag.link({'Custom_Links' : analyticPageName+": Tab Know More"});
            knowmoreclone.find(".modalBenifit").html(jsondata.PROMOTION_TITLE);
        } else {
        	utag.link({
            	'Custom_Links' : analyticPageName+": Know More",	//prop28        	
                'Product_Type': "Prepaid: " + jsondata['PRODUCT-CATEGORY'],	//evar76
                'prepaid_pack_mrp' : "Prepaid: "+ jsondata.UnitCost + " Pack: "+"No offer", //evar81
                'product_event' : "view" ,     //Product Views
                //'plan_type' : "Prepaid: "+ jsondata['PRODUCT-CATEGORY']+": "+jsondata.UnitCost+" pack",
                'sales_products' : jsondata['PRODUCT-CATEGORY']+";"+jsondata['ItemID']+";1;"+jsondata.UnitCost//Products
    	        
            });
        	//utag.link({'Custom_Links' : analyticPageName+": Tab Know More"});
            knowmoreclone.find(".modalBenifit").parents(".modal-coupan").hide();
        }
        /*Model Coupon end*/

        var planbenfits = $("#Know-more").find(".planbefenit");
        planbenfits.empty();

        if (jsondata.hasOwnProperty('TALKTIME_LINE_1')) {
            if (jsondata["TALKTIME_LINE_1"] != "null" && jsondata["TALKTIME_LINE_1"] != "" && jsondata["TALKTIME_LINE_1"] != null) {
                var knowmorecol = $("#knowmorecol").children().clone();
                knowmorecol.find(".modal-icon").attr("src", "/content/dam/vodafoneideadigital/StaticPages/VILBanner/RechargePage/call.png");
                knowmorecol.find(".plan-benefit").html(jsondata["TALKTIME_LINE_1"]);
                planbenfits.append(knowmorecol);
            }
        }
        
        if (jsondata.hasOwnProperty('VOICE_LINE_1')) {
            if (jsondata["VOICE_LINE_1"] != "null" && jsondata["VOICE_LINE_1"] != "" && jsondata["VOICE_LINE_1"] != null) {
                var knowmorecol = $("#knowmorecol").children().clone();
                knowmorecol.find(".modal-icon").attr("src", "/content/dam/vodafoneideadigital/StaticPages/VILBanner/RechargePage/call.png");
                knowmorecol.find(".plan-benefit").html(jsondata["VOICE_LINE_1"]);
                planbenfits.append(knowmorecol);
            }
        }
        if (jsondata.hasOwnProperty('DATA_LINE_1')) {
            if (jsondata["DATA_LINE_1"] != "null" && jsondata["DATA_LINE_1"] != "" && jsondata["DATA_LINE_1"] != null) {
                var knowmorecol = $("#knowmorecol").children().clone();
                knowmorecol.find(".modal-icon").attr("src", "/content/dam/vodafoneideadigital/StaticPages/VILBanner/RechargePage/data.png");
                knowmorecol.find(".plan-benefit").html(jsondata["DATA_LINE_1"]);
                planbenfits.append(knowmorecol);
            }
        }
        if (jsondata.hasOwnProperty('SMS_LINE_1')) {
            if (jsondata["SMS_LINE_1"] != "null" && jsondata["SMS_LINE_1"] != "" && jsondata["SMS_LINE_1"] != null) {
                var knowmorecol = $("#knowmorecol").children().clone();
                knowmorecol.find(".modal-icon").attr("src", "/content/dam/vodafoneideadigital/StaticPages/VILBanner/RechargePage/sms.png");
                knowmorecol.find(".plan-benefit").html(jsondata["SMS_LINE_1"]);
                planbenfits.append(knowmorecol);
            }
        }
        /*Non Telco know more start*/

        knowmoreclone.find(".nontelcoknowmorediv").empty();
        for (var i = 1; i <= 10; i++) {
            var test = "BENEFITS_" + i;
            var benefits = jsondata[test];
            if (benefits) {
                var benefitslower = test.toLowerCase();
                var jsonNonTelcotemp = jsonNonTelco[benefitslower];

                if (jsonNonTelcotemp.valuexist){
                    var iconsrc = jsonNonTelcotemp.icon;
                    var title = jsonNonTelcotemp.title;
                    var description = jsonNonTelcotemp.description;
                    var freetext = jsonNonTelcotemp.freetext;
                    var freemrp = jsonNonTelcotemp.freemrp;
                    var knowmorenontelcodivclone = $("#knowmorenontelcodiv").children().clone();
                    knowmorenontelcodivclone.find(".nontelcoimg").attr("src", iconsrc);
                    knowmorenontelcodivclone.find(".nontelcoimg").attr("alt", benefits);
                    knowmorenontelcodivclone.find(".non-teleco-benefith4").text(benefits);
                    knowmorenontelcodivclone.find(".nontelcodesc").val(description);
                    knowmorenontelcodivclone.find(".nontelcofreetext").val(freetext);
                    knowmorenontelcodivclone.find(".nontelcofreemrp").val(freemrp);
                    knowmoreclone.find(".nontelcoknowmorediv").append(knowmorenontelcodivclone);
               }
            } else {
                //console.log("NotAuthored");
            }
        }
        
        $("#Know-more").find(".benefits-worths-list").empty();
        var readmore = jsondata["READ_MORE"];
        if(readmore != undefined){
        	if(readmore.indexOf(";;") > -1){
            	var stringarray = readmore.split(";;");
            	for(var i = 0; i < stringarray.length; i++){
                	var readmoredata = '<div class="benefits-worths col-12">'+stringarray[i]+'</div>'
                	$("#Know-more").find(".benefits-worths-list").append(readmoredata);
                }
            }else{
            	$("#Know-more").find(".benefits-worths-list").append(readmore);
            }
        }else{
        	$("#Know-more").find(".benefits-worths-list").html("");
        }
        
        if($(".nontelcoknowmorediv").children().length == 0){
        	$(".nontelcoknowmorediv").parents(".modalAdditinalBenifit").hide();
        }else{
        	$(".nontelcoknowmorediv").parents(".modalAdditinalBenifit").show();
        }


        buybuttonclick = $(this).parents(".packs");

    });
$(function(){
        $(document).on('click', '.btnknowmore', function(e) {
            var knowMoreBuyPackClick = $(this).parents(".packcontainer").siblings(".circle-filter").find(".nav-item.active").text();;
            var btnknowmorepackData = buybuttonclick.find('.knowmore').attr("data-itemdata");
        	var buyknowmorePackData = $.parseJSON(btnknowmorepackData);
           	 setTimeout(function(){$("#mobile").focus();}, 2000);
           	 console.log(btnknowmorepackData);
           	 console.log(buyknowmorePackData.PROMOTION_TITLE);

	        	if (buyknowmorePackData.PROMOTION_TITLE != "" && buyknowmorePackData.PROMOTION_TITLE != null && buyknowmorePackData.PROMOTION_TITLE != undefined) {

	    			utag.link({
	        			
	        			'Custom_Links' : analyticPageName+": Know More Buy Pack",
                        'checkout_journey' : analyticPageName+": Know More Buy Pack",
	        			'Product_Type' : "Prepaid:"+buyknowmorePackData['PRODUCT-CATEGORY'],
	                    'sales_products' : buyknowmorePackData['PRODUCT-CATEGORY']+";"+buyknowmorePackData['ItemID']+";1;"+buyknowmorePackData.UnitCost, //Products
	                    //'customer_sub_journey' : analyticPageName+": "+knowMoreBuyPackClick+" - "+buyknowmorePackData['PRODUCT-CATEGORY']+" - Buy Pack",                    
	                    'prepaid_pack_mrp' : "Prepaid: "+ buyknowmorePackData.UnitCost + " Pack: " +buyknowmorePackData.PROMOTION_TITLE 
	            });
	    			utag.link({'Custom_Links' : analyticPageName+": Common Buy Pack"});
	    			
	    		}
	    		else{

	    			utag.link({
	        			'Custom_Links' : analyticPageName+": Know More Buy Pack",        	
                        'checkout_journey' : analyticPageName+": Know More Buy Pack",
	        			'Product_Type' : "Prepaid:"+buyknowmorePackData['PRODUCT-CATEGORY'],
	                    'sales_products' : buyknowmorePackData['PRODUCT-CATEGORY']+";"+buyknowmorePackData['ItemID']+";1;"+buyknowmorePackData.UnitCost, //Products
	                    //'customer_sub_journey' : analyticPageName+": "+knowMoreBuyPackClick+" - "+buyknowmorePackData['PRODUCT-CATEGORY']+" - Buy Pack",
	                    'prepaid_pack_mrp' : "Prepaid: "+ buyknowmorePackData.UnitCost + " Pack: "+"No offer" 
	            });
	    			utag.link({'Custom_Links' : analyticPageName+": Common Buy Pack"});
	    		
	    		}
           
        	
          
            $(".close").click();
            $(".selected-pack-wrapper").find(".plan-amount").html(buybuttonclick.find('.plan-amount').html());
            $(".selected-pack-wrapper").find(".plan-coupon").parent().html(buybuttonclick.find('.plan-coupon').parent().html());
            $(".selected-pack-wrapper").find(".teleco-feature").html(buybuttonclick.find('.teleco-feature').html());
            $(".selected-pack-wrapper").find(".non-teleco-feature").html(buybuttonclick.find('.non-teleco-feature').html());
            $(".selected-pack-wrapper").find(".confirm-btn").attr("itemdata", buybuttonclick.find('.knowmore').attr("data-itemdata"));
            $(".card-container, .tabs").fadeOut();
            $('.selected-pack-wrapper').removeClass('d-none').addClass('slideInUp animated');
            $('.circle-filter').hide();
            $('.packcomponent').css("margin-top", "0");
            setTimeout(function(){$("#mobile").focus();}, 2000);
            $('.location-changer').hide();
            $('.showmoresec').hide();
            $(window).scrollTop(0);
        });

    });


    $(document).on('click', '.buybutton', function(e) {
    	var buybuttonpackData = $(this).parent().siblings(".knowmore").attr("data-itemdata");
        var buyPackData = $.parseJSON(buybuttonpackData);
         if(categoryAnalytics =="")
        	{
        	categoryAnalytics="Unlimited";
        	}
    	if (buyPackData.PROMOTION_TITLE != "" && buyPackData.PROMOTION_TITLE != undefined) {
			utag.link({
    			'Custom_Links' : analyticPageName+": Buy Pack",        	
    			'checkout_journey' : analyticPageName+": Buy Pack",
    			'Product_Type' : "Prepaid: "+buyPackData['PRODUCT-CATEGORY'],
                'sales_products' : buyPackData['PRODUCT-CATEGORY']+";"+buyPackData['ItemID']+";1;"+buyPackData.UnitCost, //Products
               // 'customer_sub_journey' : analyticPageName+": "+categoryAnalytics+" - "+buyPackData['PRODUCT-CATEGORY']+" - Buy Pack",                    
                'prepaid_pack_mrp' : "Prepaid: "+ buyPackData.UnitCost + " Pack: " +buyPackData.PROMOTION_TITLE,
                //'coupon_value' : "No Coupon"
        });
			utag.link({'Custom_Links' : analyticPageName+": Common Buy Pack"});
		}
		else{
			utag.link({
    			'Custom_Links' : analyticPageName+": Buy Pack",        	
    			'checkout_journey' : analyticPageName+": Buy Pack",
    			'Product_Type' : "Prepaid: "+buyPackData['PRODUCT-CATEGORY'],
                'sales_products' : buyPackData['PRODUCT-CATEGORY']+";"+buyPackData['ItemID']+";1;"+buyPackData.UnitCost, //Products
                //'customer_sub_journey' : analyticPageName+": "+categoryAnalytics+" - "+buyPackData['PRODUCT-CATEGORY']+" - Buy Pack",                  
                'prepaid_pack_mrp' : "Prepaid: "+ buyPackData.UnitCost + " Pack: "+"No offer",
               // 'coupon_value' : "No Coupon"
        });
			utag.link({'Custom_Links' : analyticPageName+": Common Buy Pack"});
		}
    		  

    	
		$(window).scrollTop(0);	
         var lobCookie = $("#lobcookie").val();
         var msisdncookie = $("#msisdncookie").val();
         //console.log(lobCookie + " "+msisdncookie);
         if (historyTraversal) {



//console.log(lobCookie + " "+msisdncookie);
            if(lobCookie!=undefined && lobCookie!="" && lobCookie!=null && lobCookie == "PREPAID"){
                var mobnoCookie = $("#msisdncookie").val();
                 if(mobnoCookie.length === 10){ 

                        $("#mobile").val(mobnoCookie);
					placeholderLabel();
                    setTimeout(function(){
                    	$("#mobile").focus().val("").val(mobnoCookie);
						$('.input-label').show();
                      	$('.reset-input').css('display', 'inline'); 
                     }, 1000);
                   validNumber();

                    }
            }

         }else{
 //console.log(lobCookie + " "+msisdncookie);
         }
        e.preventDefault();
        var buybuttonclick = $(this).parents(".packs");
        $(".selected-pack-wrapper").find(".plan-amount").html(buybuttonclick.find('.plan-amount').html());
        $("#actualPackAmount").val(buybuttonclick.find('.plan-amount').html());
        $(".selected-pack-wrapper").find(".plan-coupon").parent().html(buybuttonclick.find('.plan-coupon').parent().html());
        $(".selected-pack-wrapper").find(".teleco-feature").html(buybuttonclick.find('.teleco-feature').html());
        $(".selected-pack-wrapper").find(".non-teleco-feature").html(buybuttonclick.find('.non-teleco-feature').html());
        $(".selected-pack-wrapper").find(".confirm-btn").attr("itemdata", buybuttonclick.find('.knowmore').attr("data-itemdata"));
        $(".card-container, .tabs").fadeOut();
        $('.selected-pack-wrapper').removeClass('d-none').addClass('slideInUp animated');
        $('.circle-filter').hide();
        $('.packcomponent').css("margin-top", "0");
        setTimeout(function(){$("#mobile").focus();}, 2000);
        $('.location-changer').hide();
        $('.showmoresec').hide();
      //  if($('#mobile').val() != ""){
		//	validNumber();
       // }
        var lobCookie = $("#lobcookie").val();
            var msisdncookie = $("#msisdncookie").val();
            //alert("LOB " +lobCookie+ " MOB "+ msisdncookie);

            if(lobCookie!=undefined && lobCookie!="" && lobCookie!=null && lobCookie == "PREPAID"){
                var mobnoCookie = $("#msisdncookie").val();
                 if(mobnoCookie.length === 10){    
                        $("#mobile").val(mobnoCookie);
                     setTimeout(function(){
						$("#mobile").focus().val("").val(mobnoCookie);
						$('.input-label').show();
                      	$('.reset-input').css('display', 'inline'); 
                     }, 1000);
                        placeholderLabel();

                         validNumber();

                    }
            }
            getCoupons();
    });

    $('.edit a').on('click', function() {
        $('.selected-pack-wrapper').removeClass('slideInUp animated').addClass('d-none');
        $(".card-container, .tabs").fadeIn("slow");
        $('.circle-filter, .packcontainer').fadeIn("slow");
        $('.location-changer').show();
        $('.circle-filter').show();
        $('.packcomponent').css("margin-top", "10px");
        if ($(".packsMaincat.active").hasClass("showmorefull")) {
            $('.showmoresec').hide();
        } else {
            $('.showmoresec').show();
        }

        $(".scratchAmt").addClass("d-none").removeClass("d-flex");
		$(".scratchRupSymbol").addClass("d-none").removeClass("d-flex");
		$("#couponappliedtopack").addClass("d-none").removeClass("d-flex");
    });

    function showpanels() {
        $(".showmoresec").css("display", "block");
        var childlength = $(".tab-pane.active").children().children(".packs").length;
        if (childlength <= packpanelcount) {
            $(".showmoresec").css("display", "none");
            $(".packsMaincat.active").addClass("showmorefull");
        }
    }

    $(".showMore").click(function(e) {
        var childlength = $(".tab-pane.active").children().children(".packs").length;
        for (var k = 0; k < childlength; k++) {
            var lastpack = $(".tab-pane.active").find(".packshow:last");
            if (lastpack.next()) {
                lastpack = lastpack.next();
                lastpack.show();
                lastpack.addClass("packshow");
            }
        }
        var disableshow = $(".tab-pane.active").children().find(".packs:last");
        if (disableshow.hasClass("packshow")) {
            $(".showmoresec").hide();
            $(".packsMaincat.active").addClass("showmorefull");
        }
    });

    $(".packsMaincat").click(function(e) {
        setTimeout(function() {
            showpanels();
            var disableshow = $(".tab-pane.active").children().find(".packs:last");
            if (disableshow.hasClass("packshow")) {
                $(".showmoresec").hide();
            }
        }, 200);


    });

    function getCoupons() {  
    	var mobNumber = $("#mobile").val();
    	var mrpamount = $("#actualPackAmount").val();
	    if(mobNumber != "" && mrpamount != ""){
    		$.ajax({
	            type: "Get",
	            url: "/bin/vodafoneideadigital/getcoupondetails?mobileNumber=" + mobNumber+"&rechargeAmount="+mrpamount,
	            dataType: "json",
				beforeSend: function() {
                $("#divLoading").addClass('show');    
                },
	            success: function(data) {					
	            	$("#productDetailsInJsonFormat").val(data.productObj);
	            	$("#couponDetailsInJsonFormat").val(data.couponArrayObj); 
	            	var coupondata ="";
	            	if(data.productObj !="" && !$.isEmptyObject(data.productObj))
	            	{
	            		coupondata = JSON.parse(data.productObj);
	            		if(mrpamount!=coupondata.scratchedAmt){
	            		$(".selected-pack-wrapper .plan-amount").text(coupondata.scratchedAmt);
	            		if(coupondata.scratchedAmt != ""){
		            		$("#couponappliedtopack").find(".voucherDisAmount").text(coupondata.couponDiscount + " coupon applied");
		            		$("#couponappliedtopack").removeClass("d-none").addClass("d-flex");
		            		$(".selected-pack-wrapper .coupon-star").hide();
		            		$(".selected-pack-wrapper .plan-coupon").hide();
	            		}
	            		$(".scratchAmt").text(mrpamount);          		
	                	$(".scratchAmt").removeClass("d-none").addClass("d-flex");
	    				$(".scratchRupSymbol").removeClass("d-none").addClass("d-flex");}	            	
	            	}
	            	else{
	            		$(".selected-pack-wrapper .plan-amount").text(mrpamount);
	            		$("#couponappliedtopack").addClass("d-none").removeClass("d-flex");
	            		$(".scratchAmt").addClass("d-none").removeClass("d-flex");
	    				$(".scratchRupSymbol").addClass("d-none").removeClass("d-flex");
	    				if($(".selected-pack-wrapper .plan-coupon").text() != ""){
	    					$(".selected-pack-wrapper .coupon-star").show();
	    					$(".selected-pack-wrapper .plan-coupon").show();
	    				}
	            	}            		            	            		            	
	            },
				complete: function () { 
                $("#divLoading").removeClass('show'); 
                } 

	    	});
	    }    	
    }
    
    function setCookie() {  
    	var object = {};
    	var connectiondetails= "";
    	if($("#connectionDetailsCookie").val() != ""){
    		connectiondetails = $("#connectionDetailsCookie").val();
    	}
    	object["connectiondetails"] = connectiondetails;
    	var encryptedParameters = {};
    	var encparams = encryptVars(JSON.stringify(object));
    	encryptedParameters['params'] = encparams.encryptedNumber.toString();
    	encryptedParameters['sl'] = encparams.salt.toString();
    	encryptedParameters['algf'] = encparams.iv.toString();
    	encryptedParameters['sps'] = encparams.secretPassPhrase.toString();
    	
    	$.ajax({
    		url: "/bin/vodafoneideadigital/createcookie",
    		type: 'POST',
    		data: 'cookiedata=' +JSON.stringify(encryptedParameters),
    		success: function(result)
    		{
    			var  statuscookie = result.split("||");
    			  $('#seqnumber').val(statuscookie[1]);
    			//console.log("Cookie set success");
    		},
    		error: function(err)
    		{
    			return false;
    		}

    	});
    }
    
    function validNumber() {
    	getCoupons();
        var countprice = 0;
        var toastmessage = $("#toastmessage").val();
        var toastmessagearray = [];
        if (toastmessage != null && toastmessage != "null" && toastmessage != "") {
            toastmessagearray = toastmessage.split(",");
        } else {
            toastmessage = "Toast message not configured,";
            toastmessagearray = toastmessage.split(",");
        }
        var object = {};
        object["mobNumber"] = $('#mobile').val();
        mobnumber = $('#mobile').val();
    //    var jsonObject = $("#error").val();
     //   var errorJsonMsg = $.parseJSON(jsonObject);
        $("#ideapaymentgateway").removeClass("sendDataToPG");
        $("#justpay").removeClass("sendDataToPG");
        $("#connectionDetailsCookie").val("");
        
        
        $.ajax({
            url: "/bin/vodafoneideadigital/userinfoservlet",
            type: 'POST',
            data: 'mobile=' + JSON.stringify(object),
			beforeSend: function() {
                $("#divLoading").addClass('show');    
                },
            success: function(result) {
                var jsonObj = JSON.parse(result);
                
                var dataImgFirst= "";
                var dataSrcFirst= "";
                if($('.selected-pack-wrapper').find(".nontelcoimg").length > 0){
	                dataImgFirst= $('.selected-pack-wrapper').find(".nontelcoimg")[0].alt;
	                dataSrcFirst= $('.selected-pack-wrapper').find(".nontelcoimg")[0].src;
                }
                var dataImgLast = "";
                var dataSrcLast = "";
                if($('.selected-pack-wrapper').find(".nontelcoimg").length > 1){
        	         dataImgLast= $('.selected-pack-wrapper').find(".nontelcoimg")[1].alt;
        	         dataSrcLast= $('.selected-pack-wrapper').find(".nontelcoimg")[1].src;
                }
                if (null != jsonObj & 'undefined' != jsonObj && undefined != jsonObj && jsonObj.STATUS == "SUCCESS") {
                    brand = jsonObj.brand;
                    lob = jsonObj.subscriberType;
                    circle = jsonObj.circle;
                    circleId = jsonObj.circleId;
                    vodaCircleNameAnalytics = jsonObj.vodaCircleName;
                    var mobnumberanalytics = $('#mobile').val(); 
                    var selectCircl = $("#selectCircl").find(".circle-selected").attr("data-val");
                    if (lob == "PREPAID" && brand.toLowerCase() == "vodafone") {
                        /*buy pack mrp change circle start*/
                        //console.log(circle + "==" + selectCircl);
                    	$('#mobile').addClass("correctscenario");
                        console.log(circle + "==" + selectCircl);
                        if (circle == selectCircl) {
                        	//console.log("same circle");
                            circleId = jsonObj.circleId;
                            circle = jsonObj.circle;
                            brand = jsonObj.brand;
                            lob = jsonObj.subscriberType;
                            mobnumber = mobnumber;
                            //vodaCircleNameAnalytics = jsonObj.vodaCircleName;
                            if(mobilnoCookieAnltcs ==null || mobilnoCookieAnltcs == undefined || mobilnoCookieAnltcs =="" || mobilnoCookieAnltcs =="NA" ){
                            	//vodafoneMobileEncryptionConfirm(mobnumberanalytics,vodaCircleNameAnalytics,lob,brand,"No Error");
                            }
                            $(".confirm-btn").removeClass("disabled");                            
                            $(".confirm-btn").prop("disabled","");
                            $(".invalid-feedback").hide();
                            $('.mobile-input-group').removeClass('invalidBorder').addClass('validBorder');
                            $("#msisdn").val($("#mobile").val());
                            $("#segment").val(lob);
                            $("#circleId").val(circleId);
                            $("#circleNm").val(circle);                            
                            $("#amount").val($(".selectedCashbacktext .plan-amount").text());
                            $("#paymentFlow").val("recharge");
                            $('#deposit').val("");
                            
                            var prepaidconnectiondetailsvoda={};
                            var itemdatabuynowvoda = $(".selected-pack-wrapper .confirm-btn").attr("itemdata");
                   	   	 	var itemBuynowDataVoda=$.parseJSON(itemdatabuynowvoda);
                   	    	prepaidconnectiondetailsvoda["msisdn"]=$("#mobile").val();
                            prepaidconnectiondetailsvoda["brand"]=brand;
                            prepaidconnectiondetailsvoda["circle"]=circle;                            
                            prepaidconnectiondetailsvoda["UnitCost"]=itemBuynowDataVoda.UnitCost;
                            prepaidconnectiondetailsvoda["vodaCircleName"] = vodaCircleNameAnalytics;
                    		//prepaidconnectiondetailsvoda["ManufacturerName"]=itemBuynowDataVoda.ManufacturerName;
                            prepaidconnectiondetailsvoda["ManufacturerName"]="ETOPUP";
                    		prepaidconnectiondetailsvoda["ItemID"]=itemBuynowDataVoda.ItemID;
                    		prepaidconnectiondetailsvoda["PRODUCT-CATEGORY"]=itemBuynowDataVoda["PRODUCT-CATEGORY"];
                    		prepaidconnectiondetailsvoda["CircleCode"]=itemBuynowDataVoda.CircleCode;
                    		prepaidconnectiondetailsvoda["TALKTIME_LINE_1"]=encodeURIComponent(itemBuynowDataVoda.TALKTIME_LINE_1);
                    		prepaidconnectiondetailsvoda["VOICE_LINE_1"]=encodeURIComponent(itemBuynowDataVoda.VOICE_LINE_1);
                    		prepaidconnectiondetailsvoda["DATA_LINE_1"]=itemBuynowDataVoda.DATA_LINE_1;                            
                    		prepaidconnectiondetailsvoda["UCS_VALIDITY"]=itemBuynowDataVoda.UCS_VALIDITY;
                    		prepaidconnectiondetailsvoda["DESCRIPTION"]='';
                    		prepaidconnectiondetailsvoda["PROMOTION_TITLE"]=encodeURIComponent(itemBuynowDataVoda.PROMOTION_TITLE);
                    									
	                    	if($("#productDetailsInJsonFormat").val() != ""){
								var itemCouponData=$.parseJSON($("#productDetailsInJsonFormat").val());
	                    		prepaidconnectiondetailsvoda["couponId"]=itemBuynowDataVoda.couponID;
	                    		prepaidconnectiondetailsvoda["CopDis"]=itemBuynowDataVoda.couponDiscount;
	                    		prepaidconnectiondetailsvoda["ScratchedAmt"]=itemBuynowDataVoda.scratchedAmt;
	                    	}else{
                    			prepaidconnectiondetailsvoda["couponId"]="";
                        		prepaidconnectiondetailsvoda["CopDis"]="0";
                        		prepaidconnectiondetailsvoda["ScratchedAmt"]=itemBuynowDataVoda.UnitCost;
                    		}
	                    	
	                    	prepaidconnectiondetailsvoda["dataImgFirst"]=dataImgFirst;
	                    	prepaidconnectiondetailsvoda["dataSrcFirst"]=dataSrcFirst;
	                    	prepaidconnectiondetailsvoda["dataImgLast"]=dataImgLast;
	                    	prepaidconnectiondetailsvoda["dataSrcLast"]=dataSrcLast;
	                		
	                    	$("#connectionDetailsCookie").val(JSON.stringify(prepaidconnectiondetailsvoda));
	                    	setCookie();
                            $("#justpay").addClass("sendDataToPG");                            
                        } else {
                        	//vodafoneMobileEncryptionConfirm(mobnumberanalytics,vodaCircleNameAnalytics,lob,brand,"Error_Present");
                        	
                        	var itemdataforjson = "{}";
                        	var itemdataforjsonval = $(".confirm-btn").attr("itemdata");
                        	if(itemdataforjsonval != "" && typeof itemdataforjsonval !== "undefined" ){
                        		itemdataforjson = itemdataforjsonval;
                        	}
                        	
                            var itemdatajson = JSON.parse(itemdataforjson);
                            var price = itemdatajson.UnitCost;
                            $.ajax({
                                type: "Get",
                                url: "/content/dam/VIL/HARMONIZED/PREPAID/PACK/" + circle,
                                dataType: "json",
                                success: function(data) {
                                    var json_obj = data;
                                    $.each(json_obj.DATA, function(i, val) {
                                        var subcategorylist = val.subcategorylist;
                                        $.each(subcategorylist, function(j, itemData) {
                                            if (itemData.UnitCost == price) {
                                                countprice++;
                                            }
                                        })
                                    });

                                    if (countprice == 0) {
                                    	
                                    	if($('#mobile').val() != ""){
                                    		$('#selectCircl li').each(function(){
                                				if($(this).data('val') == circle ){

                                					$(".invalid-feedback").text("You have entered a number that belongs to "+$(this).find('p').text()+" circle.Please change circle or enter correct number.").show();
                                					$('.mobile-input-group').removeClass('validBorder').addClass('invalidBorder');
                                					$(".confirm-btn").addClass("disabled");
										            $(".confirm-btn").prop("disabled","disabled");
            										hideCouponDetails();
                                            		
                                				}
                                			});
                                    	}
                                    		
                                        /*$('.toasMessag').show();
                                        $(".toasMessag .desktop-heading").text(toastmessagearray[0]);
                                        setTimeout(function() {
                                            $('.toasMessag').hide();
                                            $('.edit a').click();
                                            $("#selectCircl").find("li").removeClass("circle-selected");
                                            $("#selectCircl").find("li[data-val='" + circle + "']").addClass("circle-selected");
                                            $('.card-header .circl-name').html($("#selectCircl").find("li[data-val='" + circle + "']").find("p").html());
                                            $('.selected-circle').html($("#selectCircl").find("li[data-val='" + circle + "']").find("p").html() + ".");

                                            changeCircle(circle);
                                        }, 3000);*/
                                    } else {
                                        //console.log("number present");
                                        circleId = jsonObj.circleId;
                                        circle = jsonObj.circle;
                                        brand = jsonObj.brand;
                                        lob = jsonObj.subscriberType;
                                        vodaCircleNameAnalytics = jsonObj.vodaCircleName;
                                        mobnumber = $("#mobile").val();
                                        $(".confirm-btn").removeClass("disabled");                                        
                                        $(".confirm-btn").prop("disabled","");
                                        $(".invalid-feedback").hide();
                                        $('.mobile-input-group').removeClass('invalidBorder').addClass('validBorder');
                                        $("#msisdn").val(mobnumber);
                                        $("#segment").val(lob);
                                        $("#circleId").val(circleId);
                                        $("#amount").val($(".selectedCashbacktext .plan-amount").text());
                                        $("#paymentFlow").val("recharge");
                                        
                                        var prepaidconnectiondetailsvoda={};
                                        var itemdatabuynowvoda = $(".selected-pack-wrapper .confirm-btn").attr("itemdata");
                               	   	 	var itemBuynowDataVoda=$.parseJSON(itemdatabuynowvoda);
                               	   	    prepaidconnectiondetailsvoda["msisdn"]=$("#mobile").val();
                                        prepaidconnectiondetailsvoda["brand"]=brand;
                                        prepaidconnectiondetailsvoda["circle"]=circle;                            
                                        prepaidconnectiondetailsvoda["UnitCost"]=itemBuynowDataVoda.UnitCost;
                                        prepaidconnectiondetailsvoda["vodaCircleName"] = vodaCircleNameAnalytics;
                                		//prepaidconnectiondetailsvoda["ManufacturerName"]=itemBuynowDataVoda.ManufacturerName;
                                        prepaidconnectiondetailsvoda["ManufacturerName"]="ETOPUP";
                                		prepaidconnectiondetailsvoda["ItemID"]=itemBuynowDataVoda.ItemID;
                                		prepaidconnectiondetailsvoda["PRODUCT-CATEGORY"]=itemBuynowDataVoda["PRODUCT-CATEGORY"];
                                		prepaidconnectiondetailsvoda["CircleCode"]=itplan-amountemBuynowDataVoda.CircleCode;
                                		prepaidconnectiondetailsvoda["TALKTIME_LINE_1"]=encodeURIComponent(itemBuynowDataVoda.TALKTIME_LINE_1);
                                		prepaidconnectiondetailsvoda["VOICE_LINE_1"]=encodeURIComponent(itemBuynowDataVoda.VOICE_LINE_1);
                                		prepaidconnectiondetailsvoda["DATA_LINE_1"]=itemBuynowDataVoda.DATA_LINE_1;
                                		prepaidconnectiondetailsvoda["UCS_VALIDITY"]=itemBuynowDataVoda.UCS_VALIDITY;
                                		prepaidconnectiondetailsvoda["DESCRIPTION"]='';
                                		prepaidconnectiondetailsvoda["PROMOTION_TITLE"]=encodeURIComponent(itemBuynowDataVoda.PROMOTION_TITLE);
                                									
            	                    	if($("#productDetailsInJsonFormat").val() != ""){
            								var itemCouponData=$.parseJSON($("#productDetailsInJsonFormat").val());
            	                    		prepaidconnectiondetailsvoda["couponId"]=itemBuynowDataVoda.couponID;
            	                    		prepaidconnectiondetailsvoda["CopDis"]=itemBuynowDataVoda.couponDiscount;
            	                    		prepaidconnectiondetailsvoda["ScratchedAmt"]=itemBuynowDataVoda.scratchedAmt;
            	                    	}else{
                                			prepaidconnectiondetailsvoda["couponId"]="";
                                    		prepaidconnectiondetailsvoda["CopDis"]="0";
                                    		prepaidconnectiondetailsvoda["ScratchedAmt"]=itemBuynowDataVoda.UnitCost;
                                		}
            	                    	
            	                    	prepaidconnectiondetailsvoda["dataImgFirst"]=dataImgFirst;
            	                    	prepaidconnectiondetailsvoda["dataSrcFirst"]=dataSrcFirst;
            	                    	prepaidconnectiondetailsvoda["dataImgLast"]=dataImgLast;
            	                    	prepaidconnectiondetailsvoda["dataSrcLast"]=dataSrcLast;
            	                		
            	                    	$("#connectionDetailsCookie").val(JSON.stringify(prepaidconnectiondetailsvoda));
                                        
                                        setCookie();
                                         $("#msisdncookie").val($('#mobile').val());
                                        $("#justpay").addClass("sendDataToPG");
                                    }
                                }
                            });
                        }
                         $("#msisdncookie").val($('#mobile').val());
                         $("#lobcookie").val(lob);
						 
                    } else if (lob == "PREPAID" && brand.toLowerCase() == "idea") {
                       	//console.log(circle + "==" + selectCircl);
                    	$('#mobile').addClass("correctscenario");
                        if (circle == selectCircl) {
                            var circle = jsonObj.circle;
                            var brand = jsonObj.brand;
                            var lob = jsonObj.subscriberType;
                            mobnumber = $("#mobile").val();
                        	//vodafoneMobileEncryptionConfirm(mobnumber,circle,lob,"Idea","No Error");
                            $(".confirm-btn").removeClass("disabled");                            
                            $(".confirm-btn").prop("disabled","");
                            $(".invalid-feedback").hide();
                            $('.mobile-input-group').removeClass('invalidBorder').addClass('validBorder');
                            var prepaidconnectiondetails={};
                            //Form submit for payment gateway
                            
                            var itemdatabuynow = $(".selected-pack-wrapper .confirm-btn").attr("itemdata");
                   	   	 	var itemBuynowData=$.parseJSON(itemdatabuynow);
                   	   	 
                            prepaidconnectiondetails["brand"]=brand;
                            prepaidconnectiondetails["circle"]=circle;                            
                            prepaidconnectiondetails["UnitCost"]=itemBuynowData.UnitCost;
                    		
                    		//prepaidconnectiondetails["ManufacturerName"]=itemBuynowData.ManufacturerName;
                            prepaidconnectiondetails["ManufacturerName"]="VTOPUP";
                    		prepaidconnectiondetails["ItemID"]=itemBuynowData.ItemID;
                    		prepaidconnectiondetails["PRODUCT-CATEGORY"]=itemBuynowData["PRODUCT-CATEGORY"];
                    		prepaidconnectiondetails["CircleCode"]=itemBuynowData.CircleCode;
                    		prepaidconnectiondetails["TALKTIME_LINE_1"]=itemBuynowData.TALKTIME_LINE_1;
                    		prepaidconnectiondetails["VOICE_LINE_1"]=itemBuynowData.VOICE_LINE_1;
                    		prepaidconnectiondetails["DATA_LINE_1"]=itemBuynowData.DATA_LINE_1;
                    		prepaidconnectiondetails["UCS_VALIDITY"]=itemBuynowData.UCS_VALIDITY;
                    		prepaidconnectiondetails["DESCRIPTION"]='';
                    		prepaidconnectiondetails["PROMOTION_TITLE"]=itemBuynowData.PROMOTION_TITLE;
                    		
							
	                    	if($("#productDetailsInJsonFormat").val() != ""){
								var itemCouponData=$.parseJSON($("#productDetailsInJsonFormat").val());
	                    		prepaidconnectiondetails["couponId"]=itemCouponData.couponID;
	                    		prepaidconnectiondetails["CopDis"]=itemCouponData.couponDiscount;
	                    		prepaidconnectiondetails["ScratchedAmt"]=itemCouponData.scratchedAmt;
	                    	}else{
                    			prepaidconnectiondetails["couponId"]="";
                        		prepaidconnectiondetails["CopDis"]="0";
                        		prepaidconnectiondetails["ScratchedAmt"]=itemBuynowData.UnitCost;
                    		}
	                    	
	                    	prepaidconnectiondetails["dataImgFirst"]=dataImgFirst;
	                		prepaidconnectiondetails["dataSrcFirst"]=dataSrcFirst;
	                		prepaidconnectiondetails["dataImgLast"]=dataImgLast;
	                		prepaidconnectiondetails["dataSrcLast"]=dataSrcLast;
                            
                            $("#mobileNumber").val(mobnumber);
                            if(prepaidconnectiondetails["ScratchedAmt"] != ""){
	                            $("#rechAmount").val(prepaidconnectiondetails["ScratchedAmt"]);
	                            $("#billpayAmount").val(prepaidconnectiondetails["ScratchedAmt"]);
                            }
                            else{
                            	$("#rechAmount").val($("#actualPackAmount").val());
 	                            $("#billpayAmount").val($("#actualPackAmount").val());                            	
                            }
                            $("#ideapaymentFlow").val("recharge");                            
                            $("#circle").val(circle);
                            $("#connectiondetails").val(JSON.stringify(prepaidconnectiondetails));
                            //$("#connectionDetailsCookie").val(JSON.stringify(prepaidconnectiondetails));
                            $("#cashbackdetails").val($("#couponDetailsInJsonFormat").val());                            
                            $("#subscriberType").val(lob);
                                                        
                            $("#ideapaymentgateway").addClass("sendDataToPG");
                            
                        } else {
                            var itemdatajson = JSON.parse($(".confirm-btn").attr("itemdata"));
                            var price = itemdatajson.UnitCost;

                            $.ajax({
                                type: "Get",
                                url: "/content/dam/VIL/HARMONIZED/PREPAID/PACK/" + circle,
                                dataType: "json",
                                success: function(data) {
                                    var json_obj = data;
                                    $.each(json_obj.DATA, function(i, val) {
                                        var subcategorylist = val.subcategorylist;
                                        $.each(subcategorylist, function(j, itemData) {
                                            if (itemData.UnitCost == price) {
                                                countprice++;
                                            }
                                        })
                                    });

                                    if (countprice == 0) {
                                    	
                                    	if($('#mobile').val() != ""){
                                    		$('#selectCircl li').each(function(){
                                				if($(this).data('val') == circle ){

                                					$(".invalid-feedback").text("You have entered a number that belongs to "+$(this).find('p').text()+" circle.Please change circle or enter correct number.").show();
                                					$('.mobile-input-group').removeClass('validBorder').addClass('invalidBorder');
                                					$(".confirm-btn").addClass("disabled");
										            $(".confirm-btn").prop("disabled","disabled");
            										hideCouponDetails();
                                				}
                                			});
                                    	}

                                    	
                                        /*$('.toasMessag').show();
                                        $(".toasMessag .desktop-heading").text(toastmessagearray[0]);
                                        setTimeout(function() {
                                            $('.toasMessag').hide();
                                            $('.edit a').click();
                                            $("#selectCircl").find("li").removeClass("circle-selected");
                                            $("#selectCircl").find("li[data-val='" + circle + "']").addClass("circle-selected");
                                            $('.card-header .circl-name').html($("#selectCircl").find("li[data-val='" + circle + "']").find("p").html());
                                            $('.selected-circle').html($("#selectCircl").find("li[data-val='" + circle + "']").find("p").html() + ".");

                                            changeCircle(circle);
                                        }, 3000);*/
                                    } else {
                                       //console.log("number present");
                                        circle = jsonObj.circle;
                                        brand = jsonObj.brand;
                                        lob = jsonObj.subscriberType;
                                        mobnumber = $("#mobile").val();
                                        $(".confirm-btn").removeClass("disabled");                                        
                                        $(".confirm-btn").prop("disabled","");
                                        $(".invalid-feedback").hide();
                                        $('.mobile-input-group').removeClass('invalidBorder').addClass('validBorder');
                                        $("#mobileNumber").val(mobnumber);
                                        $("#circle").val(circle);
                                        $("#subscriberType").val(lob);																				
                                        $("#paymentFlow").val("recharge");
                                        
                                        
                                        var prepaidconnectiondetails={};
                                        //Form submit for payment gateway
                                        
                                        var itemdatabuynow = $(".selected-pack-wrapper .confirm-btn").attr("itemdata");
                               	   	 	var itemBuynowData=$.parseJSON(itemdatabuynow);
                               	   	 
                                        prepaidconnectiondetails["brand"]=brand;
                                        prepaidconnectiondetails["circle"]=circle;                            
                                        prepaidconnectiondetails["UnitCost"]=itemBuynowData.UnitCost;
                                		
                                		//prepaidconnectiondetails["ManufacturerName"]=itemBuynowData.ManufacturerName;
                                        prepaidconnectiondetails["ManufacturerName"]="VTOPUP";
                                		prepaidconnectiondetails["ItemID"]=itemBuynowData.ItemID;
                                		prepaidconnectiondetails["PRODUCT-CATEGORY"]=itemBuynowData["PRODUCT-CATEGORY"];
                                		prepaidconnectiondetails["CircleCode"]=itemBuynowData.CircleCode;
                                		prepaidconnectiondetails["TALKTIME_LINE_1"]=itemBuynowData.TALKTIME_LINE_1;
                                		prepaidconnectiondetails["VOICE_LINE_1"]=itemBuynowData.VOICE_LINE_1;
                                		prepaidconnectiondetails["DATA_LINE_1"]=itemBuynowData.DATA_LINE_1;
                                		prepaidconnectiondetails["UCS_VALIDITY"]=itemBuynowData.UCS_VALIDITY;
                                		prepaidconnectiondetails["DESCRIPTION"]='';
                                		prepaidconnectiondetails["PROMOTION_TITLE"]=itemBuynowData.PROMOTION_TITLE;
                                		
            							
            	                    	if($("#productDetailsInJsonFormat").val() != ""){
            								var itemCouponData=$.parseJSON($("#productDetailsInJsonFormat").val());
            	                    		prepaidconnectiondetails["couponId"]=itemCouponData.couponID;
            	                    		prepaidconnectiondetails["CopDis"]=itemCouponData.couponDiscount;
            	                    		prepaidconnectiondetails["ScratchedAmt"]=itemCouponData.scratchedAmt;
            	                    	}else{
                                			prepaidconnectiondetails["couponId"]="";
                                    		prepaidconnectiondetails["CopDis"]="0";
                                    		prepaidconnectiondetails["ScratchedAmt"]=itemBuynowData.UnitCost;
                                		}
            	                    	
            	                    	prepaidconnectiondetails["dataImgFirst"]=dataImgFirst;
            	                		prepaidconnectiondetails["dataSrcFirst"]=dataSrcFirst;
            	                		prepaidconnectiondetails["dataImgLast"]=dataImgLast;
            	                		prepaidconnectiondetails["dataSrcLast"]=dataSrcLast;
                                        
                                        $("#mobileNumber").val(mobnumber);
                                        if(prepaidconnectiondetails["ScratchedAmt"] != ""){
            	                            $("#rechAmount").val(prepaidconnectiondetails["ScratchedAmt"]);
            	                            $("#billpayAmount").val(prepaidconnectiondetails["ScratchedAmt"]);
                                        }
                                        else{
                                        	$("#rechAmount").val($("#actualPackAmount").val());
             	                            $("#billpayAmount").val($("#actualPackAmount").val());                            	
                                        }
                                        $("#ideapaymentFlow").val("recharge");                                                                    
                                        $("#connectiondetails").val(JSON.stringify(prepaidconnectiondetails));
                                        //$("#connectionDetailsCookie").val(JSON.stringify(prepaidconnectiondetails));
                                        $("#cashbackdetails").val($("#couponDetailsInJsonFormat").val());                            
                                        $("#subscriberType").val(lob);
                                        
                                        $("#ideapaymentgateway").addClass("sendDataToPG");
                                    }
                                }
                            });
                        }
                        $("#msisdncookie").val($('#mobile').val());
							$("#lobcookie").val(lob);
                    } else if (lob == "POSTPAID") {
                        $(".invalid-feedback").show().html(validationMessage['mobileNumber']['prepaidnumber']);
                        $("#mobile").parent().addClass("invalidBorder");
                        $("#mobile").parent().removeClass("validBorder");
                        $('#mobile').removeClass('correctscenario');
                        $(".confirm-btn").addClass("disabled");
                        $(".confirm-btn").prop("disabled","disabled");
                        mobnumber = $('#mobile').val();
                        
                        
                        //alert("brand value is "+brand+"Vodafonecircle "+vodaCircleName+"mobnumber "+mobnumber+"LOB "+lob);
                       
                        /*if(brand=="Vodafone"){
                        	vodafoneMobileEncryptionConfirm(mobnumber,vodaCircleNameAnalytics,lob,brand,"No Error");
                          	}else{
                        	vodafoneMobileEncryptionConfirm(mobnumber,"NA",lob,"Non-Vodafone","No Error");
                        	}*/
                        
                    }
                } else if (jsonObj.STATUS == "FAILURE") {

                    $(".invalid-feedback").show().html(validationMessage['mobileNumber']['nonvodaideanumber']);
                    $(".confirm-btn").addClass("disabled");
                    $(".confirm-btn").prop("disabled","disabled");
                    $("#mobile").parent().addClass("invalidBorder");
                    $("#mobile").parent().removeClass("validBorder");
                    $('#mobile').removeClass('correctscenario');
                    
                    mobnumber = $('#mobile').val();
                    
                    //vodafoneMobileEncryptionConfirm(mobnumber,"NA","NA","Non-Vodafone","No Error");
                }
            },
			complete: function () { 
                $("#divLoading").removeClass('show'); 
                } 

        });
    }
$(".mobile-number-input .invalid-feedback a").on("click",function(event){
    alert("This is Vodafone Join");
        //categoryAnalytics=$(this).attr('data-packname');
        //utag.link({'Custom_Links' : analyticPageName+": "+categoryAnalytics});
        //utag.link({'Custom_Links' : analyticPageName+": Tab Click"});
    });
	
	$(window).on('load', function(){
			$('#selectCircl li').each(function(){
				if($(this).data('val') == $("#circleIdcookie").val() && $("#circleIdcookie").val()!= "" && $("#circleIdcookie").val()!= "NA"){
					$(this).addClass('circle-selected');
					$(this).siblings().removeClass('circle-selected');
					$('.circl-name').text($(this).find('p').text());
					$('.selected-circle').text($(this).find('p').text()+'.');
				}
			});
	});

	function changeCircle(circle){
		/*var nodejson = JSON.parse($("#nodejson").val());
		var tabs = nodejson.Tabs;
		$(tabs).each(function(index, itemData) {
			console.log(itemData["tabclass"]);
		});*/
		$(".packcontainer").find(".packs").remove();
		$(".packcontainer").find(".pack-category").show();
		$(".packsMaincat").show();
		$.ajax({
            type: "Get",
            url: "/content/dam/VIL/HARMONIZED/PREPAID/PACK/" + circle,
            dataType: "json",
			beforeSend: function() {
                $("#divLoading").addClass('show');    
            },
			success: function(data) {
				var json_obj = data;
				$(".pack-category").each(function() {
					var categoryuniquerItem= $(this);
					var categoryUnique = categoryuniquerItem.attr('id');
					//console.log("categoryUnique-"+categoryUnique);
					if(categoryUnique){
						var categoryval = categoryUnique.split("_")[0].replace(/:/g, ' ');;
						var subcategoryflagval = categoryUnique.split("_")[1];
						var subcategoryval = categoryUnique.split("_")[2].replace(/:/g, ' ');;
						$.each(json_obj.DATA, function(i, val) {
							var categoryname = val.category_name;
							if (categoryname === categoryval) {	
								//console.log("categoryval-"+categoryval);
								if(subcategoryflagval=="true" && subcategoryval!="" && val.hasSubsubcategory == "true" && val.subcategorylist.length>0){			
									//console.log("subcategories else-"+val.subcategorylist.length);
									$.each(val.subcategorylist, function(j, itemData) {
										//console.log("subcategories elseloop-"+j);
										if(itemData.category_name==subcategoryval && itemData.hasSubsubcategory=="false" && itemData.subcategorylist.length > 0){
											processItems(itemData.subcategorylist,categoryname,categoryuniquerItem);
										}
									});
								}else if(val.hasSubsubcategory == "false" && val.subcategorylist.length>0){
										processItems(val.subcategorylist,categoryname,categoryuniquerItem);	
								}
							}
						});
					}
					// hide category box if no packs -- start
					if($(this).find('div.packs').length<1){ 
						$(this).hide();
                        $('.nopacks').removeAttr('style');

					}
					else{
						
                        $('.nopacks').css("display","none");

					}
					// hide category box if no packs -- end
				});
				// hide tab if no pack -- start
				$(".packcontainer .tab-content .tab-pane").each(function() {
					if($(this).find('div.packs').length<1){
						$('#nav-tab a.packsMaincat[href="#' + $(this).attr('id') + '"]').hide();						
					}
				});
				var tabhref = $('.packsMaincat:visible:first').attr("href");
				$('#nav-tab a.packsMaincat[href="' + tabhref + '"]').tab('show');
				// hide tab if no pack -- end
			},
			complete: function () { 
				$("#divLoading").removeClass('show'); 
			}
		});
	}
	
	function processItems(itemsubcategorylist,categoryname,categoryuniquerItem){
		var categorypackcount=0;
		//console.log("itemsubcategorylist-"+itemsubcategorylist.length);
		$.each(itemsubcategorylist, function(j, itemData) {
			var $inputClone = $("#modelpack").children().clone();
			$inputClone.find('.plan-amount').html(itemData.UnitCost);
			if (itemData.PROMOTION_TITLE != "null" && itemData.PROMOTION_TITLE != "" && itemData.PROMOTION_TITLE != null) {
				$inputClone.find('.plan-coupon').html(itemData.PROMOTION_TITLE);

			} else {
				$inputClone.find('.plan-coupon').html(itemData.PROMOTION_TITLE);
				$inputClone.find(".coupon-star").hide();
			}
			//Changing this code to get sync with ORC flow
			if(categoryname === 'Talktime')
			{
				//console.log("Talktime");
				 if (itemData.TALKTIME_LINE_1 != "" && itemData.TALKTIME_LINE_1 != "null" && itemData.TALKTIME_LINE_1 != null) {
					$inputClone.find('.talktime').html(itemData.TALKTIME_LINE_1);
				} 
				else if (itemData.VOICE_LINE_1 != "" && itemData.VOICE_LINE_1 != "null" && itemData.VOICE_LINE_1 != null) {
					$inputClone.find('.talktime').html(itemData.VOICE_LINE_1);
				}
				else {
					$inputClone.find('.talktime').parent().hide();
				   // $inputClone.find('.talktime').parent().next().addClass("removeLeftBorder");
				}	                                                                    	
			}else {
				if (itemData.VOICE_LINE_1 != "" && itemData.VOICE_LINE_1 != "null" && itemData.VOICE_LINE_1 != null) {
					$inputClone.find('.talktime').html(itemData.VOICE_LINE_1);
				} 
				else if (itemData.TALKTIME_LINE_1 != "" && itemData.TALKTIME_LINE_1 != "null" && itemData.TALKTIME_LINE_1 != null) {
					$inputClone.find('.talktime').html(itemData.TALKTIME_LINE_1);
				}
				else {
					$inputClone.find('.talktime').parent().hide();
					//$inputClone.find('.talktime').parent().next().addClass("removeLeftBorder");
				}
			}
			if (itemData.DATA_LINE_1 != "" && itemData.DATA_LINE_1 != "null" && itemData.DATA_LINE_1 != null) {
				$inputClone.find('.data').html(itemData.DATA_LINE_1);
				if(categoryname === 'Internet'){
					 if ($(window).width() <= 576) {
					  $inputClone.find('.data').parent().css("border-left", "0");
					  $inputClone.find('.data').parent().css("padding-left", "0");
					}
				 }
				 if ($(window).width() <= 576) {
					  $inputClone.find('.data').parent().css("border-left", "0");
					  $inputClone.find('.data').parent().css("padding-left", "0");
					}
				 
			} else {
				$inputClone.find('.data').parent().hide();
				if (itemData.TALKTIME_LINE_1 == "" || itemData.TALKTIME_LINE_1 == "null" || itemData.TALKTIME_LINE_1 == null) {
				   // $inputClone.find('.data').parent().next().addClass("removeLeftBorder");
				}
			}
			if (itemData.UCS_VALIDITY != "" && itemData.UCS_VALIDITY != "null" && itemData.UCS_VALIDITY != null) {
				$inputClone.find('.validity').html(itemData.UCS_VALIDITY);
				console.log("check data line val" + itemData.DATA_LINE_1);
				if ($(window).width() <= 576 && itemData.DATA_LINE_1 === undefined) {
					  $inputClone.find('.validity').parent().css("border-left", "0");
					  $inputClone.find('.validity').parent().css("padding-left", "0");
					}
					
			} else {
				$inputClone.find('.validity').parent().hide();
			}
			
			if (itemData.SMS_LINE_1 != "" && itemData.SMS_LINE_1 != "null" && itemData.SMS_LINE_1 != null && categoryname=="SMS") {
				$inputClone.find('.SMS').html(itemData.SMS_LINE_1);
				if(categoryname === 'SMS'){
					 if ($(window).width() <= 576) {
					  $inputClone.find('.SMS').parent().css("border-left", "0");
					  $inputClone.find('.SMS').parent().css("padding-left", "0");
					}
				 }
			} else {
				$inputClone.find('.SMS').parent().hide();
			}
			/*Non Telco start*/
			$inputClone.find('.non-teleco-feature').empty();
			if (categoryname != "") {
				var counterCheck = 0;
				for (var i = 1; i <= 10; i++) {
					var test = "BENEFITS_" + i;
					var benefits = itemData[test];
					if (benefits) {
						var benefitslower = test.toLowerCase();
						var jsonNonTelcotemp = jsonNonTelco[benefitslower];
						if (jsonNonTelcotemp.valuexist && counterCheck < 2) {
							var colCloneofNonTelco = $('#nontelcomodel').children().clone();
							var iconsrc = jsonNonTelcotemp.icon;
							var title = jsonNonTelcotemp.title;
							var description = jsonNonTelcotemp.description;
							var freetext = jsonNonTelcotemp.freetext;
							var freemrp = jsonNonTelcotemp.freemrp;
							colCloneofNonTelco.find(".nontelcoimg").attr("src", iconsrc);
							colCloneofNonTelco.find(".nontelcoimg").attr("alt", title);
							colCloneofNonTelco.find(".non-teleco-benefith4").text(title);
							colCloneofNonTelco.find(".nontelcodesc").val(description);
							colCloneofNonTelco.find(".nontelcofreetext").val(freetext);
							colCloneofNonTelco.find(".nontelcofreemrp").val(freemrp);
							$inputClone.find('.non-teleco-feature').append(colCloneofNonTelco);
							counterCheck = counterCheck + 1;
						} else {
							//console.log("NotAuthored");
						}
					}
				}
			} else {
				$inputClone.find('.validity').parent().addClass("removeRightBorder");
			}
			/*Non Telco end*/

			$inputClone.find('.knowmore').attr("data-itemdata", JSON.stringify(itemData));
			categoryuniquerItem.append($inputClone);
			categorypackcount=categorypackcount+1;
		});
		//console.log("categorypackcount-"+categoryuniquerItem.attr('id')+"-"+categorypackcount);
	}

});
//for Analytics - join vodafone click in error message 
$(document).on("click",".invalid-feedback a",function(){
    var analyticsbtnclick =  $(this).text();
    utag.link({'Custom_Links': analyticPageName+': PREPAID CONNECTION: Join vodafone',
			  'Internal_Journey' : analyticPageName+': PREPAID CONNECTION: Join vodafone'
	});
});

//for Analytics - Go back click Packs
$(document).on("click",".goBackEdit",function(){
    var analyticsbtnclick =  $(this).text();
	utag.link({'Custom_Links':analyticPageName+': Selected Pack - '+analyticsbtnclick});
});
