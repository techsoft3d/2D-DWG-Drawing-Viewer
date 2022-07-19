import { getContainerEndpoint } from "./get_endpoint.js";

const createViewer = (modelName, models, containerId, hwp_version) => {
    return new Promise(function (resolve, reject) {
        if (!STREAM_CACHE_API || !HWP_VERSION) {
            console.log('Ensure values for HWP_VERSION and STREAM_CACHE_API are set.');
        }

        getContainerEndpoint({HWP_VERSION: hwp_version}).then((data) => {
            if (data === 'error: 429 - Too many requests') {
                window.location.replace("/error/too-many-requests");
            }
            const viewer = new Communicator.WebViewer({
                containerId: containerId,
                endpointUri: data.endpoint_uri,
                model: modelName,
                boundingPreviewMode: "none",
                enginePath: HWP_ENGINE_PATH
            });
            
            resolve(viewer);
            if (data.collection_id) window.onbeforeunload = () => { $.get('/api/delete_collection?collection=' + [data.collection_id]); };
        });
    })
}

export default createViewer;
