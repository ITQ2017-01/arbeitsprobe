sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast",
    "sap/m/MessageBox"
], function (UIComponent, JSONModel, MessageToast, MessageBox) {
	"use strict";

	return UIComponent.extend("hts.it.fiae.itq.Component", {

		metadata : {
			manifest: "json"
		},

		init : function () {
			UIComponent.prototype.init.apply(this, arguments);

            var oData = {
				recipient : {
					name : "World"
				}
			};
			var oModel = new JSONModel(oData);
			this.setModel(oModel);
        },
        showHello: function() {
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/recipient/name");
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);
			MessageToast.show(sMsg);
        }

	});

});