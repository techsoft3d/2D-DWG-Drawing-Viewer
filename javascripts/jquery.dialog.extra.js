/**
 * jQuery UI dialog extra v0.7
 * 
 * Copyright 2011, Mark Prisyazhnyuk (nixmrak)
 * Licensed under GPL Version 2 licenses.
 * 
 * 
 * Usage:
 *     $.dialog({canMaximize:true, canMinimize:true})
 * 
 * Idea based on: Extension of JQuery UI Dialog widget to add custom minimizing capabilities (by Ryan Curtis)
 * 
 */
(function($){
    var def_options = {
		'canMaximize' : false,
		'canMinimize' : false
	}
    $.extend($.ui.dialog.prototype.options, def_options)
    var _init = $.ui.dialog.prototype._init;
    
    //Optional top margin for page, wont let a user move a dialog into this spot.
    var topMargin = 0;
    
    //Custom Dialog Init
    $.ui.dialog.prototype._init = function() {
        var self = this;
        _init.apply(this, arguments);
        uiDialogTitlebar = this.uiDialogTitlebar;
        
        
        //we need two variables to preserve the original width and height so that can be restored.
        //this.options.originalWidth = this.options.width;
        //this.options.originalHeight = this.options.height;
        this._savePosition()
        
        //save a reference to the resizable handle so we can hide it when necessary.
        if (this.options.resizable)
            this.resizeableHandle =  this.uiDialog.resizable().find('.ui-resizable-se');
        
        //Save the height of the titlebar for the minimize operation
        this.titlebarHeight = parseInt(uiDialogTitlebar.css('height')) + parseInt(uiDialogTitlebar.css('padding-top')) + parseInt(uiDialogTitlebar.css('padding-bottom')) + parseInt(this.uiDialog.css('padding-top')) + parseInt(this.uiDialog.css('padding-bottom')) ;
        

//--------------------------------------------------------------------------------------------------------------

        var uiDialogTitlebarMinimize = self.uiDialogTitlebarMinimize = $('<a href="#"></a>')
			.addClass(
				'dialog-minimize ui-dialog-titlebar-min ' +
				'ui-corner-all'
			)
			.attr('role', 'button')
			.hover(
				function() {
				},
				function() {
				}
			)
			.focus(function() {
				uiDialogTitlebarMinimize.addClass('ui-state-focus');
			})
			.blur(function() {
				uiDialogTitlebarMinimize.removeClass('ui-state-focus');
			})
			.click(function(event) {
				self.minimize();
				return false;
			})
			.css({
				position: 'absolute',
				right: 9,
				marginTop: -10,
				top: '50%'
			})
			
			
		if(self.options.canMinimize) {
			uiDialogTitlebarMinimize.appendTo(uiDialogTitlebar)
		}

       var uiDialogTitlebarMinimizeText = (self.uiDialogTitlebarMinimizeText = $('<span></span>'))
			.addClass(
				'ui-icon ' +
				'ui-icon-minusthick'
			)
			.text('minimize')
			.appendTo(uiDialogTitlebarMinimize)
     


//--------------------------------------------------------------------------------------------------------------

         
        var uiDialogTitlebarRest = self.uiDialogTitlebarRest = $('<a href="#"></a>')
			.addClass(
				'dialog-restore ui-dialog-titlebar-rest ui-corner-all'
			)
			.attr('role', 'button')
			.hover(
				function() {
					uiDialogTitlebarRest.addClass('ui-state-hover');
				},
				function() {
					uiDialogTitlebarRest.removeClass('ui-state-hover');
				}
			)
			.focus(function() {
				uiDialogTitlebarRest.addClass('ui-state-focus');
			})
			.blur(function() {
				uiDialogTitlebarRest.removeClass('ui-state-focus');
			})
			.click(function(event) {
				self.restore();
				return false;
			})
			.css({
				position: 'absolute',
				right: 9,
				marginTop: -10,
				top: '50%'
			})
			.appendTo(uiDialogTitlebar)
			.hide()

        var uiDialogTitlebarRestText = (self.uiDialogTitlebarRestText = $('<span></span>'))
			.addClass('ui-icon ui-icon-newwin')
			.text('minimize')
			.appendTo(uiDialogTitlebarRest)
        
        //restore the minimize button on close
        this.uiDialog.bind('dialogbeforeclose', function(event, ui) {
            self.uiDialogTitlebarRest.hide();
            self.uiDialogTitlebarMinimize.show();
        });
//--------------------------------------------------------------------------------------------------------------

         
        var uiDialogTitlebarMaximize = self.uiDialogTitlebarMaximize = $('<a href="#"></a>')
			.addClass(
				'dialog-maximize ui-dialog-titlebar-max ui-corner-all'
			)
			.attr('role', 'button')
			.hover(
				function() {
					uiDialogTitlebarMaximize.addClass('ui-state-hover');
				},
				function() {
					uiDialogTitlebarMaximize.removeClass('ui-state-hover');
				}
			)
			.focus(function() {
				uiDialogTitlebarMaximize.addClass('ui-state-focus');
			})
			.blur(function() {
				uiDialogTitlebarMaximize.removeClass('ui-state-focus');
			})
			.click(function(event) {
				self.maximize();
				return false;
			})
			.css({
				position: 'absolute',
				right: 45,
				marginTop: -10,
				top: '50%'
			})

		if(self.options.canMaximize) {
			uiDialogTitlebarMaximize.appendTo(uiDialogTitlebar)
			if(!self.options.canMinimize) {
				uiDialogTitlebarMaximize.css({right:24})
			}
		}

        var uiDialogTitlebarMaximizeText = (self.uiDialogTitlebarMaximizeText = $('<span></span>'))
			.addClass('ui-icon ui-icon-arrow-4-diag')
			.text('maximize')
			.appendTo(uiDialogTitlebarMaximize)
        
        //restore the minimize button on close
        this.uiDialog.bind('dialogbeforeclose', function(event, ui) {
            self.uiDialogTitlebarRest.hide();
            self.uiDialogTitlebarMinimize.show();
            self.uiDialogTitlebarMaximize.show();
        });

//--------------------------------------------------------------------------------------------------------------

        
    };
    //Custom Dialog Functions
    $.extend($.ui.dialog.prototype, {
        _savePosition: function() {
            this.options.originalWidth = this.options.width
            this.options.originalHeight = this.options.height
            this.options.originalLeft = this.uiDialog.offset().left
            this.options.originalTop = this.uiDialog.offset().top
		},
        _restorePosition: function() {
			this.uiDialog.css({
				left:this.options.originalLeft,
				top:this.options.originalTop
			})
		},
        _restoreSize: function() {
			this.uiDialog.css({
				height:this.options.originalHeight,
				width:this.options.originalWidth
			})
		},
		_maximizedResizeHandler: function(event) {
			var newHeight = $(window).height()-11;
            var newWidth = $(window).width()-11;
            event.data.dialogObject.uiDialog.css({top:1, left: 1, width:newWidth, height:newHeight})
		},
        
        restore: function() {
            var self = this
            self._makeResizable()
            self._makeDraggable()
            self.uiDialog.draggable('_generatePosition')
            
            $(window).unbind('resize',self._maximizedResizeHandler)

			if(this.options.currentState=='maximized') {
				this._restorePosition()
			}
			this._restoreSize()

            this.element.show();
            
            this.resizeableHandle.show();
            this.uiDialogTitlebarRest.hide();
            this.uiDialogTitlebarMinimize.show();
            this.uiDialogTitlebarMaximize.show();
            this.options.currentState = 'normal'
        },
        minimize: function() { 
            var self = this
            //Store the original height/width
            this.uiDialog.resizable( 'destroy' )
            this._savePosition()
            
            this.uiDialog.animate({width: 200, height:this.titlebarHeight},200);
            this.element.hide();
            
            this.uiDialogTitlebarMaximize.show();
            this.uiDialogTitlebarMinimize.hide();
            this.uiDialogTitlebarRest.show();
            this.resizeableHandle.hide();
            this.uiDialogTitlebarRest.css('opacity', 0.0);
            this.uiDialogTitlebarMaximize.css('opacity', '0.0');

            this.options.currentState = 'minimized'
        },
        maximize: function() { 
            //Store the original height/width
            var self = this
            if(this.options.currentState != 'minimized') {
				this.uiDialog.resizable( 'destroy' )
			}
            this.uiDialog.draggable( 'destroy' )
            this._savePosition()
            
            var newHeight = $(window).height()-11;
            var newWidth = $(window).width()-11;
			self.uiDialog.animate({top:1, left: 1, width:newWidth, height:newHeight},200)            
            $(window).bind('resize', {dialogObject:self}, self._maximizedResizeHandler)
            
            self.element.show();
			self.element.css({width:'auto', height:'auto'})
            
            this.uiDialogTitlebarMaximize.hide();
            this.uiDialogTitlebarMinimize.hide();
            this.uiDialogTitlebarRest.show();
            this.resizeableHandle.hide();
            this.options.currentState = 'maximized'
        }
    });
})(jQuery); 
