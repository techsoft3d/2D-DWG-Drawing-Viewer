// @ts-check
/// <reference path="hoops_web_viewer.d.ts" />
/// <reference path="communicator_server_integration.d.ts" />

var Sample = {
    /** @param {string} name */
    _getParameterByName: function (name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(window.location.search);
        return results === null ? null : decodeURIComponent(results[1]);
    },

    _getStreamingMode: function () {
        var streamingMode = Sample._getParameterByName("streamingMode");
        switch (streamingMode) {
            case "interactive":
                return Communicator.StreamingMode.Interactive;
            case "all":
                return Communicator.StreamingMode.All;
            case "ondemand":
                return Communicator.StreamingMode.OnDemand;
        }

        return Communicator.StreamingMode.Interactive;
    },

    _getRenderingLocationString: function () {
        var val = Sample._getParameterByName("viewer");
        return val === "ssr" ? "ssr" : "csr";
    },

    _getRendererType: function () {
        var val = Sample._getRenderingLocationString();
        return val === "ssr" ? Communicator.RendererType.Server : Communicator.RendererType.Client;
    },

    _getLayout: function () {
        return Sample._getParameterByName("layout");
    },

    _getModel: function () {
        var modelName =
            Sample._getParameterByName("model") || Sample._getParameterByName("instance");
        return modelName;
    },

    _getMemoryLimit: function () {
        var memoryLimit = Sample._getParameterByName("memoryLimit");
        return memoryLimit === null ? 0 : parseInt(memoryLimit);
    },

    getDisableFloorplan: function () {
        if (typeof SC_DISABLE_AUTOMATIC_FLOORPLAN_OVERLAY !== "undefined")
            return SC_DISABLE_AUTOMATIC_FLOORPLAN_OVERLAY;

        var disableFp = Sample._getParameterByName("disableAutomaticFloorplanOverlay");
        return disableFp === null ? false : disableFp === "true";
    },

    _getProxy: function () {
        var proxy = Sample._getParameterByName("proxy");
        return proxy !== null;
    },

    /** URL parameter "connect". Valid values are "broker" or (default)"direct" */
    _getConnectType: function () {
        var connect = Sample._getParameterByName("connect");
        return connect === "broker" ? "broker" : "direct";
    },

    /** @param {string} endpoint */
    _rewrite: function (endpoint) {
        var regex = /([ws]+):\/\/(.*):([0-9]+)/;
        var matches = regex.exec(endpoint);
        if (matches === null) {
            return endpoint;
        }

        var protocol = matches[1];
        var host = matches[2];
        var port = matches[3];

        return protocol + "://" + host + "/" + protocol + "proxy/" + port;
    },

    /** @param {Communicator.WebViewerConfig} config */
    _applyExtraProperties: function (config) {
        var debug = Sample._getParameterByName("debug");
        if (debug !== null && parseInt(debug, 10) !== 0) {
            config._markImplicitNodesOutOfHierarchy = false;
        }

        var defaultMetallicFactor = Sample._getParameterByName("metallicFactor");
        if (defaultMetallicFactor !== null)
            config.defaultMetallicFactor = parseFloat(defaultMetallicFactor);

        var defaultRoughnessFactor = Sample._getParameterByName("roughnessFactor");
        if (defaultRoughnessFactor !== null) {
            config.defaultRoughnessFactor = parseFloat(defaultRoughnessFactor);
        }

        return config;
    },

    /** @param {string} serviceBrokerUri */
    _createBrokerViewer: function (serviceBrokerUri) {
        var rendererType = Sample._getRendererType();

        var serviceBroker = new Communicator.ServiceBroker(serviceBrokerUri);
        var serviceRequest = new Communicator.ServiceRequest(
            rendererType === Communicator.RendererType.Client
                ? Communicator.ServiceClass.CSR_Session
                : Communicator.ServiceClass.SSR_Session
        );

        return serviceBroker.request(serviceRequest).then(
            function (serviceResponse) {
                if (!serviceResponse.getIsOk()) {
                    throw serviceResponse.getReason();
                }
                var serviceProtocol = serviceResponse
                    .getEndpoints()
                    .hasOwnProperty(Communicator.ServiceProtocol.WS)
                    ? Communicator.ServiceProtocol.WS
                    : Communicator.ServiceProtocol.WSS;
                var clientEndpoint = serviceResponse.getEndpoints()[serviceProtocol];

                if (Sample._getProxy()) {
                    clientEndpoint = Sample._rewrite(clientEndpoint);
                }

                /** @type {Communicator.WebViewerConfig} */
                var config = {
                    containerId: "viewerContainer",
                    endpointUri: clientEndpoint,
                    model: Sample._getModel(),
                    rendererType: rendererType,
                    streamingMode: Sample._getStreamingMode(),
                    disableAutomaticFloorplanOverlay: Sample.getDisableFloorplan(),
                };
                Sample._applyExtraProperties(config);
                return new Communicator.WebViewer(config);
            },
            function (serviceResponse) {
                throw "Unable to connect to Service Broker at: " + serviceBrokerUri;
            }
        );
    },

    /** @param {string} scsFile */
    _createScsViewer: function (scsFile) {
        /** @type {Communicator.WebViewerConfig} */
        var config = {
            containerId: "viewerContainer",
            streamingMode: Sample._getStreamingMode(),
        };

        if (scsFile) {
            config.endpointUri = scsFile;
        } else {
            config.empty = true;
        }

        Sample._applyExtraProperties(config);
        var viewer = new Communicator.WebViewer(config);

        return Promise.resolve(viewer);
    },

    _createEmptyViewer: function () {
        return Sample._createScsViewer(null);
    },

    /** Creates a viewer that will directly connect to a server using a websocket URI.
     * @param {string} uri */
    _createDirectConnectViewer: function (uriRoot) {
        var renderingLocation = Sample._getRenderingLocationString();
        var fullUri = uriRoot + "?renderingLocation=" + renderingLocation;

        /** @type {Communicator.WebViewerConfig} */
        var config = {
            containerId: "viewerContainer",
            endpointUri: fullUri,
            model: Sample._getModel(),
            rendererType: Sample._getRendererType(),
            streamingMode: Sample._getStreamingMode(),
            memoryLimit: Sample._getMemoryLimit(),
        };
        Sample._applyExtraProperties(config);
        var viewer = new Communicator.WebViewer(config);

        return Promise.resolve(viewer);
    },

    /** @param {string} stylesheetUrl */
    _addStylesheet: function (stylesheetUrl) {
        var link = document.createElement("link");
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("type", "text/css");
        link.setAttribute("href", stylesheetUrl);
        document.getElementsByTagName("head")[0].appendChild(link);
    },

    screenConfiguration: Communicator.ScreenConfiguration.Desktop,

    _checkforMobile: function () {
        var layout = Sample._getLayout();
        if (layout === "mobile") {
            Sample._addStylesheet("css/Mobile.css");
            Sample.screenConfiguration = Communicator.ScreenConfiguration.Mobile;
        } else {
            Sample.screenConfiguration = Communicator.ScreenConfiguration.Desktop;
        }
    },

    createViewer: function () {
        Sample._checkforMobile();

        var scsFile = Sample._getParameterByName("scs");

        // The scHost/scPort parameters are intended to be used primarily for debugging
        var scHost = Sample._getParameterByName("scHost");
        var scPort = Sample._getParameterByName("scPort") || "9999";

        // Use a broker style connection if specified
        var useBrokerParam = Sample._getParameterByName("broker");
        var useBroker = useBrokerParam && useBrokerParam === "true";

        if (scsFile) {
            // SCS loading is handled via a web-server
            return Sample._createScsViewer(scsFile);
        } else if (!Sample._getModel()) {
            // This case happens when a page is first loaded and is thus important
            return Sample._createEmptyViewer();
        } else if (scHost) {
            // A debugging override ability that allows a direct ws connection to a specified
            // host and port. Not suitable for production. Doesn't use SSL
            return Sample._createDirectConnectViewer("ws://" + scHost + ":" + scPort);
        } else if (useBroker) {
            // The broker connection approach is a request/response handshake. The client will
            // thus contact the broker first and "request" a viewer session. The broker will
            // respond with a URI to use for that session which can then be given to a the
            // HOOPS web viewer. This approach allows the middleman broker to add a layer
            // of control. This does, however, typically add a few hundred milliseconds to the
            // viewer request process, and also may require more ports to be opened.

            // Allow port override via the `brokerPort` parameter, otherwise use the default.
            // The default should match the server config `spanwnServerPort` value.
            var brokerPort = Sample._getParameterByName("brokerPort") || 11182;
            var brokerUri =
                window.location.protocol + "//" + window.location.hostname + ":" + brokerPort;
            return Sample._createBrokerViewer(brokerUri);
        } else {
            // The default connection is to rely on the web-server proxy ability. This in found
            // in the server config as `fileServerProxyViewerConnections` which must be 'true'
            // for this approach to work. Alternatively, the spawn-server (default port 11182)
            // also accepts direct web-socket connections, so it could be used here if our
            // web-server is disabled, or the `fileServerProxyViewerConnections` is turned off,
            // and if its corresponding port is opened.
            // Note that while the spawn-server supports direct connection via a `ws[s}://` style
            // URL and thus it might be more efficient to bypass using the `window.location.port`
            // and instead use 11182, that would require port 11182 to be visible. Doing it
            // using `window.location.port` means only one port (11180) needs to be accessible
            // via the firewall and can still support multiple viewers.

            // Allow port override via the 'wsPort' parameter, otherwise use the web-server port.
            var wsPort = Sample._getParameterByName("wsPort") || window.location.port;

            // Use SSL if it's enabled
            var wsProtocol = window.location.protocol.substring(0, 5) === "https" ? "wss" : "ws";
            var wsUriRoot = wsProtocol + "://" + window.location.hostname + ":" + wsPort;
            return Sample._createDirectConnectViewer(wsUriRoot);
        }
    },
};
