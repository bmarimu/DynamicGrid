var sample_GridStack =
webpackJsonpsample_GridStack([0],{

/***/ "3PBz":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Support for jQuery core 1.7.x 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 */

//>>label: jQuery 1.7 Support
//>>group: Core
//>>description: Support version 1.7.x of jQuery core

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__("7t+N"), __webpack_require__("UZ9c") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
}( function( $ ) {

// Support: jQuery 1.7 only
// Not a great way to check versions, but since we only support 1.7+ and only
// need to detect <1.8, this is a simple check that should suffice. Checking
// for "1.7." would be a bit safer, but the version string is 1.7, not 1.7.0
// and we'll never reach 1.70.0 (if we do, we certainly won't be supporting
// 1.7 anymore). See #11197 for why we're not using feature detection.
if ( $.fn.jquery.substring( 0, 3 ) === "1.7" ) {

	// Setters for .innerWidth(), .innerHeight(), .outerWidth(), .outerHeight()
	// Unlike jQuery Core 1.8+, these only support numeric values to set the
	// dimensions in pixels
	$.each( [ "Width", "Height" ], function( i, name ) {
		var side = name === "Width" ? [ "Left", "Right" ] : [ "Top", "Bottom" ],
			type = name.toLowerCase(),
			orig = {
				innerWidth: $.fn.innerWidth,
				innerHeight: $.fn.innerHeight,
				outerWidth: $.fn.outerWidth,
				outerHeight: $.fn.outerHeight
			};

		function reduce( elem, size, border, margin ) {
			$.each( side, function() {
				size -= parseFloat( $.css( elem, "padding" + this ) ) || 0;
				if ( border ) {
					size -= parseFloat( $.css( elem, "border" + this + "Width" ) ) || 0;
				}
				if ( margin ) {
					size -= parseFloat( $.css( elem, "margin" + this ) ) || 0;
				}
			} );
			return size;
		}

		$.fn[ "inner" + name ] = function( size ) {
			if ( size === undefined ) {
				return orig[ "inner" + name ].call( this );
			}

			return this.each( function() {
				$( this ).css( type, reduce( this, size ) + "px" );
			} );
		};

		$.fn[ "outer" + name ] = function( size, margin ) {
			if ( typeof size !== "number" ) {
				return orig[ "outer" + name ].call( this, size );
			}

			return this.each( function() {
				$( this ).css( type, reduce( this, size, true, margin ) + "px" );
			} );
		};
	} );

	$.fn.addBack = function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	};
}

} ) );


/***/ }),

/***/ "3eNs":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI :data 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: :data Selector
//>>group: Core
//>>description: Selects elements which have data stored under the specified key.
//>>docs: http://api.jqueryui.com/data-selector/

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__("7t+N"), __webpack_require__("UZ9c") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {
return $.extend( $.expr[ ":" ], {
	data: $.expr.createPseudo ?
		$.expr.createPseudo( function( dataName ) {
			return function( elem ) {
				return !!$.data( elem, dataName );
			};
		} ) :

		// Support: jQuery <1.8
		function( elem, i, match ) {
			return !!$.data( elem, match[ 3 ] );
		}
} );
} ) );


/***/ }),

/***/ "6sO2":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("Iu1L"), __webpack_require__("Yruw"), __webpack_require__("XSNM")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, ComponentRegistration_1, MyWorkspace_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MyWorkSpaceScript = MyWorkspace_1.MyWorkSpaceScript;
    var Main = /** @class */ (function () {
        function Main() {
            ComponentRegistration_1.ComponentRegistration.registerComponents();
        }
        return Main;
    }());
    exports.Main = Main;
    var m = new Main();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "9V2q":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Mouse 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Mouse
//>>group: Widgets
//>>description: Abstracts mouse-based interactions to assist in creating certain widgets.
//>>docs: http://api.jqueryui.com/mouse/

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
			__webpack_require__("7t+N"),
			__webpack_require__("zkIY"),
			__webpack_require__("UZ9c"),
			__webpack_require__("z1kw")
		], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
}( function( $ ) {

var mouseHandled = false;
$( document ).on( "mouseup", function() {
	mouseHandled = false;
} );

return $.widget( "ui.mouse", {
	version: "1.12.1",
	options: {
		cancel: "input, textarea, button, select, option",
		distance: 1,
		delay: 0
	},
	_mouseInit: function() {
		var that = this;

		this.element
			.on( "mousedown." + this.widgetName, function( event ) {
				return that._mouseDown( event );
			} )
			.on( "click." + this.widgetName, function( event ) {
				if ( true === $.data( event.target, that.widgetName + ".preventClickEvent" ) ) {
					$.removeData( event.target, that.widgetName + ".preventClickEvent" );
					event.stopImmediatePropagation();
					return false;
				}
			} );

		this.started = false;
	},

	// TODO: make sure destroying one instance of mouse doesn't mess with
	// other instances of mouse
	_mouseDestroy: function() {
		this.element.off( "." + this.widgetName );
		if ( this._mouseMoveDelegate ) {
			this.document
				.off( "mousemove." + this.widgetName, this._mouseMoveDelegate )
				.off( "mouseup." + this.widgetName, this._mouseUpDelegate );
		}
	},

	_mouseDown: function( event ) {

		// don't let more than one widget handle mouseStart
		if ( mouseHandled ) {
			return;
		}

		this._mouseMoved = false;

		// We may have missed mouseup (out of window)
		( this._mouseStarted && this._mouseUp( event ) );

		this._mouseDownEvent = event;

		var that = this,
			btnIsLeft = ( event.which === 1 ),

			// event.target.nodeName works around a bug in IE 8 with
			// disabled inputs (#7620)
			elIsCancel = ( typeof this.options.cancel === "string" && event.target.nodeName ?
				$( event.target ).closest( this.options.cancel ).length : false );
		if ( !btnIsLeft || elIsCancel || !this._mouseCapture( event ) ) {
			return true;
		}

		this.mouseDelayMet = !this.options.delay;
		if ( !this.mouseDelayMet ) {
			this._mouseDelayTimer = setTimeout( function() {
				that.mouseDelayMet = true;
			}, this.options.delay );
		}

		if ( this._mouseDistanceMet( event ) && this._mouseDelayMet( event ) ) {
			this._mouseStarted = ( this._mouseStart( event ) !== false );
			if ( !this._mouseStarted ) {
				event.preventDefault();
				return true;
			}
		}

		// Click event may never have fired (Gecko & Opera)
		if ( true === $.data( event.target, this.widgetName + ".preventClickEvent" ) ) {
			$.removeData( event.target, this.widgetName + ".preventClickEvent" );
		}

		// These delegates are required to keep context
		this._mouseMoveDelegate = function( event ) {
			return that._mouseMove( event );
		};
		this._mouseUpDelegate = function( event ) {
			return that._mouseUp( event );
		};

		this.document
			.on( "mousemove." + this.widgetName, this._mouseMoveDelegate )
			.on( "mouseup." + this.widgetName, this._mouseUpDelegate );

		event.preventDefault();

		mouseHandled = true;
		return true;
	},

	_mouseMove: function( event ) {

		// Only check for mouseups outside the document if you've moved inside the document
		// at least once. This prevents the firing of mouseup in the case of IE<9, which will
		// fire a mousemove event if content is placed under the cursor. See #7778
		// Support: IE <9
		if ( this._mouseMoved ) {

			// IE mouseup check - mouseup happened when mouse was out of window
			if ( $.ui.ie && ( !document.documentMode || document.documentMode < 9 ) &&
					!event.button ) {
				return this._mouseUp( event );

			// Iframe mouseup check - mouseup occurred in another document
			} else if ( !event.which ) {

				// Support: Safari <=8 - 9
				// Safari sets which to 0 if you press any of the following keys
				// during a drag (#14461)
				if ( event.originalEvent.altKey || event.originalEvent.ctrlKey ||
						event.originalEvent.metaKey || event.originalEvent.shiftKey ) {
					this.ignoreMissingWhich = true;
				} else if ( !this.ignoreMissingWhich ) {
					return this._mouseUp( event );
				}
			}
		}

		if ( event.which || event.button ) {
			this._mouseMoved = true;
		}

		if ( this._mouseStarted ) {
			this._mouseDrag( event );
			return event.preventDefault();
		}

		if ( this._mouseDistanceMet( event ) && this._mouseDelayMet( event ) ) {
			this._mouseStarted =
				( this._mouseStart( this._mouseDownEvent, event ) !== false );
			( this._mouseStarted ? this._mouseDrag( event ) : this._mouseUp( event ) );
		}

		return !this._mouseStarted;
	},

	_mouseUp: function( event ) {
		this.document
			.off( "mousemove." + this.widgetName, this._mouseMoveDelegate )
			.off( "mouseup." + this.widgetName, this._mouseUpDelegate );

		if ( this._mouseStarted ) {
			this._mouseStarted = false;

			if ( event.target === this._mouseDownEvent.target ) {
				$.data( event.target, this.widgetName + ".preventClickEvent", true );
			}

			this._mouseStop( event );
		}

		if ( this._mouseDelayTimer ) {
			clearTimeout( this._mouseDelayTimer );
			delete this._mouseDelayTimer;
		}

		this.ignoreMissingWhich = false;
		mouseHandled = false;
		event.preventDefault();
	},

	_mouseDistanceMet: function( event ) {
		return ( Math.max(
				Math.abs( this._mouseDownEvent.pageX - event.pageX ),
				Math.abs( this._mouseDownEvent.pageY - event.pageY )
			) >= this.options.distance
		);
	},

	_mouseDelayMet: function( /* event */ ) {
		return this.mouseDelayMet;
	},

	// These are placeholder methods, to be overriden by extending plugin
	_mouseStart: function( /* event */ ) {},
	_mouseDrag: function( /* event */ ) {},
	_mouseStop: function( /* event */ ) {},
	_mouseCapture: function( /* event */ ) { return true; }
} );

} ) );


/***/ }),

/***/ "DYUE":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Unique ID 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: uniqueId
//>>group: Core
//>>description: Functions to generate and remove uniqueId's
//>>docs: http://api.jqueryui.com/uniqueId/

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__("7t+N"), __webpack_require__("UZ9c") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {

return $.fn.extend( {
	uniqueId: ( function() {
		var uuid = 0;

		return function() {
			return this.each( function() {
				if ( !this.id ) {
					this.id = "ui-id-" + ( ++uuid );
				}
			} );
		};
	} )(),

	removeUniqueId: function() {
		return this.each( function() {
			if ( /^ui-id-\d+$/.test( this.id ) ) {
				$( this ).removeAttr( "id" );
			}
		} );
	}
} );

} ) );


/***/ }),

/***/ "F8S1":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Draggable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Draggable
//>>group: Interactions
//>>description: Enables dragging functionality for any element.
//>>docs: http://api.jqueryui.com/draggable/
//>>demos: http://jqueryui.com/draggable/
//>>css.structure: ../../themes/base/draggable.css

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
			__webpack_require__("7t+N"),
			__webpack_require__("9V2q"),
			__webpack_require__("3eNs"),
			__webpack_require__("zUl4"),
			__webpack_require__("Nnp9"),
			__webpack_require__("ne1m"),
			__webpack_require__("Rl6D"),
			__webpack_require__("UZ9c"),
			__webpack_require__("z1kw")
		], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
}( function( $ ) {

$.widget( "ui.draggable", $.ui.mouse, {
	version: "1.12.1",
	widgetEventPrefix: "drag",
	options: {
		addClasses: true,
		appendTo: "parent",
		axis: false,
		connectToSortable: false,
		containment: false,
		cursor: "auto",
		cursorAt: false,
		grid: false,
		handle: false,
		helper: "original",
		iframeFix: false,
		opacity: false,
		refreshPositions: false,
		revert: false,
		revertDuration: 500,
		scope: "default",
		scroll: true,
		scrollSensitivity: 20,
		scrollSpeed: 20,
		snap: false,
		snapMode: "both",
		snapTolerance: 20,
		stack: false,
		zIndex: false,

		// Callbacks
		drag: null,
		start: null,
		stop: null
	},
	_create: function() {

		if ( this.options.helper === "original" ) {
			this._setPositionRelative();
		}
		if ( this.options.addClasses ) {
			this._addClass( "ui-draggable" );
		}
		this._setHandleClassName();

		this._mouseInit();
	},

	_setOption: function( key, value ) {
		this._super( key, value );
		if ( key === "handle" ) {
			this._removeHandleClassName();
			this._setHandleClassName();
		}
	},

	_destroy: function() {
		if ( ( this.helper || this.element ).is( ".ui-draggable-dragging" ) ) {
			this.destroyOnClear = true;
			return;
		}
		this._removeHandleClassName();
		this._mouseDestroy();
	},

	_mouseCapture: function( event ) {
		var o = this.options;

		// Among others, prevent a drag on a resizable-handle
		if ( this.helper || o.disabled ||
				$( event.target ).closest( ".ui-resizable-handle" ).length > 0 ) {
			return false;
		}

		//Quit if we're not on a valid handle
		this.handle = this._getHandle( event );
		if ( !this.handle ) {
			return false;
		}

		this._blurActiveElement( event );

		this._blockFrames( o.iframeFix === true ? "iframe" : o.iframeFix );

		return true;

	},

	_blockFrames: function( selector ) {
		this.iframeBlocks = this.document.find( selector ).map( function() {
			var iframe = $( this );

			return $( "<div>" )
				.css( "position", "absolute" )
				.appendTo( iframe.parent() )
				.outerWidth( iframe.outerWidth() )
				.outerHeight( iframe.outerHeight() )
				.offset( iframe.offset() )[ 0 ];
		} );
	},

	_unblockFrames: function() {
		if ( this.iframeBlocks ) {
			this.iframeBlocks.remove();
			delete this.iframeBlocks;
		}
	},

	_blurActiveElement: function( event ) {
		var activeElement = $.ui.safeActiveElement( this.document[ 0 ] ),
			target = $( event.target );

		// Don't blur if the event occurred on an element that is within
		// the currently focused element
		// See #10527, #12472
		if ( target.closest( activeElement ).length ) {
			return;
		}

		// Blur any element that currently has focus, see #4261
		$.ui.safeBlur( activeElement );
	},

	_mouseStart: function( event ) {

		var o = this.options;

		//Create and append the visible helper
		this.helper = this._createHelper( event );

		this._addClass( this.helper, "ui-draggable-dragging" );

		//Cache the helper size
		this._cacheHelperProportions();

		//If ddmanager is used for droppables, set the global draggable
		if ( $.ui.ddmanager ) {
			$.ui.ddmanager.current = this;
		}

		/*
		 * - Position generation -
		 * This block generates everything position related - it's the core of draggables.
		 */

		//Cache the margins of the original element
		this._cacheMargins();

		//Store the helper's css position
		this.cssPosition = this.helper.css( "position" );
		this.scrollParent = this.helper.scrollParent( true );
		this.offsetParent = this.helper.offsetParent();
		this.hasFixedAncestor = this.helper.parents().filter( function() {
				return $( this ).css( "position" ) === "fixed";
			} ).length > 0;

		//The element's absolute position on the page minus margins
		this.positionAbs = this.element.offset();
		this._refreshOffsets( event );

		//Generate the original position
		this.originalPosition = this.position = this._generatePosition( event, false );
		this.originalPageX = event.pageX;
		this.originalPageY = event.pageY;

		//Adjust the mouse offset relative to the helper if "cursorAt" is supplied
		( o.cursorAt && this._adjustOffsetFromHelper( o.cursorAt ) );

		//Set a containment if given in the options
		this._setContainment();

		//Trigger event + callbacks
		if ( this._trigger( "start", event ) === false ) {
			this._clear();
			return false;
		}

		//Recache the helper size
		this._cacheHelperProportions();

		//Prepare the droppable offsets
		if ( $.ui.ddmanager && !o.dropBehaviour ) {
			$.ui.ddmanager.prepareOffsets( this, event );
		}

		// Execute the drag once - this causes the helper not to be visible before getting its
		// correct position
		this._mouseDrag( event, true );

		// If the ddmanager is used for droppables, inform the manager that dragging has started
		// (see #5003)
		if ( $.ui.ddmanager ) {
			$.ui.ddmanager.dragStart( this, event );
		}

		return true;
	},

	_refreshOffsets: function( event ) {
		this.offset = {
			top: this.positionAbs.top - this.margins.top,
			left: this.positionAbs.left - this.margins.left,
			scroll: false,
			parent: this._getParentOffset(),
			relative: this._getRelativeOffset()
		};

		this.offset.click = {
			left: event.pageX - this.offset.left,
			top: event.pageY - this.offset.top
		};
	},

	_mouseDrag: function( event, noPropagation ) {

		// reset any necessary cached properties (see #5009)
		if ( this.hasFixedAncestor ) {
			this.offset.parent = this._getParentOffset();
		}

		//Compute the helpers position
		this.position = this._generatePosition( event, true );
		this.positionAbs = this._convertPositionTo( "absolute" );

		//Call plugins and callbacks and use the resulting position if something is returned
		if ( !noPropagation ) {
			var ui = this._uiHash();
			if ( this._trigger( "drag", event, ui ) === false ) {
				this._mouseUp( new $.Event( "mouseup", event ) );
				return false;
			}
			this.position = ui.position;
		}

		this.helper[ 0 ].style.left = this.position.left + "px";
		this.helper[ 0 ].style.top = this.position.top + "px";

		if ( $.ui.ddmanager ) {
			$.ui.ddmanager.drag( this, event );
		}

		return false;
	},

	_mouseStop: function( event ) {

		//If we are using droppables, inform the manager about the drop
		var that = this,
			dropped = false;
		if ( $.ui.ddmanager && !this.options.dropBehaviour ) {
			dropped = $.ui.ddmanager.drop( this, event );
		}

		//if a drop comes from outside (a sortable)
		if ( this.dropped ) {
			dropped = this.dropped;
			this.dropped = false;
		}

		if ( ( this.options.revert === "invalid" && !dropped ) ||
				( this.options.revert === "valid" && dropped ) ||
				this.options.revert === true || ( $.isFunction( this.options.revert ) &&
				this.options.revert.call( this.element, dropped ) )
		) {
			$( this.helper ).animate(
				this.originalPosition,
				parseInt( this.options.revertDuration, 10 ),
				function() {
					if ( that._trigger( "stop", event ) !== false ) {
						that._clear();
					}
				}
			);
		} else {
			if ( this._trigger( "stop", event ) !== false ) {
				this._clear();
			}
		}

		return false;
	},

	_mouseUp: function( event ) {
		this._unblockFrames();

		// If the ddmanager is used for droppables, inform the manager that dragging has stopped
		// (see #5003)
		if ( $.ui.ddmanager ) {
			$.ui.ddmanager.dragStop( this, event );
		}

		// Only need to focus if the event occurred on the draggable itself, see #10527
		if ( this.handleElement.is( event.target ) ) {

			// The interaction is over; whether or not the click resulted in a drag,
			// focus the element
			this.element.trigger( "focus" );
		}

		return $.ui.mouse.prototype._mouseUp.call( this, event );
	},

	cancel: function() {

		if ( this.helper.is( ".ui-draggable-dragging" ) ) {
			this._mouseUp( new $.Event( "mouseup", { target: this.element[ 0 ] } ) );
		} else {
			this._clear();
		}

		return this;

	},

	_getHandle: function( event ) {
		return this.options.handle ?
			!!$( event.target ).closest( this.element.find( this.options.handle ) ).length :
			true;
	},

	_setHandleClassName: function() {
		this.handleElement = this.options.handle ?
			this.element.find( this.options.handle ) : this.element;
		this._addClass( this.handleElement, "ui-draggable-handle" );
	},

	_removeHandleClassName: function() {
		this._removeClass( this.handleElement, "ui-draggable-handle" );
	},

	_createHelper: function( event ) {

		var o = this.options,
			helperIsFunction = $.isFunction( o.helper ),
			helper = helperIsFunction ?
				$( o.helper.apply( this.element[ 0 ], [ event ] ) ) :
				( o.helper === "clone" ?
					this.element.clone().removeAttr( "id" ) :
					this.element );

		if ( !helper.parents( "body" ).length ) {
			helper.appendTo( ( o.appendTo === "parent" ?
				this.element[ 0 ].parentNode :
				o.appendTo ) );
		}

		// Http://bugs.jqueryui.com/ticket/9446
		// a helper function can return the original element
		// which wouldn't have been set to relative in _create
		if ( helperIsFunction && helper[ 0 ] === this.element[ 0 ] ) {
			this._setPositionRelative();
		}

		if ( helper[ 0 ] !== this.element[ 0 ] &&
				!( /(fixed|absolute)/ ).test( helper.css( "position" ) ) ) {
			helper.css( "position", "absolute" );
		}

		return helper;

	},

	_setPositionRelative: function() {
		if ( !( /^(?:r|a|f)/ ).test( this.element.css( "position" ) ) ) {
			this.element[ 0 ].style.position = "relative";
		}
	},

	_adjustOffsetFromHelper: function( obj ) {
		if ( typeof obj === "string" ) {
			obj = obj.split( " " );
		}
		if ( $.isArray( obj ) ) {
			obj = { left: +obj[ 0 ], top: +obj[ 1 ] || 0 };
		}
		if ( "left" in obj ) {
			this.offset.click.left = obj.left + this.margins.left;
		}
		if ( "right" in obj ) {
			this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
		}
		if ( "top" in obj ) {
			this.offset.click.top = obj.top + this.margins.top;
		}
		if ( "bottom" in obj ) {
			this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
		}
	},

	_isRootNode: function( element ) {
		return ( /(html|body)/i ).test( element.tagName ) || element === this.document[ 0 ];
	},

	_getParentOffset: function() {

		//Get the offsetParent and cache its position
		var po = this.offsetParent.offset(),
			document = this.document[ 0 ];

		// This is a special case where we need to modify a offset calculated on start, since the
		// following happened:
		// 1. The position of the helper is absolute, so it's position is calculated based on the
		// next positioned parent
		// 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't
		// the document, which means that the scroll is included in the initial calculation of the
		// offset of the parent, and never recalculated upon drag
		if ( this.cssPosition === "absolute" && this.scrollParent[ 0 ] !== document &&
				$.contains( this.scrollParent[ 0 ], this.offsetParent[ 0 ] ) ) {
			po.left += this.scrollParent.scrollLeft();
			po.top += this.scrollParent.scrollTop();
		}

		if ( this._isRootNode( this.offsetParent[ 0 ] ) ) {
			po = { top: 0, left: 0 };
		}

		return {
			top: po.top + ( parseInt( this.offsetParent.css( "borderTopWidth" ), 10 ) || 0 ),
			left: po.left + ( parseInt( this.offsetParent.css( "borderLeftWidth" ), 10 ) || 0 )
		};

	},

	_getRelativeOffset: function() {
		if ( this.cssPosition !== "relative" ) {
			return { top: 0, left: 0 };
		}

		var p = this.element.position(),
			scrollIsRootNode = this._isRootNode( this.scrollParent[ 0 ] );

		return {
			top: p.top - ( parseInt( this.helper.css( "top" ), 10 ) || 0 ) +
				( !scrollIsRootNode ? this.scrollParent.scrollTop() : 0 ),
			left: p.left - ( parseInt( this.helper.css( "left" ), 10 ) || 0 ) +
				( !scrollIsRootNode ? this.scrollParent.scrollLeft() : 0 )
		};

	},

	_cacheMargins: function() {
		this.margins = {
			left: ( parseInt( this.element.css( "marginLeft" ), 10 ) || 0 ),
			top: ( parseInt( this.element.css( "marginTop" ), 10 ) || 0 ),
			right: ( parseInt( this.element.css( "marginRight" ), 10 ) || 0 ),
			bottom: ( parseInt( this.element.css( "marginBottom" ), 10 ) || 0 )
		};
	},

	_cacheHelperProportions: function() {
		this.helperProportions = {
			width: this.helper.outerWidth(),
			height: this.helper.outerHeight()
		};
	},

	_setContainment: function() {

		var isUserScrollable, c, ce,
			o = this.options,
			document = this.document[ 0 ];

		this.relativeContainer = null;

		if ( !o.containment ) {
			this.containment = null;
			return;
		}

		if ( o.containment === "window" ) {
			this.containment = [
				$( window ).scrollLeft() - this.offset.relative.left - this.offset.parent.left,
				$( window ).scrollTop() - this.offset.relative.top - this.offset.parent.top,
				$( window ).scrollLeft() + $( window ).width() -
					this.helperProportions.width - this.margins.left,
				$( window ).scrollTop() +
					( $( window ).height() || document.body.parentNode.scrollHeight ) -
					this.helperProportions.height - this.margins.top
			];
			return;
		}

		if ( o.containment === "document" ) {
			this.containment = [
				0,
				0,
				$( document ).width() - this.helperProportions.width - this.margins.left,
				( $( document ).height() || document.body.parentNode.scrollHeight ) -
					this.helperProportions.height - this.margins.top
			];
			return;
		}

		if ( o.containment.constructor === Array ) {
			this.containment = o.containment;
			return;
		}

		if ( o.containment === "parent" ) {
			o.containment = this.helper[ 0 ].parentNode;
		}

		c = $( o.containment );
		ce = c[ 0 ];

		if ( !ce ) {
			return;
		}

		isUserScrollable = /(scroll|auto)/.test( c.css( "overflow" ) );

		this.containment = [
			( parseInt( c.css( "borderLeftWidth" ), 10 ) || 0 ) +
				( parseInt( c.css( "paddingLeft" ), 10 ) || 0 ),
			( parseInt( c.css( "borderTopWidth" ), 10 ) || 0 ) +
				( parseInt( c.css( "paddingTop" ), 10 ) || 0 ),
			( isUserScrollable ? Math.max( ce.scrollWidth, ce.offsetWidth ) : ce.offsetWidth ) -
				( parseInt( c.css( "borderRightWidth" ), 10 ) || 0 ) -
				( parseInt( c.css( "paddingRight" ), 10 ) || 0 ) -
				this.helperProportions.width -
				this.margins.left -
				this.margins.right,
			( isUserScrollable ? Math.max( ce.scrollHeight, ce.offsetHeight ) : ce.offsetHeight ) -
				( parseInt( c.css( "borderBottomWidth" ), 10 ) || 0 ) -
				( parseInt( c.css( "paddingBottom" ), 10 ) || 0 ) -
				this.helperProportions.height -
				this.margins.top -
				this.margins.bottom
		];
		this.relativeContainer = c;
	},

	_convertPositionTo: function( d, pos ) {

		if ( !pos ) {
			pos = this.position;
		}

		var mod = d === "absolute" ? 1 : -1,
			scrollIsRootNode = this._isRootNode( this.scrollParent[ 0 ] );

		return {
			top: (

				// The absolute mouse position
				pos.top	+

				// Only for relative positioned nodes: Relative offset from element to offset parent
				this.offset.relative.top * mod +

				// The offsetParent's offset without borders (offset + border)
				this.offset.parent.top * mod -
				( ( this.cssPosition === "fixed" ?
					-this.offset.scroll.top :
					( scrollIsRootNode ? 0 : this.offset.scroll.top ) ) * mod )
			),
			left: (

				// The absolute mouse position
				pos.left +

				// Only for relative positioned nodes: Relative offset from element to offset parent
				this.offset.relative.left * mod +

				// The offsetParent's offset without borders (offset + border)
				this.offset.parent.left * mod	-
				( ( this.cssPosition === "fixed" ?
					-this.offset.scroll.left :
					( scrollIsRootNode ? 0 : this.offset.scroll.left ) ) * mod )
			)
		};

	},

	_generatePosition: function( event, constrainPosition ) {

		var containment, co, top, left,
			o = this.options,
			scrollIsRootNode = this._isRootNode( this.scrollParent[ 0 ] ),
			pageX = event.pageX,
			pageY = event.pageY;

		// Cache the scroll
		if ( !scrollIsRootNode || !this.offset.scroll ) {
			this.offset.scroll = {
				top: this.scrollParent.scrollTop(),
				left: this.scrollParent.scrollLeft()
			};
		}

		/*
		 * - Position constraining -
		 * Constrain the position to a mix of grid, containment.
		 */

		// If we are not dragging yet, we won't check for options
		if ( constrainPosition ) {
			if ( this.containment ) {
				if ( this.relativeContainer ) {
					co = this.relativeContainer.offset();
					containment = [
						this.containment[ 0 ] + co.left,
						this.containment[ 1 ] + co.top,
						this.containment[ 2 ] + co.left,
						this.containment[ 3 ] + co.top
					];
				} else {
					containment = this.containment;
				}

				if ( event.pageX - this.offset.click.left < containment[ 0 ] ) {
					pageX = containment[ 0 ] + this.offset.click.left;
				}
				if ( event.pageY - this.offset.click.top < containment[ 1 ] ) {
					pageY = containment[ 1 ] + this.offset.click.top;
				}
				if ( event.pageX - this.offset.click.left > containment[ 2 ] ) {
					pageX = containment[ 2 ] + this.offset.click.left;
				}
				if ( event.pageY - this.offset.click.top > containment[ 3 ] ) {
					pageY = containment[ 3 ] + this.offset.click.top;
				}
			}

			if ( o.grid ) {

				//Check for grid elements set to 0 to prevent divide by 0 error causing invalid
				// argument errors in IE (see ticket #6950)
				top = o.grid[ 1 ] ? this.originalPageY + Math.round( ( pageY -
					this.originalPageY ) / o.grid[ 1 ] ) * o.grid[ 1 ] : this.originalPageY;
				pageY = containment ? ( ( top - this.offset.click.top >= containment[ 1 ] ||
					top - this.offset.click.top > containment[ 3 ] ) ?
						top :
						( ( top - this.offset.click.top >= containment[ 1 ] ) ?
							top - o.grid[ 1 ] : top + o.grid[ 1 ] ) ) : top;

				left = o.grid[ 0 ] ? this.originalPageX +
					Math.round( ( pageX - this.originalPageX ) / o.grid[ 0 ] ) * o.grid[ 0 ] :
					this.originalPageX;
				pageX = containment ? ( ( left - this.offset.click.left >= containment[ 0 ] ||
					left - this.offset.click.left > containment[ 2 ] ) ?
						left :
						( ( left - this.offset.click.left >= containment[ 0 ] ) ?
							left - o.grid[ 0 ] : left + o.grid[ 0 ] ) ) : left;
			}

			if ( o.axis === "y" ) {
				pageX = this.originalPageX;
			}

			if ( o.axis === "x" ) {
				pageY = this.originalPageY;
			}
		}

		return {
			top: (

				// The absolute mouse position
				pageY -

				// Click offset (relative to the element)
				this.offset.click.top -

				// Only for relative positioned nodes: Relative offset from element to offset parent
				this.offset.relative.top -

				// The offsetParent's offset without borders (offset + border)
				this.offset.parent.top +
				( this.cssPosition === "fixed" ?
					-this.offset.scroll.top :
					( scrollIsRootNode ? 0 : this.offset.scroll.top ) )
			),
			left: (

				// The absolute mouse position
				pageX -

				// Click offset (relative to the element)
				this.offset.click.left -

				// Only for relative positioned nodes: Relative offset from element to offset parent
				this.offset.relative.left -

				// The offsetParent's offset without borders (offset + border)
				this.offset.parent.left +
				( this.cssPosition === "fixed" ?
					-this.offset.scroll.left :
					( scrollIsRootNode ? 0 : this.offset.scroll.left ) )
			)
		};

	},

	_clear: function() {
		this._removeClass( this.helper, "ui-draggable-dragging" );
		if ( this.helper[ 0 ] !== this.element[ 0 ] && !this.cancelHelperRemoval ) {
			this.helper.remove();
		}
		this.helper = null;
		this.cancelHelperRemoval = false;
		if ( this.destroyOnClear ) {
			this.destroy();
		}
	},

	// From now on bulk stuff - mainly helpers

	_trigger: function( type, event, ui ) {
		ui = ui || this._uiHash();
		$.ui.plugin.call( this, type, [ event, ui, this ], true );

		// Absolute position and offset (see #6884 ) have to be recalculated after plugins
		if ( /^(drag|start|stop)/.test( type ) ) {
			this.positionAbs = this._convertPositionTo( "absolute" );
			ui.offset = this.positionAbs;
		}
		return $.Widget.prototype._trigger.call( this, type, event, ui );
	},

	plugins: {},

	_uiHash: function() {
		return {
			helper: this.helper,
			position: this.position,
			originalPosition: this.originalPosition,
			offset: this.positionAbs
		};
	}

} );

$.ui.plugin.add( "draggable", "connectToSortable", {
	start: function( event, ui, draggable ) {
		var uiSortable = $.extend( {}, ui, {
			item: draggable.element
		} );

		draggable.sortables = [];
		$( draggable.options.connectToSortable ).each( function() {
			var sortable = $( this ).sortable( "instance" );

			if ( sortable && !sortable.options.disabled ) {
				draggable.sortables.push( sortable );

				// RefreshPositions is called at drag start to refresh the containerCache
				// which is used in drag. This ensures it's initialized and synchronized
				// with any changes that might have happened on the page since initialization.
				sortable.refreshPositions();
				sortable._trigger( "activate", event, uiSortable );
			}
		} );
	},
	stop: function( event, ui, draggable ) {
		var uiSortable = $.extend( {}, ui, {
			item: draggable.element
		} );

		draggable.cancelHelperRemoval = false;

		$.each( draggable.sortables, function() {
			var sortable = this;

			if ( sortable.isOver ) {
				sortable.isOver = 0;

				// Allow this sortable to handle removing the helper
				draggable.cancelHelperRemoval = true;
				sortable.cancelHelperRemoval = false;

				// Use _storedCSS To restore properties in the sortable,
				// as this also handles revert (#9675) since the draggable
				// may have modified them in unexpected ways (#8809)
				sortable._storedCSS = {
					position: sortable.placeholder.css( "position" ),
					top: sortable.placeholder.css( "top" ),
					left: sortable.placeholder.css( "left" )
				};

				sortable._mouseStop( event );

				// Once drag has ended, the sortable should return to using
				// its original helper, not the shared helper from draggable
				sortable.options.helper = sortable.options._helper;
			} else {

				// Prevent this Sortable from removing the helper.
				// However, don't set the draggable to remove the helper
				// either as another connected Sortable may yet handle the removal.
				sortable.cancelHelperRemoval = true;

				sortable._trigger( "deactivate", event, uiSortable );
			}
		} );
	},
	drag: function( event, ui, draggable ) {
		$.each( draggable.sortables, function() {
			var innermostIntersecting = false,
				sortable = this;

			// Copy over variables that sortable's _intersectsWith uses
			sortable.positionAbs = draggable.positionAbs;
			sortable.helperProportions = draggable.helperProportions;
			sortable.offset.click = draggable.offset.click;

			if ( sortable._intersectsWith( sortable.containerCache ) ) {
				innermostIntersecting = true;

				$.each( draggable.sortables, function() {

					// Copy over variables that sortable's _intersectsWith uses
					this.positionAbs = draggable.positionAbs;
					this.helperProportions = draggable.helperProportions;
					this.offset.click = draggable.offset.click;

					if ( this !== sortable &&
							this._intersectsWith( this.containerCache ) &&
							$.contains( sortable.element[ 0 ], this.element[ 0 ] ) ) {
						innermostIntersecting = false;
					}

					return innermostIntersecting;
				} );
			}

			if ( innermostIntersecting ) {

				// If it intersects, we use a little isOver variable and set it once,
				// so that the move-in stuff gets fired only once.
				if ( !sortable.isOver ) {
					sortable.isOver = 1;

					// Store draggable's parent in case we need to reappend to it later.
					draggable._parent = ui.helper.parent();

					sortable.currentItem = ui.helper
						.appendTo( sortable.element )
						.data( "ui-sortable-item", true );

					// Store helper option to later restore it
					sortable.options._helper = sortable.options.helper;

					sortable.options.helper = function() {
						return ui.helper[ 0 ];
					};

					// Fire the start events of the sortable with our passed browser event,
					// and our own helper (so it doesn't create a new one)
					event.target = sortable.currentItem[ 0 ];
					sortable._mouseCapture( event, true );
					sortable._mouseStart( event, true, true );

					// Because the browser event is way off the new appended portlet,
					// modify necessary variables to reflect the changes
					sortable.offset.click.top = draggable.offset.click.top;
					sortable.offset.click.left = draggable.offset.click.left;
					sortable.offset.parent.left -= draggable.offset.parent.left -
						sortable.offset.parent.left;
					sortable.offset.parent.top -= draggable.offset.parent.top -
						sortable.offset.parent.top;

					draggable._trigger( "toSortable", event );

					// Inform draggable that the helper is in a valid drop zone,
					// used solely in the revert option to handle "valid/invalid".
					draggable.dropped = sortable.element;

					// Need to refreshPositions of all sortables in the case that
					// adding to one sortable changes the location of the other sortables (#9675)
					$.each( draggable.sortables, function() {
						this.refreshPositions();
					} );

					// Hack so receive/update callbacks work (mostly)
					draggable.currentItem = draggable.element;
					sortable.fromOutside = draggable;
				}

				if ( sortable.currentItem ) {
					sortable._mouseDrag( event );

					// Copy the sortable's position because the draggable's can potentially reflect
					// a relative position, while sortable is always absolute, which the dragged
					// element has now become. (#8809)
					ui.position = sortable.position;
				}
			} else {

				// If it doesn't intersect with the sortable, and it intersected before,
				// we fake the drag stop of the sortable, but make sure it doesn't remove
				// the helper by using cancelHelperRemoval.
				if ( sortable.isOver ) {

					sortable.isOver = 0;
					sortable.cancelHelperRemoval = true;

					// Calling sortable's mouseStop would trigger a revert,
					// so revert must be temporarily false until after mouseStop is called.
					sortable.options._revert = sortable.options.revert;
					sortable.options.revert = false;

					sortable._trigger( "out", event, sortable._uiHash( sortable ) );
					sortable._mouseStop( event, true );

					// Restore sortable behaviors that were modfied
					// when the draggable entered the sortable area (#9481)
					sortable.options.revert = sortable.options._revert;
					sortable.options.helper = sortable.options._helper;

					if ( sortable.placeholder ) {
						sortable.placeholder.remove();
					}

					// Restore and recalculate the draggable's offset considering the sortable
					// may have modified them in unexpected ways. (#8809, #10669)
					ui.helper.appendTo( draggable._parent );
					draggable._refreshOffsets( event );
					ui.position = draggable._generatePosition( event, true );

					draggable._trigger( "fromSortable", event );

					// Inform draggable that the helper is no longer in a valid drop zone
					draggable.dropped = false;

					// Need to refreshPositions of all sortables just in case removing
					// from one sortable changes the location of other sortables (#9675)
					$.each( draggable.sortables, function() {
						this.refreshPositions();
					} );
				}
			}
		} );
	}
} );

$.ui.plugin.add( "draggable", "cursor", {
	start: function( event, ui, instance ) {
		var t = $( "body" ),
			o = instance.options;

		if ( t.css( "cursor" ) ) {
			o._cursor = t.css( "cursor" );
		}
		t.css( "cursor", o.cursor );
	},
	stop: function( event, ui, instance ) {
		var o = instance.options;
		if ( o._cursor ) {
			$( "body" ).css( "cursor", o._cursor );
		}
	}
} );

$.ui.plugin.add( "draggable", "opacity", {
	start: function( event, ui, instance ) {
		var t = $( ui.helper ),
			o = instance.options;
		if ( t.css( "opacity" ) ) {
			o._opacity = t.css( "opacity" );
		}
		t.css( "opacity", o.opacity );
	},
	stop: function( event, ui, instance ) {
		var o = instance.options;
		if ( o._opacity ) {
			$( ui.helper ).css( "opacity", o._opacity );
		}
	}
} );

$.ui.plugin.add( "draggable", "scroll", {
	start: function( event, ui, i ) {
		if ( !i.scrollParentNotHidden ) {
			i.scrollParentNotHidden = i.helper.scrollParent( false );
		}

		if ( i.scrollParentNotHidden[ 0 ] !== i.document[ 0 ] &&
				i.scrollParentNotHidden[ 0 ].tagName !== "HTML" ) {
			i.overflowOffset = i.scrollParentNotHidden.offset();
		}
	},
	drag: function( event, ui, i  ) {

		var o = i.options,
			scrolled = false,
			scrollParent = i.scrollParentNotHidden[ 0 ],
			document = i.document[ 0 ];

		if ( scrollParent !== document && scrollParent.tagName !== "HTML" ) {
			if ( !o.axis || o.axis !== "x" ) {
				if ( ( i.overflowOffset.top + scrollParent.offsetHeight ) - event.pageY <
						o.scrollSensitivity ) {
					scrollParent.scrollTop = scrolled = scrollParent.scrollTop + o.scrollSpeed;
				} else if ( event.pageY - i.overflowOffset.top < o.scrollSensitivity ) {
					scrollParent.scrollTop = scrolled = scrollParent.scrollTop - o.scrollSpeed;
				}
			}

			if ( !o.axis || o.axis !== "y" ) {
				if ( ( i.overflowOffset.left + scrollParent.offsetWidth ) - event.pageX <
						o.scrollSensitivity ) {
					scrollParent.scrollLeft = scrolled = scrollParent.scrollLeft + o.scrollSpeed;
				} else if ( event.pageX - i.overflowOffset.left < o.scrollSensitivity ) {
					scrollParent.scrollLeft = scrolled = scrollParent.scrollLeft - o.scrollSpeed;
				}
			}

		} else {

			if ( !o.axis || o.axis !== "x" ) {
				if ( event.pageY - $( document ).scrollTop() < o.scrollSensitivity ) {
					scrolled = $( document ).scrollTop( $( document ).scrollTop() - o.scrollSpeed );
				} else if ( $( window ).height() - ( event.pageY - $( document ).scrollTop() ) <
						o.scrollSensitivity ) {
					scrolled = $( document ).scrollTop( $( document ).scrollTop() + o.scrollSpeed );
				}
			}

			if ( !o.axis || o.axis !== "y" ) {
				if ( event.pageX - $( document ).scrollLeft() < o.scrollSensitivity ) {
					scrolled = $( document ).scrollLeft(
						$( document ).scrollLeft() - o.scrollSpeed
					);
				} else if ( $( window ).width() - ( event.pageX - $( document ).scrollLeft() ) <
						o.scrollSensitivity ) {
					scrolled = $( document ).scrollLeft(
						$( document ).scrollLeft() + o.scrollSpeed
					);
				}
			}

		}

		if ( scrolled !== false && $.ui.ddmanager && !o.dropBehaviour ) {
			$.ui.ddmanager.prepareOffsets( i, event );
		}

	}
} );

$.ui.plugin.add( "draggable", "snap", {
	start: function( event, ui, i ) {

		var o = i.options;

		i.snapElements = [];

		$( o.snap.constructor !== String ? ( o.snap.items || ":data(ui-draggable)" ) : o.snap )
			.each( function() {
				var $t = $( this ),
					$o = $t.offset();
				if ( this !== i.element[ 0 ] ) {
					i.snapElements.push( {
						item: this,
						width: $t.outerWidth(), height: $t.outerHeight(),
						top: $o.top, left: $o.left
					} );
				}
			} );

	},
	drag: function( event, ui, inst ) {

		var ts, bs, ls, rs, l, r, t, b, i, first,
			o = inst.options,
			d = o.snapTolerance,
			x1 = ui.offset.left, x2 = x1 + inst.helperProportions.width,
			y1 = ui.offset.top, y2 = y1 + inst.helperProportions.height;

		for ( i = inst.snapElements.length - 1; i >= 0; i-- ) {

			l = inst.snapElements[ i ].left - inst.margins.left;
			r = l + inst.snapElements[ i ].width;
			t = inst.snapElements[ i ].top - inst.margins.top;
			b = t + inst.snapElements[ i ].height;

			if ( x2 < l - d || x1 > r + d || y2 < t - d || y1 > b + d ||
					!$.contains( inst.snapElements[ i ].item.ownerDocument,
					inst.snapElements[ i ].item ) ) {
				if ( inst.snapElements[ i ].snapping ) {
					( inst.options.snap.release &&
						inst.options.snap.release.call(
							inst.element,
							event,
							$.extend( inst._uiHash(), { snapItem: inst.snapElements[ i ].item } )
						) );
				}
				inst.snapElements[ i ].snapping = false;
				continue;
			}

			if ( o.snapMode !== "inner" ) {
				ts = Math.abs( t - y2 ) <= d;
				bs = Math.abs( b - y1 ) <= d;
				ls = Math.abs( l - x2 ) <= d;
				rs = Math.abs( r - x1 ) <= d;
				if ( ts ) {
					ui.position.top = inst._convertPositionTo( "relative", {
						top: t - inst.helperProportions.height,
						left: 0
					} ).top;
				}
				if ( bs ) {
					ui.position.top = inst._convertPositionTo( "relative", {
						top: b,
						left: 0
					} ).top;
				}
				if ( ls ) {
					ui.position.left = inst._convertPositionTo( "relative", {
						top: 0,
						left: l - inst.helperProportions.width
					} ).left;
				}
				if ( rs ) {
					ui.position.left = inst._convertPositionTo( "relative", {
						top: 0,
						left: r
					} ).left;
				}
			}

			first = ( ts || bs || ls || rs );

			if ( o.snapMode !== "outer" ) {
				ts = Math.abs( t - y1 ) <= d;
				bs = Math.abs( b - y2 ) <= d;
				ls = Math.abs( l - x1 ) <= d;
				rs = Math.abs( r - x2 ) <= d;
				if ( ts ) {
					ui.position.top = inst._convertPositionTo( "relative", {
						top: t,
						left: 0
					} ).top;
				}
				if ( bs ) {
					ui.position.top = inst._convertPositionTo( "relative", {
						top: b - inst.helperProportions.height,
						left: 0
					} ).top;
				}
				if ( ls ) {
					ui.position.left = inst._convertPositionTo( "relative", {
						top: 0,
						left: l
					} ).left;
				}
				if ( rs ) {
					ui.position.left = inst._convertPositionTo( "relative", {
						top: 0,
						left: r - inst.helperProportions.width
					} ).left;
				}
			}

			if ( !inst.snapElements[ i ].snapping && ( ts || bs || ls || rs || first ) ) {
				( inst.options.snap.snap &&
					inst.options.snap.snap.call(
						inst.element,
						event,
						$.extend( inst._uiHash(), {
							snapItem: inst.snapElements[ i ].item
						} ) ) );
			}
			inst.snapElements[ i ].snapping = ( ts || bs || ls || rs || first );

		}

	}
} );

$.ui.plugin.add( "draggable", "stack", {
	start: function( event, ui, instance ) {
		var min,
			o = instance.options,
			group = $.makeArray( $( o.stack ) ).sort( function( a, b ) {
				return ( parseInt( $( a ).css( "zIndex" ), 10 ) || 0 ) -
					( parseInt( $( b ).css( "zIndex" ), 10 ) || 0 );
			} );

		if ( !group.length ) { return; }

		min = parseInt( $( group[ 0 ] ).css( "zIndex" ), 10 ) || 0;
		$( group ).each( function( i ) {
			$( this ).css( "zIndex", min + i );
		} );
		this.css( "zIndex", ( min + group.length ) );
	}
} );

$.ui.plugin.add( "draggable", "zIndex", {
	start: function( event, ui, instance ) {
		var t = $( ui.helper ),
			o = instance.options;

		if ( t.css( "zIndex" ) ) {
			o._zIndex = t.css( "zIndex" );
		}
		t.css( "zIndex", o.zIndex );
	},
	stop: function( event, ui, instance ) {
		var o = instance.options;

		if ( o._zIndex ) {
			$( ui.helper ).css( "zIndex", o._zIndex );
		}
	}
} );

return $.ui.draggable;

} ) );


/***/ }),

/***/ "HPGu":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Labels 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: labels
//>>group: Core
//>>description: Find all the labels associated with a given input
//>>docs: http://api.jqueryui.com/labels/

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__("7t+N"), __webpack_require__("UZ9c"), __webpack_require__("WesT") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {

return $.fn.labels = function() {
	var ancestor, selector, id, labels, ancestors;

	// Check control.labels first
	if ( this[ 0 ].labels && this[ 0 ].labels.length ) {
		return this.pushStack( this[ 0 ].labels );
	}

	// Support: IE <= 11, FF <= 37, Android <= 2.3 only
	// Above browsers do not support control.labels. Everything below is to support them
	// as well as document fragments. control.labels does not work on document fragments
	labels = this.eq( 0 ).parents( "label" );

	// Look for the label based on the id
	id = this.attr( "id" );
	if ( id ) {

		// We don't search against the document in case the element
		// is disconnected from the DOM
		ancestor = this.eq( 0 ).parents().last();

		// Get a full set of top level ancestors
		ancestors = ancestor.add( ancestor.length ? ancestor.siblings() : this.siblings() );

		// Create a selector for the label based on the id
		selector = "label[for='" + $.ui.escapeSelector( id ) + "']";

		labels = labels.add( ancestors.find( selector ).addBack( selector ) );

	}

	// Return whatever we have found for labels
	return this.pushStack( labels );
};

} ) );


/***/ }),

/***/ "Iu1L":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("PAHo")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, MyWorkspaceComponent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ComponentRegistration = /** @class */ (function () {
        function ComponentRegistration() {
        }
        ComponentRegistration.registerComponents = function () {
            ko.components.register("my-workspace", new MyWorkspaceComponent_1.MyWorkspaceComponent(null, null));
        };
        return ComponentRegistration;
    }());
    exports.ComponentRegistration = ComponentRegistration;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "Nnp9":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__("7t+N"), __webpack_require__("UZ9c") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {
return $.ui.safeActiveElement = function( document ) {
	var activeElement;

	// Support: IE 9 only
	// IE9 throws an "Unspecified error" accessing document.activeElement from an <iframe>
	try {
		activeElement = document.activeElement;
	} catch ( error ) {
		activeElement = document.body;
	}

	// Support: IE 9 - 11 only
	// IE may return null instead of an element
	// Interestingly, this only seems to occur when NOT in an iframe
	if ( !activeElement ) {
		activeElement = document.body;
	}

	// Support: IE 11 only
	// IE11 returns a seemingly empty object in some cases when accessing
	// document.activeElement from an <iframe>
	if ( !activeElement.nodeName ) {
		activeElement = document.body;
	}

	return activeElement;
};

} ) );


/***/ }),

/***/ "PAHo":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("rdLu")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, _) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //export class widgets {
    //    x: KnockoutObservable<number>;
    //    y: KnockoutObservable<number>;
    //    width: KnockoutObservable<number>;
    //    height: KnockoutObservable<number>;
    //    innerwidgets: KnockoutObservableArray<widgets>;
    //    constructor(x: number, y: number, width: number, height: number) {
    //        this.x = ko.observable(x);
    //        this.y = ko.observable(y);
    //        this.width = ko.observable(width);
    //        this.height = ko.observable(height);
    //        this.innerwidgets = ko.observableArray([]);
    //    }
    //    public addNewWidget = () => {
    //        var mywidget = new widgets(
    //            0,
    //            0,
    //            Math.floor(1 + 3 * Math.random()),
    //            Math.floor(1 + 3 * Math.random())
    //        )
    //        this.innerwidgets.push(mywidget);
    //    };
    //}
    var MyWorkspaceViewModel = /** @class */ (function () {
        function MyWorkspaceViewModel(controller, componentInfo) {
            var _this = this;
            this.grid = null;
            this.AfterAddWidget = function (items) {
                var self = _this;
                if (_this.grid === null) {
                    console.log(JSON.stringify(_this.componentInfo));
                    _this.grid = $(_this.componentInfo.element).find('.grid-stack').gridstack({
                        cellHeight: 70,
                        verticalMargin: 35,
                        auto: false,
                        disableResize: true,
                        disableDrag: false
                    }).data('gridstack');
                }
                var item = _.find(items, function (i) { return i.nodeType == 1; });
                self.grid.addWidget(item);
                ko.utils.domNodeDisposal.addDisposeCallback(item, function () {
                    self.grid.remove_widget(item);
                });
            };
            this.widgets = controller.tileInfo;
            this.componentInfo = componentInfo;
            console.log(this.widgets());
            console.log(JSON.stringify(componentInfo));
        }
        return MyWorkspaceViewModel;
    }());
    exports.MyWorkspaceViewModel = MyWorkspaceViewModel;
    var MyWorkspaceComponent = /** @class */ (function () {
        function MyWorkspaceComponent(controller, componentInfo) {
            return {
                viewModel: {
                    createViewModel: function (controller, componentInfo) {
                        return new MyWorkspaceViewModel(controller, componentInfo);
                    }
                },
                //template: require("html-loader!./MyWorkspaceView.html")
                //template:
                //    [
                //        '<div class="grid-stack" data-bind="foreach: {data: widgets}">',
                //        '<div class="grid-stack-item" data-bind="attr:{\'data-gs-x\': $data.x, \'data-gs-y\': $data.y, \'data-gs-width\': $data.width, \'data-gs-height\': $data.height, \'data-gs-auto-position\': $data.auto_position}">',
                //            '<div class="grid-stack-item-content">',
                //                '<p style="text-align:center;"> Panel content </p>',
                //                '<p style = "text-align:center;"> <button type="button" class= "btn btn-success"> See More Dock Activity </button></p>',
                //            '</div>',
                //        '</div>',
                //        '</div>'
                //        //'<div class="grid-stack" data-bind="foreach: {data: widgets}">',
                //        //'   <div class="grid-stack-item" data-bind="attr: {\'data-gs-x\': $data.x, \'data-gs-y\': $data.y, \'data-gs-width\': $data.width, \'data-gs-height\': $data.height, \'data-gs-auto-position\': $data.auto_position}">',
                //        //'       <div class="grid-stack-item-content"><button data-bind="click: $root.delete_widget">Delete me</button></div>',
                //        //'   </div>',
                //        //'</div> '
                //    ].join('')
                template: { element: 'gridstack-template' }
            };
        }
        return MyWorkspaceComponent;
    }());
    exports.MyWorkspaceComponent = MyWorkspaceComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("7t+N")))

/***/ }),

/***/ "Rl6D":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Scroll Parent 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: scrollParent
//>>group: Core
//>>description: Get the closest ancestor element that is scrollable.
//>>docs: http://api.jqueryui.com/scrollParent/

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__("7t+N"), __webpack_require__("UZ9c") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {

return $.fn.scrollParent = function( includeHidden ) {
	var position = this.css( "position" ),
		excludeStaticParent = position === "absolute",
		overflowRegex = includeHidden ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
		scrollParent = this.parents().filter( function() {
			var parent = $( this );
			if ( excludeStaticParent && parent.css( "position" ) === "static" ) {
				return false;
			}
			return overflowRegex.test( parent.css( "overflow" ) + parent.css( "overflow-y" ) +
				parent.css( "overflow-x" ) );
		} ).eq( 0 );

	return position === "fixed" || !scrollParent.length ?
		$( this[ 0 ].ownerDocument || document ) :
		scrollParent;
};

} ) );


/***/ }),

/***/ "UZ9c":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__("7t+N") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {

$.ui = $.ui || {};

return $.ui.version = "1.12.1";

} ) );


/***/ }),

/***/ "WLoA":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Keycode 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Keycode
//>>group: Core
//>>description: Provide keycodes as keynames
//>>docs: http://api.jqueryui.com/jQuery.ui.keyCode/

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__("7t+N"), __webpack_require__("UZ9c") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {
return $.ui.keyCode = {
	BACKSPACE: 8,
	COMMA: 188,
	DELETE: 46,
	DOWN: 40,
	END: 35,
	ENTER: 13,
	ESCAPE: 27,
	HOME: 36,
	LEFT: 37,
	PAGE_DOWN: 34,
	PAGE_UP: 33,
	PERIOD: 190,
	RIGHT: 39,
	SPACE: 32,
	TAB: 9,
	UP: 38
};

} ) );


/***/ }),

/***/ "WesT":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__("7t+N"), __webpack_require__("UZ9c") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {

// Internal use only
return $.ui.escapeSelector = ( function() {
	var selectorEscape = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;
	return function( selector ) {
		return selector.replace( selectorEscape, "\\$1" );
	};
} )();

} ) );


/***/ }),

/***/ "XSNM":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * gridstack.js 0.3.0
 * http://troolee.github.io/gridstack.js/
 * (c) 2014-2016 Pavel Reznikov, Dylan Weiss
 * gridstack.js may be freely distributed under the MIT license.
 * @preserve
*/
!function(a){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__("7t+N"),__webpack_require__("M4fF")], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if("undefined"!=typeof exports){try{jQuery=require("jquery")}catch(a){}try{_=require("lodash")}catch(a){}a(jQuery,_)}else a(jQuery,_)}(function(a,b){function c(a){this.grid=a}var d=window,e=function(a,b,c){var d=function(){return console.warn("gridstack.js: Function `"+b+"` is deprecated as of v0.2.5 and has been replaced with `"+c+"`. It will be **completely** removed in v1.0."),a.apply(this,arguments)};return d.prototype=a.prototype,d},f=function(a,b){console.warn("gridstack.js: Option `"+a+"` is deprecated as of v0.2.5 and has been replaced with `"+b+"`. It will be **completely** removed in v1.0.")},g={isIntercepted:function(a,b){return!(a.x+a.width<=b.x||b.x+b.width<=a.x||a.y+a.height<=b.y||b.y+b.height<=a.y)},sort:function(a,c,d){return d=d||b.chain(a).map(function(a){return a.x+a.width}).max().value(),c=-1!=c?1:-1,b.sortBy(a,function(a){return c*(a.x+a.y*d)})},createStylesheet:function(a){var b=document.createElement("style");return b.setAttribute("type","text/css"),b.setAttribute("data-gs-style-id",a),b.styleSheet?b.styleSheet.cssText="":b.appendChild(document.createTextNode("")),document.getElementsByTagName("head")[0].appendChild(b),b.sheet},removeStylesheet:function(b){a("STYLE[data-gs-style-id="+b+"]").remove()},insertCSSRule:function(a,b,c,d){"function"==typeof a.insertRule?a.insertRule(b+"{"+c+"}",d):"function"==typeof a.addRule&&a.addRule(b,c,d)},toBool:function(a){return"boolean"==typeof a?a:"string"==typeof a?!(""===(a=a.toLowerCase())||"no"==a||"false"==a||"0"==a):Boolean(a)},_collisionNodeCheck:function(a){return a!=this.node&&g.isIntercepted(a,this.nn)},_didCollide:function(a){return g.isIntercepted({x:this.n.x,y:this.newY,width:this.n.width,height:this.n.height},a)},_isAddNodeIntercepted:function(a){return g.isIntercepted({x:this.x,y:this.y,width:this.node.width,height:this.node.height},a)},parseHeight:function(a){var c=a,d="px";if(c&&b.isString(c)){var e=c.match(/^(-[0-9]+\.[0-9]+|[0-9]*\.[0-9]+|-[0-9]+|[0-9]+)(px|em|rem|vh|vw)?$/);if(!e)throw new Error("Invalid height");d=e[2]||"px",c=parseFloat(e[1])}return{height:c,unit:d}}};g.is_intercepted=e(g.isIntercepted,"is_intercepted","isIntercepted"),g.create_stylesheet=e(g.createStylesheet,"create_stylesheet","createStylesheet"),g.remove_stylesheet=e(g.removeStylesheet,"remove_stylesheet","removeStylesheet"),g.insert_css_rule=e(g.insertCSSRule,"insert_css_rule","insertCSSRule"),c.registeredPlugins=[],c.registerPlugin=function(a){c.registeredPlugins.push(a)},c.prototype.resizable=function(a,b){return this},c.prototype.draggable=function(a,b){return this},c.prototype.droppable=function(a,b){return this},c.prototype.isDroppable=function(a){return!1},c.prototype.on=function(a,b,c){return this};var h=0,i=function(a,b,c,d,e){this.width=a,this.float=c||!1,this.height=d||0,this.nodes=e||[],this.onchange=b||function(){},this._updateCounter=0,this._float=this.float,this._addedNodes=[],this._removedNodes=[]};i.prototype.batchUpdate=function(){this._updateCounter=1,this.float=!0},i.prototype.commit=function(){0!==this._updateCounter&&(this._updateCounter=0,this.float=this._float,this._packNodes(),this._notify())},i.prototype.getNodeDataByDOMEl=function(a){return b.find(this.nodes,function(b){return a.get(0)===b.el.get(0)})},i.prototype._fixCollisions=function(a){this._sortNodes(-1);var c=a,d=Boolean(b.find(this.nodes,function(a){return a.locked}));for(this.float||d||(c={x:0,y:a.y,width:this.width,height:a.height});;){var e=b.find(this.nodes,b.bind(g._collisionNodeCheck,{node:a,nn:c}));if(void 0===e)return;this.moveNode(e,e.x,a.y+a.height,e.width,e.height,!0)}},i.prototype.isAreaEmpty=function(a,c,d,e){var f={x:a||0,y:c||0,width:d||1,height:e||1},h=b.find(this.nodes,b.bind(function(a){return g.isIntercepted(a,f)},this));return null===h||void 0===h},i.prototype._sortNodes=function(a){this.nodes=g.sort(this.nodes,a,this.width)},i.prototype._packNodes=function(){this._sortNodes(),this.float?b.each(this.nodes,b.bind(function(a,c){if(!a._updating&&void 0!==a._origY&&a.y!=a._origY)for(var d=a.y;d>=a._origY;){var e=b.chain(this.nodes).find(b.bind(g._didCollide,{n:a,newY:d})).value();e||(a._dirty=!0,a.y=d),--d}},this)):b.each(this.nodes,b.bind(function(a,c){if(!a.locked)for(;a.y>0;){var d=a.y-1,e=0===c;if(c>0){var f=b.chain(this.nodes).take(c).find(b.bind(g._didCollide,{n:a,newY:d})).value();e=void 0===f}if(!e)break;a._dirty=a.y!=d,a.y=d}},this))},i.prototype._prepareNode=function(a,c){return a=b.defaults(a||{},{width:1,height:1,x:0,y:0}),a.x=parseInt(""+a.x),a.y=parseInt(""+a.y),a.width=parseInt(""+a.width),a.height=parseInt(""+a.height),a.autoPosition=a.autoPosition||!1,a.noResize=a.noResize||!1,a.noMove=a.noMove||!1,a.width>this.width?a.width=this.width:a.width<1&&(a.width=1),a.height<1&&(a.height=1),a.x<0&&(a.x=0),a.x+a.width>this.width&&(c?a.width=this.width-a.x:a.x=this.width-a.width),a.y<0&&(a.y=0),a},i.prototype._notify=function(){var a=Array.prototype.slice.call(arguments,0);if(a[0]=void 0===a[0]?[]:[a[0]],a[1]=void 0===a[1]||a[1],!this._updateCounter){var b=a[0].concat(this.getDirtyNodes());this.onchange(b,a[1])}},i.prototype.cleanNodes=function(){this._updateCounter||b.each(this.nodes,function(a){a._dirty=!1})},i.prototype.getDirtyNodes=function(){return b.filter(this.nodes,function(a){return a._dirty})},i.prototype.addNode=function(a,c){if(a=this._prepareNode(a),void 0!==a.maxWidth&&(a.width=Math.min(a.width,a.maxWidth)),void 0!==a.maxHeight&&(a.height=Math.min(a.height,a.maxHeight)),void 0!==a.minWidth&&(a.width=Math.max(a.width,a.minWidth)),void 0!==a.minHeight&&(a.height=Math.max(a.height,a.minHeight)),a._id=++h,a._dirty=!0,a.autoPosition){this._sortNodes();for(var d=0;;++d){var e=d%this.width,f=Math.floor(d/this.width);if(!(e+a.width>this.width)&&!b.find(this.nodes,b.bind(g._isAddNodeIntercepted,{x:e,y:f,node:a}))){a.x=e,a.y=f;break}}}return this.nodes.push(a),void 0!==c&&c&&this._addedNodes.push(b.clone(a)),this._fixCollisions(a),this._packNodes(),this._notify(),a},i.prototype.removeNode=function(a,c){c=void 0===c||c,this._removedNodes.push(b.clone(a)),a._id=null,this.nodes=b.without(this.nodes,a),this._packNodes(),this._notify(a,c)},i.prototype.canMoveNode=function(c,d,e,f,g){if(!this.isNodeChangedPosition(c,d,e,f,g))return!1;var h=Boolean(b.find(this.nodes,function(a){return a.locked}));if(!this.height&&!h)return!0;var j,k=new i(this.width,null,this.float,0,b.map(this.nodes,function(b){return b==c?j=a.extend({},b):a.extend({},b)}));if(void 0===j)return!0;k.moveNode(j,d,e,f,g);var l=!0;return h&&(l&=!Boolean(b.find(k.nodes,function(a){return a!=j&&Boolean(a.locked)&&Boolean(a._dirty)}))),this.height&&(l&=k.getGridHeight()<=this.height),l},i.prototype.canBePlacedWithRespectToHeight=function(c){if(!this.height)return!0;var d=new i(this.width,null,this.float,0,b.map(this.nodes,function(b){return a.extend({},b)}));return d.addNode(c),d.getGridHeight()<=this.height},i.prototype.isNodeChangedPosition=function(a,b,c,d,e){return"number"!=typeof b&&(b=a.x),"number"!=typeof c&&(c=a.y),"number"!=typeof d&&(d=a.width),"number"!=typeof e&&(e=a.height),void 0!==a.maxWidth&&(d=Math.min(d,a.maxWidth)),void 0!==a.maxHeight&&(e=Math.min(e,a.maxHeight)),void 0!==a.minWidth&&(d=Math.max(d,a.minWidth)),void 0!==a.minHeight&&(e=Math.max(e,a.minHeight)),a.x!=b||a.y!=c||a.width!=d||a.height!=e},i.prototype.moveNode=function(a,b,c,d,e,f){if(!this.isNodeChangedPosition(a,b,c,d,e))return a;if("number"!=typeof b&&(b=a.x),"number"!=typeof c&&(c=a.y),"number"!=typeof d&&(d=a.width),"number"!=typeof e&&(e=a.height),void 0!==a.maxWidth&&(d=Math.min(d,a.maxWidth)),void 0!==a.maxHeight&&(e=Math.min(e,a.maxHeight)),void 0!==a.minWidth&&(d=Math.max(d,a.minWidth)),void 0!==a.minHeight&&(e=Math.max(e,a.minHeight)),a.x==b&&a.y==c&&a.width==d&&a.height==e)return a;var g=a.width!=d;return a._dirty=!0,a.x=b,a.y=c,a.width=d,a.height=e,a.lastTriedX=b,a.lastTriedY=c,a.lastTriedWidth=d,a.lastTriedHeight=e,a=this._prepareNode(a,g),this._fixCollisions(a),f||(this._packNodes(),this._notify()),a},i.prototype.getGridHeight=function(){return b.reduce(this.nodes,function(a,b){return Math.max(a,b.y+b.height)},0)},i.prototype.beginUpdate=function(a){b.each(this.nodes,function(a){a._origY=a.y}),a._updating=!0},i.prototype.endUpdate=function(){b.each(this.nodes,function(a){a._origY=a.y});var a=b.find(this.nodes,function(a){return a._updating});a&&(a._updating=!1)};var j=function(d,e){var g,h,j=this;e=e||{},this.container=a(d),void 0!==e.handle_class&&(e.handleClass=e.handle_class,f("handle_class","handleClass")),void 0!==e.item_class&&(e.itemClass=e.item_class,f("item_class","itemClass")),void 0!==e.placeholder_class&&(e.placeholderClass=e.placeholder_class,f("placeholder_class","placeholderClass")),void 0!==e.placeholder_text&&(e.placeholderText=e.placeholder_text,f("placeholder_text","placeholderText")),void 0!==e.cell_height&&(e.cellHeight=e.cell_height,f("cell_height","cellHeight")),void 0!==e.vertical_margin&&(e.verticalMargin=e.vertical_margin,f("vertical_margin","verticalMargin")),void 0!==e.min_width&&(e.minWidth=e.min_width,f("min_width","minWidth")),void 0!==e.static_grid&&(e.staticGrid=e.static_grid,f("static_grid","staticGrid")),void 0!==e.is_nested&&(e.isNested=e.is_nested,f("is_nested","isNested")),void 0!==e.always_show_resize_handle&&(e.alwaysShowResizeHandle=e.always_show_resize_handle,f("always_show_resize_handle","alwaysShowResizeHandle")),e.itemClass=e.itemClass||"grid-stack-item";var k=this.container.closest("."+e.itemClass).length>0;if(this.opts=b.defaults(e||{},{width:parseInt(this.container.attr("data-gs-width"))||12,height:parseInt(this.container.attr("data-gs-height"))||0,itemClass:"grid-stack-item",placeholderClass:"grid-stack-placeholder",placeholderText:"",handle:".grid-stack-item-content",handleClass:null,cellHeight:60,verticalMargin:20,auto:!0,minWidth:768,float:!1,staticGrid:!1,_class:"grid-stack-instance-"+(1e4*Math.random()).toFixed(0),animate:Boolean(this.container.attr("data-gs-animate"))||!1,alwaysShowResizeHandle:e.alwaysShowResizeHandle||!1,resizable:b.defaults(e.resizable||{},{autoHide:!e.alwaysShowResizeHandle,handles:"se"}),draggable:b.defaults(e.draggable||{},{handle:(e.handleClass?"."+e.handleClass:e.handle?e.handle:"")||".grid-stack-item-content",scroll:!1,appendTo:"body"}),disableDrag:e.disableDrag||!1,disableResize:e.disableResize||!1,rtl:"auto",removable:!1,removeTimeout:2e3,verticalMarginUnit:"px",cellHeightUnit:"px",disableOneColumnMode:e.disableOneColumnMode||!1,oneColumnModeClass:e.oneColumnModeClass||"grid-stack-one-column-mode",ddPlugin:null}),!1===this.opts.ddPlugin?this.opts.ddPlugin=c:null===this.opts.ddPlugin&&(this.opts.ddPlugin=b.first(c.registeredPlugins)||c),this.dd=new this.opts.ddPlugin(this),"auto"===this.opts.rtl&&(this.opts.rtl="rtl"===this.container.css("direction")),this.opts.rtl&&this.container.addClass("grid-stack-rtl"),this.opts.isNested=k,h="auto"===this.opts.cellHeight,h?j.cellHeight(j.cellWidth(),!0):this.cellHeight(this.opts.cellHeight,!0),this.verticalMargin(this.opts.verticalMargin,!0),this.container.addClass(this.opts._class),this._setStaticClass(),k&&this.container.addClass("grid-stack-nested"),this._initStyles(),this.grid=new i(this.opts.width,function(a,c){c=void 0===c||c;var d=0;b.each(a,function(a){c&&null===a._id?a.el&&a.el.remove():(a.el.attr("data-gs-x",a.x).attr("data-gs-y",a.y).attr("data-gs-width",a.width).attr("data-gs-height",a.height),d=Math.max(d,a.y+a.height))}),j._updateStyles(d+10)},this.opts.float,this.opts.height),this.opts.auto){var l=[],m=this;this.container.children("."+this.opts.itemClass+":not(."+this.opts.placeholderClass+")").each(function(b,c){c=a(c),l.push({el:c,i:parseInt(c.attr("data-gs-x"))+parseInt(c.attr("data-gs-y"))*m.opts.width})}),b.chain(l).sortBy(function(a){return a.i}).each(function(a){j._prepareElement(a.el)}).value()}if(this.setAnimation(this.opts.animate),this.placeholder=a('<div class="'+this.opts.placeholderClass+" "+this.opts.itemClass+'"><div class="placeholder-content">'+this.opts.placeholderText+"</div></div>").hide(),this._updateContainerHeight(),this._updateHeightsOnResize=b.throttle(function(){j.cellHeight(j.cellWidth(),!1)},100),this.onResizeHandler=function(){if(h&&j._updateHeightsOnResize(),j._isOneColumnMode()&&!j.opts.disableOneColumnMode){if(g)return;j.container.addClass(j.opts.oneColumnModeClass),g=!0,j.grid._sortNodes(),b.each(j.grid.nodes,function(a){j.container.append(a.el),j.opts.staticGrid||(j.dd.draggable(a.el,"disable"),j.dd.resizable(a.el,"disable"),a.el.trigger("resize"))})}else{if(!g)return;if(j.container.removeClass(j.opts.oneColumnModeClass),g=!1,j.opts.staticGrid)return;b.each(j.grid.nodes,function(a){a.noMove||j.opts.disableDrag||j.dd.draggable(a.el,"enable"),a.noResize||j.opts.disableResize||j.dd.resizable(a.el,"enable"),a.el.trigger("resize")})}},a(window).resize(this.onResizeHandler),this.onResizeHandler(),!j.opts.staticGrid&&"string"==typeof j.opts.removable){var n=a(j.opts.removable);this.dd.isDroppable(n)||this.dd.droppable(n,{accept:"."+j.opts.itemClass}),this.dd.on(n,"dropover",function(b,c){var d=a(c.draggable);d.data("_gridstack_node")._grid===j&&j._setupRemovingTimeout(d)}).on(n,"dropout",function(b,c){var d=a(c.draggable);d.data("_gridstack_node")._grid===j&&j._clearRemovingTimeout(d)})}if(!j.opts.staticGrid&&j.opts.acceptWidgets){var o=null,p=function(a,b){var c=o,d=c.data("_gridstack_node"),e=j.getCellFromPixel(b.offset,!0),f=Math.max(0,e.x),g=Math.max(0,e.y);if(d._added){if(!j.grid.canMoveNode(d,f,g))return;j.grid.moveNode(d,f,g),j._updateContainerHeight()}else d._added=!0,d.el=c,d.x=f,d.y=g,j.grid.cleanNodes(),j.grid.beginUpdate(d),j.grid.addNode(d),j.container.append(j.placeholder),j.placeholder.attr("data-gs-x",d.x).attr("data-gs-y",d.y).attr("data-gs-width",d.width).attr("data-gs-height",d.height).show(),d.el=j.placeholder,d._beforeDragX=d.x,d._beforeDragY=d.y,j._updateContainerHeight()};this.dd.droppable(j.container,{accept:function(b){b=a(b);var c=b.data("_gridstack_node");return(!c||c._grid!==j)&&b.is(!0===j.opts.acceptWidgets?".grid-stack-item":j.opts.acceptWidgets)}}).on(j.container,"dropover",function(b,c){var d=(j.container.offset(),a(c.draggable)),e=j.cellWidth(),f=j.cellHeight(),g=d.data("_gridstack_node"),h=g?g.width:Math.ceil(d.outerWidth()/e),i=g?g.height:Math.ceil(d.outerHeight()/f);o=d;var k=j.grid._prepareNode({width:h,height:i,_added:!1,_temporary:!0});d.data("_gridstack_node",k),d.data("_gridstack_node_orig",g),d.on("drag",p)}).on(j.container,"dropout",function(b,c){var d=a(c.draggable);d.unbind("drag",p);var e=d.data("_gridstack_node");e.el=null,j.grid.removeNode(e),j.placeholder.detach(),j._updateContainerHeight(),d.data("_gridstack_node",d.data("_gridstack_node_orig"))}).on(j.container,"drop",function(b,c){j.placeholder.detach();var d=a(c.draggable).data("_gridstack_node");d._grid=j;var e=a(c.draggable).clone(!1);e.data("_gridstack_node",d);var f=a(c.draggable).data("_gridstack_node_orig");void 0!==f&&f._grid._triggerRemoveEvent(),a(c.draggable).remove(),d.el=e,j.placeholder.hide(),e.attr("data-gs-x",d.x).attr("data-gs-y",d.y).attr("data-gs-width",d.width).attr("data-gs-height",d.height).addClass(j.opts.itemClass).removeAttr("style").enableSelection().removeData("draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled").unbind("drag",p),j.container.append(e),j._prepareElementsByNode(e,d),j._updateContainerHeight(),j.grid._addedNodes.push(d),j._triggerAddEvent(),j._triggerChangeEvent(),j.grid.endUpdate()})}};return j.prototype._triggerChangeEvent=function(a){var b=this.grid.getDirtyNodes(),c=!1,d=[];b&&b.length&&(d.push(b),c=!0),(c||!0===a)&&this.container.trigger("change",d)},j.prototype._triggerAddEvent=function(){this.grid._addedNodes&&this.grid._addedNodes.length>0&&(this.container.trigger("added",[b.map(this.grid._addedNodes,b.clone)]),this.grid._addedNodes=[])},j.prototype._triggerRemoveEvent=function(){this.grid._removedNodes&&this.grid._removedNodes.length>0&&(this.container.trigger("removed",[b.map(this.grid._removedNodes,b.clone)]),this.grid._removedNodes=[])},j.prototype._initStyles=function(){this._stylesId&&g.removeStylesheet(this._stylesId),this._stylesId="gridstack-style-"+(1e5*Math.random()).toFixed(),this._styles=g.createStylesheet(this._stylesId),null!==this._styles&&(this._styles._max=0)},j.prototype._updateStyles=function(a){if(null!==this._styles&&void 0!==this._styles){var b,c="."+this.opts._class+" ."+this.opts.itemClass,d=this;if(void 0===a&&(a=this._styles._max),this._initStyles(),this._updateContainerHeight(),this.opts.cellHeight&&!(0!==this._styles._max&&a<=this._styles._max)&&(b=this.opts.verticalMargin&&this.opts.cellHeightUnit!==this.opts.verticalMarginUnit?function(a,b){return a&&b?"calc("+(d.opts.cellHeight*a+d.opts.cellHeightUnit)+" + "+(d.opts.verticalMargin*b+d.opts.verticalMarginUnit)+")":d.opts.cellHeight*a+d.opts.verticalMargin*b+d.opts.cellHeightUnit}:function(a,b){return d.opts.cellHeight*a+d.opts.verticalMargin*b+d.opts.cellHeightUnit},0===this._styles._max&&g.insertCSSRule(this._styles,c,"min-height: "+b(1,0)+";",0),a>this._styles._max)){for(var e=this._styles._max;e<a;++e)g.insertCSSRule(this._styles,c+'[data-gs-height="'+(e+1)+'"]',"height: "+b(e+1,e)+";",e),g.insertCSSRule(this._styles,c+'[data-gs-min-height="'+(e+1)+'"]',"min-height: "+b(e+1,e)+";",e),g.insertCSSRule(this._styles,c+'[data-gs-max-height="'+(e+1)+'"]',"max-height: "+b(e+1,e)+";",e),g.insertCSSRule(this._styles,c+'[data-gs-y="'+e+'"]',"top: "+b(e,e)+";",e);this._styles._max=a}}},j.prototype._updateContainerHeight=function(){if(!this.grid._updateCounter){var a=this.grid.getGridHeight();this.container.attr("data-gs-current-height",a),this.opts.cellHeight&&(this.opts.verticalMargin?this.opts.cellHeightUnit===this.opts.verticalMarginUnit?this.container.css("height",a*(this.opts.cellHeight+this.opts.verticalMargin)-this.opts.verticalMargin+this.opts.cellHeightUnit):this.container.css("height","calc("+(a*this.opts.cellHeight+this.opts.cellHeightUnit)+" + "+(a*(this.opts.verticalMargin-1)+this.opts.verticalMarginUnit)+")"):this.container.css("height",a*this.opts.cellHeight+this.opts.cellHeightUnit))}},j.prototype._isOneColumnMode=function(){return(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)<=this.opts.minWidth},j.prototype._setupRemovingTimeout=function(b){var c=this,d=a(b).data("_gridstack_node");!d._removeTimeout&&c.opts.removable&&(d._removeTimeout=setTimeout(function(){b.addClass("grid-stack-item-removing"),d._isAboutToRemove=!0},c.opts.removeTimeout))},j.prototype._clearRemovingTimeout=function(b){var c=a(b).data("_gridstack_node");c._removeTimeout&&(clearTimeout(c._removeTimeout),c._removeTimeout=null,b.removeClass("grid-stack-item-removing"),c._isAboutToRemove=!1)},j.prototype._prepareElementsByNode=function(b,c){var d,e,f=this,g=function(a,g){var h,i,j=Math.round(g.position.left/d),k=Math.floor((g.position.top+e/2)/e);if("drag"!=a.type&&(h=Math.round(g.size.width/d),i=Math.round(g.size.height/e)),"drag"==a.type)j<0||j>=f.grid.width||k<0||!f.grid.float&&k>f.grid.getGridHeight()?c._temporaryRemoved||(!0===f.opts.removable&&f._setupRemovingTimeout(b),j=c._beforeDragX,k=c._beforeDragY,f.placeholder.detach(),f.placeholder.hide(),f.grid.removeNode(c),f._updateContainerHeight(),c._temporaryRemoved=!0):(f._clearRemovingTimeout(b),c._temporaryRemoved&&(f.grid.addNode(c),f.placeholder.attr("data-gs-x",j).attr("data-gs-y",k).attr("data-gs-width",h).attr("data-gs-height",i).show(),f.container.append(f.placeholder),c.el=f.placeholder,c._temporaryRemoved=!1));else if("resize"==a.type&&j<0)return;var l=void 0!==h?h:c.lastTriedWidth,m=void 0!==i?i:c.lastTriedHeight;!f.grid.canMoveNode(c,j,k,h,i)||c.lastTriedX===j&&c.lastTriedY===k&&c.lastTriedWidth===l&&c.lastTriedHeight===m||(c.lastTriedX=j,c.lastTriedY=k,c.lastTriedWidth=h,c.lastTriedHeight=i,f.grid.moveNode(c,j,k,h,i),f._updateContainerHeight())},h=function(g,h){f.container.append(f.placeholder);var i=a(this);f.grid.cleanNodes(),f.grid.beginUpdate(c),d=f.cellWidth();var j=Math.ceil(i.outerHeight()/i.attr("data-gs-height"));e=f.container.height()/parseInt(f.container.attr("data-gs-current-height")),f.placeholder.attr("data-gs-x",i.attr("data-gs-x")).attr("data-gs-y",i.attr("data-gs-y")).attr("data-gs-width",i.attr("data-gs-width")).attr("data-gs-height",i.attr("data-gs-height")).show(),c.el=f.placeholder,c._beforeDragX=c.x,c._beforeDragY=c.y,f.dd.resizable(b,"option","minWidth",d*(c.minWidth||1)),f.dd.resizable(b,"option","minHeight",j*(c.minHeight||1)),"resizestart"==g.type&&i.find(".grid-stack-item").trigger("resizestart")},i=function(d,e){var g=a(this);if(g.data("_gridstack_node")){var h=!1;if(f.placeholder.detach(),c.el=g,f.placeholder.hide(),c._isAboutToRemove){h=!0;b.data("_gridstack_node")._grid._triggerRemoveEvent(),b.removeData("_gridstack_node"),b.remove()}else f._clearRemovingTimeout(b),c._temporaryRemoved?(g.attr("data-gs-x",c._beforeDragX).attr("data-gs-y",c._beforeDragY).attr("data-gs-width",c.width).attr("data-gs-height",c.height).removeAttr("style"),c.x=c._beforeDragX,c.y=c._beforeDragY,f.grid.addNode(c)):g.attr("data-gs-x",c.x).attr("data-gs-y",c.y).attr("data-gs-width",c.width).attr("data-gs-height",c.height).removeAttr("style");f._updateContainerHeight(),f._triggerChangeEvent(h),f.grid.endUpdate();var i=g.find(".grid-stack");i.length&&"resizestop"==d.type&&(i.each(function(b,c){a(c).data("gridstack").onResizeHandler()}),g.find(".grid-stack-item").trigger("resizestop"),g.find(".grid-stack-item").trigger("gsresizestop")),"resizestop"==d.type&&f.container.trigger("gsresizestop",g)}};this.dd.draggable(b,{start:h,stop:i,drag:g}).resizable(b,{start:h,stop:i,resize:g}),(c.noMove||this._isOneColumnMode()&&!f.opts.disableOneColumnMode||this.opts.disableDrag)&&this.dd.draggable(b,"disable"),(c.noResize||this._isOneColumnMode()&&!f.opts.disableOneColumnMode||this.opts.disableResize)&&this.dd.resizable(b,"disable"),b.attr("data-gs-locked",c.locked?"yes":null)},j.prototype._prepareElement=function(b,c){c=void 0!==c&&c;var d=this;b=a(b),b.addClass(this.opts.itemClass);var e=d.grid.addNode({x:b.attr("data-gs-x"),y:b.attr("data-gs-y"),width:b.attr("data-gs-width"),height:b.attr("data-gs-height"),maxWidth:b.attr("data-gs-max-width"),minWidth:b.attr("data-gs-min-width"),maxHeight:b.attr("data-gs-max-height"),minHeight:b.attr("data-gs-min-height"),autoPosition:g.toBool(b.attr("data-gs-auto-position")),noResize:g.toBool(b.attr("data-gs-no-resize")),noMove:g.toBool(b.attr("data-gs-no-move")),locked:g.toBool(b.attr("data-gs-locked")),el:b,id:b.attr("data-gs-id"),_grid:d},c);b.data("_gridstack_node",e),this._prepareElementsByNode(b,e)},j.prototype.setAnimation=function(a){a?this.container.addClass("grid-stack-animate"):this.container.removeClass("grid-stack-animate")},j.prototype.addWidget=function(b,c,d,e,f,g,h,i,j,k,l){return b=a(b),void 0!==c&&b.attr("data-gs-x",c),void 0!==d&&b.attr("data-gs-y",d),void 0!==e&&b.attr("data-gs-width",e),void 0!==f&&b.attr("data-gs-height",f),void 0!==g&&b.attr("data-gs-auto-position",g?"yes":null),void 0!==h&&b.attr("data-gs-min-width",h),void 0!==i&&b.attr("data-gs-max-width",i),void 0!==j&&b.attr("data-gs-min-height",j),void 0!==k&&b.attr("data-gs-max-height",k),void 0!==l&&b.attr("data-gs-id",l),this.container.append(b),this._prepareElement(b,!0),this._triggerAddEvent(),this._updateContainerHeight(),this._triggerChangeEvent(!0),b},j.prototype.makeWidget=function(b){return b=a(b),this._prepareElement(b,!0),this._triggerAddEvent(),this._updateContainerHeight(),this._triggerChangeEvent(!0),b},j.prototype.willItFit=function(a,b,c,d,e){var f={x:a,y:b,width:c,height:d,autoPosition:e};return this.grid.canBePlacedWithRespectToHeight(f)},j.prototype.removeWidget=function(b,c){c=void 0===c||c,b=a(b);var d=b.data("_gridstack_node");d||(d=this.grid.getNodeDataByDOMEl(b)),this.grid.removeNode(d,c),b.removeData("_gridstack_node"),this._updateContainerHeight(),c&&b.remove(),this._triggerChangeEvent(!0),this._triggerRemoveEvent()},j.prototype.removeAll=function(a){b.each(this.grid.nodes,b.bind(function(b){this.removeWidget(b.el,a)},this)),this.grid.nodes=[],this._updateContainerHeight()},j.prototype.destroy=function(b){a(window).off("resize",this.onResizeHandler),this.disable(),void 0===b||b?this.container.remove():(this.removeAll(!1),this.container.removeData("gridstack")),g.removeStylesheet(this._stylesId),this.grid&&(this.grid=null)},j.prototype.resizable=function(b,c){var d=this;return b=a(b),b.each(function(b,e){e=a(e);var f=e.data("_gridstack_node");void 0!==f&&null!==f&&(f.noResize=!c,f.noResize||d._isOneColumnMode()&&!d.opts.disableOneColumnMode?d.dd.resizable(e,"disable"):d.dd.resizable(e,"enable"))}),this},j.prototype.movable=function(b,c){var d=this;return b=a(b),b.each(function(b,e){e=a(e);var f=e.data("_gridstack_node");void 0!==f&&null!==f&&(f.noMove=!c,f.noMove||d._isOneColumnMode()&&!d.opts.disableOneColumnMode?(d.dd.draggable(e,"disable"),e.removeClass("ui-draggable-handle")):(d.dd.draggable(e,"enable"),e.addClass("ui-draggable-handle")))}),this},j.prototype.enableMove=function(a,b){this.movable(this.container.children("."+this.opts.itemClass),a),b&&(this.opts.disableDrag=!a)},j.prototype.enableResize=function(a,b){this.resizable(this.container.children("."+this.opts.itemClass),a),b&&(this.opts.disableResize=!a)},j.prototype.disable=function(){this.movable(this.container.children("."+this.opts.itemClass),!1),this.resizable(this.container.children("."+this.opts.itemClass),!1),this.container.trigger("disable")},j.prototype.enable=function(){this.movable(this.container.children("."+this.opts.itemClass),!0),this.resizable(this.container.children("."+this.opts.itemClass),!0),this.container.trigger("enable")},j.prototype.locked=function(b,c){return b=a(b),b.each(function(b,d){d=a(d);var e=d.data("_gridstack_node");void 0!==e&&null!==e&&(e.locked=c||!1,d.attr("data-gs-locked",e.locked?"yes":null))}),this},j.prototype.maxHeight=function(b,c){return b=a(b),b.each(function(b,d){d=a(d);var e=d.data("_gridstack_node");void 0!==e&&null!==e&&(isNaN(c)||(e.maxHeight=c||!1,d.attr("data-gs-max-height",c)))}),this},j.prototype.minHeight=function(b,c){return b=a(b),b.each(function(b,d){d=a(d);var e=d.data("_gridstack_node");void 0!==e&&null!==e&&(isNaN(c)||(e.minHeight=c||!1,d.attr("data-gs-min-height",c)))}),this},j.prototype.maxWidth=function(b,c){return b=a(b),b.each(function(b,d){d=a(d);var e=d.data("_gridstack_node");void 0!==e&&null!==e&&(isNaN(c)||(e.maxWidth=c||!1,d.attr("data-gs-max-width",c)))}),this},j.prototype.minWidth=function(b,c){return b=a(b),b.each(function(b,d){d=a(d);var e=d.data("_gridstack_node");void 0!==e&&null!==e&&(isNaN(c)||(e.minWidth=c||!1,d.attr("data-gs-min-width",c)))}),this},j.prototype._updateElement=function(b,c){b=a(b).first();var d=b.data("_gridstack_node");if(void 0!==d&&null!==d){var e=this;e.grid.cleanNodes(),e.grid.beginUpdate(d),c.call(this,b,d),e._updateContainerHeight(),e._triggerChangeEvent(),e.grid.endUpdate()}},j.prototype.resize=function(a,b,c){this._updateElement(a,function(a,d){b=null!==b&&void 0!==b?b:d.width,c=null!==c&&void 0!==c?c:d.height,this.grid.moveNode(d,d.x,d.y,b,c)})},j.prototype.move=function(a,b,c){this._updateElement(a,function(a,d){b=null!==b&&void 0!==b?b:d.x,c=null!==c&&void 0!==c?c:d.y,this.grid.moveNode(d,b,c,d.width,d.height)})},j.prototype.update=function(a,b,c,d,e){this._updateElement(a,function(a,f){b=null!==b&&void 0!==b?b:f.x,c=null!==c&&void 0!==c?c:f.y,d=null!==d&&void 0!==d?d:f.width,e=null!==e&&void 0!==e?e:f.height,this.grid.moveNode(f,b,c,d,e)})},j.prototype.verticalMargin=function(a,b){if(void 0===a)return this.opts.verticalMargin;var c=g.parseHeight(a);this.opts.verticalMarginUnit===c.unit&&this.opts.height===c.height||(this.opts.verticalMarginUnit=c.unit,this.opts.verticalMargin=c.height,b||this._updateStyles())},j.prototype.cellHeight=function(a,b){if(void 0===a){if(this.opts.cellHeight)return this.opts.cellHeight;var c=this.container.children("."+this.opts.itemClass).first();return Math.ceil(c.outerHeight()/c.attr("data-gs-height"))}var d=g.parseHeight(a);this.opts.cellHeightUnit===d.heightUnit&&this.opts.height===d.height||(this.opts.cellHeightUnit=d.unit,this.opts.cellHeight=d.height,b||this._updateStyles())},j.prototype.cellWidth=function(){return Math.round(this.container.outerWidth()/this.opts.width)},j.prototype.getCellFromPixel=function(a,b){var c=void 0!==b&&b?this.container.offset():this.container.position(),d=a.left-c.left,e=a.top-c.top,f=Math.floor(this.container.width()/this.opts.width),g=Math.floor(this.container.height()/parseInt(this.container.attr("data-gs-current-height")));return{x:Math.floor(d/f),y:Math.floor(e/g)}},j.prototype.batchUpdate=function(){this.grid.batchUpdate()},j.prototype.commit=function(){this.grid.commit(),this._updateContainerHeight()},j.prototype.isAreaEmpty=function(a,b,c,d){return this.grid.isAreaEmpty(a,b,c,d)},j.prototype.setStatic=function(a){this.opts.staticGrid=!0===a,this.enableMove(!a),this.enableResize(!a),this._setStaticClass()},j.prototype._setStaticClass=function(){!0===this.opts.staticGrid?this.container.addClass("grid-stack-static"):this.container.removeClass("grid-stack-static")},j.prototype._updateNodeWidths=function(a,b){this.grid._sortNodes(),this.grid.batchUpdate();for(var c={},d=0;d<this.grid.nodes.length;d++)c=this.grid.nodes[d],this.update(c.el,Math.round(c.x*b/a),void 0,Math.round(c.width*b/a),void 0);this.grid.commit()},j.prototype.setGridWidth=function(a,b){this.container.removeClass("grid-stack-"+this.opts.width),!0!==b&&this._updateNodeWidths(this.opts.width,a),this.opts.width=a,this.grid.width=a,this.container.addClass("grid-stack-"+a)},i.prototype.batch_update=e(i.prototype.batchUpdate),i.prototype._fix_collisions=e(i.prototype._fixCollisions,"_fix_collisions","_fixCollisions"),i.prototype.is_area_empty=e(i.prototype.isAreaEmpty,"is_area_empty","isAreaEmpty"),i.prototype._sort_nodes=e(i.prototype._sortNodes,"_sort_nodes","_sortNodes"),i.prototype._pack_nodes=e(i.prototype._packNodes,"_pack_nodes","_packNodes"),i.prototype._prepare_node=e(i.prototype._prepareNode,"_prepare_node","_prepareNode"),i.prototype.clean_nodes=e(i.prototype.cleanNodes,"clean_nodes","cleanNodes"),i.prototype.get_dirty_nodes=e(i.prototype.getDirtyNodes,"get_dirty_nodes","getDirtyNodes"),i.prototype.add_node=e(i.prototype.addNode,"add_node","addNode, "),i.prototype.remove_node=e(i.prototype.removeNode,"remove_node","removeNode"),i.prototype.can_move_node=e(i.prototype.canMoveNode,"can_move_node","canMoveNode"),i.prototype.move_node=e(i.prototype.moveNode,"move_node","moveNode"),i.prototype.get_grid_height=e(i.prototype.getGridHeight,"get_grid_height","getGridHeight"),i.prototype.begin_update=e(i.prototype.beginUpdate,"begin_update","beginUpdate"),i.prototype.end_update=e(i.prototype.endUpdate,"end_update","endUpdate"),i.prototype.can_be_placed_with_respect_to_height=e(i.prototype.canBePlacedWithRespectToHeight,"can_be_placed_with_respect_to_height","canBePlacedWithRespectToHeight"),j.prototype._trigger_change_event=e(j.prototype._triggerChangeEvent,"_trigger_change_event","_triggerChangeEvent"),j.prototype._init_styles=e(j.prototype._initStyles,"_init_styles","_initStyles"),j.prototype._update_styles=e(j.prototype._updateStyles,"_update_styles","_updateStyles"),j.prototype._update_container_height=e(j.prototype._updateContainerHeight,"_update_container_height","_updateContainerHeight"),j.prototype._is_one_column_mode=e(j.prototype._isOneColumnMode,"_is_one_column_mode","_isOneColumnMode"),j.prototype._prepare_element=e(j.prototype._prepareElement,"_prepare_element","_prepareElement"),j.prototype.set_animation=e(j.prototype.setAnimation,"set_animation","setAnimation"),j.prototype.add_widget=e(j.prototype.addWidget,"add_widget","addWidget"),j.prototype.make_widget=e(j.prototype.makeWidget,"make_widget","makeWidget"),j.prototype.will_it_fit=e(j.prototype.willItFit,"will_it_fit","willItFit"),
j.prototype.remove_widget=e(j.prototype.removeWidget,"remove_widget","removeWidget"),j.prototype.remove_all=e(j.prototype.removeAll,"remove_all","removeAll"),j.prototype.min_height=e(j.prototype.minHeight,"min_height","minHeight"),j.prototype.min_width=e(j.prototype.minWidth,"min_width","minWidth"),j.prototype._update_element=e(j.prototype._updateElement,"_update_element","_updateElement"),j.prototype.cell_height=e(j.prototype.cellHeight,"cell_height","cellHeight"),j.prototype.cell_width=e(j.prototype.cellWidth,"cell_width","cellWidth"),j.prototype.get_cell_from_pixel=e(j.prototype.getCellFromPixel,"get_cell_from_pixel","getCellFromPixel"),j.prototype.batch_update=e(j.prototype.batchUpdate,"batch_update","batchUpdate"),j.prototype.is_area_empty=e(j.prototype.isAreaEmpty,"is_area_empty","isAreaEmpty"),j.prototype.set_static=e(j.prototype.setStatic,"set_static","setStatic"),j.prototype._set_static_class=e(j.prototype._setStaticClass,"_set_static_class","_setStaticClass"),d.GridStackUI=j,d.GridStackUI.Utils=g,d.GridStackUI.Engine=i,d.GridStackUI.GridStackDragDropPlugin=c,a.fn.gridstack=function(b){return this.each(function(){var c=a(this);c.data("gridstack")||c.data("gridstack",new j(this,b))})},d.GridStackUI}),/**
 * gridstack.js 0.3.0
 * http://troolee.github.io/gridstack.js/
 * (c) 2014-2016 Pavel Reznikov, Dylan Weiss
 * gridstack.js may be freely distributed under the MIT license.
 * @preserve
*/
function(a){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__("7t+N"),__webpack_require__("M4fF"),__webpack_require__("zlUE"),__webpack_require__("3eNs"),__webpack_require__("nYWQ"),__webpack_require__("taAx"),__webpack_require__("vfPe"),__webpack_require__("zkIY"),__webpack_require__("WLoA"),__webpack_require__("HPGu"),__webpack_require__("3PBz"),__webpack_require__("zUl4"),__webpack_require__("Nnp9"),__webpack_require__("ne1m"),__webpack_require__("Rl6D"),__webpack_require__("mB2l"),__webpack_require__("DYUE"),__webpack_require__("UZ9c"),__webpack_require__("z1kw"),__webpack_require__("9V2q"),__webpack_require__("F8S1"),__webpack_require__("r8HW"),__webpack_require__("mKWO")], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if("undefined"!=typeof exports){try{jQuery=require("jquery")}catch(a){}try{_=require("lodash")}catch(a){}try{GridStackUI=require("gridstack")}catch(a){}a(jQuery,_,GridStackUI)}else a(jQuery,_,GridStackUI)}(function(a,b,c){function d(a){c.GridStackDragDropPlugin.call(this,a)}window;return c.GridStackDragDropPlugin.registerPlugin(d),d.prototype=Object.create(c.GridStackDragDropPlugin.prototype),d.prototype.constructor=d,d.prototype.resizable=function(c,d){if(c=a(c),"disable"===d||"enable"===d)c.resizable(d);else if("option"===d){var e=arguments[2],f=arguments[3];c.resizable(d,e,f)}else c.resizable(b.extend({},this.grid.opts.resizable,{start:d.start||function(){},stop:d.stop||function(){},resize:d.resize||function(){}}));return this},d.prototype.draggable=function(c,d){return c=a(c),"disable"===d||"enable"===d?c.draggable(d):c.draggable(b.extend({},this.grid.opts.draggable,{containment:this.grid.opts.isNested?this.grid.container.parent():null,start:d.start||function(){},stop:d.stop||function(){},drag:d.drag||function(){}})),this},d.prototype.droppable=function(b,c){return b=a(b),"disable"===c||"enable"===c?b.droppable(c):b.droppable({accept:c.accept}),this},d.prototype.isDroppable=function(b,c){return b=a(b),Boolean(b.data("droppable"))},d.prototype.on=function(b,c,d){return a(b).on(c,d),this},d});


/***/ }),

/***/ "Yruw":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("ZXs4")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, MyWorkspaceModel_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MyWorkSpaceScript;
    (function (MyWorkSpaceScript) {
        var MyWorkSpaceController = /** @class */ (function () {
            function MyWorkSpaceController(_widgets) {
                var _this = this;
                this.tileInfo = ko.observableArray([]);
                this.widgets = ko.observableArray([]);
                this.widgetData = ko.observable(null);
                this.tileData = null;
                this.thing = ko.observable('');
                this.Tile_Hover = function (tileInfo) {
                    console.log("on tile hover of tileid:" + tileInfo.tileId());
                    $(".smart-menu").hover(function () {
                        $('#smart-menu-' + tileInfo.tileId()).toggleClass('hidden');
                    });
                };
                this.loadjscssfile = function (filename, filetype) {
                    if (filetype == "js")
                        _this.loadJS(filename);
                    if (filetype == "css")
                        _this.loadCSS(filename);
                };
                this.loadCSS = function (href) {
                    var cssLink = $("<link rel='stylesheet' type='text/css' href='" + href + "'>");
                    $("head").append(cssLink);
                };
                this.loadJS = function (src) {
                    //$.ajax({
                    //    url: src,
                    //    dataType: 'script',
                    //    beforeSend: function (xhr) { xhr.setRequestHeader('Ocp-Apim-Subscription-Key', 'd002f0985c3242dbbd1fe73eb97aff3e'); },
                    //    cache: false,
                    //    success: function (data) {
                    //        console.log('loaded scripts for ')
                    //    },
                    //    error: function () {
                    //        alert("error");
                    //    }
                    //});
                    var jsLink = $("<script type='text/javascript' src='" + src + "'>");
                    $("head").append(jsLink);
                };
                this.checkloadjscssfile = function (filename, filetype) {
                    var filesadded = ""; //list of files already added
                    if (filesadded.indexOf("[" + filename + "]") == -1) {
                        _this.loadjscssfile(filename, filetype);
                        filesadded += "[" + filename + "]"; //List of files added in the form "[filename1],[filename2],etc"
                    }
                    else
                        console.log("file already added!");
                };
                this.setDelay = function (i) {
                    setTimeout(function () {
                        console.log("Delay:" + i);
                        kendo.ui.progress($(".grid-stack-item-content"), false);
                    }, 5000);
                };
                this.GetTileData = function (tileId) {
                    var self = _this;
                    var tileDataObj = new MyWorkspaceModel_1.WidgetsData(tileId, '', '');
                    //tileDataObj.TileId = tileId;
                    // console.log("Value passed to this fun:" + tileId)
                    if (tileId === null || tileId == undefined)
                        return;
                    var data = ko.toJS(tileDataObj);
                    //  console.log(ko.toJS(self.tileInfo()));
                    // self.setDelay(tileId);
                    //  kendo.ui.progress($("#tile-content_" + tileId), true);
                    var myTrigger;
                    NProgress.start();
                    $.ajax({
                        type: 'POST',
                        url: "/Home/GetAPITileData/",
                        data: data,
                        beforeSend: function (xhr) {
                            myTrigger = setInterval(function () {
                                NProgress.inc();
                            }, 400);
                        },
                        complete: function () {
                            NProgress.done();
                            clearInterval(myTrigger);
                        },
                        success: function (response) {
                            // console.log("TileID:" + tileId);
                            // console.log(JSON.stringify(response));
                            var data = JSON.stringify(response);
                            //  console.log("updated Data for : " + JSON.stringify(self.tileInfo().filter(x => x.tileId() === tileId).forEach(
                            //     x => console.log(x.y, x.x, x.width, x.height, x.title, x.data))));
                            //  console.log(JSON.stringify(self.tileInfo().filter(x => x.tileId() === tileId)));
                            //   console.log("Lodash Changes:" + JSON.stringify(self.tileInfo()));
                            self.tileInfo().forEach(function (item) {
                                if (item.tileId() === tileId)
                                    item.data(response);
                            });
                        }
                    });
                };
                this.MakeTileDetailsRequest = function (tileInfo) { return __awaiter(_this, void 0, void 0, function () {
                    var e_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, Promise.all([
                                        this.CallScriptPromise(tileInfo.scriptUri(), 'js', tileInfo.tileId()),
                                        this.CallStylePromise(tileInfo.styleUri(), 'css', tileInfo.tileId()),
                                        this.CallDataPromise(tileInfo)
                                    ])];
                            case 1: return [2 /*return*/, _a.sent()];
                            case 2:
                                e_1 = _a.sent();
                                console.log('There was an error loading for this tile' + e_1);
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                }); };
                this.CallScriptPromise = function (url, type, tileId) {
                    try {
                        //this.scriptfilesadded = "" //list of files already added
                        if (_this.Scriptfilesadded.indexOf("[" + url + "]") == -1) {
                            //this.loadjscssfile(url, type)
                            _this.Scriptfilesadded += "[" + url + "]"; //List of files added in the form "[filename1],[filename2],etc"
                            console.log("Loading Javascripts : " + url + "   of type:" + type);
                            return new Promise(function (resolve) {
                                $.ajax({
                                    dataType: 'script',
                                    url: "/Home/GetApiScript/",
                                    data: { 'url': url, 'type': type },
                                    //beforeSend: function () { $("#loading-progress_" + tileId).show(); }, // <Show OverLay
                                    success: function (response) {
                                        console.log('successfully loaded scripts..');
                                        $("#loading-progress_" + tileId).hide();
                                    },
                                });
                            });
                        }
                        else {
                            return new Promise(function (resolve) {
                                console.log("file already added!");
                            });
                        }
                    }
                    catch (e) {
                        console.log("This error happens when loading a data: " + e);
                    }
                };
                this.CallDataPromise = function (tileInfo) {
                    try {
                        return new Promise(function (resolve) {
                            var myTrigger;
                            NProgress.start();
                            $.ajax({
                                type: 'POST',
                                url: "/Home/GetAPITileData/",
                                data: { 'resource': tileInfo.readUri() },
                                beforeSend: function (xhr) {
                                    $("#loading-progress_" + tileInfo.tileId()).show();
                                    myTrigger = setInterval(function () {
                                        NProgress.inc();
                                    }, 400);
                                },
                                complete: function () {
                                    NProgress.done();
                                    clearInterval(myTrigger);
                                    $("#loading-progress_" + tileInfo.tileId()).hide();
                                },
                                success: function (response) {
                                    if (response.Success)
                                        tileInfo.data(response.Message);
                                    else
                                        console.log("Failed to get tile data response or its empty..");
                                }
                            });
                        });
                    }
                    catch (e) {
                        console.log(e);
                    }
                };
                this.CallStylePromise = function (url, type, tileId) {
                    if (_this.Stylefilesadded.indexOf("[" + url + "]") == -1) {
                        //this.loadjscssfile(url, type)
                        _this.Stylefilesadded += "[" + url + "]"; //List of files added in the form "[filename1],[filename2],etc"
                        console.log("Loading styles: " + url + "   of type:" + type);
                        return new Promise(function (resolve) {
                            $.ajax({
                                url: "/Home/GetApiScript/",
                                type: 'GET',
                                dataType: 'html',
                                data: { 'url': url, 'type': type },
                                beforeSend: function () { $("#loading-progress_" + tileId).show(); },
                                success: function (response) {
                                    $("head").append("  <style> " + response + " </style>");
                                },
                                complete: function () { $("#loading-progress_" + tileId).hide(); } //<Hide Overlay
                            });
                        });
                    }
                    else {
                        return new Promise(function (resolve) {
                            console.log("file already added!");
                            //return 'true';
                        });
                    }
                };
                this.EditTile = function (tileInfo) {
                    console.log(JSON.stringify(tileInfo.readUri()) + "is passed for Editing...");
                    try {
                        return new Promise(function (resolve) {
                            var myTrigger;
                            NProgress.start();
                            $.ajax({
                                type: 'POST',
                                url: "/Home/GetAPIEditTileData/",
                                data: { 'resource': tileInfo.editUri() },
                                beforeSend: function (xhr) {
                                    //$("#loading-progress_" + tileInfo.tileId()).show();
                                    myTrigger = setInterval(function () {
                                        NProgress.inc();
                                    }, 400);
                                },
                                complete: function () {
                                    NProgress.done();
                                    clearInterval(myTrigger);
                                    //$("#loading-progress_" + tileInfo.tileId()).hide();
                                },
                                success: function (response) {
                                    if (response.Success) {
                                        tileInfo.data(response.Message);
                                        localStorage.clear();
                                        localStorage.setItem('currentTileId', JSON.stringify(tileInfo.tileId()));
                                    }
                                    else
                                        console.log("Failed to get tile data response or its empty..");
                                }
                            });
                        });
                    }
                    catch (e) {
                        console.log(e);
                    }
                };
                var self = this;
                this.Stylefilesadded = "";
                this.Scriptfilesadded = "";
                // this.tileData = ko.computed(this.GetTileData)
                //ko.mapping.fromJS(this.mywidgets, _widgets);
                // console.log("passed widgets info : " + JSON.stringify(_widgets));
                if (_widgets !== null) {
                    //let test_widget = new widgets(1,1, 4, 4);
                    _widgets.forEach(function (r) {
                        return self.tileInfo.push(new MyWorkspaceModel_1.widgets(r.TileId, r.x, r.y, r.width, r.height, r.TileDesc, r.data, r.ScriptUri, r.StyleUri, r.ReadUri, r.EditUri));
                    });
                    // this.mywidgets.push(test_widget);
                    // console.log("List we have now inside object:" + JSON.stringify(self.tileInfo()))
                    // console.log("number of widgets : " + self.tileInfo().length);
                    //self.ImportsScriptsForTiles();
                    var tile_counter_1 = 0;
                    self.tileInfo().forEach(function (item) {
                        tile_counter_1 = tile_counter_1 + 1;
                        var status = self.MakeTileDetailsRequest(item);
                        console.log(tile_counter_1 + " call to tile :" + status);
                    });
                }
            }
            MyWorkSpaceController.prototype.ImportsScriptsForTiles = function () {
                var _this = this;
                this.tileInfo().forEach(function (item) {
                    _this.checkloadjscssfile(item.scriptUri(), "js");
                    _this.checkloadjscssfile(item.styleUri(), "css");
                });
            };
            return MyWorkSpaceController;
        }());
        MyWorkSpaceScript.MyWorkSpaceController = MyWorkSpaceController;
    })(MyWorkSpaceScript = exports.MyWorkSpaceScript || (exports.MyWorkSpaceScript = {}));
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("7t+N")))

/***/ }),

/***/ "ZXs4":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var widgets = /** @class */ (function () {
        // innerwidgets: KnockoutObservableArray<widgets>;
        function widgets(tileId, x, y, width, height, title, data, scriptUri, styleUri, dataUri, edituri) {
            this.tileId = ko.observable(tileId);
            this.x = ko.observable(x);
            this.y = ko.observable(y);
            this.width = ko.observable(width);
            this.height = ko.observable(height);
            this.auto_position = ko.observable(false);
            this.title = ko.observable(title);
            this.data = ko.observable(data);
            this.scriptUri = ko.observable(scriptUri);
            this.styleUri = ko.observable(styleUri);
            this.readUri = ko.observable(dataUri);
            this.editUri = ko.observable(edituri);
        }
        return widgets;
    }());
    exports.widgets = widgets;
    var WidgetsData = /** @class */ (function () {
        function WidgetsData(tileId, tileData, userId) {
            this.TileId = ko.observable(tileId),
                this.TileData = ko.observable(tileData),
                this.UserId = ko.observable(userId);
        }
        return WidgetsData;
    }());
    exports.WidgetsData = WidgetsData;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "mB2l":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Tabbable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: :tabbable Selector
//>>group: Core
//>>description: Selects elements which can be tabbed to.
//>>docs: http://api.jqueryui.com/tabbable-selector/

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__("7t+N"), __webpack_require__("UZ9c"), __webpack_require__("taAx") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {

return $.extend( $.expr[ ":" ], {
	tabbable: function( element ) {
		var tabIndex = $.attr( element, "tabindex" ),
			hasTabindex = tabIndex != null;
		return ( !hasTabindex || tabIndex >= 0 ) && $.ui.focusable( element, hasTabindex );
	}
} );

} ) );


/***/ }),

/***/ "mKWO":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Resizable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Resizable
//>>group: Interactions
//>>description: Enables resize functionality for any element.
//>>docs: http://api.jqueryui.com/resizable/
//>>demos: http://jqueryui.com/resizable/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/resizable.css
//>>css.theme: ../../themes/base/theme.css

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
			__webpack_require__("7t+N"),
			__webpack_require__("9V2q"),
			__webpack_require__("nYWQ"),
			__webpack_require__("zUl4"),
			__webpack_require__("UZ9c"),
			__webpack_require__("z1kw")
		], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
}( function( $ ) {

$.widget( "ui.resizable", $.ui.mouse, {
	version: "1.12.1",
	widgetEventPrefix: "resize",
	options: {
		alsoResize: false,
		animate: false,
		animateDuration: "slow",
		animateEasing: "swing",
		aspectRatio: false,
		autoHide: false,
		classes: {
			"ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
		},
		containment: false,
		ghost: false,
		grid: false,
		handles: "e,s,se",
		helper: false,
		maxHeight: null,
		maxWidth: null,
		minHeight: 10,
		minWidth: 10,

		// See #7960
		zIndex: 90,

		// Callbacks
		resize: null,
		start: null,
		stop: null
	},

	_num: function( value ) {
		return parseFloat( value ) || 0;
	},

	_isNumber: function( value ) {
		return !isNaN( parseFloat( value ) );
	},

	_hasScroll: function( el, a ) {

		if ( $( el ).css( "overflow" ) === "hidden" ) {
			return false;
		}

		var scroll = ( a && a === "left" ) ? "scrollLeft" : "scrollTop",
			has = false;

		if ( el[ scroll ] > 0 ) {
			return true;
		}

		// TODO: determine which cases actually cause this to happen
		// if the element doesn't have the scroll set, see if it's possible to
		// set the scroll
		el[ scroll ] = 1;
		has = ( el[ scroll ] > 0 );
		el[ scroll ] = 0;
		return has;
	},

	_create: function() {

		var margins,
			o = this.options,
			that = this;
		this._addClass( "ui-resizable" );

		$.extend( this, {
			_aspectRatio: !!( o.aspectRatio ),
			aspectRatio: o.aspectRatio,
			originalElement: this.element,
			_proportionallyResizeElements: [],
			_helper: o.helper || o.ghost || o.animate ? o.helper || "ui-resizable-helper" : null
		} );

		// Wrap the element if it cannot hold child nodes
		if ( this.element[ 0 ].nodeName.match( /^(canvas|textarea|input|select|button|img)$/i ) ) {

			this.element.wrap(
				$( "<div class='ui-wrapper' style='overflow: hidden;'></div>" ).css( {
					position: this.element.css( "position" ),
					width: this.element.outerWidth(),
					height: this.element.outerHeight(),
					top: this.element.css( "top" ),
					left: this.element.css( "left" )
				} )
			);

			this.element = this.element.parent().data(
				"ui-resizable", this.element.resizable( "instance" )
			);

			this.elementIsWrapper = true;

			margins = {
				marginTop: this.originalElement.css( "marginTop" ),
				marginRight: this.originalElement.css( "marginRight" ),
				marginBottom: this.originalElement.css( "marginBottom" ),
				marginLeft: this.originalElement.css( "marginLeft" )
			};

			this.element.css( margins );
			this.originalElement.css( "margin", 0 );

			// support: Safari
			// Prevent Safari textarea resize
			this.originalResizeStyle = this.originalElement.css( "resize" );
			this.originalElement.css( "resize", "none" );

			this._proportionallyResizeElements.push( this.originalElement.css( {
				position: "static",
				zoom: 1,
				display: "block"
			} ) );

			// Support: IE9
			// avoid IE jump (hard set the margin)
			this.originalElement.css( margins );

			this._proportionallyResize();
		}

		this._setupHandles();

		if ( o.autoHide ) {
			$( this.element )
				.on( "mouseenter", function() {
					if ( o.disabled ) {
						return;
					}
					that._removeClass( "ui-resizable-autohide" );
					that._handles.show();
				} )
				.on( "mouseleave", function() {
					if ( o.disabled ) {
						return;
					}
					if ( !that.resizing ) {
						that._addClass( "ui-resizable-autohide" );
						that._handles.hide();
					}
				} );
		}

		this._mouseInit();
	},

	_destroy: function() {

		this._mouseDestroy();

		var wrapper,
			_destroy = function( exp ) {
				$( exp )
					.removeData( "resizable" )
					.removeData( "ui-resizable" )
					.off( ".resizable" )
					.find( ".ui-resizable-handle" )
						.remove();
			};

		// TODO: Unwrap at same DOM position
		if ( this.elementIsWrapper ) {
			_destroy( this.element );
			wrapper = this.element;
			this.originalElement.css( {
				position: wrapper.css( "position" ),
				width: wrapper.outerWidth(),
				height: wrapper.outerHeight(),
				top: wrapper.css( "top" ),
				left: wrapper.css( "left" )
			} ).insertAfter( wrapper );
			wrapper.remove();
		}

		this.originalElement.css( "resize", this.originalResizeStyle );
		_destroy( this.originalElement );

		return this;
	},

	_setOption: function( key, value ) {
		this._super( key, value );

		switch ( key ) {
		case "handles":
			this._removeHandles();
			this._setupHandles();
			break;
		default:
			break;
		}
	},

	_setupHandles: function() {
		var o = this.options, handle, i, n, hname, axis, that = this;
		this.handles = o.handles ||
			( !$( ".ui-resizable-handle", this.element ).length ?
				"e,s,se" : {
					n: ".ui-resizable-n",
					e: ".ui-resizable-e",
					s: ".ui-resizable-s",
					w: ".ui-resizable-w",
					se: ".ui-resizable-se",
					sw: ".ui-resizable-sw",
					ne: ".ui-resizable-ne",
					nw: ".ui-resizable-nw"
				} );

		this._handles = $();
		if ( this.handles.constructor === String ) {

			if ( this.handles === "all" ) {
				this.handles = "n,e,s,w,se,sw,ne,nw";
			}

			n = this.handles.split( "," );
			this.handles = {};

			for ( i = 0; i < n.length; i++ ) {

				handle = $.trim( n[ i ] );
				hname = "ui-resizable-" + handle;
				axis = $( "<div>" );
				this._addClass( axis, "ui-resizable-handle " + hname );

				axis.css( { zIndex: o.zIndex } );

				this.handles[ handle ] = ".ui-resizable-" + handle;
				this.element.append( axis );
			}

		}

		this._renderAxis = function( target ) {

			var i, axis, padPos, padWrapper;

			target = target || this.element;

			for ( i in this.handles ) {

				if ( this.handles[ i ].constructor === String ) {
					this.handles[ i ] = this.element.children( this.handles[ i ] ).first().show();
				} else if ( this.handles[ i ].jquery || this.handles[ i ].nodeType ) {
					this.handles[ i ] = $( this.handles[ i ] );
					this._on( this.handles[ i ], { "mousedown": that._mouseDown } );
				}

				if ( this.elementIsWrapper &&
						this.originalElement[ 0 ]
							.nodeName
							.match( /^(textarea|input|select|button)$/i ) ) {
					axis = $( this.handles[ i ], this.element );

					padWrapper = /sw|ne|nw|se|n|s/.test( i ) ?
						axis.outerHeight() :
						axis.outerWidth();

					padPos = [ "padding",
						/ne|nw|n/.test( i ) ? "Top" :
						/se|sw|s/.test( i ) ? "Bottom" :
						/^e$/.test( i ) ? "Right" : "Left" ].join( "" );

					target.css( padPos, padWrapper );

					this._proportionallyResize();
				}

				this._handles = this._handles.add( this.handles[ i ] );
			}
		};

		// TODO: make renderAxis a prototype function
		this._renderAxis( this.element );

		this._handles = this._handles.add( this.element.find( ".ui-resizable-handle" ) );
		this._handles.disableSelection();

		this._handles.on( "mouseover", function() {
			if ( !that.resizing ) {
				if ( this.className ) {
					axis = this.className.match( /ui-resizable-(se|sw|ne|nw|n|e|s|w)/i );
				}
				that.axis = axis && axis[ 1 ] ? axis[ 1 ] : "se";
			}
		} );

		if ( o.autoHide ) {
			this._handles.hide();
			this._addClass( "ui-resizable-autohide" );
		}
	},

	_removeHandles: function() {
		this._handles.remove();
	},

	_mouseCapture: function( event ) {
		var i, handle,
			capture = false;

		for ( i in this.handles ) {
			handle = $( this.handles[ i ] )[ 0 ];
			if ( handle === event.target || $.contains( handle, event.target ) ) {
				capture = true;
			}
		}

		return !this.options.disabled && capture;
	},

	_mouseStart: function( event ) {

		var curleft, curtop, cursor,
			o = this.options,
			el = this.element;

		this.resizing = true;

		this._renderProxy();

		curleft = this._num( this.helper.css( "left" ) );
		curtop = this._num( this.helper.css( "top" ) );

		if ( o.containment ) {
			curleft += $( o.containment ).scrollLeft() || 0;
			curtop += $( o.containment ).scrollTop() || 0;
		}

		this.offset = this.helper.offset();
		this.position = { left: curleft, top: curtop };

		this.size = this._helper ? {
				width: this.helper.width(),
				height: this.helper.height()
			} : {
				width: el.width(),
				height: el.height()
			};

		this.originalSize = this._helper ? {
				width: el.outerWidth(),
				height: el.outerHeight()
			} : {
				width: el.width(),
				height: el.height()
			};

		this.sizeDiff = {
			width: el.outerWidth() - el.width(),
			height: el.outerHeight() - el.height()
		};

		this.originalPosition = { left: curleft, top: curtop };
		this.originalMousePosition = { left: event.pageX, top: event.pageY };

		this.aspectRatio = ( typeof o.aspectRatio === "number" ) ?
			o.aspectRatio :
			( ( this.originalSize.width / this.originalSize.height ) || 1 );

		cursor = $( ".ui-resizable-" + this.axis ).css( "cursor" );
		$( "body" ).css( "cursor", cursor === "auto" ? this.axis + "-resize" : cursor );

		this._addClass( "ui-resizable-resizing" );
		this._propagate( "start", event );
		return true;
	},

	_mouseDrag: function( event ) {

		var data, props,
			smp = this.originalMousePosition,
			a = this.axis,
			dx = ( event.pageX - smp.left ) || 0,
			dy = ( event.pageY - smp.top ) || 0,
			trigger = this._change[ a ];

		this._updatePrevProperties();

		if ( !trigger ) {
			return false;
		}

		data = trigger.apply( this, [ event, dx, dy ] );

		this._updateVirtualBoundaries( event.shiftKey );
		if ( this._aspectRatio || event.shiftKey ) {
			data = this._updateRatio( data, event );
		}

		data = this._respectSize( data, event );

		this._updateCache( data );

		this._propagate( "resize", event );

		props = this._applyChanges();

		if ( !this._helper && this._proportionallyResizeElements.length ) {
			this._proportionallyResize();
		}

		if ( !$.isEmptyObject( props ) ) {
			this._updatePrevProperties();
			this._trigger( "resize", event, this.ui() );
			this._applyChanges();
		}

		return false;
	},

	_mouseStop: function( event ) {

		this.resizing = false;
		var pr, ista, soffseth, soffsetw, s, left, top,
			o = this.options, that = this;

		if ( this._helper ) {

			pr = this._proportionallyResizeElements;
			ista = pr.length && ( /textarea/i ).test( pr[ 0 ].nodeName );
			soffseth = ista && this._hasScroll( pr[ 0 ], "left" ) ? 0 : that.sizeDiff.height;
			soffsetw = ista ? 0 : that.sizeDiff.width;

			s = {
				width: ( that.helper.width()  - soffsetw ),
				height: ( that.helper.height() - soffseth )
			};
			left = ( parseFloat( that.element.css( "left" ) ) +
				( that.position.left - that.originalPosition.left ) ) || null;
			top = ( parseFloat( that.element.css( "top" ) ) +
				( that.position.top - that.originalPosition.top ) ) || null;

			if ( !o.animate ) {
				this.element.css( $.extend( s, { top: top, left: left } ) );
			}

			that.helper.height( that.size.height );
			that.helper.width( that.size.width );

			if ( this._helper && !o.animate ) {
				this._proportionallyResize();
			}
		}

		$( "body" ).css( "cursor", "auto" );

		this._removeClass( "ui-resizable-resizing" );

		this._propagate( "stop", event );

		if ( this._helper ) {
			this.helper.remove();
		}

		return false;

	},

	_updatePrevProperties: function() {
		this.prevPosition = {
			top: this.position.top,
			left: this.position.left
		};
		this.prevSize = {
			width: this.size.width,
			height: this.size.height
		};
	},

	_applyChanges: function() {
		var props = {};

		if ( this.position.top !== this.prevPosition.top ) {
			props.top = this.position.top + "px";
		}
		if ( this.position.left !== this.prevPosition.left ) {
			props.left = this.position.left + "px";
		}
		if ( this.size.width !== this.prevSize.width ) {
			props.width = this.size.width + "px";
		}
		if ( this.size.height !== this.prevSize.height ) {
			props.height = this.size.height + "px";
		}

		this.helper.css( props );

		return props;
	},

	_updateVirtualBoundaries: function( forceAspectRatio ) {
		var pMinWidth, pMaxWidth, pMinHeight, pMaxHeight, b,
			o = this.options;

		b = {
			minWidth: this._isNumber( o.minWidth ) ? o.minWidth : 0,
			maxWidth: this._isNumber( o.maxWidth ) ? o.maxWidth : Infinity,
			minHeight: this._isNumber( o.minHeight ) ? o.minHeight : 0,
			maxHeight: this._isNumber( o.maxHeight ) ? o.maxHeight : Infinity
		};

		if ( this._aspectRatio || forceAspectRatio ) {
			pMinWidth = b.minHeight * this.aspectRatio;
			pMinHeight = b.minWidth / this.aspectRatio;
			pMaxWidth = b.maxHeight * this.aspectRatio;
			pMaxHeight = b.maxWidth / this.aspectRatio;

			if ( pMinWidth > b.minWidth ) {
				b.minWidth = pMinWidth;
			}
			if ( pMinHeight > b.minHeight ) {
				b.minHeight = pMinHeight;
			}
			if ( pMaxWidth < b.maxWidth ) {
				b.maxWidth = pMaxWidth;
			}
			if ( pMaxHeight < b.maxHeight ) {
				b.maxHeight = pMaxHeight;
			}
		}
		this._vBoundaries = b;
	},

	_updateCache: function( data ) {
		this.offset = this.helper.offset();
		if ( this._isNumber( data.left ) ) {
			this.position.left = data.left;
		}
		if ( this._isNumber( data.top ) ) {
			this.position.top = data.top;
		}
		if ( this._isNumber( data.height ) ) {
			this.size.height = data.height;
		}
		if ( this._isNumber( data.width ) ) {
			this.size.width = data.width;
		}
	},

	_updateRatio: function( data ) {

		var cpos = this.position,
			csize = this.size,
			a = this.axis;

		if ( this._isNumber( data.height ) ) {
			data.width = ( data.height * this.aspectRatio );
		} else if ( this._isNumber( data.width ) ) {
			data.height = ( data.width / this.aspectRatio );
		}

		if ( a === "sw" ) {
			data.left = cpos.left + ( csize.width - data.width );
			data.top = null;
		}
		if ( a === "nw" ) {
			data.top = cpos.top + ( csize.height - data.height );
			data.left = cpos.left + ( csize.width - data.width );
		}

		return data;
	},

	_respectSize: function( data ) {

		var o = this._vBoundaries,
			a = this.axis,
			ismaxw = this._isNumber( data.width ) && o.maxWidth && ( o.maxWidth < data.width ),
			ismaxh = this._isNumber( data.height ) && o.maxHeight && ( o.maxHeight < data.height ),
			isminw = this._isNumber( data.width ) && o.minWidth && ( o.minWidth > data.width ),
			isminh = this._isNumber( data.height ) && o.minHeight && ( o.minHeight > data.height ),
			dw = this.originalPosition.left + this.originalSize.width,
			dh = this.originalPosition.top + this.originalSize.height,
			cw = /sw|nw|w/.test( a ), ch = /nw|ne|n/.test( a );
		if ( isminw ) {
			data.width = o.minWidth;
		}
		if ( isminh ) {
			data.height = o.minHeight;
		}
		if ( ismaxw ) {
			data.width = o.maxWidth;
		}
		if ( ismaxh ) {
			data.height = o.maxHeight;
		}

		if ( isminw && cw ) {
			data.left = dw - o.minWidth;
		}
		if ( ismaxw && cw ) {
			data.left = dw - o.maxWidth;
		}
		if ( isminh && ch ) {
			data.top = dh - o.minHeight;
		}
		if ( ismaxh && ch ) {
			data.top = dh - o.maxHeight;
		}

		// Fixing jump error on top/left - bug #2330
		if ( !data.width && !data.height && !data.left && data.top ) {
			data.top = null;
		} else if ( !data.width && !data.height && !data.top && data.left ) {
			data.left = null;
		}

		return data;
	},

	_getPaddingPlusBorderDimensions: function( element ) {
		var i = 0,
			widths = [],
			borders = [
				element.css( "borderTopWidth" ),
				element.css( "borderRightWidth" ),
				element.css( "borderBottomWidth" ),
				element.css( "borderLeftWidth" )
			],
			paddings = [
				element.css( "paddingTop" ),
				element.css( "paddingRight" ),
				element.css( "paddingBottom" ),
				element.css( "paddingLeft" )
			];

		for ( ; i < 4; i++ ) {
			widths[ i ] = ( parseFloat( borders[ i ] ) || 0 );
			widths[ i ] += ( parseFloat( paddings[ i ] ) || 0 );
		}

		return {
			height: widths[ 0 ] + widths[ 2 ],
			width: widths[ 1 ] + widths[ 3 ]
		};
	},

	_proportionallyResize: function() {

		if ( !this._proportionallyResizeElements.length ) {
			return;
		}

		var prel,
			i = 0,
			element = this.helper || this.element;

		for ( ; i < this._proportionallyResizeElements.length; i++ ) {

			prel = this._proportionallyResizeElements[ i ];

			// TODO: Seems like a bug to cache this.outerDimensions
			// considering that we are in a loop.
			if ( !this.outerDimensions ) {
				this.outerDimensions = this._getPaddingPlusBorderDimensions( prel );
			}

			prel.css( {
				height: ( element.height() - this.outerDimensions.height ) || 0,
				width: ( element.width() - this.outerDimensions.width ) || 0
			} );

		}

	},

	_renderProxy: function() {

		var el = this.element, o = this.options;
		this.elementOffset = el.offset();

		if ( this._helper ) {

			this.helper = this.helper || $( "<div style='overflow:hidden;'></div>" );

			this._addClass( this.helper, this._helper );
			this.helper.css( {
				width: this.element.outerWidth(),
				height: this.element.outerHeight(),
				position: "absolute",
				left: this.elementOffset.left + "px",
				top: this.elementOffset.top + "px",
				zIndex: ++o.zIndex //TODO: Don't modify option
			} );

			this.helper
				.appendTo( "body" )
				.disableSelection();

		} else {
			this.helper = this.element;
		}

	},

	_change: {
		e: function( event, dx ) {
			return { width: this.originalSize.width + dx };
		},
		w: function( event, dx ) {
			var cs = this.originalSize, sp = this.originalPosition;
			return { left: sp.left + dx, width: cs.width - dx };
		},
		n: function( event, dx, dy ) {
			var cs = this.originalSize, sp = this.originalPosition;
			return { top: sp.top + dy, height: cs.height - dy };
		},
		s: function( event, dx, dy ) {
			return { height: this.originalSize.height + dy };
		},
		se: function( event, dx, dy ) {
			return $.extend( this._change.s.apply( this, arguments ),
				this._change.e.apply( this, [ event, dx, dy ] ) );
		},
		sw: function( event, dx, dy ) {
			return $.extend( this._change.s.apply( this, arguments ),
				this._change.w.apply( this, [ event, dx, dy ] ) );
		},
		ne: function( event, dx, dy ) {
			return $.extend( this._change.n.apply( this, arguments ),
				this._change.e.apply( this, [ event, dx, dy ] ) );
		},
		nw: function( event, dx, dy ) {
			return $.extend( this._change.n.apply( this, arguments ),
				this._change.w.apply( this, [ event, dx, dy ] ) );
		}
	},

	_propagate: function( n, event ) {
		$.ui.plugin.call( this, n, [ event, this.ui() ] );
		( n !== "resize" && this._trigger( n, event, this.ui() ) );
	},

	plugins: {},

	ui: function() {
		return {
			originalElement: this.originalElement,
			element: this.element,
			helper: this.helper,
			position: this.position,
			size: this.size,
			originalSize: this.originalSize,
			originalPosition: this.originalPosition
		};
	}

} );

/*
 * Resizable Extensions
 */

$.ui.plugin.add( "resizable", "animate", {

	stop: function( event ) {
		var that = $( this ).resizable( "instance" ),
			o = that.options,
			pr = that._proportionallyResizeElements,
			ista = pr.length && ( /textarea/i ).test( pr[ 0 ].nodeName ),
			soffseth = ista && that._hasScroll( pr[ 0 ], "left" ) ? 0 : that.sizeDiff.height,
			soffsetw = ista ? 0 : that.sizeDiff.width,
			style = {
				width: ( that.size.width - soffsetw ),
				height: ( that.size.height - soffseth )
			},
			left = ( parseFloat( that.element.css( "left" ) ) +
				( that.position.left - that.originalPosition.left ) ) || null,
			top = ( parseFloat( that.element.css( "top" ) ) +
				( that.position.top - that.originalPosition.top ) ) || null;

		that.element.animate(
			$.extend( style, top && left ? { top: top, left: left } : {} ), {
				duration: o.animateDuration,
				easing: o.animateEasing,
				step: function() {

					var data = {
						width: parseFloat( that.element.css( "width" ) ),
						height: parseFloat( that.element.css( "height" ) ),
						top: parseFloat( that.element.css( "top" ) ),
						left: parseFloat( that.element.css( "left" ) )
					};

					if ( pr && pr.length ) {
						$( pr[ 0 ] ).css( { width: data.width, height: data.height } );
					}

					// Propagating resize, and updating values for each animation step
					that._updateCache( data );
					that._propagate( "resize", event );

				}
			}
		);
	}

} );

$.ui.plugin.add( "resizable", "containment", {

	start: function() {
		var element, p, co, ch, cw, width, height,
			that = $( this ).resizable( "instance" ),
			o = that.options,
			el = that.element,
			oc = o.containment,
			ce = ( oc instanceof $ ) ?
				oc.get( 0 ) :
				( /parent/.test( oc ) ) ? el.parent().get( 0 ) : oc;

		if ( !ce ) {
			return;
		}

		that.containerElement = $( ce );

		if ( /document/.test( oc ) || oc === document ) {
			that.containerOffset = {
				left: 0,
				top: 0
			};
			that.containerPosition = {
				left: 0,
				top: 0
			};

			that.parentData = {
				element: $( document ),
				left: 0,
				top: 0,
				width: $( document ).width(),
				height: $( document ).height() || document.body.parentNode.scrollHeight
			};
		} else {
			element = $( ce );
			p = [];
			$( [ "Top", "Right", "Left", "Bottom" ] ).each( function( i, name ) {
				p[ i ] = that._num( element.css( "padding" + name ) );
			} );

			that.containerOffset = element.offset();
			that.containerPosition = element.position();
			that.containerSize = {
				height: ( element.innerHeight() - p[ 3 ] ),
				width: ( element.innerWidth() - p[ 1 ] )
			};

			co = that.containerOffset;
			ch = that.containerSize.height;
			cw = that.containerSize.width;
			width = ( that._hasScroll ( ce, "left" ) ? ce.scrollWidth : cw );
			height = ( that._hasScroll ( ce ) ? ce.scrollHeight : ch ) ;

			that.parentData = {
				element: ce,
				left: co.left,
				top: co.top,
				width: width,
				height: height
			};
		}
	},

	resize: function( event ) {
		var woset, hoset, isParent, isOffsetRelative,
			that = $( this ).resizable( "instance" ),
			o = that.options,
			co = that.containerOffset,
			cp = that.position,
			pRatio = that._aspectRatio || event.shiftKey,
			cop = {
				top: 0,
				left: 0
			},
			ce = that.containerElement,
			continueResize = true;

		if ( ce[ 0 ] !== document && ( /static/ ).test( ce.css( "position" ) ) ) {
			cop = co;
		}

		if ( cp.left < ( that._helper ? co.left : 0 ) ) {
			that.size.width = that.size.width +
				( that._helper ?
					( that.position.left - co.left ) :
					( that.position.left - cop.left ) );

			if ( pRatio ) {
				that.size.height = that.size.width / that.aspectRatio;
				continueResize = false;
			}
			that.position.left = o.helper ? co.left : 0;
		}

		if ( cp.top < ( that._helper ? co.top : 0 ) ) {
			that.size.height = that.size.height +
				( that._helper ?
					( that.position.top - co.top ) :
					that.position.top );

			if ( pRatio ) {
				that.size.width = that.size.height * that.aspectRatio;
				continueResize = false;
			}
			that.position.top = that._helper ? co.top : 0;
		}

		isParent = that.containerElement.get( 0 ) === that.element.parent().get( 0 );
		isOffsetRelative = /relative|absolute/.test( that.containerElement.css( "position" ) );

		if ( isParent && isOffsetRelative ) {
			that.offset.left = that.parentData.left + that.position.left;
			that.offset.top = that.parentData.top + that.position.top;
		} else {
			that.offset.left = that.element.offset().left;
			that.offset.top = that.element.offset().top;
		}

		woset = Math.abs( that.sizeDiff.width +
			( that._helper ?
				that.offset.left - cop.left :
				( that.offset.left - co.left ) ) );

		hoset = Math.abs( that.sizeDiff.height +
			( that._helper ?
				that.offset.top - cop.top :
				( that.offset.top - co.top ) ) );

		if ( woset + that.size.width >= that.parentData.width ) {
			that.size.width = that.parentData.width - woset;
			if ( pRatio ) {
				that.size.height = that.size.width / that.aspectRatio;
				continueResize = false;
			}
		}

		if ( hoset + that.size.height >= that.parentData.height ) {
			that.size.height = that.parentData.height - hoset;
			if ( pRatio ) {
				that.size.width = that.size.height * that.aspectRatio;
				continueResize = false;
			}
		}

		if ( !continueResize ) {
			that.position.left = that.prevPosition.left;
			that.position.top = that.prevPosition.top;
			that.size.width = that.prevSize.width;
			that.size.height = that.prevSize.height;
		}
	},

	stop: function() {
		var that = $( this ).resizable( "instance" ),
			o = that.options,
			co = that.containerOffset,
			cop = that.containerPosition,
			ce = that.containerElement,
			helper = $( that.helper ),
			ho = helper.offset(),
			w = helper.outerWidth() - that.sizeDiff.width,
			h = helper.outerHeight() - that.sizeDiff.height;

		if ( that._helper && !o.animate && ( /relative/ ).test( ce.css( "position" ) ) ) {
			$( this ).css( {
				left: ho.left - cop.left - co.left,
				width: w,
				height: h
			} );
		}

		if ( that._helper && !o.animate && ( /static/ ).test( ce.css( "position" ) ) ) {
			$( this ).css( {
				left: ho.left - cop.left - co.left,
				width: w,
				height: h
			} );
		}
	}
} );

$.ui.plugin.add( "resizable", "alsoResize", {

	start: function() {
		var that = $( this ).resizable( "instance" ),
			o = that.options;

		$( o.alsoResize ).each( function() {
			var el = $( this );
			el.data( "ui-resizable-alsoresize", {
				width: parseFloat( el.width() ), height: parseFloat( el.height() ),
				left: parseFloat( el.css( "left" ) ), top: parseFloat( el.css( "top" ) )
			} );
		} );
	},

	resize: function( event, ui ) {
		var that = $( this ).resizable( "instance" ),
			o = that.options,
			os = that.originalSize,
			op = that.originalPosition,
			delta = {
				height: ( that.size.height - os.height ) || 0,
				width: ( that.size.width - os.width ) || 0,
				top: ( that.position.top - op.top ) || 0,
				left: ( that.position.left - op.left ) || 0
			};

			$( o.alsoResize ).each( function() {
				var el = $( this ), start = $( this ).data( "ui-resizable-alsoresize" ), style = {},
					css = el.parents( ui.originalElement[ 0 ] ).length ?
							[ "width", "height" ] :
							[ "width", "height", "top", "left" ];

				$.each( css, function( i, prop ) {
					var sum = ( start[ prop ] || 0 ) + ( delta[ prop ] || 0 );
					if ( sum && sum >= 0 ) {
						style[ prop ] = sum || null;
					}
				} );

				el.css( style );
			} );
	},

	stop: function() {
		$( this ).removeData( "ui-resizable-alsoresize" );
	}
} );

$.ui.plugin.add( "resizable", "ghost", {

	start: function() {

		var that = $( this ).resizable( "instance" ), cs = that.size;

		that.ghost = that.originalElement.clone();
		that.ghost.css( {
			opacity: 0.25,
			display: "block",
			position: "relative",
			height: cs.height,
			width: cs.width,
			margin: 0,
			left: 0,
			top: 0
		} );

		that._addClass( that.ghost, "ui-resizable-ghost" );

		// DEPRECATED
		// TODO: remove after 1.12
		if ( $.uiBackCompat !== false && typeof that.options.ghost === "string" ) {

			// Ghost option
			that.ghost.addClass( this.options.ghost );
		}

		that.ghost.appendTo( that.helper );

	},

	resize: function() {
		var that = $( this ).resizable( "instance" );
		if ( that.ghost ) {
			that.ghost.css( {
				position: "relative",
				height: that.size.height,
				width: that.size.width
			} );
		}
	},

	stop: function() {
		var that = $( this ).resizable( "instance" );
		if ( that.ghost && that.helper ) {
			that.helper.get( 0 ).removeChild( that.ghost.get( 0 ) );
		}
	}

} );

$.ui.plugin.add( "resizable", "grid", {

	resize: function() {
		var outerDimensions,
			that = $( this ).resizable( "instance" ),
			o = that.options,
			cs = that.size,
			os = that.originalSize,
			op = that.originalPosition,
			a = that.axis,
			grid = typeof o.grid === "number" ? [ o.grid, o.grid ] : o.grid,
			gridX = ( grid[ 0 ] || 1 ),
			gridY = ( grid[ 1 ] || 1 ),
			ox = Math.round( ( cs.width - os.width ) / gridX ) * gridX,
			oy = Math.round( ( cs.height - os.height ) / gridY ) * gridY,
			newWidth = os.width + ox,
			newHeight = os.height + oy,
			isMaxWidth = o.maxWidth && ( o.maxWidth < newWidth ),
			isMaxHeight = o.maxHeight && ( o.maxHeight < newHeight ),
			isMinWidth = o.minWidth && ( o.minWidth > newWidth ),
			isMinHeight = o.minHeight && ( o.minHeight > newHeight );

		o.grid = grid;

		if ( isMinWidth ) {
			newWidth += gridX;
		}
		if ( isMinHeight ) {
			newHeight += gridY;
		}
		if ( isMaxWidth ) {
			newWidth -= gridX;
		}
		if ( isMaxHeight ) {
			newHeight -= gridY;
		}

		if ( /^(se|s|e)$/.test( a ) ) {
			that.size.width = newWidth;
			that.size.height = newHeight;
		} else if ( /^(ne)$/.test( a ) ) {
			that.size.width = newWidth;
			that.size.height = newHeight;
			that.position.top = op.top - oy;
		} else if ( /^(sw)$/.test( a ) ) {
			that.size.width = newWidth;
			that.size.height = newHeight;
			that.position.left = op.left - ox;
		} else {
			if ( newHeight - gridY <= 0 || newWidth - gridX <= 0 ) {
				outerDimensions = that._getPaddingPlusBorderDimensions( this );
			}

			if ( newHeight - gridY > 0 ) {
				that.size.height = newHeight;
				that.position.top = op.top - oy;
			} else {
				newHeight = gridY - outerDimensions.height;
				that.size.height = newHeight;
				that.position.top = op.top + os.height - newHeight;
			}
			if ( newWidth - gridX > 0 ) {
				that.size.width = newWidth;
				that.position.left = op.left - ox;
			} else {
				newWidth = gridX - outerDimensions.width;
				that.size.width = newWidth;
				that.position.left = op.left + os.width - newWidth;
			}
		}
	}

} );

return $.ui.resizable;

} ) );


/***/ }),

/***/ "nYWQ":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Disable Selection 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: disableSelection
//>>group: Core
//>>description: Disable selection of text content within the set of matched elements.
//>>docs: http://api.jqueryui.com/disableSelection/

// This file is deprecated
( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__("7t+N"), __webpack_require__("UZ9c") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {

return $.fn.extend( {
	disableSelection: ( function() {
		var eventType = "onselectstart" in document.createElement( "div" ) ?
			"selectstart" :
			"mousedown";

		return function() {
			return this.on( eventType + ".ui-disableSelection", function( event ) {
				event.preventDefault();
			} );
		};
	} )(),

	enableSelection: function() {
		return this.off( ".ui-disableSelection" );
	}
} );

} ) );


/***/ }),

/***/ "ne1m":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__("7t+N"), __webpack_require__("UZ9c") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {
return $.ui.safeBlur = function( element ) {

	// Support: IE9 - 10 only
	// If the <body> is blurred, IE will switch windows, see #9420
	if ( element && element.nodeName.toLowerCase() !== "body" ) {
		$( element ).trigger( "blur" );
	}
};

} ) );


/***/ }),

/***/ "r8HW":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Droppable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Droppable
//>>group: Interactions
//>>description: Enables drop targets for draggable elements.
//>>docs: http://api.jqueryui.com/droppable/
//>>demos: http://jqueryui.com/droppable/

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
			__webpack_require__("7t+N"),
			__webpack_require__("F8S1"),
			__webpack_require__("9V2q"),
			__webpack_require__("UZ9c"),
			__webpack_require__("z1kw")
		], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
}( function( $ ) {

$.widget( "ui.droppable", {
	version: "1.12.1",
	widgetEventPrefix: "drop",
	options: {
		accept: "*",
		addClasses: true,
		greedy: false,
		scope: "default",
		tolerance: "intersect",

		// Callbacks
		activate: null,
		deactivate: null,
		drop: null,
		out: null,
		over: null
	},
	_create: function() {

		var proportions,
			o = this.options,
			accept = o.accept;

		this.isover = false;
		this.isout = true;

		this.accept = $.isFunction( accept ) ? accept : function( d ) {
			return d.is( accept );
		};

		this.proportions = function( /* valueToWrite */ ) {
			if ( arguments.length ) {

				// Store the droppable's proportions
				proportions = arguments[ 0 ];
			} else {

				// Retrieve or derive the droppable's proportions
				return proportions ?
					proportions :
					proportions = {
						width: this.element[ 0 ].offsetWidth,
						height: this.element[ 0 ].offsetHeight
					};
			}
		};

		this._addToManager( o.scope );

		o.addClasses && this._addClass( "ui-droppable" );

	},

	_addToManager: function( scope ) {

		// Add the reference and positions to the manager
		$.ui.ddmanager.droppables[ scope ] = $.ui.ddmanager.droppables[ scope ] || [];
		$.ui.ddmanager.droppables[ scope ].push( this );
	},

	_splice: function( drop ) {
		var i = 0;
		for ( ; i < drop.length; i++ ) {
			if ( drop[ i ] === this ) {
				drop.splice( i, 1 );
			}
		}
	},

	_destroy: function() {
		var drop = $.ui.ddmanager.droppables[ this.options.scope ];

		this._splice( drop );
	},

	_setOption: function( key, value ) {

		if ( key === "accept" ) {
			this.accept = $.isFunction( value ) ? value : function( d ) {
				return d.is( value );
			};
		} else if ( key === "scope" ) {
			var drop = $.ui.ddmanager.droppables[ this.options.scope ];

			this._splice( drop );
			this._addToManager( value );
		}

		this._super( key, value );
	},

	_activate: function( event ) {
		var draggable = $.ui.ddmanager.current;

		this._addActiveClass();
		if ( draggable ) {
			this._trigger( "activate", event, this.ui( draggable ) );
		}
	},

	_deactivate: function( event ) {
		var draggable = $.ui.ddmanager.current;

		this._removeActiveClass();
		if ( draggable ) {
			this._trigger( "deactivate", event, this.ui( draggable ) );
		}
	},

	_over: function( event ) {

		var draggable = $.ui.ddmanager.current;

		// Bail if draggable and droppable are same element
		if ( !draggable || ( draggable.currentItem ||
				draggable.element )[ 0 ] === this.element[ 0 ] ) {
			return;
		}

		if ( this.accept.call( this.element[ 0 ], ( draggable.currentItem ||
				draggable.element ) ) ) {
			this._addHoverClass();
			this._trigger( "over", event, this.ui( draggable ) );
		}

	},

	_out: function( event ) {

		var draggable = $.ui.ddmanager.current;

		// Bail if draggable and droppable are same element
		if ( !draggable || ( draggable.currentItem ||
				draggable.element )[ 0 ] === this.element[ 0 ] ) {
			return;
		}

		if ( this.accept.call( this.element[ 0 ], ( draggable.currentItem ||
				draggable.element ) ) ) {
			this._removeHoverClass();
			this._trigger( "out", event, this.ui( draggable ) );
		}

	},

	_drop: function( event, custom ) {

		var draggable = custom || $.ui.ddmanager.current,
			childrenIntersection = false;

		// Bail if draggable and droppable are same element
		if ( !draggable || ( draggable.currentItem ||
				draggable.element )[ 0 ] === this.element[ 0 ] ) {
			return false;
		}

		this.element
			.find( ":data(ui-droppable)" )
			.not( ".ui-draggable-dragging" )
			.each( function() {
				var inst = $( this ).droppable( "instance" );
				if (
					inst.options.greedy &&
					!inst.options.disabled &&
					inst.options.scope === draggable.options.scope &&
					inst.accept.call(
						inst.element[ 0 ], ( draggable.currentItem || draggable.element )
					) &&
					intersect(
						draggable,
						$.extend( inst, { offset: inst.element.offset() } ),
						inst.options.tolerance, event
					)
				) {
					childrenIntersection = true;
					return false; }
			} );
		if ( childrenIntersection ) {
			return false;
		}

		if ( this.accept.call( this.element[ 0 ],
				( draggable.currentItem || draggable.element ) ) ) {
			this._removeActiveClass();
			this._removeHoverClass();

			this._trigger( "drop", event, this.ui( draggable ) );
			return this.element;
		}

		return false;

	},

	ui: function( c ) {
		return {
			draggable: ( c.currentItem || c.element ),
			helper: c.helper,
			position: c.position,
			offset: c.positionAbs
		};
	},

	// Extension points just to make backcompat sane and avoid duplicating logic
	// TODO: Remove in 1.13 along with call to it below
	_addHoverClass: function() {
		this._addClass( "ui-droppable-hover" );
	},

	_removeHoverClass: function() {
		this._removeClass( "ui-droppable-hover" );
	},

	_addActiveClass: function() {
		this._addClass( "ui-droppable-active" );
	},

	_removeActiveClass: function() {
		this._removeClass( "ui-droppable-active" );
	}
} );

var intersect = $.ui.intersect = ( function() {
	function isOverAxis( x, reference, size ) {
		return ( x >= reference ) && ( x < ( reference + size ) );
	}

	return function( draggable, droppable, toleranceMode, event ) {

		if ( !droppable.offset ) {
			return false;
		}

		var x1 = ( draggable.positionAbs ||
				draggable.position.absolute ).left + draggable.margins.left,
			y1 = ( draggable.positionAbs ||
				draggable.position.absolute ).top + draggable.margins.top,
			x2 = x1 + draggable.helperProportions.width,
			y2 = y1 + draggable.helperProportions.height,
			l = droppable.offset.left,
			t = droppable.offset.top,
			r = l + droppable.proportions().width,
			b = t + droppable.proportions().height;

		switch ( toleranceMode ) {
		case "fit":
			return ( l <= x1 && x2 <= r && t <= y1 && y2 <= b );
		case "intersect":
			return ( l < x1 + ( draggable.helperProportions.width / 2 ) && // Right Half
				x2 - ( draggable.helperProportions.width / 2 ) < r && // Left Half
				t < y1 + ( draggable.helperProportions.height / 2 ) && // Bottom Half
				y2 - ( draggable.helperProportions.height / 2 ) < b ); // Top Half
		case "pointer":
			return isOverAxis( event.pageY, t, droppable.proportions().height ) &&
				isOverAxis( event.pageX, l, droppable.proportions().width );
		case "touch":
			return (
				( y1 >= t && y1 <= b ) || // Top edge touching
				( y2 >= t && y2 <= b ) || // Bottom edge touching
				( y1 < t && y2 > b ) // Surrounded vertically
			) && (
				( x1 >= l && x1 <= r ) || // Left edge touching
				( x2 >= l && x2 <= r ) || // Right edge touching
				( x1 < l && x2 > r ) // Surrounded horizontally
			);
		default:
			return false;
		}
	};
} )();

/*
	This manager tracks offsets of draggables and droppables
*/
$.ui.ddmanager = {
	current: null,
	droppables: { "default": [] },
	prepareOffsets: function( t, event ) {

		var i, j,
			m = $.ui.ddmanager.droppables[ t.options.scope ] || [],
			type = event ? event.type : null, // workaround for #2317
			list = ( t.currentItem || t.element ).find( ":data(ui-droppable)" ).addBack();

		droppablesLoop: for ( i = 0; i < m.length; i++ ) {

			// No disabled and non-accepted
			if ( m[ i ].options.disabled || ( t && !m[ i ].accept.call( m[ i ].element[ 0 ],
					( t.currentItem || t.element ) ) ) ) {
				continue;
			}

			// Filter out elements in the current dragged item
			for ( j = 0; j < list.length; j++ ) {
				if ( list[ j ] === m[ i ].element[ 0 ] ) {
					m[ i ].proportions().height = 0;
					continue droppablesLoop;
				}
			}

			m[ i ].visible = m[ i ].element.css( "display" ) !== "none";
			if ( !m[ i ].visible ) {
				continue;
			}

			// Activate the droppable if used directly from draggables
			if ( type === "mousedown" ) {
				m[ i ]._activate.call( m[ i ], event );
			}

			m[ i ].offset = m[ i ].element.offset();
			m[ i ].proportions( {
				width: m[ i ].element[ 0 ].offsetWidth,
				height: m[ i ].element[ 0 ].offsetHeight
			} );

		}

	},
	drop: function( draggable, event ) {

		var dropped = false;

		// Create a copy of the droppables in case the list changes during the drop (#9116)
		$.each( ( $.ui.ddmanager.droppables[ draggable.options.scope ] || [] ).slice(), function() {

			if ( !this.options ) {
				return;
			}
			if ( !this.options.disabled && this.visible &&
					intersect( draggable, this, this.options.tolerance, event ) ) {
				dropped = this._drop.call( this, event ) || dropped;
			}

			if ( !this.options.disabled && this.visible && this.accept.call( this.element[ 0 ],
					( draggable.currentItem || draggable.element ) ) ) {
				this.isout = true;
				this.isover = false;
				this._deactivate.call( this, event );
			}

		} );
		return dropped;

	},
	dragStart: function( draggable, event ) {

		// Listen for scrolling so that if the dragging causes scrolling the position of the
		// droppables can be recalculated (see #5003)
		draggable.element.parentsUntil( "body" ).on( "scroll.droppable", function() {
			if ( !draggable.options.refreshPositions ) {
				$.ui.ddmanager.prepareOffsets( draggable, event );
			}
		} );
	},
	drag: function( draggable, event ) {

		// If you have a highly dynamic page, you might try this option. It renders positions
		// every time you move the mouse.
		if ( draggable.options.refreshPositions ) {
			$.ui.ddmanager.prepareOffsets( draggable, event );
		}

		// Run through all droppables and check their positions based on specific tolerance options
		$.each( $.ui.ddmanager.droppables[ draggable.options.scope ] || [], function() {

			if ( this.options.disabled || this.greedyChild || !this.visible ) {
				return;
			}

			var parentInstance, scope, parent,
				intersects = intersect( draggable, this, this.options.tolerance, event ),
				c = !intersects && this.isover ?
					"isout" :
					( intersects && !this.isover ? "isover" : null );
			if ( !c ) {
				return;
			}

			if ( this.options.greedy ) {

				// find droppable parents with same scope
				scope = this.options.scope;
				parent = this.element.parents( ":data(ui-droppable)" ).filter( function() {
					return $( this ).droppable( "instance" ).options.scope === scope;
				} );

				if ( parent.length ) {
					parentInstance = $( parent[ 0 ] ).droppable( "instance" );
					parentInstance.greedyChild = ( c === "isover" );
				}
			}

			// We just moved into a greedy child
			if ( parentInstance && c === "isover" ) {
				parentInstance.isover = false;
				parentInstance.isout = true;
				parentInstance._out.call( parentInstance, event );
			}

			this[ c ] = true;
			this[ c === "isout" ? "isover" : "isout" ] = false;
			this[ c === "isover" ? "_over" : "_out" ].call( this, event );

			// We just moved out of a greedy child
			if ( parentInstance && c === "isout" ) {
				parentInstance.isout = false;
				parentInstance.isover = true;
				parentInstance._over.call( parentInstance, event );
			}
		} );

	},
	dragStop: function( draggable, event ) {
		draggable.element.parentsUntil( "body" ).off( "scroll.droppable" );

		// Call prepareOffsets one final time since IE does not fire return scroll events when
		// overflow was caused by drag (see #5003)
		if ( !draggable.options.refreshPositions ) {
			$.ui.ddmanager.prepareOffsets( draggable, event );
		}
	}
};

// DEPRECATED
// TODO: switch return back to widget declaration at top of file when this is removed
if ( $.uiBackCompat !== false ) {

	// Backcompat for activeClass and hoverClass options
	$.widget( "ui.droppable", $.ui.droppable, {
		options: {
			hoverClass: false,
			activeClass: false
		},
		_addActiveClass: function() {
			this._super();
			if ( this.options.activeClass ) {
				this.element.addClass( this.options.activeClass );
			}
		},
		_removeActiveClass: function() {
			this._super();
			if ( this.options.activeClass ) {
				this.element.removeClass( this.options.activeClass );
			}
		},
		_addHoverClass: function() {
			this._super();
			if ( this.options.hoverClass ) {
				this.element.addClass( this.options.hoverClass );
			}
		},
		_removeHoverClass: function() {
			this._super();
			if ( this.options.hoverClass ) {
				this.element.removeClass( this.options.hoverClass );
			}
		}
	} );
}

return $.ui.droppable;

} ) );


/***/ }),

/***/ "taAx":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Focusable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: :focusable Selector
//>>group: Core
//>>description: Selects elements which can be focused.
//>>docs: http://api.jqueryui.com/focusable-selector/

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__("7t+N"), __webpack_require__("UZ9c") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {

// Selectors
$.ui.focusable = function( element, hasTabindex ) {
	var map, mapName, img, focusableIfVisible, fieldset,
		nodeName = element.nodeName.toLowerCase();

	if ( "area" === nodeName ) {
		map = element.parentNode;
		mapName = map.name;
		if ( !element.href || !mapName || map.nodeName.toLowerCase() !== "map" ) {
			return false;
		}
		img = $( "img[usemap='#" + mapName + "']" );
		return img.length > 0 && img.is( ":visible" );
	}

	if ( /^(input|select|textarea|button|object)$/.test( nodeName ) ) {
		focusableIfVisible = !element.disabled;

		if ( focusableIfVisible ) {

			// Form controls within a disabled fieldset are disabled.
			// However, controls within the fieldset's legend do not get disabled.
			// Since controls generally aren't placed inside legends, we skip
			// this portion of the check.
			fieldset = $( element ).closest( "fieldset" )[ 0 ];
			if ( fieldset ) {
				focusableIfVisible = !fieldset.disabled;
			}
		}
	} else if ( "a" === nodeName ) {
		focusableIfVisible = element.href || hasTabindex;
	} else {
		focusableIfVisible = hasTabindex;
	}

	return focusableIfVisible && $( element ).is( ":visible" ) && visible( $( element ) );
};

// Support: IE 8 only
// IE 8 doesn't resolve inherit to visible/hidden for computed values
function visible( element ) {
	var visibility = element.css( "visibility" );
	while ( visibility === "inherit" ) {
		element = element.parent();
		visibility = element.css( "visibility" );
	}
	return visibility !== "hidden";
}

$.extend( $.expr[ ":" ], {
	focusable: function( element ) {
		return $.ui.focusable( element, $.attr( element, "tabindex" ) != null );
	}
} );

return $.ui.focusable;

} ) );


/***/ }),

/***/ "vfPe":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__("7t+N"), __webpack_require__("UZ9c") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {

// Support: IE8 Only
// IE8 does not support the form attribute and when it is supplied. It overwrites the form prop
// with a string, so we need to find the proper form.
return $.fn.form = function() {
	return typeof this[ 0 ].form === "string" ? this.closest( "form" ) : $( this[ 0 ].form );
};

} ) );


/***/ }),

/***/ "z1kw":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Widget 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Widget
//>>group: Core
//>>description: Provides a factory for creating stateful widgets with a common API.
//>>docs: http://api.jqueryui.com/jQuery.widget/
//>>demos: http://jqueryui.com/widget/

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__("7t+N"), __webpack_require__("UZ9c") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
}( function( $ ) {

var widgetUuid = 0;
var widgetSlice = Array.prototype.slice;

$.cleanData = ( function( orig ) {
	return function( elems ) {
		var events, elem, i;
		for ( i = 0; ( elem = elems[ i ] ) != null; i++ ) {
			try {

				// Only trigger remove when necessary to save time
				events = $._data( elem, "events" );
				if ( events && events.remove ) {
					$( elem ).triggerHandler( "remove" );
				}

			// Http://bugs.jquery.com/ticket/8235
			} catch ( e ) {}
		}
		orig( elems );
	};
} )( $.cleanData );

$.widget = function( name, base, prototype ) {
	var existingConstructor, constructor, basePrototype;

	// ProxiedPrototype allows the provided prototype to remain unmodified
	// so that it can be used as a mixin for multiple widgets (#8876)
	var proxiedPrototype = {};

	var namespace = name.split( "." )[ 0 ];
	name = name.split( "." )[ 1 ];
	var fullName = namespace + "-" + name;

	if ( !prototype ) {
		prototype = base;
		base = $.Widget;
	}

	if ( $.isArray( prototype ) ) {
		prototype = $.extend.apply( null, [ {} ].concat( prototype ) );
	}

	// Create selector for plugin
	$.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
		return !!$.data( elem, fullName );
	};

	$[ namespace ] = $[ namespace ] || {};
	existingConstructor = $[ namespace ][ name ];
	constructor = $[ namespace ][ name ] = function( options, element ) {

		// Allow instantiation without "new" keyword
		if ( !this._createWidget ) {
			return new constructor( options, element );
		}

		// Allow instantiation without initializing for simple inheritance
		// must use "new" keyword (the code above always passes args)
		if ( arguments.length ) {
			this._createWidget( options, element );
		}
	};

	// Extend with the existing constructor to carry over any static properties
	$.extend( constructor, existingConstructor, {
		version: prototype.version,

		// Copy the object used to create the prototype in case we need to
		// redefine the widget later
		_proto: $.extend( {}, prototype ),

		// Track widgets that inherit from this widget in case this widget is
		// redefined after a widget inherits from it
		_childConstructors: []
	} );

	basePrototype = new base();

	// We need to make the options hash a property directly on the new instance
	// otherwise we'll modify the options hash on the prototype that we're
	// inheriting from
	basePrototype.options = $.widget.extend( {}, basePrototype.options );
	$.each( prototype, function( prop, value ) {
		if ( !$.isFunction( value ) ) {
			proxiedPrototype[ prop ] = value;
			return;
		}
		proxiedPrototype[ prop ] = ( function() {
			function _super() {
				return base.prototype[ prop ].apply( this, arguments );
			}

			function _superApply( args ) {
				return base.prototype[ prop ].apply( this, args );
			}

			return function() {
				var __super = this._super;
				var __superApply = this._superApply;
				var returnValue;

				this._super = _super;
				this._superApply = _superApply;

				returnValue = value.apply( this, arguments );

				this._super = __super;
				this._superApply = __superApply;

				return returnValue;
			};
		} )();
	} );
	constructor.prototype = $.widget.extend( basePrototype, {

		// TODO: remove support for widgetEventPrefix
		// always use the name + a colon as the prefix, e.g., draggable:start
		// don't prefix for widgets that aren't DOM-based
		widgetEventPrefix: existingConstructor ? ( basePrototype.widgetEventPrefix || name ) : name
	}, proxiedPrototype, {
		constructor: constructor,
		namespace: namespace,
		widgetName: name,
		widgetFullName: fullName
	} );

	// If this widget is being redefined then we need to find all widgets that
	// are inheriting from it and redefine all of them so that they inherit from
	// the new version of this widget. We're essentially trying to replace one
	// level in the prototype chain.
	if ( existingConstructor ) {
		$.each( existingConstructor._childConstructors, function( i, child ) {
			var childPrototype = child.prototype;

			// Redefine the child widget using the same prototype that was
			// originally used, but inherit from the new version of the base
			$.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor,
				child._proto );
		} );

		// Remove the list of existing child constructors from the old constructor
		// so the old child constructors can be garbage collected
		delete existingConstructor._childConstructors;
	} else {
		base._childConstructors.push( constructor );
	}

	$.widget.bridge( name, constructor );

	return constructor;
};

$.widget.extend = function( target ) {
	var input = widgetSlice.call( arguments, 1 );
	var inputIndex = 0;
	var inputLength = input.length;
	var key;
	var value;

	for ( ; inputIndex < inputLength; inputIndex++ ) {
		for ( key in input[ inputIndex ] ) {
			value = input[ inputIndex ][ key ];
			if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {

				// Clone objects
				if ( $.isPlainObject( value ) ) {
					target[ key ] = $.isPlainObject( target[ key ] ) ?
						$.widget.extend( {}, target[ key ], value ) :

						// Don't extend strings, arrays, etc. with objects
						$.widget.extend( {}, value );

				// Copy everything else by reference
				} else {
					target[ key ] = value;
				}
			}
		}
	}
	return target;
};

$.widget.bridge = function( name, object ) {
	var fullName = object.prototype.widgetFullName || name;
	$.fn[ name ] = function( options ) {
		var isMethodCall = typeof options === "string";
		var args = widgetSlice.call( arguments, 1 );
		var returnValue = this;

		if ( isMethodCall ) {

			// If this is an empty collection, we need to have the instance method
			// return undefined instead of the jQuery instance
			if ( !this.length && options === "instance" ) {
				returnValue = undefined;
			} else {
				this.each( function() {
					var methodValue;
					var instance = $.data( this, fullName );

					if ( options === "instance" ) {
						returnValue = instance;
						return false;
					}

					if ( !instance ) {
						return $.error( "cannot call methods on " + name +
							" prior to initialization; " +
							"attempted to call method '" + options + "'" );
					}

					if ( !$.isFunction( instance[ options ] ) || options.charAt( 0 ) === "_" ) {
						return $.error( "no such method '" + options + "' for " + name +
							" widget instance" );
					}

					methodValue = instance[ options ].apply( instance, args );

					if ( methodValue !== instance && methodValue !== undefined ) {
						returnValue = methodValue && methodValue.jquery ?
							returnValue.pushStack( methodValue.get() ) :
							methodValue;
						return false;
					}
				} );
			}
		} else {

			// Allow multiple hashes to be passed on init
			if ( args.length ) {
				options = $.widget.extend.apply( null, [ options ].concat( args ) );
			}

			this.each( function() {
				var instance = $.data( this, fullName );
				if ( instance ) {
					instance.option( options || {} );
					if ( instance._init ) {
						instance._init();
					}
				} else {
					$.data( this, fullName, new object( options, this ) );
				}
			} );
		}

		return returnValue;
	};
};

$.Widget = function( /* options, element */ ) {};
$.Widget._childConstructors = [];

$.Widget.prototype = {
	widgetName: "widget",
	widgetEventPrefix: "",
	defaultElement: "<div>",

	options: {
		classes: {},
		disabled: false,

		// Callbacks
		create: null
	},

	_createWidget: function( options, element ) {
		element = $( element || this.defaultElement || this )[ 0 ];
		this.element = $( element );
		this.uuid = widgetUuid++;
		this.eventNamespace = "." + this.widgetName + this.uuid;

		this.bindings = $();
		this.hoverable = $();
		this.focusable = $();
		this.classesElementLookup = {};

		if ( element !== this ) {
			$.data( element, this.widgetFullName, this );
			this._on( true, this.element, {
				remove: function( event ) {
					if ( event.target === element ) {
						this.destroy();
					}
				}
			} );
			this.document = $( element.style ?

				// Element within the document
				element.ownerDocument :

				// Element is window or document
				element.document || element );
			this.window = $( this.document[ 0 ].defaultView || this.document[ 0 ].parentWindow );
		}

		this.options = $.widget.extend( {},
			this.options,
			this._getCreateOptions(),
			options );

		this._create();

		if ( this.options.disabled ) {
			this._setOptionDisabled( this.options.disabled );
		}

		this._trigger( "create", null, this._getCreateEventData() );
		this._init();
	},

	_getCreateOptions: function() {
		return {};
	},

	_getCreateEventData: $.noop,

	_create: $.noop,

	_init: $.noop,

	destroy: function() {
		var that = this;

		this._destroy();
		$.each( this.classesElementLookup, function( key, value ) {
			that._removeClass( value, key );
		} );

		// We can probably remove the unbind calls in 2.0
		// all event bindings should go through this._on()
		this.element
			.off( this.eventNamespace )
			.removeData( this.widgetFullName );
		this.widget()
			.off( this.eventNamespace )
			.removeAttr( "aria-disabled" );

		// Clean up events and states
		this.bindings.off( this.eventNamespace );
	},

	_destroy: $.noop,

	widget: function() {
		return this.element;
	},

	option: function( key, value ) {
		var options = key;
		var parts;
		var curOption;
		var i;

		if ( arguments.length === 0 ) {

			// Don't return a reference to the internal hash
			return $.widget.extend( {}, this.options );
		}

		if ( typeof key === "string" ) {

			// Handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
			options = {};
			parts = key.split( "." );
			key = parts.shift();
			if ( parts.length ) {
				curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
				for ( i = 0; i < parts.length - 1; i++ ) {
					curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
					curOption = curOption[ parts[ i ] ];
				}
				key = parts.pop();
				if ( arguments.length === 1 ) {
					return curOption[ key ] === undefined ? null : curOption[ key ];
				}
				curOption[ key ] = value;
			} else {
				if ( arguments.length === 1 ) {
					return this.options[ key ] === undefined ? null : this.options[ key ];
				}
				options[ key ] = value;
			}
		}

		this._setOptions( options );

		return this;
	},

	_setOptions: function( options ) {
		var key;

		for ( key in options ) {
			this._setOption( key, options[ key ] );
		}

		return this;
	},

	_setOption: function( key, value ) {
		if ( key === "classes" ) {
			this._setOptionClasses( value );
		}

		this.options[ key ] = value;

		if ( key === "disabled" ) {
			this._setOptionDisabled( value );
		}

		return this;
	},

	_setOptionClasses: function( value ) {
		var classKey, elements, currentElements;

		for ( classKey in value ) {
			currentElements = this.classesElementLookup[ classKey ];
			if ( value[ classKey ] === this.options.classes[ classKey ] ||
					!currentElements ||
					!currentElements.length ) {
				continue;
			}

			// We are doing this to create a new jQuery object because the _removeClass() call
			// on the next line is going to destroy the reference to the current elements being
			// tracked. We need to save a copy of this collection so that we can add the new classes
			// below.
			elements = $( currentElements.get() );
			this._removeClass( currentElements, classKey );

			// We don't use _addClass() here, because that uses this.options.classes
			// for generating the string of classes. We want to use the value passed in from
			// _setOption(), this is the new value of the classes option which was passed to
			// _setOption(). We pass this value directly to _classes().
			elements.addClass( this._classes( {
				element: elements,
				keys: classKey,
				classes: value,
				add: true
			} ) );
		}
	},

	_setOptionDisabled: function( value ) {
		this._toggleClass( this.widget(), this.widgetFullName + "-disabled", null, !!value );

		// If the widget is becoming disabled, then nothing is interactive
		if ( value ) {
			this._removeClass( this.hoverable, null, "ui-state-hover" );
			this._removeClass( this.focusable, null, "ui-state-focus" );
		}
	},

	enable: function() {
		return this._setOptions( { disabled: false } );
	},

	disable: function() {
		return this._setOptions( { disabled: true } );
	},

	_classes: function( options ) {
		var full = [];
		var that = this;

		options = $.extend( {
			element: this.element,
			classes: this.options.classes || {}
		}, options );

		function processClassString( classes, checkOption ) {
			var current, i;
			for ( i = 0; i < classes.length; i++ ) {
				current = that.classesElementLookup[ classes[ i ] ] || $();
				if ( options.add ) {
					current = $( $.unique( current.get().concat( options.element.get() ) ) );
				} else {
					current = $( current.not( options.element ).get() );
				}
				that.classesElementLookup[ classes[ i ] ] = current;
				full.push( classes[ i ] );
				if ( checkOption && options.classes[ classes[ i ] ] ) {
					full.push( options.classes[ classes[ i ] ] );
				}
			}
		}

		this._on( options.element, {
			"remove": "_untrackClassesElement"
		} );

		if ( options.keys ) {
			processClassString( options.keys.match( /\S+/g ) || [], true );
		}
		if ( options.extra ) {
			processClassString( options.extra.match( /\S+/g ) || [] );
		}

		return full.join( " " );
	},

	_untrackClassesElement: function( event ) {
		var that = this;
		$.each( that.classesElementLookup, function( key, value ) {
			if ( $.inArray( event.target, value ) !== -1 ) {
				that.classesElementLookup[ key ] = $( value.not( event.target ).get() );
			}
		} );
	},

	_removeClass: function( element, keys, extra ) {
		return this._toggleClass( element, keys, extra, false );
	},

	_addClass: function( element, keys, extra ) {
		return this._toggleClass( element, keys, extra, true );
	},

	_toggleClass: function( element, keys, extra, add ) {
		add = ( typeof add === "boolean" ) ? add : extra;
		var shift = ( typeof element === "string" || element === null ),
			options = {
				extra: shift ? keys : extra,
				keys: shift ? element : keys,
				element: shift ? this.element : element,
				add: add
			};
		options.element.toggleClass( this._classes( options ), add );
		return this;
	},

	_on: function( suppressDisabledCheck, element, handlers ) {
		var delegateElement;
		var instance = this;

		// No suppressDisabledCheck flag, shuffle arguments
		if ( typeof suppressDisabledCheck !== "boolean" ) {
			handlers = element;
			element = suppressDisabledCheck;
			suppressDisabledCheck = false;
		}

		// No element argument, shuffle and use this.element
		if ( !handlers ) {
			handlers = element;
			element = this.element;
			delegateElement = this.widget();
		} else {
			element = delegateElement = $( element );
			this.bindings = this.bindings.add( element );
		}

		$.each( handlers, function( event, handler ) {
			function handlerProxy() {

				// Allow widgets to customize the disabled handling
				// - disabled as an array instead of boolean
				// - disabled class as method for disabling individual parts
				if ( !suppressDisabledCheck &&
						( instance.options.disabled === true ||
						$( this ).hasClass( "ui-state-disabled" ) ) ) {
					return;
				}
				return ( typeof handler === "string" ? instance[ handler ] : handler )
					.apply( instance, arguments );
			}

			// Copy the guid so direct unbinding works
			if ( typeof handler !== "string" ) {
				handlerProxy.guid = handler.guid =
					handler.guid || handlerProxy.guid || $.guid++;
			}

			var match = event.match( /^([\w:-]*)\s*(.*)$/ );
			var eventName = match[ 1 ] + instance.eventNamespace;
			var selector = match[ 2 ];

			if ( selector ) {
				delegateElement.on( eventName, selector, handlerProxy );
			} else {
				element.on( eventName, handlerProxy );
			}
		} );
	},

	_off: function( element, eventName ) {
		eventName = ( eventName || "" ).split( " " ).join( this.eventNamespace + " " ) +
			this.eventNamespace;
		element.off( eventName ).off( eventName );

		// Clear the stack to avoid memory leaks (#10056)
		this.bindings = $( this.bindings.not( element ).get() );
		this.focusable = $( this.focusable.not( element ).get() );
		this.hoverable = $( this.hoverable.not( element ).get() );
	},

	_delay: function( handler, delay ) {
		function handlerProxy() {
			return ( typeof handler === "string" ? instance[ handler ] : handler )
				.apply( instance, arguments );
		}
		var instance = this;
		return setTimeout( handlerProxy, delay || 0 );
	},

	_hoverable: function( element ) {
		this.hoverable = this.hoverable.add( element );
		this._on( element, {
			mouseenter: function( event ) {
				this._addClass( $( event.currentTarget ), null, "ui-state-hover" );
			},
			mouseleave: function( event ) {
				this._removeClass( $( event.currentTarget ), null, "ui-state-hover" );
			}
		} );
	},

	_focusable: function( element ) {
		this.focusable = this.focusable.add( element );
		this._on( element, {
			focusin: function( event ) {
				this._addClass( $( event.currentTarget ), null, "ui-state-focus" );
			},
			focusout: function( event ) {
				this._removeClass( $( event.currentTarget ), null, "ui-state-focus" );
			}
		} );
	},

	_trigger: function( type, event, data ) {
		var prop, orig;
		var callback = this.options[ type ];

		data = data || {};
		event = $.Event( event );
		event.type = ( type === this.widgetEventPrefix ?
			type :
			this.widgetEventPrefix + type ).toLowerCase();

		// The original event may come from any element
		// so we need to reset the target on the new event
		event.target = this.element[ 0 ];

		// Copy original event properties over to the new event
		orig = event.originalEvent;
		if ( orig ) {
			for ( prop in orig ) {
				if ( !( prop in event ) ) {
					event[ prop ] = orig[ prop ];
				}
			}
		}

		this.element.trigger( event, data );
		return !( $.isFunction( callback ) &&
			callback.apply( this.element[ 0 ], [ event ].concat( data ) ) === false ||
			event.isDefaultPrevented() );
	}
};

$.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
	$.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
		if ( typeof options === "string" ) {
			options = { effect: options };
		}

		var hasOptions;
		var effectName = !options ?
			method :
			options === true || typeof options === "number" ?
				defaultEffect :
				options.effect || defaultEffect;

		options = options || {};
		if ( typeof options === "number" ) {
			options = { duration: options };
		}

		hasOptions = !$.isEmptyObject( options );
		options.complete = callback;

		if ( options.delay ) {
			element.delay( options.delay );
		}

		if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
			element[ method ]( options );
		} else if ( effectName !== method && element[ effectName ] ) {
			element[ effectName ]( options.duration, options.easing, callback );
		} else {
			element.queue( function( next ) {
				$( this )[ method ]();
				if ( callback ) {
					callback.call( element[ 0 ] );
				}
				next();
			} );
		}
	};
} );

return $.widget;

} ) );


/***/ }),

/***/ "zUl4":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__("7t+N"), __webpack_require__("UZ9c") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {

// $.ui.plugin is deprecated. Use $.widget() extensions instead.
return $.ui.plugin = {
	add: function( module, option, set ) {
		var i,
			proto = $.ui[ module ].prototype;
		for ( i in set ) {
			proto.plugins[ i ] = proto.plugins[ i ] || [];
			proto.plugins[ i ].push( [ option, set[ i ] ] );
		}
	},
	call: function( instance, name, args, allowDisconnected ) {
		var i,
			set = instance.plugins[ name ];

		if ( !set ) {
			return;
		}

		if ( !allowDisconnected && ( !instance.element[ 0 ].parentNode ||
				instance.element[ 0 ].parentNode.nodeType === 11 ) ) {
			return;
		}

		for ( i = 0; i < set.length; i++ ) {
			if ( instance.options[ set[ i ][ 0 ] ] ) {
				set[ i ][ 1 ].apply( instance.element, args );
			}
		}
	}
};

} ) );


/***/ }),

/***/ "zkIY":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__("7t+N"), __webpack_require__("UZ9c") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {

// This file is deprecated
return $.ui.ie = !!/msie [\w.]+/.exec( navigator.userAgent.toLowerCase() );
} ) );


/***/ }),

/***/ "zlUE":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * gridstack.js 0.3.0
 * http://troolee.github.io/gridstack.js/
 * (c) 2014-2016 Pavel Reznikov, Dylan Weiss
 * gridstack.js may be freely distributed under the MIT license.
 * @preserve
*/
(function(factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__("7t+N"), __webpack_require__("M4fF")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== 'undefined') {
        try { jQuery = require('jquery'); } catch (e) {}
        try { _ = require('lodash'); } catch (e) {}
        factory(jQuery, _);
    } else {
        factory(jQuery, _);
    }
})(function($, _) {

    var scope = window;

    var obsolete = function(f, oldName, newName) {
        var wrapper = function() {
            console.warn('gridstack.js: Function `' + oldName + '` is deprecated as of v0.2.5 and has been replaced ' +
            'with `' + newName + '`. It will be **completely** removed in v1.0.');
            return f.apply(this, arguments);
        };
        wrapper.prototype = f.prototype;

        return wrapper;
    };

    var obsoleteOpts = function(oldName, newName) {
        console.warn('gridstack.js: Option `' + oldName + '` is deprecated as of v0.2.5 and has been replaced with `' +
            newName + '`. It will be **completely** removed in v1.0.');
    };

    var Utils = {
        isIntercepted: function(a, b) {
            return !(a.x + a.width <= b.x || b.x + b.width <= a.x || a.y + a.height <= b.y || b.y + b.height <= a.y);
        },

        sort: function(nodes, dir, width) {
            width = width || _.chain(nodes).map(function(node) { return node.x + node.width; }).max().value();
            dir = dir != -1 ? 1 : -1;
            return _.sortBy(nodes, function(n) { return dir * (n.x + n.y * width); });
        },

        createStylesheet: function(id) {
            var style = document.createElement('style');
            style.setAttribute('type', 'text/css');
            style.setAttribute('data-gs-style-id', id);
            if (style.styleSheet) {
                style.styleSheet.cssText = '';
            } else {
                style.appendChild(document.createTextNode(''));
            }
            document.getElementsByTagName('head')[0].appendChild(style);
            return style.sheet;
        },

        removeStylesheet: function(id) {
            $('STYLE[data-gs-style-id=' + id + ']').remove();
        },

        insertCSSRule: function(sheet, selector, rules, index) {
            if (typeof sheet.insertRule === 'function') {
                sheet.insertRule(selector + '{' + rules + '}', index);
            } else if (typeof sheet.addRule === 'function') {
                sheet.addRule(selector, rules, index);
            }
        },

        toBool: function(v) {
            if (typeof v == 'boolean') {
                return v;
            }
            if (typeof v == 'string') {
                v = v.toLowerCase();
                return !(v === '' || v == 'no' || v == 'false' || v == '0');
            }
            return Boolean(v);
        },

        _collisionNodeCheck: function(n) {
            return n != this.node && Utils.isIntercepted(n, this.nn);
        },

        _didCollide: function(bn) {
            return Utils.isIntercepted({x: this.n.x, y: this.newY, width: this.n.width, height: this.n.height}, bn);
        },

        _isAddNodeIntercepted: function(n) {
            return Utils.isIntercepted({x: this.x, y: this.y, width: this.node.width, height: this.node.height}, n);
        },

        parseHeight: function(val) {
            var height = val;
            var heightUnit = 'px';
            if (height && _.isString(height)) {
                var match = height.match(/^(-[0-9]+\.[0-9]+|[0-9]*\.[0-9]+|-[0-9]+|[0-9]+)(px|em|rem|vh|vw)?$/);
                if (!match) {
                    throw new Error('Invalid height');
                }
                heightUnit = match[2] || 'px';
                height = parseFloat(match[1]);
            }
            return {height: height, unit: heightUnit};
        }
    };

    // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
    Utils.is_intercepted = obsolete(Utils.isIntercepted, 'is_intercepted', 'isIntercepted');

    Utils.create_stylesheet = obsolete(Utils.createStylesheet, 'create_stylesheet', 'createStylesheet');

    Utils.remove_stylesheet = obsolete(Utils.removeStylesheet, 'remove_stylesheet', 'removeStylesheet');

    Utils.insert_css_rule = obsolete(Utils.insertCSSRule, 'insert_css_rule', 'insertCSSRule');
    // jscs:enable requireCamelCaseOrUpperCaseIdentifiers

    /**
    * @class GridStackDragDropPlugin
    * Base class for drag'n'drop plugin.
    */
    function GridStackDragDropPlugin(grid) {
        this.grid = grid;
    }

    GridStackDragDropPlugin.registeredPlugins = [];

    GridStackDragDropPlugin.registerPlugin = function(pluginClass) {
        GridStackDragDropPlugin.registeredPlugins.push(pluginClass);
    };

    GridStackDragDropPlugin.prototype.resizable = function(el, opts) {
        return this;
    };

    GridStackDragDropPlugin.prototype.draggable = function(el, opts) {
        return this;
    };

    GridStackDragDropPlugin.prototype.droppable = function(el, opts) {
        return this;
    };

    GridStackDragDropPlugin.prototype.isDroppable = function(el) {
        return false;
    };

    GridStackDragDropPlugin.prototype.on = function(el, eventName, callback) {
        return this;
    };


    var idSeq = 0;

    var GridStackEngine = function(width, onchange, floatMode, height, items) {
        this.width = width;
        this.float = floatMode || false;
        this.height = height || 0;

        this.nodes = items || [];
        this.onchange = onchange || function() {};

        this._updateCounter = 0;
        this._float = this.float;

        this._addedNodes = [];
        this._removedNodes = [];
    };

    GridStackEngine.prototype.batchUpdate = function() {
        this._updateCounter = 1;
        this.float = true;
    };

    GridStackEngine.prototype.commit = function() {
        if (this._updateCounter !== 0) {
            this._updateCounter = 0;
            this.float = this._float;
            this._packNodes();
            this._notify();
        }
    };

    // For Meteor support: https://github.com/troolee/gridstack.js/pull/272
    GridStackEngine.prototype.getNodeDataByDOMEl = function(el) {
        return _.find(this.nodes, function(n) { return el.get(0) === n.el.get(0); });
    };

    GridStackEngine.prototype._fixCollisions = function(node) {
        var self = this;
        this._sortNodes(-1);

        var nn = node;
        var hasLocked = Boolean(_.find(this.nodes, function(n) { return n.locked; }));
        if (!this.float && !hasLocked) {
            nn = {x: 0, y: node.y, width: this.width, height: node.height};
        }
        while (true) {
            var collisionNode = _.find(this.nodes, _.bind(Utils._collisionNodeCheck, {node: node, nn: nn}));
            if (typeof collisionNode == 'undefined') {
                return;
            }
            this.moveNode(collisionNode, collisionNode.x, node.y + node.height,
                collisionNode.width, collisionNode.height, true);
        }
    };

    GridStackEngine.prototype.isAreaEmpty = function(x, y, width, height) {
        var nn = {x: x || 0, y: y || 0, width: width || 1, height: height || 1};
        var collisionNode = _.find(this.nodes, _.bind(function(n) {
            return Utils.isIntercepted(n, nn);
        }, this));
        return collisionNode === null || typeof collisionNode === 'undefined';
    };

    GridStackEngine.prototype._sortNodes = function(dir) {
        this.nodes = Utils.sort(this.nodes, dir, this.width);
    };

    GridStackEngine.prototype._packNodes = function() {
        this._sortNodes();

        if (this.float) {
            _.each(this.nodes, _.bind(function(n, i) {
                if (n._updating || typeof n._origY == 'undefined' || n.y == n._origY) {
                    return;
                }

                var newY = n.y;
                while (newY >= n._origY) {
                    var collisionNode = _.chain(this.nodes)
                        .find(_.bind(Utils._didCollide, {n: n, newY: newY}))
                        .value();

                    if (!collisionNode) {
                        n._dirty = true;
                        n.y = newY;
                    }
                    --newY;
                }
            }, this));
        } else {
            _.each(this.nodes, _.bind(function(n, i) {
                if (n.locked) {
                    return;
                }
                while (n.y > 0) {
                    var newY = n.y - 1;
                    var canBeMoved = i === 0;

                    if (i > 0) {
                        var collisionNode = _.chain(this.nodes)
                            .take(i)
                            .find(_.bind(Utils._didCollide, {n: n, newY: newY}))
                            .value();
                        canBeMoved = typeof collisionNode == 'undefined';
                    }

                    if (!canBeMoved) {
                        break;
                    }
                    n._dirty = n.y != newY;
                    n.y = newY;
                }
            }, this));
        }
    };

    GridStackEngine.prototype._prepareNode = function(node, resizing) {
        node = _.defaults(node || {}, {width: 1, height: 1, x: 0, y: 0});

        node.x = parseInt('' + node.x);
        node.y = parseInt('' + node.y);
        node.width = parseInt('' + node.width);
        node.height = parseInt('' + node.height);
        node.autoPosition = node.autoPosition || false;
        node.noResize = node.noResize || false;
        node.noMove = node.noMove || false;

        if (node.width > this.width) {
            node.width = this.width;
        } else if (node.width < 1) {
            node.width = 1;
        }

        if (node.height < 1) {
            node.height = 1;
        }

        if (node.x < 0) {
            node.x = 0;
        }

        if (node.x + node.width > this.width) {
            if (resizing) {
                node.width = this.width - node.x;
            } else {
                node.x = this.width - node.width;
            }
        }

        if (node.y < 0) {
            node.y = 0;
        }

        return node;
    };

    GridStackEngine.prototype._notify = function() {
        var args = Array.prototype.slice.call(arguments, 0);
        args[0] = typeof args[0] === 'undefined' ? [] : [args[0]];
        args[1] = typeof args[1] === 'undefined' ? true : args[1];
        if (this._updateCounter) {
            return;
        }
        var deletedNodes = args[0].concat(this.getDirtyNodes());
        this.onchange(deletedNodes, args[1]);
    };

    GridStackEngine.prototype.cleanNodes = function() {
        if (this._updateCounter) {
            return;
        }
        _.each(this.nodes, function(n) {n._dirty = false; });
    };

    GridStackEngine.prototype.getDirtyNodes = function() {
        return _.filter(this.nodes, function(n) { return n._dirty; });
    };

    GridStackEngine.prototype.addNode = function(node, triggerAddEvent) {
        node = this._prepareNode(node);

        if (typeof node.maxWidth != 'undefined') { node.width = Math.min(node.width, node.maxWidth); }
        if (typeof node.maxHeight != 'undefined') { node.height = Math.min(node.height, node.maxHeight); }
        if (typeof node.minWidth != 'undefined') { node.width = Math.max(node.width, node.minWidth); }
        if (typeof node.minHeight != 'undefined') { node.height = Math.max(node.height, node.minHeight); }

        node._id = ++idSeq;
        node._dirty = true;

        if (node.autoPosition) {
            this._sortNodes();

            for (var i = 0;; ++i) {
                var x = i % this.width;
                var y = Math.floor(i / this.width);
                if (x + node.width > this.width) {
                    continue;
                }
                if (!_.find(this.nodes, _.bind(Utils._isAddNodeIntercepted, {x: x, y: y, node: node}))) {
                    node.x = x;
                    node.y = y;
                    break;
                }
            }
        }

        this.nodes.push(node);
        if (typeof triggerAddEvent != 'undefined' && triggerAddEvent) {
            this._addedNodes.push(_.clone(node));
        }

        this._fixCollisions(node);
        this._packNodes();
        this._notify();
        return node;
    };

    GridStackEngine.prototype.removeNode = function(node, detachNode) {
        detachNode = typeof detachNode === 'undefined' ? true : detachNode;
        this._removedNodes.push(_.clone(node));
        node._id = null;
        this.nodes = _.without(this.nodes, node);
        this._packNodes();
        this._notify(node, detachNode);
    };

    GridStackEngine.prototype.canMoveNode = function(node, x, y, width, height) {
        if (!this.isNodeChangedPosition(node, x, y, width, height)) {
            return false;
        }
        var hasLocked = Boolean(_.find(this.nodes, function(n) { return n.locked; }));

        if (!this.height && !hasLocked) {
            return true;
        }

        var clonedNode;
        var clone = new GridStackEngine(
            this.width,
            null,
            this.float,
            0,
            _.map(this.nodes, function(n) {
                if (n == node) {
                    clonedNode = $.extend({}, n);
                    return clonedNode;
                }
                return $.extend({}, n);
            }));

        if (typeof clonedNode === 'undefined') {
            return true;
        }

        clone.moveNode(clonedNode, x, y, width, height);

        var res = true;

        if (hasLocked) {
            res &= !Boolean(_.find(clone.nodes, function(n) {
                return n != clonedNode && Boolean(n.locked) && Boolean(n._dirty);
            }));
        }
        if (this.height) {
            res &= clone.getGridHeight() <= this.height;
        }

        return res;
    };

    GridStackEngine.prototype.canBePlacedWithRespectToHeight = function(node) {
        if (!this.height) {
            return true;
        }

        var clone = new GridStackEngine(
            this.width,
            null,
            this.float,
            0,
            _.map(this.nodes, function(n) { return $.extend({}, n); }));
        clone.addNode(node);
        return clone.getGridHeight() <= this.height;
    };

    GridStackEngine.prototype.isNodeChangedPosition = function(node, x, y, width, height) {
        if (typeof x != 'number') { x = node.x; }
        if (typeof y != 'number') { y = node.y; }
        if (typeof width != 'number') { width = node.width; }
        if (typeof height != 'number') { height = node.height; }

        if (typeof node.maxWidth != 'undefined') { width = Math.min(width, node.maxWidth); }
        if (typeof node.maxHeight != 'undefined') { height = Math.min(height, node.maxHeight); }
        if (typeof node.minWidth != 'undefined') { width = Math.max(width, node.minWidth); }
        if (typeof node.minHeight != 'undefined') { height = Math.max(height, node.minHeight); }

        if (node.x == x && node.y == y && node.width == width && node.height == height) {
            return false;
        }
        return true;
    };

    GridStackEngine.prototype.moveNode = function(node, x, y, width, height, noPack) {
        if (!this.isNodeChangedPosition(node, x, y, width, height)) {
            return node;
        }
        if (typeof x != 'number') { x = node.x; }
        if (typeof y != 'number') { y = node.y; }
        if (typeof width != 'number') { width = node.width; }
        if (typeof height != 'number') { height = node.height; }

        if (typeof node.maxWidth != 'undefined') { width = Math.min(width, node.maxWidth); }
        if (typeof node.maxHeight != 'undefined') { height = Math.min(height, node.maxHeight); }
        if (typeof node.minWidth != 'undefined') { width = Math.max(width, node.minWidth); }
        if (typeof node.minHeight != 'undefined') { height = Math.max(height, node.minHeight); }

        if (node.x == x && node.y == y && node.width == width && node.height == height) {
            return node;
        }

        var resizing = node.width != width;
        node._dirty = true;

        node.x = x;
        node.y = y;
        node.width = width;
        node.height = height;

        node.lastTriedX = x;
        node.lastTriedY = y;
        node.lastTriedWidth = width;
        node.lastTriedHeight = height;

        node = this._prepareNode(node, resizing);

        this._fixCollisions(node);
        if (!noPack) {
            this._packNodes();
            this._notify();
        }
        return node;
    };

    GridStackEngine.prototype.getGridHeight = function() {
        return _.reduce(this.nodes, function(memo, n) { return Math.max(memo, n.y + n.height); }, 0);
    };

    GridStackEngine.prototype.beginUpdate = function(node) {
        _.each(this.nodes, function(n) {
            n._origY = n.y;
        });
        node._updating = true;
    };

    GridStackEngine.prototype.endUpdate = function() {
        _.each(this.nodes, function(n) {
            n._origY = n.y;
        });
        var n = _.find(this.nodes, function(n) { return n._updating; });
        if (n) {
            n._updating = false;
        }
    };

    var GridStack = function(el, opts) {
        var self = this;
        var oneColumnMode, isAutoCellHeight;

        opts = opts || {};

        this.container = $(el);

        // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
        if (typeof opts.handle_class !== 'undefined') {
            opts.handleClass = opts.handle_class;
            obsoleteOpts('handle_class', 'handleClass');
        }
        if (typeof opts.item_class !== 'undefined') {
            opts.itemClass = opts.item_class;
            obsoleteOpts('item_class', 'itemClass');
        }
        if (typeof opts.placeholder_class !== 'undefined') {
            opts.placeholderClass = opts.placeholder_class;
            obsoleteOpts('placeholder_class', 'placeholderClass');
        }
        if (typeof opts.placeholder_text !== 'undefined') {
            opts.placeholderText = opts.placeholder_text;
            obsoleteOpts('placeholder_text', 'placeholderText');
        }
        if (typeof opts.cell_height !== 'undefined') {
            opts.cellHeight = opts.cell_height;
            obsoleteOpts('cell_height', 'cellHeight');
        }
        if (typeof opts.vertical_margin !== 'undefined') {
            opts.verticalMargin = opts.vertical_margin;
            obsoleteOpts('vertical_margin', 'verticalMargin');
        }
        if (typeof opts.min_width !== 'undefined') {
            opts.minWidth = opts.min_width;
            obsoleteOpts('min_width', 'minWidth');
        }
        if (typeof opts.static_grid !== 'undefined') {
            opts.staticGrid = opts.static_grid;
            obsoleteOpts('static_grid', 'staticGrid');
        }
        if (typeof opts.is_nested !== 'undefined') {
            opts.isNested = opts.is_nested;
            obsoleteOpts('is_nested', 'isNested');
        }
        if (typeof opts.always_show_resize_handle !== 'undefined') {
            opts.alwaysShowResizeHandle = opts.always_show_resize_handle;
            obsoleteOpts('always_show_resize_handle', 'alwaysShowResizeHandle');
        }
        // jscs:enable requireCamelCaseOrUpperCaseIdentifiers

        opts.itemClass = opts.itemClass || 'grid-stack-item';
        var isNested = this.container.closest('.' + opts.itemClass).length > 0;

        this.opts = _.defaults(opts || {}, {
            width: parseInt(this.container.attr('data-gs-width')) || 12,
            height: parseInt(this.container.attr('data-gs-height')) || 0,
            itemClass: 'grid-stack-item',
            placeholderClass: 'grid-stack-placeholder',
            placeholderText: '',
            handle: '.grid-stack-item-content',
            handleClass: null,
            cellHeight: 60,
            verticalMargin: 20,
            auto: true,
            minWidth: 768,
            float: false,
            staticGrid: false,
            _class: 'grid-stack-instance-' + (Math.random() * 10000).toFixed(0),
            animate: Boolean(this.container.attr('data-gs-animate')) || false,
            alwaysShowResizeHandle: opts.alwaysShowResizeHandle || false,
            resizable: _.defaults(opts.resizable || {}, {
                autoHide: !(opts.alwaysShowResizeHandle || false),
                handles: 'se'
            }),
            draggable: _.defaults(opts.draggable || {}, {
                handle: (opts.handleClass ? '.' + opts.handleClass : (opts.handle ? opts.handle : '')) ||
                    '.grid-stack-item-content',
                scroll: false,
                appendTo: 'body'
            }),
            disableDrag: opts.disableDrag || false,
            disableResize: opts.disableResize || false,
            rtl: 'auto',
            removable: false,
            removeTimeout: 2000,
            verticalMarginUnit: 'px',
            cellHeightUnit: 'px',
            disableOneColumnMode: opts.disableOneColumnMode || false,
            oneColumnModeClass: opts.oneColumnModeClass || 'grid-stack-one-column-mode',
            ddPlugin: null
        });

        if (this.opts.ddPlugin === false) {
            this.opts.ddPlugin = GridStackDragDropPlugin;
        } else if (this.opts.ddPlugin === null) {
            this.opts.ddPlugin = _.first(GridStackDragDropPlugin.registeredPlugins) || GridStackDragDropPlugin;
        }

        this.dd = new this.opts.ddPlugin(this);

        if (this.opts.rtl === 'auto') {
            this.opts.rtl = this.container.css('direction') === 'rtl';
        }

        if (this.opts.rtl) {
            this.container.addClass('grid-stack-rtl');
        }

        this.opts.isNested = isNested;

        isAutoCellHeight = this.opts.cellHeight === 'auto';
        if (isAutoCellHeight) {
            self.cellHeight(self.cellWidth(), true);
        } else {
            this.cellHeight(this.opts.cellHeight, true);
        }
        this.verticalMargin(this.opts.verticalMargin, true);

        this.container.addClass(this.opts._class);

        this._setStaticClass();

        if (isNested) {
            this.container.addClass('grid-stack-nested');
        }

        this._initStyles();

        this.grid = new GridStackEngine(this.opts.width, function(nodes, detachNode) {
            detachNode = typeof detachNode === 'undefined' ? true : detachNode;
            var maxHeight = 0;
            _.each(nodes, function(n) {
                if (detachNode && n._id === null) {
                    if (n.el) {
                        n.el.remove();
                    }
                } else {
                    n.el
                        .attr('data-gs-x', n.x)
                        .attr('data-gs-y', n.y)
                        .attr('data-gs-width', n.width)
                        .attr('data-gs-height', n.height);
                    maxHeight = Math.max(maxHeight, n.y + n.height);
                }
            });
            self._updateStyles(maxHeight + 10);
        }, this.opts.float, this.opts.height);

        if (this.opts.auto) {
            var elements = [];
            var _this = this;
            this.container.children('.' + this.opts.itemClass + ':not(.' + this.opts.placeholderClass + ')')
                .each(function(index, el) {
                el = $(el);
                elements.push({
                    el: el,
                    i: parseInt(el.attr('data-gs-x')) + parseInt(el.attr('data-gs-y')) * _this.opts.width
                });
            });
            _.chain(elements).sortBy(function(x) { return x.i; }).each(function(i) {
                self._prepareElement(i.el);
            }).value();
        }

        this.setAnimation(this.opts.animate);

        this.placeholder = $(
            '<div class="' + this.opts.placeholderClass + ' ' + this.opts.itemClass + '">' +
            '<div class="placeholder-content">' + this.opts.placeholderText + '</div></div>').hide();

        this._updateContainerHeight();

        this._updateHeightsOnResize = _.throttle(function() {
            self.cellHeight(self.cellWidth(), false);
        }, 100);

        this.onResizeHandler = function() {
            if (isAutoCellHeight) {
                self._updateHeightsOnResize();
            }

            if (self._isOneColumnMode() && !self.opts.disableOneColumnMode) {
                if (oneColumnMode) {
                    return;
                }
                self.container.addClass(self.opts.oneColumnModeClass);
                oneColumnMode = true;

                self.grid._sortNodes();
                _.each(self.grid.nodes, function(node) {
                    self.container.append(node.el);

                    if (self.opts.staticGrid) {
                        return;
                    }
                    self.dd.draggable(node.el, 'disable');
                    self.dd.resizable(node.el, 'disable');

                    node.el.trigger('resize');
                });
            } else {
                if (!oneColumnMode) {
                    return;
                }

                self.container.removeClass(self.opts.oneColumnModeClass);
                oneColumnMode = false;

                if (self.opts.staticGrid) {
                    return;
                }

                _.each(self.grid.nodes, function(node) {
                    if (!node.noMove && !self.opts.disableDrag) {
                        self.dd.draggable(node.el, 'enable');
                    }
                    if (!node.noResize && !self.opts.disableResize) {
                        self.dd.resizable(node.el, 'enable');
                    }

                    node.el.trigger('resize');
                });
            }
        };

        $(window).resize(this.onResizeHandler);
        this.onResizeHandler();

        if (!self.opts.staticGrid && typeof self.opts.removable === 'string') {
            var trashZone = $(self.opts.removable);
            if (!this.dd.isDroppable(trashZone)) {
                this.dd.droppable(trashZone, {
                    accept: '.' + self.opts.itemClass
                });
            }
            this.dd
                .on(trashZone, 'dropover', function(event, ui) {
                    var el = $(ui.draggable);
                    var node = el.data('_gridstack_node');
                    if (node._grid !== self) {
                        return;
                    }
                    self._setupRemovingTimeout(el);
                })
                .on(trashZone, 'dropout', function(event, ui) {
                    var el = $(ui.draggable);
                    var node = el.data('_gridstack_node');
                    if (node._grid !== self) {
                        return;
                    }
                    self._clearRemovingTimeout(el);
                });
        }

        if (!self.opts.staticGrid && self.opts.acceptWidgets) {
            var draggingElement = null;

            var onDrag = function(event, ui) {
                var el = draggingElement;
                var node = el.data('_gridstack_node');
                var pos = self.getCellFromPixel(ui.offset, true);
                var x = Math.max(0, pos.x);
                var y = Math.max(0, pos.y);
                if (!node._added) {
                    node._added = true;

                    node.el = el;
                    node.x = x;
                    node.y = y;
                    self.grid.cleanNodes();
                    self.grid.beginUpdate(node);
                    self.grid.addNode(node);

                    self.container.append(self.placeholder);
                    self.placeholder
                        .attr('data-gs-x', node.x)
                        .attr('data-gs-y', node.y)
                        .attr('data-gs-width', node.width)
                        .attr('data-gs-height', node.height)
                        .show();
                    node.el = self.placeholder;
                    node._beforeDragX = node.x;
                    node._beforeDragY = node.y;

                    self._updateContainerHeight();
                } else {
                    if (!self.grid.canMoveNode(node, x, y)) {
                        return;
                    }
                    self.grid.moveNode(node, x, y);
                    self._updateContainerHeight();
                }
            };

            this.dd
                .droppable(self.container, {
                    accept: function(el) {
                        el = $(el);
                        var node = el.data('_gridstack_node');
                        if (node && node._grid === self) {
                            return false;
                        }
                        return el.is(self.opts.acceptWidgets === true ? '.grid-stack-item' : self.opts.acceptWidgets);
                    }
                })
                .on(self.container, 'dropover', function(event, ui) {
                    var offset = self.container.offset();
                    var el = $(ui.draggable);
                    var cellWidth = self.cellWidth();
                    var cellHeight = self.cellHeight();
                    var origNode = el.data('_gridstack_node');

                    var width = origNode ? origNode.width : (Math.ceil(el.outerWidth() / cellWidth));
                    var height = origNode ? origNode.height : (Math.ceil(el.outerHeight() / cellHeight));

                    draggingElement = el;

                    var node = self.grid._prepareNode({width: width, height: height, _added: false, _temporary: true});
                    el.data('_gridstack_node', node);
                    el.data('_gridstack_node_orig', origNode);

                    el.on('drag', onDrag);
                })
                .on(self.container, 'dropout', function(event, ui) {
                    var el = $(ui.draggable);
                    el.unbind('drag', onDrag);
                    var node = el.data('_gridstack_node');
                    node.el = null;
                    self.grid.removeNode(node);
                    self.placeholder.detach();
                    self._updateContainerHeight();
                    el.data('_gridstack_node', el.data('_gridstack_node_orig'));
                })
                .on(self.container, 'drop', function(event, ui) {
                    self.placeholder.detach();

                    var node = $(ui.draggable).data('_gridstack_node');
                    node._grid = self;
                    var el = $(ui.draggable).clone(false);
                    el.data('_gridstack_node', node);
                    var originalNode = $(ui.draggable).data('_gridstack_node_orig');
                    if (typeof originalNode !== 'undefined') {
                        originalNode._grid._triggerRemoveEvent();
                    }
                    $(ui.draggable).remove();
                    node.el = el;
                    self.placeholder.hide();
                    el
                        .attr('data-gs-x', node.x)
                        .attr('data-gs-y', node.y)
                        .attr('data-gs-width', node.width)
                        .attr('data-gs-height', node.height)
                        .addClass(self.opts.itemClass)
                        .removeAttr('style')
                        .enableSelection()
                        .removeData('draggable')
                        .removeClass('ui-draggable ui-draggable-dragging ui-draggable-disabled')
                        .unbind('drag', onDrag);
                    self.container.append(el);
                    self._prepareElementsByNode(el, node);
                    self._updateContainerHeight();
                    self.grid._addedNodes.push(node);
                    self._triggerAddEvent();
                    self._triggerChangeEvent();

                    self.grid.endUpdate();
                });
        }
    };

    GridStack.prototype._triggerChangeEvent = function(forceTrigger) {
        var elements = this.grid.getDirtyNodes();
        var hasChanges = false;

        var eventParams = [];
        if (elements && elements.length) {
            eventParams.push(elements);
            hasChanges = true;
        }

        if (hasChanges || forceTrigger === true) {
            this.container.trigger('change', eventParams);
        }
    };

    GridStack.prototype._triggerAddEvent = function() {
        if (this.grid._addedNodes && this.grid._addedNodes.length > 0) {
            this.container.trigger('added', [_.map(this.grid._addedNodes, _.clone)]);
            this.grid._addedNodes = [];
        }
    };

    GridStack.prototype._triggerRemoveEvent = function() {
        if (this.grid._removedNodes && this.grid._removedNodes.length > 0) {
            this.container.trigger('removed', [_.map(this.grid._removedNodes, _.clone)]);
            this.grid._removedNodes = [];
        }
    };

    GridStack.prototype._initStyles = function() {
        if (this._stylesId) {
            Utils.removeStylesheet(this._stylesId);
        }
        this._stylesId = 'gridstack-style-' + (Math.random() * 100000).toFixed();
        this._styles = Utils.createStylesheet(this._stylesId);
        if (this._styles !== null) {
            this._styles._max = 0;
        }
    };

    GridStack.prototype._updateStyles = function(maxHeight) {
        if (this._styles === null || typeof this._styles === 'undefined') {
            return;
        }

        var prefix = '.' + this.opts._class + ' .' + this.opts.itemClass;
        var self = this;
        var getHeight;

        if (typeof maxHeight == 'undefined') {
            maxHeight = this._styles._max;
        }
        this._initStyles();
        this._updateContainerHeight();
        if (!this.opts.cellHeight) { // The rest will be handled by CSS
            return ;
        }
        if (this._styles._max !== 0 && maxHeight <= this._styles._max) {
            return ;
        }

        if (!this.opts.verticalMargin || this.opts.cellHeightUnit === this.opts.verticalMarginUnit) {
            getHeight = function(nbRows, nbMargins) {
                return (self.opts.cellHeight * nbRows + self.opts.verticalMargin * nbMargins) +
                    self.opts.cellHeightUnit;
            };
        } else {
            getHeight = function(nbRows, nbMargins) {
                if (!nbRows || !nbMargins) {
                    return (self.opts.cellHeight * nbRows + self.opts.verticalMargin * nbMargins) +
                        self.opts.cellHeightUnit;
                }
                return 'calc(' + ((self.opts.cellHeight * nbRows) + self.opts.cellHeightUnit) + ' + ' +
                    ((self.opts.verticalMargin * nbMargins) + self.opts.verticalMarginUnit) + ')';
            };
        }

        if (this._styles._max === 0) {
            Utils.insertCSSRule(this._styles, prefix, 'min-height: ' + getHeight(1, 0) + ';', 0);
        }

        if (maxHeight > this._styles._max) {
            for (var i = this._styles._max; i < maxHeight; ++i) {
                Utils.insertCSSRule(this._styles,
                    prefix + '[data-gs-height="' + (i + 1) + '"]',
                    'height: ' + getHeight(i + 1, i) + ';',
                    i
                );
                Utils.insertCSSRule(this._styles,
                    prefix + '[data-gs-min-height="' + (i + 1) + '"]',
                    'min-height: ' + getHeight(i + 1, i) + ';',
                    i
                );
                Utils.insertCSSRule(this._styles,
                    prefix + '[data-gs-max-height="' + (i + 1) + '"]',
                    'max-height: ' + getHeight(i + 1, i) + ';',
                    i
                );
                Utils.insertCSSRule(this._styles,
                    prefix + '[data-gs-y="' + i + '"]',
                    'top: ' + getHeight(i, i) + ';',
                    i
                );
            }
            this._styles._max = maxHeight;
        }
    };

    GridStack.prototype._updateContainerHeight = function() {
        if (this.grid._updateCounter) {
            return;
        }
        var height = this.grid.getGridHeight();
        this.container.attr('data-gs-current-height', height);
        if (!this.opts.cellHeight) {
            return ;
        }
        if (!this.opts.verticalMargin) {
            this.container.css('height', (height * (this.opts.cellHeight)) + this.opts.cellHeightUnit);
        } else if (this.opts.cellHeightUnit === this.opts.verticalMarginUnit) {
            this.container.css('height', (height * (this.opts.cellHeight + this.opts.verticalMargin) -
                this.opts.verticalMargin) + this.opts.cellHeightUnit);
        } else {
            this.container.css('height', 'calc(' + ((height * (this.opts.cellHeight)) + this.opts.cellHeightUnit) +
                ' + ' + ((height * (this.opts.verticalMargin - 1)) + this.opts.verticalMarginUnit) + ')');
        }
    };

    GridStack.prototype._isOneColumnMode = function() {
        return (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) <=
            this.opts.minWidth;
    };

    GridStack.prototype._setupRemovingTimeout = function(el) {
        var self = this;
        var node = $(el).data('_gridstack_node');

        if (node._removeTimeout || !self.opts.removable) {
            return;
        }
        node._removeTimeout = setTimeout(function() {
            el.addClass('grid-stack-item-removing');
            node._isAboutToRemove = true;
        }, self.opts.removeTimeout);
    };

    GridStack.prototype._clearRemovingTimeout = function(el) {
        var node = $(el).data('_gridstack_node');

        if (!node._removeTimeout) {
            return;
        }
        clearTimeout(node._removeTimeout);
        node._removeTimeout = null;
        el.removeClass('grid-stack-item-removing');
        node._isAboutToRemove = false;
    };

    GridStack.prototype._prepareElementsByNode = function(el, node) {
        var self = this;

        var cellWidth;
        var cellHeight;

        var dragOrResize = function(event, ui) {
            var x = Math.round(ui.position.left / cellWidth);
            var y = Math.floor((ui.position.top + cellHeight / 2) / cellHeight);
            var width;
            var height;

            if (event.type != 'drag') {
                width = Math.round(ui.size.width / cellWidth);
                height = Math.round(ui.size.height / cellHeight);
            }

            if (event.type == 'drag') {
                if (x < 0 || x >= self.grid.width || y < 0 || (!self.grid.float && y > self.grid.getGridHeight())) {
                    if (!node._temporaryRemoved) {
                        if (self.opts.removable === true) {
                            self._setupRemovingTimeout(el);
                        }

                        x = node._beforeDragX;
                        y = node._beforeDragY;

                        self.placeholder.detach();
                        self.placeholder.hide();
                        self.grid.removeNode(node);
                        self._updateContainerHeight();

                        node._temporaryRemoved = true;
                    }
                } else {
                    self._clearRemovingTimeout(el);

                    if (node._temporaryRemoved) {
                        self.grid.addNode(node);
                        self.placeholder
                            .attr('data-gs-x', x)
                            .attr('data-gs-y', y)
                            .attr('data-gs-width', width)
                            .attr('data-gs-height', height)
                            .show();
                        self.container.append(self.placeholder);
                        node.el = self.placeholder;
                        node._temporaryRemoved = false;
                    }
                }
            } else if (event.type == 'resize')  {
                if (x < 0) {
                    return;
                }
            }
            // width and height are undefined if not resizing
            var lastTriedWidth = typeof width !== 'undefined' ? width : node.lastTriedWidth;
            var lastTriedHeight = typeof height !== 'undefined' ? height : node.lastTriedHeight;
            if (!self.grid.canMoveNode(node, x, y, width, height) ||
                (node.lastTriedX === x && node.lastTriedY === y &&
                node.lastTriedWidth === lastTriedWidth && node.lastTriedHeight === lastTriedHeight)) {
                return;
            }
            node.lastTriedX = x;
            node.lastTriedY = y;
            node.lastTriedWidth = width;
            node.lastTriedHeight = height;
            self.grid.moveNode(node, x, y, width, height);
            self._updateContainerHeight();
        };

        var onStartMoving = function(event, ui) {
            self.container.append(self.placeholder);
            var o = $(this);
            self.grid.cleanNodes();
            self.grid.beginUpdate(node);
            cellWidth = self.cellWidth();
            var strictCellHeight = Math.ceil(o.outerHeight() / o.attr('data-gs-height'));
            cellHeight = self.container.height() / parseInt(self.container.attr('data-gs-current-height'));
            self.placeholder
                .attr('data-gs-x', o.attr('data-gs-x'))
                .attr('data-gs-y', o.attr('data-gs-y'))
                .attr('data-gs-width', o.attr('data-gs-width'))
                .attr('data-gs-height', o.attr('data-gs-height'))
                .show();
            node.el = self.placeholder;
            node._beforeDragX = node.x;
            node._beforeDragY = node.y;

            self.dd.resizable(el, 'option', 'minWidth', cellWidth * (node.minWidth || 1));
            self.dd.resizable(el, 'option', 'minHeight', strictCellHeight * (node.minHeight || 1));

            if (event.type == 'resizestart') {
                o.find('.grid-stack-item').trigger('resizestart');
            }
        };

        var onEndMoving = function(event, ui) {
            var o = $(this);
            if (!o.data('_gridstack_node')) {
                return;
            }

            var forceNotify = false;
            self.placeholder.detach();
            node.el = o;
            self.placeholder.hide();

            if (node._isAboutToRemove) {
                forceNotify = true;
                var gridToNotify = el.data('_gridstack_node')._grid;
                gridToNotify._triggerRemoveEvent();
                el.removeData('_gridstack_node');
                el.remove();
            } else {
                self._clearRemovingTimeout(el);
                if (!node._temporaryRemoved) {
                    o
                        .attr('data-gs-x', node.x)
                        .attr('data-gs-y', node.y)
                        .attr('data-gs-width', node.width)
                        .attr('data-gs-height', node.height)
                        .removeAttr('style');
                } else {
                    o
                        .attr('data-gs-x', node._beforeDragX)
                        .attr('data-gs-y', node._beforeDragY)
                        .attr('data-gs-width', node.width)
                        .attr('data-gs-height', node.height)
                        .removeAttr('style');
                    node.x = node._beforeDragX;
                    node.y = node._beforeDragY;
                    self.grid.addNode(node);
                }
            }
            self._updateContainerHeight();
            self._triggerChangeEvent(forceNotify);

            self.grid.endUpdate();

            var nestedGrids = o.find('.grid-stack');
            if (nestedGrids.length && event.type == 'resizestop') {
                nestedGrids.each(function(index, el) {
                    $(el).data('gridstack').onResizeHandler();
                });
                o.find('.grid-stack-item').trigger('resizestop');
                o.find('.grid-stack-item').trigger('gsresizestop');
            }
            if (event.type == 'resizestop') {
                self.container.trigger('gsresizestop', o);
            }
        };

        this.dd
            .draggable(el, {
                start: onStartMoving,
                stop: onEndMoving,
                drag: dragOrResize
            })
            .resizable(el, {
                start: onStartMoving,
                stop: onEndMoving,
                resize: dragOrResize
            });

        if (node.noMove || (this._isOneColumnMode() && !self.opts.disableOneColumnMode) || this.opts.disableDrag) {
            this.dd.draggable(el, 'disable');
        }

        if (node.noResize || (this._isOneColumnMode() && !self.opts.disableOneColumnMode) || this.opts.disableResize) {
            this.dd.resizable(el, 'disable');
        }

        el.attr('data-gs-locked', node.locked ? 'yes' : null);
    };

    GridStack.prototype._prepareElement = function(el, triggerAddEvent) {
        triggerAddEvent = typeof triggerAddEvent != 'undefined' ? triggerAddEvent : false;
        var self = this;
        el = $(el);

        el.addClass(this.opts.itemClass);
        var node = self.grid.addNode({
            x: el.attr('data-gs-x'),
            y: el.attr('data-gs-y'),
            width: el.attr('data-gs-width'),
            height: el.attr('data-gs-height'),
            maxWidth: el.attr('data-gs-max-width'),
            minWidth: el.attr('data-gs-min-width'),
            maxHeight: el.attr('data-gs-max-height'),
            minHeight: el.attr('data-gs-min-height'),
            autoPosition: Utils.toBool(el.attr('data-gs-auto-position')),
            noResize: Utils.toBool(el.attr('data-gs-no-resize')),
            noMove: Utils.toBool(el.attr('data-gs-no-move')),
            locked: Utils.toBool(el.attr('data-gs-locked')),
            el: el,
            id: el.attr('data-gs-id'),
            _grid: self
        }, triggerAddEvent);
        el.data('_gridstack_node', node);

        this._prepareElementsByNode(el, node);
    };

    GridStack.prototype.setAnimation = function(enable) {
        if (enable) {
            this.container.addClass('grid-stack-animate');
        } else {
            this.container.removeClass('grid-stack-animate');
        }
    };

    GridStack.prototype.addWidget = function(el, x, y, width, height, autoPosition, minWidth, maxWidth,
        minHeight, maxHeight, id) {
        el = $(el);
        if (typeof x != 'undefined') { el.attr('data-gs-x', x); }
        if (typeof y != 'undefined') { el.attr('data-gs-y', y); }
        if (typeof width != 'undefined') { el.attr('data-gs-width', width); }
        if (typeof height != 'undefined') { el.attr('data-gs-height', height); }
        if (typeof autoPosition != 'undefined') { el.attr('data-gs-auto-position', autoPosition ? 'yes' : null); }
        if (typeof minWidth != 'undefined') { el.attr('data-gs-min-width', minWidth); }
        if (typeof maxWidth != 'undefined') { el.attr('data-gs-max-width', maxWidth); }
        if (typeof minHeight != 'undefined') { el.attr('data-gs-min-height', minHeight); }
        if (typeof maxHeight != 'undefined') { el.attr('data-gs-max-height', maxHeight); }
        if (typeof id != 'undefined') { el.attr('data-gs-id', id); }
        this.container.append(el);
        this._prepareElement(el, true);
        this._triggerAddEvent();
        this._updateContainerHeight();
        this._triggerChangeEvent(true);

        return el;
    };

    GridStack.prototype.makeWidget = function(el) {
        el = $(el);
        this._prepareElement(el, true);
        this._triggerAddEvent();
        this._updateContainerHeight();
        this._triggerChangeEvent(true);

        return el;
    };

    GridStack.prototype.willItFit = function(x, y, width, height, autoPosition) {
        var node = {x: x, y: y, width: width, height: height, autoPosition: autoPosition};
        return this.grid.canBePlacedWithRespectToHeight(node);
    };

    GridStack.prototype.removeWidget = function(el, detachNode) {
        detachNode = typeof detachNode === 'undefined' ? true : detachNode;
        el = $(el);
        var node = el.data('_gridstack_node');

        // For Meteor support: https://github.com/troolee/gridstack.js/pull/272
        if (!node) {
            node = this.grid.getNodeDataByDOMEl(el);
        }

        this.grid.removeNode(node, detachNode);
        el.removeData('_gridstack_node');
        this._updateContainerHeight();
        if (detachNode) {
            el.remove();
        }
        this._triggerChangeEvent(true);
        this._triggerRemoveEvent();
    };

    GridStack.prototype.removeAll = function(detachNode) {
        _.each(this.grid.nodes, _.bind(function(node) {
            this.removeWidget(node.el, detachNode);
        }, this));
        this.grid.nodes = [];
        this._updateContainerHeight();
    };

    GridStack.prototype.destroy = function(detachGrid) {
        $(window).off('resize', this.onResizeHandler);
        this.disable();
        if (typeof detachGrid != 'undefined' && !detachGrid) {
            this.removeAll(false);
            this.container.removeData('gridstack');
        } else {
            this.container.remove();
        }
        Utils.removeStylesheet(this._stylesId);
        if (this.grid) {
            this.grid = null;
        }
    };

    GridStack.prototype.resizable = function(el, val) {
        var self = this;
        el = $(el);
        el.each(function(index, el) {
            el = $(el);
            var node = el.data('_gridstack_node');
            if (typeof node == 'undefined' || node === null) {
                return;
            }

            node.noResize = !(val || false);
            if (node.noResize || (self._isOneColumnMode() && !self.opts.disableOneColumnMode)) {
                self.dd.resizable(el, 'disable');
            } else {
                self.dd.resizable(el, 'enable');
            }
        });
        return this;
    };

    GridStack.prototype.movable = function(el, val) {
        var self = this;
        el = $(el);
        el.each(function(index, el) {
            el = $(el);
            var node = el.data('_gridstack_node');
            if (typeof node == 'undefined' || node === null) {
                return;
            }

            node.noMove = !(val || false);
            if (node.noMove || (self._isOneColumnMode() && !self.opts.disableOneColumnMode)) {
                self.dd.draggable(el, 'disable');
                el.removeClass('ui-draggable-handle');
            } else {
                self.dd.draggable(el, 'enable');
                el.addClass('ui-draggable-handle');
            }
        });
        return this;
    };

    GridStack.prototype.enableMove = function(doEnable, includeNewWidgets) {
        this.movable(this.container.children('.' + this.opts.itemClass), doEnable);
        if (includeNewWidgets) {
            this.opts.disableDrag = !doEnable;
        }
    };

    GridStack.prototype.enableResize = function(doEnable, includeNewWidgets) {
        this.resizable(this.container.children('.' + this.opts.itemClass), doEnable);
        if (includeNewWidgets) {
            this.opts.disableResize = !doEnable;
        }
    };

    GridStack.prototype.disable = function() {
        this.movable(this.container.children('.' + this.opts.itemClass), false);
        this.resizable(this.container.children('.' + this.opts.itemClass), false);
        this.container.trigger('disable');
    };

    GridStack.prototype.enable = function() {
        this.movable(this.container.children('.' + this.opts.itemClass), true);
        this.resizable(this.container.children('.' + this.opts.itemClass), true);
        this.container.trigger('enable');
    };

    GridStack.prototype.locked = function(el, val) {
        el = $(el);
        el.each(function(index, el) {
            el = $(el);
            var node = el.data('_gridstack_node');
            if (typeof node == 'undefined' || node === null) {
                return;
            }

            node.locked = (val || false);
            el.attr('data-gs-locked', node.locked ? 'yes' : null);
        });
        return this;
    };

    GridStack.prototype.maxHeight = function(el, val) {
        el = $(el);
        el.each(function(index, el) {
            el = $(el);
            var node = el.data('_gridstack_node');
            if (typeof node === 'undefined' || node === null) {
                return;
            }

            if (!isNaN(val)) {
                node.maxHeight = (val || false);
                el.attr('data-gs-max-height', val);
            }
        });
        return this;
    };

    GridStack.prototype.minHeight = function(el, val) {
        el = $(el);
        el.each(function(index, el) {
            el = $(el);
            var node = el.data('_gridstack_node');
            if (typeof node === 'undefined' || node === null) {
                return;
            }

            if (!isNaN(val)) {
                node.minHeight = (val || false);
                el.attr('data-gs-min-height', val);
            }
        });
        return this;
    };

    GridStack.prototype.maxWidth = function(el, val) {
        el = $(el);
        el.each(function(index, el) {
            el = $(el);
            var node = el.data('_gridstack_node');
            if (typeof node === 'undefined' || node === null) {
                return;
            }

            if (!isNaN(val)) {
                node.maxWidth = (val || false);
                el.attr('data-gs-max-width', val);
            }
        });
        return this;
    };

    GridStack.prototype.minWidth = function(el, val) {
        el = $(el);
        el.each(function(index, el) {
            el = $(el);
            var node = el.data('_gridstack_node');
            if (typeof node === 'undefined' || node === null) {
                return;
            }

            if (!isNaN(val)) {
                node.minWidth = (val || false);
                el.attr('data-gs-min-width', val);
            }
        });
        return this;
    };

    GridStack.prototype._updateElement = function(el, callback) {
        el = $(el).first();
        var node = el.data('_gridstack_node');
        if (typeof node == 'undefined' || node === null) {
            return;
        }

        var self = this;

        self.grid.cleanNodes();
        self.grid.beginUpdate(node);

        callback.call(this, el, node);

        self._updateContainerHeight();
        self._triggerChangeEvent();

        self.grid.endUpdate();
    };

    GridStack.prototype.resize = function(el, width, height) {
        this._updateElement(el, function(el, node) {
            width = (width !== null && typeof width != 'undefined') ? width : node.width;
            height = (height !== null && typeof height != 'undefined') ? height : node.height;

            this.grid.moveNode(node, node.x, node.y, width, height);
        });
    };

    GridStack.prototype.move = function(el, x, y) {
        this._updateElement(el, function(el, node) {
            x = (x !== null && typeof x != 'undefined') ? x : node.x;
            y = (y !== null && typeof y != 'undefined') ? y : node.y;

            this.grid.moveNode(node, x, y, node.width, node.height);
        });
    };

    GridStack.prototype.update = function(el, x, y, width, height) {
        this._updateElement(el, function(el, node) {
            x = (x !== null && typeof x != 'undefined') ? x : node.x;
            y = (y !== null && typeof y != 'undefined') ? y : node.y;
            width = (width !== null && typeof width != 'undefined') ? width : node.width;
            height = (height !== null && typeof height != 'undefined') ? height : node.height;

            this.grid.moveNode(node, x, y, width, height);
        });
    };

    GridStack.prototype.verticalMargin = function(val, noUpdate) {
        if (typeof val == 'undefined') {
            return this.opts.verticalMargin;
        }

        var heightData = Utils.parseHeight(val);

        if (this.opts.verticalMarginUnit === heightData.unit && this.opts.height === heightData.height) {
            return ;
        }
        this.opts.verticalMarginUnit = heightData.unit;
        this.opts.verticalMargin = heightData.height;

        if (!noUpdate) {
            this._updateStyles();
        }
    };

    GridStack.prototype.cellHeight = function(val, noUpdate) {
        if (typeof val == 'undefined') {
            if (this.opts.cellHeight) {
                return this.opts.cellHeight;
            }
            var o = this.container.children('.' + this.opts.itemClass).first();
            return Math.ceil(o.outerHeight() / o.attr('data-gs-height'));
        }
        var heightData = Utils.parseHeight(val);

        if (this.opts.cellHeightUnit === heightData.heightUnit && this.opts.height === heightData.height) {
            return ;
        }
        this.opts.cellHeightUnit = heightData.unit;
        this.opts.cellHeight = heightData.height;

        if (!noUpdate) {
            this._updateStyles();
        }

    };

    GridStack.prototype.cellWidth = function() {
        return Math.round(this.container.outerWidth() / this.opts.width);
    };

    GridStack.prototype.getCellFromPixel = function(position, useOffset) {
        var containerPos = (typeof useOffset != 'undefined' && useOffset) ?
            this.container.offset() : this.container.position();
        var relativeLeft = position.left - containerPos.left;
        var relativeTop = position.top - containerPos.top;

        var columnWidth = Math.floor(this.container.width() / this.opts.width);
        var rowHeight = Math.floor(this.container.height() / parseInt(this.container.attr('data-gs-current-height')));

        return {x: Math.floor(relativeLeft / columnWidth), y: Math.floor(relativeTop / rowHeight)};
    };

    GridStack.prototype.batchUpdate = function() {
        this.grid.batchUpdate();
    };

    GridStack.prototype.commit = function() {
        this.grid.commit();
        this._updateContainerHeight();
    };

    GridStack.prototype.isAreaEmpty = function(x, y, width, height) {
        return this.grid.isAreaEmpty(x, y, width, height);
    };

    GridStack.prototype.setStatic = function(staticValue) {
        this.opts.staticGrid = (staticValue === true);
        this.enableMove(!staticValue);
        this.enableResize(!staticValue);
        this._setStaticClass();
    };

    GridStack.prototype._setStaticClass = function() {
        var staticClassName = 'grid-stack-static';

        if (this.opts.staticGrid === true) {
            this.container.addClass(staticClassName);
        } else {
            this.container.removeClass(staticClassName);
        }
    };

    GridStack.prototype._updateNodeWidths = function(oldWidth, newWidth) {
        this.grid._sortNodes();
        this.grid.batchUpdate();
        var node = {};
        for (var i = 0; i < this.grid.nodes.length; i++) {
            node = this.grid.nodes[i];
            this.update(node.el, Math.round(node.x * newWidth / oldWidth), undefined,
                Math.round(node.width * newWidth / oldWidth), undefined);
        }
        this.grid.commit();
    };

    GridStack.prototype.setGridWidth = function(gridWidth,doNotPropagate) {
        this.container.removeClass('grid-stack-' + this.opts.width);
        if (doNotPropagate !== true) {
            this._updateNodeWidths(this.opts.width, gridWidth);
        }
        this.opts.width = gridWidth;
        this.grid.width = gridWidth;
        this.container.addClass('grid-stack-' + gridWidth);
    };

    // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
    GridStackEngine.prototype.batch_update = obsolete(GridStackEngine.prototype.batchUpdate);
    GridStackEngine.prototype._fix_collisions = obsolete(GridStackEngine.prototype._fixCollisions,
        '_fix_collisions', '_fixCollisions');
    GridStackEngine.prototype.is_area_empty = obsolete(GridStackEngine.prototype.isAreaEmpty,
        'is_area_empty', 'isAreaEmpty');
    GridStackEngine.prototype._sort_nodes = obsolete(GridStackEngine.prototype._sortNodes,
        '_sort_nodes', '_sortNodes');
    GridStackEngine.prototype._pack_nodes = obsolete(GridStackEngine.prototype._packNodes,
        '_pack_nodes', '_packNodes');
    GridStackEngine.prototype._prepare_node = obsolete(GridStackEngine.prototype._prepareNode,
        '_prepare_node', '_prepareNode');
    GridStackEngine.prototype.clean_nodes = obsolete(GridStackEngine.prototype.cleanNodes,
        'clean_nodes', 'cleanNodes');
    GridStackEngine.prototype.get_dirty_nodes = obsolete(GridStackEngine.prototype.getDirtyNodes,
        'get_dirty_nodes', 'getDirtyNodes');
    GridStackEngine.prototype.add_node = obsolete(GridStackEngine.prototype.addNode,
        'add_node', 'addNode, ');
    GridStackEngine.prototype.remove_node = obsolete(GridStackEngine.prototype.removeNode,
        'remove_node', 'removeNode');
    GridStackEngine.prototype.can_move_node = obsolete(GridStackEngine.prototype.canMoveNode,
        'can_move_node', 'canMoveNode');
    GridStackEngine.prototype.move_node = obsolete(GridStackEngine.prototype.moveNode,
        'move_node', 'moveNode');
    GridStackEngine.prototype.get_grid_height = obsolete(GridStackEngine.prototype.getGridHeight,
        'get_grid_height', 'getGridHeight');
    GridStackEngine.prototype.begin_update = obsolete(GridStackEngine.prototype.beginUpdate,
        'begin_update', 'beginUpdate');
    GridStackEngine.prototype.end_update = obsolete(GridStackEngine.prototype.endUpdate,
        'end_update', 'endUpdate');
    GridStackEngine.prototype.can_be_placed_with_respect_to_height =
        obsolete(GridStackEngine.prototype.canBePlacedWithRespectToHeight,
        'can_be_placed_with_respect_to_height', 'canBePlacedWithRespectToHeight');
    GridStack.prototype._trigger_change_event = obsolete(GridStack.prototype._triggerChangeEvent,
        '_trigger_change_event', '_triggerChangeEvent');
    GridStack.prototype._init_styles = obsolete(GridStack.prototype._initStyles,
        '_init_styles', '_initStyles');
    GridStack.prototype._update_styles = obsolete(GridStack.prototype._updateStyles,
        '_update_styles', '_updateStyles');
    GridStack.prototype._update_container_height = obsolete(GridStack.prototype._updateContainerHeight,
        '_update_container_height', '_updateContainerHeight');
    GridStack.prototype._is_one_column_mode = obsolete(GridStack.prototype._isOneColumnMode,
        '_is_one_column_mode','_isOneColumnMode');
    GridStack.prototype._prepare_element = obsolete(GridStack.prototype._prepareElement,
        '_prepare_element', '_prepareElement');
    GridStack.prototype.set_animation = obsolete(GridStack.prototype.setAnimation,
        'set_animation', 'setAnimation');
    GridStack.prototype.add_widget = obsolete(GridStack.prototype.addWidget,
        'add_widget', 'addWidget');
    GridStack.prototype.make_widget = obsolete(GridStack.prototype.makeWidget,
        'make_widget', 'makeWidget');
    GridStack.prototype.will_it_fit = obsolete(GridStack.prototype.willItFit,
        'will_it_fit', 'willItFit');
    GridStack.prototype.remove_widget = obsolete(GridStack.prototype.removeWidget,
        'remove_widget', 'removeWidget');
    GridStack.prototype.remove_all = obsolete(GridStack.prototype.removeAll,
        'remove_all', 'removeAll');
    GridStack.prototype.min_height = obsolete(GridStack.prototype.minHeight,
        'min_height', 'minHeight');
    GridStack.prototype.min_width = obsolete(GridStack.prototype.minWidth,
        'min_width', 'minWidth');
    GridStack.prototype._update_element = obsolete(GridStack.prototype._updateElement,
        '_update_element', '_updateElement');
    GridStack.prototype.cell_height = obsolete(GridStack.prototype.cellHeight,
        'cell_height', 'cellHeight');
    GridStack.prototype.cell_width = obsolete(GridStack.prototype.cellWidth,
        'cell_width', 'cellWidth');
    GridStack.prototype.get_cell_from_pixel = obsolete(GridStack.prototype.getCellFromPixel,
        'get_cell_from_pixel', 'getCellFromPixel');
    GridStack.prototype.batch_update = obsolete(GridStack.prototype.batchUpdate,
        'batch_update', 'batchUpdate');
    GridStack.prototype.is_area_empty = obsolete(GridStack.prototype.isAreaEmpty,
        'is_area_empty', 'isAreaEmpty');
    GridStack.prototype.set_static = obsolete(GridStack.prototype.setStatic,
        'set_static', 'setStatic');
    GridStack.prototype._set_static_class = obsolete(GridStack.prototype._setStaticClass,
        '_set_static_class', '_setStaticClass');
    // jscs:enable requireCamelCaseOrUpperCaseIdentifiers

    scope.GridStackUI = GridStack;

    scope.GridStackUI.Utils = Utils;
    scope.GridStackUI.Engine = GridStackEngine;
    scope.GridStackUI.GridStackDragDropPlugin = GridStackDragDropPlugin;

    $.fn.gridstack = function(opts) {
        return this.each(function() {
            var o = $(this);
            if (!o.data('gridstack')) {
                o
                    .data('gridstack', new GridStack(this, opts));
            }
        });
    };

    return scope.GridStackUI;
});


/***/ })

},["6sO2"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanF1ZXJ5LXVpL3VpL2pxdWVyeS0xLTcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pxdWVyeS11aS91aS9kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanF1ZXJ5LXVpL3VpL3dpZGdldHMvbW91c2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pxdWVyeS11aS91aS91bmlxdWUtaWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pxdWVyeS11aS91aS93aWRnZXRzL2RyYWdnYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanF1ZXJ5LXVpL3VpL2xhYmVscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50UmVnaXN0cmF0aW9uLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qcXVlcnktdWkvdWkvc2FmZS1hY3RpdmUtZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTXlXb3Jrc3BhY2UvQ29tcG9uZW50L015V29ya3NwYWNlQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qcXVlcnktdWkvdWkvc2Nyb2xsLXBhcmVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanF1ZXJ5LXVpL3VpL3ZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pxdWVyeS11aS91aS9rZXljb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qcXVlcnktdWkvdWkvZXNjYXBlLXNlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ncmlkc3RhY2svc3JjL2dyaWRzdGFjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ3JpZHN0YWNrL3NyYy9ncmlkc3RhY2sualF1ZXJ5VUkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL015V29ya3NwYWNlL015V29ya3NwYWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9NeVdvcmtzcGFjZS9Nb2RlbC9NeVdvcmtzcGFjZU1vZGVsLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qcXVlcnktdWkvdWkvdGFiYmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pxdWVyeS11aS91aS93aWRnZXRzL3Jlc2l6YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanF1ZXJ5LXVpL3VpL2Rpc2FibGUtc2VsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qcXVlcnktdWkvdWkvc2FmZS1ibHVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qcXVlcnktdWkvdWkvd2lkZ2V0cy9kcm9wcGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pxdWVyeS11aS91aS9mb2N1c2FibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pxdWVyeS11aS91aS9mb3JtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qcXVlcnktdWkvdWkvd2lkZ2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qcXVlcnktdWkvdWkvcGx1Z2luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qcXVlcnktdWkvdWkvaWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dyaWRzdGFjay9kaXN0L2dyaWRzdGFjay5qcyJdLCJuYW1lcyI6WyJmYWN0b3J5IiwiYW1kIiwiZGVmaW5lIiwiZXhwb3J0cyIsImpRdWVyeSIsInJlcXVpcmUiLCJlIiwiXyIsIiQiLCJHcmlkU3RhY2tEcmFnRHJvcFBsdWdpbiIsImdyaWQiLCJ0aGlzIiwic2NvcGUiLCJ3aW5kb3ciLCJvYnNvbGV0ZSIsImYiLCJvbGROYW1lIiwibmV3TmFtZSIsIndyYXBwZXIiLCJjb25zb2xlIiwid2FybiIsImFwcGx5IiwiYXJndW1lbnRzIiwicHJvdG90eXBlIiwib2Jzb2xldGVPcHRzIiwiVXRpbHMiLCJpc0ludGVyY2VwdGVkIiwiYSIsImIiLCJ4Iiwid2lkdGgiLCJ5IiwiaGVpZ2h0Iiwic29ydCIsIm5vZGVzIiwiZGlyIiwiY2hhaW4iLCJtYXAiLCJub2RlIiwibWF4IiwidmFsdWUiLCJzb3J0QnkiLCJuIiwiY3JlYXRlU3R5bGVzaGVldCIsImlkIiwic3R5bGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJzdHlsZVNoZWV0IiwiY3NzVGV4dCIsImFwcGVuZENoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInNoZWV0IiwicmVtb3ZlU3R5bGVzaGVldCIsInJlbW92ZSIsImluc2VydENTU1J1bGUiLCJzZWxlY3RvciIsInJ1bGVzIiwiaW5kZXgiLCJpbnNlcnRSdWxlIiwiYWRkUnVsZSIsInRvQm9vbCIsInYiLCJ0b0xvd2VyQ2FzZSIsIkJvb2xlYW4iLCJfY29sbGlzaW9uTm9kZUNoZWNrIiwibm4iLCJfZGlkQ29sbGlkZSIsImJuIiwibmV3WSIsIl9pc0FkZE5vZGVJbnRlcmNlcHRlZCIsInBhcnNlSGVpZ2h0IiwidmFsIiwiaGVpZ2h0VW5pdCIsImlzU3RyaW5nIiwibWF0Y2giLCJFcnJvciIsInBhcnNlRmxvYXQiLCJ1bml0IiwiaXNfaW50ZXJjZXB0ZWQiLCJjcmVhdGVfc3R5bGVzaGVldCIsInJlbW92ZV9zdHlsZXNoZWV0IiwiaW5zZXJ0X2Nzc19ydWxlIiwicmVnaXN0ZXJlZFBsdWdpbnMiLCJyZWdpc3RlclBsdWdpbiIsInBsdWdpbkNsYXNzIiwicHVzaCIsInJlc2l6YWJsZSIsImVsIiwib3B0cyIsImRyYWdnYWJsZSIsImRyb3BwYWJsZSIsImlzRHJvcHBhYmxlIiwib24iLCJldmVudE5hbWUiLCJjYWxsYmFjayIsImlkU2VxIiwiR3JpZFN0YWNrRW5naW5lIiwib25jaGFuZ2UiLCJmbG9hdE1vZGUiLCJpdGVtcyIsImZsb2F0IiwiX3VwZGF0ZUNvdW50ZXIiLCJfZmxvYXQiLCJfYWRkZWROb2RlcyIsIl9yZW1vdmVkTm9kZXMiLCJiYXRjaFVwZGF0ZSIsImNvbW1pdCIsIl9wYWNrTm9kZXMiLCJfbm90aWZ5IiwiZ2V0Tm9kZURhdGFCeURPTUVsIiwiZmluZCIsImdldCIsIl9maXhDb2xsaXNpb25zIiwiX3NvcnROb2RlcyIsImhhc0xvY2tlZCIsImxvY2tlZCIsImNvbGxpc2lvbk5vZGUiLCJiaW5kIiwibW92ZU5vZGUiLCJpc0FyZWFFbXB0eSIsImVhY2giLCJpIiwiX3VwZGF0aW5nIiwiX29yaWdZIiwiX2RpcnR5IiwiY2FuQmVNb3ZlZCIsInRha2UiLCJfcHJlcGFyZU5vZGUiLCJyZXNpemluZyIsImRlZmF1bHRzIiwicGFyc2VJbnQiLCJhdXRvUG9zaXRpb24iLCJub1Jlc2l6ZSIsIm5vTW92ZSIsImFyZ3MiLCJBcnJheSIsInNsaWNlIiwiY2FsbCIsImRlbGV0ZWROb2RlcyIsImNvbmNhdCIsImdldERpcnR5Tm9kZXMiLCJjbGVhbk5vZGVzIiwiZmlsdGVyIiwiYWRkTm9kZSIsInRyaWdnZXJBZGRFdmVudCIsIm1heFdpZHRoIiwiTWF0aCIsIm1pbiIsIm1heEhlaWdodCIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwiX2lkIiwiZmxvb3IiLCJjbG9uZSIsInJlbW92ZU5vZGUiLCJkZXRhY2hOb2RlIiwid2l0aG91dCIsImNhbk1vdmVOb2RlIiwiaXNOb2RlQ2hhbmdlZFBvc2l0aW9uIiwiY2xvbmVkTm9kZSIsImV4dGVuZCIsInJlcyIsImdldEdyaWRIZWlnaHQiLCJjYW5CZVBsYWNlZFdpdGhSZXNwZWN0VG9IZWlnaHQiLCJub1BhY2siLCJsYXN0VHJpZWRYIiwibGFzdFRyaWVkWSIsImxhc3RUcmllZFdpZHRoIiwibGFzdFRyaWVkSGVpZ2h0IiwicmVkdWNlIiwibWVtbyIsImJlZ2luVXBkYXRlIiwiZW5kVXBkYXRlIiwiR3JpZFN0YWNrIiwib25lQ29sdW1uTW9kZSIsImlzQXV0b0NlbGxIZWlnaHQiLCJzZWxmIiwiY29udGFpbmVyIiwiaGFuZGxlX2NsYXNzIiwiaGFuZGxlQ2xhc3MiLCJpdGVtX2NsYXNzIiwiaXRlbUNsYXNzIiwicGxhY2Vob2xkZXJfY2xhc3MiLCJwbGFjZWhvbGRlckNsYXNzIiwicGxhY2Vob2xkZXJfdGV4dCIsInBsYWNlaG9sZGVyVGV4dCIsImNlbGxfaGVpZ2h0IiwiY2VsbEhlaWdodCIsInZlcnRpY2FsX21hcmdpbiIsInZlcnRpY2FsTWFyZ2luIiwibWluX3dpZHRoIiwic3RhdGljX2dyaWQiLCJzdGF0aWNHcmlkIiwiaXNfbmVzdGVkIiwiaXNOZXN0ZWQiLCJhbHdheXNfc2hvd19yZXNpemVfaGFuZGxlIiwiYWx3YXlzU2hvd1Jlc2l6ZUhhbmRsZSIsImNsb3Nlc3QiLCJsZW5ndGgiLCJhdHRyIiwiaGFuZGxlIiwiYXV0byIsIl9jbGFzcyIsInJhbmRvbSIsInRvRml4ZWQiLCJhbmltYXRlIiwiYXV0b0hpZGUiLCJoYW5kbGVzIiwic2Nyb2xsIiwiYXBwZW5kVG8iLCJkaXNhYmxlRHJhZyIsImRpc2FibGVSZXNpemUiLCJydGwiLCJyZW1vdmFibGUiLCJyZW1vdmVUaW1lb3V0IiwidmVydGljYWxNYXJnaW5Vbml0IiwiY2VsbEhlaWdodFVuaXQiLCJkaXNhYmxlT25lQ29sdW1uTW9kZSIsIm9uZUNvbHVtbk1vZGVDbGFzcyIsImRkUGx1Z2luIiwiZmlyc3QiLCJkZCIsImNzcyIsImFkZENsYXNzIiwiY2VsbFdpZHRoIiwiX3NldFN0YXRpY0NsYXNzIiwiX2luaXRTdHlsZXMiLCJfdXBkYXRlU3R5bGVzIiwiZWxlbWVudHMiLCJfdGhpcyIsImNoaWxkcmVuIiwiX3ByZXBhcmVFbGVtZW50Iiwic2V0QW5pbWF0aW9uIiwicGxhY2Vob2xkZXIiLCJoaWRlIiwiX3VwZGF0ZUNvbnRhaW5lckhlaWdodCIsIl91cGRhdGVIZWlnaHRzT25SZXNpemUiLCJ0aHJvdHRsZSIsIm9uUmVzaXplSGFuZGxlciIsIl9pc09uZUNvbHVtbk1vZGUiLCJhcHBlbmQiLCJ0cmlnZ2VyIiwicmVtb3ZlQ2xhc3MiLCJyZXNpemUiLCJ0cmFzaFpvbmUiLCJhY2NlcHQiLCJldmVudCIsInVpIiwiZGF0YSIsIl9ncmlkIiwiX3NldHVwUmVtb3ZpbmdUaW1lb3V0IiwiX2NsZWFyUmVtb3ZpbmdUaW1lb3V0IiwiYWNjZXB0V2lkZ2V0cyIsImRyYWdnaW5nRWxlbWVudCIsIm9uRHJhZyIsInBvcyIsImdldENlbGxGcm9tUGl4ZWwiLCJvZmZzZXQiLCJfYWRkZWQiLCJzaG93IiwiX2JlZm9yZURyYWdYIiwiX2JlZm9yZURyYWdZIiwiaXMiLCJvcmlnTm9kZSIsImNlaWwiLCJvdXRlcldpZHRoIiwib3V0ZXJIZWlnaHQiLCJfdGVtcG9yYXJ5IiwidW5iaW5kIiwiZGV0YWNoIiwib3JpZ2luYWxOb2RlIiwiX3RyaWdnZXJSZW1vdmVFdmVudCIsInJlbW92ZUF0dHIiLCJlbmFibGVTZWxlY3Rpb24iLCJyZW1vdmVEYXRhIiwiX3ByZXBhcmVFbGVtZW50c0J5Tm9kZSIsIl90cmlnZ2VyQWRkRXZlbnQiLCJfdHJpZ2dlckNoYW5nZUV2ZW50IiwiZm9yY2VUcmlnZ2VyIiwiaGFzQ2hhbmdlcyIsImV2ZW50UGFyYW1zIiwiX3N0eWxlc0lkIiwiX3N0eWxlcyIsIl9tYXgiLCJnZXRIZWlnaHQiLCJwcmVmaXgiLCJuYlJvd3MiLCJuYk1hcmdpbnMiLCJpbm5lcldpZHRoIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJib2R5IiwiX3JlbW92ZVRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiX2lzQWJvdXRUb1JlbW92ZSIsImNsZWFyVGltZW91dCIsImRyYWdPclJlc2l6ZSIsInJvdW5kIiwicG9zaXRpb24iLCJsZWZ0IiwidG9wIiwidHlwZSIsInNpemUiLCJfdGVtcG9yYXJ5UmVtb3ZlZCIsIm9uU3RhcnRNb3ZpbmciLCJvIiwic3RyaWN0Q2VsbEhlaWdodCIsIm9uRW5kTW92aW5nIiwiZm9yY2VOb3RpZnkiLCJuZXN0ZWRHcmlkcyIsInN0YXJ0Iiwic3RvcCIsImRyYWciLCJlbmFibGUiLCJhZGRXaWRnZXQiLCJtYWtlV2lkZ2V0Iiwid2lsbEl0Rml0IiwicmVtb3ZlV2lkZ2V0IiwicmVtb3ZlQWxsIiwiZGVzdHJveSIsImRldGFjaEdyaWQiLCJvZmYiLCJkaXNhYmxlIiwibW92YWJsZSIsImVuYWJsZU1vdmUiLCJkb0VuYWJsZSIsImluY2x1ZGVOZXdXaWRnZXRzIiwiZW5hYmxlUmVzaXplIiwiaXNOYU4iLCJfdXBkYXRlRWxlbWVudCIsIm1vdmUiLCJ1cGRhdGUiLCJub1VwZGF0ZSIsImhlaWdodERhdGEiLCJ1c2VPZmZzZXQiLCJjb250YWluZXJQb3MiLCJyZWxhdGl2ZUxlZnQiLCJyZWxhdGl2ZVRvcCIsImNvbHVtbldpZHRoIiwicm93SGVpZ2h0Iiwic2V0U3RhdGljIiwic3RhdGljVmFsdWUiLCJfdXBkYXRlTm9kZVdpZHRocyIsIm9sZFdpZHRoIiwibmV3V2lkdGgiLCJ1bmRlZmluZWQiLCJzZXRHcmlkV2lkdGgiLCJncmlkV2lkdGgiLCJkb05vdFByb3BhZ2F0ZSIsImJhdGNoX3VwZGF0ZSIsIl9maXhfY29sbGlzaW9ucyIsImlzX2FyZWFfZW1wdHkiLCJfc29ydF9ub2RlcyIsIl9wYWNrX25vZGVzIiwiX3ByZXBhcmVfbm9kZSIsImNsZWFuX25vZGVzIiwiZ2V0X2RpcnR5X25vZGVzIiwiYWRkX25vZGUiLCJyZW1vdmVfbm9kZSIsImNhbl9tb3ZlX25vZGUiLCJtb3ZlX25vZGUiLCJnZXRfZ3JpZF9oZWlnaHQiLCJiZWdpbl91cGRhdGUiLCJlbmRfdXBkYXRlIiwiY2FuX2JlX3BsYWNlZF93aXRoX3Jlc3BlY3RfdG9faGVpZ2h0IiwiX3RyaWdnZXJfY2hhbmdlX2V2ZW50IiwiX2luaXRfc3R5bGVzIiwiX3VwZGF0ZV9zdHlsZXMiLCJfdXBkYXRlX2NvbnRhaW5lcl9oZWlnaHQiLCJfaXNfb25lX2NvbHVtbl9tb2RlIiwiX3ByZXBhcmVfZWxlbWVudCIsInNldF9hbmltYXRpb24iLCJhZGRfd2lkZ2V0IiwibWFrZV93aWRnZXQiLCJ3aWxsX2l0X2ZpdCIsInJlbW92ZV9hbGwiLCJtaW5faGVpZ2h0IiwiX3VwZGF0ZV9lbGVtZW50IiwiY2VsbF93aWR0aCIsImdldF9jZWxsX2Zyb21fcGl4ZWwiLCJzZXRfc3RhdGljIiwiX3NldF9zdGF0aWNfY2xhc3MiLCJHcmlkU3RhY2tVSSIsIkVuZ2luZSIsImZuIiwiZ3JpZHN0YWNrIiwiSlF1ZXJ5VUlHcmlkU3RhY2tEcmFnRHJvcFBsdWdpbiIsIk9iamVjdCIsImNyZWF0ZSIsImNvbnN0cnVjdG9yIiwia2V5IiwiY29udGFpbm1lbnQiLCJwYXJlbnQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOzs7Ozs7OztBQ3hGRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsQ0FBQzs7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjs7QUFFQTtBQUNBLDJDQUEyQyw0QkFBNEI7QUFDdkUsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGLFlBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFO0FBQ0Y7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxJQUFJOztBQUVKLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlDQUF5QyxRQUFROztBQUVqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHdDQUF3QztBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FB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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxlQUFlLGNBQWM7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsbUJBQW1COztBQUVsQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLG1DQUFtQywrQkFBK0I7QUFDbEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUI7O0FBRW5CO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0IsZ0NBQWdDOztBQUVoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLHVCQUF1QjtBQUMzRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTLE9BQU87QUFDaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVMsK0NBQStDOztBQUV4RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTtBQUNBOztBQUVBOztBQUVBLGdFQUFnRTs7QUFFaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBOztBQUVBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLFdBQVc7QUFDWCxHQUFHO0FBQ0g7QUFDQTtBQUNBLFdBQVc7QUFDWCxHQUFHO0FBQ0g7QUFDQTtBQUNBLFdBQVc7QUFDWCxHQUFHO0FBQ0g7QUFDQSxXQUFXO0FBQ1gsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGLFlBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQyx1QkFBdUIsS0FBSztBQUMvRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLHlDQUF5QztBQUNsRTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSCxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1RkFBdUY7QUFDdkY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsSUFBSTtBQUNKLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRDs7QUFFQSxDQUFDOzs7Ozs7OztBQ2hyQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxDQUFDOzs7Ozs7OztBQzdDRDtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7Ozs7Ozs7QUNwQkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLFNBQVMsaUJBQWlCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGdDQUFnQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhCQUE4QixjQUFjOztBQUU1QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxpQkFBaUI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7O0FBRUEsRUFBRTtBQUNGOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDs7QUFFQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVILEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTs7QUFFQSxDQUFDOzs7Ozs7OztBQ2hmRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSxDQUFDOzs7Ozs7OztBQ25GRDtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7Ozs7Ozs7O0FDbkJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLCtCQUErQjtBQUM3Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0I7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSwwQkFBMEI7QUFDbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qjs7QUFFekI7QUFDQSx5QkFBeUI7O0FBRXpCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdB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RTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTLGtDQUFrQztBQUMzQztBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBLENBQUM7Ozs7Ozs7O0FDNXRCRDtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxnQkFBZ0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7Ozs7Ozs7O0FDM0NEO0FBQ0E7O0FBRUE7QUFDQTtBQUFB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2Isa0RBQWtELFlBQVksRUFBRTtBQUNoRTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsdURBQXVELDhEQUE4RDtBQUNySDtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkZBQTJGO0FBQzNGOztBQUVBO0FBQ0EsMkNBQTJDLGVBQWU7QUFDMUQ7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyx5QkFBeUI7QUFDL0Qsc0NBQXNDLHlCQUF5QjtBQUMvRCwwQ0FBMEMsaUNBQWlDO0FBQzNFLDJDQUEyQyxtQ0FBbUM7QUFDOUUsaURBQWlELCtEQUErRDtBQUNoSCw2Q0FBNkMsd0NBQXdDO0FBQ3JGLDZDQUE2Qyx3Q0FBd0M7QUFDckYsOENBQThDLDBDQUEwQztBQUN4Riw4Q0FBOEMsMENBQTBDO0FBQ3hGLHVDQUF1QywyQkFBMkI7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDRCQUE0QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxDQUFDIiwiZmlsZSI6ImFwcC5lMzY1OTBhNDI1YzE3OGI1NjA3OC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIGpRdWVyeSBVSSBTdXBwb3J0IGZvciBqUXVlcnkgY29yZSAxLjcueCAxLjEyLjFcbiAqIGh0dHA6Ly9qcXVlcnl1aS5jb21cbiAqXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogaHR0cDovL2pxdWVyeS5vcmcvbGljZW5zZVxuICpcbiAqL1xuXG4vLz4+bGFiZWw6IGpRdWVyeSAxLjcgU3VwcG9ydFxuLy8+Pmdyb3VwOiBDb3JlXG4vLz4+ZGVzY3JpcHRpb246IFN1cHBvcnQgdmVyc2lvbiAxLjcueCBvZiBqUXVlcnkgY29yZVxuXG4oIGZ1bmN0aW9uKCBmYWN0b3J5ICkge1xuXHRpZiAoIHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kICkge1xuXG5cdFx0Ly8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuXHRcdGRlZmluZSggWyBcImpxdWVyeVwiLCBcIi4vdmVyc2lvblwiIF0sIGZhY3RvcnkgKTtcblx0fSBlbHNlIHtcblxuXHRcdC8vIEJyb3dzZXIgZ2xvYmFsc1xuXHRcdGZhY3RvcnkoIGpRdWVyeSApO1xuXHR9XG59KCBmdW5jdGlvbiggJCApIHtcblxuLy8gU3VwcG9ydDogalF1ZXJ5IDEuNyBvbmx5XG4vLyBOb3QgYSBncmVhdCB3YXkgdG8gY2hlY2sgdmVyc2lvbnMsIGJ1dCBzaW5jZSB3ZSBvbmx5IHN1cHBvcnQgMS43KyBhbmQgb25seVxuLy8gbmVlZCB0byBkZXRlY3QgPDEuOCwgdGhpcyBpcyBhIHNpbXBsZSBjaGVjayB0aGF0IHNob3VsZCBzdWZmaWNlLiBDaGVja2luZ1xuLy8gZm9yIFwiMS43LlwiIHdvdWxkIGJlIGEgYml0IHNhZmVyLCBidXQgdGhlIHZlcnNpb24gc3RyaW5nIGlzIDEuNywgbm90IDEuNy4wXG4vLyBhbmQgd2UnbGwgbmV2ZXIgcmVhY2ggMS43MC4wIChpZiB3ZSBkbywgd2UgY2VydGFpbmx5IHdvbid0IGJlIHN1cHBvcnRpbmdcbi8vIDEuNyBhbnltb3JlKS4gU2VlICMxMTE5NyBmb3Igd2h5IHdlJ3JlIG5vdCB1c2luZyBmZWF0dXJlIGRldGVjdGlvbi5cbmlmICggJC5mbi5qcXVlcnkuc3Vic3RyaW5nKCAwLCAzICkgPT09IFwiMS43XCIgKSB7XG5cblx0Ly8gU2V0dGVycyBmb3IgLmlubmVyV2lkdGgoKSwgLmlubmVySGVpZ2h0KCksIC5vdXRlcldpZHRoKCksIC5vdXRlckhlaWdodCgpXG5cdC8vIFVubGlrZSBqUXVlcnkgQ29yZSAxLjgrLCB0aGVzZSBvbmx5IHN1cHBvcnQgbnVtZXJpYyB2YWx1ZXMgdG8gc2V0IHRoZVxuXHQvLyBkaW1lbnNpb25zIGluIHBpeGVsc1xuXHQkLmVhY2goIFsgXCJXaWR0aFwiLCBcIkhlaWdodFwiIF0sIGZ1bmN0aW9uKCBpLCBuYW1lICkge1xuXHRcdHZhciBzaWRlID0gbmFtZSA9PT0gXCJXaWR0aFwiID8gWyBcIkxlZnRcIiwgXCJSaWdodFwiIF0gOiBbIFwiVG9wXCIsIFwiQm90dG9tXCIgXSxcblx0XHRcdHR5cGUgPSBuYW1lLnRvTG93ZXJDYXNlKCksXG5cdFx0XHRvcmlnID0ge1xuXHRcdFx0XHRpbm5lcldpZHRoOiAkLmZuLmlubmVyV2lkdGgsXG5cdFx0XHRcdGlubmVySGVpZ2h0OiAkLmZuLmlubmVySGVpZ2h0LFxuXHRcdFx0XHRvdXRlcldpZHRoOiAkLmZuLm91dGVyV2lkdGgsXG5cdFx0XHRcdG91dGVySGVpZ2h0OiAkLmZuLm91dGVySGVpZ2h0XG5cdFx0XHR9O1xuXG5cdFx0ZnVuY3Rpb24gcmVkdWNlKCBlbGVtLCBzaXplLCBib3JkZXIsIG1hcmdpbiApIHtcblx0XHRcdCQuZWFjaCggc2lkZSwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHNpemUgLT0gcGFyc2VGbG9hdCggJC5jc3MoIGVsZW0sIFwicGFkZGluZ1wiICsgdGhpcyApICkgfHwgMDtcblx0XHRcdFx0aWYgKCBib3JkZXIgKSB7XG5cdFx0XHRcdFx0c2l6ZSAtPSBwYXJzZUZsb2F0KCAkLmNzcyggZWxlbSwgXCJib3JkZXJcIiArIHRoaXMgKyBcIldpZHRoXCIgKSApIHx8IDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCBtYXJnaW4gKSB7XG5cdFx0XHRcdFx0c2l6ZSAtPSBwYXJzZUZsb2F0KCAkLmNzcyggZWxlbSwgXCJtYXJnaW5cIiArIHRoaXMgKSApIHx8IDA7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHRcdHJldHVybiBzaXplO1xuXHRcdH1cblxuXHRcdCQuZm5bIFwiaW5uZXJcIiArIG5hbWUgXSA9IGZ1bmN0aW9uKCBzaXplICkge1xuXHRcdFx0aWYgKCBzaXplID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdHJldHVybiBvcmlnWyBcImlubmVyXCIgKyBuYW1lIF0uY2FsbCggdGhpcyApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0JCggdGhpcyApLmNzcyggdHlwZSwgcmVkdWNlKCB0aGlzLCBzaXplICkgKyBcInB4XCIgKTtcblx0XHRcdH0gKTtcblx0XHR9O1xuXG5cdFx0JC5mblsgXCJvdXRlclwiICsgbmFtZSBdID0gZnVuY3Rpb24oIHNpemUsIG1hcmdpbiApIHtcblx0XHRcdGlmICggdHlwZW9mIHNpemUgIT09IFwibnVtYmVyXCIgKSB7XG5cdFx0XHRcdHJldHVybiBvcmlnWyBcIm91dGVyXCIgKyBuYW1lIF0uY2FsbCggdGhpcywgc2l6ZSApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0JCggdGhpcyApLmNzcyggdHlwZSwgcmVkdWNlKCB0aGlzLCBzaXplLCB0cnVlLCBtYXJnaW4gKSArIFwicHhcIiApO1xuXHRcdFx0fSApO1xuXHRcdH07XG5cdH0gKTtcblxuXHQkLmZuLmFkZEJhY2sgPSBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0cmV0dXJuIHRoaXMuYWRkKCBzZWxlY3RvciA9PSBudWxsID9cblx0XHRcdHRoaXMucHJldk9iamVjdCA6IHRoaXMucHJldk9iamVjdC5maWx0ZXIoIHNlbGVjdG9yIClcblx0XHQpO1xuXHR9O1xufVxuXG59ICkgKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2pxdWVyeS11aS91aS9qcXVlcnktMS03LmpzXG4vLyBtb2R1bGUgaWQgPSAzUEJ6XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIVxuICogalF1ZXJ5IFVJIDpkYXRhIDEuMTIuMVxuICogaHR0cDovL2pxdWVyeXVpLmNvbVxuICpcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBodHRwOi8vanF1ZXJ5Lm9yZy9saWNlbnNlXG4gKi9cblxuLy8+PmxhYmVsOiA6ZGF0YSBTZWxlY3RvclxuLy8+Pmdyb3VwOiBDb3JlXG4vLz4+ZGVzY3JpcHRpb246IFNlbGVjdHMgZWxlbWVudHMgd2hpY2ggaGF2ZSBkYXRhIHN0b3JlZCB1bmRlciB0aGUgc3BlY2lmaWVkIGtleS5cbi8vPj5kb2NzOiBodHRwOi8vYXBpLmpxdWVyeXVpLmNvbS9kYXRhLXNlbGVjdG9yL1xuXG4oIGZ1bmN0aW9uKCBmYWN0b3J5ICkge1xuXHRpZiAoIHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kICkge1xuXG5cdFx0Ly8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuXHRcdGRlZmluZSggWyBcImpxdWVyeVwiLCBcIi4vdmVyc2lvblwiIF0sIGZhY3RvcnkgKTtcblx0fSBlbHNlIHtcblxuXHRcdC8vIEJyb3dzZXIgZ2xvYmFsc1xuXHRcdGZhY3RvcnkoIGpRdWVyeSApO1xuXHR9XG59ICggZnVuY3Rpb24oICQgKSB7XG5yZXR1cm4gJC5leHRlbmQoICQuZXhwclsgXCI6XCIgXSwge1xuXHRkYXRhOiAkLmV4cHIuY3JlYXRlUHNldWRvID9cblx0XHQkLmV4cHIuY3JlYXRlUHNldWRvKCBmdW5jdGlvbiggZGF0YU5hbWUgKSB7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdHJldHVybiAhISQuZGF0YSggZWxlbSwgZGF0YU5hbWUgKTtcblx0XHRcdH07XG5cdFx0fSApIDpcblxuXHRcdC8vIFN1cHBvcnQ6IGpRdWVyeSA8MS44XG5cdFx0ZnVuY3Rpb24oIGVsZW0sIGksIG1hdGNoICkge1xuXHRcdFx0cmV0dXJuICEhJC5kYXRhKCBlbGVtLCBtYXRjaFsgMyBdICk7XG5cdFx0fVxufSApO1xufSApICk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9qcXVlcnktdWkvdWkvZGF0YS5qc1xuLy8gbW9kdWxlIGlkID0gM2VOc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcclxuaW1wb3J0ICcuLi9ub2RlX21vZHVsZXMvZ3JpZHN0YWNrL2Rpc3QvZ3JpZHN0YWNrLmFsbC5qcyc7XHJcbmltcG9ydCB7IENvbXBvbmVudFJlZ2lzdHJhdGlvbiB9IGZyb20gJy4vQ29tcG9uZW50UmVnaXN0cmF0aW9uJztcclxuaW1wb3J0IHtNeVdvcmtTcGFjZVNjcmlwdCB9IGZyb20gJy4vTXlXb3Jrc3BhY2UvTXlXb3Jrc3BhY2UnO1xyXG5leHBvcnQgY2xhc3MgTWFpbiB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBDb21wb25lbnRSZWdpc3RyYXRpb24ucmVnaXN0ZXJDb21wb25lbnRzKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbnZhciBtID0gbmV3IE1haW4oKTtcclxuXHJcblxyXG5leHBvcnQgeyBNeVdvcmtTcGFjZVNjcmlwdH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXgudHMiLCIvKiFcbiAqIGpRdWVyeSBVSSBNb3VzZSAxLjEyLjFcbiAqIGh0dHA6Ly9qcXVlcnl1aS5jb21cbiAqXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogaHR0cDovL2pxdWVyeS5vcmcvbGljZW5zZVxuICovXG5cbi8vPj5sYWJlbDogTW91c2Vcbi8vPj5ncm91cDogV2lkZ2V0c1xuLy8+PmRlc2NyaXB0aW9uOiBBYnN0cmFjdHMgbW91c2UtYmFzZWQgaW50ZXJhY3Rpb25zIHRvIGFzc2lzdCBpbiBjcmVhdGluZyBjZXJ0YWluIHdpZGdldHMuXG4vLz4+ZG9jczogaHR0cDovL2FwaS5qcXVlcnl1aS5jb20vbW91c2UvXG5cbiggZnVuY3Rpb24oIGZhY3RvcnkgKSB7XG5cdGlmICggdHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQgKSB7XG5cblx0XHQvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG5cdFx0ZGVmaW5lKCBbXG5cdFx0XHRcImpxdWVyeVwiLFxuXHRcdFx0XCIuLi9pZVwiLFxuXHRcdFx0XCIuLi92ZXJzaW9uXCIsXG5cdFx0XHRcIi4uL3dpZGdldFwiXG5cdFx0XSwgZmFjdG9yeSApO1xuXHR9IGVsc2Uge1xuXG5cdFx0Ly8gQnJvd3NlciBnbG9iYWxzXG5cdFx0ZmFjdG9yeSggalF1ZXJ5ICk7XG5cdH1cbn0oIGZ1bmN0aW9uKCAkICkge1xuXG52YXIgbW91c2VIYW5kbGVkID0gZmFsc2U7XG4kKCBkb2N1bWVudCApLm9uKCBcIm1vdXNldXBcIiwgZnVuY3Rpb24oKSB7XG5cdG1vdXNlSGFuZGxlZCA9IGZhbHNlO1xufSApO1xuXG5yZXR1cm4gJC53aWRnZXQoIFwidWkubW91c2VcIiwge1xuXHR2ZXJzaW9uOiBcIjEuMTIuMVwiLFxuXHRvcHRpb25zOiB7XG5cdFx0Y2FuY2VsOiBcImlucHV0LCB0ZXh0YXJlYSwgYnV0dG9uLCBzZWxlY3QsIG9wdGlvblwiLFxuXHRcdGRpc3RhbmNlOiAxLFxuXHRcdGRlbGF5OiAwXG5cdH0sXG5cdF9tb3VzZUluaXQ6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciB0aGF0ID0gdGhpcztcblxuXHRcdHRoaXMuZWxlbWVudFxuXHRcdFx0Lm9uKCBcIm1vdXNlZG93bi5cIiArIHRoaXMud2lkZ2V0TmFtZSwgZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdFx0XHRyZXR1cm4gdGhhdC5fbW91c2VEb3duKCBldmVudCApO1xuXHRcdFx0fSApXG5cdFx0XHQub24oIFwiY2xpY2suXCIgKyB0aGlzLndpZGdldE5hbWUsIGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHRcdFx0aWYgKCB0cnVlID09PSAkLmRhdGEoIGV2ZW50LnRhcmdldCwgdGhhdC53aWRnZXROYW1lICsgXCIucHJldmVudENsaWNrRXZlbnRcIiApICkge1xuXHRcdFx0XHRcdCQucmVtb3ZlRGF0YSggZXZlbnQudGFyZ2V0LCB0aGF0LndpZGdldE5hbWUgKyBcIi5wcmV2ZW50Q2xpY2tFdmVudFwiICk7XG5cdFx0XHRcdFx0ZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cblx0XHR0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcblx0fSxcblxuXHQvLyBUT0RPOiBtYWtlIHN1cmUgZGVzdHJveWluZyBvbmUgaW5zdGFuY2Ugb2YgbW91c2UgZG9lc24ndCBtZXNzIHdpdGhcblx0Ly8gb3RoZXIgaW5zdGFuY2VzIG9mIG1vdXNlXG5cdF9tb3VzZURlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuZWxlbWVudC5vZmYoIFwiLlwiICsgdGhpcy53aWRnZXROYW1lICk7XG5cdFx0aWYgKCB0aGlzLl9tb3VzZU1vdmVEZWxlZ2F0ZSApIHtcblx0XHRcdHRoaXMuZG9jdW1lbnRcblx0XHRcdFx0Lm9mZiggXCJtb3VzZW1vdmUuXCIgKyB0aGlzLndpZGdldE5hbWUsIHRoaXMuX21vdXNlTW92ZURlbGVnYXRlIClcblx0XHRcdFx0Lm9mZiggXCJtb3VzZXVwLlwiICsgdGhpcy53aWRnZXROYW1lLCB0aGlzLl9tb3VzZVVwRGVsZWdhdGUgKTtcblx0XHR9XG5cdH0sXG5cblx0X21vdXNlRG93bjogZnVuY3Rpb24oIGV2ZW50ICkge1xuXG5cdFx0Ly8gZG9uJ3QgbGV0IG1vcmUgdGhhbiBvbmUgd2lkZ2V0IGhhbmRsZSBtb3VzZVN0YXJ0XG5cdFx0aWYgKCBtb3VzZUhhbmRsZWQgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5fbW91c2VNb3ZlZCA9IGZhbHNlO1xuXG5cdFx0Ly8gV2UgbWF5IGhhdmUgbWlzc2VkIG1vdXNldXAgKG91dCBvZiB3aW5kb3cpXG5cdFx0KCB0aGlzLl9tb3VzZVN0YXJ0ZWQgJiYgdGhpcy5fbW91c2VVcCggZXZlbnQgKSApO1xuXG5cdFx0dGhpcy5fbW91c2VEb3duRXZlbnQgPSBldmVudDtcblxuXHRcdHZhciB0aGF0ID0gdGhpcyxcblx0XHRcdGJ0bklzTGVmdCA9ICggZXZlbnQud2hpY2ggPT09IDEgKSxcblxuXHRcdFx0Ly8gZXZlbnQudGFyZ2V0Lm5vZGVOYW1lIHdvcmtzIGFyb3VuZCBhIGJ1ZyBpbiBJRSA4IHdpdGhcblx0XHRcdC8vIGRpc2FibGVkIGlucHV0cyAoIzc2MjApXG5cdFx0XHRlbElzQ2FuY2VsID0gKCB0eXBlb2YgdGhpcy5vcHRpb25zLmNhbmNlbCA9PT0gXCJzdHJpbmdcIiAmJiBldmVudC50YXJnZXQubm9kZU5hbWUgP1xuXHRcdFx0XHQkKCBldmVudC50YXJnZXQgKS5jbG9zZXN0KCB0aGlzLm9wdGlvbnMuY2FuY2VsICkubGVuZ3RoIDogZmFsc2UgKTtcblx0XHRpZiAoICFidG5Jc0xlZnQgfHwgZWxJc0NhbmNlbCB8fCAhdGhpcy5fbW91c2VDYXB0dXJlKCBldmVudCApICkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0dGhpcy5tb3VzZURlbGF5TWV0ID0gIXRoaXMub3B0aW9ucy5kZWxheTtcblx0XHRpZiAoICF0aGlzLm1vdXNlRGVsYXlNZXQgKSB7XG5cdFx0XHR0aGlzLl9tb3VzZURlbGF5VGltZXIgPSBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcblx0XHRcdFx0dGhhdC5tb3VzZURlbGF5TWV0ID0gdHJ1ZTtcblx0XHRcdH0sIHRoaXMub3B0aW9ucy5kZWxheSApO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5fbW91c2VEaXN0YW5jZU1ldCggZXZlbnQgKSAmJiB0aGlzLl9tb3VzZURlbGF5TWV0KCBldmVudCApICkge1xuXHRcdFx0dGhpcy5fbW91c2VTdGFydGVkID0gKCB0aGlzLl9tb3VzZVN0YXJ0KCBldmVudCApICE9PSBmYWxzZSApO1xuXHRcdFx0aWYgKCAhdGhpcy5fbW91c2VTdGFydGVkICkge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBDbGljayBldmVudCBtYXkgbmV2ZXIgaGF2ZSBmaXJlZCAoR2Vja28gJiBPcGVyYSlcblx0XHRpZiAoIHRydWUgPT09ICQuZGF0YSggZXZlbnQudGFyZ2V0LCB0aGlzLndpZGdldE5hbWUgKyBcIi5wcmV2ZW50Q2xpY2tFdmVudFwiICkgKSB7XG5cdFx0XHQkLnJlbW92ZURhdGEoIGV2ZW50LnRhcmdldCwgdGhpcy53aWRnZXROYW1lICsgXCIucHJldmVudENsaWNrRXZlbnRcIiApO1xuXHRcdH1cblxuXHRcdC8vIFRoZXNlIGRlbGVnYXRlcyBhcmUgcmVxdWlyZWQgdG8ga2VlcCBjb250ZXh0XG5cdFx0dGhpcy5fbW91c2VNb3ZlRGVsZWdhdGUgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0XHRyZXR1cm4gdGhhdC5fbW91c2VNb3ZlKCBldmVudCApO1xuXHRcdH07XG5cdFx0dGhpcy5fbW91c2VVcERlbGVnYXRlID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdFx0cmV0dXJuIHRoYXQuX21vdXNlVXAoIGV2ZW50ICk7XG5cdFx0fTtcblxuXHRcdHRoaXMuZG9jdW1lbnRcblx0XHRcdC5vbiggXCJtb3VzZW1vdmUuXCIgKyB0aGlzLndpZGdldE5hbWUsIHRoaXMuX21vdXNlTW92ZURlbGVnYXRlIClcblx0XHRcdC5vbiggXCJtb3VzZXVwLlwiICsgdGhpcy53aWRnZXROYW1lLCB0aGlzLl9tb3VzZVVwRGVsZWdhdGUgKTtcblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRtb3VzZUhhbmRsZWQgPSB0cnVlO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9LFxuXG5cdF9tb3VzZU1vdmU6IGZ1bmN0aW9uKCBldmVudCApIHtcblxuXHRcdC8vIE9ubHkgY2hlY2sgZm9yIG1vdXNldXBzIG91dHNpZGUgdGhlIGRvY3VtZW50IGlmIHlvdSd2ZSBtb3ZlZCBpbnNpZGUgdGhlIGRvY3VtZW50XG5cdFx0Ly8gYXQgbGVhc3Qgb25jZS4gVGhpcyBwcmV2ZW50cyB0aGUgZmlyaW5nIG9mIG1vdXNldXAgaW4gdGhlIGNhc2Ugb2YgSUU8OSwgd2hpY2ggd2lsbFxuXHRcdC8vIGZpcmUgYSBtb3VzZW1vdmUgZXZlbnQgaWYgY29udGVudCBpcyBwbGFjZWQgdW5kZXIgdGhlIGN1cnNvci4gU2VlICM3Nzc4XG5cdFx0Ly8gU3VwcG9ydDogSUUgPDlcblx0XHRpZiAoIHRoaXMuX21vdXNlTW92ZWQgKSB7XG5cblx0XHRcdC8vIElFIG1vdXNldXAgY2hlY2sgLSBtb3VzZXVwIGhhcHBlbmVkIHdoZW4gbW91c2Ugd2FzIG91dCBvZiB3aW5kb3dcblx0XHRcdGlmICggJC51aS5pZSAmJiAoICFkb2N1bWVudC5kb2N1bWVudE1vZGUgfHwgZG9jdW1lbnQuZG9jdW1lbnRNb2RlIDwgOSApICYmXG5cdFx0XHRcdFx0IWV2ZW50LmJ1dHRvbiApIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX21vdXNlVXAoIGV2ZW50ICk7XG5cblx0XHRcdC8vIElmcmFtZSBtb3VzZXVwIGNoZWNrIC0gbW91c2V1cCBvY2N1cnJlZCBpbiBhbm90aGVyIGRvY3VtZW50XG5cdFx0XHR9IGVsc2UgaWYgKCAhZXZlbnQud2hpY2ggKSB7XG5cblx0XHRcdFx0Ly8gU3VwcG9ydDogU2FmYXJpIDw9OCAtIDlcblx0XHRcdFx0Ly8gU2FmYXJpIHNldHMgd2hpY2ggdG8gMCBpZiB5b3UgcHJlc3MgYW55IG9mIHRoZSBmb2xsb3dpbmcga2V5c1xuXHRcdFx0XHQvLyBkdXJpbmcgYSBkcmFnICgjMTQ0NjEpXG5cdFx0XHRcdGlmICggZXZlbnQub3JpZ2luYWxFdmVudC5hbHRLZXkgfHwgZXZlbnQub3JpZ2luYWxFdmVudC5jdHJsS2V5IHx8XG5cdFx0XHRcdFx0XHRldmVudC5vcmlnaW5hbEV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQub3JpZ2luYWxFdmVudC5zaGlmdEtleSApIHtcblx0XHRcdFx0XHR0aGlzLmlnbm9yZU1pc3NpbmdXaGljaCA9IHRydWU7XG5cdFx0XHRcdH0gZWxzZSBpZiAoICF0aGlzLmlnbm9yZU1pc3NpbmdXaGljaCApIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5fbW91c2VVcCggZXZlbnQgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggZXZlbnQud2hpY2ggfHwgZXZlbnQuYnV0dG9uICkge1xuXHRcdFx0dGhpcy5fbW91c2VNb3ZlZCA9IHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLl9tb3VzZVN0YXJ0ZWQgKSB7XG5cdFx0XHR0aGlzLl9tb3VzZURyYWcoIGV2ZW50ICk7XG5cdFx0XHRyZXR1cm4gZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR9XG5cblx0XHRpZiAoIHRoaXMuX21vdXNlRGlzdGFuY2VNZXQoIGV2ZW50ICkgJiYgdGhpcy5fbW91c2VEZWxheU1ldCggZXZlbnQgKSApIHtcblx0XHRcdHRoaXMuX21vdXNlU3RhcnRlZCA9XG5cdFx0XHRcdCggdGhpcy5fbW91c2VTdGFydCggdGhpcy5fbW91c2VEb3duRXZlbnQsIGV2ZW50ICkgIT09IGZhbHNlICk7XG5cdFx0XHQoIHRoaXMuX21vdXNlU3RhcnRlZCA/IHRoaXMuX21vdXNlRHJhZyggZXZlbnQgKSA6IHRoaXMuX21vdXNlVXAoIGV2ZW50ICkgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gIXRoaXMuX21vdXNlU3RhcnRlZDtcblx0fSxcblxuXHRfbW91c2VVcDogZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdHRoaXMuZG9jdW1lbnRcblx0XHRcdC5vZmYoIFwibW91c2Vtb3ZlLlwiICsgdGhpcy53aWRnZXROYW1lLCB0aGlzLl9tb3VzZU1vdmVEZWxlZ2F0ZSApXG5cdFx0XHQub2ZmKCBcIm1vdXNldXAuXCIgKyB0aGlzLndpZGdldE5hbWUsIHRoaXMuX21vdXNlVXBEZWxlZ2F0ZSApO1xuXG5cdFx0aWYgKCB0aGlzLl9tb3VzZVN0YXJ0ZWQgKSB7XG5cdFx0XHR0aGlzLl9tb3VzZVN0YXJ0ZWQgPSBmYWxzZTtcblxuXHRcdFx0aWYgKCBldmVudC50YXJnZXQgPT09IHRoaXMuX21vdXNlRG93bkV2ZW50LnRhcmdldCApIHtcblx0XHRcdFx0JC5kYXRhKCBldmVudC50YXJnZXQsIHRoaXMud2lkZ2V0TmFtZSArIFwiLnByZXZlbnRDbGlja0V2ZW50XCIsIHRydWUgKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5fbW91c2VTdG9wKCBldmVudCApO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5fbW91c2VEZWxheVRpbWVyICkge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KCB0aGlzLl9tb3VzZURlbGF5VGltZXIgKTtcblx0XHRcdGRlbGV0ZSB0aGlzLl9tb3VzZURlbGF5VGltZXI7XG5cdFx0fVxuXG5cdFx0dGhpcy5pZ25vcmVNaXNzaW5nV2hpY2ggPSBmYWxzZTtcblx0XHRtb3VzZUhhbmRsZWQgPSBmYWxzZTtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHR9LFxuXG5cdF9tb3VzZURpc3RhbmNlTWV0OiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0cmV0dXJuICggTWF0aC5tYXgoXG5cdFx0XHRcdE1hdGguYWJzKCB0aGlzLl9tb3VzZURvd25FdmVudC5wYWdlWCAtIGV2ZW50LnBhZ2VYICksXG5cdFx0XHRcdE1hdGguYWJzKCB0aGlzLl9tb3VzZURvd25FdmVudC5wYWdlWSAtIGV2ZW50LnBhZ2VZIClcblx0XHRcdCkgPj0gdGhpcy5vcHRpb25zLmRpc3RhbmNlXG5cdFx0KTtcblx0fSxcblxuXHRfbW91c2VEZWxheU1ldDogZnVuY3Rpb24oIC8qIGV2ZW50ICovICkge1xuXHRcdHJldHVybiB0aGlzLm1vdXNlRGVsYXlNZXQ7XG5cdH0sXG5cblx0Ly8gVGhlc2UgYXJlIHBsYWNlaG9sZGVyIG1ldGhvZHMsIHRvIGJlIG92ZXJyaWRlbiBieSBleHRlbmRpbmcgcGx1Z2luXG5cdF9tb3VzZVN0YXJ0OiBmdW5jdGlvbiggLyogZXZlbnQgKi8gKSB7fSxcblx0X21vdXNlRHJhZzogZnVuY3Rpb24oIC8qIGV2ZW50ICovICkge30sXG5cdF9tb3VzZVN0b3A6IGZ1bmN0aW9uKCAvKiBldmVudCAqLyApIHt9LFxuXHRfbW91c2VDYXB0dXJlOiBmdW5jdGlvbiggLyogZXZlbnQgKi8gKSB7IHJldHVybiB0cnVlOyB9XG59ICk7XG5cbn0gKSApO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvanF1ZXJ5LXVpL3VpL3dpZGdldHMvbW91c2UuanNcbi8vIG1vZHVsZSBpZCA9IDlWMnFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyohXG4gKiBqUXVlcnkgVUkgVW5pcXVlIElEIDEuMTIuMVxuICogaHR0cDovL2pxdWVyeXVpLmNvbVxuICpcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBodHRwOi8vanF1ZXJ5Lm9yZy9saWNlbnNlXG4gKi9cblxuLy8+PmxhYmVsOiB1bmlxdWVJZFxuLy8+Pmdyb3VwOiBDb3JlXG4vLz4+ZGVzY3JpcHRpb246IEZ1bmN0aW9ucyB0byBnZW5lcmF0ZSBhbmQgcmVtb3ZlIHVuaXF1ZUlkJ3Ncbi8vPj5kb2NzOiBodHRwOi8vYXBpLmpxdWVyeXVpLmNvbS91bmlxdWVJZC9cblxuKCBmdW5jdGlvbiggZmFjdG9yeSApIHtcblx0aWYgKCB0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCApIHtcblxuXHRcdC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cblx0XHRkZWZpbmUoIFsgXCJqcXVlcnlcIiwgXCIuL3ZlcnNpb25cIiBdLCBmYWN0b3J5ICk7XG5cdH0gZWxzZSB7XG5cblx0XHQvLyBCcm93c2VyIGdsb2JhbHNcblx0XHRmYWN0b3J5KCBqUXVlcnkgKTtcblx0fVxufSAoIGZ1bmN0aW9uKCAkICkge1xuXG5yZXR1cm4gJC5mbi5leHRlbmQoIHtcblx0dW5pcXVlSWQ6ICggZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHV1aWQgPSAwO1xuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICggIXRoaXMuaWQgKSB7XG5cdFx0XHRcdFx0dGhpcy5pZCA9IFwidWktaWQtXCIgKyAoICsrdXVpZCApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0fTtcblx0fSApKCksXG5cblx0cmVtb3ZlVW5pcXVlSWQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKCAvXnVpLWlkLVxcZCskLy50ZXN0KCB0aGlzLmlkICkgKSB7XG5cdFx0XHRcdCQoIHRoaXMgKS5yZW1vdmVBdHRyKCBcImlkXCIgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cbn0gKTtcblxufSApICk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9qcXVlcnktdWkvdWkvdW5pcXVlLWlkLmpzXG4vLyBtb2R1bGUgaWQgPSBEWVVFXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIVxuICogalF1ZXJ5IFVJIERyYWdnYWJsZSAxLjEyLjFcbiAqIGh0dHA6Ly9qcXVlcnl1aS5jb21cbiAqXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogaHR0cDovL2pxdWVyeS5vcmcvbGljZW5zZVxuICovXG5cbi8vPj5sYWJlbDogRHJhZ2dhYmxlXG4vLz4+Z3JvdXA6IEludGVyYWN0aW9uc1xuLy8+PmRlc2NyaXB0aW9uOiBFbmFibGVzIGRyYWdnaW5nIGZ1bmN0aW9uYWxpdHkgZm9yIGFueSBlbGVtZW50LlxuLy8+PmRvY3M6IGh0dHA6Ly9hcGkuanF1ZXJ5dWkuY29tL2RyYWdnYWJsZS9cbi8vPj5kZW1vczogaHR0cDovL2pxdWVyeXVpLmNvbS9kcmFnZ2FibGUvXG4vLz4+Y3NzLnN0cnVjdHVyZTogLi4vLi4vdGhlbWVzL2Jhc2UvZHJhZ2dhYmxlLmNzc1xuXG4oIGZ1bmN0aW9uKCBmYWN0b3J5ICkge1xuXHRpZiAoIHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kICkge1xuXG5cdFx0Ly8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuXHRcdGRlZmluZSggW1xuXHRcdFx0XCJqcXVlcnlcIixcblx0XHRcdFwiLi9tb3VzZVwiLFxuXHRcdFx0XCIuLi9kYXRhXCIsXG5cdFx0XHRcIi4uL3BsdWdpblwiLFxuXHRcdFx0XCIuLi9zYWZlLWFjdGl2ZS1lbGVtZW50XCIsXG5cdFx0XHRcIi4uL3NhZmUtYmx1clwiLFxuXHRcdFx0XCIuLi9zY3JvbGwtcGFyZW50XCIsXG5cdFx0XHRcIi4uL3ZlcnNpb25cIixcblx0XHRcdFwiLi4vd2lkZ2V0XCJcblx0XHRdLCBmYWN0b3J5ICk7XG5cdH0gZWxzZSB7XG5cblx0XHQvLyBCcm93c2VyIGdsb2JhbHNcblx0XHRmYWN0b3J5KCBqUXVlcnkgKTtcblx0fVxufSggZnVuY3Rpb24oICQgKSB7XG5cbiQud2lkZ2V0KCBcInVpLmRyYWdnYWJsZVwiLCAkLnVpLm1vdXNlLCB7XG5cdHZlcnNpb246IFwiMS4xMi4xXCIsXG5cdHdpZGdldEV2ZW50UHJlZml4OiBcImRyYWdcIixcblx0b3B0aW9uczoge1xuXHRcdGFkZENsYXNzZXM6IHRydWUsXG5cdFx0YXBwZW5kVG86IFwicGFyZW50XCIsXG5cdFx0YXhpczogZmFsc2UsXG5cdFx0Y29ubmVjdFRvU29ydGFibGU6IGZhbHNlLFxuXHRcdGNvbnRhaW5tZW50OiBmYWxzZSxcblx0XHRjdXJzb3I6IFwiYXV0b1wiLFxuXHRcdGN1cnNvckF0OiBmYWxzZSxcblx0XHRncmlkOiBmYWxzZSxcblx0XHRoYW5kbGU6IGZhbHNlLFxuXHRcdGhlbHBlcjogXCJvcmlnaW5hbFwiLFxuXHRcdGlmcmFtZUZpeDogZmFsc2UsXG5cdFx0b3BhY2l0eTogZmFsc2UsXG5cdFx0cmVmcmVzaFBvc2l0aW9uczogZmFsc2UsXG5cdFx0cmV2ZXJ0OiBmYWxzZSxcblx0XHRyZXZlcnREdXJhdGlvbjogNTAwLFxuXHRcdHNjb3BlOiBcImRlZmF1bHRcIixcblx0XHRzY3JvbGw6IHRydWUsXG5cdFx0c2Nyb2xsU2Vuc2l0aXZpdHk6IDIwLFxuXHRcdHNjcm9sbFNwZWVkOiAyMCxcblx0XHRzbmFwOiBmYWxzZSxcblx0XHRzbmFwTW9kZTogXCJib3RoXCIsXG5cdFx0c25hcFRvbGVyYW5jZTogMjAsXG5cdFx0c3RhY2s6IGZhbHNlLFxuXHRcdHpJbmRleDogZmFsc2UsXG5cblx0XHQvLyBDYWxsYmFja3Ncblx0XHRkcmFnOiBudWxsLFxuXHRcdHN0YXJ0OiBudWxsLFxuXHRcdHN0b3A6IG51bGxcblx0fSxcblx0X2NyZWF0ZTogZnVuY3Rpb24oKSB7XG5cblx0XHRpZiAoIHRoaXMub3B0aW9ucy5oZWxwZXIgPT09IFwib3JpZ2luYWxcIiApIHtcblx0XHRcdHRoaXMuX3NldFBvc2l0aW9uUmVsYXRpdmUoKTtcblx0XHR9XG5cdFx0aWYgKCB0aGlzLm9wdGlvbnMuYWRkQ2xhc3NlcyApIHtcblx0XHRcdHRoaXMuX2FkZENsYXNzKCBcInVpLWRyYWdnYWJsZVwiICk7XG5cdFx0fVxuXHRcdHRoaXMuX3NldEhhbmRsZUNsYXNzTmFtZSgpO1xuXG5cdFx0dGhpcy5fbW91c2VJbml0KCk7XG5cdH0sXG5cblx0X3NldE9wdGlvbjogZnVuY3Rpb24oIGtleSwgdmFsdWUgKSB7XG5cdFx0dGhpcy5fc3VwZXIoIGtleSwgdmFsdWUgKTtcblx0XHRpZiAoIGtleSA9PT0gXCJoYW5kbGVcIiApIHtcblx0XHRcdHRoaXMuX3JlbW92ZUhhbmRsZUNsYXNzTmFtZSgpO1xuXHRcdFx0dGhpcy5fc2V0SGFuZGxlQ2xhc3NOYW1lKCk7XG5cdFx0fVxuXHR9LFxuXG5cdF9kZXN0cm95OiBmdW5jdGlvbigpIHtcblx0XHRpZiAoICggdGhpcy5oZWxwZXIgfHwgdGhpcy5lbGVtZW50ICkuaXMoIFwiLnVpLWRyYWdnYWJsZS1kcmFnZ2luZ1wiICkgKSB7XG5cdFx0XHR0aGlzLmRlc3Ryb3lPbkNsZWFyID0gdHJ1ZTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5fcmVtb3ZlSGFuZGxlQ2xhc3NOYW1lKCk7XG5cdFx0dGhpcy5fbW91c2VEZXN0cm95KCk7XG5cdH0sXG5cblx0X21vdXNlQ2FwdHVyZTogZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdHZhciBvID0gdGhpcy5vcHRpb25zO1xuXG5cdFx0Ly8gQW1vbmcgb3RoZXJzLCBwcmV2ZW50IGEgZHJhZyBvbiBhIHJlc2l6YWJsZS1oYW5kbGVcblx0XHRpZiAoIHRoaXMuaGVscGVyIHx8IG8uZGlzYWJsZWQgfHxcblx0XHRcdFx0JCggZXZlbnQudGFyZ2V0ICkuY2xvc2VzdCggXCIudWktcmVzaXphYmxlLWhhbmRsZVwiICkubGVuZ3RoID4gMCApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvL1F1aXQgaWYgd2UncmUgbm90IG9uIGEgdmFsaWQgaGFuZGxlXG5cdFx0dGhpcy5oYW5kbGUgPSB0aGlzLl9nZXRIYW5kbGUoIGV2ZW50ICk7XG5cdFx0aWYgKCAhdGhpcy5oYW5kbGUgKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0dGhpcy5fYmx1ckFjdGl2ZUVsZW1lbnQoIGV2ZW50ICk7XG5cblx0XHR0aGlzLl9ibG9ja0ZyYW1lcyggby5pZnJhbWVGaXggPT09IHRydWUgPyBcImlmcmFtZVwiIDogby5pZnJhbWVGaXggKTtcblxuXHRcdHJldHVybiB0cnVlO1xuXG5cdH0sXG5cblx0X2Jsb2NrRnJhbWVzOiBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0dGhpcy5pZnJhbWVCbG9ja3MgPSB0aGlzLmRvY3VtZW50LmZpbmQoIHNlbGVjdG9yICkubWFwKCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBpZnJhbWUgPSAkKCB0aGlzICk7XG5cblx0XHRcdHJldHVybiAkKCBcIjxkaXY+XCIgKVxuXHRcdFx0XHQuY3NzKCBcInBvc2l0aW9uXCIsIFwiYWJzb2x1dGVcIiApXG5cdFx0XHRcdC5hcHBlbmRUbyggaWZyYW1lLnBhcmVudCgpIClcblx0XHRcdFx0Lm91dGVyV2lkdGgoIGlmcmFtZS5vdXRlcldpZHRoKCkgKVxuXHRcdFx0XHQub3V0ZXJIZWlnaHQoIGlmcmFtZS5vdXRlckhlaWdodCgpIClcblx0XHRcdFx0Lm9mZnNldCggaWZyYW1lLm9mZnNldCgpIClbIDAgXTtcblx0XHR9ICk7XG5cdH0sXG5cblx0X3VuYmxvY2tGcmFtZXM6IGZ1bmN0aW9uKCkge1xuXHRcdGlmICggdGhpcy5pZnJhbWVCbG9ja3MgKSB7XG5cdFx0XHR0aGlzLmlmcmFtZUJsb2Nrcy5yZW1vdmUoKTtcblx0XHRcdGRlbGV0ZSB0aGlzLmlmcmFtZUJsb2Nrcztcblx0XHR9XG5cdH0sXG5cblx0X2JsdXJBY3RpdmVFbGVtZW50OiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0dmFyIGFjdGl2ZUVsZW1lbnQgPSAkLnVpLnNhZmVBY3RpdmVFbGVtZW50KCB0aGlzLmRvY3VtZW50WyAwIF0gKSxcblx0XHRcdHRhcmdldCA9ICQoIGV2ZW50LnRhcmdldCApO1xuXG5cdFx0Ly8gRG9uJ3QgYmx1ciBpZiB0aGUgZXZlbnQgb2NjdXJyZWQgb24gYW4gZWxlbWVudCB0aGF0IGlzIHdpdGhpblxuXHRcdC8vIHRoZSBjdXJyZW50bHkgZm9jdXNlZCBlbGVtZW50XG5cdFx0Ly8gU2VlICMxMDUyNywgIzEyNDcyXG5cdFx0aWYgKCB0YXJnZXQuY2xvc2VzdCggYWN0aXZlRWxlbWVudCApLmxlbmd0aCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBCbHVyIGFueSBlbGVtZW50IHRoYXQgY3VycmVudGx5IGhhcyBmb2N1cywgc2VlICM0MjYxXG5cdFx0JC51aS5zYWZlQmx1ciggYWN0aXZlRWxlbWVudCApO1xuXHR9LFxuXG5cdF9tb3VzZVN0YXJ0OiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cblx0XHR2YXIgbyA9IHRoaXMub3B0aW9ucztcblxuXHRcdC8vQ3JlYXRlIGFuZCBhcHBlbmQgdGhlIHZpc2libGUgaGVscGVyXG5cdFx0dGhpcy5oZWxwZXIgPSB0aGlzLl9jcmVhdGVIZWxwZXIoIGV2ZW50ICk7XG5cblx0XHR0aGlzLl9hZGRDbGFzcyggdGhpcy5oZWxwZXIsIFwidWktZHJhZ2dhYmxlLWRyYWdnaW5nXCIgKTtcblxuXHRcdC8vQ2FjaGUgdGhlIGhlbHBlciBzaXplXG5cdFx0dGhpcy5fY2FjaGVIZWxwZXJQcm9wb3J0aW9ucygpO1xuXG5cdFx0Ly9JZiBkZG1hbmFnZXIgaXMgdXNlZCBmb3IgZHJvcHBhYmxlcywgc2V0IHRoZSBnbG9iYWwgZHJhZ2dhYmxlXG5cdFx0aWYgKCAkLnVpLmRkbWFuYWdlciApIHtcblx0XHRcdCQudWkuZGRtYW5hZ2VyLmN1cnJlbnQgPSB0aGlzO1xuXHRcdH1cblxuXHRcdC8qXG5cdFx0ICogLSBQb3NpdGlvbiBnZW5lcmF0aW9uIC1cblx0XHQgKiBUaGlzIGJsb2NrIGdlbmVyYXRlcyBldmVyeXRoaW5nIHBvc2l0aW9uIHJlbGF0ZWQgLSBpdCdzIHRoZSBjb3JlIG9mIGRyYWdnYWJsZXMuXG5cdFx0ICovXG5cblx0XHQvL0NhY2hlIHRoZSBtYXJnaW5zIG9mIHRoZSBvcmlnaW5hbCBlbGVtZW50XG5cdFx0dGhpcy5fY2FjaGVNYXJnaW5zKCk7XG5cblx0XHQvL1N0b3JlIHRoZSBoZWxwZXIncyBjc3MgcG9zaXRpb25cblx0XHR0aGlzLmNzc1Bvc2l0aW9uID0gdGhpcy5oZWxwZXIuY3NzKCBcInBvc2l0aW9uXCIgKTtcblx0XHR0aGlzLnNjcm9sbFBhcmVudCA9IHRoaXMuaGVscGVyLnNjcm9sbFBhcmVudCggdHJ1ZSApO1xuXHRcdHRoaXMub2Zmc2V0UGFyZW50ID0gdGhpcy5oZWxwZXIub2Zmc2V0UGFyZW50KCk7XG5cdFx0dGhpcy5oYXNGaXhlZEFuY2VzdG9yID0gdGhpcy5oZWxwZXIucGFyZW50cygpLmZpbHRlciggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiAkKCB0aGlzICkuY3NzKCBcInBvc2l0aW9uXCIgKSA9PT0gXCJmaXhlZFwiO1xuXHRcdFx0fSApLmxlbmd0aCA+IDA7XG5cblx0XHQvL1RoZSBlbGVtZW50J3MgYWJzb2x1dGUgcG9zaXRpb24gb24gdGhlIHBhZ2UgbWludXMgbWFyZ2luc1xuXHRcdHRoaXMucG9zaXRpb25BYnMgPSB0aGlzLmVsZW1lbnQub2Zmc2V0KCk7XG5cdFx0dGhpcy5fcmVmcmVzaE9mZnNldHMoIGV2ZW50ICk7XG5cblx0XHQvL0dlbmVyYXRlIHRoZSBvcmlnaW5hbCBwb3NpdGlvblxuXHRcdHRoaXMub3JpZ2luYWxQb3NpdGlvbiA9IHRoaXMucG9zaXRpb24gPSB0aGlzLl9nZW5lcmF0ZVBvc2l0aW9uKCBldmVudCwgZmFsc2UgKTtcblx0XHR0aGlzLm9yaWdpbmFsUGFnZVggPSBldmVudC5wYWdlWDtcblx0XHR0aGlzLm9yaWdpbmFsUGFnZVkgPSBldmVudC5wYWdlWTtcblxuXHRcdC8vQWRqdXN0IHRoZSBtb3VzZSBvZmZzZXQgcmVsYXRpdmUgdG8gdGhlIGhlbHBlciBpZiBcImN1cnNvckF0XCIgaXMgc3VwcGxpZWRcblx0XHQoIG8uY3Vyc29yQXQgJiYgdGhpcy5fYWRqdXN0T2Zmc2V0RnJvbUhlbHBlciggby5jdXJzb3JBdCApICk7XG5cblx0XHQvL1NldCBhIGNvbnRhaW5tZW50IGlmIGdpdmVuIGluIHRoZSBvcHRpb25zXG5cdFx0dGhpcy5fc2V0Q29udGFpbm1lbnQoKTtcblxuXHRcdC8vVHJpZ2dlciBldmVudCArIGNhbGxiYWNrc1xuXHRcdGlmICggdGhpcy5fdHJpZ2dlciggXCJzdGFydFwiLCBldmVudCApID09PSBmYWxzZSApIHtcblx0XHRcdHRoaXMuX2NsZWFyKCk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly9SZWNhY2hlIHRoZSBoZWxwZXIgc2l6ZVxuXHRcdHRoaXMuX2NhY2hlSGVscGVyUHJvcG9ydGlvbnMoKTtcblxuXHRcdC8vUHJlcGFyZSB0aGUgZHJvcHBhYmxlIG9mZnNldHNcblx0XHRpZiAoICQudWkuZGRtYW5hZ2VyICYmICFvLmRyb3BCZWhhdmlvdXIgKSB7XG5cdFx0XHQkLnVpLmRkbWFuYWdlci5wcmVwYXJlT2Zmc2V0cyggdGhpcywgZXZlbnQgKTtcblx0XHR9XG5cblx0XHQvLyBFeGVjdXRlIHRoZSBkcmFnIG9uY2UgLSB0aGlzIGNhdXNlcyB0aGUgaGVscGVyIG5vdCB0byBiZSB2aXNpYmxlIGJlZm9yZSBnZXR0aW5nIGl0c1xuXHRcdC8vIGNvcnJlY3QgcG9zaXRpb25cblx0XHR0aGlzLl9tb3VzZURyYWcoIGV2ZW50LCB0cnVlICk7XG5cblx0XHQvLyBJZiB0aGUgZGRtYW5hZ2VyIGlzIHVzZWQgZm9yIGRyb3BwYWJsZXMsIGluZm9ybSB0aGUgbWFuYWdlciB0aGF0IGRyYWdnaW5nIGhhcyBzdGFydGVkXG5cdFx0Ly8gKHNlZSAjNTAwMylcblx0XHRpZiAoICQudWkuZGRtYW5hZ2VyICkge1xuXHRcdFx0JC51aS5kZG1hbmFnZXIuZHJhZ1N0YXJ0KCB0aGlzLCBldmVudCApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9LFxuXG5cdF9yZWZyZXNoT2Zmc2V0czogZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdHRoaXMub2Zmc2V0ID0ge1xuXHRcdFx0dG9wOiB0aGlzLnBvc2l0aW9uQWJzLnRvcCAtIHRoaXMubWFyZ2lucy50b3AsXG5cdFx0XHRsZWZ0OiB0aGlzLnBvc2l0aW9uQWJzLmxlZnQgLSB0aGlzLm1hcmdpbnMubGVmdCxcblx0XHRcdHNjcm9sbDogZmFsc2UsXG5cdFx0XHRwYXJlbnQ6IHRoaXMuX2dldFBhcmVudE9mZnNldCgpLFxuXHRcdFx0cmVsYXRpdmU6IHRoaXMuX2dldFJlbGF0aXZlT2Zmc2V0KClcblx0XHR9O1xuXG5cdFx0dGhpcy5vZmZzZXQuY2xpY2sgPSB7XG5cdFx0XHRsZWZ0OiBldmVudC5wYWdlWCAtIHRoaXMub2Zmc2V0LmxlZnQsXG5cdFx0XHR0b3A6IGV2ZW50LnBhZ2VZIC0gdGhpcy5vZmZzZXQudG9wXG5cdFx0fTtcblx0fSxcblxuXHRfbW91c2VEcmFnOiBmdW5jdGlvbiggZXZlbnQsIG5vUHJvcGFnYXRpb24gKSB7XG5cblx0XHQvLyByZXNldCBhbnkgbmVjZXNzYXJ5IGNhY2hlZCBwcm9wZXJ0aWVzIChzZWUgIzUwMDkpXG5cdFx0aWYgKCB0aGlzLmhhc0ZpeGVkQW5jZXN0b3IgKSB7XG5cdFx0XHR0aGlzLm9mZnNldC5wYXJlbnQgPSB0aGlzLl9nZXRQYXJlbnRPZmZzZXQoKTtcblx0XHR9XG5cblx0XHQvL0NvbXB1dGUgdGhlIGhlbHBlcnMgcG9zaXRpb25cblx0XHR0aGlzLnBvc2l0aW9uID0gdGhpcy5fZ2VuZXJhdGVQb3NpdGlvbiggZXZlbnQsIHRydWUgKTtcblx0XHR0aGlzLnBvc2l0aW9uQWJzID0gdGhpcy5fY29udmVydFBvc2l0aW9uVG8oIFwiYWJzb2x1dGVcIiApO1xuXG5cdFx0Ly9DYWxsIHBsdWdpbnMgYW5kIGNhbGxiYWNrcyBhbmQgdXNlIHRoZSByZXN1bHRpbmcgcG9zaXRpb24gaWYgc29tZXRoaW5nIGlzIHJldHVybmVkXG5cdFx0aWYgKCAhbm9Qcm9wYWdhdGlvbiApIHtcblx0XHRcdHZhciB1aSA9IHRoaXMuX3VpSGFzaCgpO1xuXHRcdFx0aWYgKCB0aGlzLl90cmlnZ2VyKCBcImRyYWdcIiwgZXZlbnQsIHVpICkgPT09IGZhbHNlICkge1xuXHRcdFx0XHR0aGlzLl9tb3VzZVVwKCBuZXcgJC5FdmVudCggXCJtb3VzZXVwXCIsIGV2ZW50ICkgKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5wb3NpdGlvbiA9IHVpLnBvc2l0aW9uO1xuXHRcdH1cblxuXHRcdHRoaXMuaGVscGVyWyAwIF0uc3R5bGUubGVmdCA9IHRoaXMucG9zaXRpb24ubGVmdCArIFwicHhcIjtcblx0XHR0aGlzLmhlbHBlclsgMCBdLnN0eWxlLnRvcCA9IHRoaXMucG9zaXRpb24udG9wICsgXCJweFwiO1xuXG5cdFx0aWYgKCAkLnVpLmRkbWFuYWdlciApIHtcblx0XHRcdCQudWkuZGRtYW5hZ2VyLmRyYWcoIHRoaXMsIGV2ZW50ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXG5cdF9tb3VzZVN0b3A6IGZ1bmN0aW9uKCBldmVudCApIHtcblxuXHRcdC8vSWYgd2UgYXJlIHVzaW5nIGRyb3BwYWJsZXMsIGluZm9ybSB0aGUgbWFuYWdlciBhYm91dCB0aGUgZHJvcFxuXHRcdHZhciB0aGF0ID0gdGhpcyxcblx0XHRcdGRyb3BwZWQgPSBmYWxzZTtcblx0XHRpZiAoICQudWkuZGRtYW5hZ2VyICYmICF0aGlzLm9wdGlvbnMuZHJvcEJlaGF2aW91ciApIHtcblx0XHRcdGRyb3BwZWQgPSAkLnVpLmRkbWFuYWdlci5kcm9wKCB0aGlzLCBldmVudCApO1xuXHRcdH1cblxuXHRcdC8vaWYgYSBkcm9wIGNvbWVzIGZyb20gb3V0c2lkZSAoYSBzb3J0YWJsZSlcblx0XHRpZiAoIHRoaXMuZHJvcHBlZCApIHtcblx0XHRcdGRyb3BwZWQgPSB0aGlzLmRyb3BwZWQ7XG5cdFx0XHR0aGlzLmRyb3BwZWQgPSBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAoICggdGhpcy5vcHRpb25zLnJldmVydCA9PT0gXCJpbnZhbGlkXCIgJiYgIWRyb3BwZWQgKSB8fFxuXHRcdFx0XHQoIHRoaXMub3B0aW9ucy5yZXZlcnQgPT09IFwidmFsaWRcIiAmJiBkcm9wcGVkICkgfHxcblx0XHRcdFx0dGhpcy5vcHRpb25zLnJldmVydCA9PT0gdHJ1ZSB8fCAoICQuaXNGdW5jdGlvbiggdGhpcy5vcHRpb25zLnJldmVydCApICYmXG5cdFx0XHRcdHRoaXMub3B0aW9ucy5yZXZlcnQuY2FsbCggdGhpcy5lbGVtZW50LCBkcm9wcGVkICkgKVxuXHRcdCkge1xuXHRcdFx0JCggdGhpcy5oZWxwZXIgKS5hbmltYXRlKFxuXHRcdFx0XHR0aGlzLm9yaWdpbmFsUG9zaXRpb24sXG5cdFx0XHRcdHBhcnNlSW50KCB0aGlzLm9wdGlvbnMucmV2ZXJ0RHVyYXRpb24sIDEwICksXG5cdFx0XHRcdGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmICggdGhhdC5fdHJpZ2dlciggXCJzdG9wXCIsIGV2ZW50ICkgIT09IGZhbHNlICkge1xuXHRcdFx0XHRcdFx0dGhhdC5fY2xlYXIoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICggdGhpcy5fdHJpZ2dlciggXCJzdG9wXCIsIGV2ZW50ICkgIT09IGZhbHNlICkge1xuXHRcdFx0XHR0aGlzLl9jbGVhcigpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fSxcblxuXHRfbW91c2VVcDogZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdHRoaXMuX3VuYmxvY2tGcmFtZXMoKTtcblxuXHRcdC8vIElmIHRoZSBkZG1hbmFnZXIgaXMgdXNlZCBmb3IgZHJvcHBhYmxlcywgaW5mb3JtIHRoZSBtYW5hZ2VyIHRoYXQgZHJhZ2dpbmcgaGFzIHN0b3BwZWRcblx0XHQvLyAoc2VlICM1MDAzKVxuXHRcdGlmICggJC51aS5kZG1hbmFnZXIgKSB7XG5cdFx0XHQkLnVpLmRkbWFuYWdlci5kcmFnU3RvcCggdGhpcywgZXZlbnQgKTtcblx0XHR9XG5cblx0XHQvLyBPbmx5IG5lZWQgdG8gZm9jdXMgaWYgdGhlIGV2ZW50IG9jY3VycmVkIG9uIHRoZSBkcmFnZ2FibGUgaXRzZWxmLCBzZWUgIzEwNTI3XG5cdFx0aWYgKCB0aGlzLmhhbmRsZUVsZW1lbnQuaXMoIGV2ZW50LnRhcmdldCApICkge1xuXG5cdFx0XHQvLyBUaGUgaW50ZXJhY3Rpb24gaXMgb3Zlcjsgd2hldGhlciBvciBub3QgdGhlIGNsaWNrIHJlc3VsdGVkIGluIGEgZHJhZyxcblx0XHRcdC8vIGZvY3VzIHRoZSBlbGVtZW50XG5cdFx0XHR0aGlzLmVsZW1lbnQudHJpZ2dlciggXCJmb2N1c1wiICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICQudWkubW91c2UucHJvdG90eXBlLl9tb3VzZVVwLmNhbGwoIHRoaXMsIGV2ZW50ICk7XG5cdH0sXG5cblx0Y2FuY2VsOiBmdW5jdGlvbigpIHtcblxuXHRcdGlmICggdGhpcy5oZWxwZXIuaXMoIFwiLnVpLWRyYWdnYWJsZS1kcmFnZ2luZ1wiICkgKSB7XG5cdFx0XHR0aGlzLl9tb3VzZVVwKCBuZXcgJC5FdmVudCggXCJtb3VzZXVwXCIsIHsgdGFyZ2V0OiB0aGlzLmVsZW1lbnRbIDAgXSB9ICkgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5fY2xlYXIoKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdF9nZXRIYW5kbGU6IGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHRyZXR1cm4gdGhpcy5vcHRpb25zLmhhbmRsZSA/XG5cdFx0XHQhISQoIGV2ZW50LnRhcmdldCApLmNsb3Nlc3QoIHRoaXMuZWxlbWVudC5maW5kKCB0aGlzLm9wdGlvbnMuaGFuZGxlICkgKS5sZW5ndGggOlxuXHRcdFx0dHJ1ZTtcblx0fSxcblxuXHRfc2V0SGFuZGxlQ2xhc3NOYW1lOiBmdW5jdGlvbigpIHtcblx0XHR0aGlzLmhhbmRsZUVsZW1lbnQgPSB0aGlzLm9wdGlvbnMuaGFuZGxlID9cblx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCB0aGlzLm9wdGlvbnMuaGFuZGxlICkgOiB0aGlzLmVsZW1lbnQ7XG5cdFx0dGhpcy5fYWRkQ2xhc3MoIHRoaXMuaGFuZGxlRWxlbWVudCwgXCJ1aS1kcmFnZ2FibGUtaGFuZGxlXCIgKTtcblx0fSxcblxuXHRfcmVtb3ZlSGFuZGxlQ2xhc3NOYW1lOiBmdW5jdGlvbigpIHtcblx0XHR0aGlzLl9yZW1vdmVDbGFzcyggdGhpcy5oYW5kbGVFbGVtZW50LCBcInVpLWRyYWdnYWJsZS1oYW5kbGVcIiApO1xuXHR9LFxuXG5cdF9jcmVhdGVIZWxwZXI6IGZ1bmN0aW9uKCBldmVudCApIHtcblxuXHRcdHZhciBvID0gdGhpcy5vcHRpb25zLFxuXHRcdFx0aGVscGVySXNGdW5jdGlvbiA9ICQuaXNGdW5jdGlvbiggby5oZWxwZXIgKSxcblx0XHRcdGhlbHBlciA9IGhlbHBlcklzRnVuY3Rpb24gP1xuXHRcdFx0XHQkKCBvLmhlbHBlci5hcHBseSggdGhpcy5lbGVtZW50WyAwIF0sIFsgZXZlbnQgXSApICkgOlxuXHRcdFx0XHQoIG8uaGVscGVyID09PSBcImNsb25lXCIgP1xuXHRcdFx0XHRcdHRoaXMuZWxlbWVudC5jbG9uZSgpLnJlbW92ZUF0dHIoIFwiaWRcIiApIDpcblx0XHRcdFx0XHR0aGlzLmVsZW1lbnQgKTtcblxuXHRcdGlmICggIWhlbHBlci5wYXJlbnRzKCBcImJvZHlcIiApLmxlbmd0aCApIHtcblx0XHRcdGhlbHBlci5hcHBlbmRUbyggKCBvLmFwcGVuZFRvID09PSBcInBhcmVudFwiID9cblx0XHRcdFx0dGhpcy5lbGVtZW50WyAwIF0ucGFyZW50Tm9kZSA6XG5cdFx0XHRcdG8uYXBwZW5kVG8gKSApO1xuXHRcdH1cblxuXHRcdC8vIEh0dHA6Ly9idWdzLmpxdWVyeXVpLmNvbS90aWNrZXQvOTQ0NlxuXHRcdC8vIGEgaGVscGVyIGZ1bmN0aW9uIGNhbiByZXR1cm4gdGhlIG9yaWdpbmFsIGVsZW1lbnRcblx0XHQvLyB3aGljaCB3b3VsZG4ndCBoYXZlIGJlZW4gc2V0IHRvIHJlbGF0aXZlIGluIF9jcmVhdGVcblx0XHRpZiAoIGhlbHBlcklzRnVuY3Rpb24gJiYgaGVscGVyWyAwIF0gPT09IHRoaXMuZWxlbWVudFsgMCBdICkge1xuXHRcdFx0dGhpcy5fc2V0UG9zaXRpb25SZWxhdGl2ZSgpO1xuXHRcdH1cblxuXHRcdGlmICggaGVscGVyWyAwIF0gIT09IHRoaXMuZWxlbWVudFsgMCBdICYmXG5cdFx0XHRcdCEoIC8oZml4ZWR8YWJzb2x1dGUpLyApLnRlc3QoIGhlbHBlci5jc3MoIFwicG9zaXRpb25cIiApICkgKSB7XG5cdFx0XHRoZWxwZXIuY3NzKCBcInBvc2l0aW9uXCIsIFwiYWJzb2x1dGVcIiApO1xuXHRcdH1cblxuXHRcdHJldHVybiBoZWxwZXI7XG5cblx0fSxcblxuXHRfc2V0UG9zaXRpb25SZWxhdGl2ZTogZnVuY3Rpb24oKSB7XG5cdFx0aWYgKCAhKCAvXig/OnJ8YXxmKS8gKS50ZXN0KCB0aGlzLmVsZW1lbnQuY3NzKCBcInBvc2l0aW9uXCIgKSApICkge1xuXHRcdFx0dGhpcy5lbGVtZW50WyAwIF0uc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG5cdFx0fVxuXHR9LFxuXG5cdF9hZGp1c3RPZmZzZXRGcm9tSGVscGVyOiBmdW5jdGlvbiggb2JqICkge1xuXHRcdGlmICggdHlwZW9mIG9iaiA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdG9iaiA9IG9iai5zcGxpdCggXCIgXCIgKTtcblx0XHR9XG5cdFx0aWYgKCAkLmlzQXJyYXkoIG9iaiApICkge1xuXHRcdFx0b2JqID0geyBsZWZ0OiArb2JqWyAwIF0sIHRvcDogK29ialsgMSBdIHx8IDAgfTtcblx0XHR9XG5cdFx0aWYgKCBcImxlZnRcIiBpbiBvYmogKSB7XG5cdFx0XHR0aGlzLm9mZnNldC5jbGljay5sZWZ0ID0gb2JqLmxlZnQgKyB0aGlzLm1hcmdpbnMubGVmdDtcblx0XHR9XG5cdFx0aWYgKCBcInJpZ2h0XCIgaW4gb2JqICkge1xuXHRcdFx0dGhpcy5vZmZzZXQuY2xpY2subGVmdCA9IHRoaXMuaGVscGVyUHJvcG9ydGlvbnMud2lkdGggLSBvYmoucmlnaHQgKyB0aGlzLm1hcmdpbnMubGVmdDtcblx0XHR9XG5cdFx0aWYgKCBcInRvcFwiIGluIG9iaiApIHtcblx0XHRcdHRoaXMub2Zmc2V0LmNsaWNrLnRvcCA9IG9iai50b3AgKyB0aGlzLm1hcmdpbnMudG9wO1xuXHRcdH1cblx0XHRpZiAoIFwiYm90dG9tXCIgaW4gb2JqICkge1xuXHRcdFx0dGhpcy5vZmZzZXQuY2xpY2sudG9wID0gdGhpcy5oZWxwZXJQcm9wb3J0aW9ucy5oZWlnaHQgLSBvYmouYm90dG9tICsgdGhpcy5tYXJnaW5zLnRvcDtcblx0XHR9XG5cdH0sXG5cblx0X2lzUm9vdE5vZGU6IGZ1bmN0aW9uKCBlbGVtZW50ICkge1xuXHRcdHJldHVybiAoIC8oaHRtbHxib2R5KS9pICkudGVzdCggZWxlbWVudC50YWdOYW1lICkgfHwgZWxlbWVudCA9PT0gdGhpcy5kb2N1bWVudFsgMCBdO1xuXHR9LFxuXG5cdF9nZXRQYXJlbnRPZmZzZXQ6IGZ1bmN0aW9uKCkge1xuXG5cdFx0Ly9HZXQgdGhlIG9mZnNldFBhcmVudCBhbmQgY2FjaGUgaXRzIHBvc2l0aW9uXG5cdFx0dmFyIHBvID0gdGhpcy5vZmZzZXRQYXJlbnQub2Zmc2V0KCksXG5cdFx0XHRkb2N1bWVudCA9IHRoaXMuZG9jdW1lbnRbIDAgXTtcblxuXHRcdC8vIFRoaXMgaXMgYSBzcGVjaWFsIGNhc2Ugd2hlcmUgd2UgbmVlZCB0byBtb2RpZnkgYSBvZmZzZXQgY2FsY3VsYXRlZCBvbiBzdGFydCwgc2luY2UgdGhlXG5cdFx0Ly8gZm9sbG93aW5nIGhhcHBlbmVkOlxuXHRcdC8vIDEuIFRoZSBwb3NpdGlvbiBvZiB0aGUgaGVscGVyIGlzIGFic29sdXRlLCBzbyBpdCdzIHBvc2l0aW9uIGlzIGNhbGN1bGF0ZWQgYmFzZWQgb24gdGhlXG5cdFx0Ly8gbmV4dCBwb3NpdGlvbmVkIHBhcmVudFxuXHRcdC8vIDIuIFRoZSBhY3R1YWwgb2Zmc2V0IHBhcmVudCBpcyBhIGNoaWxkIG9mIHRoZSBzY3JvbGwgcGFyZW50LCBhbmQgdGhlIHNjcm9sbCBwYXJlbnQgaXNuJ3Rcblx0XHQvLyB0aGUgZG9jdW1lbnQsIHdoaWNoIG1lYW5zIHRoYXQgdGhlIHNjcm9sbCBpcyBpbmNsdWRlZCBpbiB0aGUgaW5pdGlhbCBjYWxjdWxhdGlvbiBvZiB0aGVcblx0XHQvLyBvZmZzZXQgb2YgdGhlIHBhcmVudCwgYW5kIG5ldmVyIHJlY2FsY3VsYXRlZCB1cG9uIGRyYWdcblx0XHRpZiAoIHRoaXMuY3NzUG9zaXRpb24gPT09IFwiYWJzb2x1dGVcIiAmJiB0aGlzLnNjcm9sbFBhcmVudFsgMCBdICE9PSBkb2N1bWVudCAmJlxuXHRcdFx0XHQkLmNvbnRhaW5zKCB0aGlzLnNjcm9sbFBhcmVudFsgMCBdLCB0aGlzLm9mZnNldFBhcmVudFsgMCBdICkgKSB7XG5cdFx0XHRwby5sZWZ0ICs9IHRoaXMuc2Nyb2xsUGFyZW50LnNjcm9sbExlZnQoKTtcblx0XHRcdHBvLnRvcCArPSB0aGlzLnNjcm9sbFBhcmVudC5zY3JvbGxUb3AoKTtcblx0XHR9XG5cblx0XHRpZiAoIHRoaXMuX2lzUm9vdE5vZGUoIHRoaXMub2Zmc2V0UGFyZW50WyAwIF0gKSApIHtcblx0XHRcdHBvID0geyB0b3A6IDAsIGxlZnQ6IDAgfTtcblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0dG9wOiBwby50b3AgKyAoIHBhcnNlSW50KCB0aGlzLm9mZnNldFBhcmVudC5jc3MoIFwiYm9yZGVyVG9wV2lkdGhcIiApLCAxMCApIHx8IDAgKSxcblx0XHRcdGxlZnQ6IHBvLmxlZnQgKyAoIHBhcnNlSW50KCB0aGlzLm9mZnNldFBhcmVudC5jc3MoIFwiYm9yZGVyTGVmdFdpZHRoXCIgKSwgMTAgKSB8fCAwIClcblx0XHR9O1xuXG5cdH0sXG5cblx0X2dldFJlbGF0aXZlT2Zmc2V0OiBmdW5jdGlvbigpIHtcblx0XHRpZiAoIHRoaXMuY3NzUG9zaXRpb24gIT09IFwicmVsYXRpdmVcIiApIHtcblx0XHRcdHJldHVybiB7IHRvcDogMCwgbGVmdDogMCB9O1xuXHRcdH1cblxuXHRcdHZhciBwID0gdGhpcy5lbGVtZW50LnBvc2l0aW9uKCksXG5cdFx0XHRzY3JvbGxJc1Jvb3ROb2RlID0gdGhpcy5faXNSb290Tm9kZSggdGhpcy5zY3JvbGxQYXJlbnRbIDAgXSApO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHRvcDogcC50b3AgLSAoIHBhcnNlSW50KCB0aGlzLmhlbHBlci5jc3MoIFwidG9wXCIgKSwgMTAgKSB8fCAwICkgK1xuXHRcdFx0XHQoICFzY3JvbGxJc1Jvb3ROb2RlID8gdGhpcy5zY3JvbGxQYXJlbnQuc2Nyb2xsVG9wKCkgOiAwICksXG5cdFx0XHRsZWZ0OiBwLmxlZnQgLSAoIHBhcnNlSW50KCB0aGlzLmhlbHBlci5jc3MoIFwibGVmdFwiICksIDEwICkgfHwgMCApICtcblx0XHRcdFx0KCAhc2Nyb2xsSXNSb290Tm9kZSA/IHRoaXMuc2Nyb2xsUGFyZW50LnNjcm9sbExlZnQoKSA6IDAgKVxuXHRcdH07XG5cblx0fSxcblxuXHRfY2FjaGVNYXJnaW5zOiBmdW5jdGlvbigpIHtcblx0XHR0aGlzLm1hcmdpbnMgPSB7XG5cdFx0XHRsZWZ0OiAoIHBhcnNlSW50KCB0aGlzLmVsZW1lbnQuY3NzKCBcIm1hcmdpbkxlZnRcIiApLCAxMCApIHx8IDAgKSxcblx0XHRcdHRvcDogKCBwYXJzZUludCggdGhpcy5lbGVtZW50LmNzcyggXCJtYXJnaW5Ub3BcIiApLCAxMCApIHx8IDAgKSxcblx0XHRcdHJpZ2h0OiAoIHBhcnNlSW50KCB0aGlzLmVsZW1lbnQuY3NzKCBcIm1hcmdpblJpZ2h0XCIgKSwgMTAgKSB8fCAwICksXG5cdFx0XHRib3R0b206ICggcGFyc2VJbnQoIHRoaXMuZWxlbWVudC5jc3MoIFwibWFyZ2luQm90dG9tXCIgKSwgMTAgKSB8fCAwIClcblx0XHR9O1xuXHR9LFxuXG5cdF9jYWNoZUhlbHBlclByb3BvcnRpb25zOiBmdW5jdGlvbigpIHtcblx0XHR0aGlzLmhlbHBlclByb3BvcnRpb25zID0ge1xuXHRcdFx0d2lkdGg6IHRoaXMuaGVscGVyLm91dGVyV2lkdGgoKSxcblx0XHRcdGhlaWdodDogdGhpcy5oZWxwZXIub3V0ZXJIZWlnaHQoKVxuXHRcdH07XG5cdH0sXG5cblx0X3NldENvbnRhaW5tZW50OiBmdW5jdGlvbigpIHtcblxuXHRcdHZhciBpc1VzZXJTY3JvbGxhYmxlLCBjLCBjZSxcblx0XHRcdG8gPSB0aGlzLm9wdGlvbnMsXG5cdFx0XHRkb2N1bWVudCA9IHRoaXMuZG9jdW1lbnRbIDAgXTtcblxuXHRcdHRoaXMucmVsYXRpdmVDb250YWluZXIgPSBudWxsO1xuXG5cdFx0aWYgKCAhby5jb250YWlubWVudCApIHtcblx0XHRcdHRoaXMuY29udGFpbm1lbnQgPSBudWxsO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICggby5jb250YWlubWVudCA9PT0gXCJ3aW5kb3dcIiApIHtcblx0XHRcdHRoaXMuY29udGFpbm1lbnQgPSBbXG5cdFx0XHRcdCQoIHdpbmRvdyApLnNjcm9sbExlZnQoKSAtIHRoaXMub2Zmc2V0LnJlbGF0aXZlLmxlZnQgLSB0aGlzLm9mZnNldC5wYXJlbnQubGVmdCxcblx0XHRcdFx0JCggd2luZG93ICkuc2Nyb2xsVG9wKCkgLSB0aGlzLm9mZnNldC5yZWxhdGl2ZS50b3AgLSB0aGlzLm9mZnNldC5wYXJlbnQudG9wLFxuXHRcdFx0XHQkKCB3aW5kb3cgKS5zY3JvbGxMZWZ0KCkgKyAkKCB3aW5kb3cgKS53aWR0aCgpIC1cblx0XHRcdFx0XHR0aGlzLmhlbHBlclByb3BvcnRpb25zLndpZHRoIC0gdGhpcy5tYXJnaW5zLmxlZnQsXG5cdFx0XHRcdCQoIHdpbmRvdyApLnNjcm9sbFRvcCgpICtcblx0XHRcdFx0XHQoICQoIHdpbmRvdyApLmhlaWdodCgpIHx8IGRvY3VtZW50LmJvZHkucGFyZW50Tm9kZS5zY3JvbGxIZWlnaHQgKSAtXG5cdFx0XHRcdFx0dGhpcy5oZWxwZXJQcm9wb3J0aW9ucy5oZWlnaHQgLSB0aGlzLm1hcmdpbnMudG9wXG5cdFx0XHRdO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICggby5jb250YWlubWVudCA9PT0gXCJkb2N1bWVudFwiICkge1xuXHRcdFx0dGhpcy5jb250YWlubWVudCA9IFtcblx0XHRcdFx0MCxcblx0XHRcdFx0MCxcblx0XHRcdFx0JCggZG9jdW1lbnQgKS53aWR0aCgpIC0gdGhpcy5oZWxwZXJQcm9wb3J0aW9ucy53aWR0aCAtIHRoaXMubWFyZ2lucy5sZWZ0LFxuXHRcdFx0XHQoICQoIGRvY3VtZW50ICkuaGVpZ2h0KCkgfHwgZG9jdW1lbnQuYm9keS5wYXJlbnROb2RlLnNjcm9sbEhlaWdodCApIC1cblx0XHRcdFx0XHR0aGlzLmhlbHBlclByb3BvcnRpb25zLmhlaWdodCAtIHRoaXMubWFyZ2lucy50b3Bcblx0XHRcdF07XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCBvLmNvbnRhaW5tZW50LmNvbnN0cnVjdG9yID09PSBBcnJheSApIHtcblx0XHRcdHRoaXMuY29udGFpbm1lbnQgPSBvLmNvbnRhaW5tZW50O1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICggby5jb250YWlubWVudCA9PT0gXCJwYXJlbnRcIiApIHtcblx0XHRcdG8uY29udGFpbm1lbnQgPSB0aGlzLmhlbHBlclsgMCBdLnBhcmVudE5vZGU7XG5cdFx0fVxuXG5cdFx0YyA9ICQoIG8uY29udGFpbm1lbnQgKTtcblx0XHRjZSA9IGNbIDAgXTtcblxuXHRcdGlmICggIWNlICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlzVXNlclNjcm9sbGFibGUgPSAvKHNjcm9sbHxhdXRvKS8udGVzdCggYy5jc3MoIFwib3ZlcmZsb3dcIiApICk7XG5cblx0XHR0aGlzLmNvbnRhaW5tZW50ID0gW1xuXHRcdFx0KCBwYXJzZUludCggYy5jc3MoIFwiYm9yZGVyTGVmdFdpZHRoXCIgKSwgMTAgKSB8fCAwICkgK1xuXHRcdFx0XHQoIHBhcnNlSW50KCBjLmNzcyggXCJwYWRkaW5nTGVmdFwiICksIDEwICkgfHwgMCApLFxuXHRcdFx0KCBwYXJzZUludCggYy5jc3MoIFwiYm9yZGVyVG9wV2lkdGhcIiApLCAxMCApIHx8IDAgKSArXG5cdFx0XHRcdCggcGFyc2VJbnQoIGMuY3NzKCBcInBhZGRpbmdUb3BcIiApLCAxMCApIHx8IDAgKSxcblx0XHRcdCggaXNVc2VyU2Nyb2xsYWJsZSA/IE1hdGgubWF4KCBjZS5zY3JvbGxXaWR0aCwgY2Uub2Zmc2V0V2lkdGggKSA6IGNlLm9mZnNldFdpZHRoICkgLVxuXHRcdFx0XHQoIHBhcnNlSW50KCBjLmNzcyggXCJib3JkZXJSaWdodFdpZHRoXCIgKSwgMTAgKSB8fCAwICkgLVxuXHRcdFx0XHQoIHBhcnNlSW50KCBjLmNzcyggXCJwYWRkaW5nUmlnaHRcIiApLCAxMCApIHx8IDAgKSAtXG5cdFx0XHRcdHRoaXMuaGVscGVyUHJvcG9ydGlvbnMud2lkdGggLVxuXHRcdFx0XHR0aGlzLm1hcmdpbnMubGVmdCAtXG5cdFx0XHRcdHRoaXMubWFyZ2lucy5yaWdodCxcblx0XHRcdCggaXNVc2VyU2Nyb2xsYWJsZSA/IE1hdGgubWF4KCBjZS5zY3JvbGxIZWlnaHQsIGNlLm9mZnNldEhlaWdodCApIDogY2Uub2Zmc2V0SGVpZ2h0ICkgLVxuXHRcdFx0XHQoIHBhcnNlSW50KCBjLmNzcyggXCJib3JkZXJCb3R0b21XaWR0aFwiICksIDEwICkgfHwgMCApIC1cblx0XHRcdFx0KCBwYXJzZUludCggYy5jc3MoIFwicGFkZGluZ0JvdHRvbVwiICksIDEwICkgfHwgMCApIC1cblx0XHRcdFx0dGhpcy5oZWxwZXJQcm9wb3J0aW9ucy5oZWlnaHQgLVxuXHRcdFx0XHR0aGlzLm1hcmdpbnMudG9wIC1cblx0XHRcdFx0dGhpcy5tYXJnaW5zLmJvdHRvbVxuXHRcdF07XG5cdFx0dGhpcy5yZWxhdGl2ZUNvbnRhaW5lciA9IGM7XG5cdH0sXG5cblx0X2NvbnZlcnRQb3NpdGlvblRvOiBmdW5jdGlvbiggZCwgcG9zICkge1xuXG5cdFx0aWYgKCAhcG9zICkge1xuXHRcdFx0cG9zID0gdGhpcy5wb3NpdGlvbjtcblx0XHR9XG5cblx0XHR2YXIgbW9kID0gZCA9PT0gXCJhYnNvbHV0ZVwiID8gMSA6IC0xLFxuXHRcdFx0c2Nyb2xsSXNSb290Tm9kZSA9IHRoaXMuX2lzUm9vdE5vZGUoIHRoaXMuc2Nyb2xsUGFyZW50WyAwIF0gKTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHR0b3A6IChcblxuXHRcdFx0XHQvLyBUaGUgYWJzb2x1dGUgbW91c2UgcG9zaXRpb25cblx0XHRcdFx0cG9zLnRvcFx0K1xuXG5cdFx0XHRcdC8vIE9ubHkgZm9yIHJlbGF0aXZlIHBvc2l0aW9uZWQgbm9kZXM6IFJlbGF0aXZlIG9mZnNldCBmcm9tIGVsZW1lbnQgdG8gb2Zmc2V0IHBhcmVudFxuXHRcdFx0XHR0aGlzLm9mZnNldC5yZWxhdGl2ZS50b3AgKiBtb2QgK1xuXG5cdFx0XHRcdC8vIFRoZSBvZmZzZXRQYXJlbnQncyBvZmZzZXQgd2l0aG91dCBib3JkZXJzIChvZmZzZXQgKyBib3JkZXIpXG5cdFx0XHRcdHRoaXMub2Zmc2V0LnBhcmVudC50b3AgKiBtb2QgLVxuXHRcdFx0XHQoICggdGhpcy5jc3NQb3NpdGlvbiA9PT0gXCJmaXhlZFwiID9cblx0XHRcdFx0XHQtdGhpcy5vZmZzZXQuc2Nyb2xsLnRvcCA6XG5cdFx0XHRcdFx0KCBzY3JvbGxJc1Jvb3ROb2RlID8gMCA6IHRoaXMub2Zmc2V0LnNjcm9sbC50b3AgKSApICogbW9kIClcblx0XHRcdCksXG5cdFx0XHRsZWZ0OiAoXG5cblx0XHRcdFx0Ly8gVGhlIGFic29sdXRlIG1vdXNlIHBvc2l0aW9uXG5cdFx0XHRcdHBvcy5sZWZ0ICtcblxuXHRcdFx0XHQvLyBPbmx5IGZvciByZWxhdGl2ZSBwb3NpdGlvbmVkIG5vZGVzOiBSZWxhdGl2ZSBvZmZzZXQgZnJvbSBlbGVtZW50IHRvIG9mZnNldCBwYXJlbnRcblx0XHRcdFx0dGhpcy5vZmZzZXQucmVsYXRpdmUubGVmdCAqIG1vZCArXG5cblx0XHRcdFx0Ly8gVGhlIG9mZnNldFBhcmVudCdzIG9mZnNldCB3aXRob3V0IGJvcmRlcnMgKG9mZnNldCArIGJvcmRlcilcblx0XHRcdFx0dGhpcy5vZmZzZXQucGFyZW50LmxlZnQgKiBtb2RcdC1cblx0XHRcdFx0KCAoIHRoaXMuY3NzUG9zaXRpb24gPT09IFwiZml4ZWRcIiA/XG5cdFx0XHRcdFx0LXRoaXMub2Zmc2V0LnNjcm9sbC5sZWZ0IDpcblx0XHRcdFx0XHQoIHNjcm9sbElzUm9vdE5vZGUgPyAwIDogdGhpcy5vZmZzZXQuc2Nyb2xsLmxlZnQgKSApICogbW9kIClcblx0XHRcdClcblx0XHR9O1xuXG5cdH0sXG5cblx0X2dlbmVyYXRlUG9zaXRpb246IGZ1bmN0aW9uKCBldmVudCwgY29uc3RyYWluUG9zaXRpb24gKSB7XG5cblx0XHR2YXIgY29udGFpbm1lbnQsIGNvLCB0b3AsIGxlZnQsXG5cdFx0XHRvID0gdGhpcy5vcHRpb25zLFxuXHRcdFx0c2Nyb2xsSXNSb290Tm9kZSA9IHRoaXMuX2lzUm9vdE5vZGUoIHRoaXMuc2Nyb2xsUGFyZW50WyAwIF0gKSxcblx0XHRcdHBhZ2VYID0gZXZlbnQucGFnZVgsXG5cdFx0XHRwYWdlWSA9IGV2ZW50LnBhZ2VZO1xuXG5cdFx0Ly8gQ2FjaGUgdGhlIHNjcm9sbFxuXHRcdGlmICggIXNjcm9sbElzUm9vdE5vZGUgfHwgIXRoaXMub2Zmc2V0LnNjcm9sbCApIHtcblx0XHRcdHRoaXMub2Zmc2V0LnNjcm9sbCA9IHtcblx0XHRcdFx0dG9wOiB0aGlzLnNjcm9sbFBhcmVudC5zY3JvbGxUb3AoKSxcblx0XHRcdFx0bGVmdDogdGhpcy5zY3JvbGxQYXJlbnQuc2Nyb2xsTGVmdCgpXG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdC8qXG5cdFx0ICogLSBQb3NpdGlvbiBjb25zdHJhaW5pbmcgLVxuXHRcdCAqIENvbnN0cmFpbiB0aGUgcG9zaXRpb24gdG8gYSBtaXggb2YgZ3JpZCwgY29udGFpbm1lbnQuXG5cdFx0ICovXG5cblx0XHQvLyBJZiB3ZSBhcmUgbm90IGRyYWdnaW5nIHlldCwgd2Ugd29uJ3QgY2hlY2sgZm9yIG9wdGlvbnNcblx0XHRpZiAoIGNvbnN0cmFpblBvc2l0aW9uICkge1xuXHRcdFx0aWYgKCB0aGlzLmNvbnRhaW5tZW50ICkge1xuXHRcdFx0XHRpZiAoIHRoaXMucmVsYXRpdmVDb250YWluZXIgKSB7XG5cdFx0XHRcdFx0Y28gPSB0aGlzLnJlbGF0aXZlQ29udGFpbmVyLm9mZnNldCgpO1xuXHRcdFx0XHRcdGNvbnRhaW5tZW50ID0gW1xuXHRcdFx0XHRcdFx0dGhpcy5jb250YWlubWVudFsgMCBdICsgY28ubGVmdCxcblx0XHRcdFx0XHRcdHRoaXMuY29udGFpbm1lbnRbIDEgXSArIGNvLnRvcCxcblx0XHRcdFx0XHRcdHRoaXMuY29udGFpbm1lbnRbIDIgXSArIGNvLmxlZnQsXG5cdFx0XHRcdFx0XHR0aGlzLmNvbnRhaW5tZW50WyAzIF0gKyBjby50b3Bcblx0XHRcdFx0XHRdO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNvbnRhaW5tZW50ID0gdGhpcy5jb250YWlubWVudDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICggZXZlbnQucGFnZVggLSB0aGlzLm9mZnNldC5jbGljay5sZWZ0IDwgY29udGFpbm1lbnRbIDAgXSApIHtcblx0XHRcdFx0XHRwYWdlWCA9IGNvbnRhaW5tZW50WyAwIF0gKyB0aGlzLm9mZnNldC5jbGljay5sZWZ0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICggZXZlbnQucGFnZVkgLSB0aGlzLm9mZnNldC5jbGljay50b3AgPCBjb250YWlubWVudFsgMSBdICkge1xuXHRcdFx0XHRcdHBhZ2VZID0gY29udGFpbm1lbnRbIDEgXSArIHRoaXMub2Zmc2V0LmNsaWNrLnRvcDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIGV2ZW50LnBhZ2VYIC0gdGhpcy5vZmZzZXQuY2xpY2subGVmdCA+IGNvbnRhaW5tZW50WyAyIF0gKSB7XG5cdFx0XHRcdFx0cGFnZVggPSBjb250YWlubWVudFsgMiBdICsgdGhpcy5vZmZzZXQuY2xpY2subGVmdDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIGV2ZW50LnBhZ2VZIC0gdGhpcy5vZmZzZXQuY2xpY2sudG9wID4gY29udGFpbm1lbnRbIDMgXSApIHtcblx0XHRcdFx0XHRwYWdlWSA9IGNvbnRhaW5tZW50WyAzIF0gKyB0aGlzLm9mZnNldC5jbGljay50b3A7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKCBvLmdyaWQgKSB7XG5cblx0XHRcdFx0Ly9DaGVjayBmb3IgZ3JpZCBlbGVtZW50cyBzZXQgdG8gMCB0byBwcmV2ZW50IGRpdmlkZSBieSAwIGVycm9yIGNhdXNpbmcgaW52YWxpZFxuXHRcdFx0XHQvLyBhcmd1bWVudCBlcnJvcnMgaW4gSUUgKHNlZSB0aWNrZXQgIzY5NTApXG5cdFx0XHRcdHRvcCA9IG8uZ3JpZFsgMSBdID8gdGhpcy5vcmlnaW5hbFBhZ2VZICsgTWF0aC5yb3VuZCggKCBwYWdlWSAtXG5cdFx0XHRcdFx0dGhpcy5vcmlnaW5hbFBhZ2VZICkgLyBvLmdyaWRbIDEgXSApICogby5ncmlkWyAxIF0gOiB0aGlzLm9yaWdpbmFsUGFnZVk7XG5cdFx0XHRcdHBhZ2VZID0gY29udGFpbm1lbnQgPyAoICggdG9wIC0gdGhpcy5vZmZzZXQuY2xpY2sudG9wID49IGNvbnRhaW5tZW50WyAxIF0gfHxcblx0XHRcdFx0XHR0b3AgLSB0aGlzLm9mZnNldC5jbGljay50b3AgPiBjb250YWlubWVudFsgMyBdICkgP1xuXHRcdFx0XHRcdFx0dG9wIDpcblx0XHRcdFx0XHRcdCggKCB0b3AgLSB0aGlzLm9mZnNldC5jbGljay50b3AgPj0gY29udGFpbm1lbnRbIDEgXSApID9cblx0XHRcdFx0XHRcdFx0dG9wIC0gby5ncmlkWyAxIF0gOiB0b3AgKyBvLmdyaWRbIDEgXSApICkgOiB0b3A7XG5cblx0XHRcdFx0bGVmdCA9IG8uZ3JpZFsgMCBdID8gdGhpcy5vcmlnaW5hbFBhZ2VYICtcblx0XHRcdFx0XHRNYXRoLnJvdW5kKCAoIHBhZ2VYIC0gdGhpcy5vcmlnaW5hbFBhZ2VYICkgLyBvLmdyaWRbIDAgXSApICogby5ncmlkWyAwIF0gOlxuXHRcdFx0XHRcdHRoaXMub3JpZ2luYWxQYWdlWDtcblx0XHRcdFx0cGFnZVggPSBjb250YWlubWVudCA/ICggKCBsZWZ0IC0gdGhpcy5vZmZzZXQuY2xpY2subGVmdCA+PSBjb250YWlubWVudFsgMCBdIHx8XG5cdFx0XHRcdFx0bGVmdCAtIHRoaXMub2Zmc2V0LmNsaWNrLmxlZnQgPiBjb250YWlubWVudFsgMiBdICkgP1xuXHRcdFx0XHRcdFx0bGVmdCA6XG5cdFx0XHRcdFx0XHQoICggbGVmdCAtIHRoaXMub2Zmc2V0LmNsaWNrLmxlZnQgPj0gY29udGFpbm1lbnRbIDAgXSApID9cblx0XHRcdFx0XHRcdFx0bGVmdCAtIG8uZ3JpZFsgMCBdIDogbGVmdCArIG8uZ3JpZFsgMCBdICkgKSA6IGxlZnQ7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggby5heGlzID09PSBcInlcIiApIHtcblx0XHRcdFx0cGFnZVggPSB0aGlzLm9yaWdpbmFsUGFnZVg7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggby5heGlzID09PSBcInhcIiApIHtcblx0XHRcdFx0cGFnZVkgPSB0aGlzLm9yaWdpbmFsUGFnZVk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHRvcDogKFxuXG5cdFx0XHRcdC8vIFRoZSBhYnNvbHV0ZSBtb3VzZSBwb3NpdGlvblxuXHRcdFx0XHRwYWdlWSAtXG5cblx0XHRcdFx0Ly8gQ2xpY2sgb2Zmc2V0IChyZWxhdGl2ZSB0byB0aGUgZWxlbWVudClcblx0XHRcdFx0dGhpcy5vZmZzZXQuY2xpY2sudG9wIC1cblxuXHRcdFx0XHQvLyBPbmx5IGZvciByZWxhdGl2ZSBwb3NpdGlvbmVkIG5vZGVzOiBSZWxhdGl2ZSBvZmZzZXQgZnJvbSBlbGVtZW50IHRvIG9mZnNldCBwYXJlbnRcblx0XHRcdFx0dGhpcy5vZmZzZXQucmVsYXRpdmUudG9wIC1cblxuXHRcdFx0XHQvLyBUaGUgb2Zmc2V0UGFyZW50J3Mgb2Zmc2V0IHdpdGhvdXQgYm9yZGVycyAob2Zmc2V0ICsgYm9yZGVyKVxuXHRcdFx0XHR0aGlzLm9mZnNldC5wYXJlbnQudG9wICtcblx0XHRcdFx0KCB0aGlzLmNzc1Bvc2l0aW9uID09PSBcImZpeGVkXCIgP1xuXHRcdFx0XHRcdC10aGlzLm9mZnNldC5zY3JvbGwudG9wIDpcblx0XHRcdFx0XHQoIHNjcm9sbElzUm9vdE5vZGUgPyAwIDogdGhpcy5vZmZzZXQuc2Nyb2xsLnRvcCApIClcblx0XHRcdCksXG5cdFx0XHRsZWZ0OiAoXG5cblx0XHRcdFx0Ly8gVGhlIGFic29sdXRlIG1vdXNlIHBvc2l0aW9uXG5cdFx0XHRcdHBhZ2VYIC1cblxuXHRcdFx0XHQvLyBDbGljayBvZmZzZXQgKHJlbGF0aXZlIHRvIHRoZSBlbGVtZW50KVxuXHRcdFx0XHR0aGlzLm9mZnNldC5jbGljay5sZWZ0IC1cblxuXHRcdFx0XHQvLyBPbmx5IGZvciByZWxhdGl2ZSBwb3NpdGlvbmVkIG5vZGVzOiBSZWxhdGl2ZSBvZmZzZXQgZnJvbSBlbGVtZW50IHRvIG9mZnNldCBwYXJlbnRcblx0XHRcdFx0dGhpcy5vZmZzZXQucmVsYXRpdmUubGVmdCAtXG5cblx0XHRcdFx0Ly8gVGhlIG9mZnNldFBhcmVudCdzIG9mZnNldCB3aXRob3V0IGJvcmRlcnMgKG9mZnNldCArIGJvcmRlcilcblx0XHRcdFx0dGhpcy5vZmZzZXQucGFyZW50LmxlZnQgK1xuXHRcdFx0XHQoIHRoaXMuY3NzUG9zaXRpb24gPT09IFwiZml4ZWRcIiA/XG5cdFx0XHRcdFx0LXRoaXMub2Zmc2V0LnNjcm9sbC5sZWZ0IDpcblx0XHRcdFx0XHQoIHNjcm9sbElzUm9vdE5vZGUgPyAwIDogdGhpcy5vZmZzZXQuc2Nyb2xsLmxlZnQgKSApXG5cdFx0XHQpXG5cdFx0fTtcblxuXHR9LFxuXG5cdF9jbGVhcjogZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5fcmVtb3ZlQ2xhc3MoIHRoaXMuaGVscGVyLCBcInVpLWRyYWdnYWJsZS1kcmFnZ2luZ1wiICk7XG5cdFx0aWYgKCB0aGlzLmhlbHBlclsgMCBdICE9PSB0aGlzLmVsZW1lbnRbIDAgXSAmJiAhdGhpcy5jYW5jZWxIZWxwZXJSZW1vdmFsICkge1xuXHRcdFx0dGhpcy5oZWxwZXIucmVtb3ZlKCk7XG5cdFx0fVxuXHRcdHRoaXMuaGVscGVyID0gbnVsbDtcblx0XHR0aGlzLmNhbmNlbEhlbHBlclJlbW92YWwgPSBmYWxzZTtcblx0XHRpZiAoIHRoaXMuZGVzdHJveU9uQ2xlYXIgKSB7XG5cdFx0XHR0aGlzLmRlc3Ryb3koKTtcblx0XHR9XG5cdH0sXG5cblx0Ly8gRnJvbSBub3cgb24gYnVsayBzdHVmZiAtIG1haW5seSBoZWxwZXJzXG5cblx0X3RyaWdnZXI6IGZ1bmN0aW9uKCB0eXBlLCBldmVudCwgdWkgKSB7XG5cdFx0dWkgPSB1aSB8fCB0aGlzLl91aUhhc2goKTtcblx0XHQkLnVpLnBsdWdpbi5jYWxsKCB0aGlzLCB0eXBlLCBbIGV2ZW50LCB1aSwgdGhpcyBdLCB0cnVlICk7XG5cblx0XHQvLyBBYnNvbHV0ZSBwb3NpdGlvbiBhbmQgb2Zmc2V0IChzZWUgIzY4ODQgKSBoYXZlIHRvIGJlIHJlY2FsY3VsYXRlZCBhZnRlciBwbHVnaW5zXG5cdFx0aWYgKCAvXihkcmFnfHN0YXJ0fHN0b3ApLy50ZXN0KCB0eXBlICkgKSB7XG5cdFx0XHR0aGlzLnBvc2l0aW9uQWJzID0gdGhpcy5fY29udmVydFBvc2l0aW9uVG8oIFwiYWJzb2x1dGVcIiApO1xuXHRcdFx0dWkub2Zmc2V0ID0gdGhpcy5wb3NpdGlvbkFicztcblx0XHR9XG5cdFx0cmV0dXJuICQuV2lkZ2V0LnByb3RvdHlwZS5fdHJpZ2dlci5jYWxsKCB0aGlzLCB0eXBlLCBldmVudCwgdWkgKTtcblx0fSxcblxuXHRwbHVnaW5zOiB7fSxcblxuXHRfdWlIYXNoOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0aGVscGVyOiB0aGlzLmhlbHBlcixcblx0XHRcdHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uLFxuXHRcdFx0b3JpZ2luYWxQb3NpdGlvbjogdGhpcy5vcmlnaW5hbFBvc2l0aW9uLFxuXHRcdFx0b2Zmc2V0OiB0aGlzLnBvc2l0aW9uQWJzXG5cdFx0fTtcblx0fVxuXG59ICk7XG5cbiQudWkucGx1Z2luLmFkZCggXCJkcmFnZ2FibGVcIiwgXCJjb25uZWN0VG9Tb3J0YWJsZVwiLCB7XG5cdHN0YXJ0OiBmdW5jdGlvbiggZXZlbnQsIHVpLCBkcmFnZ2FibGUgKSB7XG5cdFx0dmFyIHVpU29ydGFibGUgPSAkLmV4dGVuZCgge30sIHVpLCB7XG5cdFx0XHRpdGVtOiBkcmFnZ2FibGUuZWxlbWVudFxuXHRcdH0gKTtcblxuXHRcdGRyYWdnYWJsZS5zb3J0YWJsZXMgPSBbXTtcblx0XHQkKCBkcmFnZ2FibGUub3B0aW9ucy5jb25uZWN0VG9Tb3J0YWJsZSApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHNvcnRhYmxlID0gJCggdGhpcyApLnNvcnRhYmxlKCBcImluc3RhbmNlXCIgKTtcblxuXHRcdFx0aWYgKCBzb3J0YWJsZSAmJiAhc29ydGFibGUub3B0aW9ucy5kaXNhYmxlZCApIHtcblx0XHRcdFx0ZHJhZ2dhYmxlLnNvcnRhYmxlcy5wdXNoKCBzb3J0YWJsZSApO1xuXG5cdFx0XHRcdC8vIFJlZnJlc2hQb3NpdGlvbnMgaXMgY2FsbGVkIGF0IGRyYWcgc3RhcnQgdG8gcmVmcmVzaCB0aGUgY29udGFpbmVyQ2FjaGVcblx0XHRcdFx0Ly8gd2hpY2ggaXMgdXNlZCBpbiBkcmFnLiBUaGlzIGVuc3VyZXMgaXQncyBpbml0aWFsaXplZCBhbmQgc3luY2hyb25pemVkXG5cdFx0XHRcdC8vIHdpdGggYW55IGNoYW5nZXMgdGhhdCBtaWdodCBoYXZlIGhhcHBlbmVkIG9uIHRoZSBwYWdlIHNpbmNlIGluaXRpYWxpemF0aW9uLlxuXHRcdFx0XHRzb3J0YWJsZS5yZWZyZXNoUG9zaXRpb25zKCk7XG5cdFx0XHRcdHNvcnRhYmxlLl90cmlnZ2VyKCBcImFjdGl2YXRlXCIsIGV2ZW50LCB1aVNvcnRhYmxlICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9LFxuXHRzdG9wOiBmdW5jdGlvbiggZXZlbnQsIHVpLCBkcmFnZ2FibGUgKSB7XG5cdFx0dmFyIHVpU29ydGFibGUgPSAkLmV4dGVuZCgge30sIHVpLCB7XG5cdFx0XHRpdGVtOiBkcmFnZ2FibGUuZWxlbWVudFxuXHRcdH0gKTtcblxuXHRcdGRyYWdnYWJsZS5jYW5jZWxIZWxwZXJSZW1vdmFsID0gZmFsc2U7XG5cblx0XHQkLmVhY2goIGRyYWdnYWJsZS5zb3J0YWJsZXMsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHNvcnRhYmxlID0gdGhpcztcblxuXHRcdFx0aWYgKCBzb3J0YWJsZS5pc092ZXIgKSB7XG5cdFx0XHRcdHNvcnRhYmxlLmlzT3ZlciA9IDA7XG5cblx0XHRcdFx0Ly8gQWxsb3cgdGhpcyBzb3J0YWJsZSB0byBoYW5kbGUgcmVtb3ZpbmcgdGhlIGhlbHBlclxuXHRcdFx0XHRkcmFnZ2FibGUuY2FuY2VsSGVscGVyUmVtb3ZhbCA9IHRydWU7XG5cdFx0XHRcdHNvcnRhYmxlLmNhbmNlbEhlbHBlclJlbW92YWwgPSBmYWxzZTtcblxuXHRcdFx0XHQvLyBVc2UgX3N0b3JlZENTUyBUbyByZXN0b3JlIHByb3BlcnRpZXMgaW4gdGhlIHNvcnRhYmxlLFxuXHRcdFx0XHQvLyBhcyB0aGlzIGFsc28gaGFuZGxlcyByZXZlcnQgKCM5Njc1KSBzaW5jZSB0aGUgZHJhZ2dhYmxlXG5cdFx0XHRcdC8vIG1heSBoYXZlIG1vZGlmaWVkIHRoZW0gaW4gdW5leHBlY3RlZCB3YXlzICgjODgwOSlcblx0XHRcdFx0c29ydGFibGUuX3N0b3JlZENTUyA9IHtcblx0XHRcdFx0XHRwb3NpdGlvbjogc29ydGFibGUucGxhY2Vob2xkZXIuY3NzKCBcInBvc2l0aW9uXCIgKSxcblx0XHRcdFx0XHR0b3A6IHNvcnRhYmxlLnBsYWNlaG9sZGVyLmNzcyggXCJ0b3BcIiApLFxuXHRcdFx0XHRcdGxlZnQ6IHNvcnRhYmxlLnBsYWNlaG9sZGVyLmNzcyggXCJsZWZ0XCIgKVxuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdHNvcnRhYmxlLl9tb3VzZVN0b3AoIGV2ZW50ICk7XG5cblx0XHRcdFx0Ly8gT25jZSBkcmFnIGhhcyBlbmRlZCwgdGhlIHNvcnRhYmxlIHNob3VsZCByZXR1cm4gdG8gdXNpbmdcblx0XHRcdFx0Ly8gaXRzIG9yaWdpbmFsIGhlbHBlciwgbm90IHRoZSBzaGFyZWQgaGVscGVyIGZyb20gZHJhZ2dhYmxlXG5cdFx0XHRcdHNvcnRhYmxlLm9wdGlvbnMuaGVscGVyID0gc29ydGFibGUub3B0aW9ucy5faGVscGVyO1xuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHQvLyBQcmV2ZW50IHRoaXMgU29ydGFibGUgZnJvbSByZW1vdmluZyB0aGUgaGVscGVyLlxuXHRcdFx0XHQvLyBIb3dldmVyLCBkb24ndCBzZXQgdGhlIGRyYWdnYWJsZSB0byByZW1vdmUgdGhlIGhlbHBlclxuXHRcdFx0XHQvLyBlaXRoZXIgYXMgYW5vdGhlciBjb25uZWN0ZWQgU29ydGFibGUgbWF5IHlldCBoYW5kbGUgdGhlIHJlbW92YWwuXG5cdFx0XHRcdHNvcnRhYmxlLmNhbmNlbEhlbHBlclJlbW92YWwgPSB0cnVlO1xuXG5cdFx0XHRcdHNvcnRhYmxlLl90cmlnZ2VyKCBcImRlYWN0aXZhdGVcIiwgZXZlbnQsIHVpU29ydGFibGUgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH0sXG5cdGRyYWc6IGZ1bmN0aW9uKCBldmVudCwgdWksIGRyYWdnYWJsZSApIHtcblx0XHQkLmVhY2goIGRyYWdnYWJsZS5zb3J0YWJsZXMsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGlubmVybW9zdEludGVyc2VjdGluZyA9IGZhbHNlLFxuXHRcdFx0XHRzb3J0YWJsZSA9IHRoaXM7XG5cblx0XHRcdC8vIENvcHkgb3ZlciB2YXJpYWJsZXMgdGhhdCBzb3J0YWJsZSdzIF9pbnRlcnNlY3RzV2l0aCB1c2VzXG5cdFx0XHRzb3J0YWJsZS5wb3NpdGlvbkFicyA9IGRyYWdnYWJsZS5wb3NpdGlvbkFicztcblx0XHRcdHNvcnRhYmxlLmhlbHBlclByb3BvcnRpb25zID0gZHJhZ2dhYmxlLmhlbHBlclByb3BvcnRpb25zO1xuXHRcdFx0c29ydGFibGUub2Zmc2V0LmNsaWNrID0gZHJhZ2dhYmxlLm9mZnNldC5jbGljaztcblxuXHRcdFx0aWYgKCBzb3J0YWJsZS5faW50ZXJzZWN0c1dpdGgoIHNvcnRhYmxlLmNvbnRhaW5lckNhY2hlICkgKSB7XG5cdFx0XHRcdGlubmVybW9zdEludGVyc2VjdGluZyA9IHRydWU7XG5cblx0XHRcdFx0JC5lYWNoKCBkcmFnZ2FibGUuc29ydGFibGVzLCBmdW5jdGlvbigpIHtcblxuXHRcdFx0XHRcdC8vIENvcHkgb3ZlciB2YXJpYWJsZXMgdGhhdCBzb3J0YWJsZSdzIF9pbnRlcnNlY3RzV2l0aCB1c2VzXG5cdFx0XHRcdFx0dGhpcy5wb3NpdGlvbkFicyA9IGRyYWdnYWJsZS5wb3NpdGlvbkFicztcblx0XHRcdFx0XHR0aGlzLmhlbHBlclByb3BvcnRpb25zID0gZHJhZ2dhYmxlLmhlbHBlclByb3BvcnRpb25zO1xuXHRcdFx0XHRcdHRoaXMub2Zmc2V0LmNsaWNrID0gZHJhZ2dhYmxlLm9mZnNldC5jbGljaztcblxuXHRcdFx0XHRcdGlmICggdGhpcyAhPT0gc29ydGFibGUgJiZcblx0XHRcdFx0XHRcdFx0dGhpcy5faW50ZXJzZWN0c1dpdGgoIHRoaXMuY29udGFpbmVyQ2FjaGUgKSAmJlxuXHRcdFx0XHRcdFx0XHQkLmNvbnRhaW5zKCBzb3J0YWJsZS5lbGVtZW50WyAwIF0sIHRoaXMuZWxlbWVudFsgMCBdICkgKSB7XG5cdFx0XHRcdFx0XHRpbm5lcm1vc3RJbnRlcnNlY3RpbmcgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4gaW5uZXJtb3N0SW50ZXJzZWN0aW5nO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggaW5uZXJtb3N0SW50ZXJzZWN0aW5nICkge1xuXG5cdFx0XHRcdC8vIElmIGl0IGludGVyc2VjdHMsIHdlIHVzZSBhIGxpdHRsZSBpc092ZXIgdmFyaWFibGUgYW5kIHNldCBpdCBvbmNlLFxuXHRcdFx0XHQvLyBzbyB0aGF0IHRoZSBtb3ZlLWluIHN0dWZmIGdldHMgZmlyZWQgb25seSBvbmNlLlxuXHRcdFx0XHRpZiAoICFzb3J0YWJsZS5pc092ZXIgKSB7XG5cdFx0XHRcdFx0c29ydGFibGUuaXNPdmVyID0gMTtcblxuXHRcdFx0XHRcdC8vIFN0b3JlIGRyYWdnYWJsZSdzIHBhcmVudCBpbiBjYXNlIHdlIG5lZWQgdG8gcmVhcHBlbmQgdG8gaXQgbGF0ZXIuXG5cdFx0XHRcdFx0ZHJhZ2dhYmxlLl9wYXJlbnQgPSB1aS5oZWxwZXIucGFyZW50KCk7XG5cblx0XHRcdFx0XHRzb3J0YWJsZS5jdXJyZW50SXRlbSA9IHVpLmhlbHBlclxuXHRcdFx0XHRcdFx0LmFwcGVuZFRvKCBzb3J0YWJsZS5lbGVtZW50IClcblx0XHRcdFx0XHRcdC5kYXRhKCBcInVpLXNvcnRhYmxlLWl0ZW1cIiwgdHJ1ZSApO1xuXG5cdFx0XHRcdFx0Ly8gU3RvcmUgaGVscGVyIG9wdGlvbiB0byBsYXRlciByZXN0b3JlIGl0XG5cdFx0XHRcdFx0c29ydGFibGUub3B0aW9ucy5faGVscGVyID0gc29ydGFibGUub3B0aW9ucy5oZWxwZXI7XG5cblx0XHRcdFx0XHRzb3J0YWJsZS5vcHRpb25zLmhlbHBlciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHVpLmhlbHBlclsgMCBdO1xuXHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHQvLyBGaXJlIHRoZSBzdGFydCBldmVudHMgb2YgdGhlIHNvcnRhYmxlIHdpdGggb3VyIHBhc3NlZCBicm93c2VyIGV2ZW50LFxuXHRcdFx0XHRcdC8vIGFuZCBvdXIgb3duIGhlbHBlciAoc28gaXQgZG9lc24ndCBjcmVhdGUgYSBuZXcgb25lKVxuXHRcdFx0XHRcdGV2ZW50LnRhcmdldCA9IHNvcnRhYmxlLmN1cnJlbnRJdGVtWyAwIF07XG5cdFx0XHRcdFx0c29ydGFibGUuX21vdXNlQ2FwdHVyZSggZXZlbnQsIHRydWUgKTtcblx0XHRcdFx0XHRzb3J0YWJsZS5fbW91c2VTdGFydCggZXZlbnQsIHRydWUsIHRydWUgKTtcblxuXHRcdFx0XHRcdC8vIEJlY2F1c2UgdGhlIGJyb3dzZXIgZXZlbnQgaXMgd2F5IG9mZiB0aGUgbmV3IGFwcGVuZGVkIHBvcnRsZXQsXG5cdFx0XHRcdFx0Ly8gbW9kaWZ5IG5lY2Vzc2FyeSB2YXJpYWJsZXMgdG8gcmVmbGVjdCB0aGUgY2hhbmdlc1xuXHRcdFx0XHRcdHNvcnRhYmxlLm9mZnNldC5jbGljay50b3AgPSBkcmFnZ2FibGUub2Zmc2V0LmNsaWNrLnRvcDtcblx0XHRcdFx0XHRzb3J0YWJsZS5vZmZzZXQuY2xpY2subGVmdCA9IGRyYWdnYWJsZS5vZmZzZXQuY2xpY2subGVmdDtcblx0XHRcdFx0XHRzb3J0YWJsZS5vZmZzZXQucGFyZW50LmxlZnQgLT0gZHJhZ2dhYmxlLm9mZnNldC5wYXJlbnQubGVmdCAtXG5cdFx0XHRcdFx0XHRzb3J0YWJsZS5vZmZzZXQucGFyZW50LmxlZnQ7XG5cdFx0XHRcdFx0c29ydGFibGUub2Zmc2V0LnBhcmVudC50b3AgLT0gZHJhZ2dhYmxlLm9mZnNldC5wYXJlbnQudG9wIC1cblx0XHRcdFx0XHRcdHNvcnRhYmxlLm9mZnNldC5wYXJlbnQudG9wO1xuXG5cdFx0XHRcdFx0ZHJhZ2dhYmxlLl90cmlnZ2VyKCBcInRvU29ydGFibGVcIiwgZXZlbnQgKTtcblxuXHRcdFx0XHRcdC8vIEluZm9ybSBkcmFnZ2FibGUgdGhhdCB0aGUgaGVscGVyIGlzIGluIGEgdmFsaWQgZHJvcCB6b25lLFxuXHRcdFx0XHRcdC8vIHVzZWQgc29sZWx5IGluIHRoZSByZXZlcnQgb3B0aW9uIHRvIGhhbmRsZSBcInZhbGlkL2ludmFsaWRcIi5cblx0XHRcdFx0XHRkcmFnZ2FibGUuZHJvcHBlZCA9IHNvcnRhYmxlLmVsZW1lbnQ7XG5cblx0XHRcdFx0XHQvLyBOZWVkIHRvIHJlZnJlc2hQb3NpdGlvbnMgb2YgYWxsIHNvcnRhYmxlcyBpbiB0aGUgY2FzZSB0aGF0XG5cdFx0XHRcdFx0Ly8gYWRkaW5nIHRvIG9uZSBzb3J0YWJsZSBjaGFuZ2VzIHRoZSBsb2NhdGlvbiBvZiB0aGUgb3RoZXIgc29ydGFibGVzICgjOTY3NSlcblx0XHRcdFx0XHQkLmVhY2goIGRyYWdnYWJsZS5zb3J0YWJsZXMsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0dGhpcy5yZWZyZXNoUG9zaXRpb25zKCk7XG5cdFx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdFx0Ly8gSGFjayBzbyByZWNlaXZlL3VwZGF0ZSBjYWxsYmFja3Mgd29yayAobW9zdGx5KVxuXHRcdFx0XHRcdGRyYWdnYWJsZS5jdXJyZW50SXRlbSA9IGRyYWdnYWJsZS5lbGVtZW50O1xuXHRcdFx0XHRcdHNvcnRhYmxlLmZyb21PdXRzaWRlID0gZHJhZ2dhYmxlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCBzb3J0YWJsZS5jdXJyZW50SXRlbSApIHtcblx0XHRcdFx0XHRzb3J0YWJsZS5fbW91c2VEcmFnKCBldmVudCApO1xuXG5cdFx0XHRcdFx0Ly8gQ29weSB0aGUgc29ydGFibGUncyBwb3NpdGlvbiBiZWNhdXNlIHRoZSBkcmFnZ2FibGUncyBjYW4gcG90ZW50aWFsbHkgcmVmbGVjdFxuXHRcdFx0XHRcdC8vIGEgcmVsYXRpdmUgcG9zaXRpb24sIHdoaWxlIHNvcnRhYmxlIGlzIGFsd2F5cyBhYnNvbHV0ZSwgd2hpY2ggdGhlIGRyYWdnZWRcblx0XHRcdFx0XHQvLyBlbGVtZW50IGhhcyBub3cgYmVjb21lLiAoIzg4MDkpXG5cdFx0XHRcdFx0dWkucG9zaXRpb24gPSBzb3J0YWJsZS5wb3NpdGlvbjtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHQvLyBJZiBpdCBkb2Vzbid0IGludGVyc2VjdCB3aXRoIHRoZSBzb3J0YWJsZSwgYW5kIGl0IGludGVyc2VjdGVkIGJlZm9yZSxcblx0XHRcdFx0Ly8gd2UgZmFrZSB0aGUgZHJhZyBzdG9wIG9mIHRoZSBzb3J0YWJsZSwgYnV0IG1ha2Ugc3VyZSBpdCBkb2Vzbid0IHJlbW92ZVxuXHRcdFx0XHQvLyB0aGUgaGVscGVyIGJ5IHVzaW5nIGNhbmNlbEhlbHBlclJlbW92YWwuXG5cdFx0XHRcdGlmICggc29ydGFibGUuaXNPdmVyICkge1xuXG5cdFx0XHRcdFx0c29ydGFibGUuaXNPdmVyID0gMDtcblx0XHRcdFx0XHRzb3J0YWJsZS5jYW5jZWxIZWxwZXJSZW1vdmFsID0gdHJ1ZTtcblxuXHRcdFx0XHRcdC8vIENhbGxpbmcgc29ydGFibGUncyBtb3VzZVN0b3Agd291bGQgdHJpZ2dlciBhIHJldmVydCxcblx0XHRcdFx0XHQvLyBzbyByZXZlcnQgbXVzdCBiZSB0ZW1wb3JhcmlseSBmYWxzZSB1bnRpbCBhZnRlciBtb3VzZVN0b3AgaXMgY2FsbGVkLlxuXHRcdFx0XHRcdHNvcnRhYmxlLm9wdGlvbnMuX3JldmVydCA9IHNvcnRhYmxlLm9wdGlvbnMucmV2ZXJ0O1xuXHRcdFx0XHRcdHNvcnRhYmxlLm9wdGlvbnMucmV2ZXJ0ID0gZmFsc2U7XG5cblx0XHRcdFx0XHRzb3J0YWJsZS5fdHJpZ2dlciggXCJvdXRcIiwgZXZlbnQsIHNvcnRhYmxlLl91aUhhc2goIHNvcnRhYmxlICkgKTtcblx0XHRcdFx0XHRzb3J0YWJsZS5fbW91c2VTdG9wKCBldmVudCwgdHJ1ZSApO1xuXG5cdFx0XHRcdFx0Ly8gUmVzdG9yZSBzb3J0YWJsZSBiZWhhdmlvcnMgdGhhdCB3ZXJlIG1vZGZpZWRcblx0XHRcdFx0XHQvLyB3aGVuIHRoZSBkcmFnZ2FibGUgZW50ZXJlZCB0aGUgc29ydGFibGUgYXJlYSAoIzk0ODEpXG5cdFx0XHRcdFx0c29ydGFibGUub3B0aW9ucy5yZXZlcnQgPSBzb3J0YWJsZS5vcHRpb25zLl9yZXZlcnQ7XG5cdFx0XHRcdFx0c29ydGFibGUub3B0aW9ucy5oZWxwZXIgPSBzb3J0YWJsZS5vcHRpb25zLl9oZWxwZXI7XG5cblx0XHRcdFx0XHRpZiAoIHNvcnRhYmxlLnBsYWNlaG9sZGVyICkge1xuXHRcdFx0XHRcdFx0c29ydGFibGUucGxhY2Vob2xkZXIucmVtb3ZlKCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gUmVzdG9yZSBhbmQgcmVjYWxjdWxhdGUgdGhlIGRyYWdnYWJsZSdzIG9mZnNldCBjb25zaWRlcmluZyB0aGUgc29ydGFibGVcblx0XHRcdFx0XHQvLyBtYXkgaGF2ZSBtb2RpZmllZCB0aGVtIGluIHVuZXhwZWN0ZWQgd2F5cy4gKCM4ODA5LCAjMTA2NjkpXG5cdFx0XHRcdFx0dWkuaGVscGVyLmFwcGVuZFRvKCBkcmFnZ2FibGUuX3BhcmVudCApO1xuXHRcdFx0XHRcdGRyYWdnYWJsZS5fcmVmcmVzaE9mZnNldHMoIGV2ZW50ICk7XG5cdFx0XHRcdFx0dWkucG9zaXRpb24gPSBkcmFnZ2FibGUuX2dlbmVyYXRlUG9zaXRpb24oIGV2ZW50LCB0cnVlICk7XG5cblx0XHRcdFx0XHRkcmFnZ2FibGUuX3RyaWdnZXIoIFwiZnJvbVNvcnRhYmxlXCIsIGV2ZW50ICk7XG5cblx0XHRcdFx0XHQvLyBJbmZvcm0gZHJhZ2dhYmxlIHRoYXQgdGhlIGhlbHBlciBpcyBubyBsb25nZXIgaW4gYSB2YWxpZCBkcm9wIHpvbmVcblx0XHRcdFx0XHRkcmFnZ2FibGUuZHJvcHBlZCA9IGZhbHNlO1xuXG5cdFx0XHRcdFx0Ly8gTmVlZCB0byByZWZyZXNoUG9zaXRpb25zIG9mIGFsbCBzb3J0YWJsZXMganVzdCBpbiBjYXNlIHJlbW92aW5nXG5cdFx0XHRcdFx0Ly8gZnJvbSBvbmUgc29ydGFibGUgY2hhbmdlcyB0aGUgbG9jYXRpb24gb2Ygb3RoZXIgc29ydGFibGVzICgjOTY3NSlcblx0XHRcdFx0XHQkLmVhY2goIGRyYWdnYWJsZS5zb3J0YWJsZXMsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0dGhpcy5yZWZyZXNoUG9zaXRpb25zKCk7XG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9XG59ICk7XG5cbiQudWkucGx1Z2luLmFkZCggXCJkcmFnZ2FibGVcIiwgXCJjdXJzb3JcIiwge1xuXHRzdGFydDogZnVuY3Rpb24oIGV2ZW50LCB1aSwgaW5zdGFuY2UgKSB7XG5cdFx0dmFyIHQgPSAkKCBcImJvZHlcIiApLFxuXHRcdFx0byA9IGluc3RhbmNlLm9wdGlvbnM7XG5cblx0XHRpZiAoIHQuY3NzKCBcImN1cnNvclwiICkgKSB7XG5cdFx0XHRvLl9jdXJzb3IgPSB0LmNzcyggXCJjdXJzb3JcIiApO1xuXHRcdH1cblx0XHR0LmNzcyggXCJjdXJzb3JcIiwgby5jdXJzb3IgKTtcblx0fSxcblx0c3RvcDogZnVuY3Rpb24oIGV2ZW50LCB1aSwgaW5zdGFuY2UgKSB7XG5cdFx0dmFyIG8gPSBpbnN0YW5jZS5vcHRpb25zO1xuXHRcdGlmICggby5fY3Vyc29yICkge1xuXHRcdFx0JCggXCJib2R5XCIgKS5jc3MoIFwiY3Vyc29yXCIsIG8uX2N1cnNvciApO1xuXHRcdH1cblx0fVxufSApO1xuXG4kLnVpLnBsdWdpbi5hZGQoIFwiZHJhZ2dhYmxlXCIsIFwib3BhY2l0eVwiLCB7XG5cdHN0YXJ0OiBmdW5jdGlvbiggZXZlbnQsIHVpLCBpbnN0YW5jZSApIHtcblx0XHR2YXIgdCA9ICQoIHVpLmhlbHBlciApLFxuXHRcdFx0byA9IGluc3RhbmNlLm9wdGlvbnM7XG5cdFx0aWYgKCB0LmNzcyggXCJvcGFjaXR5XCIgKSApIHtcblx0XHRcdG8uX29wYWNpdHkgPSB0LmNzcyggXCJvcGFjaXR5XCIgKTtcblx0XHR9XG5cdFx0dC5jc3MoIFwib3BhY2l0eVwiLCBvLm9wYWNpdHkgKTtcblx0fSxcblx0c3RvcDogZnVuY3Rpb24oIGV2ZW50LCB1aSwgaW5zdGFuY2UgKSB7XG5cdFx0dmFyIG8gPSBpbnN0YW5jZS5vcHRpb25zO1xuXHRcdGlmICggby5fb3BhY2l0eSApIHtcblx0XHRcdCQoIHVpLmhlbHBlciApLmNzcyggXCJvcGFjaXR5XCIsIG8uX29wYWNpdHkgKTtcblx0XHR9XG5cdH1cbn0gKTtcblxuJC51aS5wbHVnaW4uYWRkKCBcImRyYWdnYWJsZVwiLCBcInNjcm9sbFwiLCB7XG5cdHN0YXJ0OiBmdW5jdGlvbiggZXZlbnQsIHVpLCBpICkge1xuXHRcdGlmICggIWkuc2Nyb2xsUGFyZW50Tm90SGlkZGVuICkge1xuXHRcdFx0aS5zY3JvbGxQYXJlbnROb3RIaWRkZW4gPSBpLmhlbHBlci5zY3JvbGxQYXJlbnQoIGZhbHNlICk7XG5cdFx0fVxuXG5cdFx0aWYgKCBpLnNjcm9sbFBhcmVudE5vdEhpZGRlblsgMCBdICE9PSBpLmRvY3VtZW50WyAwIF0gJiZcblx0XHRcdFx0aS5zY3JvbGxQYXJlbnROb3RIaWRkZW5bIDAgXS50YWdOYW1lICE9PSBcIkhUTUxcIiApIHtcblx0XHRcdGkub3ZlcmZsb3dPZmZzZXQgPSBpLnNjcm9sbFBhcmVudE5vdEhpZGRlbi5vZmZzZXQoKTtcblx0XHR9XG5cdH0sXG5cdGRyYWc6IGZ1bmN0aW9uKCBldmVudCwgdWksIGkgICkge1xuXG5cdFx0dmFyIG8gPSBpLm9wdGlvbnMsXG5cdFx0XHRzY3JvbGxlZCA9IGZhbHNlLFxuXHRcdFx0c2Nyb2xsUGFyZW50ID0gaS5zY3JvbGxQYXJlbnROb3RIaWRkZW5bIDAgXSxcblx0XHRcdGRvY3VtZW50ID0gaS5kb2N1bWVudFsgMCBdO1xuXG5cdFx0aWYgKCBzY3JvbGxQYXJlbnQgIT09IGRvY3VtZW50ICYmIHNjcm9sbFBhcmVudC50YWdOYW1lICE9PSBcIkhUTUxcIiApIHtcblx0XHRcdGlmICggIW8uYXhpcyB8fCBvLmF4aXMgIT09IFwieFwiICkge1xuXHRcdFx0XHRpZiAoICggaS5vdmVyZmxvd09mZnNldC50b3AgKyBzY3JvbGxQYXJlbnQub2Zmc2V0SGVpZ2h0ICkgLSBldmVudC5wYWdlWSA8XG5cdFx0XHRcdFx0XHRvLnNjcm9sbFNlbnNpdGl2aXR5ICkge1xuXHRcdFx0XHRcdHNjcm9sbFBhcmVudC5zY3JvbGxUb3AgPSBzY3JvbGxlZCA9IHNjcm9sbFBhcmVudC5zY3JvbGxUb3AgKyBvLnNjcm9sbFNwZWVkO1xuXHRcdFx0XHR9IGVsc2UgaWYgKCBldmVudC5wYWdlWSAtIGkub3ZlcmZsb3dPZmZzZXQudG9wIDwgby5zY3JvbGxTZW5zaXRpdml0eSApIHtcblx0XHRcdFx0XHRzY3JvbGxQYXJlbnQuc2Nyb2xsVG9wID0gc2Nyb2xsZWQgPSBzY3JvbGxQYXJlbnQuc2Nyb2xsVG9wIC0gby5zY3JvbGxTcGVlZDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoICFvLmF4aXMgfHwgby5heGlzICE9PSBcInlcIiApIHtcblx0XHRcdFx0aWYgKCAoIGkub3ZlcmZsb3dPZmZzZXQubGVmdCArIHNjcm9sbFBhcmVudC5vZmZzZXRXaWR0aCApIC0gZXZlbnQucGFnZVggPFxuXHRcdFx0XHRcdFx0by5zY3JvbGxTZW5zaXRpdml0eSApIHtcblx0XHRcdFx0XHRzY3JvbGxQYXJlbnQuc2Nyb2xsTGVmdCA9IHNjcm9sbGVkID0gc2Nyb2xsUGFyZW50LnNjcm9sbExlZnQgKyBvLnNjcm9sbFNwZWVkO1xuXHRcdFx0XHR9IGVsc2UgaWYgKCBldmVudC5wYWdlWCAtIGkub3ZlcmZsb3dPZmZzZXQubGVmdCA8IG8uc2Nyb2xsU2Vuc2l0aXZpdHkgKSB7XG5cdFx0XHRcdFx0c2Nyb2xsUGFyZW50LnNjcm9sbExlZnQgPSBzY3JvbGxlZCA9IHNjcm9sbFBhcmVudC5zY3JvbGxMZWZ0IC0gby5zY3JvbGxTcGVlZDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0aWYgKCAhby5heGlzIHx8IG8uYXhpcyAhPT0gXCJ4XCIgKSB7XG5cdFx0XHRcdGlmICggZXZlbnQucGFnZVkgLSAkKCBkb2N1bWVudCApLnNjcm9sbFRvcCgpIDwgby5zY3JvbGxTZW5zaXRpdml0eSApIHtcblx0XHRcdFx0XHRzY3JvbGxlZCA9ICQoIGRvY3VtZW50ICkuc2Nyb2xsVG9wKCAkKCBkb2N1bWVudCApLnNjcm9sbFRvcCgpIC0gby5zY3JvbGxTcGVlZCApO1xuXHRcdFx0XHR9IGVsc2UgaWYgKCAkKCB3aW5kb3cgKS5oZWlnaHQoKSAtICggZXZlbnQucGFnZVkgLSAkKCBkb2N1bWVudCApLnNjcm9sbFRvcCgpICkgPFxuXHRcdFx0XHRcdFx0by5zY3JvbGxTZW5zaXRpdml0eSApIHtcblx0XHRcdFx0XHRzY3JvbGxlZCA9ICQoIGRvY3VtZW50ICkuc2Nyb2xsVG9wKCAkKCBkb2N1bWVudCApLnNjcm9sbFRvcCgpICsgby5zY3JvbGxTcGVlZCApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICggIW8uYXhpcyB8fCBvLmF4aXMgIT09IFwieVwiICkge1xuXHRcdFx0XHRpZiAoIGV2ZW50LnBhZ2VYIC0gJCggZG9jdW1lbnQgKS5zY3JvbGxMZWZ0KCkgPCBvLnNjcm9sbFNlbnNpdGl2aXR5ICkge1xuXHRcdFx0XHRcdHNjcm9sbGVkID0gJCggZG9jdW1lbnQgKS5zY3JvbGxMZWZ0KFxuXHRcdFx0XHRcdFx0JCggZG9jdW1lbnQgKS5zY3JvbGxMZWZ0KCkgLSBvLnNjcm9sbFNwZWVkXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSBlbHNlIGlmICggJCggd2luZG93ICkud2lkdGgoKSAtICggZXZlbnQucGFnZVggLSAkKCBkb2N1bWVudCApLnNjcm9sbExlZnQoKSApIDxcblx0XHRcdFx0XHRcdG8uc2Nyb2xsU2Vuc2l0aXZpdHkgKSB7XG5cdFx0XHRcdFx0c2Nyb2xsZWQgPSAkKCBkb2N1bWVudCApLnNjcm9sbExlZnQoXG5cdFx0XHRcdFx0XHQkKCBkb2N1bWVudCApLnNjcm9sbExlZnQoKSArIG8uc2Nyb2xsU3BlZWRcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRpZiAoIHNjcm9sbGVkICE9PSBmYWxzZSAmJiAkLnVpLmRkbWFuYWdlciAmJiAhby5kcm9wQmVoYXZpb3VyICkge1xuXHRcdFx0JC51aS5kZG1hbmFnZXIucHJlcGFyZU9mZnNldHMoIGksIGV2ZW50ICk7XG5cdFx0fVxuXG5cdH1cbn0gKTtcblxuJC51aS5wbHVnaW4uYWRkKCBcImRyYWdnYWJsZVwiLCBcInNuYXBcIiwge1xuXHRzdGFydDogZnVuY3Rpb24oIGV2ZW50LCB1aSwgaSApIHtcblxuXHRcdHZhciBvID0gaS5vcHRpb25zO1xuXG5cdFx0aS5zbmFwRWxlbWVudHMgPSBbXTtcblxuXHRcdCQoIG8uc25hcC5jb25zdHJ1Y3RvciAhPT0gU3RyaW5nID8gKCBvLnNuYXAuaXRlbXMgfHwgXCI6ZGF0YSh1aS1kcmFnZ2FibGUpXCIgKSA6IG8uc25hcCApXG5cdFx0XHQuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciAkdCA9ICQoIHRoaXMgKSxcblx0XHRcdFx0XHQkbyA9ICR0Lm9mZnNldCgpO1xuXHRcdFx0XHRpZiAoIHRoaXMgIT09IGkuZWxlbWVudFsgMCBdICkge1xuXHRcdFx0XHRcdGkuc25hcEVsZW1lbnRzLnB1c2goIHtcblx0XHRcdFx0XHRcdGl0ZW06IHRoaXMsXG5cdFx0XHRcdFx0XHR3aWR0aDogJHQub3V0ZXJXaWR0aCgpLCBoZWlnaHQ6ICR0Lm91dGVySGVpZ2h0KCksXG5cdFx0XHRcdFx0XHR0b3A6ICRvLnRvcCwgbGVmdDogJG8ubGVmdFxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXG5cdH0sXG5cdGRyYWc6IGZ1bmN0aW9uKCBldmVudCwgdWksIGluc3QgKSB7XG5cblx0XHR2YXIgdHMsIGJzLCBscywgcnMsIGwsIHIsIHQsIGIsIGksIGZpcnN0LFxuXHRcdFx0byA9IGluc3Qub3B0aW9ucyxcblx0XHRcdGQgPSBvLnNuYXBUb2xlcmFuY2UsXG5cdFx0XHR4MSA9IHVpLm9mZnNldC5sZWZ0LCB4MiA9IHgxICsgaW5zdC5oZWxwZXJQcm9wb3J0aW9ucy53aWR0aCxcblx0XHRcdHkxID0gdWkub2Zmc2V0LnRvcCwgeTIgPSB5MSArIGluc3QuaGVscGVyUHJvcG9ydGlvbnMuaGVpZ2h0O1xuXG5cdFx0Zm9yICggaSA9IGluc3Quc25hcEVsZW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tICkge1xuXG5cdFx0XHRsID0gaW5zdC5zbmFwRWxlbWVudHNbIGkgXS5sZWZ0IC0gaW5zdC5tYXJnaW5zLmxlZnQ7XG5cdFx0XHRyID0gbCArIGluc3Quc25hcEVsZW1lbnRzWyBpIF0ud2lkdGg7XG5cdFx0XHR0ID0gaW5zdC5zbmFwRWxlbWVudHNbIGkgXS50b3AgLSBpbnN0Lm1hcmdpbnMudG9wO1xuXHRcdFx0YiA9IHQgKyBpbnN0LnNuYXBFbGVtZW50c1sgaSBdLmhlaWdodDtcblxuXHRcdFx0aWYgKCB4MiA8IGwgLSBkIHx8IHgxID4gciArIGQgfHwgeTIgPCB0IC0gZCB8fCB5MSA+IGIgKyBkIHx8XG5cdFx0XHRcdFx0ISQuY29udGFpbnMoIGluc3Quc25hcEVsZW1lbnRzWyBpIF0uaXRlbS5vd25lckRvY3VtZW50LFxuXHRcdFx0XHRcdGluc3Quc25hcEVsZW1lbnRzWyBpIF0uaXRlbSApICkge1xuXHRcdFx0XHRpZiAoIGluc3Quc25hcEVsZW1lbnRzWyBpIF0uc25hcHBpbmcgKSB7XG5cdFx0XHRcdFx0KCBpbnN0Lm9wdGlvbnMuc25hcC5yZWxlYXNlICYmXG5cdFx0XHRcdFx0XHRpbnN0Lm9wdGlvbnMuc25hcC5yZWxlYXNlLmNhbGwoXG5cdFx0XHRcdFx0XHRcdGluc3QuZWxlbWVudCxcblx0XHRcdFx0XHRcdFx0ZXZlbnQsXG5cdFx0XHRcdFx0XHRcdCQuZXh0ZW5kKCBpbnN0Ll91aUhhc2goKSwgeyBzbmFwSXRlbTogaW5zdC5zbmFwRWxlbWVudHNbIGkgXS5pdGVtIH0gKVxuXHRcdFx0XHRcdFx0KSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGluc3Quc25hcEVsZW1lbnRzWyBpIF0uc25hcHBpbmcgPSBmYWxzZTtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggby5zbmFwTW9kZSAhPT0gXCJpbm5lclwiICkge1xuXHRcdFx0XHR0cyA9IE1hdGguYWJzKCB0IC0geTIgKSA8PSBkO1xuXHRcdFx0XHRicyA9IE1hdGguYWJzKCBiIC0geTEgKSA8PSBkO1xuXHRcdFx0XHRscyA9IE1hdGguYWJzKCBsIC0geDIgKSA8PSBkO1xuXHRcdFx0XHRycyA9IE1hdGguYWJzKCByIC0geDEgKSA8PSBkO1xuXHRcdFx0XHRpZiAoIHRzICkge1xuXHRcdFx0XHRcdHVpLnBvc2l0aW9uLnRvcCA9IGluc3QuX2NvbnZlcnRQb3NpdGlvblRvKCBcInJlbGF0aXZlXCIsIHtcblx0XHRcdFx0XHRcdHRvcDogdCAtIGluc3QuaGVscGVyUHJvcG9ydGlvbnMuaGVpZ2h0LFxuXHRcdFx0XHRcdFx0bGVmdDogMFxuXHRcdFx0XHRcdH0gKS50b3A7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCBicyApIHtcblx0XHRcdFx0XHR1aS5wb3NpdGlvbi50b3AgPSBpbnN0Ll9jb252ZXJ0UG9zaXRpb25UbyggXCJyZWxhdGl2ZVwiLCB7XG5cdFx0XHRcdFx0XHR0b3A6IGIsXG5cdFx0XHRcdFx0XHRsZWZ0OiAwXG5cdFx0XHRcdFx0fSApLnRvcDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIGxzICkge1xuXHRcdFx0XHRcdHVpLnBvc2l0aW9uLmxlZnQgPSBpbnN0Ll9jb252ZXJ0UG9zaXRpb25UbyggXCJyZWxhdGl2ZVwiLCB7XG5cdFx0XHRcdFx0XHR0b3A6IDAsXG5cdFx0XHRcdFx0XHRsZWZ0OiBsIC0gaW5zdC5oZWxwZXJQcm9wb3J0aW9ucy53aWR0aFxuXHRcdFx0XHRcdH0gKS5sZWZ0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICggcnMgKSB7XG5cdFx0XHRcdFx0dWkucG9zaXRpb24ubGVmdCA9IGluc3QuX2NvbnZlcnRQb3NpdGlvblRvKCBcInJlbGF0aXZlXCIsIHtcblx0XHRcdFx0XHRcdHRvcDogMCxcblx0XHRcdFx0XHRcdGxlZnQ6IHJcblx0XHRcdFx0XHR9ICkubGVmdDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRmaXJzdCA9ICggdHMgfHwgYnMgfHwgbHMgfHwgcnMgKTtcblxuXHRcdFx0aWYgKCBvLnNuYXBNb2RlICE9PSBcIm91dGVyXCIgKSB7XG5cdFx0XHRcdHRzID0gTWF0aC5hYnMoIHQgLSB5MSApIDw9IGQ7XG5cdFx0XHRcdGJzID0gTWF0aC5hYnMoIGIgLSB5MiApIDw9IGQ7XG5cdFx0XHRcdGxzID0gTWF0aC5hYnMoIGwgLSB4MSApIDw9IGQ7XG5cdFx0XHRcdHJzID0gTWF0aC5hYnMoIHIgLSB4MiApIDw9IGQ7XG5cdFx0XHRcdGlmICggdHMgKSB7XG5cdFx0XHRcdFx0dWkucG9zaXRpb24udG9wID0gaW5zdC5fY29udmVydFBvc2l0aW9uVG8oIFwicmVsYXRpdmVcIiwge1xuXHRcdFx0XHRcdFx0dG9wOiB0LFxuXHRcdFx0XHRcdFx0bGVmdDogMFxuXHRcdFx0XHRcdH0gKS50b3A7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCBicyApIHtcblx0XHRcdFx0XHR1aS5wb3NpdGlvbi50b3AgPSBpbnN0Ll9jb252ZXJ0UG9zaXRpb25UbyggXCJyZWxhdGl2ZVwiLCB7XG5cdFx0XHRcdFx0XHR0b3A6IGIgLSBpbnN0LmhlbHBlclByb3BvcnRpb25zLmhlaWdodCxcblx0XHRcdFx0XHRcdGxlZnQ6IDBcblx0XHRcdFx0XHR9ICkudG9wO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICggbHMgKSB7XG5cdFx0XHRcdFx0dWkucG9zaXRpb24ubGVmdCA9IGluc3QuX2NvbnZlcnRQb3NpdGlvblRvKCBcInJlbGF0aXZlXCIsIHtcblx0XHRcdFx0XHRcdHRvcDogMCxcblx0XHRcdFx0XHRcdGxlZnQ6IGxcblx0XHRcdFx0XHR9ICkubGVmdDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIHJzICkge1xuXHRcdFx0XHRcdHVpLnBvc2l0aW9uLmxlZnQgPSBpbnN0Ll9jb252ZXJ0UG9zaXRpb25UbyggXCJyZWxhdGl2ZVwiLCB7XG5cdFx0XHRcdFx0XHR0b3A6IDAsXG5cdFx0XHRcdFx0XHRsZWZ0OiByIC0gaW5zdC5oZWxwZXJQcm9wb3J0aW9ucy53aWR0aFxuXHRcdFx0XHRcdH0gKS5sZWZ0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICggIWluc3Quc25hcEVsZW1lbnRzWyBpIF0uc25hcHBpbmcgJiYgKCB0cyB8fCBicyB8fCBscyB8fCBycyB8fCBmaXJzdCApICkge1xuXHRcdFx0XHQoIGluc3Qub3B0aW9ucy5zbmFwLnNuYXAgJiZcblx0XHRcdFx0XHRpbnN0Lm9wdGlvbnMuc25hcC5zbmFwLmNhbGwoXG5cdFx0XHRcdFx0XHRpbnN0LmVsZW1lbnQsXG5cdFx0XHRcdFx0XHRldmVudCxcblx0XHRcdFx0XHRcdCQuZXh0ZW5kKCBpbnN0Ll91aUhhc2goKSwge1xuXHRcdFx0XHRcdFx0XHRzbmFwSXRlbTogaW5zdC5zbmFwRWxlbWVudHNbIGkgXS5pdGVtXG5cdFx0XHRcdFx0XHR9ICkgKSApO1xuXHRcdFx0fVxuXHRcdFx0aW5zdC5zbmFwRWxlbWVudHNbIGkgXS5zbmFwcGluZyA9ICggdHMgfHwgYnMgfHwgbHMgfHwgcnMgfHwgZmlyc3QgKTtcblxuXHRcdH1cblxuXHR9XG59ICk7XG5cbiQudWkucGx1Z2luLmFkZCggXCJkcmFnZ2FibGVcIiwgXCJzdGFja1wiLCB7XG5cdHN0YXJ0OiBmdW5jdGlvbiggZXZlbnQsIHVpLCBpbnN0YW5jZSApIHtcblx0XHR2YXIgbWluLFxuXHRcdFx0byA9IGluc3RhbmNlLm9wdGlvbnMsXG5cdFx0XHRncm91cCA9ICQubWFrZUFycmF5KCAkKCBvLnN0YWNrICkgKS5zb3J0KCBmdW5jdGlvbiggYSwgYiApIHtcblx0XHRcdFx0cmV0dXJuICggcGFyc2VJbnQoICQoIGEgKS5jc3MoIFwiekluZGV4XCIgKSwgMTAgKSB8fCAwICkgLVxuXHRcdFx0XHRcdCggcGFyc2VJbnQoICQoIGIgKS5jc3MoIFwiekluZGV4XCIgKSwgMTAgKSB8fCAwICk7XG5cdFx0XHR9ICk7XG5cblx0XHRpZiAoICFncm91cC5sZW5ndGggKSB7IHJldHVybjsgfVxuXG5cdFx0bWluID0gcGFyc2VJbnQoICQoIGdyb3VwWyAwIF0gKS5jc3MoIFwiekluZGV4XCIgKSwgMTAgKSB8fCAwO1xuXHRcdCQoIGdyb3VwICkuZWFjaCggZnVuY3Rpb24oIGkgKSB7XG5cdFx0XHQkKCB0aGlzICkuY3NzKCBcInpJbmRleFwiLCBtaW4gKyBpICk7XG5cdFx0fSApO1xuXHRcdHRoaXMuY3NzKCBcInpJbmRleFwiLCAoIG1pbiArIGdyb3VwLmxlbmd0aCApICk7XG5cdH1cbn0gKTtcblxuJC51aS5wbHVnaW4uYWRkKCBcImRyYWdnYWJsZVwiLCBcInpJbmRleFwiLCB7XG5cdHN0YXJ0OiBmdW5jdGlvbiggZXZlbnQsIHVpLCBpbnN0YW5jZSApIHtcblx0XHR2YXIgdCA9ICQoIHVpLmhlbHBlciApLFxuXHRcdFx0byA9IGluc3RhbmNlLm9wdGlvbnM7XG5cblx0XHRpZiAoIHQuY3NzKCBcInpJbmRleFwiICkgKSB7XG5cdFx0XHRvLl96SW5kZXggPSB0LmNzcyggXCJ6SW5kZXhcIiApO1xuXHRcdH1cblx0XHR0LmNzcyggXCJ6SW5kZXhcIiwgby56SW5kZXggKTtcblx0fSxcblx0c3RvcDogZnVuY3Rpb24oIGV2ZW50LCB1aSwgaW5zdGFuY2UgKSB7XG5cdFx0dmFyIG8gPSBpbnN0YW5jZS5vcHRpb25zO1xuXG5cdFx0aWYgKCBvLl96SW5kZXggKSB7XG5cdFx0XHQkKCB1aS5oZWxwZXIgKS5jc3MoIFwiekluZGV4XCIsIG8uX3pJbmRleCApO1xuXHRcdH1cblx0fVxufSApO1xuXG5yZXR1cm4gJC51aS5kcmFnZ2FibGU7XG5cbn0gKSApO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvanF1ZXJ5LXVpL3VpL3dpZGdldHMvZHJhZ2dhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSBGOFMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIVxuICogalF1ZXJ5IFVJIExhYmVscyAxLjEyLjFcbiAqIGh0dHA6Ly9qcXVlcnl1aS5jb21cbiAqXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogaHR0cDovL2pxdWVyeS5vcmcvbGljZW5zZVxuICovXG5cbi8vPj5sYWJlbDogbGFiZWxzXG4vLz4+Z3JvdXA6IENvcmVcbi8vPj5kZXNjcmlwdGlvbjogRmluZCBhbGwgdGhlIGxhYmVscyBhc3NvY2lhdGVkIHdpdGggYSBnaXZlbiBpbnB1dFxuLy8+PmRvY3M6IGh0dHA6Ly9hcGkuanF1ZXJ5dWkuY29tL2xhYmVscy9cblxuKCBmdW5jdGlvbiggZmFjdG9yeSApIHtcblx0aWYgKCB0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCApIHtcblxuXHRcdC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cblx0XHRkZWZpbmUoIFsgXCJqcXVlcnlcIiwgXCIuL3ZlcnNpb25cIiwgXCIuL2VzY2FwZS1zZWxlY3RvclwiIF0sIGZhY3RvcnkgKTtcblx0fSBlbHNlIHtcblxuXHRcdC8vIEJyb3dzZXIgZ2xvYmFsc1xuXHRcdGZhY3RvcnkoIGpRdWVyeSApO1xuXHR9XG59ICggZnVuY3Rpb24oICQgKSB7XG5cbnJldHVybiAkLmZuLmxhYmVscyA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgYW5jZXN0b3IsIHNlbGVjdG9yLCBpZCwgbGFiZWxzLCBhbmNlc3RvcnM7XG5cblx0Ly8gQ2hlY2sgY29udHJvbC5sYWJlbHMgZmlyc3Rcblx0aWYgKCB0aGlzWyAwIF0ubGFiZWxzICYmIHRoaXNbIDAgXS5sYWJlbHMubGVuZ3RoICkge1xuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggdGhpc1sgMCBdLmxhYmVscyApO1xuXHR9XG5cblx0Ly8gU3VwcG9ydDogSUUgPD0gMTEsIEZGIDw9IDM3LCBBbmRyb2lkIDw9IDIuMyBvbmx5XG5cdC8vIEFib3ZlIGJyb3dzZXJzIGRvIG5vdCBzdXBwb3J0IGNvbnRyb2wubGFiZWxzLiBFdmVyeXRoaW5nIGJlbG93IGlzIHRvIHN1cHBvcnQgdGhlbVxuXHQvLyBhcyB3ZWxsIGFzIGRvY3VtZW50IGZyYWdtZW50cy4gY29udHJvbC5sYWJlbHMgZG9lcyBub3Qgd29yayBvbiBkb2N1bWVudCBmcmFnbWVudHNcblx0bGFiZWxzID0gdGhpcy5lcSggMCApLnBhcmVudHMoIFwibGFiZWxcIiApO1xuXG5cdC8vIExvb2sgZm9yIHRoZSBsYWJlbCBiYXNlZCBvbiB0aGUgaWRcblx0aWQgPSB0aGlzLmF0dHIoIFwiaWRcIiApO1xuXHRpZiAoIGlkICkge1xuXG5cdFx0Ly8gV2UgZG9uJ3Qgc2VhcmNoIGFnYWluc3QgdGhlIGRvY3VtZW50IGluIGNhc2UgdGhlIGVsZW1lbnRcblx0XHQvLyBpcyBkaXNjb25uZWN0ZWQgZnJvbSB0aGUgRE9NXG5cdFx0YW5jZXN0b3IgPSB0aGlzLmVxKCAwICkucGFyZW50cygpLmxhc3QoKTtcblxuXHRcdC8vIEdldCBhIGZ1bGwgc2V0IG9mIHRvcCBsZXZlbCBhbmNlc3RvcnNcblx0XHRhbmNlc3RvcnMgPSBhbmNlc3Rvci5hZGQoIGFuY2VzdG9yLmxlbmd0aCA/IGFuY2VzdG9yLnNpYmxpbmdzKCkgOiB0aGlzLnNpYmxpbmdzKCkgKTtcblxuXHRcdC8vIENyZWF0ZSBhIHNlbGVjdG9yIGZvciB0aGUgbGFiZWwgYmFzZWQgb24gdGhlIGlkXG5cdFx0c2VsZWN0b3IgPSBcImxhYmVsW2Zvcj0nXCIgKyAkLnVpLmVzY2FwZVNlbGVjdG9yKCBpZCApICsgXCInXVwiO1xuXG5cdFx0bGFiZWxzID0gbGFiZWxzLmFkZCggYW5jZXN0b3JzLmZpbmQoIHNlbGVjdG9yICkuYWRkQmFjayggc2VsZWN0b3IgKSApO1xuXG5cdH1cblxuXHQvLyBSZXR1cm4gd2hhdGV2ZXIgd2UgaGF2ZSBmb3VuZCBmb3IgbGFiZWxzXG5cdHJldHVybiB0aGlzLnB1c2hTdGFjayggbGFiZWxzICk7XG59O1xuXG59ICkgKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2pxdWVyeS11aS91aS9sYWJlbHMuanNcbi8vIG1vZHVsZSBpZCA9IEhQR3Vcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgTXlXb3Jrc3BhY2VDb21wb25lbnQgfSBmcm9tIFwiLi9NeVdvcmtzcGFjZS9Db21wb25lbnQvTXlXb3Jrc3BhY2VDb21wb25lbnRcIjtcclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudFJlZ2lzdHJhdGlvbiB7XHJcblxyXG4gICAgc3RhdGljIHJlZ2lzdGVyQ29tcG9uZW50cyA9ICgpID0+IHtcclxuXHJcbiAgICAgICAga28uY29tcG9uZW50cy5yZWdpc3RlcihcIm15LXdvcmtzcGFjZVwiLCBuZXcgTXlXb3Jrc3BhY2VDb21wb25lbnQobnVsbCxudWxsKSk7XHJcbiAgICAgICAgXHJcblxyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db21wb25lbnRSZWdpc3RyYXRpb24udHMiLCIoIGZ1bmN0aW9uKCBmYWN0b3J5ICkge1xuXHRpZiAoIHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kICkge1xuXG5cdFx0Ly8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuXHRcdGRlZmluZSggWyBcImpxdWVyeVwiLCBcIi4vdmVyc2lvblwiIF0sIGZhY3RvcnkgKTtcblx0fSBlbHNlIHtcblxuXHRcdC8vIEJyb3dzZXIgZ2xvYmFsc1xuXHRcdGZhY3RvcnkoIGpRdWVyeSApO1xuXHR9XG59ICggZnVuY3Rpb24oICQgKSB7XG5yZXR1cm4gJC51aS5zYWZlQWN0aXZlRWxlbWVudCA9IGZ1bmN0aW9uKCBkb2N1bWVudCApIHtcblx0dmFyIGFjdGl2ZUVsZW1lbnQ7XG5cblx0Ly8gU3VwcG9ydDogSUUgOSBvbmx5XG5cdC8vIElFOSB0aHJvd3MgYW4gXCJVbnNwZWNpZmllZCBlcnJvclwiIGFjY2Vzc2luZyBkb2N1bWVudC5hY3RpdmVFbGVtZW50IGZyb20gYW4gPGlmcmFtZT5cblx0dHJ5IHtcblx0XHRhY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblx0fSBjYXRjaCAoIGVycm9yICkge1xuXHRcdGFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5ib2R5O1xuXHR9XG5cblx0Ly8gU3VwcG9ydDogSUUgOSAtIDExIG9ubHlcblx0Ly8gSUUgbWF5IHJldHVybiBudWxsIGluc3RlYWQgb2YgYW4gZWxlbWVudFxuXHQvLyBJbnRlcmVzdGluZ2x5LCB0aGlzIG9ubHkgc2VlbXMgdG8gb2NjdXIgd2hlbiBOT1QgaW4gYW4gaWZyYW1lXG5cdGlmICggIWFjdGl2ZUVsZW1lbnQgKSB7XG5cdFx0YWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmJvZHk7XG5cdH1cblxuXHQvLyBTdXBwb3J0OiBJRSAxMSBvbmx5XG5cdC8vIElFMTEgcmV0dXJucyBhIHNlZW1pbmdseSBlbXB0eSBvYmplY3QgaW4gc29tZSBjYXNlcyB3aGVuIGFjY2Vzc2luZ1xuXHQvLyBkb2N1bWVudC5hY3RpdmVFbGVtZW50IGZyb20gYW4gPGlmcmFtZT5cblx0aWYgKCAhYWN0aXZlRWxlbWVudC5ub2RlTmFtZSApIHtcblx0XHRhY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYm9keTtcblx0fVxuXG5cdHJldHVybiBhY3RpdmVFbGVtZW50O1xufTtcblxufSApICk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9qcXVlcnktdWkvdWkvc2FmZS1hY3RpdmUtZWxlbWVudC5qc1xuLy8gbW9kdWxlIGlkID0gTm5wOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xyXG5pbXBvcnQgeyB3aWRnZXRzIH0gZnJvbSBcIi4uL01vZGVsL015V29ya3NwYWNlTW9kZWwuanNcIlxyXG4vL2V4cG9ydCBjbGFzcyB3aWRnZXRzIHtcclxuLy8gICAgeDogS25vY2tvdXRPYnNlcnZhYmxlPG51bWJlcj47XHJcbi8vICAgIHk6IEtub2Nrb3V0T2JzZXJ2YWJsZTxudW1iZXI+O1xyXG4vLyAgICB3aWR0aDogS25vY2tvdXRPYnNlcnZhYmxlPG51bWJlcj47XHJcbi8vICAgIGhlaWdodDogS25vY2tvdXRPYnNlcnZhYmxlPG51bWJlcj47XHJcbi8vICAgIGlubmVyd2lkZ2V0czogS25vY2tvdXRPYnNlcnZhYmxlQXJyYXk8d2lkZ2V0cz47XHJcbi8vICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xyXG4vLyAgICAgICAgdGhpcy54ID0ga28ub2JzZXJ2YWJsZSh4KTtcclxuLy8gICAgICAgIHRoaXMueSA9IGtvLm9ic2VydmFibGUoeSk7XHJcbi8vICAgICAgICB0aGlzLndpZHRoID0ga28ub2JzZXJ2YWJsZSh3aWR0aCk7XHJcbi8vICAgICAgICB0aGlzLmhlaWdodCA9IGtvLm9ic2VydmFibGUoaGVpZ2h0KTtcclxuLy8gICAgICAgIHRoaXMuaW5uZXJ3aWRnZXRzID0ga28ub2JzZXJ2YWJsZUFycmF5KFtdKTtcclxuLy8gICAgfVxyXG4vLyAgICBwdWJsaWMgYWRkTmV3V2lkZ2V0ID0gKCkgPT4ge1xyXG4vLyAgICAgICAgdmFyIG15d2lkZ2V0ID0gbmV3IHdpZGdldHMoXHJcbi8vICAgICAgICAgICAgMCxcclxuLy8gICAgICAgICAgICAwLFxyXG4vLyAgICAgICAgICAgIE1hdGguZmxvb3IoMSArIDMgKiBNYXRoLnJhbmRvbSgpKSxcclxuLy8gICAgICAgICAgICBNYXRoLmZsb29yKDEgKyAzICogTWF0aC5yYW5kb20oKSlcclxuLy8gICAgICAgIClcclxuLy8gICAgICAgIHRoaXMuaW5uZXJ3aWRnZXRzLnB1c2gobXl3aWRnZXQpO1xyXG4vLyAgICB9O1xyXG4vL31cclxuZXhwb3J0IGNsYXNzIE15V29ya3NwYWNlVmlld01vZGVsIHtcclxuXHJcbiAgICBwdWJsaWMgd2lkZ2V0czogYW55O1xyXG4gICAgcHVibGljIGNvbXBvbmVudEluZm86IGFueTtcclxuICAgIHB1YmxpYyBncmlkOiBhbnkgPSBudWxsO1xyXG4gICAgY29uc3RydWN0b3IoY29udHJvbGxlcjogYW55LCBjb21wb25lbnRJbmZvOiBhbnkpIHtcclxuICAgICAgICB0aGlzLndpZGdldHMgPSBjb250cm9sbGVyLnRpbGVJbmZvO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50SW5mbyA9IGNvbXBvbmVudEluZm87XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy53aWRnZXRzKCkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGNvbXBvbmVudEluZm8pKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgQWZ0ZXJBZGRXaWRnZXQgPSAoaXRlbXMpID0+IHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdyaWQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5jb21wb25lbnRJbmZvKSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmdyaWQgPSAkKHRoaXMuY29tcG9uZW50SW5mby5lbGVtZW50KS5maW5kKCcuZ3JpZC1zdGFjaycpLmdyaWRzdGFjayh7XHJcbiAgICAgICAgICAgICAgICBjZWxsSGVpZ2h0OiA3MCxcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsTWFyZ2luOiAzNSxcclxuICAgICAgICAgICAgICAgIGF1dG86IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZVJlc2l6ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRpc2FibGVEcmFnOiBmYWxzZVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSkuZGF0YSgnZ3JpZHN0YWNrJyk7XHJcblxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGl0ZW0gPSBfLmZpbmQoaXRlbXMsIChpOiBhbnkpID0+IHsgcmV0dXJuIGkubm9kZVR5cGUgPT0gMSB9KTtcclxuXHJcbiAgICAgICAgc2VsZi5ncmlkLmFkZFdpZGdldChpdGVtKTtcclxuICAgICAgICBrby51dGlscy5kb21Ob2RlRGlzcG9zYWwuYWRkRGlzcG9zZUNhbGxiYWNrKGl0ZW0sICgpID0+IHtcclxuICAgICAgICAgICAgc2VsZi5ncmlkLnJlbW92ZV93aWRnZXQoaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBNeVdvcmtzcGFjZUNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29udHJvbGxlcjogYW55LCBjb21wb25lbnRJbmZvOiBhbnkpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdmlld01vZGVsOiB7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVWaWV3TW9kZWw6IChjb250cm9sbGVyLCBjb21wb25lbnRJbmZvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBNeVdvcmtzcGFjZVZpZXdNb2RlbChjb250cm9sbGVyLCBjb21wb25lbnRJbmZvKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy90ZW1wbGF0ZTogcmVxdWlyZShcImh0bWwtbG9hZGVyIS4vTXlXb3Jrc3BhY2VWaWV3Lmh0bWxcIilcclxuXHJcbiAgICAgICAgICAgIC8vdGVtcGxhdGU6XHJcbiAgICAgICAgICAgIC8vICAgIFtcclxuICAgICAgICAgICAgLy8gICAgICAgICc8ZGl2IGNsYXNzPVwiZ3JpZC1zdGFja1wiIGRhdGEtYmluZD1cImZvcmVhY2g6IHtkYXRhOiB3aWRnZXRzfVwiPicsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAnPGRpdiBjbGFzcz1cImdyaWQtc3RhY2staXRlbVwiIGRhdGEtYmluZD1cImF0dHI6e1xcJ2RhdGEtZ3MteFxcJzogJGRhdGEueCwgXFwnZGF0YS1ncy15XFwnOiAkZGF0YS55LCBcXCdkYXRhLWdzLXdpZHRoXFwnOiAkZGF0YS53aWR0aCwgXFwnZGF0YS1ncy1oZWlnaHRcXCc6ICRkYXRhLmhlaWdodCwgXFwnZGF0YS1ncy1hdXRvLXBvc2l0aW9uXFwnOiAkZGF0YS5hdXRvX3Bvc2l0aW9ufVwiPicsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJncmlkLXN0YWNrLWl0ZW0tY29udGVudFwiPicsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICc8cCBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyO1wiPiBQYW5lbCBjb250ZW50IDwvcD4nLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAnPHAgc3R5bGUgPSBcInRleHQtYWxpZ246Y2VudGVyO1wiPiA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz0gXCJidG4gYnRuLXN1Y2Nlc3NcIj4gU2VlIE1vcmUgRG9jayBBY3Rpdml0eSA8L2J1dHRvbj48L3A+JyxcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAnPC9kaXY+JyxcclxuICAgICAgICAgICAgLy8gICAgICAgICc8L2Rpdj4nLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgJzwvZGl2PidcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAgICAgICAgLy8nPGRpdiBjbGFzcz1cImdyaWQtc3RhY2tcIiBkYXRhLWJpbmQ9XCJmb3JlYWNoOiB7ZGF0YTogd2lkZ2V0c31cIj4nLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgLy8nICAgPGRpdiBjbGFzcz1cImdyaWQtc3RhY2staXRlbVwiIGRhdGEtYmluZD1cImF0dHI6IHtcXCdkYXRhLWdzLXhcXCc6ICRkYXRhLngsIFxcJ2RhdGEtZ3MteVxcJzogJGRhdGEueSwgXFwnZGF0YS1ncy13aWR0aFxcJzogJGRhdGEud2lkdGgsIFxcJ2RhdGEtZ3MtaGVpZ2h0XFwnOiAkZGF0YS5oZWlnaHQsIFxcJ2RhdGEtZ3MtYXV0by1wb3NpdGlvblxcJzogJGRhdGEuYXV0b19wb3NpdGlvbn1cIj4nLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgLy8nICAgICAgIDxkaXYgY2xhc3M9XCJncmlkLXN0YWNrLWl0ZW0tY29udGVudFwiPjxidXR0b24gZGF0YS1iaW5kPVwiY2xpY2s6ICRyb290LmRlbGV0ZV93aWRnZXRcIj5EZWxldGUgbWU8L2J1dHRvbj48L2Rpdj4nLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgLy8nICAgPC9kaXY+JyxcclxuICAgICAgICAgICAgLy8gICAgICAgIC8vJzwvZGl2PiAnXHJcbiAgICAgICAgICAgIC8vICAgIF0uam9pbignJylcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHsgZWxlbWVudDogJ2dyaWRzdGFjay10ZW1wbGF0ZScgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTXlXb3Jrc3BhY2UvQ29tcG9uZW50L015V29ya3NwYWNlQ29tcG9uZW50LnRzIiwiLyohXG4gKiBqUXVlcnkgVUkgU2Nyb2xsIFBhcmVudCAxLjEyLjFcbiAqIGh0dHA6Ly9qcXVlcnl1aS5jb21cbiAqXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogaHR0cDovL2pxdWVyeS5vcmcvbGljZW5zZVxuICovXG5cbi8vPj5sYWJlbDogc2Nyb2xsUGFyZW50XG4vLz4+Z3JvdXA6IENvcmVcbi8vPj5kZXNjcmlwdGlvbjogR2V0IHRoZSBjbG9zZXN0IGFuY2VzdG9yIGVsZW1lbnQgdGhhdCBpcyBzY3JvbGxhYmxlLlxuLy8+PmRvY3M6IGh0dHA6Ly9hcGkuanF1ZXJ5dWkuY29tL3Njcm9sbFBhcmVudC9cblxuKCBmdW5jdGlvbiggZmFjdG9yeSApIHtcblx0aWYgKCB0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCApIHtcblxuXHRcdC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cblx0XHRkZWZpbmUoIFsgXCJqcXVlcnlcIiwgXCIuL3ZlcnNpb25cIiBdLCBmYWN0b3J5ICk7XG5cdH0gZWxzZSB7XG5cblx0XHQvLyBCcm93c2VyIGdsb2JhbHNcblx0XHRmYWN0b3J5KCBqUXVlcnkgKTtcblx0fVxufSAoIGZ1bmN0aW9uKCAkICkge1xuXG5yZXR1cm4gJC5mbi5zY3JvbGxQYXJlbnQgPSBmdW5jdGlvbiggaW5jbHVkZUhpZGRlbiApIHtcblx0dmFyIHBvc2l0aW9uID0gdGhpcy5jc3MoIFwicG9zaXRpb25cIiApLFxuXHRcdGV4Y2x1ZGVTdGF0aWNQYXJlbnQgPSBwb3NpdGlvbiA9PT0gXCJhYnNvbHV0ZVwiLFxuXHRcdG92ZXJmbG93UmVnZXggPSBpbmNsdWRlSGlkZGVuID8gLyhhdXRvfHNjcm9sbHxoaWRkZW4pLyA6IC8oYXV0b3xzY3JvbGwpLyxcblx0XHRzY3JvbGxQYXJlbnQgPSB0aGlzLnBhcmVudHMoKS5maWx0ZXIoIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHBhcmVudCA9ICQoIHRoaXMgKTtcblx0XHRcdGlmICggZXhjbHVkZVN0YXRpY1BhcmVudCAmJiBwYXJlbnQuY3NzKCBcInBvc2l0aW9uXCIgKSA9PT0gXCJzdGF0aWNcIiApIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG92ZXJmbG93UmVnZXgudGVzdCggcGFyZW50LmNzcyggXCJvdmVyZmxvd1wiICkgKyBwYXJlbnQuY3NzKCBcIm92ZXJmbG93LXlcIiApICtcblx0XHRcdFx0cGFyZW50LmNzcyggXCJvdmVyZmxvdy14XCIgKSApO1xuXHRcdH0gKS5lcSggMCApO1xuXG5cdHJldHVybiBwb3NpdGlvbiA9PT0gXCJmaXhlZFwiIHx8ICFzY3JvbGxQYXJlbnQubGVuZ3RoID9cblx0XHQkKCB0aGlzWyAwIF0ub3duZXJEb2N1bWVudCB8fCBkb2N1bWVudCApIDpcblx0XHRzY3JvbGxQYXJlbnQ7XG59O1xuXG59ICkgKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2pxdWVyeS11aS91aS9zY3JvbGwtcGFyZW50LmpzXG4vLyBtb2R1bGUgaWQgPSBSbDZEXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIiggZnVuY3Rpb24oIGZhY3RvcnkgKSB7XG5cdGlmICggdHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQgKSB7XG5cblx0XHQvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG5cdFx0ZGVmaW5lKCBbIFwianF1ZXJ5XCIgXSwgZmFjdG9yeSApO1xuXHR9IGVsc2Uge1xuXG5cdFx0Ly8gQnJvd3NlciBnbG9iYWxzXG5cdFx0ZmFjdG9yeSggalF1ZXJ5ICk7XG5cdH1cbn0gKCBmdW5jdGlvbiggJCApIHtcblxuJC51aSA9ICQudWkgfHwge307XG5cbnJldHVybiAkLnVpLnZlcnNpb24gPSBcIjEuMTIuMVwiO1xuXG59ICkgKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2pxdWVyeS11aS91aS92ZXJzaW9uLmpzXG4vLyBtb2R1bGUgaWQgPSBVWjljXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIVxuICogalF1ZXJ5IFVJIEtleWNvZGUgMS4xMi4xXG4gKiBodHRwOi8vanF1ZXJ5dWkuY29tXG4gKlxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIGh0dHA6Ly9qcXVlcnkub3JnL2xpY2Vuc2VcbiAqL1xuXG4vLz4+bGFiZWw6IEtleWNvZGVcbi8vPj5ncm91cDogQ29yZVxuLy8+PmRlc2NyaXB0aW9uOiBQcm92aWRlIGtleWNvZGVzIGFzIGtleW5hbWVzXG4vLz4+ZG9jczogaHR0cDovL2FwaS5qcXVlcnl1aS5jb20valF1ZXJ5LnVpLmtleUNvZGUvXG5cbiggZnVuY3Rpb24oIGZhY3RvcnkgKSB7XG5cdGlmICggdHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQgKSB7XG5cblx0XHQvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG5cdFx0ZGVmaW5lKCBbIFwianF1ZXJ5XCIsIFwiLi92ZXJzaW9uXCIgXSwgZmFjdG9yeSApO1xuXHR9IGVsc2Uge1xuXG5cdFx0Ly8gQnJvd3NlciBnbG9iYWxzXG5cdFx0ZmFjdG9yeSggalF1ZXJ5ICk7XG5cdH1cbn0gKCBmdW5jdGlvbiggJCApIHtcbnJldHVybiAkLnVpLmtleUNvZGUgPSB7XG5cdEJBQ0tTUEFDRTogOCxcblx0Q09NTUE6IDE4OCxcblx0REVMRVRFOiA0Nixcblx0RE9XTjogNDAsXG5cdEVORDogMzUsXG5cdEVOVEVSOiAxMyxcblx0RVNDQVBFOiAyNyxcblx0SE9NRTogMzYsXG5cdExFRlQ6IDM3LFxuXHRQQUdFX0RPV046IDM0LFxuXHRQQUdFX1VQOiAzMyxcblx0UEVSSU9EOiAxOTAsXG5cdFJJR0hUOiAzOSxcblx0U1BBQ0U6IDMyLFxuXHRUQUI6IDksXG5cdFVQOiAzOFxufTtcblxufSApICk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9qcXVlcnktdWkvdWkva2V5Y29kZS5qc1xuLy8gbW9kdWxlIGlkID0gV0xvQVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIoIGZ1bmN0aW9uKCBmYWN0b3J5ICkge1xuXHRpZiAoIHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kICkge1xuXG5cdFx0Ly8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuXHRcdGRlZmluZSggWyBcImpxdWVyeVwiLCBcIi4vdmVyc2lvblwiIF0sIGZhY3RvcnkgKTtcblx0fSBlbHNlIHtcblxuXHRcdC8vIEJyb3dzZXIgZ2xvYmFsc1xuXHRcdGZhY3RvcnkoIGpRdWVyeSApO1xuXHR9XG59ICggZnVuY3Rpb24oICQgKSB7XG5cbi8vIEludGVybmFsIHVzZSBvbmx5XG5yZXR1cm4gJC51aS5lc2NhcGVTZWxlY3RvciA9ICggZnVuY3Rpb24oKSB7XG5cdHZhciBzZWxlY3RvckVzY2FwZSA9IC8oWyFcIiMkJSYnKCkqKywuLzo7PD0+P0BbXFxdXmB7fH1+XSkvZztcblx0cmV0dXJuIGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcblx0XHRyZXR1cm4gc2VsZWN0b3IucmVwbGFjZSggc2VsZWN0b3JFc2NhcGUsIFwiXFxcXCQxXCIgKTtcblx0fTtcbn0gKSgpO1xuXG59ICkgKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2pxdWVyeS11aS91aS9lc2NhcGUtc2VsZWN0b3IuanNcbi8vIG1vZHVsZSBpZCA9IFdlc1Rcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBncmlkc3RhY2suanMgMC4zLjBcbiAqIGh0dHA6Ly90cm9vbGVlLmdpdGh1Yi5pby9ncmlkc3RhY2suanMvXG4gKiAoYykgMjAxNC0yMDE2IFBhdmVsIFJlem5pa292LCBEeWxhbiBXZWlzc1xuICogZ3JpZHN0YWNrLmpzIG1heSBiZSBmcmVlbHkgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogQHByZXNlcnZlXG4qL1xuKGZ1bmN0aW9uKGZhY3RvcnkpIHtcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShbJ2pxdWVyeScsICdsb2Rhc2gnXSwgZmFjdG9yeSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdHJ5IHsgalF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5Jyk7IH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgIHRyeSB7IF8gPSByZXF1aXJlKCdsb2Rhc2gnKTsgfSBjYXRjaCAoZSkge31cbiAgICAgICAgZmFjdG9yeShqUXVlcnksIF8pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZhY3RvcnkoalF1ZXJ5LCBfKTtcbiAgICB9XG59KShmdW5jdGlvbigkLCBfKSB7XG5cbiAgICB2YXIgc2NvcGUgPSB3aW5kb3c7XG5cbiAgICB2YXIgb2Jzb2xldGUgPSBmdW5jdGlvbihmLCBvbGROYW1lLCBuZXdOYW1lKSB7XG4gICAgICAgIHZhciB3cmFwcGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ2dyaWRzdGFjay5qczogRnVuY3Rpb24gYCcgKyBvbGROYW1lICsgJ2AgaXMgZGVwcmVjYXRlZCBhcyBvZiB2MC4yLjUgYW5kIGhhcyBiZWVuIHJlcGxhY2VkICcgK1xuICAgICAgICAgICAgJ3dpdGggYCcgKyBuZXdOYW1lICsgJ2AuIEl0IHdpbGwgYmUgKipjb21wbGV0ZWx5KiogcmVtb3ZlZCBpbiB2MS4wLicpO1xuICAgICAgICAgICAgcmV0dXJuIGYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfTtcbiAgICAgICAgd3JhcHBlci5wcm90b3R5cGUgPSBmLnByb3RvdHlwZTtcblxuICAgICAgICByZXR1cm4gd3JhcHBlcjtcbiAgICB9O1xuXG4gICAgdmFyIG9ic29sZXRlT3B0cyA9IGZ1bmN0aW9uKG9sZE5hbWUsIG5ld05hbWUpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdncmlkc3RhY2suanM6IE9wdGlvbiBgJyArIG9sZE5hbWUgKyAnYCBpcyBkZXByZWNhdGVkIGFzIG9mIHYwLjIuNSBhbmQgaGFzIGJlZW4gcmVwbGFjZWQgd2l0aCBgJyArXG4gICAgICAgICAgICBuZXdOYW1lICsgJ2AuIEl0IHdpbGwgYmUgKipjb21wbGV0ZWx5KiogcmVtb3ZlZCBpbiB2MS4wLicpO1xuICAgIH07XG5cbiAgICB2YXIgVXRpbHMgPSB7XG4gICAgICAgIGlzSW50ZXJjZXB0ZWQ6IGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiAhKGEueCArIGEud2lkdGggPD0gYi54IHx8IGIueCArIGIud2lkdGggPD0gYS54IHx8IGEueSArIGEuaGVpZ2h0IDw9IGIueSB8fCBiLnkgKyBiLmhlaWdodCA8PSBhLnkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNvcnQ6IGZ1bmN0aW9uKG5vZGVzLCBkaXIsIHdpZHRoKSB7XG4gICAgICAgICAgICB3aWR0aCA9IHdpZHRoIHx8IF8uY2hhaW4obm9kZXMpLm1hcChmdW5jdGlvbihub2RlKSB7IHJldHVybiBub2RlLnggKyBub2RlLndpZHRoOyB9KS5tYXgoKS52YWx1ZSgpO1xuICAgICAgICAgICAgZGlyID0gZGlyICE9IC0xID8gMSA6IC0xO1xuICAgICAgICAgICAgcmV0dXJuIF8uc29ydEJ5KG5vZGVzLCBmdW5jdGlvbihuKSB7IHJldHVybiBkaXIgKiAobi54ICsgbi55ICogd2lkdGgpOyB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBjcmVhdGVTdHlsZXNoZWV0OiBmdW5jdGlvbihpZCkge1xuICAgICAgICAgICAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2NzcycpO1xuICAgICAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKCdkYXRhLWdzLXN0eWxlLWlkJywgaWQpO1xuICAgICAgICAgICAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICAgICAgICAgICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSAnJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgICAgICAgICAgcmV0dXJuIHN0eWxlLnNoZWV0O1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlbW92ZVN0eWxlc2hlZXQ6IGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgICAgICAkKCdTVFlMRVtkYXRhLWdzLXN0eWxlLWlkPScgKyBpZCArICddJykucmVtb3ZlKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5zZXJ0Q1NTUnVsZTogZnVuY3Rpb24oc2hlZXQsIHNlbGVjdG9yLCBydWxlcywgaW5kZXgpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc2hlZXQuaW5zZXJ0UnVsZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHNoZWV0Lmluc2VydFJ1bGUoc2VsZWN0b3IgKyAneycgKyBydWxlcyArICd9JywgaW5kZXgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc2hlZXQuYWRkUnVsZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHNoZWV0LmFkZFJ1bGUoc2VsZWN0b3IsIHJ1bGVzLCBpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgdG9Cb29sOiBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHYgPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHYgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICB2ID0gdi50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiAhKHYgPT09ICcnIHx8IHYgPT0gJ25vJyB8fCB2ID09ICdmYWxzZScgfHwgdiA9PSAnMCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIEJvb2xlYW4odik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgX2NvbGxpc2lvbk5vZGVDaGVjazogZnVuY3Rpb24obikge1xuICAgICAgICAgICAgcmV0dXJuIG4gIT0gdGhpcy5ub2RlICYmIFV0aWxzLmlzSW50ZXJjZXB0ZWQobiwgdGhpcy5ubik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgX2RpZENvbGxpZGU6IGZ1bmN0aW9uKGJuKSB7XG4gICAgICAgICAgICByZXR1cm4gVXRpbHMuaXNJbnRlcmNlcHRlZCh7eDogdGhpcy5uLngsIHk6IHRoaXMubmV3WSwgd2lkdGg6IHRoaXMubi53aWR0aCwgaGVpZ2h0OiB0aGlzLm4uaGVpZ2h0fSwgYm4pO1xuICAgICAgICB9LFxuXG4gICAgICAgIF9pc0FkZE5vZGVJbnRlcmNlcHRlZDogZnVuY3Rpb24obikge1xuICAgICAgICAgICAgcmV0dXJuIFV0aWxzLmlzSW50ZXJjZXB0ZWQoe3g6IHRoaXMueCwgeTogdGhpcy55LCB3aWR0aDogdGhpcy5ub2RlLndpZHRoLCBoZWlnaHQ6IHRoaXMubm9kZS5oZWlnaHR9LCBuKTtcbiAgICAgICAgfSxcblxuICAgICAgICBwYXJzZUhlaWdodDogZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICB2YXIgaGVpZ2h0ID0gdmFsO1xuICAgICAgICAgICAgdmFyIGhlaWdodFVuaXQgPSAncHgnO1xuICAgICAgICAgICAgaWYgKGhlaWdodCAmJiBfLmlzU3RyaW5nKGhlaWdodCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2ggPSBoZWlnaHQubWF0Y2goL14oLVswLTldK1xcLlswLTldK3xbMC05XSpcXC5bMC05XSt8LVswLTldK3xbMC05XSspKHB4fGVtfHJlbXx2aHx2dyk/JC8pO1xuICAgICAgICAgICAgICAgIGlmICghbWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGhlaWdodCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoZWlnaHRVbml0ID0gbWF0Y2hbMl0gfHwgJ3B4JztcbiAgICAgICAgICAgICAgICBoZWlnaHQgPSBwYXJzZUZsb2F0KG1hdGNoWzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7aGVpZ2h0OiBoZWlnaHQsIHVuaXQ6IGhlaWdodFVuaXR9O1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIGpzY3M6ZGlzYWJsZSByZXF1aXJlQ2FtZWxDYXNlT3JVcHBlckNhc2VJZGVudGlmaWVyc1xuICAgIFV0aWxzLmlzX2ludGVyY2VwdGVkID0gb2Jzb2xldGUoVXRpbHMuaXNJbnRlcmNlcHRlZCwgJ2lzX2ludGVyY2VwdGVkJywgJ2lzSW50ZXJjZXB0ZWQnKTtcblxuICAgIFV0aWxzLmNyZWF0ZV9zdHlsZXNoZWV0ID0gb2Jzb2xldGUoVXRpbHMuY3JlYXRlU3R5bGVzaGVldCwgJ2NyZWF0ZV9zdHlsZXNoZWV0JywgJ2NyZWF0ZVN0eWxlc2hlZXQnKTtcblxuICAgIFV0aWxzLnJlbW92ZV9zdHlsZXNoZWV0ID0gb2Jzb2xldGUoVXRpbHMucmVtb3ZlU3R5bGVzaGVldCwgJ3JlbW92ZV9zdHlsZXNoZWV0JywgJ3JlbW92ZVN0eWxlc2hlZXQnKTtcblxuICAgIFV0aWxzLmluc2VydF9jc3NfcnVsZSA9IG9ic29sZXRlKFV0aWxzLmluc2VydENTU1J1bGUsICdpbnNlcnRfY3NzX3J1bGUnLCAnaW5zZXJ0Q1NTUnVsZScpO1xuICAgIC8vIGpzY3M6ZW5hYmxlIHJlcXVpcmVDYW1lbENhc2VPclVwcGVyQ2FzZUlkZW50aWZpZXJzXG5cbiAgICAvKipcbiAgICAqIEBjbGFzcyBHcmlkU3RhY2tEcmFnRHJvcFBsdWdpblxuICAgICogQmFzZSBjbGFzcyBmb3IgZHJhZyduJ2Ryb3AgcGx1Z2luLlxuICAgICovXG4gICAgZnVuY3Rpb24gR3JpZFN0YWNrRHJhZ0Ryb3BQbHVnaW4oZ3JpZCkge1xuICAgICAgICB0aGlzLmdyaWQgPSBncmlkO1xuICAgIH1cblxuICAgIEdyaWRTdGFja0RyYWdEcm9wUGx1Z2luLnJlZ2lzdGVyZWRQbHVnaW5zID0gW107XG5cbiAgICBHcmlkU3RhY2tEcmFnRHJvcFBsdWdpbi5yZWdpc3RlclBsdWdpbiA9IGZ1bmN0aW9uKHBsdWdpbkNsYXNzKSB7XG4gICAgICAgIEdyaWRTdGFja0RyYWdEcm9wUGx1Z2luLnJlZ2lzdGVyZWRQbHVnaW5zLnB1c2gocGx1Z2luQ2xhc3MpO1xuICAgIH07XG5cbiAgICBHcmlkU3RhY2tEcmFnRHJvcFBsdWdpbi5wcm90b3R5cGUucmVzaXphYmxlID0gZnVuY3Rpb24oZWwsIG9wdHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIEdyaWRTdGFja0RyYWdEcm9wUGx1Z2luLnByb3RvdHlwZS5kcmFnZ2FibGUgPSBmdW5jdGlvbihlbCwgb3B0cykge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgR3JpZFN0YWNrRHJhZ0Ryb3BQbHVnaW4ucHJvdG90eXBlLmRyb3BwYWJsZSA9IGZ1bmN0aW9uKGVsLCBvcHRzKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBHcmlkU3RhY2tEcmFnRHJvcFBsdWdpbi5wcm90b3R5cGUuaXNEcm9wcGFibGUgPSBmdW5jdGlvbihlbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIEdyaWRTdGFja0RyYWdEcm9wUGx1Z2luLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uKGVsLCBldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cblxuICAgIHZhciBpZFNlcSA9IDA7XG5cbiAgICB2YXIgR3JpZFN0YWNrRW5naW5lID0gZnVuY3Rpb24od2lkdGgsIG9uY2hhbmdlLCBmbG9hdE1vZGUsIGhlaWdodCwgaXRlbXMpIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmZsb2F0ID0gZmxvYXRNb2RlIHx8IGZhbHNlO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodCB8fCAwO1xuXG4gICAgICAgIHRoaXMubm9kZXMgPSBpdGVtcyB8fCBbXTtcbiAgICAgICAgdGhpcy5vbmNoYW5nZSA9IG9uY2hhbmdlIHx8IGZ1bmN0aW9uKCkge307XG5cbiAgICAgICAgdGhpcy5fdXBkYXRlQ291bnRlciA9IDA7XG4gICAgICAgIHRoaXMuX2Zsb2F0ID0gdGhpcy5mbG9hdDtcblxuICAgICAgICB0aGlzLl9hZGRlZE5vZGVzID0gW107XG4gICAgICAgIHRoaXMuX3JlbW92ZWROb2RlcyA9IFtdO1xuICAgIH07XG5cbiAgICBHcmlkU3RhY2tFbmdpbmUucHJvdG90eXBlLmJhdGNoVXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUNvdW50ZXIgPSAxO1xuICAgICAgICB0aGlzLmZsb2F0ID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgR3JpZFN0YWNrRW5naW5lLnByb3RvdHlwZS5jb21taXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX3VwZGF0ZUNvdW50ZXIgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUNvdW50ZXIgPSAwO1xuICAgICAgICAgICAgdGhpcy5mbG9hdCA9IHRoaXMuX2Zsb2F0O1xuICAgICAgICAgICAgdGhpcy5fcGFja05vZGVzKCk7XG4gICAgICAgICAgICB0aGlzLl9ub3RpZnkoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBGb3IgTWV0ZW9yIHN1cHBvcnQ6IGh0dHBzOi8vZ2l0aHViLmNvbS90cm9vbGVlL2dyaWRzdGFjay5qcy9wdWxsLzI3MlxuICAgIEdyaWRTdGFja0VuZ2luZS5wcm90b3R5cGUuZ2V0Tm9kZURhdGFCeURPTUVsID0gZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgcmV0dXJuIF8uZmluZCh0aGlzLm5vZGVzLCBmdW5jdGlvbihuKSB7IHJldHVybiBlbC5nZXQoMCkgPT09IG4uZWwuZ2V0KDApOyB9KTtcbiAgICB9O1xuXG4gICAgR3JpZFN0YWNrRW5naW5lLnByb3RvdHlwZS5fZml4Q29sbGlzaW9ucyA9IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLl9zb3J0Tm9kZXMoLTEpO1xuXG4gICAgICAgIHZhciBubiA9IG5vZGU7XG4gICAgICAgIHZhciBoYXNMb2NrZWQgPSBCb29sZWFuKF8uZmluZCh0aGlzLm5vZGVzLCBmdW5jdGlvbihuKSB7IHJldHVybiBuLmxvY2tlZDsgfSkpO1xuICAgICAgICBpZiAoIXRoaXMuZmxvYXQgJiYgIWhhc0xvY2tlZCkge1xuICAgICAgICAgICAgbm4gPSB7eDogMCwgeTogbm9kZS55LCB3aWR0aDogdGhpcy53aWR0aCwgaGVpZ2h0OiBub2RlLmhlaWdodH07XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIHZhciBjb2xsaXNpb25Ob2RlID0gXy5maW5kKHRoaXMubm9kZXMsIF8uYmluZChVdGlscy5fY29sbGlzaW9uTm9kZUNoZWNrLCB7bm9kZTogbm9kZSwgbm46IG5ufSkpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb2xsaXNpb25Ob2RlID09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5tb3ZlTm9kZShjb2xsaXNpb25Ob2RlLCBjb2xsaXNpb25Ob2RlLngsIG5vZGUueSArIG5vZGUuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIGNvbGxpc2lvbk5vZGUud2lkdGgsIGNvbGxpc2lvbk5vZGUuaGVpZ2h0LCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBHcmlkU3RhY2tFbmdpbmUucHJvdG90eXBlLmlzQXJlYUVtcHR5ID0gZnVuY3Rpb24oeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICB2YXIgbm4gPSB7eDogeCB8fCAwLCB5OiB5IHx8IDAsIHdpZHRoOiB3aWR0aCB8fCAxLCBoZWlnaHQ6IGhlaWdodCB8fCAxfTtcbiAgICAgICAgdmFyIGNvbGxpc2lvbk5vZGUgPSBfLmZpbmQodGhpcy5ub2RlcywgXy5iaW5kKGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICAgIHJldHVybiBVdGlscy5pc0ludGVyY2VwdGVkKG4sIG5uKTtcbiAgICAgICAgfSwgdGhpcykpO1xuICAgICAgICByZXR1cm4gY29sbGlzaW9uTm9kZSA9PT0gbnVsbCB8fCB0eXBlb2YgY29sbGlzaW9uTm9kZSA9PT0gJ3VuZGVmaW5lZCc7XG4gICAgfTtcblxuICAgIEdyaWRTdGFja0VuZ2luZS5wcm90b3R5cGUuX3NvcnROb2RlcyA9IGZ1bmN0aW9uKGRpcikge1xuICAgICAgICB0aGlzLm5vZGVzID0gVXRpbHMuc29ydCh0aGlzLm5vZGVzLCBkaXIsIHRoaXMud2lkdGgpO1xuICAgIH07XG5cbiAgICBHcmlkU3RhY2tFbmdpbmUucHJvdG90eXBlLl9wYWNrTm9kZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5fc29ydE5vZGVzKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuZmxvYXQpIHtcbiAgICAgICAgICAgIF8uZWFjaCh0aGlzLm5vZGVzLCBfLmJpbmQoZnVuY3Rpb24obiwgaSkge1xuICAgICAgICAgICAgICAgIGlmIChuLl91cGRhdGluZyB8fCB0eXBlb2Ygbi5fb3JpZ1kgPT0gJ3VuZGVmaW5lZCcgfHwgbi55ID09IG4uX29yaWdZKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgbmV3WSA9IG4ueTtcbiAgICAgICAgICAgICAgICB3aGlsZSAobmV3WSA+PSBuLl9vcmlnWSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29sbGlzaW9uTm9kZSA9IF8uY2hhaW4odGhpcy5ub2RlcylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKF8uYmluZChVdGlscy5fZGlkQ29sbGlkZSwge246IG4sIG5ld1k6IG5ld1l9KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC52YWx1ZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghY29sbGlzaW9uTm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbi5fZGlydHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbi55ID0gbmV3WTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAtLW5ld1k7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgdGhpcykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy5lYWNoKHRoaXMubm9kZXMsIF8uYmluZChmdW5jdGlvbihuLCBpKSB7XG4gICAgICAgICAgICAgICAgaWYgKG4ubG9ja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2hpbGUgKG4ueSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1kgPSBuLnkgLSAxO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2FuQmVNb3ZlZCA9IGkgPT09IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29sbGlzaW9uTm9kZSA9IF8uY2hhaW4odGhpcy5ub2RlcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGFrZShpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKF8uYmluZChVdGlscy5fZGlkQ29sbGlkZSwge246IG4sIG5ld1k6IG5ld1l9KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudmFsdWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbkJlTW92ZWQgPSB0eXBlb2YgY29sbGlzaW9uTm9kZSA9PSAndW5kZWZpbmVkJztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICghY2FuQmVNb3ZlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbi5fZGlydHkgPSBuLnkgIT0gbmV3WTtcbiAgICAgICAgICAgICAgICAgICAgbi55ID0gbmV3WTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB0aGlzKSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgR3JpZFN0YWNrRW5naW5lLnByb3RvdHlwZS5fcHJlcGFyZU5vZGUgPSBmdW5jdGlvbihub2RlLCByZXNpemluZykge1xuICAgICAgICBub2RlID0gXy5kZWZhdWx0cyhub2RlIHx8IHt9LCB7d2lkdGg6IDEsIGhlaWdodDogMSwgeDogMCwgeTogMH0pO1xuXG4gICAgICAgIG5vZGUueCA9IHBhcnNlSW50KCcnICsgbm9kZS54KTtcbiAgICAgICAgbm9kZS55ID0gcGFyc2VJbnQoJycgKyBub2RlLnkpO1xuICAgICAgICBub2RlLndpZHRoID0gcGFyc2VJbnQoJycgKyBub2RlLndpZHRoKTtcbiAgICAgICAgbm9kZS5oZWlnaHQgPSBwYXJzZUludCgnJyArIG5vZGUuaGVpZ2h0KTtcbiAgICAgICAgbm9kZS5hdXRvUG9zaXRpb24gPSBub2RlLmF1dG9Qb3NpdGlvbiB8fCBmYWxzZTtcbiAgICAgICAgbm9kZS5ub1Jlc2l6ZSA9IG5vZGUubm9SZXNpemUgfHwgZmFsc2U7XG4gICAgICAgIG5vZGUubm9Nb3ZlID0gbm9kZS5ub01vdmUgfHwgZmFsc2U7XG5cbiAgICAgICAgaWYgKG5vZGUud2lkdGggPiB0aGlzLndpZHRoKSB7XG4gICAgICAgICAgICBub2RlLndpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgICAgfSBlbHNlIGlmIChub2RlLndpZHRoIDwgMSkge1xuICAgICAgICAgICAgbm9kZS53aWR0aCA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobm9kZS5oZWlnaHQgPCAxKSB7XG4gICAgICAgICAgICBub2RlLmhlaWdodCA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobm9kZS54IDwgMCkge1xuICAgICAgICAgICAgbm9kZS54ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChub2RlLnggKyBub2RlLndpZHRoID4gdGhpcy53aWR0aCkge1xuICAgICAgICAgICAgaWYgKHJlc2l6aW5nKSB7XG4gICAgICAgICAgICAgICAgbm9kZS53aWR0aCA9IHRoaXMud2lkdGggLSBub2RlLng7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5vZGUueCA9IHRoaXMud2lkdGggLSBub2RlLndpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5vZGUueSA8IDApIHtcbiAgICAgICAgICAgIG5vZGUueSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuXG4gICAgR3JpZFN0YWNrRW5naW5lLnByb3RvdHlwZS5fbm90aWZ5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgICAgICAgYXJnc1swXSA9IHR5cGVvZiBhcmdzWzBdID09PSAndW5kZWZpbmVkJyA/IFtdIDogW2FyZ3NbMF1dO1xuICAgICAgICBhcmdzWzFdID0gdHlwZW9mIGFyZ3NbMV0gPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IGFyZ3NbMV07XG4gICAgICAgIGlmICh0aGlzLl91cGRhdGVDb3VudGVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRlbGV0ZWROb2RlcyA9IGFyZ3NbMF0uY29uY2F0KHRoaXMuZ2V0RGlydHlOb2RlcygpKTtcbiAgICAgICAgdGhpcy5vbmNoYW5nZShkZWxldGVkTm9kZXMsIGFyZ3NbMV0pO1xuICAgIH07XG5cbiAgICBHcmlkU3RhY2tFbmdpbmUucHJvdG90eXBlLmNsZWFuTm9kZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX3VwZGF0ZUNvdW50ZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBfLmVhY2godGhpcy5ub2RlcywgZnVuY3Rpb24obikge24uX2RpcnR5ID0gZmFsc2U7IH0pO1xuICAgIH07XG5cbiAgICBHcmlkU3RhY2tFbmdpbmUucHJvdG90eXBlLmdldERpcnR5Tm9kZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF8uZmlsdGVyKHRoaXMubm9kZXMsIGZ1bmN0aW9uKG4pIHsgcmV0dXJuIG4uX2RpcnR5OyB9KTtcbiAgICB9O1xuXG4gICAgR3JpZFN0YWNrRW5naW5lLnByb3RvdHlwZS5hZGROb2RlID0gZnVuY3Rpb24obm9kZSwgdHJpZ2dlckFkZEV2ZW50KSB7XG4gICAgICAgIG5vZGUgPSB0aGlzLl9wcmVwYXJlTm9kZShub2RlKTtcblxuICAgICAgICBpZiAodHlwZW9mIG5vZGUubWF4V2lkdGggIT0gJ3VuZGVmaW5lZCcpIHsgbm9kZS53aWR0aCA9IE1hdGgubWluKG5vZGUud2lkdGgsIG5vZGUubWF4V2lkdGgpOyB9XG4gICAgICAgIGlmICh0eXBlb2Ygbm9kZS5tYXhIZWlnaHQgIT0gJ3VuZGVmaW5lZCcpIHsgbm9kZS5oZWlnaHQgPSBNYXRoLm1pbihub2RlLmhlaWdodCwgbm9kZS5tYXhIZWlnaHQpOyB9XG4gICAgICAgIGlmICh0eXBlb2Ygbm9kZS5taW5XaWR0aCAhPSAndW5kZWZpbmVkJykgeyBub2RlLndpZHRoID0gTWF0aC5tYXgobm9kZS53aWR0aCwgbm9kZS5taW5XaWR0aCk7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBub2RlLm1pbkhlaWdodCAhPSAndW5kZWZpbmVkJykgeyBub2RlLmhlaWdodCA9IE1hdGgubWF4KG5vZGUuaGVpZ2h0LCBub2RlLm1pbkhlaWdodCk7IH1cblxuICAgICAgICBub2RlLl9pZCA9ICsraWRTZXE7XG4gICAgICAgIG5vZGUuX2RpcnR5ID0gdHJ1ZTtcblxuICAgICAgICBpZiAobm9kZS5hdXRvUG9zaXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuX3NvcnROb2RlcygpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDs7ICsraSkge1xuICAgICAgICAgICAgICAgIHZhciB4ID0gaSAlIHRoaXMud2lkdGg7XG4gICAgICAgICAgICAgICAgdmFyIHkgPSBNYXRoLmZsb29yKGkgLyB0aGlzLndpZHRoKTtcbiAgICAgICAgICAgICAgICBpZiAoeCArIG5vZGUud2lkdGggPiB0aGlzLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIV8uZmluZCh0aGlzLm5vZGVzLCBfLmJpbmQoVXRpbHMuX2lzQWRkTm9kZUludGVyY2VwdGVkLCB7eDogeCwgeTogeSwgbm9kZTogbm9kZX0pKSkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLnggPSB4O1xuICAgICAgICAgICAgICAgICAgICBub2RlLnkgPSB5O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vZGVzLnB1c2gobm9kZSk7XG4gICAgICAgIGlmICh0eXBlb2YgdHJpZ2dlckFkZEV2ZW50ICE9ICd1bmRlZmluZWQnICYmIHRyaWdnZXJBZGRFdmVudCkge1xuICAgICAgICAgICAgdGhpcy5fYWRkZWROb2Rlcy5wdXNoKF8uY2xvbmUobm9kZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZml4Q29sbGlzaW9ucyhub2RlKTtcbiAgICAgICAgdGhpcy5fcGFja05vZGVzKCk7XG4gICAgICAgIHRoaXMuX25vdGlmeSgpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuXG4gICAgR3JpZFN0YWNrRW5naW5lLnByb3RvdHlwZS5yZW1vdmVOb2RlID0gZnVuY3Rpb24obm9kZSwgZGV0YWNoTm9kZSkge1xuICAgICAgICBkZXRhY2hOb2RlID0gdHlwZW9mIGRldGFjaE5vZGUgPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IGRldGFjaE5vZGU7XG4gICAgICAgIHRoaXMuX3JlbW92ZWROb2Rlcy5wdXNoKF8uY2xvbmUobm9kZSkpO1xuICAgICAgICBub2RlLl9pZCA9IG51bGw7XG4gICAgICAgIHRoaXMubm9kZXMgPSBfLndpdGhvdXQodGhpcy5ub2Rlcywgbm9kZSk7XG4gICAgICAgIHRoaXMuX3BhY2tOb2RlcygpO1xuICAgICAgICB0aGlzLl9ub3RpZnkobm9kZSwgZGV0YWNoTm9kZSk7XG4gICAgfTtcblxuICAgIEdyaWRTdGFja0VuZ2luZS5wcm90b3R5cGUuY2FuTW92ZU5vZGUgPSBmdW5jdGlvbihub2RlLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGlmICghdGhpcy5pc05vZGVDaGFuZ2VkUG9zaXRpb24obm9kZSwgeCwgeSwgd2lkdGgsIGhlaWdodCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaGFzTG9ja2VkID0gQm9vbGVhbihfLmZpbmQodGhpcy5ub2RlcywgZnVuY3Rpb24obikgeyByZXR1cm4gbi5sb2NrZWQ7IH0pKTtcblxuICAgICAgICBpZiAoIXRoaXMuaGVpZ2h0ICYmICFoYXNMb2NrZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNsb25lZE5vZGU7XG4gICAgICAgIHZhciBjbG9uZSA9IG5ldyBHcmlkU3RhY2tFbmdpbmUoXG4gICAgICAgICAgICB0aGlzLndpZHRoLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIHRoaXMuZmxvYXQsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgXy5tYXAodGhpcy5ub2RlcywgZnVuY3Rpb24obikge1xuICAgICAgICAgICAgICAgIGlmIChuID09IG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xvbmVkTm9kZSA9ICQuZXh0ZW5kKHt9LCBuKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNsb25lZE5vZGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAkLmV4dGVuZCh7fSwgbik7XG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjbG9uZWROb2RlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBjbG9uZS5tb3ZlTm9kZShjbG9uZWROb2RlLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcblxuICAgICAgICB2YXIgcmVzID0gdHJ1ZTtcblxuICAgICAgICBpZiAoaGFzTG9ja2VkKSB7XG4gICAgICAgICAgICByZXMgJj0gIUJvb2xlYW4oXy5maW5kKGNsb25lLm5vZGVzLCBmdW5jdGlvbihuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG4gIT0gY2xvbmVkTm9kZSAmJiBCb29sZWFuKG4ubG9ja2VkKSAmJiBCb29sZWFuKG4uX2RpcnR5KTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5oZWlnaHQpIHtcbiAgICAgICAgICAgIHJlcyAmPSBjbG9uZS5nZXRHcmlkSGVpZ2h0KCkgPD0gdGhpcy5oZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH07XG5cbiAgICBHcmlkU3RhY2tFbmdpbmUucHJvdG90eXBlLmNhbkJlUGxhY2VkV2l0aFJlc3BlY3RUb0hlaWdodCA9IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmhlaWdodCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2xvbmUgPSBuZXcgR3JpZFN0YWNrRW5naW5lKFxuICAgICAgICAgICAgdGhpcy53aWR0aCxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICB0aGlzLmZsb2F0LFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIF8ubWFwKHRoaXMubm9kZXMsIGZ1bmN0aW9uKG4pIHsgcmV0dXJuICQuZXh0ZW5kKHt9LCBuKTsgfSkpO1xuICAgICAgICBjbG9uZS5hZGROb2RlKG5vZGUpO1xuICAgICAgICByZXR1cm4gY2xvbmUuZ2V0R3JpZEhlaWdodCgpIDw9IHRoaXMuaGVpZ2h0O1xuICAgIH07XG5cbiAgICBHcmlkU3RhY2tFbmdpbmUucHJvdG90eXBlLmlzTm9kZUNoYW5nZWRQb3NpdGlvbiA9IGZ1bmN0aW9uKG5vZGUsIHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB4ICE9ICdudW1iZXInKSB7IHggPSBub2RlLng7IH1cbiAgICAgICAgaWYgKHR5cGVvZiB5ICE9ICdudW1iZXInKSB7IHkgPSBub2RlLnk7IH1cbiAgICAgICAgaWYgKHR5cGVvZiB3aWR0aCAhPSAnbnVtYmVyJykgeyB3aWR0aCA9IG5vZGUud2lkdGg7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBoZWlnaHQgIT0gJ251bWJlcicpIHsgaGVpZ2h0ID0gbm9kZS5oZWlnaHQ7IH1cblxuICAgICAgICBpZiAodHlwZW9mIG5vZGUubWF4V2lkdGggIT0gJ3VuZGVmaW5lZCcpIHsgd2lkdGggPSBNYXRoLm1pbih3aWR0aCwgbm9kZS5tYXhXaWR0aCk7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBub2RlLm1heEhlaWdodCAhPSAndW5kZWZpbmVkJykgeyBoZWlnaHQgPSBNYXRoLm1pbihoZWlnaHQsIG5vZGUubWF4SGVpZ2h0KTsgfVxuICAgICAgICBpZiAodHlwZW9mIG5vZGUubWluV2lkdGggIT0gJ3VuZGVmaW5lZCcpIHsgd2lkdGggPSBNYXRoLm1heCh3aWR0aCwgbm9kZS5taW5XaWR0aCk7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBub2RlLm1pbkhlaWdodCAhPSAndW5kZWZpbmVkJykgeyBoZWlnaHQgPSBNYXRoLm1heChoZWlnaHQsIG5vZGUubWluSGVpZ2h0KTsgfVxuXG4gICAgICAgIGlmIChub2RlLnggPT0geCAmJiBub2RlLnkgPT0geSAmJiBub2RlLndpZHRoID09IHdpZHRoICYmIG5vZGUuaGVpZ2h0ID09IGhlaWdodCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICBHcmlkU3RhY2tFbmdpbmUucHJvdG90eXBlLm1vdmVOb2RlID0gZnVuY3Rpb24obm9kZSwgeCwgeSwgd2lkdGgsIGhlaWdodCwgbm9QYWNrKSB7XG4gICAgICAgIGlmICghdGhpcy5pc05vZGVDaGFuZ2VkUG9zaXRpb24obm9kZSwgeCwgeSwgd2lkdGgsIGhlaWdodCkpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgeCAhPSAnbnVtYmVyJykgeyB4ID0gbm9kZS54OyB9XG4gICAgICAgIGlmICh0eXBlb2YgeSAhPSAnbnVtYmVyJykgeyB5ID0gbm9kZS55OyB9XG4gICAgICAgIGlmICh0eXBlb2Ygd2lkdGggIT0gJ251bWJlcicpIHsgd2lkdGggPSBub2RlLndpZHRoOyB9XG4gICAgICAgIGlmICh0eXBlb2YgaGVpZ2h0ICE9ICdudW1iZXInKSB7IGhlaWdodCA9IG5vZGUuaGVpZ2h0OyB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBub2RlLm1heFdpZHRoICE9ICd1bmRlZmluZWQnKSB7IHdpZHRoID0gTWF0aC5taW4od2lkdGgsIG5vZGUubWF4V2lkdGgpOyB9XG4gICAgICAgIGlmICh0eXBlb2Ygbm9kZS5tYXhIZWlnaHQgIT0gJ3VuZGVmaW5lZCcpIHsgaGVpZ2h0ID0gTWF0aC5taW4oaGVpZ2h0LCBub2RlLm1heEhlaWdodCk7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBub2RlLm1pbldpZHRoICE9ICd1bmRlZmluZWQnKSB7IHdpZHRoID0gTWF0aC5tYXgod2lkdGgsIG5vZGUubWluV2lkdGgpOyB9XG4gICAgICAgIGlmICh0eXBlb2Ygbm9kZS5taW5IZWlnaHQgIT0gJ3VuZGVmaW5lZCcpIHsgaGVpZ2h0ID0gTWF0aC5tYXgoaGVpZ2h0LCBub2RlLm1pbkhlaWdodCk7IH1cblxuICAgICAgICBpZiAobm9kZS54ID09IHggJiYgbm9kZS55ID09IHkgJiYgbm9kZS53aWR0aCA9PSB3aWR0aCAmJiBub2RlLmhlaWdodCA9PSBoZWlnaHQpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJlc2l6aW5nID0gbm9kZS53aWR0aCAhPSB3aWR0aDtcbiAgICAgICAgbm9kZS5fZGlydHkgPSB0cnVlO1xuXG4gICAgICAgIG5vZGUueCA9IHg7XG4gICAgICAgIG5vZGUueSA9IHk7XG4gICAgICAgIG5vZGUud2lkdGggPSB3aWR0aDtcbiAgICAgICAgbm9kZS5oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICAgICAgbm9kZS5sYXN0VHJpZWRYID0geDtcbiAgICAgICAgbm9kZS5sYXN0VHJpZWRZID0geTtcbiAgICAgICAgbm9kZS5sYXN0VHJpZWRXaWR0aCA9IHdpZHRoO1xuICAgICAgICBub2RlLmxhc3RUcmllZEhlaWdodCA9IGhlaWdodDtcblxuICAgICAgICBub2RlID0gdGhpcy5fcHJlcGFyZU5vZGUobm9kZSwgcmVzaXppbmcpO1xuXG4gICAgICAgIHRoaXMuX2ZpeENvbGxpc2lvbnMobm9kZSk7XG4gICAgICAgIGlmICghbm9QYWNrKSB7XG4gICAgICAgICAgICB0aGlzLl9wYWNrTm9kZXMoKTtcbiAgICAgICAgICAgIHRoaXMuX25vdGlmeSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH07XG5cbiAgICBHcmlkU3RhY2tFbmdpbmUucHJvdG90eXBlLmdldEdyaWRIZWlnaHQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF8ucmVkdWNlKHRoaXMubm9kZXMsIGZ1bmN0aW9uKG1lbW8sIG4pIHsgcmV0dXJuIE1hdGgubWF4KG1lbW8sIG4ueSArIG4uaGVpZ2h0KTsgfSwgMCk7XG4gICAgfTtcblxuICAgIEdyaWRTdGFja0VuZ2luZS5wcm90b3R5cGUuYmVnaW5VcGRhdGUgPSBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgIF8uZWFjaCh0aGlzLm5vZGVzLCBmdW5jdGlvbihuKSB7XG4gICAgICAgICAgICBuLl9vcmlnWSA9IG4ueTtcbiAgICAgICAgfSk7XG4gICAgICAgIG5vZGUuX3VwZGF0aW5nID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgR3JpZFN0YWNrRW5naW5lLnByb3RvdHlwZS5lbmRVcGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgXy5lYWNoKHRoaXMubm9kZXMsIGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICAgIG4uX29yaWdZID0gbi55O1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIG4gPSBfLmZpbmQodGhpcy5ub2RlcywgZnVuY3Rpb24obikgeyByZXR1cm4gbi5fdXBkYXRpbmc7IH0pO1xuICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgbi5fdXBkYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgR3JpZFN0YWNrID0gZnVuY3Rpb24oZWwsIG9wdHMpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgb25lQ29sdW1uTW9kZSwgaXNBdXRvQ2VsbEhlaWdodDtcblxuICAgICAgICBvcHRzID0gb3B0cyB8fCB7fTtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9ICQoZWwpO1xuXG4gICAgICAgIC8vIGpzY3M6ZGlzYWJsZSByZXF1aXJlQ2FtZWxDYXNlT3JVcHBlckNhc2VJZGVudGlmaWVyc1xuICAgICAgICBpZiAodHlwZW9mIG9wdHMuaGFuZGxlX2NsYXNzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgb3B0cy5oYW5kbGVDbGFzcyA9IG9wdHMuaGFuZGxlX2NsYXNzO1xuICAgICAgICAgICAgb2Jzb2xldGVPcHRzKCdoYW5kbGVfY2xhc3MnLCAnaGFuZGxlQ2xhc3MnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIG9wdHMuaXRlbV9jbGFzcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIG9wdHMuaXRlbUNsYXNzID0gb3B0cy5pdGVtX2NsYXNzO1xuICAgICAgICAgICAgb2Jzb2xldGVPcHRzKCdpdGVtX2NsYXNzJywgJ2l0ZW1DbGFzcycpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0cy5wbGFjZWhvbGRlcl9jbGFzcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIG9wdHMucGxhY2Vob2xkZXJDbGFzcyA9IG9wdHMucGxhY2Vob2xkZXJfY2xhc3M7XG4gICAgICAgICAgICBvYnNvbGV0ZU9wdHMoJ3BsYWNlaG9sZGVyX2NsYXNzJywgJ3BsYWNlaG9sZGVyQ2xhc3MnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIG9wdHMucGxhY2Vob2xkZXJfdGV4dCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIG9wdHMucGxhY2Vob2xkZXJUZXh0ID0gb3B0cy5wbGFjZWhvbGRlcl90ZXh0O1xuICAgICAgICAgICAgb2Jzb2xldGVPcHRzKCdwbGFjZWhvbGRlcl90ZXh0JywgJ3BsYWNlaG9sZGVyVGV4dCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0cy5jZWxsX2hlaWdodCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIG9wdHMuY2VsbEhlaWdodCA9IG9wdHMuY2VsbF9oZWlnaHQ7XG4gICAgICAgICAgICBvYnNvbGV0ZU9wdHMoJ2NlbGxfaGVpZ2h0JywgJ2NlbGxIZWlnaHQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIG9wdHMudmVydGljYWxfbWFyZ2luICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgb3B0cy52ZXJ0aWNhbE1hcmdpbiA9IG9wdHMudmVydGljYWxfbWFyZ2luO1xuICAgICAgICAgICAgb2Jzb2xldGVPcHRzKCd2ZXJ0aWNhbF9tYXJnaW4nLCAndmVydGljYWxNYXJnaW4nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIG9wdHMubWluX3dpZHRoICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgb3B0cy5taW5XaWR0aCA9IG9wdHMubWluX3dpZHRoO1xuICAgICAgICAgICAgb2Jzb2xldGVPcHRzKCdtaW5fd2lkdGgnLCAnbWluV2lkdGgnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIG9wdHMuc3RhdGljX2dyaWQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBvcHRzLnN0YXRpY0dyaWQgPSBvcHRzLnN0YXRpY19ncmlkO1xuICAgICAgICAgICAgb2Jzb2xldGVPcHRzKCdzdGF0aWNfZ3JpZCcsICdzdGF0aWNHcmlkJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBvcHRzLmlzX25lc3RlZCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIG9wdHMuaXNOZXN0ZWQgPSBvcHRzLmlzX25lc3RlZDtcbiAgICAgICAgICAgIG9ic29sZXRlT3B0cygnaXNfbmVzdGVkJywgJ2lzTmVzdGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBvcHRzLmFsd2F5c19zaG93X3Jlc2l6ZV9oYW5kbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBvcHRzLmFsd2F5c1Nob3dSZXNpemVIYW5kbGUgPSBvcHRzLmFsd2F5c19zaG93X3Jlc2l6ZV9oYW5kbGU7XG4gICAgICAgICAgICBvYnNvbGV0ZU9wdHMoJ2Fsd2F5c19zaG93X3Jlc2l6ZV9oYW5kbGUnLCAnYWx3YXlzU2hvd1Jlc2l6ZUhhbmRsZScpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGpzY3M6ZW5hYmxlIHJlcXVpcmVDYW1lbENhc2VPclVwcGVyQ2FzZUlkZW50aWZpZXJzXG5cbiAgICAgICAgb3B0cy5pdGVtQ2xhc3MgPSBvcHRzLml0ZW1DbGFzcyB8fCAnZ3JpZC1zdGFjay1pdGVtJztcbiAgICAgICAgdmFyIGlzTmVzdGVkID0gdGhpcy5jb250YWluZXIuY2xvc2VzdCgnLicgKyBvcHRzLml0ZW1DbGFzcykubGVuZ3RoID4gMDtcblxuICAgICAgICB0aGlzLm9wdHMgPSBfLmRlZmF1bHRzKG9wdHMgfHwge30sIHtcbiAgICAgICAgICAgIHdpZHRoOiBwYXJzZUludCh0aGlzLmNvbnRhaW5lci5hdHRyKCdkYXRhLWdzLXdpZHRoJykpIHx8IDEyLFxuICAgICAgICAgICAgaGVpZ2h0OiBwYXJzZUludCh0aGlzLmNvbnRhaW5lci5hdHRyKCdkYXRhLWdzLWhlaWdodCcpKSB8fCAwLFxuICAgICAgICAgICAgaXRlbUNsYXNzOiAnZ3JpZC1zdGFjay1pdGVtJyxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyQ2xhc3M6ICdncmlkLXN0YWNrLXBsYWNlaG9sZGVyJyxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyVGV4dDogJycsXG4gICAgICAgICAgICBoYW5kbGU6ICcuZ3JpZC1zdGFjay1pdGVtLWNvbnRlbnQnLFxuICAgICAgICAgICAgaGFuZGxlQ2xhc3M6IG51bGwsXG4gICAgICAgICAgICBjZWxsSGVpZ2h0OiA2MCxcbiAgICAgICAgICAgIHZlcnRpY2FsTWFyZ2luOiAyMCxcbiAgICAgICAgICAgIGF1dG86IHRydWUsXG4gICAgICAgICAgICBtaW5XaWR0aDogNzY4LFxuICAgICAgICAgICAgZmxvYXQ6IGZhbHNlLFxuICAgICAgICAgICAgc3RhdGljR3JpZDogZmFsc2UsXG4gICAgICAgICAgICBfY2xhc3M6ICdncmlkLXN0YWNrLWluc3RhbmNlLScgKyAoTWF0aC5yYW5kb20oKSAqIDEwMDAwKS50b0ZpeGVkKDApLFxuICAgICAgICAgICAgYW5pbWF0ZTogQm9vbGVhbih0aGlzLmNvbnRhaW5lci5hdHRyKCdkYXRhLWdzLWFuaW1hdGUnKSkgfHwgZmFsc2UsXG4gICAgICAgICAgICBhbHdheXNTaG93UmVzaXplSGFuZGxlOiBvcHRzLmFsd2F5c1Nob3dSZXNpemVIYW5kbGUgfHwgZmFsc2UsXG4gICAgICAgICAgICByZXNpemFibGU6IF8uZGVmYXVsdHMob3B0cy5yZXNpemFibGUgfHwge30sIHtcbiAgICAgICAgICAgICAgICBhdXRvSGlkZTogIShvcHRzLmFsd2F5c1Nob3dSZXNpemVIYW5kbGUgfHwgZmFsc2UpLFxuICAgICAgICAgICAgICAgIGhhbmRsZXM6ICdzZSdcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgZHJhZ2dhYmxlOiBfLmRlZmF1bHRzKG9wdHMuZHJhZ2dhYmxlIHx8IHt9LCB7XG4gICAgICAgICAgICAgICAgaGFuZGxlOiAob3B0cy5oYW5kbGVDbGFzcyA/ICcuJyArIG9wdHMuaGFuZGxlQ2xhc3MgOiAob3B0cy5oYW5kbGUgPyBvcHRzLmhhbmRsZSA6ICcnKSkgfHxcbiAgICAgICAgICAgICAgICAgICAgJy5ncmlkLXN0YWNrLWl0ZW0tY29udGVudCcsXG4gICAgICAgICAgICAgICAgc2Nyb2xsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhcHBlbmRUbzogJ2JvZHknXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGRpc2FibGVEcmFnOiBvcHRzLmRpc2FibGVEcmFnIHx8IGZhbHNlLFxuICAgICAgICAgICAgZGlzYWJsZVJlc2l6ZTogb3B0cy5kaXNhYmxlUmVzaXplIHx8IGZhbHNlLFxuICAgICAgICAgICAgcnRsOiAnYXV0bycsXG4gICAgICAgICAgICByZW1vdmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgcmVtb3ZlVGltZW91dDogMjAwMCxcbiAgICAgICAgICAgIHZlcnRpY2FsTWFyZ2luVW5pdDogJ3B4JyxcbiAgICAgICAgICAgIGNlbGxIZWlnaHRVbml0OiAncHgnLFxuICAgICAgICAgICAgZGlzYWJsZU9uZUNvbHVtbk1vZGU6IG9wdHMuZGlzYWJsZU9uZUNvbHVtbk1vZGUgfHwgZmFsc2UsXG4gICAgICAgICAgICBvbmVDb2x1bW5Nb2RlQ2xhc3M6IG9wdHMub25lQ29sdW1uTW9kZUNsYXNzIHx8ICdncmlkLXN0YWNrLW9uZS1jb2x1bW4tbW9kZScsXG4gICAgICAgICAgICBkZFBsdWdpbjogbnVsbFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5vcHRzLmRkUGx1Z2luID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5vcHRzLmRkUGx1Z2luID0gR3JpZFN0YWNrRHJhZ0Ryb3BQbHVnaW47XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRzLmRkUGx1Z2luID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLm9wdHMuZGRQbHVnaW4gPSBfLmZpcnN0KEdyaWRTdGFja0RyYWdEcm9wUGx1Z2luLnJlZ2lzdGVyZWRQbHVnaW5zKSB8fCBHcmlkU3RhY2tEcmFnRHJvcFBsdWdpbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGQgPSBuZXcgdGhpcy5vcHRzLmRkUGx1Z2luKHRoaXMpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdHMucnRsID09PSAnYXV0bycpIHtcbiAgICAgICAgICAgIHRoaXMub3B0cy5ydGwgPSB0aGlzLmNvbnRhaW5lci5jc3MoJ2RpcmVjdGlvbicpID09PSAncnRsJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9wdHMucnRsKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRDbGFzcygnZ3JpZC1zdGFjay1ydGwnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub3B0cy5pc05lc3RlZCA9IGlzTmVzdGVkO1xuXG4gICAgICAgIGlzQXV0b0NlbGxIZWlnaHQgPSB0aGlzLm9wdHMuY2VsbEhlaWdodCA9PT0gJ2F1dG8nO1xuICAgICAgICBpZiAoaXNBdXRvQ2VsbEhlaWdodCkge1xuICAgICAgICAgICAgc2VsZi5jZWxsSGVpZ2h0KHNlbGYuY2VsbFdpZHRoKCksIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jZWxsSGVpZ2h0KHRoaXMub3B0cy5jZWxsSGVpZ2h0LCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZlcnRpY2FsTWFyZ2luKHRoaXMub3B0cy52ZXJ0aWNhbE1hcmdpbiwgdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkQ2xhc3ModGhpcy5vcHRzLl9jbGFzcyk7XG5cbiAgICAgICAgdGhpcy5fc2V0U3RhdGljQ2xhc3MoKTtcblxuICAgICAgICBpZiAoaXNOZXN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFkZENsYXNzKCdncmlkLXN0YWNrLW5lc3RlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faW5pdFN0eWxlcygpO1xuXG4gICAgICAgIHRoaXMuZ3JpZCA9IG5ldyBHcmlkU3RhY2tFbmdpbmUodGhpcy5vcHRzLndpZHRoLCBmdW5jdGlvbihub2RlcywgZGV0YWNoTm9kZSkge1xuICAgICAgICAgICAgZGV0YWNoTm9kZSA9IHR5cGVvZiBkZXRhY2hOb2RlID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiBkZXRhY2hOb2RlO1xuICAgICAgICAgICAgdmFyIG1heEhlaWdodCA9IDA7XG4gICAgICAgICAgICBfLmVhY2gobm9kZXMsIGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICAgICAgICBpZiAoZGV0YWNoTm9kZSAmJiBuLl9pZCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobi5lbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbi5lbC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG4uZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWdzLXgnLCBuLngpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1ncy15Jywgbi55KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtZ3Mtd2lkdGgnLCBuLndpZHRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtZ3MtaGVpZ2h0Jywgbi5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQgPSBNYXRoLm1heChtYXhIZWlnaHQsIG4ueSArIG4uaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNlbGYuX3VwZGF0ZVN0eWxlcyhtYXhIZWlnaHQgKyAxMCk7XG4gICAgICAgIH0sIHRoaXMub3B0cy5mbG9hdCwgdGhpcy5vcHRzLmhlaWdodCk7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0cy5hdXRvKSB7XG4gICAgICAgICAgICB2YXIgZWxlbWVudHMgPSBbXTtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5jaGlsZHJlbignLicgKyB0aGlzLm9wdHMuaXRlbUNsYXNzICsgJzpub3QoLicgKyB0aGlzLm9wdHMucGxhY2Vob2xkZXJDbGFzcyArICcpJylcbiAgICAgICAgICAgICAgICAuZWFjaChmdW5jdGlvbihpbmRleCwgZWwpIHtcbiAgICAgICAgICAgICAgICBlbCA9ICQoZWwpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBlbDogZWwsXG4gICAgICAgICAgICAgICAgICAgIGk6IHBhcnNlSW50KGVsLmF0dHIoJ2RhdGEtZ3MteCcpKSArIHBhcnNlSW50KGVsLmF0dHIoJ2RhdGEtZ3MteScpKSAqIF90aGlzLm9wdHMud2lkdGhcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXy5jaGFpbihlbGVtZW50cykuc29ydEJ5KGZ1bmN0aW9uKHgpIHsgcmV0dXJuIHguaTsgfSkuZWFjaChmdW5jdGlvbihpKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5fcHJlcGFyZUVsZW1lbnQoaS5lbCk7XG4gICAgICAgICAgICB9KS52YWx1ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRBbmltYXRpb24odGhpcy5vcHRzLmFuaW1hdGUpO1xuXG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSAkKFxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCInICsgdGhpcy5vcHRzLnBsYWNlaG9sZGVyQ2xhc3MgKyAnICcgKyB0aGlzLm9wdHMuaXRlbUNsYXNzICsgJ1wiPicgK1xuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJwbGFjZWhvbGRlci1jb250ZW50XCI+JyArIHRoaXMub3B0cy5wbGFjZWhvbGRlclRleHQgKyAnPC9kaXY+PC9kaXY+JykuaGlkZSgpO1xuXG4gICAgICAgIHRoaXMuX3VwZGF0ZUNvbnRhaW5lckhlaWdodCgpO1xuXG4gICAgICAgIHRoaXMuX3VwZGF0ZUhlaWdodHNPblJlc2l6ZSA9IF8udGhyb3R0bGUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZWxmLmNlbGxIZWlnaHQoc2VsZi5jZWxsV2lkdGgoKSwgZmFsc2UpO1xuICAgICAgICB9LCAxMDApO1xuXG4gICAgICAgIHRoaXMub25SZXNpemVIYW5kbGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoaXNBdXRvQ2VsbEhlaWdodCkge1xuICAgICAgICAgICAgICAgIHNlbGYuX3VwZGF0ZUhlaWdodHNPblJlc2l6ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2VsZi5faXNPbmVDb2x1bW5Nb2RlKCkgJiYgIXNlbGYub3B0cy5kaXNhYmxlT25lQ29sdW1uTW9kZSkge1xuICAgICAgICAgICAgICAgIGlmIChvbmVDb2x1bW5Nb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2VsZi5jb250YWluZXIuYWRkQ2xhc3Moc2VsZi5vcHRzLm9uZUNvbHVtbk1vZGVDbGFzcyk7XG4gICAgICAgICAgICAgICAgb25lQ29sdW1uTW9kZSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBzZWxmLmdyaWQuX3NvcnROb2RlcygpO1xuICAgICAgICAgICAgICAgIF8uZWFjaChzZWxmLmdyaWQubm9kZXMsIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb250YWluZXIuYXBwZW5kKG5vZGUuZWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLm9wdHMuc3RhdGljR3JpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZGQuZHJhZ2dhYmxlKG5vZGUuZWwsICdkaXNhYmxlJyk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZGQucmVzaXphYmxlKG5vZGUuZWwsICdkaXNhYmxlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgbm9kZS5lbC50cmlnZ2VyKCdyZXNpemUnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCFvbmVDb2x1bW5Nb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzZWxmLmNvbnRhaW5lci5yZW1vdmVDbGFzcyhzZWxmLm9wdHMub25lQ29sdW1uTW9kZUNsYXNzKTtcbiAgICAgICAgICAgICAgICBvbmVDb2x1bW5Nb2RlID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5vcHRzLnN0YXRpY0dyaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF8uZWFjaChzZWxmLmdyaWQubm9kZXMsIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFub2RlLm5vTW92ZSAmJiAhc2VsZi5vcHRzLmRpc2FibGVEcmFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmRkLmRyYWdnYWJsZShub2RlLmVsLCAnZW5hYmxlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFub2RlLm5vUmVzaXplICYmICFzZWxmLm9wdHMuZGlzYWJsZVJlc2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5kZC5yZXNpemFibGUobm9kZS5lbCwgJ2VuYWJsZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbm9kZS5lbC50cmlnZ2VyKCdyZXNpemUnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAkKHdpbmRvdykucmVzaXplKHRoaXMub25SZXNpemVIYW5kbGVyKTtcbiAgICAgICAgdGhpcy5vblJlc2l6ZUhhbmRsZXIoKTtcblxuICAgICAgICBpZiAoIXNlbGYub3B0cy5zdGF0aWNHcmlkICYmIHR5cGVvZiBzZWxmLm9wdHMucmVtb3ZhYmxlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdmFyIHRyYXNoWm9uZSA9ICQoc2VsZi5vcHRzLnJlbW92YWJsZSk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZGQuaXNEcm9wcGFibGUodHJhc2hab25lKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGQuZHJvcHBhYmxlKHRyYXNoWm9uZSwge1xuICAgICAgICAgICAgICAgICAgICBhY2NlcHQ6ICcuJyArIHNlbGYub3B0cy5pdGVtQ2xhc3NcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZGRcbiAgICAgICAgICAgICAgICAub24odHJhc2hab25lLCAnZHJvcG92ZXInLCBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsID0gJCh1aS5kcmFnZ2FibGUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IGVsLmRhdGEoJ19ncmlkc3RhY2tfbm9kZScpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5fZ3JpZCAhPT0gc2VsZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuX3NldHVwUmVtb3ZpbmdUaW1lb3V0KGVsKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5vbih0cmFzaFpvbmUsICdkcm9wb3V0JywgZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbCA9ICQodWkuZHJhZ2dhYmxlKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vZGUgPSBlbC5kYXRhKCdfZ3JpZHN0YWNrX25vZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuX2dyaWQgIT09IHNlbGYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZWxmLl9jbGVhclJlbW92aW5nVGltZW91dChlbCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXNlbGYub3B0cy5zdGF0aWNHcmlkICYmIHNlbGYub3B0cy5hY2NlcHRXaWRnZXRzKSB7XG4gICAgICAgICAgICB2YXIgZHJhZ2dpbmdFbGVtZW50ID0gbnVsbDtcblxuICAgICAgICAgICAgdmFyIG9uRHJhZyA9IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgICAgICAgICAgICAgIHZhciBlbCA9IGRyYWdnaW5nRWxlbWVudDtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IGVsLmRhdGEoJ19ncmlkc3RhY2tfbm9kZScpO1xuICAgICAgICAgICAgICAgIHZhciBwb3MgPSBzZWxmLmdldENlbGxGcm9tUGl4ZWwodWkub2Zmc2V0LCB0cnVlKTtcbiAgICAgICAgICAgICAgICB2YXIgeCA9IE1hdGgubWF4KDAsIHBvcy54KTtcbiAgICAgICAgICAgICAgICB2YXIgeSA9IE1hdGgubWF4KDAsIHBvcy55KTtcbiAgICAgICAgICAgICAgICBpZiAoIW5vZGUuX2FkZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuX2FkZGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICBub2RlLmVsID0gZWw7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUueCA9IHg7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUueSA9IHk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZ3JpZC5jbGVhbk5vZGVzKCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZ3JpZC5iZWdpblVwZGF0ZShub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5ncmlkLmFkZE5vZGUobm9kZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb250YWluZXIuYXBwZW5kKHNlbGYucGxhY2Vob2xkZXIpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnBsYWNlaG9sZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1ncy14Jywgbm9kZS54KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtZ3MteScsIG5vZGUueSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWdzLXdpZHRoJywgbm9kZS53aWR0aClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWdzLWhlaWdodCcsIG5vZGUuaGVpZ2h0KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5lbCA9IHNlbGYucGxhY2Vob2xkZXI7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuX2JlZm9yZURyYWdYID0gbm9kZS54O1xuICAgICAgICAgICAgICAgICAgICBub2RlLl9iZWZvcmVEcmFnWSA9IG5vZGUueTtcblxuICAgICAgICAgICAgICAgICAgICBzZWxmLl91cGRhdGVDb250YWluZXJIZWlnaHQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXNlbGYuZ3JpZC5jYW5Nb3ZlTm9kZShub2RlLCB4LCB5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZ3JpZC5tb3ZlTm9kZShub2RlLCB4LCB5KTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5fdXBkYXRlQ29udGFpbmVySGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5kZFxuICAgICAgICAgICAgICAgIC5kcm9wcGFibGUoc2VsZi5jb250YWluZXIsIHtcbiAgICAgICAgICAgICAgICAgICAgYWNjZXB0OiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwgPSAkKGVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub2RlID0gZWwuZGF0YSgnX2dyaWRzdGFja19ub2RlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZSAmJiBub2RlLl9ncmlkID09PSBzZWxmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsLmlzKHNlbGYub3B0cy5hY2NlcHRXaWRnZXRzID09PSB0cnVlID8gJy5ncmlkLXN0YWNrLWl0ZW0nIDogc2VsZi5vcHRzLmFjY2VwdFdpZGdldHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub24oc2VsZi5jb250YWluZXIsICdkcm9wb3ZlcicsIGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gc2VsZi5jb250YWluZXIub2Zmc2V0KCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbCA9ICQodWkuZHJhZ2dhYmxlKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNlbGxXaWR0aCA9IHNlbGYuY2VsbFdpZHRoKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjZWxsSGVpZ2h0ID0gc2VsZi5jZWxsSGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvcmlnTm9kZSA9IGVsLmRhdGEoJ19ncmlkc3RhY2tfbm9kZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciB3aWR0aCA9IG9yaWdOb2RlID8gb3JpZ05vZGUud2lkdGggOiAoTWF0aC5jZWlsKGVsLm91dGVyV2lkdGgoKSAvIGNlbGxXaWR0aCkpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGVpZ2h0ID0gb3JpZ05vZGUgPyBvcmlnTm9kZS5oZWlnaHQgOiAoTWF0aC5jZWlsKGVsLm91dGVySGVpZ2h0KCkgLyBjZWxsSGVpZ2h0KSk7XG5cbiAgICAgICAgICAgICAgICAgICAgZHJhZ2dpbmdFbGVtZW50ID0gZWw7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vZGUgPSBzZWxmLmdyaWQuX3ByZXBhcmVOb2RlKHt3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0LCBfYWRkZWQ6IGZhbHNlLCBfdGVtcG9yYXJ5OiB0cnVlfSk7XG4gICAgICAgICAgICAgICAgICAgIGVsLmRhdGEoJ19ncmlkc3RhY2tfbm9kZScsIG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICBlbC5kYXRhKCdfZ3JpZHN0YWNrX25vZGVfb3JpZycsIG9yaWdOb2RlKTtcblxuICAgICAgICAgICAgICAgICAgICBlbC5vbignZHJhZycsIG9uRHJhZyk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub24oc2VsZi5jb250YWluZXIsICdkcm9wb3V0JywgZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbCA9ICQodWkuZHJhZ2dhYmxlKTtcbiAgICAgICAgICAgICAgICAgICAgZWwudW5iaW5kKCdkcmFnJywgb25EcmFnKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vZGUgPSBlbC5kYXRhKCdfZ3JpZHN0YWNrX25vZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5lbCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZ3JpZC5yZW1vdmVOb2RlKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnBsYWNlaG9sZGVyLmRldGFjaCgpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLl91cGRhdGVDb250YWluZXJIZWlnaHQoKTtcbiAgICAgICAgICAgICAgICAgICAgZWwuZGF0YSgnX2dyaWRzdGFja19ub2RlJywgZWwuZGF0YSgnX2dyaWRzdGFja19ub2RlX29yaWcnKSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub24oc2VsZi5jb250YWluZXIsICdkcm9wJywgZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucGxhY2Vob2xkZXIuZGV0YWNoKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vZGUgPSAkKHVpLmRyYWdnYWJsZSkuZGF0YSgnX2dyaWRzdGFja19ub2RlJyk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuX2dyaWQgPSBzZWxmO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWwgPSAkKHVpLmRyYWdnYWJsZSkuY2xvbmUoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBlbC5kYXRhKCdfZ3JpZHN0YWNrX25vZGUnLCBub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9yaWdpbmFsTm9kZSA9ICQodWkuZHJhZ2dhYmxlKS5kYXRhKCdfZ3JpZHN0YWNrX25vZGVfb3JpZycpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9yaWdpbmFsTm9kZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsTm9kZS5fZ3JpZC5fdHJpZ2dlclJlbW92ZUV2ZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJCh1aS5kcmFnZ2FibGUpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICBub2RlLmVsID0gZWw7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucGxhY2Vob2xkZXIuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICBlbFxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtZ3MteCcsIG5vZGUueClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWdzLXknLCBub2RlLnkpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1ncy13aWR0aCcsIG5vZGUud2lkdGgpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1ncy1oZWlnaHQnLCBub2RlLmhlaWdodClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhzZWxmLm9wdHMuaXRlbUNsYXNzKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ3N0eWxlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5lbmFibGVTZWxlY3Rpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZURhdGEoJ2RyYWdnYWJsZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3VpLWRyYWdnYWJsZSB1aS1kcmFnZ2FibGUtZHJhZ2dpbmcgdWktZHJhZ2dhYmxlLWRpc2FibGVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC51bmJpbmQoJ2RyYWcnLCBvbkRyYWcpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbnRhaW5lci5hcHBlbmQoZWwpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLl9wcmVwYXJlRWxlbWVudHNCeU5vZGUoZWwsIG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLl91cGRhdGVDb250YWluZXJIZWlnaHQoKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5ncmlkLl9hZGRlZE5vZGVzLnB1c2gobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuX3RyaWdnZXJBZGRFdmVudCgpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLl90cmlnZ2VyQ2hhbmdlRXZlbnQoKTtcblxuICAgICAgICAgICAgICAgICAgICBzZWxmLmdyaWQuZW5kVXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgR3JpZFN0YWNrLnByb3RvdHlwZS5fdHJpZ2dlckNoYW5nZUV2ZW50ID0gZnVuY3Rpb24oZm9yY2VUcmlnZ2VyKSB7XG4gICAgICAgIHZhciBlbGVtZW50cyA9IHRoaXMuZ3JpZC5nZXREaXJ0eU5vZGVzKCk7XG4gICAgICAgIHZhciBoYXNDaGFuZ2VzID0gZmFsc2U7XG5cbiAgICAgICAgdmFyIGV2ZW50UGFyYW1zID0gW107XG4gICAgICAgIGlmIChlbGVtZW50cyAmJiBlbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGV2ZW50UGFyYW1zLnB1c2goZWxlbWVudHMpO1xuICAgICAgICAgICAgaGFzQ2hhbmdlcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGFzQ2hhbmdlcyB8fCBmb3JjZVRyaWdnZXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnRyaWdnZXIoJ2NoYW5nZScsIGV2ZW50UGFyYW1zKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBHcmlkU3RhY2sucHJvdG90eXBlLl90cmlnZ2VyQWRkRXZlbnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuZ3JpZC5fYWRkZWROb2RlcyAmJiB0aGlzLmdyaWQuX2FkZGVkTm9kZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIudHJpZ2dlcignYWRkZWQnLCBbXy5tYXAodGhpcy5ncmlkLl9hZGRlZE5vZGVzLCBfLmNsb25lKV0pO1xuICAgICAgICAgICAgdGhpcy5ncmlkLl9hZGRlZE5vZGVzID0gW107XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgR3JpZFN0YWNrLnByb3RvdHlwZS5fdHJpZ2dlclJlbW92ZUV2ZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmdyaWQuX3JlbW92ZWROb2RlcyAmJiB0aGlzLmdyaWQuX3JlbW92ZWROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci50cmlnZ2VyKCdyZW1vdmVkJywgW18ubWFwKHRoaXMuZ3JpZC5fcmVtb3ZlZE5vZGVzLCBfLmNsb25lKV0pO1xuICAgICAgICAgICAgdGhpcy5ncmlkLl9yZW1vdmVkTm9kZXMgPSBbXTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBHcmlkU3RhY2sucHJvdG90eXBlLl9pbml0U3R5bGVzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLl9zdHlsZXNJZCkge1xuICAgICAgICAgICAgVXRpbHMucmVtb3ZlU3R5bGVzaGVldCh0aGlzLl9zdHlsZXNJZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc3R5bGVzSWQgPSAnZ3JpZHN0YWNrLXN0eWxlLScgKyAoTWF0aC5yYW5kb20oKSAqIDEwMDAwMCkudG9GaXhlZCgpO1xuICAgICAgICB0aGlzLl9zdHlsZXMgPSBVdGlscy5jcmVhdGVTdHlsZXNoZWV0KHRoaXMuX3N0eWxlc0lkKTtcbiAgICAgICAgaWYgKHRoaXMuX3N0eWxlcyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fc3R5bGVzLl9tYXggPSAwO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEdyaWRTdGFjay5wcm90b3R5cGUuX3VwZGF0ZVN0eWxlcyA9IGZ1bmN0aW9uKG1heEhlaWdodCkge1xuICAgICAgICBpZiAodGhpcy5fc3R5bGVzID09PSBudWxsIHx8IHR5cGVvZiB0aGlzLl9zdHlsZXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcHJlZml4ID0gJy4nICsgdGhpcy5vcHRzLl9jbGFzcyArICcgLicgKyB0aGlzLm9wdHMuaXRlbUNsYXNzO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBnZXRIZWlnaHQ7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBtYXhIZWlnaHQgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIG1heEhlaWdodCA9IHRoaXMuX3N0eWxlcy5fbWF4O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2luaXRTdHlsZXMoKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlQ29udGFpbmVySGVpZ2h0KCk7XG4gICAgICAgIGlmICghdGhpcy5vcHRzLmNlbGxIZWlnaHQpIHsgLy8gVGhlIHJlc3Qgd2lsbCBiZSBoYW5kbGVkIGJ5IENTU1xuICAgICAgICAgICAgcmV0dXJuIDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fc3R5bGVzLl9tYXggIT09IDAgJiYgbWF4SGVpZ2h0IDw9IHRoaXMuX3N0eWxlcy5fbWF4KSB7XG4gICAgICAgICAgICByZXR1cm4gO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLm9wdHMudmVydGljYWxNYXJnaW4gfHwgdGhpcy5vcHRzLmNlbGxIZWlnaHRVbml0ID09PSB0aGlzLm9wdHMudmVydGljYWxNYXJnaW5Vbml0KSB7XG4gICAgICAgICAgICBnZXRIZWlnaHQgPSBmdW5jdGlvbihuYlJvd3MsIG5iTWFyZ2lucykge1xuICAgICAgICAgICAgICAgIHJldHVybiAoc2VsZi5vcHRzLmNlbGxIZWlnaHQgKiBuYlJvd3MgKyBzZWxmLm9wdHMudmVydGljYWxNYXJnaW4gKiBuYk1hcmdpbnMpICtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5vcHRzLmNlbGxIZWlnaHRVbml0O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdldEhlaWdodCA9IGZ1bmN0aW9uKG5iUm93cywgbmJNYXJnaW5zKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFuYlJvd3MgfHwgIW5iTWFyZ2lucykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHNlbGYub3B0cy5jZWxsSGVpZ2h0ICogbmJSb3dzICsgc2VsZi5vcHRzLnZlcnRpY2FsTWFyZ2luICogbmJNYXJnaW5zKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm9wdHMuY2VsbEhlaWdodFVuaXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAnY2FsYygnICsgKChzZWxmLm9wdHMuY2VsbEhlaWdodCAqIG5iUm93cykgKyBzZWxmLm9wdHMuY2VsbEhlaWdodFVuaXQpICsgJyArICcgK1xuICAgICAgICAgICAgICAgICAgICAoKHNlbGYub3B0cy52ZXJ0aWNhbE1hcmdpbiAqIG5iTWFyZ2lucykgKyBzZWxmLm9wdHMudmVydGljYWxNYXJnaW5Vbml0KSArICcpJztcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fc3R5bGVzLl9tYXggPT09IDApIHtcbiAgICAgICAgICAgIFV0aWxzLmluc2VydENTU1J1bGUodGhpcy5fc3R5bGVzLCBwcmVmaXgsICdtaW4taGVpZ2h0OiAnICsgZ2V0SGVpZ2h0KDEsIDApICsgJzsnLCAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtYXhIZWlnaHQgPiB0aGlzLl9zdHlsZXMuX21heCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMuX3N0eWxlcy5fbWF4OyBpIDwgbWF4SGVpZ2h0OyArK2kpIHtcbiAgICAgICAgICAgICAgICBVdGlscy5pbnNlcnRDU1NSdWxlKHRoaXMuX3N0eWxlcyxcbiAgICAgICAgICAgICAgICAgICAgcHJlZml4ICsgJ1tkYXRhLWdzLWhlaWdodD1cIicgKyAoaSArIDEpICsgJ1wiXScsXG4gICAgICAgICAgICAgICAgICAgICdoZWlnaHQ6ICcgKyBnZXRIZWlnaHQoaSArIDEsIGkpICsgJzsnLFxuICAgICAgICAgICAgICAgICAgICBpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBVdGlscy5pbnNlcnRDU1NSdWxlKHRoaXMuX3N0eWxlcyxcbiAgICAgICAgICAgICAgICAgICAgcHJlZml4ICsgJ1tkYXRhLWdzLW1pbi1oZWlnaHQ9XCInICsgKGkgKyAxKSArICdcIl0nLFxuICAgICAgICAgICAgICAgICAgICAnbWluLWhlaWdodDogJyArIGdldEhlaWdodChpICsgMSwgaSkgKyAnOycsXG4gICAgICAgICAgICAgICAgICAgIGlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIFV0aWxzLmluc2VydENTU1J1bGUodGhpcy5fc3R5bGVzLFxuICAgICAgICAgICAgICAgICAgICBwcmVmaXggKyAnW2RhdGEtZ3MtbWF4LWhlaWdodD1cIicgKyAoaSArIDEpICsgJ1wiXScsXG4gICAgICAgICAgICAgICAgICAgICdtYXgtaGVpZ2h0OiAnICsgZ2V0SGVpZ2h0KGkgKyAxLCBpKSArICc7JyxcbiAgICAgICAgICAgICAgICAgICAgaVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgVXRpbHMuaW5zZXJ0Q1NTUnVsZSh0aGlzLl9zdHlsZXMsXG4gICAgICAgICAgICAgICAgICAgIHByZWZpeCArICdbZGF0YS1ncy15PVwiJyArIGkgKyAnXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgJ3RvcDogJyArIGdldEhlaWdodChpLCBpKSArICc7JyxcbiAgICAgICAgICAgICAgICAgICAgaVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9zdHlsZXMuX21heCA9IG1heEhlaWdodDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBHcmlkU3RhY2sucHJvdG90eXBlLl91cGRhdGVDb250YWluZXJIZWlnaHQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuZ3JpZC5fdXBkYXRlQ291bnRlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBoZWlnaHQgPSB0aGlzLmdyaWQuZ2V0R3JpZEhlaWdodCgpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hdHRyKCdkYXRhLWdzLWN1cnJlbnQtaGVpZ2h0JywgaGVpZ2h0KTtcbiAgICAgICAgaWYgKCF0aGlzLm9wdHMuY2VsbEhlaWdodCkge1xuICAgICAgICAgICAgcmV0dXJuIDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMub3B0cy52ZXJ0aWNhbE1hcmdpbikge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuY3NzKCdoZWlnaHQnLCAoaGVpZ2h0ICogKHRoaXMub3B0cy5jZWxsSGVpZ2h0KSkgKyB0aGlzLm9wdHMuY2VsbEhlaWdodFVuaXQpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMub3B0cy5jZWxsSGVpZ2h0VW5pdCA9PT0gdGhpcy5vcHRzLnZlcnRpY2FsTWFyZ2luVW5pdCkge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuY3NzKCdoZWlnaHQnLCAoaGVpZ2h0ICogKHRoaXMub3B0cy5jZWxsSGVpZ2h0ICsgdGhpcy5vcHRzLnZlcnRpY2FsTWFyZ2luKSAtXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRzLnZlcnRpY2FsTWFyZ2luKSArIHRoaXMub3B0cy5jZWxsSGVpZ2h0VW5pdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5jc3MoJ2hlaWdodCcsICdjYWxjKCcgKyAoKGhlaWdodCAqICh0aGlzLm9wdHMuY2VsbEhlaWdodCkpICsgdGhpcy5vcHRzLmNlbGxIZWlnaHRVbml0KSArXG4gICAgICAgICAgICAgICAgJyArICcgKyAoKGhlaWdodCAqICh0aGlzLm9wdHMudmVydGljYWxNYXJnaW4gLSAxKSkgKyB0aGlzLm9wdHMudmVydGljYWxNYXJnaW5Vbml0KSArICcpJyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgR3JpZFN0YWNrLnByb3RvdHlwZS5faXNPbmVDb2x1bW5Nb2RlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIHx8IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgpIDw9XG4gICAgICAgICAgICB0aGlzLm9wdHMubWluV2lkdGg7XG4gICAgfTtcblxuICAgIEdyaWRTdGFjay5wcm90b3R5cGUuX3NldHVwUmVtb3ZpbmdUaW1lb3V0ID0gZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgbm9kZSA9ICQoZWwpLmRhdGEoJ19ncmlkc3RhY2tfbm9kZScpO1xuXG4gICAgICAgIGlmIChub2RlLl9yZW1vdmVUaW1lb3V0IHx8ICFzZWxmLm9wdHMucmVtb3ZhYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbm9kZS5fcmVtb3ZlVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBlbC5hZGRDbGFzcygnZ3JpZC1zdGFjay1pdGVtLXJlbW92aW5nJyk7XG4gICAgICAgICAgICBub2RlLl9pc0Fib3V0VG9SZW1vdmUgPSB0cnVlO1xuICAgICAgICB9LCBzZWxmLm9wdHMucmVtb3ZlVGltZW91dCk7XG4gICAgfTtcblxuICAgIEdyaWRTdGFjay5wcm90b3R5cGUuX2NsZWFyUmVtb3ZpbmdUaW1lb3V0ID0gZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgdmFyIG5vZGUgPSAkKGVsKS5kYXRhKCdfZ3JpZHN0YWNrX25vZGUnKTtcblxuICAgICAgICBpZiAoIW5vZGUuX3JlbW92ZVRpbWVvdXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjbGVhclRpbWVvdXQobm9kZS5fcmVtb3ZlVGltZW91dCk7XG4gICAgICAgIG5vZGUuX3JlbW92ZVRpbWVvdXQgPSBudWxsO1xuICAgICAgICBlbC5yZW1vdmVDbGFzcygnZ3JpZC1zdGFjay1pdGVtLXJlbW92aW5nJyk7XG4gICAgICAgIG5vZGUuX2lzQWJvdXRUb1JlbW92ZSA9IGZhbHNlO1xuICAgIH07XG5cbiAgICBHcmlkU3RhY2sucHJvdG90eXBlLl9wcmVwYXJlRWxlbWVudHNCeU5vZGUgPSBmdW5jdGlvbihlbCwgbm9kZSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdmFyIGNlbGxXaWR0aDtcbiAgICAgICAgdmFyIGNlbGxIZWlnaHQ7XG5cbiAgICAgICAgdmFyIGRyYWdPclJlc2l6ZSA9IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgICAgICAgICAgdmFyIHggPSBNYXRoLnJvdW5kKHVpLnBvc2l0aW9uLmxlZnQgLyBjZWxsV2lkdGgpO1xuICAgICAgICAgICAgdmFyIHkgPSBNYXRoLmZsb29yKCh1aS5wb3NpdGlvbi50b3AgKyBjZWxsSGVpZ2h0IC8gMikgLyBjZWxsSGVpZ2h0KTtcbiAgICAgICAgICAgIHZhciB3aWR0aDtcbiAgICAgICAgICAgIHZhciBoZWlnaHQ7XG5cbiAgICAgICAgICAgIGlmIChldmVudC50eXBlICE9ICdkcmFnJykge1xuICAgICAgICAgICAgICAgIHdpZHRoID0gTWF0aC5yb3VuZCh1aS5zaXplLndpZHRoIC8gY2VsbFdpZHRoKTtcbiAgICAgICAgICAgICAgICBoZWlnaHQgPSBNYXRoLnJvdW5kKHVpLnNpemUuaGVpZ2h0IC8gY2VsbEhlaWdodCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChldmVudC50eXBlID09ICdkcmFnJykge1xuICAgICAgICAgICAgICAgIGlmICh4IDwgMCB8fCB4ID49IHNlbGYuZ3JpZC53aWR0aCB8fCB5IDwgMCB8fCAoIXNlbGYuZ3JpZC5mbG9hdCAmJiB5ID4gc2VsZi5ncmlkLmdldEdyaWRIZWlnaHQoKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFub2RlLl90ZW1wb3JhcnlSZW1vdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5vcHRzLnJlbW92YWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX3NldHVwUmVtb3ZpbmdUaW1lb3V0KGVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgeCA9IG5vZGUuX2JlZm9yZURyYWdYO1xuICAgICAgICAgICAgICAgICAgICAgICAgeSA9IG5vZGUuX2JlZm9yZURyYWdZO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnBsYWNlaG9sZGVyLmRldGFjaCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wbGFjZWhvbGRlci5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmdyaWQucmVtb3ZlTm9kZShub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX3VwZGF0ZUNvbnRhaW5lckhlaWdodCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLl90ZW1wb3JhcnlSZW1vdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuX2NsZWFyUmVtb3ZpbmdUaW1lb3V0KGVsKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5fdGVtcG9yYXJ5UmVtb3ZlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5ncmlkLmFkZE5vZGUobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnBsYWNlaG9sZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtZ3MteCcsIHgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtZ3MteScsIHkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtZ3Mtd2lkdGgnLCB3aWR0aClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1ncy1oZWlnaHQnLCBoZWlnaHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29udGFpbmVyLmFwcGVuZChzZWxmLnBsYWNlaG9sZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZWwgPSBzZWxmLnBsYWNlaG9sZGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5fdGVtcG9yYXJ5UmVtb3ZlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC50eXBlID09ICdyZXNpemUnKSAge1xuICAgICAgICAgICAgICAgIGlmICh4IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gd2lkdGggYW5kIGhlaWdodCBhcmUgdW5kZWZpbmVkIGlmIG5vdCByZXNpemluZ1xuICAgICAgICAgICAgdmFyIGxhc3RUcmllZFdpZHRoID0gdHlwZW9mIHdpZHRoICE9PSAndW5kZWZpbmVkJyA/IHdpZHRoIDogbm9kZS5sYXN0VHJpZWRXaWR0aDtcbiAgICAgICAgICAgIHZhciBsYXN0VHJpZWRIZWlnaHQgPSB0eXBlb2YgaGVpZ2h0ICE9PSAndW5kZWZpbmVkJyA/IGhlaWdodCA6IG5vZGUubGFzdFRyaWVkSGVpZ2h0O1xuICAgICAgICAgICAgaWYgKCFzZWxmLmdyaWQuY2FuTW92ZU5vZGUobm9kZSwgeCwgeSwgd2lkdGgsIGhlaWdodCkgfHxcbiAgICAgICAgICAgICAgICAobm9kZS5sYXN0VHJpZWRYID09PSB4ICYmIG5vZGUubGFzdFRyaWVkWSA9PT0geSAmJlxuICAgICAgICAgICAgICAgIG5vZGUubGFzdFRyaWVkV2lkdGggPT09IGxhc3RUcmllZFdpZHRoICYmIG5vZGUubGFzdFRyaWVkSGVpZ2h0ID09PSBsYXN0VHJpZWRIZWlnaHQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9kZS5sYXN0VHJpZWRYID0geDtcbiAgICAgICAgICAgIG5vZGUubGFzdFRyaWVkWSA9IHk7XG4gICAgICAgICAgICBub2RlLmxhc3RUcmllZFdpZHRoID0gd2lkdGg7XG4gICAgICAgICAgICBub2RlLmxhc3RUcmllZEhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgICAgIHNlbGYuZ3JpZC5tb3ZlTm9kZShub2RlLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgICAgIHNlbGYuX3VwZGF0ZUNvbnRhaW5lckhlaWdodCgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBvblN0YXJ0TW92aW5nID0gZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgICAgICAgICBzZWxmLmNvbnRhaW5lci5hcHBlbmQoc2VsZi5wbGFjZWhvbGRlcik7XG4gICAgICAgICAgICB2YXIgbyA9ICQodGhpcyk7XG4gICAgICAgICAgICBzZWxmLmdyaWQuY2xlYW5Ob2RlcygpO1xuICAgICAgICAgICAgc2VsZi5ncmlkLmJlZ2luVXBkYXRlKG5vZGUpO1xuICAgICAgICAgICAgY2VsbFdpZHRoID0gc2VsZi5jZWxsV2lkdGgoKTtcbiAgICAgICAgICAgIHZhciBzdHJpY3RDZWxsSGVpZ2h0ID0gTWF0aC5jZWlsKG8ub3V0ZXJIZWlnaHQoKSAvIG8uYXR0cignZGF0YS1ncy1oZWlnaHQnKSk7XG4gICAgICAgICAgICBjZWxsSGVpZ2h0ID0gc2VsZi5jb250YWluZXIuaGVpZ2h0KCkgLyBwYXJzZUludChzZWxmLmNvbnRhaW5lci5hdHRyKCdkYXRhLWdzLWN1cnJlbnQtaGVpZ2h0JykpO1xuICAgICAgICAgICAgc2VsZi5wbGFjZWhvbGRlclxuICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWdzLXgnLCBvLmF0dHIoJ2RhdGEtZ3MteCcpKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWdzLXknLCBvLmF0dHIoJ2RhdGEtZ3MteScpKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWdzLXdpZHRoJywgby5hdHRyKCdkYXRhLWdzLXdpZHRoJykpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtZ3MtaGVpZ2h0Jywgby5hdHRyKCdkYXRhLWdzLWhlaWdodCcpKVxuICAgICAgICAgICAgICAgIC5zaG93KCk7XG4gICAgICAgICAgICBub2RlLmVsID0gc2VsZi5wbGFjZWhvbGRlcjtcbiAgICAgICAgICAgIG5vZGUuX2JlZm9yZURyYWdYID0gbm9kZS54O1xuICAgICAgICAgICAgbm9kZS5fYmVmb3JlRHJhZ1kgPSBub2RlLnk7XG5cbiAgICAgICAgICAgIHNlbGYuZGQucmVzaXphYmxlKGVsLCAnb3B0aW9uJywgJ21pbldpZHRoJywgY2VsbFdpZHRoICogKG5vZGUubWluV2lkdGggfHwgMSkpO1xuICAgICAgICAgICAgc2VsZi5kZC5yZXNpemFibGUoZWwsICdvcHRpb24nLCAnbWluSGVpZ2h0Jywgc3RyaWN0Q2VsbEhlaWdodCAqIChub2RlLm1pbkhlaWdodCB8fCAxKSk7XG5cbiAgICAgICAgICAgIGlmIChldmVudC50eXBlID09ICdyZXNpemVzdGFydCcpIHtcbiAgICAgICAgICAgICAgICBvLmZpbmQoJy5ncmlkLXN0YWNrLWl0ZW0nKS50cmlnZ2VyKCdyZXNpemVzdGFydCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBvbkVuZE1vdmluZyA9IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgICAgICAgICAgdmFyIG8gPSAkKHRoaXMpO1xuICAgICAgICAgICAgaWYgKCFvLmRhdGEoJ19ncmlkc3RhY2tfbm9kZScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgZm9yY2VOb3RpZnkgPSBmYWxzZTtcbiAgICAgICAgICAgIHNlbGYucGxhY2Vob2xkZXIuZGV0YWNoKCk7XG4gICAgICAgICAgICBub2RlLmVsID0gbztcbiAgICAgICAgICAgIHNlbGYucGxhY2Vob2xkZXIuaGlkZSgpO1xuXG4gICAgICAgICAgICBpZiAobm9kZS5faXNBYm91dFRvUmVtb3ZlKSB7XG4gICAgICAgICAgICAgICAgZm9yY2VOb3RpZnkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHZhciBncmlkVG9Ob3RpZnkgPSBlbC5kYXRhKCdfZ3JpZHN0YWNrX25vZGUnKS5fZ3JpZDtcbiAgICAgICAgICAgICAgICBncmlkVG9Ob3RpZnkuX3RyaWdnZXJSZW1vdmVFdmVudCgpO1xuICAgICAgICAgICAgICAgIGVsLnJlbW92ZURhdGEoJ19ncmlkc3RhY2tfbm9kZScpO1xuICAgICAgICAgICAgICAgIGVsLnJlbW92ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxmLl9jbGVhclJlbW92aW5nVGltZW91dChlbCk7XG4gICAgICAgICAgICAgICAgaWYgKCFub2RlLl90ZW1wb3JhcnlSZW1vdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG9cbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWdzLXgnLCBub2RlLngpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1ncy15Jywgbm9kZS55KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtZ3Mtd2lkdGgnLCBub2RlLndpZHRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtZ3MtaGVpZ2h0Jywgbm9kZS5oZWlnaHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1ncy14Jywgbm9kZS5fYmVmb3JlRHJhZ1gpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1ncy15Jywgbm9kZS5fYmVmb3JlRHJhZ1kpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1ncy13aWR0aCcsIG5vZGUud2lkdGgpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1ncy1oZWlnaHQnLCBub2RlLmhlaWdodClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnggPSBub2RlLl9iZWZvcmVEcmFnWDtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS55ID0gbm9kZS5fYmVmb3JlRHJhZ1k7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZ3JpZC5hZGROb2RlKG5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYuX3VwZGF0ZUNvbnRhaW5lckhlaWdodCgpO1xuICAgICAgICAgICAgc2VsZi5fdHJpZ2dlckNoYW5nZUV2ZW50KGZvcmNlTm90aWZ5KTtcblxuICAgICAgICAgICAgc2VsZi5ncmlkLmVuZFVwZGF0ZSgpO1xuXG4gICAgICAgICAgICB2YXIgbmVzdGVkR3JpZHMgPSBvLmZpbmQoJy5ncmlkLXN0YWNrJyk7XG4gICAgICAgICAgICBpZiAobmVzdGVkR3JpZHMubGVuZ3RoICYmIGV2ZW50LnR5cGUgPT0gJ3Jlc2l6ZXN0b3AnKSB7XG4gICAgICAgICAgICAgICAgbmVzdGVkR3JpZHMuZWFjaChmdW5jdGlvbihpbmRleCwgZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgJChlbCkuZGF0YSgnZ3JpZHN0YWNrJykub25SZXNpemVIYW5kbGVyKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgby5maW5kKCcuZ3JpZC1zdGFjay1pdGVtJykudHJpZ2dlcigncmVzaXplc3RvcCcpO1xuICAgICAgICAgICAgICAgIG8uZmluZCgnLmdyaWQtc3RhY2staXRlbScpLnRyaWdnZXIoJ2dzcmVzaXplc3RvcCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT0gJ3Jlc2l6ZXN0b3AnKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jb250YWluZXIudHJpZ2dlcignZ3NyZXNpemVzdG9wJywgbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5kZFxuICAgICAgICAgICAgLmRyYWdnYWJsZShlbCwge1xuICAgICAgICAgICAgICAgIHN0YXJ0OiBvblN0YXJ0TW92aW5nLFxuICAgICAgICAgICAgICAgIHN0b3A6IG9uRW5kTW92aW5nLFxuICAgICAgICAgICAgICAgIGRyYWc6IGRyYWdPclJlc2l6ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5yZXNpemFibGUoZWwsIHtcbiAgICAgICAgICAgICAgICBzdGFydDogb25TdGFydE1vdmluZyxcbiAgICAgICAgICAgICAgICBzdG9wOiBvbkVuZE1vdmluZyxcbiAgICAgICAgICAgICAgICByZXNpemU6IGRyYWdPclJlc2l6ZVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG5vZGUubm9Nb3ZlIHx8ICh0aGlzLl9pc09uZUNvbHVtbk1vZGUoKSAmJiAhc2VsZi5vcHRzLmRpc2FibGVPbmVDb2x1bW5Nb2RlKSB8fCB0aGlzLm9wdHMuZGlzYWJsZURyYWcpIHtcbiAgICAgICAgICAgIHRoaXMuZGQuZHJhZ2dhYmxlKGVsLCAnZGlzYWJsZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5vZGUubm9SZXNpemUgfHwgKHRoaXMuX2lzT25lQ29sdW1uTW9kZSgpICYmICFzZWxmLm9wdHMuZGlzYWJsZU9uZUNvbHVtbk1vZGUpIHx8IHRoaXMub3B0cy5kaXNhYmxlUmVzaXplKSB7XG4gICAgICAgICAgICB0aGlzLmRkLnJlc2l6YWJsZShlbCwgJ2Rpc2FibGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsLmF0dHIoJ2RhdGEtZ3MtbG9ja2VkJywgbm9kZS5sb2NrZWQgPyAneWVzJyA6IG51bGwpO1xuICAgIH07XG5cbiAgICBHcmlkU3RhY2sucHJvdG90eXBlLl9wcmVwYXJlRWxlbWVudCA9IGZ1bmN0aW9uKGVsLCB0cmlnZ2VyQWRkRXZlbnQpIHtcbiAgICAgICAgdHJpZ2dlckFkZEV2ZW50ID0gdHlwZW9mIHRyaWdnZXJBZGRFdmVudCAhPSAndW5kZWZpbmVkJyA/IHRyaWdnZXJBZGRFdmVudCA6IGZhbHNlO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGVsID0gJChlbCk7XG5cbiAgICAgICAgZWwuYWRkQ2xhc3ModGhpcy5vcHRzLml0ZW1DbGFzcyk7XG4gICAgICAgIHZhciBub2RlID0gc2VsZi5ncmlkLmFkZE5vZGUoe1xuICAgICAgICAgICAgeDogZWwuYXR0cignZGF0YS1ncy14JyksXG4gICAgICAgICAgICB5OiBlbC5hdHRyKCdkYXRhLWdzLXknKSxcbiAgICAgICAgICAgIHdpZHRoOiBlbC5hdHRyKCdkYXRhLWdzLXdpZHRoJyksXG4gICAgICAgICAgICBoZWlnaHQ6IGVsLmF0dHIoJ2RhdGEtZ3MtaGVpZ2h0JyksXG4gICAgICAgICAgICBtYXhXaWR0aDogZWwuYXR0cignZGF0YS1ncy1tYXgtd2lkdGgnKSxcbiAgICAgICAgICAgIG1pbldpZHRoOiBlbC5hdHRyKCdkYXRhLWdzLW1pbi13aWR0aCcpLFxuICAgICAgICAgICAgbWF4SGVpZ2h0OiBlbC5hdHRyKCdkYXRhLWdzLW1heC1oZWlnaHQnKSxcbiAgICAgICAgICAgIG1pbkhlaWdodDogZWwuYXR0cignZGF0YS1ncy1taW4taGVpZ2h0JyksXG4gICAgICAgICAgICBhdXRvUG9zaXRpb246IFV0aWxzLnRvQm9vbChlbC5hdHRyKCdkYXRhLWdzLWF1dG8tcG9zaXRpb24nKSksXG4gICAgICAgICAgICBub1Jlc2l6ZTogVXRpbHMudG9Cb29sKGVsLmF0dHIoJ2RhdGEtZ3Mtbm8tcmVzaXplJykpLFxuICAgICAgICAgICAgbm9Nb3ZlOiBVdGlscy50b0Jvb2woZWwuYXR0cignZGF0YS1ncy1uby1tb3ZlJykpLFxuICAgICAgICAgICAgbG9ja2VkOiBVdGlscy50b0Jvb2woZWwuYXR0cignZGF0YS1ncy1sb2NrZWQnKSksXG4gICAgICAgICAgICBlbDogZWwsXG4gICAgICAgICAgICBpZDogZWwuYXR0cignZGF0YS1ncy1pZCcpLFxuICAgICAgICAgICAgX2dyaWQ6IHNlbGZcbiAgICAgICAgfSwgdHJpZ2dlckFkZEV2ZW50KTtcbiAgICAgICAgZWwuZGF0YSgnX2dyaWRzdGFja19ub2RlJywgbm9kZSk7XG5cbiAgICAgICAgdGhpcy5fcHJlcGFyZUVsZW1lbnRzQnlOb2RlKGVsLCBub2RlKTtcbiAgICB9O1xuXG4gICAgR3JpZFN0YWNrLnByb3RvdHlwZS5zZXRBbmltYXRpb24gPSBmdW5jdGlvbihlbmFibGUpIHtcbiAgICAgICAgaWYgKGVuYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYWRkQ2xhc3MoJ2dyaWQtc3RhY2stYW5pbWF0ZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2xhc3MoJ2dyaWQtc3RhY2stYW5pbWF0ZScpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEdyaWRTdGFjay5wcm90b3R5cGUuYWRkV2lkZ2V0ID0gZnVuY3Rpb24oZWwsIHgsIHksIHdpZHRoLCBoZWlnaHQsIGF1dG9Qb3NpdGlvbiwgbWluV2lkdGgsIG1heFdpZHRoLFxuICAgICAgICBtaW5IZWlnaHQsIG1heEhlaWdodCwgaWQpIHtcbiAgICAgICAgZWwgPSAkKGVsKTtcbiAgICAgICAgaWYgKHR5cGVvZiB4ICE9ICd1bmRlZmluZWQnKSB7IGVsLmF0dHIoJ2RhdGEtZ3MteCcsIHgpOyB9XG4gICAgICAgIGlmICh0eXBlb2YgeSAhPSAndW5kZWZpbmVkJykgeyBlbC5hdHRyKCdkYXRhLWdzLXknLCB5KTsgfVxuICAgICAgICBpZiAodHlwZW9mIHdpZHRoICE9ICd1bmRlZmluZWQnKSB7IGVsLmF0dHIoJ2RhdGEtZ3Mtd2lkdGgnLCB3aWR0aCk7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBoZWlnaHQgIT0gJ3VuZGVmaW5lZCcpIHsgZWwuYXR0cignZGF0YS1ncy1oZWlnaHQnLCBoZWlnaHQpOyB9XG4gICAgICAgIGlmICh0eXBlb2YgYXV0b1Bvc2l0aW9uICE9ICd1bmRlZmluZWQnKSB7IGVsLmF0dHIoJ2RhdGEtZ3MtYXV0by1wb3NpdGlvbicsIGF1dG9Qb3NpdGlvbiA/ICd5ZXMnIDogbnVsbCk7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBtaW5XaWR0aCAhPSAndW5kZWZpbmVkJykgeyBlbC5hdHRyKCdkYXRhLWdzLW1pbi13aWR0aCcsIG1pbldpZHRoKTsgfVxuICAgICAgICBpZiAodHlwZW9mIG1heFdpZHRoICE9ICd1bmRlZmluZWQnKSB7IGVsLmF0dHIoJ2RhdGEtZ3MtbWF4LXdpZHRoJywgbWF4V2lkdGgpOyB9XG4gICAgICAgIGlmICh0eXBlb2YgbWluSGVpZ2h0ICE9ICd1bmRlZmluZWQnKSB7IGVsLmF0dHIoJ2RhdGEtZ3MtbWluLWhlaWdodCcsIG1pbkhlaWdodCk7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBtYXhIZWlnaHQgIT0gJ3VuZGVmaW5lZCcpIHsgZWwuYXR0cignZGF0YS1ncy1tYXgtaGVpZ2h0JywgbWF4SGVpZ2h0KTsgfVxuICAgICAgICBpZiAodHlwZW9mIGlkICE9ICd1bmRlZmluZWQnKSB7IGVsLmF0dHIoJ2RhdGEtZ3MtaWQnLCBpZCk7IH1cbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kKGVsKTtcbiAgICAgICAgdGhpcy5fcHJlcGFyZUVsZW1lbnQoZWwsIHRydWUpO1xuICAgICAgICB0aGlzLl90cmlnZ2VyQWRkRXZlbnQoKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlQ29udGFpbmVySGVpZ2h0KCk7XG4gICAgICAgIHRoaXMuX3RyaWdnZXJDaGFuZ2VFdmVudCh0cnVlKTtcblxuICAgICAgICByZXR1cm4gZWw7XG4gICAgfTtcblxuICAgIEdyaWRTdGFjay5wcm90b3R5cGUubWFrZVdpZGdldCA9IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIGVsID0gJChlbCk7XG4gICAgICAgIHRoaXMuX3ByZXBhcmVFbGVtZW50KGVsLCB0cnVlKTtcbiAgICAgICAgdGhpcy5fdHJpZ2dlckFkZEV2ZW50KCk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUNvbnRhaW5lckhlaWdodCgpO1xuICAgICAgICB0aGlzLl90cmlnZ2VyQ2hhbmdlRXZlbnQodHJ1ZSk7XG5cbiAgICAgICAgcmV0dXJuIGVsO1xuICAgIH07XG5cbiAgICBHcmlkU3RhY2sucHJvdG90eXBlLndpbGxJdEZpdCA9IGZ1bmN0aW9uKHgsIHksIHdpZHRoLCBoZWlnaHQsIGF1dG9Qb3NpdGlvbikge1xuICAgICAgICB2YXIgbm9kZSA9IHt4OiB4LCB5OiB5LCB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0LCBhdXRvUG9zaXRpb246IGF1dG9Qb3NpdGlvbn07XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQuY2FuQmVQbGFjZWRXaXRoUmVzcGVjdFRvSGVpZ2h0KG5vZGUpO1xuICAgIH07XG5cbiAgICBHcmlkU3RhY2sucHJvdG90eXBlLnJlbW92ZVdpZGdldCA9IGZ1bmN0aW9uKGVsLCBkZXRhY2hOb2RlKSB7XG4gICAgICAgIGRldGFjaE5vZGUgPSB0eXBlb2YgZGV0YWNoTm9kZSA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogZGV0YWNoTm9kZTtcbiAgICAgICAgZWwgPSAkKGVsKTtcbiAgICAgICAgdmFyIG5vZGUgPSBlbC5kYXRhKCdfZ3JpZHN0YWNrX25vZGUnKTtcblxuICAgICAgICAvLyBGb3IgTWV0ZW9yIHN1cHBvcnQ6IGh0dHBzOi8vZ2l0aHViLmNvbS90cm9vbGVlL2dyaWRzdGFjay5qcy9wdWxsLzI3MlxuICAgICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgICAgIG5vZGUgPSB0aGlzLmdyaWQuZ2V0Tm9kZURhdGFCeURPTUVsKGVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ3JpZC5yZW1vdmVOb2RlKG5vZGUsIGRldGFjaE5vZGUpO1xuICAgICAgICBlbC5yZW1vdmVEYXRhKCdfZ3JpZHN0YWNrX25vZGUnKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlQ29udGFpbmVySGVpZ2h0KCk7XG4gICAgICAgIGlmIChkZXRhY2hOb2RlKSB7XG4gICAgICAgICAgICBlbC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl90cmlnZ2VyQ2hhbmdlRXZlbnQodHJ1ZSk7XG4gICAgICAgIHRoaXMuX3RyaWdnZXJSZW1vdmVFdmVudCgpO1xuICAgIH07XG5cbiAgICBHcmlkU3RhY2sucHJvdG90eXBlLnJlbW92ZUFsbCA9IGZ1bmN0aW9uKGRldGFjaE5vZGUpIHtcbiAgICAgICAgXy5lYWNoKHRoaXMuZ3JpZC5ub2RlcywgXy5iaW5kKGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlV2lkZ2V0KG5vZGUuZWwsIGRldGFjaE5vZGUpO1xuICAgICAgICB9LCB0aGlzKSk7XG4gICAgICAgIHRoaXMuZ3JpZC5ub2RlcyA9IFtdO1xuICAgICAgICB0aGlzLl91cGRhdGVDb250YWluZXJIZWlnaHQoKTtcbiAgICB9O1xuXG4gICAgR3JpZFN0YWNrLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oZGV0YWNoR3JpZCkge1xuICAgICAgICAkKHdpbmRvdykub2ZmKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplSGFuZGxlcik7XG4gICAgICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgICAgICBpZiAodHlwZW9mIGRldGFjaEdyaWQgIT0gJ3VuZGVmaW5lZCcgJiYgIWRldGFjaEdyaWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQWxsKGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZURhdGEoJ2dyaWRzdGFjaycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgVXRpbHMucmVtb3ZlU3R5bGVzaGVldCh0aGlzLl9zdHlsZXNJZCk7XG4gICAgICAgIGlmICh0aGlzLmdyaWQpIHtcbiAgICAgICAgICAgIHRoaXMuZ3JpZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgR3JpZFN0YWNrLnByb3RvdHlwZS5yZXNpemFibGUgPSBmdW5jdGlvbihlbCwgdmFsKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgZWwgPSAkKGVsKTtcbiAgICAgICAgZWwuZWFjaChmdW5jdGlvbihpbmRleCwgZWwpIHtcbiAgICAgICAgICAgIGVsID0gJChlbCk7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IGVsLmRhdGEoJ19ncmlkc3RhY2tfbm9kZScpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBub2RlID09ICd1bmRlZmluZWQnIHx8IG5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5vZGUubm9SZXNpemUgPSAhKHZhbCB8fCBmYWxzZSk7XG4gICAgICAgICAgICBpZiAobm9kZS5ub1Jlc2l6ZSB8fCAoc2VsZi5faXNPbmVDb2x1bW5Nb2RlKCkgJiYgIXNlbGYub3B0cy5kaXNhYmxlT25lQ29sdW1uTW9kZSkpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmRkLnJlc2l6YWJsZShlbCwgJ2Rpc2FibGUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi5kZC5yZXNpemFibGUoZWwsICdlbmFibGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBHcmlkU3RhY2sucHJvdG90eXBlLm1vdmFibGUgPSBmdW5jdGlvbihlbCwgdmFsKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgZWwgPSAkKGVsKTtcbiAgICAgICAgZWwuZWFjaChmdW5jdGlvbihpbmRleCwgZWwpIHtcbiAgICAgICAgICAgIGVsID0gJChlbCk7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IGVsLmRhdGEoJ19ncmlkc3RhY2tfbm9kZScpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBub2RlID09ICd1bmRlZmluZWQnIHx8IG5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5vZGUubm9Nb3ZlID0gISh2YWwgfHwgZmFsc2UpO1xuICAgICAgICAgICAgaWYgKG5vZGUubm9Nb3ZlIHx8IChzZWxmLl9pc09uZUNvbHVtbk1vZGUoKSAmJiAhc2VsZi5vcHRzLmRpc2FibGVPbmVDb2x1bW5Nb2RlKSkge1xuICAgICAgICAgICAgICAgIHNlbGYuZGQuZHJhZ2dhYmxlKGVsLCAnZGlzYWJsZScpO1xuICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCd1aS1kcmFnZ2FibGUtaGFuZGxlJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYuZGQuZHJhZ2dhYmxlKGVsLCAnZW5hYmxlJyk7XG4gICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ3VpLWRyYWdnYWJsZS1oYW5kbGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBHcmlkU3RhY2sucHJvdG90eXBlLmVuYWJsZU1vdmUgPSBmdW5jdGlvbihkb0VuYWJsZSwgaW5jbHVkZU5ld1dpZGdldHMpIHtcbiAgICAgICAgdGhpcy5tb3ZhYmxlKHRoaXMuY29udGFpbmVyLmNoaWxkcmVuKCcuJyArIHRoaXMub3B0cy5pdGVtQ2xhc3MpLCBkb0VuYWJsZSk7XG4gICAgICAgIGlmIChpbmNsdWRlTmV3V2lkZ2V0cykge1xuICAgICAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVEcmFnID0gIWRvRW5hYmxlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEdyaWRTdGFjay5wcm90b3R5cGUuZW5hYmxlUmVzaXplID0gZnVuY3Rpb24oZG9FbmFibGUsIGluY2x1ZGVOZXdXaWRnZXRzKSB7XG4gICAgICAgIHRoaXMucmVzaXphYmxlKHRoaXMuY29udGFpbmVyLmNoaWxkcmVuKCcuJyArIHRoaXMub3B0cy5pdGVtQ2xhc3MpLCBkb0VuYWJsZSk7XG4gICAgICAgIGlmIChpbmNsdWRlTmV3V2lkZ2V0cykge1xuICAgICAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVSZXNpemUgPSAhZG9FbmFibGU7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgR3JpZFN0YWNrLnByb3RvdHlwZS5kaXNhYmxlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMubW92YWJsZSh0aGlzLmNvbnRhaW5lci5jaGlsZHJlbignLicgKyB0aGlzLm9wdHMuaXRlbUNsYXNzKSwgZmFsc2UpO1xuICAgICAgICB0aGlzLnJlc2l6YWJsZSh0aGlzLmNvbnRhaW5lci5jaGlsZHJlbignLicgKyB0aGlzLm9wdHMuaXRlbUNsYXNzKSwgZmFsc2UpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci50cmlnZ2VyKCdkaXNhYmxlJyk7XG4gICAgfTtcblxuICAgIEdyaWRTdGFjay5wcm90b3R5cGUuZW5hYmxlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMubW92YWJsZSh0aGlzLmNvbnRhaW5lci5jaGlsZHJlbignLicgKyB0aGlzLm9wdHMuaXRlbUNsYXNzKSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMucmVzaXphYmxlKHRoaXMuY29udGFpbmVyLmNoaWxkcmVuKCcuJyArIHRoaXMub3B0cy5pdGVtQ2xhc3MpLCB0cnVlKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIudHJpZ2dlcignZW5hYmxlJyk7XG4gICAgfTtcblxuICAgIEdyaWRTdGFjay5wcm90b3R5cGUubG9ja2VkID0gZnVuY3Rpb24oZWwsIHZhbCkge1xuICAgICAgICBlbCA9ICQoZWwpO1xuICAgICAgICBlbC5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbCkge1xuICAgICAgICAgICAgZWwgPSAkKGVsKTtcbiAgICAgICAgICAgIHZhciBub2RlID0gZWwuZGF0YSgnX2dyaWRzdGFja19ub2RlJyk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG5vZGUgPT0gJ3VuZGVmaW5lZCcgfHwgbm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbm9kZS5sb2NrZWQgPSAodmFsIHx8IGZhbHNlKTtcbiAgICAgICAgICAgIGVsLmF0dHIoJ2RhdGEtZ3MtbG9ja2VkJywgbm9kZS5sb2NrZWQgPyAneWVzJyA6IG51bGwpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIEdyaWRTdGFjay5wcm90b3R5cGUubWF4SGVpZ2h0ID0gZnVuY3Rpb24oZWwsIHZhbCkge1xuICAgICAgICBlbCA9ICQoZWwpO1xuICAgICAgICBlbC5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbCkge1xuICAgICAgICAgICAgZWwgPSAkKGVsKTtcbiAgICAgICAgICAgIHZhciBub2RlID0gZWwuZGF0YSgnX2dyaWRzdGFja19ub2RlJyk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG5vZGUgPT09ICd1bmRlZmluZWQnIHx8IG5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghaXNOYU4odmFsKSkge1xuICAgICAgICAgICAgICAgIG5vZGUubWF4SGVpZ2h0ID0gKHZhbCB8fCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgZWwuYXR0cignZGF0YS1ncy1tYXgtaGVpZ2h0JywgdmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBHcmlkU3RhY2sucHJvdG90eXBlLm1pbkhlaWdodCA9IGZ1bmN0aW9uKGVsLCB2YWwpIHtcbiAgICAgICAgZWwgPSAkKGVsKTtcbiAgICAgICAgZWwuZWFjaChmdW5jdGlvbihpbmRleCwgZWwpIHtcbiAgICAgICAgICAgIGVsID0gJChlbCk7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IGVsLmRhdGEoJ19ncmlkc3RhY2tfbm9kZScpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBub2RlID09PSAndW5kZWZpbmVkJyB8fCBub2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWlzTmFOKHZhbCkpIHtcbiAgICAgICAgICAgICAgICBub2RlLm1pbkhlaWdodCA9ICh2YWwgfHwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGVsLmF0dHIoJ2RhdGEtZ3MtbWluLWhlaWdodCcsIHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgR3JpZFN0YWNrLnByb3RvdHlwZS5tYXhXaWR0aCA9IGZ1bmN0aW9uKGVsLCB2YWwpIHtcbiAgICAgICAgZWwgPSAkKGVsKTtcbiAgICAgICAgZWwuZWFjaChmdW5jdGlvbihpbmRleCwgZWwpIHtcbiAgICAgICAgICAgIGVsID0gJChlbCk7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IGVsLmRhdGEoJ19ncmlkc3RhY2tfbm9kZScpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBub2RlID09PSAndW5kZWZpbmVkJyB8fCBub2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWlzTmFOKHZhbCkpIHtcbiAgICAgICAgICAgICAgICBub2RlLm1heFdpZHRoID0gKHZhbCB8fCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgZWwuYXR0cignZGF0YS1ncy1tYXgtd2lkdGgnLCB2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIEdyaWRTdGFjay5wcm90b3R5cGUubWluV2lkdGggPSBmdW5jdGlvbihlbCwgdmFsKSB7XG4gICAgICAgIGVsID0gJChlbCk7XG4gICAgICAgIGVsLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsKSB7XG4gICAgICAgICAgICBlbCA9ICQoZWwpO1xuICAgICAgICAgICAgdmFyIG5vZGUgPSBlbC5kYXRhKCdfZ3JpZHN0YWNrX25vZGUnKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygbm9kZSA9PT0gJ3VuZGVmaW5lZCcgfHwgbm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFpc05hTih2YWwpKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5taW5XaWR0aCA9ICh2YWwgfHwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGVsLmF0dHIoJ2RhdGEtZ3MtbWluLXdpZHRoJywgdmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBHcmlkU3RhY2sucHJvdG90eXBlLl91cGRhdGVFbGVtZW50ID0gZnVuY3Rpb24oZWwsIGNhbGxiYWNrKSB7XG4gICAgICAgIGVsID0gJChlbCkuZmlyc3QoKTtcbiAgICAgICAgdmFyIG5vZGUgPSBlbC5kYXRhKCdfZ3JpZHN0YWNrX25vZGUnKTtcbiAgICAgICAgaWYgKHR5cGVvZiBub2RlID09ICd1bmRlZmluZWQnIHx8IG5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBzZWxmLmdyaWQuY2xlYW5Ob2RlcygpO1xuICAgICAgICBzZWxmLmdyaWQuYmVnaW5VcGRhdGUobm9kZSk7XG5cbiAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzLCBlbCwgbm9kZSk7XG5cbiAgICAgICAgc2VsZi5fdXBkYXRlQ29udGFpbmVySGVpZ2h0KCk7XG4gICAgICAgIHNlbGYuX3RyaWdnZXJDaGFuZ2VFdmVudCgpO1xuXG4gICAgICAgIHNlbGYuZ3JpZC5lbmRVcGRhdGUoKTtcbiAgICB9O1xuXG4gICAgR3JpZFN0YWNrLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbihlbCwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLl91cGRhdGVFbGVtZW50KGVsLCBmdW5jdGlvbihlbCwgbm9kZSkge1xuICAgICAgICAgICAgd2lkdGggPSAod2lkdGggIT09IG51bGwgJiYgdHlwZW9mIHdpZHRoICE9ICd1bmRlZmluZWQnKSA/IHdpZHRoIDogbm9kZS53aWR0aDtcbiAgICAgICAgICAgIGhlaWdodCA9IChoZWlnaHQgIT09IG51bGwgJiYgdHlwZW9mIGhlaWdodCAhPSAndW5kZWZpbmVkJykgPyBoZWlnaHQgOiBub2RlLmhlaWdodDtcblxuICAgICAgICAgICAgdGhpcy5ncmlkLm1vdmVOb2RlKG5vZGUsIG5vZGUueCwgbm9kZS55LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIEdyaWRTdGFjay5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uKGVsLCB4LCB5KSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUVsZW1lbnQoZWwsIGZ1bmN0aW9uKGVsLCBub2RlKSB7XG4gICAgICAgICAgICB4ID0gKHggIT09IG51bGwgJiYgdHlwZW9mIHggIT0gJ3VuZGVmaW5lZCcpID8geCA6IG5vZGUueDtcbiAgICAgICAgICAgIHkgPSAoeSAhPT0gbnVsbCAmJiB0eXBlb2YgeSAhPSAndW5kZWZpbmVkJykgPyB5IDogbm9kZS55O1xuXG4gICAgICAgICAgICB0aGlzLmdyaWQubW92ZU5vZGUobm9kZSwgeCwgeSwgbm9kZS53aWR0aCwgbm9kZS5oZWlnaHQpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgR3JpZFN0YWNrLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihlbCwgeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLl91cGRhdGVFbGVtZW50KGVsLCBmdW5jdGlvbihlbCwgbm9kZSkge1xuICAgICAgICAgICAgeCA9ICh4ICE9PSBudWxsICYmIHR5cGVvZiB4ICE9ICd1bmRlZmluZWQnKSA/IHggOiBub2RlLng7XG4gICAgICAgICAgICB5ID0gKHkgIT09IG51bGwgJiYgdHlwZW9mIHkgIT0gJ3VuZGVmaW5lZCcpID8geSA6IG5vZGUueTtcbiAgICAgICAgICAgIHdpZHRoID0gKHdpZHRoICE9PSBudWxsICYmIHR5cGVvZiB3aWR0aCAhPSAndW5kZWZpbmVkJykgPyB3aWR0aCA6IG5vZGUud2lkdGg7XG4gICAgICAgICAgICBoZWlnaHQgPSAoaGVpZ2h0ICE9PSBudWxsICYmIHR5cGVvZiBoZWlnaHQgIT0gJ3VuZGVmaW5lZCcpID8gaGVpZ2h0IDogbm9kZS5oZWlnaHQ7XG5cbiAgICAgICAgICAgIHRoaXMuZ3JpZC5tb3ZlTm9kZShub2RlLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIEdyaWRTdGFjay5wcm90b3R5cGUudmVydGljYWxNYXJnaW4gPSBmdW5jdGlvbih2YWwsIG5vVXBkYXRlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsID09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRzLnZlcnRpY2FsTWFyZ2luO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGhlaWdodERhdGEgPSBVdGlscy5wYXJzZUhlaWdodCh2YWwpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdHMudmVydGljYWxNYXJnaW5Vbml0ID09PSBoZWlnaHREYXRhLnVuaXQgJiYgdGhpcy5vcHRzLmhlaWdodCA9PT0gaGVpZ2h0RGF0YS5oZWlnaHQpIHtcbiAgICAgICAgICAgIHJldHVybiA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcHRzLnZlcnRpY2FsTWFyZ2luVW5pdCA9IGhlaWdodERhdGEudW5pdDtcbiAgICAgICAgdGhpcy5vcHRzLnZlcnRpY2FsTWFyZ2luID0gaGVpZ2h0RGF0YS5oZWlnaHQ7XG5cbiAgICAgICAgaWYgKCFub1VwZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlU3R5bGVzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgR3JpZFN0YWNrLnByb3RvdHlwZS5jZWxsSGVpZ2h0ID0gZnVuY3Rpb24odmFsLCBub1VwZGF0ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbCA9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0cy5jZWxsSGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0cy5jZWxsSGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG8gPSB0aGlzLmNvbnRhaW5lci5jaGlsZHJlbignLicgKyB0aGlzLm9wdHMuaXRlbUNsYXNzKS5maXJzdCgpO1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguY2VpbChvLm91dGVySGVpZ2h0KCkgLyBvLmF0dHIoJ2RhdGEtZ3MtaGVpZ2h0JykpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBoZWlnaHREYXRhID0gVXRpbHMucGFyc2VIZWlnaHQodmFsKTtcblxuICAgICAgICBpZiAodGhpcy5vcHRzLmNlbGxIZWlnaHRVbml0ID09PSBoZWlnaHREYXRhLmhlaWdodFVuaXQgJiYgdGhpcy5vcHRzLmhlaWdodCA9PT0gaGVpZ2h0RGF0YS5oZWlnaHQpIHtcbiAgICAgICAgICAgIHJldHVybiA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcHRzLmNlbGxIZWlnaHRVbml0ID0gaGVpZ2h0RGF0YS51bml0O1xuICAgICAgICB0aGlzLm9wdHMuY2VsbEhlaWdodCA9IGhlaWdodERhdGEuaGVpZ2h0O1xuXG4gICAgICAgIGlmICghbm9VcGRhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVN0eWxlcygpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgR3JpZFN0YWNrLnByb3RvdHlwZS5jZWxsV2lkdGggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy5jb250YWluZXIub3V0ZXJXaWR0aCgpIC8gdGhpcy5vcHRzLndpZHRoKTtcbiAgICB9O1xuXG4gICAgR3JpZFN0YWNrLnByb3RvdHlwZS5nZXRDZWxsRnJvbVBpeGVsID0gZnVuY3Rpb24ocG9zaXRpb24sIHVzZU9mZnNldCkge1xuICAgICAgICB2YXIgY29udGFpbmVyUG9zID0gKHR5cGVvZiB1c2VPZmZzZXQgIT0gJ3VuZGVmaW5lZCcgJiYgdXNlT2Zmc2V0KSA/XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5vZmZzZXQoKSA6IHRoaXMuY29udGFpbmVyLnBvc2l0aW9uKCk7XG4gICAgICAgIHZhciByZWxhdGl2ZUxlZnQgPSBwb3NpdGlvbi5sZWZ0IC0gY29udGFpbmVyUG9zLmxlZnQ7XG4gICAgICAgIHZhciByZWxhdGl2ZVRvcCA9IHBvc2l0aW9uLnRvcCAtIGNvbnRhaW5lclBvcy50b3A7XG5cbiAgICAgICAgdmFyIGNvbHVtbldpZHRoID0gTWF0aC5mbG9vcih0aGlzLmNvbnRhaW5lci53aWR0aCgpIC8gdGhpcy5vcHRzLndpZHRoKTtcbiAgICAgICAgdmFyIHJvd0hlaWdodCA9IE1hdGguZmxvb3IodGhpcy5jb250YWluZXIuaGVpZ2h0KCkgLyBwYXJzZUludCh0aGlzLmNvbnRhaW5lci5hdHRyKCdkYXRhLWdzLWN1cnJlbnQtaGVpZ2h0JykpKTtcblxuICAgICAgICByZXR1cm4ge3g6IE1hdGguZmxvb3IocmVsYXRpdmVMZWZ0IC8gY29sdW1uV2lkdGgpLCB5OiBNYXRoLmZsb29yKHJlbGF0aXZlVG9wIC8gcm93SGVpZ2h0KX07XG4gICAgfTtcblxuICAgIEdyaWRTdGFjay5wcm90b3R5cGUuYmF0Y2hVcGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5ncmlkLmJhdGNoVXBkYXRlKCk7XG4gICAgfTtcblxuICAgIEdyaWRTdGFjay5wcm90b3R5cGUuY29tbWl0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuZ3JpZC5jb21taXQoKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlQ29udGFpbmVySGVpZ2h0KCk7XG4gICAgfTtcblxuICAgIEdyaWRTdGFjay5wcm90b3R5cGUuaXNBcmVhRW1wdHkgPSBmdW5jdGlvbih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQuaXNBcmVhRW1wdHkoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgfTtcblxuICAgIEdyaWRTdGFjay5wcm90b3R5cGUuc2V0U3RhdGljID0gZnVuY3Rpb24oc3RhdGljVmFsdWUpIHtcbiAgICAgICAgdGhpcy5vcHRzLnN0YXRpY0dyaWQgPSAoc3RhdGljVmFsdWUgPT09IHRydWUpO1xuICAgICAgICB0aGlzLmVuYWJsZU1vdmUoIXN0YXRpY1ZhbHVlKTtcbiAgICAgICAgdGhpcy5lbmFibGVSZXNpemUoIXN0YXRpY1ZhbHVlKTtcbiAgICAgICAgdGhpcy5fc2V0U3RhdGljQ2xhc3MoKTtcbiAgICB9O1xuXG4gICAgR3JpZFN0YWNrLnByb3RvdHlwZS5fc2V0U3RhdGljQ2xhc3MgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHN0YXRpY0NsYXNzTmFtZSA9ICdncmlkLXN0YWNrLXN0YXRpYyc7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0cy5zdGF0aWNHcmlkID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRDbGFzcyhzdGF0aWNDbGFzc05hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2xhc3Moc3RhdGljQ2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBHcmlkU3RhY2sucHJvdG90eXBlLl91cGRhdGVOb2RlV2lkdGhzID0gZnVuY3Rpb24ob2xkV2lkdGgsIG5ld1dpZHRoKSB7XG4gICAgICAgIHRoaXMuZ3JpZC5fc29ydE5vZGVzKCk7XG4gICAgICAgIHRoaXMuZ3JpZC5iYXRjaFVwZGF0ZSgpO1xuICAgICAgICB2YXIgbm9kZSA9IHt9O1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZ3JpZC5ub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbm9kZSA9IHRoaXMuZ3JpZC5ub2Rlc1tpXTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKG5vZGUuZWwsIE1hdGgucm91bmQobm9kZS54ICogbmV3V2lkdGggLyBvbGRXaWR0aCksIHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKG5vZGUud2lkdGggKiBuZXdXaWR0aCAvIG9sZFdpZHRoKSwgdW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdyaWQuY29tbWl0KCk7XG4gICAgfTtcblxuICAgIEdyaWRTdGFjay5wcm90b3R5cGUuc2V0R3JpZFdpZHRoID0gZnVuY3Rpb24oZ3JpZFdpZHRoLGRvTm90UHJvcGFnYXRlKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNsYXNzKCdncmlkLXN0YWNrLScgKyB0aGlzLm9wdHMud2lkdGgpO1xuICAgICAgICBpZiAoZG9Ob3RQcm9wYWdhdGUgIT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZU5vZGVXaWR0aHModGhpcy5vcHRzLndpZHRoLCBncmlkV2lkdGgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3B0cy53aWR0aCA9IGdyaWRXaWR0aDtcbiAgICAgICAgdGhpcy5ncmlkLndpZHRoID0gZ3JpZFdpZHRoO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRDbGFzcygnZ3JpZC1zdGFjay0nICsgZ3JpZFdpZHRoKTtcbiAgICB9O1xuXG4gICAgLy8ganNjczpkaXNhYmxlIHJlcXVpcmVDYW1lbENhc2VPclVwcGVyQ2FzZUlkZW50aWZpZXJzXG4gICAgR3JpZFN0YWNrRW5naW5lLnByb3RvdHlwZS5iYXRjaF91cGRhdGUgPSBvYnNvbGV0ZShHcmlkU3RhY2tFbmdpbmUucHJvdG90eXBlLmJhdGNoVXBkYXRlKTtcbiAgICBHcmlkU3RhY2tFbmdpbmUucHJvdG90eXBlLl9maXhfY29sbGlzaW9ucyA9IG9ic29sZXRlKEdyaWRTdGFja0VuZ2luZS5wcm90b3R5cGUuX2ZpeENvbGxpc2lvbnMsXG4gICAgICAgICdfZml4X2NvbGxpc2lvbnMnLCAnX2ZpeENvbGxpc2lvbnMnKTtcbiAgICBHcmlkU3RhY2tFbmdpbmUucHJvdG90eXBlLmlzX2FyZWFfZW1wdHkgPSBvYnNvbGV0ZShHcmlkU3RhY2tFbmdpbmUucHJvdG90eXBlLmlzQXJlYUVtcHR5LFxuICAgICAgICAnaXNfYXJlYV9lbXB0eScsICdpc0FyZWFFbXB0eScpO1xuICAgIEdyaWRTdGFja0VuZ2luZS5wcm90b3R5cGUuX3NvcnRfbm9kZXMgPSBvYnNvbGV0ZShHcmlkU3RhY2tFbmdpbmUucHJvdG90eXBlLl9zb3J0Tm9kZXMsXG4gICAgICAgICdfc29ydF9ub2RlcycsICdfc29ydE5vZGVzJyk7XG4gICAgR3JpZFN0YWNrRW5naW5lLnByb3RvdHlwZS5fcGFja19ub2RlcyA9IG9ic29sZXRlKEdyaWRTdGFja0VuZ2luZS5wcm90b3R5cGUuX3BhY2tOb2RlcyxcbiAgICAgICAgJ19wYWNrX25vZGVzJywgJ19wYWNrTm9kZXMnKTtcbiAgICBHcmlkU3RhY2tFbmdpbmUucHJvdG90eXBlLl9wcmVwYXJlX25vZGUgPSBvYnNvbGV0ZShHcmlkU3RhY2tFbmdpbmUucHJvdG90eXBlLl9wcmVwYXJlTm9kZSxcbiAgICAgICAgJ19wcmVwYXJlX25vZGUnLCAnX3ByZXBhcmVOb2RlJyk7XG4gICAgR3JpZFN0YWNrRW5naW5lLnByb3RvdHlwZS5jbGVhbl9ub2RlcyA9IG9ic29sZXRlKEdyaWRTdGFja0VuZ2luZS5wcm90b3R5cGUuY2xlYW5Ob2RlcyxcbiAgICAgICAgJ2NsZWFuX25vZGVzJywgJ2NsZWFuTm9kZXMnKTtcbiAgICBHcmlkU3RhY2tFbmdpbmUucHJvdG90eXBlLmdldF9kaXJ0eV9ub2RlcyA9IG9ic29sZXRlKEdyaWRTdGFja0VuZ2luZS5wcm90b3R5cGUuZ2V0RGlydHlOb2RlcyxcbiAgICAgICAgJ2dldF9kaXJ0eV9ub2RlcycsICdnZXREaXJ0eU5vZGVzJyk7XG4gICAgR3JpZFN0YWNrRW5naW5lLnByb3RvdHlwZS5hZGRfbm9kZSA9IG9ic29sZXRlKEdyaWRTdGFja0VuZ2luZS5wcm90b3R5cGUuYWRkTm9kZSxcbiAgICAgICAgJ2FkZF9ub2RlJywgJ2FkZE5vZGUsICcpO1xuICAgIEdyaWRTdGFja0VuZ2luZS5wcm90b3R5cGUucmVtb3ZlX25vZGUgPSBvYnNvbGV0ZShHcmlkU3RhY2tFbmdpbmUucHJvdG90eXBlLnJlbW92ZU5vZGUsXG4gICAgICAgICdyZW1vdmVfbm9kZScsICdyZW1vdmVOb2RlJyk7XG4gICAgR3JpZFN0YWNrRW5naW5lLnByb3RvdHlwZS5jYW5fbW92ZV9ub2RlID0gb2Jzb2xldGUoR3JpZFN0YWNrRW5naW5lLnByb3RvdHlwZS5jYW5Nb3ZlTm9kZSxcbiAgICAgICAgJ2Nhbl9tb3ZlX25vZGUnLCAnY2FuTW92ZU5vZGUnKTtcbiAgICBHcmlkU3RhY2tFbmdpbmUucHJvdG90eXBlLm1vdmVfbm9kZSA9IG9ic29sZXRlKEdyaWRTdGFja0VuZ2luZS5wcm90b3R5cGUubW92ZU5vZGUsXG4gICAgICAgICdtb3ZlX25vZGUnLCAnbW92ZU5vZGUnKTtcbiAgICBHcmlkU3RhY2tFbmdpbmUucHJvdG90eXBlLmdldF9ncmlkX2hlaWdodCA9IG9ic29sZXRlKEdyaWRTdGFja0VuZ2luZS5wcm90b3R5cGUuZ2V0R3JpZEhlaWdodCxcbiAgICAgICAgJ2dldF9ncmlkX2hlaWdodCcsICdnZXRHcmlkSGVpZ2h0Jyk7XG4gICAgR3JpZFN0YWNrRW5naW5lLnByb3RvdHlwZS5iZWdpbl91cGRhdGUgPSBvYnNvbGV0ZShHcmlkU3RhY2tFbmdpbmUucHJvdG90eXBlLmJlZ2luVXBkYXRlLFxuICAgICAgICAnYmVnaW5fdXBkYXRlJywgJ2JlZ2luVXBkYXRlJyk7XG4gICAgR3JpZFN0YWNrRW5naW5lLnByb3RvdHlwZS5lbmRfdXBkYXRlID0gb2Jzb2xldGUoR3JpZFN0YWNrRW5naW5lLnByb3RvdHlwZS5lbmRVcGRhdGUsXG4gICAgICAgICdlbmRfdXBkYXRlJywgJ2VuZFVwZGF0ZScpO1xuICAgIEdyaWRTdGFja0VuZ2luZS5wcm90b3R5cGUuY2FuX2JlX3BsYWNlZF93aXRoX3Jlc3BlY3RfdG9faGVpZ2h0ID1cbiAgICAgICAgb2Jzb2xldGUoR3JpZFN0YWNrRW5naW5lLnByb3RvdHlwZS5jYW5CZVBsYWNlZFdpdGhSZXNwZWN0VG9IZWlnaHQsXG4gICAgICAgICdjYW5fYmVfcGxhY2VkX3dpdGhfcmVzcGVjdF90b19oZWlnaHQnLCAnY2FuQmVQbGFjZWRXaXRoUmVzcGVjdFRvSGVpZ2h0Jyk7XG4gICAgR3JpZFN0YWNrLnByb3RvdHlwZS5fdHJpZ2dlcl9jaGFuZ2VfZXZlbnQgPSBvYnNvbGV0ZShHcmlkU3RhY2sucHJvdG90eXBlLl90cmlnZ2VyQ2hhbmdlRXZlbnQsXG4gICAgICAgICdfdHJpZ2dlcl9jaGFuZ2VfZXZlbnQnLCAnX3RyaWdnZXJDaGFuZ2VFdmVudCcpO1xuICAgIEdyaWRTdGFjay5wcm90b3R5cGUuX2luaXRfc3R5bGVzID0gb2Jzb2xldGUoR3JpZFN0YWNrLnByb3RvdHlwZS5faW5pdFN0eWxlcyxcbiAgICAgICAgJ19pbml0X3N0eWxlcycsICdfaW5pdFN0eWxlcycpO1xuICAgIEdyaWRTdGFjay5wcm90b3R5cGUuX3VwZGF0ZV9zdHlsZXMgPSBvYnNvbGV0ZShHcmlkU3RhY2sucHJvdG90eXBlLl91cGRhdGVTdHlsZXMsXG4gICAgICAgICdfdXBkYXRlX3N0eWxlcycsICdfdXBkYXRlU3R5bGVzJyk7XG4gICAgR3JpZFN0YWNrLnByb3RvdHlwZS5fdXBkYXRlX2NvbnRhaW5lcl9oZWlnaHQgPSBvYnNvbGV0ZShHcmlkU3RhY2sucHJvdG90eXBlLl91cGRhdGVDb250YWluZXJIZWlnaHQsXG4gICAgICAgICdfdXBkYXRlX2NvbnRhaW5lcl9oZWlnaHQnLCAnX3VwZGF0ZUNvbnRhaW5lckhlaWdodCcpO1xuICAgIEdyaWRTdGFjay5wcm90b3R5cGUuX2lzX29uZV9jb2x1bW5fbW9kZSA9IG9ic29sZXRlKEdyaWRTdGFjay5wcm90b3R5cGUuX2lzT25lQ29sdW1uTW9kZSxcbiAgICAgICAgJ19pc19vbmVfY29sdW1uX21vZGUnLCdfaXNPbmVDb2x1bW5Nb2RlJyk7XG4gICAgR3JpZFN0YWNrLnByb3RvdHlwZS5fcHJlcGFyZV9lbGVtZW50ID0gb2Jzb2xldGUoR3JpZFN0YWNrLnByb3RvdHlwZS5fcHJlcGFyZUVsZW1lbnQsXG4gICAgICAgICdfcHJlcGFyZV9lbGVtZW50JywgJ19wcmVwYXJlRWxlbWVudCcpO1xuICAgIEdyaWRTdGFjay5wcm90b3R5cGUuc2V0X2FuaW1hdGlvbiA9IG9ic29sZXRlKEdyaWRTdGFjay5wcm90b3R5cGUuc2V0QW5pbWF0aW9uLFxuICAgICAgICAnc2V0X2FuaW1hdGlvbicsICdzZXRBbmltYXRpb24nKTtcbiAgICBHcmlkU3RhY2sucHJvdG90eXBlLmFkZF93aWRnZXQgPSBvYnNvbGV0ZShHcmlkU3RhY2sucHJvdG90eXBlLmFkZFdpZGdldCxcbiAgICAgICAgJ2FkZF93aWRnZXQnLCAnYWRkV2lkZ2V0Jyk7XG4gICAgR3JpZFN0YWNrLnByb3RvdHlwZS5tYWtlX3dpZGdldCA9IG9ic29sZXRlKEdyaWRTdGFjay5wcm90b3R5cGUubWFrZVdpZGdldCxcbiAgICAgICAgJ21ha2Vfd2lkZ2V0JywgJ21ha2VXaWRnZXQnKTtcbiAgICBHcmlkU3RhY2sucHJvdG90eXBlLndpbGxfaXRfZml0ID0gb2Jzb2xldGUoR3JpZFN0YWNrLnByb3RvdHlwZS53aWxsSXRGaXQsXG4gICAgICAgICd3aWxsX2l0X2ZpdCcsICd3aWxsSXRGaXQnKTtcbiAgICBHcmlkU3RhY2sucHJvdG90eXBlLnJlbW92ZV93aWRnZXQgPSBvYnNvbGV0ZShHcmlkU3RhY2sucHJvdG90eXBlLnJlbW92ZVdpZGdldCxcbiAgICAgICAgJ3JlbW92ZV93aWRnZXQnLCAncmVtb3ZlV2lkZ2V0Jyk7XG4gICAgR3JpZFN0YWNrLnByb3RvdHlwZS5yZW1vdmVfYWxsID0gb2Jzb2xldGUoR3JpZFN0YWNrLnByb3RvdHlwZS5yZW1vdmVBbGwsXG4gICAgICAgICdyZW1vdmVfYWxsJywgJ3JlbW92ZUFsbCcpO1xuICAgIEdyaWRTdGFjay5wcm90b3R5cGUubWluX2hlaWdodCA9IG9ic29sZXRlKEdyaWRTdGFjay5wcm90b3R5cGUubWluSGVpZ2h0LFxuICAgICAgICAnbWluX2hlaWdodCcsICdtaW5IZWlnaHQnKTtcbiAgICBHcmlkU3RhY2sucHJvdG90eXBlLm1pbl93aWR0aCA9IG9ic29sZXRlKEdyaWRTdGFjay5wcm90b3R5cGUubWluV2lkdGgsXG4gICAgICAgICdtaW5fd2lkdGgnLCAnbWluV2lkdGgnKTtcbiAgICBHcmlkU3RhY2sucHJvdG90eXBlLl91cGRhdGVfZWxlbWVudCA9IG9ic29sZXRlKEdyaWRTdGFjay5wcm90b3R5cGUuX3VwZGF0ZUVsZW1lbnQsXG4gICAgICAgICdfdXBkYXRlX2VsZW1lbnQnLCAnX3VwZGF0ZUVsZW1lbnQnKTtcbiAgICBHcmlkU3RhY2sucHJvdG90eXBlLmNlbGxfaGVpZ2h0ID0gb2Jzb2xldGUoR3JpZFN0YWNrLnByb3RvdHlwZS5jZWxsSGVpZ2h0LFxuICAgICAgICAnY2VsbF9oZWlnaHQnLCAnY2VsbEhlaWdodCcpO1xuICAgIEdyaWRTdGFjay5wcm90b3R5cGUuY2VsbF93aWR0aCA9IG9ic29sZXRlKEdyaWRTdGFjay5wcm90b3R5cGUuY2VsbFdpZHRoLFxuICAgICAgICAnY2VsbF93aWR0aCcsICdjZWxsV2lkdGgnKTtcbiAgICBHcmlkU3RhY2sucHJvdG90eXBlLmdldF9jZWxsX2Zyb21fcGl4ZWwgPSBvYnNvbGV0ZShHcmlkU3RhY2sucHJvdG90eXBlLmdldENlbGxGcm9tUGl4ZWwsXG4gICAgICAgICdnZXRfY2VsbF9mcm9tX3BpeGVsJywgJ2dldENlbGxGcm9tUGl4ZWwnKTtcbiAgICBHcmlkU3RhY2sucHJvdG90eXBlLmJhdGNoX3VwZGF0ZSA9IG9ic29sZXRlKEdyaWRTdGFjay5wcm90b3R5cGUuYmF0Y2hVcGRhdGUsXG4gICAgICAgICdiYXRjaF91cGRhdGUnLCAnYmF0Y2hVcGRhdGUnKTtcbiAgICBHcmlkU3RhY2sucHJvdG90eXBlLmlzX2FyZWFfZW1wdHkgPSBvYnNvbGV0ZShHcmlkU3RhY2sucHJvdG90eXBlLmlzQXJlYUVtcHR5LFxuICAgICAgICAnaXNfYXJlYV9lbXB0eScsICdpc0FyZWFFbXB0eScpO1xuICAgIEdyaWRTdGFjay5wcm90b3R5cGUuc2V0X3N0YXRpYyA9IG9ic29sZXRlKEdyaWRTdGFjay5wcm90b3R5cGUuc2V0U3RhdGljLFxuICAgICAgICAnc2V0X3N0YXRpYycsICdzZXRTdGF0aWMnKTtcbiAgICBHcmlkU3RhY2sucHJvdG90eXBlLl9zZXRfc3RhdGljX2NsYXNzID0gb2Jzb2xldGUoR3JpZFN0YWNrLnByb3RvdHlwZS5fc2V0U3RhdGljQ2xhc3MsXG4gICAgICAgICdfc2V0X3N0YXRpY19jbGFzcycsICdfc2V0U3RhdGljQ2xhc3MnKTtcbiAgICAvLyBqc2NzOmVuYWJsZSByZXF1aXJlQ2FtZWxDYXNlT3JVcHBlckNhc2VJZGVudGlmaWVyc1xuXG4gICAgc2NvcGUuR3JpZFN0YWNrVUkgPSBHcmlkU3RhY2s7XG5cbiAgICBzY29wZS5HcmlkU3RhY2tVSS5VdGlscyA9IFV0aWxzO1xuICAgIHNjb3BlLkdyaWRTdGFja1VJLkVuZ2luZSA9IEdyaWRTdGFja0VuZ2luZTtcbiAgICBzY29wZS5HcmlkU3RhY2tVSS5HcmlkU3RhY2tEcmFnRHJvcFBsdWdpbiA9IEdyaWRTdGFja0RyYWdEcm9wUGx1Z2luO1xuXG4gICAgJC5mbi5ncmlkc3RhY2sgPSBmdW5jdGlvbihvcHRzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgbyA9ICQodGhpcyk7XG4gICAgICAgICAgICBpZiAoIW8uZGF0YSgnZ3JpZHN0YWNrJykpIHtcbiAgICAgICAgICAgICAgICBvXG4gICAgICAgICAgICAgICAgICAgIC5kYXRhKCdncmlkc3RhY2snLCBuZXcgR3JpZFN0YWNrKHRoaXMsIG9wdHMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiBzY29wZS5HcmlkU3RhY2tVSTtcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2dyaWRzdGFjay9zcmMvZ3JpZHN0YWNrLmpzIiwiLyoqXG4gKiBncmlkc3RhY2suanMgMC4zLjBcbiAqIGh0dHA6Ly90cm9vbGVlLmdpdGh1Yi5pby9ncmlkc3RhY2suanMvXG4gKiAoYykgMjAxNC0yMDE2IFBhdmVsIFJlem5pa292LCBEeWxhbiBXZWlzc1xuICogZ3JpZHN0YWNrLmpzIG1heSBiZSBmcmVlbHkgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogQHByZXNlcnZlXG4qL1xuKGZ1bmN0aW9uKGZhY3RvcnkpIHtcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShbJ2pxdWVyeScsICdsb2Rhc2gnLCAnZ3JpZHN0YWNrJywgJ2pxdWVyeS11aS9kYXRhJywgJ2pxdWVyeS11aS9kaXNhYmxlLXNlbGVjdGlvbicsICdqcXVlcnktdWkvZm9jdXNhYmxlJyxcbiAgICAgICAgICAgICdqcXVlcnktdWkvZm9ybScsICdqcXVlcnktdWkvaWUnLCAnanF1ZXJ5LXVpL2tleWNvZGUnLCAnanF1ZXJ5LXVpL2xhYmVscycsICdqcXVlcnktdWkvanF1ZXJ5LTEtNycsXG4gICAgICAgICAgICAnanF1ZXJ5LXVpL3BsdWdpbicsICdqcXVlcnktdWkvc2FmZS1hY3RpdmUtZWxlbWVudCcsICdqcXVlcnktdWkvc2FmZS1ibHVyJywgJ2pxdWVyeS11aS9zY3JvbGwtcGFyZW50JyxcbiAgICAgICAgICAgICdqcXVlcnktdWkvdGFiYmFibGUnLCAnanF1ZXJ5LXVpL3VuaXF1ZS1pZCcsICdqcXVlcnktdWkvdmVyc2lvbicsICdqcXVlcnktdWkvd2lkZ2V0JyxcbiAgICAgICAgICAgICdqcXVlcnktdWkvd2lkZ2V0cy9tb3VzZScsICdqcXVlcnktdWkvd2lkZ2V0cy9kcmFnZ2FibGUnLCAnanF1ZXJ5LXVpL3dpZGdldHMvZHJvcHBhYmxlJyxcbiAgICAgICAgICAgICdqcXVlcnktdWkvd2lkZ2V0cy9yZXNpemFibGUnXSwgZmFjdG9yeSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdHJ5IHsgalF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5Jyk7IH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgIHRyeSB7IF8gPSByZXF1aXJlKCdsb2Rhc2gnKTsgfSBjYXRjaCAoZSkge31cbiAgICAgICAgdHJ5IHsgR3JpZFN0YWNrVUkgPSByZXF1aXJlKCdncmlkc3RhY2snKTsgfSBjYXRjaCAoZSkge31cbiAgICAgICAgZmFjdG9yeShqUXVlcnksIF8sIEdyaWRTdGFja1VJKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmYWN0b3J5KGpRdWVyeSwgXywgR3JpZFN0YWNrVUkpO1xuICAgIH1cbn0pKGZ1bmN0aW9uKCQsIF8sIEdyaWRTdGFja1VJKSB7XG5cbiAgICB2YXIgc2NvcGUgPSB3aW5kb3c7XG5cbiAgICAvKipcbiAgICAqIEBjbGFzcyBKUXVlcnlVSUdyaWRTdGFja0RyYWdEcm9wUGx1Z2luXG4gICAgKiBqUXVlcnkgVUkgaW1wbGVtZW50YXRpb24gb2YgZHJhZyduJ2Ryb3AgZ3JpZHN0YWNrIHBsdWdpbi5cbiAgICAqL1xuICAgIGZ1bmN0aW9uIEpRdWVyeVVJR3JpZFN0YWNrRHJhZ0Ryb3BQbHVnaW4oZ3JpZCkge1xuICAgICAgICBHcmlkU3RhY2tVSS5HcmlkU3RhY2tEcmFnRHJvcFBsdWdpbi5jYWxsKHRoaXMsIGdyaWQpO1xuICAgIH1cblxuICAgIEdyaWRTdGFja1VJLkdyaWRTdGFja0RyYWdEcm9wUGx1Z2luLnJlZ2lzdGVyUGx1Z2luKEpRdWVyeVVJR3JpZFN0YWNrRHJhZ0Ryb3BQbHVnaW4pO1xuXG4gICAgSlF1ZXJ5VUlHcmlkU3RhY2tEcmFnRHJvcFBsdWdpbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdyaWRTdGFja1VJLkdyaWRTdGFja0RyYWdEcm9wUGx1Z2luLnByb3RvdHlwZSk7XG4gICAgSlF1ZXJ5VUlHcmlkU3RhY2tEcmFnRHJvcFBsdWdpbi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBKUXVlcnlVSUdyaWRTdGFja0RyYWdEcm9wUGx1Z2luO1xuXG4gICAgSlF1ZXJ5VUlHcmlkU3RhY2tEcmFnRHJvcFBsdWdpbi5wcm90b3R5cGUucmVzaXphYmxlID0gZnVuY3Rpb24oZWwsIG9wdHMpIHtcbiAgICAgICAgZWwgPSAkKGVsKTtcbiAgICAgICAgaWYgKG9wdHMgPT09ICdkaXNhYmxlJyB8fCBvcHRzID09PSAnZW5hYmxlJykge1xuICAgICAgICAgICAgZWwucmVzaXphYmxlKG9wdHMpO1xuICAgICAgICB9IGVsc2UgaWYgKG9wdHMgPT09ICdvcHRpb24nKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gYXJndW1lbnRzWzJdO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gYXJndW1lbnRzWzNdO1xuICAgICAgICAgICAgZWwucmVzaXphYmxlKG9wdHMsIGtleSwgdmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWwucmVzaXphYmxlKF8uZXh0ZW5kKHt9LCB0aGlzLmdyaWQub3B0cy5yZXNpemFibGUsIHtcbiAgICAgICAgICAgICAgICBzdGFydDogb3B0cy5zdGFydCB8fCBmdW5jdGlvbigpIHt9LFxuICAgICAgICAgICAgICAgIHN0b3A6IG9wdHMuc3RvcCB8fCBmdW5jdGlvbigpIHt9LFxuICAgICAgICAgICAgICAgIHJlc2l6ZTogb3B0cy5yZXNpemUgfHwgZnVuY3Rpb24oKSB7fVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBKUXVlcnlVSUdyaWRTdGFja0RyYWdEcm9wUGx1Z2luLnByb3RvdHlwZS5kcmFnZ2FibGUgPSBmdW5jdGlvbihlbCwgb3B0cykge1xuICAgICAgICBlbCA9ICQoZWwpO1xuICAgICAgICBpZiAob3B0cyA9PT0gJ2Rpc2FibGUnIHx8IG9wdHMgPT09ICdlbmFibGUnKSB7XG4gICAgICAgICAgICBlbC5kcmFnZ2FibGUob3B0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbC5kcmFnZ2FibGUoXy5leHRlbmQoe30sIHRoaXMuZ3JpZC5vcHRzLmRyYWdnYWJsZSwge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5tZW50OiB0aGlzLmdyaWQub3B0cy5pc05lc3RlZCA/IHRoaXMuZ3JpZC5jb250YWluZXIucGFyZW50KCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIHN0YXJ0OiBvcHRzLnN0YXJ0IHx8IGZ1bmN0aW9uKCkge30sXG4gICAgICAgICAgICAgICAgc3RvcDogb3B0cy5zdG9wIHx8IGZ1bmN0aW9uKCkge30sXG4gICAgICAgICAgICAgICAgZHJhZzogb3B0cy5kcmFnIHx8IGZ1bmN0aW9uKCkge31cbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgSlF1ZXJ5VUlHcmlkU3RhY2tEcmFnRHJvcFBsdWdpbi5wcm90b3R5cGUuZHJvcHBhYmxlID0gZnVuY3Rpb24oZWwsIG9wdHMpIHtcbiAgICAgICAgZWwgPSAkKGVsKTtcbiAgICAgICAgaWYgKG9wdHMgPT09ICdkaXNhYmxlJyB8fCBvcHRzID09PSAnZW5hYmxlJykge1xuICAgICAgICAgICAgZWwuZHJvcHBhYmxlKG9wdHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWwuZHJvcHBhYmxlKHtcbiAgICAgICAgICAgICAgICBhY2NlcHQ6IG9wdHMuYWNjZXB0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgSlF1ZXJ5VUlHcmlkU3RhY2tEcmFnRHJvcFBsdWdpbi5wcm90b3R5cGUuaXNEcm9wcGFibGUgPSBmdW5jdGlvbihlbCwgb3B0cykge1xuICAgICAgICBlbCA9ICQoZWwpO1xuICAgICAgICByZXR1cm4gQm9vbGVhbihlbC5kYXRhKCdkcm9wcGFibGUnKSk7XG4gICAgfTtcblxuICAgIEpRdWVyeVVJR3JpZFN0YWNrRHJhZ0Ryb3BQbHVnaW4ucHJvdG90eXBlLm9uID0gZnVuY3Rpb24oZWwsIGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgJChlbCkub24oZXZlbnROYW1lLCBjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICByZXR1cm4gSlF1ZXJ5VUlHcmlkU3RhY2tEcmFnRHJvcFBsdWdpbjtcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2dyaWRzdGFjay9zcmMvZ3JpZHN0YWNrLmpRdWVyeVVJLmpzIiwiLy9pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xyXG5pbXBvcnQgeyB3aWRnZXRzLCBXaWRnZXRzRGF0YSB9IGZyb20gXCIuL01vZGVsL015V29ya3NwYWNlTW9kZWxcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5leHBvcnQgbW9kdWxlIE15V29ya1NwYWNlU2NyaXB0IHtcclxuICAgIGV4cG9ydCBjbGFzcyBNeVdvcmtTcGFjZUNvbnRyb2xsZXIge1xyXG5cclxuICAgICAgICBwdWJsaWMgdGlsZUluZm86IEtub2Nrb3V0T2JzZXJ2YWJsZUFycmF5PHdpZGdldHM+ID0ga28ub2JzZXJ2YWJsZUFycmF5KFtdKTtcclxuICAgICAgICBwdWJsaWMgd2lkZ2V0czogS25vY2tvdXRPYnNlcnZhYmxlQXJyYXk8d2lkZ2V0cz4gPSBrby5vYnNlcnZhYmxlQXJyYXkoW10pO1xyXG4gICAgICAgIHB1YmxpYyB3aWRnZXREYXRhOiBLbm9ja291dE9ic2VydmFibGU8V2lkZ2V0c0RhdGE+ID0ga28ub2JzZXJ2YWJsZShudWxsKTtcclxuICAgICAgICBwdWJsaWMgdGlsZURhdGE6IEtub2Nrb3V0Q29tcHV0ZWRGdW5jdGlvbnM8c3RyaW5nPiA9IG51bGw7XHJcbiAgICAgICAgcHVibGljIHRoaW5nID0ga28ub2JzZXJ2YWJsZSgnJyk7XHJcblxyXG4gICAgICAgIHB1YmxpYyBTdHlsZWZpbGVzYWRkZWQ6c3RyaW5nO1xyXG4gICAgICAgIHB1YmxpYyBTY3JpcHRmaWxlc2FkZGVkOnN0cmluZztcclxuICAgICAgICBjb25zdHJ1Y3Rvcihfd2lkZ2V0czogYW55KSB7XHJcbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuU3R5bGVmaWxlc2FkZGVkID0gXCJcIjtcclxuICAgICAgICAgICAgdGhpcy5TY3JpcHRmaWxlc2FkZGVkID0gXCJcIjtcclxuICAgICAgICAgICAgLy8gdGhpcy50aWxlRGF0YSA9IGtvLmNvbXB1dGVkKHRoaXMuR2V0VGlsZURhdGEpXHJcbiAgICAgICAgICAgIC8va28ubWFwcGluZy5mcm9tSlModGhpcy5teXdpZGdldHMsIF93aWRnZXRzKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJwYXNzZWQgd2lkZ2V0cyBpbmZvIDogXCIgKyBKU09OLnN0cmluZ2lmeShfd2lkZ2V0cykpO1xyXG4gICAgICAgICAgICBpZiAoX3dpZGdldHMgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIC8vbGV0IHRlc3Rfd2lkZ2V0ID0gbmV3IHdpZGdldHMoMSwxLCA0LCA0KTtcclxuICAgICAgICAgICAgICAgIF93aWRnZXRzLmZvckVhY2gociA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudGlsZUluZm8ucHVzaChuZXcgd2lkZ2V0cyhyLlRpbGVJZCwgci54LCByLnksIHIud2lkdGgsIHIuaGVpZ2h0LCByLlRpbGVEZXNjLCByLmRhdGEsIHIuU2NyaXB0VXJpLCByLlN0eWxlVXJpLCByLlJlYWRVcmksci5FZGl0VXJpKSkpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5teXdpZGdldHMucHVzaCh0ZXN0X3dpZGdldCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJMaXN0IHdlIGhhdmUgbm93IGluc2lkZSBvYmplY3Q6XCIgKyBKU09OLnN0cmluZ2lmeShzZWxmLnRpbGVJbmZvKCkpKVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJudW1iZXIgb2Ygd2lkZ2V0cyA6IFwiICsgc2VsZi50aWxlSW5mbygpLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAvL3NlbGYuSW1wb3J0c1NjcmlwdHNGb3JUaWxlcygpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRpbGVfY291bnRlcjpudW1iZXI9MFxyXG4gICAgICAgICAgICAgICAgc2VsZi50aWxlSW5mbygpLmZvckVhY2goKGl0ZW06IHdpZGdldHMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aWxlX2NvdW50ZXIgPSB0aWxlX2NvdW50ZXIgKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdGF0dXMgPSBzZWxmLk1ha2VUaWxlRGV0YWlsc1JlcXVlc3QoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGlsZV9jb3VudGVyfSBjYWxsIHRvIHRpbGUgOiR7c3RhdHVzfWApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBwdWJsaWMgVGlsZV9Ib3ZlciA9ICh0aWxlSW5mbzogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib24gdGlsZSBob3ZlciBvZiB0aWxlaWQ6XCIgKyB0aWxlSW5mby50aWxlSWQoKSk7XHJcbiAgICAgICAgICAgICQoXCIuc21hcnQtbWVudVwiKS5ob3ZlcihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjc21hcnQtbWVudS0nICsgdGlsZUluZm8udGlsZUlkKCkpLnRvZ2dsZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgcHVibGljIGxvYWRqc2Nzc2ZpbGUgPSAoZmlsZW5hbWUsIGZpbGV0eXBlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChmaWxldHlwZSA9PSBcImpzXCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRKUyhmaWxlbmFtZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZmlsZXR5cGUgPT0gXCJjc3NcIilcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZENTUyhmaWxlbmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBsb2FkQ1NTID0gKGhyZWYpID0+IHtcclxuICAgICAgICAgICAgdmFyIGNzc0xpbmsgPSAkKFwiPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgaHJlZj0nXCIgKyBocmVmICsgXCInPlwiKTtcclxuICAgICAgICAgICAgJChcImhlYWRcIikuYXBwZW5kKGNzc0xpbmspO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGxvYWRKUyA9IChzcmMpID0+IHtcclxuICAgICAgICAgICAgLy8kLmFqYXgoe1xyXG4gICAgICAgICAgICAvLyAgICB1cmw6IHNyYyxcclxuICAgICAgICAgICAgLy8gICAgZGF0YVR5cGU6ICdzY3JpcHQnLFxyXG4gICAgICAgICAgICAvLyAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbiAoeGhyKSB7IHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdPY3AtQXBpbS1TdWJzY3JpcHRpb24tS2V5JywgJ2QwMDJmMDk4NWMzMjQyZGJiZDFmZTczZWI5N2FmZjNlJyk7IH0sXHJcbiAgICAgICAgICAgIC8vICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgLy8gICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgIGNvbnNvbGUubG9nKCdsb2FkZWQgc2NyaXB0cyBmb3IgJylcclxuICAgICAgICAgICAgLy8gICAgfSxcclxuICAgICAgICAgICAgLy8gICAgZXJyb3I6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgIGFsZXJ0KFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgIC8vICAgIH1cclxuICAgICAgICAgICAgLy99KTtcclxuXHJcblxyXG4gICAgICAgICAgICB2YXIganNMaW5rID0gJChcIjxzY3JpcHQgdHlwZT0ndGV4dC9qYXZhc2NyaXB0JyBzcmM9J1wiICsgc3JjICsgXCInPlwiKTtcclxuICAgICAgICAgICAgJChcImhlYWRcIikuYXBwZW5kKGpzTGluayk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjaGVja2xvYWRqc2Nzc2ZpbGUgPSAoZmlsZW5hbWUsIGZpbGV0eXBlKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBmaWxlc2FkZGVkID0gXCJcIiAvL2xpc3Qgb2YgZmlsZXMgYWxyZWFkeSBhZGRlZFxyXG4gICAgICAgICAgICBpZiAoZmlsZXNhZGRlZC5pbmRleE9mKFwiW1wiICsgZmlsZW5hbWUgKyBcIl1cIikgPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGpzY3NzZmlsZShmaWxlbmFtZSwgZmlsZXR5cGUpXHJcbiAgICAgICAgICAgICAgICBmaWxlc2FkZGVkICs9IFwiW1wiICsgZmlsZW5hbWUgKyBcIl1cIiAvL0xpc3Qgb2YgZmlsZXMgYWRkZWQgaW4gdGhlIGZvcm0gXCJbZmlsZW5hbWUxXSxbZmlsZW5hbWUyXSxldGNcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmlsZSBhbHJlYWR5IGFkZGVkIVwiKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEltcG9ydHNTY3JpcHRzRm9yVGlsZXMoKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGlsZUluZm8oKS5mb3JFYWNoKChpdGVtOiB3aWRnZXRzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrbG9hZGpzY3NzZmlsZShpdGVtLnNjcmlwdFVyaSgpLCBcImpzXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja2xvYWRqc2Nzc2ZpbGUoaXRlbS5zdHlsZVVyaSgpLCBcImNzc1wiKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHNldERlbGF5ID0gKGkpID0+IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRlbGF5OlwiICsgaSk7XHJcbiAgICAgICAgICAgICAgICBrZW5kby51aS5wcm9ncmVzcygkKFwiLmdyaWQtc3RhY2staXRlbS1jb250ZW50XCIpLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0sIDUwMDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdldFRpbGVEYXRhID0gKHRpbGVJZDogc3RyaW5nKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgIGxldCB0aWxlRGF0YU9iaiA9IG5ldyBXaWRnZXRzRGF0YSh0aWxlSWQsICcnLCAnJyk7XHJcbiAgICAgICAgICAgIC8vdGlsZURhdGFPYmouVGlsZUlkID0gdGlsZUlkO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlZhbHVlIHBhc3NlZCB0byB0aGlzIGZ1bjpcIiArIHRpbGVJZClcclxuICAgICAgICAgICAgaWYgKHRpbGVJZCA9PT0gbnVsbCB8fCB0aWxlSWQgPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgbGV0IGRhdGE6IGFueSA9IGtvLnRvSlModGlsZURhdGFPYmopO1xyXG5cclxuICAgICAgICAgICAgLy8gIGNvbnNvbGUubG9nKGtvLnRvSlMoc2VsZi50aWxlSW5mbygpKSk7XHJcbiAgICAgICAgICAgIC8vIHNlbGYuc2V0RGVsYXkodGlsZUlkKTtcclxuICAgICAgICAgICAgLy8gIGtlbmRvLnVpLnByb2dyZXNzKCQoXCIjdGlsZS1jb250ZW50X1wiICsgdGlsZUlkKSwgdHJ1ZSk7XHJcblxyXG5cclxuICAgICAgICAgICAgbGV0IG15VHJpZ2dlcjtcclxuICAgICAgICAgICAgTlByb2dyZXNzLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiL0hvbWUvR2V0QVBJVGlsZURhdGEvXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24gKHhocikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBteVRyaWdnZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE5Qcm9ncmVzcy5pbmMoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCA0MDApO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIE5Qcm9ncmVzcy5kb25lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChteVRyaWdnZXIpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiVGlsZUlEOlwiICsgdGlsZUlkKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXNwb25zZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gIGNvbnNvbGUubG9nKFwidXBkYXRlZCBEYXRhIGZvciA6IFwiICsgSlNPTi5zdHJpbmdpZnkoc2VsZi50aWxlSW5mbygpLmZpbHRlcih4ID0+IHgudGlsZUlkKCkgPT09IHRpbGVJZCkuZm9yRWFjaChcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgeCA9PiBjb25zb2xlLmxvZyh4LnksIHgueCwgeC53aWR0aCwgeC5oZWlnaHQsIHgudGl0bGUsIHguZGF0YSkpKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShzZWxmLnRpbGVJbmZvKCkuZmlsdGVyKHggPT4geC50aWxlSWQoKSA9PT0gdGlsZUlkKSkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKFwiTG9kYXNoIENoYW5nZXM6XCIgKyBKU09OLnN0cmluZ2lmeShzZWxmLnRpbGVJbmZvKCkpKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnRpbGVJbmZvKCkuZm9yRWFjaCgoaXRlbTogd2lkZ2V0cykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS50aWxlSWQoKSA9PT0gdGlsZUlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5kYXRhKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgTWFrZVRpbGVEZXRhaWxzUmVxdWVzdCA9IGFzeW5jICh0aWxlSW5mbzogd2lkZ2V0cykgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5DYWxsU2NyaXB0UHJvbWlzZSh0aWxlSW5mby5zY3JpcHRVcmkoKSwgJ2pzJywgdGlsZUluZm8udGlsZUlkKCkpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQ2FsbFN0eWxlUHJvbWlzZSh0aWxlSW5mby5zdHlsZVVyaSgpLCAnY3NzJywgdGlsZUluZm8udGlsZUlkKCkpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQ2FsbERhdGFQcm9taXNlKHRpbGVJbmZvKVxyXG4gICAgICAgICAgICAgICAgICAgIF0pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RoZXJlIHdhcyBhbiBlcnJvciBsb2FkaW5nIGZvciB0aGlzIHRpbGUnK2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBDYWxsU2NyaXB0UHJvbWlzZSA9ICh1cmw6IHN0cmluZywgdHlwZTogc3RyaW5nLCB0aWxlSWQ6c3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+ID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5zY3JpcHRmaWxlc2FkZGVkID0gXCJcIiAvL2xpc3Qgb2YgZmlsZXMgYWxyZWFkeSBhZGRlZFxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuU2NyaXB0ZmlsZXNhZGRlZC5pbmRleE9mKFwiW1wiICsgdXJsICsgXCJdXCIpID09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLmxvYWRqc2Nzc2ZpbGUodXJsLCB0eXBlKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuU2NyaXB0ZmlsZXNhZGRlZCArPSBcIltcIiArIHVybCArIFwiXVwiIC8vTGlzdCBvZiBmaWxlcyBhZGRlZCBpbiB0aGUgZm9ybSBcIltmaWxlbmFtZTFdLFtmaWxlbmFtZTJdLGV0Y1wiXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9hZGluZyBKYXZhc2NyaXB0cyA6IFwiICsgdXJsICsgXCIgICBvZiB0eXBlOlwiICsgdHlwZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdzY3JpcHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcIi9Ib21lL0dldEFwaVNjcmlwdC9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgJ3VybCc6IHVybCwgJ3R5cGUnOiB0eXBlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2JlZm9yZVNlbmQ6IGZ1bmN0aW9uICgpIHsgJChcIiNsb2FkaW5nLXByb2dyZXNzX1wiICsgdGlsZUlkKS5zaG93KCk7IH0sIC8vIDxTaG93IE92ZXJMYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzZnVsbHkgbG9hZGVkIHNjcmlwdHMuLicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjbG9hZGluZy1wcm9ncmVzc19cIiArIHRpbGVJZCkuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29tcGxldGU6IGZ1bmN0aW9uICgpIHsgJChcIiNsb2FkaW5nLXByb2dyZXNzX1wiICsgdGlsZUlkKS5oaWRlKCk7IH0gLy88SGlkZSBPdmVybGF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4ocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmlsZSBhbHJlYWR5IGFkZGVkIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGlzIGVycm9yIGhhcHBlbnMgd2hlbiBsb2FkaW5nIGEgZGF0YTogXCIgKyBlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIENhbGxEYXRhUHJvbWlzZSA9ICh0aWxlSW5mbzogd2lkZ2V0cyk6IFByb21pc2U8c3RyaW5nPiA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPihyZXNvbHZlID0+IHsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG15VHJpZ2dlcjtcclxuICAgICAgICAgICAgICAgICAgICBOUHJvZ3Jlc3Muc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCIvSG9tZS9HZXRBUElUaWxlRGF0YS9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyAncmVzb3VyY2UnOiB0aWxlSW5mby5yZWFkVXJpKCkgfSxcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24gKHhocikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNsb2FkaW5nLXByb2dyZXNzX1wiICsgdGlsZUluZm8udGlsZUlkKCkpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15VHJpZ2dlciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOUHJvZ3Jlc3MuaW5jKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCA0MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTlByb2dyZXNzLmRvbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobXlUcmlnZ2VyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjbG9hZGluZy1wcm9ncmVzc19cIiArIHRpbGVJbmZvLnRpbGVJZCgpKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLlN1Y2Nlc3MpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlsZUluZm8uZGF0YShyZXNwb25zZS5NZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZhaWxlZCB0byBnZXQgdGlsZSBkYXRhIHJlc3BvbnNlIG9yIGl0cyBlbXB0eS4uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBDYWxsU3R5bGVQcm9taXNlICA9ICh1cmw6IHN0cmluZyx0eXBlOnN0cmluZyx0aWxlSWQ6c3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+ID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuU3R5bGVmaWxlc2FkZGVkLmluZGV4T2YoXCJbXCIgKyB1cmwgKyBcIl1cIikgPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5sb2FkanNjc3NmaWxlKHVybCwgdHlwZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuU3R5bGVmaWxlc2FkZGVkICs9IFwiW1wiICsgdXJsICsgXCJdXCIgLy9MaXN0IG9mIGZpbGVzIGFkZGVkIGluIHRoZSBmb3JtIFwiW2ZpbGVuYW1lMV0sW2ZpbGVuYW1lMl0sZXRjXCJcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvYWRpbmcgc3R5bGVzOiBcIiArIHVybCArIFwiICAgb2YgdHlwZTpcIiArIHR5cGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCIvSG9tZS9HZXRBcGlTY3JpcHQvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTonaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgJ3VybCc6IHVybCwgJ3R5cGUnOiB0eXBlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uICgpIHsgJChcIiNsb2FkaW5nLXByb2dyZXNzX1wiICsgdGlsZUlkKS5zaG93KCk7IH0sIC8vIDxTaG93IE92ZXJMYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiaGVhZFwiKS5hcHBlbmQoYCAgPHN0eWxlPiAke3Jlc3BvbnNlfSA8L3N0eWxlPmApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7ICQoXCIjbG9hZGluZy1wcm9ncmVzc19cIiArIHRpbGVJZCkuaGlkZSgpOyB9IC8vPEhpZGUgT3ZlcmxheVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPihyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZpbGUgYWxyZWFkeSBhZGRlZCFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9yZXR1cm4gJ3RydWUnO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBwdWJsaWMgRWRpdFRpbGUgPSAodGlsZUluZm86IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGlsZUluZm8ucmVhZFVyaSgpKSArIFwiaXMgcGFzc2VkIGZvciBFZGl0aW5nLi4uXCIpO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4ocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG15VHJpZ2dlcjtcclxuICAgICAgICAgICAgICAgICAgICBOUHJvZ3Jlc3Muc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCIvSG9tZS9HZXRBUElFZGl0VGlsZURhdGEvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgJ3Jlc291cmNlJzogdGlsZUluZm8uZWRpdFVyaSgpIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbiAoeGhyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyQoXCIjbG9hZGluZy1wcm9ncmVzc19cIiArIHRpbGVJbmZvLnRpbGVJZCgpKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBteVRyaWdnZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTlByb2dyZXNzLmluYygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgNDAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5Qcm9ncmVzcy5kb25lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKG15VHJpZ2dlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyQoXCIjbG9hZGluZy1wcm9ncmVzc19cIiArIHRpbGVJbmZvLnRpbGVJZCgpKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLlN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWxlSW5mby5kYXRhKHJlc3BvbnNlLk1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50VGlsZUlkJywgSlNPTi5zdHJpbmdpZnkodGlsZUluZm8udGlsZUlkKCkpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZhaWxlZCB0byBnZXQgdGlsZSBkYXRhIHJlc3BvbnNlIG9yIGl0cyBlbXB0eS4uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG59XHJcbiAgICBcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTXlXb3Jrc3BhY2UvTXlXb3Jrc3BhY2UudHMiLCJleHBvcnQgY2xhc3Mgd2lkZ2V0cyB7XHJcbiAgICB0aWxlSWQ6IEtub2Nrb3V0T2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG4gICAgeDogS25vY2tvdXRPYnNlcnZhYmxlPG51bWJlcj47XHJcbiAgICB5OiBLbm9ja291dE9ic2VydmFibGU8bnVtYmVyPjtcclxuICAgIHdpZHRoOiBLbm9ja291dE9ic2VydmFibGU8bnVtYmVyPjtcclxuICAgIGhlaWdodDogS25vY2tvdXRPYnNlcnZhYmxlPG51bWJlcj47XHJcbiAgICBhdXRvX3Bvc2l0aW9uOiBLbm9ja291dE9ic2VydmFibGU8Ym9vbGVhbj47XHJcbiAgICB0aXRsZTogS25vY2tvdXRPYnNlcnZhYmxlPHN0cmluZz47XHJcbiAgICB0aWxlRGF0YTogS25vY2tvdXRPYnNlcnZhYmxlPHN0cmluZz47XHJcbiAgICBkYXRhOiBLbm9ja291dE9ic2VydmFibGU8c3RyaW5nPjtcclxuICAgIHNjcmlwdFVyaTogS25vY2tvdXRPYnNlcnZhYmxlPHN0cmluZz47XHJcbiAgICBzdHlsZVVyaTogS25vY2tvdXRPYnNlcnZhYmxlPHN0cmluZz47XHJcbiAgICByZWFkVXJpOiBLbm9ja291dE9ic2VydmFibGU8c3RyaW5nPjtcclxuICAgIGVkaXRVcmk6IEtub2Nrb3V0T2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG5cclxuICAgIC8vIGlubmVyd2lkZ2V0czogS25vY2tvdXRPYnNlcnZhYmxlQXJyYXk8d2lkZ2V0cz47XHJcbiAgICBjb25zdHJ1Y3Rvcih0aWxlSWQ6IHN0cmluZywgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCB0aXRsZTogc3RyaW5nLCBkYXRhOiBzdHJpbmcsIHNjcmlwdFVyaTogc3RyaW5nLCBzdHlsZVVyaTogc3RyaW5nLCBkYXRhVXJpOiBzdHJpbmcsZWRpdHVyaTpzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnRpbGVJZCA9IGtvLm9ic2VydmFibGUodGlsZUlkKTtcclxuICAgICAgICB0aGlzLnggPSBrby5vYnNlcnZhYmxlKHgpO1xyXG4gICAgICAgIHRoaXMueSA9IGtvLm9ic2VydmFibGUoeSk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IGtvLm9ic2VydmFibGUod2lkdGgpO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0ga28ub2JzZXJ2YWJsZShoZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuYXV0b19wb3NpdGlvbiA9IGtvLm9ic2VydmFibGUoZmFsc2UpO1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSBrby5vYnNlcnZhYmxlKHRpdGxlKTtcclxuICAgICAgICB0aGlzLmRhdGEgPSBrby5vYnNlcnZhYmxlKGRhdGEpO1xyXG4gICAgICAgIHRoaXMuc2NyaXB0VXJpID0ga28ub2JzZXJ2YWJsZShzY3JpcHRVcmkpO1xyXG4gICAgICAgIHRoaXMuc3R5bGVVcmkgPSBrby5vYnNlcnZhYmxlKHN0eWxlVXJpKTtcclxuICAgICAgICB0aGlzLnJlYWRVcmkgPSBrby5vYnNlcnZhYmxlKGRhdGFVcmkpO1xyXG4gICAgICAgIHRoaXMuZWRpdFVyaSA9IGtvLm9ic2VydmFibGUoZWRpdHVyaSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFdpZGdldHNEYXRhIHtcclxuICAgIHB1YmxpYyBUaWxlRGF0YTogS25vY2tvdXRPYnNlcnZhYmxlPHN0cmluZz47XHJcbiAgICBwdWJsaWMgVGlsZUlkOiBLbm9ja291dE9ic2VydmFibGU8c3RyaW5nPjtcclxuICAgIHB1YmxpYyBVc2VySWQ6IEtub2Nrb3V0T2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG4gICAgcHVibGljXHJcbiAgICBjb25zdHJ1Y3Rvcih0aWxlSWQ6IHN0cmluZywgdGlsZURhdGE6IHN0cmluZywgdXNlcklkOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLlRpbGVJZCA9IGtvLm9ic2VydmFibGUodGlsZUlkKSxcclxuICAgICAgICAgICAgdGhpcy5UaWxlRGF0YSA9IGtvLm9ic2VydmFibGUodGlsZURhdGEpLFxyXG4gICAgICAgICAgICB0aGlzLlVzZXJJZCA9IGtvLm9ic2VydmFibGUodXNlcklkKVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9NeVdvcmtzcGFjZS9Nb2RlbC9NeVdvcmtzcGFjZU1vZGVsLnRzIiwiLyohXG4gKiBqUXVlcnkgVUkgVGFiYmFibGUgMS4xMi4xXG4gKiBodHRwOi8vanF1ZXJ5dWkuY29tXG4gKlxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIGh0dHA6Ly9qcXVlcnkub3JnL2xpY2Vuc2VcbiAqL1xuXG4vLz4+bGFiZWw6IDp0YWJiYWJsZSBTZWxlY3RvclxuLy8+Pmdyb3VwOiBDb3JlXG4vLz4+ZGVzY3JpcHRpb246IFNlbGVjdHMgZWxlbWVudHMgd2hpY2ggY2FuIGJlIHRhYmJlZCB0by5cbi8vPj5kb2NzOiBodHRwOi8vYXBpLmpxdWVyeXVpLmNvbS90YWJiYWJsZS1zZWxlY3Rvci9cblxuKCBmdW5jdGlvbiggZmFjdG9yeSApIHtcblx0aWYgKCB0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCApIHtcblxuXHRcdC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cblx0XHRkZWZpbmUoIFsgXCJqcXVlcnlcIiwgXCIuL3ZlcnNpb25cIiwgXCIuL2ZvY3VzYWJsZVwiIF0sIGZhY3RvcnkgKTtcblx0fSBlbHNlIHtcblxuXHRcdC8vIEJyb3dzZXIgZ2xvYmFsc1xuXHRcdGZhY3RvcnkoIGpRdWVyeSApO1xuXHR9XG59ICggZnVuY3Rpb24oICQgKSB7XG5cbnJldHVybiAkLmV4dGVuZCggJC5leHByWyBcIjpcIiBdLCB7XG5cdHRhYmJhYmxlOiBmdW5jdGlvbiggZWxlbWVudCApIHtcblx0XHR2YXIgdGFiSW5kZXggPSAkLmF0dHIoIGVsZW1lbnQsIFwidGFiaW5kZXhcIiApLFxuXHRcdFx0aGFzVGFiaW5kZXggPSB0YWJJbmRleCAhPSBudWxsO1xuXHRcdHJldHVybiAoICFoYXNUYWJpbmRleCB8fCB0YWJJbmRleCA+PSAwICkgJiYgJC51aS5mb2N1c2FibGUoIGVsZW1lbnQsIGhhc1RhYmluZGV4ICk7XG5cdH1cbn0gKTtcblxufSApICk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9qcXVlcnktdWkvdWkvdGFiYmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IG1CMmxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyohXG4gKiBqUXVlcnkgVUkgUmVzaXphYmxlIDEuMTIuMVxuICogaHR0cDovL2pxdWVyeXVpLmNvbVxuICpcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBodHRwOi8vanF1ZXJ5Lm9yZy9saWNlbnNlXG4gKi9cblxuLy8+PmxhYmVsOiBSZXNpemFibGVcbi8vPj5ncm91cDogSW50ZXJhY3Rpb25zXG4vLz4+ZGVzY3JpcHRpb246IEVuYWJsZXMgcmVzaXplIGZ1bmN0aW9uYWxpdHkgZm9yIGFueSBlbGVtZW50LlxuLy8+PmRvY3M6IGh0dHA6Ly9hcGkuanF1ZXJ5dWkuY29tL3Jlc2l6YWJsZS9cbi8vPj5kZW1vczogaHR0cDovL2pxdWVyeXVpLmNvbS9yZXNpemFibGUvXG4vLz4+Y3NzLnN0cnVjdHVyZTogLi4vLi4vdGhlbWVzL2Jhc2UvY29yZS5jc3Ncbi8vPj5jc3Muc3RydWN0dXJlOiAuLi8uLi90aGVtZXMvYmFzZS9yZXNpemFibGUuY3NzXG4vLz4+Y3NzLnRoZW1lOiAuLi8uLi90aGVtZXMvYmFzZS90aGVtZS5jc3NcblxuKCBmdW5jdGlvbiggZmFjdG9yeSApIHtcblx0aWYgKCB0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCApIHtcblxuXHRcdC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cblx0XHRkZWZpbmUoIFtcblx0XHRcdFwianF1ZXJ5XCIsXG5cdFx0XHRcIi4vbW91c2VcIixcblx0XHRcdFwiLi4vZGlzYWJsZS1zZWxlY3Rpb25cIixcblx0XHRcdFwiLi4vcGx1Z2luXCIsXG5cdFx0XHRcIi4uL3ZlcnNpb25cIixcblx0XHRcdFwiLi4vd2lkZ2V0XCJcblx0XHRdLCBmYWN0b3J5ICk7XG5cdH0gZWxzZSB7XG5cblx0XHQvLyBCcm93c2VyIGdsb2JhbHNcblx0XHRmYWN0b3J5KCBqUXVlcnkgKTtcblx0fVxufSggZnVuY3Rpb24oICQgKSB7XG5cbiQud2lkZ2V0KCBcInVpLnJlc2l6YWJsZVwiLCAkLnVpLm1vdXNlLCB7XG5cdHZlcnNpb246IFwiMS4xMi4xXCIsXG5cdHdpZGdldEV2ZW50UHJlZml4OiBcInJlc2l6ZVwiLFxuXHRvcHRpb25zOiB7XG5cdFx0YWxzb1Jlc2l6ZTogZmFsc2UsXG5cdFx0YW5pbWF0ZTogZmFsc2UsXG5cdFx0YW5pbWF0ZUR1cmF0aW9uOiBcInNsb3dcIixcblx0XHRhbmltYXRlRWFzaW5nOiBcInN3aW5nXCIsXG5cdFx0YXNwZWN0UmF0aW86IGZhbHNlLFxuXHRcdGF1dG9IaWRlOiBmYWxzZSxcblx0XHRjbGFzc2VzOiB7XG5cdFx0XHRcInVpLXJlc2l6YWJsZS1zZVwiOiBcInVpLWljb24gdWktaWNvbi1ncmlwc21hbGwtZGlhZ29uYWwtc2VcIlxuXHRcdH0sXG5cdFx0Y29udGFpbm1lbnQ6IGZhbHNlLFxuXHRcdGdob3N0OiBmYWxzZSxcblx0XHRncmlkOiBmYWxzZSxcblx0XHRoYW5kbGVzOiBcImUscyxzZVwiLFxuXHRcdGhlbHBlcjogZmFsc2UsXG5cdFx0bWF4SGVpZ2h0OiBudWxsLFxuXHRcdG1heFdpZHRoOiBudWxsLFxuXHRcdG1pbkhlaWdodDogMTAsXG5cdFx0bWluV2lkdGg6IDEwLFxuXG5cdFx0Ly8gU2VlICM3OTYwXG5cdFx0ekluZGV4OiA5MCxcblxuXHRcdC8vIENhbGxiYWNrc1xuXHRcdHJlc2l6ZTogbnVsbCxcblx0XHRzdGFydDogbnVsbCxcblx0XHRzdG9wOiBudWxsXG5cdH0sXG5cblx0X251bTogZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdHJldHVybiBwYXJzZUZsb2F0KCB2YWx1ZSApIHx8IDA7XG5cdH0sXG5cblx0X2lzTnVtYmVyOiBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0cmV0dXJuICFpc05hTiggcGFyc2VGbG9hdCggdmFsdWUgKSApO1xuXHR9LFxuXG5cdF9oYXNTY3JvbGw6IGZ1bmN0aW9uKCBlbCwgYSApIHtcblxuXHRcdGlmICggJCggZWwgKS5jc3MoIFwib3ZlcmZsb3dcIiApID09PSBcImhpZGRlblwiICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHZhciBzY3JvbGwgPSAoIGEgJiYgYSA9PT0gXCJsZWZ0XCIgKSA/IFwic2Nyb2xsTGVmdFwiIDogXCJzY3JvbGxUb3BcIixcblx0XHRcdGhhcyA9IGZhbHNlO1xuXG5cdFx0aWYgKCBlbFsgc2Nyb2xsIF0gPiAwICkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Ly8gVE9ETzogZGV0ZXJtaW5lIHdoaWNoIGNhc2VzIGFjdHVhbGx5IGNhdXNlIHRoaXMgdG8gaGFwcGVuXG5cdFx0Ly8gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIHRoZSBzY3JvbGwgc2V0LCBzZWUgaWYgaXQncyBwb3NzaWJsZSB0b1xuXHRcdC8vIHNldCB0aGUgc2Nyb2xsXG5cdFx0ZWxbIHNjcm9sbCBdID0gMTtcblx0XHRoYXMgPSAoIGVsWyBzY3JvbGwgXSA+IDAgKTtcblx0XHRlbFsgc2Nyb2xsIF0gPSAwO1xuXHRcdHJldHVybiBoYXM7XG5cdH0sXG5cblx0X2NyZWF0ZTogZnVuY3Rpb24oKSB7XG5cblx0XHR2YXIgbWFyZ2lucyxcblx0XHRcdG8gPSB0aGlzLm9wdGlvbnMsXG5cdFx0XHR0aGF0ID0gdGhpcztcblx0XHR0aGlzLl9hZGRDbGFzcyggXCJ1aS1yZXNpemFibGVcIiApO1xuXG5cdFx0JC5leHRlbmQoIHRoaXMsIHtcblx0XHRcdF9hc3BlY3RSYXRpbzogISEoIG8uYXNwZWN0UmF0aW8gKSxcblx0XHRcdGFzcGVjdFJhdGlvOiBvLmFzcGVjdFJhdGlvLFxuXHRcdFx0b3JpZ2luYWxFbGVtZW50OiB0aGlzLmVsZW1lbnQsXG5cdFx0XHRfcHJvcG9ydGlvbmFsbHlSZXNpemVFbGVtZW50czogW10sXG5cdFx0XHRfaGVscGVyOiBvLmhlbHBlciB8fCBvLmdob3N0IHx8IG8uYW5pbWF0ZSA/IG8uaGVscGVyIHx8IFwidWktcmVzaXphYmxlLWhlbHBlclwiIDogbnVsbFxuXHRcdH0gKTtcblxuXHRcdC8vIFdyYXAgdGhlIGVsZW1lbnQgaWYgaXQgY2Fubm90IGhvbGQgY2hpbGQgbm9kZXNcblx0XHRpZiAoIHRoaXMuZWxlbWVudFsgMCBdLm5vZGVOYW1lLm1hdGNoKCAvXihjYW52YXN8dGV4dGFyZWF8aW5wdXR8c2VsZWN0fGJ1dHRvbnxpbWcpJC9pICkgKSB7XG5cblx0XHRcdHRoaXMuZWxlbWVudC53cmFwKFxuXHRcdFx0XHQkKCBcIjxkaXYgY2xhc3M9J3VpLXdyYXBwZXInIHN0eWxlPSdvdmVyZmxvdzogaGlkZGVuOyc+PC9kaXY+XCIgKS5jc3MoIHtcblx0XHRcdFx0XHRwb3NpdGlvbjogdGhpcy5lbGVtZW50LmNzcyggXCJwb3NpdGlvblwiICksXG5cdFx0XHRcdFx0d2lkdGg6IHRoaXMuZWxlbWVudC5vdXRlcldpZHRoKCksXG5cdFx0XHRcdFx0aGVpZ2h0OiB0aGlzLmVsZW1lbnQub3V0ZXJIZWlnaHQoKSxcblx0XHRcdFx0XHR0b3A6IHRoaXMuZWxlbWVudC5jc3MoIFwidG9wXCIgKSxcblx0XHRcdFx0XHRsZWZ0OiB0aGlzLmVsZW1lbnQuY3NzKCBcImxlZnRcIiApXG5cdFx0XHRcdH0gKVxuXHRcdFx0KTtcblxuXHRcdFx0dGhpcy5lbGVtZW50ID0gdGhpcy5lbGVtZW50LnBhcmVudCgpLmRhdGEoXG5cdFx0XHRcdFwidWktcmVzaXphYmxlXCIsIHRoaXMuZWxlbWVudC5yZXNpemFibGUoIFwiaW5zdGFuY2VcIiApXG5cdFx0XHQpO1xuXG5cdFx0XHR0aGlzLmVsZW1lbnRJc1dyYXBwZXIgPSB0cnVlO1xuXG5cdFx0XHRtYXJnaW5zID0ge1xuXHRcdFx0XHRtYXJnaW5Ub3A6IHRoaXMub3JpZ2luYWxFbGVtZW50LmNzcyggXCJtYXJnaW5Ub3BcIiApLFxuXHRcdFx0XHRtYXJnaW5SaWdodDogdGhpcy5vcmlnaW5hbEVsZW1lbnQuY3NzKCBcIm1hcmdpblJpZ2h0XCIgKSxcblx0XHRcdFx0bWFyZ2luQm90dG9tOiB0aGlzLm9yaWdpbmFsRWxlbWVudC5jc3MoIFwibWFyZ2luQm90dG9tXCIgKSxcblx0XHRcdFx0bWFyZ2luTGVmdDogdGhpcy5vcmlnaW5hbEVsZW1lbnQuY3NzKCBcIm1hcmdpbkxlZnRcIiApXG5cdFx0XHR9O1xuXG5cdFx0XHR0aGlzLmVsZW1lbnQuY3NzKCBtYXJnaW5zICk7XG5cdFx0XHR0aGlzLm9yaWdpbmFsRWxlbWVudC5jc3MoIFwibWFyZ2luXCIsIDAgKTtcblxuXHRcdFx0Ly8gc3VwcG9ydDogU2FmYXJpXG5cdFx0XHQvLyBQcmV2ZW50IFNhZmFyaSB0ZXh0YXJlYSByZXNpemVcblx0XHRcdHRoaXMub3JpZ2luYWxSZXNpemVTdHlsZSA9IHRoaXMub3JpZ2luYWxFbGVtZW50LmNzcyggXCJyZXNpemVcIiApO1xuXHRcdFx0dGhpcy5vcmlnaW5hbEVsZW1lbnQuY3NzKCBcInJlc2l6ZVwiLCBcIm5vbmVcIiApO1xuXG5cdFx0XHR0aGlzLl9wcm9wb3J0aW9uYWxseVJlc2l6ZUVsZW1lbnRzLnB1c2goIHRoaXMub3JpZ2luYWxFbGVtZW50LmNzcygge1xuXHRcdFx0XHRwb3NpdGlvbjogXCJzdGF0aWNcIixcblx0XHRcdFx0em9vbTogMSxcblx0XHRcdFx0ZGlzcGxheTogXCJibG9ja1wiXG5cdFx0XHR9ICkgKTtcblxuXHRcdFx0Ly8gU3VwcG9ydDogSUU5XG5cdFx0XHQvLyBhdm9pZCBJRSBqdW1wIChoYXJkIHNldCB0aGUgbWFyZ2luKVxuXHRcdFx0dGhpcy5vcmlnaW5hbEVsZW1lbnQuY3NzKCBtYXJnaW5zICk7XG5cblx0XHRcdHRoaXMuX3Byb3BvcnRpb25hbGx5UmVzaXplKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5fc2V0dXBIYW5kbGVzKCk7XG5cblx0XHRpZiAoIG8uYXV0b0hpZGUgKSB7XG5cdFx0XHQkKCB0aGlzLmVsZW1lbnQgKVxuXHRcdFx0XHQub24oIFwibW91c2VlbnRlclwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZiAoIG8uZGlzYWJsZWQgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoYXQuX3JlbW92ZUNsYXNzKCBcInVpLXJlc2l6YWJsZS1hdXRvaGlkZVwiICk7XG5cdFx0XHRcdFx0dGhhdC5faGFuZGxlcy5zaG93KCk7XG5cdFx0XHRcdH0gKVxuXHRcdFx0XHQub24oIFwibW91c2VsZWF2ZVwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZiAoIG8uZGlzYWJsZWQgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICggIXRoYXQucmVzaXppbmcgKSB7XG5cdFx0XHRcdFx0XHR0aGF0Ll9hZGRDbGFzcyggXCJ1aS1yZXNpemFibGUtYXV0b2hpZGVcIiApO1xuXHRcdFx0XHRcdFx0dGhhdC5faGFuZGxlcy5oaWRlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0dGhpcy5fbW91c2VJbml0KCk7XG5cdH0sXG5cblx0X2Rlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuXG5cdFx0dGhpcy5fbW91c2VEZXN0cm95KCk7XG5cblx0XHR2YXIgd3JhcHBlcixcblx0XHRcdF9kZXN0cm95ID0gZnVuY3Rpb24oIGV4cCApIHtcblx0XHRcdFx0JCggZXhwIClcblx0XHRcdFx0XHQucmVtb3ZlRGF0YSggXCJyZXNpemFibGVcIiApXG5cdFx0XHRcdFx0LnJlbW92ZURhdGEoIFwidWktcmVzaXphYmxlXCIgKVxuXHRcdFx0XHRcdC5vZmYoIFwiLnJlc2l6YWJsZVwiIClcblx0XHRcdFx0XHQuZmluZCggXCIudWktcmVzaXphYmxlLWhhbmRsZVwiIClcblx0XHRcdFx0XHRcdC5yZW1vdmUoKTtcblx0XHRcdH07XG5cblx0XHQvLyBUT0RPOiBVbndyYXAgYXQgc2FtZSBET00gcG9zaXRpb25cblx0XHRpZiAoIHRoaXMuZWxlbWVudElzV3JhcHBlciApIHtcblx0XHRcdF9kZXN0cm95KCB0aGlzLmVsZW1lbnQgKTtcblx0XHRcdHdyYXBwZXIgPSB0aGlzLmVsZW1lbnQ7XG5cdFx0XHR0aGlzLm9yaWdpbmFsRWxlbWVudC5jc3MoIHtcblx0XHRcdFx0cG9zaXRpb246IHdyYXBwZXIuY3NzKCBcInBvc2l0aW9uXCIgKSxcblx0XHRcdFx0d2lkdGg6IHdyYXBwZXIub3V0ZXJXaWR0aCgpLFxuXHRcdFx0XHRoZWlnaHQ6IHdyYXBwZXIub3V0ZXJIZWlnaHQoKSxcblx0XHRcdFx0dG9wOiB3cmFwcGVyLmNzcyggXCJ0b3BcIiApLFxuXHRcdFx0XHRsZWZ0OiB3cmFwcGVyLmNzcyggXCJsZWZ0XCIgKVxuXHRcdFx0fSApLmluc2VydEFmdGVyKCB3cmFwcGVyICk7XG5cdFx0XHR3cmFwcGVyLnJlbW92ZSgpO1xuXHRcdH1cblxuXHRcdHRoaXMub3JpZ2luYWxFbGVtZW50LmNzcyggXCJyZXNpemVcIiwgdGhpcy5vcmlnaW5hbFJlc2l6ZVN0eWxlICk7XG5cdFx0X2Rlc3Ryb3koIHRoaXMub3JpZ2luYWxFbGVtZW50ICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRfc2V0T3B0aW9uOiBmdW5jdGlvbigga2V5LCB2YWx1ZSApIHtcblx0XHR0aGlzLl9zdXBlcigga2V5LCB2YWx1ZSApO1xuXG5cdFx0c3dpdGNoICgga2V5ICkge1xuXHRcdGNhc2UgXCJoYW5kbGVzXCI6XG5cdFx0XHR0aGlzLl9yZW1vdmVIYW5kbGVzKCk7XG5cdFx0XHR0aGlzLl9zZXR1cEhhbmRsZXMoKTtcblx0XHRcdGJyZWFrO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH0sXG5cblx0X3NldHVwSGFuZGxlczogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG8gPSB0aGlzLm9wdGlvbnMsIGhhbmRsZSwgaSwgbiwgaG5hbWUsIGF4aXMsIHRoYXQgPSB0aGlzO1xuXHRcdHRoaXMuaGFuZGxlcyA9IG8uaGFuZGxlcyB8fFxuXHRcdFx0KCAhJCggXCIudWktcmVzaXphYmxlLWhhbmRsZVwiLCB0aGlzLmVsZW1lbnQgKS5sZW5ndGggP1xuXHRcdFx0XHRcImUscyxzZVwiIDoge1xuXHRcdFx0XHRcdG46IFwiLnVpLXJlc2l6YWJsZS1uXCIsXG5cdFx0XHRcdFx0ZTogXCIudWktcmVzaXphYmxlLWVcIixcblx0XHRcdFx0XHRzOiBcIi51aS1yZXNpemFibGUtc1wiLFxuXHRcdFx0XHRcdHc6IFwiLnVpLXJlc2l6YWJsZS13XCIsXG5cdFx0XHRcdFx0c2U6IFwiLnVpLXJlc2l6YWJsZS1zZVwiLFxuXHRcdFx0XHRcdHN3OiBcIi51aS1yZXNpemFibGUtc3dcIixcblx0XHRcdFx0XHRuZTogXCIudWktcmVzaXphYmxlLW5lXCIsXG5cdFx0XHRcdFx0bnc6IFwiLnVpLXJlc2l6YWJsZS1ud1wiXG5cdFx0XHRcdH0gKTtcblxuXHRcdHRoaXMuX2hhbmRsZXMgPSAkKCk7XG5cdFx0aWYgKCB0aGlzLmhhbmRsZXMuY29uc3RydWN0b3IgPT09IFN0cmluZyApIHtcblxuXHRcdFx0aWYgKCB0aGlzLmhhbmRsZXMgPT09IFwiYWxsXCIgKSB7XG5cdFx0XHRcdHRoaXMuaGFuZGxlcyA9IFwibixlLHMsdyxzZSxzdyxuZSxud1wiO1xuXHRcdFx0fVxuXG5cdFx0XHRuID0gdGhpcy5oYW5kbGVzLnNwbGl0KCBcIixcIiApO1xuXHRcdFx0dGhpcy5oYW5kbGVzID0ge307XG5cblx0XHRcdGZvciAoIGkgPSAwOyBpIDwgbi5sZW5ndGg7IGkrKyApIHtcblxuXHRcdFx0XHRoYW5kbGUgPSAkLnRyaW0oIG5bIGkgXSApO1xuXHRcdFx0XHRobmFtZSA9IFwidWktcmVzaXphYmxlLVwiICsgaGFuZGxlO1xuXHRcdFx0XHRheGlzID0gJCggXCI8ZGl2PlwiICk7XG5cdFx0XHRcdHRoaXMuX2FkZENsYXNzKCBheGlzLCBcInVpLXJlc2l6YWJsZS1oYW5kbGUgXCIgKyBobmFtZSApO1xuXG5cdFx0XHRcdGF4aXMuY3NzKCB7IHpJbmRleDogby56SW5kZXggfSApO1xuXG5cdFx0XHRcdHRoaXMuaGFuZGxlc1sgaGFuZGxlIF0gPSBcIi51aS1yZXNpemFibGUtXCIgKyBoYW5kbGU7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC5hcHBlbmQoIGF4aXMgKTtcblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdHRoaXMuX3JlbmRlckF4aXMgPSBmdW5jdGlvbiggdGFyZ2V0ICkge1xuXG5cdFx0XHR2YXIgaSwgYXhpcywgcGFkUG9zLCBwYWRXcmFwcGVyO1xuXG5cdFx0XHR0YXJnZXQgPSB0YXJnZXQgfHwgdGhpcy5lbGVtZW50O1xuXG5cdFx0XHRmb3IgKCBpIGluIHRoaXMuaGFuZGxlcyApIHtcblxuXHRcdFx0XHRpZiAoIHRoaXMuaGFuZGxlc1sgaSBdLmNvbnN0cnVjdG9yID09PSBTdHJpbmcgKSB7XG5cdFx0XHRcdFx0dGhpcy5oYW5kbGVzWyBpIF0gPSB0aGlzLmVsZW1lbnQuY2hpbGRyZW4oIHRoaXMuaGFuZGxlc1sgaSBdICkuZmlyc3QoKS5zaG93KCk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoIHRoaXMuaGFuZGxlc1sgaSBdLmpxdWVyeSB8fCB0aGlzLmhhbmRsZXNbIGkgXS5ub2RlVHlwZSApIHtcblx0XHRcdFx0XHR0aGlzLmhhbmRsZXNbIGkgXSA9ICQoIHRoaXMuaGFuZGxlc1sgaSBdICk7XG5cdFx0XHRcdFx0dGhpcy5fb24oIHRoaXMuaGFuZGxlc1sgaSBdLCB7IFwibW91c2Vkb3duXCI6IHRoYXQuX21vdXNlRG93biB9ICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoIHRoaXMuZWxlbWVudElzV3JhcHBlciAmJlxuXHRcdFx0XHRcdFx0dGhpcy5vcmlnaW5hbEVsZW1lbnRbIDAgXVxuXHRcdFx0XHRcdFx0XHQubm9kZU5hbWVcblx0XHRcdFx0XHRcdFx0Lm1hdGNoKCAvXih0ZXh0YXJlYXxpbnB1dHxzZWxlY3R8YnV0dG9uKSQvaSApICkge1xuXHRcdFx0XHRcdGF4aXMgPSAkKCB0aGlzLmhhbmRsZXNbIGkgXSwgdGhpcy5lbGVtZW50ICk7XG5cblx0XHRcdFx0XHRwYWRXcmFwcGVyID0gL3N3fG5lfG53fHNlfG58cy8udGVzdCggaSApID9cblx0XHRcdFx0XHRcdGF4aXMub3V0ZXJIZWlnaHQoKSA6XG5cdFx0XHRcdFx0XHRheGlzLm91dGVyV2lkdGgoKTtcblxuXHRcdFx0XHRcdHBhZFBvcyA9IFsgXCJwYWRkaW5nXCIsXG5cdFx0XHRcdFx0XHQvbmV8bnd8bi8udGVzdCggaSApID8gXCJUb3BcIiA6XG5cdFx0XHRcdFx0XHQvc2V8c3d8cy8udGVzdCggaSApID8gXCJCb3R0b21cIiA6XG5cdFx0XHRcdFx0XHQvXmUkLy50ZXN0KCBpICkgPyBcIlJpZ2h0XCIgOiBcIkxlZnRcIiBdLmpvaW4oIFwiXCIgKTtcblxuXHRcdFx0XHRcdHRhcmdldC5jc3MoIHBhZFBvcywgcGFkV3JhcHBlciApO1xuXG5cdFx0XHRcdFx0dGhpcy5fcHJvcG9ydGlvbmFsbHlSZXNpemUoKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuX2hhbmRsZXMgPSB0aGlzLl9oYW5kbGVzLmFkZCggdGhpcy5oYW5kbGVzWyBpIF0gKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Ly8gVE9ETzogbWFrZSByZW5kZXJBeGlzIGEgcHJvdG90eXBlIGZ1bmN0aW9uXG5cdFx0dGhpcy5fcmVuZGVyQXhpcyggdGhpcy5lbGVtZW50ICk7XG5cblx0XHR0aGlzLl9oYW5kbGVzID0gdGhpcy5faGFuZGxlcy5hZGQoIHRoaXMuZWxlbWVudC5maW5kKCBcIi51aS1yZXNpemFibGUtaGFuZGxlXCIgKSApO1xuXHRcdHRoaXMuX2hhbmRsZXMuZGlzYWJsZVNlbGVjdGlvbigpO1xuXG5cdFx0dGhpcy5faGFuZGxlcy5vbiggXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoICF0aGF0LnJlc2l6aW5nICkge1xuXHRcdFx0XHRpZiAoIHRoaXMuY2xhc3NOYW1lICkge1xuXHRcdFx0XHRcdGF4aXMgPSB0aGlzLmNsYXNzTmFtZS5tYXRjaCggL3VpLXJlc2l6YWJsZS0oc2V8c3d8bmV8bnd8bnxlfHN8dykvaSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoYXQuYXhpcyA9IGF4aXMgJiYgYXhpc1sgMSBdID8gYXhpc1sgMSBdIDogXCJzZVwiO1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdGlmICggby5hdXRvSGlkZSApIHtcblx0XHRcdHRoaXMuX2hhbmRsZXMuaGlkZSgpO1xuXHRcdFx0dGhpcy5fYWRkQ2xhc3MoIFwidWktcmVzaXphYmxlLWF1dG9oaWRlXCIgKTtcblx0XHR9XG5cdH0sXG5cblx0X3JlbW92ZUhhbmRsZXM6IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuX2hhbmRsZXMucmVtb3ZlKCk7XG5cdH0sXG5cblx0X21vdXNlQ2FwdHVyZTogZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdHZhciBpLCBoYW5kbGUsXG5cdFx0XHRjYXB0dXJlID0gZmFsc2U7XG5cblx0XHRmb3IgKCBpIGluIHRoaXMuaGFuZGxlcyApIHtcblx0XHRcdGhhbmRsZSA9ICQoIHRoaXMuaGFuZGxlc1sgaSBdIClbIDAgXTtcblx0XHRcdGlmICggaGFuZGxlID09PSBldmVudC50YXJnZXQgfHwgJC5jb250YWlucyggaGFuZGxlLCBldmVudC50YXJnZXQgKSApIHtcblx0XHRcdFx0Y2FwdHVyZSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuICF0aGlzLm9wdGlvbnMuZGlzYWJsZWQgJiYgY2FwdHVyZTtcblx0fSxcblxuXHRfbW91c2VTdGFydDogZnVuY3Rpb24oIGV2ZW50ICkge1xuXG5cdFx0dmFyIGN1cmxlZnQsIGN1cnRvcCwgY3Vyc29yLFxuXHRcdFx0byA9IHRoaXMub3B0aW9ucyxcblx0XHRcdGVsID0gdGhpcy5lbGVtZW50O1xuXG5cdFx0dGhpcy5yZXNpemluZyA9IHRydWU7XG5cblx0XHR0aGlzLl9yZW5kZXJQcm94eSgpO1xuXG5cdFx0Y3VybGVmdCA9IHRoaXMuX251bSggdGhpcy5oZWxwZXIuY3NzKCBcImxlZnRcIiApICk7XG5cdFx0Y3VydG9wID0gdGhpcy5fbnVtKCB0aGlzLmhlbHBlci5jc3MoIFwidG9wXCIgKSApO1xuXG5cdFx0aWYgKCBvLmNvbnRhaW5tZW50ICkge1xuXHRcdFx0Y3VybGVmdCArPSAkKCBvLmNvbnRhaW5tZW50ICkuc2Nyb2xsTGVmdCgpIHx8IDA7XG5cdFx0XHRjdXJ0b3AgKz0gJCggby5jb250YWlubWVudCApLnNjcm9sbFRvcCgpIHx8IDA7XG5cdFx0fVxuXG5cdFx0dGhpcy5vZmZzZXQgPSB0aGlzLmhlbHBlci5vZmZzZXQoKTtcblx0XHR0aGlzLnBvc2l0aW9uID0geyBsZWZ0OiBjdXJsZWZ0LCB0b3A6IGN1cnRvcCB9O1xuXG5cdFx0dGhpcy5zaXplID0gdGhpcy5faGVscGVyID8ge1xuXHRcdFx0XHR3aWR0aDogdGhpcy5oZWxwZXIud2lkdGgoKSxcblx0XHRcdFx0aGVpZ2h0OiB0aGlzLmhlbHBlci5oZWlnaHQoKVxuXHRcdFx0fSA6IHtcblx0XHRcdFx0d2lkdGg6IGVsLndpZHRoKCksXG5cdFx0XHRcdGhlaWdodDogZWwuaGVpZ2h0KClcblx0XHRcdH07XG5cblx0XHR0aGlzLm9yaWdpbmFsU2l6ZSA9IHRoaXMuX2hlbHBlciA/IHtcblx0XHRcdFx0d2lkdGg6IGVsLm91dGVyV2lkdGgoKSxcblx0XHRcdFx0aGVpZ2h0OiBlbC5vdXRlckhlaWdodCgpXG5cdFx0XHR9IDoge1xuXHRcdFx0XHR3aWR0aDogZWwud2lkdGgoKSxcblx0XHRcdFx0aGVpZ2h0OiBlbC5oZWlnaHQoKVxuXHRcdFx0fTtcblxuXHRcdHRoaXMuc2l6ZURpZmYgPSB7XG5cdFx0XHR3aWR0aDogZWwub3V0ZXJXaWR0aCgpIC0gZWwud2lkdGgoKSxcblx0XHRcdGhlaWdodDogZWwub3V0ZXJIZWlnaHQoKSAtIGVsLmhlaWdodCgpXG5cdFx0fTtcblxuXHRcdHRoaXMub3JpZ2luYWxQb3NpdGlvbiA9IHsgbGVmdDogY3VybGVmdCwgdG9wOiBjdXJ0b3AgfTtcblx0XHR0aGlzLm9yaWdpbmFsTW91c2VQb3NpdGlvbiA9IHsgbGVmdDogZXZlbnQucGFnZVgsIHRvcDogZXZlbnQucGFnZVkgfTtcblxuXHRcdHRoaXMuYXNwZWN0UmF0aW8gPSAoIHR5cGVvZiBvLmFzcGVjdFJhdGlvID09PSBcIm51bWJlclwiICkgP1xuXHRcdFx0by5hc3BlY3RSYXRpbyA6XG5cdFx0XHQoICggdGhpcy5vcmlnaW5hbFNpemUud2lkdGggLyB0aGlzLm9yaWdpbmFsU2l6ZS5oZWlnaHQgKSB8fCAxICk7XG5cblx0XHRjdXJzb3IgPSAkKCBcIi51aS1yZXNpemFibGUtXCIgKyB0aGlzLmF4aXMgKS5jc3MoIFwiY3Vyc29yXCIgKTtcblx0XHQkKCBcImJvZHlcIiApLmNzcyggXCJjdXJzb3JcIiwgY3Vyc29yID09PSBcImF1dG9cIiA/IHRoaXMuYXhpcyArIFwiLXJlc2l6ZVwiIDogY3Vyc29yICk7XG5cblx0XHR0aGlzLl9hZGRDbGFzcyggXCJ1aS1yZXNpemFibGUtcmVzaXppbmdcIiApO1xuXHRcdHRoaXMuX3Byb3BhZ2F0ZSggXCJzdGFydFwiLCBldmVudCApO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9LFxuXG5cdF9tb3VzZURyYWc6IGZ1bmN0aW9uKCBldmVudCApIHtcblxuXHRcdHZhciBkYXRhLCBwcm9wcyxcblx0XHRcdHNtcCA9IHRoaXMub3JpZ2luYWxNb3VzZVBvc2l0aW9uLFxuXHRcdFx0YSA9IHRoaXMuYXhpcyxcblx0XHRcdGR4ID0gKCBldmVudC5wYWdlWCAtIHNtcC5sZWZ0ICkgfHwgMCxcblx0XHRcdGR5ID0gKCBldmVudC5wYWdlWSAtIHNtcC50b3AgKSB8fCAwLFxuXHRcdFx0dHJpZ2dlciA9IHRoaXMuX2NoYW5nZVsgYSBdO1xuXG5cdFx0dGhpcy5fdXBkYXRlUHJldlByb3BlcnRpZXMoKTtcblxuXHRcdGlmICggIXRyaWdnZXIgKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0ZGF0YSA9IHRyaWdnZXIuYXBwbHkoIHRoaXMsIFsgZXZlbnQsIGR4LCBkeSBdICk7XG5cblx0XHR0aGlzLl91cGRhdGVWaXJ0dWFsQm91bmRhcmllcyggZXZlbnQuc2hpZnRLZXkgKTtcblx0XHRpZiAoIHRoaXMuX2FzcGVjdFJhdGlvIHx8IGV2ZW50LnNoaWZ0S2V5ICkge1xuXHRcdFx0ZGF0YSA9IHRoaXMuX3VwZGF0ZVJhdGlvKCBkYXRhLCBldmVudCApO1xuXHRcdH1cblxuXHRcdGRhdGEgPSB0aGlzLl9yZXNwZWN0U2l6ZSggZGF0YSwgZXZlbnQgKTtcblxuXHRcdHRoaXMuX3VwZGF0ZUNhY2hlKCBkYXRhICk7XG5cblx0XHR0aGlzLl9wcm9wYWdhdGUoIFwicmVzaXplXCIsIGV2ZW50ICk7XG5cblx0XHRwcm9wcyA9IHRoaXMuX2FwcGx5Q2hhbmdlcygpO1xuXG5cdFx0aWYgKCAhdGhpcy5faGVscGVyICYmIHRoaXMuX3Byb3BvcnRpb25hbGx5UmVzaXplRWxlbWVudHMubGVuZ3RoICkge1xuXHRcdFx0dGhpcy5fcHJvcG9ydGlvbmFsbHlSZXNpemUoKTtcblx0XHR9XG5cblx0XHRpZiAoICEkLmlzRW1wdHlPYmplY3QoIHByb3BzICkgKSB7XG5cdFx0XHR0aGlzLl91cGRhdGVQcmV2UHJvcGVydGllcygpO1xuXHRcdFx0dGhpcy5fdHJpZ2dlciggXCJyZXNpemVcIiwgZXZlbnQsIHRoaXMudWkoKSApO1xuXHRcdFx0dGhpcy5fYXBwbHlDaGFuZ2VzKCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXG5cdF9tb3VzZVN0b3A6IGZ1bmN0aW9uKCBldmVudCApIHtcblxuXHRcdHRoaXMucmVzaXppbmcgPSBmYWxzZTtcblx0XHR2YXIgcHIsIGlzdGEsIHNvZmZzZXRoLCBzb2Zmc2V0dywgcywgbGVmdCwgdG9wLFxuXHRcdFx0byA9IHRoaXMub3B0aW9ucywgdGhhdCA9IHRoaXM7XG5cblx0XHRpZiAoIHRoaXMuX2hlbHBlciApIHtcblxuXHRcdFx0cHIgPSB0aGlzLl9wcm9wb3J0aW9uYWxseVJlc2l6ZUVsZW1lbnRzO1xuXHRcdFx0aXN0YSA9IHByLmxlbmd0aCAmJiAoIC90ZXh0YXJlYS9pICkudGVzdCggcHJbIDAgXS5ub2RlTmFtZSApO1xuXHRcdFx0c29mZnNldGggPSBpc3RhICYmIHRoaXMuX2hhc1Njcm9sbCggcHJbIDAgXSwgXCJsZWZ0XCIgKSA/IDAgOiB0aGF0LnNpemVEaWZmLmhlaWdodDtcblx0XHRcdHNvZmZzZXR3ID0gaXN0YSA/IDAgOiB0aGF0LnNpemVEaWZmLndpZHRoO1xuXG5cdFx0XHRzID0ge1xuXHRcdFx0XHR3aWR0aDogKCB0aGF0LmhlbHBlci53aWR0aCgpICAtIHNvZmZzZXR3ICksXG5cdFx0XHRcdGhlaWdodDogKCB0aGF0LmhlbHBlci5oZWlnaHQoKSAtIHNvZmZzZXRoIClcblx0XHRcdH07XG5cdFx0XHRsZWZ0ID0gKCBwYXJzZUZsb2F0KCB0aGF0LmVsZW1lbnQuY3NzKCBcImxlZnRcIiApICkgK1xuXHRcdFx0XHQoIHRoYXQucG9zaXRpb24ubGVmdCAtIHRoYXQub3JpZ2luYWxQb3NpdGlvbi5sZWZ0ICkgKSB8fCBudWxsO1xuXHRcdFx0dG9wID0gKCBwYXJzZUZsb2F0KCB0aGF0LmVsZW1lbnQuY3NzKCBcInRvcFwiICkgKSArXG5cdFx0XHRcdCggdGhhdC5wb3NpdGlvbi50b3AgLSB0aGF0Lm9yaWdpbmFsUG9zaXRpb24udG9wICkgKSB8fCBudWxsO1xuXG5cdFx0XHRpZiAoICFvLmFuaW1hdGUgKSB7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC5jc3MoICQuZXh0ZW5kKCBzLCB7IHRvcDogdG9wLCBsZWZ0OiBsZWZ0IH0gKSApO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGF0LmhlbHBlci5oZWlnaHQoIHRoYXQuc2l6ZS5oZWlnaHQgKTtcblx0XHRcdHRoYXQuaGVscGVyLndpZHRoKCB0aGF0LnNpemUud2lkdGggKTtcblxuXHRcdFx0aWYgKCB0aGlzLl9oZWxwZXIgJiYgIW8uYW5pbWF0ZSApIHtcblx0XHRcdFx0dGhpcy5fcHJvcG9ydGlvbmFsbHlSZXNpemUoKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQkKCBcImJvZHlcIiApLmNzcyggXCJjdXJzb3JcIiwgXCJhdXRvXCIgKTtcblxuXHRcdHRoaXMuX3JlbW92ZUNsYXNzKCBcInVpLXJlc2l6YWJsZS1yZXNpemluZ1wiICk7XG5cblx0XHR0aGlzLl9wcm9wYWdhdGUoIFwic3RvcFwiLCBldmVudCApO1xuXG5cdFx0aWYgKCB0aGlzLl9oZWxwZXIgKSB7XG5cdFx0XHR0aGlzLmhlbHBlci5yZW1vdmUoKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cblx0fSxcblxuXHRfdXBkYXRlUHJldlByb3BlcnRpZXM6IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMucHJldlBvc2l0aW9uID0ge1xuXHRcdFx0dG9wOiB0aGlzLnBvc2l0aW9uLnRvcCxcblx0XHRcdGxlZnQ6IHRoaXMucG9zaXRpb24ubGVmdFxuXHRcdH07XG5cdFx0dGhpcy5wcmV2U2l6ZSA9IHtcblx0XHRcdHdpZHRoOiB0aGlzLnNpemUud2lkdGgsXG5cdFx0XHRoZWlnaHQ6IHRoaXMuc2l6ZS5oZWlnaHRcblx0XHR9O1xuXHR9LFxuXG5cdF9hcHBseUNoYW5nZXM6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBwcm9wcyA9IHt9O1xuXG5cdFx0aWYgKCB0aGlzLnBvc2l0aW9uLnRvcCAhPT0gdGhpcy5wcmV2UG9zaXRpb24udG9wICkge1xuXHRcdFx0cHJvcHMudG9wID0gdGhpcy5wb3NpdGlvbi50b3AgKyBcInB4XCI7XG5cdFx0fVxuXHRcdGlmICggdGhpcy5wb3NpdGlvbi5sZWZ0ICE9PSB0aGlzLnByZXZQb3NpdGlvbi5sZWZ0ICkge1xuXHRcdFx0cHJvcHMubGVmdCA9IHRoaXMucG9zaXRpb24ubGVmdCArIFwicHhcIjtcblx0XHR9XG5cdFx0aWYgKCB0aGlzLnNpemUud2lkdGggIT09IHRoaXMucHJldlNpemUud2lkdGggKSB7XG5cdFx0XHRwcm9wcy53aWR0aCA9IHRoaXMuc2l6ZS53aWR0aCArIFwicHhcIjtcblx0XHR9XG5cdFx0aWYgKCB0aGlzLnNpemUuaGVpZ2h0ICE9PSB0aGlzLnByZXZTaXplLmhlaWdodCApIHtcblx0XHRcdHByb3BzLmhlaWdodCA9IHRoaXMuc2l6ZS5oZWlnaHQgKyBcInB4XCI7XG5cdFx0fVxuXG5cdFx0dGhpcy5oZWxwZXIuY3NzKCBwcm9wcyApO1xuXG5cdFx0cmV0dXJuIHByb3BzO1xuXHR9LFxuXG5cdF91cGRhdGVWaXJ0dWFsQm91bmRhcmllczogZnVuY3Rpb24oIGZvcmNlQXNwZWN0UmF0aW8gKSB7XG5cdFx0dmFyIHBNaW5XaWR0aCwgcE1heFdpZHRoLCBwTWluSGVpZ2h0LCBwTWF4SGVpZ2h0LCBiLFxuXHRcdFx0byA9IHRoaXMub3B0aW9ucztcblxuXHRcdGIgPSB7XG5cdFx0XHRtaW5XaWR0aDogdGhpcy5faXNOdW1iZXIoIG8ubWluV2lkdGggKSA/IG8ubWluV2lkdGggOiAwLFxuXHRcdFx0bWF4V2lkdGg6IHRoaXMuX2lzTnVtYmVyKCBvLm1heFdpZHRoICkgPyBvLm1heFdpZHRoIDogSW5maW5pdHksXG5cdFx0XHRtaW5IZWlnaHQ6IHRoaXMuX2lzTnVtYmVyKCBvLm1pbkhlaWdodCApID8gby5taW5IZWlnaHQgOiAwLFxuXHRcdFx0bWF4SGVpZ2h0OiB0aGlzLl9pc051bWJlciggby5tYXhIZWlnaHQgKSA/IG8ubWF4SGVpZ2h0IDogSW5maW5pdHlcblx0XHR9O1xuXG5cdFx0aWYgKCB0aGlzLl9hc3BlY3RSYXRpbyB8fCBmb3JjZUFzcGVjdFJhdGlvICkge1xuXHRcdFx0cE1pbldpZHRoID0gYi5taW5IZWlnaHQgKiB0aGlzLmFzcGVjdFJhdGlvO1xuXHRcdFx0cE1pbkhlaWdodCA9IGIubWluV2lkdGggLyB0aGlzLmFzcGVjdFJhdGlvO1xuXHRcdFx0cE1heFdpZHRoID0gYi5tYXhIZWlnaHQgKiB0aGlzLmFzcGVjdFJhdGlvO1xuXHRcdFx0cE1heEhlaWdodCA9IGIubWF4V2lkdGggLyB0aGlzLmFzcGVjdFJhdGlvO1xuXG5cdFx0XHRpZiAoIHBNaW5XaWR0aCA+IGIubWluV2lkdGggKSB7XG5cdFx0XHRcdGIubWluV2lkdGggPSBwTWluV2lkdGg7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIHBNaW5IZWlnaHQgPiBiLm1pbkhlaWdodCApIHtcblx0XHRcdFx0Yi5taW5IZWlnaHQgPSBwTWluSGVpZ2h0O1xuXHRcdFx0fVxuXHRcdFx0aWYgKCBwTWF4V2lkdGggPCBiLm1heFdpZHRoICkge1xuXHRcdFx0XHRiLm1heFdpZHRoID0gcE1heFdpZHRoO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCBwTWF4SGVpZ2h0IDwgYi5tYXhIZWlnaHQgKSB7XG5cdFx0XHRcdGIubWF4SGVpZ2h0ID0gcE1heEhlaWdodDtcblx0XHRcdH1cblx0XHR9XG5cdFx0dGhpcy5fdkJvdW5kYXJpZXMgPSBiO1xuXHR9LFxuXG5cdF91cGRhdGVDYWNoZTogZnVuY3Rpb24oIGRhdGEgKSB7XG5cdFx0dGhpcy5vZmZzZXQgPSB0aGlzLmhlbHBlci5vZmZzZXQoKTtcblx0XHRpZiAoIHRoaXMuX2lzTnVtYmVyKCBkYXRhLmxlZnQgKSApIHtcblx0XHRcdHRoaXMucG9zaXRpb24ubGVmdCA9IGRhdGEubGVmdDtcblx0XHR9XG5cdFx0aWYgKCB0aGlzLl9pc051bWJlciggZGF0YS50b3AgKSApIHtcblx0XHRcdHRoaXMucG9zaXRpb24udG9wID0gZGF0YS50b3A7XG5cdFx0fVxuXHRcdGlmICggdGhpcy5faXNOdW1iZXIoIGRhdGEuaGVpZ2h0ICkgKSB7XG5cdFx0XHR0aGlzLnNpemUuaGVpZ2h0ID0gZGF0YS5oZWlnaHQ7XG5cdFx0fVxuXHRcdGlmICggdGhpcy5faXNOdW1iZXIoIGRhdGEud2lkdGggKSApIHtcblx0XHRcdHRoaXMuc2l6ZS53aWR0aCA9IGRhdGEud2lkdGg7XG5cdFx0fVxuXHR9LFxuXG5cdF91cGRhdGVSYXRpbzogZnVuY3Rpb24oIGRhdGEgKSB7XG5cblx0XHR2YXIgY3BvcyA9IHRoaXMucG9zaXRpb24sXG5cdFx0XHRjc2l6ZSA9IHRoaXMuc2l6ZSxcblx0XHRcdGEgPSB0aGlzLmF4aXM7XG5cblx0XHRpZiAoIHRoaXMuX2lzTnVtYmVyKCBkYXRhLmhlaWdodCApICkge1xuXHRcdFx0ZGF0YS53aWR0aCA9ICggZGF0YS5oZWlnaHQgKiB0aGlzLmFzcGVjdFJhdGlvICk7XG5cdFx0fSBlbHNlIGlmICggdGhpcy5faXNOdW1iZXIoIGRhdGEud2lkdGggKSApIHtcblx0XHRcdGRhdGEuaGVpZ2h0ID0gKCBkYXRhLndpZHRoIC8gdGhpcy5hc3BlY3RSYXRpbyApO1xuXHRcdH1cblxuXHRcdGlmICggYSA9PT0gXCJzd1wiICkge1xuXHRcdFx0ZGF0YS5sZWZ0ID0gY3Bvcy5sZWZ0ICsgKCBjc2l6ZS53aWR0aCAtIGRhdGEud2lkdGggKTtcblx0XHRcdGRhdGEudG9wID0gbnVsbDtcblx0XHR9XG5cdFx0aWYgKCBhID09PSBcIm53XCIgKSB7XG5cdFx0XHRkYXRhLnRvcCA9IGNwb3MudG9wICsgKCBjc2l6ZS5oZWlnaHQgLSBkYXRhLmhlaWdodCApO1xuXHRcdFx0ZGF0YS5sZWZ0ID0gY3Bvcy5sZWZ0ICsgKCBjc2l6ZS53aWR0aCAtIGRhdGEud2lkdGggKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZGF0YTtcblx0fSxcblxuXHRfcmVzcGVjdFNpemU6IGZ1bmN0aW9uKCBkYXRhICkge1xuXG5cdFx0dmFyIG8gPSB0aGlzLl92Qm91bmRhcmllcyxcblx0XHRcdGEgPSB0aGlzLmF4aXMsXG5cdFx0XHRpc21heHcgPSB0aGlzLl9pc051bWJlciggZGF0YS53aWR0aCApICYmIG8ubWF4V2lkdGggJiYgKCBvLm1heFdpZHRoIDwgZGF0YS53aWR0aCApLFxuXHRcdFx0aXNtYXhoID0gdGhpcy5faXNOdW1iZXIoIGRhdGEuaGVpZ2h0ICkgJiYgby5tYXhIZWlnaHQgJiYgKCBvLm1heEhlaWdodCA8IGRhdGEuaGVpZ2h0ICksXG5cdFx0XHRpc21pbncgPSB0aGlzLl9pc051bWJlciggZGF0YS53aWR0aCApICYmIG8ubWluV2lkdGggJiYgKCBvLm1pbldpZHRoID4gZGF0YS53aWR0aCApLFxuXHRcdFx0aXNtaW5oID0gdGhpcy5faXNOdW1iZXIoIGRhdGEuaGVpZ2h0ICkgJiYgby5taW5IZWlnaHQgJiYgKCBvLm1pbkhlaWdodCA+IGRhdGEuaGVpZ2h0ICksXG5cdFx0XHRkdyA9IHRoaXMub3JpZ2luYWxQb3NpdGlvbi5sZWZ0ICsgdGhpcy5vcmlnaW5hbFNpemUud2lkdGgsXG5cdFx0XHRkaCA9IHRoaXMub3JpZ2luYWxQb3NpdGlvbi50b3AgKyB0aGlzLm9yaWdpbmFsU2l6ZS5oZWlnaHQsXG5cdFx0XHRjdyA9IC9zd3xud3x3Ly50ZXN0KCBhICksIGNoID0gL253fG5lfG4vLnRlc3QoIGEgKTtcblx0XHRpZiAoIGlzbWludyApIHtcblx0XHRcdGRhdGEud2lkdGggPSBvLm1pbldpZHRoO1xuXHRcdH1cblx0XHRpZiAoIGlzbWluaCApIHtcblx0XHRcdGRhdGEuaGVpZ2h0ID0gby5taW5IZWlnaHQ7XG5cdFx0fVxuXHRcdGlmICggaXNtYXh3ICkge1xuXHRcdFx0ZGF0YS53aWR0aCA9IG8ubWF4V2lkdGg7XG5cdFx0fVxuXHRcdGlmICggaXNtYXhoICkge1xuXHRcdFx0ZGF0YS5oZWlnaHQgPSBvLm1heEhlaWdodDtcblx0XHR9XG5cblx0XHRpZiAoIGlzbWludyAmJiBjdyApIHtcblx0XHRcdGRhdGEubGVmdCA9IGR3IC0gby5taW5XaWR0aDtcblx0XHR9XG5cdFx0aWYgKCBpc21heHcgJiYgY3cgKSB7XG5cdFx0XHRkYXRhLmxlZnQgPSBkdyAtIG8ubWF4V2lkdGg7XG5cdFx0fVxuXHRcdGlmICggaXNtaW5oICYmIGNoICkge1xuXHRcdFx0ZGF0YS50b3AgPSBkaCAtIG8ubWluSGVpZ2h0O1xuXHRcdH1cblx0XHRpZiAoIGlzbWF4aCAmJiBjaCApIHtcblx0XHRcdGRhdGEudG9wID0gZGggLSBvLm1heEhlaWdodDtcblx0XHR9XG5cblx0XHQvLyBGaXhpbmcganVtcCBlcnJvciBvbiB0b3AvbGVmdCAtIGJ1ZyAjMjMzMFxuXHRcdGlmICggIWRhdGEud2lkdGggJiYgIWRhdGEuaGVpZ2h0ICYmICFkYXRhLmxlZnQgJiYgZGF0YS50b3AgKSB7XG5cdFx0XHRkYXRhLnRvcCA9IG51bGw7XG5cdFx0fSBlbHNlIGlmICggIWRhdGEud2lkdGggJiYgIWRhdGEuaGVpZ2h0ICYmICFkYXRhLnRvcCAmJiBkYXRhLmxlZnQgKSB7XG5cdFx0XHRkYXRhLmxlZnQgPSBudWxsO1xuXHRcdH1cblxuXHRcdHJldHVybiBkYXRhO1xuXHR9LFxuXG5cdF9nZXRQYWRkaW5nUGx1c0JvcmRlckRpbWVuc2lvbnM6IGZ1bmN0aW9uKCBlbGVtZW50ICkge1xuXHRcdHZhciBpID0gMCxcblx0XHRcdHdpZHRocyA9IFtdLFxuXHRcdFx0Ym9yZGVycyA9IFtcblx0XHRcdFx0ZWxlbWVudC5jc3MoIFwiYm9yZGVyVG9wV2lkdGhcIiApLFxuXHRcdFx0XHRlbGVtZW50LmNzcyggXCJib3JkZXJSaWdodFdpZHRoXCIgKSxcblx0XHRcdFx0ZWxlbWVudC5jc3MoIFwiYm9yZGVyQm90dG9tV2lkdGhcIiApLFxuXHRcdFx0XHRlbGVtZW50LmNzcyggXCJib3JkZXJMZWZ0V2lkdGhcIiApXG5cdFx0XHRdLFxuXHRcdFx0cGFkZGluZ3MgPSBbXG5cdFx0XHRcdGVsZW1lbnQuY3NzKCBcInBhZGRpbmdUb3BcIiApLFxuXHRcdFx0XHRlbGVtZW50LmNzcyggXCJwYWRkaW5nUmlnaHRcIiApLFxuXHRcdFx0XHRlbGVtZW50LmNzcyggXCJwYWRkaW5nQm90dG9tXCIgKSxcblx0XHRcdFx0ZWxlbWVudC5jc3MoIFwicGFkZGluZ0xlZnRcIiApXG5cdFx0XHRdO1xuXG5cdFx0Zm9yICggOyBpIDwgNDsgaSsrICkge1xuXHRcdFx0d2lkdGhzWyBpIF0gPSAoIHBhcnNlRmxvYXQoIGJvcmRlcnNbIGkgXSApIHx8IDAgKTtcblx0XHRcdHdpZHRoc1sgaSBdICs9ICggcGFyc2VGbG9hdCggcGFkZGluZ3NbIGkgXSApIHx8IDAgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0aGVpZ2h0OiB3aWR0aHNbIDAgXSArIHdpZHRoc1sgMiBdLFxuXHRcdFx0d2lkdGg6IHdpZHRoc1sgMSBdICsgd2lkdGhzWyAzIF1cblx0XHR9O1xuXHR9LFxuXG5cdF9wcm9wb3J0aW9uYWxseVJlc2l6ZTogZnVuY3Rpb24oKSB7XG5cblx0XHRpZiAoICF0aGlzLl9wcm9wb3J0aW9uYWxseVJlc2l6ZUVsZW1lbnRzLmxlbmd0aCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgcHJlbCxcblx0XHRcdGkgPSAwLFxuXHRcdFx0ZWxlbWVudCA9IHRoaXMuaGVscGVyIHx8IHRoaXMuZWxlbWVudDtcblxuXHRcdGZvciAoIDsgaSA8IHRoaXMuX3Byb3BvcnRpb25hbGx5UmVzaXplRWxlbWVudHMubGVuZ3RoOyBpKysgKSB7XG5cblx0XHRcdHByZWwgPSB0aGlzLl9wcm9wb3J0aW9uYWxseVJlc2l6ZUVsZW1lbnRzWyBpIF07XG5cblx0XHRcdC8vIFRPRE86IFNlZW1zIGxpa2UgYSBidWcgdG8gY2FjaGUgdGhpcy5vdXRlckRpbWVuc2lvbnNcblx0XHRcdC8vIGNvbnNpZGVyaW5nIHRoYXQgd2UgYXJlIGluIGEgbG9vcC5cblx0XHRcdGlmICggIXRoaXMub3V0ZXJEaW1lbnNpb25zICkge1xuXHRcdFx0XHR0aGlzLm91dGVyRGltZW5zaW9ucyA9IHRoaXMuX2dldFBhZGRpbmdQbHVzQm9yZGVyRGltZW5zaW9ucyggcHJlbCApO1xuXHRcdFx0fVxuXG5cdFx0XHRwcmVsLmNzcygge1xuXHRcdFx0XHRoZWlnaHQ6ICggZWxlbWVudC5oZWlnaHQoKSAtIHRoaXMub3V0ZXJEaW1lbnNpb25zLmhlaWdodCApIHx8IDAsXG5cdFx0XHRcdHdpZHRoOiAoIGVsZW1lbnQud2lkdGgoKSAtIHRoaXMub3V0ZXJEaW1lbnNpb25zLndpZHRoICkgfHwgMFxuXHRcdFx0fSApO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0X3JlbmRlclByb3h5OiBmdW5jdGlvbigpIHtcblxuXHRcdHZhciBlbCA9IHRoaXMuZWxlbWVudCwgbyA9IHRoaXMub3B0aW9ucztcblx0XHR0aGlzLmVsZW1lbnRPZmZzZXQgPSBlbC5vZmZzZXQoKTtcblxuXHRcdGlmICggdGhpcy5faGVscGVyICkge1xuXG5cdFx0XHR0aGlzLmhlbHBlciA9IHRoaXMuaGVscGVyIHx8ICQoIFwiPGRpdiBzdHlsZT0nb3ZlcmZsb3c6aGlkZGVuOyc+PC9kaXY+XCIgKTtcblxuXHRcdFx0dGhpcy5fYWRkQ2xhc3MoIHRoaXMuaGVscGVyLCB0aGlzLl9oZWxwZXIgKTtcblx0XHRcdHRoaXMuaGVscGVyLmNzcygge1xuXHRcdFx0XHR3aWR0aDogdGhpcy5lbGVtZW50Lm91dGVyV2lkdGgoKSxcblx0XHRcdFx0aGVpZ2h0OiB0aGlzLmVsZW1lbnQub3V0ZXJIZWlnaHQoKSxcblx0XHRcdFx0cG9zaXRpb246IFwiYWJzb2x1dGVcIixcblx0XHRcdFx0bGVmdDogdGhpcy5lbGVtZW50T2Zmc2V0LmxlZnQgKyBcInB4XCIsXG5cdFx0XHRcdHRvcDogdGhpcy5lbGVtZW50T2Zmc2V0LnRvcCArIFwicHhcIixcblx0XHRcdFx0ekluZGV4OiArK28uekluZGV4IC8vVE9ETzogRG9uJ3QgbW9kaWZ5IG9wdGlvblxuXHRcdFx0fSApO1xuXG5cdFx0XHR0aGlzLmhlbHBlclxuXHRcdFx0XHQuYXBwZW5kVG8oIFwiYm9keVwiIClcblx0XHRcdFx0LmRpc2FibGVTZWxlY3Rpb24oKTtcblxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmhlbHBlciA9IHRoaXMuZWxlbWVudDtcblx0XHR9XG5cblx0fSxcblxuXHRfY2hhbmdlOiB7XG5cdFx0ZTogZnVuY3Rpb24oIGV2ZW50LCBkeCApIHtcblx0XHRcdHJldHVybiB7IHdpZHRoOiB0aGlzLm9yaWdpbmFsU2l6ZS53aWR0aCArIGR4IH07XG5cdFx0fSxcblx0XHR3OiBmdW5jdGlvbiggZXZlbnQsIGR4ICkge1xuXHRcdFx0dmFyIGNzID0gdGhpcy5vcmlnaW5hbFNpemUsIHNwID0gdGhpcy5vcmlnaW5hbFBvc2l0aW9uO1xuXHRcdFx0cmV0dXJuIHsgbGVmdDogc3AubGVmdCArIGR4LCB3aWR0aDogY3Mud2lkdGggLSBkeCB9O1xuXHRcdH0sXG5cdFx0bjogZnVuY3Rpb24oIGV2ZW50LCBkeCwgZHkgKSB7XG5cdFx0XHR2YXIgY3MgPSB0aGlzLm9yaWdpbmFsU2l6ZSwgc3AgPSB0aGlzLm9yaWdpbmFsUG9zaXRpb247XG5cdFx0XHRyZXR1cm4geyB0b3A6IHNwLnRvcCArIGR5LCBoZWlnaHQ6IGNzLmhlaWdodCAtIGR5IH07XG5cdFx0fSxcblx0XHRzOiBmdW5jdGlvbiggZXZlbnQsIGR4LCBkeSApIHtcblx0XHRcdHJldHVybiB7IGhlaWdodDogdGhpcy5vcmlnaW5hbFNpemUuaGVpZ2h0ICsgZHkgfTtcblx0XHR9LFxuXHRcdHNlOiBmdW5jdGlvbiggZXZlbnQsIGR4LCBkeSApIHtcblx0XHRcdHJldHVybiAkLmV4dGVuZCggdGhpcy5fY2hhbmdlLnMuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApLFxuXHRcdFx0XHR0aGlzLl9jaGFuZ2UuZS5hcHBseSggdGhpcywgWyBldmVudCwgZHgsIGR5IF0gKSApO1xuXHRcdH0sXG5cdFx0c3c6IGZ1bmN0aW9uKCBldmVudCwgZHgsIGR5ICkge1xuXHRcdFx0cmV0dXJuICQuZXh0ZW5kKCB0aGlzLl9jaGFuZ2Uucy5hcHBseSggdGhpcywgYXJndW1lbnRzICksXG5cdFx0XHRcdHRoaXMuX2NoYW5nZS53LmFwcGx5KCB0aGlzLCBbIGV2ZW50LCBkeCwgZHkgXSApICk7XG5cdFx0fSxcblx0XHRuZTogZnVuY3Rpb24oIGV2ZW50LCBkeCwgZHkgKSB7XG5cdFx0XHRyZXR1cm4gJC5leHRlbmQoIHRoaXMuX2NoYW5nZS5uLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKSxcblx0XHRcdFx0dGhpcy5fY2hhbmdlLmUuYXBwbHkoIHRoaXMsIFsgZXZlbnQsIGR4LCBkeSBdICkgKTtcblx0XHR9LFxuXHRcdG53OiBmdW5jdGlvbiggZXZlbnQsIGR4LCBkeSApIHtcblx0XHRcdHJldHVybiAkLmV4dGVuZCggdGhpcy5fY2hhbmdlLm4uYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApLFxuXHRcdFx0XHR0aGlzLl9jaGFuZ2Uudy5hcHBseSggdGhpcywgWyBldmVudCwgZHgsIGR5IF0gKSApO1xuXHRcdH1cblx0fSxcblxuXHRfcHJvcGFnYXRlOiBmdW5jdGlvbiggbiwgZXZlbnQgKSB7XG5cdFx0JC51aS5wbHVnaW4uY2FsbCggdGhpcywgbiwgWyBldmVudCwgdGhpcy51aSgpIF0gKTtcblx0XHQoIG4gIT09IFwicmVzaXplXCIgJiYgdGhpcy5fdHJpZ2dlciggbiwgZXZlbnQsIHRoaXMudWkoKSApICk7XG5cdH0sXG5cblx0cGx1Z2luczoge30sXG5cblx0dWk6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRvcmlnaW5hbEVsZW1lbnQ6IHRoaXMub3JpZ2luYWxFbGVtZW50LFxuXHRcdFx0ZWxlbWVudDogdGhpcy5lbGVtZW50LFxuXHRcdFx0aGVscGVyOiB0aGlzLmhlbHBlcixcblx0XHRcdHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uLFxuXHRcdFx0c2l6ZTogdGhpcy5zaXplLFxuXHRcdFx0b3JpZ2luYWxTaXplOiB0aGlzLm9yaWdpbmFsU2l6ZSxcblx0XHRcdG9yaWdpbmFsUG9zaXRpb246IHRoaXMub3JpZ2luYWxQb3NpdGlvblxuXHRcdH07XG5cdH1cblxufSApO1xuXG4vKlxuICogUmVzaXphYmxlIEV4dGVuc2lvbnNcbiAqL1xuXG4kLnVpLnBsdWdpbi5hZGQoIFwicmVzaXphYmxlXCIsIFwiYW5pbWF0ZVwiLCB7XG5cblx0c3RvcDogZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdHZhciB0aGF0ID0gJCggdGhpcyApLnJlc2l6YWJsZSggXCJpbnN0YW5jZVwiICksXG5cdFx0XHRvID0gdGhhdC5vcHRpb25zLFxuXHRcdFx0cHIgPSB0aGF0Ll9wcm9wb3J0aW9uYWxseVJlc2l6ZUVsZW1lbnRzLFxuXHRcdFx0aXN0YSA9IHByLmxlbmd0aCAmJiAoIC90ZXh0YXJlYS9pICkudGVzdCggcHJbIDAgXS5ub2RlTmFtZSApLFxuXHRcdFx0c29mZnNldGggPSBpc3RhICYmIHRoYXQuX2hhc1Njcm9sbCggcHJbIDAgXSwgXCJsZWZ0XCIgKSA/IDAgOiB0aGF0LnNpemVEaWZmLmhlaWdodCxcblx0XHRcdHNvZmZzZXR3ID0gaXN0YSA/IDAgOiB0aGF0LnNpemVEaWZmLndpZHRoLFxuXHRcdFx0c3R5bGUgPSB7XG5cdFx0XHRcdHdpZHRoOiAoIHRoYXQuc2l6ZS53aWR0aCAtIHNvZmZzZXR3ICksXG5cdFx0XHRcdGhlaWdodDogKCB0aGF0LnNpemUuaGVpZ2h0IC0gc29mZnNldGggKVxuXHRcdFx0fSxcblx0XHRcdGxlZnQgPSAoIHBhcnNlRmxvYXQoIHRoYXQuZWxlbWVudC5jc3MoIFwibGVmdFwiICkgKSArXG5cdFx0XHRcdCggdGhhdC5wb3NpdGlvbi5sZWZ0IC0gdGhhdC5vcmlnaW5hbFBvc2l0aW9uLmxlZnQgKSApIHx8IG51bGwsXG5cdFx0XHR0b3AgPSAoIHBhcnNlRmxvYXQoIHRoYXQuZWxlbWVudC5jc3MoIFwidG9wXCIgKSApICtcblx0XHRcdFx0KCB0aGF0LnBvc2l0aW9uLnRvcCAtIHRoYXQub3JpZ2luYWxQb3NpdGlvbi50b3AgKSApIHx8IG51bGw7XG5cblx0XHR0aGF0LmVsZW1lbnQuYW5pbWF0ZShcblx0XHRcdCQuZXh0ZW5kKCBzdHlsZSwgdG9wICYmIGxlZnQgPyB7IHRvcDogdG9wLCBsZWZ0OiBsZWZ0IH0gOiB7fSApLCB7XG5cdFx0XHRcdGR1cmF0aW9uOiBvLmFuaW1hdGVEdXJhdGlvbixcblx0XHRcdFx0ZWFzaW5nOiBvLmFuaW1hdGVFYXNpbmcsXG5cdFx0XHRcdHN0ZXA6IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdFx0dmFyIGRhdGEgPSB7XG5cdFx0XHRcdFx0XHR3aWR0aDogcGFyc2VGbG9hdCggdGhhdC5lbGVtZW50LmNzcyggXCJ3aWR0aFwiICkgKSxcblx0XHRcdFx0XHRcdGhlaWdodDogcGFyc2VGbG9hdCggdGhhdC5lbGVtZW50LmNzcyggXCJoZWlnaHRcIiApICksXG5cdFx0XHRcdFx0XHR0b3A6IHBhcnNlRmxvYXQoIHRoYXQuZWxlbWVudC5jc3MoIFwidG9wXCIgKSApLFxuXHRcdFx0XHRcdFx0bGVmdDogcGFyc2VGbG9hdCggdGhhdC5lbGVtZW50LmNzcyggXCJsZWZ0XCIgKSApXG5cdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdGlmICggcHIgJiYgcHIubGVuZ3RoICkge1xuXHRcdFx0XHRcdFx0JCggcHJbIDAgXSApLmNzcyggeyB3aWR0aDogZGF0YS53aWR0aCwgaGVpZ2h0OiBkYXRhLmhlaWdodCB9ICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gUHJvcGFnYXRpbmcgcmVzaXplLCBhbmQgdXBkYXRpbmcgdmFsdWVzIGZvciBlYWNoIGFuaW1hdGlvbiBzdGVwXG5cdFx0XHRcdFx0dGhhdC5fdXBkYXRlQ2FjaGUoIGRhdGEgKTtcblx0XHRcdFx0XHR0aGF0Ll9wcm9wYWdhdGUoIFwicmVzaXplXCIsIGV2ZW50ICk7XG5cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxufSApO1xuXG4kLnVpLnBsdWdpbi5hZGQoIFwicmVzaXphYmxlXCIsIFwiY29udGFpbm1lbnRcIiwge1xuXG5cdHN0YXJ0OiBmdW5jdGlvbigpIHtcblx0XHR2YXIgZWxlbWVudCwgcCwgY28sIGNoLCBjdywgd2lkdGgsIGhlaWdodCxcblx0XHRcdHRoYXQgPSAkKCB0aGlzICkucmVzaXphYmxlKCBcImluc3RhbmNlXCIgKSxcblx0XHRcdG8gPSB0aGF0Lm9wdGlvbnMsXG5cdFx0XHRlbCA9IHRoYXQuZWxlbWVudCxcblx0XHRcdG9jID0gby5jb250YWlubWVudCxcblx0XHRcdGNlID0gKCBvYyBpbnN0YW5jZW9mICQgKSA/XG5cdFx0XHRcdG9jLmdldCggMCApIDpcblx0XHRcdFx0KCAvcGFyZW50Ly50ZXN0KCBvYyApICkgPyBlbC5wYXJlbnQoKS5nZXQoIDAgKSA6IG9jO1xuXG5cdFx0aWYgKCAhY2UgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhhdC5jb250YWluZXJFbGVtZW50ID0gJCggY2UgKTtcblxuXHRcdGlmICggL2RvY3VtZW50Ly50ZXN0KCBvYyApIHx8IG9jID09PSBkb2N1bWVudCApIHtcblx0XHRcdHRoYXQuY29udGFpbmVyT2Zmc2V0ID0ge1xuXHRcdFx0XHRsZWZ0OiAwLFxuXHRcdFx0XHR0b3A6IDBcblx0XHRcdH07XG5cdFx0XHR0aGF0LmNvbnRhaW5lclBvc2l0aW9uID0ge1xuXHRcdFx0XHRsZWZ0OiAwLFxuXHRcdFx0XHR0b3A6IDBcblx0XHRcdH07XG5cblx0XHRcdHRoYXQucGFyZW50RGF0YSA9IHtcblx0XHRcdFx0ZWxlbWVudDogJCggZG9jdW1lbnQgKSxcblx0XHRcdFx0bGVmdDogMCxcblx0XHRcdFx0dG9wOiAwLFxuXHRcdFx0XHR3aWR0aDogJCggZG9jdW1lbnQgKS53aWR0aCgpLFxuXHRcdFx0XHRoZWlnaHQ6ICQoIGRvY3VtZW50ICkuaGVpZ2h0KCkgfHwgZG9jdW1lbnQuYm9keS5wYXJlbnROb2RlLnNjcm9sbEhlaWdodFxuXHRcdFx0fTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZWxlbWVudCA9ICQoIGNlICk7XG5cdFx0XHRwID0gW107XG5cdFx0XHQkKCBbIFwiVG9wXCIsIFwiUmlnaHRcIiwgXCJMZWZ0XCIsIFwiQm90dG9tXCIgXSApLmVhY2goIGZ1bmN0aW9uKCBpLCBuYW1lICkge1xuXHRcdFx0XHRwWyBpIF0gPSB0aGF0Ll9udW0oIGVsZW1lbnQuY3NzKCBcInBhZGRpbmdcIiArIG5hbWUgKSApO1xuXHRcdFx0fSApO1xuXG5cdFx0XHR0aGF0LmNvbnRhaW5lck9mZnNldCA9IGVsZW1lbnQub2Zmc2V0KCk7XG5cdFx0XHR0aGF0LmNvbnRhaW5lclBvc2l0aW9uID0gZWxlbWVudC5wb3NpdGlvbigpO1xuXHRcdFx0dGhhdC5jb250YWluZXJTaXplID0ge1xuXHRcdFx0XHRoZWlnaHQ6ICggZWxlbWVudC5pbm5lckhlaWdodCgpIC0gcFsgMyBdICksXG5cdFx0XHRcdHdpZHRoOiAoIGVsZW1lbnQuaW5uZXJXaWR0aCgpIC0gcFsgMSBdIClcblx0XHRcdH07XG5cblx0XHRcdGNvID0gdGhhdC5jb250YWluZXJPZmZzZXQ7XG5cdFx0XHRjaCA9IHRoYXQuY29udGFpbmVyU2l6ZS5oZWlnaHQ7XG5cdFx0XHRjdyA9IHRoYXQuY29udGFpbmVyU2l6ZS53aWR0aDtcblx0XHRcdHdpZHRoID0gKCB0aGF0Ll9oYXNTY3JvbGwgKCBjZSwgXCJsZWZ0XCIgKSA/IGNlLnNjcm9sbFdpZHRoIDogY3cgKTtcblx0XHRcdGhlaWdodCA9ICggdGhhdC5faGFzU2Nyb2xsICggY2UgKSA/IGNlLnNjcm9sbEhlaWdodCA6IGNoICkgO1xuXG5cdFx0XHR0aGF0LnBhcmVudERhdGEgPSB7XG5cdFx0XHRcdGVsZW1lbnQ6IGNlLFxuXHRcdFx0XHRsZWZ0OiBjby5sZWZ0LFxuXHRcdFx0XHR0b3A6IGNvLnRvcCxcblx0XHRcdFx0d2lkdGg6IHdpZHRoLFxuXHRcdFx0XHRoZWlnaHQ6IGhlaWdodFxuXHRcdFx0fTtcblx0XHR9XG5cdH0sXG5cblx0cmVzaXplOiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0dmFyIHdvc2V0LCBob3NldCwgaXNQYXJlbnQsIGlzT2Zmc2V0UmVsYXRpdmUsXG5cdFx0XHR0aGF0ID0gJCggdGhpcyApLnJlc2l6YWJsZSggXCJpbnN0YW5jZVwiICksXG5cdFx0XHRvID0gdGhhdC5vcHRpb25zLFxuXHRcdFx0Y28gPSB0aGF0LmNvbnRhaW5lck9mZnNldCxcblx0XHRcdGNwID0gdGhhdC5wb3NpdGlvbixcblx0XHRcdHBSYXRpbyA9IHRoYXQuX2FzcGVjdFJhdGlvIHx8IGV2ZW50LnNoaWZ0S2V5LFxuXHRcdFx0Y29wID0ge1xuXHRcdFx0XHR0b3A6IDAsXG5cdFx0XHRcdGxlZnQ6IDBcblx0XHRcdH0sXG5cdFx0XHRjZSA9IHRoYXQuY29udGFpbmVyRWxlbWVudCxcblx0XHRcdGNvbnRpbnVlUmVzaXplID0gdHJ1ZTtcblxuXHRcdGlmICggY2VbIDAgXSAhPT0gZG9jdW1lbnQgJiYgKCAvc3RhdGljLyApLnRlc3QoIGNlLmNzcyggXCJwb3NpdGlvblwiICkgKSApIHtcblx0XHRcdGNvcCA9IGNvO1xuXHRcdH1cblxuXHRcdGlmICggY3AubGVmdCA8ICggdGhhdC5faGVscGVyID8gY28ubGVmdCA6IDAgKSApIHtcblx0XHRcdHRoYXQuc2l6ZS53aWR0aCA9IHRoYXQuc2l6ZS53aWR0aCArXG5cdFx0XHRcdCggdGhhdC5faGVscGVyID9cblx0XHRcdFx0XHQoIHRoYXQucG9zaXRpb24ubGVmdCAtIGNvLmxlZnQgKSA6XG5cdFx0XHRcdFx0KCB0aGF0LnBvc2l0aW9uLmxlZnQgLSBjb3AubGVmdCApICk7XG5cblx0XHRcdGlmICggcFJhdGlvICkge1xuXHRcdFx0XHR0aGF0LnNpemUuaGVpZ2h0ID0gdGhhdC5zaXplLndpZHRoIC8gdGhhdC5hc3BlY3RSYXRpbztcblx0XHRcdFx0Y29udGludWVSZXNpemUgPSBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHRoYXQucG9zaXRpb24ubGVmdCA9IG8uaGVscGVyID8gY28ubGVmdCA6IDA7XG5cdFx0fVxuXG5cdFx0aWYgKCBjcC50b3AgPCAoIHRoYXQuX2hlbHBlciA/IGNvLnRvcCA6IDAgKSApIHtcblx0XHRcdHRoYXQuc2l6ZS5oZWlnaHQgPSB0aGF0LnNpemUuaGVpZ2h0ICtcblx0XHRcdFx0KCB0aGF0Ll9oZWxwZXIgP1xuXHRcdFx0XHRcdCggdGhhdC5wb3NpdGlvbi50b3AgLSBjby50b3AgKSA6XG5cdFx0XHRcdFx0dGhhdC5wb3NpdGlvbi50b3AgKTtcblxuXHRcdFx0aWYgKCBwUmF0aW8gKSB7XG5cdFx0XHRcdHRoYXQuc2l6ZS53aWR0aCA9IHRoYXQuc2l6ZS5oZWlnaHQgKiB0aGF0LmFzcGVjdFJhdGlvO1xuXHRcdFx0XHRjb250aW51ZVJlc2l6ZSA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0dGhhdC5wb3NpdGlvbi50b3AgPSB0aGF0Ll9oZWxwZXIgPyBjby50b3AgOiAwO1xuXHRcdH1cblxuXHRcdGlzUGFyZW50ID0gdGhhdC5jb250YWluZXJFbGVtZW50LmdldCggMCApID09PSB0aGF0LmVsZW1lbnQucGFyZW50KCkuZ2V0KCAwICk7XG5cdFx0aXNPZmZzZXRSZWxhdGl2ZSA9IC9yZWxhdGl2ZXxhYnNvbHV0ZS8udGVzdCggdGhhdC5jb250YWluZXJFbGVtZW50LmNzcyggXCJwb3NpdGlvblwiICkgKTtcblxuXHRcdGlmICggaXNQYXJlbnQgJiYgaXNPZmZzZXRSZWxhdGl2ZSApIHtcblx0XHRcdHRoYXQub2Zmc2V0LmxlZnQgPSB0aGF0LnBhcmVudERhdGEubGVmdCArIHRoYXQucG9zaXRpb24ubGVmdDtcblx0XHRcdHRoYXQub2Zmc2V0LnRvcCA9IHRoYXQucGFyZW50RGF0YS50b3AgKyB0aGF0LnBvc2l0aW9uLnRvcDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhhdC5vZmZzZXQubGVmdCA9IHRoYXQuZWxlbWVudC5vZmZzZXQoKS5sZWZ0O1xuXHRcdFx0dGhhdC5vZmZzZXQudG9wID0gdGhhdC5lbGVtZW50Lm9mZnNldCgpLnRvcDtcblx0XHR9XG5cblx0XHR3b3NldCA9IE1hdGguYWJzKCB0aGF0LnNpemVEaWZmLndpZHRoICtcblx0XHRcdCggdGhhdC5faGVscGVyID9cblx0XHRcdFx0dGhhdC5vZmZzZXQubGVmdCAtIGNvcC5sZWZ0IDpcblx0XHRcdFx0KCB0aGF0Lm9mZnNldC5sZWZ0IC0gY28ubGVmdCApICkgKTtcblxuXHRcdGhvc2V0ID0gTWF0aC5hYnMoIHRoYXQuc2l6ZURpZmYuaGVpZ2h0ICtcblx0XHRcdCggdGhhdC5faGVscGVyID9cblx0XHRcdFx0dGhhdC5vZmZzZXQudG9wIC0gY29wLnRvcCA6XG5cdFx0XHRcdCggdGhhdC5vZmZzZXQudG9wIC0gY28udG9wICkgKSApO1xuXG5cdFx0aWYgKCB3b3NldCArIHRoYXQuc2l6ZS53aWR0aCA+PSB0aGF0LnBhcmVudERhdGEud2lkdGggKSB7XG5cdFx0XHR0aGF0LnNpemUud2lkdGggPSB0aGF0LnBhcmVudERhdGEud2lkdGggLSB3b3NldDtcblx0XHRcdGlmICggcFJhdGlvICkge1xuXHRcdFx0XHR0aGF0LnNpemUuaGVpZ2h0ID0gdGhhdC5zaXplLndpZHRoIC8gdGhhdC5hc3BlY3RSYXRpbztcblx0XHRcdFx0Y29udGludWVSZXNpemUgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoIGhvc2V0ICsgdGhhdC5zaXplLmhlaWdodCA+PSB0aGF0LnBhcmVudERhdGEuaGVpZ2h0ICkge1xuXHRcdFx0dGhhdC5zaXplLmhlaWdodCA9IHRoYXQucGFyZW50RGF0YS5oZWlnaHQgLSBob3NldDtcblx0XHRcdGlmICggcFJhdGlvICkge1xuXHRcdFx0XHR0aGF0LnNpemUud2lkdGggPSB0aGF0LnNpemUuaGVpZ2h0ICogdGhhdC5hc3BlY3RSYXRpbztcblx0XHRcdFx0Y29udGludWVSZXNpemUgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoICFjb250aW51ZVJlc2l6ZSApIHtcblx0XHRcdHRoYXQucG9zaXRpb24ubGVmdCA9IHRoYXQucHJldlBvc2l0aW9uLmxlZnQ7XG5cdFx0XHR0aGF0LnBvc2l0aW9uLnRvcCA9IHRoYXQucHJldlBvc2l0aW9uLnRvcDtcblx0XHRcdHRoYXQuc2l6ZS53aWR0aCA9IHRoYXQucHJldlNpemUud2lkdGg7XG5cdFx0XHR0aGF0LnNpemUuaGVpZ2h0ID0gdGhhdC5wcmV2U2l6ZS5oZWlnaHQ7XG5cdFx0fVxuXHR9LFxuXG5cdHN0b3A6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciB0aGF0ID0gJCggdGhpcyApLnJlc2l6YWJsZSggXCJpbnN0YW5jZVwiICksXG5cdFx0XHRvID0gdGhhdC5vcHRpb25zLFxuXHRcdFx0Y28gPSB0aGF0LmNvbnRhaW5lck9mZnNldCxcblx0XHRcdGNvcCA9IHRoYXQuY29udGFpbmVyUG9zaXRpb24sXG5cdFx0XHRjZSA9IHRoYXQuY29udGFpbmVyRWxlbWVudCxcblx0XHRcdGhlbHBlciA9ICQoIHRoYXQuaGVscGVyICksXG5cdFx0XHRobyA9IGhlbHBlci5vZmZzZXQoKSxcblx0XHRcdHcgPSBoZWxwZXIub3V0ZXJXaWR0aCgpIC0gdGhhdC5zaXplRGlmZi53aWR0aCxcblx0XHRcdGggPSBoZWxwZXIub3V0ZXJIZWlnaHQoKSAtIHRoYXQuc2l6ZURpZmYuaGVpZ2h0O1xuXG5cdFx0aWYgKCB0aGF0Ll9oZWxwZXIgJiYgIW8uYW5pbWF0ZSAmJiAoIC9yZWxhdGl2ZS8gKS50ZXN0KCBjZS5jc3MoIFwicG9zaXRpb25cIiApICkgKSB7XG5cdFx0XHQkKCB0aGlzICkuY3NzKCB7XG5cdFx0XHRcdGxlZnQ6IGhvLmxlZnQgLSBjb3AubGVmdCAtIGNvLmxlZnQsXG5cdFx0XHRcdHdpZHRoOiB3LFxuXHRcdFx0XHRoZWlnaHQ6IGhcblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRpZiAoIHRoYXQuX2hlbHBlciAmJiAhby5hbmltYXRlICYmICggL3N0YXRpYy8gKS50ZXN0KCBjZS5jc3MoIFwicG9zaXRpb25cIiApICkgKSB7XG5cdFx0XHQkKCB0aGlzICkuY3NzKCB7XG5cdFx0XHRcdGxlZnQ6IGhvLmxlZnQgLSBjb3AubGVmdCAtIGNvLmxlZnQsXG5cdFx0XHRcdHdpZHRoOiB3LFxuXHRcdFx0XHRoZWlnaHQ6IGhcblx0XHRcdH0gKTtcblx0XHR9XG5cdH1cbn0gKTtcblxuJC51aS5wbHVnaW4uYWRkKCBcInJlc2l6YWJsZVwiLCBcImFsc29SZXNpemVcIiwge1xuXG5cdHN0YXJ0OiBmdW5jdGlvbigpIHtcblx0XHR2YXIgdGhhdCA9ICQoIHRoaXMgKS5yZXNpemFibGUoIFwiaW5zdGFuY2VcIiApLFxuXHRcdFx0byA9IHRoYXQub3B0aW9ucztcblxuXHRcdCQoIG8uYWxzb1Jlc2l6ZSApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGVsID0gJCggdGhpcyApO1xuXHRcdFx0ZWwuZGF0YSggXCJ1aS1yZXNpemFibGUtYWxzb3Jlc2l6ZVwiLCB7XG5cdFx0XHRcdHdpZHRoOiBwYXJzZUZsb2F0KCBlbC53aWR0aCgpICksIGhlaWdodDogcGFyc2VGbG9hdCggZWwuaGVpZ2h0KCkgKSxcblx0XHRcdFx0bGVmdDogcGFyc2VGbG9hdCggZWwuY3NzKCBcImxlZnRcIiApICksIHRvcDogcGFyc2VGbG9hdCggZWwuY3NzKCBcInRvcFwiICkgKVxuXHRcdFx0fSApO1xuXHRcdH0gKTtcblx0fSxcblxuXHRyZXNpemU6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG5cdFx0dmFyIHRoYXQgPSAkKCB0aGlzICkucmVzaXphYmxlKCBcImluc3RhbmNlXCIgKSxcblx0XHRcdG8gPSB0aGF0Lm9wdGlvbnMsXG5cdFx0XHRvcyA9IHRoYXQub3JpZ2luYWxTaXplLFxuXHRcdFx0b3AgPSB0aGF0Lm9yaWdpbmFsUG9zaXRpb24sXG5cdFx0XHRkZWx0YSA9IHtcblx0XHRcdFx0aGVpZ2h0OiAoIHRoYXQuc2l6ZS5oZWlnaHQgLSBvcy5oZWlnaHQgKSB8fCAwLFxuXHRcdFx0XHR3aWR0aDogKCB0aGF0LnNpemUud2lkdGggLSBvcy53aWR0aCApIHx8IDAsXG5cdFx0XHRcdHRvcDogKCB0aGF0LnBvc2l0aW9uLnRvcCAtIG9wLnRvcCApIHx8IDAsXG5cdFx0XHRcdGxlZnQ6ICggdGhhdC5wb3NpdGlvbi5sZWZ0IC0gb3AubGVmdCApIHx8IDBcblx0XHRcdH07XG5cblx0XHRcdCQoIG8uYWxzb1Jlc2l6ZSApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgZWwgPSAkKCB0aGlzICksIHN0YXJ0ID0gJCggdGhpcyApLmRhdGEoIFwidWktcmVzaXphYmxlLWFsc29yZXNpemVcIiApLCBzdHlsZSA9IHt9LFxuXHRcdFx0XHRcdGNzcyA9IGVsLnBhcmVudHMoIHVpLm9yaWdpbmFsRWxlbWVudFsgMCBdICkubGVuZ3RoID9cblx0XHRcdFx0XHRcdFx0WyBcIndpZHRoXCIsIFwiaGVpZ2h0XCIgXSA6XG5cdFx0XHRcdFx0XHRcdFsgXCJ3aWR0aFwiLCBcImhlaWdodFwiLCBcInRvcFwiLCBcImxlZnRcIiBdO1xuXG5cdFx0XHRcdCQuZWFjaCggY3NzLCBmdW5jdGlvbiggaSwgcHJvcCApIHtcblx0XHRcdFx0XHR2YXIgc3VtID0gKCBzdGFydFsgcHJvcCBdIHx8IDAgKSArICggZGVsdGFbIHByb3AgXSB8fCAwICk7XG5cdFx0XHRcdFx0aWYgKCBzdW0gJiYgc3VtID49IDAgKSB7XG5cdFx0XHRcdFx0XHRzdHlsZVsgcHJvcCBdID0gc3VtIHx8IG51bGw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9ICk7XG5cblx0XHRcdFx0ZWwuY3NzKCBzdHlsZSApO1xuXHRcdFx0fSApO1xuXHR9LFxuXG5cdHN0b3A6IGZ1bmN0aW9uKCkge1xuXHRcdCQoIHRoaXMgKS5yZW1vdmVEYXRhKCBcInVpLXJlc2l6YWJsZS1hbHNvcmVzaXplXCIgKTtcblx0fVxufSApO1xuXG4kLnVpLnBsdWdpbi5hZGQoIFwicmVzaXphYmxlXCIsIFwiZ2hvc3RcIiwge1xuXG5cdHN0YXJ0OiBmdW5jdGlvbigpIHtcblxuXHRcdHZhciB0aGF0ID0gJCggdGhpcyApLnJlc2l6YWJsZSggXCJpbnN0YW5jZVwiICksIGNzID0gdGhhdC5zaXplO1xuXG5cdFx0dGhhdC5naG9zdCA9IHRoYXQub3JpZ2luYWxFbGVtZW50LmNsb25lKCk7XG5cdFx0dGhhdC5naG9zdC5jc3MoIHtcblx0XHRcdG9wYWNpdHk6IDAuMjUsXG5cdFx0XHRkaXNwbGF5OiBcImJsb2NrXCIsXG5cdFx0XHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuXHRcdFx0aGVpZ2h0OiBjcy5oZWlnaHQsXG5cdFx0XHR3aWR0aDogY3Mud2lkdGgsXG5cdFx0XHRtYXJnaW46IDAsXG5cdFx0XHRsZWZ0OiAwLFxuXHRcdFx0dG9wOiAwXG5cdFx0fSApO1xuXG5cdFx0dGhhdC5fYWRkQ2xhc3MoIHRoYXQuZ2hvc3QsIFwidWktcmVzaXphYmxlLWdob3N0XCIgKTtcblxuXHRcdC8vIERFUFJFQ0FURURcblx0XHQvLyBUT0RPOiByZW1vdmUgYWZ0ZXIgMS4xMlxuXHRcdGlmICggJC51aUJhY2tDb21wYXQgIT09IGZhbHNlICYmIHR5cGVvZiB0aGF0Lm9wdGlvbnMuZ2hvc3QgPT09IFwic3RyaW5nXCIgKSB7XG5cblx0XHRcdC8vIEdob3N0IG9wdGlvblxuXHRcdFx0dGhhdC5naG9zdC5hZGRDbGFzcyggdGhpcy5vcHRpb25zLmdob3N0ICk7XG5cdFx0fVxuXG5cdFx0dGhhdC5naG9zdC5hcHBlbmRUbyggdGhhdC5oZWxwZXIgKTtcblxuXHR9LFxuXG5cdHJlc2l6ZTogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHRoYXQgPSAkKCB0aGlzICkucmVzaXphYmxlKCBcImluc3RhbmNlXCIgKTtcblx0XHRpZiAoIHRoYXQuZ2hvc3QgKSB7XG5cdFx0XHR0aGF0Lmdob3N0LmNzcygge1xuXHRcdFx0XHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuXHRcdFx0XHRoZWlnaHQ6IHRoYXQuc2l6ZS5oZWlnaHQsXG5cdFx0XHRcdHdpZHRoOiB0aGF0LnNpemUud2lkdGhcblx0XHRcdH0gKTtcblx0XHR9XG5cdH0sXG5cblx0c3RvcDogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHRoYXQgPSAkKCB0aGlzICkucmVzaXphYmxlKCBcImluc3RhbmNlXCIgKTtcblx0XHRpZiAoIHRoYXQuZ2hvc3QgJiYgdGhhdC5oZWxwZXIgKSB7XG5cdFx0XHR0aGF0LmhlbHBlci5nZXQoIDAgKS5yZW1vdmVDaGlsZCggdGhhdC5naG9zdC5nZXQoIDAgKSApO1xuXHRcdH1cblx0fVxuXG59ICk7XG5cbiQudWkucGx1Z2luLmFkZCggXCJyZXNpemFibGVcIiwgXCJncmlkXCIsIHtcblxuXHRyZXNpemU6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBvdXRlckRpbWVuc2lvbnMsXG5cdFx0XHR0aGF0ID0gJCggdGhpcyApLnJlc2l6YWJsZSggXCJpbnN0YW5jZVwiICksXG5cdFx0XHRvID0gdGhhdC5vcHRpb25zLFxuXHRcdFx0Y3MgPSB0aGF0LnNpemUsXG5cdFx0XHRvcyA9IHRoYXQub3JpZ2luYWxTaXplLFxuXHRcdFx0b3AgPSB0aGF0Lm9yaWdpbmFsUG9zaXRpb24sXG5cdFx0XHRhID0gdGhhdC5heGlzLFxuXHRcdFx0Z3JpZCA9IHR5cGVvZiBvLmdyaWQgPT09IFwibnVtYmVyXCIgPyBbIG8uZ3JpZCwgby5ncmlkIF0gOiBvLmdyaWQsXG5cdFx0XHRncmlkWCA9ICggZ3JpZFsgMCBdIHx8IDEgKSxcblx0XHRcdGdyaWRZID0gKCBncmlkWyAxIF0gfHwgMSApLFxuXHRcdFx0b3ggPSBNYXRoLnJvdW5kKCAoIGNzLndpZHRoIC0gb3Mud2lkdGggKSAvIGdyaWRYICkgKiBncmlkWCxcblx0XHRcdG95ID0gTWF0aC5yb3VuZCggKCBjcy5oZWlnaHQgLSBvcy5oZWlnaHQgKSAvIGdyaWRZICkgKiBncmlkWSxcblx0XHRcdG5ld1dpZHRoID0gb3Mud2lkdGggKyBveCxcblx0XHRcdG5ld0hlaWdodCA9IG9zLmhlaWdodCArIG95LFxuXHRcdFx0aXNNYXhXaWR0aCA9IG8ubWF4V2lkdGggJiYgKCBvLm1heFdpZHRoIDwgbmV3V2lkdGggKSxcblx0XHRcdGlzTWF4SGVpZ2h0ID0gby5tYXhIZWlnaHQgJiYgKCBvLm1heEhlaWdodCA8IG5ld0hlaWdodCApLFxuXHRcdFx0aXNNaW5XaWR0aCA9IG8ubWluV2lkdGggJiYgKCBvLm1pbldpZHRoID4gbmV3V2lkdGggKSxcblx0XHRcdGlzTWluSGVpZ2h0ID0gby5taW5IZWlnaHQgJiYgKCBvLm1pbkhlaWdodCA+IG5ld0hlaWdodCApO1xuXG5cdFx0by5ncmlkID0gZ3JpZDtcblxuXHRcdGlmICggaXNNaW5XaWR0aCApIHtcblx0XHRcdG5ld1dpZHRoICs9IGdyaWRYO1xuXHRcdH1cblx0XHRpZiAoIGlzTWluSGVpZ2h0ICkge1xuXHRcdFx0bmV3SGVpZ2h0ICs9IGdyaWRZO1xuXHRcdH1cblx0XHRpZiAoIGlzTWF4V2lkdGggKSB7XG5cdFx0XHRuZXdXaWR0aCAtPSBncmlkWDtcblx0XHR9XG5cdFx0aWYgKCBpc01heEhlaWdodCApIHtcblx0XHRcdG5ld0hlaWdodCAtPSBncmlkWTtcblx0XHR9XG5cblx0XHRpZiAoIC9eKHNlfHN8ZSkkLy50ZXN0KCBhICkgKSB7XG5cdFx0XHR0aGF0LnNpemUud2lkdGggPSBuZXdXaWR0aDtcblx0XHRcdHRoYXQuc2l6ZS5oZWlnaHQgPSBuZXdIZWlnaHQ7XG5cdFx0fSBlbHNlIGlmICggL14obmUpJC8udGVzdCggYSApICkge1xuXHRcdFx0dGhhdC5zaXplLndpZHRoID0gbmV3V2lkdGg7XG5cdFx0XHR0aGF0LnNpemUuaGVpZ2h0ID0gbmV3SGVpZ2h0O1xuXHRcdFx0dGhhdC5wb3NpdGlvbi50b3AgPSBvcC50b3AgLSBveTtcblx0XHR9IGVsc2UgaWYgKCAvXihzdykkLy50ZXN0KCBhICkgKSB7XG5cdFx0XHR0aGF0LnNpemUud2lkdGggPSBuZXdXaWR0aDtcblx0XHRcdHRoYXQuc2l6ZS5oZWlnaHQgPSBuZXdIZWlnaHQ7XG5cdFx0XHR0aGF0LnBvc2l0aW9uLmxlZnQgPSBvcC5sZWZ0IC0gb3g7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICggbmV3SGVpZ2h0IC0gZ3JpZFkgPD0gMCB8fCBuZXdXaWR0aCAtIGdyaWRYIDw9IDAgKSB7XG5cdFx0XHRcdG91dGVyRGltZW5zaW9ucyA9IHRoYXQuX2dldFBhZGRpbmdQbHVzQm9yZGVyRGltZW5zaW9ucyggdGhpcyApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIG5ld0hlaWdodCAtIGdyaWRZID4gMCApIHtcblx0XHRcdFx0dGhhdC5zaXplLmhlaWdodCA9IG5ld0hlaWdodDtcblx0XHRcdFx0dGhhdC5wb3NpdGlvbi50b3AgPSBvcC50b3AgLSBveTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG5ld0hlaWdodCA9IGdyaWRZIC0gb3V0ZXJEaW1lbnNpb25zLmhlaWdodDtcblx0XHRcdFx0dGhhdC5zaXplLmhlaWdodCA9IG5ld0hlaWdodDtcblx0XHRcdFx0dGhhdC5wb3NpdGlvbi50b3AgPSBvcC50b3AgKyBvcy5oZWlnaHQgLSBuZXdIZWlnaHQ7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIG5ld1dpZHRoIC0gZ3JpZFggPiAwICkge1xuXHRcdFx0XHR0aGF0LnNpemUud2lkdGggPSBuZXdXaWR0aDtcblx0XHRcdFx0dGhhdC5wb3NpdGlvbi5sZWZ0ID0gb3AubGVmdCAtIG94O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bmV3V2lkdGggPSBncmlkWCAtIG91dGVyRGltZW5zaW9ucy53aWR0aDtcblx0XHRcdFx0dGhhdC5zaXplLndpZHRoID0gbmV3V2lkdGg7XG5cdFx0XHRcdHRoYXQucG9zaXRpb24ubGVmdCA9IG9wLmxlZnQgKyBvcy53aWR0aCAtIG5ld1dpZHRoO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG59ICk7XG5cbnJldHVybiAkLnVpLnJlc2l6YWJsZTtcblxufSApICk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9qcXVlcnktdWkvdWkvd2lkZ2V0cy9yZXNpemFibGUuanNcbi8vIG1vZHVsZSBpZCA9IG1LV09cbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyohXG4gKiBqUXVlcnkgVUkgRGlzYWJsZSBTZWxlY3Rpb24gMS4xMi4xXG4gKiBodHRwOi8vanF1ZXJ5dWkuY29tXG4gKlxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIGh0dHA6Ly9qcXVlcnkub3JnL2xpY2Vuc2VcbiAqL1xuXG4vLz4+bGFiZWw6IGRpc2FibGVTZWxlY3Rpb25cbi8vPj5ncm91cDogQ29yZVxuLy8+PmRlc2NyaXB0aW9uOiBEaXNhYmxlIHNlbGVjdGlvbiBvZiB0ZXh0IGNvbnRlbnQgd2l0aGluIHRoZSBzZXQgb2YgbWF0Y2hlZCBlbGVtZW50cy5cbi8vPj5kb2NzOiBodHRwOi8vYXBpLmpxdWVyeXVpLmNvbS9kaXNhYmxlU2VsZWN0aW9uL1xuXG4vLyBUaGlzIGZpbGUgaXMgZGVwcmVjYXRlZFxuKCBmdW5jdGlvbiggZmFjdG9yeSApIHtcblx0aWYgKCB0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCApIHtcblxuXHRcdC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cblx0XHRkZWZpbmUoIFsgXCJqcXVlcnlcIiwgXCIuL3ZlcnNpb25cIiBdLCBmYWN0b3J5ICk7XG5cdH0gZWxzZSB7XG5cblx0XHQvLyBCcm93c2VyIGdsb2JhbHNcblx0XHRmYWN0b3J5KCBqUXVlcnkgKTtcblx0fVxufSAoIGZ1bmN0aW9uKCAkICkge1xuXG5yZXR1cm4gJC5mbi5leHRlbmQoIHtcblx0ZGlzYWJsZVNlbGVjdGlvbjogKCBmdW5jdGlvbigpIHtcblx0XHR2YXIgZXZlbnRUeXBlID0gXCJvbnNlbGVjdHN0YXJ0XCIgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJkaXZcIiApID9cblx0XHRcdFwic2VsZWN0c3RhcnRcIiA6XG5cdFx0XHRcIm1vdXNlZG93blwiO1xuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMub24oIGV2ZW50VHlwZSArIFwiLnVpLWRpc2FibGVTZWxlY3Rpb25cIiwgZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0fSApO1xuXHRcdH07XG5cdH0gKSgpLFxuXG5cdGVuYWJsZVNlbGVjdGlvbjogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMub2ZmKCBcIi51aS1kaXNhYmxlU2VsZWN0aW9uXCIgKTtcblx0fVxufSApO1xuXG59ICkgKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2pxdWVyeS11aS91aS9kaXNhYmxlLXNlbGVjdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gbllXUVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIoIGZ1bmN0aW9uKCBmYWN0b3J5ICkge1xuXHRpZiAoIHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kICkge1xuXG5cdFx0Ly8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuXHRcdGRlZmluZSggWyBcImpxdWVyeVwiLCBcIi4vdmVyc2lvblwiIF0sIGZhY3RvcnkgKTtcblx0fSBlbHNlIHtcblxuXHRcdC8vIEJyb3dzZXIgZ2xvYmFsc1xuXHRcdGZhY3RvcnkoIGpRdWVyeSApO1xuXHR9XG59ICggZnVuY3Rpb24oICQgKSB7XG5yZXR1cm4gJC51aS5zYWZlQmx1ciA9IGZ1bmN0aW9uKCBlbGVtZW50ICkge1xuXG5cdC8vIFN1cHBvcnQ6IElFOSAtIDEwIG9ubHlcblx0Ly8gSWYgdGhlIDxib2R5PiBpcyBibHVycmVkLCBJRSB3aWxsIHN3aXRjaCB3aW5kb3dzLCBzZWUgIzk0MjBcblx0aWYgKCBlbGVtZW50ICYmIGVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSAhPT0gXCJib2R5XCIgKSB7XG5cdFx0JCggZWxlbWVudCApLnRyaWdnZXIoIFwiYmx1clwiICk7XG5cdH1cbn07XG5cbn0gKSApO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvanF1ZXJ5LXVpL3VpL3NhZmUtYmx1ci5qc1xuLy8gbW9kdWxlIGlkID0gbmUxbVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiFcbiAqIGpRdWVyeSBVSSBEcm9wcGFibGUgMS4xMi4xXG4gKiBodHRwOi8vanF1ZXJ5dWkuY29tXG4gKlxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIGh0dHA6Ly9qcXVlcnkub3JnL2xpY2Vuc2VcbiAqL1xuXG4vLz4+bGFiZWw6IERyb3BwYWJsZVxuLy8+Pmdyb3VwOiBJbnRlcmFjdGlvbnNcbi8vPj5kZXNjcmlwdGlvbjogRW5hYmxlcyBkcm9wIHRhcmdldHMgZm9yIGRyYWdnYWJsZSBlbGVtZW50cy5cbi8vPj5kb2NzOiBodHRwOi8vYXBpLmpxdWVyeXVpLmNvbS9kcm9wcGFibGUvXG4vLz4+ZGVtb3M6IGh0dHA6Ly9qcXVlcnl1aS5jb20vZHJvcHBhYmxlL1xuXG4oIGZ1bmN0aW9uKCBmYWN0b3J5ICkge1xuXHRpZiAoIHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kICkge1xuXG5cdFx0Ly8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuXHRcdGRlZmluZSggW1xuXHRcdFx0XCJqcXVlcnlcIixcblx0XHRcdFwiLi9kcmFnZ2FibGVcIixcblx0XHRcdFwiLi9tb3VzZVwiLFxuXHRcdFx0XCIuLi92ZXJzaW9uXCIsXG5cdFx0XHRcIi4uL3dpZGdldFwiXG5cdFx0XSwgZmFjdG9yeSApO1xuXHR9IGVsc2Uge1xuXG5cdFx0Ly8gQnJvd3NlciBnbG9iYWxzXG5cdFx0ZmFjdG9yeSggalF1ZXJ5ICk7XG5cdH1cbn0oIGZ1bmN0aW9uKCAkICkge1xuXG4kLndpZGdldCggXCJ1aS5kcm9wcGFibGVcIiwge1xuXHR2ZXJzaW9uOiBcIjEuMTIuMVwiLFxuXHR3aWRnZXRFdmVudFByZWZpeDogXCJkcm9wXCIsXG5cdG9wdGlvbnM6IHtcblx0XHRhY2NlcHQ6IFwiKlwiLFxuXHRcdGFkZENsYXNzZXM6IHRydWUsXG5cdFx0Z3JlZWR5OiBmYWxzZSxcblx0XHRzY29wZTogXCJkZWZhdWx0XCIsXG5cdFx0dG9sZXJhbmNlOiBcImludGVyc2VjdFwiLFxuXG5cdFx0Ly8gQ2FsbGJhY2tzXG5cdFx0YWN0aXZhdGU6IG51bGwsXG5cdFx0ZGVhY3RpdmF0ZTogbnVsbCxcblx0XHRkcm9wOiBudWxsLFxuXHRcdG91dDogbnVsbCxcblx0XHRvdmVyOiBudWxsXG5cdH0sXG5cdF9jcmVhdGU6IGZ1bmN0aW9uKCkge1xuXG5cdFx0dmFyIHByb3BvcnRpb25zLFxuXHRcdFx0byA9IHRoaXMub3B0aW9ucyxcblx0XHRcdGFjY2VwdCA9IG8uYWNjZXB0O1xuXG5cdFx0dGhpcy5pc292ZXIgPSBmYWxzZTtcblx0XHR0aGlzLmlzb3V0ID0gdHJ1ZTtcblxuXHRcdHRoaXMuYWNjZXB0ID0gJC5pc0Z1bmN0aW9uKCBhY2NlcHQgKSA/IGFjY2VwdCA6IGZ1bmN0aW9uKCBkICkge1xuXHRcdFx0cmV0dXJuIGQuaXMoIGFjY2VwdCApO1xuXHRcdH07XG5cblx0XHR0aGlzLnByb3BvcnRpb25zID0gZnVuY3Rpb24oIC8qIHZhbHVlVG9Xcml0ZSAqLyApIHtcblx0XHRcdGlmICggYXJndW1lbnRzLmxlbmd0aCApIHtcblxuXHRcdFx0XHQvLyBTdG9yZSB0aGUgZHJvcHBhYmxlJ3MgcHJvcG9ydGlvbnNcblx0XHRcdFx0cHJvcG9ydGlvbnMgPSBhcmd1bWVudHNbIDAgXTtcblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Ly8gUmV0cmlldmUgb3IgZGVyaXZlIHRoZSBkcm9wcGFibGUncyBwcm9wb3J0aW9uc1xuXHRcdFx0XHRyZXR1cm4gcHJvcG9ydGlvbnMgP1xuXHRcdFx0XHRcdHByb3BvcnRpb25zIDpcblx0XHRcdFx0XHRwcm9wb3J0aW9ucyA9IHtcblx0XHRcdFx0XHRcdHdpZHRoOiB0aGlzLmVsZW1lbnRbIDAgXS5vZmZzZXRXaWR0aCxcblx0XHRcdFx0XHRcdGhlaWdodDogdGhpcy5lbGVtZW50WyAwIF0ub2Zmc2V0SGVpZ2h0XG5cdFx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0dGhpcy5fYWRkVG9NYW5hZ2VyKCBvLnNjb3BlICk7XG5cblx0XHRvLmFkZENsYXNzZXMgJiYgdGhpcy5fYWRkQ2xhc3MoIFwidWktZHJvcHBhYmxlXCIgKTtcblxuXHR9LFxuXG5cdF9hZGRUb01hbmFnZXI6IGZ1bmN0aW9uKCBzY29wZSApIHtcblxuXHRcdC8vIEFkZCB0aGUgcmVmZXJlbmNlIGFuZCBwb3NpdGlvbnMgdG8gdGhlIG1hbmFnZXJcblx0XHQkLnVpLmRkbWFuYWdlci5kcm9wcGFibGVzWyBzY29wZSBdID0gJC51aS5kZG1hbmFnZXIuZHJvcHBhYmxlc1sgc2NvcGUgXSB8fCBbXTtcblx0XHQkLnVpLmRkbWFuYWdlci5kcm9wcGFibGVzWyBzY29wZSBdLnB1c2goIHRoaXMgKTtcblx0fSxcblxuXHRfc3BsaWNlOiBmdW5jdGlvbiggZHJvcCApIHtcblx0XHR2YXIgaSA9IDA7XG5cdFx0Zm9yICggOyBpIDwgZHJvcC5sZW5ndGg7IGkrKyApIHtcblx0XHRcdGlmICggZHJvcFsgaSBdID09PSB0aGlzICkge1xuXHRcdFx0XHRkcm9wLnNwbGljZSggaSwgMSApO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblxuXHRfZGVzdHJveTogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGRyb3AgPSAkLnVpLmRkbWFuYWdlci5kcm9wcGFibGVzWyB0aGlzLm9wdGlvbnMuc2NvcGUgXTtcblxuXHRcdHRoaXMuX3NwbGljZSggZHJvcCApO1xuXHR9LFxuXG5cdF9zZXRPcHRpb246IGZ1bmN0aW9uKCBrZXksIHZhbHVlICkge1xuXG5cdFx0aWYgKCBrZXkgPT09IFwiYWNjZXB0XCIgKSB7XG5cdFx0XHR0aGlzLmFjY2VwdCA9ICQuaXNGdW5jdGlvbiggdmFsdWUgKSA/IHZhbHVlIDogZnVuY3Rpb24oIGQgKSB7XG5cdFx0XHRcdHJldHVybiBkLmlzKCB2YWx1ZSApO1xuXHRcdFx0fTtcblx0XHR9IGVsc2UgaWYgKCBrZXkgPT09IFwic2NvcGVcIiApIHtcblx0XHRcdHZhciBkcm9wID0gJC51aS5kZG1hbmFnZXIuZHJvcHBhYmxlc1sgdGhpcy5vcHRpb25zLnNjb3BlIF07XG5cblx0XHRcdHRoaXMuX3NwbGljZSggZHJvcCApO1xuXHRcdFx0dGhpcy5fYWRkVG9NYW5hZ2VyKCB2YWx1ZSApO1xuXHRcdH1cblxuXHRcdHRoaXMuX3N1cGVyKCBrZXksIHZhbHVlICk7XG5cdH0sXG5cblx0X2FjdGl2YXRlOiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0dmFyIGRyYWdnYWJsZSA9ICQudWkuZGRtYW5hZ2VyLmN1cnJlbnQ7XG5cblx0XHR0aGlzLl9hZGRBY3RpdmVDbGFzcygpO1xuXHRcdGlmICggZHJhZ2dhYmxlICkge1xuXHRcdFx0dGhpcy5fdHJpZ2dlciggXCJhY3RpdmF0ZVwiLCBldmVudCwgdGhpcy51aSggZHJhZ2dhYmxlICkgKTtcblx0XHR9XG5cdH0sXG5cblx0X2RlYWN0aXZhdGU6IGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHR2YXIgZHJhZ2dhYmxlID0gJC51aS5kZG1hbmFnZXIuY3VycmVudDtcblxuXHRcdHRoaXMuX3JlbW92ZUFjdGl2ZUNsYXNzKCk7XG5cdFx0aWYgKCBkcmFnZ2FibGUgKSB7XG5cdFx0XHR0aGlzLl90cmlnZ2VyKCBcImRlYWN0aXZhdGVcIiwgZXZlbnQsIHRoaXMudWkoIGRyYWdnYWJsZSApICk7XG5cdFx0fVxuXHR9LFxuXG5cdF9vdmVyOiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cblx0XHR2YXIgZHJhZ2dhYmxlID0gJC51aS5kZG1hbmFnZXIuY3VycmVudDtcblxuXHRcdC8vIEJhaWwgaWYgZHJhZ2dhYmxlIGFuZCBkcm9wcGFibGUgYXJlIHNhbWUgZWxlbWVudFxuXHRcdGlmICggIWRyYWdnYWJsZSB8fCAoIGRyYWdnYWJsZS5jdXJyZW50SXRlbSB8fFxuXHRcdFx0XHRkcmFnZ2FibGUuZWxlbWVudCApWyAwIF0gPT09IHRoaXMuZWxlbWVudFsgMCBdICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5hY2NlcHQuY2FsbCggdGhpcy5lbGVtZW50WyAwIF0sICggZHJhZ2dhYmxlLmN1cnJlbnRJdGVtIHx8XG5cdFx0XHRcdGRyYWdnYWJsZS5lbGVtZW50ICkgKSApIHtcblx0XHRcdHRoaXMuX2FkZEhvdmVyQ2xhc3MoKTtcblx0XHRcdHRoaXMuX3RyaWdnZXIoIFwib3ZlclwiLCBldmVudCwgdGhpcy51aSggZHJhZ2dhYmxlICkgKTtcblx0XHR9XG5cblx0fSxcblxuXHRfb3V0OiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cblx0XHR2YXIgZHJhZ2dhYmxlID0gJC51aS5kZG1hbmFnZXIuY3VycmVudDtcblxuXHRcdC8vIEJhaWwgaWYgZHJhZ2dhYmxlIGFuZCBkcm9wcGFibGUgYXJlIHNhbWUgZWxlbWVudFxuXHRcdGlmICggIWRyYWdnYWJsZSB8fCAoIGRyYWdnYWJsZS5jdXJyZW50SXRlbSB8fFxuXHRcdFx0XHRkcmFnZ2FibGUuZWxlbWVudCApWyAwIF0gPT09IHRoaXMuZWxlbWVudFsgMCBdICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5hY2NlcHQuY2FsbCggdGhpcy5lbGVtZW50WyAwIF0sICggZHJhZ2dhYmxlLmN1cnJlbnRJdGVtIHx8XG5cdFx0XHRcdGRyYWdnYWJsZS5lbGVtZW50ICkgKSApIHtcblx0XHRcdHRoaXMuX3JlbW92ZUhvdmVyQ2xhc3MoKTtcblx0XHRcdHRoaXMuX3RyaWdnZXIoIFwib3V0XCIsIGV2ZW50LCB0aGlzLnVpKCBkcmFnZ2FibGUgKSApO1xuXHRcdH1cblxuXHR9LFxuXG5cdF9kcm9wOiBmdW5jdGlvbiggZXZlbnQsIGN1c3RvbSApIHtcblxuXHRcdHZhciBkcmFnZ2FibGUgPSBjdXN0b20gfHwgJC51aS5kZG1hbmFnZXIuY3VycmVudCxcblx0XHRcdGNoaWxkcmVuSW50ZXJzZWN0aW9uID0gZmFsc2U7XG5cblx0XHQvLyBCYWlsIGlmIGRyYWdnYWJsZSBhbmQgZHJvcHBhYmxlIGFyZSBzYW1lIGVsZW1lbnRcblx0XHRpZiAoICFkcmFnZ2FibGUgfHwgKCBkcmFnZ2FibGUuY3VycmVudEl0ZW0gfHxcblx0XHRcdFx0ZHJhZ2dhYmxlLmVsZW1lbnQgKVsgMCBdID09PSB0aGlzLmVsZW1lbnRbIDAgXSApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHR0aGlzLmVsZW1lbnRcblx0XHRcdC5maW5kKCBcIjpkYXRhKHVpLWRyb3BwYWJsZSlcIiApXG5cdFx0XHQubm90KCBcIi51aS1kcmFnZ2FibGUtZHJhZ2dpbmdcIiApXG5cdFx0XHQuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciBpbnN0ID0gJCggdGhpcyApLmRyb3BwYWJsZSggXCJpbnN0YW5jZVwiICk7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRpbnN0Lm9wdGlvbnMuZ3JlZWR5ICYmXG5cdFx0XHRcdFx0IWluc3Qub3B0aW9ucy5kaXNhYmxlZCAmJlxuXHRcdFx0XHRcdGluc3Qub3B0aW9ucy5zY29wZSA9PT0gZHJhZ2dhYmxlLm9wdGlvbnMuc2NvcGUgJiZcblx0XHRcdFx0XHRpbnN0LmFjY2VwdC5jYWxsKFxuXHRcdFx0XHRcdFx0aW5zdC5lbGVtZW50WyAwIF0sICggZHJhZ2dhYmxlLmN1cnJlbnRJdGVtIHx8IGRyYWdnYWJsZS5lbGVtZW50IClcblx0XHRcdFx0XHQpICYmXG5cdFx0XHRcdFx0aW50ZXJzZWN0KFxuXHRcdFx0XHRcdFx0ZHJhZ2dhYmxlLFxuXHRcdFx0XHRcdFx0JC5leHRlbmQoIGluc3QsIHsgb2Zmc2V0OiBpbnN0LmVsZW1lbnQub2Zmc2V0KCkgfSApLFxuXHRcdFx0XHRcdFx0aW5zdC5vcHRpb25zLnRvbGVyYW5jZSwgZXZlbnRcblx0XHRcdFx0XHQpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdGNoaWxkcmVuSW50ZXJzZWN0aW9uID0gdHJ1ZTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7IH1cblx0XHRcdH0gKTtcblx0XHRpZiAoIGNoaWxkcmVuSW50ZXJzZWN0aW9uICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5hY2NlcHQuY2FsbCggdGhpcy5lbGVtZW50WyAwIF0sXG5cdFx0XHRcdCggZHJhZ2dhYmxlLmN1cnJlbnRJdGVtIHx8IGRyYWdnYWJsZS5lbGVtZW50ICkgKSApIHtcblx0XHRcdHRoaXMuX3JlbW92ZUFjdGl2ZUNsYXNzKCk7XG5cdFx0XHR0aGlzLl9yZW1vdmVIb3ZlckNsYXNzKCk7XG5cblx0XHRcdHRoaXMuX3RyaWdnZXIoIFwiZHJvcFwiLCBldmVudCwgdGhpcy51aSggZHJhZ2dhYmxlICkgKTtcblx0XHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXG5cdH0sXG5cblx0dWk6IGZ1bmN0aW9uKCBjICkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRkcmFnZ2FibGU6ICggYy5jdXJyZW50SXRlbSB8fCBjLmVsZW1lbnQgKSxcblx0XHRcdGhlbHBlcjogYy5oZWxwZXIsXG5cdFx0XHRwb3NpdGlvbjogYy5wb3NpdGlvbixcblx0XHRcdG9mZnNldDogYy5wb3NpdGlvbkFic1xuXHRcdH07XG5cdH0sXG5cblx0Ly8gRXh0ZW5zaW9uIHBvaW50cyBqdXN0IHRvIG1ha2UgYmFja2NvbXBhdCBzYW5lIGFuZCBhdm9pZCBkdXBsaWNhdGluZyBsb2dpY1xuXHQvLyBUT0RPOiBSZW1vdmUgaW4gMS4xMyBhbG9uZyB3aXRoIGNhbGwgdG8gaXQgYmVsb3dcblx0X2FkZEhvdmVyQ2xhc3M6IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuX2FkZENsYXNzKCBcInVpLWRyb3BwYWJsZS1ob3ZlclwiICk7XG5cdH0sXG5cblx0X3JlbW92ZUhvdmVyQ2xhc3M6IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuX3JlbW92ZUNsYXNzKCBcInVpLWRyb3BwYWJsZS1ob3ZlclwiICk7XG5cdH0sXG5cblx0X2FkZEFjdGl2ZUNsYXNzOiBmdW5jdGlvbigpIHtcblx0XHR0aGlzLl9hZGRDbGFzcyggXCJ1aS1kcm9wcGFibGUtYWN0aXZlXCIgKTtcblx0fSxcblxuXHRfcmVtb3ZlQWN0aXZlQ2xhc3M6IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuX3JlbW92ZUNsYXNzKCBcInVpLWRyb3BwYWJsZS1hY3RpdmVcIiApO1xuXHR9XG59ICk7XG5cbnZhciBpbnRlcnNlY3QgPSAkLnVpLmludGVyc2VjdCA9ICggZnVuY3Rpb24oKSB7XG5cdGZ1bmN0aW9uIGlzT3ZlckF4aXMoIHgsIHJlZmVyZW5jZSwgc2l6ZSApIHtcblx0XHRyZXR1cm4gKCB4ID49IHJlZmVyZW5jZSApICYmICggeCA8ICggcmVmZXJlbmNlICsgc2l6ZSApICk7XG5cdH1cblxuXHRyZXR1cm4gZnVuY3Rpb24oIGRyYWdnYWJsZSwgZHJvcHBhYmxlLCB0b2xlcmFuY2VNb2RlLCBldmVudCApIHtcblxuXHRcdGlmICggIWRyb3BwYWJsZS5vZmZzZXQgKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0dmFyIHgxID0gKCBkcmFnZ2FibGUucG9zaXRpb25BYnMgfHxcblx0XHRcdFx0ZHJhZ2dhYmxlLnBvc2l0aW9uLmFic29sdXRlICkubGVmdCArIGRyYWdnYWJsZS5tYXJnaW5zLmxlZnQsXG5cdFx0XHR5MSA9ICggZHJhZ2dhYmxlLnBvc2l0aW9uQWJzIHx8XG5cdFx0XHRcdGRyYWdnYWJsZS5wb3NpdGlvbi5hYnNvbHV0ZSApLnRvcCArIGRyYWdnYWJsZS5tYXJnaW5zLnRvcCxcblx0XHRcdHgyID0geDEgKyBkcmFnZ2FibGUuaGVscGVyUHJvcG9ydGlvbnMud2lkdGgsXG5cdFx0XHR5MiA9IHkxICsgZHJhZ2dhYmxlLmhlbHBlclByb3BvcnRpb25zLmhlaWdodCxcblx0XHRcdGwgPSBkcm9wcGFibGUub2Zmc2V0LmxlZnQsXG5cdFx0XHR0ID0gZHJvcHBhYmxlLm9mZnNldC50b3AsXG5cdFx0XHRyID0gbCArIGRyb3BwYWJsZS5wcm9wb3J0aW9ucygpLndpZHRoLFxuXHRcdFx0YiA9IHQgKyBkcm9wcGFibGUucHJvcG9ydGlvbnMoKS5oZWlnaHQ7XG5cblx0XHRzd2l0Y2ggKCB0b2xlcmFuY2VNb2RlICkge1xuXHRcdGNhc2UgXCJmaXRcIjpcblx0XHRcdHJldHVybiAoIGwgPD0geDEgJiYgeDIgPD0gciAmJiB0IDw9IHkxICYmIHkyIDw9IGIgKTtcblx0XHRjYXNlIFwiaW50ZXJzZWN0XCI6XG5cdFx0XHRyZXR1cm4gKCBsIDwgeDEgKyAoIGRyYWdnYWJsZS5oZWxwZXJQcm9wb3J0aW9ucy53aWR0aCAvIDIgKSAmJiAvLyBSaWdodCBIYWxmXG5cdFx0XHRcdHgyIC0gKCBkcmFnZ2FibGUuaGVscGVyUHJvcG9ydGlvbnMud2lkdGggLyAyICkgPCByICYmIC8vIExlZnQgSGFsZlxuXHRcdFx0XHR0IDwgeTEgKyAoIGRyYWdnYWJsZS5oZWxwZXJQcm9wb3J0aW9ucy5oZWlnaHQgLyAyICkgJiYgLy8gQm90dG9tIEhhbGZcblx0XHRcdFx0eTIgLSAoIGRyYWdnYWJsZS5oZWxwZXJQcm9wb3J0aW9ucy5oZWlnaHQgLyAyICkgPCBiICk7IC8vIFRvcCBIYWxmXG5cdFx0Y2FzZSBcInBvaW50ZXJcIjpcblx0XHRcdHJldHVybiBpc092ZXJBeGlzKCBldmVudC5wYWdlWSwgdCwgZHJvcHBhYmxlLnByb3BvcnRpb25zKCkuaGVpZ2h0ICkgJiZcblx0XHRcdFx0aXNPdmVyQXhpcyggZXZlbnQucGFnZVgsIGwsIGRyb3BwYWJsZS5wcm9wb3J0aW9ucygpLndpZHRoICk7XG5cdFx0Y2FzZSBcInRvdWNoXCI6XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQoIHkxID49IHQgJiYgeTEgPD0gYiApIHx8IC8vIFRvcCBlZGdlIHRvdWNoaW5nXG5cdFx0XHRcdCggeTIgPj0gdCAmJiB5MiA8PSBiICkgfHwgLy8gQm90dG9tIGVkZ2UgdG91Y2hpbmdcblx0XHRcdFx0KCB5MSA8IHQgJiYgeTIgPiBiICkgLy8gU3Vycm91bmRlZCB2ZXJ0aWNhbGx5XG5cdFx0XHQpICYmIChcblx0XHRcdFx0KCB4MSA+PSBsICYmIHgxIDw9IHIgKSB8fCAvLyBMZWZ0IGVkZ2UgdG91Y2hpbmdcblx0XHRcdFx0KCB4MiA+PSBsICYmIHgyIDw9IHIgKSB8fCAvLyBSaWdodCBlZGdlIHRvdWNoaW5nXG5cdFx0XHRcdCggeDEgPCBsICYmIHgyID4gciApIC8vIFN1cnJvdW5kZWQgaG9yaXpvbnRhbGx5XG5cdFx0XHQpO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9O1xufSApKCk7XG5cbi8qXG5cdFRoaXMgbWFuYWdlciB0cmFja3Mgb2Zmc2V0cyBvZiBkcmFnZ2FibGVzIGFuZCBkcm9wcGFibGVzXG4qL1xuJC51aS5kZG1hbmFnZXIgPSB7XG5cdGN1cnJlbnQ6IG51bGwsXG5cdGRyb3BwYWJsZXM6IHsgXCJkZWZhdWx0XCI6IFtdIH0sXG5cdHByZXBhcmVPZmZzZXRzOiBmdW5jdGlvbiggdCwgZXZlbnQgKSB7XG5cblx0XHR2YXIgaSwgaixcblx0XHRcdG0gPSAkLnVpLmRkbWFuYWdlci5kcm9wcGFibGVzWyB0Lm9wdGlvbnMuc2NvcGUgXSB8fCBbXSxcblx0XHRcdHR5cGUgPSBldmVudCA/IGV2ZW50LnR5cGUgOiBudWxsLCAvLyB3b3JrYXJvdW5kIGZvciAjMjMxN1xuXHRcdFx0bGlzdCA9ICggdC5jdXJyZW50SXRlbSB8fCB0LmVsZW1lbnQgKS5maW5kKCBcIjpkYXRhKHVpLWRyb3BwYWJsZSlcIiApLmFkZEJhY2soKTtcblxuXHRcdGRyb3BwYWJsZXNMb29wOiBmb3IgKCBpID0gMDsgaSA8IG0ubGVuZ3RoOyBpKysgKSB7XG5cblx0XHRcdC8vIE5vIGRpc2FibGVkIGFuZCBub24tYWNjZXB0ZWRcblx0XHRcdGlmICggbVsgaSBdLm9wdGlvbnMuZGlzYWJsZWQgfHwgKCB0ICYmICFtWyBpIF0uYWNjZXB0LmNhbGwoIG1bIGkgXS5lbGVtZW50WyAwIF0sXG5cdFx0XHRcdFx0KCB0LmN1cnJlbnRJdGVtIHx8IHQuZWxlbWVudCApICkgKSApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEZpbHRlciBvdXQgZWxlbWVudHMgaW4gdGhlIGN1cnJlbnQgZHJhZ2dlZCBpdGVtXG5cdFx0XHRmb3IgKCBqID0gMDsgaiA8IGxpc3QubGVuZ3RoOyBqKysgKSB7XG5cdFx0XHRcdGlmICggbGlzdFsgaiBdID09PSBtWyBpIF0uZWxlbWVudFsgMCBdICkge1xuXHRcdFx0XHRcdG1bIGkgXS5wcm9wb3J0aW9ucygpLmhlaWdodCA9IDA7XG5cdFx0XHRcdFx0Y29udGludWUgZHJvcHBhYmxlc0xvb3A7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bVsgaSBdLnZpc2libGUgPSBtWyBpIF0uZWxlbWVudC5jc3MoIFwiZGlzcGxheVwiICkgIT09IFwibm9uZVwiO1xuXHRcdFx0aWYgKCAhbVsgaSBdLnZpc2libGUgKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBY3RpdmF0ZSB0aGUgZHJvcHBhYmxlIGlmIHVzZWQgZGlyZWN0bHkgZnJvbSBkcmFnZ2FibGVzXG5cdFx0XHRpZiAoIHR5cGUgPT09IFwibW91c2Vkb3duXCIgKSB7XG5cdFx0XHRcdG1bIGkgXS5fYWN0aXZhdGUuY2FsbCggbVsgaSBdLCBldmVudCApO1xuXHRcdFx0fVxuXG5cdFx0XHRtWyBpIF0ub2Zmc2V0ID0gbVsgaSBdLmVsZW1lbnQub2Zmc2V0KCk7XG5cdFx0XHRtWyBpIF0ucHJvcG9ydGlvbnMoIHtcblx0XHRcdFx0d2lkdGg6IG1bIGkgXS5lbGVtZW50WyAwIF0ub2Zmc2V0V2lkdGgsXG5cdFx0XHRcdGhlaWdodDogbVsgaSBdLmVsZW1lbnRbIDAgXS5vZmZzZXRIZWlnaHRcblx0XHRcdH0gKTtcblxuXHRcdH1cblxuXHR9LFxuXHRkcm9wOiBmdW5jdGlvbiggZHJhZ2dhYmxlLCBldmVudCApIHtcblxuXHRcdHZhciBkcm9wcGVkID0gZmFsc2U7XG5cblx0XHQvLyBDcmVhdGUgYSBjb3B5IG9mIHRoZSBkcm9wcGFibGVzIGluIGNhc2UgdGhlIGxpc3QgY2hhbmdlcyBkdXJpbmcgdGhlIGRyb3AgKCM5MTE2KVxuXHRcdCQuZWFjaCggKCAkLnVpLmRkbWFuYWdlci5kcm9wcGFibGVzWyBkcmFnZ2FibGUub3B0aW9ucy5zY29wZSBdIHx8IFtdICkuc2xpY2UoKSwgZnVuY3Rpb24oKSB7XG5cblx0XHRcdGlmICggIXRoaXMub3B0aW9ucyApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCAhdGhpcy5vcHRpb25zLmRpc2FibGVkICYmIHRoaXMudmlzaWJsZSAmJlxuXHRcdFx0XHRcdGludGVyc2VjdCggZHJhZ2dhYmxlLCB0aGlzLCB0aGlzLm9wdGlvbnMudG9sZXJhbmNlLCBldmVudCApICkge1xuXHRcdFx0XHRkcm9wcGVkID0gdGhpcy5fZHJvcC5jYWxsKCB0aGlzLCBldmVudCApIHx8IGRyb3BwZWQ7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggIXRoaXMub3B0aW9ucy5kaXNhYmxlZCAmJiB0aGlzLnZpc2libGUgJiYgdGhpcy5hY2NlcHQuY2FsbCggdGhpcy5lbGVtZW50WyAwIF0sXG5cdFx0XHRcdFx0KCBkcmFnZ2FibGUuY3VycmVudEl0ZW0gfHwgZHJhZ2dhYmxlLmVsZW1lbnQgKSApICkge1xuXHRcdFx0XHR0aGlzLmlzb3V0ID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5pc292ZXIgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy5fZGVhY3RpdmF0ZS5jYWxsKCB0aGlzLCBldmVudCApO1xuXHRcdFx0fVxuXG5cdFx0fSApO1xuXHRcdHJldHVybiBkcm9wcGVkO1xuXG5cdH0sXG5cdGRyYWdTdGFydDogZnVuY3Rpb24oIGRyYWdnYWJsZSwgZXZlbnQgKSB7XG5cblx0XHQvLyBMaXN0ZW4gZm9yIHNjcm9sbGluZyBzbyB0aGF0IGlmIHRoZSBkcmFnZ2luZyBjYXVzZXMgc2Nyb2xsaW5nIHRoZSBwb3NpdGlvbiBvZiB0aGVcblx0XHQvLyBkcm9wcGFibGVzIGNhbiBiZSByZWNhbGN1bGF0ZWQgKHNlZSAjNTAwMylcblx0XHRkcmFnZ2FibGUuZWxlbWVudC5wYXJlbnRzVW50aWwoIFwiYm9keVwiICkub24oIFwic2Nyb2xsLmRyb3BwYWJsZVwiLCBmdW5jdGlvbigpIHtcblx0XHRcdGlmICggIWRyYWdnYWJsZS5vcHRpb25zLnJlZnJlc2hQb3NpdGlvbnMgKSB7XG5cdFx0XHRcdCQudWkuZGRtYW5hZ2VyLnByZXBhcmVPZmZzZXRzKCBkcmFnZ2FibGUsIGV2ZW50ICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9LFxuXHRkcmFnOiBmdW5jdGlvbiggZHJhZ2dhYmxlLCBldmVudCApIHtcblxuXHRcdC8vIElmIHlvdSBoYXZlIGEgaGlnaGx5IGR5bmFtaWMgcGFnZSwgeW91IG1pZ2h0IHRyeSB0aGlzIG9wdGlvbi4gSXQgcmVuZGVycyBwb3NpdGlvbnNcblx0XHQvLyBldmVyeSB0aW1lIHlvdSBtb3ZlIHRoZSBtb3VzZS5cblx0XHRpZiAoIGRyYWdnYWJsZS5vcHRpb25zLnJlZnJlc2hQb3NpdGlvbnMgKSB7XG5cdFx0XHQkLnVpLmRkbWFuYWdlci5wcmVwYXJlT2Zmc2V0cyggZHJhZ2dhYmxlLCBldmVudCApO1xuXHRcdH1cblxuXHRcdC8vIFJ1biB0aHJvdWdoIGFsbCBkcm9wcGFibGVzIGFuZCBjaGVjayB0aGVpciBwb3NpdGlvbnMgYmFzZWQgb24gc3BlY2lmaWMgdG9sZXJhbmNlIG9wdGlvbnNcblx0XHQkLmVhY2goICQudWkuZGRtYW5hZ2VyLmRyb3BwYWJsZXNbIGRyYWdnYWJsZS5vcHRpb25zLnNjb3BlIF0gfHwgW10sIGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRpZiAoIHRoaXMub3B0aW9ucy5kaXNhYmxlZCB8fCB0aGlzLmdyZWVkeUNoaWxkIHx8ICF0aGlzLnZpc2libGUgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dmFyIHBhcmVudEluc3RhbmNlLCBzY29wZSwgcGFyZW50LFxuXHRcdFx0XHRpbnRlcnNlY3RzID0gaW50ZXJzZWN0KCBkcmFnZ2FibGUsIHRoaXMsIHRoaXMub3B0aW9ucy50b2xlcmFuY2UsIGV2ZW50ICksXG5cdFx0XHRcdGMgPSAhaW50ZXJzZWN0cyAmJiB0aGlzLmlzb3ZlciA/XG5cdFx0XHRcdFx0XCJpc291dFwiIDpcblx0XHRcdFx0XHQoIGludGVyc2VjdHMgJiYgIXRoaXMuaXNvdmVyID8gXCJpc292ZXJcIiA6IG51bGwgKTtcblx0XHRcdGlmICggIWMgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCB0aGlzLm9wdGlvbnMuZ3JlZWR5ICkge1xuXG5cdFx0XHRcdC8vIGZpbmQgZHJvcHBhYmxlIHBhcmVudHMgd2l0aCBzYW1lIHNjb3BlXG5cdFx0XHRcdHNjb3BlID0gdGhpcy5vcHRpb25zLnNjb3BlO1xuXHRcdFx0XHRwYXJlbnQgPSB0aGlzLmVsZW1lbnQucGFyZW50cyggXCI6ZGF0YSh1aS1kcm9wcGFibGUpXCIgKS5maWx0ZXIoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHJldHVybiAkKCB0aGlzICkuZHJvcHBhYmxlKCBcImluc3RhbmNlXCIgKS5vcHRpb25zLnNjb3BlID09PSBzY29wZTtcblx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdGlmICggcGFyZW50Lmxlbmd0aCApIHtcblx0XHRcdFx0XHRwYXJlbnRJbnN0YW5jZSA9ICQoIHBhcmVudFsgMCBdICkuZHJvcHBhYmxlKCBcImluc3RhbmNlXCIgKTtcblx0XHRcdFx0XHRwYXJlbnRJbnN0YW5jZS5ncmVlZHlDaGlsZCA9ICggYyA9PT0gXCJpc292ZXJcIiApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIFdlIGp1c3QgbW92ZWQgaW50byBhIGdyZWVkeSBjaGlsZFxuXHRcdFx0aWYgKCBwYXJlbnRJbnN0YW5jZSAmJiBjID09PSBcImlzb3ZlclwiICkge1xuXHRcdFx0XHRwYXJlbnRJbnN0YW5jZS5pc292ZXIgPSBmYWxzZTtcblx0XHRcdFx0cGFyZW50SW5zdGFuY2UuaXNvdXQgPSB0cnVlO1xuXHRcdFx0XHRwYXJlbnRJbnN0YW5jZS5fb3V0LmNhbGwoIHBhcmVudEluc3RhbmNlLCBldmVudCApO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzWyBjIF0gPSB0cnVlO1xuXHRcdFx0dGhpc1sgYyA9PT0gXCJpc291dFwiID8gXCJpc292ZXJcIiA6IFwiaXNvdXRcIiBdID0gZmFsc2U7XG5cdFx0XHR0aGlzWyBjID09PSBcImlzb3ZlclwiID8gXCJfb3ZlclwiIDogXCJfb3V0XCIgXS5jYWxsKCB0aGlzLCBldmVudCApO1xuXG5cdFx0XHQvLyBXZSBqdXN0IG1vdmVkIG91dCBvZiBhIGdyZWVkeSBjaGlsZFxuXHRcdFx0aWYgKCBwYXJlbnRJbnN0YW5jZSAmJiBjID09PSBcImlzb3V0XCIgKSB7XG5cdFx0XHRcdHBhcmVudEluc3RhbmNlLmlzb3V0ID0gZmFsc2U7XG5cdFx0XHRcdHBhcmVudEluc3RhbmNlLmlzb3ZlciA9IHRydWU7XG5cdFx0XHRcdHBhcmVudEluc3RhbmNlLl9vdmVyLmNhbGwoIHBhcmVudEluc3RhbmNlLCBldmVudCApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHR9LFxuXHRkcmFnU3RvcDogZnVuY3Rpb24oIGRyYWdnYWJsZSwgZXZlbnQgKSB7XG5cdFx0ZHJhZ2dhYmxlLmVsZW1lbnQucGFyZW50c1VudGlsKCBcImJvZHlcIiApLm9mZiggXCJzY3JvbGwuZHJvcHBhYmxlXCIgKTtcblxuXHRcdC8vIENhbGwgcHJlcGFyZU9mZnNldHMgb25lIGZpbmFsIHRpbWUgc2luY2UgSUUgZG9lcyBub3QgZmlyZSByZXR1cm4gc2Nyb2xsIGV2ZW50cyB3aGVuXG5cdFx0Ly8gb3ZlcmZsb3cgd2FzIGNhdXNlZCBieSBkcmFnIChzZWUgIzUwMDMpXG5cdFx0aWYgKCAhZHJhZ2dhYmxlLm9wdGlvbnMucmVmcmVzaFBvc2l0aW9ucyApIHtcblx0XHRcdCQudWkuZGRtYW5hZ2VyLnByZXBhcmVPZmZzZXRzKCBkcmFnZ2FibGUsIGV2ZW50ICk7XG5cdFx0fVxuXHR9XG59O1xuXG4vLyBERVBSRUNBVEVEXG4vLyBUT0RPOiBzd2l0Y2ggcmV0dXJuIGJhY2sgdG8gd2lkZ2V0IGRlY2xhcmF0aW9uIGF0IHRvcCBvZiBmaWxlIHdoZW4gdGhpcyBpcyByZW1vdmVkXG5pZiAoICQudWlCYWNrQ29tcGF0ICE9PSBmYWxzZSApIHtcblxuXHQvLyBCYWNrY29tcGF0IGZvciBhY3RpdmVDbGFzcyBhbmQgaG92ZXJDbGFzcyBvcHRpb25zXG5cdCQud2lkZ2V0KCBcInVpLmRyb3BwYWJsZVwiLCAkLnVpLmRyb3BwYWJsZSwge1xuXHRcdG9wdGlvbnM6IHtcblx0XHRcdGhvdmVyQ2xhc3M6IGZhbHNlLFxuXHRcdFx0YWN0aXZlQ2xhc3M6IGZhbHNlXG5cdFx0fSxcblx0XHRfYWRkQWN0aXZlQ2xhc3M6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy5fc3VwZXIoKTtcblx0XHRcdGlmICggdGhpcy5vcHRpb25zLmFjdGl2ZUNsYXNzICkge1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoIHRoaXMub3B0aW9ucy5hY3RpdmVDbGFzcyApO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0X3JlbW92ZUFjdGl2ZUNsYXNzOiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMuX3N1cGVyKCk7XG5cdFx0XHRpZiAoIHRoaXMub3B0aW9ucy5hY3RpdmVDbGFzcyApIHtcblx0XHRcdFx0dGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKCB0aGlzLm9wdGlvbnMuYWN0aXZlQ2xhc3MgKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdF9hZGRIb3ZlckNsYXNzOiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMuX3N1cGVyKCk7XG5cdFx0XHRpZiAoIHRoaXMub3B0aW9ucy5ob3ZlckNsYXNzICkge1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoIHRoaXMub3B0aW9ucy5ob3ZlckNsYXNzICk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRfcmVtb3ZlSG92ZXJDbGFzczogZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLl9zdXBlcigpO1xuXHRcdFx0aWYgKCB0aGlzLm9wdGlvbnMuaG92ZXJDbGFzcyApIHtcblx0XHRcdFx0dGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKCB0aGlzLm9wdGlvbnMuaG92ZXJDbGFzcyApO1xuXHRcdFx0fVxuXHRcdH1cblx0fSApO1xufVxuXG5yZXR1cm4gJC51aS5kcm9wcGFibGU7XG5cbn0gKSApO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvanF1ZXJ5LXVpL3VpL3dpZGdldHMvZHJvcHBhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSByOEhXXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIVxuICogalF1ZXJ5IFVJIEZvY3VzYWJsZSAxLjEyLjFcbiAqIGh0dHA6Ly9qcXVlcnl1aS5jb21cbiAqXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogaHR0cDovL2pxdWVyeS5vcmcvbGljZW5zZVxuICovXG5cbi8vPj5sYWJlbDogOmZvY3VzYWJsZSBTZWxlY3RvclxuLy8+Pmdyb3VwOiBDb3JlXG4vLz4+ZGVzY3JpcHRpb246IFNlbGVjdHMgZWxlbWVudHMgd2hpY2ggY2FuIGJlIGZvY3VzZWQuXG4vLz4+ZG9jczogaHR0cDovL2FwaS5qcXVlcnl1aS5jb20vZm9jdXNhYmxlLXNlbGVjdG9yL1xuXG4oIGZ1bmN0aW9uKCBmYWN0b3J5ICkge1xuXHRpZiAoIHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kICkge1xuXG5cdFx0Ly8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuXHRcdGRlZmluZSggWyBcImpxdWVyeVwiLCBcIi4vdmVyc2lvblwiIF0sIGZhY3RvcnkgKTtcblx0fSBlbHNlIHtcblxuXHRcdC8vIEJyb3dzZXIgZ2xvYmFsc1xuXHRcdGZhY3RvcnkoIGpRdWVyeSApO1xuXHR9XG59ICggZnVuY3Rpb24oICQgKSB7XG5cbi8vIFNlbGVjdG9yc1xuJC51aS5mb2N1c2FibGUgPSBmdW5jdGlvbiggZWxlbWVudCwgaGFzVGFiaW5kZXggKSB7XG5cdHZhciBtYXAsIG1hcE5hbWUsIGltZywgZm9jdXNhYmxlSWZWaXNpYmxlLCBmaWVsZHNldCxcblx0XHRub2RlTmFtZSA9IGVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcblxuXHRpZiAoIFwiYXJlYVwiID09PSBub2RlTmFtZSApIHtcblx0XHRtYXAgPSBlbGVtZW50LnBhcmVudE5vZGU7XG5cdFx0bWFwTmFtZSA9IG1hcC5uYW1lO1xuXHRcdGlmICggIWVsZW1lbnQuaHJlZiB8fCAhbWFwTmFtZSB8fCBtYXAubm9kZU5hbWUudG9Mb3dlckNhc2UoKSAhPT0gXCJtYXBcIiApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aW1nID0gJCggXCJpbWdbdXNlbWFwPScjXCIgKyBtYXBOYW1lICsgXCInXVwiICk7XG5cdFx0cmV0dXJuIGltZy5sZW5ndGggPiAwICYmIGltZy5pcyggXCI6dmlzaWJsZVwiICk7XG5cdH1cblxuXHRpZiAoIC9eKGlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b258b2JqZWN0KSQvLnRlc3QoIG5vZGVOYW1lICkgKSB7XG5cdFx0Zm9jdXNhYmxlSWZWaXNpYmxlID0gIWVsZW1lbnQuZGlzYWJsZWQ7XG5cblx0XHRpZiAoIGZvY3VzYWJsZUlmVmlzaWJsZSApIHtcblxuXHRcdFx0Ly8gRm9ybSBjb250cm9scyB3aXRoaW4gYSBkaXNhYmxlZCBmaWVsZHNldCBhcmUgZGlzYWJsZWQuXG5cdFx0XHQvLyBIb3dldmVyLCBjb250cm9scyB3aXRoaW4gdGhlIGZpZWxkc2V0J3MgbGVnZW5kIGRvIG5vdCBnZXQgZGlzYWJsZWQuXG5cdFx0XHQvLyBTaW5jZSBjb250cm9scyBnZW5lcmFsbHkgYXJlbid0IHBsYWNlZCBpbnNpZGUgbGVnZW5kcywgd2Ugc2tpcFxuXHRcdFx0Ly8gdGhpcyBwb3J0aW9uIG9mIHRoZSBjaGVjay5cblx0XHRcdGZpZWxkc2V0ID0gJCggZWxlbWVudCApLmNsb3Nlc3QoIFwiZmllbGRzZXRcIiApWyAwIF07XG5cdFx0XHRpZiAoIGZpZWxkc2V0ICkge1xuXHRcdFx0XHRmb2N1c2FibGVJZlZpc2libGUgPSAhZmllbGRzZXQuZGlzYWJsZWQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGVsc2UgaWYgKCBcImFcIiA9PT0gbm9kZU5hbWUgKSB7XG5cdFx0Zm9jdXNhYmxlSWZWaXNpYmxlID0gZWxlbWVudC5ocmVmIHx8IGhhc1RhYmluZGV4O1xuXHR9IGVsc2Uge1xuXHRcdGZvY3VzYWJsZUlmVmlzaWJsZSA9IGhhc1RhYmluZGV4O1xuXHR9XG5cblx0cmV0dXJuIGZvY3VzYWJsZUlmVmlzaWJsZSAmJiAkKCBlbGVtZW50ICkuaXMoIFwiOnZpc2libGVcIiApICYmIHZpc2libGUoICQoIGVsZW1lbnQgKSApO1xufTtcblxuLy8gU3VwcG9ydDogSUUgOCBvbmx5XG4vLyBJRSA4IGRvZXNuJ3QgcmVzb2x2ZSBpbmhlcml0IHRvIHZpc2libGUvaGlkZGVuIGZvciBjb21wdXRlZCB2YWx1ZXNcbmZ1bmN0aW9uIHZpc2libGUoIGVsZW1lbnQgKSB7XG5cdHZhciB2aXNpYmlsaXR5ID0gZWxlbWVudC5jc3MoIFwidmlzaWJpbGl0eVwiICk7XG5cdHdoaWxlICggdmlzaWJpbGl0eSA9PT0gXCJpbmhlcml0XCIgKSB7XG5cdFx0ZWxlbWVudCA9IGVsZW1lbnQucGFyZW50KCk7XG5cdFx0dmlzaWJpbGl0eSA9IGVsZW1lbnQuY3NzKCBcInZpc2liaWxpdHlcIiApO1xuXHR9XG5cdHJldHVybiB2aXNpYmlsaXR5ICE9PSBcImhpZGRlblwiO1xufVxuXG4kLmV4dGVuZCggJC5leHByWyBcIjpcIiBdLCB7XG5cdGZvY3VzYWJsZTogZnVuY3Rpb24oIGVsZW1lbnQgKSB7XG5cdFx0cmV0dXJuICQudWkuZm9jdXNhYmxlKCBlbGVtZW50LCAkLmF0dHIoIGVsZW1lbnQsIFwidGFiaW5kZXhcIiApICE9IG51bGwgKTtcblx0fVxufSApO1xuXG5yZXR1cm4gJC51aS5mb2N1c2FibGU7XG5cbn0gKSApO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvanF1ZXJ5LXVpL3VpL2ZvY3VzYWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gdGFBeFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIoIGZ1bmN0aW9uKCBmYWN0b3J5ICkge1xuXHRpZiAoIHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kICkge1xuXG5cdFx0Ly8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuXHRcdGRlZmluZSggWyBcImpxdWVyeVwiLCBcIi4vdmVyc2lvblwiIF0sIGZhY3RvcnkgKTtcblx0fSBlbHNlIHtcblxuXHRcdC8vIEJyb3dzZXIgZ2xvYmFsc1xuXHRcdGZhY3RvcnkoIGpRdWVyeSApO1xuXHR9XG59ICggZnVuY3Rpb24oICQgKSB7XG5cbi8vIFN1cHBvcnQ6IElFOCBPbmx5XG4vLyBJRTggZG9lcyBub3Qgc3VwcG9ydCB0aGUgZm9ybSBhdHRyaWJ1dGUgYW5kIHdoZW4gaXQgaXMgc3VwcGxpZWQuIEl0IG92ZXJ3cml0ZXMgdGhlIGZvcm0gcHJvcFxuLy8gd2l0aCBhIHN0cmluZywgc28gd2UgbmVlZCB0byBmaW5kIHRoZSBwcm9wZXIgZm9ybS5cbnJldHVybiAkLmZuLmZvcm0gPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHR5cGVvZiB0aGlzWyAwIF0uZm9ybSA9PT0gXCJzdHJpbmdcIiA/IHRoaXMuY2xvc2VzdCggXCJmb3JtXCIgKSA6ICQoIHRoaXNbIDAgXS5mb3JtICk7XG59O1xuXG59ICkgKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2pxdWVyeS11aS91aS9mb3JtLmpzXG4vLyBtb2R1bGUgaWQgPSB2ZlBlXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIVxuICogalF1ZXJ5IFVJIFdpZGdldCAxLjEyLjFcbiAqIGh0dHA6Ly9qcXVlcnl1aS5jb21cbiAqXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogaHR0cDovL2pxdWVyeS5vcmcvbGljZW5zZVxuICovXG5cbi8vPj5sYWJlbDogV2lkZ2V0XG4vLz4+Z3JvdXA6IENvcmVcbi8vPj5kZXNjcmlwdGlvbjogUHJvdmlkZXMgYSBmYWN0b3J5IGZvciBjcmVhdGluZyBzdGF0ZWZ1bCB3aWRnZXRzIHdpdGggYSBjb21tb24gQVBJLlxuLy8+PmRvY3M6IGh0dHA6Ly9hcGkuanF1ZXJ5dWkuY29tL2pRdWVyeS53aWRnZXQvXG4vLz4+ZGVtb3M6IGh0dHA6Ly9qcXVlcnl1aS5jb20vd2lkZ2V0L1xuXG4oIGZ1bmN0aW9uKCBmYWN0b3J5ICkge1xuXHRpZiAoIHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kICkge1xuXG5cdFx0Ly8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuXHRcdGRlZmluZSggWyBcImpxdWVyeVwiLCBcIi4vdmVyc2lvblwiIF0sIGZhY3RvcnkgKTtcblx0fSBlbHNlIHtcblxuXHRcdC8vIEJyb3dzZXIgZ2xvYmFsc1xuXHRcdGZhY3RvcnkoIGpRdWVyeSApO1xuXHR9XG59KCBmdW5jdGlvbiggJCApIHtcblxudmFyIHdpZGdldFV1aWQgPSAwO1xudmFyIHdpZGdldFNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXG4kLmNsZWFuRGF0YSA9ICggZnVuY3Rpb24oIG9yaWcgKSB7XG5cdHJldHVybiBmdW5jdGlvbiggZWxlbXMgKSB7XG5cdFx0dmFyIGV2ZW50cywgZWxlbSwgaTtcblx0XHRmb3IgKCBpID0gMDsgKCBlbGVtID0gZWxlbXNbIGkgXSApICE9IG51bGw7IGkrKyApIHtcblx0XHRcdHRyeSB7XG5cblx0XHRcdFx0Ly8gT25seSB0cmlnZ2VyIHJlbW92ZSB3aGVuIG5lY2Vzc2FyeSB0byBzYXZlIHRpbWVcblx0XHRcdFx0ZXZlbnRzID0gJC5fZGF0YSggZWxlbSwgXCJldmVudHNcIiApO1xuXHRcdFx0XHRpZiAoIGV2ZW50cyAmJiBldmVudHMucmVtb3ZlICkge1xuXHRcdFx0XHRcdCQoIGVsZW0gKS50cmlnZ2VySGFuZGxlciggXCJyZW1vdmVcIiApO1xuXHRcdFx0XHR9XG5cblx0XHRcdC8vIEh0dHA6Ly9idWdzLmpxdWVyeS5jb20vdGlja2V0LzgyMzVcblx0XHRcdH0gY2F0Y2ggKCBlICkge31cblx0XHR9XG5cdFx0b3JpZyggZWxlbXMgKTtcblx0fTtcbn0gKSggJC5jbGVhbkRhdGEgKTtcblxuJC53aWRnZXQgPSBmdW5jdGlvbiggbmFtZSwgYmFzZSwgcHJvdG90eXBlICkge1xuXHR2YXIgZXhpc3RpbmdDb25zdHJ1Y3RvciwgY29uc3RydWN0b3IsIGJhc2VQcm90b3R5cGU7XG5cblx0Ly8gUHJveGllZFByb3RvdHlwZSBhbGxvd3MgdGhlIHByb3ZpZGVkIHByb3RvdHlwZSB0byByZW1haW4gdW5tb2RpZmllZFxuXHQvLyBzbyB0aGF0IGl0IGNhbiBiZSB1c2VkIGFzIGEgbWl4aW4gZm9yIG11bHRpcGxlIHdpZGdldHMgKCM4ODc2KVxuXHR2YXIgcHJveGllZFByb3RvdHlwZSA9IHt9O1xuXG5cdHZhciBuYW1lc3BhY2UgPSBuYW1lLnNwbGl0KCBcIi5cIiApWyAwIF07XG5cdG5hbWUgPSBuYW1lLnNwbGl0KCBcIi5cIiApWyAxIF07XG5cdHZhciBmdWxsTmFtZSA9IG5hbWVzcGFjZSArIFwiLVwiICsgbmFtZTtcblxuXHRpZiAoICFwcm90b3R5cGUgKSB7XG5cdFx0cHJvdG90eXBlID0gYmFzZTtcblx0XHRiYXNlID0gJC5XaWRnZXQ7XG5cdH1cblxuXHRpZiAoICQuaXNBcnJheSggcHJvdG90eXBlICkgKSB7XG5cdFx0cHJvdG90eXBlID0gJC5leHRlbmQuYXBwbHkoIG51bGwsIFsge30gXS5jb25jYXQoIHByb3RvdHlwZSApICk7XG5cdH1cblxuXHQvLyBDcmVhdGUgc2VsZWN0b3IgZm9yIHBsdWdpblxuXHQkLmV4cHJbIFwiOlwiIF1bIGZ1bGxOYW1lLnRvTG93ZXJDYXNlKCkgXSA9IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHJldHVybiAhISQuZGF0YSggZWxlbSwgZnVsbE5hbWUgKTtcblx0fTtcblxuXHQkWyBuYW1lc3BhY2UgXSA9ICRbIG5hbWVzcGFjZSBdIHx8IHt9O1xuXHRleGlzdGluZ0NvbnN0cnVjdG9yID0gJFsgbmFtZXNwYWNlIF1bIG5hbWUgXTtcblx0Y29uc3RydWN0b3IgPSAkWyBuYW1lc3BhY2UgXVsgbmFtZSBdID0gZnVuY3Rpb24oIG9wdGlvbnMsIGVsZW1lbnQgKSB7XG5cblx0XHQvLyBBbGxvdyBpbnN0YW50aWF0aW9uIHdpdGhvdXQgXCJuZXdcIiBrZXl3b3JkXG5cdFx0aWYgKCAhdGhpcy5fY3JlYXRlV2lkZ2V0ICkge1xuXHRcdFx0cmV0dXJuIG5ldyBjb25zdHJ1Y3Rvciggb3B0aW9ucywgZWxlbWVudCApO1xuXHRcdH1cblxuXHRcdC8vIEFsbG93IGluc3RhbnRpYXRpb24gd2l0aG91dCBpbml0aWFsaXppbmcgZm9yIHNpbXBsZSBpbmhlcml0YW5jZVxuXHRcdC8vIG11c3QgdXNlIFwibmV3XCIga2V5d29yZCAodGhlIGNvZGUgYWJvdmUgYWx3YXlzIHBhc3NlcyBhcmdzKVxuXHRcdGlmICggYXJndW1lbnRzLmxlbmd0aCApIHtcblx0XHRcdHRoaXMuX2NyZWF0ZVdpZGdldCggb3B0aW9ucywgZWxlbWVudCApO1xuXHRcdH1cblx0fTtcblxuXHQvLyBFeHRlbmQgd2l0aCB0aGUgZXhpc3RpbmcgY29uc3RydWN0b3IgdG8gY2Fycnkgb3ZlciBhbnkgc3RhdGljIHByb3BlcnRpZXNcblx0JC5leHRlbmQoIGNvbnN0cnVjdG9yLCBleGlzdGluZ0NvbnN0cnVjdG9yLCB7XG5cdFx0dmVyc2lvbjogcHJvdG90eXBlLnZlcnNpb24sXG5cblx0XHQvLyBDb3B5IHRoZSBvYmplY3QgdXNlZCB0byBjcmVhdGUgdGhlIHByb3RvdHlwZSBpbiBjYXNlIHdlIG5lZWQgdG9cblx0XHQvLyByZWRlZmluZSB0aGUgd2lkZ2V0IGxhdGVyXG5cdFx0X3Byb3RvOiAkLmV4dGVuZCgge30sIHByb3RvdHlwZSApLFxuXG5cdFx0Ly8gVHJhY2sgd2lkZ2V0cyB0aGF0IGluaGVyaXQgZnJvbSB0aGlzIHdpZGdldCBpbiBjYXNlIHRoaXMgd2lkZ2V0IGlzXG5cdFx0Ly8gcmVkZWZpbmVkIGFmdGVyIGEgd2lkZ2V0IGluaGVyaXRzIGZyb20gaXRcblx0XHRfY2hpbGRDb25zdHJ1Y3RvcnM6IFtdXG5cdH0gKTtcblxuXHRiYXNlUHJvdG90eXBlID0gbmV3IGJhc2UoKTtcblxuXHQvLyBXZSBuZWVkIHRvIG1ha2UgdGhlIG9wdGlvbnMgaGFzaCBhIHByb3BlcnR5IGRpcmVjdGx5IG9uIHRoZSBuZXcgaW5zdGFuY2Vcblx0Ly8gb3RoZXJ3aXNlIHdlJ2xsIG1vZGlmeSB0aGUgb3B0aW9ucyBoYXNoIG9uIHRoZSBwcm90b3R5cGUgdGhhdCB3ZSdyZVxuXHQvLyBpbmhlcml0aW5nIGZyb21cblx0YmFzZVByb3RvdHlwZS5vcHRpb25zID0gJC53aWRnZXQuZXh0ZW5kKCB7fSwgYmFzZVByb3RvdHlwZS5vcHRpb25zICk7XG5cdCQuZWFjaCggcHJvdG90eXBlLCBmdW5jdGlvbiggcHJvcCwgdmFsdWUgKSB7XG5cdFx0aWYgKCAhJC5pc0Z1bmN0aW9uKCB2YWx1ZSApICkge1xuXHRcdFx0cHJveGllZFByb3RvdHlwZVsgcHJvcCBdID0gdmFsdWU7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHByb3hpZWRQcm90b3R5cGVbIHByb3AgXSA9ICggZnVuY3Rpb24oKSB7XG5cdFx0XHRmdW5jdGlvbiBfc3VwZXIoKSB7XG5cdFx0XHRcdHJldHVybiBiYXNlLnByb3RvdHlwZVsgcHJvcCBdLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcblx0XHRcdH1cblxuXHRcdFx0ZnVuY3Rpb24gX3N1cGVyQXBwbHkoIGFyZ3MgKSB7XG5cdFx0XHRcdHJldHVybiBiYXNlLnByb3RvdHlwZVsgcHJvcCBdLmFwcGx5KCB0aGlzLCBhcmdzICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIF9fc3VwZXIgPSB0aGlzLl9zdXBlcjtcblx0XHRcdFx0dmFyIF9fc3VwZXJBcHBseSA9IHRoaXMuX3N1cGVyQXBwbHk7XG5cdFx0XHRcdHZhciByZXR1cm5WYWx1ZTtcblxuXHRcdFx0XHR0aGlzLl9zdXBlciA9IF9zdXBlcjtcblx0XHRcdFx0dGhpcy5fc3VwZXJBcHBseSA9IF9zdXBlckFwcGx5O1xuXG5cdFx0XHRcdHJldHVyblZhbHVlID0gdmFsdWUuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuXG5cdFx0XHRcdHRoaXMuX3N1cGVyID0gX19zdXBlcjtcblx0XHRcdFx0dGhpcy5fc3VwZXJBcHBseSA9IF9fc3VwZXJBcHBseTtcblxuXHRcdFx0XHRyZXR1cm4gcmV0dXJuVmFsdWU7XG5cdFx0XHR9O1xuXHRcdH0gKSgpO1xuXHR9ICk7XG5cdGNvbnN0cnVjdG9yLnByb3RvdHlwZSA9ICQud2lkZ2V0LmV4dGVuZCggYmFzZVByb3RvdHlwZSwge1xuXG5cdFx0Ly8gVE9ETzogcmVtb3ZlIHN1cHBvcnQgZm9yIHdpZGdldEV2ZW50UHJlZml4XG5cdFx0Ly8gYWx3YXlzIHVzZSB0aGUgbmFtZSArIGEgY29sb24gYXMgdGhlIHByZWZpeCwgZS5nLiwgZHJhZ2dhYmxlOnN0YXJ0XG5cdFx0Ly8gZG9uJ3QgcHJlZml4IGZvciB3aWRnZXRzIHRoYXQgYXJlbid0IERPTS1iYXNlZFxuXHRcdHdpZGdldEV2ZW50UHJlZml4OiBleGlzdGluZ0NvbnN0cnVjdG9yID8gKCBiYXNlUHJvdG90eXBlLndpZGdldEV2ZW50UHJlZml4IHx8IG5hbWUgKSA6IG5hbWVcblx0fSwgcHJveGllZFByb3RvdHlwZSwge1xuXHRcdGNvbnN0cnVjdG9yOiBjb25zdHJ1Y3Rvcixcblx0XHRuYW1lc3BhY2U6IG5hbWVzcGFjZSxcblx0XHR3aWRnZXROYW1lOiBuYW1lLFxuXHRcdHdpZGdldEZ1bGxOYW1lOiBmdWxsTmFtZVxuXHR9ICk7XG5cblx0Ly8gSWYgdGhpcyB3aWRnZXQgaXMgYmVpbmcgcmVkZWZpbmVkIHRoZW4gd2UgbmVlZCB0byBmaW5kIGFsbCB3aWRnZXRzIHRoYXRcblx0Ly8gYXJlIGluaGVyaXRpbmcgZnJvbSBpdCBhbmQgcmVkZWZpbmUgYWxsIG9mIHRoZW0gc28gdGhhdCB0aGV5IGluaGVyaXQgZnJvbVxuXHQvLyB0aGUgbmV3IHZlcnNpb24gb2YgdGhpcyB3aWRnZXQuIFdlJ3JlIGVzc2VudGlhbGx5IHRyeWluZyB0byByZXBsYWNlIG9uZVxuXHQvLyBsZXZlbCBpbiB0aGUgcHJvdG90eXBlIGNoYWluLlxuXHRpZiAoIGV4aXN0aW5nQ29uc3RydWN0b3IgKSB7XG5cdFx0JC5lYWNoKCBleGlzdGluZ0NvbnN0cnVjdG9yLl9jaGlsZENvbnN0cnVjdG9ycywgZnVuY3Rpb24oIGksIGNoaWxkICkge1xuXHRcdFx0dmFyIGNoaWxkUHJvdG90eXBlID0gY2hpbGQucHJvdG90eXBlO1xuXG5cdFx0XHQvLyBSZWRlZmluZSB0aGUgY2hpbGQgd2lkZ2V0IHVzaW5nIHRoZSBzYW1lIHByb3RvdHlwZSB0aGF0IHdhc1xuXHRcdFx0Ly8gb3JpZ2luYWxseSB1c2VkLCBidXQgaW5oZXJpdCBmcm9tIHRoZSBuZXcgdmVyc2lvbiBvZiB0aGUgYmFzZVxuXHRcdFx0JC53aWRnZXQoIGNoaWxkUHJvdG90eXBlLm5hbWVzcGFjZSArIFwiLlwiICsgY2hpbGRQcm90b3R5cGUud2lkZ2V0TmFtZSwgY29uc3RydWN0b3IsXG5cdFx0XHRcdGNoaWxkLl9wcm90byApO1xuXHRcdH0gKTtcblxuXHRcdC8vIFJlbW92ZSB0aGUgbGlzdCBvZiBleGlzdGluZyBjaGlsZCBjb25zdHJ1Y3RvcnMgZnJvbSB0aGUgb2xkIGNvbnN0cnVjdG9yXG5cdFx0Ly8gc28gdGhlIG9sZCBjaGlsZCBjb25zdHJ1Y3RvcnMgY2FuIGJlIGdhcmJhZ2UgY29sbGVjdGVkXG5cdFx0ZGVsZXRlIGV4aXN0aW5nQ29uc3RydWN0b3IuX2NoaWxkQ29uc3RydWN0b3JzO1xuXHR9IGVsc2Uge1xuXHRcdGJhc2UuX2NoaWxkQ29uc3RydWN0b3JzLnB1c2goIGNvbnN0cnVjdG9yICk7XG5cdH1cblxuXHQkLndpZGdldC5icmlkZ2UoIG5hbWUsIGNvbnN0cnVjdG9yICk7XG5cblx0cmV0dXJuIGNvbnN0cnVjdG9yO1xufTtcblxuJC53aWRnZXQuZXh0ZW5kID0gZnVuY3Rpb24oIHRhcmdldCApIHtcblx0dmFyIGlucHV0ID0gd2lkZ2V0U2xpY2UuY2FsbCggYXJndW1lbnRzLCAxICk7XG5cdHZhciBpbnB1dEluZGV4ID0gMDtcblx0dmFyIGlucHV0TGVuZ3RoID0gaW5wdXQubGVuZ3RoO1xuXHR2YXIga2V5O1xuXHR2YXIgdmFsdWU7XG5cblx0Zm9yICggOyBpbnB1dEluZGV4IDwgaW5wdXRMZW5ndGg7IGlucHV0SW5kZXgrKyApIHtcblx0XHRmb3IgKCBrZXkgaW4gaW5wdXRbIGlucHV0SW5kZXggXSApIHtcblx0XHRcdHZhbHVlID0gaW5wdXRbIGlucHV0SW5kZXggXVsga2V5IF07XG5cdFx0XHRpZiAoIGlucHV0WyBpbnB1dEluZGV4IF0uaGFzT3duUHJvcGVydHkoIGtleSApICYmIHZhbHVlICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0Ly8gQ2xvbmUgb2JqZWN0c1xuXHRcdFx0XHRpZiAoICQuaXNQbGFpbk9iamVjdCggdmFsdWUgKSApIHtcblx0XHRcdFx0XHR0YXJnZXRbIGtleSBdID0gJC5pc1BsYWluT2JqZWN0KCB0YXJnZXRbIGtleSBdICkgP1xuXHRcdFx0XHRcdFx0JC53aWRnZXQuZXh0ZW5kKCB7fSwgdGFyZ2V0WyBrZXkgXSwgdmFsdWUgKSA6XG5cblx0XHRcdFx0XHRcdC8vIERvbid0IGV4dGVuZCBzdHJpbmdzLCBhcnJheXMsIGV0Yy4gd2l0aCBvYmplY3RzXG5cdFx0XHRcdFx0XHQkLndpZGdldC5leHRlbmQoIHt9LCB2YWx1ZSApO1xuXG5cdFx0XHRcdC8vIENvcHkgZXZlcnl0aGluZyBlbHNlIGJ5IHJlZmVyZW5jZVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRhcmdldFsga2V5IF0gPSB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gdGFyZ2V0O1xufTtcblxuJC53aWRnZXQuYnJpZGdlID0gZnVuY3Rpb24oIG5hbWUsIG9iamVjdCApIHtcblx0dmFyIGZ1bGxOYW1lID0gb2JqZWN0LnByb3RvdHlwZS53aWRnZXRGdWxsTmFtZSB8fCBuYW1lO1xuXHQkLmZuWyBuYW1lIF0gPSBmdW5jdGlvbiggb3B0aW9ucyApIHtcblx0XHR2YXIgaXNNZXRob2RDYWxsID0gdHlwZW9mIG9wdGlvbnMgPT09IFwic3RyaW5nXCI7XG5cdFx0dmFyIGFyZ3MgPSB3aWRnZXRTbGljZS5jYWxsKCBhcmd1bWVudHMsIDEgKTtcblx0XHR2YXIgcmV0dXJuVmFsdWUgPSB0aGlzO1xuXG5cdFx0aWYgKCBpc01ldGhvZENhbGwgKSB7XG5cblx0XHRcdC8vIElmIHRoaXMgaXMgYW4gZW1wdHkgY29sbGVjdGlvbiwgd2UgbmVlZCB0byBoYXZlIHRoZSBpbnN0YW5jZSBtZXRob2Rcblx0XHRcdC8vIHJldHVybiB1bmRlZmluZWQgaW5zdGVhZCBvZiB0aGUgalF1ZXJ5IGluc3RhbmNlXG5cdFx0XHRpZiAoICF0aGlzLmxlbmd0aCAmJiBvcHRpb25zID09PSBcImluc3RhbmNlXCIgKSB7XG5cdFx0XHRcdHJldHVyblZhbHVlID0gdW5kZWZpbmVkO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHR2YXIgbWV0aG9kVmFsdWU7XG5cdFx0XHRcdFx0dmFyIGluc3RhbmNlID0gJC5kYXRhKCB0aGlzLCBmdWxsTmFtZSApO1xuXG5cdFx0XHRcdFx0aWYgKCBvcHRpb25zID09PSBcImluc3RhbmNlXCIgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm5WYWx1ZSA9IGluc3RhbmNlO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICggIWluc3RhbmNlICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuICQuZXJyb3IoIFwiY2Fubm90IGNhbGwgbWV0aG9kcyBvbiBcIiArIG5hbWUgK1xuXHRcdFx0XHRcdFx0XHRcIiBwcmlvciB0byBpbml0aWFsaXphdGlvbjsgXCIgK1xuXHRcdFx0XHRcdFx0XHRcImF0dGVtcHRlZCB0byBjYWxsIG1ldGhvZCAnXCIgKyBvcHRpb25zICsgXCInXCIgKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoICEkLmlzRnVuY3Rpb24oIGluc3RhbmNlWyBvcHRpb25zIF0gKSB8fCBvcHRpb25zLmNoYXJBdCggMCApID09PSBcIl9cIiApIHtcblx0XHRcdFx0XHRcdHJldHVybiAkLmVycm9yKCBcIm5vIHN1Y2ggbWV0aG9kICdcIiArIG9wdGlvbnMgKyBcIicgZm9yIFwiICsgbmFtZSArXG5cdFx0XHRcdFx0XHRcdFwiIHdpZGdldCBpbnN0YW5jZVwiICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0bWV0aG9kVmFsdWUgPSBpbnN0YW5jZVsgb3B0aW9ucyBdLmFwcGx5KCBpbnN0YW5jZSwgYXJncyApO1xuXG5cdFx0XHRcdFx0aWYgKCBtZXRob2RWYWx1ZSAhPT0gaW5zdGFuY2UgJiYgbWV0aG9kVmFsdWUgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHRcdHJldHVyblZhbHVlID0gbWV0aG9kVmFsdWUgJiYgbWV0aG9kVmFsdWUuanF1ZXJ5ID9cblx0XHRcdFx0XHRcdFx0cmV0dXJuVmFsdWUucHVzaFN0YWNrKCBtZXRob2RWYWx1ZS5nZXQoKSApIDpcblx0XHRcdFx0XHRcdFx0bWV0aG9kVmFsdWU7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9ICk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Ly8gQWxsb3cgbXVsdGlwbGUgaGFzaGVzIHRvIGJlIHBhc3NlZCBvbiBpbml0XG5cdFx0XHRpZiAoIGFyZ3MubGVuZ3RoICkge1xuXHRcdFx0XHRvcHRpb25zID0gJC53aWRnZXQuZXh0ZW5kLmFwcGx5KCBudWxsLCBbIG9wdGlvbnMgXS5jb25jYXQoIGFyZ3MgKSApO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgaW5zdGFuY2UgPSAkLmRhdGEoIHRoaXMsIGZ1bGxOYW1lICk7XG5cdFx0XHRcdGlmICggaW5zdGFuY2UgKSB7XG5cdFx0XHRcdFx0aW5zdGFuY2Uub3B0aW9uKCBvcHRpb25zIHx8IHt9ICk7XG5cdFx0XHRcdFx0aWYgKCBpbnN0YW5jZS5faW5pdCApIHtcblx0XHRcdFx0XHRcdGluc3RhbmNlLl9pbml0KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCQuZGF0YSggdGhpcywgZnVsbE5hbWUsIG5ldyBvYmplY3QoIG9wdGlvbnMsIHRoaXMgKSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJldHVyblZhbHVlO1xuXHR9O1xufTtcblxuJC5XaWRnZXQgPSBmdW5jdGlvbiggLyogb3B0aW9ucywgZWxlbWVudCAqLyApIHt9O1xuJC5XaWRnZXQuX2NoaWxkQ29uc3RydWN0b3JzID0gW107XG5cbiQuV2lkZ2V0LnByb3RvdHlwZSA9IHtcblx0d2lkZ2V0TmFtZTogXCJ3aWRnZXRcIixcblx0d2lkZ2V0RXZlbnRQcmVmaXg6IFwiXCIsXG5cdGRlZmF1bHRFbGVtZW50OiBcIjxkaXY+XCIsXG5cblx0b3B0aW9uczoge1xuXHRcdGNsYXNzZXM6IHt9LFxuXHRcdGRpc2FibGVkOiBmYWxzZSxcblxuXHRcdC8vIENhbGxiYWNrc1xuXHRcdGNyZWF0ZTogbnVsbFxuXHR9LFxuXG5cdF9jcmVhdGVXaWRnZXQ6IGZ1bmN0aW9uKCBvcHRpb25zLCBlbGVtZW50ICkge1xuXHRcdGVsZW1lbnQgPSAkKCBlbGVtZW50IHx8IHRoaXMuZGVmYXVsdEVsZW1lbnQgfHwgdGhpcyApWyAwIF07XG5cdFx0dGhpcy5lbGVtZW50ID0gJCggZWxlbWVudCApO1xuXHRcdHRoaXMudXVpZCA9IHdpZGdldFV1aWQrKztcblx0XHR0aGlzLmV2ZW50TmFtZXNwYWNlID0gXCIuXCIgKyB0aGlzLndpZGdldE5hbWUgKyB0aGlzLnV1aWQ7XG5cblx0XHR0aGlzLmJpbmRpbmdzID0gJCgpO1xuXHRcdHRoaXMuaG92ZXJhYmxlID0gJCgpO1xuXHRcdHRoaXMuZm9jdXNhYmxlID0gJCgpO1xuXHRcdHRoaXMuY2xhc3Nlc0VsZW1lbnRMb29rdXAgPSB7fTtcblxuXHRcdGlmICggZWxlbWVudCAhPT0gdGhpcyApIHtcblx0XHRcdCQuZGF0YSggZWxlbWVudCwgdGhpcy53aWRnZXRGdWxsTmFtZSwgdGhpcyApO1xuXHRcdFx0dGhpcy5fb24oIHRydWUsIHRoaXMuZWxlbWVudCwge1xuXHRcdFx0XHRyZW1vdmU6IGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHRcdFx0XHRpZiAoIGV2ZW50LnRhcmdldCA9PT0gZWxlbWVudCApIHtcblx0XHRcdFx0XHRcdHRoaXMuZGVzdHJveSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHRcdFx0dGhpcy5kb2N1bWVudCA9ICQoIGVsZW1lbnQuc3R5bGUgP1xuXG5cdFx0XHRcdC8vIEVsZW1lbnQgd2l0aGluIHRoZSBkb2N1bWVudFxuXHRcdFx0XHRlbGVtZW50Lm93bmVyRG9jdW1lbnQgOlxuXG5cdFx0XHRcdC8vIEVsZW1lbnQgaXMgd2luZG93IG9yIGRvY3VtZW50XG5cdFx0XHRcdGVsZW1lbnQuZG9jdW1lbnQgfHwgZWxlbWVudCApO1xuXHRcdFx0dGhpcy53aW5kb3cgPSAkKCB0aGlzLmRvY3VtZW50WyAwIF0uZGVmYXVsdFZpZXcgfHwgdGhpcy5kb2N1bWVudFsgMCBdLnBhcmVudFdpbmRvdyApO1xuXHRcdH1cblxuXHRcdHRoaXMub3B0aW9ucyA9ICQud2lkZ2V0LmV4dGVuZCgge30sXG5cdFx0XHR0aGlzLm9wdGlvbnMsXG5cdFx0XHR0aGlzLl9nZXRDcmVhdGVPcHRpb25zKCksXG5cdFx0XHRvcHRpb25zICk7XG5cblx0XHR0aGlzLl9jcmVhdGUoKTtcblxuXHRcdGlmICggdGhpcy5vcHRpb25zLmRpc2FibGVkICkge1xuXHRcdFx0dGhpcy5fc2V0T3B0aW9uRGlzYWJsZWQoIHRoaXMub3B0aW9ucy5kaXNhYmxlZCApO1xuXHRcdH1cblxuXHRcdHRoaXMuX3RyaWdnZXIoIFwiY3JlYXRlXCIsIG51bGwsIHRoaXMuX2dldENyZWF0ZUV2ZW50RGF0YSgpICk7XG5cdFx0dGhpcy5faW5pdCgpO1xuXHR9LFxuXG5cdF9nZXRDcmVhdGVPcHRpb25zOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4ge307XG5cdH0sXG5cblx0X2dldENyZWF0ZUV2ZW50RGF0YTogJC5ub29wLFxuXG5cdF9jcmVhdGU6ICQubm9vcCxcblxuXHRfaW5pdDogJC5ub29wLFxuXG5cdGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciB0aGF0ID0gdGhpcztcblxuXHRcdHRoaXMuX2Rlc3Ryb3koKTtcblx0XHQkLmVhY2goIHRoaXMuY2xhc3Nlc0VsZW1lbnRMb29rdXAsIGZ1bmN0aW9uKCBrZXksIHZhbHVlICkge1xuXHRcdFx0dGhhdC5fcmVtb3ZlQ2xhc3MoIHZhbHVlLCBrZXkgKTtcblx0XHR9ICk7XG5cblx0XHQvLyBXZSBjYW4gcHJvYmFibHkgcmVtb3ZlIHRoZSB1bmJpbmQgY2FsbHMgaW4gMi4wXG5cdFx0Ly8gYWxsIGV2ZW50IGJpbmRpbmdzIHNob3VsZCBnbyB0aHJvdWdoIHRoaXMuX29uKClcblx0XHR0aGlzLmVsZW1lbnRcblx0XHRcdC5vZmYoIHRoaXMuZXZlbnROYW1lc3BhY2UgKVxuXHRcdFx0LnJlbW92ZURhdGEoIHRoaXMud2lkZ2V0RnVsbE5hbWUgKTtcblx0XHR0aGlzLndpZGdldCgpXG5cdFx0XHQub2ZmKCB0aGlzLmV2ZW50TmFtZXNwYWNlIClcblx0XHRcdC5yZW1vdmVBdHRyKCBcImFyaWEtZGlzYWJsZWRcIiApO1xuXG5cdFx0Ly8gQ2xlYW4gdXAgZXZlbnRzIGFuZCBzdGF0ZXNcblx0XHR0aGlzLmJpbmRpbmdzLm9mZiggdGhpcy5ldmVudE5hbWVzcGFjZSApO1xuXHR9LFxuXG5cdF9kZXN0cm95OiAkLm5vb3AsXG5cblx0d2lkZ2V0OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXHR9LFxuXG5cdG9wdGlvbjogZnVuY3Rpb24oIGtleSwgdmFsdWUgKSB7XG5cdFx0dmFyIG9wdGlvbnMgPSBrZXk7XG5cdFx0dmFyIHBhcnRzO1xuXHRcdHZhciBjdXJPcHRpb247XG5cdFx0dmFyIGk7XG5cblx0XHRpZiAoIGFyZ3VtZW50cy5sZW5ndGggPT09IDAgKSB7XG5cblx0XHRcdC8vIERvbid0IHJldHVybiBhIHJlZmVyZW5jZSB0byB0aGUgaW50ZXJuYWwgaGFzaFxuXHRcdFx0cmV0dXJuICQud2lkZ2V0LmV4dGVuZCgge30sIHRoaXMub3B0aW9ucyApO1xuXHRcdH1cblxuXHRcdGlmICggdHlwZW9mIGtleSA9PT0gXCJzdHJpbmdcIiApIHtcblxuXHRcdFx0Ly8gSGFuZGxlIG5lc3RlZCBrZXlzLCBlLmcuLCBcImZvby5iYXJcIiA9PiB7IGZvbzogeyBiYXI6IF9fXyB9IH1cblx0XHRcdG9wdGlvbnMgPSB7fTtcblx0XHRcdHBhcnRzID0ga2V5LnNwbGl0KCBcIi5cIiApO1xuXHRcdFx0a2V5ID0gcGFydHMuc2hpZnQoKTtcblx0XHRcdGlmICggcGFydHMubGVuZ3RoICkge1xuXHRcdFx0XHRjdXJPcHRpb24gPSBvcHRpb25zWyBrZXkgXSA9ICQud2lkZ2V0LmV4dGVuZCgge30sIHRoaXMub3B0aW9uc1sga2V5IF0gKTtcblx0XHRcdFx0Zm9yICggaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGggLSAxOyBpKysgKSB7XG5cdFx0XHRcdFx0Y3VyT3B0aW9uWyBwYXJ0c1sgaSBdIF0gPSBjdXJPcHRpb25bIHBhcnRzWyBpIF0gXSB8fCB7fTtcblx0XHRcdFx0XHRjdXJPcHRpb24gPSBjdXJPcHRpb25bIHBhcnRzWyBpIF0gXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRrZXkgPSBwYXJ0cy5wb3AoKTtcblx0XHRcdFx0aWYgKCBhcmd1bWVudHMubGVuZ3RoID09PSAxICkge1xuXHRcdFx0XHRcdHJldHVybiBjdXJPcHRpb25bIGtleSBdID09PSB1bmRlZmluZWQgPyBudWxsIDogY3VyT3B0aW9uWyBrZXkgXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjdXJPcHRpb25bIGtleSBdID0gdmFsdWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoIGFyZ3VtZW50cy5sZW5ndGggPT09IDEgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMub3B0aW9uc1sga2V5IF0gPT09IHVuZGVmaW5lZCA/IG51bGwgOiB0aGlzLm9wdGlvbnNbIGtleSBdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG9wdGlvbnNbIGtleSBdID0gdmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5fc2V0T3B0aW9ucyggb3B0aW9ucyApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0X3NldE9wdGlvbnM6IGZ1bmN0aW9uKCBvcHRpb25zICkge1xuXHRcdHZhciBrZXk7XG5cblx0XHRmb3IgKCBrZXkgaW4gb3B0aW9ucyApIHtcblx0XHRcdHRoaXMuX3NldE9wdGlvbigga2V5LCBvcHRpb25zWyBrZXkgXSApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdF9zZXRPcHRpb246IGZ1bmN0aW9uKCBrZXksIHZhbHVlICkge1xuXHRcdGlmICgga2V5ID09PSBcImNsYXNzZXNcIiApIHtcblx0XHRcdHRoaXMuX3NldE9wdGlvbkNsYXNzZXMoIHZhbHVlICk7XG5cdFx0fVxuXG5cdFx0dGhpcy5vcHRpb25zWyBrZXkgXSA9IHZhbHVlO1xuXG5cdFx0aWYgKCBrZXkgPT09IFwiZGlzYWJsZWRcIiApIHtcblx0XHRcdHRoaXMuX3NldE9wdGlvbkRpc2FibGVkKCB2YWx1ZSApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdF9zZXRPcHRpb25DbGFzc2VzOiBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0dmFyIGNsYXNzS2V5LCBlbGVtZW50cywgY3VycmVudEVsZW1lbnRzO1xuXG5cdFx0Zm9yICggY2xhc3NLZXkgaW4gdmFsdWUgKSB7XG5cdFx0XHRjdXJyZW50RWxlbWVudHMgPSB0aGlzLmNsYXNzZXNFbGVtZW50TG9va3VwWyBjbGFzc0tleSBdO1xuXHRcdFx0aWYgKCB2YWx1ZVsgY2xhc3NLZXkgXSA9PT0gdGhpcy5vcHRpb25zLmNsYXNzZXNbIGNsYXNzS2V5IF0gfHxcblx0XHRcdFx0XHQhY3VycmVudEVsZW1lbnRzIHx8XG5cdFx0XHRcdFx0IWN1cnJlbnRFbGVtZW50cy5sZW5ndGggKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBXZSBhcmUgZG9pbmcgdGhpcyB0byBjcmVhdGUgYSBuZXcgalF1ZXJ5IG9iamVjdCBiZWNhdXNlIHRoZSBfcmVtb3ZlQ2xhc3MoKSBjYWxsXG5cdFx0XHQvLyBvbiB0aGUgbmV4dCBsaW5lIGlzIGdvaW5nIHRvIGRlc3Ryb3kgdGhlIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudCBlbGVtZW50cyBiZWluZ1xuXHRcdFx0Ly8gdHJhY2tlZC4gV2UgbmVlZCB0byBzYXZlIGEgY29weSBvZiB0aGlzIGNvbGxlY3Rpb24gc28gdGhhdCB3ZSBjYW4gYWRkIHRoZSBuZXcgY2xhc3Nlc1xuXHRcdFx0Ly8gYmVsb3cuXG5cdFx0XHRlbGVtZW50cyA9ICQoIGN1cnJlbnRFbGVtZW50cy5nZXQoKSApO1xuXHRcdFx0dGhpcy5fcmVtb3ZlQ2xhc3MoIGN1cnJlbnRFbGVtZW50cywgY2xhc3NLZXkgKTtcblxuXHRcdFx0Ly8gV2UgZG9uJ3QgdXNlIF9hZGRDbGFzcygpIGhlcmUsIGJlY2F1c2UgdGhhdCB1c2VzIHRoaXMub3B0aW9ucy5jbGFzc2VzXG5cdFx0XHQvLyBmb3IgZ2VuZXJhdGluZyB0aGUgc3RyaW5nIG9mIGNsYXNzZXMuIFdlIHdhbnQgdG8gdXNlIHRoZSB2YWx1ZSBwYXNzZWQgaW4gZnJvbVxuXHRcdFx0Ly8gX3NldE9wdGlvbigpLCB0aGlzIGlzIHRoZSBuZXcgdmFsdWUgb2YgdGhlIGNsYXNzZXMgb3B0aW9uIHdoaWNoIHdhcyBwYXNzZWQgdG9cblx0XHRcdC8vIF9zZXRPcHRpb24oKS4gV2UgcGFzcyB0aGlzIHZhbHVlIGRpcmVjdGx5IHRvIF9jbGFzc2VzKCkuXG5cdFx0XHRlbGVtZW50cy5hZGRDbGFzcyggdGhpcy5fY2xhc3Nlcygge1xuXHRcdFx0XHRlbGVtZW50OiBlbGVtZW50cyxcblx0XHRcdFx0a2V5czogY2xhc3NLZXksXG5cdFx0XHRcdGNsYXNzZXM6IHZhbHVlLFxuXHRcdFx0XHRhZGQ6IHRydWVcblx0XHRcdH0gKSApO1xuXHRcdH1cblx0fSxcblxuXHRfc2V0T3B0aW9uRGlzYWJsZWQ6IGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHR0aGlzLl90b2dnbGVDbGFzcyggdGhpcy53aWRnZXQoKSwgdGhpcy53aWRnZXRGdWxsTmFtZSArIFwiLWRpc2FibGVkXCIsIG51bGwsICEhdmFsdWUgKTtcblxuXHRcdC8vIElmIHRoZSB3aWRnZXQgaXMgYmVjb21pbmcgZGlzYWJsZWQsIHRoZW4gbm90aGluZyBpcyBpbnRlcmFjdGl2ZVxuXHRcdGlmICggdmFsdWUgKSB7XG5cdFx0XHR0aGlzLl9yZW1vdmVDbGFzcyggdGhpcy5ob3ZlcmFibGUsIG51bGwsIFwidWktc3RhdGUtaG92ZXJcIiApO1xuXHRcdFx0dGhpcy5fcmVtb3ZlQ2xhc3MoIHRoaXMuZm9jdXNhYmxlLCBudWxsLCBcInVpLXN0YXRlLWZvY3VzXCIgKTtcblx0XHR9XG5cdH0sXG5cblx0ZW5hYmxlOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5fc2V0T3B0aW9ucyggeyBkaXNhYmxlZDogZmFsc2UgfSApO1xuXHR9LFxuXG5cdGRpc2FibGU6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLl9zZXRPcHRpb25zKCB7IGRpc2FibGVkOiB0cnVlIH0gKTtcblx0fSxcblxuXHRfY2xhc3NlczogZnVuY3Rpb24oIG9wdGlvbnMgKSB7XG5cdFx0dmFyIGZ1bGwgPSBbXTtcblx0XHR2YXIgdGhhdCA9IHRoaXM7XG5cblx0XHRvcHRpb25zID0gJC5leHRlbmQoIHtcblx0XHRcdGVsZW1lbnQ6IHRoaXMuZWxlbWVudCxcblx0XHRcdGNsYXNzZXM6IHRoaXMub3B0aW9ucy5jbGFzc2VzIHx8IHt9XG5cdFx0fSwgb3B0aW9ucyApO1xuXG5cdFx0ZnVuY3Rpb24gcHJvY2Vzc0NsYXNzU3RyaW5nKCBjbGFzc2VzLCBjaGVja09wdGlvbiApIHtcblx0XHRcdHZhciBjdXJyZW50LCBpO1xuXHRcdFx0Zm9yICggaSA9IDA7IGkgPCBjbGFzc2VzLmxlbmd0aDsgaSsrICkge1xuXHRcdFx0XHRjdXJyZW50ID0gdGhhdC5jbGFzc2VzRWxlbWVudExvb2t1cFsgY2xhc3Nlc1sgaSBdIF0gfHwgJCgpO1xuXHRcdFx0XHRpZiAoIG9wdGlvbnMuYWRkICkge1xuXHRcdFx0XHRcdGN1cnJlbnQgPSAkKCAkLnVuaXF1ZSggY3VycmVudC5nZXQoKS5jb25jYXQoIG9wdGlvbnMuZWxlbWVudC5nZXQoKSApICkgKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjdXJyZW50ID0gJCggY3VycmVudC5ub3QoIG9wdGlvbnMuZWxlbWVudCApLmdldCgpICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhhdC5jbGFzc2VzRWxlbWVudExvb2t1cFsgY2xhc3Nlc1sgaSBdIF0gPSBjdXJyZW50O1xuXHRcdFx0XHRmdWxsLnB1c2goIGNsYXNzZXNbIGkgXSApO1xuXHRcdFx0XHRpZiAoIGNoZWNrT3B0aW9uICYmIG9wdGlvbnMuY2xhc3Nlc1sgY2xhc3Nlc1sgaSBdIF0gKSB7XG5cdFx0XHRcdFx0ZnVsbC5wdXNoKCBvcHRpb25zLmNsYXNzZXNbIGNsYXNzZXNbIGkgXSBdICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLl9vbiggb3B0aW9ucy5lbGVtZW50LCB7XG5cdFx0XHRcInJlbW92ZVwiOiBcIl91bnRyYWNrQ2xhc3Nlc0VsZW1lbnRcIlxuXHRcdH0gKTtcblxuXHRcdGlmICggb3B0aW9ucy5rZXlzICkge1xuXHRcdFx0cHJvY2Vzc0NsYXNzU3RyaW5nKCBvcHRpb25zLmtleXMubWF0Y2goIC9cXFMrL2cgKSB8fCBbXSwgdHJ1ZSApO1xuXHRcdH1cblx0XHRpZiAoIG9wdGlvbnMuZXh0cmEgKSB7XG5cdFx0XHRwcm9jZXNzQ2xhc3NTdHJpbmcoIG9wdGlvbnMuZXh0cmEubWF0Y2goIC9cXFMrL2cgKSB8fCBbXSApO1xuXHRcdH1cblxuXHRcdHJldHVybiBmdWxsLmpvaW4oIFwiIFwiICk7XG5cdH0sXG5cblx0X3VudHJhY2tDbGFzc2VzRWxlbWVudDogZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdHZhciB0aGF0ID0gdGhpcztcblx0XHQkLmVhY2goIHRoYXQuY2xhc3Nlc0VsZW1lbnRMb29rdXAsIGZ1bmN0aW9uKCBrZXksIHZhbHVlICkge1xuXHRcdFx0aWYgKCAkLmluQXJyYXkoIGV2ZW50LnRhcmdldCwgdmFsdWUgKSAhPT0gLTEgKSB7XG5cdFx0XHRcdHRoYXQuY2xhc3Nlc0VsZW1lbnRMb29rdXBbIGtleSBdID0gJCggdmFsdWUubm90KCBldmVudC50YXJnZXQgKS5nZXQoKSApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSxcblxuXHRfcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uKCBlbGVtZW50LCBrZXlzLCBleHRyYSApIHtcblx0XHRyZXR1cm4gdGhpcy5fdG9nZ2xlQ2xhc3MoIGVsZW1lbnQsIGtleXMsIGV4dHJhLCBmYWxzZSApO1xuXHR9LFxuXG5cdF9hZGRDbGFzczogZnVuY3Rpb24oIGVsZW1lbnQsIGtleXMsIGV4dHJhICkge1xuXHRcdHJldHVybiB0aGlzLl90b2dnbGVDbGFzcyggZWxlbWVudCwga2V5cywgZXh0cmEsIHRydWUgKTtcblx0fSxcblxuXHRfdG9nZ2xlQ2xhc3M6IGZ1bmN0aW9uKCBlbGVtZW50LCBrZXlzLCBleHRyYSwgYWRkICkge1xuXHRcdGFkZCA9ICggdHlwZW9mIGFkZCA9PT0gXCJib29sZWFuXCIgKSA/IGFkZCA6IGV4dHJhO1xuXHRcdHZhciBzaGlmdCA9ICggdHlwZW9mIGVsZW1lbnQgPT09IFwic3RyaW5nXCIgfHwgZWxlbWVudCA9PT0gbnVsbCApLFxuXHRcdFx0b3B0aW9ucyA9IHtcblx0XHRcdFx0ZXh0cmE6IHNoaWZ0ID8ga2V5cyA6IGV4dHJhLFxuXHRcdFx0XHRrZXlzOiBzaGlmdCA/IGVsZW1lbnQgOiBrZXlzLFxuXHRcdFx0XHRlbGVtZW50OiBzaGlmdCA/IHRoaXMuZWxlbWVudCA6IGVsZW1lbnQsXG5cdFx0XHRcdGFkZDogYWRkXG5cdFx0XHR9O1xuXHRcdG9wdGlvbnMuZWxlbWVudC50b2dnbGVDbGFzcyggdGhpcy5fY2xhc3Nlcyggb3B0aW9ucyApLCBhZGQgKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRfb246IGZ1bmN0aW9uKCBzdXBwcmVzc0Rpc2FibGVkQ2hlY2ssIGVsZW1lbnQsIGhhbmRsZXJzICkge1xuXHRcdHZhciBkZWxlZ2F0ZUVsZW1lbnQ7XG5cdFx0dmFyIGluc3RhbmNlID0gdGhpcztcblxuXHRcdC8vIE5vIHN1cHByZXNzRGlzYWJsZWRDaGVjayBmbGFnLCBzaHVmZmxlIGFyZ3VtZW50c1xuXHRcdGlmICggdHlwZW9mIHN1cHByZXNzRGlzYWJsZWRDaGVjayAhPT0gXCJib29sZWFuXCIgKSB7XG5cdFx0XHRoYW5kbGVycyA9IGVsZW1lbnQ7XG5cdFx0XHRlbGVtZW50ID0gc3VwcHJlc3NEaXNhYmxlZENoZWNrO1xuXHRcdFx0c3VwcHJlc3NEaXNhYmxlZENoZWNrID0gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gTm8gZWxlbWVudCBhcmd1bWVudCwgc2h1ZmZsZSBhbmQgdXNlIHRoaXMuZWxlbWVudFxuXHRcdGlmICggIWhhbmRsZXJzICkge1xuXHRcdFx0aGFuZGxlcnMgPSBlbGVtZW50O1xuXHRcdFx0ZWxlbWVudCA9IHRoaXMuZWxlbWVudDtcblx0XHRcdGRlbGVnYXRlRWxlbWVudCA9IHRoaXMud2lkZ2V0KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGVsZW1lbnQgPSBkZWxlZ2F0ZUVsZW1lbnQgPSAkKCBlbGVtZW50ICk7XG5cdFx0XHR0aGlzLmJpbmRpbmdzID0gdGhpcy5iaW5kaW5ncy5hZGQoIGVsZW1lbnQgKTtcblx0XHR9XG5cblx0XHQkLmVhY2goIGhhbmRsZXJzLCBmdW5jdGlvbiggZXZlbnQsIGhhbmRsZXIgKSB7XG5cdFx0XHRmdW5jdGlvbiBoYW5kbGVyUHJveHkoKSB7XG5cblx0XHRcdFx0Ly8gQWxsb3cgd2lkZ2V0cyB0byBjdXN0b21pemUgdGhlIGRpc2FibGVkIGhhbmRsaW5nXG5cdFx0XHRcdC8vIC0gZGlzYWJsZWQgYXMgYW4gYXJyYXkgaW5zdGVhZCBvZiBib29sZWFuXG5cdFx0XHRcdC8vIC0gZGlzYWJsZWQgY2xhc3MgYXMgbWV0aG9kIGZvciBkaXNhYmxpbmcgaW5kaXZpZHVhbCBwYXJ0c1xuXHRcdFx0XHRpZiAoICFzdXBwcmVzc0Rpc2FibGVkQ2hlY2sgJiZcblx0XHRcdFx0XHRcdCggaW5zdGFuY2Uub3B0aW9ucy5kaXNhYmxlZCA9PT0gdHJ1ZSB8fFxuXHRcdFx0XHRcdFx0JCggdGhpcyApLmhhc0NsYXNzKCBcInVpLXN0YXRlLWRpc2FibGVkXCIgKSApICkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gKCB0eXBlb2YgaGFuZGxlciA9PT0gXCJzdHJpbmdcIiA/IGluc3RhbmNlWyBoYW5kbGVyIF0gOiBoYW5kbGVyIClcblx0XHRcdFx0XHQuYXBwbHkoIGluc3RhbmNlLCBhcmd1bWVudHMgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQ29weSB0aGUgZ3VpZCBzbyBkaXJlY3QgdW5iaW5kaW5nIHdvcmtzXG5cdFx0XHRpZiAoIHR5cGVvZiBoYW5kbGVyICE9PSBcInN0cmluZ1wiICkge1xuXHRcdFx0XHRoYW5kbGVyUHJveHkuZ3VpZCA9IGhhbmRsZXIuZ3VpZCA9XG5cdFx0XHRcdFx0aGFuZGxlci5ndWlkIHx8IGhhbmRsZXJQcm94eS5ndWlkIHx8ICQuZ3VpZCsrO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgbWF0Y2ggPSBldmVudC5tYXRjaCggL14oW1xcdzotXSopXFxzKiguKikkLyApO1xuXHRcdFx0dmFyIGV2ZW50TmFtZSA9IG1hdGNoWyAxIF0gKyBpbnN0YW5jZS5ldmVudE5hbWVzcGFjZTtcblx0XHRcdHZhciBzZWxlY3RvciA9IG1hdGNoWyAyIF07XG5cblx0XHRcdGlmICggc2VsZWN0b3IgKSB7XG5cdFx0XHRcdGRlbGVnYXRlRWxlbWVudC5vbiggZXZlbnROYW1lLCBzZWxlY3RvciwgaGFuZGxlclByb3h5ICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbGVtZW50Lm9uKCBldmVudE5hbWUsIGhhbmRsZXJQcm94eSApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSxcblxuXHRfb2ZmOiBmdW5jdGlvbiggZWxlbWVudCwgZXZlbnROYW1lICkge1xuXHRcdGV2ZW50TmFtZSA9ICggZXZlbnROYW1lIHx8IFwiXCIgKS5zcGxpdCggXCIgXCIgKS5qb2luKCB0aGlzLmV2ZW50TmFtZXNwYWNlICsgXCIgXCIgKSArXG5cdFx0XHR0aGlzLmV2ZW50TmFtZXNwYWNlO1xuXHRcdGVsZW1lbnQub2ZmKCBldmVudE5hbWUgKS5vZmYoIGV2ZW50TmFtZSApO1xuXG5cdFx0Ly8gQ2xlYXIgdGhlIHN0YWNrIHRvIGF2b2lkIG1lbW9yeSBsZWFrcyAoIzEwMDU2KVxuXHRcdHRoaXMuYmluZGluZ3MgPSAkKCB0aGlzLmJpbmRpbmdzLm5vdCggZWxlbWVudCApLmdldCgpICk7XG5cdFx0dGhpcy5mb2N1c2FibGUgPSAkKCB0aGlzLmZvY3VzYWJsZS5ub3QoIGVsZW1lbnQgKS5nZXQoKSApO1xuXHRcdHRoaXMuaG92ZXJhYmxlID0gJCggdGhpcy5ob3ZlcmFibGUubm90KCBlbGVtZW50ICkuZ2V0KCkgKTtcblx0fSxcblxuXHRfZGVsYXk6IGZ1bmN0aW9uKCBoYW5kbGVyLCBkZWxheSApIHtcblx0XHRmdW5jdGlvbiBoYW5kbGVyUHJveHkoKSB7XG5cdFx0XHRyZXR1cm4gKCB0eXBlb2YgaGFuZGxlciA9PT0gXCJzdHJpbmdcIiA/IGluc3RhbmNlWyBoYW5kbGVyIF0gOiBoYW5kbGVyIClcblx0XHRcdFx0LmFwcGx5KCBpbnN0YW5jZSwgYXJndW1lbnRzICk7XG5cdFx0fVxuXHRcdHZhciBpbnN0YW5jZSA9IHRoaXM7XG5cdFx0cmV0dXJuIHNldFRpbWVvdXQoIGhhbmRsZXJQcm94eSwgZGVsYXkgfHwgMCApO1xuXHR9LFxuXG5cdF9ob3ZlcmFibGU6IGZ1bmN0aW9uKCBlbGVtZW50ICkge1xuXHRcdHRoaXMuaG92ZXJhYmxlID0gdGhpcy5ob3ZlcmFibGUuYWRkKCBlbGVtZW50ICk7XG5cdFx0dGhpcy5fb24oIGVsZW1lbnQsIHtcblx0XHRcdG1vdXNlZW50ZXI6IGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHRcdFx0dGhpcy5fYWRkQ2xhc3MoICQoIGV2ZW50LmN1cnJlbnRUYXJnZXQgKSwgbnVsbCwgXCJ1aS1zdGF0ZS1ob3ZlclwiICk7XG5cdFx0XHR9LFxuXHRcdFx0bW91c2VsZWF2ZTogZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdFx0XHR0aGlzLl9yZW1vdmVDbGFzcyggJCggZXZlbnQuY3VycmVudFRhcmdldCApLCBudWxsLCBcInVpLXN0YXRlLWhvdmVyXCIgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH0sXG5cblx0X2ZvY3VzYWJsZTogZnVuY3Rpb24oIGVsZW1lbnQgKSB7XG5cdFx0dGhpcy5mb2N1c2FibGUgPSB0aGlzLmZvY3VzYWJsZS5hZGQoIGVsZW1lbnQgKTtcblx0XHR0aGlzLl9vbiggZWxlbWVudCwge1xuXHRcdFx0Zm9jdXNpbjogZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdFx0XHR0aGlzLl9hZGRDbGFzcyggJCggZXZlbnQuY3VycmVudFRhcmdldCApLCBudWxsLCBcInVpLXN0YXRlLWZvY3VzXCIgKTtcblx0XHRcdH0sXG5cdFx0XHRmb2N1c291dDogZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdFx0XHR0aGlzLl9yZW1vdmVDbGFzcyggJCggZXZlbnQuY3VycmVudFRhcmdldCApLCBudWxsLCBcInVpLXN0YXRlLWZvY3VzXCIgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH0sXG5cblx0X3RyaWdnZXI6IGZ1bmN0aW9uKCB0eXBlLCBldmVudCwgZGF0YSApIHtcblx0XHR2YXIgcHJvcCwgb3JpZztcblx0XHR2YXIgY2FsbGJhY2sgPSB0aGlzLm9wdGlvbnNbIHR5cGUgXTtcblxuXHRcdGRhdGEgPSBkYXRhIHx8IHt9O1xuXHRcdGV2ZW50ID0gJC5FdmVudCggZXZlbnQgKTtcblx0XHRldmVudC50eXBlID0gKCB0eXBlID09PSB0aGlzLndpZGdldEV2ZW50UHJlZml4ID9cblx0XHRcdHR5cGUgOlxuXHRcdFx0dGhpcy53aWRnZXRFdmVudFByZWZpeCArIHR5cGUgKS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0Ly8gVGhlIG9yaWdpbmFsIGV2ZW50IG1heSBjb21lIGZyb20gYW55IGVsZW1lbnRcblx0XHQvLyBzbyB3ZSBuZWVkIHRvIHJlc2V0IHRoZSB0YXJnZXQgb24gdGhlIG5ldyBldmVudFxuXHRcdGV2ZW50LnRhcmdldCA9IHRoaXMuZWxlbWVudFsgMCBdO1xuXG5cdFx0Ly8gQ29weSBvcmlnaW5hbCBldmVudCBwcm9wZXJ0aWVzIG92ZXIgdG8gdGhlIG5ldyBldmVudFxuXHRcdG9yaWcgPSBldmVudC5vcmlnaW5hbEV2ZW50O1xuXHRcdGlmICggb3JpZyApIHtcblx0XHRcdGZvciAoIHByb3AgaW4gb3JpZyApIHtcblx0XHRcdFx0aWYgKCAhKCBwcm9wIGluIGV2ZW50ICkgKSB7XG5cdFx0XHRcdFx0ZXZlbnRbIHByb3AgXSA9IG9yaWdbIHByb3AgXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMuZWxlbWVudC50cmlnZ2VyKCBldmVudCwgZGF0YSApO1xuXHRcdHJldHVybiAhKCAkLmlzRnVuY3Rpb24oIGNhbGxiYWNrICkgJiZcblx0XHRcdGNhbGxiYWNrLmFwcGx5KCB0aGlzLmVsZW1lbnRbIDAgXSwgWyBldmVudCBdLmNvbmNhdCggZGF0YSApICkgPT09IGZhbHNlIHx8XG5cdFx0XHRldmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSApO1xuXHR9XG59O1xuXG4kLmVhY2goIHsgc2hvdzogXCJmYWRlSW5cIiwgaGlkZTogXCJmYWRlT3V0XCIgfSwgZnVuY3Rpb24oIG1ldGhvZCwgZGVmYXVsdEVmZmVjdCApIHtcblx0JC5XaWRnZXQucHJvdG90eXBlWyBcIl9cIiArIG1ldGhvZCBdID0gZnVuY3Rpb24oIGVsZW1lbnQsIG9wdGlvbnMsIGNhbGxiYWNrICkge1xuXHRcdGlmICggdHlwZW9mIG9wdGlvbnMgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRvcHRpb25zID0geyBlZmZlY3Q6IG9wdGlvbnMgfTtcblx0XHR9XG5cblx0XHR2YXIgaGFzT3B0aW9ucztcblx0XHR2YXIgZWZmZWN0TmFtZSA9ICFvcHRpb25zID9cblx0XHRcdG1ldGhvZCA6XG5cdFx0XHRvcHRpb25zID09PSB0cnVlIHx8IHR5cGVvZiBvcHRpb25zID09PSBcIm51bWJlclwiID9cblx0XHRcdFx0ZGVmYXVsdEVmZmVjdCA6XG5cdFx0XHRcdG9wdGlvbnMuZWZmZWN0IHx8IGRlZmF1bHRFZmZlY3Q7XG5cblx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0XHRpZiAoIHR5cGVvZiBvcHRpb25zID09PSBcIm51bWJlclwiICkge1xuXHRcdFx0b3B0aW9ucyA9IHsgZHVyYXRpb246IG9wdGlvbnMgfTtcblx0XHR9XG5cblx0XHRoYXNPcHRpb25zID0gISQuaXNFbXB0eU9iamVjdCggb3B0aW9ucyApO1xuXHRcdG9wdGlvbnMuY29tcGxldGUgPSBjYWxsYmFjaztcblxuXHRcdGlmICggb3B0aW9ucy5kZWxheSApIHtcblx0XHRcdGVsZW1lbnQuZGVsYXkoIG9wdGlvbnMuZGVsYXkgKTtcblx0XHR9XG5cblx0XHRpZiAoIGhhc09wdGlvbnMgJiYgJC5lZmZlY3RzICYmICQuZWZmZWN0cy5lZmZlY3RbIGVmZmVjdE5hbWUgXSApIHtcblx0XHRcdGVsZW1lbnRbIG1ldGhvZCBdKCBvcHRpb25zICk7XG5cdFx0fSBlbHNlIGlmICggZWZmZWN0TmFtZSAhPT0gbWV0aG9kICYmIGVsZW1lbnRbIGVmZmVjdE5hbWUgXSApIHtcblx0XHRcdGVsZW1lbnRbIGVmZmVjdE5hbWUgXSggb3B0aW9ucy5kdXJhdGlvbiwgb3B0aW9ucy5lYXNpbmcsIGNhbGxiYWNrICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGVsZW1lbnQucXVldWUoIGZ1bmN0aW9uKCBuZXh0ICkge1xuXHRcdFx0XHQkKCB0aGlzIClbIG1ldGhvZCBdKCk7XG5cdFx0XHRcdGlmICggY2FsbGJhY2sgKSB7XG5cdFx0XHRcdFx0Y2FsbGJhY2suY2FsbCggZWxlbWVudFsgMCBdICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0bmV4dCgpO1xuXHRcdFx0fSApO1xuXHRcdH1cblx0fTtcbn0gKTtcblxucmV0dXJuICQud2lkZ2V0O1xuXG59ICkgKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2pxdWVyeS11aS91aS93aWRnZXQuanNcbi8vIG1vZHVsZSBpZCA9IHoxa3dcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiKCBmdW5jdGlvbiggZmFjdG9yeSApIHtcblx0aWYgKCB0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCApIHtcblxuXHRcdC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cblx0XHRkZWZpbmUoIFsgXCJqcXVlcnlcIiwgXCIuL3ZlcnNpb25cIiBdLCBmYWN0b3J5ICk7XG5cdH0gZWxzZSB7XG5cblx0XHQvLyBCcm93c2VyIGdsb2JhbHNcblx0XHRmYWN0b3J5KCBqUXVlcnkgKTtcblx0fVxufSAoIGZ1bmN0aW9uKCAkICkge1xuXG4vLyAkLnVpLnBsdWdpbiBpcyBkZXByZWNhdGVkLiBVc2UgJC53aWRnZXQoKSBleHRlbnNpb25zIGluc3RlYWQuXG5yZXR1cm4gJC51aS5wbHVnaW4gPSB7XG5cdGFkZDogZnVuY3Rpb24oIG1vZHVsZSwgb3B0aW9uLCBzZXQgKSB7XG5cdFx0dmFyIGksXG5cdFx0XHRwcm90byA9ICQudWlbIG1vZHVsZSBdLnByb3RvdHlwZTtcblx0XHRmb3IgKCBpIGluIHNldCApIHtcblx0XHRcdHByb3RvLnBsdWdpbnNbIGkgXSA9IHByb3RvLnBsdWdpbnNbIGkgXSB8fCBbXTtcblx0XHRcdHByb3RvLnBsdWdpbnNbIGkgXS5wdXNoKCBbIG9wdGlvbiwgc2V0WyBpIF0gXSApO1xuXHRcdH1cblx0fSxcblx0Y2FsbDogZnVuY3Rpb24oIGluc3RhbmNlLCBuYW1lLCBhcmdzLCBhbGxvd0Rpc2Nvbm5lY3RlZCApIHtcblx0XHR2YXIgaSxcblx0XHRcdHNldCA9IGluc3RhbmNlLnBsdWdpbnNbIG5hbWUgXTtcblxuXHRcdGlmICggIXNldCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoICFhbGxvd0Rpc2Nvbm5lY3RlZCAmJiAoICFpbnN0YW5jZS5lbGVtZW50WyAwIF0ucGFyZW50Tm9kZSB8fFxuXHRcdFx0XHRpbnN0YW5jZS5lbGVtZW50WyAwIF0ucGFyZW50Tm9kZS5ub2RlVHlwZSA9PT0gMTEgKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRmb3IgKCBpID0gMDsgaSA8IHNldC5sZW5ndGg7IGkrKyApIHtcblx0XHRcdGlmICggaW5zdGFuY2Uub3B0aW9uc1sgc2V0WyBpIF1bIDAgXSBdICkge1xuXHRcdFx0XHRzZXRbIGkgXVsgMSBdLmFwcGx5KCBpbnN0YW5jZS5lbGVtZW50LCBhcmdzICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG59ICkgKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2pxdWVyeS11aS91aS9wbHVnaW4uanNcbi8vIG1vZHVsZSBpZCA9IHpVbDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiKCBmdW5jdGlvbiggZmFjdG9yeSApIHtcblx0aWYgKCB0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCApIHtcblxuXHRcdC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cblx0XHRkZWZpbmUoIFsgXCJqcXVlcnlcIiwgXCIuL3ZlcnNpb25cIiBdLCBmYWN0b3J5ICk7XG5cdH0gZWxzZSB7XG5cblx0XHQvLyBCcm93c2VyIGdsb2JhbHNcblx0XHRmYWN0b3J5KCBqUXVlcnkgKTtcblx0fVxufSAoIGZ1bmN0aW9uKCAkICkge1xuXG4vLyBUaGlzIGZpbGUgaXMgZGVwcmVjYXRlZFxucmV0dXJuICQudWkuaWUgPSAhIS9tc2llIFtcXHcuXSsvLmV4ZWMoIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSApO1xufSApICk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9qcXVlcnktdWkvdWkvaWUuanNcbi8vIG1vZHVsZSBpZCA9IHprSVlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBncmlkc3RhY2suanMgMC4zLjBcbiAqIGh0dHA6Ly90cm9vbGVlLmdpdGh1Yi5pby9ncmlkc3RhY2suanMvXG4gKiAoYykgMjAxNC0yMDE2IFBhdmVsIFJlem5pa292LCBEeWxhbiBXZWlzc1xuICogZ3JpZHN0YWNrLmpzIG1heSBiZSBmcmVlbHkgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogQHByZXNlcnZlXG4qL1xuKGZ1bmN0aW9uKGZhY3RvcnkpIHtcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShbJ2pxdWVyeScsICdsb2Rhc2gnXSwgZmFjdG9yeSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdHJ5IHsgalF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5Jyk7IH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgIHRyeSB7IF8gPSByZXF1aXJlKCdsb2Rhc2gnKTsgfSBjYXRjaCAoZSkge31cbiAgICAgICAgZmFjdG9yeShqUXVlcnksIF8pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZhY3RvcnkoalF1ZXJ5LCBfKTtcbiAgICB9XG59KShmdW5jdGlvbigkLCBfKSB7XG5cbiAgICB2YXIgc2NvcGUgPSB3aW5kb3c7XG5cbiAgICB2YXIgb2Jzb2xldGUgPSBmdW5jdGlvbihmLCBvbGROYW1lLCBuZXdOYW1lKSB7XG4gICAgICAgIHZhciB3cmFwcGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ2dyaWRzdGFjay5qczogRnVuY3Rpb24gYCcgKyBvbGROYW1lICsgJ2AgaXMgZGVwcmVjYXRlZCBhcyBvZiB2MC4yLjUgYW5kIGhhcyBiZWVuIHJlcGxhY2VkICcgK1xuICAgICAgICAgICAgJ3dpdGggYCcgKyBuZXdOYW1lICsgJ2AuIEl0IHdpbGwgYmUgKipjb21wbGV0ZWx5KiogcmVtb3ZlZCBpbiB2MS4wLicpO1xuICAgICAgICAgICAgcmV0dXJuIGYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfTtcbiAgICAgICAgd3JhcHBlci5wcm90b3R5cGUgPSBmLnByb3RvdHlwZTtcblxuICAgICAgICByZXR1cm4gd3JhcHBlcjtcbiAgICB9O1xuXG4gICAgdmFyIG9ic29sZXRlT3B0cyA9IGZ1bmN0aW9uKG9sZE5hbWUsIG5ld05hbWUpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdncmlkc3RhY2suanM6IE9wdGlvbiBgJyArIG9sZE5hbWUgKyAnYCBpcyBkZXByZWNhdGVkIGFzIG9mIHYwLjIuNSBhbmQgaGFzIGJlZW4gcmVwbGFjZWQgd2l0aCBgJyArXG4gICAgICAgICAgICBuZXdOYW1lICsgJ2AuIEl0IHdpbGwgYmUgKipjb21wbGV0ZWx5KiogcmVtb3ZlZCBpbiB2MS4wLicpO1xuICAgIH07XG5cbiAgICB2YXIgVXRpbHMgPSB7XG4gICAgICAgIGlzSW50ZXJjZXB0ZWQ6IGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiAhKGEueCArIGEud2lkdGggPD0gYi54IHx8IGIueCArIGIud2lkdGggPD0gYS54IHx8IGEueSArIGEuaGVpZ2h0IDw9IGIueSB8fCBiLnkgKyBiLmhlaWdodCA8PSBhLnkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNvcnQ6IGZ1bmN0aW9uKG5vZGVzLCBkaXIsIHdpZHRoKSB7XG4gICAgICAgICAgICB3aWR0aCA9IHdpZHRoIHx8IF8uY2hhaW4obm9kZXMpLm1hcChmdW5jdGlvbihub2RlKSB7IHJldHVybiBub2RlLnggKyBub2RlLndpZHRoOyB9KS5tYXgoKS52YWx1ZSgpO1xuICAgICAgICAgICAgZGlyID0gZGlyICE9IC0xID8gMSA6IC0xO1xuICAgICAgICAgICAgcmV0dXJuIF8uc29ydEJ5KG5vZGVzLCBmdW5jdGlvbihuKSB7IHJldHVybiBkaXIgKiAobi54ICsgbi55ICogd2lkdGgpOyB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBjcmVhdGVTdHlsZXNoZWV0OiBmdW5jdGlvbihpZCkge1xuICAgICAgICAgICAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2NzcycpO1xuICAgICAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKCdkYXRhLWdzLXN0eWxlLWlkJywgaWQpO1xuICAgICAgICAgICAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICAgICAgICAgICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSAnJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgICAgICAgICAgcmV0dXJuIHN0eWxlLnNoZWV0O1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlbW92ZVN0eWxlc2hlZXQ6IGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgICAgICAkKCdTVFlMRVtkYXRhLWdzLXN0eWxlLWlkPScgKyBpZCArICddJykucmVtb3ZlKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5zZXJ0Q1NTUnVsZTogZnVuY3Rpb24oc2hlZXQsIHNlbGVjdG9yLCBydWxlcywgaW5kZXgpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc2hlZXQuaW5zZXJ0UnVsZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHNoZWV0Lmluc2VydFJ1bGUoc2VsZWN0b3IgKyAneycgKyBydWxlcyArICd9JywgaW5kZXgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc2hlZXQuYWRkUnVsZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHNoZWV0LmFkZFJ1bGUoc2VsZWN0b3IsIHJ1bGVzLCBpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgdG9Cb29sOiBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHYgPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHYgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICB2ID0gdi50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiAhKHYgPT09ICcnIHx8IHYgPT0gJ25vJyB8fCB2ID09ICdmYWxzZScgfHwgdiA9PSAnMCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIEJvb2xlYW4odik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgX2NvbGxpc2lvbk5vZGVDaGVjazogZnVuY3Rpb24obikge1xuICAgICAgICAgICAgcmV0dXJuIG4gIT0gdGhpcy5ub2RlICYmIFV0aWxzLmlzSW50ZXJjZXB0ZWQobiwgdGhpcy5ubik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgX2RpZENvbGxpZGU6IGZ1bmN0aW9uKGJuKSB7XG4gICAgICAgICAgICByZXR1cm4gVXRpbHMuaXNJbnRlcmNlcHRlZCh7eDogdGhpcy5uLngsIHk6IHRoaXMubmV3WSwgd2lkdGg6IHRoaXMubi53aWR0aCwgaGVpZ2h0OiB0aGlzLm4uaGVpZ2h0fSwgYm4pO1xuICAgICAgICB9LFxuXG4gICAgICAgIF9pc0FkZE5vZGVJbnRlcmNlcHRlZDogZnVuY3Rpb24obikge1xuICAgICAgICAgICAgcmV0dXJuIFV0aWxzLmlzSW50ZXJjZXB0ZWQoe3g6IHRoaXMueCwgeTogdGhpcy55LCB3aWR0aDogdGhpcy5ub2RlLndpZHRoLCBoZWlnaHQ6IHRoaXMubm9kZS5oZWlnaHR9LCBuKTtcbiAgICAgICAgfSxcblxuICAgICAgICBwYXJzZUhlaWdodDogZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICB2YXIgaGVpZ2h0ID0gdmFsO1xuICAgICAgICAgICAgdmFyIGhlaWdodFVuaXQgPSAncHgnO1xuICAgICAgICAgICAgaWYgKGhlaWdodCAmJiBfLmlzU3RyaW5nKGhlaWdodCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2ggPSBoZWlnaHQubWF0Y2goL14oLVswLTldK1xcLlswLTldK3xbMC05XSpcXC5bMC05XSt8LVswLTldK3xbMC05XSspKHB4fGVtfHJlbXx2aHx2dyk/JC8pO1xuICAgICAgICAgICAgICAgIGlmICghbWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGhlaWdodCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoZWlnaHRVbml0ID0gbWF0Y2hbMl0gfHwgJ3B4JztcbiAgICAgICAgICAgICAgICBoZWlnaHQgPSBwYXJzZUZsb2F0KG1hdGNoWzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7aGVpZ2h0OiBoZWlnaHQsIHVuaXQ6IGhlaWdodFVuaXR9O1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIGpzY3M6ZGlzYWJsZSByZXF1aXJlQ2FtZWxDYXNlT3JVcHBlckNhc2VJZGVudGlmaWVyc1xuICAgIFV0aWxzLmlzX2ludGVyY2VwdGVkID0gb2Jzb2xldGUoVXRpbHMuaXNJbnRlcmNlcHRlZCwgJ2lzX2ludGVyY2VwdGVkJywgJ2lzSW50ZXJjZXB0ZWQnKTtcblxuICAgIFV0aWxzLmNyZWF0ZV9zdHlsZXNoZWV0ID0gb2Jzb2xldGUoVXRpbHMuY3JlYXRlU3R5bGVzaGVldCwgJ2NyZWF0ZV9zdHlsZXNoZWV0JywgJ2NyZWF0ZVN0eWxlc2hlZXQnKTtcblxuICAgIFV0aWxzLnJlbW92ZV9zdHlsZXNoZWV0ID0gb2Jzb2xldGUoVXRpbHMucmVtb3ZlU3R5bGVzaGVldCwgJ3JlbW92ZV9zdHlsZXNoZWV0JywgJ3JlbW92ZVN0eWxlc2hlZXQnKTtcblxuICAgIFV0aWxzLmluc2VydF9jc3NfcnVsZSA9IG9ic29sZXRlKFV0aWxzLmluc2VydENTU1J1bGUsICdpbnNlcnRfY3NzX3J1bGUnLCAnaW5zZXJ0Q1NTUnVsZScpO1xuICAgIC8vIGpzY3M6ZW5hYmxlIHJlcXVpcmVDYW1lbENhc2VPclVwcGVyQ2FzZUlkZW50aWZpZXJzXG5cbiAgICAvKipcbiAgICAqIEBjbGFzcyBHcmlkU3RhY2tEcmFnRHJvcFBsdWdpblxuICAgICogQmFzZSBjbGFzcyBmb3IgZHJhZyduJ2Ryb3AgcGx1Z2luLlxuICAgICovXG4gICAgZnVuY3Rpb24gR3JpZFN0YWNrRHJhZ0Ryb3BQbHVnaW4oZ3JpZCkge1xuICAgICAgICB0aGlzLmdyaWQgPSBncmlkO1xuICAgIH1cblxuICAgIEdyaWRTdGFja0RyYWdEcm9wUGx1Z2luLnJlZ2lzdGVyZWRQbHVnaW5zID0gW107XG5cbiAgICBHcmlkU3RhY2tEcmFnRHJvcFBsdWdpbi5yZWdpc3RlclBsdWdpbiA9IGZ1bmN0aW9uKHBsdWdpbkNsYXNzKSB7XG4gICAgICAgIEdyaWRTdGFja0RyYWdEcm9wUGx1Z2luLnJlZ2lzdGVyZWRQbHVnaW5zLnB1c2gocGx1Z2luQ2xhc3MpO1xuICAgIH07XG5cbiAgICBHcmlkU3RhY2tEcmFnRHJvcFBsdWdpbi5wcm90b3R5cGUucmVzaXphYmxlID0gZnVuY3Rpb24oZWwsIG9wdHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIEdyaWRTdGFja0RyYWdEcm9wUGx1Z2luLnByb3RvdHlwZS5kcmFnZ2FibGUgPSBmdW5jdGlvbihlbCwgb3B0cykge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgR3JpZFN0YWNrRHJhZ0Ryb3BQbHVnaW4ucHJvdG90eXBlLmRyb3BwYWJsZSA9IGZ1bmN0aW9uKGVsLCBvcHRzKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBHcmlkU3RhY2tEcmFnRHJvcFBsdWdpbi5wcm90b3R5cGUuaXNEcm9wcGFibGUgPSBmdW5jdGlvbihlbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIEdyaWRTdGFja0RyYWdEcm9wUGx1Z2luLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uKGVsLCBldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cblxuICAgIHZhciBpZFNlcSA9IDA7XG5cbiAgICB2YXIgR3JpZFN0YWNrRW5naW5lID0gZnVuY3Rpb24od2lkdGgsIG9uY2hhbmdlLCBmbG9hdE1vZGUsIGhlaWdodCwgaXRlbXMpIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmZsb2F0ID0gZmxvYXRNb2RlIHx8IGZhbHNlO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodCB8fCAwO1xuXG4gICAgICAgIHRoaXMubm9kZXMgPSBpdGVtcyB8fCBbXTtcbiAgICAgICAgdGhpcy5vbmNoYW5nZSA9IG9uY2hhbmdlIHx8IGZ1bmN0aW9uKCkge307XG5cbiAgICAgICAgdGhpcy5fdXBkYXRlQ291bnRlciA9IDA7XG4gICAgICAgIHRoaXMuX2Zsb2F0ID0gdGhpcy5mbG9hdDtcblxuICAgICAgICB0aGlzLl9hZGRlZE5vZGVzID0gW107XG4gICAgICAgIHRoaXMuX3JlbW92ZWROb2RlcyA9IFtdO1xuICAgIH07XG5cbiAgICBHcmlkU3RhY2tFbmdpbmUucHJvdG90eXBlLmJhdGNoVXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUNvdW50ZXIgPSAxO1xuICAgICAgICB0aGlzLmZsb2F0ID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgR3JpZFN0YWNrRW5naW5lLnByb3RvdHlwZS5jb21taXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX3VwZGF0ZUNvdW50ZXIgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUNvdW50ZXIgPSAwO1xuICAgICAgICAgICAgdGhpcy5mbG9hdCA9IHRoaXMuX2Zsb2F0O1xuICAgICAgICAgICAgdGhpcy5fcGFja05vZGVzKCk7XG4gICAgICAgICAgICB0aGlzLl9ub3RpZnkoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBGb3IgTWV0ZW9yIHN1cHBvcnQ6IGh0dHBzOi8vZ2l0aHViLmNvbS90cm9vbGVlL2dyaWRzdGFjay5qcy9wdWxsLzI3MlxuICAgIEdyaWRTdGFja0VuZ2luZS5wcm90b3R5cGUuZ2V0Tm9kZURhdGFCeURPTUVsID0gZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgcmV0dXJuIF8uZmluZCh0aGlzLm5vZGVzLCBmdW5jdGlvbihuKSB7IHJldHVybiBlbC5nZXQoMCkgPT09IG4uZWwuZ2V0KDApOyB9KTtcbiAgICB9O1xuXG4gICAgR3JpZFN0YWNrRW5naW5lLnByb3RvdHlwZS5fZml4Q29sbGlzaW9ucyA9IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLl9zb3J0Tm9kZXMoLTEpO1xuXG4gICAgICAgIHZhciBubiA9IG5vZGU7XG4gICAgICAgIHZhciBoYXNMb2NrZWQgPSBCb29sZWFuKF8uZmluZCh0aGlzLm5vZGVzLCBmdW5jdGlvbihuKSB7IHJldHVybiBuLmxvY2tlZDsgfSkpO1xuICAgICAgICBpZiAoIXRoaXMuZmxvYXQgJiYgIWhhc0xvY2tlZCkge1xuICAgICAgICAgICAgbm4gPSB7eDogMCwgeTogbm9kZS55LCB3aWR0aDogdGhpcy53aWR0aCwgaGVpZ2h0OiBub2RlLmhlaWdodH07XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIHZhciBjb2xsaXNpb25Ob2RlID0gXy5maW5kKHRoaXMubm9kZXMsIF8uYmluZChVdGlscy5fY29sbGlzaW9uTm9kZUNoZWNrLCB7bm9kZTogbm9kZSwgbm46IG5ufSkpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb2xsaXNpb25Ob2RlID09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5tb3ZlTm9kZShjb2xsaXNpb25Ob2RlLCBjb2xsaXNpb25Ob2RlLngsIG5vZGUueSArIG5vZGUuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIGNvbGxpc2lvbk5vZGUud2lkdGgsIGNvbGxpc2lvbk5vZGUuaGVpZ2h0LCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBHcmlkU3RhY2tFbmdpbmUucHJvdG90eXBlLmlzQXJlYUVtcHR5ID0gZnVuY3Rpb24oeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICB2YXIgbm4gPSB7eDogeCB8fCAwLCB5OiB5IHx8IDAsIHdpZHRoOiB3aWR0aCB8fCAxLCBoZWlnaHQ6IGhlaWdodCB8fCAxfTtcbiAgICAgICAgdmFyIGNvbGxpc2lvbk5vZGUgPSBfLmZpbmQodGhpcy5ub2RlcywgXy5iaW5kKGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICAgIHJldHVybiBVdGlscy5pc0ludGVyY2VwdGVkKG4sIG5uKTtcbiAgICAgICAgfSwgdGhpcykpO1xuICAgICAgICByZXR1cm4gY29sbGlzaW9uTm9kZSA9PT0gbnVsbCB8fCB0eXBlb2YgY29sbGlzaW9uTm9kZSA9PT0gJ3VuZGVmaW5lZCc7XG4gICAgfTtcblxuICAgIEdyaWRTdGFja0VuZ2luZS5wcm90b3R5cGUuX3NvcnROb2RlcyA9IGZ1bmN0aW9uKGRpcikge1xuICAgICAgICB0aGlzLm5vZGVzID0gVXRpbHMuc29ydCh0aGlzLm5vZGVzLCBkaXIsIHRoaXMud2lkdGgpO1xuICAgIH07XG5cbiAgICBHcmlkU3RhY2tFbmdpbmUucHJvdG90eXBlLl9wYWNrTm9kZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5fc29ydE5vZGVzKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuZmxvYXQpIHtcbiAgICAgICAgICAgIF8uZWFjaCh0aGlzLm5vZGVzLCBfLmJpbmQoZnVuY3Rpb24obiwgaSkge1xuICAgICAgICAgICAgICAgIGlmIChuLl91cGRhdGluZyB8fCB0eXBlb2Ygbi5fb3JpZ1kgPT0gJ3VuZGVmaW5lZCcgfHwgbi55ID09IG4uX29yaWdZKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgbmV3WSA9IG4ueTtcbiAgICAgICAgICAgICAgICB3aGlsZSAobmV3WSA+PSBuLl9vcmlnWSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29sbGlzaW9uTm9kZSA9IF8uY2hhaW4odGhpcy5ub2RlcylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKF8uYmluZChVdGlscy5fZGlkQ29sbGlkZSwge246IG4sIG5ld1k6IG5ld1l9KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC52YWx1ZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghY29sbGlzaW9uTm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbi5fZGlydHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbi55ID0gbmV3WTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAtLW5ld1k7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgdGhpcykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy5lYWNoKHRoaXMubm9kZXMsIF8uYmluZChmdW5jdGlvbihuLCBpKSB7XG4gICAgICAgICAgICAgICAgaWYgKG4ubG9ja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2hpbGUgKG4ueSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1kgPSBuLnkgLSAxO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2FuQmVNb3ZlZCA9IGkgPT09IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29sbGlzaW9uTm9kZSA9IF8uY2hhaW4odGhpcy5ub2RlcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGFrZShpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKF8uYmluZChVdGlscy5fZGlkQ29sbGlkZSwge246IG4sIG5ld1k6IG5ld1l9KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudmFsdWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbkJlTW92ZWQgPSB0eXBlb2YgY29sbGlzaW9uTm9kZSA9PSAndW5kZWZpbmVkJztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICghY2FuQmVNb3ZlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbi5fZGlydHkgPSBuLnkgIT0gbmV3WTtcbiAgICAgICAgICAgICAgICAgICAgbi55ID0gbmV3WTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB0aGlzKSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgR3JpZFN0YWNrRW5naW5lLnByb3RvdHlwZS5fcHJlcGFyZU5vZGUgPSBmdW5jdGlvbihub2RlLCByZXNpemluZykge1xuICAgICAgICBub2RlID0gXy5kZWZhdWx0cyhub2RlIHx8IHt9LCB7d2lkdGg6IDEsIGhlaWdodDogMSwgeDogMCwgeTogMH0pO1xuXG4gICAgICAgIG5vZGUueCA9IHBhcnNlSW50KCcnICsgbm9kZS54KTtcbiAgICAgICAgbm9kZS55ID0gcGFyc2VJbnQoJycgKyBub2RlLnkpO1xuICAgICAgICBub2RlLndpZHRoID0gcGFyc2VJbnQoJycgKyBub2RlLndpZHRoKTtcbiAgICAgICAgbm9kZS5oZWlnaHQgPSBwYXJzZUludCgnJyArIG5vZGUuaGVpZ2h0KTtcbiAgICAgICAgbm9kZS5hdXRvUG9zaXRpb24gPSBub2RlLmF1dG9Qb3NpdGlvbiB8fCBmYWxzZTtcbiAgICAgICAgbm9kZS5ub1Jlc2l6ZSA9IG5vZGUubm9SZXNpemUgfHwgZmFsc2U7XG4gICAgICAgIG5vZGUubm9Nb3ZlID0gbm9kZS5ub01vdmUgfHwgZmFsc2U7XG5cbiAgICAgICAgaWYgKG5vZGUud2lkdGggPiB0aGlzLndpZHRoKSB7XG4gICAgICAgICAgICBub2RlLndpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgICAgfSBlbHNlIGlmIChub2RlLndpZHRoIDwgMSkge1xuICAgICAgICAgICAgbm9kZS53aWR0aCA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobm9kZS5oZWlnaHQgPCAxKSB7XG4gICAgICAgICAgICBub2RlLmhlaWdodCA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobm9kZS54IDwgMCkge1xuICAgICAgICAgICAgbm9kZS54ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChub2RlLnggKyBub2RlLndpZHRoID4gdGhpcy53aWR0aCkge1xuICAgICAgICAgICAgaWYgKHJlc2l6aW5nKSB7XG4gICAgICAgICAgICAgICAgbm9kZS53aWR0aCA9IHRoaXMud2lkdGggLSBub2RlLng7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5vZGUueCA9IHRoaXMud2lkdGggLSBub2RlLndpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5vZGUueSA8IDApIHtcbiAgICAgICAgICAgIG5vZGUueSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuXG4gICAgR3JpZFN0YWNrRW5naW5lLnByb3RvdHlwZS5fbm90aWZ5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgICAgICAgYXJnc1swXSA9IHR5cGVvZiBhcmdzWzBdID09PSAndW5kZWZpbmVkJyA/IFtdIDogW2FyZ3NbMF1dO1xuICAgICAgICBhcmdzWzFdID0gdHlwZW9mIGFyZ3NbMV0gPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IGFyZ3NbMV07XG4gICAgICAgIGlmICh0aGlzLl91cGRhdGVDb3VudGVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRlbGV0ZWROb2RlcyA9IGFyZ3NbMF0uY29uY2F0KHRoaXMuZ2V0RGlydHlOb2RlcygpKTtcbiAgICAgICAgdGhpcy5vbmNoYW5nZShkZWxldGVkTm9kZXMsIGFyZ3NbMV0pO1xuICAgIH07XG5cbiAgICBHcmlkU3RhY2tFbmdpbmUucHJvdG90eXBlLmNsZWFuTm9kZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX3VwZGF0ZUNvdW50ZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBfLmVhY2godGhpcy5ub2RlcywgZnVuY3Rpb24obikge24uX2RpcnR5ID0gZmFsc2U7IH0pO1xuICAgIH07XG5cbiAgICBHcmlkU3RhY2tFbmdpbmUucHJvdG90eXBlLmdldERpcnR5Tm9kZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF8uZmlsdGVyKHRoaXMubm9kZXMsIGZ1bmN0aW9uKG4pIHsgcmV0dXJuIG4uX2RpcnR5OyB9KTtcbiAgICB9O1xuXG4gICAgR3JpZFN0YWNrRW5naW5lLnByb3RvdHlwZS5hZGROb2RlID0gZnVuY3Rpb24obm9kZSwgdHJpZ2dlckFkZEV2ZW50KSB7XG4gICAgICAgIG5vZGUgPSB0aGlzLl9wcmVwYXJlTm9kZShub2RlKTtcblxuICAgICAgICBpZiAodHlwZW9mIG5vZGUubWF4V2lkdGggIT0gJ3VuZGVmaW5lZCcpIHsgbm9kZS53aWR0aCA9IE1hdGgubWluKG5vZGUud2lkdGgsIG5vZGUubWF4V2lkdGgpOyB9XG4gICAgICAgIGlmICh0eXBlb2Ygbm9kZS5tYXhIZWlnaHQgIT0gJ3VuZGVmaW5lZCcpIHsgbm9kZS5oZWlnaHQgPSBNYXRoLm1pbihub2RlLmhlaWdodCwgbm9kZS5tYXhIZWlnaHQpOyB9XG4gICAgICAgIGlmICh0eXBlb2Ygbm9kZS5taW5XaWR0aCAhPSAndW5kZWZpbmVkJykgeyBub2RlLndpZHRoID0gTWF0aC5tYXgobm9kZS53aWR0aCwgbm9kZS5taW5XaWR0aCk7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBub2RlLm1pbkhlaWdodCAhPSAndW5kZWZpbmVkJykgeyBub2RlLmhlaWdodCA9IE1hdGgubWF4KG5vZGUuaGVpZ2h0LCBub2RlLm1pbkhlaWdodCk7IH1cblxuICAgICAgICBub2RlLl9pZCA9ICsraWRTZXE7XG4gICAgICAgIG5vZGUuX2RpcnR5ID0gdHJ1ZTtcblxuICAgICAgICBpZiAobm9kZS5hdXRvUG9zaXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuX3NvcnROb2RlcygpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDs7ICsraSkge1xuICAgICAgICAgICAgICAgIHZhciB4ID0gaSAlIHRoaXMud2lkdGg7XG4gICAgICAgICAgICAgICAgdmFyIHkgPSBNYXRoLmZsb29yKGkgLyB0aGlzLndpZHRoKTtcbiAgICAgICAgICAgICAgICBpZiAoeCArIG5vZGUud2lkdGggPiB0aGlzLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIV8uZmluZCh0aGlzLm5vZGVzLCBfLmJpbmQoVXRpbHMuX2lzQWRkTm9kZUludGVyY2VwdGVkLCB7eDogeCwgeTogeSwgbm9kZTogbm9kZX0pKSkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLnggPSB4O1xuICAgICAgICAgICAgICAgICAgICBub2RlLnkgPSB5O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vZGVzLnB1c2gobm9kZSk7XG4gICAgICAgIGlmICh0eXBlb2YgdHJpZ2dlckFkZEV2ZW50ICE9ICd1bmRlZmluZWQnICYmIHRyaWdnZXJBZGRFdmVudCkge1xuICAgICAgICAgICAgdGhpcy5fYWRkZWROb2Rlcy5wdXNoKF8uY2xvbmUobm9kZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZml4Q29sbGlzaW9ucyhub2RlKTtcbiAgICAgICAgdGhpcy5fcGFja05vZGVzKCk7XG4gICAgICAgIHRoaXMuX25vdGlmeSgpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuXG4gICAgR3JpZFN0YWNrRW5naW5lLnByb3RvdHlwZS5yZW1vdmVOb2RlID0gZnVuY3Rpb24obm9kZSwgZGV0YWNoTm9kZSkge1xuICAgICAgICBkZXRhY2hOb2RlID0gdHlwZW9mIGRldGFjaE5vZGUgPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IGRldGFjaE5vZGU7XG4gICAgICAgIHRoaXMuX3JlbW92ZWROb2Rlcy5wdXNoKF8uY2xvbmUobm9kZSkpO1xuICAgICAgICBub2RlLl9pZCA9IG51bGw7XG4gICAgICAgIHRoaXMubm9kZXMgPSBfLndpdGhvdXQodGhpcy5ub2Rlcywgbm9kZSk7XG4gICAgICAgIHRoaXMuX3BhY2tOb2RlcygpO1xuICAgICAgICB0aGlzLl9ub3RpZnkobm9kZSwgZGV0YWNoTm9kZSk7XG4gICAgfTtcblxuICAgIEdyaWRTdGFja0VuZ2luZS5wcm90b3R5cGUuY2FuTW92ZU5vZGUgPSBmdW5jdGlvbihub2RlLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGlmICghdGhpcy5pc05vZGVDaGFuZ2VkUG9zaXRpb24obm9kZSwgeCwgeSwgd2lkdGgsIGhlaWdodCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaGFzTG9ja2VkID0gQm9vbGVhbihfLmZpbmQodGhpcy5ub2RlcywgZnVuY3Rpb24obikgeyByZXR1cm4gbi5sb2NrZWQ7IH0pKTtcblxuICAgICAgICBpZiAoIXRoaXMuaGVpZ2h0ICYmICFoYXNMb2NrZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNsb25lZE5vZGU7XG4gICAgICAgIHZhciBjbG9uZSA9IG5ldyBHcmlkU3RhY2tFbmdpbmUoXG4gICAgICAgICAgICB0aGlzLndpZHRoLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIHRoaXMuZmxvYXQsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgXy5tYXAodGhpcy5ub2RlcywgZnVuY3Rpb24obikge1xuICAgICAgICAgICAgICAgIGlmIChuID09IG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xvbmVkTm9kZSA9ICQuZXh0ZW5kKHt9LCBuKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNsb25lZE5vZGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAkLmV4dGVuZCh7fSwgbik7XG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjbG9uZWROb2RlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBjbG9uZS5tb3ZlTm9kZShjbG9uZWROb2RlLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcblxuICAgICAgICB2YXIgcmVzID0gdHJ1ZTtcblxuICAgICAgICBpZiAoaGFzTG9ja2VkKSB7XG4gICAgICAgICAgICByZXMgJj0gIUJvb2xlYW4oXy5maW5kKGNsb25lLm5vZGVzLCBmdW5jdGlvbihuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG4gIT0gY2xvbmVkTm9kZSAmJiBCb29sZWFuKG4ubG9ja2VkKSAmJiBCb29sZWFuKG4uX2RpcnR5KTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5oZWlnaHQpIHtcbiAgICAgICAgICAgIHJlcyAmPSBjbG9uZS5nZXRHcmlkSGVpZ2h0KCkgPD0gdGhpcy5oZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH07XG5cbiAgICBHcmlkU3RhY2tFbmdpbmUucHJvdG90eXBlLmNhbkJlUGxhY2VkV2l0aFJlc3BlY3RUb0hlaWdodCA9IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmhlaWdodCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2xvbmUgPSBuZXcgR3JpZFN0YWNrRW5naW5lKFxuICAgICAgICAgICAgdGhpcy53aWR0aCxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICB0aGlzLmZsb2F0LFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIF8ubWFwKHRoaXMubm9kZXMsIGZ1bmN0aW9uKG4pIHsgcmV0dXJuICQuZXh0ZW5kKHt9LCBuKTsgfSkpO1xuICAgICAgICBjbG9uZS5hZGROb2RlKG5vZGUpO1xuICAgICAgICByZXR1cm4gY2xvbmUuZ2V0R3JpZEhlaWdodCgpIDw9IHRoaXMuaGVpZ2h0O1xuICAgIH07XG5cbiAgICBHcmlkU3RhY2tFbmdpbmUucHJvdG90eXBlLmlzTm9kZUNoYW5nZWRQb3NpdGlvbiA9IGZ1bmN0aW9uKG5vZGUsIHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB4ICE9ICdudW1iZXInKSB7IHggPSBub2RlLng7IH1cbiAgICAgICAgaWYgKHR5cGVvZiB5ICE9ICdudW1iZXInKSB7IHkgPSBub2RlLnk7IH1cbiAgICAgICAgaWYgKHR5cGVvZiB3aWR0aCAhPSAnbnVtYmVyJykgeyB3aWR0aCA9IG5vZGUud2lkdGg7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBoZWlnaHQgIT0gJ251bWJlcicpIHsgaGVpZ2h0ID0gbm9kZS5oZWlnaHQ7IH1cblxuICAgICAgICBpZiAodHlwZW9mIG5vZGUubWF4V2lkdGggIT0gJ3VuZGVmaW5lZCcpIHsgd2lkdGggPSBNYXRoLm1pbih3aWR0aCwgbm9kZS5tYXhXaWR0aCk7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBub2RlLm1heEhlaWdodCAhPSAndW5kZWZpbmVkJykgeyBoZWlnaHQgPSBNYXRoLm1pbihoZWlnaHQsIG5vZGUubWF4SGVpZ2h0KTsgfVxuICAgICAgICBpZiAodHlwZW9mIG5vZGUubWluV2lkdGggIT0gJ3VuZGVmaW5lZCcpIHsgd2lkdGggPSBNYXRoLm1heCh3aWR0aCwgbm9kZS5taW5XaWR0aCk7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBub2RlLm1pbkhlaWdodCAhPSAndW5kZWZpbmVkJykgeyBoZWlnaHQgPSBNYXRoLm1heChoZWlnaHQsIG5vZGUubWluSGVpZ2h0KTsgfVxuXG4gICAgICAgIGlmIChub2RlLnggPT0geCAmJiBub2RlLnkgPT0geSAmJiBub2RlLndpZHRoID09IHdpZHRoICYmIG5vZGUuaGVpZ2h0ID09IGhlaWdodCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICBHcmlkU3RhY2tFbmdpbmUucHJvdG90eXBlLm1vdmVOb2RlID0gZnVuY3Rpb24obm9kZSwgeCwgeSwgd2lkdGgsIGhlaWdodCwgbm9QYWNrKSB7XG4gICAgICAgIGlmICghdGhpcy5pc05vZGVDaGFuZ2VkUG9zaXRpb24obm9kZSwgeCwgeSwgd2lkdGgsIGhlaWdodCkpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgeCAhPSAnbnVtYmVyJykgeyB4ID0gbm9kZS54OyB9XG4gICAgICAgIGlmICh0eXBlb2YgeSAhPSAnbnVtYmVyJykgeyB5ID0gbm9kZS55OyB9XG4gICAgICAgIGlmICh0eXBlb2Ygd2lkdGggIT0gJ251bWJlcicpIHsgd2lkdGggPSBub2RlLndpZHRoOyB9XG4gICAgICAgIGlmICh0eXBlb2YgaGVpZ2h0ICE9ICdudW1iZXInKSB7IGhlaWdodCA9IG5vZGUuaGVpZ2h0OyB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBub2RlLm1heFdpZHRoICE9ICd1bmRlZmluZWQnKSB7IHdpZHRoID0gTWF0aC5taW4od2lkdGgsIG5vZGUubWF4V2lkdGgpOyB9XG4gICAgICAgIGlmICh0eXBlb2Ygbm9kZS5tYXhIZWlnaHQgIT0gJ3VuZGVmaW5lZCcpIHsgaGVpZ2h0ID0gTWF0aC5taW4oaGVpZ2h0LCBub2RlLm1heEhlaWdodCk7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBub2RlLm1pbldpZHRoICE9ICd1bmRlZmluZWQnKSB7IHdpZHRoID0gTWF0aC5tYXgod2lkdGgsIG5vZGUubWluV2lkdGgpOyB9XG4gICAgICAgIGlmICh0eXBlb2Ygbm9kZS5taW5IZWlnaHQgIT0gJ3VuZGVmaW5lZCcpIHsgaGVpZ2h0ID0gTWF0aC5tYXgoaGVpZ2h0LCBub2RlLm1pbkhlaWdodCk7IH1cblxuICAgICAgICBpZiAobm9kZS54ID09IHggJiYgbm9kZS55ID09IHkgJiYgbm9kZS53aWR0aCA9PSB3aWR0aCAmJiBub2RlLmhlaWdodCA9PSBoZWlnaHQpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJlc2l6aW5nID0gbm9kZS53aWR0aCAhPSB3aWR0aDtcbiAgICAgICAgbm9kZS5fZGlydHkgPSB0cnVlO1xuXG4gICAgICAgIG5vZGUueCA9IHg7XG4gICAgICAgIG5vZGUueSA9IHk7XG4gICAgICAgIG5vZGUud2lkdGggPSB3aWR0aDtcbiAgICAgICAgbm9kZS5oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICAgICAgbm9kZS5sYXN0VHJpZWRYID0geDtcbiAgICAgICAgbm9kZS5sYXN0VHJpZWRZID0geTtcbiAgICAgICAgbm9kZS5sYXN0VHJpZWRXaWR0aCA9IHdpZHRoO1xuICAgICAgICBub2RlLmxhc3RUcmllZEhlaWdodCA9IGhlaWdodDtcblxuICAgICAgICBub2RlID0gdGhpcy5fcHJlcGFyZU5vZGUobm9kZSwgcmVzaXppbmcpO1xuXG4gICAgICAgIHRoaXMuX2ZpeENvbGxpc2lvbnMobm9kZSk7XG4gICAgICAgIGlmICghbm9QYWNrKSB7XG4gICAgICAgICAgICB0aGlzLl9wYWNrTm9kZXMoKTtcbiAgICAgICAgICAgIHRoaXMuX25vdGlmeSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH07XG5cbiAgICBHcmlkU3RhY2tFbmdpbmUucHJvdG90eXBlLmdldEdyaWRIZWlnaHQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF8ucmVkdWNlKHRoaXMubm9kZXMsIGZ1bmN0aW9uKG1lbW8sIG4pIHsgcmV0dXJuIE1hdGgubWF4KG1lbW8sIG4ueSArIG4uaGVpZ2h0KTsgfSwgMCk7XG4gICAgfTtcblxuICAgIEdyaWRTdGFja0VuZ2luZS5wcm90b3R5cGUuYmVnaW5VcGRhdGUgPSBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgIF8uZWFjaCh0aGlzLm5vZGVzLCBmdW5jdGlvbihuKSB7XG4gICAgICAgICAgICBuLl9vcmlnWSA9IG4ueTtcbiAgICAgICAgfSk7XG4gICAgICAgIG5vZGUuX3VwZGF0aW5nID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgR3JpZFN0YWNrRW5naW5lLnByb3RvdHlwZS5lbmRVcGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgXy5lYWNoKHRoaXMubm9kZXMsIGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICAgIG4uX29yaWdZID0gbi55O1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIG4gPSBfLmZpbmQodGhpcy5ub2RlcywgZnVuY3Rpb24obikgeyByZXR1cm4gbi5fdXBkYXRpbmc7IH0pO1xuICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgbi5fdXBkYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgR3JpZFN0YWNrID0gZnVuY3Rpb24oZWwsIG9wdHMpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgb25lQ29sdW1uTW9kZSwgaXNBdXRvQ2VsbEhlaWdodDtcblxuICAgICAgICBvcHRzID0gb3B0cyB8fCB7fTtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9ICQoZWwpO1xuXG4gICAgICAgIC8vIGpzY3M6ZGlzYWJsZSByZXF1aXJlQ2FtZWxDYXNlT3JVcHBlckNhc2VJZGVudGlmaWVyc1xuICAgICAgICBpZiAodHlwZW9mIG9wdHMuaGFuZGxlX2NsYXNzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgb3B0cy5oYW5kbGVDbGFzcyA9IG9wdHMuaGFuZGxlX2NsYXNzO1xuICAgICAgICAgICAgb2Jzb2xldGVPcHRzKCdoYW5kbGVfY2xhc3MnLCAnaGFuZGxlQ2xhc3MnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIG9wdHMuaXRlbV9jbGFzcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIG9wdHMuaXRlbUNsYXNzID0gb3B0cy5pdGVtX2NsYXNzO1xuICAgICAgICAgICAgb2Jzb2xldGVPcHRzKCdpdGVtX2NsYXNzJywgJ2l0ZW1DbGFzcycpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0cy5wbGFjZWhvbGRlcl9jbGFzcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIG9wdHMucGxhY2Vob2xkZXJDbGFzcyA9IG9wdHMucGxhY2Vob2xkZXJfY2xhc3M7XG4gICAgICAgICAgICBvYnNvbGV0ZU9wdHMoJ3BsYWNlaG9sZGVyX2NsYXNzJywgJ3BsYWNlaG9sZGVyQ2xhc3MnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIG9wdHMucGxhY2Vob2xkZXJfdGV4dCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIG9wdHMucGxhY2Vob2xkZXJUZXh0ID0gb3B0cy5wbGFjZWhvbGRlcl90ZXh0O1xuICAgICAgICAgICAgb2Jzb2xldGVPcHRzKCdwbGFjZWhvbGRlcl90ZXh0JywgJ3BsYWNlaG9sZGVyVGV4dCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0cy5jZWxsX2hlaWdodCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIG9wdHMuY2VsbEhlaWdodCA9IG9wdHMuY2VsbF9oZWlnaHQ7XG4gICAgICAgICAgICBvYnNvbGV0ZU9wdHMoJ2NlbGxfaGVpZ2h0JywgJ2NlbGxIZWlnaHQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIG9wdHMudmVydGljYWxfbWFyZ2luICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgb3B0cy52ZXJ0aWNhbE1hcmdpbiA9IG9wdHMudmVydGljYWxfbWFyZ2luO1xuICAgICAgICAgICAgb2Jzb2xldGVPcHRzKCd2ZXJ0aWNhbF9tYXJnaW4nLCAndmVydGljYWxNYXJnaW4nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIG9wdHMubWluX3dpZHRoICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgb3B0cy5taW5XaWR0aCA9IG9wdHMubWluX3dpZHRoO1xuICAgICAgICAgICAgb2Jzb2xldGVPcHRzKCdtaW5fd2lkdGgnLCAnbWluV2lkdGgnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIG9wdHMuc3RhdGljX2dyaWQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBvcHRzLnN0YXRpY0dyaWQgPSBvcHRzLnN0YXRpY19ncmlkO1xuICAgICAgICAgICAgb2Jzb2xldGVPcHRzKCdzdGF0aWNfZ3JpZCcsICdzdGF0aWNHcmlkJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBvcHRzLmlzX25lc3RlZCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIG9wdHMuaXNOZXN0ZWQgPSBvcHRzLmlzX25lc3RlZDtcbiAgICAgICAgICAgIG9ic29sZXRlT3B0cygnaXNfbmVzdGVkJywgJ2lzTmVzdGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBvcHRzLmFsd2F5c19zaG93X3Jlc2l6ZV9oYW5kbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBvcHRzLmFsd2F5c1Nob3dSZXNpemVIYW5kbGUgPSBvcHRzLmFsd2F5c19zaG93X3Jlc2l6ZV9oYW5kbGU7XG4gICAgICAgICAgICBvYnNvbGV0ZU9wdHMoJ2Fsd2F5c19zaG93X3Jlc2l6ZV9oYW5kbGUnLCAnYWx3YXlzU2hvd1Jlc2l6ZUhhbmRsZScpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGpzY3M6ZW5hYmxlIHJlcXVpcmVDYW1lbENhc2VPclVwcGVyQ2FzZUlkZW50aWZpZXJzXG5cbiAgICAgICAgb3B0cy5pdGVtQ2xhc3MgPSBvcHRzLml0ZW1DbGFzcyB8fCAnZ3JpZC1zdGFjay1pdGVtJztcbiAgICAgICAgdmFyIGlzTmVzdGVkID0gdGhpcy5jb250YWluZXIuY2xvc2VzdCgnLicgKyBvcHRzLml0ZW1DbGFzcykubGVuZ3RoID4gMDtcblxuICAgICAgICB0aGlzLm9wdHMgPSBfLmRlZmF1bHRzKG9wdHMgfHwge30sIHtcbiAgICAgICAgICAgIHdpZHRoOiBwYXJzZUludCh0aGlzLmNvbnRhaW5lci5hdHRyKCdkYXRhLWdzLXdpZHRoJykpIHx8IDEyLFxuICAgICAgICAgICAgaGVpZ2h0OiBwYXJzZUludCh0aGlzLmNvbnRhaW5lci5hdHRyKCdkYXRhLWdzLWhlaWdodCcpKSB8fCAwLFxuICAgICAgICAgICAgaXRlbUNsYXNzOiAnZ3JpZC1zdGFjay1pdGVtJyxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyQ2xhc3M6ICdncmlkLXN0YWNrLXBsYWNlaG9sZGVyJyxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyVGV4dDogJycsXG4gICAgICAgICAgICBoYW5kbGU6ICcuZ3JpZC1zdGFjay1pdGVtLWNvbnRlbnQnLFxuICAgICAgICAgICAgaGFuZGxlQ2xhc3M6IG51bGwsXG4gICAgICAgICAgICBjZWxsSGVpZ2h0OiA2MCxcbiAgICAgICAgICAgIHZlcnRpY2FsTWFyZ2luOiAyMCxcbiAgICAgICAgICAgIGF1dG86IHRydWUsXG4gICAgICAgICAgICBtaW5XaWR0aDogNzY4LFxuICAgICAgICAgICAgZmxvYXQ6IGZhbHNlLFxuICAgICAgICAgICAgc3RhdGljR3JpZDogZmFsc2UsXG4gICAgICAgICAgICBfY2xhc3M6ICdncmlkLXN0YWNrLWluc3RhbmNlLScgKyAoTWF0aC5yYW5kb20oKSAqIDEwMDAwKS50b0ZpeGVkKDApLFxuICAgICAgICAgICAgYW5pbWF0ZTogQm9vbGVhbih0aGlzLmNvbnRhaW5lci5hdHRyKCdkYXRhLWdzLWFuaW1hdGUnKSkgfHwgZmFsc2UsXG4gICAgICAgICAgICBhbHdheXNTaG93UmVzaXplSGFuZGxlOiBvcHRzLmFsd2F5c1Nob3dSZXNpemVIYW5kbGUgfHwgZmFsc2UsXG4gICAgICAgICAgICByZXNpemFibGU6IF8uZGVmYXVsdHMob3B0cy5yZXNpemFibGUgfHwge30sIHtcbiAgICAgICAgICAgICAgICBhdXRvSGlkZTogIShvcHRzLmFsd2F5c1Nob3dSZXNpemVIYW5kbGUgfHwgZmFsc2UpLFxuICAgICAgICAgICAgICAgIGhhbmRsZXM6ICdzZSdcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgZHJhZ2dhYmxlOiBfLmRlZmF1bHRzKG9wdHMuZHJhZ2dhYmxlIHx8IHt9LCB7XG4gICAgICAgICAgICAgICAgaGFuZGxlOiAob3B0cy5oYW5kbGVDbGFzcyA/ICcuJyArIG9wdHMuaGFuZGxlQ2xhc3MgOiAob3B0cy5oYW5kbGUgPyBvcHRzLmhhbmRsZSA6ICcnKSkgfHxcbiAgICAgICAgICAgICAgICAgICAgJy5ncmlkLXN0YWNrLWl0ZW0tY29udGVudCcsXG4gICAgICAgICAgICAgICAgc2Nyb2xsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhcHBlbmRUbzogJ2JvZHknXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGRpc2FibGVEcmFnOiBvcHRzLmRpc2FibGVEcmFnIHx8IGZhbHNlLFxuICAgICAgICAgICAgZGlzYWJsZVJlc2l6ZTogb3B0cy5kaXNhYmxlUmVzaXplIHx8IGZhbHNlLFxuICAgICAgICAgICAgcnRsOiAnYXV0bycsXG4gICAgICAgICAgICByZW1vdmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgcmVtb3ZlVGltZW91dDogMjAwMCxcbiAgICAgICAgICAgIHZlcnRpY2FsTWFyZ2luVW5pdDogJ3B4JyxcbiAgICAgICAgICAgIGNlbGxIZWlnaHRVbml0OiAncHgnLFxuICAgICAgICAgICAgZGlzYWJsZU9uZUNvbHVtbk1vZGU6IG9wdHMuZGlzYWJsZU9uZUNvbHVtbk1vZGUgfHwgZmFsc2UsXG4gICAgICAgICAgICBvbmVDb2x1bW5Nb2RlQ2xhc3M6IG9wdHMub25lQ29sdW1uTW9kZUNsYXNzIHx8ICdncmlkLXN0YWNrLW9uZS1jb2x1bW4tbW9kZScsXG4gICAgICAgICAgICBkZFBsdWdpbjogbnVsbFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5vcHRzLmRkUGx1Z2luID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5vcHRzLmRkUGx1Z2luID0gR3JpZFN0YWNrRHJhZ0Ryb3BQbHVnaW47XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRzLmRkUGx1Z2luID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLm9wdHMuZGRQbHVnaW4gPSBfLmZpcnN0KEdyaWRTdGFja0RyYWdEcm9wUGx1Z2luLnJlZ2lzdGVyZWRQbHVnaW5zKSB8fCBHcmlkU3RhY2tEcmFnRHJvcFBsdWdpbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGQgPSBuZXcgdGhpcy5vcHRzLmRkUGx1Z2luKHRoaXMpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdHMucnRsID09PSAnYXV0bycpIHtcbiAgICAgICAgICAgIHRoaXMub3B0cy5ydGwgPSB0aGlzLmNvbnRhaW5lci5jc3MoJ2RpcmVjdGlvbicpID09PSAncnRsJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9wdHMucnRsKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRDbGFzcygnZ3JpZC1zdGFjay1ydGwnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub3B0cy5pc05lc3RlZCA9IGlzTmVzdGVkO1xuXG4gICAgICAgIGlzQXV0b0NlbGxIZWlnaHQgPSB0aGlzLm9wdHMuY2VsbEhlaWdodCA9PT0gJ2F1dG8nO1xuICAgICAgICBpZiAoaXNBdXRvQ2VsbEhlaWdodCkge1xuICAgICAgICAgICAgc2VsZi5jZWxsSGVpZ2h0KHNlbGYuY2VsbFdpZHRoKCksIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jZWxsSGVpZ2h0KHRoaXMub3B0cy5jZWxsSGVpZ2h0LCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZlcnRpY2FsTWFyZ2luKHRoaXMub3B0cy52ZXJ0aWNhbE1hcmdpbiwgdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkQ2xhc3ModGhpcy5vcHRzLl9jbGFzcyk7XG5cbiAgICAgICAgdGhpcy5fc2V0U3RhdGljQ2xhc3MoKTtcblxuICAgICAgICBpZiAoaXNOZXN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFkZENsYXNzKCdncmlkLXN0YWNrLW5lc3RlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faW5pdFN0eWxlcygpO1xuXG4gICAgICAgIHRoaXMuZ3JpZCA9IG5ldyBHcmlkU3RhY2tFbmdpbmUodGhpcy5vcHRzLndpZHRoLCBmdW5jdGlvbihub2RlcywgZGV0YWNoTm9kZSkge1xuICAgICAgICAgICAgZGV0YWNoTm9kZSA9IHR5cGVvZiBkZXRhY2hOb2RlID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiBkZXRhY2hOb2RlO1xuICAgICAgICAgICAgdmFyIG1heEhlaWdodCA9IDA7XG4gICAgICAgICAgICBfLmVhY2gobm9kZXMsIGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICAgICAgICBpZiAoZGV0YWNoTm9kZSAmJiBuLl9pZCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobi5lbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbi5lbC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG4uZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWdzLXgnLCBuLngpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1ncy15Jywgbi55KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtZ3Mtd2lkdGgnLCBuLndpZHRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtZ3MtaGVpZ2h0Jywgbi5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQgPSBNYXRoLm1heChtYXhIZWlnaHQsIG4ueSArIG4uaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNlbGYuX3VwZGF0ZVN0eWxlcyhtYXhIZWlnaHQgKyAxMCk7XG4gICAgICAgIH0sIHRoaXMub3B0cy5mbG9hdCwgdGhpcy5vcHRzLmhlaWdodCk7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0cy5hdXRvKSB7XG4gICAgICAgICAgICB2YXIgZWxlbWVudHMgPSBbXTtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5jaGlsZHJlbignLicgKyB0aGlzLm9wdHMuaXRlbUNsYXNzICsgJzpub3QoLicgKyB0aGlzLm9wdHMucGxhY2Vob2xkZXJDbGFzcyArICcpJylcbiAgICAgICAgICAgICAgICAuZWFjaChmdW5jdGlvbihpbmRleCwgZWwpIHtcbiAgICAgICAgICAgICAgICBlbCA9ICQoZWwpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBlbDogZWwsXG4gICAgICAgICAgICAgICAgICAgIGk6IHBhcnNlSW50KGVsLmF0dHIoJ2RhdGEtZ3MteCcpKSArIHBhcnNlSW50KGVsLmF0dHIoJ2RhdGEtZ3MteScpKSAqIF90aGlzLm9wdHMud2lkdGhcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXy5jaGFpbihlbGVtZW50cykuc29ydEJ5KGZ1bmN0aW9uKHgpIHsgcmV0dXJuIHguaTsgfSkuZWFjaChmdW5jdGlvbihpKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5fcHJlcGFyZUVsZW1lbnQoaS5lbCk7XG4gICAgICAgICAgICB9KS52YWx1ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRBbmltYXRpb24odGhpcy5vcHRzLmFuaW1hdGUpO1xuXG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSAkKFxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCInICsgdGhpcy5vcHRzLnBsYWNlaG9sZGVyQ2xhc3MgKyAnICcgKyB0aGlzLm9wdHMuaXRlbUNsYXNzICsgJ1wiPicgK1xuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJwbGFjZWhvbGRlci1jb250ZW50XCI+JyArIHRoaXMub3B0cy5wbGFjZWhvbGRlclRleHQgKyAnPC9kaXY+PC9kaXY+JykuaGlkZSgpO1xuXG4gICAgICAgIHRoaXMuX3VwZGF0ZUNvbnRhaW5lckhlaWdodCgpO1xuXG4gICAgICAgIHRoaXMuX3VwZGF0ZUhlaWdodHNPblJlc2l6ZSA9IF8udGhyb3R0bGUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZWxmLmNlbGxIZWlnaHQoc2VsZi5jZWxsV2lkdGgoKSwgZmFsc2UpO1xuICAgICAgICB9LCAxMDApO1xuXG4gICAgICAgIHRoaXMub25SZXNpemVIYW5kbGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoaXNBdXRvQ2VsbEhlaWdodCkge1xuICAgICAgICAgICAgICAgIHNlbGYuX3VwZGF0ZUhlaWdodHNPblJlc2l6ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2VsZi5faXNPbmVDb2x1bW5Nb2RlKCkgJiYgIXNlbGYub3B0cy5kaXNhYmxlT25lQ29sdW1uTW9kZSkge1xuICAgICAgICAgICAgICAgIGlmIChvbmVDb2x1bW5Nb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2VsZi5jb250YWluZXIuYWRkQ2xhc3Moc2VsZi5vcHRzLm9uZUNvbHVtbk1vZGVDbGFzcyk7XG4gICAgICAgICAgICAgICAgb25lQ29sdW1uTW9kZSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBzZWxmLmdyaWQuX3NvcnROb2RlcygpO1xuICAgICAgICAgICAgICAgIF8uZWFjaChzZWxmLmdyaWQubm9kZXMsIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb250YWluZXIuYXBwZW5kKG5vZGUuZWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLm9wdHMuc3RhdGljR3JpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZGQuZHJhZ2dhYmxlKG5vZGUuZWwsICdkaXNhYmxlJyk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZGQucmVzaXphYmxlKG5vZGUuZWwsICdkaXNhYmxlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgbm9kZS5lbC50cmlnZ2VyKCdyZXNpemUnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCFvbmVDb2x1bW5Nb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzZWxmLmNvbnRhaW5lci5yZW1vdmVDbGFzcyhzZWxmLm9wdHMub25lQ29sdW1uTW9kZUNsYXNzKTtcbiAgICAgICAgICAgICAgICBvbmVDb2x1bW5Nb2RlID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5vcHRzLnN0YXRpY0dyaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF8uZWFjaChzZWxmLmdyaWQubm9kZXMsIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFub2RlLm5vTW92ZSAmJiAhc2VsZi5vcHRzLmRpc2FibGVEcmFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmRkLmRyYWdnYWJsZShub2RlLmVsLCAnZW5hYmxlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFub2RlLm5vUmVzaXplICYmICFzZWxmLm9wdHMuZGlzYWJsZVJlc2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5kZC5yZXNpemFibGUobm9kZS5lbCwgJ2VuYWJsZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbm9kZS5lbC50cmlnZ2VyKCdyZXNpemUnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAkKHdpbmRvdykucmVzaXplKHRoaXMub25SZXNpemVIYW5kbGVyKTtcbiAgICAgICAgdGhpcy5vblJlc2l6ZUhhbmRsZXIoKTtcblxuICAgICAgICBpZiAoIXNlbGYub3B0cy5zdGF0aWNHcmlkICYmIHR5cGVvZiBzZWxmLm9wdHMucmVtb3ZhYmxlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdmFyIHRyYXNoWm9uZSA9ICQoc2VsZi5vcHRzLnJlbW92YWJsZSk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZGQuaXNEcm9wcGFibGUodHJhc2hab25lKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGQuZHJvcHBhYmxlKHRyYXNoWm9uZSwge1xuICAgICAgICAgICAgICAgICAgICBhY2NlcHQ6ICcuJyArIHNlbGYub3B0cy5pdGVtQ2xhc3NcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZGRcbiAgICAgICAgICAgICAgICAub24odHJhc2hab25lLCAnZHJvcG92ZXInLCBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsID0gJCh1aS5kcmFnZ2FibGUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IGVsLmRhdGEoJ19ncmlkc3RhY2tfbm9kZScpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5fZ3JpZCAhPT0gc2VsZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuX3NldHVwUmVtb3ZpbmdUaW1lb3V0KGVsKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5vbih0cmFzaFpvbmUsICdkcm9wb3V0JywgZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbCA9ICQodWkuZHJhZ2dhYmxlKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vZGUgPSBlbC5kYXRhKCdfZ3JpZHN0YWNrX25vZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuX2dyaWQgIT09IHNlbGYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZWxmLl9jbGVhclJlbW92aW5nVGltZW91dChlbCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXNlbGYub3B0cy5zdGF0aWNHcmlkICYmIHNlbGYub3B0cy5hY2NlcHRXaWRnZXRzKSB7XG4gICAgICAgICAgICB2YXIgZHJhZ2dpbmdFbGVtZW50ID0gbnVsbDtcblxuICAgICAgICAgICAgdmFyIG9uRHJhZyA9IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgICAgICAgICAgICAgIHZhciBlbCA9IGRyYWdnaW5nRWxlbWVudDtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IGVsLmRhdGEoJ19ncmlkc3RhY2tfbm9kZScpO1xuICAgICAgICAgICAgICAgIHZhciBwb3MgPSBzZWxmLmdldENlbGxGcm9tUGl4ZWwodWkub2Zmc2V0LCB0cnVlKTtcbiAgICAgICAgICAgICAgICB2YXIgeCA9IE1hdGgubWF4KDAsIHBvcy54KTtcbiAgICAgICAgICAgICAgICB2YXIgeSA9IE1hdGgubWF4KDAsIHBvcy55KTtcbiAgICAgICAgICAgICAgICBpZiAoIW5vZGUuX2FkZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuX2FkZGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICBub2RlLmVsID0gZWw7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUueCA9IHg7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUueSA9IHk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZ3JpZC5jbGVhbk5vZGVzKCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZ3JpZC5iZWdpblVwZGF0ZShub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5ncmlkLmFkZE5vZGUobm9kZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb250YWluZXIuYXBwZW5kKHNlbGYucGxhY2Vob2xkZXIpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnBsYWNlaG9sZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1ncy14Jywgbm9kZS54KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtZ3MteScsIG5vZGUueSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWdzLXdpZHRoJywgbm9kZS53aWR0aClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWdzLWhlaWdodCcsIG5vZGUuaGVpZ2h0KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5lbCA9IHNlbGYucGxhY2Vob2xkZXI7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuX2JlZm9yZURyYWdYID0gbm9kZS54O1xuICAgICAgICAgICAgICAgICAgICBub2RlLl9iZWZvcmVEcmFnWSA9IG5vZGUueTtcblxuICAgICAgICAgICAgICAgICAgICBzZWxmLl91cGRhdGVDb250YWluZXJIZWlnaHQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXNlbGYuZ3JpZC5jYW5Nb3ZlTm9kZShub2RlLCB4LCB5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZ3JpZC5tb3ZlTm9kZShub2RlLCB4LCB5KTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5fdXBkYXRlQ29udGFpbmVySGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5kZFxuICAgICAgICAgICAgICAgIC5kcm9wcGFibGUoc2VsZi5jb250YWluZXIsIHtcbiAgICAgICAgICAgICAgICAgICAgYWNjZXB0OiBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwgPSAkKGVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub2RlID0gZWwuZGF0YSgnX2dyaWRzdGFja19ub2RlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZSAmJiBub2RlLl9ncmlkID09PSBzZWxmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsLmlzKHNlbGYub3B0cy5hY2NlcHRXaWRnZXRzID09PSB0cnVlID8gJy5ncmlkLXN0YWNrLWl0ZW0nIDogc2VsZi5vcHRzLmFjY2VwdFdpZGdldHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub24oc2VsZi5jb250YWluZXIsICdkcm9wb3ZlcicsIGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gc2VsZi5jb250YWluZXIub2Zmc2V0KCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbCA9ICQodWkuZHJhZ2dhYmxlKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNlbGxXaWR0aCA9IHNlbGYuY2VsbFdpZHRoKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjZWxsSGVpZ2h0ID0gc2VsZi5jZWxsSGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvcmlnTm9kZSA9IGVsLmRhdGEoJ19ncmlkc3RhY2tfbm9kZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciB3aWR0aCA9IG9yaWdOb2RlID8gb3JpZ05vZGUud2lkdGggOiAoTWF0aC5jZWlsKGVsLm91dGVyV2lkdGgoKSAvIGNlbGxXaWR0aCkpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGVpZ2h0ID0gb3JpZ05vZGUgPyBvcmlnTm9kZS5oZWlnaHQgOiAoTWF0aC5jZWlsKGVsLm91dGVySGVpZ2h0KCkgLyBjZWxsSGVpZ2h0KSk7XG5cbiAgICAgICAgICAgICAgICAgICAgZHJhZ2dpbmdFbGVtZW50ID0gZWw7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vZGUgPSBzZWxmLmdyaWQuX3ByZXBhcmVOb2RlKHt3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0LCBfYWRkZWQ6IGZhbHNlLCBfdGVtcG9yYXJ5OiB0cnVlfSk7XG4gICAgICAgICAgICAgICAgICAgIGVsLmRhdGEoJ19ncmlkc3RhY2tfbm9kZScsIG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICBlbC5kYXRhKCdfZ3JpZHN0YWNrX25vZGVfb3JpZycsIG9yaWdOb2RlKTtcblxuICAgICAgICAgICAgICAgICAgICBlbC5vbignZHJhZycsIG9uRHJhZyk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub24oc2VsZi5jb250YWluZXIsICdkcm9wb3V0JywgZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbCA9ICQodWkuZHJhZ2dhYmxlKTtcbiAgICAgICAgICAgICAgICAgICAgZWwudW5iaW5kKCdkcmFnJywgb25EcmFnKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vZGUgPSBlbC5kYXRhKCdfZ3JpZHN0YWNrX25vZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5lbCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZ3JpZC5yZW1vdmVOb2RlKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnBsYWNlaG9sZGVyLmRldGFjaCgpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLl91cGRhdGVDb250YWluZXJIZWlnaHQoKTtcbiAgICAgICAgICAgICAgICAgICAgZWwuZGF0YSgnX2dyaWRzdGFja19ub2RlJywgZWwuZGF0YSgnX2dyaWRzdGFja19ub2RlX29yaWcnKSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub24oc2VsZi5jb250YWluZXIsICdkcm9wJywgZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucGxhY2Vob2xkZXIuZGV0YWNoKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vZGUgPSAkKHVpLmRyYWdnYWJsZSkuZGF0YSgnX2dyaWRzdGFja19ub2RlJyk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuX2dyaWQgPSBzZWxmO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWwgPSAkKHVpLmRyYWdnYWJsZSkuY2xvbmUoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBlbC5kYXRhKCdfZ3JpZHN0YWNrX25vZGUnLCBub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9yaWdpbmFsTm9kZSA9ICQodWkuZHJhZ2dhYmxlKS5kYXRhKCdfZ3JpZHN0YWNrX25vZGVfb3JpZycpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9yaWdpbmFsTm9kZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsTm9kZS5fZ3JpZC5fdHJpZ2dlclJlbW92ZUV2ZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJCh1aS5kcmFnZ2FibGUpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICBub2RlLmVsID0gZWw7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucGxhY2Vob2xkZXIuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICBlbFxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtZ3MteCcsIG5vZGUueClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWdzLXknLCBub2RlLnkpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1ncy13aWR0aCcsIG5vZGUud2lkdGgpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1ncy1oZWlnaHQnLCBub2RlLmhlaWdodClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhzZWxmLm9wdHMuaXRlbUNsYXNzKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ3N0eWxlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5lbmFibGVTZWxlY3Rpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZURhdGEoJ2RyYWdnYWJsZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3VpLWRyYWdnYWJsZSB1aS1kcmFnZ2FibGUtZHJhZ2dpbmcgdWktZHJhZ2dhYmxlLWRpc2FibGVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC51bmJpbmQoJ2RyYWcnLCBvbkRyYWcpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbnRhaW5lci5hcHBlbmQoZWwpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLl9wcmVwYXJlRWxlbWVudHNCeU5vZGUoZWwsIG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLl91cGRhdGVDb250YWluZXJIZWlnaHQoKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5ncmlkLl9hZGRlZE5vZGVzLnB1c2gobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuX3RyaWdnZXJBZGRFdmVudCgpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLl90cmlnZ2VyQ2hhbmdlRXZlbnQoKTtcblxuICAgICAgICAgICAgICAgICAgICBzZWxmLmdyaWQuZW5kVXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgR3JpZFN0YWNrLnByb3RvdHlwZS5fdHJpZ2dlckNoYW5nZUV2ZW50ID0gZnVuY3Rpb24oZm9yY2VUcmlnZ2VyKSB7XG4gICAgICAgIHZhciBlbGVtZW50cyA9IHRoaXMuZ3JpZC5nZXREaXJ0eU5vZGVzKCk7XG4gICAgICAgIHZhciBoYXNDaGFuZ2VzID0gZmFsc2U7XG5cbiAgICAgICAgdmFyIGV2ZW50UGFyYW1zID0gW107XG4gICAgICAgIGlmIChlbGVtZW50cyAmJiBlbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGV2ZW50UGFyYW1zLnB1c2goZWxlbWVudHMpO1xuICAgICAgICAgICAgaGFzQ2hhbmdlcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGFzQ2hhbmdlcyB8fCBmb3JjZVRyaWdnZXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnRyaWdnZXIoJ2NoYW5nZScsIGV2ZW50UGFyYW1zKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBHcmlkU3RhY2sucHJvdG90eXBlLl90cmlnZ2VyQWRkRXZlbnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuZ3JpZC5fYWRkZWROb2RlcyAmJiB0aGlzLmdyaWQuX2FkZGVkTm9kZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIudHJpZ2dlcignYWRkZWQnLCBbXy5tYXAodGhpcy5ncmlkLl9hZGRlZE5vZGVzLCBfLmNsb25lKV0pO1xuICAgICAgICAgICAgdGhpcy5ncmlkLl9hZGRlZE5vZGVzID0gW107XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgR3JpZFN0YWNrLnByb3RvdHlwZS5fdHJpZ2dlclJlbW92ZUV2ZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmdyaWQuX3JlbW92ZWROb2RlcyAmJiB0aGlzLmdyaWQuX3JlbW92ZWROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci50cmlnZ2VyKCdyZW1vdmVkJywgW18ubWFwKHRoaXMuZ3JpZC5fcmVtb3ZlZE5vZGVzLCBfLmNsb25lKV0pO1xuICAgICAgICAgICAgdGhpcy5ncmlkLl9yZW1vdmVkTm9kZXMgPSBbXTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBHcmlkU3RhY2sucHJvdG90eXBlLl9pbml0U3R5bGVzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLl9zdHlsZXNJZCkge1xuICAgICAgICAgICAgVXRpbHMucmVtb3ZlU3R5bGVzaGVldCh0aGlzLl9zdHlsZXNJZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc3R5bGVzSWQgPSAnZ3JpZHN0YWNrLXN0eWxlLScgKyAoTWF0aC5yYW5kb20oKSAqIDEwMDAwMCkudG9GaXhlZCgpO1xuICAgICAgICB0aGlzLl9zdHlsZXMgPSBVdGlscy5jcmVhdGVTdHlsZXNoZWV0KHRoaXMuX3N0eWxlc0lkKTtcbiAgICAgICAgaWYgKHRoaXMuX3N0eWxlcyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fc3R5bGVzLl9tYXggPSAwO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEdyaWRTdGFjay5wcm90b3R5cGUuX3VwZGF0ZVN0eWxlcyA9IGZ1bmN0aW9uKG1heEhlaWdodCkge1xuICAgICAgICBpZiAodGhpcy5fc3R5bGVzID09PSBudWxsIHx8IHR5cGVvZiB0aGlzLl9zdHlsZXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcHJlZml4ID0gJy4nICsgdGhpcy5vcHRzLl9jbGFzcyArICcgLicgKyB0aGlzLm9wdHMuaXRlbUNsYXNzO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBnZXRIZWlnaHQ7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBtYXhIZWlnaHQgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIG1heEhlaWdodCA9IHRoaXMuX3N0eWxlcy5fbWF4O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2luaXRTdHlsZXMoKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlQ29udGFpbmVySGVpZ2h0KCk7XG4gICAgICAgIGlmICghdGhpcy5vcHRzLmNlbGxIZWlnaHQpIHsgLy8gVGhlIHJlc3Qgd2lsbCBiZSBoYW5kbGVkIGJ5IENTU1xuICAgICAgICAgICAgcmV0dXJuIDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fc3R5bGVzLl9tYXggIT09IDAgJiYgbWF4SGVpZ2h0IDw9IHRoaXMuX3N0eWxlcy5fbWF4KSB7XG4gICAgICAgICAgICByZXR1cm4gO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLm9wdHMudmVydGljYWxNYXJnaW4gfHwgdGhpcy5vcHRzLmNlbGxIZWlnaHRVbml0ID09PSB0aGlzLm9wdHMudmVydGljYWxNYXJnaW5Vbml0KSB7XG4gICAgICAgICAgICBnZXRIZWlnaHQgPSBmdW5jdGlvbihuYlJvd3MsIG5iTWFyZ2lucykge1xuICAgICAgICAgICAgICAgIHJldHVybiAoc2VsZi5vcHRzLmNlbGxIZWlnaHQgKiBuYlJvd3MgKyBzZWxmLm9wdHMudmVydGljYWxNYXJnaW4gKiBuYk1hcmdpbnMpICtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5vcHRzLmNlbGxIZWlnaHRVbml0O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdldEhlaWdodCA9IGZ1bmN0aW9uKG5iUm93cywgbmJNYXJnaW5zKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFuYlJvd3MgfHwgIW5iTWFyZ2lucykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHNlbGYub3B0cy5jZWxsSGVpZ2h0ICogbmJSb3dzICsgc2VsZi5vcHRzLnZlcnRpY2FsTWFyZ2luICogbmJNYXJnaW5zKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm9wdHMuY2VsbEhlaWdodFVuaXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAnY2FsYygnICsgKChzZWxmLm9wdHMuY2VsbEhlaWdodCAqIG5iUm93cykgKyBzZWxmLm9wdHMuY2VsbEhlaWdodFVuaXQpICsgJyArICcgK1xuICAgICAgICAgICAgICAgICAgICAoKHNlbGYub3B0cy52ZXJ0aWNhbE1hcmdpbiAqIG5iTWFyZ2lucykgKyBzZWxmLm9wdHMudmVydGljYWxNYXJnaW5Vbml0KSArICcpJztcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fc3R5bGVzLl9tYXggPT09IDApIHtcbiAgICAgICAgICAgIFV0aWxzLmluc2VydENTU1J1bGUodGhpcy5fc3R5bGVzLCBwcmVmaXgsICdtaW4taGVpZ2h0OiAnICsgZ2V0SGVpZ2h0KDEsIDApICsgJzsnLCAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtYXhIZWlnaHQgPiB0aGlzLl9zdHlsZXMuX21heCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMuX3N0eWxlcy5fbWF4OyBpIDwgbWF4SGVpZ2h0OyArK2kpIHtcbiAgICAgICAgICAgICAgICBVdGlscy5pbnNlcnRDU1NSdWxlKHRoaXMuX3N0eWxlcyxcbiAgICAgICAgICAgICAgICAgICAgcHJlZml4ICsgJ1tkYXRhLWdzLWhlaWdodD1cIicgKyAoaSArIDEpICsgJ1wiXScsXG4gICAgICAgICAgICAgICAgICAgICdoZWlnaHQ6ICcgKyBnZXRIZWlnaHQoaSArIDEsIGkpICsgJzsnLFxuICAgICAgICAgICAgICAgICAgICBpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBVdGlscy5pbnNlcnRDU1NSdWxlKHRoaXMuX3N0eWxlcyxcbiAgICAgICAgICAgICAgICAgICAgcHJlZml4ICsgJ1tkYXRhLWdzLW1pbi1oZWlnaHQ9XCInICsgKGkgKyAxKSArICdcIl0nLFxuICAgICAgICAgICAgICAgICAgICAnbWluLWhlaWdodDogJyArIGdldEhlaWdodChpICsgMSwgaSkgKyAnOycsXG4gICAgICAgICAgICAgICAgICAgIGlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIFV0aWxzLmluc2VydENTU1J1bGUodGhpcy5fc3R5bGVzLFxuICAgICAgICAgICAgICAgICAgICBwcmVmaXggKyAnW2RhdGEtZ3MtbWF4LWhlaWdodD1cIicgKyAoaSArIDEpICsgJ1wiXScsXG4gICAgICAgICAgICAgICAgICAgICdtYXgtaGVpZ2h0OiAnICsgZ2V0SGVpZ2h0KGkgKyAxLCBpKSArICc7JyxcbiAgICAgICAgICAgICAgICAgICAgaVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgVXRpbHMuaW5zZXJ0Q1NTUnVsZSh0aGlzLl9zdHlsZXMsXG4gICAgICAgICAgICAgICAgICAgIHByZWZpeCArICdbZGF0YS1ncy15PVwiJyArIGkgKyAnXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgJ3RvcDogJyArIGdldEhlaWdodChpLCBpKSArICc7JyxcbiAgICAgICAgICAgICAgICAgICAgaVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9zdHlsZXMuX21heCA9IG1heEhlaWdodDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBHcmlkU3RhY2sucHJvdG90eXBlLl91cGRhdGVDb250YWluZXJIZWlnaHQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuZ3JpZC5fdXBkYXRlQ291bnRlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBoZWlnaHQgPSB0aGlzLmdyaWQuZ2V0R3JpZEhlaWdodCgpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hdHRyKCdkYXRhLWdzLWN1cnJlbnQtaGVpZ2h0JywgaGVpZ2h0KTtcbiAgICAgICAgaWYgKCF0aGlzLm9wdHMuY2VsbEhlaWdodCkge1xuICAgICAgICAgICAgcmV0dXJuIDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMub3B0cy52ZXJ0aWNhbE1hcmdpbikge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuY3NzKCdoZWlnaHQnLCAoaGVpZ2h0ICogKHRoaXMub3B0cy5jZWxsSGVpZ2h0KSkgKyB0aGlzLm9wdHMuY2VsbEhlaWdodFVuaXQpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMub3B0cy5jZWxsSGVpZ2h0VW5pdCA9PT0gdGhpcy5vcHRzLnZlcnRpY2FsTWFyZ2luVW5pdCkge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuY3NzKCdoZWlnaHQnLCAoaGVpZ2h0ICogKHRoaXMub3B0cy5jZWxsSGVpZ2h0ICsgdGhpcy5vcHRzLnZlcnRpY2FsTWFyZ2luKSAtXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRzLnZlcnRpY2FsTWFyZ2luKSArIHRoaXMub3B0cy5jZWxsSGVpZ2h0VW5pdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5jc3MoJ2hlaWdodCcsICdjYWxjKCcgKyAoKGhlaWdodCAqICh0aGlzLm9wdHMuY2VsbEhlaWdodCkpICsgdGhpcy5vcHRzLmNlbGxIZWlnaHRVbml0KSArXG4gICAgICAgICAgICAgICAgJyArICcgKyAoKGhlaWdodCAqICh0aGlzLm9wdHMudmVydGljYWxNYXJnaW4gLSAxKSkgKyB0aGlzLm9wdHMudmVydGljYWxNYXJnaW5Vbml0KSArICcpJyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgR3JpZFN0YWNrLnByb3RvdHlwZS5faXNPbmVDb2x1bW5Nb2RlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIHx8IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgpIDw9XG4gICAgICAgICAgICB0aGlzLm9wdHMubWluV2lkdGg7XG4gICAgfTtcblxuICAgIEdyaWRTdGFjay5wcm90b3R5cGUuX3NldHVwUmVtb3ZpbmdUaW1lb3V0ID0gZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgbm9kZSA9ICQoZWwpLmRhdGEoJ19ncmlkc3RhY2tfbm9kZScpO1xuXG4gICAgICAgIGlmIChub2RlLl9yZW1vdmVUaW1lb3V0IHx8ICFzZWxmLm9wdHMucmVtb3ZhYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbm9kZS5fcmVtb3ZlVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBlbC5hZGRDbGFzcygnZ3JpZC1zdGFjay1pdGVtLXJlbW92aW5nJyk7XG4gICAgICAgICAgICBub2RlLl9pc0Fib3V0VG9SZW1vdmUgPSB0cnVlO1xuICAgICAgICB9LCBzZWxmLm9wdHMucmVtb3ZlVGltZW91dCk7XG4gICAgfTtcblxuICAgIEdyaWRTdGFjay5wcm90b3R5cGUuX2NsZWFyUmVtb3ZpbmdUaW1lb3V0ID0gZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgdmFyIG5vZGUgPSAkKGVsKS5kYXRhKCdfZ3JpZHN0YWNrX25vZGUnKTtcblxuICAgICAgICBpZiAoIW5vZGUuX3JlbW92ZVRpbWVvdXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjbGVhclRpbWVvdXQobm9kZS5fcmVtb3ZlVGltZW91dCk7XG4gICAgICAgIG5vZGUuX3JlbW92ZVRpbWVvdXQgPSBudWxsO1xuICAgICAgICBlbC5yZW1vdmVDbGFzcygnZ3JpZC1zdGFjay1pdGVtLXJlbW92aW5nJyk7XG4gICAgICAgIG5vZGUuX2lzQWJvdXRUb1JlbW92ZSA9IGZhbHNlO1xuICAgIH07XG5cbiAgICBHcmlkU3RhY2sucHJvdG90eXBlLl9wcmVwYXJlRWxlbWVudHNCeU5vZGUgPSBmdW5jdGlvbihlbCwgbm9kZSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdmFyIGNlbGxXaWR0aDtcbiAgICAgICAgdmFyIGNlbGxIZWlnaHQ7XG5cbiAgICAgICAgdmFyIGRyYWdPclJlc2l6ZSA9IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgICAgICAgICAgdmFyIHggPSBNYXRoLnJvdW5kKHVpLnBvc2l0aW9uLmxlZnQgLyBjZWxsV2lkdGgpO1xuICAgICAgICAgICAgdmFyIHkgPSBNYXRoLmZsb29yKCh1aS5wb3NpdGlvbi50b3AgKyBjZWxsSGVpZ2h0IC8gMikgLyBjZWxsSGVpZ2h0KTtcbiAgICAgICAgICAgIHZhciB3aWR0aDtcbiAgICAgICAgICAgIHZhciBoZWlnaHQ7XG5cbiAgICAgICAgICAgIGlmIChldmVudC50eXBlICE9ICdkcmFnJykge1xuICAgICAgICAgICAgICAgIHdpZHRoID0gTWF0aC5yb3VuZCh1aS5zaXplLndpZHRoIC8gY2VsbFdpZHRoKTtcbiAgICAgICAgICAgICAgICBoZWlnaHQgPSBNYXRoLnJvdW5kKHVpLnNpemUuaGVpZ2h0IC8gY2VsbEhlaWdodCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChldmVudC50eXBlID09ICdkcmFnJykge1xuICAgICAgICAgICAgICAgIGlmICh4IDwgMCB8fCB4ID49IHNlbGYuZ3JpZC53aWR0aCB8fCB5IDwgMCB8fCAoIXNlbGYuZ3JpZC5mbG9hdCAmJiB5ID4gc2VsZi5ncmlkLmdldEdyaWRIZWlnaHQoKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFub2RlLl90ZW1wb3JhcnlSZW1vdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5vcHRzLnJlbW92YWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX3NldHVwUmVtb3ZpbmdUaW1lb3V0KGVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgeCA9IG5vZGUuX2JlZm9yZURyYWdYO1xuICAgICAgICAgICAgICAgICAgICAgICAgeSA9IG5vZGUuX2JlZm9yZURyYWdZO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnBsYWNlaG9sZGVyLmRldGFjaCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wbGFjZWhvbGRlci5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmdyaWQucmVtb3ZlTm9kZShub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX3VwZGF0ZUNvbnRhaW5lckhlaWdodCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLl90ZW1wb3JhcnlSZW1vdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuX2NsZWFyUmVtb3ZpbmdUaW1lb3V0KGVsKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5fdGVtcG9yYXJ5UmVtb3ZlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5ncmlkLmFkZE5vZGUobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnBsYWNlaG9sZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtZ3MteCcsIHgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtZ3MteScsIHkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtZ3Mtd2lkdGgnLCB3aWR0aClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1ncy1oZWlnaHQnLCBoZWlnaHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29udGFpbmVyLmFwcGVuZChzZWxmLnBsYWNlaG9sZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZWwgPSBzZWxmLnBsYWNlaG9sZGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5fdGVtcG9yYXJ5UmVtb3ZlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC50eXBlID09ICdyZXNpemUnKSAge1xuICAgICAgICAgICAgICAgIGlmICh4IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gd2lkdGggYW5kIGhlaWdodCBhcmUgdW5kZWZpbmVkIGlmIG5vdCByZXNpemluZ1xuICAgICAgICAgICAgdmFyIGxhc3RUcmllZFdpZHRoID0gdHlwZW9mIHdpZHRoICE9PSAndW5kZWZpbmVkJyA/IHdpZHRoIDogbm9kZS5sYXN0VHJpZWRXaWR0aDtcbiAgICAgICAgICAgIHZhciBsYXN0VHJpZWRIZWlnaHQgPSB0eXBlb2YgaGVpZ2h0ICE9PSAndW5kZWZpbmVkJyA/IGhlaWdodCA6IG5vZGUubGFzdFRyaWVkSGVpZ2h0O1xuICAgICAgICAgICAgaWYgKCFzZWxmLmdyaWQuY2FuTW92ZU5vZGUobm9kZSwgeCwgeSwgd2lkdGgsIGhlaWdodCkgfHxcbiAgICAgICAgICAgICAgICAobm9kZS5sYXN0VHJpZWRYID09PSB4ICYmIG5vZGUubGFzdFRyaWVkWSA9PT0geSAmJlxuICAgICAgICAgICAgICAgIG5vZGUubGFzdFRyaWVkV2lkdGggPT09IGxhc3RUcmllZFdpZHRoICYmIG5vZGUubGFzdFRyaWVkSGVpZ2h0ID09PSBsYXN0VHJpZWRIZWlnaHQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9kZS5sYXN0VHJpZWRYID0geDtcbiAgICAgICAgICAgIG5vZGUubGFzdFRyaWVkWSA9IHk7XG4gICAgICAgICAgICBub2RlLmxhc3RUcmllZFdpZHRoID0gd2lkdGg7XG4gICAgICAgICAgICBub2RlLmxhc3RUcmllZEhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgICAgIHNlbGYuZ3JpZC5tb3ZlTm9kZShub2RlLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgICAgIHNlbGYuX3VwZGF0ZUNvbnRhaW5lckhlaWdodCgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBvblN0YXJ0TW92aW5nID0gZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgICAgICAgICBzZWxmLmNvbnRhaW5lci5hcHBlbmQoc2VsZi5wbGFjZWhvbGRlcik7XG4gICAgICAgICAgICB2YXIgbyA9ICQodGhpcyk7XG4gICAgICAgICAgICBzZWxmLmdyaWQuY2xlYW5Ob2RlcygpO1xuICAgICAgICAgICAgc2VsZi5ncmlkLmJlZ2luVXBkYXRlKG5vZGUpO1xuICAgICAgICAgICAgY2VsbFdpZHRoID0gc2VsZi5jZWxsV2lkdGgoKTtcbiAgICAgICAgICAgIHZhciBzdHJpY3RDZWxsSGVpZ2h0ID0gTWF0aC5jZWlsKG8ub3V0ZXJIZWlnaHQoKSAvIG8uYXR0cignZGF0YS1ncy1oZWlnaHQnKSk7XG4gICAgICAgICAgICBjZWxsSGVpZ2h0ID0gc2VsZi5jb250YWluZXIuaGVpZ2h0KCkgLyBwYXJzZUludChzZWxmLmNvbnRhaW5lci5hdHRyKCdkYXRhLWdzLWN1cnJlbnQtaGVpZ2h0JykpO1xuICAgICAgICAgICAgc2VsZi5wbGFjZWhvbGRlclxuICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWdzLXgnLCBvLmF0dHIoJ2RhdGEtZ3MteCcpKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWdzLXknLCBvLmF0dHIoJ2RhdGEtZ3MteScpKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWdzLXdpZHRoJywgby5hdHRyKCdkYXRhLWdzLXdpZHRoJykpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtZ3MtaGVpZ2h0Jywgby5hdHRyKCdkYXRhLWdzLWhlaWdodCcpKVxuICAgICAgICAgICAgICAgIC5zaG93KCk7XG4gICAgICAgICAgICBub2RlLmVsID0gc2VsZi5wbGFjZWhvbGRlcjtcbiAgICAgICAgICAgIG5vZGUuX2JlZm9yZURyYWdYID0gbm9kZS54O1xuICAgICAgICAgICAgbm9kZS5fYmVmb3JlRHJhZ1kgPSBub2RlLnk7XG5cbiAgICAgICAgICAgIHNlbGYuZGQucmVzaXphYmxlKGVsLCAnb3B0aW9uJywgJ21pbldpZHRoJywgY2VsbFdpZHRoICogKG5vZGUubWluV2lkdGggfHwgMSkpO1xuICAgICAgICAgICAgc2VsZi5kZC5yZXNpemFibGUoZWwsICdvcHRpb24nLCAnbWluSGVpZ2h0Jywgc3RyaWN0Q2VsbEhlaWdodCAqIChub2RlLm1pbkhlaWdodCB8fCAxKSk7XG5cbiAgICAgICAgICAgIGlmIChldmVudC50eXBlID09ICdyZXNpemVzdGFydCcpIHtcbiAgICAgICAgICAgICAgICBvLmZpbmQoJy5ncmlkLXN0YWNrLWl0ZW0nKS50cmlnZ2VyKCdyZXNpemVzdGFydCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBvbkVuZE1vdmluZyA9IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgICAgICAgICAgdmFyIG8gPSAkKHRoaXMpO1xuICAgICAgICAgICAgaWYgKCFvLmRhdGEoJ19ncmlkc3RhY2tfbm9kZScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgZm9yY2VOb3RpZnkgPSBmYWxzZTtcbiAgICAgICAgICAgIHNlbGYucGxhY2Vob2xkZXIuZGV0YWNoKCk7XG4gICAgICAgICAgICBub2RlLmVsID0gbztcbiAgICAgICAgICAgIHNlbGYucGxhY2Vob2xkZXIuaGlkZSgpO1xuXG4gICAgICAgICAgICBpZiAobm9kZS5faXNBYm91dFRvUmVtb3ZlKSB7XG4gICAgICAgICAgICAgICAgZm9yY2VOb3RpZnkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHZhciBncmlkVG9Ob3RpZnkgPSBlbC5kYXRhKCdfZ3JpZHN0YWNrX25vZGUnKS5fZ3JpZDtcbiAgICAgICAgICAgICAgICBncmlkVG9Ob3RpZnkuX3RyaWdnZXJSZW1vdmVFdmVudCgpO1xuICAgICAgICAgICAgICAgIGVsLnJlbW92ZURhdGEoJ19ncmlkc3RhY2tfbm9kZScpO1xuICAgICAgICAgICAgICAgIGVsLnJlbW92ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxmLl9jbGVhclJlbW92aW5nVGltZW91dChlbCk7XG4gICAgICAgICAgICAgICAgaWYgKCFub2RlLl90ZW1wb3JhcnlSZW1vdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG9cbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWdzLXgnLCBub2RlLngpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1ncy15Jywgbm9kZS55KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtZ3Mtd2lkdGgnLCBub2RlLndpZHRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtZ3MtaGVpZ2h0Jywgbm9kZS5oZWlnaHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1ncy14Jywgbm9kZS5fYmVmb3JlRHJhZ1gpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1ncy15Jywgbm9kZS5fYmVmb3JlRHJhZ1kpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1ncy13aWR0aCcsIG5vZGUud2lkdGgpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1ncy1oZWlnaHQnLCBub2RlLmhlaWdodClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnggPSBub2RlLl9iZWZvcmVEcmFnWDtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS55ID0gbm9kZS5fYmVmb3JlRHJhZ1k7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZ3JpZC5hZGROb2RlKG5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYuX3VwZGF0ZUNvbnRhaW5lckhlaWdodCgpO1xuICAgICAgICAgICAgc2VsZi5fdHJpZ2dlckNoYW5nZUV2ZW50KGZvcmNlTm90aWZ5KTtcblxuICAgICAgICAgICAgc2VsZi5ncmlkLmVuZFVwZGF0ZSgpO1xuXG4gICAgICAgICAgICB2YXIgbmVzdGVkR3JpZHMgPSBvLmZpbmQoJy5ncmlkLXN0YWNrJyk7XG4gICAgICAgICAgICBpZiAobmVzdGVkR3JpZHMubGVuZ3RoICYmIGV2ZW50LnR5cGUgPT0gJ3Jlc2l6ZXN0b3AnKSB7XG4gICAgICAgICAgICAgICAgbmVzdGVkR3JpZHMuZWFjaChmdW5jdGlvbihpbmRleCwgZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgJChlbCkuZGF0YSgnZ3JpZHN0YWNrJykub25SZXNpemVIYW5kbGVyKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgby5maW5kKCcuZ3JpZC1zdGFjay1pdGVtJykudHJpZ2dlcigncmVzaXplc3RvcCcpO1xuICAgICAgICAgICAgICAgIG8uZmluZCgnLmdyaWQtc3RhY2staXRlbScpLnRyaWdnZXIoJ2dzcmVzaXplc3RvcCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT0gJ3Jlc2l6ZXN0b3AnKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jb250YWluZXIudHJpZ2dlcignZ3NyZXNpemVzdG9wJywgbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5kZFxuICAgICAgICAgICAgLmRyYWdnYWJsZShlbCwge1xuICAgICAgICAgICAgICAgIHN0YXJ0OiBvblN0YXJ0TW92aW5nLFxuICAgICAgICAgICAgICAgIHN0b3A6IG9uRW5kTW92aW5nLFxuICAgICAgICAgICAgICAgIGRyYWc6IGRyYWdPclJlc2l6ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5yZXNpemFibGUoZWwsIHtcbiAgICAgICAgICAgICAgICBzdGFydDogb25TdGFydE1vdmluZyxcbiAgICAgICAgICAgICAgICBzdG9wOiBvbkVuZE1vdmluZyxcbiAgICAgICAgICAgICAgICByZXNpemU6IGRyYWdPclJlc2l6ZVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG5vZGUubm9Nb3ZlIHx8ICh0aGlzLl9pc09uZUNvbHVtbk1vZGUoKSAmJiAhc2VsZi5vcHRzLmRpc2FibGVPbmVDb2x1bW5Nb2RlKSB8fCB0aGlzLm9wdHMuZGlzYWJsZURyYWcpIHtcbiAgICAgICAgICAgIHRoaXMuZGQuZHJhZ2dhYmxlKGVsLCAnZGlzYWJsZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5vZGUubm9SZXNpemUgfHwgKHRoaXMuX2lzT25lQ29sdW1uTW9kZSgpICYmICFzZWxmLm9wdHMuZGlzYWJsZU9uZUNvbHVtbk1vZGUpIHx8IHRoaXMub3B0cy5kaXNhYmxlUmVzaXplKSB7XG4gICAgICAgICAgICB0aGlzLmRkLnJlc2l6YWJsZShlbCwgJ2Rpc2FibGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsLmF0dHIoJ2RhdGEtZ3MtbG9ja2VkJywgbm9kZS5sb2NrZWQgPyAneWVzJyA6IG51bGwpO1xuICAgIH07XG5cbiAgICBHcmlkU3RhY2sucHJvdG90eXBlLl9wcmVwYXJlRWxlbWVudCA9IGZ1bmN0aW9uKGVsLCB0cmlnZ2VyQWRkRXZlbnQpIHtcbiAgICAgICAgdHJpZ2dlckFkZEV2ZW50ID0gdHlwZW9mIHRyaWdnZXJBZGRFdmVudCAhPSAndW5kZWZpbmVkJyA/IHRyaWdnZXJBZGRFdmVudCA6IGZhbHNlO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGVsID0gJChlbCk7XG5cbiAgICAgICAgZWwuYWRkQ2xhc3ModGhpcy5vcHRzLml0ZW1DbGFzcyk7XG4gICAgICAgIHZhciBub2RlID0gc2VsZi5ncmlkLmFkZE5vZGUoe1xuICAgICAgICAgICAgeDogZWwuYXR0cignZGF0YS1ncy14JyksXG4gICAgICAgICAgICB5OiBlbC5hdHRyKCdkYXRhLWdzLXknKSxcbiAgICAgICAgICAgIHdpZHRoOiBlbC5hdHRyKCdkYXRhLWdzLXdpZHRoJyksXG4gICAgICAgICAgICBoZWlnaHQ6IGVsLmF0dHIoJ2RhdGEtZ3MtaGVpZ2h0JyksXG4gICAgICAgICAgICBtYXhXaWR0aDogZWwuYXR0cignZGF0YS1ncy1tYXgtd2lkdGgnKSxcbiAgICAgICAgICAgIG1pbldpZHRoOiBlbC5hdHRyKCdkYXRhLWdzLW1pbi13aWR0aCcpLFxuICAgICAgICAgICAgbWF4SGVpZ2h0OiBlbC5hdHRyKCdkYXRhLWdzLW1heC1oZWlnaHQnKSxcbiAgICAgICAgICAgIG1pbkhlaWdodDogZWwuYXR0cignZGF0YS1ncy1taW4taGVpZ2h0JyksXG4gICAgICAgICAgICBhdXRvUG9zaXRpb246IFV0aWxzLnRvQm9vbChlbC5hdHRyKCdkYXRhLWdzLWF1dG8tcG9zaXRpb24nKSksXG4gICAgICAgICAgICBub1Jlc2l6ZTogVXRpbHMudG9Cb29sKGVsLmF0dHIoJ2RhdGEtZ3Mtbm8tcmVzaXplJykpLFxuICAgICAgICAgICAgbm9Nb3ZlOiBVdGlscy50b0Jvb2woZWwuYXR0cignZGF0YS1ncy1uby1tb3ZlJykpLFxuICAgICAgICAgICAgbG9ja2VkOiBVdGlscy50b0Jvb2woZWwuYXR0cignZGF0YS1ncy1sb2NrZWQnKSksXG4gICAgICAgICAgICBlbDogZWwsXG4gICAgICAgICAgICBpZDogZWwuYXR0cignZGF0YS1ncy1pZCcpLFxuICAgICAgICAgICAgX2dyaWQ6IHNlbGZcbiAgICAgICAgfSwgdHJpZ2dlckFkZEV2ZW50KTtcbiAgICAgICAgZWwuZGF0YSgnX2dyaWRzdGFja19ub2RlJywgbm9kZSk7XG5cbiAgICAgICAgdGhpcy5fcHJlcGFyZUVsZW1lbnRzQnlOb2RlKGVsLCBub2RlKTtcbiAgICB9O1xuXG4gICAgR3JpZFN0YWNrLnByb3RvdHlwZS5zZXRBbmltYXRpb24gPSBmdW5jdGlvbihlbmFibGUpIHtcbiAgICAgICAgaWYgKGVuYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYWRkQ2xhc3MoJ2dyaWQtc3RhY2stYW5pbWF0ZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2xhc3MoJ2dyaWQtc3RhY2stYW5pbWF0ZScpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEdyaWRTdGFjay5wcm90b3R5cGUuYWRkV2lkZ2V0ID0gZnVuY3Rpb24oZWwsIHgsIHksIHdpZHRoLCBoZWlnaHQsIGF1dG9Qb3NpdGlvbiwgbWluV2lkdGgsIG1heFdpZHRoLFxuICAgICAgICBtaW5IZWlnaHQsIG1heEhlaWdodCwgaWQpIHtcbiAgICAgICAgZWwgPSAkKGVsKTtcbiAgICAgICAgaWYgKHR5cGVvZiB4ICE9ICd1bmRlZmluZWQnKSB7IGVsLmF0dHIoJ2RhdGEtZ3MteCcsIHgpOyB9XG4gICAgICAgIGlmICh0eXBlb2YgeSAhPSAndW5kZWZpbmVkJykgeyBlbC5hdHRyKCdkYXRhLWdzLXknLCB5KTsgfVxuICAgICAgICBpZiAodHlwZW9mIHdpZHRoICE9ICd1bmRlZmluZWQnKSB7IGVsLmF0dHIoJ2RhdGEtZ3Mtd2lkdGgnLCB3aWR0aCk7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBoZWlnaHQgIT0gJ3VuZGVmaW5lZCcpIHsgZWwuYXR0cignZGF0YS1ncy1oZWlnaHQnLCBoZWlnaHQpOyB9XG4gICAgICAgIGlmICh0eXBlb2YgYXV0b1Bvc2l0aW9uICE9ICd1bmRlZmluZWQnKSB7IGVsLmF0dHIoJ2RhdGEtZ3MtYXV0by1wb3NpdGlvbicsIGF1dG9Qb3NpdGlvbiA/ICd5ZXMnIDogbnVsbCk7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBtaW5XaWR0aCAhPSAndW5kZWZpbmVkJykgeyBlbC5hdHRyKCdkYXRhLWdzLW1pbi13aWR0aCcsIG1pbldpZHRoKTsgfVxuICAgICAgICBpZiAodHlwZW9mIG1heFdpZHRoICE9ICd1bmRlZmluZWQnKSB7IGVsLmF0dHIoJ2RhdGEtZ3MtbWF4LXdpZHRoJywgbWF4V2lkdGgpOyB9XG4gICAgICAgIGlmICh0eXBlb2YgbWluSGVpZ2h0ICE9ICd1bmRlZmluZWQnKSB7IGVsLmF0dHIoJ2RhdGEtZ3MtbWluLWhlaWdodCcsIG1pbkhlaWdodCk7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBtYXhIZWlnaHQgIT0gJ3VuZGVmaW5lZCcpIHsgZWwuYXR0cignZGF0YS1ncy1tYXgtaGVpZ2h0JywgbWF4SGVpZ2h0KTsgfVxuICAgICAgICBpZiAodHlwZW9mIGlkICE9ICd1bmRlZmluZWQnKSB7IGVsLmF0dHIoJ2RhdGEtZ3MtaWQnLCBpZCk7IH1cbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kKGVsKTtcbiAgICAgICAgdGhpcy5fcHJlcGFyZUVsZW1lbnQoZWwsIHRydWUpO1xuICAgICAgICB0aGlzLl90cmlnZ2VyQWRkRXZlbnQoKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlQ29udGFpbmVySGVpZ2h0KCk7XG4gICAgICAgIHRoaXMuX3RyaWdnZXJDaGFuZ2VFdmVudCh0cnVlKTtcblxuICAgICAgICByZXR1cm4gZWw7XG4gICAgfTtcblxuICAgIEdyaWRTdGFjay5wcm90b3R5cGUubWFrZVdpZGdldCA9IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIGVsID0gJChlbCk7XG4gICAgICAgIHRoaXMuX3ByZXBhcmVFbGVtZW50KGVsLCB0cnVlKTtcbiAgICAgICAgdGhpcy5fdHJpZ2dlckFkZEV2ZW50KCk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUNvbnRhaW5lckhlaWdodCgpO1xuICAgICAgICB0aGlzLl90cmlnZ2VyQ2hhbmdlRXZlbnQodHJ1ZSk7XG5cbiAgICAgICAgcmV0dXJuIGVsO1xuICAgIH07XG5cbiAgICBHcmlkU3RhY2sucHJvdG90eXBlLndpbGxJdEZpdCA9IGZ1bmN0aW9uKHgsIHksIHdpZHRoLCBoZWlnaHQsIGF1dG9Qb3NpdGlvbikge1xuICAgICAgICB2YXIgbm9kZSA9IHt4OiB4LCB5OiB5LCB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0LCBhdXRvUG9zaXRpb246IGF1dG9Qb3NpdGlvbn07XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQuY2FuQmVQbGFjZWRXaXRoUmVzcGVjdFRvSGVpZ2h0KG5vZGUpO1xuICAgIH07XG5cbiAgICBHcmlkU3RhY2sucHJvdG90eXBlLnJlbW92ZVdpZGdldCA9IGZ1bmN0aW9uKGVsLCBkZXRhY2hOb2RlKSB7XG4gICAgICAgIGRldGFjaE5vZGUgPSB0eXBlb2YgZGV0YWNoTm9kZSA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogZGV0YWNoTm9kZTtcbiAgICAgICAgZWwgPSAkKGVsKTtcbiAgICAgICAgdmFyIG5vZGUgPSBlbC5kYXRhKCdfZ3JpZHN0YWNrX25vZGUnKTtcblxuICAgICAgICAvLyBGb3IgTWV0ZW9yIHN1cHBvcnQ6IGh0dHBzOi8vZ2l0aHViLmNvbS90cm9vbGVlL2dyaWRzdGFjay5qcy9wdWxsLzI3MlxuICAgICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgICAgIG5vZGUgPSB0aGlzLmdyaWQuZ2V0Tm9kZURhdGFCeURPTUVsKGVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ3JpZC5yZW1vdmVOb2RlKG5vZGUsIGRldGFjaE5vZGUpO1xuICAgICAgICBlbC5yZW1vdmVEYXRhKCdfZ3JpZHN0YWNrX25vZGUnKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlQ29udGFpbmVySGVpZ2h0KCk7XG4gICAgICAgIGlmIChkZXRhY2hOb2RlKSB7XG4gICAgICAgICAgICBlbC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl90cmlnZ2VyQ2hhbmdlRXZlbnQodHJ1ZSk7XG4gICAgICAgIHRoaXMuX3RyaWdnZXJSZW1vdmVFdmVudCgpO1xuICAgIH07XG5cbiAgICBHcmlkU3RhY2sucHJvdG90eXBlLnJlbW92ZUFsbCA9IGZ1bmN0aW9uKGRldGFjaE5vZGUpIHtcbiAgICAgICAgXy5lYWNoKHRoaXMuZ3JpZC5ub2RlcywgXy5iaW5kKGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlV2lkZ2V0KG5vZGUuZWwsIGRldGFjaE5vZGUpO1xuICAgICAgICB9LCB0aGlzKSk7XG4gICAgICAgIHRoaXMuZ3JpZC5ub2RlcyA9IFtdO1xuICAgICAgICB0aGlzLl91cGRhdGVDb250YWluZXJIZWlnaHQoKTtcbiAgICB9O1xuXG4gICAgR3JpZFN0YWNrLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oZGV0YWNoR3JpZCkge1xuICAgICAgICAkKHdpbmRvdykub2ZmKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplSGFuZGxlcik7XG4gICAgICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgICAgICBpZiAodHlwZW9mIGRldGFjaEdyaWQgIT0gJ3VuZGVmaW5lZCcgJiYgIWRldGFjaEdyaWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQWxsKGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZURhdGEoJ2dyaWRzdGFjaycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgVXRpbHMucmVtb3ZlU3R5bGVzaGVldCh0aGlzLl9zdHlsZXNJZCk7XG4gICAgICAgIGlmICh0aGlzLmdyaWQpIHtcbiAgICAgICAgICAgIHRoaXMuZ3JpZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgR3JpZFN0YWNrLnByb3RvdHlwZS5yZXNpemFibGUgPSBmdW5jdGlvbihlbCwgdmFsKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgZWwgPSAkKGVsKTtcbiAgICAgICAgZWwuZWFjaChmdW5jdGlvbihpbmRleCwgZWwpIHtcbiAgICAgICAgICAgIGVsID0gJChlbCk7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IGVsLmRhdGEoJ19ncmlkc3RhY2tfbm9kZScpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBub2RlID09ICd1bmRlZmluZWQnIHx8IG5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5vZGUubm9SZXNpemUgPSAhKHZhbCB8fCBmYWxzZSk7XG4gICAgICAgICAgICBpZiAobm9kZS5ub1Jlc2l6ZSB8fCAoc2VsZi5faXNPbmVDb2x1bW5Nb2RlKCkgJiYgIXNlbGYub3B0cy5kaXNhYmxlT25lQ29sdW1uTW9kZSkpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmRkLnJlc2l6YWJsZShlbCwgJ2Rpc2FibGUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi5kZC5yZXNpemFibGUoZWwsICdlbmFibGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBHcmlkU3RhY2sucHJvdG90eXBlLm1vdmFibGUgPSBmdW5jdGlvbihlbCwgdmFsKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgZWwgPSAkKGVsKTtcbiAgICAgICAgZWwuZWFjaChmdW5jdGlvbihpbmRleCwgZWwpIHtcbiAgICAgICAgICAgIGVsID0gJChlbCk7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IGVsLmRhdGEoJ19ncmlkc3RhY2tfbm9kZScpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBub2RlID09ICd1bmRlZmluZWQnIHx8IG5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5vZGUubm9Nb3ZlID0gISh2YWwgfHwgZmFsc2UpO1xuICAgICAgICAgICAgaWYgKG5vZGUubm9Nb3ZlIHx8IChzZWxmLl9pc09uZUNvbHVtbk1vZGUoKSAmJiAhc2VsZi5vcHRzLmRpc2FibGVPbmVDb2x1bW5Nb2RlKSkge1xuICAgICAgICAgICAgICAgIHNlbGYuZGQuZHJhZ2dhYmxlKGVsLCAnZGlzYWJsZScpO1xuICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCd1aS1kcmFnZ2FibGUtaGFuZGxlJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYuZGQuZHJhZ2dhYmxlKGVsLCAnZW5hYmxlJyk7XG4gICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ3VpLWRyYWdnYWJsZS1oYW5kbGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBHcmlkU3RhY2sucHJvdG90eXBlLmVuYWJsZU1vdmUgPSBmdW5jdGlvbihkb0VuYWJsZSwgaW5jbHVkZU5ld1dpZGdldHMpIHtcbiAgICAgICAgdGhpcy5tb3ZhYmxlKHRoaXMuY29udGFpbmVyLmNoaWxkcmVuKCcuJyArIHRoaXMub3B0cy5pdGVtQ2xhc3MpLCBkb0VuYWJsZSk7XG4gICAgICAgIGlmIChpbmNsdWRlTmV3V2lkZ2V0cykge1xuICAgICAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVEcmFnID0gIWRvRW5hYmxlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEdyaWRTdGFjay5wcm90b3R5cGUuZW5hYmxlUmVzaXplID0gZnVuY3Rpb24oZG9FbmFibGUsIGluY2x1ZGVOZXdXaWRnZXRzKSB7XG4gICAgICAgIHRoaXMucmVzaXphYmxlKHRoaXMuY29udGFpbmVyLmNoaWxkcmVuKCcuJyArIHRoaXMub3B0cy5pdGVtQ2xhc3MpLCBkb0VuYWJsZSk7XG4gICAgICAgIGlmIChpbmNsdWRlTmV3V2lkZ2V0cykge1xuICAgICAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVSZXNpemUgPSAhZG9FbmFibGU7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgR3JpZFN0YWNrLnByb3RvdHlwZS5kaXNhYmxlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMubW92YWJsZSh0aGlzLmNvbnRhaW5lci5jaGlsZHJlbignLicgKyB0aGlzLm9wdHMuaXRlbUNsYXNzKSwgZmFsc2UpO1xuICAgICAgICB0aGlzLnJlc2l6YWJsZSh0aGlzLmNvbnRhaW5lci5jaGlsZHJlbignLicgKyB0aGlzLm9wdHMuaXRlbUNsYXNzKSwgZmFsc2UpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci50cmlnZ2VyKCdkaXNhYmxlJyk7XG4gICAgfTtcblxuICAgIEdyaWRTdGFjay5wcm90b3R5cGUuZW5hYmxlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMubW92YWJsZSh0aGlzLmNvbnRhaW5lci5jaGlsZHJlbignLicgKyB0aGlzLm9wdHMuaXRlbUNsYXNzKSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMucmVzaXphYmxlKHRoaXMuY29udGFpbmVyLmNoaWxkcmVuKCcuJyArIHRoaXMub3B0cy5pdGVtQ2xhc3MpLCB0cnVlKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIudHJpZ2dlcignZW5hYmxlJyk7XG4gICAgfTtcblxuICAgIEdyaWRTdGFjay5wcm90b3R5cGUubG9ja2VkID0gZnVuY3Rpb24oZWwsIHZhbCkge1xuICAgICAgICBlbCA9ICQoZWwpO1xuICAgICAgICBlbC5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbCkge1xuICAgICAgICAgICAgZWwgPSAkKGVsKTtcbiAgICAgICAgICAgIHZhciBub2RlID0gZWwuZGF0YSgnX2dyaWRzdGFja19ub2RlJyk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG5vZGUgPT0gJ3VuZGVmaW5lZCcgfHwgbm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbm9kZS5sb2NrZWQgPSAodmFsIHx8IGZhbHNlKTtcbiAgICAgICAgICAgIGVsLmF0dHIoJ2RhdGEtZ3MtbG9ja2VkJywgbm9kZS5sb2NrZWQgPyAneWVzJyA6IG51bGwpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIEdyaWRTdGFjay5wcm90b3R5cGUubWF4SGVpZ2h0ID0gZnVuY3Rpb24oZWwsIHZhbCkge1xuICAgICAgICBlbCA9ICQoZWwpO1xuICAgICAgICBlbC5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbCkge1xuICAgICAgICAgICAgZWwgPSAkKGVsKTtcbiAgICAgICAgICAgIHZhciBub2RlID0gZWwuZGF0YSgnX2dyaWRzdGFja19ub2RlJyk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG5vZGUgPT09ICd1bmRlZmluZWQnIHx8IG5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghaXNOYU4odmFsKSkge1xuICAgICAgICAgICAgICAgIG5vZGUubWF4SGVpZ2h0ID0gKHZhbCB8fCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgZWwuYXR0cignZGF0YS1ncy1tYXgtaGVpZ2h0JywgdmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBHcmlkU3RhY2sucHJvdG90eXBlLm1pbkhlaWdodCA9IGZ1bmN0aW9uKGVsLCB2YWwpIHtcbiAgICAgICAgZWwgPSAkKGVsKTtcbiAgICAgICAgZWwuZWFjaChmdW5jdGlvbihpbmRleCwgZWwpIHtcbiAgICAgICAgICAgIGVsID0gJChlbCk7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IGVsLmRhdGEoJ19ncmlkc3RhY2tfbm9kZScpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBub2RlID09PSAndW5kZWZpbmVkJyB8fCBub2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWlzTmFOKHZhbCkpIHtcbiAgICAgICAgICAgICAgICBub2RlLm1pbkhlaWdodCA9ICh2YWwgfHwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGVsLmF0dHIoJ2RhdGEtZ3MtbWluLWhlaWdodCcsIHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgR3JpZFN0YWNrLnByb3RvdHlwZS5tYXhXaWR0aCA9IGZ1bmN0aW9uKGVsLCB2YWwpIHtcbiAgICAgICAgZWwgPSAkKGVsKTtcbiAgICAgICAgZWwuZWFjaChmdW5jdGlvbihpbmRleCwgZWwpIHtcbiAgICAgICAgICAgIGVsID0gJChlbCk7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IGVsLmRhdGEoJ19ncmlkc3RhY2tfbm9kZScpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBub2RlID09PSAndW5kZWZpbmVkJyB8fCBub2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWlzTmFOKHZhbCkpIHtcbiAgICAgICAgICAgICAgICBub2RlLm1heFdpZHRoID0gKHZhbCB8fCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgZWwuYXR0cignZGF0YS1ncy1tYXgtd2lkdGgnLCB2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIEdyaWRTdGFjay5wcm90b3R5cGUubWluV2lkdGggPSBmdW5jdGlvbihlbCwgdmFsKSB7XG4gICAgICAgIGVsID0gJChlbCk7XG4gICAgICAgIGVsLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsKSB7XG4gICAgICAgICAgICBlbCA9ICQoZWwpO1xuICAgICAgICAgICAgdmFyIG5vZGUgPSBlbC5kYXRhKCdfZ3JpZHN0YWNrX25vZGUnKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygbm9kZSA9PT0gJ3VuZGVmaW5lZCcgfHwgbm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFpc05hTih2YWwpKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5taW5XaWR0aCA9ICh2YWwgfHwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGVsLmF0dHIoJ2RhdGEtZ3MtbWluLXdpZHRoJywgdmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBHcmlkU3RhY2sucHJvdG90eXBlLl91cGRhdGVFbGVtZW50ID0gZnVuY3Rpb24oZWwsIGNhbGxiYWNrKSB7XG4gICAgICAgIGVsID0gJChlbCkuZmlyc3QoKTtcbiAgICAgICAgdmFyIG5vZGUgPSBlbC5kYXRhKCdfZ3JpZHN0YWNrX25vZGUnKTtcbiAgICAgICAgaWYgKHR5cGVvZiBub2RlID09ICd1bmRlZmluZWQnIHx8IG5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBzZWxmLmdyaWQuY2xlYW5Ob2RlcygpO1xuICAgICAgICBzZWxmLmdyaWQuYmVnaW5VcGRhdGUobm9kZSk7XG5cbiAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzLCBlbCwgbm9kZSk7XG5cbiAgICAgICAgc2VsZi5fdXBkYXRlQ29udGFpbmVySGVpZ2h0KCk7XG4gICAgICAgIHNlbGYuX3RyaWdnZXJDaGFuZ2VFdmVudCgpO1xuXG4gICAgICAgIHNlbGYuZ3JpZC5lbmRVcGRhdGUoKTtcbiAgICB9O1xuXG4gICAgR3JpZFN0YWNrLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbihlbCwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLl91cGRhdGVFbGVtZW50KGVsLCBmdW5jdGlvbihlbCwgbm9kZSkge1xuICAgICAgICAgICAgd2lkdGggPSAod2lkdGggIT09IG51bGwgJiYgdHlwZW9mIHdpZHRoICE9ICd1bmRlZmluZWQnKSA/IHdpZHRoIDogbm9kZS53aWR0aDtcbiAgICAgICAgICAgIGhlaWdodCA9IChoZWlnaHQgIT09IG51bGwgJiYgdHlwZW9mIGhlaWdodCAhPSAndW5kZWZpbmVkJykgPyBoZWlnaHQgOiBub2RlLmhlaWdodDtcblxuICAgICAgICAgICAgdGhpcy5ncmlkLm1vdmVOb2RlKG5vZGUsIG5vZGUueCwgbm9kZS55LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIEdyaWRTdGFjay5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uKGVsLCB4LCB5KSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUVsZW1lbnQoZWwsIGZ1bmN0aW9uKGVsLCBub2RlKSB7XG4gICAgICAgICAgICB4ID0gKHggIT09IG51bGwgJiYgdHlwZW9mIHggIT0gJ3VuZGVmaW5lZCcpID8geCA6IG5vZGUueDtcbiAgICAgICAgICAgIHkgPSAoeSAhPT0gbnVsbCAmJiB0eXBlb2YgeSAhPSAndW5kZWZpbmVkJykgPyB5IDogbm9kZS55O1xuXG4gICAgICAgICAgICB0aGlzLmdyaWQubW92ZU5vZGUobm9kZSwgeCwgeSwgbm9kZS53aWR0aCwgbm9kZS5oZWlnaHQpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgR3JpZFN0YWNrLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihlbCwgeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLl91cGRhdGVFbGVtZW50KGVsLCBmdW5jdGlvbihlbCwgbm9kZSkge1xuICAgICAgICAgICAgeCA9ICh4ICE9PSBudWxsICYmIHR5cGVvZiB4ICE9ICd1bmRlZmluZWQnKSA/IHggOiBub2RlLng7XG4gICAgICAgICAgICB5ID0gKHkgIT09IG51bGwgJiYgdHlwZW9mIHkgIT0gJ3VuZGVmaW5lZCcpID8geSA6IG5vZGUueTtcbiAgICAgICAgICAgIHdpZHRoID0gKHdpZHRoICE9PSBudWxsICYmIHR5cGVvZiB3aWR0aCAhPSAndW5kZWZpbmVkJykgPyB3aWR0aCA6IG5vZGUud2lkdGg7XG4gICAgICAgICAgICBoZWlnaHQgPSAoaGVpZ2h0ICE9PSBudWxsICYmIHR5cGVvZiBoZWlnaHQgIT0gJ3VuZGVmaW5lZCcpID8gaGVpZ2h0IDogbm9kZS5oZWlnaHQ7XG5cbiAgICAgICAgICAgIHRoaXMuZ3JpZC5tb3ZlTm9kZShub2RlLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIEdyaWRTdGFjay5wcm90b3R5cGUudmVydGljYWxNYXJnaW4gPSBmdW5jdGlvbih2YWwsIG5vVXBkYXRlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsID09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRzLnZlcnRpY2FsTWFyZ2luO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGhlaWdodERhdGEgPSBVdGlscy5wYXJzZUhlaWdodCh2YWwpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdHMudmVydGljYWxNYXJnaW5Vbml0ID09PSBoZWlnaHREYXRhLnVuaXQgJiYgdGhpcy5vcHRzLmhlaWdodCA9PT0gaGVpZ2h0RGF0YS5oZWlnaHQpIHtcbiAgICAgICAgICAgIHJldHVybiA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcHRzLnZlcnRpY2FsTWFyZ2luVW5pdCA9IGhlaWdodERhdGEudW5pdDtcbiAgICAgICAgdGhpcy5vcHRzLnZlcnRpY2FsTWFyZ2luID0gaGVpZ2h0RGF0YS5oZWlnaHQ7XG5cbiAgICAgICAgaWYgKCFub1VwZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlU3R5bGVzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgR3JpZFN0YWNrLnByb3RvdHlwZS5jZWxsSGVpZ2h0ID0gZnVuY3Rpb24odmFsLCBub1VwZGF0ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbCA9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0cy5jZWxsSGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0cy5jZWxsSGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG8gPSB0aGlzLmNvbnRhaW5lci5jaGlsZHJlbignLicgKyB0aGlzLm9wdHMuaXRlbUNsYXNzKS5maXJzdCgpO1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguY2VpbChvLm91dGVySGVpZ2h0KCkgLyBvLmF0dHIoJ2RhdGEtZ3MtaGVpZ2h0JykpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBoZWlnaHREYXRhID0gVXRpbHMucGFyc2VIZWlnaHQodmFsKTtcblxuICAgICAgICBpZiAodGhpcy5vcHRzLmNlbGxIZWlnaHRVbml0ID09PSBoZWlnaHREYXRhLmhlaWdodFVuaXQgJiYgdGhpcy5vcHRzLmhlaWdodCA9PT0gaGVpZ2h0RGF0YS5oZWlnaHQpIHtcbiAgICAgICAgICAgIHJldHVybiA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcHRzLmNlbGxIZWlnaHRVbml0ID0gaGVpZ2h0RGF0YS51bml0O1xuICAgICAgICB0aGlzLm9wdHMuY2VsbEhlaWdodCA9IGhlaWdodERhdGEuaGVpZ2h0O1xuXG4gICAgICAgIGlmICghbm9VcGRhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVN0eWxlcygpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgR3JpZFN0YWNrLnByb3RvdHlwZS5jZWxsV2lkdGggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy5jb250YWluZXIub3V0ZXJXaWR0aCgpIC8gdGhpcy5vcHRzLndpZHRoKTtcbiAgICB9O1xuXG4gICAgR3JpZFN0YWNrLnByb3RvdHlwZS5nZXRDZWxsRnJvbVBpeGVsID0gZnVuY3Rpb24ocG9zaXRpb24sIHVzZU9mZnNldCkge1xuICAgICAgICB2YXIgY29udGFpbmVyUG9zID0gKHR5cGVvZiB1c2VPZmZzZXQgIT0gJ3VuZGVmaW5lZCcgJiYgdXNlT2Zmc2V0KSA/XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5vZmZzZXQoKSA6IHRoaXMuY29udGFpbmVyLnBvc2l0aW9uKCk7XG4gICAgICAgIHZhciByZWxhdGl2ZUxlZnQgPSBwb3NpdGlvbi5sZWZ0IC0gY29udGFpbmVyUG9zLmxlZnQ7XG4gICAgICAgIHZhciByZWxhdGl2ZVRvcCA9IHBvc2l0aW9uLnRvcCAtIGNvbnRhaW5lclBvcy50b3A7XG5cbiAgICAgICAgdmFyIGNvbHVtbldpZHRoID0gTWF0aC5mbG9vcih0aGlzLmNvbnRhaW5lci53aWR0aCgpIC8gdGhpcy5vcHRzLndpZHRoKTtcbiAgICAgICAgdmFyIHJvd0hlaWdodCA9IE1hdGguZmxvb3IodGhpcy5jb250YWluZXIuaGVpZ2h0KCkgLyBwYXJzZUludCh0aGlzLmNvbnRhaW5lci5hdHRyKCdkYXRhLWdzLWN1cnJlbnQtaGVpZ2h0JykpKTtcblxuICAgICAgICByZXR1cm4ge3g6IE1hdGguZmxvb3IocmVsYXRpdmVMZWZ0IC8gY29sdW1uV2lkdGgpLCB5OiBNYXRoLmZsb29yKHJlbGF0aXZlVG9wIC8gcm93SGVpZ2h0KX07XG4gICAgfTtcblxuICAgIEdyaWRTdGFjay5wcm90b3R5cGUuYmF0Y2hVcGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5ncmlkLmJhdGNoVXBkYXRlKCk7XG4gICAgfTtcblxuICAgIEdyaWRTdGFjay5wcm90b3R5cGUuY29tbWl0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuZ3JpZC5jb21taXQoKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlQ29udGFpbmVySGVpZ2h0KCk7XG4gICAgfTtcblxuICAgIEdyaWRTdGFjay5wcm90b3R5cGUuaXNBcmVhRW1wdHkgPSBmdW5jdGlvbih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQuaXNBcmVhRW1wdHkoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgfTtcblxuICAgIEdyaWRTdGFjay5wcm90b3R5cGUuc2V0U3RhdGljID0gZnVuY3Rpb24oc3RhdGljVmFsdWUpIHtcbiAgICAgICAgdGhpcy5vcHRzLnN0YXRpY0dyaWQgPSAoc3RhdGljVmFsdWUgPT09IHRydWUpO1xuICAgICAgICB0aGlzLmVuYWJsZU1vdmUoIXN0YXRpY1ZhbHVlKTtcbiAgICAgICAgdGhpcy5lbmFibGVSZXNpemUoIXN0YXRpY1ZhbHVlKTtcbiAgICAgICAgdGhpcy5fc2V0U3RhdGljQ2xhc3MoKTtcbiAgICB9O1xuXG4gICAgR3JpZFN0YWNrLnByb3RvdHlwZS5fc2V0U3RhdGljQ2xhc3MgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHN0YXRpY0NsYXNzTmFtZSA9ICdncmlkLXN0YWNrLXN0YXRpYyc7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0cy5zdGF0aWNHcmlkID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRDbGFzcyhzdGF0aWNDbGFzc05hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2xhc3Moc3RhdGljQ2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBHcmlkU3RhY2sucHJvdG90eXBlLl91cGRhdGVOb2RlV2lkdGhzID0gZnVuY3Rpb24ob2xkV2lkdGgsIG5ld1dpZHRoKSB7XG4gICAgICAgIHRoaXMuZ3JpZC5fc29ydE5vZGVzKCk7XG4gICAgICAgIHRoaXMuZ3JpZC5iYXRjaFVwZGF0ZSgpO1xuICAgICAgICB2YXIgbm9kZSA9IHt9O1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZ3JpZC5ub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbm9kZSA9IHRoaXMuZ3JpZC5ub2Rlc1tpXTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKG5vZGUuZWwsIE1hdGgucm91bmQobm9kZS54ICogbmV3V2lkdGggLyBvbGRXaWR0aCksIHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKG5vZGUud2lkdGggKiBuZXdXaWR0aCAvIG9sZFdpZHRoKSwgdW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdyaWQuY29tbWl0KCk7XG4gICAgfTtcblxuICAgIEdyaWRTdGFjay5wcm90b3R5cGUuc2V0R3JpZFdpZHRoID0gZnVuY3Rpb24oZ3JpZFdpZHRoLGRvTm90UHJvcGFnYXRlKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNsYXNzKCdncmlkLXN0YWNrLScgKyB0aGlzLm9wdHMud2lkdGgpO1xuICAgICAgICBpZiAoZG9Ob3RQcm9wYWdhdGUgIT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZU5vZGVXaWR0aHModGhpcy5vcHRzLndpZHRoLCBncmlkV2lkdGgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3B0cy53aWR0aCA9IGdyaWRXaWR0aDtcbiAgICAgICAgdGhpcy5ncmlkLndpZHRoID0gZ3JpZFdpZHRoO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRDbGFzcygnZ3JpZC1zdGFjay0nICsgZ3JpZFdpZHRoKTtcbiAgICB9O1xuXG4gICAgLy8ganNjczpkaXNhYmxlIHJlcXVpcmVDYW1lbENhc2VPclVwcGVyQ2FzZUlkZW50aWZpZXJzXG4gICAgR3JpZFN0YWNrRW5naW5lLnByb3RvdHlwZS5iYXRjaF91cGRhdGUgPSBvYnNvbGV0ZShHcmlkU3RhY2tFbmdpbmUucHJvdG90eXBlLmJhdGNoVXBkYXRlKTtcbiAgICBHcmlkU3RhY2tFbmdpbmUucHJvdG90eXBlLl9maXhfY29sbGlzaW9ucyA9IG9ic29sZXRlKEdyaWRTdGFja0VuZ2luZS5wcm90b3R5cGUuX2ZpeENvbGxpc2lvbnMsXG4gICAgICAgICdfZml4X2NvbGxpc2lvbnMnLCAnX2ZpeENvbGxpc2lvbnMnKTtcbiAgICBHcmlkU3RhY2tFbmdpbmUucHJvdG90eXBlLmlzX2FyZWFfZW1wdHkgPSBvYnNvbGV0ZShHcmlkU3RhY2tFbmdpbmUucHJvdG90eXBlLmlzQXJlYUVtcHR5LFxuICAgICAgICAnaXNfYXJlYV9lbXB0eScsICdpc0FyZWFFbXB0eScpO1xuICAgIEdyaWRTdGFja0VuZ2luZS5wcm90b3R5cGUuX3NvcnRfbm9kZXMgPSBvYnNvbGV0ZShHcmlkU3RhY2tFbmdpbmUucHJvdG90eXBlLl9zb3J0Tm9kZXMsXG4gICAgICAgICdfc29ydF9ub2RlcycsICdfc29ydE5vZGVzJyk7XG4gICAgR3JpZFN0YWNrRW5naW5lLnByb3RvdHlwZS5fcGFja19ub2RlcyA9IG9ic29sZXRlKEdyaWRTdGFja0VuZ2luZS5wcm90b3R5cGUuX3BhY2tOb2RlcyxcbiAgICAgICAgJ19wYWNrX25vZGVzJywgJ19wYWNrTm9kZXMnKTtcbiAgICBHcmlkU3RhY2tFbmdpbmUucHJvdG90eXBlLl9wcmVwYXJlX25vZGUgPSBvYnNvbGV0ZShHcmlkU3RhY2tFbmdpbmUucHJvdG90eXBlLl9wcmVwYXJlTm9kZSxcbiAgICAgICAgJ19wcmVwYXJlX25vZGUnLCAnX3ByZXBhcmVOb2RlJyk7XG4gICAgR3JpZFN0YWNrRW5naW5lLnByb3RvdHlwZS5jbGVhbl9ub2RlcyA9IG9ic29sZXRlKEdyaWRTdGFja0VuZ2luZS5wcm90b3R5cGUuY2xlYW5Ob2RlcyxcbiAgICAgICAgJ2NsZWFuX25vZGVzJywgJ2NsZWFuTm9kZXMnKTtcbiAgICBHcmlkU3RhY2tFbmdpbmUucHJvdG90eXBlLmdldF9kaXJ0eV9ub2RlcyA9IG9ic29sZXRlKEdyaWRTdGFja0VuZ2luZS5wcm90b3R5cGUuZ2V0RGlydHlOb2RlcyxcbiAgICAgICAgJ2dldF9kaXJ0eV9ub2RlcycsICdnZXREaXJ0eU5vZGVzJyk7XG4gICAgR3JpZFN0YWNrRW5naW5lLnByb3RvdHlwZS5hZGRfbm9kZSA9IG9ic29sZXRlKEdyaWRTdGFja0VuZ2luZS5wcm90b3R5cGUuYWRkTm9kZSxcbiAgICAgICAgJ2FkZF9ub2RlJywgJ2FkZE5vZGUsICcpO1xuICAgIEdyaWRTdGFja0VuZ2luZS5wcm90b3R5cGUucmVtb3ZlX25vZGUgPSBvYnNvbGV0ZShHcmlkU3RhY2tFbmdpbmUucHJvdG90eXBlLnJlbW92ZU5vZGUsXG4gICAgICAgICdyZW1vdmVfbm9kZScsICdyZW1vdmVOb2RlJyk7XG4gICAgR3JpZFN0YWNrRW5naW5lLnByb3RvdHlwZS5jYW5fbW92ZV9ub2RlID0gb2Jzb2xldGUoR3JpZFN0YWNrRW5naW5lLnByb3RvdHlwZS5jYW5Nb3ZlTm9kZSxcbiAgICAgICAgJ2Nhbl9tb3ZlX25vZGUnLCAnY2FuTW92ZU5vZGUnKTtcbiAgICBHcmlkU3RhY2tFbmdpbmUucHJvdG90eXBlLm1vdmVfbm9kZSA9IG9ic29sZXRlKEdyaWRTdGFja0VuZ2luZS5wcm90b3R5cGUubW92ZU5vZGUsXG4gICAgICAgICdtb3ZlX25vZGUnLCAnbW92ZU5vZGUnKTtcbiAgICBHcmlkU3RhY2tFbmdpbmUucHJvdG90eXBlLmdldF9ncmlkX2hlaWdodCA9IG9ic29sZXRlKEdyaWRTdGFja0VuZ2luZS5wcm90b3R5cGUuZ2V0R3JpZEhlaWdodCxcbiAgICAgICAgJ2dldF9ncmlkX2hlaWdodCcsICdnZXRHcmlkSGVpZ2h0Jyk7XG4gICAgR3JpZFN0YWNrRW5naW5lLnByb3RvdHlwZS5iZWdpbl91cGRhdGUgPSBvYnNvbGV0ZShHcmlkU3RhY2tFbmdpbmUucHJvdG90eXBlLmJlZ2luVXBkYXRlLFxuICAgICAgICAnYmVnaW5fdXBkYXRlJywgJ2JlZ2luVXBkYXRlJyk7XG4gICAgR3JpZFN0YWNrRW5naW5lLnByb3RvdHlwZS5lbmRfdXBkYXRlID0gb2Jzb2xldGUoR3JpZFN0YWNrRW5naW5lLnByb3RvdHlwZS5lbmRVcGRhdGUsXG4gICAgICAgICdlbmRfdXBkYXRlJywgJ2VuZFVwZGF0ZScpO1xuICAgIEdyaWRTdGFja0VuZ2luZS5wcm90b3R5cGUuY2FuX2JlX3BsYWNlZF93aXRoX3Jlc3BlY3RfdG9faGVpZ2h0ID1cbiAgICAgICAgb2Jzb2xldGUoR3JpZFN0YWNrRW5naW5lLnByb3RvdHlwZS5jYW5CZVBsYWNlZFdpdGhSZXNwZWN0VG9IZWlnaHQsXG4gICAgICAgICdjYW5fYmVfcGxhY2VkX3dpdGhfcmVzcGVjdF90b19oZWlnaHQnLCAnY2FuQmVQbGFjZWRXaXRoUmVzcGVjdFRvSGVpZ2h0Jyk7XG4gICAgR3JpZFN0YWNrLnByb3RvdHlwZS5fdHJpZ2dlcl9jaGFuZ2VfZXZlbnQgPSBvYnNvbGV0ZShHcmlkU3RhY2sucHJvdG90eXBlLl90cmlnZ2VyQ2hhbmdlRXZlbnQsXG4gICAgICAgICdfdHJpZ2dlcl9jaGFuZ2VfZXZlbnQnLCAnX3RyaWdnZXJDaGFuZ2VFdmVudCcpO1xuICAgIEdyaWRTdGFjay5wcm90b3R5cGUuX2luaXRfc3R5bGVzID0gb2Jzb2xldGUoR3JpZFN0YWNrLnByb3RvdHlwZS5faW5pdFN0eWxlcyxcbiAgICAgICAgJ19pbml0X3N0eWxlcycsICdfaW5pdFN0eWxlcycpO1xuICAgIEdyaWRTdGFjay5wcm90b3R5cGUuX3VwZGF0ZV9zdHlsZXMgPSBvYnNvbGV0ZShHcmlkU3RhY2sucHJvdG90eXBlLl91cGRhdGVTdHlsZXMsXG4gICAgICAgICdfdXBkYXRlX3N0eWxlcycsICdfdXBkYXRlU3R5bGVzJyk7XG4gICAgR3JpZFN0YWNrLnByb3RvdHlwZS5fdXBkYXRlX2NvbnRhaW5lcl9oZWlnaHQgPSBvYnNvbGV0ZShHcmlkU3RhY2sucHJvdG90eXBlLl91cGRhdGVDb250YWluZXJIZWlnaHQsXG4gICAgICAgICdfdXBkYXRlX2NvbnRhaW5lcl9oZWlnaHQnLCAnX3VwZGF0ZUNvbnRhaW5lckhlaWdodCcpO1xuICAgIEdyaWRTdGFjay5wcm90b3R5cGUuX2lzX29uZV9jb2x1bW5fbW9kZSA9IG9ic29sZXRlKEdyaWRTdGFjay5wcm90b3R5cGUuX2lzT25lQ29sdW1uTW9kZSxcbiAgICAgICAgJ19pc19vbmVfY29sdW1uX21vZGUnLCdfaXNPbmVDb2x1bW5Nb2RlJyk7XG4gICAgR3JpZFN0YWNrLnByb3RvdHlwZS5fcHJlcGFyZV9lbGVtZW50ID0gb2Jzb2xldGUoR3JpZFN0YWNrLnByb3RvdHlwZS5fcHJlcGFyZUVsZW1lbnQsXG4gICAgICAgICdfcHJlcGFyZV9lbGVtZW50JywgJ19wcmVwYXJlRWxlbWVudCcpO1xuICAgIEdyaWRTdGFjay5wcm90b3R5cGUuc2V0X2FuaW1hdGlvbiA9IG9ic29sZXRlKEdyaWRTdGFjay5wcm90b3R5cGUuc2V0QW5pbWF0aW9uLFxuICAgICAgICAnc2V0X2FuaW1hdGlvbicsICdzZXRBbmltYXRpb24nKTtcbiAgICBHcmlkU3RhY2sucHJvdG90eXBlLmFkZF93aWRnZXQgPSBvYnNvbGV0ZShHcmlkU3RhY2sucHJvdG90eXBlLmFkZFdpZGdldCxcbiAgICAgICAgJ2FkZF93aWRnZXQnLCAnYWRkV2lkZ2V0Jyk7XG4gICAgR3JpZFN0YWNrLnByb3RvdHlwZS5tYWtlX3dpZGdldCA9IG9ic29sZXRlKEdyaWRTdGFjay5wcm90b3R5cGUubWFrZVdpZGdldCxcbiAgICAgICAgJ21ha2Vfd2lkZ2V0JywgJ21ha2VXaWRnZXQnKTtcbiAgICBHcmlkU3RhY2sucHJvdG90eXBlLndpbGxfaXRfZml0ID0gb2Jzb2xldGUoR3JpZFN0YWNrLnByb3RvdHlwZS53aWxsSXRGaXQsXG4gICAgICAgICd3aWxsX2l0X2ZpdCcsICd3aWxsSXRGaXQnKTtcbiAgICBHcmlkU3RhY2sucHJvdG90eXBlLnJlbW92ZV93aWRnZXQgPSBvYnNvbGV0ZShHcmlkU3RhY2sucHJvdG90eXBlLnJlbW92ZVdpZGdldCxcbiAgICAgICAgJ3JlbW92ZV93aWRnZXQnLCAncmVtb3ZlV2lkZ2V0Jyk7XG4gICAgR3JpZFN0YWNrLnByb3RvdHlwZS5yZW1vdmVfYWxsID0gb2Jzb2xldGUoR3JpZFN0YWNrLnByb3RvdHlwZS5yZW1vdmVBbGwsXG4gICAgICAgICdyZW1vdmVfYWxsJywgJ3JlbW92ZUFsbCcpO1xuICAgIEdyaWRTdGFjay5wcm90b3R5cGUubWluX2hlaWdodCA9IG9ic29sZXRlKEdyaWRTdGFjay5wcm90b3R5cGUubWluSGVpZ2h0LFxuICAgICAgICAnbWluX2hlaWdodCcsICdtaW5IZWlnaHQnKTtcbiAgICBHcmlkU3RhY2sucHJvdG90eXBlLm1pbl93aWR0aCA9IG9ic29sZXRlKEdyaWRTdGFjay5wcm90b3R5cGUubWluV2lkdGgsXG4gICAgICAgICdtaW5fd2lkdGgnLCAnbWluV2lkdGgnKTtcbiAgICBHcmlkU3RhY2sucHJvdG90eXBlLl91cGRhdGVfZWxlbWVudCA9IG9ic29sZXRlKEdyaWRTdGFjay5wcm90b3R5cGUuX3VwZGF0ZUVsZW1lbnQsXG4gICAgICAgICdfdXBkYXRlX2VsZW1lbnQnLCAnX3VwZGF0ZUVsZW1lbnQnKTtcbiAgICBHcmlkU3RhY2sucHJvdG90eXBlLmNlbGxfaGVpZ2h0ID0gb2Jzb2xldGUoR3JpZFN0YWNrLnByb3RvdHlwZS5jZWxsSGVpZ2h0LFxuICAgICAgICAnY2VsbF9oZWlnaHQnLCAnY2VsbEhlaWdodCcpO1xuICAgIEdyaWRTdGFjay5wcm90b3R5cGUuY2VsbF93aWR0aCA9IG9ic29sZXRlKEdyaWRTdGFjay5wcm90b3R5cGUuY2VsbFdpZHRoLFxuICAgICAgICAnY2VsbF93aWR0aCcsICdjZWxsV2lkdGgnKTtcbiAgICBHcmlkU3RhY2sucHJvdG90eXBlLmdldF9jZWxsX2Zyb21fcGl4ZWwgPSBvYnNvbGV0ZShHcmlkU3RhY2sucHJvdG90eXBlLmdldENlbGxGcm9tUGl4ZWwsXG4gICAgICAgICdnZXRfY2VsbF9mcm9tX3BpeGVsJywgJ2dldENlbGxGcm9tUGl4ZWwnKTtcbiAgICBHcmlkU3RhY2sucHJvdG90eXBlLmJhdGNoX3VwZGF0ZSA9IG9ic29sZXRlKEdyaWRTdGFjay5wcm90b3R5cGUuYmF0Y2hVcGRhdGUsXG4gICAgICAgICdiYXRjaF91cGRhdGUnLCAnYmF0Y2hVcGRhdGUnKTtcbiAgICBHcmlkU3RhY2sucHJvdG90eXBlLmlzX2FyZWFfZW1wdHkgPSBvYnNvbGV0ZShHcmlkU3RhY2sucHJvdG90eXBlLmlzQXJlYUVtcHR5LFxuICAgICAgICAnaXNfYXJlYV9lbXB0eScsICdpc0FyZWFFbXB0eScpO1xuICAgIEdyaWRTdGFjay5wcm90b3R5cGUuc2V0X3N0YXRpYyA9IG9ic29sZXRlKEdyaWRTdGFjay5wcm90b3R5cGUuc2V0U3RhdGljLFxuICAgICAgICAnc2V0X3N0YXRpYycsICdzZXRTdGF0aWMnKTtcbiAgICBHcmlkU3RhY2sucHJvdG90eXBlLl9zZXRfc3RhdGljX2NsYXNzID0gb2Jzb2xldGUoR3JpZFN0YWNrLnByb3RvdHlwZS5fc2V0U3RhdGljQ2xhc3MsXG4gICAgICAgICdfc2V0X3N0YXRpY19jbGFzcycsICdfc2V0U3RhdGljQ2xhc3MnKTtcbiAgICAvLyBqc2NzOmVuYWJsZSByZXF1aXJlQ2FtZWxDYXNlT3JVcHBlckNhc2VJZGVudGlmaWVyc1xuXG4gICAgc2NvcGUuR3JpZFN0YWNrVUkgPSBHcmlkU3RhY2s7XG5cbiAgICBzY29wZS5HcmlkU3RhY2tVSS5VdGlscyA9IFV0aWxzO1xuICAgIHNjb3BlLkdyaWRTdGFja1VJLkVuZ2luZSA9IEdyaWRTdGFja0VuZ2luZTtcbiAgICBzY29wZS5HcmlkU3RhY2tVSS5HcmlkU3RhY2tEcmFnRHJvcFBsdWdpbiA9IEdyaWRTdGFja0RyYWdEcm9wUGx1Z2luO1xuXG4gICAgJC5mbi5ncmlkc3RhY2sgPSBmdW5jdGlvbihvcHRzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgbyA9ICQodGhpcyk7XG4gICAgICAgICAgICBpZiAoIW8uZGF0YSgnZ3JpZHN0YWNrJykpIHtcbiAgICAgICAgICAgICAgICBvXG4gICAgICAgICAgICAgICAgICAgIC5kYXRhKCdncmlkc3RhY2snLCBuZXcgR3JpZFN0YWNrKHRoaXMsIG9wdHMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiBzY29wZS5HcmlkU3RhY2tVSTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ3JpZHN0YWNrL2Rpc3QvZ3JpZHN0YWNrLmpzXG4vLyBtb2R1bGUgaWQgPSB6bFVFXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=