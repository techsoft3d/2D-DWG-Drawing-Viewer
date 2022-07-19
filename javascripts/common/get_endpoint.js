// GET ENDPOINT
// This function is a one-size-fits-all solution for retrieving session tokens from the
// Communicator service and returning them to the frontend. It expects a single object as its argument,
// the contents of which determine how the API will respond. It returns a promise containing, if the
// parameters were correct, the response from CaaS.
//
// FOR A SINGLE MODEL:
// Your object to getEndpoint should have two data members, type: "model", and model: <model-name>.
// ex. getEndpoint({type: "model", model: "microengine"}).then((data) => { ... });
//
// FOR A MODEL COLLECTION:
// Your object should have three arguments. type: "collection", models: [list, of, models], and initial: <any>.
// The "initial" parameter is not important, but must be a valid model that exists for the CaaS API call to succeed.
// ex. getEndpoint({type: "collection", models: ["modelOne", "modelTwo"], initial: "modelOne"}).then((data) => { ... });

export const getEndpoint = (args) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("POST", "/api/request_session");
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = () => {
      if (request.status != 200) {
        reject(`ERROR: ${request.responseText}`);
      }
      resolve(JSON.parse(request.responseText));
    };
    request.send(JSON.stringify(args));
  });
};

export const getContainerEndpoint = (args) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    // This version is not used - it comes from `args`, which means HWP vresion is 1/4?
    if (!HWP_VERSION || !STREAM_CACHE_API) {
      reject(
        "This method should only be invoked from an EJS file with ENV Values for:\n\r HWP_VERSION \n\r STREAM_CACHE_API"
      );
    }
    let hwp_version = HWP_VERSION;
    if (args) {
      hwp_version = args.HWP_VERSION || HWP_VERSION;
    }

    const data = {
      version: hwp_version,
    };

    // THIS needs to be environment specific...
    request.open("POST", STREAM_CACHE_API + "/session");
    request.setRequestHeader("Content-Type", "application/json");

    request.onload = () => {
      if (request.status != 200) {
        reject(`ERROR: ${request.responseText}`);
      }
      resolve(JSON.parse(request.responseText));
    };

    request.send(JSON.stringify(data));
  });
};

export const HWP_VERSION = "2022.1.0";
export const HWP_VIEWER_PATH = `https://cdn.jsdelivr.net/gh/techsoft3d/hoops-web-viewer@${HWP_VERSION}/hoops_web_viewer.js`;
export const HWP_ENGINE_PATH = `https://cdn.jsdelivr.net/gh/techsoft3d/hoops-web-viewer@${HWP_VERSION}`;
