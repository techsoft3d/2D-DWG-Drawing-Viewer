var __extends = this && this.__extends || function () { var e = function (f, m) { e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, c) { e.__proto__ = c } || function (e, c) { for (var a in c) c.hasOwnProperty(a) && (e[a] = c[a]) }; return e(f, m) }; return function (f, m) { function h() { this.constructor = f } e(f, m); f.prototype = null === m ? Object.create(m) : (h.prototype = m.prototype, new h) } }(), __awaiter = this && this.__awaiter || function (e, f, m, h) {
    return new (m || (m = Promise))(function (c, a) {
        function b(d) { try { g(h.next(d)) } catch (k) { a(k) } }
        function d(d) { try { g(h["throw"](d)) } catch (k) { a(k) } } function g(a) { a.done ? c(a.value) : (new m(function (d) { d(a.value) })).then(b, d) } g((h = h.apply(e, f || [])).next())
    })
}, __generator = this && this.__generator || function (e, f) {
    function m(d) { return function (b) { return h([d, b]) } } function h(g) {
        if (a) throw new TypeError("Generator is already executing."); for (; c;)try {
            if (a = 1, b && (d = g[0] & 2 ? b["return"] : g[0] ? b["throw"] || ((d = b["return"]) && d.call(b), 0) : b.next) && !(d = d.call(b, g[1])).done) return d; if (b = 0, d) g = [g[0] & 2, d.value]; switch (g[0]) {
                case 0: case 1: d =
                    g; break; case 4: return c.label++, { value: g[1], done: !1 }; case 5: c.label++; b = g[1]; g = [0]; continue; case 7: g = c.ops.pop(); c.trys.pop(); continue; default: if (!(d = c.trys, d = 0 < d.length && d[d.length - 1]) && (6 === g[0] || 2 === g[0])) { c = 0; continue } if (3 === g[0] && (!d || g[1] > d[0] && g[1] < d[3])) c.label = g[1]; else if (6 === g[0] && c.label < d[1]) c.label = d[1], d = g; else if (d && c.label < d[2]) c.label = d[2], c.ops.push(g); else { d[2] && c.ops.pop(); c.trys.pop(); continue }
            }g = f.call(e, c)
        } catch (k) { g = [6, k], b = 0 } finally { a = d = 0 } if (g[0] & 5) throw g[1]; return {
            value: g[0] ?
                g[1] : void 0, done: !0
        }
    } var c = { label: 0, sent: function () { if (d[0] & 1) throw d[1]; return d[1] }, trys: [], ops: [] }, a, b, d, g; return g = { next: m(0), "throw": m(1), "return": m(2) }, "function" === typeof Symbol && (g[Symbol.iterator] = function () { return this }), g
}, Example;
(function (e) {
    var f = function (e) {
        function c(a, b, d, g) {
            var c = e.call(this) || this; c._leaderLine = new Communicator.Markup.Shape.Line; c._textBox = new Communicator.Markup.Shape.TextBox; c._showAsColor = !1; c._nodeId = b; c._viewer = a; c._leaderAnchor = d.copy(); c._textBoxAnchor = d.copy(); c._textBox.setTextString(g); c._textBox.getBoxPortion().setFillOpacity(1); c._textBox.getBoxPortion().setFillColor(Communicator.Color.white()); c._textBox.getTextPortion().setFillColor(Communicator.Color.red()); c._textBox.getTextPortion().setFontSize(16);
            c._leaderLine.setStartEndcapType(Communicator.Markup.Shape.EndcapType.Arrowhead); return c
        } __extends(c, e); c.prototype.draw = function () {
            this._behindView = !1; var a = this._viewer.view.projectPoint(this._leaderAnchor), b = this._viewer.view.projectPoint(this._textBoxAnchor); 0 >= a.z && (this._behindView = !0); 0 >= b.z && (this._behindView = !0); a = Communicator.Point2.fromPoint3(a); b = Communicator.Point2.fromPoint3(b); this._leaderLine.set(a, b); this._textBox.setPosition(b); b = this._viewer.markupManager.getRenderer(); b.drawLine(this._leaderLine);
            b.drawTextBox(this._textBox)
        }; c.prototype.hit = function (a) { var b = this._viewer.markupManager.getRenderer().measureTextBox(this._textBox), d = this._textBox.getPosition(); return a.x < d.x || a.x > d.x + b.x || a.y < d.y || a.y > d.y + b.y ? !1 : !0 }; c.prototype.setShowAsColor = function (a) { this._showAsColor = a }; c.prototype.getShowAsColor = function () { return this._showAsColor }; c.prototype.getNodeId = function () { return this._nodeId }; c.prototype.getLeaderLineAnchor = function () { return this._leaderAnchor.copy() }; c.prototype.getTextBoxAnchor =
            function () { return this._textBoxAnchor }; c.prototype.setTextBoxAnchor = function (a) { this._textBoxAnchor.assign(a) }; c.prototype.setLabel = function (a) { this._textBox.setTextString(a) }; c.prototype.getLabel = function () { return this._textBox.getTextString() }; return c
    }(Communicator.Markup.MarkupItem); e.AnnotationMarkup = f; var m = function () {
        function e(c, a) { this._annotationMap = {}; this._viewer = c; this._pulseManager = a; this._table = document.getElementById("AnnotationRegistry") } e.prototype.getAnnotation = function (c) { return this._annotationMap[c] };
        e.prototype.export = function () { for (var c = [], a = 0, b = Object.keys(this._annotationMap); a < b.length; a++) { var d = this._annotationMap[b[a]]; c.push({ name: d.getLabel(), position: d.getLeaderLineAnchor().toJson(), nodeId: d.getNodeId(), showAsColor: d.getShowAsColor() }) } return JSON.stringify(c) }; e.prototype.addAnnotation = function (c, a) {
            var b = this; this._annotationMap[c] = a; var d = document.createElement("tr"); d.id = c; var g = document.createElement("td"); g.id = c + "-nodeId"; g.innerText = a.getNodeId().toString(); d.appendChild(g);
            g = document.createElement("td"); g.id = c + "-name"; g.innerText = a.getLabel(); d.appendChild(g); a = document.createElement("td"); g = document.createElement("button"); g.innerText = "Rename"; g.onclick = function () { b._renameAnnotation(c) }; a.appendChild(g); g = document.createElement("button"); g.innerText = "Delete"; g.onclick = function () { b._deleteAnnotation(c) }; a.appendChild(g); d.appendChild(a); a = document.createElement("td"); g = document.createElement("input"); g.type = "checkbox"; g.id = c + "-showAsColor"; g.classList.add("showAsColor");
            a.appendChild(g); g.onchange = function (d) { b._onPulseChange(c, d.target) }; d.appendChild(a); this._table.appendChild(d)
        }; e.prototype._onPulseChange = function (c, a) { c = this.getAnnotation(c); void 0 !== c && (c.setShowAsColor(a.checked), a.checked ? this._pulseManager.add(c.getNodeId(), this._pulseManager.getDefaultColor1(), this._pulseManager.getDefaultColor2(), this._pulseManager.getDefaultPulseTime()) : (this._pulseManager.deletePulse(c.getNodeId()), this._viewer.redraw())) }; e.prototype._renameAnnotation = function (c) {
            var a =
                this._annotationMap[c]; if (void 0 !== a) { var b = prompt("Enter a new name for " + a.getLabel(), a.getLabel()); null != b && (a.setLabel(b), this._viewer.markupManager.refreshMarkup(), c = document.getElementById(c + "-name"), null !== c && (c.innerText = b)) }
        }; e.prototype._deleteAnnotation = function (c) {
            this._viewer.markupManager.unregisterMarkup(c); var a = this._annotationMap[c]; void 0 !== a && (this._pulseManager.deletePulse(a.getNodeId()), delete this._annotationMap[c]); c = document.getElementById(c); null !== c && null !== c.parentElement &&
                c.parentElement.removeChild(c)
        }; return e
    }(); e.AnnotationRegistry = m; m = function () {
        function e(c, a) { this._previousNodeId = this._activeMarkup = this._previousAnchorPlaneDragPoint = null; this._viewer = c; this._annotationRegistry = a } e.prototype.onMouseDown = function (c) {
            return __awaiter(this, void 0, void 0, function () {
                var a, b, d, g, l, k; return __generator(this, function (e) {
                    switch (e.label) {
                        case 0: return [4, this._viewer.view.pickFromPoint(c.getPosition(), new Communicator.PickConfig(Communicator.SelectionMask.All))]; case 1: a =
                            e.sent(); if (null !== a && 0 !== a.overlayIndex()) return [2]; b = c.getPosition(); this._selectAnnotation(b) ? c.setHandled(!0) : null !== a && a.isNodeEntitySelection() && (d = a.getNodeId(), g = a.getPosition(), l = new f(this._viewer, d, g, this._viewer.model.getNodeName(d) + " Connector"), k = this._viewer.markupManager.registerMarkup(l), this._annotationRegistry.addAnnotation(k, l), this._startDraggingAnnotation(l, b), c.setHandled(!0)); return [2]
                    }
                })
            })
        }; e.prototype.onMouseMove = function (c) {
            return __awaiter(this, void 0, void 0, function () {
                var a,
                    b, d, g, l; return __generator(this, function (k) {
                        switch (k.label) {
                            case 0: if (null === this._activeMarkup) return [3, 1]; a = this._getDragPointOnAnchorPlane(c.getPosition()); b = void 0; b = null !== this._previousAnchorPlaneDragPoint && null !== a ? Communicator.Point3.subtract(a, this._previousAnchorPlaneDragPoint) : Communicator.Point3.zero(); d = this._activeMarkup.getTextBoxAnchor().add(b); this._activeMarkup.setTextBoxAnchor(d); this._previousAnchorPlaneDragPoint = a; this._viewer.markupManager.refreshMarkup(); c.setHandled(!0); return [3,
                                3]; case 1: return [4, this._viewer.view.pickFromPoint(c.getPosition(), new Communicator.PickConfig)]; case 2: g = k.sent(), l = g.getNodeId(), l !== this._previousNodeId && (null != this._previousNodeId && this._viewer.model.setNodesHighlighted([this._previousNodeId], !1), null != l && this._viewer.model.setNodesHighlighted([l], !0)), this._previousNodeId = l, k.label = 3; case 3: return [2]
                        }
                    })
            })
        }; e.prototype.onMouseUp = function (c) { this._previousAnchorPlaneDragPoint = this._activeMarkup = null }; e.prototype._startDraggingAnnotation = function (c,
            a) { this._activeMarkup = c; this._previousAnchorPlaneDragPoint = this._getDragPointOnAnchorPlane(a) }; e.prototype._selectAnnotation = function (c) { var a = this._viewer.markupManager.pickMarkupItem(c); return a ? (this._activeMarkup = a, this._previousAnchorPlaneDragPoint = this._getDragPointOnAnchorPlane(c), !0) : !1 }; e.prototype.onDeactivate = function () { null != this._previousNodeId && this._viewer.model.setNodesHighlighted([this._previousNodeId], !1); this._previousNodeId = null }; e.prototype._getDragPointOnAnchorPlane = function (c) {
                if (null ===
                    this._activeMarkup) return null; var a = this._activeMarkup.getLeaderLineAnchor(), b = this._viewer.view.getCamera(); b = Communicator.Point3.subtract(b.getPosition(), a).normalize(); a = Communicator.Plane.createFromPointAndNormal(a, b); c = this._viewer.view.raycastFromPoint(c); if (null === c) return null; b = Communicator.Point3.zero(); return a.intersectsRay(c, b) ? b : null
            }; return e
    }(); e.AnnotationOperator = m
})(Example || (Example = {})); var Communicator;
(function (e) {
    (function (f) {
        (function (m) {
            var h = function () { function a(b, d) { this.action = b; this.element = d } a.prototype.setEnabled = function (b) { b ? $(this.element).removeClass("disabled") : $(this.element).addClass("disabled") }; a.prototype.setText = function (b) { this.element.innerHTML = b }; a.prototype.show = function () { $(this.element).show() }; a.prototype.hide = function () { $(this.element).hide() }; return a }(); m.ContextMenuItem = h; var c = function () {
                function a(b, d, a, c, k) {
                    var g = this; this._transparencyIdHash = new Map; this._activeType =
                        this._activeLayerName = this._activeItemId = null; this._separatorCount = 0; this._position = null; this._modifiers = e.KeyModifiers.None; this._viewer = a; this._containerId = d; this._isolateZoomHelper = c; this._colorPicker = k; this._menuElement = this._createMenuElement(b); this._contextLayer = this._createContextLayer(); this._initElements(); this._viewer.setCallbacks({ firstModelLoaded: function () { g._onNewModel() }, modelSwitched: function () { g._onNewModel() } })
                } a.prototype._getContextItemMap = function () { return this._contextItemMap };
                a.prototype._onNewModel = function () { this._viewer.sheetManager.isDrawingSheetActive() && (this._contextItemMap.reset.hide(), void 0 !== this._contextItemMap.meshlevel0 && this._contextItemMap.meshlevel0.hide(), void 0 !== this._contextItemMap.meshlevel1 && this._contextItemMap.meshlevel1.hide(), void 0 !== this._contextItemMap.meshlevel2 && this._contextItemMap.meshlevel2.hide(), $(".contextmenu-separator-3").hide()) }; a.prototype._isMenuItemEnabled = function () {
                    if (null !== this._activeLayerName || null !== this._activeType ||
                        null !== this._activeItemId && !this._viewer.noteTextManager.checkPinInstance(this._activeItemId)) return !0; for (var b = 0, d = this._viewer.selectionManager.getResults(); b < d.length; b++)if (1 !== d[b].overlayIndex()) return !0; return !1
                }; a.prototype._isMenuItemVisible = function () { var b = this._isItemVisible(this._activeItemId), d = this._isLayerVisibile(this._activeLayerName), a = this._isTypeVisible(this._activeType); return b || d || a }; a.prototype._isColorSet = function (b) {
                    return __awaiter(this, void 0, void 0, function () {
                        var d,
                            a, c, k; return __generator(this, function (g) { switch (g.label) { case 0: d = this._colorPicker.getColor(), a = !0, c = 0, g.label = 1; case 1: return c < b.length ? [4, this._viewer.model.getNodeColorMap(b[c], e.ElementType.Faces)] : [3, 4]; case 2: k = g.sent(); if (0 === k.size) return [2, !1]; k.forEach(function (b) { b.equals(d) || (a = !1) }); g.label = 3; case 3: return ++c, [3, 1]; case 4: return [2, a] } })
                    })
                }; a.prototype._updateMenuItems = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var b, d, a, c, k, h, f; return __generator(this, function (g) {
                            switch (g.label) {
                                case 0: return b =
                                    this.getContextItemIds(!0, !0, !1), d = this._isMenuItemEnabled(), a = this._isMenuItemVisible(), this._contextItemMap.visibility.setText(a ? "Hide" : "Show"), this._contextItemMap.visibility.setEnabled(d), this._contextItemMap.isolate.setEnabled(d), this._contextItemMap.zoom.setEnabled(d), this._contextItemMap.transparent.setEnabled(d), k = (c = this._contextItemMap.setColor).setText, [4, this._isColorSet(b)]; case 1: return k.apply(c, [(g.sent() ? "Uns" : "S") + "et Color"]), (h = this._viewer.operatorManager.getOperator(e.OperatorId.Handle)) &&
                                        h.isEnabled && d ? (f = 0 < b.length && h.isEnabled(), this._contextItemMap.handles.setEnabled(f)) : this._contextItemMap.handles.setEnabled(!1), void 0 !== this._contextItemMap.meshlevel0 && this._contextItemMap.meshlevel0.setEnabled(d), void 0 !== this._contextItemMap.meshlevel1 && this._contextItemMap.meshlevel1.setEnabled(d), void 0 !== this._contextItemMap.meshlevel2 && this._contextItemMap.meshlevel2.setEnabled(d), [2]
                            }
                        })
                    })
                }; a.prototype.setActiveLayerName = function (b) {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this,
                            function (d) { switch (d.label) { case 0: return this._activeLayerName = f.LayersTree.getLayerName(b), [4, this._updateMenuItems()]; case 1: return d.sent(), [2] } })
                    })
                }; a.prototype.setActiveType = function (b) { return __awaiter(this, void 0, void 0, function () { return __generator(this, function (d) { switch (d.label) { case 0: return this._activeType = b, [4, this._updateMenuItems()]; case 1: return d.sent(), [2] } }) }) }; a.prototype.setActiveItemId = function (b) {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (d) {
                            switch (d.label) {
                                case 0: return this._activeItemId =
                                    b, [4, this._updateMenuItems()]; case 1: return d.sent(), [2]
                            }
                        })
                    })
                }; a.prototype.showElements = function (b) { this._viewer.setContextMenuStatus(!0); var d = this._viewer.view.getCanvasSize(), a = $(this._menuElement), c = a.outerWidth(), k = a.outerHeight(); void 0 !== k && void 0 !== c && (k > d.y && a.addClass("small"), a = b.y, b = b.x, a + k > d.y && (a = d.y - k - 1), b + c > d.x && (b = d.x - c - 1), $(this._menuElement).css({ left: b + "px", top: a + "px", display: "block" })); $(this._menuElement).show(); $(this._contextLayer).show() }; a.prototype._onContextLayerClick =
                    function (b) { 0 === b.button && this.hide() }; a.prototype.hide = function () { this._viewer.setContextMenuStatus(!1); this._activeType = this._activeLayerName = this._activeItemId = null; $(this._menuElement).hide(); $(this._contextLayer).hide(); $(this._menuElement).removeClass("small") }; a.prototype.action = function (b) {
                        return __awaiter(this, void 0, void 0, function () {
                            var d; return __generator(this, function (a) {
                                switch (a.label) {
                                    case 0: return d = this._contextItemMap[b], void 0 === d ? [3, 2] : [4, d.action()]; case 1: a.sent(), a.label = 2;
                                    case 2: return [2]
                                }
                            })
                        })
                    }; a.prototype._doMenuClick = function (b) { b = $(b.target); b.hasClass("disabled") || (b = b.attr("id"), void 0 !== b && this.action(b), this.hide()) }; a.prototype._createMenuElement = function (b) {
                        var d = this, a = document.createElement("div"); a.classList.add("ui-contextmenu"); a.classList.add(b); a.style.position = "absolute"; a.style.zIndex = "6"; a.style.display = "none"; a.oncontextmenu = function () { return !1 }; a.ontouchmove = function (d) { d.preventDefault() }; $(a).on("click", ".ui-contextmenu-item", function (b) { d._doMenuClick(b) });
                        return a
                    }; a.prototype._createContextLayer = function () { var b = this, d = document.createElement("div"); d.style.position = "relative"; d.style.width = "100%"; d.style.height = "100%"; d.style.backgroundColor = "transparent"; d.style.zIndex = "5"; d.style.display = "none"; d.oncontextmenu = function () { return !1 }; d.ontouchmove = function (d) { d.preventDefault() }; $(d).on("mousedown", function (d) { b._onContextLayerClick(d) }); return d }; a.prototype._initElements = function () {
                        this._createDefaultMenuItems(); var b = document.getElementById(this._containerId);
                        null !== b && (b.appendChild(this._menuElement), b.appendChild(this._contextLayer))
                    }; a.prototype._isMenuItemExecutable = function () { return null !== this._activeItemId || null !== this._activeLayerName || null !== this._activeType || 0 < this._viewer.selectionManager.size() }; a.prototype._createDefaultMenuItems = function () {
                        var b = this, d = this._viewer.model, a = this._viewer.operatorManager; this._contextItemMap = {}; var c = function (b) { return b.every(function (b) { return d.hasEffectiveGenericType(b, e.StaticGenericType.IfcSpace) }) };
                        this.appendItem("isolate", "Isolate", function () { return __awaiter(b, void 0, void 0, function () { var d; return __generator(this, function (b) { switch (b.label) { case 0: if (!this._isMenuItemExecutable()) return [3, 2]; d = this.getContextItemIds(!0, !0); return [4, this._isolateZoomHelper.isolateNodes(d, c(d) ? !1 : null)]; case 1: b.sent(), b.label = 2; case 2: return [2] } }) }) }); this.appendItem("zoom", "Zoom", function () {
                            return __awaiter(b, void 0, void 0, function () {
                                return __generator(this, function (d) {
                                    switch (d.label) {
                                        case 0: return this._isMenuItemExecutable() ?
                                            [4, this._isolateZoomHelper.fitNodes(this.getContextItemIds(!0, !0))] : [3, 2]; case 1: d.sent(), d.label = 2; case 2: return [2]
                                    }
                                })
                            })
                        }); this.appendItem("visibility", "Hide", function () { return __awaiter(b, void 0, void 0, function () { var b, a; return __generator(this, function (g) { switch (g.label) { case 0: if (!this._isMenuItemExecutable()) return [3, 2]; b = !this._isMenuItemVisible(); a = this.getContextItemIds(!0, !0); return [4, d.setNodesVisibility(a, b, c(a) ? !1 : null)]; case 1: g.sent(), g.label = 2; case 2: return [2] } }) }) }); this.appendSeparator();
                        this.appendItem("transparent", "Transparent", function () { return __awaiter(b, void 0, void 0, function () { var b, a, g, c, l, k; return __generator(this, function (e) { if (this._isMenuItemExecutable()) if (b = this.getContextItemIds(!0, !0), void 0 === this._transparencyIdHash.get(b[0])) { a = 0; for (g = b; a < g.length; a++)c = g[a], this._transparencyIdHash.set(c, 1); d.setNodesOpacity(b, .5) } else { l = 0; for (k = b; l < k.length; l++)c = k[l], this._transparencyIdHash.delete(c); d.resetNodesOpacity(b) } return [2] }) }) }); this.appendSeparator(); this.appendItem("setColor",
                            "Set Color", function () { return __awaiter(b, void 0, void 0, function () { var d, b; return __generator(this, function (a) { switch (a.label) { case 0: return d = this.getContextItemIds(!0, !0, !1), 0 < d.length ? [4, this._isColorSet(d)] : [3, 2]; case 1: a.sent() ? this._viewer.model.unsetNodesFaceColor(d) : (b = this._colorPicker.getColor().copy(), this._viewer.model.setNodesFaceColor(d, b)), a.label = 2; case 2: return [2] } }) }) }); this.appendItem("modifyColor", "Modify Color", function () {
                                return __awaiter(b, void 0, void 0, function () {
                                    return __generator(this,
                                        function (d) { this._colorPicker.show(); return [2] })
                                })
                            }); this.appendSeparator(); this.appendItem("handles", "Show Handles", function () { return __awaiter(b, void 0, void 0, function () { var d, b; return __generator(this, function (g) { switch (g.label) { case 0: if (!this._isMenuItemExecutable()) return [3, 2]; d = a.getOperator(e.OperatorId.Handle); b = this.getContextItemIds(!0, !0, !1); return 0 < b.length ? [4, d.addHandles(b, this._modifiers === e.KeyModifiers.Shift ? null : this._position)] : [3, 2]; case 1: g.sent(), g.label = 2; case 2: return [2] } }) }) });
                        this.appendItem("reset", "Reset Model", function () { return __awaiter(b, void 0, void 0, function () { var b; return __generator(this, function (g) { switch (g.label) { case 0: return b = a.getOperator(e.OperatorId.Handle), [4, b.removeHandles()]; case 1: return g.sent(), [4, d.reset()]; case 2: return g.sent(), d.unsetNodesFaceColor([this._viewer.model.getAbsoluteRootNode()]), [2] } }) }) }); if (this._viewer.getCreationParameters().hasOwnProperty("model")) {
                            this.appendSeparator(); for (var k = function (a) {
                                h.appendItem("meshlevel" + a, "Mesh Level " +
                                    a, function () { return __awaiter(b, void 0, void 0, function () { return __generator(this, function (g) { b._isMenuItemExecutable() && d.setMeshLevel(b.getContextItemIds(!0, !0), a); return [2] }) }) })
                            }, h = this, f = 0; 3 > f; ++f)k(f)
                        } this.appendSeparator(); this.appendItem("showall", "Show all", function () { return __awaiter(b, void 0, void 0, function () { return __generator(this, function (d) { switch (d.label) { case 0: return [4, this._isolateZoomHelper.showAll()]; case 1: return d.sent(), [2] } }) }) })
                    }; a.prototype.getContextItemIds = function (b, d,
                        a) {
                        void 0 === a && (a = !0); var g = this._viewer.selectionManager, c = this._viewer.model, h = c.getAbsoluteRootNode(), f = []; if (b) { b = 0; for (var q = g.getResults(); b < q.length; b++) { var m = q[b].getNodeId(); c.isNodeLoaded(m) && (a || !a && m !== h) && f.push(m) } } if (null !== this._activeLayerName && (c = this._viewer.model.getLayerIdsFromName(this._activeLayerName), null !== c)) for (b = 0; b < c.length; b++)if (m = this._viewer.model.getNodesFromLayer(c[b]), null !== m) for (q = 0; q < m.length; q++) {
                            var n = m[q], r = e.Selection.SelectionItem.create(n); g.contains(r) ||
                                f.push(n)
                        } null !== this._activeType && (m = this._viewer.model.getNodesByGenericType(this._activeType), null !== m && m.forEach(function (d) { var b = e.Selection.SelectionItem.create(d); g.contains(b) || f.push(d) })); null !== this._activeItemId && (r = e.Selection.SelectionItem.create(this._activeItemId), c = null !== g.containsParent(r), b = -1 !== f.indexOf(this._activeItemId), !d || !a && (a || this._activeItemId === h || 0 !== f.length && (b || c)) || f.push(this._activeItemId)); return f
                    }; a.prototype.appendItem = function (b, d, a) {
                        var g = document.createElement("div");
                        g.classList.add("ui-contextmenu-item"); g.innerHTML = d; g.id = b; this._menuElement.appendChild(g); d = new h(a, g); return this._contextItemMap[b] = d
                    }; a.prototype.appendSeparator = function () { var b = document.createElement("div"); b.classList.add("contextmenu-separator-" + this._separatorCount++); b.classList.add("ui-contextmenu-separator"); b.style.width = "100%"; b.style.height = "1px"; this._menuElement.appendChild(b) }; a.prototype._isItemVisible = function (b) {
                        if (null === b) {
                            b = this._viewer.selectionManager.getResults(); if (0 ===
                                b.length) return !1; b = b[0].getNodeId()
                        } return this._viewer.model.getNodeVisibility(b)
                    }; a.prototype._isLayerVisibile = function (b) { if (null !== b && (b = this._viewer.model.getLayerIdsFromName(b), null !== b)) for (var d = 0; d < b.length; d++) { var a = this._viewer.model.getNodesFromLayer(b[d]); if (null !== a) for (var c = 0; c < a.length; c++)if (this._viewer.model.getNodeVisibility(a[c])) return !0 } return !1 }; a.prototype._isTypeVisible = function (b) {
                        var d = this, a = !1; null !== b && (b = this._viewer.model.getNodesByGenericType(b), null !== b && b.forEach(function (b) {
                            a =
                                a || d._viewer.model.getNodeVisibility(b)
                        })); return a
                    }; return a
            }(); m.ContextMenu = c
        })(f.Context || (f.Context = {}))
    })(e.Ui || (e.Ui = {}))
})(Communicator || (Communicator = {}));
(function (e) {
    (function (f) {
        var m = function () { return function () { this.referenceGeometry = this.plane = null; this.status = 0; this.updateReferenceGeometry = !1 } }(); f.CuttingPlaneInfo = m; var h = function () {
            function c(a) {
                var b = this; this._cuttingSections = []; this._modelBounding = new e.Box; this._planeInfo = new Map; this._useIndividualCuttingSections = this._showReferenceGeometry = !0; this._boundingBoxUpdate = !1; this._faceSelection = null; this._initSectionCalled = !1; this._pendingFuncs = {}; this._viewer = a; a = function () {
                    return __awaiter(b,
                        void 0, void 0, function () { return __generator(this, function (d) { switch (d.label) { case 0: return [4, this._updateBoundingBox()]; case 1: return d.sent(), [4, this.resetCuttingPlanes()]; case 2: return d.sent(), [2] } }) })
                }; this._viewer.setCallbacks({
                    assemblyTreeReady: function () { return __awaiter(b, void 0, void 0, function () { return __generator(this, function (d) { switch (d.label) { case 0: return [4, this._initSection()]; case 1: return d.sent(), [4, this._updateBoundingBox()]; case 2: return d.sent(), [2] } }) }) }, visibilityChanged: function () {
                        return __awaiter(b,
                            void 0, void 0, function () { return __generator(this, function (d) { switch (d.label) { case 0: return [4, this._updateBoundingBox()]; case 1: return d.sent(), [2] } }) })
                    }, hwfParseComplete: function () { return __awaiter(b, void 0, void 0, function () { return __generator(this, function (d) { switch (d.label) { case 0: return [4, this._updateBoundingBox()]; case 1: return d.sent(), [2] } }) }) }, firstModelLoaded: a, modelSwitched: a, modelSwitchStart: function () {
                        return __awaiter(b, void 0, void 0, function () {
                            return __generator(this, function (d) {
                                switch (d.label) {
                                    case 0: return [4,
                                        this._clearCuttingSections()]; case 1: return d.sent(), [2]
                                }
                            })
                        })
                    }
                })
            } c.prototype._getCuttingStatus = function (a, b) { return 0 <= b.normal.x && 0 <= b.normal.y && 0 <= b.normal.z || 3 === a ? 1 : 2 }; c.prototype.onSectionsChanged = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var a, b, d, g, c, k, e, f, h, m, n, r; return __generator(this, function (l) {
                        switch (l.label) {
                            case 0: a = []; b = []; g = d = !1; c = this._cuttingSections[0]; k = this._cuttingSections[1]; e = this._cuttingSections[2]; f = this._cuttingSections[3]; 1 < c.getCount() ? (a[0] = c.getPlane(0),
                                a[1] = c.getPlane(1), a[2] = c.getPlane(2), a[3] = c.getPlane(3), b[0] = c.getReferenceGeometry(0), b[1] = c.getReferenceGeometry(1), b[2] = c.getReferenceGeometry(2), b[3] = c.getReferenceGeometry(3)) : (g = !0, a[0] = c.getPlane(0), a[1] = k.getPlane(0), a[2] = e.getPlane(0), a[3] = f.getPlane(0), b[0] = c.getReferenceGeometry(0), b[1] = k.getReferenceGeometry(0), b[2] = e.getReferenceGeometry(0), b[3] = f.getReferenceGeometry(0)); if (null !== b[0] || null !== b[1] || null !== b[2] || null !== b[3]) d = !0; this._resetCuttingData(); this._showReferenceGeometry =
                                    d; this._useIndividualCuttingSections = g; for (h = 0; h < a.length; ++h)m = a[h], null !== m && (n = this._getPlaneSectionIndex(m), r = this._ensurePlaneInfo(n), 0 === r.status && (r.status = this._getCuttingStatus(n, m), r.plane = m, r.referenceGeometry = b[h])); this._viewer.pauseRendering(); return [4, this._clearCuttingSections()]; case 1: return l.sent(), [4, this._restorePlanes()]; case 2: return l.sent(), this._viewer.resumeRendering(), [2]
                        }
                    })
                })
            }; c.prototype._getPlaneSectionIndex = function (a) {
                var b = Math.abs(a.normal.x), d = Math.abs(a.normal.y);
                a = Math.abs(a.normal.z); return 1 === b && 0 === d && 0 === a ? 0 : 0 === b && 1 === d && 0 === a ? 1 : 0 === b && 0 === d && 1 === a ? 2 : 3
            }; c.prototype.getReferenceGeometryEnabled = function () { return this._showReferenceGeometry }; c.prototype.getIndividualCuttingSectionEnabled = function () { return this._useIndividualCuttingSections }; c.prototype.getPlaneInfo = function (a) { return this._planeInfo.get(a) }; c.prototype._ensurePlaneInfo = function (a) { var b = this._planeInfo.get(a); void 0 === b && (b = new m, this._planeInfo.set(a, b)); return b }; c.prototype._setStatus =
                function (a, b) { this._ensurePlaneInfo(a).status = b }; c.prototype._updateBoundingBox = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var a, b, d, g; return __generator(this, function (c) {
                            switch (c.label) {
                                case 0: if (this._boundingBoxUpdate || !this._initSectionCalled) return [3, 5]; this._boundingBoxUpdate = !0; return [4, this._viewer.model.getModelBounding(!0, !1)]; case 1: a = c.sent(); b = this._modelBounding.min.equalsWithTolerance(a.min, .01); d = this._modelBounding.max.equalsWithTolerance(a.max, .01); if (b && d) return [3,
                                    4]; this._modelBounding = a; this._ensurePlaneInfo(0).updateReferenceGeometry = !0; this._ensurePlaneInfo(1).updateReferenceGeometry = !0; this._ensurePlaneInfo(2).updateReferenceGeometry = !0; this._ensurePlaneInfo(3).updateReferenceGeometry = !0; g = [this._isActive(0), this._isActive(1), this._isActive(2), this._isActive(3)]; this._storePlanes(); return [4, this._clearCuttingSections()]; case 2: return c.sent(), [4, this._restorePlanes(g)]; case 3: c.sent(), c.label = 4; case 4: this._boundingBoxUpdate = !1, c.label = 5; case 5: return [2]
                            }
                        })
                    })
                };
            c.prototype._resetAxis = function (a) { this._planeInfo.delete(a); 3 === a && (this._faceSelection = null) }; c.prototype._resetCuttingData = function () { this._resetAxis(0); this._resetAxis(1); this._resetAxis(2); this._resetAxis(3); this._showReferenceGeometry = this._useIndividualCuttingSections = !0; this._faceSelection = null }; c.prototype.resetCuttingPlanes = function () { this._resetCuttingData(); return this._clearCuttingSections() }; c.prototype._initSection = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var a, b; return __generator(this,
                        function (d) { switch (d.label) { case 0: return [4, this._viewer.model.getModelBounding(!0, !1)]; case 1: return a = d.sent(), this._modelBounding = a.copy(), b = this._viewer.cuttingManager, this._cuttingSections[0] = b.getCuttingSection(0), this._cuttingSections[1] = b.getCuttingSection(1), this._cuttingSections[2] = b.getCuttingSection(2), this._cuttingSections[3] = b.getCuttingSection(3), [4, this._triggerPendingFuncs()]; case 2: return d.sent(), this._initSectionCalled = !0, [2] } })
                })
            }; c.prototype._triggerPendingFuncs = function () {
                return __awaiter(this,
                    void 0, void 0, function () { var a; return __generator(this, function (b) { switch (b.label) { case 0: if (!this._pendingFuncs.inverted) return [3, 2]; a = this._pendingFuncs.inverted; delete this._pendingFuncs.inverted; return [4, a()]; case 1: b.sent(), b.label = 2; case 2: if (!this._pendingFuncs.visibility) return [3, 4]; a = this._pendingFuncs.visibility; delete this._pendingFuncs.visibility; return [4, a()]; case 3: b.sent(), b.label = 4; case 4: return [2] } }) })
            }; c.prototype.toggle = function (a) {
                return __awaiter(this, void 0, void 0, function () {
                    var b,
                        d; return __generator(this, function (g) {
                            switch (g.label) {
                                case 0: b = this._ensurePlaneInfo(a).status; switch (b) { case 0: return [3, 1]; case 1: return [3, 8]; case 2: return [3, 10] }return [3, 12]; case 1: if (3 !== a) return [3, 5]; d = this._viewer.selectionManager.getLast(); if (null === d || !d.isFaceSelection()) return [3, 4]; this._faceSelection = d; return [4, this._cuttingSections[a].clear()]; case 2: return g.sent(), this._setStatus(a, 1), [4, this.setCuttingPlaneVisibility(!0, a)]; case 3: g.sent(), g.label = 4; case 4: return [3, 7]; case 5: return this._setStatus(a,
                                    1), [4, this.setCuttingPlaneVisibility(!0, a)]; case 6: g.sent(), g.label = 7; case 7: return [3, 12]; case 8: return this._setStatus(a, 2), [4, this.setCuttingPlaneInverted(a)]; case 9: return g.sent(), [3, 12]; case 10: return this._setStatus(a, 0), [4, this.setCuttingPlaneVisibility(!1, a)]; case 11: return g.sent(), [3, 12]; case 12: return [2]
                            }
                        })
                })
            }; c.prototype.getCount = function () { for (var a = 0, b = 0, d = this._cuttingSections; b < d.length; b++)a += d[b].getCount(); return a }; c.prototype.setCuttingPlaneVisibility = function (a, b) {
                return __awaiter(this,
                    void 0, void 0, function () {
                        var d, g, c, k, e, h = this; return __generator(this, function (l) {
                            switch (l.label) {
                                case 0: d = this._getCuttingSectionIndex(b); g = this._cuttingSections[d]; if (void 0 === g) return this._pendingFuncs.visibility = function () { return __awaiter(h, void 0, void 0, function () { return __generator(this, function (d) { switch (d.label) { case 0: return [4, this.setCuttingPlaneVisibility(a, b)]; case 1: return d.sent(), [2] } }) }) }, [2]; this._viewer.delayCapping(); if (!a) return [3, 2]; c = this._ensurePlaneInfo(b); null === c.plane &&
                                    (c.plane = this._generateCuttingPlane(b), c.referenceGeometry = this._generateReferenceGeometry(b)); return [4, this._setSection(b)]; case 1: return l.sent(), [3, 4]; case 2: return [4, this.refreshPlaneGeometry()]; case 3: l.sent(), l.label = 4; case 4: return k = this.getCount(), e = this._isActive(b), 0 < k && !e ? [4, this._activatePlanes()] : [3, 6]; case 5: return l.sent(), [3, 8]; case 6: return e && 0 === k ? [4, this._deactivateAxis(b)] : [3, 8]; case 7: l.sent(), l.label = 8; case 8: return [2]
                            }
                        })
                    })
            }; c.prototype.setCuttingPlaneInverted = function (a) {
                return __awaiter(this,
                    void 0, void 0, function () {
                        var b, d, g, c = this; return __generator(this, function (l) {
                            switch (l.label) {
                                case 0: b = this._cuttingSections[this._getCuttingSectionIndex(a)]; if (void 0 === b) return this._pendingFuncs.inverted = function () { return __awaiter(c, void 0, void 0, function () { return __generator(this, function (d) { switch (d.label) { case 0: return [4, this.setCuttingPlaneInverted(a)]; case 1: return d.sent(), [2] } }) }) }, [2]; this._viewer.delayCapping(); d = this._getPlaneIndex(a); g = b.getPlane(d); if (!g) return [3, 2]; g.normal.negate();
                                    g.d *= -1; return [4, b.updatePlane(d, g, new e.Matrix, !1, !1)]; case 1: l.sent(), l.label = 2; case 2: return [2]
                            }
                        })
                    })
            }; c.prototype.toggleReferenceGeometry = function () { return __awaiter(this, void 0, void 0, function () { return __generator(this, function (a) { switch (a.label) { case 0: if (!(0 < this.getCount())) return [3, 2]; this._showReferenceGeometry = !this._showReferenceGeometry; return [4, this.refreshPlaneGeometry()]; case 1: a.sent(), a.label = 2; case 2: return [2] } }) }) }; c.prototype.refreshPlaneGeometry = function () {
                return __awaiter(this,
                    void 0, void 0, function () { return __generator(this, function (a) { switch (a.label) { case 0: return this._storePlanes(), [4, this._clearCuttingSections()]; case 1: return a.sent(), [4, this._restorePlanes()]; case 2: return a.sent(), [2] } }) })
            }; c.prototype.toggleCuttingMode = function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (a) {
                        switch (a.label) {
                            case 0: if (!(1 < this.getCount())) return [3, 3]; this._storePlanes(); return [4, this._clearCuttingSections()]; case 1: return a.sent(), this._useIndividualCuttingSections =
                                !this._useIndividualCuttingSections, [4, this._restorePlanes()]; case 2: a.sent(), a.label = 3; case 3: return [2]
                        }
                    })
                })
            }; c.prototype._isActive = function (a) { return this._cuttingSections[this._getCuttingSectionIndex(a)].isActive() }; c.prototype._deactivateAxis = function (a) { return this._cuttingSections[this._getCuttingSectionIndex(a)].deactivate() }; c.prototype._getCuttingSectionIndex = function (a) { return this._useIndividualCuttingSections ? a : 0 }; c.prototype._clearCuttingSection = function (a) {
                return __awaiter(this, void 0,
                    void 0, function () { var b; return __generator(this, function (d) { switch (d.label) { case 0: return b = this._cuttingSections[a], void 0 === b ? [3, 2] : [4, b.clear()]; case 1: d.sent(), d.label = 2; case 2: return [2] } }) })
            }; c.prototype._clearCuttingSections = function () { var a = []; a.push(this._clearCuttingSection(0)); a.push(this._clearCuttingSection(1)); a.push(this._clearCuttingSection(2)); a.push(this._clearCuttingSection(3)); return e.Util.waitForAll(a) }; c.prototype._activateSection = function (a) {
                return __awaiter(this, void 0, void 0,
                    function () { var b; return __generator(this, function (d) { switch (d.label) { case 0: return b = this._cuttingSections[a], void 0 !== b && 0 < b.getCount() ? [4, b.activate()] : [3, 2]; case 1: d.sent(), d.label = 2; case 2: return [2] } }) })
            }; c.prototype._activatePlanes = function (a) { var b = []; a && !a[0] || b.push(this._activateSection(0)); a && !a[1] || b.push(this._activateSection(1)); a && !a[2] || b.push(this._activateSection(2)); a && !a[3] || b.push(this._activateSection(3)); return e.Util.waitForAll(b) }; c.prototype._getPlaneIndex = function (a) {
                if (this._useIndividualCuttingSections) {
                    a =
                        this._getCuttingSectionIndex(a); var b = this._cuttingSections[a]; if (b.getPlane(0)) return 0
                } else { b = this._cuttingSections[0]; for (var d = b.getCount(), g = 0; g < d; g++) { var c = b.getPlane(g), k = void 0; this._faceSelection && (k = this._faceSelection.getFaceEntity().getNormal()); if (c && (c.normal.x && 0 === a || c.normal.y && 1 === a || c.normal.z && 2 === a || 3 === a && k && c.normal.equals(k))) return g } } return -1
            }; c.prototype._setSection = function (a) {
                return __awaiter(this, void 0, void 0, function () {
                    var b, d, g; return __generator(this, function (c) {
                        switch (c.label) {
                            case 0: b =
                                this._planeInfo.get(a); if (void 0 === b || null === b.plane) return [3, 2]; d = this._cuttingSections[this._getCuttingSectionIndex(a)]; g = this._showReferenceGeometry ? b.referenceGeometry : null; return [4, d.addPlane(b.plane, g)]; case 1: c.sent(), c.label = 2; case 2: return [2]
                        }
                    })
                })
            }; c.prototype._restorePlane = function (a) {
                return __awaiter(this, void 0, void 0, function () {
                    var b; return __generator(this, function (d) {
                        switch (d.label) {
                            case 0: b = this._planeInfo.get(a); if (void 0 === b || null === b.plane || 0 === b.status) return [3, 2]; if (null === b.referenceGeometry ||
                                b.updateReferenceGeometry) b.referenceGeometry = this._generateReferenceGeometry(a); return [4, this._setSection(a)]; case 1: d.sent(), d.label = 2; case 2: return [2]
                        }
                    })
                })
            }; c.prototype._restorePlanes = function (a) { return __awaiter(this, void 0, void 0, function () { return __generator(this, function (b) { switch (b.label) { case 0: return [4, Promise.all([this._restorePlane(0), this._restorePlane(1), this._restorePlane(2), this._restorePlane(3)])]; case 1: return b.sent(), [4, this._activatePlanes(a)]; case 2: return b.sent(), [2] } }) }) };
            c.prototype._storePlane = function (a) { var b = this._cuttingSections[this._getCuttingSectionIndex(a)], d = this._ensurePlaneInfo(a); d.plane = null; d.referenceGeometry = null; if (0 < b.getCount() && 0 !== d.status) { var g = this._getPlaneIndex(a); a = b.getPlane(g); b = b.getReferenceGeometry(g); d.plane = a; d.referenceGeometry = b } }; c.prototype._storePlanes = function () { this._storePlane(0); this._storePlane(1); this._storePlane(2); this._storePlane(3) }; c.prototype._generateReferenceGeometry = function (a) {
                var b = this._viewer.cuttingManager,
                    d = []; if (3 === a) this._faceSelection && (a = this._faceSelection.getFaceEntity().getNormal(), d = this._faceSelection.getPosition(), d = b.createReferenceGeometryFromFaceNormal(a, d, this._modelBounding)); else { var g = void 0; switch (a) { case 0: g = e.Axis.X; break; case 1: g = e.Axis.Y; break; case 2: g = e.Axis.Z }void 0 !== g && (d = b.createReferenceGeometryFromAxis(g, this._modelBounding)) } return d
            }; c.prototype._generateCuttingPlane = function (a) {
                var b = new e.Plane; switch (a) {
                    case 0: b.normal.set(1, 0, 0); b.d = -this._modelBounding.max.x; break;
                    case 1: b.normal.set(0, 1, 0); b.d = -this._modelBounding.max.y; break; case 2: b.normal.set(0, 0, 1); b.d = -this._modelBounding.max.z; break; case 3: if (this._faceSelection) { this._faceSelection = this._faceSelection; a = this._faceSelection.getFaceEntity().getNormal(); var d = this._faceSelection.getPosition(); b.setFromPointAndNormal(d, a) } else return null
                }return b
            }; return c
        }(); f.CuttingPlaneController = h
    })(e.Ui || (e.Ui = {}))
})(Communicator || (Communicator = {}));
(function (e) {
    function f(h, c) { var a = h.model, b = h.sheetManager.getActiveSheetId(); if (null !== b) { var d = a.getNodeParent(b), g = a.getNodeChildren(d); e.Util.filterInPlace(c, function (d) { for (; null !== d && d !== b;) { if (-1 !== g.indexOf(d)) return !1; d = h.model.getNodeParent(d) } return !0 }) } } e._filterActiveSheetNodeIds = f; var m = function () {
        function h(c) {
            var a = this; this._camera = null; this._deselectOnZoom = this._deselectOnIsolate = !0; this._isolateStatus = !1; this._viewer = c; this._noteTextManager = this._viewer.noteTextManager; this._viewer.setCallbacks({
                modelSwitched: function () {
                    a._camera =
                        null
                }
            })
        } h.prototype._setCamera = function (c) { null === this._camera && (this._camera = c) }; h.prototype.setDeselectOnIsolate = function (c) { this._deselectOnIsolate = c }; h.prototype.getIsolateStatus = function () { return this._isolateStatus }; h.prototype.isolateNodes = function (c, a) {
            void 0 === a && (a = null); var b = this._viewer.view; this._setCamera(b.getCamera()); f(this._viewer, c); c = b.isolateNodes(c, e.DefaultTransitionDuration, !this._viewer.sheetManager.isDrawingSheetActive(), a); this._deselectOnIsolate && this._viewer.selectionManager.clear();
            this._isolateStatus = !0; return c
        }; h.prototype.fitNodes = function (c) { var a = this._viewer.view; this._setCamera(a.getCamera()); c = a.fitNodes(c); this._deselectOnZoom && this._viewer.selectionManager.clear(); return c }; h.prototype.showAll = function () {
            var c = this._viewer.model; if (this._viewer.sheetManager.isDrawingSheetActive()) { var a = this._viewer.sheetManager.getActiveSheetId(); return null !== a ? this.isolateNodes([a]) : Promise.resolve() } a = []; c.isDrawing() ? (c = this._viewer.sheetManager.get3DNodes(), a.push(this.isolateNodes(c))) :
                a.push(c.resetNodesVisibility()); null !== this._camera && (this._viewer.view.setCamera(this._camera, e.DefaultTransitionDuration), this._camera = null); this._isolateStatus = !1; a.push(this._updatePinVisibility()); return e.Util.waitForAll(a)
        }; h.prototype._updatePinVisibility = function () { this._noteTextManager.setIsolateActive(this._isolateStatus); return this._noteTextManager.updatePinVisibility() }; return h
    }(); e.IsolateZoomHelper = m
})(Communicator || (Communicator = {}));
(function (e) {
    var f = function () { return function (e, c, a, b) { this.progress = this.direction = 0; this.id = e; this.color1 = c.copy(); this.color2 = a.copy(); this.duration = b } }(), m = function () {
        function e(c) { this._pulseInfoMap = {}; this._defaultColor1 = Communicator.Color.red(); this._defaultColor2 = new Communicator.Color(175, 0, 0); this._defaultPulseTime = 1E3; this._viewer = c } e.prototype.start = function () { var c = this; setTimeout(function () { c.update() }, 30) }; e.prototype.deletePulse = function (c) {
            this._pulseInfoMap.hasOwnProperty(c.toString()) &&
                (this._viewer.model.unsetNodesFaceColor([c]), delete this._pulseInfoMap[c])
        }; e.prototype.add = function (c, a, b, d) { this.deletePulse(c); a = new f(c, a, b, d); this._pulseInfoMap[c] = a }; e.prototype.update = function () {
            null == this._previousTime && (this._previousTime = Date.now()); for (var c = Date.now(), a = c - this._previousTime, b = {}, d = !1, g = 0, l = Object.keys(this._pulseInfoMap); g < l.length; g++) {
                var k = this._pulseInfoMap[l[g]]; d = !0; k.progress = Math.min(k.progress + a, k.duration); var e = k.progress / k.duration; if (0 === k.direction) {
                    var f =
                        k.color1; var h = k.color2
                } else f = k.color2, h = k.color1; e = new Communicator.Color(f.r + (h.r - f.r) * e, f.g + (h.g - f.g) * e, f.b + (h.b - f.b) * e); b[k.id] = e; k.progress >= k.duration && (k.direction = 0 === k.direction ? 1 : 0, k.progress = 0)
            } d && (this._viewer.model.setNodesColors(b), this._viewer.redraw()); this._previousTime = c; this.start()
        }; e.prototype.getDefaultColor1 = function () { return this._defaultColor1.copy() }; e.prototype.getDefaultColor2 = function () { return this._defaultColor2.copy() }; e.prototype.getDefaultPulseTime = function () { return this._defaultPulseTime };
        return e
    }(); e.PulseManager = m
})(Example || (Example = {}));
(function (e) {
    (function (f) {
        var m = function (f) {
            function c(a, b, d, g) { a = f.call(this, "rightclick", a, b, d, g) || this; a._initEvents(); return a } __extends(c, f); c.prototype._initEvents = function () { var a = this; this._viewer.setCallbacks({ contextMenu: function (b, d) { return __awaiter(a, void 0, void 0, function () { return __generator(this, function (a) { switch (a.label) { case 0: return this._modifiers = d, [4, this.doContext(b)]; case 1: return a.sent(), [2] } }) }) } }) }; c.prototype.doContext = function (a) {
                return __awaiter(this, void 0, void 0,
                    function () {
                        var b, d, g; return __generator(this, function (c) {
                            switch (c.label) {
                                case 0: return b = new e.PickConfig(e.SelectionMask.All), [4, this._viewer.view.pickFromPoint(a, b)]; case 1: return d = c.sent(), d.isNodeSelection() && (g = this._viewer.model.getNodeType(d.getNodeId())), void 0 !== g && g !== e.NodeType.Pmi && g !== e.NodeType.PmiBody && 1 !== d.overlayIndex() ? [3, 3] : [4, this.setActiveItemId(null)]; case 2: return c.sent(), [3, 5]; case 3: return [4, this.setActiveItemId(d.getNodeId())]; case 4: c.sent(), c.label = 5; case 5: return this._position =
                                    d.getPosition(), this.showElements(a), [2]
                            }
                        })
                    })
            }; c.prototype._onContextLayerClick = function (a) { return __awaiter(this, void 0, void 0, function () { return __generator(this, function (b) { switch (b.label) { case 0: return 2 !== a.button ? [3, 2] : [4, this.doContext(new e.Point2(a.pageX, a.pageY))]; case 1: return b.sent(), [3, 3]; case 2: f.prototype._onContextLayerClick.call(this, a), b.label = 3; case 3: return [2] } }) }) }; return c
        }(f.Context.ContextMenu); f.RightClickContextMenu = m
    })(e.Ui || (e.Ui = {}))
})(Communicator || (Communicator = {}));
(function (e) {
    (function (f) {
        var m = function () {
            function f(c, a) { var b = this; this._bottomLeftOffset = new e.Point2(10, 10); this._opacity = .5; this._spinnerImageUrl = "stylesheets/images/spinner.gif"; this._spinnerSize = new e.Point2(31, 31); this._viewer = a; this._container = document.getElementById(c); this._initContainer(); this._viewer.setCallbacks({ streamingActivated: function () { b._onStreamingActivated() }, streamingDeactivated: function () { b._onStreamingDeactivated() }, _shutdownBegin: function () { b._onStreamingDeactivated() } }) } f.prototype.show =
                function () { this._container.style.display = "block" }; f.prototype.hide = function () { this._container.style.display = "none" }; f.prototype.setBottomLeftOffset = function (c) { this._bottomLeftOffset.assign(c); this._container.style.left = this._bottomLeftOffset.x + "px"; this._container.style.bottom = this._bottomLeftOffset.y + "px" }; f.prototype.getBottomLeftOffset = function () { return this._bottomLeftOffset.copy() }; f.prototype.setSpinnerImage = function (c, a) {
                    this._spinnerImageUrl = c; this._spinnerSize.assign(a); this._container.style.backgroundImage =
                        "url(" + this._spinnerImageUrl + ")"; this._container.style.width = this._spinnerSize.x + "px"; this._container.style.height = this._spinnerSize.y + '"px'
                }; f.prototype._initContainer = function () {
                    this._container.style.position = "absolute"; this._container.style.width = this._spinnerSize.x + "px"; this._container.style.height = this._spinnerSize.y + "px"; this._container.style.left = this._bottomLeftOffset.x + "px"; this._container.style.bottom = this._bottomLeftOffset.y + "px"; this._container.style.backgroundImage = "url(" + this._spinnerImageUrl +
                        ")"; this._container.style.opacity = "" + this._opacity
                }; f.prototype._onStreamingActivated = function () { this.show() }; f.prototype._onStreamingDeactivated = function () { this.hide() }; return f
        }(); f.StreamingIndicator = m
    })(e.Ui || (e.Ui = {}))
})(Communicator || (Communicator = {}));
(function (e) {
    (function (e) {
        var f = function () {
            function e(c) { this._containerId = c; this._textDiv = e._createTextDiv(); this._windowElement = e._createWindowElement(); this._headerDiv = e._createHeaderDiv(); this._initElements() } e._createWindowElement = function () { var c = document.createElement("div"); c.classList.add("ui-timeout-window"); c.classList.add("desktop-ui-window"); return c }; e._createHeaderDiv = function () { var c = document.createElement("div"); c.classList.add("desktop-ui-window-header"); return c }; e._createTextDiv =
                function () { return document.createElement("div") }; e.prototype._initElements = function () {
                    var c = this, a = document.createElement("div"); a.classList.add("desktop-ui-window-content"); a.appendChild(this._textDiv); var b = document.createElement("div"); b.classList.add("desktop-ui-window-divider"); a.appendChild(b); b = document.createElement("button"); b.innerHTML = "Ok"; $(b).button().on("click", function () { c._onOkButtonClick() }); a.appendChild(b); this._windowElement.appendChild(this._headerDiv); this._windowElement.appendChild(a);
                    a = document.getElementById(this._containerId); null !== a && a.appendChild(this._windowElement)
                }; e.prototype._onOkButtonClick = function () { this.hide() }; e.prototype.show = function () { $(this._windowElement).show() }; e.prototype.hide = function () { $(this._windowElement).hide() }; e.prototype.setText = function (c) { $(this._textDiv).empty(); this._textDiv.appendChild(document.createTextNode(c)) }; e.prototype.setTitle = function (c) { $(this._headerDiv).empty(); this._headerDiv.appendChild(document.createTextNode(c)) }; return e
        }();
        e.UiDialog = f
    })(e.Ui || (e.Ui = {}))
})(Communicator || (Communicator = {}));
(function (e) {
    (function (e) {
        var f = function (e) {
            function c(a, b) { var d = e.call(this, a) || this; d._viewer = b; d._viewer.setCallbacks({ timeoutWarning: function () { d._onTimeoutWarning() }, timeout: function () { d._onTimeout() } }); d.setTitle("Timeout Warning"); return d } __extends(c, e); c.prototype._onTimeoutWarning = function () { this.setText("Your session will expire soon. Press Ok to stay connected."); this.show() }; c.prototype._onOkButtonClick = function () { this._viewer.resetClientTimeout(); e.prototype._onOkButtonClick.call(this) };
            c.prototype._onTimeout = function () { this.setText("Your session has been disconnected due to inactivity."); this.show() }; return c
        }(e.UiDialog); e.TimeoutWarningDialog = f
    })(e.Ui || (e.Ui = {}))
})(Communicator || (Communicator = {}));
(function (e) {
    (function (f) {
        var m = function () {
            function h(c, a, b) {
                var d = this; void 0 === b && (b = e.ScreenConfiguration.Desktop); this._toolbarSelector = "#toolBar"; this._screenElementSelector = "#content"; this._cuttingPlaneXSelector = "#cuttingplane-x"; this._cuttingPlaneYSelector = "#cuttingplane-y"; this._cuttingPlaneZSelector = "#cuttingplane-z"; this._cuttingPlaneFaceSelector = "#cuttingplane-face"; this._cuttingPlaneVisibilitySelector = "#cuttingplane-section"; this._cuttingPlaneGroupToggle = "#cuttingplane-toggle"; this._cuttingPlaneResetSelector =
                    "#cuttingplane-reset"; this._selectedClass = "selected"; this._disabledClass = "disabled"; this._invertedClass = "inverted"; this._submenuHeightOffset = 10; this._viewOrientationDuration = 500; this._activeSubmenu = null; this._actionsNullary = new Map; this._actionsBoolean = new Map; this._isInitialized = !1; this._viewer = c; this._noteTextManager = this._viewer.noteTextManager; this._screenConfiguration = b; this._cuttingPlaneController = a; this._viewerSettings = new f.Desktop.ViewerSettings(c); this._viewer.setCallbacks({
                        selectionArray: function (b) {
                            0 <
                                b.length ? (b = b[b.length - 1].getSelection(), null !== b && b.isFaceSelection() && ($(d._cuttingPlaneFaceSelector).removeClass(d._disabledClass), $("#view-face").removeClass(d._disabledClass))) : ($(d._cuttingPlaneFaceSelector).addClass(d._disabledClass), $("#view-face").addClass(d._disabledClass))
                        }, cuttingSectionsLoaded: function () { return d._cuttingPlaneController.onSectionsChanged().then(function () { d._updateCuttingPlaneIcons() }) }
                    })
            } h.prototype.init = function () {
                var c = this; this._isInitialized || (this._initIcons(),
                    this._removeNonApplicableIcons(), $(".hoops-tool").on("click", function (a) { a.preventDefault(); c._processButtonClick(a); return !1 }), $(".submenu-icon").on("click", function (a) { a.preventDefault(); c._submenuIconClick(a.target); return !1 }), $(this._toolbarSelector).on("touchmove", function (a) { a.originalEvent && a.originalEvent.preventDefault() }), $(this._toolbarSelector).on("mouseenter", function () { c._mouseEnter() }), $(this._toolbarSelector).on("mouseleave", function () { c._mouseLeave() }), $(".tool-icon, .submenu-icon").on("mouseenter",
                        function (a) { c._mouseEnterItem(a) }), $(".tool-icon, .submenu-icon").on("mouseleave", function (a) { c._mouseLeaveItem(a) }), $(window).on("resize", function () { c.reposition() }), $(this._toolbarSelector).on("click", function () { null !== c._activeSubmenu && c._hideActiveSubmenu() }), $(".toolbar-cp-plane").on("click", function (a) { return __awaiter(c, void 0, void 0, function () { return __generator(this, function (b) { switch (b.label) { case 0: return [4, this._cuttingPlaneButtonClick(a)]; case 1: return b.sent(), [2] } }) }) }), this._viewer.setCallbacks({ modelSwitched: function () { c._hideActiveSubmenu() } }),
                    this._initSliders(), this._initActions(), this._initSnapshot(), this.updateEdgeFaceButton(), this.reposition(), this.show(), this._isInitialized = !0)
            }; h.prototype._getViewerSettings = function () { return this._viewerSettings }; h.prototype.disableSubmenuItem = function (c) { var a = this; "string" === typeof c ? $("#submenus .toolbar-" + c).addClass(this._disabledClass) : "object" === typeof c && $.each(c, function (b, d) { $("#submenus .toolbar-" + d).addClass(a._disabledClass) }) }; h.prototype.enableSubmenuItem = function (c) {
                var a = this; "string" ===
                    typeof c ? $("#submenus .toolbar-" + c).removeClass(this._disabledClass) : "object" === typeof c && $.each(c, function (b, d) { $("#submenus .toolbar-" + d).removeClass(a._disabledClass) })
            }; h.prototype.setCorrespondingButtonForSubmenuItem = function (c) { c = $("#submenus .toolbar-" + c); this._activateSubmenuItem(c) }; h.prototype._mouseEnterItem = function (c) { c = $(c.target); c.hasClass(this._disabledClass) || c.addClass("hover") }; h.prototype._mouseLeaveItem = function (c) { $(c.target).removeClass("hover") }; h.prototype.show = function () { $(this._toolbarSelector).show() };
            h.prototype.hide = function () { $(this._toolbarSelector).hide() }; h.prototype._initSliders = function () { var c = this; $("#explosion-slider").slider({ orientation: "vertical", min: 0, max: 200, value: 0, slide: function (a, b) { return __awaiter(c, void 0, void 0, function () { return __generator(this, function (d) { switch (d.label) { case 0: return [4, this._onExplosionSlider((b.value || 0) / 100)]; case 1: return d.sent(), [2] } }) }) } }) }; h.prototype._mouseEnter = function () {
                if (null === this._activeSubmenu) {
                    var c = $(this._toolbarSelector).find(".toolbar-tools");
                    c.stop(); c.css({ opacity: 1 })
                }
            }; h.prototype._mouseLeave = function () { null === this._activeSubmenu && $(".toolbar-tools").animate({ opacity: .6 }, 500, function () { }) }; h.prototype.reposition = function () { var c = $(this._toolbarSelector), a = $(this._screenElementSelector); if (void 0 !== c && void 0 !== a) { a = a.width(); var b = c.width(); void 0 !== b && void 0 !== a && c.css({ left: a / 2 - b / 2 + "px", bottom: "15px" }) } }; h.prototype._processButtonClick = function (c) {
                if (null !== this._activeSubmenu) this._hideActiveSubmenu(); else if (null !== c) {
                    c = c.target;
                    var a = $(c).closest(".hoops-tool"); a.hasClass("toolbar-radio") ? a.hasClass("active-tool") ? this._showSubmenu(c) : ($(this._toolbarSelector).find(".active-tool").removeClass("active-tool"), a.addClass("active-tool"), this._performNullaryAction(a.data("operatorclass"))) : a.hasClass("toolbar-menu") ? this._showSubmenu(c) : a.hasClass("toolbar-menu-toggle") ? this._toggleMenuTool(a) : this._performNullaryAction(a.data("operatorclass"))
                }
            }; h.prototype._toggleMenuTool = function (c) {
                var a = $("#" + c.data("submenu")); a.is(":visible") ?
                    (a.hide(), this._performBooleanAction(c.data("operatorclass"), !1)) : (this._alignMenuToTool(a, c), this._performBooleanAction(c.data("operatorclass"), !0))
            }; h.prototype._startModal = function () { var c = this; $("body").append("<div id='toolbar-modal' class='toolbar-modal-overlay'></div>"); $("#toolbar-modal").on("click", function () { c._hideActiveSubmenu() }) }; h.prototype._alignMenuToTool = function (c, a) {
                a = a.position().left; this._screenConfiguration === e.ScreenConfiguration.Mobile && (a /= 1.74); var b = c.width(), d = c.height();
                void 0 !== b && void 0 !== d && c.css({ display: "block", left: a - b / 2 + 20 + "px", top: -(this._submenuHeightOffset + d) + "px" })
            }; h.prototype._showSubmenu = function (c) { this._hideActiveSubmenu(); c = $(c).closest(".hoops-tool"); var a = c.data("submenu"); a && (a = $(this._toolbarSelector + " #submenus #" + a), a.hasClass(this._disabledClass) || (this._alignMenuToTool(a, c), this._activeSubmenu = a[0], this._startModal(), $(this._toolbarSelector).find(".toolbar-tools").css({ opacity: .3 }))) }; h.prototype._hideActiveSubmenu = function () {
                $("#toolbar-modal").remove();
                null !== this._activeSubmenu && ($(this._activeSubmenu).hide(), $(this._toolbarSelector).find(".toolbar-tools").css({ opacity: 1 })); this._activeSubmenu = null
            }; h.prototype._activateSubmenuItem = function (c) {
                var a = c.closest(".toolbar-submenu"), b = c.data("operatorclass"); if ("string" !== typeof b) throw new e.CommunicatorError("Invalid submenuItem."); a = $("#" + a.data("button")); var d = a.find(".tool-icon"); d.length && (d.removeClass(a.data("operatorclass").toString()), d.addClass(b), a.data("operatorclass", b), c = c.attr("title"),
                    void 0 !== c && a.attr("title", c)); return b
            }; h.prototype._submenuIconClick = function (c) { c = $(c); c.hasClass(this._disabledClass) || (c = this._activateSubmenuItem(c), this._hideActiveSubmenu(), this._performNullaryAction(c)) }; h.prototype._initIcons = function () { $(this._toolbarSelector).find(".hoops-tool").each(function () { var c = $(this); c.find(".tool-icon").addClass(c.data("operatorclass").toString()) }); $(this._toolbarSelector).find(".submenu-icon").each(function () { var c = $(this); c.addClass(c.data("operatorclass").toString()) }) };
            h.prototype._removeNonApplicableIcons = function () { this._screenConfiguration === e.ScreenConfiguration.Mobile && $("#snapshot-button").remove() }; h.prototype.setSubmenuEnabled = function (c, a) { c = $("#" + c); var b = $("#" + c.data("submenu")); a ? (c.find(".smarrow").show(), b.removeClass(this._disabledClass)) : (c.find(".smarrow").hide(), b.addClass(this._disabledClass)) }; h.prototype._performNullaryAction = function (c) { (c = this._actionsNullary.get(c)) && c() }; h.prototype._performBooleanAction = function (c, a) {
                (c = this._actionsBoolean.get(c)) &&
                    c(a)
            }; h.prototype._renderModeClick = function (c) { var a = this._viewer.view; switch (c) { case "toolbar-shaded": a.setDrawMode(e.DrawMode.Shaded); break; case "toolbar-wireframe": a.setDrawMode(e.DrawMode.Wireframe); break; case "toolbar-hidden-line": a.setDrawMode(e.DrawMode.HiddenLine); break; case "toolbar-xray": a.setDrawMode(e.DrawMode.XRay); break; default: case "toolbar-wireframeshaded": a.setDrawMode(e.DrawMode.WireframeOnShaded) } }; h.prototype._initSnapshot = function () {
                $("#snapshot-dialog-cancel-button").button().on("click",
                    function () { $("#snapshot-dialog").hide() })
            }; h.prototype._doSnapshot = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var c, a, b, d, g, l, k, f, h, m, p, n; return __generator(this, function (u) {
                        switch (u.label) {
                            case 0: c = this._viewer.view.getCanvasSize(); a = c.x / c.y; b = 480; d = a * b; g = $("#content"); l = g.width(); k = g.height(); if (void 0 === k || void 0 === l) return [3, 2]; b = .7 * k; d = .7 * l; f = d + 40; h = new e.SnapshotConfig(c.x, c.y); return [4, this._viewer.takeSnapshot(h)]; case 1: m = u.sent(), p = (l - d) / 2, n = $("#snapshot-dialog"), $("#snapshot-dialog-image").attr("src",
                                m.src).attr("width", f).attr("height", b + 40), n.css({ top: "45px", left: p + "px" }), n.show(), u.label = 2; case 2: return [2]
                        }
                    })
                })
            }; h.prototype._setRedlineOperator = function (c) { this._viewer.operatorManager.set(c, 1) }; h.prototype._initActions = function () {
                var c = this, a = this._viewer.view, b = this._viewer.operatorManager; this._actionsNullary.set("toolbar-home", function () {
                    c._viewer.reset(); if (!c._viewer.sheetManager.isDrawingSheetActive()) {
                        c._noteTextManager.setIsolateActive(!1); c._noteTextManager.updatePinVisibility(); var d =
                            b.getOperator(e.OperatorId.Handle); null !== d && d.removeHandles && d.removeHandles()
                    }
                }); this._actionsNullary.set("toolbar-redline-circle", function () { c._setRedlineOperator(e.OperatorId.RedlineCircle) }); this._actionsNullary.set("toolbar-redline-freehand", function () { c._setRedlineOperator(e.OperatorId.RedlinePolyline) }); this._actionsNullary.set("toolbar-redline-rectangle", function () { c._setRedlineOperator(e.OperatorId.RedlineRectangle) }); this._actionsNullary.set("toolbar-redline-note", function () { c._setRedlineOperator(e.OperatorId.RedlineText) });
                this._actionsNullary.set("toolbar-note", function () { b.set(e.OperatorId.Note, 1) }); this._actionsNullary.set("toolbar-select", function () { b.set(e.OperatorId.Select, 1) }); this._actionsNullary.set("toolbar-area-select", function () { b.set(e.OperatorId.AreaSelect, 1) }); this._actionsNullary.set("toolbar-orbit", function () { b.set(e.OperatorId.Navigate, 0) }); this._actionsNullary.set("toolbar-turntable", function () { b.set(e.OperatorId.Turntable, 0) }); this._actionsNullary.set("toolbar-walk", function () {
                    b.set(e.OperatorId.WalkMode,
                        0)
                }); this._actionsNullary.set("toolbar-face", function () { return __awaiter(c, void 0, void 0, function () { return __generator(this, function (d) { switch (d.label) { case 0: return [4, this._orientToFace()]; case 1: return d.sent(), [2] } }) }) }); this._actionsNullary.set("toolbar-measure-point", function () { b.set(e.OperatorId.MeasurePointPointDistance, 1) }); this._actionsNullary.set("toolbar-measure-edge", function () { b.set(e.OperatorId.MeasureEdgeLength, 1) }); this._actionsNullary.set("toolbar-measure-distance", function () {
                    b.set(e.OperatorId.MeasureFaceFaceDistance,
                        1)
                }); this._actionsNullary.set("toolbar-measure-angle", function () { b.set(e.OperatorId.MeasureFaceFaceAngle, 1) }); this._actionsNullary.set("toolbar-cuttingplane", function () { }); this._actionsBoolean.set("toolbar-explode", function (d) { return __awaiter(c, void 0, void 0, function () { return __generator(this, function (b) { switch (b.label) { case 0: return [4, this._explosionButtonClick(d)]; case 1: return b.sent(), [2] } }) }) }); this._actionsNullary.set("toolbar-settings", function () {
                    return __awaiter(c, void 0, void 0, function () {
                        return __generator(this,
                            function (d) { switch (d.label) { case 0: return [4, this._settingsButtonClick()]; case 1: return d.sent(), [2] } })
                    })
                }); this._actionsNullary.set("toolbar-wireframeshaded", function () { c._renderModeClick("toolbar-wireframeshaded") }); this._actionsNullary.set("toolbar-shaded", function () { c._renderModeClick("toolbar-shaded") }); this._actionsNullary.set("toolbar-wireframe", function () { c._renderModeClick("toolbar-wireframe") }); this._actionsNullary.set("toolbar-hidden-line", function () { c._renderModeClick("toolbar-hidden-line") });
                this._actionsNullary.set("toolbar-xray", function () { c._renderModeClick("toolbar-xray") }); this._actionsNullary.set("toolbar-front", function () { return __awaiter(c, void 0, void 0, function () { return __generator(this, function (d) { switch (d.label) { case 0: return [4, a.setViewOrientation(e.ViewOrientation.Front, this._viewOrientationDuration)]; case 1: return d.sent(), [2] } }) }) }); this._actionsNullary.set("toolbar-back", function () {
                    return __awaiter(c, void 0, void 0, function () {
                        return __generator(this, function (d) {
                            switch (d.label) {
                                case 0: return [4,
                                    a.setViewOrientation(e.ViewOrientation.Back, this._viewOrientationDuration)]; case 1: return d.sent(), [2]
                            }
                        })
                    })
                }); this._actionsNullary.set("toolbar-left", function () { return __awaiter(c, void 0, void 0, function () { return __generator(this, function (d) { switch (d.label) { case 0: return [4, a.setViewOrientation(e.ViewOrientation.Left, this._viewOrientationDuration)]; case 1: return d.sent(), [2] } }) }) }); this._actionsNullary.set("toolbar-right", function () {
                    return __awaiter(c, void 0, void 0, function () {
                        return __generator(this,
                            function (d) { switch (d.label) { case 0: return [4, a.setViewOrientation(e.ViewOrientation.Right, this._viewOrientationDuration)]; case 1: return d.sent(), [2] } })
                    })
                }); this._actionsNullary.set("toolbar-bottom", function () { return __awaiter(c, void 0, void 0, function () { return __generator(this, function (d) { switch (d.label) { case 0: return [4, a.setViewOrientation(e.ViewOrientation.Bottom, this._viewOrientationDuration)]; case 1: return d.sent(), [2] } }) }) }); this._actionsNullary.set("toolbar-top", function () {
                    return __awaiter(c,
                        void 0, void 0, function () { return __generator(this, function (d) { switch (d.label) { case 0: return [4, a.setViewOrientation(e.ViewOrientation.Top, this._viewOrientationDuration)]; case 1: return d.sent(), [2] } }) })
                }); this._actionsNullary.set("toolbar-iso", function () { return __awaiter(c, void 0, void 0, function () { return __generator(this, function (d) { switch (d.label) { case 0: return [4, a.setViewOrientation(e.ViewOrientation.Iso, this._viewOrientationDuration)]; case 1: return d.sent(), [2] } }) }) }); this._actionsNullary.set("toolbar-ortho",
                    function () { a.setProjectionMode(e.Projection.Orthographic) }); this._actionsNullary.set("toolbar-persp", function () { a.setProjectionMode(e.Projection.Perspective) }); this._actionsNullary.set("toolbar-snapshot", function () { return __awaiter(c, void 0, void 0, function () { return __generator(this, function (d) { switch (d.label) { case 0: return [4, this._doSnapshot()]; case 1: return d.sent(), [2] } }) }) })
            }; h.prototype._onExplosionSlider = function (c) { return this._viewer.explodeManager.setMagnitude(c) }; h.prototype._explosionButtonClick =
                function (c) { var a = this._viewer.explodeManager; return c && !a.getActive() ? a.start() : Promise.resolve() }; h.prototype._settingsButtonClick = function () { return this._viewerSettings.show() }; h.prototype.updateEdgeFaceButton = function () { var c = this._viewer.view, a = c.getLineVisibility(); c = c.getFaceVisibility(); a && c ? this.setCorrespondingButtonForSubmenuItem("wireframeshaded") : !a && c ? this.setCorrespondingButtonForSubmenuItem("shaded") : this.setCorrespondingButtonForSubmenuItem("wireframe") }; h.prototype._cuttingPlaneButtonClick =
                    function (c) { var a = this; c = $(c.target).closest(".toolbar-cp-plane").data("plane"); var b = this._getAxis(c); return (null !== b ? this._cuttingPlaneController.toggle(b) : "section" === c ? this._cuttingPlaneController.toggleReferenceGeometry() : "toggle" === c ? this._cuttingPlaneController.toggleCuttingMode() : "reset" === c ? this._cuttingPlaneController.resetCuttingPlanes() : Promise.resolve()).then(function () { a._updateCuttingPlaneIcons() }) }; h.prototype._getAxis = function (c) {
                        switch (c) {
                            case "x": return 0; case "y": return 1; case "z": return 2;
                            case "face": return 3; default: return null
                        }
                    }; h.prototype._updateCuttingPlaneIcons = function () {
                        var c = this._cuttingPlaneController.getReferenceGeometryEnabled(), a = this._cuttingPlaneController.getIndividualCuttingSectionEnabled(), b = this._cuttingPlaneController.getCount(); this._updateCuttingPlaneIcon(0, this._cuttingPlaneXSelector); this._updateCuttingPlaneIcon(1, this._cuttingPlaneYSelector); this._updateCuttingPlaneIcon(2, this._cuttingPlaneZSelector); this._updateCuttingPlaneIcon(3, this._cuttingPlaneFaceSelector);
                        c ? $(this._cuttingPlaneVisibilitySelector).removeClass(this._selectedClass) : $(this._cuttingPlaneVisibilitySelector).addClass(this._selectedClass); a ? $(this._cuttingPlaneGroupToggle).removeClass(this._selectedClass) : $(this._cuttingPlaneGroupToggle).addClass(this._selectedClass); 0 < b ? ($(this._cuttingPlaneVisibilitySelector).removeClass(this._disabledClass), $(this._cuttingPlaneResetSelector).removeClass(this._disabledClass)) : ($(this._cuttingPlaneVisibilitySelector).addClass(this._disabledClass), $(this._cuttingPlaneResetSelector).addClass(this._disabledClass));
                        1 < b ? $(this._cuttingPlaneGroupToggle).removeClass(this._disabledClass) : $(this._cuttingPlaneGroupToggle).addClass(this._disabledClass)
                    }; h.prototype._updateCuttingPlaneIcon = function (c, a) { a = $(a); a.removeClass(this._selectedClass); a.removeClass(this._invertedClass); c = this._cuttingPlaneController.getPlaneInfo(c); void 0 !== c && (1 === c.status ? a.addClass(this._selectedClass) : 2 === c.status && a.addClass(this._invertedClass)) }; h.prototype._orientToFace = function () {
                        var c = this._viewer.selectionManager.getLast(); if (null !==
                            c && c.isFaceSelection()) { var a = this._viewer.view, b = c.getFaceEntity().getNormal(), d = c.getPosition(), g = a.getCamera(), l = e.Point3.cross(b, new e.Point3(0, 1, 0)); .001 > l.length() && (l = e.Point3.cross(b, new e.Point3(1, 0, 0))); var k = g.getPosition().subtract(g.getTarget()).length(); g.setTarget(d); g.setPosition(e.Point3.add(d, e.Point3.scale(b, k))); g.setUp(l); return a.fitBounding(c.getFaceEntity().getBounding(), e.DefaultTransitionDuration, g) } return Promise.resolve()
                    }; return h
        }(); f.Toolbar = m
    })(e.Ui || (e.Ui = {}))
})(Communicator ||
    (Communicator = {}));
(function (e) {
    (function (f) {
        var m = function () {
            function h(c, a) {
                this._colorPickerId = "colorPicker"; this._colorPickerHeaderId = "colorPickerHeader"; this._colorPickerFooterId = "colorPickerFooter"; this._colorPickerOkId = "colorPickerOk"; this._colorPickerCancelId = "colorPickerCancel"; this._colorPickerApplyId = "colorPickerApply"; this._colorPickerInputId = "colorPickerInput"; this._colorPickerActiveColorId = "colorPickerActiveColor"; this._colorPickerActiveColorLabelId = "colorPickerActiveColorLabel"; this._colorPickerActiveColorSwatchId = "colorPickerActiveColorSwatch";
                this._color = e.Color.black(); this._viewer = c; this._colorPicker = this._createColorPickerWindow(a); this._initElements()
            } h.prototype._createColorPickerWindow = function (c) {
                var a = document.createElement("div"); a.id = this._colorPickerId; a.classList.add("desktop-ui-window"); var b = document.createElement("div"); b.id = this._colorPickerHeaderId; b.classList.add("desktop-ui-window-header"); b.innerHTML = "Color Picker"; var d = document.createElement("div"); d.classList.add("desktop-ui-window-content"); var g = document.createElement("div");
                g.id = this._colorPickerActiveColorId; d.appendChild(g); var l = document.createElement("span"); l.id = this._colorPickerActiveColorLabelId; l.innerHTML = "Active Color:"; g.appendChild(l); l = document.createElement("span"); l.id = this._colorPickerActiveColorSwatchId; l.style.backgroundColor = f.cssHexStringFromColor(this._color); g.appendChild(l); g = document.createElement("input"); g.id = this._colorPickerInputId; g.type = "text"; g.classList.add("color-picker"); d.appendChild(g); l = document.createElement("div"); l.id = this._colorPickerFooterId;
                l.classList.add("desktop-ui-window-footer"); var k = document.createElement("button"); k.id = this._colorPickerOkId; k.innerHTML = "Ok"; l.appendChild(k); k = document.createElement("button"); k.id = this._colorPickerCancelId; k.innerHTML = "Cancel"; l.appendChild(k); k = document.createElement("button"); k.id = this._colorPickerApplyId; k.innerHTML = "Apply"; l.appendChild(k); a.appendChild(b); a.appendChild(d); a.appendChild(l); $("#" + c).append(a); $(g).minicolors({
                    position: "bottom left", format: "rgb", control: "hue", defaultValue: f.rgbStringFromColor(this._color),
                    inline: !0
                }); return $(a)
            }; h.prototype._initElements = function () { var c = this; this._colorPicker.draggable({ handle: "#" + this._colorPickerHeaderId }); $("#" + this._colorPickerOkId).on("click", function () { c._updateColor(); c.hide() }); $("#" + this._colorPickerCancelId).on("click", function () { c.hide() }); $("#" + this._colorPickerApplyId).on("click", function () { c._updateColor() }) }; h.prototype._updateColor = function () {
                this._color.assign(f.colorFromRgbString(f.getValueAsString("#" + this._colorPickerInputId))); $("#" + this._colorPickerActiveColorSwatchId).css("background",
                    f.cssHexStringFromColor(this._color))
            }; h.prototype.show = function () { f.centerWindow(this._colorPickerId, this._viewer.view.getCanvasSize()); this._colorPicker.show() }; h.prototype.hide = function () { this._colorPicker.hide() }; h.prototype.getColor = function () { return this._color.copy() }; return h
        }(); f.ColorPicker = m
    })(e.Ui || (e.Ui = {}))
})(Communicator || (Communicator = {}));
(function (e) {
    (function (f) {
        (function (m) {
            var h; (function (a) { a[a.Model = 0] = "Model"; a[a.CadView = 1] = "CadView"; a[a.Sheets = 2] = "Sheets"; a[a.Configurations = 3] = "Configurations"; a[a.Layers = 4] = "Layers"; a[a.Filters = 5] = "Filters"; a[a.Types = 6] = "Types"; a[a.BCF = 7] = "BCF"; a[a.Relationships = 8] = "Relationships" })(h = m.Tree || (m.Tree = {})); var c = function () {
                function a(b, d, a, c, k) {
                    var g = this; this._treeMap = new Map; this._scrollTreeMap = new Map; this._elementIdMap = new Map; this._browserWindowMargin = 3; this._scrollRefreshTimer = new e.Util.Timer;
                    this._scrollRefreshTimestamp = 0; this._scrollRefreshInterval = 300; this._minimized = !0; this._modelHasRelationships = !1; this._elementId = b; this._containerId = d; this._viewer = a; this._isolateZoomHelper = c; this._colorPicker = k; this._canvasSize = this._viewer.view.getCanvasSize(); this._header = this._createHeader(); this._browserWindow = this._createBrowserWindow(); this._createPropertyWindow(); $(this._browserWindow).resizable({ resize: function (d, b) { g.onResize(b.size.height) }, minWidth: 35, minHeight: 37, handles: "e" }); this._elementIdMap.set(h.Model,
                        "modelTree"); this._elementIdMap.set(h.CadView, "cadViewTree"); this._elementIdMap.set(h.Sheets, "sheetsTree"); this._elementIdMap.set(h.Configurations, "configurationsTree"); this._elementIdMap.set(h.Layers, "layersTree"); this._elementIdMap.set(h.Filters, "filtersTree"); this._elementIdMap.set(h.Types, "typesTree"); this._elementIdMap.set(h.BCF, "bcfTree"); this._elementIdMap.forEach(function (d, b) { g._addTree(d, b) }); this._contextMenu = new m.ModelBrowserContextMenu(this._containerId, this._viewer, this._treeMap, this._isolateZoomHelper,
                            this._colorPicker); this._initEvents(); this._minimizeModelBrowser()
                } a.prototype._computeRelationshipTreeVisibility = function (b) { for (var d = 0; d < b.length; d++) { var a = b[d]; a = this._viewer.model._getModelStructure().hasRelationships(a); if (!this._modelHasRelationships && a) { this._modelHasRelationships = !0; this._updateRelationshipsTreeVisibility(); break } } }; a.prototype._initEvents = function () {
                    var b = this, d = function (d) { b._showTree(h.Model); b._computeRelationshipTreeVisibility(d) }; this._viewer.setCallbacks({
                        modelStructureLoadBegin: function () { b._onModelStructureLoadBegin() },
                        modelStructureParseBegin: function () { b._onModelStructureParsingBegin() }, assemblyTreeReady: function () { b._onAssemblyTreeReady() }, firstModelLoaded: d, modelSwitched: function (b, a) { d(a) }, frameDrawn: function () { b._canvasSize = b._viewer.view.getCanvasSize(); b.onResize(b._canvasSize.y) }, subtreeLoaded: function (d) { b._computeRelationshipTreeVisibility(d) }
                    }); this._registerScrollRefreshCallbacks(); $("#contextMenuButton").on("click", function (d) { d = new e.Point2(d.clientX, d.clientY); b._viewer.trigger("contextMenu", d, e.KeyModifiers.None) })
                };
                a.prototype._registerScrollRefreshCallbacks = function () {
                    var b = this; this._treeMap.forEach(function (d) { d instanceof f.ViewTree && (d.registerCallback("expand", function () { b._refreshBrowserScroll() }), d.registerCallback("collapse", function () { b._refreshBrowserScroll() }), d.registerCallback("addChild", function () { b._refreshBrowserScroll() })) }); this._relationshipTree.registerCallback("expand", function () { b._refreshBrowserScroll() }); this._relationshipTree.registerCallback("collapse", function () { b._refreshBrowserScroll() });
                    this._relationshipTree.registerCallback("addChild", function () { b._refreshBrowserScroll() })
                }; a.prototype._refreshBrowserScroll = function () { var b = this, d = ++this._scrollRefreshTimestamp; this._scrollRefreshTimer.isIdle(0) && this._scrollRefreshTimer.set(this._scrollRefreshInterval, function () { b._scrollTreeMap.forEach(function (d) { d.refresh() }); d !== b._scrollRefreshTimestamp && b._refreshBrowserScroll() }) }; a.prototype._setPropertyWindowVisibility = function (b) {
                    b ? this._propertyWindow.classList.remove("hidden") : this._propertyWindow.classList.add("hidden");
                    this.onResize(this._viewer.view.getCanvasSize().y)
                }; a.prototype._updateRelationshipsTreeVisibility = function () { this._setRelationshipsWindowVisibility(this._modelHasRelationships) }; a.prototype._setRelationshipsWindowVisibility = function (b) { b ? this._relationshipsWindow.classList.remove("hidden") : this._relationshipsWindow.classList.add("hidden"); this.onResize(this._viewer.view.getCanvasSize().y) }; a.prototype._setTreeVisibility = function (b, d) {
                    var a = b.getElementId(), c = $("#" + a + "ScrollContainer"); a = $("#" + a +
                        "Tab"); d ? (c.show(), a.addClass("browser-tab-selected"), b instanceof f.BCFTree ? (this._setPropertyWindowVisibility(!1), this._setRelationshipsWindowVisibility(!1)) : (this._setPropertyWindowVisibility(!0), this._updateRelationshipsTreeVisibility())) : (c.hide(), a && a.removeClass("browser-tab-selected"))
                }; a.prototype._showTree = function (b) { var d = this; this._treeMap.forEach(function (a, c) { d._setTreeVisibility(a, c === b) }); this._refreshBrowserScroll() }; a.prototype._getContextMenu = function () { return this._contextMenu };
                a.prototype._addTree = function (b, d) {
                    var a = this._initializeIScroll(b); this._scrollTreeMap.set(d, a); var c; d === h.Model ? c = new f.ModelTree(this._viewer, b, a) : d === h.CadView ? c = new f.CadViewTree(this._viewer, b, a) : d === h.Sheets ? c = new f.SheetsTree(this._viewer, b, a) : d === h.Configurations ? c = new f.ConfigurationsTree(this._viewer, b, a) : d === h.Layers ? c = new f.LayersTree(this._viewer, b, a) : d === h.Filters ? c = new f.FiltersTree(this._viewer, b, a) : d === h.Types ? c = new f.TypesTree(this._viewer, b, a) : d === h.BCF ? c = new f.BCFTree(this._viewer,
                        b, a) : d === h.Relationships ? c = new f.RelationshipsTree(this._viewer, b, a) : e.Util.TypeAssertNever(d); this._treeMap.set(d, c)
                }; a.prototype._createBrowserWindow = function () {
                    var b = document.getElementById(this._elementId); $(b).on("touchmove", function (d) { d.originalEvent && d.originalEvent.preventDefault() }); b.classList.add("ui-modelbrowser-window"); b.classList.add("desktop-ui-window"); b.classList.add("ui-modelbrowser-small"); b.style.position = "absolute"; var d = $(window).width(); void 0 !== d && (b.style.width = Math.max(d /
                        4, 400) + "px"); b.style.top = this._browserWindowMargin + "px"; b.style.left = this._browserWindowMargin + "px"; b.appendChild(this._header); return b
                }; a.prototype._createDiv = function (b, d) { var a = document.createElement("div"); a.id = b; for (b = 0; b < d.length; b++)a.classList.add(d[b]); return a }; a.prototype._createHeader = function () {
                    var b = this, d = this._createDiv("ui-modelbrowser-header", ["ui-modelbrowser-header", "desktop-ui-window-header"]), a = document.createElement("table"), c = document.createElement("tr"); a.appendChild(c);
                    var k = document.createElement("td"); k.classList.add("ui-modelbrowser-minimizetd"); this._minimizeButton = this._createDiv("ui-modelbrowser-minimizebutton", ["ui-modelbrowser-minimizebutton", "minimized"]); this._minimizeButton.onclick = function () { b._onMinimizeButtonClick() }; k.appendChild(this._minimizeButton); c.appendChild(k); k = document.createElement("td"); k.id = "modelBrowserLabel"; k.innerHTML = ""; c.appendChild(k); k = this._createDiv("contextMenuButton", ["ui-modeltree-icon", "menu"]); c.appendChild(k); d.appendChild(a);
                    this._content = this._createDiv("modelTreeContainer", ["ui-modelbrowser-content", "desktop-ui-window-content"]); this._content.style.overflow = "auto"; a = this._createDiv("modelBrowserLoadingDiv", []); a.innerHTML = "Loading..."; this._content.appendChild(a); this._createIScrollWrapper(this._content, "modelTree"); this._createIScrollWrapper(this._content, "cadViewTree"); this._createIScrollWrapper(this._content, "sheetsTree"); this._createIScrollWrapper(this._content, "configurationsTree"); this._createIScrollWrapper(this._content,
                        "layersTree"); this._createIScrollWrapper(this._content, "filtersTree"); this._createIScrollWrapper(this._content, "typesTree"); this._createIScrollWrapper(this._content, "bcfTree"); this._modelBrowserTabs = this._createDiv("modelBrowserTabs", []); this._createBrowserTab("modelTreeTab", "Model Tree", !0, h.Model); this._createBrowserTab("cadViewTreeTab", "Views", !1, h.CadView); this._createBrowserTab("sheetsTreeTab", "Sheets", !1, h.Sheets); this._createBrowserTab("configurationsTreeTab", "Configurations", !1, h.Configurations);
                    this._createBrowserTab("layersTreeTab", "Layers", !1, h.Layers); this._createBrowserTab("relationTreeTab", "Relations", !1, h.Relationships); this._createBrowserTab("filtersTreeTab", "Filters", !1, h.Filters); this._createBrowserTab("typesTreeTab", "Types", !1, h.Types); this._createBrowserTab("bcfTreeTab", "BCF", !1, h.BCF); d.appendChild(this._modelBrowserTabs); return d
                }; a.prototype._createIScrollWrapper = function (b, d) {
                    var a = this._createDiv(d + "ScrollContainer", []); a.classList.add("tree-scroll-container"); a.appendChild(this._createDiv(d,
                        [])); b.appendChild(a)
                }; a.prototype._createBrowserTab = function (b, d, a, c) { var g = this, l = document.createElement("label"); l.id = b; l.textContent = d; l.classList.add("ui-modelbrowser-tab"); l.classList.add("hidden"); a && l.classList.add("browser-tab-selected"); l.onclick = function (d) { g._showTree(c) }; this._modelBrowserTabs.appendChild(l); return l }; a.prototype._initializeIScroll = function (b) { b = $("#" + b + "ScrollContainer").get(0); return new IScroll(b, { mouseWheel: !0, scrollbars: !0, interactiveScrollbars: !0, preventDefault: !1 }) };
                a.prototype._createRelationshipTree = function (b) { this._createIScrollWrapper(b, "relationshipsTree"); b = this._initializeIScroll("relationshipsTree"); this._scrollTreeMap.set(h.Relationships, b); b = new f.RelationshipsTree(this._viewer, "relationshipsTree", b); this._setTreeVisibility(b, !0); return b }; a.prototype._createPropertyWindow = function () {
                    var b = this; this._propertyWindow = document.createElement("div"); this._propertyWindow.classList.add("propertyWindow"); this._propertyWindow.id = "propertyWindow"; var d = document.createElement("div");
                    d.id = "propertyContainer"; this._propertyWindow.appendChild(d); this._treePropertyContainer = document.createElement("div"); this._treePropertyContainer.id = "treePropertyContainer"; this._relationshipsWindow = document.createElement("div"); this._relationshipsWindow.classList.add("relationshipsWindow", "hidden"); this._relationshipsWindow.id = "relationshipsWindow"; this._treePropertyContainer.appendChild(this._content); this._treePropertyContainer.appendChild(this._relationshipsWindow); this._treePropertyContainer.appendChild(this._propertyWindow);
                    this._browserWindow.appendChild(this._treePropertyContainer); this._relationshipTree = this._createRelationshipTree(this._relationshipsWindow); $(this._propertyWindow).resizable({ resize: function () { b.onResizeElement(b._viewer.view.getCanvasSize().y, b._relationshipsWindow) }, handles: "n" }); $(this._relationshipsWindow).resizable({ resize: function () { b.onResizeElement(b._viewer.view.getCanvasSize().y, b._content) }, handles: "n" })
                }; a.prototype._onMinimizeButtonClick = function () {
                    this._minimized ? this._maximizeModelBrowser() :
                        this._minimizeModelBrowser()
                }; a.prototype._maximizeModelBrowser = function () { var b = this; this._minimized = !1; this.freeze(!1); var d = jQuery(this._minimizeButton); d.addClass("maximized"); d.removeClass("minimized"); jQuery(this._content).slideDown({ progress: function () { b._onSlide(); $("#modelBrowserWindow").removeClass("ui-modelbrowser-small") }, complete: function () { $(b._browserWindow).children(".ui-resizable-handle").show() }, duration: f.DefaultUiTransitionDuration }); this._refreshBrowserScroll() }; a.prototype._minimizeModelBrowser =
                    function () { var b = this; this._minimized = !0; this.freeze(!0); var d = jQuery(this._minimizeButton); d.removeClass("maximized"); d.addClass("minimized"); jQuery(this._content).slideUp({ progress: function () { b._onSlide(); $("#modelBrowserWindow").addClass("ui-modelbrowser-small") }, complete: function () { $(b._browserWindow).children(".ui-resizable-handle").hide() }, duration: f.DefaultUiTransitionDuration }); this._refreshBrowserScroll() }; a.prototype.onResize = function (b) {
                        var d = $(this._header).outerHeight(), a = $(this._propertyWindow).outerHeight(),
                            c = $(this._relationshipsWindow).outerHeight(); void 0 !== d && void 0 !== a && void 0 !== c && (this._treePropertyContainer.style.height = b - d - 2 * this._browserWindowMargin + "px", d = b - d - a - c - 2 * this._browserWindowMargin, this._browserWindow.style.height = b - 2 * this._browserWindowMargin + "px", this._content.style.height = d + "px", this._refreshBrowserScroll())
                    }; a.prototype.onResizeElement = function (b, d) {
                        var a = $(this._header).outerHeight(), c = $(this._content).outerHeight(), k = $(this._propertyWindow).outerHeight(), e = $(this._relationshipsWindow).outerHeight();
                        $(d).hasClass("hidden") && (d = this._content); var f = $(d).outerHeight(), h = $(d).height(); void 0 !== a && void 0 !== k && void 0 !== e && void 0 !== c && void 0 !== f && void 0 !== h && (this._treePropertyContainer.style.height = b - a - 2 * this._browserWindowMargin + "px", a = b - a - k - e - c + f - 2 * this._browserWindowMargin - (f - h), 0 > a && (a = 0), this._browserWindow.style.height = b - 2 * this._browserWindowMargin + "px", d.style.height = a + "px", this._refreshBrowserScroll())
                    }; a.prototype._onSlide = function () {
                        var b = $(this._header).outerHeight(), d = $(this._content).outerHeight(),
                            a = $(this._propertyWindow).outerHeight(), c = $(this._relationshipsWindow).outerHeight(); void 0 !== b && void 0 !== d && void 0 !== a && void 0 !== c && (this._browserWindow.style.height = d + b + a + c + "px")
                    }; a.prototype._onModelStructureParsingBegin = function () { $("#modelBrowserLoadingDiv").html("Parsing...") }; a.prototype._onModelStructureLoadBegin = function () { $("#" + this._elementId).show() }; a.prototype._onAssemblyTreeReady = function () {
                        $("#modelBrowserLoadingDiv").remove(); this._showTree(h.Model); var b = $(this._elementId).height();
                        if (void 0 !== b) this.onResize(b)
                    }; a.prototype.freeze = function (b) { this._getTree(h.Model).freezeExpansion(b) }; a.prototype.enablePartSelection = function (b) { this._getTree(h.Model).enablePartSelection(b) }; a.prototype.updateSelection = function (b) { this._getTree(h.Model).updateSelection(b) }; a.prototype._getTree = function (b) { return this._treeMap.get(b) }; return a
            }(); m.ModelBrowser = c
        })(f.Desktop || (f.Desktop = {}))
    })(e.Ui || (e.Ui = {}))
})(Communicator || (Communicator = {}));
var __assign = this && this.__assign || function () { __assign = Object.assign || function (e) { for (var f, m = 1, h = arguments.length; m < h; m++) { f = arguments[m]; for (var c in f) Object.prototype.hasOwnProperty.call(f, c) && (e[c] = f[c]) } return e }; return __assign.apply(this, arguments) };
(function (e) {
    (function (f) {
        (function (m) {
            var h; (function (a) { a[a.Generic = 0] = "Generic"; a[a.Bim = 1] = "Bim"; a[a.Drawing = 2] = "Drawing" })(h || (h = {})); var c = function () {
                function a(b, d) {
                    var a = this; this._toolbar = this._modelBrowser = null; this._modelType = h.Generic; this._uiModelType = null; this._suppressMissingModelDialog = !1; this._viewer = b; this._params = __assign({}, d); if (void 0 === this._params.containerId) throw new e.ParseError("Must supply 'containerId'."); this._colorPicker = new f.ColorPicker(this._viewer, this._params.containerId);
                    d = this._getWithDefault(this._params.screenConfiguration, e.ScreenConfiguration.Desktop); b = this._getWithDefault(this._params.showModelBrowser, !0); var c = this._getWithDefault(this._params.showToolbar, !0); if (d === e.ScreenConfiguration.Mobile) { var k = this._viewer.view, u = k.getAxisTriad(); k = k.getNavCube(); u.setAnchor(e.OverlayAnchor.UpperRightCorner); k.setAnchor(e.OverlayAnchor.UpperLeftCorner); $("body").addClass("mobile"); (u = this._viewer.operatorManager.getOperator(e.OperatorId.Handle)) && u.setHandleSize(3) } this._cuttingPlaneController =
                        new f.CuttingPlaneController(this._viewer); this._isolateZoomHelper = new e.IsolateZoomHelper(this._viewer); c && (this._toolbar = new f.Toolbar(this._viewer, this._cuttingPlaneController, d), this._toolbar.init()); d = document.getElementById("content"); d.oncontextmenu = function () { return !1 }; b && (b = document.createElement("div"), b.id = "modelBrowserWindow", d.appendChild(b), this._modelBrowser = new m.ModelBrowser(b.id, d.id, this._viewer, this._isolateZoomHelper, this._colorPicker)); new m.PropertyWindow(this._viewer); b = document.createElement("div");
                    b.id = "streamingIndicator"; d.appendChild(b); this._viewer.getRendererType() === e.RendererType.Client && new f.StreamingIndicator(b.id, this._viewer); this._contextMenu = new f.RightClickContextMenu(d.id, this._viewer, this._isolateZoomHelper, this._colorPicker); new f.TimeoutWarningDialog(d.id, this._viewer); this._viewer.setCallbacks({
                        sceneReady: function () { a._onSceneReady() }, firstModelLoaded: function (d) { a._modelType = a._determineModelType(d); a._configureUi(a._modelType) }, modelSwitched: function (d) {
                            d && (a._modelType =
                                h.Generic, a._configureUi(a._modelType))
                        }, sheetActivated: function () { a._configureUi(h.Drawing) }, sheetDeactivated: function () { a._configureUi(a._modelType) }, modelLoadFailure: function (d, b) { if (!a._suppressMissingModelDialog) { var c = new f.UiDialog("content"); c.setTitle("Model Load Error"); var g = "Unable to load "; c.setText((d ? g + ("'" + d + "'") : g + "model") + (": " + b)); c.show() } }, modelLoadBegin: function () { a._suppressMissingModelDialog = !1 }, missingModel: function (d) {
                            if (!a._suppressMissingModelDialog) {
                                a._suppressMissingModelDialog =
                                    !0; var b = new f.UiDialog("content"); b.setTitle("Missing Model Error"); b.setText("Unable to load '" + (d + "'")); b.show()
                            }
                        }, webGlContextLost: function () { var d = new f.UiDialog("content"); d.setTitle("Fatal Error"); d.setText("WebGL context lost. Rendering cannot continue."); d.show() }, XHRonloadend: function (d, a, b) { 404 === a && (d = new f.UiDialog("content"), d.setTitle("404 Error"), d.setText("Unable to load " + b), d.show()) }, incrementalSelectionBatchBegin: function () { a.freezeModelBrowser(!0); a.enableModelBrowserPartSelection(!1) },
                        incrementalSelectionBatchEnd: function () { a.freezeModelBrowser(!1); a.enableModelBrowserPartSelection(!0) }, incrementalSelectionEnd: function () { null !== a._modelBrowser && a._modelBrowser.updateSelection(null) }
                    })
                } a.prototype._getWithDefault = function (a, d) { return void 0 === a ? d : a }; a.prototype._determineModelType = function (a) { var d = h.Generic; this._viewer.sheetManager.isDrawingSheetActive() ? d = h.Drawing : this._isBim(a) && (d = h.Bim); return d }; a.prototype._isBim = function (a) {
                    return 0 < a.length && (a = this._viewer.model.getModelFileTypeFromNode(a[0]),
                        a === e.FileType.Ifc || a === e.FileType.Revit) ? !0 : !1
                }; a.prototype._configureUi = function (a) { if (this._uiModelType !== a) { this._uiModelType = a; var d = this._viewer.view.getAxisTriad(), b = this._viewer.view.getNavCube(); a === h.Drawing ? (d.disable(), b.disable(), this._viewer.view.setDrawMode(e.DrawMode.WireframeOnShaded)) : (d.enable(), a === h.Bim ? this._viewer.view.setBackfacesVisible(!0) : b.enable()); this._configureToolbar(a); this._configureModelBrowser(a) } }; a.prototype._configureToolbar = function (a) {
                    null !== this._toolbar &&
                        (a === h.Drawing ? ($("#cuttingplane-button").hide(), $("#cuttingplane-submenu").hide(), $("#explode-button").hide(), $("#explode-slider").hide(), $("#explode-submenu").hide(), $("#view-button").hide(), $("#view-submenu").hide(), $("#camera-button").hide(), $("#camera-submenu").hide(), $("#tool_separator_4").hide(), $("#tool_separator_1").hide(), $("#edgeface-button").hide(), $("#edgeface-submenu").hide()) : ($("#cuttingplane-button").show(), $("#explode-button").show(), $("#view-button").show(), $("#camera-button").show(),
                            $("#tool_separator_4").show(), $("#tool_separator_1").show(), $("#edgeface-button").show()), this._toolbar.reposition())
                }; a.prototype._configureModelBrowser = function (a) { null !== this._modelBrowser && (a === h.Drawing ? $(".ui-modeltree").addClass("drawing") : $(".ui-modeltree").removeClass("drawing")) }; a.prototype._onSceneReady = function () {
                    var b = this; this._viewer.focusInput(!0); var d = this._viewer.selectionManager; d.setNodeSelectionColor(a._defaultPartSelectionColor); d.setNodeSelectionOutlineColor(a._defaultPartSelectionOutlineColor);
                    d = this._viewer.view; d.setXRayColor(e.ElementType.Faces, a._defaultXRayColor); d.setXRayColor(e.ElementType.Lines, a._defaultXRayColor); d.setXRayColor(e.ElementType.Points, a._defaultXRayColor); d.setBackgroundColor(a._defaultBackgroundColor, a._defaultBackgroundColor); this._viewer.getViewElement().addEventListener("mouseenter", function () { b._viewer.focusInput(!0) })
                }; a.prototype.setDeselectOnIsolate = function (a) { this._isolateZoomHelper.setDeselectOnIsolate(a) }; a.prototype.freezeModelBrowser = function (a) {
                    null !==
                        this._modelBrowser && this._modelBrowser.freeze(a)
                }; a.prototype.enableModelBrowserPartSelection = function (a) { null !== this._modelBrowser && this._modelBrowser.enablePartSelection(a) }; a.prototype._getContextMenu = function () { return this._contextMenu }; a.prototype._getModelBrowser = function () { return this._modelBrowser }; a.prototype._getToolbar = function () { return this._toolbar }; a._defaultBackgroundColor = e.Color.white(); a._defaultPartSelectionColor = e.Color.createFromFloat(0, .8, 0); a._defaultPartSelectionOutlineColor =
                    e.Color.createFromFloat(0, .8, 0); a._defaultXRayColor = e.Color.createFromFloat(0, .9, 0); return a
            }(); m.DesktopUi = c
        })(f.Desktop || (f.Desktop = {}))
    })(e.Ui || (e.Ui = {}))
})(Communicator || (Communicator = {}));
(function (e) {
    (function (f) {
        (function (m) {
            var h = function (c) {
                function a(a, d, g, l, k) { a = c.call(this, "modelbrowser", a, d, l, k) || this; a._treeMap = g; a._initEvents(); return a } __extends(a, c); a.prototype._initEvents = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var a, d = this; return __generator(this, function (b) {
                            switch (b.label) {
                                case 0: return [4, this._registerContextMenuCallback(m.Tree.Model)]; case 1: return b.sent(), [4, this._registerContextMenuCallback(m.Tree.Layers)]; case 2: return b.sent(), [4, this._registerContextMenuCallback(m.Tree.Types)];
                                case 3: return b.sent(), this._viewer.getStreamingMode() === e.StreamingMode.OnDemand && (a = function () { return __awaiter(d, void 0, void 0, function () { return __generator(this, function (d) { switch (d.label) { case 0: return [4, this._viewer.model.requestNodes(this.getContextItemIds(!1, !0))]; case 1: return d.sent(), [2] } }) }) }, this.appendSeparator(), this.appendItem("request", "Request", a)), [2]
                            }
                        })
                    })
                }; a.prototype._registerContextMenuCallback = function (a) {
                    return __awaiter(this, void 0, void 0, function () {
                        var d, b = this; return __generator(this,
                            function (c) { d = this._treeMap.get(a); void 0 !== d && d instanceof f.ViewTree && d.registerCallback("context", function (d, a) { return __awaiter(b, void 0, void 0, function () { return __generator(this, function (b) { switch (b.label) { case 0: return [4, this._onTreeContext(d, a)]; case 1: return b.sent(), [2] } }) }) }); return [2] })
                    })
                }; a.prototype._onTreeContext = function (a, d) {
                    return __awaiter(this, void 0, void 0, function () {
                        var b, c, k; return __generator(this, function (g) {
                            switch (g.label) {
                                case 0: b = a.split(f.ModelTree.separator); c = b[0]; switch (c) {
                                    case "layer": return [3,
                                        1]; case "types": return [3, 3]; case "typespart": return [3, 5]; case "layerpart": return [3, 5]; case "part": return [3, 5]
                                }return [3, 7]; case 1: return [4, this.setActiveLayerName(a)]; case 2: return g.sent(), [3, 8]; case 3: return [4, this.setActiveType(b[1])]; case 4: return g.sent(), [3, 8]; case 5: return k = parseInt(b[1], 10), [4, this.setActiveItemId(k)]; case 6: return g.sent(), [3, 8]; case 7: return [2]; case 8: return this._position = null, this.showElements(d), [2]
                            }
                        })
                    })
                }; a.prototype._onContextLayerClick = function (a) { this.hide() }; return a
            }(f.Context.ContextMenu);
            m.ModelBrowserContextMenu = h
        })(f.Desktop || (f.Desktop = {}))
    })(e.Ui || (e.Ui = {}))
})(Communicator || (Communicator = {}));
(function (e) {
    (function (e) {
        (function (e) {
            function f(a) { return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") } var c = function () {
                function a(a) {
                    var d = this; this._incrementalSelectionActive = this._assemblyTreeReadyOccurred = !1; this._viewer = a; this._propertyWindow = $("#propertyContainer"); a = function () { return __awaiter(d, void 0, void 0, function () { return __generator(this, function (d) { this._update(); return [2] }) }) }; this._viewer.setCallbacks({
                        assemblyTreeReady: function () { d._onModelStructureReady() },
                        firstModelLoaded: a, modelSwitched: a, selectionArray: function (a) { return __awaiter(d, void 0, void 0, function () { return __generator(this, function (d) { switch (d.label) { case 0: return 0 < a.length ? [4, this._onPartSelection(a[a.length - 1])] : [3, 2]; case 1: d.sent(), d.label = 2; case 2: return [2] } }) }) }, incrementalSelectionBatchBegin: function () { d._incrementalSelectionActive = !0 }, incrementalSelectionBatchEnd: function () { d._incrementalSelectionActive = !1 }
                    })
                } a.prototype._update = function (a) {
                    void 0 === a && (a = "&lt;no properties to display&gt;");
                    this._propertyWindow.html(a)
                }; a.prototype._onModelStructureReady = function () { this._assemblyTreeReadyOccurred = !0; this._update() }; a.prototype._createRow = function (a, d, c) { void 0 === c && (c = ""); var b = document.createElement("tr"); b.id = "propertyTableRow_" + a + "_" + d; 0 < c.length && b.classList.add(c); c = document.createElement("td"); c.id = "propertyDiv_" + a; c.innerHTML = a; a = document.createElement("td"); a.id = "propertyDiv_" + d; a.innerHTML = d; b.appendChild(c); b.appendChild(a); return b }; a.prototype._onPartSelection = function (a) {
                    return __awaiter(this,
                        void 0, void 0, function () {
                            var d, b, c, k, e, h, m, p, n, r, v, w, t, x, z, y, B; return __generator(this, function (g) {
                                switch (g.label) {
                                    case 0: if (!this._assemblyTreeReadyOccurred || this._incrementalSelectionActive) return [2]; this._update(); d = this._viewer.model; b = a.getSelection().getNodeId(); if (null === b || !d.isNodeLoaded(b)) return [2]; c = d.getNodeName(b); e = k = null; return [4, d.getNodeProperties(b)]; case 1: h = g.sent(); m = []; if (null !== h && (m = Object.keys(h), 0 < m.length)) for (k = document.createElement("table"), k.id = "propertyTable", k.appendChild(this._createRow("Property",
                                        "Value", "headerRow")), k.appendChild(this._createRow("Name", null !== c ? c : "unnamed")), p = 0, n = m; p < n.length; p++)r = n[p], v = f(r), w = f(h[r]), k.appendChild(this._createRow(v, w)); t = d.getNodeUserDataIndices(b); if (0 < t.length) for (e = document.createElement("table"), e.id = "propertyTable", e.appendChild(this._createRow("User Data Index", "User Data Size", "headerRow")), x = 0, z = t; x < z.length; x++)y = z[x], B = d.getNodeUserData(b, y), v = "number" === typeof y ? "0x" + y.toString(16).toUpperCase() : "0x" + y, w = "" + B.length, e.appendChild(this._createRow(v,
                                            w)); if (null === k && null === e) return [2]; this._update(""); null !== k && this._propertyWindow.append(k); null !== e && this._propertyWindow.append(e); return [2]
                                }
                            })
                        })
                }; return a
            }(); e.PropertyWindow = c
        })(e.Desktop || (e.Desktop = {}))
    })(e.Ui || (e.Ui = {}))
})(Communicator || (Communicator = {}));
(function (e) {
    (function (f) {
        f.DefaultUiTransitionDuration = 400; f.colorFromRgbString = function (f) { f = f.replace(/[^\d,]/g, "").split(","); return new e.Color(Number(f[0]), Number(f[1]), Number(f[2])) }; f.rgbStringFromColor = function (e) { return e ? "rgb(" + Math.round(e.r) + "," + Math.round(e.g) + "," + Math.round(e.b) + ")" : "" }; f.cssHexStringFromColor = function (e) { var f = function (c) { c = c.toString(16); return 1 === c.length ? "0" + c : c }; return "#" + f(e.r) + f(e.g) + f(e.b) }; f.getValueAsString = function (e) {
            e = $(e).val(); return "string" === typeof e ?
                e : ""
        }; f.centerWindow = function (e, f) { e = $("#" + e); var c = e.width(), a = e.height(); void 0 !== c && void 0 !== a && e.css({ left: (f.x - c) / 2 + "px", top: (f.y - a) / 2 + "px" }) }
    })(e.Ui || (e.Ui = {}))
})(Communicator || (Communicator = {}));
(function (e) {
    (function (f) {
        (function (m) {
            var h; (function (a) { a[a.General = 0] = "General"; a[a.Walk = 1] = "Walk"; a[a.Drawing = 2] = "Drawing"; a[a.Floorplan = 3] = "Floorplan" })(h = m.SettingTab || (m.SettingTab = {})); var c = function () {
                function a(a) {
                    this._versionInfo = !0; this._splatRenderingEnabled = !1; this._splatRenderingSize = .003; this._splatRenderingPointSizeUnit = e.PointSizeUnit.ProportionOfBoundingDiagonal; this._floorplanActive = !1; this._honorSceneVisibility = !0; this._walkSpeedUnits = 1; this._generalTabLabelId = "#settings-tab-label-general";
                    this._walkTabLabelId = "#settings-tab-label-walk"; this._drawingTabLabelId = "#settings-tab-label-drawing"; this._floorplanTabLabelId = "#settings-tab-label-floorplan"; this._generalTabId = "#settings-tab-general"; this._walkTabId = "#settings-tab-walk"; this._drawingTabId = "#settings-tab-drawing"; this._floorplanTabId = "#settings-tab-floorplan"; this._walkKeyIdsMap = new Map; this._viewer = a; a = this._viewer.view; this._navCube = a.getNavCube(); this._axisTriad = a.getAxisTriad(); this._viewerSettingsSelector = "viewer-settings-dialog";
                    this._initElements()
                } a.prototype.show = function () { var a = this._updateSettings(); document.body.classList.contains("mobile") && this._scaleForMobile(); f.centerWindow(this._viewerSettingsSelector, this._viewer.view.getCanvasSize()); $("#" + this._viewerSettingsSelector).show(); return a }; a.prototype.hide = function () { $("#" + this._viewerSettingsSelector).hide() }; a.prototype._scaleForMobile = function () {
                    var a = $("#" + this._viewerSettingsSelector), d = $("#" + this._viewerSettingsSelector + " .hoops-ui-window-body"), c = this._viewer.view.getCanvasSize(),
                        l = a.width(); void 0 !== l && 1.8 * l > c.x && d.css("width", c.x / 1.8); l = a.height(); if (void 0 !== l && 1.8 * l > c.y) { a.show(); l = $("#" + this._viewerSettingsSelector + " .hoops-ui-window-header").get(0).offsetHeight; var k = $("#" + this._viewerSettingsSelector + " .hoops-ui-window-footer").get(0).offsetHeight; a.hide(); d.css("height", c.y / 1.8 - 1.4 * (l + k)) }
                }; a.prototype._initElements = function () {
                    var a = this; this._walkKeyIdsMap.set(e.WalkDirection.Up, "walk-key-up"); this._walkKeyIdsMap.set(e.WalkDirection.Down, "walk-key-down"); this._walkKeyIdsMap.set(e.WalkDirection.Left,
                        "walk-key-left"); this._walkKeyIdsMap.set(e.WalkDirection.Right, "walk-key-right"); this._walkKeyIdsMap.set(e.WalkDirection.Forward, "walk-key-forward"); this._walkKeyIdsMap.set(e.WalkDirection.Backward, "walk-key-backward"); this._walkKeyIdsMap.set(e.WalkDirection.TiltUp, "walk-key-tilt-up"); this._walkKeyIdsMap.set(e.WalkDirection.TiltDown, "walk-key-tilt-down"); this._walkKeyIdsMap.set(e.WalkDirection.RotateLeft, "walk-key-rotate-left"); this._walkKeyIdsMap.set(e.WalkDirection.RotateRight, "walk-key-rotate-right");
                    $("#viewer-settings-dialog").draggable({ handle: ".hoops-ui-window-header" }); $("INPUT.color-picker").each(function () { $(this).minicolors({ position: $(this).attr("data-position") || "bottom left", format: "rgb", control: "hue" }) }); $("#viewer-settings-ok-button").on("click", function () { return __awaiter(a, void 0, void 0, function () { return __generator(this, function (a) { switch (a.label) { case 0: return [4, this._applySettings()]; case 1: return a.sent(), this.hide(), [2] } }) }) }); $("#viewer-settings-cancel-button").on("click",
                        function () { a.hide() }); $("#viewer-settings-apply-button").on("click", function () { return __awaiter(a, void 0, void 0, function () { return __generator(this, function (a) { switch (a.label) { case 0: return [4, this._applySettings()]; case 1: return a.sent(), [2] } }) }) }); $("#settings-pmi-enabled").on("click", function () { a._updateEnabledStyle("settings-pmi-enabled", ["settings-pmi-color-style"], ["settings-pmi-color"], $("#settings-pmi-enabled").prop("checked")) }); $("#settings-splat-rendering-enabled").on("click", function () {
                            a._updateEnabledStyle("settings-splat-rendering-enabled",
                                ["settings-splat-enabled-style"], ["settings-splat-rendering-size", "settings-splat-rendering-point-size-unit"], $("#settings-splat-rendering-enabled").prop("checked"))
                        }); $("#settings-mouse-look-enabled").on("click", function () { a._updateEnabledStyle("settings-mouse-look-enabled", ["settings-mouse-look-style"], ["settings-mouse-look-speed"], $("#settings-mouse-look-enabled").prop("checked")) }); $("#settings-bim-mode-enabled").on("click", function () { a._updateEnabledStyle("settings-bim-mode-enabled", [], [], $("#settings-bim-mode-enabled").prop("checked")) });
                    $("#settings-bloom-enabled").on("click", function () { a._updateEnabledStyle("settings-bloom-enabled", ["settings-bloom-style"], ["settings-bloom-intensity", "settings-bloom-threshold"], $("#settings-bloom-enabled").prop("checked")) }); $("#settings-shadow-enabled").on("click", function () { a._updateEnabledStyle("settings-shadow-enabled", ["settings-shadow-style"], ["settings-shadow-blur-samples", "settings-shadow-interactive"], $("#settings-shadow-enabled").prop("checked")) }); $("#settings-silhouette-enabled").on("click",
                        function () { a._updateEnabledStyle("settings-silhouette-enabled", [], [], $("#settings-silhouette-enabled").prop("checked")) }); this._viewer.setCallbacks({
                            firstModelLoaded: function () { return __awaiter(a, void 0, void 0, function () { var a, b, c; return __generator(this, function (d) { switch (d.label) { case 0: return a = this._viewer.operatorManager, b = a.getOperator(e.OperatorId.KeyboardWalk), c = b.getWalkSpeed(), 0 >= c ? [4, b.resetDefaultWalkSpeeds()] : [3, 2]; case 1: d.sent(), this._updateWalkSettingsHelper(), d.label = 2; case 2: return [2] } }) }) },
                            modelSwitchStart: function () { a._honorSceneVisibility = !0 }
                        }); $("#settings-walk-mode").on("change", function () { var d = parseInt(f.getValueAsString("#settings-walk-mode"), 10); a._updateKeyboardWalkModeStyle(d) }); $(this._generalTabLabelId).on("click", function () { a._switchTab(h.General) }); $(this._walkTabLabelId).on("click", function () { a._switchTab(h.Walk) }); $(this._drawingTabLabelId).on("click", function () { a._switchTab(h.Drawing) }); $(this._floorplanTabLabelId).on("click", function () { a._switchTab(h.Floorplan) })
                };
                a.prototype._switchTab = function (a) {
                    var d = $(this._generalTabLabelId), b = $(this._walkTabLabelId), c = $(this._drawingTabLabelId), k = $(this._floorplanTabLabelId), e = $(this._generalTabId), f = $(this._walkTabId), m = $(this._drawingTabId), p = $(this._floorplanTabId); d.removeClass("selected"); e.removeClass("selected"); f.removeClass("selected"); b.removeClass("selected"); m.removeClass("selected"); c.removeClass("selected"); p.removeClass("selected"); k.removeClass("selected"); switch (a) {
                        case h.General: d.addClass("selected");
                            e.addClass("selected"); break; case h.Walk: f.addClass("selected"); b.addClass("selected"); break; case h.Drawing: m.addClass("selected"); c.addClass("selected"); break; case h.Floorplan: p.addClass("selected"), k.addClass("selected")
                    }
                }; a.prototype._updateSettings = function () {
                    var a = this, d = this._viewer.view, c = this._viewer.model, l = this._viewer.selectionManager, k = this._viewer.cuttingManager, h = this._viewer.measureManager, m = this._viewer.operatorManager; this._versionInfo && ($("#settings-format-version").html(this._viewer.getFormatVersionString()),
                        $("#settings-viewer-version").html(this._viewer.getViewerVersionString()), this._versionInfo = !1); var q = d.getBackgroundColor(); var p = null === q.top ? f.colorFromRgbString("rgb(192,220,248)") : q.top; q = null === q.bottom ? f.colorFromRgbString("rgb(192,220,248)") : q.bottom; var n = l.getNodeSelectionColor(), r = l.getNodeElementSelectionColor(); h = h.getMeasurementColor(); var v = d.getProjectionMode(), w = d.getBackfacesVisible(), t = d.getHiddenLineSettings().getObscuredLineOpacity(), x = k.getCappingGeometryVisibility(); l = l.getHighlightFaceElementSelection() &&
                            l.getHighlightLineElementSelection(); var z = k.getCappingFaceColor(); k = k.getCappingLineColor(); var y = d.getAmbientOcclusionEnabled(), B = d.getAmbientOcclusionRadius(), D = d.getAntiAliasingMode() === e.AntiAliasingMode.SMAA, E = d.getBloomEnabled(), F = d.getBloomIntensityScale(), G = d.getBloomThreshold(), H = d.getSilhouetteEnabled(), I = d.getSimpleReflectionEnabled(), J = d.getSimpleShadowEnabled(), K = d.getSimpleShadowInteractiveUpdateEnabled(), L = d.getSimpleShadowBlurSamples(), M = c.getPmiColor(); c = c.getPmiColorOverride();
                    m = m.getOperator(e.OperatorId.Orbit).getOrbitFallbackMode() === e.OrbitFallbackMode.CameraTarget ? !0 : !1; var N = this._axisTriad.getEnabled(), O = this._navCube.getEnabled(), A = []; A.push(this._updateWalkSettings()); this._updateDrawingSettings(); this._updateFloorplanSettings(); $("#settings-selection-color-body").minicolors("value", f.rgbStringFromColor(n)); $("#settings-selection-color-face-line").minicolors("value", f.rgbStringFromColor(r)); $("#settings-background-top").minicolors("value", f.rgbStringFromColor(p));
                    $("#settings-background-bottom").minicolors("value", f.rgbStringFromColor(q)); $("#settings-measurement-color").minicolors("value", f.rgbStringFromColor(h)); $("#settings-capping-face-color").minicolors("value", f.rgbStringFromColor(z)); $("#settings-capping-line-color").minicolors("value", f.rgbStringFromColor(k)); $("#settings-projection-mode").val("" + v); $("#settings-show-backfaces").prop("checked", w); $("#settings-show-capping-geometry").prop("checked", x); $("#settings-enable-face-line-selection").prop("checked",
                        l); $("#settings-orbit-mode").prop("checked", m); $("#settings-select-scene-invisible").prop("checked", this._honorSceneVisibility); $("#settings-ambient-occlusion").prop("checked", y); $("#settings-ambient-occlusion-radius").val("" + B); $("#settings-anti-aliasing").prop("checked", D); $("#settings-bloom-intensity").val("" + F); $("#settings-bloom-threshold").val("" + G); $("#settings-axis-triad").prop("checked", N); $("#settings-nav-cube").prop("checked", O); $("#settings-silhouette-enabled").prop("checked", H); $("#settings-reflection-enabled").prop("checked",
                            I); $("#settings-shadow-interactive").prop("checked", K); $("#settings-shadow-blur-samples").val(L); $("#settings-pmi-color").minicolors("value", f.rgbStringFromColor(M)); c !== $("#settings-pmi-enabled").prop("checked") && $("#settings-pmi-enabled").trigger("click"); A.push(this._viewer.getMinimumFramerate().then(function (a) { $("#settings-framerate").val("" + a) })); void 0 !== t ? $("#settings-hidden-line-opacity").val("" + t) : $("#settings-hidden-line-opacity").val(""); E !== $("#settings-bloom-enabled").prop("checked") &&
                                $("#settings-bloom-enabled").trigger("click"); J !== $("#settings-shadow-enabled").prop("checked") && $("#settings-shadow-enabled").trigger("click"); A.push(d.getPointSize().then(function (d) {
                                    var b = d[0]; d = d[1]; a._splatRenderingEnabled = 1 !== b || d !== e.PointSizeUnit.ScreenPixels; a._splatRenderingEnabled !== $("#settings-splat-rendering-enabled").prop("checked") && $("#settings-splat-rendering-enabled").trigger("click"); a._splatRenderingEnabled && (a._splatRenderingSize = b, a._splatRenderingPointSizeUnit = d); b = $("#settings-splat-rendering-size");
                                    Number(b.prop("step")) > a._splatRenderingSize && b.prop("step", "" + a._splatRenderingSize / 3); b.val("" + a._splatRenderingSize); $("#settings-splat-rendering-point-size-unit").val("" + a._splatRenderingPointSizeUnit)
                                })); A.push(d.getEyeDomeLightingEnabled().then(function (a) { $("#settings-eye-dome-lighting-enabled").prop("checked", a) })); return e.Util.waitForAll(A)
                }; a.prototype._applySettings = function () {
                    var a = [], d = this._viewer.view, c = this._viewer.model, l = this._viewer.cuttingManager, k = this._viewer.selectionManager;
                    a.push(this._applyWalkSettings()); var h = f.colorFromRgbString(f.getValueAsString("#settings-background-top")), m = f.colorFromRgbString(f.getValueAsString("#settings-background-bottom")); this._viewer.view.setBackgroundColor(h, m); h = f.colorFromRgbString(f.getValueAsString("#settings-selection-color-body")); k.setNodeSelectionColor(h); k.setNodeSelectionOutlineColor(h); h = f.colorFromRgbString(f.getValueAsString("#settings-selection-color-face-line")); k.setNodeElementSelectionColor(h); k.setNodeElementSelectionOutlineColor(h);
                    h = $("#settings-enable-face-line-selection").prop("checked"); k.setHighlightFaceElementSelection(h); k.setHighlightLineElementSelection(h); this._viewer.measureManager.setMeasurementColor(f.colorFromRgbString(f.getValueAsString("#settings-measurement-color"))); k = f.colorFromRgbString(f.getValueAsString("#settings-pmi-color")); h = $("#settings-pmi-enabled").prop("checked"); k && h ? (c.setPmiColor(k), c.setPmiColorOverride(!0)) : c.setPmiColorOverride(!1); a.push(l.setCappingFaceColor(f.colorFromRgbString(f.getValueAsString("#settings-capping-face-color"))));
                    a.push(l.setCappingLineColor(f.colorFromRgbString(f.getValueAsString("#settings-capping-line-color")))); d.setProjectionMode(parseInt(f.getValueAsString("#settings-projection-mode"), 10)); c = $("#settings-show-backfaces").prop("checked"); d.setBackfacesVisible(c); c = $("#settings-show-capping-geometry").prop("checked"); a.push(l.setCappingGeometryVisibility(c)); (l = parseInt(f.getValueAsString("#settings-framerate"), 10)) && 0 < l && this._viewer.setMinimumFramerate(l); l = parseFloat(f.getValueAsString("#settings-hidden-line-opacity"));
                    d.getHiddenLineSettings().setObscuredLineOpacity(l); d.getDrawMode() === e.DrawMode.HiddenLine && d.setDrawMode(e.DrawMode.HiddenLine); l = this._viewer.operatorManager.getOperator(e.OperatorId.Orbit); c = $("#settings-orbit-mode").prop("checked"); l.setOrbitFallbackMode(c ? e.OrbitFallbackMode.CameraTarget : e.OrbitFallbackMode.ModelCenter); l = (this._honorSceneVisibility = $("#settings-select-scene-invisible").prop("checked")) ? e.SelectionMask.None : e.SelectionMask.All; c = this._viewer.operatorManager.getOperator(e.OperatorId.Select);
                    k = c.getPickConfig(); k.forceEffectiveSceneVisibilityMask = l; c.setPickConfig(k); this._viewer.operatorManager.getOperator(e.OperatorId.AreaSelect).setForceEffectiveSceneVisibilityMask(l); this._viewer.operatorManager.getOperator(e.OperatorId.RayDrillSelect).setForceEffectiveSceneVisibilityMask(l); d.setAmbientOcclusionEnabled($("#settings-ambient-occlusion").prop("checked")); d.setAmbientOcclusionRadius(parseFloat(f.getValueAsString("#settings-ambient-occlusion-radius"))); $("#settings-anti-aliasing").prop("checked") ?
                        d.setAntiAliasingMode(e.AntiAliasingMode.SMAA) : d.setAntiAliasingMode(e.AntiAliasingMode.None); d.setBloomEnabled($("#settings-bloom-enabled").prop("checked")); d.setBloomIntensityScale(parseFloat(f.getValueAsString("#settings-bloom-intensity"))); d.setBloomThreshold(parseFloat(f.getValueAsString("#settings-bloom-threshold"))); d.setSilhouetteEnabled($("#settings-silhouette-enabled").prop("checked")); d.setSimpleReflectionEnabled($("#settings-reflection-enabled").prop("checked")); d.setSimpleShadowEnabled($("#settings-shadow-enabled").prop("checked"));
                    d.setSimpleShadowInteractiveUpdateEnabled($("#settings-shadow-interactive").prop("checked")); d.setSimpleShadowBlurSamples(parseInt(f.getValueAsString("#settings-shadow-blur-samples"), 10)); $("#settings-axis-triad").prop("checked") ? this._axisTriad.enable() : this._axisTriad.disable(); $("#settings-nav-cube").prop("checked") ? this._navCube.enable() : this._navCube.disable(); $("#settings-splat-rendering-enabled").prop("checked") ? (this._splatRenderingEnabled = !0, this._splatRenderingSize = parseFloat(f.getValueAsString("#settings-splat-rendering-size")),
                        this._splatRenderingPointSizeUnit = parseInt(f.getValueAsString("#settings-splat-rendering-point-size-unit"), 10), d.setPointSize(this._splatRenderingSize, this._splatRenderingPointSizeUnit)) : (this._splatRenderingEnabled = !1, d.setPointSize(1, e.PointSizeUnit.ScreenPixels)); d.setEyeDomeLightingEnabled($("#settings-eye-dome-lighting-enabled").prop("checked")); a.push(this._applyDrawingSettings()); a.push(this._applyFloorplanSettings()); return e.Util.waitForAll(a)
                }; a.prototype._applyWalkKeyText = function (a, d) {
                    d <
                        e.KeyCode.a || d > e.KeyCode.z || (a = this._walkKeyIdsMap.get(a), d = e.KeyCode[d].toUpperCase(), $("#" + a).html(d))
                }; a.prototype._applyWalkSettings = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var a, d, c, l, k, h, m, q, p, n, r, v, w = this; return __generator(this, function (b) {
                            switch (b.label) {
                                case 0: return a = this._viewer.operatorManager, d = a.getOperator(e.OperatorId.KeyboardWalk), c = a.getOperator(e.OperatorId.WalkMode), l = parseInt(f.getValueAsString("#settings-walk-mode"), 10), [4, c.setWalkMode(l)]; case 1: return b.sent(),
                                    k = parseInt(f.getValueAsString("#settings-walk-rotation"), 10), h = parseFloat(f.getValueAsString("#settings-walk-speed")) * this._walkSpeedUnits, m = parseFloat(f.getValueAsString("#settings-walk-elevation")) * this._walkSpeedUnits, q = parseInt(f.getValueAsString("#settings-walk-view-angle"), 10), p = $("#settings-mouse-look-enabled").prop("checked"), n = parseInt(f.getValueAsString("#settings-mouse-look-speed"), 10), r = $("#settings-bim-mode-enabled").prop("checked"), $("#walk-navigation-keys .walk-key").html(""), v = d.getKeyMapping(),
                                    v.forEach(function (a, d) { w._applyWalkKeyText(a, d) }), 0 !== h ? [3, 3] : [4, c.resetDefaultWalkSpeeds()]; case 2: return b.sent(), this._updateWalkSettingsHelper(), [3, 4]; case 3: c.setRotationSpeed(k), c.setWalkSpeed(h), c.setElevationSpeed(m), c.setViewAngle(q), l === e.WalkMode.Keyboard && (d.setMouseLookEnabled(p), d.setMouseLookSpeed(n)), b.label = 4; case 4: return r ? [4, this._viewer.model.registerIfcNodes(this._viewer.model.getAbsoluteRootNode())] : [3, 7]; case 5: return b.sent(), [4, c.setBimModeEnabled(!0)]; case 6: return b.sent(),
                                        [3, 9]; case 7: return [4, c.setBimModeEnabled(!1)]; case 8: b.sent(), b.label = 9; case 9: return [2]
                            }
                        })
                    })
                }; a.prototype._updateKeyboardWalkModeStyle = function (a) { this._updateEnabledStyle(null, ["walk-mouse-look-text", "settings-mouse-look-style", "walk-navigation-keys"], ["settings-mouse-look-enabled", "settings-mouse-look-speed"], a === e.WalkMode.Keyboard) }; a.prototype._updateWalkSpeedUnits = function (a) {
                    this._walkSpeedUnits = Math.pow(10, Math.floor(Math.log(a) / Math.LN10)); a = "m"; .001 >= this._walkSpeedUnits ? a = "&micro;m" :
                        1 >= this._walkSpeedUnits ? a = "mm" : 10 >= this._walkSpeedUnits ? a = "cm" : this._walkSpeedUnits = 1E3; $("#walk-speed-units").html(a); $("#elevation-speed-units").html(a)
                }; a.prototype._updateWalkSettingsHelper = function () {
                    var a = this._viewer.operatorManager, d = a.getOperator(e.OperatorId.KeyboardWalk), c = a.getOperator(e.OperatorId.WalkMode); a = d.getRotationSpeed(); var l = d.getWalkSpeed(), k = d.getElevationSpeed(), f = d.getViewAngle(), h = d.getMouseLookEnabled(), m = d.getMouseLookSpeed(); d = d.isBimModeEnabled(); c = c.getWalkMode();
                    this._updateWalkSpeedUnits(l); $("#settings-walk-mode").val("" + c); $("#settings-walk-rotation").val("" + a); $("#settings-walk-speed").val((l / this._walkSpeedUnits).toFixed(1)); $("#settings-walk-elevation").val((k / this._walkSpeedUnits).toFixed(1)); $("#settings-walk-view-angle").val("" + f); $("#settings-mouse-look-speed").val("" + m); this._updateEnabledStyle("settings-mouse-look-enabled", ["settings-mouse-look-style"], ["settings-mouse-look-speed"], h); this._updateEnabledStyle("settings-bim-mode-enabled", [], [],
                        d); this._updateKeyboardWalkModeStyle(c)
                }; a.prototype._updateWalkSettings = function () { return __awaiter(this, void 0, void 0, function () { var a, d, c; return __generator(this, function (b) { switch (b.label) { case 0: return a = this._viewer.operatorManager, d = a.getOperator(e.OperatorId.KeyboardWalk), c = d.getWalkSpeed(), 0 !== c ? [3, 2] : [4, d.resetDefaultWalkSpeeds()]; case 1: b.sent(), b.label = 2; case 2: return this._updateWalkSettingsHelper(), [2] } }) }) }; a.prototype._updateDrawingSettings = function () {
                    var a = this._viewer.sheetManager.getSheetBackgroundColor(),
                        d = this._viewer.sheetManager.getSheetColor(), c = this._viewer.sheetManager.getSheetShadowColor(), l = this._viewer.sheetManager.getBackgroundSheetEnabled(); $("#settings-drawing-background").minicolors("value", f.rgbStringFromColor(a)); $("#settings-drawing-sheet").minicolors("value", f.rgbStringFromColor(d)); $("#settings-drawing-sheet-shadow").minicolors("value", f.rgbStringFromColor(c)); $("#settings-drawing-background-enabled").prop("checked", l)
                }; a.prototype._applyDrawingSettings = function () {
                    return __awaiter(this,
                        void 0, void 0, function () {
                            var a, d, c, l; return __generator(this, function (b) {
                                switch (b.label) {
                                    case 0: return a = f.colorFromRgbString(f.getValueAsString("#settings-drawing-background")), d = f.colorFromRgbString(f.getValueAsString("#settings-drawing-sheet")), c = f.colorFromRgbString(f.getValueAsString("#settings-drawing-sheet-shadow")), l = $("#settings-drawing-background-enabled").prop("checked"), [4, this._viewer.sheetManager.setBackgroundSheetEnabled(l)]; case 1: return b.sent(), [4, this._viewer.sheetManager.setSheetColors(a,
                                        d, c)]; case 2: return b.sent(), [2]
                                }
                            })
                        })
                }; a.prototype._updateFloorplanSettings = function () {
                    var a = this._viewer.floorplanManager, d = a.getConfiguration(); this._floorplanActive = a = a.isActive(); $("#settings-floorplan-active").prop("checked", a); $("#settings-floorplan-track-camera").prop("checked", d.trackCameraEnabled); switch (d.floorplanOrientation) { case e.FloorplanOrientation.NorthUp: $("#settings-floorplan-orientation").val("0"); break; case e.FloorplanOrientation.AvatarUp: $("#settings-floorplan-orientation").val("1") }switch (d.autoActivate) {
                        case e.FloorplanAutoActivation.Bim: $("#settings-floorplan-auto-activate").val("0");
                            break; case e.FloorplanAutoActivation.BimWalk: $("#settings-floorplan-auto-activate").val("1"); break; case e.FloorplanAutoActivation.Never: $("#settings-floorplan-auto-activate").val("2")
                    }$("#settings-floorplan-feet-per-pixel").val("" + d.overlayFeetPerPixel); $("#settings-floorplan-zoom").val("" + d.zoomLevel); $("#settings-floorplan-background-opacity").val("" + d.backgroundOpacity); $("#settings-floorplan-border-opacity").val("" + d.borderOpacity); $("#settings-floorplan-avatar-opacity").val("" + d.avatarOpacity);
                    $("#settings-floorplan-background-color").minicolors("value", f.rgbStringFromColor(d.backgroundColor)); $("#settings-floorplan-border-color").minicolors("value", f.rgbStringFromColor(d.borderColor)); $("#settings-floorplan-avatar-color").minicolors("value", f.rgbStringFromColor(d.avatarColor)); $("#settings-floorplan-avatar-outline-color").minicolors("value", f.rgbStringFromColor(d.avatarOutlineColor)); this._updateEnabledStyle(null, ["settings-floorplan-zoom-style"], ["settings-floorplan-zoom"], d.trackCameraEnabled);
                    this._updateEnabledStyle(null, ["settings-floorplan-feet-per-pixel-style"], ["settings-floorplan-feet-per-pixel"], d.trackCameraEnabled)
                }; a.prototype._applyFloorplanSettings = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var a, d, c, l, k, h, m, q, p, n, r, v, w, t, x; return __generator(this, function (b) {
                            switch (b.label) {
                                case 0: a = $("#settings-floorplan-active").prop("checked"); d = $("#settings-floorplan-track-camera").prop("checked"); switch ($("#settings-floorplan-orientation").val()) {
                                    case "0": c = e.FloorplanOrientation.NorthUp;
                                        break; case "1": c = e.FloorplanOrientation.AvatarUp; break; default: c = e.FloorplanOrientation.NorthUp
                                }switch ($("#settings-floorplan-auto-activate").val()) { case "0": l = e.FloorplanAutoActivation.Bim; break; case "1": l = e.FloorplanAutoActivation.BimWalk; break; case "2": l = e.FloorplanAutoActivation.Never; break; default: l = e.FloorplanAutoActivation.BimWalk }k = parseFloat(f.getValueAsString("#settings-floorplan-feet-per-pixel")); h = parseFloat(f.getValueAsString("#settings-floorplan-zoom")); m = parseFloat(f.getValueAsString("#settings-floorplan-background-opacity"));
                                    q = parseFloat(f.getValueAsString("#settings-floorplan-border-opacity")); p = parseFloat(f.getValueAsString("#settings-floorplan-avatar-opacity")); n = f.colorFromRgbString(f.getValueAsString("#settings-floorplan-background-color")); r = f.colorFromRgbString(f.getValueAsString("#settings-floorplan-border-color")); v = f.colorFromRgbString(f.getValueAsString("#settings-floorplan-avatar-color")); w = f.colorFromRgbString(f.getValueAsString("#settings-floorplan-avatar-outline-color")); t = this._viewer.floorplanManager.getConfiguration();
                                    t.trackCameraEnabled = d; t.floorplanOrientation = c; t.autoActivate = l; t.overlayFeetPerPixel = k; t.zoomLevel = h; t.backgroundOpacity = m; t.borderOpacity = q; t.avatarOpacity = p; t.backgroundColor = n; t.borderColor = r; t.avatarColor = v; t.avatarOutlineColor = w; this._updateEnabledStyle(null, ["settings-floorplan-zoom-style"], ["settings-floorplan-zoom"], d); this._updateEnabledStyle(null, ["settings-floorplan-feet-per-pixel-style"], ["settings-floorplan-feet-per-pixel"], d); return [4, this._viewer.floorplanManager.setConfiguration(t)];
                                case 1: b.sent(); if (!a || this._floorplanActive) return [3, 3]; this._floorplanActive = !0; return [4, this._viewer.floorplanManager.activate()]; case 2: return b.sent(), [3, 5]; case 3: if (a || !this._floorplanActive) return [3, 5]; this._floorplanActive = !1; return [4, this._viewer.floorplanManager.deactivate()]; case 4: b.sent(), b.label = 5; case 5: return x = this._viewer.floorplanManager.isActive(), $("#settings-floorplan-active").prop("checked", x), [2]
                            }
                        })
                    })
                }; a.prototype._updateEnabledStyle = function (a, d, c, l) {
                    null !== a && $("#" + a).prop("checked",
                        l); if (l) for (var b = 0; b < d.length; b++)a = d[b], $("#" + a).removeClass("grayed-out"); else for (b = 0; b < d.length; b++)a = d[b], $("#" + a).addClass("grayed-out"); for (d = 0; d < c.length; d++)$("#" + c[d]).prop("disabled", !l)
                }; return a
            }(); m.ViewerSettings = c
        })(f.Desktop || (f.Desktop = {}))
    })(e.Ui || (e.Ui = {}))
})(Communicator || (Communicator = {}));
(function (e) {
    (function (e) {
        var f = function () {
            function f(c, a, b) { this._maxNodeChildrenSize = 300; this._tree = new e.Control.TreeControl(a, c, f.separator, b); this._internalId = a + "Id"; this._viewer = c } f.prototype.getElementId = function () { return this._tree.getElementId() }; f.prototype.registerCallback = function (c, a) { this._tree.registerCallback(c, a) }; f.prototype._splitHtmlId = function (c) { return this._splitHtmlIdParts(c, f.separator) }; f.prototype._splitHtmlIdParts = function (c, a) {
                var b = c.lastIndexOf(a); return -1 === b ? ["", c] :
                    [c.substring(0, b), c.substring(b + a.length)]
            }; f.prototype.hideTab = function () { $("#" + this.getElementId() + "Tab").hide() }; f.prototype.showTab = function () { $("#" + this.getElementId() + "Tab").show() }; f.prototype._getTreeControl = function () { return this._tree }; f.separator = "_"; f.visibilityPrefix = "visibility"; return f
        }(); e.ViewTree = f
    })(e.Ui || (e.Ui = {}))
})(Communicator || (Communicator = {}));
(function (e) {
    (function (f) {
        var m = function () {
            function f(c, a, b) { this._idCount = 0; this._viewpointIdMap = new Map; this._bcfIdMap = new Map; this._topicGuidMap = new Map; this._topicTitleGuidMap = new Map; this._topicCommentsGuidMap = new Map; this._commentGuidMap = new Map; this._viewer = c; this._elementId = a; this._scroll = b; this._listRoot = document.createElement("ul"); this._bcfDataList = document.createElement("select"); this._initEvents() } f.prototype.hideTab = function () { $("#" + this._elementId + "Tab").hide() }; f.prototype.showTab =
                function () { $("#" + this._elementId + "Tab").show() }; f.prototype.getElementId = function () { return this._elementId }; f.prototype._refreshScroll = function () { this._scroll && this._scroll.refresh() }; f.prototype._showBCFData = function (c) { jQuery("#" + c).show(); this._bcfIdMap.forEach(function (a, b) { b !== c && jQuery("#" + b).hide() }); this._refreshScroll() }; f.prototype._events = function (c) {
                    var a = this; $(c).on("click", ".ui-bcf-topic", function (b) {
                        return __awaiter(a, void 0, void 0, function () {
                            var a, c; return __generator(this, function (d) {
                                switch (d.label) {
                                    case 0: return a =
                                        jQuery(b.target), c = a.closest(".viewpoint, .comment").get(0), void 0 === c ? [3, 2] : [4, this._onTreeSelectItem(c.id)]; case 1: d.sent(), d.label = 2; case 2: return [2]
                                }
                            })
                        })
                    }); $(c).on("change", "select", function (b) { (b = jQuery(b.target).closest("select").get(0)) && a._showBCFData(b.value) })
                }; f.prototype._addBCFComment = function (c, a, b) {
                    return __awaiter(this, void 0, void 0, function () {
                        var d, g, l, k, f, h, m; return __generator(this, function (u) {
                            switch (u.label) {
                                case 0: return d = c.getMarkup(), g = new Date, l = "", k = e.UUID.create(), f = k + ".bcfv",
                                    [4, e.BCFViewpoint.createViewpoint(this._viewer, f, b)]; case 1: return h = u.sent(), c.setViewpoint(f, h), m = k + ".png", [4, this._addSnapshot(c, m)]; case 2: return u.sent(), d.addViewpoint(k, f, m), [2, d.addComment(g, l, a, k)]
                            }
                        })
                    })
                }; f.prototype._addSnapshot = function (c, a) { return __awaiter(this, void 0, void 0, function () { var b; return __generator(this, function (d) { switch (d.label) { case 0: return [4, this._viewer.takeSnapshot()]; case 1: return b = d.sent(), c.addSnapshot(a, e.BCFSnapshot.snapshotDataFromImage(b)), [2] } }) }) }; f.prototype._removeBcf =
                    function (c) { this._viewer.BCFManager.removeBCFData(c) }; f.prototype._buildRemoveBCF = function (c) { var a = this, b = document.createElement("div"); b.classList.add("ui-bcf-input"); var d = document.createElement("button"); d.textContent = "Remove BCF"; b.appendChild(d); d.onclick = function () { return __awaiter(a, void 0, void 0, function () { return __generator(this, function (a) { this._removeBcf(c); return [2] }) }) }; return b }; f.prototype._addBcf = function (c) {
                        return __awaiter(this, void 0, void 0, function () {
                            var a, b, d; return __generator(this,
                                function (g) { switch (g.label) { case 0: return a = this._viewer, b = a.BCFManager, d = b.createBCFData(c), [4, this._addTopic(d, c)]; case 1: return g.sent(), [2, d] } })
                        })
                    }; f.prototype._buildAddBCF = function () {
                        var c = this, a = document.createElement("div"); a.classList.add("ui-bcf-input"); var b = document.createElement("label"); b.textContent = "BCF Name: "; b.htmlFor = "bcf_name"; var d = document.createElement("input"); d.id = "bcf_name"; d.placeholder = "BCF Name..."; var g = document.createElement("button"); g.textContent = "Add BCF"; a.appendChild(b);
                        a.appendChild(d); a.appendChild(g); g.onclick = function () { return __awaiter(c, void 0, void 0, function () { var a; return __generator(this, function (b) { switch (b.label) { case 0: a = d.value; if (!(0 < a.length)) return [3, 2]; d.value = ""; return [4, this._addBcf(a)]; case 1: b.sent(), b.label = 2; case 2: return [2] } }) }) }; return a
                    }; f.prototype._addTopic = function (c, a) {
                        return __awaiter(this, void 0, void 0, function () {
                            var b, d, g, l, k; return __generator(this, function (f) {
                                switch (f.label) {
                                    case 0: return b = this._viewer.markupManager.getActiveMarkupView(),
                                        [4, e.BCFTopic.createTopic(this._viewer, c.getId(), c.getFilename(), a, b)]; case 1: return d = f.sent(), c.addTopic(d.getTopicId(), d), g = this._buildTopic(c, d), l = this._getBcfHtmlId(c.getId()), null !== l && (k = document.getElementById(l), null !== k && k.appendChild(g)), [2, d]
                                }
                            })
                        })
                    }; f.prototype._buildAddTopic = function (c) {
                        var a = this, b = document.createElement("div"); b.classList.add("ui-bcf-input"); var d = document.createElement("label"); d.textContent = "Topic Title: "; d.htmlFor = "topic_title"; var g = document.createElement("input");
                        g.id = "topic_title"; g.placeholder = "Topic Title..."; var l = document.createElement("button"); l.textContent = "Add Topic"; b.appendChild(d); b.appendChild(g); b.appendChild(l); l.onclick = function () { return __awaiter(a, void 0, void 0, function () { var a; return __generator(this, function (d) { switch (d.label) { case 0: a = g.value; if (!(0 < a.length)) return [3, 2]; g.value = ""; return [4, this._addTopic(c, a)]; case 1: d.sent(), d.label = 2; case 2: return [2] } }) }) }; return b
                    }; f.prototype._initEvents = function () {
                        var c = this, a = document.getElementById(this._elementId);
                        if (null === a) throw new e.CommunicatorError("container is null"); this._events(a); a.appendChild(this._buildAddBCF()); this._listRoot.classList.add("ui-modeltree"); this._listRoot.classList.add("ui-modeltree-item"); a.appendChild(this._bcfDataList); a.appendChild(this._listRoot); this._viewer.setCallbacks({ firstModelLoaded: function (a) { var d = c._viewer.model; a.forEach(function (a) { d.getModelFileTypeFromNode(a) === e.FileType.Ifc && c.showTab() }) }, bcfLoaded: function (a, d) { c.showTab(); c._appendBCF(a, d) }, bcfRemoved: function (a) { c._removeBCF(a) } })
                    };
            f.prototype._buildBCFNode = function (c) { var a = document.createElement("li"); a.classList.add("ui-modeltree-item"); a.id = c; return a }; f.prototype._buildDiv = function (c, a, b) { var d = document.createElement("div"); void 0 !== b && d.classList.add(b); d.id = c; d.innerHTML = a; return d }; f.prototype._buildEditDiv = function (c, a, b, d, g) {
                var l = document.createElement("input"); l.classList.add("ui-bcf-edit"); void 0 !== g && l.classList.add(g); l.id = c; l.value = a; l.placeholder = b; l.onblur = function () { void 0 !== d && null !== l.textContent && d(l.textContent) };
                return l
            }; f.prototype._buildImage = function (c) { var a = document.createElement("img"); a.id = this._getId(); a.src = c; return a }; f.prototype._buildDeleteComment = function (c, a, b) { var d = this, g = document.createElement("button"); g.classList.add("ui-bcf-comment-delete"); g.textContent = "Delete"; g.onclick = function () { d._deleteComment(c, a, b) }; return g }; f.prototype._buildEditComment = function (c, a) {
                var b = this, d = document.createElement("button"); d.textContent = "Edit"; d.onclick = function () {
                    if ("true" === c.contentEditable) {
                        c.contentEditable =
                            "false"; d.textContent = "Edit"; var g = c.textContent; null !== g && b._setCommentText(a, g)
                    } else c.contentEditable = "true", d.textContent = "Save"
                }; return d
            }; f.prototype._buildComment = function (c, a) {
                var b = this._getId(), d = this._getViewpointFromComment(c, a); null !== d && this._viewpointIdMap.set(b, d); d = this._buildDiv(b, "", "comment"); var g = "Created by " + a.getAuthor(), l = this._formatDate(a.getDate()), e = a.getText(); d.appendChild(this._buildDiv(this._getId(), g)); d.appendChild(this._buildDiv(this._getId(), l)); g = a.getViewpointGuid();
                null !== g && (g = c.getMarkup().getViewpoints().get(g), void 0 !== g && (g = g.getSnapshotFilename(), null !== g && (g = c.getSnapshot(g), null !== g && d.appendChild(this._buildImage(g.getUrl()))))); g = this._getId(); this._commentGuidMap.set(a.getId(), g); e = this._buildDiv(g, e); d.appendChild(e); d.appendChild(this._buildEditComment(e, a)); d.appendChild(this._buildDeleteComment(c, a, b)); return d
            }; f.prototype._addComment = function (c, a) {
                return __awaiter(this, void 0, void 0, function () {
                    var b, d, g, l, e; return __generator(this, function (f) {
                        switch (f.label) {
                            case 0: return b =
                                this._viewer.markupManager.getActiveMarkupView(), [4, this._addBCFComment(c, a, b)]; case 1: return d = f.sent(), g = this._buildComment(c, d), l = this._topicCommentsGuidMap.get(c.getTopicId()), void 0 !== l && (e = document.getElementById(l), null !== e && e.appendChild(g)), [2, d]
                        }
                    })
                })
            }; f.prototype._deleteComment = function (c, a, b) { b = document.getElementById(b); null !== b && null !== b.parentElement && (b.parentElement.removeChild(b), c.getMarkup().deleteComment(a.getId()), this._refreshScroll()) }; f.prototype._setCommentText = function (c,
                a) { var b = this._commentGuidMap.get(c.getId()); void 0 !== b && (b = document.getElementById(b), null !== b && (c.setText(a), b.textContent = a, this._refreshScroll())) }; f.prototype._buildAddComment = function (c) {
                    var a = this, b = this._buildDiv(this._getId(), ""), d = document.createElement("textarea"); d.style.width = "100%"; b.appendChild(d); var g = document.createElement("button"); g.textContent = "Add Comment"; b.appendChild(g); g.onclick = function () {
                        return __awaiter(a, void 0, void 0, function () {
                            var a; return __generator(this, function (b) {
                                switch (b.label) {
                                    case 0: return a =
                                        d.value, d.value = "", 0 < a.length ? [4, this._addComment(c, a)] : [3, 2]; case 1: b.sent(), b.label = 2; case 2: return [2]
                                }
                            })
                        })
                    }; return b
                }; f.prototype._buildTopicData = function (c, a) { var b = document.createElement("div"); b.classList.add("topic-data"); b.innerHTML = void 0 !== a && null !== a ? "<b>" + c + "</b>: " + a : "<b>" + c + "</b>: -"; return b }; f.prototype._formatDate = function (c) { return void 0 === c ? "-" : c.toDateString() }; f.prototype._deleteTopic = function (c, a) {
                    var b = this._topicGuidMap.get(a.getTopicId()); void 0 !== b && (b = document.getElementById(b),
                        null !== b && null !== b.parentElement && b.parentElement.removeChild(b)); return c.getTopics().delete(a.getTopicId())
                }; f.prototype._buildDeleteTopic = function (c, a) { var b = this, d = document.createElement("button"); d.textContent = "Delete Topic"; d.classList.add("ui-bcf-delete"); d.onclick = function () { return __awaiter(b, void 0, void 0, function () { return __generator(this, function (d) { this._deleteTopic(c, a); return [2] }) }) }; return d }; f.prototype._setTopicTitle = function (c, a) {
                    var b = this._topicTitleGuidMap.get(c.getTopicId());
                    void 0 !== b && (b = document.getElementById(b), null !== b && (b.textContent = a)); c.getMarkup().setTopicTitle(a)
                }; f.prototype._buildTopic = function (c, a) {
                    var b = this, d = this._getId(), g = a.getTopicId(); this._topicGuidMap.set(g, d); d = this._buildDiv(d, "", "ui-bcf-topic"); var l = a.getMarkup(), e = l.getTopicTitle(), f = this._getId(); this._topicTitleGuidMap.set(g, f); d.appendChild(this._buildEditDiv(f, e, "Topic Title", function (d) { b._setTopicTitle(a, d) }, "title")); e = a.getViewpoint("viewpoint.bcfv"); null !== e && (f = this._getId(), this._viewpointIdMap.set(f,
                        e), f = this._buildDiv(f, "", "viewpoint"), e = a.getSnapshot(e.getFilename()), null !== e && f.appendChild(this._buildImage(e.getUrl())), d.appendChild(f)); e = this._buildDiv(this._getId(), ""); e.appendChild(this._buildTopicData("Author", l.getTopicCreationAuthor())); e.appendChild(this._buildTopicData("Description", l.getTopicDescription())); e.appendChild(this._buildTopicData("Created", this._formatDate(l.getTopicCreationDate()))); e.appendChild(this._buildTopicData("Type", l.getTopicType())); e.appendChild(this._buildTopicData("Priority",
                            l.getTopicPriority())); e.appendChild(this._buildTopicData("Stage", l.getTopicStage())); e.appendChild(this._buildTopicData("TopicId", a.getTopicId())); d.appendChild(e); l = this._getId(); var h = this._buildDiv(l, ""); this._topicCommentsGuidMap.set(g, l); a.getMarkup().getComments().forEach(function (d) { h.appendChild(b._buildComment(a, d)) }); d.appendChild(h); g = this._buildAddComment(a); g.appendChild(this._buildDeleteTopic(c, a)); d.appendChild(g); return d
                }; f.prototype._buildSelectOption = function (c, a) {
                    var b = document.createElement("option");
                    b.id = this._getSelectId(a); b.value = a; b.textContent = c; return b
                }; f.prototype._appendBCF = function (c, a) {
                    var b = this, d = this._viewer.BCFManager.getBCFData(c); if (null !== d) {
                        var g = this._getId(); this._showBCFData(g); this._bcfIdMap.set(g, c); this._bcfDataList.appendChild(this._buildSelectOption(c + ". " + a, g)); this._bcfDataList.value = g; var e = this._buildBCFNode(g); this._listRoot.appendChild(e); e.appendChild(this._buildRemoveBCF(d.getId())); e.appendChild(this._buildAddTopic(d)); d.getTopics().forEach(function (a) {
                            a = b._buildTopic(d,
                                a); e.appendChild(a)
                        }); this._refreshScroll()
                    }
                }; f.prototype._getBcfHtmlId = function (c) { var a = null; this._bcfIdMap.forEach(function (b, d) { c === b && (a = d) }); return a }; f.prototype._removeBCF = function (c) { c = this._getBcfHtmlId(c); null !== c && (this._bcfIdMap.delete(c), $("#" + c).remove(), $("#" + this._getSelectId(c)).remove(), c = this._bcfDataList.value, 0 < c.length && this._showBCFData(c)) }; f.prototype._getViewpointFromComment = function (c, a) {
                    a = a.getViewpointGuid(); return null !== a && (a = c.getMarkup().getViewpoints().get(a), void 0 !==
                        a && (a = a.getViewpointFilename(), null !== a)) ? c.getViewpoint(a) : null
                }; f.prototype._getId = function () { return "bcf_" + ++this._idCount }; f.prototype._getSelectId = function (c) { return "select_" + c }; f.prototype._onTreeSelectItem = function (c) { return __awaiter(this, void 0, void 0, function () { var a; return __generator(this, function (b) { switch (b.label) { case 0: return a = this._getViewpoint(c), null === a ? [3, 2] : [4, a.activate()]; case 1: b.sent(), b.label = 2; case 2: return [2] } }) }) }; f.prototype._getViewpoint = function (c) {
                    return this._viewpointIdMap.get(c) ||
                        null
                }; return f
        }(); f.BCFTree = m
    })(e.Ui || (e.Ui = {}))
})(Communicator || (Communicator = {}));
(function (e) {
    (function (f) {
        var m = function (h) {
            function c(a, b, d) { a = h.call(this, a, b, d) || this; a._annotationViewsString = "annotationViews"; a._annotationViewsLabel = "Annotation Views"; a._viewFolderCreated = !1; a._lastSelectedhtmlId = null; a._cadViewIds = new Set; a._tree.setCreateVisibilityItems(!1); a._initEvents(); return a } __extends(c, h); c.prototype._initEvents = function () {
                var a = this; this._viewer.setCallbacks({
                    firstModelLoaded: function (b, d) {
                        return __awaiter(a, void 0, void 0, function () {
                            return __generator(this, function (a) {
                                d ||
                                    this._updateCadViews(); return [2]
                            })
                        })
                    }, subtreeLoaded: function () { a._updateCadViews() }, modelSwitched: function () { a._modelSwitched() }, sheetActivated: function () { if (a._viewer.model.isDrawing()) { if (null != a._lastSelectedhtmlId) { var b = document.getElementById(a._lastSelectedhtmlId); null !== b && b.classList.remove("selected") } a.hideTab() } }, sheetDeactivated: function () { a._viewer.model.isDrawing() && a.showTab() }, cadViewCreated: function (b, d) { var c = new Map; c.set(b, d); a._addCadViews(c) }
                }); this._tree.registerCallback("selectItem",
                    function (b) { return __awaiter(a, void 0, void 0, function () { return __generator(this, function (a) { switch (a.label) { case 0: return [4, this._onTreeSelectItem(b)]; case 1: return a.sent(), [2] } }) }) })
            }; c.prototype._modelSwitched = function () { this._tree.clear(); this._cadViewIds.clear(); this._viewFolderCreated = !1; this._updateCadViews() }; c.prototype._updateCadViews = function () { var a = this._viewer.model.getCadViewMap(); this._addCadViews(a) }; c.prototype._addCadViews = function (a) {
                this._createCadViewNodes(a); 0 >= a.size ? this.hideTab() :
                    this.showTab(); this._tree.expandInitialNodes(this._internalId); this._tree.expandInitialNodes(this._internalId + this._annotationViewsString)
            }; c.prototype._createCadViewNodes = function (a) {
                var b = this; if (0 !== a.size) {
                    this._viewFolderCreated || (this._tree.appendTopLevelElement("Views", this._internalId, "viewfolder", !0), this._viewFolderCreated = !0); var d = this._viewer.model, c = !0 === this._viewer.getCreationParameters().enableShatteredModelUiViews; a.forEach(function (a, g) {
                        b._cadViewIds.has(g) || !c && d.isWithinExternalModel(g) ||
                            d.isAnnotationView(g) || (b._cadViewIds.add(g), b._tree.addChild(a, b._cadViewId(g), b._internalId, "view", !1, f.Desktop.Tree.CadView))
                    }); a.forEach(function (a, g) { b._cadViewIds.has(g) || !c && d.isWithinExternalModel(g) || !d.isAnnotationView(g) || null === document.getElementById(b._internalId + b._annotationViewsString) && b._tree.addChild(b._annotationViewsLabel, b._internalId + b._annotationViewsString, b._internalId, "viewfolder", !0, f.Desktop.Tree.CadView) }); a.forEach(function (a, g) {
                        b._cadViewIds.has(g) || !c && d.isWithinExternalModel(g) ||
                            !d.isAnnotationView(g) || (b._cadViewIds.add(g), a = a.split("# Annotation View")[0], b._tree.addChild(a, b._cadViewId(g), b._internalId + b._annotationViewsString, "view", !1, f.Desktop.Tree.CadView))
                    })
                }
            }; c.prototype._onTreeSelectItem = function (a) {
                return __awaiter(this, void 0, void 0, function () {
                    var b, d, c; return __generator(this, function (g) {
                        switch (g.label) {
                            case 0: b = this._splitHtmlId(a); if (b[0] !== this._internalId) return [3, 3]; d = this._viewer.operatorManager.getOperator(e.OperatorId.Handle); return [4, d.removeHandles()];
                            case 1: return g.sent(), [4, this._viewer.model.activateCadView(parseInt(b[1], 10))]; case 2: g.sent(), g.label = 3; case 3: return c = document.getElementById(a), null !== c && ("LI" === c.tagName && a !== this._internalId && a !== this._internalId + this._annotationViewsString ? (c.classList.add("selected"), this._lastSelectedhtmlId = a) : c.classList.remove("selected")), [2]
                        }
                    })
                })
            }; c.prototype._cadViewId = function (a) { return this._internalId + f.ViewTree.separator + a }; return c
        }(f.ViewTree); f.CadViewTree = m; f.CADViewTree = m
    })(e.Ui || (e.Ui = {}))
})(Communicator ||
    (Communicator = {}));
(function (e) {
    (function (f) {
        var m = function (h) {
            function c(a, b, d) { a = h.call(this, a, b, d) || this; a._tree.setCreateVisibilityItems(!1); a._initEvents(); return a } __extends(c, h); c.prototype._initEvents = function () {
                var a = this; this._viewer.setCallbacks({
                    firstModelLoaded: function () { return __awaiter(a, void 0, void 0, function () { return __generator(this, function (a) { switch (a.label) { case 0: return [4, this._onNewModel()]; case 1: return a.sent(), [2] } }) }) }, modelSwitched: function () {
                        return __awaiter(a, void 0, void 0, function () {
                            return __generator(this,
                                function (a) { switch (a.label) { case 0: return [4, this._modelSwitched()]; case 1: return a.sent(), [2] } })
                        })
                    }, configurationActivated: function (b) { a._tree.selectItem(a._configurationsId(b), !1) }
                }); this._tree.registerCallback("selectItem", function (b) { return __awaiter(a, void 0, void 0, function () { return __generator(this, function (a) { switch (a.label) { case 0: return [4, this._onTreeSelectItem(b)]; case 1: return a.sent(), [2] } }) }) })
            }; c.prototype._modelSwitched = function () { return this._onNewModel() }; c.prototype._onNewModel = function () {
                return __awaiter(this,
                    void 0, void 0, function () { var a; return __generator(this, function (b) { switch (b.label) { case 0: return a = this._viewer.model, [4, a.cadConfigurationsEnabled()]; case 1: if (b.sent()) return [3, 4]; if (!this._createConfigurationNodes()) return [3, 3]; this.showTab(); return [4, a.activateDefaultCadConfiguration()]; case 2: return b.sent(), [3, 4]; case 3: this.hideTab(), b.label = 4; case 4: return [2] } }) })
            }; c.prototype._createConfigurationNodes = function () {
                var a = this._viewer.model.getCadConfigurations(), b = Object.keys(a); if (0 < b.length) {
                    this._tree.appendTopLevelElement("Configurations",
                        this._internalId, "configurations", !0); for (var d = 0; d < b.length; d++) { var c = parseInt(b[d], 10); this._tree.addChild(a[c], this._configurationsId(c), this._internalId, "view", !1, f.Desktop.Tree.Configurations) } this._tree.expandInitialNodes(this._internalId); return !0
                } return !1
            }; c.prototype._onTreeSelectItem = function (a) {
                return __awaiter(this, void 0, void 0, function () {
                    var b; return __generator(this, function (d) {
                        switch (d.label) {
                            case 0: return b = this._splitHtmlId(a), this._internalId !== b[0] ? [3, 3] : [4, this._viewer.operatorManager.getOperator(e.OperatorId.Handle).removeHandles()];
                            case 1: return d.sent(), [4, this._viewer.model.activateCadConfiguration(parseInt(b[1], 10))]; case 2: d.sent(), d.label = 3; case 3: return [2]
                        }
                    })
                })
            }; c.prototype._configurationsId = function (a) { return this._internalId + f.ViewTree.separator + a }; return c
        }(f.ViewTree); f.ConfigurationsTree = m
    })(e.Ui || (e.Ui = {}))
})(Communicator || (Communicator = {}));
(function (e) {
    (function (e) {
        var f = function (f) {
            function c(a, b, d) { a = f.call(this, a, b, d) || this; a._tree.setCreateVisibilityItems(!1); a._initEvents(); return a } __extends(c, f); c.prototype._initEvents = function () {
                var a = this, b = function () { a._onNewModel() }; this._viewer.setCallbacks({ assemblyTreeReady: b, firstModelLoaded: b, modelSwitched: b, subtreeLoaded: b }); this._tree.registerCallback("selectItem", function (d) {
                    return __awaiter(a, void 0, void 0, function () {
                        return __generator(this, function (a) {
                            switch (a.label) {
                                case 0: return [4,
                                    this._onTreeSelectItem(d)]; case 1: return a.sent(), [2]
                            }
                        })
                    })
                })
            }; c.prototype._onTreeSelectItem = function (a) { return __awaiter(this, void 0, void 0, function () { var b, d; return __generator(this, function (c) { switch (c.label) { case 0: b = document.getElementById(a); if (null === b) return [2]; d = this._splitHtmlId(a); return d[0] !== this._internalId ? [3, 2] : [4, this._setFilter(parseInt(d[1], 10))]; case 1: c.sent(), c.label = 2; case 2: return [2] } }) }) }; c.prototype._setFilter = function (a) {
                return __awaiter(this, void 0, void 0, function () {
                    var b,
                        d, c; return __generator(this, function (g) {
                            switch (g.label) {
                                case 0: return [4, this._viewer.model]; case 1: b = g.sent(); d = b.getNodesFromFiltersId([a]); if (null === d) return [3, 10]; c = []; d.nodeIds.forEach(function (a) { c.push(a) }); return [4, this._viewer.pauseRendering()]; case 2: return g.sent(), [4, b.reset()]; case 3: return g.sent(), d.isInclusive ? [4, b.setNodesVisibility([b.getAbsoluteRootNode()], !1)] : [3, 6]; case 4: return g.sent(), [4, b.setNodesVisibility(c, !0)]; case 5: return g.sent(), [3, 8]; case 6: return [4, b.setNodesVisibility(c,
                                    !1)]; case 7: g.sent(), g.label = 8; case 8: return [4, this._viewer.resumeRendering()]; case 9: g.sent(), g.label = 10; case 10: return [2]
                            }
                        })
                })
            }; c.prototype._onNewModel = function () { var a = this; this._tree.clear(); var b = this._viewer.model.getFilters(); b.forEach(function (d, b) { a._tree.appendTopLevelElement(d, a.getFilterId(b), "assembly", !1) }); 0 < b.size ? this.showTab() : this.hideTab() }; c.prototype.getFilterId = function (a) { return this._internalId + e.ViewTree.separator + a }; return c
        }(e.ViewTree); e.FiltersTree = f
    })(e.Ui || (e.Ui = {}))
})(Communicator ||
    (Communicator = {}));
(function (e) {
    (function (f) {
        var m = function (h) {
            function c(a, b, d) { a = h.call(this, a, b, d) || this; a._layerNames = []; a._layerParts = new Set; a._initEvents(); return a } __extends(c, h); c.prototype._initEvents = function () {
                var a = this, b = function () { a._onNewModel() }; this._viewer.setCallbacks({ firstModelLoaded: b, modelSwitched: b, subtreeLoaded: b, selectionArray: function (d) { a._tree.updateSelection(d) }, visibilityChanged: function () { a._tree.updateLayersVisibilityIcons() } }); this._tree.registerCallback("selectItem", function (d, b) {
                    a._onTreeSelectItem(d,
                        b)
                }); this._tree.registerCallback("loadChildren", function (d) { a._loadNodeChildren(d) })
            }; c.prototype._onTreeSelectItem = function (a, b) { void 0 === b && (b = e.SelectionMode.Set); if (null !== document.getElementById(a)) switch (this._splitHtmlId(a)[0]) { case "layerpart": this._selectLayerPart(a, b); break; case "layer": this._selectLayer(a, b) } }; c.prototype._selectLayerPart = function (a, b) { a = c.getPartId(a); null !== a && this._viewer.selectPart(a, b) }; c.prototype._selectLayer = function (a, b) {
                a = c.getLayerName(a); null !== a && this._viewer.selectionManager.selectLayer(a,
                    b)
            }; c.prototype._onNewModel = function () { var a = this, b = this._viewer.model; this._tree.clear(); this._layerParts.clear(); this._layerNames = b.getUniqueLayerNames().sort(); this._layerNames.filter(function (d) { var g = c._createId(c.layerPrefix); c._layerIdMap.set(g, d); c._idLayerMap.set(d, g); var e = b.getLayerIdsFromName(d); return null !== e && 0 < e.length ? (a._tree.appendTopLevelElement(d, g, "assembly", !0, !1), !0) : !1 }); 0 < this._layerNames.length ? this.showTab() : this.hideTab() }; c.prototype._loadNodeChildren = function (a) {
                var b =
                    c.getLayerName(a); null !== b && (a = c.getLayerId(b), null !== a && (b = this._viewer.model.getNodesFromLayerName(b, !0), null !== b && (b.length < this._maxNodeChildrenSize ? this._addLayerParts(a, b) : this._addLayerPartContainers(a, b))))
            }; c.prototype._addLayerParts = function (a, b) {
                var d = this, g = this._viewer.model, l = g.isDrawing(); b.forEach(function (b) {
                    var k = g.getNodeType(b); l || k !== e.NodeType.BodyInstance || (k = g.getNodeParent(b), null !== k && (b = k)); k = g.getNodeName(b); var h = c._createId(c.layerPartPrefix); c._layerPartIdMap.set(h,
                        b); c._idLayerPartMap.set(b, h); d._layerParts.has(b) || (d._layerParts.add(b), d._tree.addChild(k, h, a, "assembly", !1, f.Desktop.Tree.Layers))
                })
            }; c.prototype._addLayerPartContainers = function (a, b) {
                for (var d = Math.ceil(b.length / this._maxNodeChildrenSize), g = 0; g < d; ++g) {
                    var e = g * this._maxNodeChildrenSize, k = Math.min(e + this._maxNodeChildrenSize, b.length), h = "Child Nodes " + e + " - " + k, m = c._createId(c.layerPartContainerPrefix); this._tree.addChild(h, m, a, "container", !0, f.Desktop.Tree.Layers); this._addLayerParts(m, b.slice(e,
                        k))
                }
            }; c._createId = function (a) { return "" + a + c.separator + ++this._idCount }; c.getLayerName = function (a) { return this._layerIdMap.get(a) || null }; c.getLayerId = function (a) { return this._idLayerMap.get(a) || null }; c.getPartId = function (a) { return this._layerPartIdMap.get(a) || null }; c.getLayerPartId = function (a) { return this._idLayerPartMap.get(a) || null }; c.layerPrefix = "layer"; c.layerPartPrefix = "layerpart"; c.layerPartContainerPrefix = "layerpartcontainer"; c._idCount = 0; c._layerIdMap = new Map; c._idLayerMap = new Map; c._layerPartIdMap =
                new Map; c._idLayerPartMap = new Map; return c
        }(f.ViewTree); f.LayersTree = m
    })(e.Ui || (e.Ui = {}))
})(Communicator || (Communicator = {}));
(function (e) {
    (function (f) {
        var m = function (h) {
            function c(a, b, d) { a = h.call(this, a, b, d) || this; a._lastModelRoot = null; a._startedWithoutModelStructure = !1; a._partSelectionEnabled = !0; a._currentSheetId = null; a._measurementFolderId = "measurementitems"; a._updateVisibilityStateTimer = new e.Util.Timer; a._updateSelectionTimer = new e.Util.Timer; a._initEvents(); return a } __extends(c, h); c.prototype.freezeExpansion = function (a) { this._tree.freezeExpansion(a) }; c.prototype.modelStructurePresent = function () {
                var a = this._viewer.model;
                return "No product structure" !== a.getNodeName(a.getAbsoluteRootNode())
            }; c.prototype.enablePartSelection = function (a) { this._partSelectionEnabled = a }; c.prototype._initEvents = function () {
                var a = this, b = function () { a._reset() }; this._viewer.setCallbacks({
                    assemblyTreeReady: function () { a._onNewModel() }, firstModelLoaded: b, hwfParseComplete: b, modelSwitched: b, selectionArray: function (d) { a._onPartSelection(d) }, incrementalSelectionBatchEnd: function () { a._updateSelectionTimer.set(50, function () { a.updateSelection(null) }) },
                    visibilityChanged: function () { a._tree.getVisibilityControl().updateModelTreeVisibilityState() }, viewCreated: function (d) { a._onNewView(d) }, viewLoaded: function (d) { a._onNewView(d) }, subtreeLoaded: function (d) { a._onSubtreeLoaded(d); a._tree.getVisibilityControl().updateModelTreeVisibilityState() }, subtreeDeleted: function (d) { a._onSubtreeDeleted(d) }, modelSwitchStart: function () { a._tree.clear() }, measurementCreated: function (d) { a._onNewMeasurement(d) }, measurementLoaded: function (d) { a._onNewMeasurement(d) }, measurementDeleted: function (d) { a._onDeleteMeasurement(d) },
                    measurementShown: function () { a._tree.updateMeasurementVisibilityIcons() }, measurementHidden: function () { a._tree.updateMeasurementVisibilityIcons() }, sheetActivated: function (d) { d !== a._currentSheetId && (a._currentSheetId = d, a._refreshModelTree(d)) }, sheetDeactivated: function () { a._reset() }, configurationActivated: function (d) { a._refreshModelTree(d) }
                }); this._tree.registerCallback("loadChildren", function (d) { a._loadNodeChildren(d) }); this._tree.registerCallback("selectItem", function (d, b) {
                    return __awaiter(a, void 0,
                        void 0, function () { return __generator(this, function (a) { switch (a.label) { case 0: return [4, this._onTreeSelectItem(d, b)]; case 1: return a.sent(), [2] } }) })
                })
            }; c.prototype._refreshModelTree = function (a) {
                this._tree.clear(); var b = this._viewer.model, d = b.getAbsoluteRootNode(), c = b.getNodeName(d); this._tree.appendTopLevelElement(c, this._partId(d), "modelroot", 0 < b.getNodeChildren(d).length, !1, !0); this._tree.addChild(b.getNodeName(a), this._partId(a), this._partId(d), "part", !0, f.Desktop.Tree.Model); this._tree.expandInitialNodes(this._partId(d));
                this._refreshMarkupViews()
            }; c.prototype._reset = function () { this._tree.clear(); this._currentSheetId = null; this._onNewModel() }; c.prototype._onNewModel = function () {
                var a = this._viewer.model, b = a.getAbsoluteRootNode(), d = a.getNodeName(b); this.showTab(); this._startedWithoutModelStructure = !this.modelStructurePresent(); this._lastModelRoot = this._tree.appendTopLevelElement(d, this._partId(b), "modelroot", 0 < a.getNodeChildren(b).length); this._viewer.sheetManager.isDrawingSheetActive() || this._tree.expandInitialNodes(this._partId(b));
                this._refreshMarkupViews()
            }; c.prototype._createMarkupViewFolderIfNecessary = function () { 0 === $("#markupviews").length && this._tree.appendTopLevelElement("Markup Views", "markupviews", "viewfolder", !1) }; c.prototype._createMeasurementFolderIfNecessary = function () { 0 === $("#" + this._measurementFolderId).length && this._tree.appendTopLevelElement("Measurements", this._measurementFolderId, "measurement", !1) }; c.prototype._parentChildrenLoaded = function (a) { a = this._partId(a); return this._tree.childrenAreLoaded(a) }; c.prototype._onSubtreeLoaded =
                function (a) {
                    for (var b = this._viewer.model, d = 0; d < a.length; d++) {
                        var c = a[d]; if (!b.getOutOfHierarchy(c)) {
                            var e = b.getNodeParent(c); if (null === e) console.assert(null !== this._lastModelRoot), this._lastModelRoot = this._tree._insertNodeAfter(b.getNodeName(c), this._partId(c), "modelroot", this._lastModelRoot, !0); else {
                                var k = e; do {
                                    if (this._parentChildrenLoaded(e)) {
                                        k === e && this._tree.addChild(b.getNodeName(c), this._partId(c), this._partId(e), "assembly", !0, f.Desktop.Tree.Model); this._tree.preloadChildrenIfNecessary(this._partId(c));
                                        break
                                    } c = e; e = b.getNodeParent(c)
                                } while (null !== e)
                            }
                        }
                    } this._startedWithoutModelStructure && (a = this._tree.getRoot(), null !== a.firstChild && a.removeChild(a.firstChild), a = this._tree.getPartVisibilityRoot(), null !== a.firstChild && a.removeChild(a.firstChild))
                }; c.prototype._onSubtreeDeleted = function (a) { for (var b = 0; b < a.length; b++)this._tree.deleteNode(this._partId(a[b])) }; c.prototype._buildTreePathForNode = function (a) {
                    for (var b = this._viewer.model, d = [], c = b.getNodeParent(a); null !== c && (!this._viewer.sheetManager.isDrawingSheetActive() ||
                        null === this._currentSheetId || c !== this._currentSheetId && a !== this._currentSheetId);)d.push(c), c = b.getNodeParent(c); d.reverse(); return d
                }; c.prototype._expandCorrectContainerForNodeId = function (a) { var b = this._viewer.model, d = b.getNodeParent(a); null !== d && (a = b.getNodeChildren(d).indexOf(a), 0 <= a && this._tree.expandChildren(this._containerId(d, Math.floor(a / this._maxNodeChildrenSize)))) }; c.prototype._isInsideContainer = function (a) {
                    a = this._viewer.model.getNodeParent(a); if (null === a) return !1; a = this._containerId(a,
                        0); return 0 < $("#" + a).length
                }; c.prototype._expandPart = function (a) { if (this._viewer.model.isNodeLoaded(a)) { for (var b = 0, d = this._buildTreePathForNode(a); b < d.length; b++) { var c = d[b]; this._isInsideContainer(c) && this._expandCorrectContainerForNodeId(c); c = $("#" + this._partId(c)).attr("id"); void 0 !== c && this._tree.expandChildren(c) } this._isInsideContainer(a) && this._expandCorrectContainerForNodeId(a); this._tree.selectItem(this._partId(a), !1) } }; c.prototype._onPartSelection = function (a) {
                    if (this._partSelectionEnabled) {
                        for (var b =
                            0; b < a.length; b++) { var d = a[b].getSelection().getNodeId(); null === d ? this._tree.selectItem(null, !1) : this._expandPart(d) } 0 === a.length && this._tree.updateSelection(null)
                    }
                }; c.prototype._createContainerNodes = function (a, b) { for (var d = 1, c = this._maxNodeChildrenSize, e = 0; !(this._tree.addChild("Child Nodes " + d + " - " + Math.min(c, b.length), this._containerId(a, e), this._partId(a), "container", !0, f.Desktop.Tree.Model), d += this._maxNodeChildrenSize, ++e, c >= b.length);)c += this._maxNodeChildrenSize }; c.prototype._loadAssemblyNodeChildren =
                    function (a) { var b = this._viewer.model.getNodeChildren(a); b.length > this._maxNodeChildrenSize ? this._createContainerNodes(a, b) : (a = this._partId(a), this._processNodeChildren(b, a)) }; c.prototype._loadContainerChildren = function (a) { var b = this._viewer.model, d = this._splitHtmlId(a); d = this._splitContainerId(d[1]); b = b.getNodeChildren(parseInt(d[0], 10)); d = this._maxNodeChildrenSize * parseInt(d[1], 10); b = b.slice(d, d + this._maxNodeChildrenSize); this._processNodeChildren(b, a) }; c.prototype._processNodeChildren = function (a,
                        b) {
                        for (var d = this, c = this._viewer.model, l = null, k = 0; k < a.length; k++) {
                            var h = a[k], m = c.getNodeName(h), q = b, p = "assembly", n = !1; switch (c.getNodeType(h)) { case e.NodeType.Body: case e.NodeType.BodyInstance: p = "body"; break; case e.NodeType.Pmi: null === l && (l = this._tree.addChild("PMI", this._pmiPartId(h), b, "modelroot", !0, f.Desktop.Tree.Model)); null !== l && (q = l.id, p = "assembly"); break; case e.NodeType.DrawingSheet: this._viewer.sheetManager.isDrawingSheetActive() || (n = !0) }n || this._tree.addChild(m, this._partId(h), q, p, 0 < c.getNodeChildren(h).length,
                                f.Desktop.Tree.Model)
                        } 0 < a.length && this._updateVisibilityStateTimer.set(50, function () { d._tree.getVisibilityControl().updateModelTreeVisibilityState() })
                    }; c.prototype._loadNodeChildren = function (a) { var b = this._splitHtmlId(a); switch (b["" === b[0] ? 1 : 0]) { case "part": a = parseInt(b[1], 10); this._loadAssemblyNodeChildren(a); break; case "container": this._loadContainerChildren(a); break; case "markupviews": case "measurementitems": case "pmipart": break; default: console.assert(!1) } }; c.prototype._onTreeSelectItem = function (a,
                        b) {
                        void 0 === b && (b = e.SelectionMode.Set); return __awaiter(this, void 0, void 0, function () {
                            var d, c, e, f; return __generator(this, function (g) {
                                switch (g.label) {
                                    case 0: d = document.getElementById(a); if (null === d) return [2]; "LI" === d.tagName && "markupviews" !== a ? d.classList.add("selected") : (c = document.getElementById("markupviews"), null !== c && c.classList.remove("selected")); 0 === a.lastIndexOf("pmi", 0) && d.classList.contains("ui-modeltree-item") && d.classList.remove("selected"); e = this._splitHtmlId(a); f = e[0]; switch (f) {
                                        case "part": return [3,
                                            1]; case "markupview": return [3, 2]; case "container": return [3, 4]
                                    }return [3, 5]; case 1: return this._viewer.selectPart(parseInt(e[1], 10), b), [3, 5]; case 2: return [4, this._viewer.markupManager.activateMarkupViewWithPromise(e[1])]; case 3: return g.sent(), [3, 5]; case 4: return this._onContainerClick(e[1]), [3, 5]; case 5: return [2]
                                }
                            })
                        })
                    }; c.prototype._onContainerClick = function (a) { }; c.prototype._onNewView = function (a) { this._createMarkupViewFolderIfNecessary(); this._addMarkupView(a) }; c.prototype._refreshMarkupViews = function () {
                        for (var a =
                            this._viewer.markupManager, b = 0, d = a.getMarkupViewKeys(); b < d.length; b++) { var c = a.getMarkupView(d[b]); null !== c && this._addMarkupView(c) }
                    }; c.prototype._addMarkupView = function (a) { this._createMarkupViewFolderIfNecessary(); var b = this._viewId(a.getUniqueId()); this._tree.addChild(a.getName(), b, "markupviews", "view", !1, f.Desktop.Tree.Model) }; c.prototype._onNewMeasurement = function (a) {
                        this._createMeasurementFolderIfNecessary(); var b = this._measurementId(a._getId()); this._tree.addChild(a.getName(), b, this._measurementFolderId,
                            "measurement", !1, f.Desktop.Tree.Model); this._updateMeasurementsFolderVisibility(); this._tree.updateMeasurementVisibilityIcons()
                    }; c.prototype._onDeleteMeasurement = function (a) { a = this._measurementId(a._getId()); this._tree.deleteNode(a); this._tree.deleteNode("visibility" + c.separator + a); this._updateMeasurementsFolderVisibility() }; c.prototype._updateMeasurementsFolderVisibility = function () {
                        var a = this._viewer.measureManager.getAllMeasurements(), b = document.getElementById(this._measurementFolderId); null !==
                            b && (b.style.display = a.length ? "inherit" : "none"); b = document.getElementById("visibility" + c.separator + this._measurementFolderId); null !== b && (b.style.display = a.length ? "inherit" : "none")
                    }; c.prototype._measurementId = function (a) { return "measurement" + c.separator + a }; c.prototype._partId = function (a) { return "part" + c.separator + a }; c.prototype._pmiPartId = function (a) { return "pmipart" + c.separator + a }; c.prototype._viewId = function (a) { return "markupview" + c.separator + a }; c.prototype._containerId = function (a, b) {
                        console.assert(0 <=
                            b); return "container" + c.separator + a + "-" + b
                    }; c.prototype._splitContainerId = function (a) { return this._splitHtmlIdParts(a, "-") }; c.prototype.updateSelection = function (a) { this._tree.updateSelection(a) }; return c
        }(f.ViewTree); f.ModelTree = m
    })(e.Ui || (e.Ui = {}))
})(Communicator || (Communicator = {}));
(function (e) {
    (function (f) {
        var m = function (h) {
            function c(a, b, d) { a = h.call(this, a, b, d) || this; a._currentNodeId = 0; a._currentBimNodeId = "0"; a._tree.setCreateVisibilityItems(!1); a._initEvents(); return a } __extends(c, h); c.prototype._initEvents = function () {
                var a = this, b = function () { a._onNewModel() }; this._viewer.setCallbacks({
                    firstModelLoaded: b, modelSwitched: b, subtreeLoaded: b, selectionArray: function (d) {
                        return __awaiter(a, void 0, void 0, function () {
                            return __generator(this, function (a) {
                                switch (a.label) {
                                    case 0: return [4,
                                        this._onTreeSelectItem(d)]; case 1: return a.sent(), [2]
                                }
                            })
                        })
                    }
                }); this._tree.registerCallback("loadChildren", function (d) { a._loadNodeChildren(d) }); this._tree.registerCallback("selectItem", function (d, b) { return __awaiter(a, void 0, void 0, function () { return __generator(this, function (a) { switch (a.label) { case 0: return [4, this._onRelationshipsSelectItem(d, b)]; case 1: return a.sent(), [2] } }) }) })
            }; c.prototype._onTreeSelectItem = function (a) {
                return __awaiter(this, void 0, void 0, function () {
                    var b, d, c, e, f; return __generator(this,
                        function (g) { b = 0; for (d = a; b < d.length; b++)c = d[b], e = c.getSelection().getNodeId(), null === e ? this._tree.selectItem(null, !1) : (f = this._viewer.model.getBimIdIFromNode(e), null !== f && (this._currentNodeId = e, this._currentBimNodeId = f, this._update())); return [2] })
                })
            }; c.prototype._translateTypeRelationshipToString = function (a) {
                switch (a) {
                    case e.RelationshipType.ContainedInSpatialStructure: a = "ContainedInSpatialStructure"; break; case e.RelationshipType.FillsElement: a = "FillsElement"; break; case e.RelationshipType.Aggregates: a =
                        "Aggregates"; break; case e.RelationshipType.VoidsElement: a = "VoidsElement"; break; case e.RelationshipType.SpaceBoundary: a = "SpaceBoundary"; break; default: a = "Type Unknow"
                }return a
            }; c.prototype._translateStringTypeToRelationshipType = function (a) {
                switch (a) {
                    case "ContainedInSpatialStructure": a = e.RelationshipType.ContainedInSpatialStructure; break; case "FillsElement": a = e.RelationshipType.FillsElement; break; case "Aggregates": a = e.RelationshipType.Aggregates; break; case "VoidsElement": a = e.RelationshipType.VoidsElement;
                        break; case "SpaceBoundary": a = e.RelationshipType.SpaceBoundary; break; default: a = e.RelationshipType.Undefined
                }return a
            }; c._createIdNode = function (a) { return "" + c.RelationshipPartPrefix + c.separator + a + c.separator + ++this._idCount }; c._createIdType = function () { return "" + c.RelationshipTypePrefix + c.separator + ++this._idCount }; c.getRelationshipTypeName = function (a) { return this._idNameMap.get(a) || null }; c.getRelationshipTypeId = function (a) { return this._nameIdMap.get(a) || null }; c.prototype._onNewModel = function () {
                var a =
                    this._viewer.model; this._tree.clear(); this._currentNodeId = a.getAbsoluteRootNode(); this._currentBimNodeId = this._currentNodeId.toString()
            }; c.prototype._update = function () { this._tree.clear(); for (var a = 0, b = this._viewer.model.getRelationshipTypesFromBimId(this._currentNodeId, this._currentBimNodeId); a < b.length; a++) { var d = b[a], g = c._createIdType(); d = this._translateTypeRelationshipToString(d); c._idNameMap.set(g, d); c._nameIdMap.set(d, g); this._tree.appendTopLevelElement(d, g, "assembly", !0, !1) } }; c.prototype._loadNodeChildren =
                function (a) { a = c.getRelationshipTypeName(a); if (null !== a) { var b = c.getRelationshipTypeId(a); null !== b && this._addRelationships(b, a) } }; c.prototype._addRelationships = function (a, b) {
                    b = this._translateStringTypeToRelationshipType(b); for (var d = this._viewer.model.getBimIdConnectedElements(this._currentNodeId, this._currentBimNodeId, b), g = 0, e = d.relatings; g < e.length; g++) {
                        var k = e[g], h = k; b = "\ud83e\udc78 "; k = c._createIdNode(k); h = this._viewer.model.getBimInfoFromBimId(this._currentNodeId, h); c._idNameMap.set(k, h.name);
                        c._idNameMap.set(h.name, k); b = b.concat(h.name); this._tree.addChild(b, k, a, "assembly", !1, f.Desktop.Tree.Relationships, h.connected)
                    } g = 0; for (d = d.relateds; g < d.length; g++)h = k = d[g], b = "\ud83e\udc7a ", k = c._createIdNode(k), h = this._viewer.model.getBimInfoFromBimId(this._currentNodeId, h), c._idNameMap.set(k, h.name), c._idNameMap.set(h.name, k), b = b.concat(h.name), this._tree.addChild(b, k, a, "assembly", !1, f.Desktop.Tree.Relationships, h.connected)
                }; c.prototype._onRelationshipsSelectItem = function (a, b) {
                    void 0 === b && (b = e.SelectionMode.Set);
                    return __awaiter(this, void 0, void 0, function () { var d, g, e, f; return __generator(this, function (l) { d = document.getElementById(a); if (null === d) return [2]; g = this._splitHtmlId(a); if (0 < g.length) switch (e = this._splitHtmlIdParts(g[0], c.separator), e[0]) { case c.RelationshipPartPrefix: f = this._viewer.model.getNodeIdFromBimId(this._currentNodeId, e[1]), this._viewer.selectPart(f, b) }return [2] }) })
                }; c.RelationshipPrefix = "relships"; c.RelationshipTypePrefix = "relshipsType"; c.RelationshipPartPrefix = "relshipsPart"; c._idCount =
                    0; c._nameIdMap = new Map; c._idNameMap = new Map; return c
        }(f.ViewTree); f.RelationshipsTree = m
    })(e.Ui || (e.Ui = {}))
})(Communicator || (Communicator = {}));
(function (e) {
    (function (f) {
        var m = function (h) {
            function c(a, b, d) { a = h.call(this, a, b, d) || this; a._currentSheetId = null; a._3dSheetId = "" + a._internalId + f.ViewTree.separator + "3D"; a._tree.setCreateVisibilityItems(!1); a._initEvents(); return a } __extends(c, h); c.prototype._initEvents = function () {
                var a = this, b = function () { a._onNewModel() }; this._viewer.setCallbacks({ assemblyTreeReady: b, firstModelLoaded: b, modelSwitched: b, sheetActivated: function (d) { a._onSheetActivated(d) }, sheetDeactivated: function () { a._onSheetDeactivated() } });
                this._tree.registerCallback("selectItem", function (d) { return __awaiter(a, void 0, void 0, function () { return __generator(this, function (a) { switch (a.label) { case 0: return [4, this._onTreeSelectItem(d)]; case 1: return a.sent(), [2] } }) }) })
            }; c.prototype._setCurrentSheetId = function (a) { var b = $("#" + this._currentSheetId); null !== b && b.removeClass("selected-sheet"); b = $("#" + a); null !== b && b.addClass("selected-sheet"); this._currentSheetId = a }; c.prototype._onNewModel = function () {
                this._tree.clear(); if (this._viewer.model.isDrawing()) {
                    for (var a =
                        this._viewer.model, b = 0, d = this._viewer.sheetManager.getSheetIds(); b < d.length; b++) { var c = d[b], e = a.getNodeName(c); c = this._sheetTreeId(c); this._tree.appendTopLevelElement(e, c, "sheet", !1) } 0 < this._viewer.sheetManager.get3DNodes().length && (this._tree.appendTopLevelElement("3D Model", this._3dSheetId, "sheet", !1, !1, !1), this._currentSheetId = this._3dSheetId); this.showTab()
                } else this.hideTab()
            }; c.prototype._onSheetActivated = function (a) { this._setCurrentSheetId(this._sheetTreeId(a)) }; c.prototype._onSheetDeactivated =
                function () { this._setCurrentSheetId(this._3dSheetId) }; c.prototype._onTreeSelectItem = function (a) {
                    return __awaiter(this, void 0, void 0, function () {
                        var b, d; return __generator(this, function (c) {
                            switch (c.label) {
                                case 0: return a !== this._3dSheetId ? [3, 1] : [2, this._viewer.sheetManager.deactivateSheets()]; case 1: b = this._splitHtmlId(a); d = parseInt(b[1], 10); if (this._currentSheetId !== this._3dSheetId) return [3, 3]; this._viewer.model.setViewAxes(new e.Point3(0, 0, 1), new e.Point3(0, 1, 0)); return [4, this._viewer.setViewOrientation(e.ViewOrientation.Front,
                                    0)]; case 2: c.sent(), c.label = 3; case 3: return [2, this._viewer.sheetManager.setActiveSheetId(d)]
                            }
                        })
                    })
                }; c.prototype._sheetTreeId = function (a) { return "" + this._internalId + f.ViewTree.separator + a }; return c
        }(f.ViewTree); f.SheetsTree = m
    })(e.Ui || (e.Ui = {}))
})(Communicator || (Communicator = {}));
(function (e) {
    (function (f) {
        (function (m) {
            var h = function () { return function (a) { this.guid = this.nodeId = null; "number" === typeof a ? this.nodeId = a : this.guid = a } }(), c = function () {
                function a(a) { var d = this; this._fullHiddenParentIds = []; this._partialHiddenParentIds = []; this._assemblyTreeReadyOccurred = !1; this._viewer = a; var b = function () { d.updateModelTreeVisibilityState(); return Promise.resolve() }; this._viewer.setCallbacks({ _assemblyTreeReady: function () { d._assemblyTreeReadyOccurred = !0; return b() }, firstModelLoaded: b }) }
                a.prototype._clearStyles = function () { for (var a = 0, b = this._fullHiddenParentIds; a < b.length; a++) { var c = b[a]; this._removeVisibilityHiddenClass(c, "partHidden") } a = this._fullHiddenParentIds.length = 0; for (b = this._partialHiddenParentIds; a < b.length; a++)c = b[a], this._removeVisibilityHiddenClass(c, "partialHidden"); this._partialHiddenParentIds.length = 0 }; a.prototype._applyStyles = function () {
                    for (var a = 0, b = this._fullHiddenParentIds; a < b.length; a++) { var c = b[a]; this._addVisibilityHiddenClass(c, "partHidden") } a = 0; for (b = this._partialHiddenParentIds; a <
                        b.length; a++)c = b[a], this._addVisibilityHiddenClass(c, "partialHidden")
                }; a.prototype.updateModelTreeVisibilityState = function () { if (this._assemblyTreeReadyOccurred) { this._clearStyles(); for (var a = this._viewer.model, b = [a.getAbsoluteRootNode()], c = 0; c < b.length; c++) { var f = b[c], h = a.getBranchVisibility(f); if (h === e.BranchVisibility.Hidden) this._fullHiddenParentIds.push(f); else if (h === e.BranchVisibility.Mixed) for (this._partialHiddenParentIds.push(f), h = 0, f = a.getNodeChildren(f); h < f.length; h++)b.push(f[h]) } this._applyStyles() } };
                a.prototype._getVisibilityItem = function (a) { return $("#visibility" + f.ViewTree.separator + "part" + f.ViewTree.separator + a) }; a.prototype._addVisibilityHiddenClass = function (a, b) { this._getVisibilityItem(a).addClass(b) }; a.prototype._removeVisibilityHiddenClass = function (a, b) { this._getVisibilityItem(a).removeClass(b) }; return a
            }(); m.VisibilityControl = c; var a = function () {
                function a(a, b, f, k) {
                    this._lastItemId = null; this._selectedPartItems = []; this._futureHighlightIds = new Set; this._futureMixedIds = new Set; this._selectedItemsParentIds =
                        []; this._selectedLayers = []; this._mixedItemsLayer = new Set; this._selectedTypes = []; this._futureMixedTypesIds = []; this._mixedTypes = new Set; this._callbacks = new Map; this._childrenLoaded = new Set; this._loadedNodes = new Set; this._touchTimer = new e.Util.Timer; this._freezeExpansion = !1; this._scrollTimer = new e.Util.Timer; this._selectionLabelHighlightTimer = new e.Util.Timer; this._createVisibilityItems = !0; this._elementId = a; this._viewer = b; this._treeScroll = k; this._separator = f; this._visibilityControl = new c(b); this._partVisibilityRoot =
                            document.createElement("ul"); this._listRoot = document.createElement("ul"); this._init()
                } a.prototype.setCreateVisibilityItems = function (a) { this._createVisibilityItems = a }; a.prototype.getElementId = function () { return this._elementId }; a.prototype.getRoot = function () { return this._listRoot }; a.prototype.getPartVisibilityRoot = function () { return this._partVisibilityRoot }; a.prototype.getVisibilityControl = function () { return this._visibilityControl }; a.prototype.registerCallback = function (a, b) {
                    this._callbacks.has(a) ||
                        this._callbacks.set(a, []); this._callbacks.get(a).push(b)
                }; a.prototype._triggerCallback = function (a) { for (var d = [], b = 1; b < arguments.length; b++)d[b - 1] = arguments[b]; if (b = this._callbacks.get(a)) for (var c = 0; c < b.length; c++)b[c].apply(null, d) }; a.prototype.deleteNode = function (a) { a = "#" === a.charAt(0) ? a.slice(1) : a; jQuery("#" + a).remove(); jQuery("#visibility" + this._separator + a).remove() }; a.prototype._getTaggedId = function (a, b, c) {
                    return null !== c && "Annotation Views" === c && b === f.Desktop.Tree.CadView ? new h("Annotation Views") :
                        this._parseTaggedId(a)
                }; a.prototype.addChild = function (a, b, c, e, h, m, q) {
                    void 0 === q && (q = !0); var d = this._getTaggedId(b, m, a); if (null === d) return null; if (m === f.Desktop.Tree.Model && "container" !== e && null !== d.nodeId) { if (this._loadedNodes.has(d.nodeId)) return null; this._loadedNodes.add(d.nodeId) } null === a && (a = "unnamed"); this._addVisibilityToggleChild(b, c, e); c = jQuery("#" + c); c.children(".ui-modeltree-container").children(".ui-modeltree-expandNode").css("visibility", "visible"); var g = c.children("ul"), l = m = !1; null !==
                        d.nodeId && (m = this._futureHighlightIds.has(d.nodeId), l = this._futureMixedIds.has(d.nodeId), m && this._futureHighlightIds.delete(d.nodeId), l && this._futureMixedIds.delete(d.nodeId)); a = this._buildNode(a, b, e, h, m, l, q); 0 === g.length ? (e = document.createElement("ul"), e.classList.add("ui-modeltree-children"), c.append(e), e.appendChild(a)) : g.get(0).appendChild(a); m && (b = this._getListItem(b), null !== b && this._selectedPartItems.push(b)); this._triggerCallback("addChild"); return a
                }; a.prototype._addVisibilityToggleChild =
                    function (a, b, c) { b = jQuery("#visibility" + this._separator + b); b.children(".ui-modeltree-visibility-container").css("visibility", "visible"); var d = b.children("ul"); 0 === d.length ? (d = document.createElement("ul"), d.classList.add("ui-modeltree-visibility-children"), b.append(d)) : d = d.get(0); a = this._buildPartVisibilityNode(a, c); null !== a && d.appendChild(a) }; a.prototype._buildPartVisibilityNode = function (a, b) {
                        if (!this._createVisibilityItems) return null; var d = document.createElement("div"); d.classList.add("ui-modeltree-partVisibility-icon");
                        var c = document.createElement("li"); c.classList.add("ui-modeltree-item"); c.classList.add("visibility"); c.id = "" + f.ViewTree.visibilityPrefix + f.ViewTree.separator + a; c.appendChild(d); if ("measurement" !== b) { b = void 0; a = a.split(this._separator).pop(); void 0 !== a && (b = parseInt(a, 10)); if (void 0 === b || isNaN(b)) return c; a = this._viewer.model.getNodeType(b); if (a === e.NodeType.Pmi || a === e.NodeType.PmiBody) c.style.visibility = "hidden" } return c
                    }; a.prototype.freezeExpansion = function (a) { this._freezeExpansion = a }; a.prototype.updateSelection =
                        function (a) { null === a && (a = this._viewer.selectionManager.getResults()); a = a.map(function (a) { return a instanceof e.Event.NodeSelectionEvent && (a = a.getSelection(), !a.isNodeSelection()) ? (console.assert(!1), e.InvalidNodeId) : a.getNodeId() }); this._updateTreeSelectionHighlight(a); this._doUnfreezeSelection(a) }; a.prototype.collapseAllChildren = function (a) { this._freezeExpansion || ($("#" + a + " .ui-modeltree-children").hide(), $("#" + a + " .ui-modeltree-visibility-children").hide(), $("#" + a + " .expanded").removeClass("expanded")) };
                a.prototype._expandChildren = function (a, b) { var d = $("#" + a); this.preloadChildrenIfNecessary(a); if (!this._freezeExpansion || b) 0 < d.length && (d.children(".ui-modeltree-children").show(), d.children(".ui-modeltree-container").children(".ui-modeltree-expandNode").addClass("expanded")), this._expandVisibilityChildren(a) }; a.prototype.expandChildren = function (a) { this._expandChildren(a, !1) }; a.prototype._expandVisibilityChildren = function (a) {
                    a = $("#visibility" + (this._separator + a)); 0 < a.length && (a = a.children(".ui-modeltree-visibility-children"),
                        a.addClass("visible"), a.show())
                }; a.prototype.collapseChildren = function (a) { this._collapseVisibilityChildren(a); a = $("#" + a); 0 < a.length && a.children(".ui-modeltree-children").hide() }; a.prototype._collapseVisibilityChildren = function (a) { a = $("#visibility" + this._separator + a); 0 < a.length && a.children(".ui-modeltree-visibility-children").hide() }; a.prototype._buildNode = function (a, b, c, e, f, h, m) {
                    void 0 === f && (f = !1); void 0 === h && (h = !1); void 0 === m && (m = !0); var d = document.createElement("li"); d.classList.add("ui-modeltree-item");
                    f && d.classList.add("selected"); h && d.classList.add("mixed"); d.id = b; b = document.createElement("div"); b.classList.add("ui-modeltree-container"); b.style.whiteSpace = "nowrap"; f = document.createElement("div"); f.classList.add("ui-modeltree-expandNode"); e || (f.style.visibility = "hidden"); b.appendChild(f); e = document.createElement("div"); e.classList.add("ui-modeltree-icon"); e.classList.add(c); b.appendChild(e); c = document.createElement("div"); m ? c.classList.add("ui-modeltree-label") : c.classList.add("ui-modeltree-label_unaccess");
                    c.innerHTML = a; c.title = a; b.appendChild(c); a = document.createElement("div"); a.classList.add("ui-mixedselection-icon"); b.appendChild(a); d.appendChild(b); return d
                }; a.prototype.childrenAreLoaded = function (a) { return this._childrenLoaded.has(a) }; a.prototype.preloadChildrenIfNecessary = function (a) { null === a || this._childrenLoaded.has(a) || (this._triggerCallback("loadChildren", a), this._childrenLoaded.add(a)) }; a.prototype._processExpandClick = function (a) {
                    a = jQuery(a.target); var d = a.parents(".ui-modeltree-item").get(0).id;
                    a.hasClass("expanded") ? this._collapseListItem(d) : this._expandListItem(d)
                }; a.prototype._collapseListItem = function (a) { this.collapseChildren(a); $("#" + a).find(".ui-modeltree-expandNode").first().removeClass("expanded"); this._triggerCallback("collapse", a) }; a.prototype._expandListItem = function (a) { this.expandChildren(a); $("#" + a).find(".ui-modeltree-expandNode").first().addClass("expanded"); this._triggerCallback("expand", a) }; a.prototype.selectItem = function (a, b) { void 0 === b && (b = !0); this._doSelection(a, b) };
                a.prototype._getListItem = function (a) { a = $(this._listRoot).find("#" + a); return 0 < a.length ? a : null }; a.prototype._updateNonSelectionHighlight = function (a) { void 0 !== this._$lastNonSelectionItem && this._$lastNonSelectionItem.removeClass("selected"); a.addClass("selected"); this._$lastNonSelectionItem = a }; a.prototype._doUnfreezeSelection = function (a) {
                    for (var d = 0; d < a.length; d++) {
                        var b = a[d], c = this._viewer.model.getNodeParent(b), e = this._getListItem("part" + f.ViewTree.separator + b); null === e || e.hasClass("selected") ? null ===
                            e && this._futureHighlightIds.add(b) : (e.addClass("selected"), this._selectedPartItems.push(e)); null !== c && (e = f.LayersTree.getLayerPartId(c), null !== e && (e = this._getListItem(e), null === e || e.hasClass("selected") ? null === e && this._futureHighlightIds.add(c) : (e.addClass("selected"), this._selectedPartItems.push(e))), c = this._getListItem(f.TypesTree.getComponentPartId(c)), null === c || c.hasClass("selected") || (c.addClass("selected"), this._selectedPartItems.push(c))); b = this._getListItem(f.TypesTree.getComponentPartId(b));
                        null === b || b.hasClass("selected") || (b.addClass("selected"), this._selectedPartItems.push(b))
                    }
                }; a.prototype._doSelection = function (a, b) {
                    var d = this; void 0 === b && (b = !0); if (null !== a) {
                        var c = a.split(this._separator), g = "part" === c[0], h = "layerpart" === c[0], m = "typespart" === c[0], p = $("#" + a), n = !1; if (g || h || m) { p.addClass("selected"); c = 0; for (g = this._selectedPartItems; c < g.length; c++)if (h = g[c].get(0), void 0 !== h && a === h.id) { n = !0; break } n || this._selectedPartItems.push(p) } else if (0 !== a.lastIndexOf("sheet", 0)) {
                            if (0 === a.lastIndexOf("container",
                                0) || c[0] === f.LayersTree.layerPartContainerPrefix) return; this._updateNonSelectionHighlight(p)
                        } b && (this._lastItemId = a, n = n && 1 === this._selectedPartItems.length, this._triggerCallback("selectItem", a, "undefined" !== typeof key && (key.ctrl || key.command) || n ? e.SelectionMode.Toggle : e.SelectionMode.Set)); this._lastItemId === a || this._freezeExpansion || b || this._scrollToItem(p)
                    } this._lastItemId = a; this._selectionLabelHighlightTimer.set(30, function () {
                        var a = d._viewer.selectionManager.getResults().map(function (a) { return a.getNodeId() });
                        d._updateTreeSelectionHighlight(a)
                    })
                }; a.prototype._scrollToItem = function (d) { var b = this; this._scrollTimer.set(a._ScrollToItemDelayMs, function () { var a = d.offset(), c = $("#modelTreeContainer").innerHeight(); void 0 !== a && void 0 !== c && (a = a.top, 6 > a || a > c) && (b._scrollTimer.clear(), b._treeScroll && (b._treeScroll.refresh(), b._treeScroll.scrollToElement(d.get(0), f.DefaultUiTransitionDuration, !0, !0))) }) }; a.prototype._parseTaggedId = function (a) {
                    var d = this._parseUuid(a); if (null !== d) return new h(d); a = this._parseNodeId(a);
                    return null !== a ? new h(a) : null
                }; a.prototype._parseNodeId = function (a) { a = a.split(this._separator); if (2 > a.length || "measurement" === a[0] || "markupview" === a[0]) return null; a = a[a.length - 1]; return void 0 === a || (a = parseInt(a, 10), isNaN(a)) ? null : a }; a.prototype._parseUuid = function (a) { a = a.split(this._separator).pop(); return void 0 !== a && 36 === a.length ? a : null }; a.prototype._parseMeasurementId = function (a) { return a.split(this._separator).pop() }; a.prototype._parseVisibilityLayerName = function (a) {
                    a = a.split("" + f.ViewTree.visibilityPrefix +
                        f.ViewTree.separator); return 2 !== a.length ? null : f.LayersTree.getLayerName(a[1])
                }; a.prototype._parseVisibilityLayerNodeId = function (a) { a = a.split("" + f.ViewTree.visibilityPrefix + f.ViewTree.separator); return 2 !== a.length ? null : f.LayersTree.getPartId(a[1]) }; a.prototype._updateLayerTreeSelectionHighlight = function () {
                    for (var a = this, b = 0, c = this._selectedLayers; b < c.length; b++) { var e = c[b]; $("#" + f.LayersTree.getLayerId(e)).removeClass("selected") } this._mixedItemsLayer.forEach(function (b) {
                        b = a._viewer.model.getLayerName(b);
                        null !== b && $("#" + f.LayersTree.getLayerId(b)).addClass("mixed")
                    }); this._selectedLayers = this._viewer.selectionManager.getSelectedLayers(); b = 0; for (c = this._selectedLayers; b < c.length; b++)e = c[b], $("#" + f.LayersTree.getLayerId(e)).addClass("selected"), $("#" + f.LayersTree.getLayerId(e)).removeClass("mixed")
                }; a.prototype._addMixedTypeClass = function (a) {
                    a = this._viewer.model.getNodeGenericType(a); return null === a || this._mixedTypes.has(a) ? !1 : ($("#" + f.TypesTree.getGenericTypeId(a)).addClass("mixed"), this._mixedTypes.add(a),
                        !0)
                }; a.prototype._updateTypesTreeSelectionHighlight = function () {
                    for (var a = 0, b = this._selectedTypes; a < b.length; a++) { var c = b[a]; $("#" + f.TypesTree.getGenericTypeId(c)).removeClass("selected") } c = 0; for (a = this._futureMixedTypesIds; c < a.length; c++)b = a[c], this._addMixedTypeClass(b) || (b = this._viewer.model.getNodeParent(b), null !== b && this._addMixedTypeClass(b)); this._selectedTypes = this._viewer.selectionManager.getSelectedTypes(); a = 0; for (b = this._selectedTypes; a < b.length; a++)c = b[a], c = $("#" + f.TypesTree.getGenericTypeId(c)),
                        c.addClass("selected"), c.removeClass("mixed")
                }; a.prototype._updateTreeSelectionHighlight = function (a) {
                    var b = this; this._futureHighlightIds.forEach(function (d) { 0 <= a.indexOf(d) && b._futureHighlightIds.delete(d) }); for (var d = 0, c = this._selectedItemsParentIds; d < c.length; d++) { var h = c[d]; $("#part" + f.ViewTree.separator + h).removeClass("mixed") } this._selectedItemsParentIds.length = 0; this._futureMixedIds.clear(); this._mixedItemsLayer.forEach(function (a) { a = b._viewer.model.getLayerName(a); null !== a && $("#" + f.LayersTree.getLayerId(a)).removeClass("mixed") });
                    this._mixedItemsLayer.clear(); this._mixedTypes.forEach(function (a) { $("#" + f.TypesTree.getGenericTypeId(a)).removeClass("mixed") }); this._mixedTypes.clear(); this._futureMixedTypesIds = []; e.Util.filterInPlace(this._selectedPartItems, function (d) {
                        d = d.get(0); if (void 0 !== d) {
                            d = b._parseNodeId(d.id); if (null === d) return !1; if (0 > a.indexOf(d)) return $("#part" + f.ViewTree.separator + d).removeClass("selected"), $("#typespart" + f.ViewTree.separator + d).removeClass("selected"), (d = f.LayersTree.getLayerPartId(d)) && $("#" + d).removeClass("selected"),
                                !1
                        } return !0
                    }); for (d = 0; d < a.length; d++)h = a[d], this._updateParentIdList(h), this._updateMixedLayers(h), this._updateMixedTypes(h); d = 0; for (c = this._selectedItemsParentIds; d < c.length; d++) { h = c[d]; var m = this._getListItem("part" + f.ViewTree.separator + h); null === m || m.hasClass("mixed") ? this._futureMixedIds.add(h) : m.addClass("mixed") } this._updateLayerTreeSelectionHighlight(); this._updateTypesTreeSelectionHighlight()
                }; a.prototype._updateParentIdList = function (a) {
                    var b = this._viewer.model; if (b.isNodeLoaded(a)) for (a =
                        b.getNodeParent(a); null !== a && -1 === this._selectedItemsParentIds.indexOf(a);)this._selectedItemsParentIds.push(a), a = b.getNodeParent(a)
                }; a.prototype._updateMixedLayers = function (a) { a = this._viewer.model.getNodeLayerId(a); null !== a && this._mixedItemsLayer.add(a) }; a.prototype._updateMixedTypes = function (a) { this._futureMixedTypesIds.push(a) }; a.prototype._processLabelContext = function (a, b) {
                    var d = jQuery(a.target).closest(".ui-modeltree-item"); b || (b = new e.Point2(a.clientX, a.clientY)); a = d.get(0).id; this._triggerCallback("context",
                        a, b)
                }; a.prototype._processLabelClick = function (a) { a = jQuery(a.target).closest(".ui-modeltree-item"); this._doSelection(a.get(0).id, !0) }; a.prototype.appendTopLevelElement = function (a, b, c, e, f, h) {
                    void 0 === f && (f = !0); void 0 === h && (h = !1); null === a && (a = "unnamed"); a = this._buildNode(a, b, c, e); "part" === b.substring(0, 4) && this._listRoot.firstChild ? this._listRoot.insertBefore(a, this._listRoot.firstChild) : this._listRoot.appendChild(a); c = this._buildPartVisibilityNode(b, c); null !== c && this._partVisibilityRoot.appendChild(c);
                    f && this.preloadChildrenIfNecessary(b); h && this._childrenLoaded.add(b); return a
                }; a.prototype.insertNodeAfter = function (a, b, c, e, f) { return this._insertNodeAfter(a, b, c, e, f) }; a.prototype._insertNodeAfter = function (a, b, c, f, h) { null === a && (a = "unnamed"); if (null === f.parentNode) throw new e.CommunicatorError("element.parentNode is null"); a = this._buildNode(a, b, c, h); f.nextSibling ? f.parentNode.insertBefore(a, f.nextSibling) : f.parentNode.appendChild(a); this.preloadChildrenIfNecessary(b); return a }; a.prototype.clear = function () {
                    for (; this._listRoot.firstChild;)this._listRoot.removeChild(this._listRoot.firstChild);
                    for (; this._partVisibilityRoot.firstChild;)this._partVisibilityRoot.removeChild(this._partVisibilityRoot.firstChild); this._childrenLoaded.clear(); this._loadedNodes.clear()
                }; a.prototype.expandInitialNodes = function (a) { for (var b = []; 1 >= b.length;) { b = this._getChildItemsFromModelTreeItem($("#" + a)); if (0 === b.length) break; this._expandChildren(a, !0); a = b[0].id; this.preloadChildrenIfNecessary(a) } }; a.prototype._processVisibilityClick = function (a) {
                    return __awaiter(this, void 0, void 0, function () {
                        var b; return __generator(this,
                            function (d) { b = a.split(this._separator)[1]; switch (b) { case "part": return [2, this._processPartVisibilityClick(a)]; case "measurement": return [2, this._processMeasurementVisibilityClick(a)]; case "layer": return [2, this._processLayerVisibilityClick(a)]; case "layerpart": return [2, this._processLayerPartVisibilityClick(a)]; case "types": return [2, this._processTypesVisibilityClick(a)]; case "typespart": return [2, this._processTypesPartVisibilityClick(a)] }return [2] })
                    })
                }; a.prototype._processPartVisibilityClick = function (a) {
                    return __awaiter(this,
                        void 0, void 0, function () { var b; return __generator(this, function (d) { switch (d.label) { case 0: return b = this._parseNodeId(a), null === b ? [3, 2] : [4, this._processPartVisibility(b)]; case 1: d.sent(), d.label = 2; case 2: return [2] } }) })
                }; a.prototype._processPartVisibility = function (a) {
                    return __awaiter(this, void 0, void 0, function () {
                        var b, d, c; return __generator(this, function (f) {
                            switch (f.label) {
                                case 0: return b = this._viewer.model, d = b.getNodeVisibility(a), c = b.hasEffectiveGenericType(a, e.StaticGenericType.IfcSpace), [4, b.setNodesVisibility([a],
                                    !d, c ? !1 : null)]; case 1: return f.sent(), [2]
                            }
                        })
                    })
                }; a.prototype._processMeasurementVisibilityClick = function (a) { var b = this._parseMeasurementId(a); a = this._viewer.measureManager.getAllMeasurements(); if ("measurementitems" === b) { var d = !0; for (b = 0; b < a.length; b++) { var c = a[b]; if (c.getVisibility()) { d = !1; break } } for (b = 0; b < a.length; b++)c = a[b], c.setVisibility(d) } else for (var e = 0; e < a.length; e++)c = a[e], b === c._getId() && (d = c.getVisibility(), c.setVisibility(!d)) }; a.prototype._processTypesVisibilityClick = function (a) {
                    return __awaiter(this,
                        void 0, void 0, function () { var b; return __generator(this, function (c) { switch (c.label) { case 0: return b = a.split(this._separator).pop(), void 0 === b ? [2] : [4, this._processTypesVisibility(b)]; case 1: return c.sent(), [2] } }) })
                }; a.prototype._processTypesVisibility = function (a) {
                    return __awaiter(this, void 0, void 0, function () {
                        var b, c, d, f; return __generator(this, function (g) {
                            switch (g.label) {
                                case 0: b = this._viewer.model; c = !1; d = b.getNodesByGenericType(a); if (null === d) return [3, 2]; f = []; d.forEach(function (a) {
                                    c = c || b.getNodeVisibility(a);
                                    f.push(a)
                                }); return [4, b.setNodesVisibility(f, !c, a === e.StaticGenericType.IfcSpace ? !1 : null)]; case 1: g.sent(), this.updateTypesVisibilityIcons(), g.label = 2; case 2: return [2]
                            }
                        })
                    })
                }; a.prototype._processTypesPartVisibilityClick = function (a) { return __awaiter(this, void 0, void 0, function () { var b; return __generator(this, function (c) { switch (c.label) { case 0: return b = this._parseNodeId(a), null === b ? [2] : [4, this._processTypesPartVisibility(b)]; case 1: return c.sent(), [2] } }) }) }; a.prototype._processTypesPartVisibility = function (a) {
                    return __awaiter(this,
                        void 0, void 0, function () { var b, c, d; return __generator(this, function (f) { switch (f.label) { case 0: return b = this._viewer.model, [4, b.getNodeVisibility(a)]; case 1: return c = f.sent(), d = b.hasEffectiveGenericType(a, e.StaticGenericType.IfcSpace), [4, b.setNodesVisibility([a], !c, d ? !1 : null)]; case 2: return f.sent(), [2] } }) })
                }; a.prototype.updateTypesVisibilityIcons = function () {
                    var a = this._viewer.model; a.getGenericTypeIdMap().forEach(function (b, c) {
                        var d = !1, e = !1; b.forEach(function (b) {
                            var c = $("#visibility" + f.ViewTree.separator +
                                f.TypesTree.getComponentPartId(b)); c.removeClass("partHidden"); a.getNodeVisibility(b) ? e = !0 : (d = !0, c.addClass("partHidden"))
                        }); b = $("#visibility" + f.ViewTree.separator + f.TypesTree.getGenericTypeId(c)); b.removeClass(["partHidden", "partialHidden"]); d && e ? b.addClass("partialHidden") : d && b.addClass("partHidden")
                    })
                }; a.prototype._processLayerVisibilityClick = function (a) {
                    return __awaiter(this, void 0, void 0, function () {
                        var b, c, d, f; return __generator(this, function (g) {
                            switch (g.label) {
                                case 0: b = this._parseVisibilityLayerName(a);
                                    if (!b) return [2]; c = !1; d = this._viewer.model.getNodesFromLayerName(b, !0); if (null === d) return [3, 2]; for (f = 0; f < d.length && !(c = c || this._viewer.model.getNodeVisibility(d[f])); ++f); e._filterActiveSheetNodeIds(this._viewer, d); return 0 < d.length ? [4, this._viewer.model.setNodesVisibility(d, !c, null)] : [3, 2]; case 1: g.sent(), g.label = 2; case 2: return [2]
                            }
                        })
                    })
                }; a.prototype._processLayerPartVisibilityClick = function (a) {
                    return __awaiter(this, void 0, void 0, function () {
                        var b, c, d; return __generator(this, function (f) {
                            switch (f.label) {
                                case 0: b =
                                    this._parseVisibilityLayerNodeId(a); if (null === b) return [3, 2]; c = this._viewer.model.getNodeVisibility(b); d = [b]; e._filterActiveSheetNodeIds(this._viewer, d); return 0 < d.length ? [4, this._viewer.model.setNodesVisibility(d, !c, null)] : [3, 2]; case 1: f.sent(), f.label = 2; case 2: return [2]
                            }
                        })
                    })
                }; a.prototype.updateLayersVisibilityIcons = function () {
                    var a = this; this._viewer.model.getUniqueLayerNames().forEach(function (b) {
                        var c = a._viewer.model.getNodesFromLayerName(b, !0); if (null !== c) {
                            for (var d = !1, e = !1, g = 0; g < c.length; ++g) {
                                var h =
                                    c[g]; a._viewer.model.isDrawing() || (h = a._viewer.model.getNodeParent(c[g])); null !== h && (h = $("#visibility" + f.ViewTree.separator + f.LayersTree.getLayerPartId(h)), h.removeClass("partHidden"), a._viewer.model.getNodeVisibility(c[g]) ? e = !0 : (d = !0, h.addClass("partHidden")))
                            } b = $("#visibility" + f.ViewTree.separator + f.LayersTree.getLayerId(b)); b.removeClass(["partHidden", "partialHidden"]); d && e ? b.addClass("partialHidden") : d && b.addClass("partHidden")
                        }
                    })
                }; a.prototype.updateMeasurementVisibilityIcons = function () {
                    for (var a =
                        this._viewer.measureManager.getAllMeasurements(), b = 0, c = 0; c < a.length; c++) { var e = a[c], h = e.getVisibility(); e = $("#visibility" + f.ViewTree.separator + "measurement" + f.ViewTree.separator + e._getId()); h ? e.removeClass("partHidden") : (b++, e.addClass("partHidden")) } c = $("#visibility" + f.ViewTree.separator + "measurementitems"); b === a.length ? (c.removeClass("partialHidden"), c.addClass("partHidden")) : 0 < b && b < a.length ? (c.removeClass("partHidden"), c.addClass("partialHidden")) : (c.removeClass("partialHidden"), c.removeClass("partHidden"));
                    this._viewer.markupManager.updateLater()
                }; a.prototype._init = function () {
                    var a = this, b = document.getElementById(this._elementId); if (null === b) throw new e.CommunicatorError("container is null"); this._partVisibilityRoot.classList.add("ui-visibility-toggle"); b.appendChild(this._partVisibilityRoot); this._listRoot.classList.add("ui-modeltree"); this._listRoot.classList.add("ui-modeltree-item"); b.appendChild(this._listRoot); $(b).on("click", ".ui-modeltree-label", function (b) { a._processLabelClick(b) }); $(b).on("click",
                        ".ui-modeltree-expandNode", function (b) { a._processExpandClick(b) }); $(b).on("click", ".ui-modeltree-partVisibility-icon", function (b) { return __awaiter(a, void 0, void 0, function () { var a, c, d; return __generator(this, function (e) { switch (e.label) { case 0: return a = jQuery(b.target), c = a.closest(".ui-modeltree-item"), d = c[0].id, [4, this._processVisibilityClick(d)]; case 1: return e.sent(), [2] } }) }) }); $(b).on("click", "#contextMenuButton", function (b) { a._processLabelContext(b) }); $(b).on("mouseup", ".ui-modeltree-label, .ui-modeltree-icon",
                            function (b) { 2 === b.button && a._processLabelContext(b) }); $(b).on("touchstart", function (b) { a._touchTimer.set(1E3, function () { var c = b.originalEvent; c = new e.Point2(c.touches[0].pageX, c.touches[0].pageY); a._processLabelContext(b, c) }) }); $(b).on("touchmove", function (b) { a._touchTimer.clear() }); $(b).on("touchend", function (b) { a._touchTimer.clear() }); $(b).on("contextmenu", ".ui-modeltree-label", function (a) { a.preventDefault() })
                }; a.prototype._getChildItemsFromModelTreeItem = function (a) {
                    a = a.children(".ui-modeltree-children").children(".ui-modeltree-item");
                    return $.makeArray(a)
                }; a._ScrollToItemDelayMs = 10; return a
            }(); m.TreeControl = a
        })(f.Control || (f.Control = {}))
    })(e.Ui || (e.Ui = {}))
})(Communicator || (Communicator = {}));
(function (e) {
    (function (f) {
        var m = function () { return function (c, a) { this.genericType = c; this.index = a } }(), h = function (c) {
            function a(a, d, e) { a = c.call(this, a, d, e) || this; a._containerMap = new Map; a._initEvents(); return a } __extends(a, c); a.prototype._initEvents = function () {
                var a = this, c = function () { return a._onNewModel() }; this._viewer.setCallbacks({ modelStructureReady: c, modelLoaded: c, selectionArray: function (b) { a._tree.updateSelection(b) }, visibilityChanged: function () { a._tree.updateTypesVisibilityIcons() } }); this._tree.registerCallback("selectItem",
                    function (b, c) { a._onTreeSelectItem(b, c) }); this._tree.registerCallback("loadChildren", function (b) { a._loadNodeChildren(b) })
            }; a.prototype._onTreeSelectItem = function (a, c) { void 0 === c && (c = e.SelectionMode.Set); null !== document.getElementById(a) && (a = this._splitHtmlId(a)[1], "IFC" === a.substr(0, 3) ? this._selectIfcComponent(a, c) : this._viewer.selectPart(parseInt(a, 10), c)) }; a.prototype._loadNodeChildren = function (a) { switch (this._splitHtmlId(a)[0]) { case "types": this._loadGenericTypeChildren(a); break; case "container": this._loadContainerChildren(a) } };
            a.prototype._loadGenericTypeChildren = function (a) { var b = this, c = this._splitHtmlId(a)[1], e = this._ifcNodesMap.get(c); void 0 !== e && (e.size > this._maxNodeChildrenSize ? this._createContainerNodes(a, c) : e.forEach(function (c) { b._addChildPart(c, a) })) }; a.prototype._loadContainerChildren = function (a) {
                var b = this._splitHtmlId(a)[1]; b = this._containerMap.get(b); if (void 0 !== b) {
                    var c = b.index; b = this._ifcNodesMap.get(b.genericType); if (void 0 !== b) {
                        var f = c * this._maxNodeChildrenSize, h = b.size - f < this._maxNodeChildrenSize ? b.size :
                            f + this._maxNodeChildrenSize; c = 0; for (b = e.Util.setToArray(b).slice(f, h); c < b.length; c++)this._addChildPart(b[c], a)
                    }
                }
            }; a.prototype._addChildPart = function (b, c) { var d = a.getComponentPartId(b); b = this._viewer.model.getNodeName(b); this._tree.addChild(b, d, c, "part", !1, f.Desktop.Tree.Types) }; a.prototype._createContainerNodes = function (b, c) {
                var d = this._ifcNodesMap.get(c); if (void 0 === d) console.assert(!1, "Tried to create a container for nodes of a non-existent GenericType"); else for (var h = 0; h < d.size; h += this._maxNodeChildrenSize) {
                    var k =
                        "Child nodes " + h + " - " + (h + this._maxNodeChildrenSize > d.size ? d.size - 1 : h + this._maxNodeChildrenSize - 1), u = h / this._maxNodeChildrenSize, C = e.UUID.create(); this._tree.addChild(k, a.getContainerId(C), b, "container", !0, f.Desktop.Tree.Types); k = new m(c, u); this._containerMap.set(C, k)
                }
            }; a.prototype._selectIfcComponent = function (a, c) { this._viewer.selectionManager.selectType(a, c) }; a.prototype._onNewModel = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var b, c = this; return __generator(this, function (d) {
                        b = this._viewer.model;
                        this._tree.clear(); this._ifcNodesMap = b.getGenericTypeIdMap(); this._ifcNodesMap.forEach(function (b, d) { b = a.getGenericTypeId(d); c._tree.appendTopLevelElement(d, b, "assembly", !0, !1) }); 0 === this._ifcNodesMap.size ? this.hideTab() : this.showTab(); return [2]
                    })
                })
            }; a.getComponentPartId = function (a) { return "typespart" + f.ViewTree.separator + a }; a.getGenericTypeId = function (a) { return "types" + f.ViewTree.separator + a }; a.getContainerId = function (a) { return "container" + f.ModelTree.separator + a }; return a
        }(f.ViewTree); f.TypesTree =
            h
    })(e.Ui || (e.Ui = {}))
})(Communicator || (Communicator = {}));
