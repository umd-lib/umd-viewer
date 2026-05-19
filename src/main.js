import Mirador from 'mirador'
import { miradorImageToolsPlugin } from 'mirador-image-tools'
import canvasNavigationPlugin from 'mirador-canvasnavigation'

var params = new URLSearchParams(window.location.search)
var manifestURI = params.get('manifest')
var index = Number.parseInt(params.get('n'))
var query = params.get('q')

if (manifestURI) {
  document.getElementById('app').innerHTML = '<p>Loading...</p>'
  var miradorConfig = {
    // id selector where Mirador should be instantiated
    id: 'app',
    window: {
      // prevent the user from closing this window
      allowClose: false,
      allowMaximize: false,
      defaultSideBarPanel: 'info',
      // draw annotations even if we are not on the annotation panel
      forceDrawAnnotations: true,
      highlightAllAnnotations: true,
      // Configure which panels are visible in WindowSideBarButtons
      panels: {
        info: true,
        attribution: true,
        canvas: true,
        annotations: true,
        search: true,
        layers: true,
      },
      sideBarOpenByDefault: true,
      views: [
        { key: 'single' },
        { key: 'gallery' },
        { key: 'book' },
        { key: 'scroll' },
      ],
    },
    workspace: {
      type: 'mosaic',
    },
    // Remove extra workspace settings
    workspaceControlPanel: {
      enabled: false,
    },
    windows: [{
      manifestId: query ? manifestURI + '?q=' + query : manifestURI,
      canvasIndex: index,
      imageToolsEnabled: true,
      view: 'single',
    }],
  }
  var miradorInstance = Mirador.viewer(
    miradorConfig,
    // plugins
    [
      miradorImageToolsPlugin,
      canvasNavigationPlugin,
    ]
  );
}
