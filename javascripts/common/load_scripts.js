const loadScripts = () => {
  // Load common scripts and Communicator Scripts.
  const HWP_VERSION = "2022.1.0";

  // URL of files to load.
  const files = [
    `https://cdn.jsdelivr.net/gh/techsoft3d/hoops-web-viewer@${HWP_VERSION}/hoops_web_viewer.js?v=${HWP_VERSION}`,
    "/javascripts/communicator_scripts/web_viewer_ui.js?v=2022.1.0",
    "/javascripts/communicator_scripts/communicator_server_integration.js?v=2022.1.0",
    "/javascripts/communicator_scripts/sample.js?v=2022.1.0",
  ];

  files.forEach((url) => {
    console.log("loading files.");
    jQuery.ajax({
      url: url,
      dataType: "script",
      success: () => {
        console.log("loaded!");
      },
      async: true,
    });
  });
};

loadScripts();
